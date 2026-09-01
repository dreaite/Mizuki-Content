---
title: '关于pandas.to_datetime对不同时间格式使用时发生报错的情况'
published: 2024-01-02
updated: 2024-01-02
description: '解决 pandas.to_datetime 解析混合日期格式时报错的问题，演示使用 format="mixed" 兼容不同时间字符串并转换为 datetime。'
permalink: 'pandas-datetime-fix'
image: 'https://r2.dreaife.tokyo/notion/covers/3426b492685447d7b65f4c01dd9c4fce/2421860-20240103003119896-530983932.png'
tags: ['pandas', '数据处理', 'cs-base']
category: 'TROUBLESHOOT'
draft: false
---

[https://dreaife-team.atlassian.net/browse/DREAITE-39](https://dreaife-team.atlassian.net/browse/DREAITE-39)

在看[菜鸟](https://www.runoob.com/pandas/pandas-cleaning.html)的pandas对格式错误清洗时，发现菜鸟提供的代码在我现在的版本跑不通。

把报错在网上找了半天都是把报错errors参数给修改的。

最后重看了下报错信息，发现把format改成mixed，告诉pandas数据格式混合就可以（汗），应该是python3版本太新的问题

报错代码：

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

错误信息：

```shell
ValueError: time data "20201226" doesn't match format "%Y/%m/%d", at position 2. You might want to try:
    - passing `format` if your strings have a consistent format;
    - passing `format='ISO8601'` if your strings are all ISO8601 but not necessarily in exactly the same format;
    - passing `format='mixed'`, and the format will be inferred for each element individually. You might want to use `dayfirst` alongside this.

```

修复代码：

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
