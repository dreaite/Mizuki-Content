import assert from 'node:assert/strict';

import {
  NOTION_SYNC_INDEX_VERSION,
  buildDiaryBootstrapEntries,
  buildNotionPageSignature,
  createEmptyNotionSyncIndex,
  getHistoricalNotionOutputPaths,
  getNotionOutputPathOwners,
  isNotionSyncEntryCurrent,
  mapWithConcurrency,
  parseNotionSyncIndex,
  rebuildDiaryCache,
  renderNotionSyncIndex,
} from './notion-sync-index.mjs';

assert.deepEqual(parseNotionSyncIndex('{broken'), createEmptyNotionSyncIndex());
assert.deepEqual(
  parseNotionSyncIndex(JSON.stringify({ version: 999, pages: { stale: {} } })),
  createEmptyNotionSyncIndex(),
  'Unknown index versions must be cold cache misses.'
);
assert.deepEqual(
  parseNotionSyncIndex({ version: NOTION_SYNC_INDEX_VERSION, pages: [] }),
  createEmptyNotionSyncIndex()
);

const unorderedIndex = {
  version: NOTION_SYNC_INDEX_VERSION,
  pages: {
    z: { renderRevision: 'v1', kind: 'post', nested: { z: 1, a: 2 } },
    a: { kind: 'diary', renderRevision: 'v1' },
  },
};
const reorderedIndex = {
  pages: {
    a: { renderRevision: 'v1', kind: 'diary' },
    z: { nested: { a: 2, z: 1 }, kind: 'post', renderRevision: 'v1' },
  },
  version: NOTION_SYNC_INDEX_VERSION,
};
assert.equal(renderNotionSyncIndex(unorderedIndex), renderNotionSyncIndex(reorderedIndex));
assert.ok(renderNotionSyncIndex(unorderedIndex).endsWith('\n'));

const pageSignature = buildNotionPageSignature({
  pageId: 'page-1',
  kind: 'Post',
  lastEditedTime: '2026-08-15T10:00:00.000Z',
  status: ' Published ',
  metadata: { title: 'One', nested: { z: 1, a: 2 } },
});
assert.equal(
  pageSignature,
  buildNotionPageSignature({
    pageId: 'page-1',
    kind: 'post',
    lastEditedTime: '2026-08-15T10:00:00.000Z',
    status: 'published',
    metadata: { nested: { a: 2, z: 1 }, title: 'One' },
  }),
  'Signature must not depend on object key insertion order.'
);
assert.notEqual(
  pageSignature,
  buildNotionPageSignature({
    pageId: 'page-1',
    kind: 'post',
    lastEditedTime: '2026-08-15T10:00:01.000Z',
    status: 'published',
    metadata: { title: 'One', nested: { a: 2, z: 1 } },
  })
);

const currentEntry = {
  pageId: 'page-1',
  kind: 'post',
  lastEditedTime: '2026-08-15T10:00:00.000Z',
  signature: pageSignature,
  renderRevision: 'post-v1',
};
assert.equal(
  isNotionSyncEntryCurrent(currentEntry, {
    pageId: 'page-1',
    kind: 'POST',
    lastEditedTime: '2026-08-15T10:00:00.000Z',
    signature: pageSignature,
    renderRevision: 'post-v1',
  }),
  true
);
assert.equal(
  isNotionSyncEntryCurrent(currentEntry, {
    pageId: 'page-1',
    kind: 'post',
    lastEditedTime: '2026-08-15T10:00:00.000Z',
    signature: pageSignature,
    renderRevision: 'post-v2',
  }),
  false
);

const historyIndex = {
  version: NOTION_SYNC_INDEX_VERSION,
  pages: {
    'page-1': {
      outputPaths: ['posts/new.md', 'posts/new.en.md'],
      historicalOutputPaths: [
        'posts/old.md',
        'posts\\old.ja.md',
        'posts/new.md',
        '../outside.md',
        '/absolute.md',
      ],
    },
  },
};
assert.deepEqual(getHistoricalNotionOutputPaths(historyIndex, 'page-1'), [
  'posts/new.md',
  'posts/new.en.md',
  'posts/old.md',
  'posts/old.ja.md',
]);
assert.deepEqual(getHistoricalNotionOutputPaths(historyIndex, 'missing'), []);
const ownerIndex = {
  version: NOTION_SYNC_INDEX_VERSION,
  pages: {
    old: { kind: 'post', outputPaths: ['posts/taken.md', 'posts/taken.en.md'] },
    older: { kind: 'post', historicalOutputPaths: ['posts/taken.md'] },
    about: { kind: 'about', outputPaths: ['spec/about.md'] },
  },
};
const postOwners = getNotionOutputPathOwners(ownerIndex, { kind: 'post' });
assert.deepEqual([...postOwners.get('posts/taken.md')].sort(), ['old', 'older']);
assert.deepEqual([...postOwners.get('posts/taken.en.md')], ['old']);
assert.equal(postOwners.has('spec/about.md'), false);

let active = 0;
let maximumActive = 0;
const mapped = await mapWithConcurrency([40, 5, 25, 10], 2, async (delay, index) => {
  active += 1;
  maximumActive = Math.max(maximumActive, active);
  await new Promise((resolve) => setTimeout(resolve, delay));
  active -= 1;
  return `item-${index}`;
});
assert.deepEqual(mapped, ['item-0', 'item-1', 'item-2', 'item-3']);
assert.equal(maximumActive, 2, 'mapWithConcurrency must never exceed the requested concurrency.');
await assert.rejects(() => mapWithConcurrency([1], 0, async (value) => value), /positive integer/);

