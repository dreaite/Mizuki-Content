const DIRECTIVE_START_PATTERN = /^\s*:{2,}[A-Za-z][A-Za-z0-9_-]*\b/;
const DIRECTIVE_CANDIDATE_PATTERN = /^\s*:{2,}[A-Za-z][A-Za-z0-9_-]*(?:\b|=)/m;
const NOTION_LINKED_ATTRIBUTE_PATTERN =
  /^(\s*:{2,}[A-Za-z][A-Za-z0-9_-]*)(?:=)?\{\s*([A-Za-z][A-Za-z0-9_-]*)\s*=\s*[“”"']?\[([^\]\n]+)\]\(([^)\n]+)\)\s*$/;
const SMART_QUOTE_PATTERN = /[“”‘’]/;
const HTTP_URL_PATTERN = /https?:\/\/[^\s"'“”<>\]\)]+/i;

function replaceSmartQuotes(value) {
  return String(value || '')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");
}

function findDirectiveAttributeBodySpan(line) {
  const directiveMatch = String(line || '').match(DIRECTIVE_START_PATTERN);
  if (!directiveMatch) return null;

  const openIndex = line.indexOf('{', directiveMatch[0].length);
  if (openIndex < 0) return null;

  let quote = '';
  let escaped = false;

  for (let index = openIndex + 1; index < line.length; index += 1) {
    const char = line[index];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === '\\') {
      escaped = true;
      continue;
    }

    if (quote) {
      if (char === quote) {
        quote = '';
      }
      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }

    if (char === '}') {
      return { start: openIndex + 1, end: index };
    }
  }

  return null;
}

function safeDecodeUriComponent(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function extractHttpUrl(value) {
  const directMatch = String(value || '').match(HTTP_URL_PATTERN);
  if (directMatch) return directMatch[0];

  const decoded = safeDecodeUriComponent(String(value || ''));
  const decodedMatch = decoded.match(HTTP_URL_PATTERN);
  return decodedMatch ? decodedMatch[0] : '';
}

function normalizeDirectiveBracePrefix(line) {
  const directiveMatch = String(line || '').match(DIRECTIVE_START_PATTERN);
  if (!directiveMatch) return line;

  const prefixEnd = directiveMatch[0].length;
  if (line[prefixEnd] !== '=' || line[prefixEnd + 1] !== '{') return line;

  return `${line.slice(0, prefixEnd)}${line.slice(prefixEnd + 1)}`;
}

function normalizeNotionLinkedDirectiveLine(line) {
  const match = String(line || '').match(NOTION_LINKED_ATTRIBUTE_PATTERN);
  if (!match) return line;

  const [, directiveName, attributeName, linkText, linkTarget] = match;
  const url = extractHttpUrl(linkText) || extractHttpUrl(linkTarget);
  if (!url) return line;

  return `${directiveName}{${attributeName}="${url}"}`;
}

function normalizeDirectiveLine(line) {
  const linkedDirective = normalizeNotionLinkedDirectiveLine(line);
  if (linkedDirective !== line) return linkedDirective;

  const prefixNormalized = normalizeDirectiveBracePrefix(line);
  if (!SMART_QUOTE_PATTERN.test(prefixNormalized)) return prefixNormalized;

  const span = findDirectiveAttributeBodySpan(prefixNormalized);
  if (!span) return prefixNormalized;

  const before = prefixNormalized.slice(0, span.start);
  const body = prefixNormalized.slice(span.start, span.end);
  const after = prefixNormalized.slice(span.end);

  return `${before}${replaceSmartQuotes(body)}${after}`;
}

function updateFenceState(line, state) {
  const fenceMatch = String(line || '').match(/^\s*(`{3,}|~{3,})/);
  if (!fenceMatch) return state;

  const marker = fenceMatch[1];
  const markerChar = marker[0];

  if (!state.inFence) {
    return {
      inFence: true,
      markerChar,
      markerLength: marker.length,
    };
  }

  if (markerChar === state.markerChar && marker.length >= state.markerLength) {
    return {
      inFence: false,
      markerChar: '',
      markerLength: 0,
    };
  }

  return state;
}

export function normalizeDirectiveAttributeQuotes(markdown) {
  const source = String(markdown || '');
  if (!DIRECTIVE_CANDIDATE_PATTERN.test(source)) {
    return source;
  }

  const chunks = source.split(/(\r?\n)/);
  let changed = false;
  let fenceState = {
    inFence: false,
    markerChar: '',
    markerLength: 0,
  };

  for (let index = 0; index < chunks.length; index += 2) {
    const line = chunks[index];
    const nextFenceState = updateFenceState(line, fenceState);
    const isFenceLine = nextFenceState !== fenceState;

    if (!fenceState.inFence && !isFenceLine) {
      const normalized = normalizeDirectiveLine(line);
      if (normalized !== line) {
        chunks[index] = normalized;
        changed = true;
      }
    }

    fenceState = nextFenceState;
  }

  return changed ? chunks.join('') : source;
}
