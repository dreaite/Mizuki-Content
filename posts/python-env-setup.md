---
title: 'python爬虫环境配置'
published: 2024-01-01
updated: 2024-01-01
description: '配置Python爬虫环境包括安装Python3、请求库（如requests和selenium）、解析库（如lxml和beautifulsoup4）、数据库（如MySQL和MongoDB）、存储库（如PyMySQL和PyMongo）、web库（如Flask和Tornado）、app爬取库（如mitmproxy和appium）以及爬虫框架（如pyspider和scrapy）。每个库的安装命令和注意事项均有详细说明。'
permalink: 'python-env-setup'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/cc1b5f6a-59d2-4562-9523-5582cd9da0cd/2421860-20240101202740011-1464779186.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWJX3HLY%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzRfEUzvECGh1cWJ9H0inqZZW0sx%2BEYU3A4h1vHZTm3AiAYy8CkYEOQRpRvg96VUuLPvE%2FTjPGVIcJdydH8Py56tCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5MJ5QmaZIMajWuDKtwDhAhh4T%2FgWReft4bSCiNa%2BcO08IJfPlWFtycMs5%2FGGmtaOcGxKUDLN6s5AeynvMdNvsTcm%2FqSllbh9AtsaHbHYoiqGvjwsoFKQ%2F34n%2Fdjc2pnFQmRE7ZUwASRobUq74xdimaI59Vv2cOOxAFt%2FL81is6PzF3XAzWMuQnKn9DmLPNc9obYPFQVaTFsWr4akuAcl40%2FjamY1c37Iz5l4qStx0lXyda6u79OO8Whf0NK5HrU3oJFsz5k3uKHDT3YQR6DfH0H7zgp4qVGhP2UVm8cNk1Ngeejb4qQyNl0RO3XLoXssKo7PZ4D9PUtJm%2FCjvYyojZuYnLzAUCxD6vJqhUSqIs%2BxrriNKb3YUl9dM7xavjkI0iv3GP99kw8EF4K6MOHrGZd5tQBMBJWBIgs%2BQzsTTc%2BxpfjN3Ez1L0M2dBXEfT5mWymxxaJNB0X7jWuEWvd3obeOZeiLcURUtZLVsgtTgV3HUMiHuVlxP8RVdYxx9HhsBOag%2F6DD6PVnVbp1VAi3BjVULW00r5ZwFYiSoqzguruLgta2hE%2BZElbviZCnFdVdvQEUnbGUj5AKHQKAJm3pOOBmDkHIe1Oj2sM9XWyvL4MmnjqOmgT%2BiuFM5VlPuK%2BW6W%2BJMwGs%2FhkKNwwisbqzAY6pgERLmOIitzUnefSFwHeaPD4ENIIDGeh4ZwaETt7%2FqzovW56OX9xGq3avpB1p7eRMwogfeyyHQfahV7rJj6vnc6KnpMsNCTh3PRm2zZBILgpvQInkOzF2AiNR%2F45OD1eKlwj2e2TvUY1SE9fpTYnUDKNkhPs6jXmtIglnxusQkZv1hcFXj32jRa10JM1ArerYjTVRb5DkYbL9bIHIllzgGz9FMegfowV&X-Amz-Signature=eafcb0dac8e8758f15ad77c7fa8840aa50c0fb15eb4d70ef396420965e05daf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
