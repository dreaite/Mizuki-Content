# Notion Sync (Posts)

This repository includes a GitHub Action that syncs posts from a Notion database into `posts/`.

## Files

- Workflow: `.github/workflows/sync-notion-posts.yml`
- Sync script: `.github/scripts/sync-notion-posts.mjs`

## Goal

Keep blog posts in `posts/` consistent with the Notion database (`type = Post`).

- Notion `Post` pages are converted to Markdown and written to `posts/`
- Existing files are updated when content/front matter changes
- Files missing from Notion are deleted (when `NOTION_SYNC_DELETE_MISSING=true`)

## Required GitHub Secrets

- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`

## Notion Database Property Mapping (default names)

The workflow passes these defaults. Change them in the workflow if your column names differ.

- `type` -> filters pages where value is `Post`
- `title` -> front matter `title`
- `createTime` -> front matter `published` (date only `YYYY-MM-DD`)
- `date` -> front matter `updated` (date only `YYYY-MM-DD`)
- `summary` -> front matter `description`
- `slug` -> front matter `permalink` and output filename
- page cover -> front matter `image`
- `tags` -> front matter `tags`
- `category` -> front matter `category`
- `status` -> front matter `draft` (`Draft` => `true`)

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

## Deletion Behavior (Important)

The workflow currently sets:

- `NOTION_SYNC_DELETE_MISSING=true`

This means:

- Any `*.md` file under `posts/` that is **not** produced from a current Notion `Post` page will be deleted on sync.

If you still have manually maintained posts under `posts/`, either:

1. Move them out of `posts/`, or
2. Change `NOTION_SYNC_DELETE_MISSING` to `'false'` in `.github/workflows/sync-notion-posts.yml`

## Filename Rules

- Output path is derived from `slug`
- `slug` supports nested paths (example: `guide/intro` -> `posts/guide/intro.md`)
- `.md` is appended automatically if missing

## Running

- Manual run: GitHub Actions -> `Sync Notion Posts` -> `Run workflow`
- Optional schedule is included as a commented `cron` entry in the workflow

## Notes

- Notion cover/file URLs may be temporary signed URLs; `image` is stored as the current Notion URL as requested.
- The workflow auto-commits `posts/` changes back to the current branch.
