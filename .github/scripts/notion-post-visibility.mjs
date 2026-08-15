function normalizeRelativePath(value) {
  return String(value || '')
    .trim()
    .replace(/\\/g, '/')
    .replace(/^\.\/+/, '');
}

export function getPostPublicationState(status) {
  const normalizedStatus = String(status || '').trim().toLowerCase();

  return {
    normalizedStatus,
    draft: normalizedStatus === 'draft',
    invisible: normalizedStatus === 'invisible',
  };
}

export function registerPostOutputPaths({
  relativePath,
  translationRelativePaths = [],
  invisible,
  claimedPostRelativePaths,
  seenRelativePaths,
  invisibleSourceRelativePaths,
}) {
  const normalizedSourcePath = normalizeRelativePath(relativePath);
  if (invisible) {
    invisibleSourceRelativePaths.add(normalizedSourcePath);
    return;
  }

  const normalizedTranslationPaths = translationRelativePaths.map((translationPath) =>
    normalizeRelativePath(translationPath)
  );
  if (claimedPostRelativePaths.has(normalizedSourcePath)) {
    throw new Error(`Duplicate slug/permalink detected for output path: ${normalizedSourcePath}`);
  }
  for (const translatedRelativePath of normalizedTranslationPaths) {
    if (
      translatedRelativePath === normalizedSourcePath ||
      claimedPostRelativePaths.has(translatedRelativePath)
    ) {
      throw new Error(`Duplicate translated output path detected: ${translatedRelativePath}`);
    }
  }

  claimedPostRelativePaths.add(normalizedSourcePath);
  seenRelativePaths.add(normalizedSourcePath);
  for (const translatedRelativePath of normalizedTranslationPaths) {
    claimedPostRelativePaths.add(translatedRelativePath);
    seenRelativePaths.add(translatedRelativePath);
  }
}

export function isPostFileVariantOf(relativePath, sourceRelativePath) {
  const candidate = normalizeRelativePath(relativePath);
  const source = normalizeRelativePath(sourceRelativePath);

  if (!source.toLowerCase().endsWith('.md')) return false;
  if (candidate === source) return true;
  return getPostVariantLanguageCode(candidate, source) !== null;
}

export function getInvisibleTakeoverRelativePaths({
  seenRelativePaths,
  invisibleSourceRelativePaths,
}) {
  const takeoverRelativePaths = new Set();

  for (const seenRelativePath of seenRelativePaths || []) {
    for (const invisibleSourceRelativePath of invisibleSourceRelativePaths || []) {
      if (isPostFileVariantOf(seenRelativePath, invisibleSourceRelativePath)) {
        takeoverRelativePaths.add(normalizeRelativePath(seenRelativePath));
        break;
      }
    }
  }

  return takeoverRelativePaths;
}

export function getPostVariantLanguageCode(relativePath, sourceRelativePath) {
  const candidate = normalizeRelativePath(relativePath);
  const source = normalizeRelativePath(sourceRelativePath);

  if (!source.toLowerCase().endsWith('.md')) return null;
  if (candidate === source) return null;
  if (!candidate.toLowerCase().endsWith('.md')) return null;

  const sourceStem = source.slice(0, -3);
  const variantPrefix = `${sourceStem}.`;
  if (!candidate.startsWith(variantPrefix)) return null;

  const languageCode = candidate.slice(variantPrefix.length, -3);
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(languageCode)
    ? languageCode.toLowerCase()
    : null;
}

export function isGeneratedPostTranslation({
  relativePath,
  invisibleSourceRelativePaths,
  lang,
  permalink,
}) {
  if (String(permalink || '').trim()) return false;

  const normalizedLanguage = String(lang || '')
    .trim()
    .toLowerCase()
    .replace(/_/g, '-');
  if (!normalizedLanguage) return false;

  for (const sourceRelativePath of invisibleSourceRelativePaths || []) {
    if (getPostVariantLanguageCode(relativePath, sourceRelativePath) === normalizedLanguage) {
      return true;
    }
  }

  return false;
}

export function shouldDeletePostFile({
  relativePath,
  seenRelativePaths,
  invisibleSourceRelativePaths,
  forceDeleteRelativePaths,
  deleteMissing,
  generatedTranslation = false,
}) {
  const normalizedRelativePath = normalizeRelativePath(relativePath);
  if (forceDeleteRelativePaths?.has(normalizedRelativePath)) return true;
  if (seenRelativePaths?.has(normalizedRelativePath)) return false;
  if (deleteMissing) return true;

  for (const sourceRelativePath of invisibleSourceRelativePaths || []) {
    if (normalizedRelativePath === normalizeRelativePath(sourceRelativePath)) {
      return true;
    }
    if (
      generatedTranslation &&
      getPostVariantLanguageCode(normalizedRelativePath, sourceRelativePath) !== null
    ) {
      return true;
    }
  }

  return false;
}
