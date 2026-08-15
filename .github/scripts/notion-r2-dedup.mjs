import crypto from 'node:crypto';

export function isTemporaryNotionAssetUrl(url) {
  const text = String(url || '').trim();
  if (!text) return false;
  return (
    /notionusercontent\.com/i.test(text) ||
    /prod-files-secure\.s3\./i.test(text) ||
    /[?&]X-Amz-Expires=/i.test(text) ||
    /[?&]exp=/i.test(text)
  );
}

export function extractUrlsFromMarkdownImages(markdown) {
  const source = String(markdown || '');
  const urls = new Set();

  const markdownImagePattern = /!\[[^\]]*?\]\((.*?)\)/g;
  source.replace(markdownImagePattern, (_, rawUrl) => {
    let candidate = String(rawUrl || '').trim();
    if (!candidate) return '';

    if (candidate.startsWith('<')) {
      const end = candidate.indexOf('>');
      if (end > 0) {
        candidate = candidate.slice(1, end);
      }
    } else if (/\s/.test(candidate)) {
      candidate = candidate.split(/\s+/)[0];
    }

    candidate = candidate.trim();
    if (candidate) {
      urls.add(candidate);
    }
    return '';
  });

  const htmlImagePattern = /<img\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>/gi;
  source.replace(htmlImagePattern, (_, rawUrl) => {
    const candidate = String(rawUrl || '').trim();
    if (candidate) {
      urls.add(candidate);
    }
    return '';
  });

  return [...urls];
}

export function hasTemporaryNotionImageUrl(markdown) {
  return extractUrlsFromMarkdownImages(markdown).some(isTemporaryNotionAssetUrl);
}

export function buildStableRemoteImageSourceSha1(sourceUrl) {
  const source = String(sourceUrl || '').trim();
  const stableSource = source.replace(/[?#].*$/, '') || source;
  return crypto.createHash('sha1').update(stableSource).digest('hex');
}

export function normalizeR2SourceSha1Metadata(metadata) {
  if (!metadata || typeof metadata !== 'object') return '';
  const raw =
    metadata['notion-source-sha1'] ||
    metadata.notionSourceSha1 ||
    metadata['x-amz-meta-notion-source-sha1'] ||
    '';
  const value = String(raw || '').trim().toLowerCase();
  return /^[0-9a-f]{40}$/.test(value) ? value : '';
}

export function isS3ObjectNotFoundError(error) {
  const status = Number(error?.$metadata?.httpStatusCode);
  const name = String(error?.name || error?.Code || '').toLowerCase();
  return status === 404 || name === 'notfound' || name === 'nosuchkey';
}

export function isExpiredNotionAssetResponse(status, bodyText) {
  if (Number(status) !== 403) return false;
  const text = String(bodyText || '');
  return (
    /request has expired/i.test(text) ||
    /<Code>RequestExpired<\/Code>/i.test(text) ||
    /<Code>ExpiredToken<\/Code>/i.test(text)
  );
}

export function canReuseLegacyR2ObjectAfterExpiredSource(existingObject, existingSourceUrlSha1) {
  return Boolean(existingObject?.exists && !existingSourceUrlSha1);
}

export function createNotionR2UploadCache() {
  return {
    sourceUrlCache: new Map(),
    objectHeadCache: new Map(),
    stats: {
      sourceCacheHits: 0,
      headRequests: 0,
      reusedBySourceHash: 0,
      uploads: 0,
      expiredSourceFallbacks: 0,
    },
  };
}

export function getNotionR2SourceUrlCache(uploadCache) {
  if (!uploadCache) return null;
  if (typeof uploadCache.has === 'function' && typeof uploadCache.get === 'function') {
    return uploadCache;
  }
  const cache = uploadCache.sourceUrlCache;
  if (!cache || typeof cache.has !== 'function' || typeof cache.get !== 'function') return null;
  return cache;
}

export function getNotionR2ObjectHeadCache(uploadCache) {
  if (!uploadCache || typeof uploadCache !== 'object') return null;
  const cache = uploadCache.objectHeadCache;
  if (!cache || typeof cache.has !== 'function' || typeof cache.get !== 'function') return null;
  return cache;
}

export function getNotionR2UploadStats(uploadCache) {
  if (!uploadCache || typeof uploadCache !== 'object') return null;
  const stats = uploadCache.stats;
  return stats && typeof stats === 'object' ? stats : null;
}

export function incrementNotionR2UploadStat(uploadCache, name) {
  const stats = getNotionR2UploadStats(uploadCache);
  if (!stats || !Object.hasOwn(stats, name)) return;
  stats[name] += 1;
}
