---
title: 'Blog Migration - Mizuki Configuration Records'
published: 2026-02-22
updated: 2026-02-23
description: 'Documents the migration process from NotionNext to Mizuki, mainly due to the limitations of NotionNext. Mizuki is a blog framework based on Astro that supports lightweight diaries and project showcases. The configuration is relatively simple; content is controlled via md and ts files, and can connect to Bangumi API. Plans to achieve real-time synchronization of Notion content via CI, and to enable multilingual adaptation, using an LLM for translation. The overall configuration approach aims to optimize the output workflow.'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'en'
---

2026/02/22, Record

Today I migrated from notionNext to Mizuki.

====


To explain why I switched to Mizuki, it's mainly because NotionNext's limitations are too rigid; after all, vibe coding is so developed now, and I still want a bit more freedom to adjust.

In fact, at first I planned to try Hexo or Innei; but unexpectedly I happened to come across a Mizuki video, so I decided to switch to it to take a look; the features aren't too heavy, and it feels good for balancing personal and project needs.

So below is roughly my Mizuki migration record, using Notion as the blog storage.

# Mizuki Deployment

Mizuki is a blog framework built on Astro. To be honest, although I previously set up several self-hosted blogs like WordPress/Hexo/NotionNext, I was mainly looking at the appearance and decided to switch when I found a theme I liked; this time is no exception (

The main reason for switching this time is probably that Mizuki has a diary to satisfy lightweight venting, and a place to showcase projects. And since Astro is a popular framework, if you want a vibe, there should be plenty of assets, so I switched over (and then hit some pitfalls (lol))

## Mizuki Setup

The general setup isn't complicated; just configure it according to the Official Documentation. [Official Documentation](https://docs.mizuki.mysqil.com/)

What to pay attention to is that the content of posts and About is controlled by editing MD files, while other contents like diary/project/timeline are controlled by editing data inside TS.

There's also an interesting thing: you can connect to Bangumi's API (/v0/users/{userId}/collections) to fetch user anime records. So if you slightly adjust the retrieval type and configure a Bangumi token, you can actually see the eroge collection list. Then tweak the animation page a bit, and the eroge records page will be freshly created (digging a pit)

## Personal Configuration

Next, about personal configuration: since I plan to use CI to synchronize Notion content to Mizuki in real time, and Mizuki supports [separating blog content and architecture](https://docs.mizuki.mysqil.com/Other/separation/), I took the opportunity to modify the content repository; the structure is simple to modify, which makes changes much easier.

The changes I plan to make basically fall into two parts: using CI to synchronize Notion content and using LLM to preprocess Notion-synced articles to implement multilingual support.

### Synchronizing Notion Content via CI

In essence, it's about running a cron job to periodically check for updates from Notion, but given the Notion API's speed, I worry that running for two days could exhaust GitHub Actions quotas, so I just put this sync action on a self-hosted setup.

The implementation isn't complicated: pull the Notion database content, then route different content types like posts/about/diary through a single type channel, and then map to the Notion database's columns according to the actual configurations for the content described above; and then it's a natural progression (vibe).

One minor pitfall is that some images fetched directly from Notion's cover image links expire after about an hour (Notion uses AWS S3 for image storage, I would have expected something like R2 to be more scalable). So you need external storage to persist them (R2 would suffice). However, if when adding Notion images you use the URL directly, what you fetch will still be the image link you filled above. So as long as you update the images in advance, this isn't a big problem.

The concrete implementation can roughly be seen here:
[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md) (Just to try how to use Mizuki's GitHub repo)

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### Multilingual Adaptation via LLM

Actually, before the Notion sync CI, the Mizuki framework part also needs a tweak. After all, there is still no display language switching based on browser language, so I did a small modification (i.e., include files with suffixes like .en.md/.ja.md into multilingual adaptation; since the framework is a static site, enabling multiple UIs would require big changes). After all, multilingual switching implementations are quite common across various projects; a rough vibe description will suffice.

::github{repo="dreaifekks/Mizuki"}

Then also add an LLM translation module into CI.

Actually it's similar: a generic translation prompt, plus a simple API call, a bit of vibe and it's done. Just be mindful that LLM responses for long articles can take a long time, so you may need to adjust the actual request timeout slightly.

[LLM section implementation](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# Conclusion

That should be about it; there aren't many deep modifications, just a rough overview of my configuration approach.

Now that CI is set up, it should make the output flow a bit smoother (

But it seems that future support for multilingual UI is also a big challenge (
