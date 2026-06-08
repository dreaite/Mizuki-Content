const DIRECTIVE_START_PATTERN = /^\s*:{2,}[A-Za-z][A-Za-z0-9_-]*\b/;
const SMART_QUOTE_PATTERN = /[“”‘’]/;

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

function normalizeDirectiveLine(line) {
  if (!SMART_QUOTE_PATTERN.test(line)) return line;

  const span = findDirectiveAttributeBodySpan(line);
  if (!span) return line;

  const before = line.slice(0, span.start);
  const body = line.slice(span.start, span.end);
  const after = line.slice(span.end);

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
  if (!SMART_QUOTE_PATTERN.test(source) || !/^\s*:{2,}/m.test(source)) {
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
