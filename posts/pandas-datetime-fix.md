---
title: '关于pandas.to_datetime对不同时间格式使用时发生报错的情况'
published: 2024-01-02
updated: 2024-01-02
description: '在使用pandas的to_datetime函数时，遇到不同格式的日期导致报错。通过将format参数设置为''mixed''，可以解决格式不一致的问题。示例代码展示了如何处理日期格式错误，并成功转换为datetime格式。'
permalink: 'pandas-datetime-fix'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/afd78eed-48dd-4199-9c80-6cef584d4bd9/2421860-20240103003119896-530983932.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWJX3HLY%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzRfEUzvECGh1cWJ9H0inqZZW0sx%2BEYU3A4h1vHZTm3AiAYy8CkYEOQRpRvg96VUuLPvE%2FTjPGVIcJdydH8Py56tCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5MJ5QmaZIMajWuDKtwDhAhh4T%2FgWReft4bSCiNa%2BcO08IJfPlWFtycMs5%2FGGmtaOcGxKUDLN6s5AeynvMdNvsTcm%2FqSllbh9AtsaHbHYoiqGvjwsoFKQ%2F34n%2Fdjc2pnFQmRE7ZUwASRobUq74xdimaI59Vv2cOOxAFt%2FL81is6PzF3XAzWMuQnKn9DmLPNc9obYPFQVaTFsWr4akuAcl40%2FjamY1c37Iz5l4qStx0lXyda6u79OO8Whf0NK5HrU3oJFsz5k3uKHDT3YQR6DfH0H7zgp4qVGhP2UVm8cNk1Ngeejb4qQyNl0RO3XLoXssKo7PZ4D9PUtJm%2FCjvYyojZuYnLzAUCxD6vJqhUSqIs%2BxrriNKb3YUl9dM7xavjkI0iv3GP99kw8EF4K6MOHrGZd5tQBMBJWBIgs%2BQzsTTc%2BxpfjN3Ez1L0M2dBXEfT5mWymxxaJNB0X7jWuEWvd3obeOZeiLcURUtZLVsgtTgV3HUMiHuVlxP8RVdYxx9HhsBOag%2F6DD6PVnVbp1VAi3BjVULW00r5ZwFYiSoqzguruLgta2hE%2BZElbviZCnFdVdvQEUnbGUj5AKHQKAJm3pOOBmDkHIe1Oj2sM9XWyvL4MmnjqOmgT%2BiuFM5VlPuK%2BW6W%2BJMwGs%2FhkKNwwisbqzAY6pgERLmOIitzUnefSFwHeaPD4ENIIDGeh4ZwaETt7%2FqzovW56OX9xGq3avpB1p7eRMwogfeyyHQfahV7rJj6vnc6KnpMsNCTh3PRm2zZBILgpvQInkOzF2AiNR%2F45OD1eKlwj2e2TvUY1SE9fpTYnUDKNkhPs6jXmtIglnxusQkZv1hcFXj32jRa10JM1ArerYjTVRb5DkYbL9bIHIllzgGz9FMegfowV&X-Amz-Signature=4f64ddc7dbb5f31dacbdf32d22641653a8cac8777b9a6c22032e24b203a38c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['pandas', '数据处理']
category: 'cs-base'
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
