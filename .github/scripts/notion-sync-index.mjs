import crypto from 'node:crypto';

export const NOTION_SYNC_INDEX_VERSION = 1;

function isPlainObject(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function normalizeText(value) {
  return String(value ?? '').trim();
}

function normalizeToken(value) {
  return normalizeText(value).toLowerCase();
}

function stableJsonValue(value) {
  if (Array.isArray(value)) {
    return value.map((item) => {
      const normalized = stableJsonValue(item);
      return normalized === undefined ? null : normalized;
    });
  }

  if (isPlainObject(value)) {
    const normalized = {};
    for (const key of Object.keys(value).sort()) {
      const child = stableJsonValue(value[key]);
      if (child !== undefined) normalized[key] = child;
    }
    return normalized;
  }

  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'boolean' ||
    (typeof value === 'number' && Number.isFinite(value))
  ) {
    return value;
  }

  return undefined;
}

function stableJsonStringify(value, space = 0) {
  return JSON.stringify(stableJsonValue(value), null, space);
}

export function createEmptyNotionSyncIndex() {
  return {
    version: NOTION_SYNC_INDEX_VERSION,
    pages: {},
  };
}

/**
 * Parse an optimization-only index. Any malformed/unknown top-level value is
 * treated as an empty cache so visibility reconciliation never depends on it.
 */
export function parseNotionSyncIndex(value, { onWarning } = {}) {
  let candidate = value;
  const warn = typeof onWarning === 'function' ? onWarning : () => {};

  try {
    if (typeof candidate === 'string') {
      if (!candidate.trim()) return createEmptyNotionSyncIndex();
      candidate = JSON.parse(candidate);
    }

    if (
      !isPlainObject(candidate) ||
      candidate.version !== NOTION_SYNC_INDEX_VERSION ||
      !isPlainObject(candidate.pages)
    ) {
      warn('Notion sync index has an unsupported or malformed schema; using an empty cache.');
      return createEmptyNotionSyncIndex();
    }

    const pages = {};
    for (const pageId of Object.keys(candidate.pages).sort()) {
      const entry = candidate.pages[pageId];
      if (!normalizeText(pageId) || !isPlainObject(entry)) continue;
      const normalizedEntry = stableJsonValue(entry);
      if (isPlainObject(normalizedEntry)) pages[pageId] = normalizedEntry;
    }

    return {
      version: NOTION_SYNC_INDEX_VERSION,
      pages,
    };
  } catch (error) {
    warn(`Failed to parse Notion sync index; using an empty cache: ${error.message}`);
    return createEmptyNotionSyncIndex();
  }
}

export function renderNotionSyncIndex(index) {
  return `${stableJsonStringify(parseNotionSyncIndex(index), 2)}\n`;
}

export function buildNotionPageSignature({
  pageId,
  kind,
  lastEditedTime,
  status = '',
  metadata = {},
}) {
  const normalizedPageId = normalizeText(pageId);
  const normalizedKind = normalizeToken(kind);
  const normalizedLastEditedTime = normalizeText(lastEditedTime);

  if (!normalizedPageId) throw new Error('Cannot build a Notion page signature without pageId.');
  if (!normalizedKind) throw new Error('Cannot build a Notion page signature without kind.');
  if (!normalizedLastEditedTime) {
    throw new Error('Cannot build a Notion page signature without lastEditedTime.');
  }

  const payload = {
    pageId: normalizedPageId,
    kind: normalizedKind,
    lastEditedTime: normalizedLastEditedTime,
    status: normalizeToken(status),
    metadata: stableJsonValue(metadata) ?? null,
  };

  return crypto.createHash('sha256').update(stableJsonStringify(payload)).digest('hex');
}

export function isNotionSyncEntryCurrent(
  entry,
  { pageId, kind, lastEditedTime, signature, renderRevision }
) {
  if (!isPlainObject(entry)) return false;

  const expectedPageId = normalizeText(pageId);
  const expectedKind = normalizeToken(kind);
  const expectedLastEditedTime = normalizeText(lastEditedTime);
  const expectedSignature = normalizeText(signature).toLowerCase();
  const expectedRenderRevision = normalizeText(renderRevision);

  if (
    !expectedPageId ||
    !expectedKind ||
    !expectedLastEditedTime ||
    !expectedSignature ||
    !expectedRenderRevision
  ) {
    return false;
  }

  return (
    normalizeText(entry.pageId) === expectedPageId &&
    normalizeToken(entry.kind) === expectedKind &&
    normalizeText(entry.lastEditedTime) === expectedLastEditedTime &&
    normalizeText(entry.signature).toLowerCase() === expectedSignature &&
    normalizeText(entry.renderRevision) === expectedRenderRevision
  );
}

