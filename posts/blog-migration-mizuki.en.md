---
title: 'Blog Migration - Mizuki Configuration Records'
published: 2026-02-22
updated: 2026-02-23
description: 'This post records the migration process from NotionNext to Mizuki, primarily due to NotionNext''s limitations. Mizuki is an Astro-based blog framework that supports lightweight diaries and project showcases. The configuration is relatively simple, with content controlled via Markdown (.md) and TypeScript (.ts) files, and it can connect to Bangumi''s API. The plan is to achieve real-time synchronization of Notion content through CI, implement multilingual support, and use an LLM for translation. The overall configuration approach aims to optimize the output workflow.'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'en'
---

2026/02/22, Note

Today I migrated from notionNext to Mizuki.

====


To say why switch to Mizuki, it's probably because notionNext's limitations are too rigid; after all vibe coding has become so developed, and I still want a bit more freedom to adjust.

In fact, at first I planned to try Hexo or innei, but unexpectedly came across a Mizuki video, decided to try switching first; the functionality isn’t too heavy, and it feels like a good balance for both personal use and projects.

So below is roughly my Mizuki migration record, using Notion as the blog storage.

# Mizuki deployment

Mizuki is a blog framework built on Astro. Honestly, although I previously deployed several self-hosted blogs like Wordpress/Hexo/NotionNext, I mostly just looked at the appearance; if the theme looked good I planned to switch, and this time is no exception (


The main reason for switching this time is that Mizuki has a diary to satisfy lightweight venting, and a project section to showcase projects. Plus Astro is a popular framework, and for vibe the assets should be fairly plentiful, so I switched over (and then ran into some pitfalls (lol)).

## Mizuki configuration

The general configuration isn't complicated; just follow the [official documentation](https://docs.mizuki.mysqil.com/) to configure it.

What to note is that the content for posts and about is controlled by editing md files, while other content such as diary/project/timeline is controlled by modifying the data inside ts.

An interesting thing is that you can connect to Bangumi's API (`/v0/users/{userId}/collections`) to fetch a user's anime list. So if you slightly change the fetch type and configure a Bangumi token, you can see the eroge collection list. Then tweak the animation page a bit more, and the eroge records page will be freshly produced (digging a pit).

## Personal configuration

Then about personal configuration: since I plan to use CI to synchronize Notion content to Mizuki in real time, and Mizuki conveniently supports [separating blog content and architecture writing](https://docs.mizuki.mysqil.com/Other/separation/), I fiddled with the content repository; the structure is easy to modify and quite convenient.

The rough plan to modify basically comprises two parts: using CI to pull Notion content and using an LLM to preprocess Notion-synced articles to implement multilingual support.

### Synchronizing Notion content via CI

Basically it's about setting up a cron to periodically check Notion content updates, but given Notion API's communication speed, I'm afraid the GitHub Actions quota would be exhausted in a couple of days, so I run this sync action on a self-hosted machine.

The actual implementation isn't complicated: the idea is to fetch the Notion database contents, then route different content types like post/about/diary through a type, then map them via the Notion database's columns to the actual configuration of the content described above, and it falls into place naturally (to vibe with it).

One caveat is that some image header URLs fetched directly from Notion expire after about 1 hour (by the way, Notion uses AWS S3 for image storage; doesn't R2 have better scalability?), so you still need external storage for persistence (R2 would work). However, if you add Notion images by directly using the URL, what's retrieved will still be the image URL entered above. So as long as you update the images in advance, this isn't a big issue.

The concrete implementation can roughly be referenced here:
 [NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)(just trying out how to use the Mizuki-GitHub repo)

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### Multilingual adaptation via LLM

Actually before the Notion sync CI, I also made some modifications to the Mizuki framework. After all, it still doesn't switch display language according to the browser language, so I did a small tweak (i.e., include files with suffixes like .en.md/.ja.md into multilingual adaptation; since the framework is for a static site, enabling multiple UIs would require a major rewrite). After all, implementations for multilingual switching are common across projects; I'll just give a rough vibe.

::github{repo="dreaifekks/Mizuki"}

Then add an LLM translation module to CI.

Actually it's similar: a generic translation prompt, plus simple API calls, a bit of vibe and it works. Just be careful that LLM responses for long articles can take a long time, so you may need to adjust the actual request timeout accordingly.

[llm部分实现](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# 结语

That should be about it; there aren't deep modifications, just roughly outline my personal configuration approach.

Now CI is set up, it should also make the output flow a bit smoother (
