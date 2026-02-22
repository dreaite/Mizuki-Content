---
title: 'python爬虫环境配置'
published: 2024-01-03
updated: 2024-01-01
description: '配置Python爬虫环境包括安装Python3及相关库，如requests、selenium、lxml、beautifulsoup4等，设置chromeDriver，选择数据库（MySQL、MongoDB、Redis），以及使用Flask、Tornado等Web库和爬虫框架（如pyspider、scrapy）。同时，提供了安装和验证的具体命令和步骤。'
permalink: 'python-spider-setup'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/cc1b5f6a-59d2-4562-9523-5582cd9da0cd/2421860-20240101202740011-1464779186.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNAGBRM%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T073411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE0vgzlQNnEBFzki8QxtRbByU425%2Bb1eZ4DAmR1R0gfgIhAOfalBB%2BYC7xzdxKheF%2BM%2F7nFITIBJiamVzGD8jmZYwtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw5UmJG0w26p%2Fro6Qq3AMKnsrukopqrOxumn0SuV3QywcjdT3nHwsb%2FLQ9XvNgF7fIz5YsOyr4l5hERbGe3SwZjjnxPCKWWSR7y2tl9ofdViCjgHrzfs%2FFfVWnSP94Et3I5edTTllUX5bi7jgXbwJo9UnPgi5HyhBc9FQRoE2TbP%2FQNujMAmUHgWYlkURI42rGDbZbEWPc1ktnIpt3jOyURp4HeEAqP2vqm9Z4VqlL0xcMK89GZKWp1cUpKWbK8bk5n%2Bjrl8F1KQ%2F6EkJKBMeN0xlG8pEY7WehwZy%2ByWH6KsHd%2F24Iq1kUOtGznIRcJGzs9miCE9SCZy7pzb22BqD%2B6RWd0lhPNG9bE25Pq%2Bp91YVVLpc%2B%2BZ8C7Ee8POJEAFx7KaqDSi0%2BIqwRmyal1R1KXp2xkwsRJU%2FwFY2X41sjZnhnFHqGbredYg0us8kcSibeXPagDaFGolwS63ki3rWmr7pbYjIGFOd6wV4OqadwZWGR%2F3usj5XMHUShIGMKXAfcwzWJ6bRyikOhcwFjdybU3QRov577SZocfaO4vjRPsnpyIqunU0rfW9VoR6WfdyQlvCemwEttg%2FwQpLh6zhsz%2FJeICdWG42vwj095qGxNXjdv1TLHIuw68Vl8bWZtRwdGbGrqk4f%2BCKAy4TDNxerMBjqkAQCl9Mk6qBl8gUkMQa2epzGBxSlLtg3ZLtOIYstBfg8KzwvMtoSu2bBhY5A1iQL3%2F8%2B5Cd2V3ztI%2Bj%2FHzL58w0r1IXYFYJuNLHOHJIoYONBgZEthT9TVnfgUYMQcSXomYMAHYkqOgt1gtQ%2Fx8giBkDvuCii1%2FqypVck3WH8%2BT50HSAlKADmpcUxIhheTj%2BMka7oDB6sHcy3aKe2hlVGxHc5xGjCp&X-Amz-Signature=99f74403ec68901efd5a0aac75d92710eb3924d13903de764609205e73b9e5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['spider', '环境', 'python']
category: 'spider'
draft: false
---

# 环境配置


python3/请求库/解析库/数据库/存储库/web库/app爬取库/爬虫框架库

- python3
    - win11下可以直接商店下载了（
    - Linux下`apt-get install python3`
- 请求库
    - requests

        `pip3 install requests`

    - selenium

        `pip install selenium`

    - chromeDriver
        1. 在关于查看chrome版本
        2. 在[chromeDriver](https://chromedriver.chromium.org/downloads)下载对应版本
        3. 将chromeDriver配置到环境变量
    - ~~phantomJS~~

        新版selenium已经不支持phantomJS了，可以在chromedriver里面直接使用


        验证：


        ```python
        from selenium import webdriver
        from selenium.webdriver.chrome.options import Options
        
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--disable-gpu')
        driver = webdriver.Chrome(options=chrome_options)
        driver.get("<https://dreaife.icu/>")
        print(driver.current_url)
        ```

    - aiohttp

        `pip install aiodns`

- 解析库
    - lxml

        `pip install lxml`

    - beautifulsoup4

        `pip install beautifulsoup4`

    - pyquery

        `pip install pyquery`

    - tesserocr
        - 安装tesseract

            [windows](https://digi.bib.uni-mannheim.de/tesseract/)

        - 安装tesserocr

            [windows](https://github.com/simonflueckiger/tesserocr-windows_build/releases)使用`pip install <name>.whl`安装

        - 验证

            ![202401011649852.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/202401011649852.png)


            ```python
            import tesserocr
            from PIL import Image
            
            image = Image.open('G:/codeS/backOnGithub/Jupyter/spider/image.png')
            print(tesserocr.image_to_text(image))
            ```

            > 注意：如果出现File "tesserocr.pyx", line 2580, in tesserocr._tesserocr.image_to_textRuntimeError: Failed to init API, possibly an invalid tessdata path错误，需要先将tesseract的test_data放到错误文件夹下
- 数据库
    - MySQL
    - MongoDB
    - Redis
- 存储库
    - PyMySQL

        `pip install pymysql`

    - PyMongo

        `pip install pymongo`

    - redis-py

        `pip install redis`

    - RedisDump

        安装ruby


        `gem install redis-dump`

- web库
    - Flask

        `pip install flask`

    - Tornado

        `pip install tornado`

- app爬取库
    - charles
    - mitmproxy

        `pip install mitmproxy`

    - appium
- 爬虫框架
    - pyspider

        `pip install pyspider`

        > 如果win11无法运行可以看我这篇
    - scrapy
    - scrapy-splash
    - scrapy-redis
