---
title: '基于docker在win11运行pyspider'
published: 2024-01-02
updated: 2024-01-02
description: '在Win11中使用pyspider时遇到安装问题，可以通过Docker进行安装。提供了使用Docker命令和docker-compose的示例，成功运行后可以通过访问http://localhost:5000/确认pyspider是否正常工作。'
permalink: 'docker-pyspider-win'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/158e226a-090c-4740-a98d-3c9611c38017/2421860-20240102223652859-707973973.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=c9b7207157ea3695b4ea617fc3771529c30d3583364f53941c2978da3136f0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['spider', 'docker', 'pyspider']
category: 'spider'
draft: false
---

在win11中使用pyspider安装出现问题，发生多个报错


发现官网有用docker安装的方式


# 直接通过docker


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


# 使用docker-compse


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


然后运行即可
`docker-compose up -d`
运行成功后，如果访问[http://localhost:5000/](http://localhost:5000/)出现下面内容，则说明pyspider运行成功。


![202401022235683.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/202401022235683.png)
