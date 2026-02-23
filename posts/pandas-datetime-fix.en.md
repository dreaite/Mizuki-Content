---
title: 'About Errors When Using pandas.to_datetime with Different Time Formats'
published: 2024-01-02
updated: 2024-01-02
description: 'When using the pandas to_datetime function, errors may occur if date values use different formats. Setting the format parameter to ''mixed'' can solve issues caused by inconsistent formats. Example code shows how to handle invalid date formats and successfully convert values to datetime.'
image: 'https://r2.dreaife.tokyo/notion/covers/3426b492685447d7b65f4c01dd9c4fce/2421860-20240103003119896-530983932.png'
tags: ['pandas', '数据处理']
category: 'cs-base'
draft: false
lang: 'en'
---

[https://dreaife-team.atlassian.net/browse/DREAITE-39](https://dreaife-team.atlassian.net/browse/DREAITE-39)

While looking at Runoob's guide on cleaning formatting errors in pandas, I found that the code Runoob provides doesn't run on my current version.

Most online resources for this error suggest modifying the errors parameter.

Finally, after re-reading the error message, I realized that changing the format to 'mixed'—to indicate mixed data formats—solves it (sweat). It seems to be an issue with my Python 3 version being too new.

Error code:

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

Error message：

```shell
ValueError: time data "20201226" doesn't match format "%Y/%m/%d", at position 2. You might want to try:
    - passing `format` if your strings have a consistent format;
    - passing `format='ISO8601'` if your strings are all ISO8601 but not necessarily in exactly the same format;
    - passing `format='mixed'`, and the format will be inferred for each element individually. You might want to use `dayfirst` alongside this.
```

Fixed code：

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
