function toUnixMs(value) {
  const text = String(value || '').trim();
  if (!text) return 0;
  const parsed = new Date(text);
  if (Number.isNaN(parsed.getTime())) return 0;
  return parsed.getTime();
}

function sortByUpdatedDesc(a, b) {
  return toUnixMs(b.updateTimeIso || b.lastEditedIso) - toUnixMs(a.updateTimeIso || a.lastEditedIso);
}

function normalizeProjectCategory(value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (['web', 'mobile', 'desktop', 'other'].includes(normalized)) return normalized;
  return 'other';
}

function normalizeProjectStatus(value) {
  const normalized = String(value || '').trim().toLowerCase().replace(/\s+/g, '-');
  if (['completed', 'in-progress', 'planned'].includes(normalized)) return normalized;
  return 'planned';
}

function escapeTsString(value) {
  return JSON.stringify(String(value ?? ''));
}

function serializeTsStringArray(values, indent = '\t\t\t') {
  if (!Array.isArray(values) || values.length === 0) return '[]';
  if (values.length <= 2 && values.every((value) => String(value).length < 60)) {
    return `[${values.map((value) => escapeTsString(value)).join(', ')}]`;
  }

  const closingIndent = indent.slice(0, -1) || '';
  return `[\n${values.map((value) => `${indent}${escapeTsString(value)},`).join('\n')}\n${closingIndent}]`;
}

function findTsArrayEnd(source, arrayStart) {
  let bracketDepth = 0;
  let quote = '';
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let index = arrayStart; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (lineComment) {
      if (char === '\n') lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === '*' && next === '/') {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = '';
      }
      continue;
    }

    if (char === '/' && next === '/') {
      lineComment = true;
      index += 1;
      continue;
    }
    if (char === '/' && next === '*') {
      blockComment = true;
      index += 1;
      continue;
    }
    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }
    if (char === '[') {
      bracketDepth += 1;
      continue;
    }
    if (char === ']') {
      bracketDepth -= 1;
      if (bracketDepth === 0) {
        return index + 1;
      }
    }
  }

  throw new Error('Failed to locate the end of the target TS data array.');
}

function extractTsArrayLiteral(fileContent, declarationPattern) {
  const source = String(fileContent || '');
  const match = source.match(declarationPattern);
  if (!match || !match[1]) {
    throw new Error('Failed to locate target array declaration in TS data file.');
  }

  const arrayStart = match.index + match[1].length;
  if (source[arrayStart] !== '[') {
    throw new Error('Target TS data declaration does not start with an array literal.');
  }

  return source.slice(arrayStart, findTsArrayEnd(source, arrayStart));
}

function stripJsonTrailingCommas(source) {
  let result = '';
  let quote = '';
  let escaped = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      result += char;
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = '';
      }
      continue;
    }

    if (char === '"') {
      quote = char;
      result += char;
      continue;
    }

    if (char === ',') {
      let lookahead = index + 1;
      while (/\s/.test(source[lookahead] || '')) lookahead += 1;
      if (source[lookahead] === '}' || source[lookahead] === ']') {
        continue;
      }
    }

    result += char;
  }

  return result;
}

function replaceTsArrayLiteral(fileContent, declarationPattern, newArrayLiteral) {
  const match = fileContent.match(declarationPattern);
  if (!match || !match[1]) {
    throw new Error('Failed to locate target array declaration in TS data file.');
  }

  const arrayStart = match.index + match[1].length;
  if (fileContent[arrayStart] !== '[') {
    throw new Error('Target TS data declaration does not start with an array literal.');
  }

  const arrayEnd = findTsArrayEnd(fileContent, arrayStart);
  let replacementEnd = arrayEnd;
  while (/\s/.test(fileContent[replacementEnd] || '')) {
    replacementEnd += 1;
  }
  if (fileContent[replacementEnd] === ';') {
    replacementEnd += 1;
  }

  return `${fileContent.slice(0, arrayStart)}${newArrayLiteral};${fileContent.slice(replacementEnd)}`;
}

