---
title: '博客迁移-Mizuki配置记录'
published: 2026-02-22
updated: 2026-02-23
description: '记录了从notionNext迁移到mizuki的过程，主要原因是notionNext的限制。mizuki是基于Astro的博客框架，支持轻量级的日记和项目展示。配置相对简单，内容通过md和ts文件控制，并可以连接bangumi的API。计划通过CI实现notion内容的实时同步，并进行多语言适配，使用llm进行翻译。整体配置思路旨在优化输出流程。'
permalink: 'blog-migration-mizuki'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
---

2026/02/22，记录


今日从notionNext迁移到mizuki了。


====


要说为什么要换到mizuki，大概就是因为notionNext的限制太死了，毕竟现在vibe coding这么发达，还是想自由调整一点的。


其实一开始是打算使用hexo或者innei看看的，结果没想到正好碰到mizuki的一个视频，就打算先换换看，正好功能不算太重，感觉对于个人和项目的平衡也不错。


那么下面就大概是本人使用notion作为blog存储进行的mizuki迁移记录。


# mizuki部署


Mizuki是一个基于Astro开发的博客框架。有一说一，虽然之前搞了不少像是wordpress/hexo/notionNext之类的自部署博客，但其实只是大致看个外形，觉得主题不错就打算切了，当然这次也不例外（


这次选择切换的主要理由大概就是因为mizuki有日记可以满足轻量吐槽的需求，也有project来展示一下项目的地方。加上Astro毕竟大众主题，想要vibe的话素材应该还是比较充沛的，所以就切过来了（然后就遇到坑了（乐）


## mizuki配置


大致配置也没有什么，按照[官方文档](https://docs.mizuki.mysqil.com/)进行配置就好了。


大概要注意的就是post和about的内容是通过修改md来控制的，而其他的像是dairy/project/timeline这些内容则是通过修改ts里面的data来进行控制的。


不过还有一个有趣的是可以连接bangumi的api(`/v0/users/{userId}/collections`)来获取用户番剧记录。那么其实稍微把获取类型改一下，加上配置一个bangumi的token其实就可以看到eroge的收藏list了。然后把动画页面再稍微改一下，eroge的记录页面就新鲜出炉了（挖坑


## 个人配置


然后再说下个人配置，因为打算用ci把notion的内容实时同步到mizuki里面，加上mizuki正好支持[对博客内容和架构进行分开编写](https://docs.mizuki.mysqil.com/Other/separation/)，所以就正好在内容仓库来动动手脚了，结构简单改起来也方便不少。


大致打算修改的其实就是两块：通过ci让notion的编写内容和通过llm对notion同步的文章预处理来实现多语言。


### 通过ci对notion内容进行同步


其实要说也就是做一个cron定时，来定期查询notion的内容更新状况，不过毕竟是notion api那通信速度，怕不是跑个两天就把GitHub的action额度给跑完了，所以就直接给这个同步action放在self host上跑了。


具体实现其实也没啥，思路就是把notion的databse的内容取出来，然后让post/about/dairy之类的这些不同类型内容更加一个type分流，然后再通过notion数据库的colum和实际上述内容的具体配置进行对应，然后就是顺理成章的事了（指vibe一下）。


不过有个小坑是，有些img直接取的notion头图链接其实是一个1h就会过期的url（话说没想到notion用的图片存储其实是aws s3，感觉r2不是更量大吗），所以还是得找个外部存储持久化一下（其实r2就行）。不过如果在添加notion图片的时候，直接用的url，那么其实取出来的还是上面填写的图片链接。所以其实只要提前把图片update好，这个倒也不是什么大问题。


具体实现大概可以参考这里：
[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)(正好试一下mizuki-GitHub的repo可以怎么用（


::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}


### 通过llm来进行多语言适配


其实在在notion同步ci之前，对于mizuki的框架部分也得进行一下修改。毕竟目前还是没有去做跟随浏览器语言来进行显示语言切换的，所以就稍微小改了一番（指把对于.en.md/.ja.md这种后缀类型的文件给收入到多语言适配中，本身框架用的因为是静态站，所以如果要多ui显示那就得大改了）。毕竟这种多语言切换什么的在各种项目上的实现应该都挺多的了，大致说明一下vibe一下就好了。


::github{repo="dreaifekks/Mizuki"}


然后再就是给ci中加入llm的翻译模块。


其实也差不多，通用的翻译prompt，加上简单的api调用，稍微vibe一下就可以了。就是得小心一下大文章的llm回复时间可能很长，得稍微调整一下实际请求的超时时间。


[llm部分实现](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)


::github{repo="dreaite/Mizuki-Content"}


# 结语


大致应该也就这些，毕竟也没有什么太深入的修改，就大概说一下个人的配置思路吧。


现在ci配完，应该也算是让输出的flow稍微舒畅一点了（
