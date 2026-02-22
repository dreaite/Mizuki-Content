---
title: '个人开发环境构筑'
published: 2025-10-19
updated: 2025-10-20
description: '计划将开发环境迁移到Linux子主机，所需环境包括Java、Node.js、Python、C++、Go语言，MySQL、PostgreSQL、Redis、ElasticSearch数据库，以及RabbitMQ和Nginx微服务，基础工具为Git和Docker，并通过Cloudflare映射80端口以实现外网访问。'
permalink: 'personal-dev-env'
image: 'https://source.unsplash.com/random'
tags: []
category: ''
draft: true
---

我现在打算换用linux的子主机来远程作为我的开发主力机，所以得把当前可能会使用到的环境给搬到小主机上面去。


我目前需要的有

- 语言：java nodejs python cpp go
- 数据库：mysql postgreSQL Redis ElasticSearch
- 一些微服务：rabbitmq nginx
- 基础工具：git docker

然后，可以通过cloudflare来把80端口做映射来获取外网访问
