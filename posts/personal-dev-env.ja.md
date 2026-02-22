---
title: '个人开发环境构筑'
published: 2025-10-19
updated: 2025-10-20
description: '计划将开发环境迁移到Linux子主机，所需环境包括Java、Node.js、Python、C++、Go语言，MySQL、PostgreSQL、Redis、ElasticSearch数据库，以及RabbitMQ和Nginx微服务，基础工具为Git和Docker，并通过Cloudflare映射80端口以实现外网访问。'
permalink: 'personal-dev-env.ja'
image: 'https://source.unsplash.com/random'
tags: []
category: ''
draft: true
lang: 'ja'
---

今、Linux のサブホストを使ってリモートで私の開発用のメインマシンとして運用するつもりなので、現在使用する可能性のある環境を小型のホストへ移す必要があります。

現在必要としているものは次のとおりです：

- 言語：Java、Node.js、Python、C++、Go
- データベース：MySQL、PostgreSQL、Redis、Elasticsearch
- いくつかのマイクロサービス：RabbitMQ、Nginx
- 基本ツール：Git、Docker

その後、Cloudflare を使って 80 番ポートをマッピングして外部からのアクセスを得ることができます。
