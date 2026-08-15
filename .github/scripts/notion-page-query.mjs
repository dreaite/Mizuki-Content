const USED_PROPERTY_CONFIG_KEYS = [
  'titleProperty',
  'typeProperty',
  'createTimeProperty',
  'updatedDateProperty',
  'updateTimeProperty',
  'summaryProperty',
  'slugProperty',
  'urlProperty',
  'liveDemoProperty',
  'techStackProperty',
  'featuredProperty',
  'tagsProperty',
  'categoryProperty',
  'statusProperty',
];

const REQUIRED_PROJECTED_PROPERTY_KEYS = [
  ['type', 'typeProperty'],
  ['status', 'statusProperty'],
  ['slug', 'slugProperty'],
];

function normalizePropertyName(value) {
  return String(value || '').trim();
}

function isPropertyObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function findProperty(properties, propertyName) {
  if (!isPropertyObject(properties)) return undefined;
  return Object.prototype.hasOwnProperty.call(properties, propertyName)
    ? properties[propertyName]
    : undefined;
}

export function buildFilterProperties(config = {}) {
  const filterProperties = [];
  const seen = new Set();

  for (const propertyName of [
    'title',
    ...USED_PROPERTY_CONFIG_KEYS.map((key) => config?.[key]),
  ]) {
    const normalizedName = normalizePropertyName(propertyName);
    if (!normalizedName || seen.has(normalizedName)) continue;

    seen.add(normalizedName);
    filterProperties.push(normalizedName);
  }

  return filterProperties;
}

export function validateProjectedPages(pages, config = {}) {
  if (!Array.isArray(pages)) {
    throw new TypeError('Projected Notion pages must be an array.');
  }

  for (const page of pages) {
    const pageId = normalizePropertyName(page?.id) || '(unknown page)';
    const properties = page?.properties;

    if (!normalizePropertyName(page?.id) || !normalizePropertyName(page?.last_edited_time)) {
      throw new Error(
        `Projected Notion page ${pageId} is missing id or last_edited_time metadata.`
      );
    }

    if (!isPropertyObject(properties)) {
      throw new Error(`Projected Notion page ${pageId} is missing a properties object.`);
    }

    const hasTitleProperty = Object.values(properties).some(
      (property) => isPropertyObject(property) && property.type === 'title'
    );
    if (!hasTitleProperty) {
      throw new Error(`Projected Notion page ${pageId} is missing a title-type property.`);
    }

    const missingProperties = [];
    for (const [label, configKey] of REQUIRED_PROJECTED_PROPERTY_KEYS) {
      const propertyName = normalizePropertyName(config?.[configKey]);
      if (!propertyName) {
        missingProperties.push(`${label} (config.${configKey} is empty)`);
        continue;
      }

      if (!isPropertyObject(findProperty(properties, propertyName))) {
        missingProperties.push(`${label} (${propertyName})`);
      }
    }

    if (missingProperties.length > 0) {
      throw new Error(
        `Projected Notion page ${pageId} is missing required property object(s): ${missingProperties.join(', ')}.`
      );
    }
  }

  return pages;
}

export function assertCompleteNotionQueryResponse(response) {
  if (response?.request_status?.type !== 'incomplete') return response;

  const reason = String(response.request_status.incomplete_reason || 'unknown');
  throw new Error(
    `Notion query returned an incomplete result set (${reason}); refusing to reconcile local outputs.`
  );
}

export async function fetchAllPagesWithProjectionFallback({
  fetchPages,
  filterProperties,
  validate,
  onFallback,
}) {
  if (typeof fetchPages !== 'function') {
    throw new TypeError('fetchPages must be a function.');
  }
  if (typeof validate !== 'function') {
    throw new TypeError('validate must be a function.');
  }
  if (onFallback != null && typeof onFallback !== 'function') {
    throw new TypeError('onFallback must be a function when provided.');
  }

  // Deliberately keep the fetch outside the validation catch. A pagination or
  // network error must fail the run instead of turning a partial response into
  // an apparently successful fallback.
  const projectedPages = await fetchPages(filterProperties);

  try {
    await validate(projectedPages);
    return projectedPages;
  } catch (validationError) {
    if (onFallback) {
      await onFallback(validationError);
    }
  }

  // Validation failure is the only fallback trigger. The unprojected fetch and
  // its validation are each attempted once and errors propagate unchanged.
  const unprojectedPages = await fetchPages(undefined);
  await validate(unprojectedPages);
  return unprojectedPages;
}