const diaryRevision = 'official-markdown@test|diary-v1|r2=test';
const cachedLastEdited = '2026-08-15T10:00:00.000Z';
function diaryEntry(pageId, lastEditedTime, source) {
  const signature = buildNotionPageSignature({
    pageId,
    kind: 'diary',
    lastEditedTime,
  });
  return {
    kind: 'diary',
    pageId,
    lastEditedTime,
    signature,
    renderRevision: diaryRevision,
    diarySource: source,
  };
}

const bootstrappedDiaryEntries = buildDiaryBootstrapEntries({
  diaryMetas: [
    { pageId: 'b', updateTimeIso: cachedLastEdited, lastEditedIso: cachedLastEdited },
    {
      pageId: 'c',
      updateTimeIso: '2026-08-16T10:00:00.000Z',
      lastEditedIso: '2026-08-16T10:00:00.000Z',
    },
    { pageId: 'a', updateTimeIso: cachedLastEdited, lastEditedIso: cachedLastEdited },
  ],
  diaryItems: [
    {
      id: 1,
      content: 'existing c',
      date: '2026-08-16T10:00:00.000Z',
      images: [],
    },
    {
      id: 2,
      content: 'existing a',
      date: cachedLastEdited,
      images: ['https://cdn.example/a.webp'],
    },
    {
      id: 3,
      content: 'existing b',
      date: cachedLastEdited,
    },
  ],
  renderRevision: diaryRevision,
});
assert.equal(bootstrappedDiaryEntries.c.diarySource.content, 'existing c');
assert.deepEqual(bootstrappedDiaryEntries.a.diarySource.images, [
  'https://cdn.example/a.webp',
]);
assert.equal(bootstrappedDiaryEntries.b.diarySource.content, 'existing b');
assert.throws(
  () => buildDiaryBootstrapEntries({
    diaryMetas: [{ pageId: 'a', lastEditedIso: cachedLastEdited }],
    diaryItems: [],
    renderRevision: diaryRevision,
  }),
  /Notion has 1 item\(s\), but the generated data file has 0/
);
assert.throws(
  () => buildDiaryBootstrapEntries({
    diaryMetas: [{ pageId: 'a', lastEditedIso: cachedLastEdited }],
    diaryItems: [{ id: 1, content: 'wrong date', date: '2026-08-14T00:00:00.000Z' }],
    renderRevision: diaryRevision,
  }),
  /expected date 2026-08-15T10:00:00.000Z/
);

const previousDiaryIndex = {
  version: NOTION_SYNC_INDEX_VERSION,
  pages: {
    a: diaryEntry('a', cachedLastEdited, {
      content: 'cached a',
      images: ['https://cdn.example/a.webp'],
    }),
    b: diaryEntry('b', cachedLastEdited, {
      content: 'stale temporary b',
      images: ['https://prod-files-secure.s3.amazonaws.com/b?X-Amz-Signature=x'],
    }),
    e: diaryEntry('e', cachedLastEdited, {
      content: '[attachment](https://notionusercontent.com/temporary-file?exp=1)',
      images: [],
    }),
  },
};

const loaderCalls = [];
let diaryActive = 0;
let diaryMaximumActive = 0;
const diaryResult = await rebuildDiaryCache({
  diaryMetas: [
    { pageId: 'b', updateTimeIso: cachedLastEdited, lastEditedIso: cachedLastEdited },
    {
      pageId: 'c',
      updateTimeIso: '2026-08-16T10:00:00.000Z',
      lastEditedIso: '2026-08-16T10:00:00.000Z',
    },
    { pageId: 'a', updateTimeIso: cachedLastEdited, lastEditedIso: cachedLastEdited },
    { pageId: 'e', updateTimeIso: cachedLastEdited, lastEditedIso: cachedLastEdited },
    {
      pageId: 'd',
      updateTimeIso: '',
      lastEditedIso: '2026-08-14T10:00:00.000Z',
    },
  ],
  previousIndex: previousDiaryIndex,
  renderRevision: diaryRevision,
  concurrency: 2,
  canReuseCachedDiarySource: (source) =>
    !/prod-files-secure|notionusercontent|[?&](?:X-Amz-|exp=)/i.test(source.content) &&
    source.images.every((url) => !/prod-files-secure|notionusercontent|[?&](?:X-Amz-|exp=)/i.test(url)),
  loadDiarySource: async (meta) => {
    loaderCalls.push(meta.pageId);
    diaryActive += 1;
    diaryMaximumActive = Math.max(diaryMaximumActive, diaryActive);
    await new Promise((resolve) => setTimeout(resolve, 10));
    diaryActive -= 1;
    return {
      content: `loaded ${meta.pageId}`,
      images: [],
    };
  },
});

assert.deepEqual(
  diaryResult.items.map((item) => [item.id, item._translationKey, item.content]),
  [
    [1, 'diary:c', 'loaded c'],
    [2, 'diary:a', 'cached a'],
    [3, 'diary:b', 'loaded b'],
    [4, 'diary:e', 'loaded e'],
    [5, 'diary:d', 'loaded d'],
  ],
  'Diary order must use descending update time and ascending pageId as the deterministic tie-break.'
);
assert.deepEqual(loaderCalls.sort(), ['b', 'c', 'd', 'e']);
assert.equal(diaryResult.cacheHits, 1);
assert.equal(diaryResult.cacheMisses, 4);
assert.equal(diaryMaximumActive, 2);
assert.equal(diaryResult.entries.a.diarySource.content, 'cached a');
assert.equal(diaryResult.entries.b.diarySource.content, 'loaded b');

console.log('notion sync index checks passed');
