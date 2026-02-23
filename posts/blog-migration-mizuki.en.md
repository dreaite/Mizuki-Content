---
title: '博客迁移-Mizuki配置记录'
published: 2026-02-22
updated: 2026-02-23
description: '记录了从notionNext迁移到mizuki的过程，主要原因是notionNext的限制。mizuki是基于Astro的博客框架，支持轻量级的日记和项目展示。配置相对简单，内容通过md和ts文件控制，并可以连接bangumi的API。计划通过CI实现notion内容的实时同步，并进行多语言适配，使用llm进行翻译。整体配置思路旨在优化输出流程。'
permalink: 'blog-migration-mizuki.en'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'en'
---

2026-02-22 — Record

Today I migrated from NotionNext to Mizuki.

==== 

To explain why I switched to Mizuki, it’s mainly because NotionNext’s limitations are too rigid; after all, vibe coding is so developed nowadays, I still want a bit more freedom to adjust things.

Actually, at first I planned to try Hexo or Innei, but I didn’t expect to happen to come across a Mizuki video, so I decided to give it a try first. The features aren’t too heavy, and it feels like a good balance for both personal use and project needs.

So below is roughly my Mizuki migration record, using Notion as blog storage.

# Mizuki Deployment

Mizuki is a blog framework built on Astro. To be frank, although I’ve tinkered with self-hosted blogs like WordPress/Hexo/NotionNext, I mostly just looked at the appearance; if I liked the theme, I planned to switch, and this time is no exception ( 

The main reason for switching this time is probably that Mizuki has a Diary to meet lightweight venting needs and a Project to showcase projects. And since Astro is a popular framework, the assets for achieving a vibe should be pretty plentiful, so I switched over (and then hit a few snags (lol)).

## Mizuki Configuration

The basic configuration isn’t complicated; just follow the [official documentation](https://docs.mizuki.mysqil.com/) to set it up.

What you mainly need to note is that the content for Posts and About is controlled by editing Markdown files, while other sections like Diary, Project, Timeline are controlled by modifying the data inside TypeScript files.

But there’s another interesting thing: you can connect to Bangumi’s API (`/v0/users/{userId}/collections`) to fetch a user’s anime records. So if you slightly adjust the retrieval type and configure a Bangumi token, you can actually see the list of eroge favorites. Then tweak the animation page a bit more, and the eroge record page will be freshly produced (digging a hole).

## Personal Configuration

Then about my personal setup: since I plan to use CI to synchronize Notion content into Mizuki in real time, and Mizuki conveniently supports [separating blog content and architecture](https://docs.mizuki.mysqil.com/Other/separation/), I tinkered around in the content repository; the structure is simple to modify and much easier.

The rough plan to modify consists of two parts: using CI to sync Notion content, and pre-processing the articles synchronized from Notion with an LLM to implement multilingual support.

### Synchronizing Notion Content via CI

In fact, it’s essentially a cron job that periodically checks Notion for content updates. However, given the Notion API’s latency, I’m afraid it might exhaust the GitHub Actions quota in a couple of days, so I simply run this sync action on a self-hosted machine.

The actual implementation isn’t anything special: the idea is to extract the content of Notion’s database, then route different content types such as Posts, About, Diary into separate type streams, and then map them through the Notion database columns to the specific configurations of the corresponding content. Then it’s a natural progression (to achieve the vibe).

However, there is a small pitfall: some images pulled directly from Notion’s header image links are URLs that expire after about an hour (by the way, Notion uses AWS S3 for image storage; I didn’t expect that—wouldn’t R2 be more scalable?). So you still need external storage for persistence (R2 would work). However, if when adding Notion images you directly use the URL, what you fetch will still be the image link you filled above. So as long as you update the image beforehand, this isn’t a big issue.

A concrete implementation can be found here:
[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md) (Just to try how the Mizuki-GitHub repo can be used (

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### Multilingual Adaptation via LLM

Actually, before the Notion sync CI, I also had to modify the Mizuki framework a bit. After all, it still doesn’t automatically switch the display language based on the browser language, so I made a small tweak (i.e., include files with suffixes like .en.md/.ja.md into multilingual support; since the framework is for a static site, enabling multiple UIs would require a major rewrite). Since multilingual switching implementations are plentiful across projects, I’ll just outline the gist to give a vibe.

::github{repo="dreaifekks/Mizuki"}

Then also add an LLM translation module to CI.

It’s fairly similar: a generic translation prompt plus simple API calls, with a bit of vibe it can work. Just be mindful that LLM response times for large articles can be long, so you may need to adjust the actual request timeout accordingly.

[LLM translation component](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# Conclusion

That’s about it; there aren’t many deep changes, just a rough overview of my configuration approach.

Now that CI is set up, it should make the workflow a bit smoother.
