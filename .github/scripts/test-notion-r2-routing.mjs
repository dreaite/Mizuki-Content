import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const syncSource = await fs.readFile(new URL('./sync-notion-posts.mjs', import.meta.url), 'utf8');
const friendBranch =
  syncSource.match(/if \(type === 'friend'\) \{(?<body>[\s\S]*?)\n    \}/)?.groups?.body || '';

assert.ok(friendBranch, 'Expected to find the Friend routing branch in the Notion sync script.');
assert.match(
  friendBranch,
  /common\.image\s*=\s*normalizeSingleLine\(\s*await resolveCoverImageUrlForMeta\(\s*page,\s*common,\s*notionCoverR2Client,\s*notionR2UploadCache\s*\)\s*\)/,
  'Friend covers must pass through the same R2 resolver as other generated cover fields.'
);

console.log('notion R2 routing checks passed');
