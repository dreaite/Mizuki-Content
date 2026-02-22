# Notion 同步（Posts）

[English](./README.md)

本仓库包含一个 GitHub Action，用于将 Notion 数据库中的内容同步到：

- `posts/`（博客文章）
- `spec/about.md`（关于页）
- `data/friends.ts`（友链数据）
- `data/diary.ts`（日记数据）
- `data/projects.ts`（项目卡片）

## 文件位置

- Workflow：`.github/workflows/sync-notion-posts.yml`
- 同步脚本：`.github/scripts/sync-notion-posts.mjs`

## 目标

按 `type` 将本地内容文件与 Notion 数据库保持一致。

- Notion `Post` 页面会转换为 Markdown 并写入 `posts/`
- Notion `About` 页面（如果有多个则取最近更新的一个）写入 `spec/about.md`
- Notion `Friend` 页面映射到 `data/friends.ts`
- Notion `Diary` 页面映射到 `data/diary.ts`
- Notion `Project` 页面映射到 `data/projects.ts`
- 当内容或 front matter 发生变化时更新已有文件
- 当文件在 Notion 中已不存在时删除本地文件（`NOTION_SYNC_DELETE_MISSING=true` 时）
- 当文章同步后有变更并推送成功时，可直接触发 Cloudflare Pages Deploy Hook（`CF_DEPLOY_HOOK`）

## 必需的 GitHub Secrets

- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`
- `CF_DEPLOY_HOOK`（如果使用 `sync-notion-posts.yml` 内置的 Cloudflare 部署触发步骤）
- `NOTION_POST_TRANSLATION_API_KEY`（仅在启用 LLM 翻译时需要）
- `NOTION_COVER_R2_ACCESS_KEY_ID` / `NOTION_COVER_R2_SECRET_ACCESS_KEY`（仅在启用 R2 图片同步时需要）

## 可选的 GitHub Variables

- `NOTION_DATA_SOURCE_ID`
  - 使用新版 Notion API / SDK v5 且一个 database 下有多个 data source 时，建议显式配置。
  - 如果不配置，脚本会尝试从 `NOTION_DATABASE_ID` 自动解析 data source。
- `NOTION_POST_TRANSLATION_ENABLED`
  - 设为 `true` 时，启用通过 OpenAI-compatible Chat Completions API 翻译 `Post` 的 Markdown 正文。
- `NOTION_POST_TRANSLATION_LANGS`
  - 目标语言代码列表，逗号分隔，例如：`en,ja`。
- `NOTION_POST_TRANSLATION_MODEL`
  - 翻译请求使用的模型名称。
- `NOTION_POST_TRANSLATION_API_BASE_URL`
  - 可选，API 基础地址，默认：`https://api.openai.com/v1`。
- `NOTION_POST_TRANSLATION_SOURCE_LANG`
  - 可选，源语言提示（仅作为 prompt 上下文），例如：`zh-cn`。
- `NOTION_POST_TRANSLATION_SYSTEM_PROMPT`
  - 可选，自定义翻译行为的 system prompt。
- `NOTION_COVER_R2_ENABLED`
  - 设为 `true` 时，将 Notion 图片资产上传到 Cloudflare R2，并写入稳定的公网 URL。
  - 覆盖范围：
    - `Post` 封面图（`frontmatter.image`）
    - `Project` 生成 TS 数据中的封面图字段
    - `Post`、`About`、`Diary` 正文中的 Markdown 图片（包含 `Diary` 提取出的 `images`）
- `NOTION_COVER_R2_ENDPOINT`
  - R2 的 S3 API Endpoint，例如：`https://<accountid>.r2.cloudflarestorage.com`。
- `NOTION_COVER_R2_REGION`
  - R2 通常使用 `auto`。
- `NOTION_COVER_R2_BUCKET`
  - 用于存储图片的 R2 bucket 名称。
- `NOTION_COVER_R2_PUBLIC_BASE_URL`
  - Bucket 的公网访问基础 URL（自定义域名或 `*.r2.dev`），例如：`https://static.example.com`。
- `NOTION_COVER_R2_PREFIX`
  - 可选，对象 key 前缀（默认 `notion/covers`）。
- `NOTION_COVER_R2_CACHE_CONTROL`
  - 可选，上传对象的缓存头（默认 `public, max-age=3600`）。

## Notion 数据库属性映射（默认列名）

Workflow 会传入以下默认值。如果你的 Notion 列名不同，请在 workflow 中修改。

- `type` -> 内容类型路由（`Post` / `About` / `Friend` / `Diary` / `Project`）
- `title` -> front matter `title`
- `createTime` -> front matter `published`（仅日期 `YYYY-MM-DD`）
- `date` -> front matter `updated`（仅日期 `YYYY-MM-DD`）
- `summary` -> front matter `description`
- `slug` -> front matter `permalink` 和输出文件名
- page cover -> front matter `image`
- `tags` -> front matter `tags`
- `category` -> front matter `category`
- `status` -> front matter `draft`（`Draft` => `true`）

