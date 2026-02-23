---
title: 'SciPy基礎使用学習'
published: 2024-01-09
updated: 2024-01-09
description: 'SciPyはNumPyを基盤としたオープンソースのPythonライブラリで、数学・科学・工学分野で広く使われ、最適化、線形代数、積分、補間などの機能を提供します。pipでインストールでき、scipy.optimizeやscipy.sparseなどのモジュールで最適化処理や疎行列処理を行えます。SciPyはグラフ構造や空間データ処理もサポートし、多様な距離計算方法を提供し、Matlabとの連携や有意差検定・統計分析も実行できます。'
image: 'https://r2.dreaife.tokyo/notion/covers/4237f3b649a54c4bb8893843403dc454/GCrU-yHbUAAfcqw.jpg'
tags: ['python']
category: 'cs-base'
draft: false
lang: 'ja'
---

# SciPy

## 紹介

SciPy はオープンソースの Python アルゴリズムライブラリおよび数学ツールキットです。

SciPy は NumPy を基盤とした科学計算ライブラリで、数学、科学、工学などの分野で、いくつかの高次抽象や物理モデルを扱う際に SciPy を利用します。

SciPy に含まれるモジュールには、最適化、線形代数、積分、補間、特殊関数、高速フーリエ変換、信号処理と画像処理、常微分方程式の解法、そして科学と工学で一般的に用いられる他の計算が含まれます。

## アプリケーション

SciPy は数学、科学、工学の分野でよく使われるソフトウェアパッケージで、最適化、線形代数、積分、補間、回帰、特殊関数、高速フーリエ変換、信号処理、画像処理、常微分方程式の解法器などを扱うことができます。

SciPy に含まれるモジュールには、最適化、線形代数、積分、補間、特殊関数、高速フーリエ変換、信号処理と画像処理、常微分方程式の解法、そして科学と工学で一般的に用いられる計算が含まれます。

NumPy と SciPy の協働は多くの問題を効率的に解決でき、天文学、生物学、気象学と気候科学、材料科学などの複数の学問分野で広く応用されています。

## インストール

```shell
python3 -m pip install -U pip
python3 -m pip install -U scipy
```

インストールの検証：

```python
import scipy

print(scipy.__version__)
```

## モジュール一覧

以下は SciPy のよく使われるモジュールと公式 API のアドレスです：

