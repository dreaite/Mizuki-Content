---
title: 'NumPy学習ノート2'
published: 2024-01-05
updated: 2024-01-05
description: '本記事では、ビット演算、文字列操作、数学関数、統計関数、ソートと条件フィルタ、バイトスワップ、配列のコピーとビュー、行列ライブラリ、線形代数、ファイル入出力、Matplotlibとの連携など、NumPyの多様な機能を紹介します。詳細な関数説明とサンプルコードを通じて、NumPyの各機能の理解と活用を助けます。'
image: 'https://r2.dreaife.tokyo/notion/covers/8f8d39bb1fb14003b5157b7cd6360426/GCn5JKCaAAALIni.jpg'
tags: ['python', 'numpy']
category: 'cs-base'
draft: false
lang: 'ja'
---

# numpy計算


## numpyビット演算


ビット演算は、二進数の各ビットレベルで操作を行う演算の一種で、数値全体の値を考慮せず、二進数の各ビットを直接操作します。

ビット演算は、計算機科学において低レベルデータの最適化や処理に広く用いられます。

NumPy の "bitwise_" で始まる関数はビット演算関数です。

NumPy のビット演算には以下の関数が含まれます：

| 関数          | 説明                                                       | 演算子 |
| ----------- | -------------------------------------------------------- | --- |
| bitwise_and | ビットAND、配列要素に対してビットANDを実行します          | &   |
| bitwise_or  | ビットOR、配列要素に対してビットORを実行します            | |   |
| bitwise_xor | ビットXOR、              | ^   |
| bitwise_not | ビット反転              | ~   |
| invert      | ビット反転              | ~   |
| left_shift  | 左シフト演算、2進数表現のビットを左へ移動               | <<  |
| right_shift | 右シフト演算、2進数表現のビットを右へ移動              | >>  |


```python
import numpy as np

arr1 = np.array([True, False, True], dtype=bool)
arr2 = np.array([False, True, False], dtype=bool)

result_and = np.bitwise_and(arr1, arr2)
result_or = np.bitwise_or(arr1, arr2)
result_xor = np.bitwise_xor(arr1, arr2)
result_not = np.bitwise_not(arr1)

print("AND:", result_and)  # [False, False, False]
print("OR:", result_or)    # [True, True, True]
print("XOR:", result_xor)  # [True, True, True]
print("NOT:", result_not)  # [False, True, False]

# 按位取反
arr_invert = np.invert(np.array([1, 2], dtype=np.int8))
print("Invert:", arr_invert)  # [-2, -3]

# 左移位运算
arr_left_shift = np.left_shift(5, 2)
print("Left Shift:", arr_left_shift)  # 20

# 右移位运算
arr_right_shift = np.right_shift(10, 1)
print("Right Shift:", arr_right_shift)  # 5
```


## 字符串函数


以下函数用于对 dtype 为 numpy.string_或 numpy.unicode_ 的数组执行向量化字符串操作。 它们基于 Python 内置库中的标准字符串函数。


これらの関数は文字列配列クラス（numpy.char）に定義されています。


| 函数           | 説明                       |
| ------------ | ------------------------ |
| add()        | 二つの配列の各要素の文字列を結合します        |
| multiply()   | 要素ごとに連結された文字列を返します           |
| center()     | 文字列を中央寄せにし、左側と右側を指定した文字で埋めます。 |
| capitalize() | 文字列の最初の文字を大文字に変換します           |
| title()      | 文字列の各単語の最初の文字を大文字にします     |
| lower()      | 配列要素を小文字に変換します                |
| upper()      | 配列要素を大文字に変換します                |
| split()      | 指定した区切り文字で文字列を分割し、配列リストを返します    |
| splitlines() | 要素内の行リストを返し、改行文字で分割         |
| strip()      | 要素の先頭または末尾の特定の文字を削除します         |
| join()       | 指定した区切り文字で配列要素を結合します         |
| replace()    | 文字列中のすべてのサブ文字列を新しい文字列に置換します      |
| decode()     | 配列要素ごとに str.decode を呼び出します       |
| encode()     | 配列要素ごとに str.encode を呼び出します       |

- numpy.char.add()/multiply()/center()

numpy.char.add() 関数は、二つの配列の要素を順に文字列結合します。


```python
import numpy as np

print ('文字列を結合します：')
print (np.char.add(['hello'],[' xyz']))
print ('\\n')

print ('結合の例：')
print (np.char.add(['hello', 'hi'],[' abc', ' xyz']))

print (np.char.multiply('Runoob ',3))

# np.char.center(str , width,fillchar) ：
# str: 文字列，width: 幅，fillchar: 埋める文字
print (np.char.center('Runoob', 20,fillchar = '*'))
```

- numpy.char.capitalize()/title()/lower()/upper()

