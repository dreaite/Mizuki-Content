---
title: '個人開発環境の構築'
published: 2025-10-19
updated: 2025-10-20
description: '開発環境をLinuxのサブホストへ移行する計画です。必要な環境には、Java、Node.js、Python、C++、Go、MySQL・PostgreSQL・Redis・Elasticsearchなどのデータベース、RabbitMQやNginxなどのミドルウェア/サービス、そしてGitとDockerなどの基本ツールが含まれます。外部アクセスを実現するために、Cloudflareで80番ポートのマッピングも行う予定です。'
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
