---
title: 'Errors When Using pandas.to_datetime with Different Date and Time Formats'
published: 2024-01-02
updated: 2024-01-02
description: 'Fix pandas.to_datetime errors from mixed date strings with format="mixed", plus a concise example converting inconsistent values to datetime.'
image: 'https://r2.dreaife.tokyo/notion/covers/3426b492685447d7b65f4c01dd9c4fce/2421860-20240103003119896-530983932.png'
tags: ['pandas', '数据处理', 'cs-base']
category: '踩坑'
draft: false
lang: 'en'
---

[https://dreaife-team.atlassian.net/browse/DREAITE-39](https://dreaife-team.atlassian.net/browse/DREAITE-39)

While reading [RUNOOB](https://www.runoob.com/pandas/pandas-cleaning.html)'s guide on using pandas to clean incorrectly formatted data, I found that the code it provided would not run with my current version.

After searching online for ages, all the solutions I found involved changing the `errors` parameter.

Finally, I reread the error message and discovered that changing `format` to `mixed` tells pandas that the data contains mixed formats, which solves the problem (sweat). This is probably because my Python 3 version is too new.

Code that causes the error:

```python
import pandas as pd

# 第三个日期格式错误
data = {
  "Date": ['2020/12/01', '2020/12/02' , '20201226'],
  "duration": [50, 40, 45]
}

df = pd.DataFrame(data, index = ["day1", "day2", "day3"])

df['Date'] = pd.to_datetime(df['Date'])

print(df.to_string())

```

Error message:

```shell
ValueError: time data "20201226" doesn't match format "%Y/%m/%d", at position 2. You might want to try:
    - passing `format` if your strings have a consistent format;
    - passing `format='ISO8601'` if your strings are all ISO8601 but not necessarily in exactly the same format;
    - passing `format='mixed'`, and the format will be inferred for each element individually. You might want to use `dayfirst` alongside this.

```

Fixed code:

```python
import pandas as pd

# 第三个日期格式错误
data = {
  "Date": ['2020/12/01', '2020/12/02' , '20201226'],
  "duration": [50, 40, 45]
}
df = pd.DataFrame(data, index = ["day1", "day2", "day3"])

df['Date'] = pd.to_datetime(df['Date'], format='mixed')
# df['Date'] = pd.to_datetime(df['Date'],format="%Y/%m/%d",errors='ignore')

print(df.to_string())

```
