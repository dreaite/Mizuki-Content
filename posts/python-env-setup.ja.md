---
title: 'Pythonスクレイピング環境の構築'
published: 2024-01-01
updated: 2024-01-01
description: 'Pythonクローラー環境の構築手順。requests、Selenium、lxml、Beautiful Soup、各種DB、mitmproxy、Appium、pyspider、Scrapyの導入を整理します。'
image: 'https://r2.dreaife.tokyo/notion/covers/45f564fe06e843e1a166f39b3e93ed2d/2421860-20240101202740011-1464779186.png'
tags: ['spider', '环境', 'python']
category: '踩坑'
draft: false
lang: 'ja'
---

# 環境設定

python3/リクエストライブラリ/解析ライブラリ/データベース/ストレージライブラリ/Webライブラリ/アプリスクレイピングライブラリ/スクレイピングフレームワーク

- python3
	- Windows 11ではストアから直接ダウンロードできます（
	- Linuxでは`apt-get install python3`
- リクエストライブラリ
	- requests

		`pip3 install requests`

	- selenium

		`pip install selenium`

	- chromeDriver
		1. Chromeの「概要」でバージョンを確認する
		2. [chromeDriver](https://chromedriver.chromium.org/downloads)から対応するバージョンをダウンロードする
		3. chromeDriverを環境変数に設定する
	- ~~phantomJS~~

		新しいバージョンのseleniumではphantomJSがサポートされなくなったため、chromedriverを直接使用できます

		動作確認：

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
		- tesseractをインストールする

			[Windows](https://digi.bib.uni-mannheim.de/tesseract/)

		- tesserocrをインストールする

			[Windows](https://github.com/simonflueckiger/tesserocr-windows_build/releases)では`pip install <name>.whl`を使用してインストールします

		- 動作確認

			![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/202401011649852.png)

			```python
			import tesserocr
			from PIL import Image

			image = Image.open('G:/codeS/backOnGithub/Jupyter/spider/image.png')
			print(tesserocr.image_to_text(image))

			```

			> 注意：File "tesserocr.pyx", line 2580, in tesserocr._tesserocr.image_to_textRuntimeError: Failed to init API, possibly an invalid tessdata pathエラーが発生した場合は、まずtesseractのtest_dataをエラー対象のフォルダーに配置する必要があります

- データベース
	- MySQL
	- MongoDB
	- Redis
- ストレージライブラリ
	- PyMySQL

		`pip install pymysql`

	- PyMongo

		`pip install pymongo`

	- redis-py

		`pip install redis`

	- RedisDump

		Rubyをインストールする

		`gem install redis-dump`

- Webライブラリ
	- Flask

		`pip install flask`

	- Tornado

		`pip install tornado`

- アプリスクレイピングライブラリ
	- charles
	- mitmproxy

		`pip install mitmproxy`

	- appium
- スクレイピングフレームワーク
	- pyspider

		`pip install pyspider`

		> Windows 11で実行できない場合は、私のこちらの記事をご覧ください

	- scrapy
	- scrapy-splash
	- scrapy-redis
