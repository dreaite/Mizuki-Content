---
title: 'Blog Migration – Mizuki Configuration Notes'
published: 2026-02-22
updated: 2026-02-23
description: 'Migrating from NotionNext to Mizuki with Bangumi integration, self-hosted Notion sync, R2 image persistence, and LLM-generated translations.'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion', 'INFRA']
category: '开荒'
draft: false
lang: 'en'
---

February 22, 2026 — notes

Today I migrated from notionNext to Mizuki.

====

As for why I switched to Mizuki, it was probably because notionNext felt too restrictive. With vibe coding being so advanced these days, I wanted a little more freedom to customize things.

I originally planned to try Hexo or Innei, but then I happened across a video about Mizuki and decided to give it a shot first. Its feature set is not overly heavy, and it seems to strike a good balance between personal content and projects.

So below is a rough record of my Mizuki migration, using Notion as the storage backend for my blog.

# Deploying Mizuki

Mizuki is a blog framework built with Astro. Honestly, although I have previously set up quite a few self-hosted blogs using things like WordPress, Hexo, and notionNext, I usually just glanced at how they looked and switched over if I liked the theme. This time was no exception (

The main reason I switched this time was probably that Mizuki has a diary feature for posting lightweight rants, as well as a project section for showcasing projects. Astro is fairly mainstream, after all, so there should be plenty of material available for vibe coding. That is why I migrated over (and promptly ran into some pitfalls (lol)

## Mizuki configuration

There is not much to the basic configuration. Just follow the [official documentation](https://docs.mizuki.mysqil.com/).

The main thing to note is that the post and about content is controlled by editing md files, while other content such as dairy/project/timeline is controlled by editing the data in ts files.

Another interesting feature is that you can connect to Bangumi's API (`/v0/users/{userId}/collections`) to retrieve a user's anime collection records. In fact, with a small change to the collection type being retrieved and the addition of a Bangumi token, you can display a list of collected eroge titles. Then, with a few tweaks to the anime page, you have a brand-new eroge history page (another rabbit hole for later

## Personal configuration

Next, a little about my personal configuration. I planned to use CI to synchronize content from Notion to Mizuki in real time, and Mizuki happens to support [maintaining blog content separately from the site structure](https://docs.mizuki.mysqil.com/Other/separation/). That made the content repository the perfect place to make these changes, and its simple structure also makes it much easier to modify.

I mainly planned to change two areas: synchronizing content written in Notion through CI, and using an LLM to preprocess Notion-synced posts for multilingual support.

### Synchronizing Notion content through CI

Essentially, this just involves setting up a cron job to periodically check for updates to Notion content. However, given the communication speed of the Notion API, I was worried that running it for a couple of days might burn through the entire GitHub Actions quota. So I simply configured this synchronization action to run on a self-hosted runner.

The implementation itself is nothing special. The idea is to retrieve the contents of the Notion database, route different content types such as post/about/dairy according to a type field, and then map the columns in the Notion database to the corresponding configuration fields for each content type mentioned above. From there, everything follows naturally (meaning: vibe-code it).

One small pitfall is that some images use Notion cover-image links directly, and those URLs expire after just one hour (I did not expect Notion's image storage to use AWS S3, by the way; wouldn't R2 be more generous?). So the images still need to be persisted in external storage somewhere (R2 will do). However, if you add an image to Notion using a URL directly, the URL you originally entered is still returned when retrieving it. As long as you update the images in advance, this is not really a major issue.

For a rough reference implementation, see here:<br>[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md) (also a good opportunity to try out how Mizuki's GitHub repo feature works (

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### Adding multilingual support with an LLM

Before setting up the Notion synchronization CI, I also needed to modify the Mizuki framework itself. It currently does not switch the display language based on the browser language, so I made a few small changes (specifically, adding files with suffixes such as .en.md/.ja.md to the multilingual handling logic; because the framework generates a static site, supporting multiple UI languages would require much more extensive changes). Multilingual switching has probably been implemented in plenty of other projects, so a rough description and a bit of vibe coding were enough.

::github{repo="dreaifekks/Mizuki"}

The next step was to add an LLM translation module to the CI workflow.

This was also fairly straightforward: use a generic translation prompt, add a simple API call, and vibe-code the rest. The main thing to watch out for is that LLM responses for long articles can take a long time, so the request timeout needs to be adjusted accordingly.

[LLM implementation](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# Conclusion

That should be about it. I did not make any particularly deep changes, so this was mostly just an overview of my personal configuration approach.

Now that the CI setup is complete, the publishing flow should be a little smoother (

Still, adding multilingual UI support in the future feels like it will be another huge rabbit hole (
