import assert from 'node:assert/strict';

import {
  NOTION_MARKDOWN_READER_DEFAULTS,
  NotionMarkdownReader,
  createBoundedOrderedPrefetch,
  createNotionMarkdownReader,
  createPacedFetch,
  extractCompleteNotionMarkdown,
} from './notion-markdown-reader.mjs';

function completeMarkdown(markdown) {
  return {
    object: 'page_markdown',
    id: 'page-id',
    markdown,
    truncated: false,
    unknown_block_ids: [],
  };
}

async function waitFor(predicate, message) {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (predicate()) return;
    await Promise.resolve();
  }
  assert.fail(message);
}

assert.deepEqual(NOTION_MARKDOWN_READER_DEFAULTS, {
  concurrency: 2,
  minStartIntervalMs: 350,
});

assert.equal(extractCompleteNotionMarkdown(completeMarkdown('# Complete')), '# Complete');
assert.throws(
  () => extractCompleteNotionMarkdown({
    ...completeMarkdown('# Partial'),
    truncated: true,
  }, 'truncated-page'),
  /truncated Markdown for page truncated-page/
);
assert.throws(
  () => extractCompleteNotionMarkdown({
    ...completeMarkdown('# Partial'),
    unknown_block_ids: ['missing-block'],
  }, 'unknown-id-page'),
  /unknown blocks in Markdown for page unknown-id-page/
);
assert.throws(
  () => extractCompleteNotionMarkdown(
    completeMarkdown('# Partial\n<unknown url="..."/>'),
    'unknown-tag-page'
  ),
  /unknown blocks in Markdown for page unknown-tag-page/
);
assert.throws(() => extractCompleteNotionMarkdown({ markdown: '# Invalid' }), /invalid/);

{
  const started = [];
  const deferred = new Map();
  const prefetch = createBoundedOrderedPrefetch({
    items: ['a', 'b', 'c', 'd'],
    concurrency: 2,
    load: (key) => {
      started.push(key);
      return new Promise((resolve) => deferred.set(key, resolve));
    },
  });

  await waitFor(() => started.length === 2, 'Initial bounded prefetch did not start.');
  assert.deepEqual(started, ['a', 'b']);
  deferred.get('a')('A');
  assert.equal(await prefetch.take('a'), 'A');
  await Promise.resolve();
  assert.deepEqual(started, ['a', 'b'], 'No replacement may start while a consumed body is processed.');

  const second = prefetch.take('b');
  await waitFor(() => started.includes('c'), 'The next bounded prefetch did not start.');
  assert.deepEqual(started, ['a', 'b', 'c']);
  deferred.get('b')('B');
  assert.equal(await second, 'B');

  const third = prefetch.take('c');
  await waitFor(() => started.includes('d'), 'The final bounded prefetch did not start.');
  deferred.get('c')('C');
  assert.equal(await third, 'C');
  deferred.get('d')('D');
  assert.equal(await prefetch.take('d'), 'D');
  await assert.rejects(() => prefetch.take('missing'), /order mismatch/);
}

{
  const expectedError = new Error('prefetch failed');
  const prefetch = createBoundedOrderedPrefetch({
    items: ['broken'],
    concurrency: 1,
    load: async () => {
      throw expectedError;
    },
  });
  await assert.rejects(() => prefetch.take('broken'), (error) => error === expectedError);
}

{
  let clock = 0;
  const starts = [];
  const pacedFetch = createPacedFetch({
    fetchImpl: async (url) => {
      starts.push({ url, at: clock });
      return { ok: true, url };
    },
    minStartIntervalMs: 350,
    sleep: async (milliseconds) => {
      clock += milliseconds;
    },
    now: () => clock,
  });

  const responses = await Promise.all([
    pacedFetch('list'),
    pacedFetch('markdown-a'),
    pacedFetch('markdown-b'),
  ]);
  assert.deepEqual(starts, [
    { url: 'list', at: 0 },
    { url: 'markdown-a', at: 350 },
    { url: 'markdown-b', at: 700 },
  ]);
  assert.deepEqual(responses.map((response) => response.url), [
    'list',
    'markdown-a',
    'markdown-b',
  ]);
}