```python
import numpy as np

print (np.char.capitalize('runoob'))

print (np.char.capitalize('runoob'))

#操作数组
print (np.char.lower(['RUNOOB','GOOGLE']))

# 操作字符串
print (np.char.lower('RUNOOB'))
```

- numpy.char.split()/splitlines()/strip()

numpy.char.split() 通过指定分隔符对字符串进行分割，并返回数组。默认情况下，分隔符为空格。


```python
import numpy as np

# 分隔符默认为空格
print (np.char.split ('i like runoob?'))
# 分隔符为 .
print (np.char.split ('www.runoob.com', sep = '.'))

# 换行符 \\n
# \\n，\\r，\\r\\n 都可用作换行符。
print (np.char.splitlines('i\\nlike runoob?'))
print (np.char.splitlines('i\\rlike runoob?'))

# 移除字符串头尾的 a 字符
print (np.char.strip('ashok arunooba','a'))

# 移除数组元素头尾的 a 字符
print (np.char.strip(['arunooba','admin','java'],'a'))
```

- numpy.char.join()/replace()/encode()/decode()

numpy.char.join() 関数は、指定した区切り文字を用いて配列内の要素や文字列を結合します


```python
import numpy as np

# 操作字符串
print (np.char.join(':','runoob'))

# 指定多个分隔符操作数组元素
print (np.char.join([':','-'],['runoob','google']))

print (np.char.replace ('i like runoob', 'oo', 'cc'))

a = np.char.encode('runoob', 'cp500')
print (a)

print (np.char.decode(a,'cp500'))
```


## numpy数学函数


### 三角函数


NumPy は標準的な三角関数 sin()、cos()、tan() を提供します。


```python
import numpy as np

a = np.array([0,30,45,60,90])
print ('異なる角度の正弦値：')
# 角度をラジアンへ変換するには pi/180 を掛ける
print (np.sin(a*np.pi/180))
print ('\\n')
print ('配列中の角度の余弦値：')
print (np.cos(a*np.pi/180))
print ('\\n')
print ('配列中の角度の正接値：')
print (np.tan(a*np.pi/180))
```


arcsin、arccos、和 arctan 関数は、与えられた角度の sin、cos、tan の逆関数を返します。


这些函数的结果可以通过 numpy.degrees() 函数将弧度转换为角度。


```python
import numpy as np

a = np.array([0,30,45,60,90])
print ('含有正弦值的数组：')
sin = np.sin(a*np.pi/180)
print (sin)
print ('\\n')
print ('计算角度的反正弦，返回值以弧度为单位：')
inv = np.arcsin(sin)
print (inv)
print ('\\n')
print ('通过转化为角度制来检查结果：')
print (np.degrees(inv))
print ('\\n')
print ('arccos 和 arctan 函数行为类似：')
cos = np.cos(a*np.pi/180)
print (cos)
print ('\\n')
print ('反余弦：')
inv = np.arccos(cos)
print (inv)
print ('\\n')
print ('角度制单位：')
print (np.degrees(inv))
print ('\\n')
print ('tan 函数：')
tan = np.tan(a*np.pi/180)
print (tan)
print ('\\n')
print ('反正切：')
inv = np.arctan(tan)
print (inv)
print ('\\n')
print ('角度制单位：')
print (np.degrees(inv))
```


### 舍入函数

- numpy.around()
関数は、指定された数値の四捨五入値を返します。

    ```python
    # numpy.around(a,decimals)
    #     a: 配列
    #     decimals: 四捨五入する小数点以下の桁数。 デフォルトは0。 もし負なら、小数点の左側の位置まで四捨五入されます
    
    import numpy as np
    
    a = np.array([1.0,5.55,  123,  0.567,  25.532])
    print  ('原数组：')
    print (a)
    print ('\\n')
    print ('舍入后：')
    print (np.around(a))
    print (np.around(a, decimals =  1))
    print (np.around(a, decimals =  -1))
    ```

- numpy.floor()
指定した式以下の最大の整数を返します、すなわち切り捨て。

    ```python
    import numpy as np
    
    a = np.array([-1.7,  1.5,  -0.2,  0.6,  10])
    print ('提供的数组：')
    print (a)
    print ('\\n')
    print ('修改后的数组：')
    print (np.floor(a))
    ```

- numpy.ceil()
指定した式以上の最小の整数を返します、すなわち切り上げ。

    ```python
    import numpy as np
    
    a = np.array([-1.7,  1.5,  -0.2,  0.6,  10])
    print  ('提供的数组：')
    print (a)
    print ('\\n')
    print ('修改后的数组：')
    print (np.ceil(a))
    ```


## 算术函数


NumPy の算術関数には、単純な加算・減算・乗算・除算が含まれます: add()、subtract()、multiply()、divide()。

配列は同じ形状であるか、配列ブロードキャスト規則に従う必要があります。


