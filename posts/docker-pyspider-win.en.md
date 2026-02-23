---
title: '基于docker在win11运行pyspider'
published: 2024-01-02
updated: 2024-01-02
description: '在Win11中使用pyspider时遇到安装问题，可以通过Docker进行安装。提供了使用Docker命令和docker-compose的示例，成功运行后可以通过访问http://localhost:5000/确认pyspider是否正常工作。'
permalink: 'docker-pyspider-win'
image: 'https://r2.dreaife.tokyo/notion/covers/d0b67049d0274e6c9a4212cfb1241db0/2421860-20240102223652859-707973973.png'
tags: ['spider', 'docker', 'pyspider']
category: 'spider'
draft: false
lang: 'en'
---

There were issues installing pyspider on Windows 11, with multiple errors occurring.

I found that the official website offers a Docker-based installation method.

# Directly via Docker

```shell
# mysql
docker run --name mysql -d -v /data/mysql:/var/lib/mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=yes mysql:latest
# rabbitmq
docker run --name rabbitmq -d rabbitmq:latest

# phantomjs
docker run --name phantomjs -d binux/pyspider:latest phantomjs

# result worker
docker run --name result_worker -m 128m -d --link mysql:mysql --link rabbitmq:rabbitmq binux/pyspider:latest result_worker
# processor, run multiple instance if needed.
docker run --name processor -m 256m -d --link mysql:mysql --link rabbitmq:rabbitmq binux/pyspider:latest processor
# fetcher, run multiple instance if needed.
docker run --name fetcher -m 256m -d --link phantomjs:phantomjs --link rabbitmq:rabbitmq binux/pyspider:latest fetcher --no-xmlrpc
# scheduler
docker run --name scheduler -d --link mysql:mysql --link rabbitmq:rabbitmq binux/pyspider:latest scheduler
# webui
docker run --name webui -m 256m -d -p 5000:5000 --link mysql:mysql --link rabbitmq:rabbitmq --link scheduler:scheduler --link phantomjs:phantomjs binux/pyspider:latest webui
```


# Using docker-compose

```yaml
services:
  phantomjs:
    image: binux/pyspider:latest
    command: phantomjs
  result:
    image: binux/pyspider:latest
    external_links:
      - mysql
      - rabbitmq
    command: result_worker
  processor:
    image: binux/pyspider:latest
    external_links:
      - mysql
      - rabbitmq
    command: processor
  fetcher:
    image: binux/pyspider:latest
    external_links:
      - rabbitmq
    links:
      - phantomjs
    command : fetcher
  scheduler:
    image: binux/pyspider:latest
    external_links:
      - mysql
      - rabbitmq
    command: scheduler
  webui:
    image: binux/pyspider:latest
    external_links:
      - mysql
      - rabbitmq
    links:
      - scheduler
      - phantomjs
    command: webui
    ports:
      - "5000:5000"
```


Then just run:
`docker-compose up -d`
After running successfully, if you visit [http://localhost:5000/](http://localhost:5000/) and see the content below, it indicates that pyspider is running successfully.

![202401022235683.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/202401022235683.png)
