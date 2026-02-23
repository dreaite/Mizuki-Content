---
title: 'Pythonクローラー環境構築'
published: 2024-01-01
updated: 2024-01-01
description: 'Pythonクローラー環境の構築には、Python 3、リクエストライブラリ（requests、seleniumなど）、解析ライブラリ（lxml、beautifulsoup4など）、データベース（MySQL、MongoDBなど）、保存用ライブラリ（PyMySQL、PyMongoなど）、Webライブラリ（Flask、Tornadoなど）、アプリクローリング用ツール（mitmproxy、appiumなど）、クローラーフレームワーク（pyspider、scrapyなど）の導入が含まれます。各ライブラリのインストールコマンドと注意点も詳しく説明しています。'
image: 'https://r2.dreaife.tokyo/notion/covers/45f564fe06e843e1a166f39b3e93ed2d/2421860-20240101202740011-1464779186.png'
tags: ['spider', '环境', 'python']
category: 'spider'
draft: false
lang: 'ja'
---

# 環境設定


Python3/リクエストライブラリ/解析ライブラリ/データベース/リポジトリ/ウェブライブラリ/アプリクローリングライブラリ/クローラー用フレームワークライブラリ

- Python3
    - Windows 11 ではストアから直接ダウンロードできます（
    - Linux では`apt-get install python3`
- リクエストライブラリ
    - requests

        `pip3 install requests`

    - selenium

        `pip install selenium`

    - ChromeDriver
        1. Chrome のバージョンを確認する
        2. [ChromeDriver](https://chromedriver.chromium.org/downloads) から対応バージョンをダウンロードする
        3. ChromeDriver を環境変数へ設定する
    - ~~phantomJS~~

        新版 selenium は phantomJS をサポートしていません。ChromeDriver の中で直接使用できます


        検証：


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

- 解析ライブラリ
    - lxml

        `pip install lxml`

    - beautifulsoup4

        `pip install beautifulsoup4`

    - pyquery

        `pip install pyquery`

    - tesserocr
        - tesseract のインストール

            [windows](https://digi.bib.uni-mannheim.de/tesseract/)

        - tesserocr のインストール

            [windows](https://github.com/simonflueckiger/tesserocr-windows_build/releases)を使用して`pip install <name>.whl`でインストール

        - 検証

            ![202401011649852.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/202401011649852.png)


            ```python
            import tesserocr
            from PIL import Image
            
            image = Image.open('G:/codeS/backOnGithub/Jupyter/spider/image.png')
            print(tesserocr.image_to_text(image))
            ```

            > 注意：もし以下のエラーが表示される場合、File "tesserocr.pyx", line 2580, in tesserocr._tesserocr.image_to_textRuntimeError: Failed to init API, possibly an invalid tessdata path というエラーには、tesseract の test_data をエラーのフォルダへ先に置く必要があります
- データベース
    - MySQL
    - MongoDB
    - Redis
- リポジトリ
    - PyMySQL

        `pip install pymysql`

    - PyMongo

        `pip install pymongo`

    - redis-py

        `pip install redis`

    - RedisDump

        Ruby をインストール


        `gem install redis-dump`

- ウェブライブラリ
    - Flask

        `pip install flask`

    - Tornado

        `pip install tornado`

- アプリクローリングライブラリ
    - charles
    - mitmproxy

        `pip install mitmproxy`

    - appium
- クローラーフレームワーク
    - pyspider

        `pip install pyspider`

        > Windows11 が動作しない場合はこの記事を参照してください
    - scrapy
    - scrapy-splash
    - scrapy-redis