export function extractMarkdownImagesAndText(markdown) {
  const source = String(markdown || '');
  const images = [];

  const markdownImagePattern = /!\[[^\]]*?\]\((.*?)\)/g;
  let withoutImages = source.replace(markdownImagePattern, (_, rawUrl) => {
    const cleanUrl = String(rawUrl || '')
      .trim()
      .replace(/^<|>$/g, '');
    if (cleanUrl) {
      images.push(cleanUrl);
    }
    return '';
  });

  const htmlImagePattern = /<img\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>/gi;
  withoutImages = withoutImages.replace(htmlImagePattern, (_, url) => {
    const cleanUrl = String(url || '').trim();
    if (cleanUrl) {
      images.push(cleanUrl);
    }
    return '';
  });

  withoutImages = withoutImages
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return {
    images: [...new Set(images)],
    text: withoutImages,
  };
}

export function buildFriendItems(friendMetas) {
  const sorted = [...friendMetas].sort(sortByUpdatedDesc);
  return sorted.map((meta, index) => ({
    id: index + 1,
    title: meta.title,
    imgurl: meta.image,
    desc: meta.description,
    siteurl: meta.siteurl,
    tags: Array.isArray(meta.tags) ? meta.tags : [],
  }));
}

export function buildProjectItems(projectMetas) {
  const sorted = [...projectMetas].sort(sortByUpdatedDesc);
  return sorted.map((meta) => {
    const item = {
      _translationKey: `project:${meta.pageId}`,
      id: String(meta.title || ''),
      title: meta.title,
      description: meta.description,
      image: meta.image,
      category: normalizeProjectCategory(meta.category),
      techStack: Array.isArray(meta.techStack) ? meta.techStack : [],
      status: normalizeProjectStatus(meta.statusValue),
      startDate: meta.projectStartDate || '',
    };

    if (meta.liveDemo) item.liveDemo = meta.liveDemo;
    if (meta.sourceCode) item.sourceCode = meta.sourceCode;
    if (meta.projectEndDate) item.endDate = meta.projectEndDate;
    if (typeof meta.featuredValue === 'boolean') item.featured = meta.featuredValue;
    if (Array.isArray(meta.tags) && meta.tags.length > 0) item.tags = meta.tags;

    return item;
  });
}

function serializeFriendsDataArray(items) {
  const lines = ['['];

  for (const item of items) {
    lines.push('\t{');
    lines.push(`\t\tid: ${item.id},`);
    lines.push(`\t\ttitle: ${escapeTsString(item.title)},`);
    lines.push(`\t\timgurl: ${escapeTsString(item.imgurl)},`);
    lines.push(`\t\tdesc: ${escapeTsString(item.desc)},`);
    lines.push(`\t\tsiteurl: ${escapeTsString(item.siteurl)},`);
    lines.push(`\t\ttags: ${serializeTsStringArray(item.tags)},`);
    lines.push('\t},');
  }

  lines.push(']');
  return lines.join('\n');
}

function serializeTranslations(translations, fieldNames) {
  const entries = Object.entries(translations || {}).filter(([, value]) => value);
  if (entries.length === 0) return [];

  const lines = ['\t\ttranslations: {'];
  for (const [language, translation] of entries) {
    lines.push(`\t\t\t${escapeTsString(language)}: {`);
    for (const fieldName of fieldNames) {
      lines.push(`\t\t\t\t${fieldName}: ${escapeTsString(translation[fieldName])},`);
    }
    lines.push('\t\t\t},');
  }
  lines.push('\t\t},');
  return lines;
}

function serializeDiaryDataArray(items) {
  const lines = ['['];

  for (const item of items) {
    lines.push('\t{');
    lines.push(`\t\tid: ${item.id},`);
    lines.push(`\t\tcontent: ${escapeTsString(item.content)},`);
    if (item.lang) lines.push(`\t\tlang: ${escapeTsString(item.lang)},`);
    lines.push(...serializeTranslations(item.translations, ['content']));
    lines.push(`\t\tdate: ${escapeTsString(item.date)},`);
    if (Array.isArray(item.images) && item.images.length > 0) {
      lines.push(`\t\timages: ${serializeTsStringArray(item.images)},`);
    }
    lines.push('\t},');
  }

  lines.push(']');
  return lines.join('\n');
}

