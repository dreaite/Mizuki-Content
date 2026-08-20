# Notion Sync (Posts)

[中文说明（简体）](./README.zh-CN.md)

This repository includes a GitHub Action that syncs content from a Notion database into:

- `posts/` (blog posts)
- `spec/about.md` (about page)
- `data/friends.ts` (friend links)
- `data/diary.ts` (diary data)
- `data/projects.ts` (project cards)

## Files

- Workflow: `.github/workflows/sync-notion-posts.yml`
- Sync script: `.github/scripts/sync-notion-posts.mjs`

## Goal

Keep local content files consistent with the Notion database by `type`.

- Notion `Post` pages are converted to Markdown and written to `posts/`
- The latest Notion `About` page is written to `spec/about.md`; data translation also generates `spec/about.{lang}.md`
- Notion `Friend` pages are mapped into `data/friends.ts`
- Notion `Diary` pages are mapped into `data/diary.ts`
- Notion `Project` pages are mapped into `data/projects.ts`
- Existing files are updated when content/front matter changes
- Notion-flavored Markdown is converted to CommonMark before writing posts: block lines regain paragraph spacing, `<br>` line breaks are preserved, `<empty-block/>` becomes spacing, and synced-block wrappers are removed while keeping their children
- Files missing from Notion are deleted (when `NOTION_SYNC_DELETE_MISSING=true`)
- When posts are changed and pushed, the workflow can directly trigger Cloudflare Pages Deploy Hook (`CF_DEPLOY_HOOK`)

## Required GitHub Secrets

- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`
- `CF_DEPLOY_HOOK` (if using the built-in Cloudflare deploy hook step in `sync-notion-posts.yml`)
- `NOTION_POST_TRANSLATION_API_KEY` (only when enabling LLM translation)
- `NOTION_COVER_R2_ACCESS_KEY_ID` / `NOTION_COVER_R2_SECRET_ACCESS_KEY` (only when enabling R2 cover sync)

## Optional GitHub Variables

- `NOTION_DATA_SOURCE_ID`
  - Recommended when using newer Notion API / SDK v5 and your database contains multiple data sources.
  - If omitted, the script will try to resolve a data source automatically from `NOTION_DATABASE_ID`.
- `NOTION_SYNC_INDEX_PATH`
  - Persistent body-sync index path (default `.github/notion-sync-index.json`). Missing, malformed, or unsupported indexes safely fall back to body cache misses.
- `NOTION_MARKDOWN_CONCURRENCY` / `NOTION_MARKDOWN_MIN_START_INTERVAL_MS`
  - Body-reader worker count and shared Notion HTTP request-start interval (defaults: `2` / `350` ms).
- `NOTION_POST_TRANSLATION_ENABLED`
  - Set to `true` to enable translating `Post` markdown body via an OpenAI-compatible Chat Completions API.
- `NOTION_POST_TRANSLATION_LANGS`
  - Comma-separated target language codes, e.g. `en,ja`.
- `NOTION_DATA_TRANSLATION_ENABLED`
  - Enables Codex translation for `About`, `Project`, and `Diary`. Enabled by default; set it to `false` explicitly to disable it.
- `NOTION_DATA_TRANSLATION_LANGS`
  - Comma-separated target languages, independent from Post translation. Defaults to `en,ja` for the site's current English and Japanese routes.
- `NOTION_DATA_TRANSLATION_SOURCE_LANG`
  - Source language for Notion data (default: `zh-cn`).
- `NOTION_DATA_TRANSLATION_MAX_ITEMS` / `NOTION_DATA_TRANSLATION_MAX_CHARS`
  - Maximum items / approximate JSON characters per structured data translation batch (defaults: `20` / `12000`).
- `NOTION_POST_TRANSLATION_MODEL`
  - Model name used for translation requests.
- `NOTION_POST_TRANSLATION_API_BASE_URL`
  - Optional API base URL, default: `https://api.openai.com/v1`.
- `NOTION_POST_TRANSLATION_TIMEOUT_MS`
  - Optional LLM translation request timeout in milliseconds.
  - Default `600000` (10 minutes). Increase for long posts (e.g. `900000` = 15 minutes).
- `NOTION_POST_TRANSLATION_SOURCE_LANG`
  - Optional source language hint (prompt context only), e.g. `zh-cn`.
- `NOTION_POST_TRANSLATION_SYSTEM_PROMPT`
  - Optional custom system prompt for translation behavior.
- `NOTION_PRESERVE_EXISTING_POST_DESCRIPTIONS`
  - Keeps an existing Markdown `description` when Notion content or translations are regenerated, so hand-written SEO copy is not overwritten. Defaults to `true`; set to `false` to regenerate descriptions from Notion and translation output.
