---
title: 'Building a Personal Development Environment'
published: 2025-10-19
updated: 2025-10-20
description: 'The plan is to migrate the development environment to a Linux secondary host. Required components include Java, Node.js, Python, C++, Go, databases such as MySQL, PostgreSQL, Redis, and Elasticsearch, middleware and services such as RabbitMQ and Nginx, and foundational tools such as Git and Docker. Cloudflare will be used to map port 80 for external network access.'
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
