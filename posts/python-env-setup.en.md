---
title: 'Python Web Scraping Environment Setup'
published: 2024-01-01
updated: 2024-01-01
description: 'Set up a Python web-scraping environment with requests, Selenium, lxml, Beautiful Soup, databases, mitmproxy, Appium, pyspider, and Scrapy.'
image: 'https://r2.dreaife.tokyo/notion/covers/45f564fe06e843e1a166f39b3e93ed2d/2421860-20240101202740011-1464779186.png'
tags: ['spider', '环境', 'python']
category: '踩坑'
draft: false
lang: 'en'
---

# Environment Setup

python3/request libraries/parsing libraries/databases/storage libraries/web libraries/app scraping libraries/web scraping frameworks

- python3
	- On Windows 11, you can download it directly from the Store (
	- On Linux: `apt-get install python3`
- Request libraries
	- requests

		`pip3 install requests`

	- selenium

		`pip install selenium`

	- chromeDriver
		1. Check the Chrome version under About
		2. Download the corresponding version from [chromeDriver](https://chromedriver.chromium.org/downloads)
		3. Add chromeDriver to the environment variables
	- ~~phantomJS~~

		Newer versions of selenium no longer support phantomJS. You can use chromedriver directly instead.

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
		- Install tesseract

			[Windows](https://digi.bib.uni-mannheim.de/tesseract/)

		- Install tesserocr

			For [Windows](https://github.com/simonflueckiger/tesserocr-windows_build/releases), use `pip install <name>.whl` to install it

		- Verification

			![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/202401011649852.png)

			```python
			import tesserocr
			from PIL import Image

			image = Image.open('G:/codeS/backOnGithub/Jupyter/spider/image.png')
			print(tesserocr.image_to_text(image))

			```

			> Note: If the File "tesserocr.pyx", line 2580, in tesserocr._tesserocr.image_to_textRuntimeError: Failed to init API, possibly an invalid tessdata path error occurs, first place tesseract's test_data in the folder indicated by the error

- Databases
	- MySQL
	- MongoDB
	- Redis
- Storage libraries
	- PyMySQL

		`pip install pymysql`

	- PyMongo

		`pip install pymongo`

	- redis-py

		`pip install redis`

	- RedisDump

		Install ruby

		`gem install redis-dump`

- Web libraries
	- Flask

		`pip install flask`

	- Tornado

		`pip install tornado`

- App scraping libraries
	- charles
	- mitmproxy

		`pip install mitmproxy`

	- appium
- Web scraping frameworks
	- pyspider

		`pip install pyspider`

		> If it does not run on Windows 11, see this post of mine

	- scrapy
	- scrapy-splash
	- scrapy-redis