function serializeProjectsDataArray(items) {
  const lines = ['['];

  for (const item of items) {
    lines.push('\t{');
    lines.push(`\t\tid: ${escapeTsString(item.id)},`);
    lines.push(`\t\ttitle: ${escapeTsString(item.title)},`);
    lines.push(`\t\tdescription: ${escapeTsString(item.description)},`);
    if (item.lang) lines.push(`\t\tlang: ${escapeTsString(item.lang)},`);
    lines.push(...serializeTranslations(item.translations, ['title', 'description']));
    lines.push(`\t\timage: ${escapeTsString(item.image)},`);
    lines.push(`\t\tcategory: ${escapeTsString(item.category)},`);
    lines.push(`\t\ttechStack: ${serializeTsStringArray(item.techStack)},`);
    lines.push(`\t\tstatus: ${escapeTsString(item.status)},`);
    if (item.liveDemo) lines.push(`\t\tliveDemo: ${escapeTsString(item.liveDemo)},`);
    if (item.sourceCode) lines.push(`\t\tsourceCode: ${escapeTsString(item.sourceCode)},`);
    lines.push(`\t\tstartDate: ${escapeTsString(item.startDate)},`);
    if (item.endDate) lines.push(`\t\tendDate: ${escapeTsString(item.endDate)},`);
    if (typeof item.featured === 'boolean') lines.push(`\t\tfeatured: ${item.featured ? 'true' : 'false'},`);
    if (Array.isArray(item.tags) && item.tags.length > 0) {
      lines.push(`\t\ttags: ${serializeTsStringArray(item.tags)},`);
    }
    lines.push('\t},');
  }

  lines.push(']');
  return lines.join('\n');
}

export function renderFriendsDataTs(fileContent, friendItems) {
  return replaceTsArrayLiteral(
    fileContent,
    /(export const friendsData:\s*FriendItem\[\]\s*=\s*)/,
    serializeFriendsDataArray(friendItems)
  );
}

export function renderDiaryDataTs(fileContent, diaryItems) {
  return replaceTsArrayLiteral(
    fileContent,
    /(const diaryData:\s*DiaryItem\[\]\s*=\s*)/,
    serializeDiaryDataArray(diaryItems)
  );
}

export function parseDiaryDataTs(fileContent) {
  const arrayLiteral = extractTsArrayLiteral(
    fileContent,
    /(const diaryData:\s*DiaryItem\[\]\s*=\s*)/
  );
  const jsonCompatible = stripJsonTrailingCommas(
    arrayLiteral.replace(
      /^(\s*)([A-Za-z_$][A-Za-z0-9_$]*)(\s*:)/gm,
      '$1"$2"$3'
    )
  );

  let parsed;
  try {
    parsed = JSON.parse(jsonCompatible);
  } catch (error) {
    throw new Error(`Failed to parse generated Diary data: ${error.message}`);
  }

  if (!Array.isArray(parsed)) {
    throw new Error('Generated Diary data must contain an array.');
  }
  for (const [index, item] of parsed.entries()) {
    if (
      !item ||
      typeof item !== 'object' ||
      Array.isArray(item) ||
      typeof item.content !== 'string' ||
      typeof item.date !== 'string' ||
      (item.images != null &&
        (!Array.isArray(item.images) ||
          item.images.some((imageUrl) => typeof imageUrl !== 'string')))
    ) {
      throw new Error(`Generated Diary item ${index + 1} is invalid.`);
    }
  }

  return parsed;
}

export function renderProjectsDataTs(fileContent, projectItems) {
  return replaceTsArrayLiteral(
    fileContent,
    /(export const projectsData:\s*Project\[\]\s*=\s*)/,
    serializeProjectsDataArray(projectItems)
  );
}
