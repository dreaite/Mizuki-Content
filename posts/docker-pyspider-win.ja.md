---
title: 'Dockerを使用してWindows 11でpyspiderを実行する'
published: 2024-01-02
updated: 2024-01-02
description: 'Windows 11でpyspiderをDockerまたはDocker Composeから起動し、ローカル依存関係の問題を回避して、localhost:5000のWebUIで動作確認します。'
image: 'https://r2.dreaife.tokyo/notion/covers/d0b67049d0274e6c9a4212cfb1241db0/2421860-20240102223652859-707973973.png'
tags: ['spider', 'docker', 'pyspider']
category: '踩坑'
draft: false
lang: 'ja'
---

Windows 11でpyspiderをインストールしようとしたところ、複数のエラーが発生しました。

公式サイトを確認すると、Dockerを使ったインストール方法がありました。

# Dockerを直接使用する

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

# docker-compseを使用する

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

あとは次のコマンドを実行するだけです。<br>`docker-compose up -d`<br>正常に起動した後、[http://localhost:5000/](http://localhost:5000/)にアクセスして以下の内容が表示されれば、pyspiderは正常に動作しています。

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/202401022235683.png)