function normalizeSafeOutputPath(value) {
  let candidate = normalizeText(value).replace(/\\/g, '/');
  if (!candidate || candidate.includes('\0')) return '';
  if (candidate.startsWith('/') || /^[a-z]:\//i.test(candidate)) return '';

  while (candidate.startsWith('./')) candidate = candidate.slice(2);
  const segments = candidate.split('/').filter((segment) => segment && segment !== '.');
  if (segments.length === 0 || segments.some((segment) => segment === '..')) return '';
  return segments.join('/');
}

function normalizeOutputPathList(values) {
  const paths = [];
  const seen = new Set();

  for (const value of Array.isArray(values) ? values : []) {
    const normalized = normalizeSafeOutputPath(value);
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    paths.push(normalized);
  }

  return paths;
}

/**
 * Return every output path previously attributed to a page. Current outputs
 * are included because they become historical as soon as status/type/slug changes.
 */
export function getHistoricalNotionOutputPaths(index, pageId) {
  const parsed =
    isPlainObject(index) &&
    index.version === NOTION_SYNC_INDEX_VERSION &&
    isPlainObject(index.pages)
      ? index
      : parseNotionSyncIndex(index);
  const entry = parsed.pages[normalizeText(pageId)];
  if (!isPlainObject(entry)) return [];

  return normalizeOutputPathList([
    ...(Array.isArray(entry.outputPaths) ? entry.outputPaths : []),
    ...(Array.isArray(entry.historicalOutputPaths) ? entry.historicalOutputPaths : []),
  ]);
}

export function getNotionOutputPathOwners(index, { kind = '' } = {}) {
  const parsed = parseNotionSyncIndex(index);
  const normalizedKind = normalizeToken(kind);
  const ownersByPath = new Map();

  for (const [pageId, entry] of Object.entries(parsed.pages)) {
    if (!isPlainObject(entry)) continue;
    if (normalizedKind && normalizeToken(entry.kind) !== normalizedKind) continue;

    for (const outputPath of getHistoricalNotionOutputPaths(parsed, pageId)) {
      const owners = ownersByPath.get(outputPath) || new Set();
      owners.add(pageId);
      ownersByPath.set(outputPath, owners);
    }
  }

  return ownersByPath;
}

export async function mapWithConcurrency(items, maxConcurrency, mapper) {
  if (typeof mapper !== 'function') {
    throw new TypeError('mapWithConcurrency requires a mapper function.');
  }

  const concurrency = Number(maxConcurrency);
  if (!Number.isInteger(concurrency) || concurrency < 1) {
    throw new RangeError('mapWithConcurrency maxConcurrency must be a positive integer.');
  }

  const values = Array.from(items ?? []);
  if (values.length === 0) return [];

  const results = new Array(values.length);
  let cursor = 0;
  let firstError = null;

  async function worker() {
    while (!firstError) {
      const index = cursor;
      cursor += 1;
      if (index >= values.length) return;

      try {
        results[index] = await mapper(values[index], index, values);
      } catch (error) {
        firstError ??= error;
        return;
      }
    }
  }

  const workerCount = Math.min(concurrency, values.length);
  await Promise.all(Array.from({ length: workerCount }, () => worker()));
  if (firstError) throw firstError;
  return results;
}

function toUnixMs(value) {
  const timestamp = Date.parse(normalizeText(value));
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function getDiaryPageId(meta) {
  return normalizeText(meta?.pageId || meta?.id);
}

function getDiaryLastEditedTime(meta) {
  return normalizeText(meta?.lastEditedIso || meta?.lastEditedTime);
}

function getDiaryDate(meta) {
  return normalizeText(meta?.updateTimeIso || meta?.lastEditedIso || meta?.lastEditedTime);
}

function getDiarySortTimestamp(meta) {
  return toUnixMs(meta?.updateTimeIso) || toUnixMs(meta?.lastEditedIso || meta?.lastEditedTime);
}

function compareDiaryMetas(a, b) {
  const timeDifference = getDiarySortTimestamp(b) - getDiarySortTimestamp(a);
  if (timeDifference !== 0) return timeDifference;

  const aPageId = getDiaryPageId(a);
  const bPageId = getDiaryPageId(b);
  if (aPageId < bPageId) return -1;
  if (aPageId > bPageId) return 1;
  return 0;
}

function normalizeDiarySource(value) {
  if (!isPlainObject(value) || typeof value.content !== 'string') return null;
  const images = value.images == null ? [] : value.images;
  if (!Array.isArray(images) || images.some((image) => typeof image !== 'string')) return null;

  return {
    content: value.content,
    images: [...images],
  };
}

/**
 * Rebuild current Diary items from current list metadata plus a per-page body cache.
 * The current list controls membership, ordering, date, and numeric ids; cache
 * entries can only avoid body loading for an otherwise current page.
 */
export async function rebuildDiaryCache({
  diaryMetas,
  previousIndex,
  renderRevision,
  loadDiarySource,
  canReuseCachedDiarySource = () => true,
  concurrency = 2,
}) {
  if (typeof loadDiarySource !== 'function') {
    throw new TypeError('rebuildDiaryCache requires loadDiarySource.');
  }
  if (typeof canReuseCachedDiarySource !== 'function') {
    throw new TypeError('canReuseCachedDiarySource must be a function.');
  }

  const normalizedRenderRevision = normalizeText(renderRevision);
  if (!normalizedRenderRevision) {
    throw new Error('rebuildDiaryCache requires a non-empty renderRevision.');
  }

  const sortedMetas = [...(diaryMetas || [])].sort(compareDiaryMetas);
  const seenPageIds = new Set();
  for (const meta of sortedMetas) {
    const pageId = getDiaryPageId(meta);
    if (!pageId) throw new Error('Every Diary meta must include pageId.');
    if (seenPageIds.has(pageId)) throw new Error(`Duplicate Diary pageId: ${pageId}`);
    if (!getDiaryLastEditedTime(meta)) {
      throw new Error(`Diary page ${pageId} is missing lastEditedIso/lastEditedTime.`);
    }
    seenPageIds.add(pageId);
  }

  const parsedIndex = parseNotionSyncIndex(previousIndex);
  const rebuilt = await mapWithConcurrency(
    sortedMetas,
    concurrency,
    async (meta) => {
      const pageId = getDiaryPageId(meta);
      const lastEditedTime = getDiaryLastEditedTime(meta);
      const signature = normalizeText(meta.pageSignature) ||
        buildNotionPageSignature({
          pageId,
          kind: 'diary',
          lastEditedTime,
          status: meta.status,
          metadata: meta.signatureMetadata || {},
        });
      const previousEntry = parsedIndex.pages[pageId];
      const cachedSource = normalizeDiarySource(previousEntry?.diarySource);
      let reused = false;
      let source = null;

      if (
        cachedSource &&
        isNotionSyncEntryCurrent(previousEntry, {
          pageId,
          kind: 'diary',
          lastEditedTime,
          signature,
          renderRevision: normalizedRenderRevision,
        }) &&
        await canReuseCachedDiarySource(cachedSource, { meta, entry: previousEntry })
      ) {
        source = cachedSource;
        reused = true;
      } else {
        source = normalizeDiarySource(
          await loadDiarySource(meta, { pageId, signature })
        );
        if (!source) {
          throw new Error(`Diary loader returned an invalid source for page ${pageId}.`);
        }
      }

      return {
        pageId,
        meta,
        source,
        reused,
        entry: {
          kind: 'diary',
          pageId,
          lastEditedTime,
          signature,
          renderRevision: normalizedRenderRevision,
          diarySource: source,
        },
      };
    }
  );

  const entries = {};
  let cacheHits = 0;
  const items = rebuilt.map((result, index) => {
    entries[result.pageId] = result.entry;
    if (result.reused) cacheHits += 1;

    return {
      _translationKey: `diary:${result.pageId}`,
      id: index + 1,
      content: result.source.content,
      date: getDiaryDate(result.meta),
      images: [...result.source.images],
    };
  });

  return {
    items,
    entries,
    cacheHits,
    cacheMisses: rebuilt.length - cacheHits,
  };
}
