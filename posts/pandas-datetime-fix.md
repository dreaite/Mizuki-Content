---
title: '关于pandas.to_datetime对不同时间格式使用时发生报错的情况'
published: 2024-01-02
updated: 2024-01-02
description: '在使用pandas的to_datetime函数时，遇到不同格式的日期导致错误。通过将format参数设置为''mixed''，可以解决此问题，适应混合格式的日期字符串。示例代码展示了如何处理错误并成功转换日期格式。'
permalink: 'pandas-datetime-fix'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/afd78eed-48dd-4199-9c80-6cef584d4bd9/2421860-20240103003119896-530983932.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWN76A4U%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T082608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUW7D6q4RRvWenRJ30pDGAl0so0Uk%2B5wzxaSeCWwvR2AiEArDRJ%2FUz92k4befy%2FztuI8BZV3aqw%2FoCtDnMUhmKbdcEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD28YvzChQqrFIeSDyrcAx9fj0oHbdu7gAayUWpJq7ZgNpBQr2yQp0eG8m%2FTCohguvPQrtfgPkkhwS2aro3Ql5C8vjwX3nEI7c2wHSja8A6F9PPgjaifLVN4G4LA4Mt7wcAAGaIkZ0nDHf%2FpOOKel7mttkXwBneXhJ1aqYHFn7ZwZSmNLv7BnNNe57upDe8xGfvFz0B%2FJKmalguscc0FfFSKBpSP4hWt6tF6VNMJlYohgokVK%2Ft%2Btn8LnEcGyYB5NnBlPVSzhNusBBYqvskI3aDz1pnG0%2BmNNmgkimjxWntZN2aHLAn3bKcbtUXT74VSmY3xZeLzoViod4RxBe%2FbObg1syekROPQsixgTvA5hTOy5A13F8Frs4k6ZzPcQ8EJQih3QPUEWW%2FsDkzb22M%2BpGT9fxTiJ42vmxka8j3OZdXONwQWxaFnKDQhlrO3h7mczScXKn1m2336kwxxm2Fhmxku5A9%2F7jhmiP6yHL4eZVlZXw7ErpUxspaVw8CEd1lzIbLLspqttHMylVzyQDdcKC2VgUt1iBdQq%2FO88607WKvry1MLZNOint4IXqGriS%2FnmUirdMXWqUjCsH8MVKiKIsvK2l0DQ1ZRQUD5FKnWfPm4eWnPUuIKiW6ZuasTh5EmiSimGnHUnbmXYiLVMLnF6swGOqUBaHYUXSvyItfbGvPRA%2BIlkpmcu6OtOXL19iwhZZidWWgZyq849Pki%2FoEwsmkvKGD8f4LxgCksmPHX9VIeGXokq40HQTrFkeLmPP8noKGJJ%2Fz5yiFO1pkUMeTm6SmM2TYJWg45IoRBsQhZM4d1wNk8Pfi%2BPJwaWHCwO52cA9lNd1s9KCwMq0jNek12X9aB4PvYy6CGEVhB4oG8en18N0NLExHNO97G&X-Amz-Signature=7c4c1df40dba733a47521662511e8d3d9289f445691d59b122d8931a3f160158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
