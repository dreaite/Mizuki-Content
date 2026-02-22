import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const CONFIG = {
  notionToken: requireEnv('NOTION_TOKEN'),
  databaseId: requireEnv('NOTION_DATABASE_ID'),
  dataSourceId: process.env.NOTION_DATA_SOURCE_ID || '',
  postsDir: process.env.NOTION_POSTS_DIR || 'posts',
  deleteMissing: parseBoolean(process.env.NOTION_SYNC_DELETE_MISSING, false),
  typeProperty: process.env.NOTION_TYPE_PROPERTY || 'type',
  titleProperty: process.env.NOTION_TITLE_PROPERTY || 'title',
  createTimeProperty: process.env.NOTION_CREATE_TIME_PROPERTY || 'createTime',
  updatedDateProperty: process.env.NOTION_UPDATED_DATE_PROPERTY || 'date',
  summaryProperty: process.env.NOTION_SUMMARY_PROPERTY || 'summary',
  slugProperty: process.env.NOTION_SLUG_PROPERTY || 'slug',
  tagsProperty: process.env.NOTION_TAGS_PROPERTY || 'tags',
  categoryProperty: process.env.NOTION_CATEGORY_PROPERTY || 'category',
  statusProperty: process.env.NOTION_STATUS_PROPERTY || 'status',
};

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
}

function parseBoolean(value, fallback = false) {
  if (value == null || value === '') return fallback;
  const normalized = String(value).trim().toLowerCase();
  return ['1', 'true', 'yes', 'on'].includes(normalized);
}

function richTextToPlainText(items = []) {
  return items.map((item) => item?.plain_text || '').join('');
}

function normalizeSingleLine(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function propertyToString(prop) {
  if (!prop || typeof prop !== 'object') return '';

  switch (prop.type) {
    case 'title':
      return richTextToPlainText(prop.title);
    case 'rich_text':
      return richTextToPlainText(prop.rich_text);
    case 'select':
      return prop.select?.name || '';
    case 'status':
      return prop.status?.name || '';
    case 'date':
      return prop.date?.start || '';
    case 'created_time':
      return prop.created_time || '';
    case 'last_edited_time':
      return prop.last_edited_time || '';
    case 'url':
      return prop.url || '';
    case 'email':
      return prop.email || '';
    case 'phone_number':
      return prop.phone_number || '';
    case 'number':
      return prop.number == null ? '' : String(prop.number);
    case 'checkbox':
      return prop.checkbox ? 'true' : 'false';
    case 'formula':
      return formulaToString(prop.formula);
    case 'rollup':
      return rollupToString(prop.rollup);
    default:
      return '';
  }
}

function formulaToString(formula) {
  if (!formula || typeof formula !== 'object') return '';
  switch (formula.type) {
    case 'string':
      return formula.string || '';
    case 'number':
      return formula.number == null ? '' : String(formula.number);
    case 'boolean':
      return formula.boolean ? 'true' : 'false';
    case 'date':
      return formula.date?.start || '';
    default:
      return '';
  }
}

function rollupToString(rollup) {
  if (!rollup || typeof rollup !== 'object') return '';
  switch (rollup.type) {
    case 'number':
      return rollup.number == null ? '' : String(rollup.number);
    case 'date':
      return rollup.date?.start || '';
    case 'array':
      return (rollup.array || [])
        .map((item) => {
          if (item?.type === 'title' || item?.type === 'rich_text') {
            return propertyToString(item);
          }
          if (item?.type === 'select') {
            return item.select?.name || '';
          }
          if (item?.type === 'status') {
            return item.status?.name || '';
          }
          return '';
        })
        .filter(Boolean)
        .join(', ');
    default:
      return '';
  }
}

function propertyToArray(prop) {
  if (!prop || typeof prop !== 'object') return [];

  if (prop.type === 'multi_select') {
    return (prop.multi_select || []).map((item) => item?.name).filter(Boolean);
  }

  if (prop.type === 'rollup' && prop.rollup?.type === 'array') {
    return (prop.rollup.array || [])
      .map((item) => propertyToString(item))
      .map((item) => normalizeSingleLine(item))
      .filter(Boolean);
  }

  const single = normalizeSingleLine(propertyToString(prop));
  if (!single) return [];

  if (single.includes(',')) {
    return single
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean);
  }

  return [single];
}

