import crypto from 'node:crypto';

export const DATA_TRANSLATION_CACHE_VERSION = 2;

const DATA_LOCALE_ALIASES = new Map([
  ['zh', 'zh_CN'],
  ['zh-cn', 'zh_CN'],
  ['zh-hans', 'zh_CN'],
  ['cn', 'zh_CN'],
  ['en', 'en'],
  ['en-us', 'en'],
  ['en-gb', 'en'],
  ['ja', 'ja'],
  ['ja-jp', 'ja'],
  ['jp', 'ja'],
  ['zh-tw', 'zh_TW'],
  ['zh-hant', 'zh_TW'],
  ['tw', 'zh_TW'],
]);

function normalizeLanguageCode(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/_/g, '-');
}

export function toDataLocale(value) {
  const normalized = normalizeLanguageCode(value);
  const locale = DATA_LOCALE_ALIASES.get(normalized);
  if (!locale) {
    throw new Error(
      `Unsupported data translation language: ${value || '(empty)'}. Supported languages: zh-CN, en, ja, zh-TW.`
    );
  }
  return locale;
}

function unwrapSingleFencedBlock(value) {
  const text = String(value || '').trim();
  const match = text.match(/^```(?:json)?\s*\n([\s\S]*?)\n```$/i);
  return match ? String(match[1] || '').trim() : text;
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function validateSourceFields(fields, label) {
  if (!isPlainObject(fields) || Object.keys(fields).length === 0) {
    throw new Error(`${label} must contain at least one translatable field.`);
  }

  for (const [field, value] of Object.entries(fields)) {
    if (typeof value !== 'string') {
      throw new Error(`${label}.${field} must be a string.`);
    }
  }
}

function validateTranslatedFields(candidate, sourceFields, label) {
  if (!isPlainObject(candidate)) {
    throw new Error(`${label} must be an object.`);
  }

  const translated = {};
  for (const [field, sourceValue] of Object.entries(sourceFields)) {
    const translatedValue = candidate[field];
    if (typeof translatedValue !== 'string') {
      throw new Error(`${label}.${field} must be a string.`);
    }
    if (sourceValue.trim() && !translatedValue.trim()) {
      throw new Error(`${label}.${field} must not be empty.`);
    }
    translated[field] = translatedValue;
  }
  return translated;
}

function buildSourceHash(kind, fields) {
  return crypto
    .createHash('sha256')
    .update(JSON.stringify({ kind, fields }))
    .digest('hex');
}

export function createDataTranslationState(
  records,
  previousCache,
  { sourceLanguage, targetLanguages, translationRevision = 'structured-data-v1' }
) {
  const sourceLocale = toDataLocale(sourceLanguage);
  const normalizedRevision = String(translationRevision || '').trim();
  if (!normalizedRevision) {
    throw new Error('Data translation revision must not be empty.');
  }
  const targetLocales = [
    ...new Set((targetLanguages || []).map(toDataLocale).filter((locale) => locale !== sourceLocale)),
  ];
  const previousEntries =
    previousCache?.version === DATA_TRANSLATION_CACHE_VERSION &&
    previousCache?.sourceLanguage === sourceLocale &&
    previousCache?.translationRevision === normalizedRevision &&
    isPlainObject(previousCache?.entries)
      ? previousCache.entries
      : {};

  const entries = {};
  const jobsByLanguage = Object.fromEntries(targetLocales.map((locale) => [locale, []]));
  const fieldsByKey = new Map();
  const seenKeys = new Set();

  for (const record of records) {
    const key = String(record?.key || '').trim();
    const kind = String(record?.kind || '').trim();
    if (!key || !kind) {
      throw new Error('Every data translation record must include a key and kind.');
    }
    if (seenKeys.has(key)) {
      throw new Error(`Duplicate data translation key: ${key}`);
    }
    seenKeys.add(key);

    validateSourceFields(record.fields, `record ${key}`);
    fieldsByKey.set(key, record.fields);

    const sourceHash = buildSourceHash(kind, record.fields);
    const previousEntry = previousEntries[key];
    const canReuse = previousEntry?.kind === kind && previousEntry?.sourceHash === sourceHash;
    const translations = {};

    for (const locale of targetLocales) {
      const cachedTranslation = canReuse ? previousEntry?.translations?.[locale] : undefined;
      if (cachedTranslation) {
        try {
          translations[locale] = validateTranslatedFields(
            cachedTranslation,
            record.fields,
            `cache entry ${key}.${locale}`
          );
          continue;
        } catch {
          // Invalid cached entries are regenerated below.
        }
      }

      jobsByLanguage[locale].push({
        key,
        kind,
        ...record.fields,
      });
    }

    entries[key] = {
      kind,
      sourceHash,
      translations,
    };
  }

  return {
    sourceLocale,
    targetLocales,
    jobsByLanguage,
    fieldsByKey,
    cache: {
      version: DATA_TRANSLATION_CACHE_VERSION,
      sourceLanguage: sourceLocale,
      translationRevision: normalizedRevision,
      targetLanguages: targetLocales,
      entries,
    },
  };
}

export function createDataTranslationBatches(
  jobs,
  { maxItems = 20, maxChars = 12_000 } = {}
) {
  const itemLimit = Math.max(1, Number.parseInt(String(maxItems), 10) || 20);
  const charLimit = Math.max(1, Number.parseInt(String(maxChars), 10) || 12_000);
  const batches = [];
  let currentBatch = [];
  let currentChars = JSON.stringify({ items: [] }).length;

  for (const job of jobs || []) {
    const serializedJobChars = JSON.stringify(job).length;
    if (JSON.stringify({ items: [job] }).length > charLimit) {
      throw new Error(
        `Data translation item ${job?.key || '(unknown)'} is ${serializedJobChars} JSON character(s), exceeding NOTION_DATA_TRANSLATION_MAX_CHARS=${charLimit}.`
      );
    }
    const jobChars = serializedJobChars + (currentBatch.length > 0 ? 1 : 0);
    if (
      currentBatch.length > 0 &&
      (currentBatch.length >= itemLimit || currentChars + jobChars > charLimit)
    ) {
      batches.push(currentBatch);
      currentBatch = [];
      currentChars = JSON.stringify({ items: [] }).length;
    }

    currentBatch.push(job);
    currentChars += serializedJobChars + (currentBatch.length > 1 ? 1 : 0);
  }

  if (currentBatch.length > 0) {
    batches.push(currentBatch);
  }
  return batches;
}

export function applyDataTranslationResponse(
  state,
  language,
  rawResponse,
  expectedJobs
) {
  const locale = toDataLocale(language);
  const pendingJobs = state.jobsByLanguage[locale] || [];
  const jobs = expectedJobs || pendingJobs;
  if (jobs.length === 0) {
    return;
  }

  const pendingKeys = new Set(pendingJobs.map((job) => job.key));
  for (const job of jobs) {
    if (!pendingKeys.has(job.key)) {
      throw new Error(
        `Data translation batch for ${locale} contains a non-pending key: ${job.key}`
      );
    }
  }

  let parsed;
  try {
    parsed = JSON.parse(unwrapSingleFencedBlock(rawResponse));
  } catch (error) {
    throw new Error(`Data translation response for ${locale} is not valid JSON: ${error.message}`, {
      cause: error,
    });
  }

  const responseItems = Array.isArray(parsed) ? parsed : parsed?.items;
  if (!Array.isArray(responseItems)) {
    throw new Error(`Data translation response for ${locale} must contain an items array.`);
  }
  if (responseItems.length !== jobs.length) {
    throw new Error(
      `Data translation response for ${locale} returned ${responseItems.length} item(s); expected ${jobs.length}.`
    );
  }

  const expectedKeys = new Set(jobs.map((job) => job.key));
  const responseByKey = new Map();
  for (const responseItem of responseItems) {
    const key = String(responseItem?.key || '').trim();
    if (!expectedKeys.has(key)) {
      throw new Error(`Data translation response for ${locale} contains unknown key: ${key || '(empty)'}`);
    }
    if (responseByKey.has(key)) {
      throw new Error(`Data translation response for ${locale} contains duplicate key: ${key}`);
    }
    responseByKey.set(key, responseItem);
  }

  const validatedByKey = new Map();
  for (const job of jobs) {
    const responseItem = responseByKey.get(job.key);
    if (!responseItem) {
      throw new Error(`Data translation response for ${locale} is missing key: ${job.key}`);
    }
    if (responseItem.kind !== job.kind) {
      throw new Error(
        `Data translation response for ${locale} changed kind for ${job.key}: ${responseItem.kind || '(empty)'}`
      );
    }

    const sourceFields = state.fieldsByKey.get(job.key);
    const allowedFields = new Set(['key', 'kind', ...Object.keys(sourceFields)]);
    const unexpectedField = Object.keys(responseItem).find((field) => !allowedFields.has(field));
    if (unexpectedField) {
      throw new Error(
        `Data translation response for ${locale} contains unexpected field ${unexpectedField} for ${job.key}.`
      );
    }
    validatedByKey.set(
      job.key,
      validateTranslatedFields(
        responseItem,
        sourceFields,
        `response item ${job.key}.${locale}`
      )
    );
  }

  for (const [key, translated] of validatedByKey) {
    state.cache.entries[key].translations[locale] = translated;
  }

  const completedKeys = new Set(jobs.map((job) => job.key));
  state.jobsByLanguage[locale] = pendingJobs.filter(
    (job) => !completedKeys.has(job.key)
  );
}

export function getDataTranslations(state, key) {
  return { ...(state.cache.entries[key]?.translations || {}) };
}

export function renderDataTranslationCache(state) {
  return `${JSON.stringify(state.cache, null, 2)}\n`;
}
