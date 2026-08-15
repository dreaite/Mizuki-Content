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
- Notion `About` 页面（如果有多个则取最近更新的一个）写入 `spec/about.md`，启用数据翻译时同时生成 `spec/about.{lang}.md`
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
- `NOTION_SYNC_INDEX_PATH`
  - 正文同步索引路径，默认 `.github/notion-sync-index.json`。索引缺失、损坏或版本不匹配时会安全退化为重新拉正文。
- `NOTION_MARKDOWN_CONCURRENCY` / `NOTION_MARKDOWN_MIN_START_INTERVAL_MS`
  - 正文读取 worker 数和 Notion HTTP 请求的统一启动间隔，默认 `2` / `350` 毫秒。
- `NOTION_POST_TRANSLATION_ENABLED`
  - 设为 `true` 时，启用通过 OpenAI-compatible Chat Completions API 翻译 `Post` 的 Markdown 正文。
- `NOTION_POST_TRANSLATION_LANGS`
  - 目标语言代码列表，逗号分隔，例如：`en,ja`。
- `NOTION_DATA_TRANSLATION_ENABLED`
  - 启用 `About` / `Project` / `Diary` 的 Codex 翻译；默认启用，可显式设为 `false`。
- `NOTION_DATA_TRANSLATION_LANGS`
  - 数据翻译目标语言，逗号分隔；独立于 Post 配置，默认 `en,ja`（对应站点当前的英文和日文路由）。
- `NOTION_DATA_TRANSLATION_SOURCE_LANG`
  - Notion 数据源语言（默认：`zh-cn`）。
- `NOTION_DATA_TRANSLATION_MAX_ITEMS` / `NOTION_DATA_TRANSLATION_MAX_CHARS`
  - 单次结构化数据翻译的最大条目数 / 近似 JSON 字符数（默认：`20` / `12000`）；较大的 Project / Diary 集合会稳定分批。
- `NOTION_POST_TRANSLATION_MODEL`
  - 翻译请求使用的模型名称。
- `NOTION_POST_TRANSLATION_API_BASE_URL`
  - 可选，API 基础地址，默认：`https://api.openai.com/v1`。
- `NOTION_POST_TRANSLATION_TIMEOUT_MS`
  - 可选，LLM 翻译请求超时时间（毫秒）。
  - 默认 `600000`（10 分钟）。长文可调大，例如 `900000`（15 分钟）。
- `NOTION_POST_TRANSLATION_SOURCE_LANG`
  - 可选，源语言提示（仅作为 prompt 上下文），例如：`zh-cn`。
- `NOTION_POST_TRANSLATION_SYSTEM_PROMPT`
  - 可选，自定义翻译行为的 system prompt。
- `NOTION_COVER_R2_ENABLED`
  - 设为 `true` 时，将 Notion 图片资产上传到 Cloudflare R2，并写入稳定的公网 URL。
  - 覆盖范围：
    - `Post` 封面图（`frontmatter.image`）
    - `Friend` 生成 TS 数据中的封面图字段（`imgurl`）
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
- `status` -> 发布状态（`Draft` 保留源文件并写为 `draft: true`；`Invisible` 删除源文件和所有翻译文件）

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
- `status = Invisible` 的 `Post` 会始终被排除。当前 `slug`、同步索引中记录的旧 slug、源 Markdown 和已生成语言版本都会在正文读取前删除，不依赖 `NOTION_SYNC_DELETE_MISSING`；生产 workflow 的全量 sweep 还负责首次建立索引时的历史遗留。

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
  - 翻译文件不会写 front matter 的 `permalink`（路由由翻译后的文件名决定）

## Post 翻译行为（LLM）

- 只翻译 `type = Post`
- 草稿文章（`draft: true`）会跳过翻译，等非草稿后再翻译
- 翻译 Markdown **正文**，以及 front matter 中的 `title` / `description`
- 翻译在原文章按正常 Notion sync 逻辑被创建/更新时触发
- 如果某个配置语言的翻译文件缺失，会在该文章下次被 sync 处理时自动创建
- 当 `NOTION_SYNC_DELETE_MISSING=true` 时，已失效的翻译文件 `*.{lang}.md` 也会被删除（例如源文章删除或语言配置被移除）

