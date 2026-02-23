---
title: 'Blog Migration - Mizuki Configuration Records'
published: 2026-02-22
updated: 2026-02-23
description: 'A record of the migration from NotionNext to Mizuki, mainly due to NotionNext''s limitations. Mizuki was chosen for its lightweight nature and good balance of features, supporting diaries and project showcases. The configuration process is simple, with content controlled via md and ts files, and it also connects to the Bangumi API. The plan is to synchronize Notion content via CI, implement multilingual support, and address the issue of image links expiring.'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'en'
---

2026/02/22 — Notes

Today I migrated from NotionNext to Mizuki.

====

To explain why I switched to Mizuki, it's mainly because NotionNext's limitations are too rigid; after all, vibe coding has become so developed nowadays, and I want a bit more freedom to adjust.

Originally I planned to check out Hexo or Innei, but I happened to come across a Mizuki video, so I decided to give it a try first. The functionality isn't too heavy, and it feels like a good balance for personal and project use.

So below is roughly my Mizuki migration log, using Notion as the blog storage.

# Mizuki deployment

Mizuki is a blog framework built on Astro. Truth be told, although I had previously tinkered with several self-hosted blogs like WordPress/Hexo/NotionNext, I mainly looked at the appearance and decided to switch if the theme looked good; and this time it's no exception (

The main reason for switching this time is probably that Mizuki has a diary to satisfy lightweight venting, and a place to showcase projects. Plus Astro is a popular theme, so if you want vibe the assets should still be relatively plentiful, so I switched over (and then hit some pitfalls (lol))

## Mizuki configuration

The general configuration isn't complicated; just follow the [official documentation](https://docs.mizuki.mysqil.com/) to configure it.

The main thing to note is that the content of posts and about is controlled by editing md files, while other elements like diary/project/timeline are controlled by modifying the data inside the TS files.

However, there's another interesting thing: you can connect to Bangumi's API (`/v0/users/{userId}/collections`) to fetch a user's anime records. Then if you slightly adjust the fetch type and configure a Bangumi token, you can see the eroge collection list. Then tweak the animation page a bit, and the eroge records page will be freshly released (digging a pit).

## Personal configuration

Then let's talk about personal configuration. Because I plan to use CI to synchronize Notion content into Mizuki in real time, and Mizuki conveniently supports [separating blog content and architecture](https://docs.mizuki.mysqil.com/Other/separation/), I decided to tinker in the content repository; the structure is simpler to modify and much more convenient.

Basically, the two areas I plan to modify are: using CI to sync Notion-written content and using an LLm to preprocess Notion-synced articles to enable multilingual support.

### Synchronizing Notion content via CI

Actually, it's basically a cron job to periodically check Notion content updates. But given the Notion API's throughput, I'm worried that it would exhaust GitHub Actions quotas in a couple of days, so I put this sync action on a self-hosted runner.

The basic idea is to fetch the Notion database content, then route different content types such as posts/about/diary into separate type streams, and then map them to the Notion database columns and the actual configurations of the content above, making it a natural progression (for vibe).

One small pitfall is that some images pulled directly from Notion header images are expiring URLs after about an hour (honestly I didn’t expect Notion’s image storage to be AWS S3; R2 might be more scalable). So you still need external storage for persistence (R2 would work). But if when adding Notion images you directly use the URL, what you fetch back will still be the image link you filled above. So as long as you update the images in advance, this isn't a big problem.

The rough implementation can be referenced here:
[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md) (just to test how the Mizuki-GitHub repo can be used

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### Multilingual adaptation with LLM

Actually, even before the Notion sync CI, I had to make some modifications to Mizuki's framework. After all, it still doesn't switch display language according to browser language, so I did a small tweak (i.e., include files with suffixes like .en.md/.ja.md into multilingual adaptation; since the framework is static, enabling more UI language displays would require a major rewrite). After all, implementations of multilingual switching exist in many projects; I'll just give a rough vibe.

::github{repo="dreaifekks/Mizuki"}

Then also add an LLM translation module to CI.

It's basically the same: a generic translation prompt plus a simple API call; with a bit of vibe it's doable. Just be careful that LLM responses for long articles may take a long time, so you may need to adjust the actual request timeout a bit.

[LLM implementation](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# Conclusion

That’s about it; there aren’t deep changes, just roughly outlining my personal configuration approach.

Now that CI is configured, it should make the output flow a bit smoother (

But I feel that future multilingual UI adaptation will also be a big challenge (