```python
import numpy as np

a = np.arange(9, dtype = np.float_).reshape(3,3)
print ('第一个数组：')
print (a)
print ('\\n')
print ('第二个数组：')
b = np.array([10,10,10])
print (b)
print ('\\n')
print ('两个数组相加：')
print (np.add(a,b))
print ('\\n')
print ('两个数组相减：')
print (np.subtract(a,b))
print ('\\n')
print ('两个数组相乘：')
print (np.multiply(a,b))
print ('\\n')
print ('两个数组相除：')
print (np.divide(a,b))
```

- numpy.reciprocal()

    numpy.reciprocal() 関数は、引数の要素ごとの逆数を返します。例えば 1/4 の逆数は 4/1 です。


    ```python
    import numpy as np
    
    a = np.array([0.25,  1.33,  1,  100])
    print ('我们的数组是：')
    print (a)
    print ('\\n')
    print ('调用 reciprocal 函数：')
    print (np.reciprocal(a))
    ```

- numpy.power()

    numpy.power() 関数は、最初の入力配列の要素を底として、対応する第二の入力配列の要素の冪を計算します。


    ```python
    import numpy as np
    
    a = np.array([10,100,1000])
    print ('我们的数组是；')
    print (a)
    print ('\\n')
    print ('调用 power 函数：')
    print (np.power(a,2))
    print ('\\n')
    print ('第二个数组：')
    b = np.array([1,2,3])
    print (b)
    print ('\\n')
    print ('再次调用 power 函数：')
    print (np.power(a,b))
    ```

- numpy.mod()

    numpy.mod() は、入力配列の要素ごとの余りを計算します。 numpy.remainder() も同じ結果を生みます。


```python
import numpy as np

a = np.array([10,20,30])
b = np.array([3,5,7])
print ('第一个数组：')
print (a)
print ('\\n')
print ('第二个数组：')
print (b)
print ('\\n')
print ('调用 mod() 函数：')
print (np.mod(a,b))
print ('\\n')
print ('调用 remainder() 函数：')
print (np.remainder(a,b))
```


## 統計関数

- numpy.amin() と numpy.amax()

    numpy.amin() は、配列の要素を指定された軸に沿って最小値を計算します。


    ```python
    numpy.amin(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
    
    # パラメータの説明：
    #     a: 入力の配列。NumPy の配列または同様の配列オブジェクト。
    #     axis: オプション。どの軸に沿って最小値を計算するかを指定。指定しない場合は配列全体の最小値を返す。整数で軸のインデックスを表すことも、複数の軸を表すタプルも可能。
    #     out: オプション。結果の格納先。
    #     keepdims: オプション。True の場合、結果配列の次元を入力配列と同じに保つ。False（デフォルト）の場合、計算後の次元が1の軸は削除される。
    #     initial: オプション。配列の要素上で最小値を計算する際の初期値を指定。
    #     where: オプション。ブール配列で、条件を満たす要素のみを考慮。
    ```


    numpy.amax() は、配列の要素を指定された軸に沿って最大値を計算します。


    ```python
    numpy.amax(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
    
    # パラメータの説明：
    #     a: 入力の配列。NumPy の配列または同様の配列オブジェクト。
    #     axis: オプション。どの軸に沿って最大値を計算するかを指定。指定しない場合は配列全体の最大値を返す。整数で軸のインデックスを表すことも、複数の軸を表すタプルも可能。
    #     out: オプション。結果の格納先。
    #     keepdims: オプション。True の場合、結果配列の次元を入力配列と同じに保つ。False（デフォルト）の場合、計算後の次元が1の軸は削除される。
    #     initial: オプション。配列の要素上で最大値を計算する際の初期値を指定。
    #     where: オプション。ブール配列で、条件を満たす要素のみを考慮。
    ```


```python
import numpy as np

a = np.array([[3,7,5],[8,4,3],[2,4,9]])
print ('我们的数组是：')
print (a)
print ('\\n')
print ('调用 amin() 函数：')
print (np.amin(a,1))
print ('\\n')
print ('再次调用 amin() 函数：')
print (np.amin(a,0))
print ('\\n')
print ('调用 amax() 函数：')
print (np.amax(a))
print ('\\n')
print ('再次调用 amax() 函数：')
print (np.amax(a, axis =  0))
```

