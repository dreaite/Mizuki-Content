---
title: 'Blog Migration - Mizuki Configuration Records'
published: 2026-02-22
updated: 2026-02-23
description: 'Documenting the process of migrating from notionNext to Mizuki. We chose Mizuki for its flexibility and lightweight nature. During configuration, we noted the content-management approach, using APIs to fetch user data, and real-time synchronization of Notion content achieved via CI, with support for multilingual adaptation. The overall configuration approach aims to improve the smoothness of content output.'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'en'
---

2026-02-22, Note

Today I migrated from NotionNext to Mizuki.

====


To say why I switched to Mizuki, it’s basically because NotionNext’s limitations are too rigid. After all, vibe coding is so developed nowadays, I still want a little more freedom to adjust things.

In fact, I initially planned to try Hexo or Innei, but I happened to come across a Mizuki video, so I decided to give it a go. The functionality isn’t too heavy, and it feels like a good balance for both personal use and projects.

So below is roughly my Mizuki migration record using Notion as the blog storage.

# Mizuki deployment

Mizuki is a blog framework developed on Astro. To be frank, although I’ve tinkered with several self-hosted blogs like WordPress/Hexo/NotionNext before, I mostly just looked at the exterior, thought the theme was nice, and planned to switch, and of course this time is no exception (


The main reason for switching this time is that Mizuki has a diary feature to satisfy lightweight venting, and a place to showcase projects. Plus Astro is a popular theme, so the assets for vibe should still be fairly abundant, so I switched over (and then ran into some pitfalls (lol))


## Mizuki configuration

The general configuration isn’t unusual; just follow the [official documentation](https://docs.mizuki.mysqil.com/).

What you mainly need to note is that the content of posts and the about page is controlled by editing Markdown, while other sections like diary/project/timeline are controlled by modifying the data inside the TS files.

There’s also an interesting bit: you can connect to the Bangumi API (`/v0/users/{userId}/collections`) to fetch a user’s anime records. If you slightly adjust the fetch type and configure a Bangumi token, you can see the eroge collection list. Then tweak the anime page a bit, and the eroge records page will be freshly produced (pitfall)

## Personal configuration

Next, about personal configuration: since I plan to use CI to synchronize Notion content into Mizuki in real time, and Mizuki conveniently supports [separating blog content and architecture](https://docs.mizuki.mysqil.com/Other/separation/), I took the opportunity to tweak in the content repository; the structure is easy to modify.

The rough plan to modify actually consists of two parts: using CI to sync Notion content and using an LLM to pre-process Notion-synced articles to enable multilingual support.

### Synchronizing Notion content via CI

What this essentially amounts to is a cron job to periodically check Notion content updates, but given the Notion API’s speed, I was worried that the GitHub Actions quota would be exhausted after a couple of days, so I placed this sync action on a self-hosted run.

The concrete implementation isn’t complicated either: the idea is to fetch the content of Notion databases, then route different content types like posts/about/diary by assigning a type, and then map to the Notion database columns to align with the actual content configuration. Then it’s a natural progression (to vibe).

However, there’s a small pitfall: some image URLs from Notion header images expire after about an hour (by the way, Notion’s image storage uses AWS S3; doesn’t R2 scale better?). So you still need external storage for persistence (R2 would work). But if when adding Notion images you directly use the URL, what gets extracted is still the image link you provided. So as long as you update the image in advance, this isn’t a big problem.

The concrete implementation can be参考 here:
[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)(to test how Mizuki-GitHub repo can be used（


::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}


### Multilingual adaptation via LLM

Before the Notion sync CI, I also had to do a bit of modification to Mizuki’s framework. After all, it still doesn’t support switching display language based on browser language, so I did a small tweak (i.e., include files with suffixes like .en.md/.ja.md into multilingual adaptation; since the framework is static-site based, enabling multilingual UI would require a big overhaul). Because multilingual switching like this is implemented in many projects, a rough explanation to vibe is enough.

::github{repo="dreaifekks/Mizuki"}


Then add an LLM translation module to CI.

It’s fairly straightforward: a generic translation prompt, plus a simple API call, to vibe a little. Just be careful that the LLM’s reply time for long articles can be long, so you may need to adjust the actual request timeout a bit.

[LLM part implementation](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}


# Conclusion

That’s about it, there aren’t any deeply technical changes, just a rough outline of my personal configuration approach.

Now that CI is set up, it should make the output flow a bit smoother (
