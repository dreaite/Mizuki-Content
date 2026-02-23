---
title: 'Python Web Crawler Environment Setup'
published: 2024-01-01
updated: 2024-01-01
description: 'Setting up a Python web crawler environment includes installing Python 3, request libraries (such as requests and selenium), parsing libraries (such as lxml and beautifulsoup4), databases (such as MySQL and MongoDB), storage libraries (such as PyMySQL and PyMongo), web libraries (such as Flask and Tornado), app crawling tools (such as mitmproxy and appium), and crawler frameworks (such as pyspider and scrapy). Installation commands and notes for each library are provided in detail.'
image: 'https://r2.dreaife.tokyo/notion/covers/45f564fe06e843e1a166f39b3e93ed2d/2421860-20240101202740011-1464779186.png'
tags: ['spider', '环境', 'python']
category: 'spider'
draft: false
lang: 'en'
---

# Environment Setup

python3/Request libraries/Parsing libraries/Databases/Repositories/Web libraries/App scraping libraries/Web crawler framework libraries

- Python 3
    - Windows 11 can be downloaded directly from the Store
    - On Linux, `apt-get install python3`
- Request libraries
    - requests

        `pip3 install requests`

    - selenium

        `pip install selenium`

    - ChromeDriver
        1. View the Chrome version in About Chrome
        2. Download the corresponding version from [ChromeDriver](https://chromedriver.chromium.org/downloads)
        3. Add ChromeDriver to your environment variables
    - ~~phantomJS~~

        The new Selenium versions no longer support phantomJS; you can use it directly with ChromeDriver


        Verification:


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

- Parsing libraries
    - lxml

        `pip install lxml`

    - beautifulsoup4

        `pip install beautifulsoup4`

    - pyquery

        `pip install pyquery`

    - tesserocr
        - Install Tesseract

            [Windows](https://digi.bib.uni-mannheim.de/tesseract/)

        - Install tesserocr

            [Windows](https://github.com/simonflueckiger/tesserocr-windows_build/releases) using `pip install <name>.whl`

        - Verification

            ![202401011649852.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/202401011649852.png)


            ```python
            import tesserocr
            from PIL import Image
            
            image = Image.open('G:/codeS/backOnGithub/Jupyter/spider/image.png')
            print(tesserocr.image_to_text(image))
            ```

            > Note: If you encounter File "tesserocr.pyx", line 2580, in tesserocr._tesserocr.image_to_textRuntimeError: Failed to init API, possibly an invalid tessdata path error, you need to first put tessdata into the error folder
- Databases
    - MySQL
    - MongoDB
    - Redis
- Repositories
    - PyMySQL

        `pip install pymysql`

    - PyMongo

        `pip install pymongo`

    - redis-py

        `pip install redis`

    - RedisDump

        Install Ruby


        `gem install redis-dump`

- Web libraries
    - Flask

        `pip install flask`

    - Tornado

        `pip install tornado`

- App scraping libraries
    - Charles
    - mitmproxy

        `pip install mitmproxy`

    - Appium
- Web crawling frameworks
    - pyspider

        `pip install pyspider`

        > If Windows 11 cannot run it, you can refer to this article
    - scrapy
    - scrapy-splash
    - scrapy-redis