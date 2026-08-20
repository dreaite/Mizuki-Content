const FENCE_START_PATTERN = /^(\s*)(`{3,}|~{3,})/;
const EMPTY_BLOCK_PATTERN = /^\s*<empty-block\s*\/>\s*$/i;
const SYNCED_BLOCK_OPEN_PATTERN = /^\s*<(synced_block|synced_block_reference)\b[^>]*>\s*$/i;
const DETAILS_OPEN_PATTERN = /^\s*<details\b[^>]*>\s*$/i;
const TABLE_OPEN_PATTERN = /^\s*<table\b[^>]*>\s*$/i;
const LIST_ITEM_PATTERN = /^(\s*)(?:[-+*]|\d+[.)])\s+/;
const PIPE_TABLE_ROW_PATTERN = /^\s*\|.*\|\s*$/;
const PIPE_TABLE_DELIMITER_PATTERN =
  /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/;

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function stripOneLeadingTab(line) {
  return String(line || '').startsWith('\t') ? line.slice(1) : line;
}

function findContainerEnd(lines, startIndex, tagName) {
  const escapedTag = escapeRegExp(tagName);
  const openPattern = new RegExp(`^\\s*<${escapedTag}\\b[^>]*>\\s*$`, 'i');
  const closePattern = new RegExp(`^\\s*</${escapedTag}>\\s*$`, 'i');
  let depth = 0;

  for (let index = startIndex; index < lines.length; index += 1) {
    if (openPattern.test(lines[index])) depth += 1;
    if (!closePattern.test(lines[index])) continue;
    depth -= 1;
    if (depth === 0) return index;
  }

  return -1;
}

function readFenceBlock(lines, startIndex) {
  const openMatch = lines[startIndex].match(FENCE_START_PATTERN);
  if (!openMatch) return null;

  const marker = openMatch[2];
  const closePattern = new RegExp(`^\\s*${escapeRegExp(marker[0])}{${marker.length},}\\s*$`);
  for (let index = startIndex + 1; index < lines.length; index += 1) {
    if (closePattern.test(lines[index])) {
      const blockLines = lines.slice(startIndex, index + 1);
      const contentLines = blockLines
        .slice(1, -1)
        .map((line) => line.trim() ? line : '');
      const alreadyIndented = !openMatch[1] || contentLines
        .filter(Boolean)
        .every((line) => line.startsWith(openMatch[1]));
      const normalizedContent = alreadyIndented
        ? contentLines
        : contentLines.map((line) => line ? `${openMatch[1]}${line}` : '');
      return {
        endIndex: index,
        value: [blockLines[0], ...normalizedContent, blockLines.at(-1)].join('\n'),
      };
    }
  }

  return {
    endIndex: lines.length - 1,
    value: lines.slice(startIndex).join('\n'),
  };
}

function readEquationBlock(lines, startIndex) {
  if (lines[startIndex].trim() !== '$$') return null;

  for (let index = startIndex + 1; index < lines.length; index += 1) {
    if (lines[index].trim() === '$$') {
      return {
        endIndex: index,
        value: lines.slice(startIndex, index + 1).join('\n'),
      };
    }
  }

  return {
    endIndex: startIndex,
    value: lines[startIndex],
  };
}

function readNoticeAttribute(line) {
  const match = String(line || '').match(/\bnotice=(?:"([^"]*)"|'([^']*)'|“([^”]*)”)/i);
  return match?.[1] || match?.[2] || match?.[3] || '';
}

function readPipeTableBlock(lines, startIndex) {
  if (!PIPE_TABLE_ROW_PATTERN.test(lines[startIndex])) return null;
  if (!PIPE_TABLE_DELIMITER_PATTERN.test(lines[startIndex + 1] || '')) return null;

  let endIndex = startIndex + 1;
  while (PIPE_TABLE_ROW_PATTERN.test(lines[endIndex + 1] || '')) {
    endIndex += 1;
  }

  return {
    endIndex,
    value: lines.slice(startIndex, endIndex + 1).join('\n'),
  };
}

function joinBlocks(blocks) {
  let output = '';
  let previousBlock = '';

  for (const block of blocks.filter(Boolean)) {
    if (!output) {
      output = block;
      previousBlock = block;
      continue;
    }

    const previousListItem = previousBlock.match(LIST_ITEM_PATTERN);
    const currentListItem = block.match(LIST_ITEM_PATTERN);
    const separator = previousListItem && currentListItem ? '\n' : '\n\n';
    output += `${separator}${block}`;
    previousBlock = block;
  }

  return output.trim();
}

function normalizeDetailsBlock(lines, startIndex, endIndex) {
  const openLine = lines[startIndex].trimEnd();
  const closeLine = lines[endIndex].trimEnd();
  const innerLines = lines.slice(startIndex + 1, endIndex);
  const summaryIndex = innerLines.findIndex((line) => /^\s*<summary\b/i.test(line));
  const output = [openLine];

  let contentLines = innerLines;
  if (summaryIndex >= 0) {
    output.push(innerLines[summaryIndex].trim());
    contentLines = innerLines.filter((_, index) => index !== summaryIndex);
  }

  const normalizedContent = normalizeBlockSequence(contentLines.map(stripOneLeadingTab));
  if (normalizedContent) output.push('', normalizedContent, '');
  output.push(closeLine);
  return output.join('\n');
}

function normalizeSyncedBlock(lines, startIndex, endIndex, tagName) {
  const contentLines = lines
    .slice(startIndex + 1, endIndex)
    .map(stripOneLeadingTab);
  const normalizedContent = normalizeBlockSequence(contentLines);
  if (normalizedContent) return normalizedContent;

  if (tagName.toLowerCase() === 'synced_block_reference') {
    const notice = readNoticeAttribute(lines[startIndex]);
    if (notice) return `> ${notice}`;
  }

  return '';
}

function normalizeBlockSequence(lines) {
  const blocks = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trimEnd();
    if (!line.trim() || EMPTY_BLOCK_PATTERN.test(line)) continue;

    const fenceBlock = readFenceBlock(lines, index);
    if (fenceBlock) {
      blocks.push(fenceBlock.value.trimEnd());
      index = fenceBlock.endIndex;
      continue;
    }

    const equationBlock = readEquationBlock(lines, index);
    if (equationBlock) {
      blocks.push(equationBlock.value.trimEnd());
      index = equationBlock.endIndex;
      continue;
    }

    const pipeTableBlock = readPipeTableBlock(lines, index);
    if (pipeTableBlock) {
      blocks.push(pipeTableBlock.value.trimEnd());
      index = pipeTableBlock.endIndex;
      continue;
    }

    const syncedMatch = line.match(SYNCED_BLOCK_OPEN_PATTERN);
    if (syncedMatch) {
      const endIndex = findContainerEnd(lines, index, syncedMatch[1]);
      if (endIndex >= 0) {
        const normalized = normalizeSyncedBlock(lines, index, endIndex, syncedMatch[1]);
        if (normalized) blocks.push(normalized);
        index = endIndex;
        continue;
      }
    }

    if (DETAILS_OPEN_PATTERN.test(line)) {
      const endIndex = findContainerEnd(lines, index, 'details');
      if (endIndex >= 0) {
        blocks.push(normalizeDetailsBlock(lines, index, endIndex));
        index = endIndex;
        continue;
      }
    }

    if (TABLE_OPEN_PATTERN.test(line)) {
      const endIndex = findContainerEnd(lines, index, 'table');
      if (endIndex >= 0) {
        blocks.push(lines.slice(index, endIndex + 1).join('\n').trimEnd());
        index = endIndex;
        continue;
      }
    }

    blocks.push(line);
  }

  return joinBlocks(blocks);
}

export function normalizeNotionMarkdownForCommonMark(markdown) {
  const source = String(markdown || '').replace(/\r\n?/g, '\n');
  if (!source.trim()) return '';
  return normalizeBlockSequence(source.split('\n'));
}

export function normalizeNotionMarkdownDocument(markdownDocument) {
  const source = String(markdownDocument || '').replace(/\r\n?/g, '\n');
  const frontMatterMatch = source.match(/^---\n[\s\S]*?\n---(?:\n|$)/);
  const hadTrailingNewline = source.endsWith('\n');
  const frontMatter = frontMatterMatch?.[0] || '';
  const body = frontMatter ? source.slice(frontMatter.length) : source;
  const normalizedBody = normalizeNotionMarkdownForCommonMark(body);
  const result = frontMatter
    ? `${frontMatter}${normalizedBody ? `\n${normalizedBody}` : ''}`
    : normalizedBody;
  return hadTrailingNewline && result ? `${result}\n` : result;
}