- numpy.ptp()

    numpy.ptp() 関数は、配列中の要素の最大値と最小値の差（最大値 - 最小値）を計算します。


    ```python
    numpy.ptp(a,axis=None,out=None,keepdims=<no value>,initial=<no value>,where=<no value>)
    
    # パラメータの説明：
    #     a: 入力の配列。NumPy の配列または同様の配列オブジェクト。
    #     axis: オプション。峰-峰値を計算する軸を指定。指定しない場合は配列全体の峰-峰値を返す。整数で軸のインデックスを表すことも、複数の軸を表すタプルも可能。
    #     out: オプション。結果の格納先。
    #     keepdims: オプション。True の場合、結果配列の次元を入力配列と同じに保つ。False（デフォルト）の場合、計算後の次元が1の軸は削除される。
    #     initial: オプション。配列の要素上で峰-峰値を計算する際の初期値を指定。
    # where: オプション。ブール配列で、条件を満たす要素のみを考慮。
    
    import numpy as np
    
    a = np.array([[3,7,5],[8,4,3],[2,4,9]])
    print ('我们的数组是：')
    print (a)
    print ('\\n')
    print ('调用 ptp() 函数：')
    print (np.ptp(a))
    print ('\\n')
    print ('沿轴 1 调用 ptp() 函数：')
    print (np.ptp(a, axis =  1))
    print ('\\n')
    print ('沿轴 0 调用 ptp() 函数：')
    print (np.ptp(a, axis =  0))
    ```

- numpy.percentile()

    百分位数は統計で用いられる尺度で、ある値以下の観測値の割合を表します。関数 numpy.percentile() は以下のパラメータを受け取ります。

    > まず百分位数を明確にする： 第 p 百分位数は、少なくとも p% のデータ項がこの値以下であり、かつ少なくとも (100-p)% のデータ項がこの値以上となるような値です。  
    > 例として、入学試験の成績はしばしば百分位数で報告されます。例えば、ある受験者の国語の原点が 54 点だった場合、同じ試験を受けた他の学生と比較して彼の成績がどうかは分かりにくいですが、もし原点 54 点がちょうど第 70 百分位数に対応する場合、約 70% の学生の得点が彼より低く、約 30% の学生の得点が彼より高いことが分かります。  
    > ここで p = 70。

    ```python
    numpy.percentile(a, q, axis)
    
    # パラメータの説明：
    #     a: 入力配列
    #     q: 計算する百分位数、0 ~ 100 の間
    #     axis: 百分位数を計算する軸
    
    import numpy as np
    
    a = np.array([[10, 7, 4], [3, 2, 1]])
    print ('我们的数组是：')
    print (a)
    
    print ('调用 percentile() 函数：')
    # 50% の分位数は、a の並べ替え後の中位数
    print (np.percentile(a, 50))
    
    # axis を 0 にすると縦列で求める
    print (np.percentile(a, 50, axis=0))
    
    # axis を 1 にすると横行で求める
    print (np.percentile(a, 50, axis=1))
    
    # 维度を保つ
    print (np.percentile(a, 50, axis=1, keepdims=True))
    ```

- numpy.median()

    numpy.median() 関数は、配列 a の要素の中央値（中位数）を計算します。


    ```python
    numpy.median(a, axis=None, out=None, overwrite_input=False, keepdims=<no value>)
    
    # パラメータの説明：
    #     a: 入力の配列。NumPy の配列または同様の配列オブジェクト。
    #     axis: オプション。どの軸に沿って中位数を計算するかを指定。指定しない場合は配列全体の中位数を計算。整数で軸のインデックスを表すことも、複数の軸を表すタプルも可能。
    #     out: オプション。結果の格納先。
    #     overwrite_input: オプション。True の場合、入力配列のメモリを計算に利用することを許可。場合によってパフォーマンスが向上するが、入力配列の内容を変更する可能性。
    #     keepdims: オプション。True の場合、結果配列の次元を入力配列と同じに保つ。False（デフォルト）の場合、計算後の次元が1の軸は削除される。
    
    import numpy as np
    
    a = np.array([[30,65,70],[80,95,10],[50,90,60]])
    print ('我们的数组是：')
    print (a)
    print ('\\n')
    print ('调用 median() 函数：')
    print (np.median(a))
    print ('\\n')
    print ('沿轴 0 调用 median() 函数：')
    print (np.median(a, axis =  0))
    print ('\\n')
    print ('沿轴 1 调用 median() 函数：')
    print (np.median(a, axis =  1))
    ```

- numpy.mean()

    numpy.mean() 関数は、軸が指定されていれば、配列の要素の算術平均を返します。

    算術平均値は、軸の要素の合計を要素の数で割った値です。


    ```python
    numpy.mean(a, axis=None, dtype=None, out=None, keepdims=<no value>)
    
    # パラメータの説明：
    
    # a: 入力の配列。NumPy の配列または同様の配列オブジェクト。
    # axis: オプション。どの軸に沿って平均値を計算するかを指定。指定しない場合は配列全体の平均値を計算。整数で軸のインデックスを表すことも、複数の軸を表すタプルも可能。
    # dtype: オプション。出力のデータ型を指定。指定しない場合は入力データの型に基づく。
    # out: オプション。結果の格納先。
    # keepdims: オプション。True の場合、結果配列の次元を入力配列と同じに保つ。False（デフォルト）の場合、計算後の次元が1の軸は削除される。
    ```

