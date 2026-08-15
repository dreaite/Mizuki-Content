import assert from 'node:assert/strict';

import {
  buildStableRemoteImageSourceSha1,
  canReuseLegacyR2ObjectAfterExpiredSource,
  createNotionR2UploadCache,
  incrementNotionR2UploadStat,
  isExpiredNotionAssetResponse,
  isS3ObjectNotFoundError,
  normalizeR2SourceSha1Metadata,
} from './notion-r2-dedup.mjs';

const firstSignedUrl =
  'https://prod-files-secure.s3.us-west-2.amazonaws.com/workspace/file/logo.svg?X-Amz-Date=20260815T170000Z&X-Amz-Signature=first';
const refreshedSignedUrl =
  'https://prod-files-secure.s3.us-west-2.amazonaws.com/workspace/file/logo.svg?X-Amz-Date=20260815T180000Z&X-Amz-Signature=second';
const replacementUrl =
  'https://prod-files-secure.s3.us-west-2.amazonaws.com/workspace/other-file/logo.svg?X-Amz-Date=20260815T180000Z';

const stableSha1 = buildStableRemoteImageSourceSha1(firstSignedUrl);
assert.equal(stableSha1, buildStableRemoteImageSourceSha1(refreshedSignedUrl));
assert.notEqual(stableSha1, buildStableRemoteImageSourceSha1(replacementUrl));
assert.equal(normalizeR2SourceSha1Metadata({ 'notion-source-sha1': stableSha1 }), stableSha1);
assert.equal(normalizeR2SourceSha1Metadata({ notionSourceSha1: stableSha1.toUpperCase() }), stableSha1);
assert.equal(normalizeR2SourceSha1Metadata({ 'notion-source-sha1': 'invalid' }), '');

assert.equal(isS3ObjectNotFoundError({ $metadata: { httpStatusCode: 404 } }), true);
assert.equal(isS3ObjectNotFoundError({ name: 'NoSuchKey' }), true);
assert.equal(isS3ObjectNotFoundError({ $metadata: { httpStatusCode: 500 } }), false);
assert.equal(isExpiredNotionAssetResponse(403, '<Code>AccessDenied</Code> Request has expired'), true);
assert.equal(isExpiredNotionAssetResponse(403, '<Code>RequestExpired</Code>'), true);
assert.equal(isExpiredNotionAssetResponse(403, '<Code>ExpiredToken</Code>'), true);
assert.equal(isExpiredNotionAssetResponse(403, '<Code>AccessDenied</Code>'), false);
assert.equal(isExpiredNotionAssetResponse(500, 'Request has expired'), false);
assert.equal(canReuseLegacyR2ObjectAfterExpiredSource({ exists: true }, ''), true);
assert.equal(canReuseLegacyR2ObjectAfterExpiredSource({ exists: true }, stableSha1), false);
assert.equal(canReuseLegacyR2ObjectAfterExpiredSource({ exists: false }, ''), false);

const cache = createNotionR2UploadCache();
assert.equal(cache.sourceUrlCache.size, 0);
assert.equal(cache.objectHeadCache.size, 0);
incrementNotionR2UploadStat(cache, 'reusedBySourceHash');
assert.equal(cache.stats.reusedBySourceHash, 1);

console.log('notion R2 dedup checks passed');
