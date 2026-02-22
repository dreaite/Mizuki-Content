---
title: '个人开发环境构筑'
published: 2025-10-19
updated: 2025-10-20
description: '计划将开发环境迁移到Linux子主机，所需环境包括Java、Node.js、Python、C++、Go语言，MySQL、PostgreSQL、Redis、ElasticSearch数据库，以及RabbitMQ和Nginx微服务，基础工具为Git和Docker，并通过Cloudflare映射80端口以实现外网访问。'
permalink: 'personal-dev-env.en'
image: 'https://source.unsplash.com/random'
tags: []
category: ''
draft: true
lang: 'en'
---

I am planning to switch to a Linux-based sub-host to remotely serve as my main development machine, so I need to move the environments I might use onto the small host.

What I currently need:

- Languages: Java, Node.js, Python, C++, Go
- Databases: MySQL, PostgreSQL, Redis, Elasticsearch
- Some microservices: RabbitMQ, Nginx
- Basic tools: Git, Docker

Then, you can map port 80 via Cloudflare to enable external access.
