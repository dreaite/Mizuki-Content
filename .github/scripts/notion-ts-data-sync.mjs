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

function replaceTsArrayLiteral(fileContent, declarationPattern, newArrayLiteral) {
  if (!declarationPattern.test(fileContent)) {
    throw new Error('Failed to locate target array declaration in TS data file.');
  }
  return fileContent.replace(declarationPattern, `$1${newArrayLiteral};`);
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

function serializeDiaryDataArray(items) {
  const lines = ['['];

  for (const item of items) {
    lines.push('\t{');
    lines.push(`\t\tid: ${item.id},`);
    lines.push(`\t\tcontent: ${escapeTsString(item.content)},`);
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
    /(export const friendsData:\s*FriendItem\[\]\s*=\s*)\[[\s\S]*?\];/,
    serializeFriendsDataArray(friendItems)
  );
}

export function renderDiaryDataTs(fileContent, diaryItems) {
  return replaceTsArrayLiteral(
    fileContent,
    /(const diaryData:\s*DiaryItem\[\]\s*=\s*)\[[\s\S]*?\];/,
    serializeDiaryDataArray(diaryItems)
  );
}

export function renderProjectsDataTs(fileContent, projectItems) {
  return replaceTsArrayLiteral(
    fileContent,
    /(export const projectsData:\s*Project\[\]\s*=\s*)\[[\s\S]*?\];/,
    serializeProjectsDataArray(projectItems)
  );
}