- numpy.average()

    numpy.average() は、別の配列で与えられた各自の重みを用いて、配列中の要素の加重平均を計算します。


    この関数は軸引数を受け付けます。 未指定の場合、配列は展開されます。


    加重平均値は、各数値に対応する重みを掛けて合計し、総和を全体の重みの合計で割った値です。


    ```python
    numpy.average(a, axis=None, weights=None, returned=False)
    
    # パラメータの説明：
    #     a: 入力の配列。NumPy の配列または同様の配列オブジェクト。
    #     axis: オプション。どの軸に沿って加重平均を計算するかを指定。指定しない場合は配列全体の加重平均を計算。整数で軸のインデックスを表すことも、複数の軸を表すタプルも可能。
    #     weights: オプション。データ点の重みを指定。重み配列を提供しない場合は等重み。
    #     returned: オプション。True の場合、加重平均と重みの和を同時に返します。
    ```

- numpy.average()

    numpy.average() は、別の配列で与えられた各自の重みを用いて、配列中の要素の加重平均を計算します。


    この関数は軸引数を受け付けます。 未指定の場合、配列は展開されます。


    加重平均値は、各数値に対応する重みを掛けて合計し、総和を全体の重みの合計で割った値です。


    ```python
    numpy.average(a, axis=None, weights=None, returned=False)
    
    # パラメータの説明：
    #     a: 入力の配列。NumPy の配列または同様の配列オブジェクト。
    #     axis: オプション。どの軸に沿って加重平均を計算するかを指定。指定しない場合は配列全体の加重平均を計算。整数で軸のインデックスを表すことも、複数の軸を表すタプルも可能。
    #     weights: オプション。データ点の重みを指定。重み配列を提供しない場合は等重み。
    #     returned: オプション。True の場合、加重平均と重みの和を同時に返します。
    
    import numpy as np
    
    a = np.array([1,2,3,4])
    print ('我们的数组是：')
    print (a)
    print ('\\n')
    print ('调用 average() 函数：')
    print (np.average(a))
    print ('\\n')
    # 不指定权重时相当于 mean 函数
    wts = np.array([4,3,2,1])
    print ('再次调用 average() 函数：')
    print (np.average(a,weights = wts))
    print ('\\n')
    # 如果 returned 参数设为 true，则返回权重的和
    print ('权重的和：')
    print (np.average([1,2,3,  4],weights =  [4,3,2,1], returned =  True))
    
    # 在多维数组中，可以指定用于计算的轴。
    a = np.arange(6).reshape(3,2)
    print ('我们的数组是：')
    print (a)
    print ('\\n')
    print ('修改后的数组：')
    wt = np.array([3,5])
    print (np.average(a, axis =  1, weights = wt))
    print ('\\n')
    print ('修改后的数组：')
    print (np.average(a, axis =  1, weights = wt, returned =  True))
    ```

- 標準偏差

    標準偏差はデータの平均値の分散の程度を表す尺度です。


    標準偏差は分散の算術平方根です。


    標準偏差の公式は如下：


    `std = sqrt(mean((x - x.mean())^2))`


    ```python
    import numpy as np
    
    print (np.std([1,2,3,4]))
    ```

- 方差

    統計における分散（標本分散）は、各サンプル値と全体サンプル値の平均値との差の平方の平均、すなわち mean((x - x.mean())** 2)。


    言い換えれば、標準偏差は分散の平方根です。


    ```python
    import numpy as np
    
    print (np.var([1,2,3,4]))
    ```


## NumPy 排序、条件筛选函数


NumPy は複数のソート方法を提供します。 これらのソート関数は、異なるソートアルゴリズムを実装しており、アルゴリズムごとの特長は実行速度、最悪ケースの性能、必要な作業スペース、アルゴリズムの安定性です。 下表は三つのソートアルゴリズムの比較を示します。


| 種類                | 速度 | 最悪ケース          | 作業スペース | 安定性 |
| ----------------- | -- | ------------- | ---- | --- |
| 'quicksort'（クイックソート） | 1  | O(n^2)        | O(1) | 否   |
| 'mergesort'（マージソート） | 2  | O(n * log(n)) | O(n) | はい   |
| 'heapsort'（ヒープソート）   | 3  | O(n*log(n))   | O(1) | 否   |

- numpy.sort()

    numpy.sort() 関数は、入力配列のソート済みコピーを返します。関数形式は以下のとおりです：


    ```python
    numpy.sort(a, axis, kind, order)
    
    # パラメータの説明：
    #     a: ソートする配列
    #     axis: その軸に沿って配列をソートします。配列が展開されると、最後の軸に沿ってソートされます。axis=0 は列方向、axis=1 は行方向にソートします
    #     kind: デフォルトは'quicksort'（クイックソート）
    #     order: 配列がフィールドを含む場合には、ソートするフィールド
    ```

