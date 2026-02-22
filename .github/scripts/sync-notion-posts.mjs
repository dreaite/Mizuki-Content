import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import {
  buildFriendItems,
  buildProjectItems,
  extractMarkdownImagesAndText,
  renderDiaryDataTs,
  renderFriendsDataTs,
  renderProjectsDataTs,
} from './notion-ts-data-sync.mjs';

const CONFIG = {
  notionToken: requireEnv('NOTION_TOKEN'),
  databaseId: requireEnv('NOTION_DATABASE_ID'),
  dataSourceId: process.env.NOTION_DATA_SOURCE_ID || '',
  postsDir: process.env.NOTION_POSTS_DIR || 'posts',
  aboutPath: process.env.NOTION_ABOUT_PATH || 'spec/about.md',
  friendsDataPath: process.env.NOTION_FRIENDS_DATA_PATH || 'data/friends.ts',
  diaryDataPath: process.env.NOTION_DIARY_DATA_PATH || 'data/diary.ts',
  projectsDataPath: process.env.NOTION_PROJECTS_DATA_PATH || 'data/projects.ts',
  deleteMissing: parseBoolean(process.env.NOTION_SYNC_DELETE_MISSING, false),
  syncCronMinutes: parsePositiveInt(process.env.NOTION_SYNC_CRON_MINUTES, 60),
  syncLookbackMultiplier: parsePositiveInt(process.env.NOTION_SYNC_LOOKBACK_MULTIPLIER, 2),
  postTranslationEnabled: parseBoolean(process.env.NOTION_POST_TRANSLATION_ENABLED, false),
  postTranslationLanguages: parseLanguageList(process.env.NOTION_POST_TRANSLATION_LANGS || ''),
  postTranslationApiBaseUrl: String(
    process.env.NOTION_POST_TRANSLATION_API_BASE_URL || 'https://api.openai.com/v1'
  ).replace(/\/+$/, ''),
  postTranslationApiKey: process.env.NOTION_POST_TRANSLATION_API_KEY || '',
  postTranslationModel: String(process.env.NOTION_POST_TRANSLATION_MODEL || '').trim(),
  postTranslationSourceLanguage: String(process.env.NOTION_POST_TRANSLATION_SOURCE_LANG || '').trim(),
  postTranslationSystemPrompt: String(process.env.NOTION_POST_TRANSLATION_SYSTEM_PROMPT || '').trim(),
  typeProperty: process.env.NOTION_TYPE_PROPERTY || 'type',
  titleProperty: process.env.NOTION_TITLE_PROPERTY || 'title',
  createTimeProperty: process.env.NOTION_CREATE_TIME_PROPERTY || 'createTime',
  updatedDateProperty: process.env.NOTION_UPDATED_DATE_PROPERTY || 'date',
  updateTimeProperty: process.env.NOTION_UPDATE_TIME_PROPERTY || 'updateTime',
  summaryProperty: process.env.NOTION_SUMMARY_PROPERTY || 'summary',
  slugProperty: process.env.NOTION_SLUG_PROPERTY || 'slug',
  urlProperty: process.env.NOTION_URL_PROPERTY || 'url',
  liveDemoProperty: process.env.NOTION_LIVE_DEMO_PROPERTY || 'liveDemo',
  techStackProperty: process.env.NOTION_TECH_STACK_PROPERTY || 'techStack',
  featuredProperty: process.env.NOTION_FEATURED_PROPERTY || 'featured',
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

function parsePositiveInt(value, fallback) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return parsed;
}

