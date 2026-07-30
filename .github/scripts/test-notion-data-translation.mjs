import assert from 'node:assert/strict';

import {
  applyDataTranslationResponse,
  createDataTranslationBatches,
  createDataTranslationState,
  getDataTranslations,
  renderDataTranslationCache,
  toDataLocale,
} from './notion-data-translation.mjs';

assert.equal(toDataLocale('zh-cn'), 'zh_CN');
assert.equal(toDataLocale('jp'), 'ja');

const records = [
  {
    key: 'project:one',
    kind: 'project',
    fields: { title: '项目一', description: '中文介绍' },
  },
  {
    key: 'diary:one',
    kind: 'diary',
    fields: { content: '今天很好' },
  },
];

const initialState = createDataTranslationState(records, {}, {
  sourceLanguage: 'zh-cn',
  targetLanguages: ['en', 'ja'],
});
assert.equal(initialState.jobsByLanguage.en.length, 2);
assert.equal(initialState.jobsByLanguage.ja.length, 2);
assert.deepEqual(
  createDataTranslationBatches(initialState.jobsByLanguage.en, {
    maxItems: 1,
    maxChars: 100_000,
  }).map((batch) => batch.map((job) => job.key)),
  [['project:one'], ['diary:one']]
);
assert.throws(
  () =>
    createDataTranslationBatches(
      [{ key: 'diary:large', kind: 'diary', content: 'x'.repeat(100) }],
      { maxItems: 20, maxChars: 50 }
    ),
  /diary:large.*exceeding/
);

applyDataTranslationResponse(
  initialState,
  'en',
  '```json\n{"items":[{"key":"project:one","kind":"project","title":"Project One","description":"English description"},{"key":"diary:one","kind":"diary","content":"Today was good"}]}\n```'
);
assert.deepEqual(getDataTranslations(initialState, 'project:one').en, {
  title: 'Project One',
  description: 'English description',
});
assert.equal(initialState.jobsByLanguage.en.length, 0);

const cachedState = createDataTranslationState(
  records,
  JSON.parse(renderDataTranslationCache(initialState)),
  {
    sourceLanguage: 'zh_CN',
    targetLanguages: ['en', 'ja'],
  }
);
assert.equal(cachedState.jobsByLanguage.en.length, 0);
assert.equal(cachedState.jobsByLanguage.ja.length, 2);

const changedState = createDataTranslationState(
  [{ ...records[0], fields: { ...records[0].fields, description: '已更新' } }],
  JSON.parse(renderDataTranslationCache(initialState)),
  {
    sourceLanguage: 'zh_CN',
    targetLanguages: ['en'],
  }
);
assert.equal(changedState.jobsByLanguage.en.length, 1);
assert.deepEqual(getDataTranslations(changedState, 'project:one'), {});

const revisionChangedState = createDataTranslationState(
  records,
  JSON.parse(renderDataTranslationCache(initialState)),
  {
    sourceLanguage: 'zh_CN',
    targetLanguages: ['en'],
    translationRevision: 'structured-data-v2',
  }
);
assert.equal(revisionChangedState.jobsByLanguage.en.length, 2);

const cacheBeforeInvalidResponse = JSON.stringify(initialState.cache);
assert.throws(
  () =>
    applyDataTranslationResponse(
      initialState,
      'ja',
      '{"items":[{"key":"project:one","kind":"project","title":"プロジェクト","description":"説明"},{"key":"diary:one","kind":"wrong","content":"良い一日"}]}'
    ),
  /changed kind/
);
assert.equal(JSON.stringify(initialState.cache), cacheBeforeInvalidResponse);

const batchedState = createDataTranslationState(records, {}, {
  sourceLanguage: 'zh-cn',
  targetLanguages: ['en'],
});
const [firstBatch, secondBatch] = createDataTranslationBatches(
  batchedState.jobsByLanguage.en,
  { maxItems: 1, maxChars: 100_000 }
);
applyDataTranslationResponse(
  batchedState,
  'en',
  '{"items":[{"key":"project:one","kind":"project","title":"Project One","description":"English description"}]}',
  firstBatch
);
assert.deepEqual(
  batchedState.jobsByLanguage.en.map((job) => job.key),
  ['diary:one']
);
applyDataTranslationResponse(
  batchedState,
  'en',
  '{"items":[{"key":"diary:one","kind":"diary","content":"Today was good"}]}',
  secondBatch
);
assert.equal(batchedState.jobsByLanguage.en.length, 0);

console.log('notion data translation checks passed');
