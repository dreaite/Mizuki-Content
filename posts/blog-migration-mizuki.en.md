---
title: 'Blog Migration – Mizuki Configuration Notes'
published: 2026-02-22
updated: 2026-02-23
description: 'Migrating from NotionNext to Mizuki with Bangumi integration, self-hosted Notion sync, R2 image persistence, and LLM-generated translations.'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion', 'INFRA']
category: 'EXPLORE'
draft: false
lang: 'en'
---

2026/02/22, notes

Today I migrated from notionNext to Mizuki.

====

As for why I switched to Mizuki, it was probably because notionNext felt too restrictive. With vibe coding being so advanced now, I wanted a little more freedom to customize things.

At first, I was actually planning to try Hexo or Innei. Then I happened to come across a video about Mizuki and decided to give it a try. Its feature set isn't too heavy, and it seems to strike a good balance between personal content and project showcases.

So, the following is roughly a record of my migration to Mizuki while continuing to use Notion as my blog's content store.

# Mizuki Deployment

Mizuki is a blog framework built with Astro. Honestly, although I've previously set up quite a few self-hosted blogs using things like WordPress, Hexo, and notionNext, I usually just take a quick look at the appearance and switch if I like the theme. This time was no exception (

The main reason I switched this time was probably that Mizuki has a diary feature for lightweight rants, as well as a project section for showcasing projects. Astro is also fairly mainstream, so there should be plenty of material available for vibe coding. And so I migrated over—and promptly ran into a few pitfalls (lol).

## Mizuki Configuration

There isn't much to the basic configuration. Just follow the [official documentation](https://docs.mizuki.mysqil.com/).

The main thing to note is that post and about content is managed by editing Markdown files, while other content such as dairy/project/timeline is managed by modifying the data in TypeScript files.

Another interesting feature is that it can connect to Bangumi's API (`/v0/users/{userId}/collections`) to retrieve a user's anime collection records. By slightly changing the collection type being fetched and configuring a Bangumi token, you can actually display an eroge collection list instead. Then, with a few tweaks to the anime page, you've got yourself a brand-new eroge records page (another hole to dig later).

## Personal Configuration

Next, a little about my personal setup. I plan to use CI to synchronize content from Notion to Mizuki in real time. Mizuki also happens to support [keeping blog content separate from the site architecture](https://docs.mizuki.mysqil.com/Other/separation/), so it made sense to tinker with the content repository. Its simple structure also makes it much easier to modify.

There are roughly two areas I plan to work on: synchronizing content written in Notion through CI, and using an LLM to preprocess articles synchronized from Notion to support multiple languages.

### Synchronizing Notion Content Through CI

This is essentially just a cron job that periodically checks whether the content in Notion has been updated. However, given the communication speed of the Notion API, running it this way might burn through GitHub Actions minutes within a couple of days. So I simply moved the synchronization action onto a self-hosted runner.

The actual implementation isn't particularly complicated. The idea is to retrieve content from the Notion database, route different types of content—such as post/about/dairy—based on a type field, and then map the columns in the Notion database to the corresponding configuration fields for each content type. From there, everything follows naturally (meaning: vibe-code it).

One small pitfall is that some images use Notion cover-image links directly, and those URLs expire after just one hour. Incidentally, I didn't expect Notion to use AWS S3 for image storage; wouldn't R2 be more generous? So the images still need to be persisted in some external storage—R2 would work just fine. However, if an image is added to Notion using a URL directly, the extracted value will still be the original image URL that was entered. So as long as the image is uploaded elsewhere beforehand, this isn't really a major problem.

For the specific implementation, you can refer to this:<br>[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md) (also a convenient opportunity to try out Mizuki's GitHub repo card feature (

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### Multilingual Support Through an LLM

Before setting up the Notion synchronization CI, I also needed to modify the Mizuki framework itself. It currently doesn't switch the display language based on the browser's language, so I made a few small changes—specifically, adding files with suffixes such as `.en.md` and `.ja.md` to the multilingual content system. Since the framework generates a static site, supporting a fully multilingual UI would require much more extensive changes. Multilingual switching has probably already been implemented in plenty of other projects, so a rough explanation should be enough to vibe-code it.

::github{repo="dreaifekks/Mizuki"}

The next step was to add an LLM translation module to the CI pipeline.

This part was also fairly straightforward: a generic translation prompt, a simple API call, and a little vibe coding were enough. The main thing to watch out for is that the LLM may take a long time to respond when translating lengthy articles, so the request timeout needs to be adjusted accordingly.

[LLM implementation](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# Conclusion

That's probably about it. I didn't make any particularly deep modifications, so this is mainly just an overview of how I approached the configuration.

Now that the CI setup is complete, the publishing flow should be a little smoother (

Still, supporting a multilingual UI in the future feels like another enormous rabbit hole (
