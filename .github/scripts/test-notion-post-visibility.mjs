import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

import {
  getInvisibleTakeoverRelativePaths,
  getPostVariantLanguageCode,
  getPostPublicationState,
  isGeneratedPostTranslation,
  isPostFileVariantOf,
  registerPostOutputPaths,
  shouldDeletePostFile,
} from './notion-post-visibility.mjs';

assert.deepEqual(getPostPublicationState('Published'), {
  normalizedStatus: 'published',
  draft: false,
  invisible: false,
});
assert.deepEqual(getPostPublicationState(' Draft '), {
  normalizedStatus: 'draft',
  draft: true,
  invisible: false,
});
assert.deepEqual(getPostPublicationState(' Invisible '), {
  normalizedStatus: 'invisible',
  draft: false,
  invisible: true,
});

const claimedPostRelativePaths = new Set();
const seenRelativePaths = new Set();
const plannedInvisibleSourceRelativePaths = new Set();
registerPostOutputPaths({
  relativePath: 'guide/intro.md',
  invisible: true,
  claimedPostRelativePaths,
  seenRelativePaths,
  invisibleSourceRelativePaths: plannedInvisibleSourceRelativePaths,
});
assert.equal(claimedPostRelativePaths.size, 0);
assert.equal(seenRelativePaths.size, 0);
assert.deepEqual([...plannedInvisibleSourceRelativePaths], ['guide/intro.md']);
assert.doesNotThrow(() =>
  registerPostOutputPaths({
    relativePath: 'guide/intro.md',
    invisible: true,
    claimedPostRelativePaths,
    seenRelativePaths,
    invisibleSourceRelativePaths: plannedInvisibleSourceRelativePaths,
  })
);
assert.doesNotThrow(() =>
  registerPostOutputPaths({
    relativePath: 'guide/intro.md',
    translationRelativePaths: ['guide/intro.en.md'],
    invisible: false,
    claimedPostRelativePaths,
    seenRelativePaths,
    invisibleSourceRelativePaths: plannedInvisibleSourceRelativePaths,
  })
);
assert.deepEqual([...seenRelativePaths], ['guide/intro.md', 'guide/intro.en.md']);
assert.deepEqual(
  [...getInvisibleTakeoverRelativePaths({
    seenRelativePaths,
    invisibleSourceRelativePaths: plannedInvisibleSourceRelativePaths,
  })],
  ['guide/intro.md', 'guide/intro.en.md'],
  'Visible outputs that overlap an Invisible post must be forcibly refreshed.'
);
assert.throws(
  () =>
    registerPostOutputPaths({
      relativePath: 'guide/intro.md',
      invisible: false,
      claimedPostRelativePaths,
      seenRelativePaths,
      invisibleSourceRelativePaths: plannedInvisibleSourceRelativePaths,
    }),
  /Duplicate slug\/permalink/
);

const translationCollisionClaims = new Set();
registerPostOutputPaths({
  relativePath: 'guide/base.md',
  translationRelativePaths: ['guide/base.en.md'],
  invisible: false,
  claimedPostRelativePaths: translationCollisionClaims,
  seenRelativePaths: new Set(),
  invisibleSourceRelativePaths: new Set(),
});
assert.throws(
  () =>
    registerPostOutputPaths({
      relativePath: 'guide/base.en.md',
      invisible: false,
      claimedPostRelativePaths: translationCollisionClaims,
      seenRelativePaths: new Set(),
      invisibleSourceRelativePaths: new Set(),
    }),
  /Duplicate slug\/permalink/
);

assert.equal(isPostFileVariantOf('guide/intro.md', 'guide/intro.md'), true);
assert.equal(isPostFileVariantOf('guide/intro.en.md', 'guide/intro.md'), true);
assert.equal(isPostFileVariantOf('guide/intro.zh-cn.md', 'guide/intro.md'), true);
assert.equal(isPostFileVariantOf('guide/intro-notes.md', 'guide/intro.md'), false);
assert.equal(isPostFileVariantOf('guide/other.en.md', 'guide/intro.md'), false);
assert.equal(getPostVariantLanguageCode('guide/intro.en.md', 'guide/intro.md'), 'en');
assert.equal(getPostVariantLanguageCode('guide/intro.md', 'guide/intro.md'), null);

const invisibleSourceRelativePaths = new Set(['guide/intro.md']);
assert.equal(
  isGeneratedPostTranslation({
    relativePath: 'guide/intro.ja.md',
    invisibleSourceRelativePaths,
    lang: 'ja',
    permalink: '',
  }),
  true
);
assert.equal(
  isGeneratedPostTranslation({
    relativePath: 'guide/intro.notes.md',
    invisibleSourceRelativePaths,
    lang: '',
    permalink: 'intro.notes',
  }),
  false,
  'A separate source post must not be mistaken for a generated translation.'
);

