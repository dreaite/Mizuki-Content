---
title: 'pandas.to_datetimeで異なる日時形式を扱う際に発生するエラーについて'
published: 2024-01-02
updated: 2024-01-02
description: 'pandasのto_datetime関数を使用する際、日付形式が混在しているとエラーが発生することがあります。formatパラメータを''mixed''に設定することで、形式不一致の問題を解決できます。サンプルコードでは、日付形式エラーを処理してdatetime形式へ正常に変換する方法を示しています。'
image: 'https://r2.dreaife.tokyo/notion/covers/3426b492685447d7b65f4c01dd9c4fce/2421860-20240103003119896-530983932.png'
tags: ['pandas', '数据处理']
category: 'cs-base'
draft: false
lang: 'ja'
---

[https://dreaife-team.atlassian.net/browse/DREAITE-39](https://dreaife-team.atlassian.net/browse/DREAITE-39)

pandas のフォーマットエラーのデータクリーニングを見ていると、[初心者向けサイト](https://www.runoob.com/pandas/pandas-cleaning.html) が提供したコードが、私の現在のバージョンでは動作しないことに気づいた。

エラーをネットで探しても、ほとんどが errors 引数を修正することに関するものだった。

最後にエラーメッセージを再度確認すると、format を mixed に変更すれば、データ形式が混在していることを pandas に伝えられる、ということになる（汗）。おそらく Python 3 のバージョンが新しすぎる問題だと思われる。

エラーコード：

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


修正コード：


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