- numpy.argsort()

    numpy.argsort() 関数は、配列の値を小さい順に並べたときのインデックス値を返します。


    ```python
    import numpy as np
    
    x = np.array([3,  1,  2])
    print ('我们的数组是：')
    print (x)
    print ('\\n')
    print ('对 x 调用 argsort() 函数：')
    y = np.argsort(x)
    print (y)
    print ('\\n')
    print ('以排序后的顺序重构原数组：')
    print (x[y])
    ```

- numpy.lexsort()

    numpy.lexsort() は、複数のシーケンスをソートするために使用します。スプレッドシートの各列が1つのシーケンスで、ソート時には後ろの列を優先して並べ替えると考えてください。


    ```python
    import numpy as np
    
    nm =  ('raju','anil','ravi','amar')
    dv =  ('f.y.',  's.y.',  's.y.',  'f.y.')
    ind = np.lexsort((dv,nm))
    print ('调用 lexsort() 函数：')
    print (ind)
    print ('\\n')
    print ('使用这个索引来获取排序后的数据：')
    print ([nm[i]  +  ", "  + dv[i]  for i in ind])
    ```

- msort、sort_complex、partition、argpartition

    | 函数                                        | 描述                                                       |
    | ----------------------------------------- | -------------------------------------------------------- |
    | msort(a)                                  | 配列を第一軸でソートし、ソート済みの配列のコピーを返します。np.msort(a) は np.sort(a, axis=0) と同じです。 |
    | sort_complex(a)                           | 複素数を、実部、虚部の順にソートします。                                      |
    | partition(a, kth[, axis, kind, order])    | 指定した数を基準に、配列を分割します                                            |
    | argpartition(a, kth[, axis, kind, order]) | keyword kind を使って、指定した軸に沿って配列を分割します                            |

- numpy.argmax() と numpy.argmin()

    numpy.argmax() および numpy.argmin() 関数は、それぞれ、指定した軸に沿って最大値と最小値のインデックスを返します。

- numpy.nonzero()

    numpy.nonzero() 関数は、入力配列の非ゼロ要素のインデックスを返します。

- numpy.where()

    numpy.where() 関数は、入力配列の条件を満たす要素のインデックスを返します。

- numpy.extract()

    numpy.extract() 関数は、ある条件に基づいて配列から要素を抽出し、条件を満たす要素を返します。


## NumPy バイトスワップ


ほぼすべての機械では、多バイトのオブジェクトは連続したバイト順で格納されます。バイト順は、多バイトのデータを格納するための規則です。

- ビッグエンディアン：データの高位バイトがメモリの低アドレスに格納され、低位バイトがメモリの高アドレスに格納されます。この格納モードは、データを文字列として扱うようにアドレスが小さい方から大きい方へ増え、データが高位から低位へ配置されることに似ています。私たちの読み方と一致します。
- リトルエンディアン：データの高位バイトがメモリの高アドレスに格納され、低位バイトがメモリの低アドレスに格納されます。この格納モードはアドレスの高低とデータビットの重みを効果的に結びつけ、高アドレス部分の重みが大きく、低アドレス部分の重みが小さいです。

numpy.ndarray.byteswap() は ndarray の各要素のバイト順を大小のエンディアンに変換します。


```python
import numpy as np

A = np.array([1, 256, 8755], dtype=np.int16)
print(A)
print(list(map(hex, A)))
print(A.byteswap(inplace=True))
print(list(map(hex, A)))
```


# Numpy 副本とビュー


コピーはデータの完全なコピーであり、コピーを変更しても元のデータには影響しません。物理メモリは同じ場所にはありません。


ビューはデータの別名または参照であり、同じデータへアクセス・操作しますが、元のデータはコピーされません。ビューを変更すると、元のデータに影響します。物理メモリは同じ場所にあります。


ビューは通常次の場合に発生します：

1. numpy のスライス操作が元データのビューを返す場合。
2. ndarray の view() 関数を呼び出してビューを作成する場合。

コピーは通常次の場合に発生します：

- Python のシーケンスのスライス操作、deepCopy() 関数を呼び出す場合。
- ndarray の copy() 関数を呼び出してコピーを作成する場合。

## 無コピー


簡単な代入は配列オブジェクトのコピーを作成しません。 代わりに、元の配列と同じ id() を使用して参照します。 id() は Python オブジェクトの一般的な識別子を返し、C のポインタに似ています。


さらに、配列のいかなる変更も別の配列に反映されます。 例えば、ある配列の形状を変更すると、別の配列の形状も変更されます。


```python
import numpy as np

a = np.arange(6)
print ('我们的数组是：')
print (a)
print ('调用 id() 函数：')
print (id(a))
print ('a 赋值给 b：')
b = a
print (b)
print ('b 拥有相同 id()：')
print (id(b))
print ('修改 b 的形状：')
b.shape =  3,2
print (b)
print ('a 的形状也修改了：')
print (a)
```


## 视图或浅拷贝


ndarray.view() 方会创建一个新的数组对象，该方法创建的新数组的维数变化不会改变原始数据的维数。