function propertyByName(properties, name) {
  return properties?.[name];
}

function findTitleProperty(properties, preferredName) {
  if (!properties || typeof properties !== 'object') return null;

  const preferred = properties[preferredName];
  if (preferred?.type === 'title') return preferred;

  for (const prop of Object.values(properties)) {
    if (prop?.type === 'title') return prop;
  }

  return null;
}

function toDateOnly(value) {
  const text = String(value || '').trim();
  if (!text) return '';

  const match = text.match(/^(\d{4}-\d{2}-\d{2})/);
  if (match) return match[1];

  const parsed = new Date(text);
  if (Number.isNaN(parsed.getTime())) return '';

  return parsed.toISOString().slice(0, 10);
}

function getPageCoverUrl(page) {
  const cover = page?.cover;
  if (!cover) return '';
  if (cover.type === 'external') return cover.external?.url || '';
  if (cover.type === 'file') return cover.file?.url || '';
  return '';
}

function sanitizeSlug(value) {
  let slug = String(value || '')
    .trim()
    .replace(/\\/g, '/');

  if (!slug) return '';

  slug = slug.replace(/\s+/g, '-');
  slug = slug.replace(/\/+/g, '/');
  slug = slug.replace(/^\/+|\/+$/g, '');

  slug = slug
    .split('/')
    .map((segment) =>
      segment
        .replace(/[^a-zA-Z0-9._-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '')
    )
    .filter(Boolean)
    .join('/');

  return slug;
}

function ensureMdRelativePathFromSlug(slug, fallbackBaseName) {
  const normalized = sanitizeSlug(slug) || sanitizeSlug(fallbackBaseName) || 'untitled';
  const relativePath = normalized.toLowerCase().endsWith('.md') ? normalized : `${normalized}.md`;

  if (relativePath.includes('..')) {
    throw new Error(`Unsafe slug path detected: ${slug}`);
  }

  return relativePath;
}

function yamlQuote(value) {
  const text = String(value ?? '');
  return `'${text.replace(/'/g, "''")}'`;
}

function yamlDateOrEmpty(value) {
  const text = String(value || '').trim();
  if (!text) return "''";
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text;
  return yamlQuote(text);
}

function yamlArray(values) {
  if (!Array.isArray(values) || values.length === 0) return '[]';
  return `[${values.map((value) => yamlQuote(normalizeSingleLine(value))).join(', ')}]`;
}

function buildFrontMatter(meta) {
  const lines = [
    '---',
    `title: ${yamlQuote(meta.title)}`,
    `published: ${yamlDateOrEmpty(meta.published)}`,
    `updated: ${yamlDateOrEmpty(meta.updated)}`,
    `description: ${yamlQuote(meta.description)}`,
    `permalink: ${yamlQuote(meta.permalink)}`,
    `image: ${yamlQuote(meta.image)}`,
    `tags: ${yamlArray(meta.tags)}`,
    `category: ${yamlQuote(meta.category)}`,
    `draft: ${meta.draft ? 'true' : 'false'}`,
    '---',
    '',
  ];

  return `${lines.join('\n')}\n`;
}

async function fetchAllDatabasePages(notion, databaseId) {
  const queryTarget = await resolveQueryTarget(notion, databaseId, CONFIG.dataSourceId);
  const results = [];
  let hasMore = true;
  let startCursor = undefined;

  while (hasMore) {
    const response = await queryPageBatch(notion, queryTarget, startCursor);

    for (const item of response.results) {
      if (item.object === 'page') {
        results.push(item);
      }
    }

    hasMore = response.has_more;
    startCursor = response.next_cursor || undefined;
  }

  return results;
}

async function queryPageBatch(notion, target, startCursor) {
  if (target.kind === 'database') {
    return notion.databases.query({
      database_id: target.id,
      start_cursor: startCursor,
      page_size: 100,
    });
  }

  if (target.kind === 'data_source') {
    return notion.dataSources.query({
      data_source_id: target.id,
      start_cursor: startCursor,
      page_size: 100,
    });
  }

  throw new Error(`Unsupported Notion query target kind: ${target.kind}`);
}

async function resolveQueryTarget(notion, databaseId, explicitDataSourceId) {
  if (typeof notion?.databases?.query === 'function') {
    return { kind: 'database', id: databaseId };
  }

  if (typeof notion?.dataSources?.query !== 'function') {
    throw new Error(
      'Unsupported @notionhq/client version: neither notion.databases.query nor notion.dataSources.query is available.'
    );
  }

  if (explicitDataSourceId) {
    return { kind: 'data_source', id: explicitDataSourceId };
  }

  const dataSourceId = await resolveDataSourceIdFromDatabaseOrFallback(notion, databaseId);
  return { kind: 'data_source', id: dataSourceId };
}

async function resolveDataSourceIdFromDatabaseOrFallback(notion, databaseId) {
  try {
    if (typeof notion?.databases?.retrieve !== 'function') {
      throw new Error(
        'Notion SDK v5 detected but notion.databases.retrieve is unavailable. Set NOTION_DATA_SOURCE_ID explicitly.'
      );
    }

    const database = await notion.databases.retrieve({ database_id: databaseId });
    const dataSources = Array.isArray(database?.data_sources) ? database.data_sources : [];

    if (dataSources.length === 0) {
      throw new Error(
        'No data_sources found under the provided NOTION_DATABASE_ID. Set NOTION_DATA_SOURCE_ID explicitly.'
      );
    }

    if (dataSources.length > 1) {
      const choices = dataSources
        .map((item) => `${item.name || '(unnamed)'}:${item.id}`)
        .join(', ');
      throw new Error(
        `Multiple data sources found for NOTION_DATABASE_ID. Set NOTION_DATA_SOURCE_ID explicitly. Choices: ${choices}`
      );
    }

    const resolvedId = dataSources[0]?.id;
    if (!resolvedId) {
      throw new Error('Failed to resolve data source id from database response.');
    }

    console.log(`Using data source ${resolvedId} resolved from database ${databaseId}`);
    return resolvedId;
  } catch (databaseError) {
    if (typeof notion?.dataSources?.retrieve === 'function') {
      try {
        await notion.dataSources.retrieve({ data_source_id: databaseId });
        console.log(
          'NOTION_DATABASE_ID appears to already be a data source id; using it directly with notion.dataSources.query'
        );
        return databaseId;
      } catch {
        // Ignore and rethrow the original database resolution error below for a clearer message.
      }
    }

    throw databaseError;
  }
}

function extractMetadata(page) {
  const properties = page.properties || {};
  const titleProp = findTitleProperty(properties, CONFIG.titleProperty);

  const rawTitle = normalizeSingleLine(propertyToString(titleProp));
  const title = rawTitle || `Untitled ${page.id}`;

  const type = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.typeProperty)));
  const published = toDateOnly(
    propertyToString(propertyByName(properties, CONFIG.createTimeProperty)) || page.created_time
  );
  const updated = toDateOnly(
    propertyToString(propertyByName(properties, CONFIG.updatedDateProperty)) || page.last_edited_time
  );
  const description = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.summaryProperty)));
  const rawSlug = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.slugProperty)));
  const fallbackSlug = sanitizeSlug(title) || page.id.replace(/-/g, '');
  const permalink = sanitizeSlug(rawSlug) || fallbackSlug;
  const image = normalizeSingleLine(getPageCoverUrl(page));
  const tags = propertyToArray(propertyByName(properties, CONFIG.tagsProperty));

  const categoryProp = propertyByName(properties, CONFIG.categoryProperty);
  let category = '';
  if (categoryProp?.type === 'multi_select') {
    category = normalizeSingleLine(categoryProp.multi_select?.[0]?.name || '');
  } else {
    category = normalizeSingleLine(propertyToString(categoryProp));
  }

  const status = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.statusProperty)));
  const draft = status.toLowerCase() === 'draft';

  return {
    pageId: page.id,
    type,
    title,
    published,
    updated,
    description,
    permalink,
    image,
    tags,
    category,
    draft,
  };
}