{
  const officialCalls = [];
  const reader = createNotionMarkdownReader({
    officialClient: {
      pages: {
        async retrieveMarkdown(args) {
          officialCalls.push(args);
          return completeMarkdown('# Official');
        },
      },
    },
    minStartIntervalMs: 0,
  });

  assert.equal(await reader.readPage('page-1'), '# Official');
  assert.deepEqual(officialCalls, [{ page_id: 'page-1' }]);
  assert.deepEqual(reader.getStats(), { official: 1 });
}

{
  const officialClient = {
    pages: {
      async retrieveMarkdown({ page_id: pageId }) {
        if (pageId === 'truncated') {
          return { ...completeMarkdown('partial'), truncated: true };
        }
        if (pageId === 'unknown-ids') {
          return { ...completeMarkdown('partial'), unknown_block_ids: ['block-1'] };
        }
        return completeMarkdown('before\n<unknown url="..."/>\nafter');
      },
    },
  };
  const reader = new NotionMarkdownReader({
    officialClient,
    minStartIntervalMs: 0,
  });

  await assert.rejects(
    () => reader.readPage('truncated'),
    /truncated Markdown for page truncated/
  );
  await assert.rejects(
    () => reader.readPage('unknown-ids'),
    /unknown blocks in Markdown for page unknown-ids/
  );
  await assert.rejects(
    () => reader.readPage('unknown-tag'),
    /unknown blocks in Markdown for page unknown-tag/
  );
  assert.deepEqual(reader.stats, { official: 3 });
}

assert.throws(
  () => new NotionMarkdownReader({ officialClient: { pages: {} } }),
  /officialClient\.pages\.retrieveMarkdown must be a function/
);

{
  let clock = 0;
  let active = 0;
  let maxActive = 0;
  const starts = [];
  const sleepCalls = [];
  const pending = new Map();

  const reader = new NotionMarkdownReader({
    officialClient: {
      pages: {
        retrieveMarkdown({ page_id: pageId }) {
          starts.push({ pageId, at: clock });
          active += 1;
          maxActive = Math.max(maxActive, active);

          return new Promise((resolve) => {
            pending.set(pageId, () => {
              active -= 1;
              resolve(completeMarkdown(pageId.toUpperCase()));
            });
          });
        },
      },
    },
    sleep: async (milliseconds) => {
      sleepCalls.push(milliseconds);
      clock += milliseconds;
    },
    now: () => clock,
  });

  const resultPromise = reader.readMany(['a', 'b', 'c', 'd']);
  await waitFor(() => pending.has('a') && pending.has('b'), 'First two reads did not start.');
  assert.equal(active, 2);
  assert.equal(maxActive, 2);
  assert.equal(pending.has('c'), false);

  pending.get('b')();
  pending.delete('b');
  await waitFor(() => pending.has('c'), 'Third read did not start after a slot was released.');
  assert.equal(maxActive, 2);

  pending.get('a')();
  pending.delete('a');
  await waitFor(() => pending.has('d'), 'Fourth read did not start after a slot was released.');
  assert.equal(maxActive, 2);

  pending.get('d')();
  pending.delete('d');
  pending.get('c')();
  pending.delete('c');

  assert.deepEqual(await resultPromise, ['A', 'B', 'C', 'D']);
  assert.deepEqual(
    starts,
    [
      { pageId: 'a', at: 0 },
      { pageId: 'b', at: 350 },
      { pageId: 'c', at: 700 },
      { pageId: 'd', at: 1050 },
    ],
    'Markdown reads must share one pace gate while preserving input result order.'
  );
  assert.deepEqual(sleepCalls, [350, 350, 350]);
  assert.equal(maxActive, 2, 'No more than two Markdown calls may be active at once.');
}

console.log('notion markdown reader checks passed');