```python
import numpy as np

# 最开始 a 是个 3X2 的数组
a = np.arange(6).reshape(3,2)
print ('数组 a：')
print (a)
print ('创建 a 的视图：')
b = a.view()
print (b)
print ('两个数组的 id() 不同：')
print ('a 的 id()：')
print (id(a))
print ('b 的 id()：' )
print (id(b))
# 修改 b 的形状，并不会修改 a
b.shape =  2,3
print ('b 的形状：')
print (b)
print ('a 的形状：')
print (a)

# 使用切片创建视图修改数据会影响到原始数组：
arr = np.arange(12)
print ('我们的数组：')
print (arr)
print ('创建切片：')
a=arr[3:]
b=arr[3:]
a[1]=123
b[2]=234
print(arr)
print(id(a),id(b),id(arr[3:]))
```


## 副本或深拷贝


ndarray.copy() 函数创建一个副本。 对副本数据进行修改，不会影响到原始数据，它们物理内存不在同一位置。


```python
import numpy as np

a = np.array([[10,10],  [2,3],  [4,5]])
print ('数组 a：')
print (a)
print ('创建 a 的深层副本：')
b = a.copy()
print ('数组 b：')
print (b)
# b 与 a 不共享任何内容
print ('我们能够写入 b 来写入 a 吗？')
print (b is a)
print ('修改 b 的内容：')
b[0,0]  =  100
print ('修改后的数组 b：')
print (b)
print ('a 保持不变：')
print (a)
```


# Numpy矩阵库


NumPy 中包含了一个矩阵ライブラリ numpy.matlib，该モジュール中の関数は矩阵を返し、ndarray オブジェクトは返しません。


一つの矩阵は、行（row）と列（column）からなる要素が並んだ矩形の配列です。


矩阵の要素は数字、記号、または数式として表現できます。


## 転置行列


NumPy では numpy.transpose 関数で配列の次元を変更することもできますが、T 属性を使用することもできます。


例えば m 行 n 列の行列がある場合、T 属性を使うと n 行 m 列の行列に変換できます。


![matrixTranspose.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/matrixTranspose.png)


```python
import numpy as np

a = np.arange(12).reshape(3,4)

print ('原数组：')
print (a)
print ('\\n')

print ('转置数组：')
print (a.T)
```


## matlib.empty()


matlib.empty() 関数は、新しいマトリクスを返します。文法形式は：


```python
numpy.matlib.empty(shape, dtype, order)

# パラメータの説明：
#     shape: 新しいマトリクスの形状を定義する整数または整数のタプル
#     Dtype: オプション、データ型
#     order: C（行優先） または F（列優先）

import numpy.matlib
import numpy as np

print (np.matlib.empty((2,2)))
# ランダムデータで埋める
```


## numpy.matlib.zeros()


numpy.matlib.zeros() 関数は、0 で埋められたマトリクスを作成します。


```python
import numpy as np

print (np.matlib.zeros((2,2)))
```


## numpy.matlib.ones()


numpy.matlib.ones()関数は、1 で埋められたマトリクスを作成します。


```python
import numpy.matlib
import numpy as np

print (np.matlib.ones((2,2)))
```


## numpy.matlib.eye()


numpy.matlib.eye() 関数は、対角線上の要素が 1、その他が 0 の行列を返します。


```python
numpy.matlib.eye(n, M,k, dtype)

# パラメータの説明：
#     n: 返される行数
#     M: 返される列数、デフォルトは n
#     k: 対角線のインデックス
#     dtype: データ型

import numpy.matlib
import numpy as np

print (np.matlib.eye(n =  3, M =  4, k =  0, dtype =  float))
```


## numpy.matlib.identity()


numpy.matlib.identity() 関数は、指定したサイズの単位行列を返します。


単位行列は正方行列で、左上から右下の対角線（主対角線）上の要素がすべて 1、その他は 0 です。


```python
import numpy.matlib
import numpy as np

# サイズ5、型は浮動小数点
print (np.matlib.identity(5, dtype =  float))
```


## numpy.matlib.rand()


numpy.matlib.rand() 関数は、指定した大きさのマトリクスを生成し、データをランダムに埋めます。


```python
import numpy.matlib
import numpy as np

print (np.matlib.rand(3,3))

# マトリクスは常に二次元ですが、ndarray は n 次元配列です。両方は互換性があります。
import numpy.matlib
import numpy as np

i = np.matrix('1,2;3,4')
print (i)

j = np.asarray(i)
print (j)

k = np.asmatrix (j)
print (k)
```


# Numpy線形代数


NumPy は線形代数関数ライブラリ linalg を提供しており、線形代数に必要な全機能を含んでいます。以下の説明を参照してください：