- `NOTION_COVER_R2_ENABLED`
  - Set to `true` to upload Notion image assets to Cloudflare R2 and write stable public URLs.
  - Covers:
    - `Post` cover image (`frontmatter.image`)
    - `Friend` cover image field (`imgurl`) in generated TS data
    - `Project` cover image fields in generated TS data
    - Markdown body images in `Post`, `About`, and `Diary` content (including diary extracted `images`)
- `NOTION_COVER_R2_ENDPOINT`
  - R2 S3 API endpoint, e.g. `https://<accountid>.r2.cloudflarestorage.com`.
- `NOTION_COVER_R2_REGION`
  - Usually `auto` for R2.
- `NOTION_COVER_R2_BUCKET`
  - R2 bucket name used to store cover images.
- `NOTION_COVER_R2_PUBLIC_BASE_URL`
  - Public URL base for the bucket (custom domain or `*.r2.dev`), e.g. `https://static.example.com`.
- `NOTION_COVER_R2_PREFIX`
  - Optional object key prefix (default `notion/covers`).
- `NOTION_COVER_R2_CACHE_CONTROL`
  - Optional uploaded object cache header (default `public, max-age=3600`).

## Notion Database Property Mapping (default names)

The workflow passes these defaults. Change them in the workflow if your column names differ.

- `type` -> content type router (`Post` / `About` / `Friend` / `Diary` / `Project`)
- `title` -> front matter `title`
- `createTime` -> front matter `published` (date only `YYYY-MM-DD`)
- `date` -> front matter `updated` (date only `YYYY-MM-DD`)
- `summary` -> front matter `description` for new posts; existing descriptions are preserved by default
- `slug` -> front matter `permalink` and output filename
- page cover -> front matter `image`
- `tags` -> front matter `tags`
- `category` -> front matter `category`
- `status` -> publication state (`Draft` keeps the source as `draft: true`; `Invisible` removes the source and translated files)

Additional mappings:

- `type = About` -> writes markdown body to `spec/about.md`
- `type = Friend`
  - `id`: generated by updated-time sort order (newest first)
  - `title`: Notion `title`
  - `imgurl`: page cover URL
  - `desc`: Notion `summary`
  - `siteurl`: Notion `url`
  - `tags`: Notion `tags`
- `type = Diary`
  - `id`: generated by updated-time sort order (newest first)
  - `content`: markdown body with image blocks removed (text/newlines preserved)
  - `date`: Notion `updateTime` (ISO 8601 UTC string, fallback `last_edited_time`)
  - `images`: extracted image URLs from body
- `type = Project`
  - `id`: Notion `title` string
  - `title`: Notion `title`
  - `description`: Notion `summary`
  - `image`: page cover URL
  - `startDate` / `endDate`: Notion `date` (`endDate` only when end exists)
  - `category`: Notion `category`
  - `techStack`: Notion `techStack`
  - `status`: Notion `status`
  - `featured`: Notion `featured` (`true`/`false` select, empty means omit)
  - `liveDemo`: Notion `liveDemo`
  - `sourceCode`: Notion `url`
  - `tags`: Notion `tags`

## Expected Notion Property Types

Recommended types:

- `type`: `select` or `status` or `rich_text`
- `title`: `title`
- `createTime`: `created time` (or any property that can resolve to a date/time string)
- `date`: `date`
- `summary`: `rich_text`
- `slug`: `rich_text` or `formula`
- `tags`: `multi_select`
- `category`: `select` (or `multi_select`, first value will be used)
- `status`: `status` or `select`
- `techStack`: `multi_select` (recommended)
- `featured`: `select` (values: empty / `false` / `true`)
- `liveDemo`: `url` or `rich_text`

## Deletion Behavior (Important)

The workflow currently sets:

- `NOTION_SYNC_DELETE_MISSING=true`

This means:

- Any `*.md` file under `posts/` that is **not** produced from a current Notion `Post` page will be deleted on sync.
- A `Post` with `status = Invisible` is always excluded. Its current slug, old slugs recorded by the sync index, source Markdown, and generated language variants are deleted before any body read regardless of `NOTION_SYNC_DELETE_MISSING`; the production full sweep also covers historical files during the initial cold-index run.

If you still have manually maintained posts under `posts/`, either:

1. Move them out of `posts/`, or
2. Change `NOTION_SYNC_DELETE_MISSING` to `'false'` in `.github/workflows/sync-notion-posts.yml`

## Filename Rules

- Output path is derived from `slug`
- `slug` supports nested paths (example: `guide/intro` -> `posts/guide/intro.md`)
- `.md` is appended automatically if missing
- When translation is enabled, translated posts are written next to the source file using `${filename}.${lang}.md`
  - Example: `posts/guide/intro.md` -> `posts/guide/intro.en.md`
  - The translated file frontmatter adds `lang: '<lang>'`
  - The translated file does not write a frontmatter `permalink` (route comes from the translated filename)