assert.equal(
  shouldDeletePostFile({
    relativePath: 'guide/intro.md',
    seenRelativePaths: new Set(),
    invisibleSourceRelativePaths,
    deleteMissing: false,
  }),
  true,
  'Invisible source files must be deleted even when deleteMissing is disabled.'
);
assert.equal(
  shouldDeletePostFile({
    relativePath: 'guide/intro.ja.md',
    seenRelativePaths: new Set(),
    invisibleSourceRelativePaths,
    deleteMissing: false,
    generatedTranslation: true,
  }),
  true,
  'Invisible translated variants must be deleted even when no longer configured.'
);
assert.equal(
  shouldDeletePostFile({
    relativePath: 'guide/intro.notes.md',
    seenRelativePaths: new Set(),
    invisibleSourceRelativePaths,
    deleteMissing: false,
    generatedTranslation: false,
  }),
  false,
  'A similarly named manual source file must not be deleted as a translation.'
);
assert.equal(
  shouldDeletePostFile({
    relativePath: 'guide/unrelated.md',
    seenRelativePaths: new Set(),
    invisibleSourceRelativePaths,
    deleteMissing: false,
  }),
  false
);
assert.equal(
  shouldDeletePostFile({
    relativePath: 'guide/unrelated.md',
    seenRelativePaths: new Set(),
    invisibleSourceRelativePaths,
    deleteMissing: true,
  }),
  true
);
assert.equal(
  shouldDeletePostFile({
    relativePath: 'guide/intro.en.md',
    seenRelativePaths: new Set(['guide/intro.en.md']),
    invisibleSourceRelativePaths,
    deleteMissing: true,
  }),
  false,
  'A path claimed by another visible post must not be deleted.'
);
assert.equal(
  shouldDeletePostFile({
    relativePath: 'guide/intro.en.md',
    seenRelativePaths: new Set(['guide/intro.en.md']),
    invisibleSourceRelativePaths,
    forceDeleteRelativePaths: new Set(['guide/intro.en.md']),
    deleteMissing: true,
  }),
  true,
  'An Invisible takeover path must be deleted before visible regeneration so failures stay closed.'
);

const syncSource = await fs.readFile(new URL('./sync-notion-posts.mjs', import.meta.url), 'utf8');
const mainIndex = syncSource.indexOf('async function main()');
const invisibleCleanupIndex = syncSource.indexOf('deletePostOutputFiles({', mainIndex);
const mainPageLoopIndex = syncSource.indexOf('for (const page of pages)', mainIndex);
const mainSource = syncSource.slice(mainIndex);
const bootstrapBranchIndex = mainSource.indexOf('if (BOOTSTRAP_SYNC_INDEX_ONLY)');
const bodyPrefetchIndex = mainSource.indexOf('const postBodyReads = await preparePostBodyReads');
const mainInvisibleBranch =
  mainSource.match(/if \(plannedMeta\.invisible\) \{(?<body>[\s\S]*?)\n      \}/)?.groups?.body || '';
assert.match(mainInvisibleBranch, /continue;/, 'Invisible posts must stop before body generation.');
assert.ok(
  mainSource.indexOf('if (plannedMeta.invisible)') <
    mainSource.indexOf('const refreshState = postBodyReads.statesByPageId.get(page.id)'),
  'Invisible posts must be excluded before any source file or translation is generated.'
);
assert.match(
  syncSource,
  /\.filter\(\(plan\) => !plan\.meta\.invisible\)/,
  'Invisible posts must never enter concurrent body prefetch.'
);
assert.match(syncSource, /shouldDeletePostFile\(\{/);
assert.match(syncSource, /isGeneratedPostTranslation\(\{/);
assert.match(syncSource, /lang: extractFrontMatterField\(markdown, 'lang'\)/);
assert.match(syncSource, /permalink: extractFrontMatterField\(markdown, 'permalink'\)/);
assert.match(syncSource, /await fs\.rm\(filePath\)/);
assert.match(
  syncSource,
  /forceDeleteRelativePaths\.size === 0/,
  'Historical paths must keep cleanup active even when deleteMissing is disabled.'
);
assert.match(syncSource, /takeoverRelativePaths\.has\(plan\.relativePath\)/);
assert.match(
  syncSource,
  /takeoverRelativePaths\.has\(translationTarget\.relativePath\) \|\|\s*!cacheCurrent/,
  'An index miss must retry existing translations after a partial prior run.'
);
assert.match(syncSource, /getHistoricalNotionOutputPaths\(/);
assert.match(syncSource, /getNotionOutputPathOwners\(/);
assert.match(
  syncSource,
  /validatePageTypesForReconciliation\(projectedPages\)/,
  'Unreadable type values must abort before any cleanup.'
);
assert.match(
  syncSource,
  /historicalPageId\) => historicalPageId !== pageId/,
  'A current path claimed by a different historical page must be deleted before refresh.'
);
assert.match(
  syncSource,
  /deletePostOutputFiles\(\{[\s\S]*?forceDeleteRelativePaths,[\s\S]*?deleteMissing:/
);
assert.match(syncSource, /syncCheckpointState\.pushedCount \+= 1;/);
assert.match(syncSource, /await writeSyncCheckpointMarker\(syncCheckpointState\.pushedCount\);/);
assert.ok(
  bootstrapBranchIndex >= 0 && bootstrapBranchIndex < bodyPrefetchIndex,
  'Index bootstrap must finish before any Post body prefetch can start.'
);
assert.match(
  mainSource,
  /Bootstrap index complete\.[\s\S]*?bodyReads=0, translations=0/,
  'Index bootstrap must explicitly remain body- and translation-free.'
);
assert.ok(
  invisibleCleanupIndex >= 0 && invisibleCleanupIndex < mainPageLoopIndex,
  'Invisible output cleanup must happen before processing any post body or translation.'
);

console.log('notion post visibility checks passed');
