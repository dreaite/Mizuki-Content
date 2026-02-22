---
title: 'python爬虫环境配置'
published: 2024-01-01
updated: 2024-01-01
description: '配置Python爬虫环境包括安装Python3、请求库（如requests和selenium）、解析库（如lxml和beautifulsoup4）、数据库（如MySQL和MongoDB）、存储库（如PyMySQL和PyMongo）、web库（如Flask和Tornado）、app爬取库（如mitmproxy和appium）以及爬虫框架（如pyspider和scrapy）。每个库的安装命令和注意事项均有详细说明。'
permalink: 'python-env-setup'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/cc1b5f6a-59d2-4562-9523-5582cd9da0cd/2421860-20240101202740011-1464779186.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNS6BWN%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T113457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CnggUmQNTIWcxpk71sKe%2BtcT0RVUJnkPa1sONfkxywIgWix1CfX3kaputgPwarZUIm7ANIL%2FnkR%2Bs9ctAQYwHUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoT9%2B%2FRgaZzFud2TSrcA6ZIdkCm0Ediqay5sOB%2BtmFTfvN%2F%2FiM3m%2F741v%2F4WBgrN8nAdCqs3K0VwKqA87HJN%2FOVRcC613qZ8Vk3uuCXBRVmMq3bP4SIlSXY05b9NsSlLB21h4aAJO%2BUo9I5B0OKrge%2FTIMz5t56djaob1uhJaeKQadOFjvvl4vBIoul9KfMJe3GpdLQfkWx5HKq9mGFkHtGO2EWxSRKt1PzPg8778DWmZBTnwZ2YZNpAF8Vp2zEZF6UMPZRWWYTe3AAB65obPV1EWwXRTDaJ9z%2BncisYqkargisww8OzzKImvt5cZILOD8cEL%2Fp2uopoku1gp5jLHz3lvfO6DyEerPRGgpCtAqjNzjhPJLT1T3eqgap6aKwSmtpmKjsPT7jYyAmMNTk92IzUW0sTA9HsYbfl5BQchOJqYBSimo7RP0jfpBzIPcPAjR0IPIpavdDv0u272P00%2BnvavidCmm6%2FjDHZzLK%2FWMhCC1qParzGxRVFKQfj5JIWHcMA2t6qMlrLcqjAZGqb0Sf9jAIV1ylcSFBpa7YSppoqLOEkQwnaRmZiaKxGM%2BouTPJDU71RslQ9XjZWdbID5ENcci%2F98HbSW8Oe5SR3HH5tDagoVWqoCx1Q2uszHPL7uAQ8Z6hoX4Ws%2FRNMIbF6swGOqUBQOf5kXQFX3yokCvwpqOkVYHnJ%2BkSV26e003qD3b5u%2BdxOClHMeiP5JxnpBXoNTy4%2F5LsnK38wifdV7M7j9Zpx3qluNkI115JBCKcURrDbXplhGJUCPuZaVV7yhvlTO3qekjS8%2By3g9Yy4Gdvhf1d3CBLBgYPAxCxE%2Fd9myIs0pAcvhHT4nUEkZwrjkso1JE0Ev147f5qpEKi59tWtwfvL%2Fi4Xl%2Fl&X-Amz-Signature=f1c0607af4926352385771eb216caf46a6522a81fa5290612e92628f012d2fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
