---
title: 'numpy学习笔记1'
published: 2024-01-05
updated: 2024-01-05
description: 'NumPy是Python的一个扩展库，支持多维数组和矩阵运算，提供丰富的数学函数。其主要特点包括强大的ndarray对象、广播功能和与C/C++/Fortran的整合。NumPy常与SciPy和Matplotlib一起使用，形成强大的科学计算环境。安装可通过pip完成，支持多种数据类型，具有丰富的数组创建和操作功能，包括切片、索引和广播机制。'
permalink: 'numpy-learning-notes.en'
image: 'https://r2.dreaife.tokyo/notion/covers/8b3927e12bab461aae41199568484354/GCqi6hIbsAEIXlZ.jpg'
tags: ['python', 'numpy']
category: 'cs-base'
draft: false
lang: 'en'
---

# numpy

## 介绍

[NumPy(Numerical Python)](http://www.numpy.org/) is an extension library for the Python language that supports extensive multi-dimensional array and matrix operations, and also provides a large collection of mathematical functions for array operations.

NumPy is a fast mathematical library, primarily used for array computations, and includes:

- A powerful N-dimensional array object ndarray
- Broadcasting function facilities
- Tools for integrating C/C++/Fortran code
- Functions for linear algebra, Fourier transforms, random number generation, and more

## 应用

NumPy is typically used together with SciPy (Scientific Python) and Matplotlib (the plotting library)

This combination is widely used as a replacement for MATLAB and provides a powerful scientific computing environment, helping us learn data science or machine learning through Python.

SciPy is an open-source Python algorithms library and mathematical toolkit.

SciPy includes modules for optimization, linear algebra, integration, interpolation, special functions, fast Fourier transforms, signal processing and image processing, solving ordinary differential equations, and other computations commonly used in science and engineering.

Matplotlib is the visualization interface for Python programming language and its NumPy numerical extension package.

It provides an API for embedding plots into applications using common GUI toolkits such as Tkinter, wxPython, Qt, or GTK+.

## 安装

- 安装发行版
- pip安装`pip3 install numpy scipy matplotlib`

安装验证

```python
from numpy import *
eye(4)
```

# Numpy数据

## Numpy Ndarray对象

NumPy 最重要的一个特点是其 N 维数组对象 ndarray，它是一系列同类型数据的集合，以 0 下标为开始进行集合中元素的索引。

ndarray 对象是用于存放同类型元素的多维数组。

ndarray 中的每个元素在内存中都有相同存储大小的区域。

ndarray 内部由以下内容组成：

- 一个指向数据（内存或内存映射文件中的一块数据）的指针。
- 数据类型或 dtype，描述在数组中的固定大小值的格子。
- 一个表示数组形状（shape）的元组，表示各维度大小的元组。
- 一个跨度元组（stride），其中的整数指的是为了前进到当前维度下一个元素需要"跨过"的字节数。

![20240105220154.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240105220154.png)

ndarray 对象由计算机内存的连续一维部分组成，并结合索引模式，将每个元素映射到内存块中的一个位置。内存块以行顺序(C风格)或列顺序(FORTRAN或MatLab风格，即前述的F样式)来保存元素。

### 创建Ndarray

创建一个 ndarray 只需调用 NumPy 的 array 函数即可：


```python
numpy.array(object,dtype = None,copy = True,order = None,subok = False,ndmin = 0)

# object:数组或嵌套的数列
# dtype:数组元素的数据类型，可选
# copy:对象是否需要复制，可选
# order:创建数组的样式，C为行方向，F为列方向，A为任意方向（默认）
# subok:默认返回一个与基类类型一致的数组
# ndmin:指定生成数组的最小维度
```


### 实例


```python
import numpy as np
a = np.array([1,2,3])
print (a)

a = np.array([[1,  2],  [3,  4]])
print (a)

# 最小维度
a = np.array([1, 2, 3, 4, 5], ndmin =  2)
print (a)

# dtype 参数
a = np.array([1,  2,  3], dtype = complex)
print (a)
```


## 数据类型

numpy 支持的数据类型比 Python 内置的类型要多很多，基本上可以和 C 语言的数据类型对应上，其中部分类型对应为 Python 内置的类型。

> bool,int,intc,intp,int8,int16,int32,int64,uint8,uint16,uint32,uint64,float,float16,float32,float64,complex_,complex128,complex64,complex128

数据类型对象（numpy.dtype 类的实例）用来描述与数组对应的内存区域是如何使用，它描述了数据的以下几个方面：：

- 数据的类型（整数，浮点数或者 Python 对象）
- 数据的大小（例如， 整数使用多少个字节存储）
- 数据的字节顺序（小端法或大端法）
- 在结构化类型的情况下，字段的名称、每个字段的数据类型和每个字段所取的内存块的部分
- 如果数据类型是子数组，那么它的形状和数据类型是什么。

字节顺序是通过对数据类型预先设定 < 或 > 来决定的。 < 意味着小端法(最小值存储在最小的地址，即低位组放在最前面)。> 意味着大端法(最重要的字节存储在最小的地址，即高位组放在最前面)。


dtype 对象是使用以下语法构造的：


```python
numpy.dtype(object, align, copy)

# object - 要转换为的数据类型对象
# align - 如果为 true，填充字段使其类似 C 的结构体。
# copy - 复制 dtype 对象 ，如果为 false，则是对内置数据类型对象的引用
```


使用：


```python
import numpy as np
# 使用标量类型
dt = np.dtype(np.int32)
print(dt)

# 首先创建结构化数据类型
dt = np.dtype([('age',np.int8)])
# 将数据类型应用于 ndarray 对象
a = np.array([(10,),(20,),(30,)], dtype = dt)
print(a)
```


每个内建类型都有一个唯一定义它的字符代码，如下：


| 字符   | 对应类型            |
| ---- | --------------- |
| b    | 布尔型             |
| i    | (有符号) 整型        |
| u    | 无符号整型 integer   |
| f    | 浮点型             |
| c    | 复数浮点型           |
| m    | timedelta（时间间隔） |
| M    | datetime（日期时间）  |
| O    | (Python) 对象     |
| S, a | (byte-)字符串      |
| U    | Unicode         |
| V    | 原始数据 (void)     |


# Numpy数组

## Numpy数组属性

NumPy 数组的维数称为秩（rank），秩就是轴的数量，即数组的维度，一维数组的秩为 1，二维数组的秩为 2，以此类推。


在 NumPy中，每一个线性的数组称为是一个轴（axis），也就是维度（dimensions）。比如说，二维数组相当于是两个一维数组，其中第一个一维数组中每个元素又是一个一维数组。


所以一维数组就是 NumPy 中的轴（axis），第一个轴相当于是底层数组，第二个轴是底层数组里的数组。而轴的数量——秩，就是数组的维数。


很多时候可以声明 axis。axis=0，表示沿着第 0 轴进行操作，即对每一列进行操作；axis=1，表示沿着第1轴进行操作，即对每一行进行操作。


NumPy 的数组中比较重要 ndarray 对象属性有：

- ndarray.ndim
秩，即轴的数量或维度的数量

    ```python
    import numpy as np
    
    a = np.arange(24)
    print (a.ndim)             # a 现只有一个维度
    # 现在调整其大小
    b = a.reshape(2,4,3)  # b 现在拥有三个维度
    print (b.ndim)
    ```

- ndarray.shape
数组的维度，对于矩阵，n 行 m 列

    ndarray.shape 也可以用于调整数组大小。


    NumPy 也提供了 reshape 函数来调整数组大小。


    ```python
    import numpy as np
    
    a = np.array([[1,2,3],[4,5,6]])
    print (a.shape)
    
    a.shape =  (3,2)
    print (a)
    
    a = np.array([[1,2,3],[4,5,6]])
    b = a.reshape(3,2)
    print (b)
    ```

- ndarray.size
数组元素的总个数，相当于 .shape 中 n*m 的值
- ndarray.dtype
ndarray 对象的元素类型
- ndarray.itemsize
ndarray 对象中每个元素的大小，以字节为单位

    ```python
    import numpy as np
    
    # 数组的 dtype 为 int8（一个字节）
    x = np.array([1,2,3,4,5], dtype = np.int8)
    print (x.itemsize)
    
    # 数组的 dtype 现在为 float64（八个字节）
    y = np.array([1,2,3,4,5], dtype = np.float64)
    print (y.itemsize)
    ```

- ndarray.flags
ndarray 对象的内存信息

    | 属性               | 描述                                  |
    | ---------------- | ----------------------------------- |
    | C_CONTIGUOUS (C) | 数据是在一个单一的C风格的连续段中                   |
    | F_CONTIGUOUS (F) | 数据是在一个单一的Fortran风格的连续段中             |
    | OWNDATA (O)      | 数组拥有它所使用的内存或从另一个对象中借用它              |
    | WRITEABLE (W)    | 数据区域可以被写入，将该值设置为 False，则数据为只读       |
    | ALIGNED (A)      | 数据和所有元素都适当地对齐到硬件上                   |
    | UPDATEIFCOPY (U) | 这个数组是其它数组的一个副本，当这个数组被释放时，原数组的内容将被更新 |


    ```python
    import numpy as np
    
    x = np.array([1,2,3,4,5])
    print (x.flags)
    ```

- ndarray.real
ndarray元素的实部
- ndarray.imag
ndarray 元素的虚部
- ndarray.data
包含实际数组元素的缓冲区，由于一般通过数组的索引获取元素，所以通常不需要使用这个属性

## 创建Numpy数组

ndarray 数组除了可以使用底层 ndarray 构造器来创建外，也可以通过以下几种方式来创建。

- numpy.empty

    numpy.empty 方法用来创建一个指定形状（shape）、数据类型（dtype）且未初始化的数组：


    ```python
    numpy.empty(shape, dtype = float, order = 'C')
    
    # shape  数组形状
    # dtype  数据类型，可选
    # order  有"C"和"F"两个选项,分别代表，行优先和列优先，在计算机内存中的存储元素的顺序。
    ```


    使用：


    ```python
    import numpy as np
    x = np.empty([3,2], dtype = int)
    print (x)
    ```

- numpy.zeros

    创建指定大小的数组，数组元素以 0 来填充：


    ```python
    numpy.zeros(shape, dtype = float, order = 'C')
    
    # shape  数组形状
    # dtype  数据类型，可选
    # order  'C' 用于 C 的行数组，或者 'F' 用于 FORTRAN 的列数组
    ```


    使用：


    ```python
    import numpy as np
    
    # 默认为浮点数
    x = np.zeros(5)
    print(x)
    
    # 设置类型为整数
    y = np.zeros((5,), dtype = int)
    print(y)
    
    # 自定义类型
    z = np.zeros((2,2), dtype = [('x', 'i4'), ('y', 'i4')])
    print(z)
    ```

- numpy.ones

    创建指定形状的数组，数组元素以 1 来填充：


    ```python
    numpy.ones(shape, dtype = float, order = 'C')
    
    # shape  数组形状
    # dtype  数据类型，可选
    # order    'C' 用于 C 的行数组，或者 'F' 用于 FORTRAN 的列数组
    ```


    使用：


    ```python
    import numpy as np
    
    # 默认为浮点数
    x = np.ones(5)
    print(x)
    
    # 自定义类型
    x = np.ones([2,2], dtype = int)
    print(x)
    ```

- numpy.zeros_like/ones_like

    numpy.zeros_like 用于创建一个与给定数组具有相同形状的数组，数组元素以 0 来填充。


    numpy.zeros 和 numpy.zeros_like 都是用于创建一个指定形状的数组，其中所有元素都是 0。


    它们之间的区别在于：numpy.zeros 可以直接指定要创建的数组的形状，而 numpy.zeros_like 则是创建一个与给定数组具有相同形状的数组。


    ```python
    numpy.zeros_like(a, dtype=None, order='K', subok=True, shape=None)
    
    # a  给定要创建相同形状的数组
    # dtype  创建的数组的数据类型
    # order  数组在内存中的存储顺序，可选值为 'C'（按行优先）或 'F'（按列优先），默认为 'K'（保留输入数组的存储顺序）
    # subok  是否允许返回子类，如果为 True，则返回一个子类对象，否则返回一个与 a 数组具有相同数据类型和存储顺序的数组
    # shape  创建的数组的形状，如果不指定，则默认为 a 数组的形状。
    ```


    使用：


    ```python
    import numpy as np
    
    # 创建一个 3x3 的二维数组
    arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    
    # 创建一个与 arr 形状相同的，所有元素都为 0 的数组
    zeros_arr = np.zeros_like(arr)
    print(zeros_arr)
    ```


### 从已有数组创建

- numpy.asarray

    numpy.asarray 类似 numpy.array，但 numpy.asarray 参数只有三个，比 numpy.array 少两个。


    ```python
    numpy.asarray(a, dtype = None, order = None)
    
    # 参数说明：
    # 参数  描述
    # a  任意形式的输入参数，可以是，列表, 列表的元组, 元组, 元组的元组, 元组的列表，多维数组
    # dtype  数据类型，可选
    # order  可选，有"C"和"F"两个选项,分别代表，行优先和列优先，在计算机内存中的存储元素的顺序。
    
    # 使用：
    import numpy as np
    
    # 列表
    x =  [1,2,3]
    a = np.asarray(x)
    print (a)
    
    # 元组
    x =  (1,2,3)
    a = np.asarray(x)
    print (a)
    
    # 元组列表
    x =  [(1,2,3),(4,5)]
    a = np.asarray(x)
    print (a)
    
    x =  [1,2,3]
    a = np.asarray(x, dtype =  float)
    print (a)
    ```

- numpy.frombuffer

    numpy.frombuffer 用于实现动态数组。


    numpy.frombuffer 接受 buffer 输入参数，以流的形式读入转化成 ndarray 对象。

    > 注意：buffer 是字符串的时候，Python3 默认 str 是 Unicode 类型，所以要转成 bytestring 在原 str 前加上 b。

    ```python
    numpy.frombuffer(buffer, dtype = float, count = -1, offset = 0)
    
    # 参数说明：
    # 参数  描述
    # buffer  可以是任意对象，会以流的形式读入。
    # dtype  返回数组的数据类型，可选
    # count  读取的数据数量，默认为-1，读取所有数据。
    # offset  读取的起始位置，默认为0。
    
    # 使用：
    import numpy as np
    
    s =  b'Hello World'
    a = np.frombuffer(s, dtype =  'S1')
    print (a)
    ```

- numpy.fromiter

    numpy.fromiter 方法从可迭代对象中建立 ndarray 对象，返回一维数组。


    ```python
    numpy.fromiter(iterable, dtype, count=-1)
    
    # 参数说明：
    # iterable  可迭代对象
    # dtype  返回数组的数据类型
    # count  读取的数据数量，默认为-1，读取所有数据
    
    # 使用：
    import numpy as np
    
    # 使用 range 函数创建列表对象
    list=range(5)
    it=iter(list)
    
    # 使用迭代器创建 ndarray
    x=np.fromiter(it, dtype=float)
    print(x)
    ```


### 从数值范围创建

- numpy.arange

    numpy 包中的使用 arange 函数创建数值范围并返回 ndarray 对象，函数格式如下：


    根据 start 与 stop 指定的范围以及 step 设定的步长，生成一个 ndarray。


    ```python
    numpy.arange(start, stop, step, dtype)
    
    # 参数说明：
    # start  起始值，默认为0
    # stop  终止值（不包含）
    # step  步长，默认为1
    # dtype  返回ndarray的数据类型，如果没有提供，则会使用输入数据的类型。
    
    # 使用：
    import numpy as np
    
    x = np.arange(5)
    print (x)
    
    # 设置了 dtype
    x = np.arange(5, dtype =  float)
    print (x)
    
    # 设置了起始值、终止值及步长：
    x = np.arange(10,20,2)
    print (x)
    ```

- numpy.linspace

    numpy.linspace 函数用于创建一个一维数组，数组是一个等差数列构成的，格式如下：


    ```python
    np.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None)
    
    # 参数说明：
    # start  序列的起始值
    # stop  序列的终止值，如果endpoint为true，该值包含于数列中
    # num  要生成的等步长的样本数量，默认为50
    # endpoint  该值为 true 时，数列中包含stop值，反之不包含，默认是True。
    # retstep  如果为 True 时，生成的数组中会显示间距，反之不显示。
    # dtype  ndarray 的数据类型
    
    # 使用：
    import numpy as np
    
    a = np.linspace(1,10,10)
    print(a)
    
    a = np.linspace(1,1,10)
    print(a)
    
    a = np.linspace(10, 20,  5, endpoint =  False)
    print(a)
    
    a =np.linspace(1,10,10,retstep= True)
    print(a)
    b =np.linspace(1,10,10).reshape([10,1])
    print(b)
    ```

- numpy.logspace

    numpy.logspace 函数用于创建一个于等比数列。格式如下：


    ```python
    np.logspace(start, stop, num=50, endpoint=True, base=10.0, dtype=None)
    
    # 参数说明：
    # start  序列的起始值为：base ** start
    # stop  序列的终止值为：base ** stop。如果endpoint为true，该值包含于数列中
    # num  要生成的等步长的样本数量，默认为50
    # endpoint  该值为 true 时，数列中包含stop值，反之不包含，默认是True。
    # base  对数 log 的底数。
    # dtype  ndarray 的数据类型
    
    # 使用：
    import numpy as np
    
    # 默认底数是 10
    a = np.logspace(1.0,  2.0, num =  10)
    print (a)
    
    a = np.logspace(0,9,10,base=2)
    print (a)
    ```


## 数组的切片和索引

### 切片和索引

ndarray对象的内容可以通过索引或切片来访问和修改，与 Python 中 list 的切片操作一样。


ndarray 数组可以基于 0 - n 的下标进行索引，切片对象可以通过内置的 slice 函数，并设置 start, stop 及 step 参数进行，从原数组中切割出一个新数组。

> 冒号 : 的解释：如果只放置一个参数，如 [2]，将返回与该索引相对应的单个元素。  
> 如果为 [2:]，表示从该索引开始以后的所有项都将被提取。如果使用了两个参数，如 [2:7]，那么则提取两个索引(不包括停止索引)之间的项。
>
> 切片还可以包括省略号 …，来使选择元组的长度与数组的维度相同。 如果在行位置使用省略号，它将返回包含行中元素的 ndarray。
>
>

```python
import numpy as np

a = np.arange(10)
s = slice(2,7,2)   # 从索引 2 开始到索引 7 停止，间隔为2
print (a[s])

# 也可以通过冒号分隔切片参数 start:stop:step 来进行切片操作
a = np.arange(10)
b = a[2:7:2]   # 从索引 2 开始到索引 7 停止，间隔为 2
print(b)

a = np.arange(10)  # [0 1 2 3 4 5 6 7 8 9]
b = a[5]
print(b)

print(a[2:])

print(a[2:5])

# 多维
a = np.array([[1,2,3],[3,4,5],[4,5,6]])
print(a)
# 从某个索引处开始切割
print('从数组索引 a[1:] 处开始切割')
print(a[1:])

# 省略号
a = np.array([[1,2,3],[3,4,5],[4,5,6]])
print (a[...,1])   # 第2列元素
print (a[1,...])   # 第2行元素
print (a[...,1:])  # 第2列及剩下的所有元素
```


## 高级索引

NumPy 比一般的 Python 序列提供更多的索引方式。


除了之前看到的用整数和切片的索引外，数组可以由整数数组索引、布尔索引及花式索引。


NumPy 中的高级索引指的是使用整数数组、布尔数组或者其他序列来访问数组的元素。相比于基本索引，高级索引可以访问到数组中的任意元素，并且可以用来对数组进行复杂的操作和修改。


### 整数数组索引

整数数组索引是指使用一个数组来访问另一个数组的元素。这个数组中的每个元素都是目标数组中某个维度上的索引值。


```python
import numpy as np

# 获取数组中 (0,0)，(1,1) 和 (2,0) 位置处的元素
x = np.array([[1,  2],  [3,  4],  [5,  6]])
y = x[[0,1,2],  [0,1,0]]
print (y)

# 获取了 4X3 数组中的四个角的元素。 行索引是 [0,0] 和 [3,3]，而列索引是 [0,2] 和 [0,2]
x = np.array([[  0,  1,  2],[  3,  4,  5],[  6,  7,  8],[  9,  10,  11]])
print ('我们的数组是：' )
print (x)
print ('\\n')
rows = np.array([[0,0],[3,3]])
cols = np.array([[0,2],[0,2]])
y = x[rows,cols]
print  ('这个数组的四个角元素是：')
print (y)

# 可以借助切片 : 或 … 与索引数组组合
a = np.array([[1,2,3], [4,5,6],[7,8,9]])
b = a[1:3, 1:3]
c = a[1:3,[1,2]]
d = a[...,1:]
print(b)
print(c)
print(d)
```


### 布尔索引

我们可以通过一个布尔数组来索引目标数组。


布尔索引通过布尔运算（如：比较运算符）来获取符合指定条件的元素的数组。


```python
import numpy as np

x = np.array([[  0,  1,  2],[  3,  4,  5],[  6,  7,  8],[  9,  10,  11]])
print ('我们的数组是：')
print (x)
print ('\\n')
# 现在我们会打印出大于 5 的元素
print  ('大于 5 的元素是：')
print (x[x >  5])

a = np.array([np.nan,  1,2,np.nan,3,4,5])
print (a[~np.isnan(a)])

a = np.array([1,  2+6j,  5,  3.5+5j])
print (a[np.iscomplex(a)])
```


### 花式索引

花式索引指的是利用整数数组进行索引。


花式索引根据索引数组的值作为目标数组的某个轴的下标来取值。


对于使用一维整型数组作为索引，如果目标是一维数组，那么索引的结果就是对应位置的元素，如果目标是二维数组，那么就是对应下标的行。


花式索引跟切片不一样，它总是将数据复制到新数组中。

- 一维数组

    一维数组只有一个轴 axis = 0，所以一维数组就在 axis = 0 这个轴上取值：


    ```python
    import numpy as np
    
    x = np.arange(9,0,-1)
    print(x)
    
    print(x[[0,2]])
    ```

- 二维数组

    一维数组只有一个轴 axis = 0，所以一维数组就在 axis = 0 这个轴上取值：


    ```python
    import numpy as np
    
    x=np.arange(32).reshape((8,4))
    print(x)
    # 二维数组读取指定下标对应的行
    print("-------读取下标对应的行-------")
    print (x[[4,2,1,7]])
    
    px=np.arange(32).reshape((8,4))
    print (x[[-4,-2,-1,-7]])
    ```

- 传入多个索引数组

    np.ix_ 函数就是输入两个数组，产生笛卡尔积的映射关系。


    ```python
    import numpy as np
    
    x=np.arange(32).reshape((8,4))
    print (x[np.ix_([1,5,7,2],[0,3,1,2])])
    ```


## 广播 broadcast

广播(Broadcast)是 numpy 对不同形状(shape)的数组进行数值计算的方式， 对数组的算术运算通常在相应的元素上进行。


如果两个数组 a 和 b 形状相同，即满足 a.shape == b.shape，那么 a*b 的结果就是 a 与 b 数组对应位相乘。这要求维数相同，且各维度的长度相同。


当运算中的 2 个数组的形状不同时，numpy 将自动触发广播机制。4x3 的二维数组与长为 3 的一维数组相加，等效于把数组 b 在二维上重复 4 次再运算：


```python
import numpy as np

a = np.array([[ 0, 0, 0],
           [10,10,10],
           [20,20,20],
           [30,30,30]])
b = np.array([0,1,2])
print(a + b)

bb = np.tile(b, (4, 1))  # 重复 b 的各个维度
print(a + bb)
```


![broadcast.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/broadcast.png)


广播的规则:

1. 让所有输入数组都向其中形状最长的数组看齐，形状中不足的部分都通过在前面加 1 补齐。
2. 输出数组的形状是输入数组形状的各个维度上的最大值。
3. 如果输入数组的某个维度和输出数组的对应维度的长度相同或者其长度为 1 时，这个数组能够用来计算，否则出错。
4. 当输入数组的某个维度的长度为 1 时，沿着此维度运算时都用此维度上的第一组值。

若条件不满足，抛出 "ValueError: frames are not aligned" 异常。


# 数组操作

## 迭代数组

NumPy 迭代器对象 numpy.nditer 提供了一种灵活访问一个或者多个数组元素的方式。

迭代器最基本的任务的可以完成对数组元素的访问。


```python
import numpy as np

a = np.arange(6).reshape(2,3)
print ('原始数组是：')
print (a,'\\n')
print ('迭代输出元素：')
for x in np.nditer(a):
    print (x, end=", " )
print ('\\n')

for x in np.nditer(a.T):
    print (x, end=", " )
print ('\\n')

for x in np.nditer(a.T.copy(order='C')):
    print (x, end=", " )
print ('\\n')
```


从上述例子可以看出，a 和 a.T 的遍历顺序是一样的，也就是他们在内存中的存储顺序也是一样的，但是 a.T.copy(order = 'C') 的遍历结果是不同的，那是因为它和前两种的存储方式是不一样的。nditer默认是按K顺序，即尽可能接近数组元素在内存中的显示数据。


### 控制遍历顺序

- for x in np.nditer(a, order='F'):Fortran order，即是列序优先；
- for x in np.nditer(a.T, order='C'):C order，即是行序优先；

```python
import numpy as np

a = np.arange(0,60,5)
a = a.reshape(3,4)
print ('原始数组是：')
print (a)
print ('\\n')
print ('原始数组的转置是：')
b = a.T
print (b)
print ('\\n')
print ('以 C 风格顺序排序：')
c = b.copy(order='C')
print (c)
for x in np.nditer(c):
    print (x, end=", " )
print  ('\\n')
print  ('以 F 风格顺序排序：')
c = b.copy(order='F')
print (c)
for x in np.nditer(c):
    print (x, end=", " )
print  ('\\n')
# 可以通过显式设置，来强制 nditer 对象使用某种顺序：
print ('以 C 风格顺序排序：')
for x in np.nditer(a, order =  'C'):
    print (x, end=", " )
print ('\\n')
print ('以 F 风格顺序排序：')
for x in np.nditer(a, order =  'F'):
    print (x, end=", " )
``


### 修改数组元素

nditer对象有另一个可选参数op_flags。默认情况下，nditer将视待迭代遍历的数组为只读对象（read-only），为了在遍历数组的同时，实现对数组元素值的修改，必须指定readwrite或者writeonly的模式。


```python
import numpy as np

a = np.arange(0,60,5)
a = a.reshape(3,4)
print ('原始数组是：')
print (a)
print ('\\n')
for x in np.nditer(a, op_flags=['readwrite']):
    x[...]=2*x
print ('修改后的数组是：')
print (a)
```


### 使用外部循环


nditer 类的构造器拥有 flags 参数，它可以接受下列值：


| 参数            | 描述                      |
| ------------- | ----------------------- |
| c_index       | 可以跟踪 C 顺序的索引            |
| f_index       | 可以跟踪 Fortran 顺序的索引      |
| multi_index   | 每次迭代可以跟踪一种索引类型          |
| external_loop | 给出的值是具有多个值的一维数组，而不是零维数组 |

```python
import numpy as np
a = np.arange(0,60,5)
a = a.reshape(3,4)
print ('原始数组是：')
print (a)
print ('\\n')
print ('修改后的数组是：')
for x in np.nditer(a, flags =  ['external_loop'], order =  'F'):
   print (x, end=", " )
```

### 广播迭代


如果两个数组是可广播的，nditer组合对象能够同时迭代它们。假设数组a的维度为3X4，数组b的维度为1X4，则使用以下迭代器（数组b被广播到a的大小）。


```python
import numpy as np

a = np.arange(0,60,5)
a = a.reshape(3,4)
print  ('第一个数组为：')
print (a)
print  ('\\n')
print ('第二个数组为：')
b = np.array([1,  2,  3,  4], dtype =  int)
print (b)
print ('\\n')
print ('修改后的数组为：')
for x,y in np.nditer([a,b]):
    print ("%d:%d"  %  (x,y), end=", " )
```


## 数组操作

### 改变数组形状


| 函数      | 描述                        | 函数                                                         |
| ------- | ------------------------- | ---------------------------------------------------------- |
| reshape | 不改变数据的条件下修改形状             | `numpy.reshape(arr, newshape, order=['C'\|'F'\|'A'\|'k'])` |
| flat    | 数组元素迭代器                   | 数组元素迭代器(`for e in a.flat:`)                                |
| flatten | 返回一份数组拷贝，对拷贝所做的修改不会影响原始数组 | `ndarray.flatten(order=['C'\|'F'\|'A'\|'k'])`              |
| ravel   | 返回展开数组                    | `numpy.ravel(a, order=['C'\|'F'\|'A'\|'k'])`               |


### 翻转数组


| 函数        | 描述                    | 函数                                  |
| --------- | --------------------- | ----------------------------------- |
| transpose | 对换数组的维度               | `numpy.transpose(arr, axes)`        |
| ndarray.T | 和 self.transpose() 相同 | 类似 `numpy.transpose`                |
| rollaxis  | 向后滚动指定的轴              | `numpy.rollaxis(arr, axis, start)`  |
| swapaxes  | 对换数组的两个轴              | `numpy.swapaxes(arr, axis1, axis2)` |


### 修改数组维度


| 函数           | 描述            | 函数                                        |
| ------------ | ------------- | ----------------------------------------- |
| broadcast    | 产生模仿广播的对象     | 该函数使用两个数组作为输入参数                           |
| broadcast_to | 将数组广播到新形状     | `numpy.broadcast_to(array, shape, subok)` |
| expand_dims  | 扩展数组的形状       | `numpy.expand_dims(arr, axis)`            |
| squeeze      | 从数组的形状中删除一维条目 | `numpy.squeeze(arr, axis)`                |


### 连接数组


| 函数          | 描述              | 函数                                       |
| ----------- | --------------- | ---------------------------------------- |
| concatenate | 连接沿现有轴的数组序列     | `numpy.concatenate((a1, a2, ...), axis)` |
| stack       | 沿着新的轴加入一系列数组。   | `numpy.stack(arrays, axis)`              |
| hstack      | 水平堆叠序列中的数组（列方向） | `numpy.hstack(arrays)`                   |
| vstack      | 竖直堆叠序列中的数组（行方向） | `numpy.vstack(arrays`                    |


### 分割数组


| 函数     | 描述                  | 函数                                            |
| ------ | ------------------- | --------------------------------------------- |
| split  | 将一个数组分割为多个子数组,左闭右开  | `numpy.split(ary, indices_or_sections, axis)` |
| hsplit | 将一个数组水平分割为多个子数组（按列） | `numpy.hsplit(ary, indices_or_sections)`      |
| vsplit | 将一个数组垂直分割为多个子数组（按行） | `numpy.vsplit(ary, indices_or_sections)`      |


### 数组元素的添加与删除


| 函数     | 描述                   | 函数                                                               |
| ------ | -------------------- | ---------------------------------------------------------------- |
| resize | 返回指定形状的新数组           | `numpy.resize(arr, shape)`                                       |
| append | 将值添加到数组末尾            | `numpy.append(arr, values, axis=None)`                           |
| insert | 沿指定轴将值插入到指定下标之前      | `numpy.insert(arr, obj, values, axis)`                           |
| delete | 删掉某个轴的子数组，并返回删除后的新数组 | `Numpy.delete(arr, obj, axis)`                                   |
| unique | 查找数组内的唯一元素           | `numpy.unique(arr, return_index, return_inverse, return_counts)` |
