function normalizeSingleLine(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseLooseYamlScalar(value) {
  const text = String(value || '').trim();
  if (!text) return '';

  if ((text.startsWith("'") && text.endsWith("'")) || (text.startsWith('"') && text.endsWith('"'))) {
    const quote = text[0];
    let inner = text.slice(1, -1);
    if (quote === "'") {
      inner = inner.replace(/''/g, "'");
    } else {
      inner = inner.replace(/\\"/g, '"');
    }
    return inner;
  }

  return text;
}

export function extractFrontMatterField(markdown, fieldName) {
  const source = String(markdown || '');
  const frontMatterMatch = source.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!frontMatterMatch) return '';

  const body = frontMatterMatch[1];
  const escapedField = String(fieldName || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const lineMatch = body.match(new RegExp(`^${escapedField}:\\s*(.+?)\\s*$`, 'm'));
  if (!lineMatch) return '';

  return parseLooseYamlScalar(lineMatch[1]);
}

export function resolvePostDescription({
  generatedDescription,
  existingMarkdown = '',
  preserveExisting = true,
} = {}) {
  const existingDescription = preserveExisting
    ? normalizeSingleLine(extractFrontMatterField(existingMarkdown, 'description'))
    : '';
  return existingDescription || normalizeSingleLine(generatedDescription);
}