| 関数          | 説明                                                | 関数                        |
| ----------- | ------------------------------------------------- | ------------------------- |
| dot         | 2つの配列の点積、要素ごとに乗算。                                  | numpy.dot(a, b, out=None) |
| vdot        | 2つのベクトルの点積。最初の引数が複数の場合、それを展開して計算。  | numpy.vdot(a, b)          |
| inner       | 一次元配列のベクトル内積。より高次元の場合、最後の軸の和の積を返します                | numpy.inner(a, b)          |
| matmul      | 2つの配列の行列積                                          | numpy.matmul(a, b)         |
| determinant | 配列の行列式                                            | numpy.linalg.det(a)           |
| solve       | 線形方程式系を解く                                          | numpy.linalg.solve(a, b)         |
| inv         | 行列の逆行列                                        | numpy.linalg.inv(a)              |

- matmul

    numpy.matmul 関数は、2つの配列の行列積を返します。2次元配列の通常の積を返しますが、いずれかの引数の次元が2を超える場合、それを最後の2つのインデックスにある行列のスタックとして扱い、適切にブロードキャストします。


    一方、いずれかの引数が1次元配列の場合、次元に 1 を付加して行列として昇格させ、乗算後に元に戻します。


    2次元配列に対しては、それは行列積です：


```python
import numpy.matlib
import numpy as np

a = [[1,0],[0,1]]
b = [[4,1],[2,2]]
print (np.matmul(a,b))

# 二次元と一次元の演算
a = [[1,0],[0,1]]
b = [1,2]
print (np.matmul(a,b))
print (np.matmul(b,a))

# 次元が二を超える配列
a = np.arange(8).reshape(2,2,2)
b = np.arange(4).reshape(2,2)
print (np.matmul(a,b))
```


# Numpy IO


NumPy はディスク上のテキストデータやバイナリデータの読み書きができます。


NumPy は ndarray オブジェクト用のシンプルなファイル形式 npy を導入しています。


npy ファイルは、再構築する ndarray に必要なデータ、形状、dtype およびその他の情報を格納します。


よく使う IO 関数は以下のとおりです：

- load() および save() 関数は配列データの読み書きの2つの主要関数で、デフォルトでは、配列は未圧縮の原始的な二進形式で .npy 拡張子のファイルに保存されます。
- savez() 関数は複数の配列をファイルに書き込みます。デフォルトでは、配列は未圧縮の原始的な二進形式で .npz 拡張子のファイルに保存されます。
- loadtxt() および savetxt() 関数は通常のテキストファイル (.txt 等) を処理します

---

- numpy.save()

    numpy.save() 関数は配列を .npy 拡張子のファイルに保存します。


    `numpy.save(file, arr, allow_pickle=True, fix_imports=True)`

- np.savez

    numpy.savez() 関数は複数の配列を .npz 拡張子のファイルに保存します。


    `numpy.savez(file, *args, **kwds)`

- savetxt()

    savetxt() 関数はシンプルなテキストファイル形式でデータを保存します。対応する取得には loadtxt() 関数を使用します。


    `np.loadtxt(FILENAME, dtype=int, delimiter=' ')np.savetxt(FILENAME, a, fmt="%d", delimiter=",")`

    delimiter パラメータは、さまざまな区切文字、特定の列の変換器関数、スキップする行数などを指定できます。


# Numpy + Matplotlib


Matplotlib は Python の描画ライブラリです。 NumPy と併用することで、MatLab のオープンソース代替として効率的です。また、PyQt や wxPython などのグラフィックツールキットと一緒に使用することもできます。


pip3 のインストール：


```shell
pip3 install matplotlib

# インストールの検証
pip3 list | grep matplotlib
```


使用例：


```python
import numpy as np
from matplotlib import pyplot as plt

x = np.arange(1,11)
y =  2  * x +  5
plt.title("Matplotlib demo")
plt.xlabel("x axis caption")
plt.ylabel("y axis caption")
plt.plot(x,y)
plt.show()
```


## 中国語の表示


Matplotlib はデフォルトでは中国語をサポートしていません。以下の簡単な方法で解決できます。

1. 思源黑体をダウンロードします
2. ダウンロードしたOTFフォントをコードファイルの下に置きます
3. `matplotlib.font_manager.FontProperties(fname="SourceHanSansSC-Bold.otf")` の fname にフォントライブラリのパスを指定します

```python
import numpy as np
from matplotlib import pyplot as plt
import matplotlib

# fname は あなたがダウンロードしたフォントライブラリのパス、SourceHanSansSC-Bold.otf のパスに注意
zhfont1 = matplotlib.font_manager.FontProperties(fname="SourceHanSansSC-Bold.otf")

x = np.arange(1,11)
y =  2  * x +  5
plt.title("菜鸟教程 - 测试", fontproperties=zhfont1)

# fontproperties は中国語表示を設定し、fontsize はフォントサイズを設定
plt.xlabel("x 轴", fontproperties=zhfont1)
plt.ylabel("y 轴", fontproperties=zhfont1)
plt.plot(x,y)
plt.show()
```