## About / Project / Diary 多语言内容

- `Friend` 不参与翻译，仍按原逻辑同步。
- `About` Markdown 正文会按目标语言生成 `spec/about.{lang}.md`；站点按当前语言精确选择，没有对应文件时只显示空状态。
- About 源文变化但翻译关闭时会移除旧语言文件；启用翻译后，移出目标语言列表的旧文件也会删除，避免继续展示过期译文。
- `Project` 只翻译 `title` / `description`；URL、日期、状态、分类和技术栈继续作为结构字段。
- `Diary` 只翻译 `content`；日期和图片 URL 不会发送给翻译进程。
- 生成记录会保留顶层源文，写入其 `lang`，并在 `translations` 下保存精确的目标语言内容。
- 站点只使用当前语言的精确匹配；对应译文不存在时隐藏该条，不回退到源语言。
- 每个目标语言使用经过校验、可控大小的 JSON 批次翻译；所有启用批次通过校验后才写入 data 文件。
- `.github/notion-data-translation-cache.json` 仅在同一 Notion page 的源文 hash、提示词版本和 Codex 模型/profile 都未变化时复用译文，避免每小时重复翻译，也不会复用过期策略的文本。

## 运行方式

- 手动运行：GitHub Actions -> `Sync Notion Posts` -> `Run workflow`
- 定时任务：workflow 当前每小时运行一次，也可手动触发

## 同步性能与持久索引

- 每轮仍分页获取完整页面 list，保证删除、改类型和 `Invisible` 能全量对账；查询只投影同步实际使用的属性。若投影结果缺少 `title/type/status/slug`，脚本会在任何删除前无投影重拉一次，仍不完整则终止。
- `.github/notion-sync-index.json` 记录 page ID、`last_edited_time`、输出签名、转换器版本和已生成路径。只有索引精确命中且输出存在时才跳过正文；索引永远不是可见性真相源。
- `Post` / `About` 不再依赖时间窗口重复拉正文。`Diary` 只重新拉取发生变化的页面，缓存仅保存每页的 `content/images`；成员、排序、日期和连续 ID 每轮仍由当前完整 list 重建。
- 正文读取使用两个 worker，Notion client 在 fetch 层统一应用默认 350ms 的请求启动间隔；写文件、翻译和 Git checkpoint 仍保持串行，避免竞态。
- 正文只使用 Notion 官方 Markdown API（`2026-03-11`）。响应被截断或包含未知 block 时，本轮同步直接失败，不推进持久索引，也不覆盖对应页面；不再保留旧 Block 转换器回退。
- 索引只在整轮正文、翻译、数据写入和指令规范化全部成功后更新。仅索引变化会提交回内容仓库，但不会触发 Mizuki 重新部署。

## 说明

- Notion 的 cover/file URL 通常是临时签名链接，会过期。
- 当 `NOTION_COVER_R2_ENABLED=true` 时，脚本会将 Notion 图片资产上传到 R2，并写入 R2 公网 URL，而不是临时签名链接。
- R2 对象会保存去掉临时 query/hash 后的源 URL SHA-1；`HeadObject` metadata 匹配时直接复用，不再下载或上传。缺少该 metadata 的旧对象会额外上传一次完成回填。
- 现有 `Post` / `About` markdown 文件中残留的 Notion 图片 URL，会在后续 sync 中自动回填为 R2 URL（即使正文本身未变化）。
- 行首 Markdown 指令（例如 `::github{repo="owner/repo"}` 或后续自定义的 `::card{...}`）的属性花括号内部如果出现 Notion/LLM 产生的智能引号（`“”` / `‘’`），同步时会自动规范化为 ASCII 引号。
- Workflow 会自动将 `posts/` 等内容变更提交并推送回当前分支。
- `Friend` / `Diary` 数据文件每次运行都会基于当前 Notion 行重建（随后 `writeIfChanged` 会避免无变化写入）；Diary 正文按 page ID 缓存，但排序和 ID 不从缓存恢复。
- `Project` 数据文件（`data/projects.ts`）也会在每次运行时重建，以保证本地数据集与 Notion 当前内容一致。
- Workflow 固定安装 `@notionhq/client@5.25.2`；Markdown API 版本变化时会通过版本化索引强制重新生成正文。