function parseCsvList(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseLanguageList(value) {
  const seen = new Set();
  const languages = [];

  for (const item of parseCsvList(value)) {
    const normalized = item.toLowerCase().replace(/_/g, '-');
    if (!/^[a-z0-9-]+$/.test(normalized)) {
      throw new Error(`Invalid language code in NOTION_POST_TRANSLATION_LANGS: ${item}`);
    }
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    languages.push(normalized);
  }

  return languages;
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

function propertyToDateRange(prop) {
  if (!prop || typeof prop !== 'object') {
    return { start: '', end: '' };
  }

  if (prop.type === 'date') {
    return {
      start: toDateOnly(prop.date?.start || ''),
      end: toDateOnly(prop.date?.end || ''),
    };
  }

  if (prop.type === 'formula' && prop.formula?.type === 'date') {
    return {
      start: toDateOnly(prop.formula.date?.start || ''),
      end: toDateOnly(prop.formula.date?.end || ''),
    };
  }

  if (prop.type === 'rollup' && prop.rollup?.type === 'date') {
    return {
      start: toDateOnly(prop.rollup.date?.start || ''),
      end: toDateOnly(prop.rollup.date?.end || ''),
    };
  }

  return {
    start: toDateOnly(propertyToString(prop)),
    end: '',
  };
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

function normalizePublishedAndUpdated(published, updated) {
  const pub = String(published || '').trim();
  const upd = String(updated || '').trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(pub) || !/^\d{4}-\d{2}-\d{2}$/.test(upd)) {
    return { published, updated };
  }

  // If create/published is newer than updated, use the older date for both.
  if (pub > upd) {
    return { published: upd, updated: upd };
  }

  return { published, updated };
}

function toIsoUtcString(value) {
  const text = String(value || '').trim();
  if (!text) return '';

  const parsed = new Date(text);
  if (Number.isNaN(parsed.getTime())) return '';

  return parsed.toISOString();
}

function parseOptionalBooleanChoice(value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (!normalized) return undefined;
  if (normalized === 'true') return true;
  if (normalized === 'false') return false;
  return undefined;
}

function toUnixMs(value) {
  const iso = toIsoUtcString(value);
  if (!iso) return 0;
  return Date.parse(iso);
}

function isRecentByWindow(value, nowMs, lookbackMinutes) {
  const timestamp = toUnixMs(value);
  if (!timestamp) return false;
  return nowMs - timestamp <= lookbackMinutes * 60 * 1000;
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    if (error?.code === 'ENOENT') return false;
    throw error;
  }
}

async function notionPageToMarkdownString(n2m, pageId) {
  const pageMdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(pageMdBlocks);
  return typeof mdString === 'string' ? mdString : mdString?.parent || '';
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

function appendLanguageSuffixToMarkdownPath(relativePath, languageCode) {
  const normalizedPath = String(relativePath || '').replace(/\\/g, '/');
  const normalizedLanguage = String(languageCode || '')
    .trim()
    .toLowerCase()
    .replace(/_/g, '-');

  if (!normalizedPath.toLowerCase().endsWith('.md')) {
    throw new Error(`Expected a markdown relative path, received: ${relativePath}`);
  }

  if (!/^[a-z0-9-]+$/.test(normalizedLanguage)) {
    throw new Error(`Invalid translation language code: ${languageCode}`);
  }

  return normalizedPath.replace(/\.md$/i, `.${normalizedLanguage}.md`);
}

function appendLanguageSuffixToPermalink(permalink, languageCode) {
  const normalizedPermalink = sanitizeSlug(permalink);
  if (!normalizedPermalink) return '';

  const normalizedLanguage = String(languageCode || '')
    .trim()
    .toLowerCase()
    .replace(/_/g, '-');
  if (!/^[a-z0-9-]+$/.test(normalizedLanguage)) {
    throw new Error(`Invalid translation language code: ${languageCode}`);
  }

  return `${normalizedPermalink}.${normalizedLanguage}`;
}

function validatePostTranslationConfig() {
  if (!CONFIG.postTranslationEnabled) return;

  if (CONFIG.postTranslationLanguages.length === 0) {
    throw new Error(
      'NOTION_POST_TRANSLATION_ENABLED=true but NOTION_POST_TRANSLATION_LANGS is empty. Example: en,ja'
    );
  }

  if (!CONFIG.postTranslationModel) {
    throw new Error(
      'NOTION_POST_TRANSLATION_ENABLED=true but NOTION_POST_TRANSLATION_MODEL is empty.'
    );
  }
}

function buildPostTranslationSystemPrompt() {
  if (CONFIG.postTranslationSystemPrompt) {
    return CONFIG.postTranslationSystemPrompt;
  }

  return [
    'You are a professional technical translator.',
    'Translate only the natural-language text in the provided Markdown body.',
    'Preserve Markdown structure, headings, lists, links, HTML tags, and whitespace semantics.',
    'Do not add explanations, notes, or code fences around the result.',
    'Do not translate code blocks, inline code, URLs, file paths, commands, or frontmatter.',
  ].join(' ');
}

function unwrapSingleFencedBlock(text) {
  const value = String(text || '').trim();
  const match = value.match(/^```(?:markdown|md)?\s*\n([\s\S]*?)\n```$/i);
  if (!match) return value;
  return String(match[1] || '').trim();
}

async function translatePostMarkdownBody(markdownBody, { targetLanguage, title }) {
  const body = String(markdownBody || '');
  if (!body.trim()) return '';

  const response = await fetch(`${CONFIG.postTranslationApiBaseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(CONFIG.postTranslationApiKey ? { Authorization: `Bearer ${CONFIG.postTranslationApiKey}` } : {}),
    },
    body: JSON.stringify({
      model: CONFIG.postTranslationModel,
      temperature: 1,
      messages: [
        {
          role: 'system',
          content: buildPostTranslationSystemPrompt(),
        },
        {
          role: 'user',
          content: [
            `Target language: ${targetLanguage}`,
            `Source language: ${CONFIG.postTranslationSourceLanguage || 'auto-detect'}`,
            `Post title (context only, do not prepend): ${title}`,
            '',
            'Return only the translated Markdown body.',
            '',
            body,
          ].join('\n'),
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    throw new Error(
      `LLM translation request failed (${response.status} ${response.statusText}): ${errorText.slice(0, 500)}`
    );
  }

  const payload = await response.json();
  const content = payload?.choices?.[0]?.message?.content;
  if (typeof content !== 'string' || !content.trim()) {
    throw new Error('LLM translation response did not include a non-empty choices[0].message.content string.');
  }

  return unwrapSingleFencedBlock(content);
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
    ...(meta.lang ? [`lang: ${yamlQuote(meta.lang)}`] : []),
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

function extractCommonMetadata(page) {
  const properties = page.properties || {};
  const titleProp = findTitleProperty(properties, CONFIG.titleProperty);

  const rawTitle = normalizeSingleLine(propertyToString(titleProp));
  const title = rawTitle || `Untitled ${page.id}`;

  const type = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.typeProperty)));
  const description = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.summaryProperty)));
  const rawSlug = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.slugProperty)));
  const fallbackSlug = sanitizeSlug(title) || page.id.replace(/-/g, '');
  const permalink = sanitizeSlug(rawSlug) || fallbackSlug;
  const image = normalizeSingleLine(getPageCoverUrl(page));
  const tags = propertyToArray(propertyByName(properties, CONFIG.tagsProperty));
  const siteurl = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.urlProperty)));
  const updateTimeIso = toIsoUtcString(
    propertyToString(propertyByName(properties, CONFIG.updateTimeProperty)) || page.last_edited_time
  );
  const lastEditedIso = toIsoUtcString(page.last_edited_time);

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
    properties,
    type,
    title,
    description,
    permalink,
    image,
    tags,
    category,
    siteurl,
    updateTimeIso,
    lastEditedIso,
    draft,
  };
}

function extractPostMetadata(page) {
  const common = extractCommonMetadata(page);
  const properties = common.properties || {};

  const published = toDateOnly(
    propertyToString(propertyByName(properties, CONFIG.createTimeProperty)) || page.created_time
  );
  const updated = toDateOnly(
    propertyToString(propertyByName(properties, CONFIG.updatedDateProperty)) || page.last_edited_time
  );
  const normalizedDates = normalizePublishedAndUpdated(published, updated);

  return {
    ...common,
    published: normalizedDates.published,
    updated: normalizedDates.updated,
  };
}

function extractProjectMetadata(page) {
  const common = extractCommonMetadata(page);
  const properties = common.properties || {};
  const dateRange = propertyToDateRange(propertyByName(properties, CONFIG.updatedDateProperty));

  return {
    ...common,
    projectStartDate: dateRange.start,
    projectEndDate: dateRange.end,
    techStack: propertyToArray(propertyByName(properties, CONFIG.techStackProperty)),
    statusValue: normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.statusProperty))),
    liveDemo: normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.liveDemoProperty))),
    sourceCode: normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.urlProperty))),
    featuredValue: parseOptionalBooleanChoice(
      propertyToString(propertyByName(properties, CONFIG.featuredProperty))
    ),
  };
}

function toDiaryDateIso(meta) {
  return meta.updateTimeIso || meta.lastEditedIso || '';
}

function sortByUpdatedDesc(a, b) {
  return toUnixMs(b.updateTimeIso || b.lastEditedIso) - toUnixMs(a.updateTimeIso || a.lastEditedIso);
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

async function writeAboutFileIfNeeded(filePath, markdownBody) {
  const content = `${String(markdownBody || '').trim()}\n`;
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  return writeIfChanged(filePath, content);
}

async function updateFriendsDataFile(filePath, friendItems) {
  const fileContent = await fs.readFile(filePath, 'utf8');
  const nextContent = renderFriendsDataTs(fileContent, friendItems);
  return writeIfChanged(filePath, nextContent);
}

async function updateDiaryDataFile(filePath, diaryItems) {
  const fileContent = await fs.readFile(filePath, 'utf8');
  const nextContent = renderDiaryDataTs(fileContent, diaryItems);
  return writeIfChanged(filePath, nextContent);
}

async function updateProjectsDataFile(filePath, projectItems) {
  const fileContent = await fs.readFile(filePath, 'utf8');
  const nextContent = renderProjectsDataTs(fileContent, projectItems);
  return writeIfChanged(filePath, nextContent);
}

function isMetaRecentlyUpdated(meta, nowMs, lookbackMinutes) {
  return isRecentByWindow(meta.updateTimeIso || meta.lastEditedIso, nowMs, lookbackMinutes);
}

async function buildDiaryItems(n2m, diaryMetas) {
  const sorted = [...diaryMetas].sort(sortByUpdatedDesc);
  const items = [];

  for (let index = 0; index < sorted.length; index += 1) {
    const meta = sorted[index];
    const diaryDate = toDiaryDateIso(meta);
    const markdown = await notionPageToMarkdownString(n2m, meta.pageId);
    const parsed = extractMarkdownImagesAndText(markdown);

    items.push({
      id: index + 1,
      content: parsed.text,
      date: diaryDate,
      images: parsed.images,
    });
  }

  return items;
}

async function main() {
  validatePostTranslationConfig();

  const notion = new Client({ auth: CONFIG.notionToken });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const outputRoot = path.resolve(process.cwd(), CONFIG.postsDir);
  const aboutPath = path.resolve(process.cwd(), CONFIG.aboutPath);
  const friendsDataPath = path.resolve(process.cwd(), CONFIG.friendsDataPath);
  const diaryDataPath = path.resolve(process.cwd(), CONFIG.diaryDataPath);
  const projectsDataPath = path.resolve(process.cwd(), CONFIG.projectsDataPath);
  const pages = await fetchAllDatabasePages(notion, CONFIG.databaseId);
  console.log(`Fetched ${pages.length} page(s) from Notion database.`);
  const lookbackMinutes = CONFIG.syncCronMinutes * CONFIG.syncLookbackMultiplier;
  const nowMs = Date.now();
  console.log(
    `Incremental sync window: ${lookbackMinutes} minute(s) (cron=${CONFIG.syncCronMinutes}m, multiplier=${CONFIG.syncLookbackMultiplier})`
  );
  if (CONFIG.postTranslationEnabled) {
    console.log(
      `Post translation enabled: languages=[${CONFIG.postTranslationLanguages.join(', ')}], model=${CONFIG.postTranslationModel}`
    );
  }

  let processedPosts = 0;
  let changedFiles = 0;
  let unchangedFiles = 0;
  let skipped = 0;
  let skippedByWindow = 0;
  let deleted = 0;
  const seenRelativePaths = new Set();
  const aboutPages = [];
  const friendPages = [];
  const diaryPages = [];
  const projectPages = [];

  for (const page of pages) {
    if (page.archived || page.in_trash) {
      skipped += 1;
      continue;
    }

    const common = extractCommonMetadata(page);
    const type = common.type.toLowerCase();

    if (type === 'post') {
      const meta = extractPostMetadata(page);
      const relativePath = ensureMdRelativePathFromSlug(meta.permalink, meta.title);
      if (seenRelativePaths.has(relativePath)) {
        throw new Error(`Duplicate slug/permalink detected for output path: ${relativePath}`);
      }
      seenRelativePaths.add(relativePath);

      const translationRelativePaths = [];
      if (CONFIG.postTranslationEnabled) {
        for (const languageCode of CONFIG.postTranslationLanguages) {
          const translatedRelativePath = appendLanguageSuffixToMarkdownPath(relativePath, languageCode);
          if (seenRelativePaths.has(translatedRelativePath)) {
            throw new Error(`Duplicate translated output path detected: ${translatedRelativePath}`);
          }
          seenRelativePaths.add(translatedRelativePath);
          translationRelativePaths.push({ languageCode, relativePath: translatedRelativePath });
        }
      }

      const fullPath = path.resolve(outputRoot, relativePath);
      if (!(fullPath === outputRoot || fullPath.startsWith(`${outputRoot}${path.sep}`))) {
        throw new Error(`Resolved path escapes posts directory: ${relativePath}`);
      }

      const exists = await fileExists(fullPath);
      const recent = isMetaRecentlyUpdated(meta, nowMs, lookbackMinutes);
      if (!exists || recent) {
        const markdownBody = await notionPageToMarkdownString(n2m, page.id);
        const document = buildMarkdownDocument(meta, markdownBody);
        const sourceWriteResult = await writeIfChanged(fullPath, document);
        if (sourceWriteResult === 'unchanged') {
          unchangedFiles += 1;
        } else {
          changedFiles += 1;
          console.log(`${exists ? 'Updated' : 'Created'} ${path.relative(process.cwd(), fullPath)}`);
        }

        if (CONFIG.postTranslationEnabled) {
          for (const translationTarget of translationRelativePaths) {
            const translatedFullPath = path.resolve(outputRoot, translationTarget.relativePath);
            if (!(translatedFullPath === outputRoot || translatedFullPath.startsWith(`${outputRoot}${path.sep}`))) {
              throw new Error(
                `Resolved translated path escapes posts directory: ${translationTarget.relativePath}`
              );
            }

            const translatedExists = await fileExists(translatedFullPath);
            const shouldTranslateNow = sourceWriteResult !== 'unchanged' || !translatedExists;
            if (!shouldTranslateNow) {
              continue;
            }

            console.log(
              `${translatedExists ? 'Updating' : 'Creating'} translation (${translationTarget.languageCode}) for ${relativePath}`
            );
            const translatedBody = await translatePostMarkdownBody(markdownBody, {
              targetLanguage: translationTarget.languageCode,
              title: meta.title,
            });
            const translatedDocument = buildMarkdownDocument(
              {
                ...meta,
                lang: translationTarget.languageCode,
                permalink: appendLanguageSuffixToPermalink(meta.permalink, translationTarget.languageCode),
              },
              translatedBody
            );
            const translatedWriteResult = await writeIfChanged(translatedFullPath, translatedDocument);
            if (translatedWriteResult === 'unchanged') {
              unchangedFiles += 1;
            } else {
              changedFiles += 1;
              console.log(
                `${translatedExists ? 'Updated' : 'Created'} ${path.relative(process.cwd(), translatedFullPath)}`
              );
            }
          }
        }
      } else {
        skippedByWindow += 1;
      }

      processedPosts += 1;
      continue;
    }

    if (type === 'about') {
      aboutPages.push(common);
      continue;
    }

    if (type === 'friend') {
      friendPages.push(common);
      continue;
    }

    if (type === 'diary') {
      diaryPages.push(common);
      continue;
    }

    if (type === 'project') {
      projectPages.push(extractProjectMetadata(page));
      continue;
    }

    skipped += 1;
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

  if (aboutPages.length > 0) {
    const aboutExists = await fileExists(aboutPath);
    const anyAboutRecent = aboutPages.some((meta) => isMetaRecentlyUpdated(meta, nowMs, lookbackMinutes));
    const selectedAbout = [...aboutPages].sort(sortByUpdatedDesc)[0];

    if (aboutPages.length > 1) {
      console.warn(
        `Found ${aboutPages.length} About pages. Using the most recently updated one: ${selectedAbout.pageId}`
      );
    }

    if (!aboutExists || anyAboutRecent) {
      const aboutMarkdown = await notionPageToMarkdownString(n2m, selectedAbout.pageId);
      const result = await writeAboutFileIfNeeded(aboutPath, aboutMarkdown);
      if (result === 'unchanged') {
        unchangedFiles += 1;
      } else {
        changedFiles += 1;
        console.log(`${aboutExists ? 'Updated' : 'Created'} ${path.relative(process.cwd(), aboutPath)}`);
      }
    } else {
      skippedByWindow += 1;
    }
  }

  {
    const friendsFileExists = await fileExists(friendsDataPath);
    const friendItems = buildFriendItems(friendPages);
    const result = await updateFriendsDataFile(friendsDataPath, friendItems);
    if (result === 'unchanged') {
      unchangedFiles += 1;
    } else {
      changedFiles += 1;
      console.log(`${friendsFileExists ? 'Updated' : 'Created'} ${path.relative(process.cwd(), friendsDataPath)}`);
    }
  }

  {
    const diaryFileExists = await fileExists(diaryDataPath);
    const diaryItems = await buildDiaryItems(n2m, diaryPages);
    const result = await updateDiaryDataFile(diaryDataPath, diaryItems);
    if (result === 'unchanged') {
      unchangedFiles += 1;
    } else {
      changedFiles += 1;
      console.log(`${diaryFileExists ? 'Updated' : 'Created'} ${path.relative(process.cwd(), diaryDataPath)}`);
    }
  }

  {
    const projectsFileExists = await fileExists(projectsDataPath);
    const projectItems = buildProjectItems(projectPages);
    const result = await updateProjectsDataFile(projectsDataPath, projectItems);
    if (result === 'unchanged') {
      unchangedFiles += 1;
    } else {
      changedFiles += 1;
      console.log(`${projectsFileExists ? 'Updated' : 'Created'} ${path.relative(process.cwd(), projectsDataPath)}`);
    }
  }

  console.log(
    `Sync complete. posts=${processedPosts}, about=${aboutPages.length}, friends=${friendPages.length}, diary=${diaryPages.length}, projects=${projectPages.length}, changed=${changedFiles}, unchanged=${unchangedFiles}, skippedByWindow=${skippedByWindow}, deletedPosts=${deleted}, skippedOther=${skipped}, deleteMissingPosts=${CONFIG.deleteMissing}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