附加映射：

- `type = About` -> 将 markdown 正文写入 `spec/about.md`
- `type = Friend`
  - `id`：按更新时间排序生成（最新在前）
  - `title`：Notion `title`
  - `imgurl`：page cover URL
  - `desc`：Notion `summary`
  - `siteurl`：Notion `url`
  - `tags`：Notion `tags`
- `type = Diary`
  - `id`：按更新时间排序生成（最新在前）
  - `content`：移除图片块后的 markdown 正文（保留文本/换行）
  - `date`：Notion `updateTime`（ISO 8601 UTC 字符串，回退到 `last_edited_time`）
  - `images`：从正文提取出的图片 URL
- `type = Project`
  - `id`：Notion `title` 字符串
  - `title`：Notion `title`
  - `description`：Notion `summary`
  - `image`：page cover URL
  - `startDate` / `endDate`：Notion `date`（存在 end 才写 `endDate`）
  - `category`：Notion `category`
  - `techStack`：Notion `techStack`
  - `status`：Notion `status`
  - `featured`：Notion `featured`（`true`/`false` select，空值则省略）
  - `liveDemo`：Notion `liveDemo`
  - `sourceCode`：Notion `url`
  - `tags`：Notion `tags`

## 建议的 Notion 属性类型

推荐类型：

- `type`：`select` / `status` / `rich_text`
- `title`：`title`
- `createTime`：`created time`（或任何可解析为日期时间字符串的属性）
- `date`：`date`
- `summary`：`rich_text`
- `slug`：`rich_text` 或 `formula`
- `tags`：`multi_select`
- `category`：`select`（也可用 `multi_select`，会取第一个值）
- `status`：`status` 或 `select`
- `techStack`：`multi_select`（推荐）
- `featured`：`select`（取值：空 / `false` / `true`）
- `liveDemo`：`url` 或 `rich_text`

## 删除行为（重要）

当前 workflow 设置了：

- `NOTION_SYNC_DELETE_MISSING=true`

这意味着：

- `posts/` 下任何 **不是** 当前 Notion `Post` 页面产出的 `*.md` 文件，都会在同步时被删除。

如果你仍有手动维护的文章放在 `posts/` 下，请选择：

1. 将它们移出 `posts/` 目录，或
2. 将 `.github/workflows/sync-notion-posts.yml` 中的 `NOTION_SYNC_DELETE_MISSING` 改为 `'false'`

## 文件命名规则

- 输出路径由 `slug` 决定
- `slug` 支持嵌套路径（例如：`guide/intro` -> `posts/guide/intro.md`）
- 如果没有 `.md` 后缀会自动补上
- 启用翻译后，翻译文件会按 `${filename}.${lang}.md` 写在原文件旁边
  - 示例：`posts/guide/intro.md` -> `posts/guide/intro.en.md`
  - 翻译文件 front matter 会增加 `lang: '<lang>'`
  - 翻译文件的 `permalink` 会追加 `${slug}.${lang}`，避免路由冲突

## Post 翻译行为（LLM）

- 只翻译 `type = Post`
- 只翻译 Markdown **正文**（front matter 元数据沿用原文）
- 翻译在原文章按正常 Notion sync 逻辑被创建/更新时触发
- 如果某个配置语言的翻译文件缺失，会在该文章下次被 sync 处理时自动创建
- 当 `NOTION_SYNC_DELETE_MISSING=true` 时，已失效的翻译文件 `*.{lang}.md` 也会被删除（例如源文章删除或语言配置被移除）

## 运行方式

- 手动运行：GitHub Actions -> `Sync Notion Posts` -> `Run workflow`
- 可选定时任务：workflow 中已包含注释掉的 `cron` 示例

## 说明

- Notion 的 cover/file URL 通常是临时签名链接，会过期。
- 当 `NOTION_COVER_R2_ENABLED=true` 时，脚本会将 Notion 图片资产上传到 R2，并写入 R2 公网 URL，而不是临时签名链接。
- 现有 `Post` / `About` markdown 文件中残留的 Notion 图片 URL，会在后续 sync 中自动回填为 R2 URL（即使正文本身未变化）。
- Workflow 会自动将 `posts/` 等内容变更提交并推送回当前分支。
- `Friend` / `Diary` 数据文件每次运行都会基于当前 Notion 行重建（随后 `writeIfChanged` 会避免无变化写入），因此按排序生成的 ID 可保持一致。
- `Project` 数据文件（`data/projects.ts`）也会在每次运行时重建，以保证本地数据集与 Notion 当前内容一致。
- Workflow 安装 `@notionhq/client@5`（固定大版本）以减少未来自动升级带来的破坏性变更。