function buildMarkdownDocument(meta, markdownBody) {
  const frontMatter = buildFrontMatter(meta);
  const body = String(markdownBody || '').trim();
  return `${frontMatter}${body ? `${body}\n` : ''}`;
}

async function writeIfChanged(filePath, content) {
  try {
    const existing = await fs.readFile(filePath, 'utf8');
    if (existing === content) return 'unchanged';
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, 'utf8');
  try {
    await fs.access(filePath);
    return 'written';
  } catch {
    return 'written';
  }
}

async function listMarkdownFiles(rootDir) {
  async function walk(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await walk(fullPath)));
        continue;
      }

      if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  try {
    return await walk(rootDir);
  } catch (error) {
    if (error?.code === 'ENOENT') return [];
    throw error;
  }
}

async function main() {
  const notion = new Client({ auth: CONFIG.notionToken });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const outputRoot = path.resolve(process.cwd(), CONFIG.postsDir);
  const pages = await fetchAllDatabasePages(notion, CONFIG.databaseId);
  console.log(`Fetched ${pages.length} page(s) from Notion database.`);

  let processed = 0;
  let createdOrUpdated = 0;
  let unchanged = 0;
  let skipped = 0;
  let deleted = 0;
  const seenRelativePaths = new Set();

  for (const page of pages) {
    if (page.archived || page.in_trash) {
      skipped += 1;
      continue;
    }

    const meta = extractMetadata(page);
    if (meta.type.toLowerCase() !== 'post') {
      skipped += 1;
      continue;
    }

    const relativePath = ensureMdRelativePathFromSlug(meta.permalink, meta.title);
    if (seenRelativePaths.has(relativePath)) {
      throw new Error(`Duplicate slug/permalink detected for output path: ${relativePath}`);
    }
    seenRelativePaths.add(relativePath);

    const pageMdBlocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(pageMdBlocks);
    const markdownBody =
      typeof mdString === 'string' ? mdString : mdString?.parent || '';

    const document = buildMarkdownDocument(meta, markdownBody);

    const fullPath = path.resolve(outputRoot, relativePath);
    if (!(fullPath === outputRoot || fullPath.startsWith(`${outputRoot}${path.sep}`))) {
      throw new Error(`Resolved path escapes posts directory: ${relativePath}`);
    }

    let existedBefore = true;
    try {
      await fs.access(fullPath);
    } catch (error) {
      if (error?.code === 'ENOENT') existedBefore = false;
      else throw error;
    }

    const result = await writeIfChanged(fullPath, document);
    if (result === 'unchanged') {
      unchanged += 1;
    } else {
      createdOrUpdated += 1;
      console.log(`${existedBefore ? 'Updated' : 'Created'} ${path.relative(process.cwd(), fullPath)}`);
    }

    processed += 1;
  }

  if (CONFIG.deleteMissing) {
    const existingMarkdownFiles = await listMarkdownFiles(outputRoot);
    for (const filePath of existingMarkdownFiles) {
      const relativePath = path
        .relative(outputRoot, filePath)
        .split(path.sep)
        .join('/');

      if (seenRelativePaths.has(relativePath)) {
        continue;
      }

      await fs.rm(filePath);
      deleted += 1;
      console.log(`Deleted ${path.relative(process.cwd(), filePath)}`);
    }
  }

  console.log(
    `Sync complete. processed=${processed}, changed=${createdOrUpdated}, unchanged=${unchanged}, deleted=${deleted}, skipped=${skipped}, deleteMissing=${CONFIG.deleteMissing}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
