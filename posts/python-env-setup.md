---
title: 'python爬虫环境配置'
published: 2024-01-01
updated: 2024-01-01
description: '配置Python爬虫环境包括安装Python3、请求库（如requests和selenium）、解析库（如lxml和beautifulsoup4）、数据库（如MySQL和MongoDB）、存储库（如PyMySQL和PyMongo）、web库（如Flask和Tornado）、app爬取库（如mitmproxy和appium）以及爬虫框架（如pyspider和scrapy）。每个库的安装命令和注意事项均有详细说明。'
permalink: 'python-env-setup'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/cc1b5f6a-59d2-4562-9523-5582cd9da0cd/2421860-20240101202740011-1464779186.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=900022f11101a9eb631c529f9b24c4910f4931b03baeb45e08076ea5cbaabc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
