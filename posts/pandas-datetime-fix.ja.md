---
title: '異なる日時形式でpandas.to_datetimeを使用した際にエラーが発生する場合について'
published: 2024-01-02
updated: 2024-01-02
description: 'pandas.to_datetimeで日付形式が混在するときのエラーを、format="mixed"で解決する方法をコード例とともに解説します。'
image: 'https://r2.dreaife.tokyo/notion/covers/3426b492685447d7b65f4c01dd9c4fce/2421860-20240103003119896-530983932.png'
tags: ['pandas', '数据处理', 'cs-base']
category: 'TROUBLESHOOT'
draft: false
lang: 'ja'
---

[https://dreaife-team.atlassian.net/browse/DREAITE-39](https://dreaife-team.atlassian.net/browse/DREAITE-39)

[菜鳥教程](https://www.runoob.com/pandas/pandas-cleaning.html)で、pandasを使って形式が正しくないデータをクリーニングする方法を読んでいたところ、掲載されているコードが現在使用しているバージョンでは動作しないことに気づきました。

エラーについてしばらくネットで調べましたが、見つかるのはどれも`errors`パラメーターを変更する方法ばかりでした。

最後にエラーメッセージを読み直したところ、`format`を`mixed`に変更し、データ形式が混在していることをpandasに伝えればよいと分かりました（汗）。おそらくPython 3のバージョンが新しすぎるためだと思います。

エラーが発生するコード：

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

エラーメッセージ：

```shell
ValueError: time data "20201226" doesn't match format "%Y/%m/%d", at position 2. You might want to try:
    - passing `format` if your strings have a consistent format;
    - passing `format='ISO8601'` if your strings are all ISO8601 but not necessarily in exactly the same format;
    - passing `format='mixed'`, and the format will be inferred for each element individually. You might want to use `dayfirst` alongside this.

```

修正後のコード：

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