| モジュール名               | 機能        | 参考ドキュメント                                                                             |
| ----------------- | --------- | -------------------------------------------------------------------------------- |
| scipy.cluster     | ベクトル量子化      | [cluster API](https://docs.scipy.org/doc/scipy/reference/cluster.html)           |
| scipy.constants   | 数学定数      | [constants API](https://docs.scipy.org/doc/scipy/reference/constants.html)       |
| scipy.fft         | 高速フーリエ変換   | [fft API](https://docs.scipy.org/doc/scipy/reference/fft.html)                   |
| scipy.integrate   | 積分        | [integrate API](https://docs.scipy.org/doc/scipy/reference/integrate.html)       |
| scipy.interpolate | 補間        | [interpolate API](https://docs.scipy.org/doc/scipy/reference/interpolate.html)   |
| scipy\.io         | データ入出力    | [io API](https://docs.scipy.org/doc/scipy/reference/io.html)                     |
| scipy.linalg      | 線形代数      | [linalg API](https://docs.scipy.org/doc/scipy/reference/linalg.html)             |
| scipy.misc        | 画像処理      | [misc API](https://docs.scipy.org/doc/scipy/reference/misc.html)                 |
| scipy.ndimage     | N 次元画像     | [ndimage API](https://docs.scipy.org/doc/scipy/reference/ndimage.html)           |
| scipy.odr         | 正交距離回帰    | [odr API](https://docs.scipy.org/doc/scipy/reference/odr.html)                   |
| scipy.optimize    | 最適化アルゴリズム      | [optimize API](https://docs.scipy.org/doc/scipy/reference/optimize.html)         |
| scipy.signal      | 信号処理      | [signal API](https://docs.scipy.org/doc/scipy/reference/signal.html)             |
| scipy.sparse      | 疎行列      | [sparse API](https://docs.scipy.org/doc/scipy/reference/sparse.html)             |
| scipy.spatial     | 空間データ構造とアルゴリズム | [spatial API](https://docs.scipy.org/doc/scipy/reference/spatial.html)           |
| scipy.special     | 特殊数学関数    | [special API](https://docs.scipy.org/doc/scipy/reference/special.html)           |
| scipy.stats       | 統計関数      | [stats.mstats API](httpshttps://docs.scipy.org/doc/scipy/reference/stats.mstats.html) |


公式ドキュメントの追加内容は以下をご参照ください：[https://docs.scipy.org/doc/scipy/reference/](https://docs.scipy.org/doc/scipy/reference/)


# SciPy 定数モジュール

SciPy の定数モジュール constants は多くの組込み数学定数を提供します。

円周率は数学定数で、円の周長と直径の比率です。近似値は約 3.14159、一般に記号 π で表されます。

以下に円周率を出力します：

```python
from scipy import constants

print(constants.pi)
```


以下に黄金比を出力します：

```python
from scipy import constants

print(constants.golden)
```


dir() 関数を使用して constants モジュールに含まれる定数を確認できます：

```python
from scipy import constants

print(dir(constants))
```


## 単位の型

定数モジュールには以下の種類の単位が含まれています：

- SI 単位系（国際単位系）。この系の接頭語は英語で SI prefix と呼ばれ、単位の倍率や分数を表します。現在 20 個の接頭語があり、ほとんどが千の整数倍です。 (centi は 0.01 を返します)：

    ```python
    from scipy import constants
    
    print(constants.yotta)    #1e+24
    print(constants.zetta)    #1e+21
    print(constants.exa)      #1e+18
    print(constants.peta)     #1000000000000000.0
    print(constants.tera)     #1000000000000.0
    print(constants.giga)     #1000000000.0
    print(constants.mega)     #1000000.0
    print(constants.kilo)     #1000.0
    print(constants.hecto)    #100.0
    print(constants.deka)     #10.0
    print(constants.deci)     #0.1
    print(constants.centi)    #0.01
    print(constants.milli)    #0.001
    print(constants.micro)    #1e-06
    print(constants.nano)     #1e-09
    print(constants.pico)     #1e-12
    print(constants.femto)    #1e-15
    print(constants.atto)     #1e-18
    print(constants.zepto)    #1e-21
    ```

- 2進法、バイト単位
返されるバイト単位 (kibi は 1024)。

    ```python
    from scipy import constants
    
    print(constants.kibi)    #1024
    print(constants.mebi)    #1048576
    print(constants.gibi)    #1073741824
    print(constants.tebi)    #1099511627776
    print(constants.pebi)    #1125899906842624
    print(constants.exbi)    #1152921504606846976
    print(constants.zebi)    #1180591620717411303424
    print(constants.yobi)    #1208925819614629174706176
    ```

- 質量単位
キログラムの単位を返します。(gram は 0.001 を返します)。

    ```python
    from scipy import constants
    
    print(constants.gram)        #0.001
    print(constants.metric_ton)  #1000.0
    print(constants.grain)       #6.479891e-05
    print(constants.lb)          #0.45359236999999997
    print(constants.pound)       #0.45359236999999997
    print(constants.oz)          #0.028349523124999998
    print(constants.ounce)       #0.028349523124999998
    print(constants.stone)       #6.3502931799999995
    print(constants.long_ton)    #1016.0469088
    print(constants.short_ton)   #907.1847399999999
    print(constants.troy_ounce)  #0.031103476799999998
    print(constants.troy_pound)  #0.37324172159999996
    print(constants.carat)       #0.0002
    print(constants.atomic_mass) #1.66053904e-27
    print(constants.m_u)         #1.66053904e-27
    print(constants.u)           #1.66053904e-27
    ```

- 角度換算
弧度を返します（degree は 0.017453292519943295）。

    ```python
    from scipy import constants
    
    print(constants.degree)     #0.017453292519943295
    print(constants.arcmin)     #0.0002908882086657216
    print(constants.arcminute)  #0.0002908882086657216
    print(constants.arcsec)     #4.84813681109536e-06
    print(constants.arcsecond)  #4.84813681109536e-06
    ```

- 時間単位
秒を返します（hour は 3600.0）。

    ```python
    from scipy import constants
    
    print(constants.minute)      #60.0
    print(constants.hour)        #3600.0
    print(constants.day)         #86400.0
    print(constants.week)        #604800.0
    print(constants.year)        #31536000.0
    print(constants.Julian_year) #31557600.0
    ```

- 長さの単位
メートル数を返します（nautical_mile は 1852.0）。

    ```python
    from scipy import constants
    
    print(constants.inch)              #0.0254
    print(constants.foot)              #0.30479999999999996
    print(constants.yard)              #0.9143999999999999
    print(constants.mile)              #1609.3439999999998
    print(constants.mil)               #2.5399999999999997e-05
    print(constants.pt)                #0.00035277777777777776
    print(constants.point)             #0.00035277777777777776
    print(constants.survey_foot)       #0.3048006096012192
    print(constants.survey_mile)       #1609.3472186944373
    print(constants.nautical_mile)     #1852.0
    print(constants.fermi)             #1e-15
    print(constants.angstrom)          #1e-10
    print(constants.micron)            #1e-06
    print(constants.au)                #149597870691.0
    print(constants.astronomical_unit) #149597870691.0
    print(constants.light_year)        #9460730472580800.0
    print(constants.parsec)            #3.0856775813057292e+16
    ```

- 圧力の単位
パスカルの SI 単位の圧力を返します。（psi は 6894.757293168361）。

    ```python
    from scipy import constants
    
    print(constants.atm)         #101325.0
    print(constants.atmosphere)  #101325.0
    print(constants.bar)         #100000.0
    print(constants.torr)        #133.32236842105263
    print(constants.mmHg)        #133.32236842105263
    print(constants.psi)         #6894.757293168361
    ```

- 面積の単位
平方メートルを返します。平方メートルは面積の SI 単位で、1m x 1m の正方形の面積に相当します。（hectare は 10000.0）。  

    ```python
    from scipy import constants
    
    print(constants.hectare) #10000.0
    print(constants.acre)    #4046.8564223999992
    ```

- 体積の単位

    体積を立方メートルで返します。体積は 1 立方メートルが、長さ・幅・高さがすべて 1 メートルの立方体の体積に相当します。1 公秤や 1 度水の体積とも等しいです。（liter は 0.001 を返します）。

    ```python
    from scipy import constants
    
    print(constants.liter)            #0.001
    print(constants.litre)            #0.001
    print(constants.gallon)           #0.0037854117839999997
    print(constants.gallon_US)        #0.0037854117839999997
    print(constants.gallon_imp)       #0.00454609
    print(constants.fluid_ounce)      #2.9573529562499998e-05
    print(constants.fluid_ounce_US)   #2.9573529562499998e-05
    print(constants.fluid_ounce_imp)  #2.84130625e-05
    print(constants.barrel)           #0.15898729492799998
    print(constants.bbl)              #0.15898729492799998
    ```

- 速度の単位
毎秒あたりのメートルを返します。（speed_of_sound は 340.5）。

    ```python
    from scipy import constants
    
    print(constants.kmh)            #0.2777777777777778
    print(constants.mph)            #0.44703999999999994
    print(constants.mach)           #340.5
    print(constants.speed_of_sound) #340.5
    print(constants.knot)           #0.5144444444444445
    ```

- 温度の単位
何 Kelvin かを返します。（zero_Celsius は 273.15）。

    ```python
    from scipy import constants
    
    print(constants.zero_Celsius)      #273.15
    print(constants.degree_Fahrenheit) #0.5555555555555556
    ```

- エネルギーの単位
焦耳（J）を返します。焦耳は国際単位系におけるエネルギー、仕事、熱量の導出単位です。（calorie は 4.184 を返します）。

    ```python
    from scipy import constants
    
    print(constants.calorie)      #4.184
    ```

- 力の単位
ワット（W）は国際単位系の力の単位です。1 ワットは 1 ジュール/秒（1 J/s）で、毎秒変換・使用・散逸するエネルギーの速さを表します。（horsepower は 745.6998715822701 を返します）。

    ```python
    from scipy import constants
    
    print(constants.hp)         #745.6998715822701
    print(constants.horsepower) #745.6998715822701
    ```

- 力学の単位
ニュートン（N）は力の公制単位で、質量の単位である kg を基準とした力です。エイサック・ニュートンにちなんで名付けられています。。(kilogram_force は 9.80665)。

    ```python
    from scipy import constants
    
    print(constants.dyn)             #1e-05
    print(constants.dyne)            #1e-05
    print(constants.lbf)             #4.4482216152605
    print(constants.pound_force)     #4.4482216152605
    print(constants.kgf)             #9.80665
    print(constants.kilogram_force)  #9.80665
    ```


# SciPy 最適化

SciPy の optimize モジュールは一般的な最適化アルゴリズム関数を提供します。これらの関数を直接呼び出して、最適化問題を解決します。例えば、関数の最小値や方程式の根を見つけるといったことが可能です。

## 方程式の根を求める

NumPy は多項式や線形方程式の根を見つけることはできますが、非線形方程式の根を見つけることはできません。例えば:

x + cos(x)

このため SciPy の optimze.root 関数を使用します。この関数は2つのパラメータを必要とします。

- fun - 方程式の関数を表します。
- x0 - 根の初期推定値。

この関数は解についての情報を含むオブジェクトを返します。

```python
from scipy.optimize import root
from math import cos

def eqn(x):
  return x + cos(x)

myroot = root(eqn, 0)

print(myroot.x)
# 追加情報を確認
#print(myroot)
```


## 関数の最小化

関数は曲線を表し、曲線には極大点と極小点があります。

- 極大点は最大値。
- 極小点は最小値。

曲線全体の最高点をグローバル最大値、残りをローカル最大値と呼びます。
曲線の最低点をグローバル最小値、残りをローカル最小値と呼びます。

関数を最小化するには scipy.optimize.minimize() を使用します。

minimize() は次のパラメータを受け取ります：

- fun - 最適化する関数
- x0 - 初期推定値
- method - 使用する手法名。値は：'CG'、'BFGS'、'Newton-CG'、'L-BFGS-B'、'TNC'、'COBYLA'、'SLSQP'。
- callback - 各最適化ステップ後に呼び出される関数。
- options - その他のパラメータを定義する辞書：

    ```yaml
    {
         "disp": boolean - 出力の詳細を表示
         "gtol": number - 誤差の許容範囲
    }
    ```


$x^2 + x + 2$ を BFGS で最小化する関数：

```python
from scipy.optimize import minimize

def eqn(x):
  return x**2 + x + 2

mymin = minimize(eqn, 0, method='BFGS')

print(mymin)
```


# SciPy 疎行列

疎行列（英語：sparse matrix）とは、数値解析においてほとんどの要素が 0 である行列のことを指します。逆に、ほとんどの要素が非ゼロである場合、その行列は密な(Dense) です。

科学と工学の分野で線形モデルを解く際には、大規模な疎行列が頻繁に現れます。

![image.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image.png)

上記の疎行列は 9 個の非零要素を含み、他に 26 個のゼロ要素を含みます。その疎密度は 74%、密度は 26% です。

SciPy の scipy.sparse モジュールは疎行列の処理を提供します。

主に以下の2種類の疎行列を使用します：

- CSC - 圧縮疎列（Compressed Sparse Column）、列方向に圧縮。
- CSR - 圧縮疎行（Compressed Sparse Row）、行方向に圧縮。

本章では主に CSR 行列を使用します。

## CSR 行列

scipy.sparse.csr_matrix() 関数に配列を渡すことで CSR 行列を作成できます。

```python
# CSR 行列を作成します。
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([0, 0, 0, 0, 0, 1, 1, 0, 2])
print(csr_matrix(arr))
```

- data
データとして格納されているデータを確認するには data 属性を使います（0 要素は含まれません）：

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

print(csr_matrix(arr).data)
```

- count_nonzero()
非 0 要素の総数を計算するには count_nonzero() を使用します：

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

print(csr_matrix(arr).count_nonzero())
```

- eliminate_zeros()
行列から 0 要素を削除するには eliminate_zeros() を使用します：

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

mat = csr_matrix(arr)
mat.eliminate_zeros()

print(mat)
```

- sum_duplicates()
重複アイテムを削除するには sum_duplicates() を使用します:

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

mat = csr_matrix(arr)
mat.sum_duplicates()

print(mat)
```

- tocsc()
CSR を CSC に変換するには tocsc() を使用します：

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

newarr = csr_matrix(arr).tocsc()

print(newarr)
```


# SciPy グラフ構造

グラフ構造はアルゴリズムの中で最も強力なフレームワークのひとつです。

グラフは、ノードとエッジの集合であり、ノードは対象を表す頂点、エッジは対象間の接続を表します。

SciPy は scipy.sparse.csgraph モジュールを提供しており、グラフ構造を扱います。

## 隣接行列

隣接行列（Adjacency Matrix）は、頂点間の隣接関係を表す行列です。

隣接行列の論理構造は 2 つの集合 V と E から成り、V は頂点、E は辺で、辺には時として重みがあり、頂点間の結びつきの強さを表します。

![image-1.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-1.png)

グラフ中のすべての頂点データを 1 次元配列に格納し、頂点間の関係（辺または弧）を 2 次元配列に格納します。この 2 次元配列を隣接行列と呼びます。

隣接行列は、有向グラフの隣接行列と無向グラフの隣接行列に分けられます。

無向グラフは双方向の関係で、辺には向きがありません。

有向グラフの辺には向きがあり、単方向の関係です。

### 連結成分

すべての連結成分を確認するには connected_components() メソッドを使用します。

```python
import numpy as np
from scipy.sparse.csgraph import connected_components
from scipy.sparse import csr_matrix

arr = np.array([
  [0, 1, 2],
  [1, 0, 0],
  [2, 0, 0]
])

newarr = csr_matrix(arr)

print(connected_components(newarr))
```


### Dijkstra — 最短経路アルゴリズム

Dijkstra（ディジェストラ）最短経路アルゴリズムは、あるノードから他のすべてのノードへの最短経路を計算します。

SciPy は dijkstra() メソッドを使って、ある要素から他の要素への最短経路を計算します。dijkstra() メソッドは以下のパラメータを設定できます：

- return_predecessors: ブール値。True に設定するとすべての経路をたどります。すべての経路をたどりたくない場合は False に設定します。
- indices: 要素のインデックス。該当要素のすべての経路を返します。
- limit: 経路の最大重み。

```python
# 要素 1 から 2 への最短経路を探す：
import numpy as np
from scipy.sparse.csgraph import dijkstra
from scipy.sparse import csr_matrix

arr = np.array([
  [0, 1, 2],
  [1, 0, 0],
  [2, 0, 0]
])

newarr = csr_matrix(arr)

print(dijkstra(newarr, return_predecessors=True, indices=0))
```


### Floyd-Warshall — フロイド・ワーシャル法

フロイド・ワーシャル法は、任意の 2 点間の最短経路を解くアルゴリズムです。

SciPy は floyd_warshall() メソッドを使って、全ての要素対の最短経路を求めます。

```python
# 全要素対間の最短経路径を求める：
import numpy as np
from scipy.sparse.csgraph import floyd_warshall
from scipy.sparse import csr_matrix

arr = np.array([
  [0, 1, 2],
  [1, 0, 0],
  [2, 0, 0]
])

newarr = csr_matrix(arr)

print(floyd_warshall(newarr, return_predecessors=True))
```


### Bellman-Ford — ベルマン-フォード法

ベルマン-フォード法は、任意の 2 点間の最短経路を解くアルゴリズムです。

SciPy は bellman_ford() メソッドを使って、全要素対の最短経路を探します。負の辺を含む有向グラフをはじめ、任意のグラフで通常使用できます。

```python
# 負の重みの辺を持つグラフで、要素 1 から要素 2 への最短経路を探索：
import numpy as np
from scipy.sparse.csgraph import bellman_ford
from scipy.sparse import csr_matrix

arr = np.array([
  [0, -1, 2],
  [1, 0, 0],
  [2, 0, 0]
])

newarr = csr_matrix(arr)

print(bellman_ford(newarr, return_predecessors=True, indices=0))
```


### 深さ優先順序

depth_first_order() メソッドは、あるノードからの深さ優先探索の順序を返します。

以下のパラメータを受け取ることができます：

- 图
- 图を開始する要素

```python
# 隣接行列を与え、深さ優先探索の順序を返す：
import numpy as np
from scipy.sparse.csgraph import depth_first_order
from scipy.sparse import csr_matrix

arr = np.array([
  [0, 1, 0, 1],
  [1, 1, 1, 1],
  [2, 1, 1, 0],
  [0, 1, 0, 1]
])

newarr = csr_matrix(arr)

print(depth_first_order(newarr, 1))
```


### 幅優先順序

breadth_first_order() メソッドは、あるノードからの幅優先探索の順序を返します。

以下のパラメータを受け取ることができます：

- 图
- 图を開始する要素

```python
# 隣接行列を与え、幅優先探索の順序を返す：
import numpy as np
from scipy.sparse.csgraph import breadth_first_order
from scipy.sparse import csr_matrix

arr = np.array([
  [0, 1, 0, 1],
  [1, 1, 1, 1],
  [2, 1, 1, 0],
  [0, 1, 0, 1]
])

newarr = csr_matrix(arr)

print(breadth_first_order(newarr, 1))
```


# SciPy 空間データ

空間データは幾何データとも呼ばれ、物体の位置、形、サイズ分布などの情報を表すために用いられます。たとえば座標上的な点。

SciPy は scipy.spatial モジュールを通じて空間データを処理します。例えば、ある点が境界内にあるかを判定したり、与えられた点の周囲の最近傍点を計算したり、指定距離内のすべての点を求めたりします。

## 三角測量

三角測量は、三角法と幾何学の分野で、ターゲット点と固定基準線の既知端点の角度を測定することで、ターゲットまでの距離を測る方法です。

多角形の三角測量は、多角形をいくつかの三角形に分割し、これらの三角形を用いて多角形の面積を計算します。

トポロジーの既知の事実として、どんな曲面にも三角形分割が存在します。

曲面上に三角形分割があると仮定すると、すべての三角形の頂点の総数を p（公共頂点は1つと見なす）、辺の数を a、三角形の数を n とすると e = p - a + n が曲面のトポロジ的不変量です。換言すれば、どんな分割をしても e は同じ値になります。e はオイラー示性数と呼ばれます。

一連の点に対する三角形分割点法は Delaunay() 三角剖分です。

```python
# 与えられた点から三角形を作成する：
import numpy as np
from scipy.spatial import Delaunay
import matplotlib.pyplot as plt

points = np.array([
  [2, 4],
  [3, 4],
  [3, 0],
  [2, 2],
  [4, 1]
])

simplices = Delaunay(points).simplices    # 三角形の頂点のインデックス

plt.triplot(points[:, 0], points[:, 1], simplices)
plt.scatter(points[:, 0], points[:, 1], color='r')

plt.show()
```


## 凸包

凸包（Convex Hull）は、計算幾何の概念のひとつです。

実数ベクトル空間 V において、集合 X に対して X を含むすべての凸集合の交集を取ったものを X の凸包と呼びます。X の凸包は、X 内のすべての点の凸結合によって構成できます。

ConvexHull() メソッドを使って凸包を作成できます。

```python
# 与えられた点から凸包を作成：
import numpy as np
from scipy.spatial import ConvexHull
import matplotlib.pyplot as plt

points = np.array([
  [2, 4],
  [3, 4],
  [3, 0],
  [2, 2],
  [4, 1],
  [1, 2],
  [5, 0],
  [3, 1],
  [1, 2],
  [0, 2]
])

hull = ConvexHull(points)
hull_points = hull.simplices

plt.scatter(points[:,0], points[:,1])
for simplex in hull_points:
  plt.plot(points[simplex,0], points[simplex,1], 'k-')

plt.show()
```


## KD ツリー

kd-tree（k 次元空間木の略）は、k 次元空間内の実点を格納して高速に検索するための木構造です。多次元空間におけるキー値検索（範囲検索および最近傍探索）に主に用いられます。

KDTree() メソッドは KDTree オブジェクトを返します。

query() メソッドは最近傍距離と最近傍の位置を返します。

```python
# (1,1) に対する最近傍距離を求める
from scipy.spatial import KDTree

points = [(1, -1), (2, 3), (-2, 3), (2, -3)]

kdtree = KDTree(points)

res = kdtree.query((1, 1))

print(res)
```


## 距離行列

距離行列とは、各要素が点間の距離である行列（2次元配列）です。したがって、N 個の欧幾里得空間上の点が与えられた場合、その距離行列は要素（点）間の距離を値とする N×N の対称行列となり、隣接行列の概念と似ています。ただし後者は要素間にエッジがあるかどうかのみを示し、距離情報は含みません。そのため、距離行列は隣接行列の重み付き形式と考えることができます。

例えば、以下の 2 次元点 a から f を分析します。ここでは点間のユークリッド距離を距離の尺度として用います。


## ユークリッド距離

ユークリッド距離またはユークリッド距離量は、ユークリッド空間における点と点の「通常の」直線距離を指します。これによりユークリッド空間は距離空間となり、対応するノルムはユークリッドノルムと呼ばれます。古い文献ではピタゴラス距離と呼ばれることもあります。

ユークリッド距離（Euclidean metric）（別名 Euclidean distance）は、m 次元空間における2点間の実距離、あるいはベクトルの自然長（原点からその点への距離）を指す、よく使われる距離の定義です。2 次元および 3 次元空間では、ユークリッド距離は2点間の実際の距離です。

```python
from scipy.spatial.distance import euclidean

p1 = (1, 0)
p2 = (10, 2)

res = euclidean(p1, p2)

print(res)
```


## マンハッタン距離

マンハッタン幾何学、または Manhattan 距離は、19世紀のヘルマン・闵可夫斯基により導入された、幾何計量空間における幾何学用語です。標準座標系上の2点の絶対的な軸間距離の総和を表します。

マンハッタン距離は上下左右の4方向のみで移動可能で、2点間の最短距離はこの距離です。

マンハッタン距離とユークリッド距離の比較：赤、青、黄の線はすべてのマンハッタン距離が同じ長さ（12）になることを示し、緑の線はユークリッド距離が 6×√2 ≈ 8.48 であることを示します。

![image-2.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-2.png)


## コサイン距離

コサイン距離は、コサイン類似度とも呼ばれ、2 つのベクトルのなす角のコサイン値を測定して、それらの類似性を表します。

0 度のコサイン値は 1 で、他の角度のコサイン値は 1 以下で、最小値は -1 です。

```python
# A と B の点のコサイン距離を計算する：
from scipy.spatial.distance import cosine

p1 = (1, 0)
p2 = (10, 2)

res = cosine(p1, p2)

print(res)
```


## ハミング距離

情報理論において、等長の2つの文字列の間のハミング距離（Hamming distance）は、対応する位置で異なる文字の数です。言い換えれば、ある文字列を別の文字列へ変換するのに置換する文字の数です。

ハミング重量は、同じ長さのゼロ文字列に対するその文字列のハミング距離で、つまり文字列中の非ゼロ要素の数です。2進文字列の場合、1 の数です。したがって 11101 のハミング重量は 4 です。

- 1011101 と 1001001 のハミング距離は 2。
- 2143896 と 2233796 のハミング距離は 3。
- "toned" と "roses" のハミング距離は 3。

```python
# 2 点間のハミング距離を計算する：
from scipy.spatial.distance import hamming

p1 = (True, False, True)
p2 = (False, True, True)

res = hamming(p1, p2)

print(res)
```


# SciPy Matlab 配列

NumPy は Python が読み取れる形式のデータ保存を提供します。

SciPy は MATLAB との相互作用を提供します。

SciPy の [scipy.io](http://scipy.io/) モジュールは MATLAB の配列を扱う多くの関数を提供します。

## Matlab 形式でデータをエクスポート

savemat() メソッドは Matlab 形式のデータをエクスポートできます。
このメソッドの引数は:

- filename - 保存するデータのファイル名。
- mdict - データを含む辞書。
- do_compression - 真偽値。結果データを圧縮するかどうかを指定します。デフォルトは False。

```python
# 配列を変数 "vec" として mat ファイルへエクスポートする：
from scipy import io
import numpy as np

arr = np.arange(10)

io.savemat('arr.mat', {"vec": arr})
```

> 注意：上記のコードはあなたのコンピュータ上に "arr.mat" というファイルを保存します。

## Matlab 形式データのインポート

loadmat() メソッドは Matlab 形式データを読み込みます。

このメソッドの引数：

- filename - 保存データのファイル名。

結果は構造化配列で、キーは変数名、対応する値は変数の値です。

```python
# mat ファイルから配列をインポート：
from scipy import io
import numpy as np

arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9,])

# エクスポート
io.savemat('arr.mat', {"vec": arr})

# インポート
mydata = io.loadmat('arr.mat')

print(mydata)

# 変数名 "vec" だけ matlab データの配列を表示：
print(mydata['vec'])
```

結果から、最初は1次元の配列でしたが、取り出す際に次元が1つ追加され、2次元配列になっています。

この問題を解決するには squeeze_me=True の追加パラメータを渡します：

```python
from scipy import io
import numpy as np

arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9,])

# エクスポート
io.savemat('arr.mat', {"vec": arr})

# インポート
mydata = io.loadmat('arr.mat', squeeze_me=True)

print(mydata['vec'])
```


# SciPy 插值

## 插值とは？

数学の数値解析分野において、插值（インターポレーション）は、既知の離散データ点を用いて、範囲内の新しいデータ点を推定するプロセスまたは手法です。

簡単に言えば、与えられた点の間で点を生成する方法です。

例えば、2 点 1 と 2 に対して、補間をして点 1.33 および 1.66 を見つけることができます。

插值には多くの用途があり、機械学習ではデータ欠損を扱うことがよくあり、補間はこれらの値を埋めるのに使われます。

この埋め込みの方法は「補間」と呼ばれます。

補間の他にも、データ集合の離散点を平滑化する場面で頻繁に使われます。

## SciPy での補間の実装

SciPy は補間を扱う scipy.interpolate モジュールを提供します。

## 一次元補間

一次元データの補間演算は interp1d() メソッドで完了します。

このメソッドは x 点と y 点の 2 つのパラメータを受け取り、戻り値は呼び出し可能な関数です。この関数を新しい x で呼び出すと対応する y が返されます。y = f(x)。

```python
# 与えられた xs と ys に対して、2.1、2.2... から 2.9 までの補間を行う：
from scipy.interpolate import interp1d
import numpy as np

xs = np.arange(10)
ys = 2*xs + 1

interp_func = interp1d(xs, ys)

newarr = interp_func(np.arange(2.1, 3, 0.1))

print(newarr)
```


## 単変量補間

一次補間では点は単一の曲線に対して適合しますが、スプライン補間では、点は多項式分割法で定義された関数に対して適合します。

単変量補間には UnivariateSpline() 関数を使用します。この関数は xs と ys を受け取り、新しい xs を呼び出すことができる関数を生成します。

分割関数とは、自変数 x の異なる値の範囲に対して、異なる解析式を持つ関数のことです。

```python
# 非線形点の 2.1、2.2...2.9 の単変量スプライン補間を見つける：
from scipy.interpolate import UnivariateSpline
import numpy as np

xs = np.arange(10)
ys = xs**2 + np.sin(xs) + 1

interp_func = UnivariateSpline(xs, ys)

newarr = interp_func(np.arange(2.1, 3, 0.1))

print(newarr)
```


## 放射状基底関数補間

放射状基底関数とは、固定の参照点に対して定義される関数です。

曲面補間では一般に放射状基底関数補間を使用します。

```python
# Rbf() 関数は xs と ys を引数として受け取り、呼び出し可能な関数を生成します
from scipy.interpolate import Rbf
import numpy as np

xs = np.arange(10)
ys = xs**2 + np.sin(xs) + 1

interp_func = Rbf(xs, ys)

newarr = interp_func(np.arange(2.1, 3, 0.1))

print(newarr)
```


# SciPy 有意性検定

有意性検定（significance test）は、事前に母集団（確率変数）のパラメータまたは母集団分布の形について仮説を立て、標本情報を用いてその仮説（対立仮説）が妥当かどうかを判断する、つまり母集団の実情と元の仮説との間に顕著な差があるかを判断する検定です。言い換えれば、有意性検定は、標本と母集団に対する仮説との間の差が偶然の変動によるものなのか、仮説と母集団の実情の不一致によるものなのかを判断する検定です。 有意性検定は、母集団に対する仮説を検定するもので、その原理は「極めて低い確率の事象は現実には起こり得ない」という原理に基づき、仮説を受け入れたり棄却したりします。

有意性検定は、処理群と対照群または2 つの異なる処理間の効果に差があるかどうか、そしてこの差が統計的に有意かどうかを判断するために用いられます。

SciPy は scipy.stats モジュールを提供しており、SciPy の有意性検定を実行する機能を提供します。

## 統計仮説

統計仮説は、1つまたは複数のランダム変数の未知の分布についての仮説です。確率分布の形は既知で、分布の1つまたは数個の未知パラメータのみを含む統計仮説を「パラメータ仮説」と呼び、検定するべき仮説を仮説検定といいます。

## 帰無仮説

帰無仮説（null hypothesis）は、統計学用語で、検定を行う際に事前に設定する仮説のことです。帰無仮説が成立する場合、統計量は既知の分布に従うはずです。

統計量の計算値が棄却域に入ると、小さな確率のイベントが発生したことになるため、帰无仮説を棄却します。

検定すべき仮説を H0、対立仮説を H1 と表記することが多いです。

- 帰無仮説が真である場合、第一種の誤りを起こす確率を α とします。
- 帰無仮説が偽である場合、第二種の誤りを起こす確率を β とします。
- α + β が必ずしも 1 にはなりません。

通常は第一種の誤りの最大確率 α のみを設定し、β は考慮しません。こうした検定を有意検定といい、α は有意水準と呼ばれます。

最もよく使われる α の値は 0.01、0.05、0.10 などです。研究の問題によっては、偽陽性の損失が大きい場合は α を小さくします。逆に、偽陰性の損失が大きい場合は α を大きくします。

## 代替仮説

代替仮説（alternative hypothesis）は、統計学の基本概念のひとつで、元の帰無仮説を却下させるべての命題を含む仮説です。代替仮説は別名、対立仮説、候補仮説とも呼ばれます。

代替仮説は帰無仮説を置き換えることができます。

例えば学生の評価については、次のようにします：

- 「学生は平均水準より劣る」 - 帰無仮説
- 「学生は平均水準より優れる」 - 対立仮説

## 片側検定

片側検定（one-sided test）は、検定統計量の密度曲線と軸の間の領域の片側尾部の面積を用いて臨界域を構築する検定方法です。

仮説検定で、検定値の一方のみを検討する場合、それを「片側検定」と呼びます。

例：

帰無仮説：
「平均値は k に等しい」

対処仮説：

- 「平均値は小さい」
- 「平均値は大きい」

## 両側検定

両側検定（two-sided test）は、検定統計量の密度曲線と x 軸で囲まれる領域の左右両端の尾部の面積を用いて臨界域を構築する検定方法です。

検定値が両側にわたる場合。

例：

帰無仮説：
「平均値は k に等しい」

対立仮説：

- 「平均値は k と等しくない」

この場合、平均値が小さい場合も大きい場合も両方をチェックします。

## アルファ値

アルファ値は有意水準です。

有意水準は、母集団のパラメータがある区間に落ちる確率を表すもので、α で表します。

データは極端さに近いほど帰無仮説を棄却しやすくなります。

通常は 0.01、0.05、0.1 が用いられます。

## p値

p値は、データが実際にどれだけ極端かを表します。

p値とアルファ値を比較して統計的有意性を判断します。

もし p 値が ≤ α であれば、帰無仮説を棄却し、データは統計的に有意であると言います。そうでなければ帰無仮説を受け入れます。

## t 検定（T-Test）

t 検定は、2 つの変数の平均値の間に顕著な差が存在するかどうかを判断し、それらが同じ分布に属するかどうかを判定します。これは両側検定です。

ttest_ind() は、同じ大きさの 2 つのサンプルを取得し、t 統計量と p 値のタプルを生成します。

```python
# v1 と v2 が同じ分布から来ているかを調べる：
import numpy as np
from scipy.stats import ttest_ind

v1 = np.random.normal(size=100)
v2 = np.random.normal(size=100)

res = ttest_ind(v1, v2)

print(res)

# p 値のみを返す場合
res = ttest_ind(v1, v2).pvalue
print(res)
```


## KS 検定

KS 検定は、データが特定の分布に適合するかを検定します。

この関数は2つの引数を受け取ります；検定値と CDF。

CDF は累積分布関数（Cumulative Distribution Function）で、別名分布関数です。

CDF は文字列でも、確率を返す呼び出し可能な関数でも構いません。

デフォルトでは両側検定です。対となる引数として、片側検定、小さい方、または大きい方のいずれかを表す文字列を渡すことができます。

```python
# 指定された値が正規分布に適合するかを調べる：
import numpy as np
from scipy.stats import kstest

v = np.random.normal(size=100)

res = kstest(v, 'norm')

print(res)
```


## データ統計の説明

describe() 関数を使うと、配列の統計情報を確認できます。以下を含みます：

- nobs -- 観測回数
- minmax -- 最小値と最大値
- mean -- 算術平均
- variance -- 分散
- skewness -- 歪度
- kurtosis -- 尖度

```python
# 配列の統計記述を表示：
import numpy as np
from scipy.stats import describe

v = np.random.normal(size=100)
res = describe(v)

print(res)
```


## 正規性検定（歪度と尖度）

観測データを用いて母集団が正規分布に従うかを判断する検定を正規性検定といい、統計的判断において重要な特殊な適合度仮説検定です。

正規性検定は歪度と尖度に基づきます。

normaltest() 関数は帰無仮説の p 値を返します：

「x は正規分布に従う」

### 歪度

データの対称性の指標です。

正規分布では 0 です。

負の場合、データは左に歪んでいます。

正の場合、データは右に歪んでいます。

### 尖度

データが重尾か軽尾の正規分布かを測る指標です。

正の尖度は重尾を意味します。

負の尖度は軽尾を意味します。

```python
# 配列の歪度と尖度を求める：
import numpy as np
from scipy.stats import skew, kurtosis
from scipy.stats import normaltest

v = np.random.normal(size=100)

print(skew(v))
print(kurtosis(v))

# データが正規分布に従うかを調べる：
print(normaltest(v))
```