## Post Translation Behavior (LLM)

- Only translates `type = Post`
- Skips translation when the post is a draft (`draft: true`)
- Translates the Markdown **body** and frontmatter `title` / `description`
- Translation runs when the source post is created/updated by the normal Notion sync flow
- If a translated file for a configured language is missing, it will be created the next time that post is processed by sync
- If `NOTION_SYNC_DELETE_MISSING=true`, stale translated `*.{lang}.md` files are also deleted when they are no longer produced (for example, source post removed or language removed from config)

## About / Project / Diary Localization

- `Friend` data is never translated and continues to sync as before.
- `About` Markdown is generated as `spec/about.{lang}.md`; the site selects an exact locale file and shows an empty state when it is absent.
- Stale About variants are removed when the source changes while translation is disabled, or when a locale is removed from the enabled target list.
- `Project` translates only `title` and `description`; URLs, dates, status, category, and tech stack remain structural source data.
- `Diary` translates only `content`; dates and image URLs are not sent for translation.
- Generated records keep the source text at the top level, write its `lang`, and add exact target-language values under `translations`.
- The site uses an exact language match and hides an item when that translation is missing; it does not fall back to the source language.
- Translation runs in validated, bounded JSON batches per target language. Data files are not written until all enabled batches pass validation.
- `.github/notion-data-translation-cache.json` reuses translations only when the same Notion page has the same source-text hash, prompt revision, and Codex model/profile, avoiding hourly retranslations while preventing stale-policy reuse.

## Running

- Manual run: GitHub Actions -> `Sync Notion Posts` -> `Run workflow`
- Scheduled run: the workflow currently runs hourly and can also be triggered manually
- One-time index bootstrap: manually run the workflow with `bootstrap_index_only=true`. It fetches only the lightweight Notion page list, validates that every current Post/About translation already exists, seeds Diary sources from the generated `data/diary.ts`, and writes `.github/notion-sync-index.json` without reading bodies or invoking translation. It refuses to run once the index already contains entries.

## Sync Performance and Persistent Index

- Every run still fetches the complete paginated page list so deletion, type changes, and `Invisible` remain fully reconciled. The query projects only properties used by sync. If `title/type/status/slug` is missing, the script retries once without projection before any deletion and aborts if the full response is still incomplete.
- `.github/notion-sync-index.json` records page ID, `last_edited_time`, output signature, renderer revision, and generated paths. A body is skipped only on an exact index hit with its output present; the index is never a visibility source of truth.
- `Post` and `About` no longer use a time window that repeatedly downloads unchanged bodies. `Diary` fetches only changed pages and caches only page-local `content/images`; membership, ordering, dates, and contiguous IDs are rebuilt from the current full list every run.
- Body reads use two workers and the Notion client applies a fetch-level 350ms request-start interval; file writes, translation, and Git checkpoints remain serial to avoid races.
- Bodies are read exclusively through Notion's official Markdown API (`2026-03-11`). A truncated response or any unknown block aborts the run without advancing the persistent index or overwriting the affected page; there is no legacy Block-renderer fallback.
- The index is written only after bodies, translations, data writes, and directive normalization all succeed. An index-only commit is pushed to the content repository without triggering a Mizuki deployment.

## Notes

- Notion cover/file URLs are often temporary signed URLs and may expire.
- When `NOTION_COVER_R2_ENABLED=true`, the sync script uploads Notion image assets to R2 and stores R2 public URLs instead of temporary signed Notion URLs.
- R2 objects store a SHA-1 of the source URL without temporary query/hash parameters. A matching `HeadObject` metadata value reuses the object without downloading or uploading it again; legacy objects without this metadata are uploaded once to backfill it.
- Existing `Post` / `About` markdown files with expired Notion image URLs are backfilled to R2 URLs during later sync runs (even if the body did not change).
- Markdown directives at the start of a line, such as `::github{repo="owner/repo"}` or future custom `::card{...}` blocks, automatically normalize smart quotes (`“”` / `‘’`) inside the attribute braces to ASCII quotes during sync.
- The workflow auto-commits `posts/` changes back to the current branch.
- `Friend` / `Diary` data files are regenerated from current Notion rows each run (then `writeIfChanged` avoids no-op writes). Diary bodies are cached by page ID, while ordering and IDs are never restored from cache.
- `Project` data file (`data/projects.ts`) is also regenerated each run to keep the local dataset aligned with current Notion rows.
- The workflow pins `@notionhq/client@5.25.2`; Markdown API version changes invalidate the persistent body index.
