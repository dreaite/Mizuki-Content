import fs from 'node:fs/promises';
import { normalizePostTaxonomy } from '../../data/post-taxonomy.mjs';
import { writeDataFilesWithRollback } from './notion-data-write.mjs';

const quote = (value) => `'${value.replace(/'/g, "''")}'`;

export function buildPostTaxonomyFrontmatter(meta) {
  const { category, tags } = normalizePostTaxonomy(meta, { strict: true });
  return {
    tags: `tags: [${tags.map(quote).join(', ')}]`,
    category: `category: ${quote(category)}`,
  };
}

// This edits only the two single-line fields emitted by the Notion writer.
// Other frontmatter, translated titles/descriptions and body bytes stay intact.
export function rewritePostTaxonomyFrontmatter(markdown, meta) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?=\r?\n|$)/);
  if (!match) throw new Error('Notion post is missing YAML frontmatter.');
  let frontmatter = match[0];
  const lines = buildPostTaxonomyFrontmatter(meta);
  for (const field of ['tags', 'category']) {
    const pattern = new RegExp(`^${field}:[^\\r\\n]*`, 'gm');
    const fields = frontmatter.match(pattern) || [];
    if (fields.length !== 1) {
      throw new Error(`Expected exactly one ${field} field in Notion post frontmatter.`);
    }
    if (field === 'tags' && !/^tags:\s*\[[^\r\n]*\]\s*$/.test(fields[0])) {
      throw new Error('Expected the inline tags array emitted by Notion sync.');
    }
    frontmatter = frontmatter.replace(pattern, () => lines[field]);
  }
  return frontmatter + markdown.slice(match[0].length);
}

export async function syncPostTaxonomyFiles(filePaths, meta) {
  const writes = [];
  for (const filePath of new Set(filePaths)) {
    let markdown;
    try {
      markdown = await fs.readFile(filePath, 'utf8');
    } catch (error) {
      if (error?.code === 'ENOENT') continue;
      throw error;
    }
    writes.push({ filePath, content: rewritePostTaxonomyFrontmatter(markdown, meta) });
  }
  return writeDataFilesWithRollback(writes);
}
