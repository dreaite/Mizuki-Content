import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import { HeadObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { Agent as UndiciAgent } from 'undici';
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
  postTranslationTimeoutMs: parsePositiveInt(process.env.NOTION_POST_TRANSLATION_TIMEOUT_MS, 10 * 60 * 1000),
  notionCoverR2Enabled: parseBoolean(process.env.NOTION_COVER_R2_ENABLED, false),
  notionCoverR2Endpoint: String(process.env.NOTION_COVER_R2_ENDPOINT || '').trim().replace(/\/+$/, ''),
  notionCoverR2Region: String(process.env.NOTION_COVER_R2_REGION || 'auto').trim() || 'auto',
  notionCoverR2Bucket: String(process.env.NOTION_COVER_R2_BUCKET || '').trim(),
  notionCoverR2PublicBaseUrl: String(process.env.NOTION_COVER_R2_PUBLIC_BASE_URL || '').trim().replace(/\/+$/, ''),
  notionCoverR2Prefix: String(process.env.NOTION_COVER_R2_PREFIX || 'notion/covers').trim().replace(/^\/+|\/+$/g, ''),
  notionCoverR2AccessKeyId: process.env.NOTION_COVER_R2_ACCESS_KEY_ID || '',
  notionCoverR2SecretAccessKey: process.env.NOTION_COVER_R2_SECRET_ACCESS_KEY || '',
  notionCoverR2CacheControl: String(process.env.NOTION_COVER_R2_CACHE_CONTROL || 'public, max-age=3600')
    .trim(),
  syncCheckpointEveryPosts: parsePositiveInt(process.env.NOTION_SYNC_CHECKPOINT_EVERY_POSTS, 0),
  syncCheckpointPushEnabled: parseBoolean(process.env.NOTION_SYNC_CHECKPOINT_PUSH_ENABLED, false),
  syncCheckpointMarkerPath: String(process.env.NOTION_SYNC_CHECKPOINT_MARKER_PATH || '.notion-sync-checkpoint-pushed')
    .trim(),
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

let postTranslationHttpAgent = null;

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

function parseUrlOrEmpty(value) {
  const text = String(value || '').trim();
  if (!text) return '';
  try {
    return new URL(text).toString();
  } catch {
    throw new Error(`Invalid URL: ${value}`);
  }
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

async function readFileUtf8IfExists(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    if (error?.code === 'ENOENT') return '';
    throw error;
  }
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

function extractFrontMatterField(markdown, fieldName) {
  const source = String(markdown || '');
  const frontMatterMatch = source.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!frontMatterMatch) return '';

  const body = frontMatterMatch[1];
  const escapedField = String(fieldName || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const lineMatch = body.match(new RegExp(`^${escapedField}:\\s*(.+?)\\s*$`, 'm'));
  if (!lineMatch) return '';

  return parseLooseYamlScalar(lineMatch[1]);
}

function stripMarkdownFrontMatter(markdown) {
  const source = String(markdown || '');
  return source.replace(/^---\n[\s\S]*?\n---(?:\n|$)/, '');
}

async function readMarkdownFrontMatterImage(filePath) {
  const content = await readFileUtf8IfExists(filePath);
  if (!content) return '';
  return extractFrontMatterField(content, 'image');
}

async function markdownFileContainsTemporaryNotionImageUrl(filePath) {
  const content = await readFileUtf8IfExists(filePath);
  if (!content) return false;
  return /notionusercontent\.com|prod-files-secure\.s3\./i.test(content);
}

async function notionPageToMarkdownString(n2m, pageId) {
  const pageMdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(pageMdBlocks);
  return typeof mdString === 'string' ? mdString : mdString?.parent || '';
}

function getPageCoverInfo(page) {
  const cover = page?.cover;
  if (!cover) {
    return {
      type: '',
      url: '',
      expiryTime: '',
      filename: '',
    };
  }

  if (cover.type === 'external') {
    return {
      type: 'external',
      url: cover.external?.url || '',
      expiryTime: '',
      filename: '',
    };
  }

  if (cover.type === 'file') {
    const fileUrl = cover.file?.url || '';
    return {
      type: 'file',
      url: fileUrl,
      expiryTime: String(cover.file?.expiry_time || '').trim(),
      filename: extractFilenameFromUrl(fileUrl),
    };
  }

  return {
    type: String(cover.type || ''),
    url: '',
    expiryTime: '',
    filename: '',
  };
}

function getPageCoverUrl(page) {
  return getPageCoverInfo(page).url;
}

function extractFilenameFromUrl(value) {
  const text = String(value || '').trim();
  if (!text) return '';

  try {
    const parsed = new URL(text);
    const segments = parsed.pathname.split('/').filter(Boolean);
    return decodeURIComponent(segments[segments.length - 1] || '');
  } catch {
    return '';
  }
}

function sanitizeFileName(value, fallback = 'cover') {
  const fileName = String(value || '').trim();
  const normalized = fileName
    .replace(/[\\/:*?"<>|]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  return normalized || fallback;
}

function stripQueryAndHash(value) {
  return String(value || '').replace(/[?#].*$/, '');
}

function fileExtensionFromName(value) {
  const source = stripQueryAndHash(String(value || ''));
  const match = source.match(/\.([a-zA-Z0-9]+)$/);
  return match ? match[1].toLowerCase() : '';
}

function guessImageContentType(fileName) {
  const ext = fileExtensionFromName(fileName);
  switch (ext) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'webp':
      return 'image/webp';
    case 'gif':
      return 'image/gif';
    case 'avif':
      return 'image/avif';
    case 'svg':
      return 'image/svg+xml';
    default:
      return 'application/octet-stream';
  }
}

function normalizeNotionCoverR2Prefix() {
  return CONFIG.notionCoverR2Prefix || 'notion/covers';
}

function toStablePageKey(pageId) {
  return String(pageId || '')
    .replace(/-/g, '')
    .toLowerCase();
}

function buildNotionCoverR2ObjectKey(pageId, coverInfo) {
  const pageKey = toStablePageKey(pageId);
  const rawFileName = sanitizeFileName(coverInfo?.filename || 'cover');
  const ext = fileExtensionFromName(rawFileName);
  const fileName = ext ? rawFileName : `${rawFileName}.bin`;
  return `${normalizeNotionCoverR2Prefix()}/${pageKey}/${fileName}`;
}

function sha1Hex(value) {
  return crypto.createHash('sha1').update(String(value || '')).digest('hex');
}

function buildNotionInlineImageR2ObjectKey(pageId, sourceUrl) {
  const pageKey = toStablePageKey(pageId) || 'unknown-page';
  const hashSource = stripQueryAndHash(sourceUrl) || String(sourceUrl || '');
  const hash = sha1Hex(hashSource).slice(0, 16);
  const rawFileName = sanitizeFileName(extractFilenameFromUrl(sourceUrl) || `image-${hash}`);
  const ext = fileExtensionFromName(rawFileName);
  const fileName = ext ? rawFileName : `${rawFileName}.bin`;
  return `${normalizeNotionCoverR2Prefix()}/${pageKey}/inline/${hash}-${fileName}`;
}

function buildPublicUrlFromBase(baseUrl, objectKey) {
  const normalizedBase = parseUrlOrEmpty(baseUrl);
  const encodedKey = String(objectKey || '')
    .split('/')
    .filter((segment) => segment.length > 0)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `${normalizedBase}/${encodedKey}`;
}

function isTemporaryNotionAssetUrl(url) {
  const text = String(url || '').trim();
  if (!text) return false;
  return (
    /notionusercontent\.com/i.test(text) ||
    /prod-files-secure\.s3\./i.test(text) ||
    /[?&]X-Amz-Expires=/i.test(text) ||
    /[?&]exp=/i.test(text)
  );
}

function extractUrlsFromMarkdownImages(markdown) {
  const source = String(markdown || '');
  const urls = new Set();

  const markdownImagePattern = /!\[[^\]]*?\]\((.*?)\)/g;
  source.replace(markdownImagePattern, (_, rawUrl) => {
    let candidate = String(rawUrl || '').trim();
    if (!candidate) return '';

    if (candidate.startsWith('<')) {
      const end = candidate.indexOf('>');
      if (end > 0) {
        candidate = candidate.slice(1, end);
      }
    } else if (/\s/.test(candidate)) {
      candidate = candidate.split(/\s+/)[0];
    }

    candidate = candidate.trim();
    if (candidate) {
      urls.add(candidate);
    }
    return '';
  });

  const htmlImagePattern = /<img\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>/gi;
  source.replace(htmlImagePattern, (_, rawUrl) => {
    const candidate = String(rawUrl || '').trim();
    if (candidate) {
      urls.add(candidate);
    }
    return '';
  });

  return [...urls];
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

function getPostTranslationHttpAgent() {
  if (!CONFIG.postTranslationEnabled) return undefined;
  if (postTranslationHttpAgent) return postTranslationHttpAgent;

  // Raise Undici header/body timeouts for long-running LLM translations.
  postTranslationHttpAgent = new UndiciAgent({
    headersTimeout: CONFIG.postTranslationTimeoutMs,
    bodyTimeout: CONFIG.postTranslationTimeoutMs,
  });

  return postTranslationHttpAgent;
}

async function translatePostMarkdownBody(markdownBody, { targetLanguage, title }) {
  const body = String(markdownBody || '');
  if (!body.trim()) return '';

  let response;
  try {
    response = await fetch(`${CONFIG.postTranslationApiBaseUrl}/chat/completions`, {
      method: 'POST',
      signal: AbortSignal.timeout(CONFIG.postTranslationTimeoutMs),
      dispatcher: getPostTranslationHttpAgent(),
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
  } catch (error) {
    const causeCode = error?.cause?.code || error?.code || '';
    throw new Error(
      `LLM translation request failed before response (timeout=${CONFIG.postTranslationTimeoutMs}ms${causeCode ? `, code=${causeCode}` : ''}). ${error?.message || error}`,
      { cause: error }
    );
  }

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

function validateNotionCoverR2Config() {
  if (!CONFIG.notionCoverR2Enabled) return;

  if (!CONFIG.notionCoverR2Endpoint) {
    throw new Error('NOTION_COVER_R2_ENABLED=true but NOTION_COVER_R2_ENDPOINT is empty.');
  }
  if (!CONFIG.notionCoverR2Bucket) {
    throw new Error('NOTION_COVER_R2_ENABLED=true but NOTION_COVER_R2_BUCKET is empty.');
  }
  if (!CONFIG.notionCoverR2PublicBaseUrl) {
    throw new Error('NOTION_COVER_R2_ENABLED=true but NOTION_COVER_R2_PUBLIC_BASE_URL is empty.');
  }
  if (!CONFIG.notionCoverR2AccessKeyId || !CONFIG.notionCoverR2SecretAccessKey) {
    throw new Error(
      'NOTION_COVER_R2_ENABLED=true but NOTION_COVER_R2_ACCESS_KEY_ID / NOTION_COVER_R2_SECRET_ACCESS_KEY is missing.'
    );
  }

  parseUrlOrEmpty(CONFIG.notionCoverR2Endpoint);
  parseUrlOrEmpty(CONFIG.notionCoverR2PublicBaseUrl);
}

function createNotionCoverR2Client() {
  if (!CONFIG.notionCoverR2Enabled) return null;

  return new S3Client({
    region: CONFIG.notionCoverR2Region || 'auto',
    endpoint: CONFIG.notionCoverR2Endpoint,
    forcePathStyle: true,
    credentials: {
      accessKeyId: CONFIG.notionCoverR2AccessKeyId,
      secretAccessKey: CONFIG.notionCoverR2SecretAccessKey,
    },
  });
}

function createNotionR2UploadCache() {
  return {
    sourceUrlCache: new Map(),
    objectHeadCache: new Map(),
  };
}

async function uploadRemoteImageUrlToR2(s3Client, uploadCache, { sourceUrl, objectKey, suggestedFileName, logLabel }) {
  const url = String(sourceUrl || '').trim();
  if (!s3Client || !CONFIG.notionCoverR2Enabled || !url) return url;

  const sourceUrlCache = getNotionR2SourceUrlCache(uploadCache);
  const cacheKey = `${objectKey}|${url}`;
  if (sourceUrlCache?.has(cacheKey)) {
    return sourceUrlCache.get(cacheKey);
  }

  const publicUrl = buildPublicUrlFromBase(CONFIG.notionCoverR2PublicBaseUrl, objectKey);
  if (sourceUrlCache) {
    sourceUrlCache.set(cacheKey, publicUrl);
  }

  const sourceUrlSha1 = buildStableRemoteImageSourceSha1(url);
  const existingObject = await headR2ObjectIfExists(s3Client, uploadCache, objectKey);
  const existingSourceUrlSha1 = normalizeR2SourceSha1Metadata(existingObject?.metadata);

  if (existingObject?.exists && existingSourceUrlSha1 && existingSourceUrlSha1 === sourceUrlSha1) {
    return publicUrl;
  }

  const response = await fetch(url);
  if (!response.ok) {
    if (sourceUrlCache) sourceUrlCache.delete(cacheKey);
    const responseText = await response.text().catch(() => '');
    if (existingObject?.exists && isExpiredNotionAssetResponse(response.status, responseText)) {
      console.warn(
        `Reusing existing R2 object after expired Notion image URL${logLabel ? ` [${logLabel}]` : ''}: ${objectKey}`
      );
      return publicUrl;
    }
    throw new Error(
      `Failed to download Notion image for R2 upload (${response.status} ${response.statusText})${logLabel ? ` [${logLabel}]` : ''}: ${responseText.slice(0, 300)}`
    );
  }

  const arrayBuffer = await response.arrayBuffer();
  const bodyBuffer = Buffer.from(arrayBuffer);
  const contentType = response.headers.get('content-type') || guessImageContentType(suggestedFileName);

  await s3Client.send(
    new PutObjectCommand({
      Bucket: CONFIG.notionCoverR2Bucket,
      Key: objectKey,
      Body: bodyBuffer,
      ContentType: contentType,
      CacheControl: CONFIG.notionCoverR2CacheControl || undefined,
      Metadata: {
        'notion-source-sha1': sourceUrlSha1,
      },
    })
  );
  setHeadR2ObjectCache(uploadCache, objectKey, {
    exists: true,
    metadata: { 'notion-source-sha1': sourceUrlSha1 },
  });

  return publicUrl;
}

async function uploadNotionCoverToR2(s3Client, uploadCache, { pageId, coverInfo }) {
  if (!s3Client || !coverInfo || coverInfo.type !== 'file' || !coverInfo.url) {
    return coverInfo?.url || '';
  }

  const objectKey = buildNotionCoverR2ObjectKey(pageId, coverInfo);
  return uploadRemoteImageUrlToR2(s3Client, uploadCache, {
    sourceUrl: coverInfo.url,
    objectKey,
    suggestedFileName: coverInfo.filename,
    logLabel: `cover:${pageId}`,
  });
}

async function resolveCoverImageUrlForMeta(page, meta, s3Client, uploadCache) {
  if (!meta || typeof meta !== 'object') return '';
  const coverInfo = meta.coverInfo || getPageCoverInfo(page);
  const sourceUrl = normalizeSingleLine(coverInfo?.url || meta.image || '');

  if (!CONFIG.notionCoverR2Enabled) {
    return sourceUrl;
  }

  if (coverInfo?.type !== 'file' || !sourceUrl) {
    return sourceUrl;
  }

  return uploadNotionCoverToR2(s3Client, uploadCache, {
    pageId: meta.pageId || page?.id || '',
    coverInfo,
  });
}

async function rewriteNotionMarkdownImageUrlsToR2(markdown, { pageId, s3Client, uploadCache, logLabel } = {}) {
  const source = String(markdown || '');
  if (!source || !CONFIG.notionCoverR2Enabled || !s3Client) {
    return source;
  }

  const notionImageUrls = extractUrlsFromMarkdownImages(source).filter(isTemporaryNotionAssetUrl);
  if (notionImageUrls.length === 0) {
    return source;
  }

  let output = source;
  const replacements = new Map();

  for (const imageUrl of notionImageUrls) {
    if (replacements.has(imageUrl)) continue;

    const objectKey = buildNotionInlineImageR2ObjectKey(pageId, imageUrl);
    const replacementUrl = await uploadRemoteImageUrlToR2(s3Client, uploadCache, {
      sourceUrl: imageUrl,
      objectKey,
      suggestedFileName: extractFilenameFromUrl(imageUrl) || 'image',
      logLabel: `${logLabel || 'markdown'}:${pageId}`,
    });
    replacements.set(imageUrl, replacementUrl);
  }

  for (const [fromUrl, toUrl] of replacements) {
    output = output.split(fromUrl).join(toUrl);
  }

  return output;
}

function getExpectedR2CoverPublicUrl(meta) {
  if (!CONFIG.notionCoverR2Enabled) return '';
  const coverInfo = meta?.coverInfo;
  if (!coverInfo || coverInfo.type !== 'file' || !coverInfo.url) return '';
  const objectKey = buildNotionCoverR2ObjectKey(meta.pageId || '', coverInfo);
  return buildPublicUrlFromBase(CONFIG.notionCoverR2PublicBaseUrl, objectKey);
}

function getNotionR2SourceUrlCache(uploadCache) {
  if (!uploadCache) return null;
  if (typeof uploadCache.has === 'function' && typeof uploadCache.get === 'function') {
    return uploadCache;
  }
  if (
    typeof uploadCache === 'object' &&
    uploadCache &&
    uploadCache.sourceUrlCache &&
    typeof uploadCache.sourceUrlCache.has === 'function'
  ) {
    return uploadCache.sourceUrlCache;
  }
  return null;
}

function getNotionR2ObjectHeadCache(uploadCache) {
  if (!uploadCache || typeof uploadCache !== 'object') return null;
  const cache = uploadCache.objectHeadCache;
  if (!cache || typeof cache.has !== 'function' || typeof cache.get !== 'function') return null;
  return cache;
}

function buildStableRemoteImageSourceSha1(sourceUrl) {
  const stableSource = stripQueryAndHash(sourceUrl) || String(sourceUrl || '');
  return sha1Hex(stableSource);
}

function normalizeR2SourceSha1Metadata(metadata) {
  if (!metadata || typeof metadata !== 'object') return '';
  const raw =
    metadata['notion-source-sha1'] ||
    metadata.notionSourceSha1 ||
    metadata['x-amz-meta-notion-source-sha1'] ||
    '';
  const value = String(raw || '').trim().toLowerCase();
  return /^[0-9a-f]{40}$/.test(value) ? value : '';
}

function isS3ObjectNotFoundError(error) {
  const status = Number(error?.$metadata?.httpStatusCode);
  const name = String(error?.name || error?.Code || '').toLowerCase();
  return status === 404 || name === 'notfound' || name === 'nosuchkey';
}

async function headR2ObjectIfExists(s3Client, uploadCache, objectKey) {
  if (!s3Client || !objectKey) return { exists: false, metadata: null };

  const cache = getNotionR2ObjectHeadCache(uploadCache);
  if (cache?.has(objectKey)) {
    return cache.get(objectKey);
  }

  try {
    const response = await s3Client.send(
      new HeadObjectCommand({
        Bucket: CONFIG.notionCoverR2Bucket,
        Key: objectKey,
      })
    );
    const entry = {
      exists: true,
      metadata: response?.Metadata || null,
    };
    if (cache) cache.set(objectKey, entry);
    return entry;
  } catch (error) {
    if (isS3ObjectNotFoundError(error)) {
      const entry = { exists: false, metadata: null };
      if (cache) cache.set(objectKey, entry);
      return entry;
    }
    throw error;
  }
}

function setHeadR2ObjectCache(uploadCache, objectKey, entry) {
  const cache = getNotionR2ObjectHeadCache(uploadCache);
  if (!cache || !objectKey) return;
  cache.set(objectKey, entry);
}

function isExpiredNotionAssetResponse(status, bodyText) {
  if (Number(status) !== 403) return false;
  const text = String(bodyText || '');
  return /request has expired/i.test(text) || /<Code>AccessDenied<\/Code>/i.test(text);
}

async function shouldBackfillPostCoverToR2(filePath, meta) {
  if (!CONFIG.notionCoverR2Enabled) return false;
  if (!meta?.coverInfo || meta.coverInfo.type !== 'file' || !meta.coverInfo.url) return false;

  const expectedR2Url = getExpectedR2CoverPublicUrl(meta);
  if (!expectedR2Url) return false;

  const existingImage = normalizeSingleLine(await readMarkdownFrontMatterImage(filePath));
  if (!existingImage) return true;
  if (existingImage === expectedR2Url) return false;

  // Migrate expired/signed Notion URLs to the configured R2 public URL.
  return isTemporaryNotionAssetUrl(existingImage);
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
  const coverInfo = getPageCoverInfo(page);

  const rawTitle = normalizeSingleLine(propertyToString(titleProp));
  const title = rawTitle || `Untitled ${page.id}`;

  const type = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.typeProperty)));
  const description = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.summaryProperty)));
  const rawSlug = normalizeSingleLine(propertyToString(propertyByName(properties, CONFIG.slugProperty)));
  const fallbackSlug = sanitizeSlug(title) || page.id.replace(/-/g, '');
  const permalink = sanitizeSlug(rawSlug) || fallbackSlug;
  const image = normalizeSingleLine(coverInfo.url);
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
    coverInfo,
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

async function buildDiaryItems(n2m, diaryMetas, { s3Client, uploadCache } = {}) {
  const sorted = [...diaryMetas].sort(sortByUpdatedDesc);
  const items = [];

  for (let index = 0; index < sorted.length; index += 1) {
    const meta = sorted[index];
    const diaryDate = toDiaryDateIso(meta);
    const rawMarkdown = await notionPageToMarkdownString(n2m, meta.pageId);
    const markdown = await rewriteNotionMarkdownImageUrlsToR2(rawMarkdown, {
      pageId: meta.pageId,
      s3Client,
      uploadCache,
      logLabel: 'diary',
    });
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

function createSyncCheckpointState() {
  return {
    pendingChangedPosts: 0,
    pushedCount: 0,
    gitIdentityConfigured: false,
  };
}

function shouldUseSyncCheckpointPush() {
  return CONFIG.syncCheckpointPushEnabled && CONFIG.syncCheckpointEveryPosts > 0;
}

function getSyncTrackedPaths() {
  return [
    CONFIG.postsDir,
    CONFIG.aboutPath,
    CONFIG.friendsDataPath,
    CONFIG.diaryDataPath,
    CONFIG.projectsDataPath,
  ];
}

function runGitCommand(args, { allowFailure = false } = {}) {
  const result = spawnSync('git', args, {
    cwd: process.cwd(),
    encoding: 'utf8',
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0 && !allowFailure) {
    const stderr = String(result.stderr || '').trim();
    const stdout = String(result.stdout || '').trim();
    throw new Error(`git ${args.join(' ')} failed (${result.status}): ${stderr || stdout || 'unknown error'}`);
  }

  return result;
}

function ensureCheckpointGitIdentity(state) {
  if (state.gitIdentityConfigured) return;

  const currentName = String(runGitCommand(['config', '--get', 'user.name'], { allowFailure: true }).stdout || '').trim();
  const currentEmail = String(runGitCommand(['config', '--get', 'user.email'], { allowFailure: true }).stdout || '')
    .trim();

  if (!currentName) {
    runGitCommand(['config', 'user.name', 'github-actions[bot]']);
  }
  if (!currentEmail) {
    runGitCommand(['config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com']);
  }

  state.gitIdentityConfigured = true;
}

function hasTrackedContentChangesForCheckpoint() {
  const trackedPaths = getSyncTrackedPaths();
  const result = runGitCommand(['status', '--porcelain', '--', ...trackedPaths]);
  return String(result.stdout || '').trim().length > 0;
}

function commitPendingContentChangesForCheckpoint(state) {
  const trackedPaths = getSyncTrackedPaths();

  ensureCheckpointGitIdentity(state);

  runGitCommand(['add', '-A', '--', ...trackedPaths]);

  const commitMessage = `chore(content): notion sync checkpoint (${state.pendingChangedPosts} posts)`;
  const commitResult = runGitCommand(['commit', '-m', commitMessage], { allowFailure: true });
  if (commitResult.status !== 0) {
    const output = `${commitResult.stdout || ''}\n${commitResult.stderr || ''}`;
    if (/nothing to commit/i.test(output)) {
      return false;
    }
    throw new Error(`git commit failed during checkpoint: ${output.trim()}`);
  }

  runGitCommand(['push']);
  return true;
}

async function writeSyncCheckpointMarker(pushedCount) {
  const markerPath = String(CONFIG.syncCheckpointMarkerPath || '').trim();
  if (!markerPath) return;
  const fullPath = path.resolve(process.cwd(), markerPath);
  await fs.mkdir(path.dirname(fullPath), { recursive: true });
  await fs.writeFile(fullPath, String(pushedCount), 'utf8');
}

async function maybeRunSyncCheckpointCommit(state) {
  if (!shouldUseSyncCheckpointPush()) return;
  if (state.pendingChangedPosts < CONFIG.syncCheckpointEveryPosts) return;
  if (!hasTrackedContentChangesForCheckpoint()) {
    state.pendingChangedPosts = 0;
    return;
  }

  console.log(
    `Checkpoint commit: pushing intermediate sync changes after ${state.pendingChangedPosts} changed post(s).`
  );
  const pushed = commitPendingContentChangesForCheckpoint(state);
  state.pendingChangedPosts = 0;
  if (!pushed) return;

  state.pushedCount += 1;
  await writeSyncCheckpointMarker(state.pushedCount);
}

async function main() {
  validatePostTranslationConfig();
  validateNotionCoverR2Config();

  const notion = new Client({ auth: CONFIG.notionToken });
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const notionCoverR2Client = createNotionCoverR2Client();
  const notionR2UploadCache = createNotionR2UploadCache();
  const syncCheckpointState = createSyncCheckpointState();

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
      `Post translation enabled: languages=[${CONFIG.postTranslationLanguages.join(', ')}], model=${CONFIG.postTranslationModel}, timeoutMs=${CONFIG.postTranslationTimeoutMs}`
    );
  }
  if (CONFIG.notionCoverR2Enabled) {
    console.log(
      `Notion cover R2 sync enabled: bucket=${CONFIG.notionCoverR2Bucket}, publicBaseUrl=${CONFIG.notionCoverR2PublicBaseUrl}`
    );
  }
  if (shouldUseSyncCheckpointPush()) {
    console.log(`Sync checkpoint push enabled: every ${CONFIG.syncCheckpointEveryPosts} changed post(s).`);
    await writeSyncCheckpointMarker(0);
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
  const deferredPostTranslations = [];

  for (const page of pages) {
    if (page.archived || page.in_trash) {
      skipped += 1;
      continue;
    }

    const common = extractCommonMetadata(page);
    const type = common.type.toLowerCase();

    if (type === 'post') {
      let postChanged = false;
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
      const coverBackfillNeeded = exists && !recent ? await shouldBackfillPostCoverToR2(fullPath, meta) : false;
      const bodyImageBackfillNeeded =
        exists && !recent && CONFIG.notionCoverR2Enabled
          ? await markdownFileContainsTemporaryNotionImageUrl(fullPath)
          : false;
      let sourceWriteResult = 'skipped';
      if (!exists || recent || coverBackfillNeeded || bodyImageBackfillNeeded) {
        if (coverBackfillNeeded || bodyImageBackfillNeeded) {
          console.log(`Backfilling R2 image URLs for ${relativePath}`);
        }
        meta.image = normalizeSingleLine(
          await resolveCoverImageUrlForMeta(page, meta, notionCoverR2Client, notionR2UploadCache)
        );
        const rawMarkdownBody = await notionPageToMarkdownString(n2m, page.id);
        const markdownBody = await rewriteNotionMarkdownImageUrlsToR2(rawMarkdownBody, {
          pageId: meta.pageId,
          s3Client: notionCoverR2Client,
          uploadCache: notionR2UploadCache,
          logLabel: 'post',
        });
        const document = buildMarkdownDocument(meta, markdownBody);
        sourceWriteResult = await writeIfChanged(fullPath, document);
        if (sourceWriteResult === 'unchanged') {
          unchangedFiles += 1;
        } else {
          changedFiles += 1;
          postChanged = true;
          console.log(`${exists ? 'Updated' : 'Created'} ${path.relative(process.cwd(), fullPath)}`);
        }
      } else {
        skippedByWindow += 1;
      }

      if (CONFIG.postTranslationEnabled) {
        for (const translationTarget of translationRelativePaths) {
          const translatedFullPath = path.resolve(outputRoot, translationTarget.relativePath);
          if (!(translatedFullPath === outputRoot || translatedFullPath.startsWith(`${outputRoot}${path.sep}`))) {
            throw new Error(`Resolved translated path escapes posts directory: ${translationTarget.relativePath}`);
          }

          const translatedExists = await fileExists(translatedFullPath);
          const shouldTranslateNow = sourceWriteResult === 'written' || !translatedExists;
          if (!shouldTranslateNow) {
            continue;
          }

          deferredPostTranslations.push({
            baseRelativePath: relativePath,
            sourceFullPath: fullPath,
            translatedFullPath,
            translatedRelativePath: translationTarget.relativePath,
            translatedExists,
            languageCode: translationTarget.languageCode,
            meta: { ...meta },
          });
        }
      }

      processedPosts += 1;
      if (postChanged) {
        syncCheckpointState.pendingChangedPosts += 1;
        await maybeRunSyncCheckpointCommit(syncCheckpointState);
      }
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
      const projectMeta = extractProjectMetadata(page);
      projectMeta.image = normalizeSingleLine(
        await resolveCoverImageUrlForMeta(page, projectMeta, notionCoverR2Client, notionR2UploadCache)
      );
      projectPages.push(projectMeta);
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
    const aboutImageBackfillNeeded =
      aboutExists && !anyAboutRecent && CONFIG.notionCoverR2Enabled
        ? await markdownFileContainsTemporaryNotionImageUrl(aboutPath)
        : false;
    const selectedAbout = [...aboutPages].sort(sortByUpdatedDesc)[0];

    if (aboutPages.length > 1) {
      console.warn(
        `Found ${aboutPages.length} About pages. Using the most recently updated one: ${selectedAbout.pageId}`
      );
    }

    if (!aboutExists || anyAboutRecent || aboutImageBackfillNeeded) {
      if (aboutImageBackfillNeeded) {
        console.log(`Backfilling R2 image URLs for ${path.relative(process.cwd(), aboutPath)}`);
      }
      const rawAboutMarkdown = await notionPageToMarkdownString(n2m, selectedAbout.pageId);
      const aboutMarkdown = await rewriteNotionMarkdownImageUrlsToR2(rawAboutMarkdown, {
        pageId: selectedAbout.pageId,
        s3Client: notionCoverR2Client,
        uploadCache: notionR2UploadCache,
        logLabel: 'about',
      });
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
    const diaryItems = await buildDiaryItems(n2m, diaryPages, {
      s3Client: notionCoverR2Client,
      uploadCache: notionR2UploadCache,
    });
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

  if (CONFIG.postTranslationEnabled && deferredPostTranslations.length > 0) {
    console.log(`Processing deferred post translations: ${deferredPostTranslations.length} job(s).`);

    for (const job of deferredPostTranslations) {
      console.log(
        `${job.translatedExists ? 'Updating' : 'Creating'} translation (${job.languageCode}) for ${job.baseRelativePath}`
      );

      const sourceDocument = await readFileUtf8IfExists(job.sourceFullPath);
      if (!sourceDocument) {
        throw new Error(
          `Source post markdown is missing while generating translation: ${path.relative(process.cwd(), job.sourceFullPath)}`
        );
      }

      const sourceBody = stripMarkdownFrontMatter(sourceDocument);
      const sourceImage = normalizeSingleLine(extractFrontMatterField(sourceDocument, 'image'));
      const translatedBody = await translatePostMarkdownBody(sourceBody, {
        targetLanguage: job.languageCode,
        title: job.meta.title,
      });
      const translatedDocument = buildMarkdownDocument(
        {
          ...job.meta,
          image: sourceImage || job.meta.image,
          lang: job.languageCode,
          permalink: appendLanguageSuffixToPermalink(job.meta.permalink, job.languageCode),
        },
        translatedBody
      );
      const translatedWriteResult = await writeIfChanged(job.translatedFullPath, translatedDocument);
      if (translatedWriteResult === 'unchanged') {
        unchangedFiles += 1;
      } else {
        changedFiles += 1;
        console.log(
          `${job.translatedExists ? 'Updated' : 'Created'} ${path.relative(process.cwd(), job.translatedFullPath)}`
        );
      }
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
