---
title: 'Blog Migration: Mizuki Configuration Notes'
published: 2026-02-22
updated: 2026-02-22
description: 'This post records the migration process from NotionNext to Mizuki, mainly because more flexibility was needed. Mizuki is an Astro-based blog framework that supports diaries and project showcases. During setup, it was noted that content is managed through Markdown and TypeScript files and can connect to the Bangumi API. The plan is to use CI to sync Notion content in near real time and add multilingual support using an LLM for translation. The overall setup is intended to make content publishing smoother.'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'en'
---

2026/02/22, record

Today I migrated from NotionNext to Mizuki.

====

To say why I switched to Mizuki, it’s probably because NotionNext’s restrictions are too rigid; after all vibe coding is so developed nowadays, I still want a bit more freedom to tweak things.

In fact, I originally planned to try Hexo or Innei, but I happened to come across a Mizuki video, so I decided to give it a try first; its features aren’t too heavy, and it feels good for balancing personal and project needs.

So below is my Mizuki migration record, using Notion as the blog storage.

# Mizuki deployment

Mizuki is a blog framework built on Astro. To be honest, although I’ve set up quite a few self-hosted blogs like WordPress/Hexo/NotionNext before, I only roughly looked at the surface; if a theme looked good I planned to switch, and of course this time is no exception（

The main reason for switching this time is probably that Mizuki has diaries to satisfy lightweight venting, and a place to showcase projects. Plus Astro is a popular theme, so if you want vibe the assets should be fairly plentiful, so I switched over (and then hit a snag (lol))

## Mizuki Configuration

The general configuration isn’t much; just follow the [official documentation](https://docs.mizuki.mysqil.com/).

The main thing to note is that the content for posts and about is controlled by editing MD files, while other content such as diary/project/timeline is controlled by modifying the data inside TypeScript.

But there is another interesting thing: you can connect to Bangumi’s API (`/v0/users/{userId}/collections`) to fetch the user’s anime records. If you slightly adjust the fetch type and configure a Bangumi token, you can see the list of eroge favorites. Then tweak the animation page a little more, and the eroge records page is freshly produced (digging a hole)

## Personal Configuration

Now about my personal configuration: since I plan to use CI to synchronize Notion content with Mizuki in real time, and Mizuki conveniently supports [separating the blog content and the architecture](https://docs.mizuki.mysqil.com/Other/separation/), I decided to tinker a bit in the content repo; the structure is simple and easier to modify.

The two main parts I plan to modify are: (1) using CI to fetch Notion content; (2) using LLM to preprocess the Notion-synced articles to enable multilingual support.

### Synchronizing Notion Content via CI

Basically it’s just a cron that periodically checks Notion content updates, but given the Notion API’s speed, I worry that running for a couple of days would exhaust the GitHub Actions quota, so I put this sync action on a self-hosted runner.

The concrete implementation isn’t complicated either. The idea is to pull the content of the Notion database, then route different content types like posts/about/diary into separate type streams, and then map them via the Notion database’s columns to the actual configuration of the content, and it’s a natural fit (vibe).

One pitfall is that some header image URLs fetched directly from Notion expire after about an hour (Notion uses AWS S3 for image storage, so you might wonder if R2 would be more scalable). So you need external storage for persistence (R2 would suffice). However, if you add Notion images by URL, what you retrieve is still the image URL you entered above. So as long as you pre-update the images, this isn’t a big issue.

Specific implementation can roughly refer to here:
[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md) (to see how the Mizuki-GitHub repo can be used)  

::github{repo=”[/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)”}


### Multilingual adaptation via LLM

Actually, before the Notion sync CI, I also had to make some tweaks to the Mizuki framework because it still doesn’t automatically switch display language according to the browser language. So I did a small modification (namely grouping files with suffixes like .en.md/.ja.md into multilingual support; since the framework is static-site based, enabling multiple UIs would require bigger changes). Given that there are many ways to implement multilingual switching across projects, a rough vibe is enough.

::github{repo=”dreaifekks/Mizuki”}

Then also add an LLM translation module to CI.

It’s basically the same: a generic translation prompt plus a simple API call, tweak a bit and you’re good. Just be careful that LLM responses for long articles can take a long time, so you may need to adjust the actual request timeout accordingly.

[llm part implementation](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo=”dreaite/Mizuki-Content”}


# Conclusion

That’s about it; there aren’t many deep changes, just roughly outlining my personal configuration approach.

Now that CI is set up, it should make the output flow a bit smoother (