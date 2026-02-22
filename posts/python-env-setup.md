---
title: 'python爬虫环境配置'
published: 2024-01-01
updated: 2024-01-01
description: '配置Python爬虫环境包括安装Python3、请求库（如requests和selenium）、解析库（如lxml和beautifulsoup4）、数据库（如MySQL和MongoDB）、存储库（如PyMySQL和PyMongo）、web库（如Flask和Tornado）、app爬取库（如mitmproxy和appium）以及爬虫框架（如pyspider和scrapy）。每个库的安装命令和注意事项均有详细说明。'
permalink: 'python-env-setup'
image: 'https://r2.dreaife.tokyo//notion/covers/45f564fe06e843e1a166f39b3e93ed2d/2421860-20240101202740011-1464779186.png'
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
