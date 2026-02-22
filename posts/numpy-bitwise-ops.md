---
title: 'numpy学习笔记2'
published: 2024-01-05
updated: 2024-01-05
description: '本文介绍了NumPy的多种功能，包括位运算、字符串操作、数学函数、统计函数、排序和条件筛选、字节交换、数组的副本与视图、矩阵库、线性代数、文件输入输出，以及如何与Matplotlib结合使用。提供了详细的函数说明和示例代码，帮助用户理解和应用NumPy的各种功能。'
permalink: 'numpy-bitwise-ops'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/6d0c5aa1-2ce8-4d35-9f34-d3bfa117d39f/GCn5JKCaAAALIni.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNS6BWN%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T113457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CnggUmQNTIWcxpk71sKe%2BtcT0RVUJnkPa1sONfkxywIgWix1CfX3kaputgPwarZUIm7ANIL%2FnkR%2Bs9ctAQYwHUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoT9%2B%2FRgaZzFud2TSrcA6ZIdkCm0Ediqay5sOB%2BtmFTfvN%2F%2FiM3m%2F741v%2F4WBgrN8nAdCqs3K0VwKqA87HJN%2FOVRcC613qZ8Vk3uuCXBRVmMq3bP4SIlSXY05b9NsSlLB21h4aAJO%2BUo9I5B0OKrge%2FTIMz5t56djaob1uhJaeKQadOFjvvl4vBIoul9KfMJe3GpdLQfkWx5HKq9mGFkHtGO2EWxSRKt1PzPg8778DWmZBTnwZ2YZNpAF8Vp2zEZF6UMPZRWWYTe3AAB65obPV1EWwXRTDaJ9z%2BncisYqkargisww8OzzKImvt5cZILOD8cEL%2Fp2uopoku1gp5jLHz3lvfO6DyEerPRGgpCtAqjNzjhPJLT1T3eqgap6aKwSmtpmKjsPT7jYyAmMNTk92IzUW0sTA9HsYbfl5BQchOJqYBSimo7RP0jfpBzIPcPAjR0IPIpavdDv0u272P00%2BnvavidCmm6%2FjDHZzLK%2FWMhCC1qParzGxRVFKQfj5JIWHcMA2t6qMlrLcqjAZGqb0Sf9jAIV1ylcSFBpa7YSppoqLOEkQwnaRmZiaKxGM%2BouTPJDU71RslQ9XjZWdbID5ENcci%2F98HbSW8Oe5SR3HH5tDagoVWqoCx1Q2uszHPL7uAQ8Z6hoX4Ws%2FRNMIbF6swGOqUBQOf5kXQFX3yokCvwpqOkVYHnJ%2BkSV26e003qD3b5u%2BdxOClHMeiP5JxnpBXoNTy4%2F5LsnK38wifdV7M7j9Zpx3qluNkI115JBCKcURrDbXplhGJUCPuZaVV7yhvlTO3qekjS8%2By3g9Yy4Gdvhf1d3CBLBgYPAxCxE%2Fd9myIs0pAcvhHT4nUEkZwrjkso1JE0Ev147f5qpEKi59tWtwfvL%2Fi4Xl%2Fl&X-Amz-Signature=e626fbf9d2127315ed58d5760d682192a25ae173aef3719aa82df503b37526ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['python', 'numpy']
category: 'cs-base'
draft: false
---

# numpy计算


## numpy位运算


位运算是一种在二进制数字的位级别上进行操作的一类运算，它们直接操作二进制数字的各个位，而不考虑数字的整体值。


位运算在计算机科学中广泛应用于优化和处理底层数据。


NumPy "bitwise_" 开头的函数是位运算函数。


NumPy 位运算包括以下几个函数：


| 函数          | 描述                | 操作符 |
| ----------- | ----------------- | --- |
| bitwise_and | 按位与，对数组元素执行位与操作   | &   |
| bitwise_or  | 按位或，对数组元素执行位或操作   | |   |
| bitwise_xor | 按位异或              | ^   |
| bitwise_not | 按位取反              | ~   |
| invert      | 按位取反              | ~   |
| left_shift  | 左移位运算，向左移动二进制表示的位 | <<  |
| right_shift | 右移位运算，向右移动二进制表示的位 | >>  |


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


这些函数在字符数组类（numpy.char）中定义。


| 函数           | 描述                       |
| ------------ | ------------------------ |
| add()        | 对两个数组的逐个字符串元素进行连接        |
| multiply()   | 返回按元素多重连接后的字符串           |
| center()     | 居中字符串，并使用指定字符在左侧和右侧进行填充。 |
| capitalize() | 将字符串第一个字母转换为大写           |
| title()      | 将字符串的每个单词的第一个字母转换为大写     |
| lower()      | 数组元素转换为小写                |
| upper()      | 数组元素转换为大写                |
| split()      | 指定分隔符对字符串进行分割，并返回数组列表    |
| splitlines() | 返回元素中的行列表，以换行符分割         |
| strip()      | 移除元素开头或者结尾处的特定字符         |
| join()       | 通过指定分隔符来连接数组中的元素         |
| replace()    | 使用新字符串替换字符串中的所有子字符串      |
| decode()     | 数组元素依次调用str.decode       |
| encode()     | 数组元素依次调用str.encode       |

- numpy.char.add()/multiply()/center()

numpy.char.add() 函数依次对两个数组的元素进行字符串连接。


```python
import numpy as np

print ('连接两个字符串：')
print (np.char.add(['hello'],[' xyz']))
print ('\\n')

print ('连接示例：')
print (np.char.add(['hello', 'hi'],[' abc', ' xyz']))

print (np.char.multiply('Runoob ',3))

# np.char.center(str , width,fillchar) ：
# str: 字符串，width: 长度，fillchar: 填充字符
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

numpy.char.join() 函数通过指定分隔符来连接数组中的元素或字符串


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


NumPy 提供了标准的三角函数：sin()、cos()、tan()。


```python
import numpy as np

a = np.array([0,30,45,60,90])
print ('不同角度的正弦值：')
# 通过乘 pi/180 转化为弧度
print (np.sin(a*np.pi/180))
print ('\\n')
print ('数组中角度的余弦值：')
print (np.cos(a*np.pi/180))
print ('\\n')
print ('数组中角度的正切值：')
print (np.tan(a*np.pi/180))
```


arcsin，arccos，和 arctan 函数返回给定角度的 sin，cos 和 tan 的反三角函数。


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
函数返回指定数字的四舍五入值。

    ```python
    # numpy.around(a,decimals)
    #     a: 数组
    #     decimals: 舍入的小数位数。 默认值为0。 如果为负，整数将四舍五入到小数点左侧的位置
    
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
返回小于或者等于指定表达式的最大整数，即向下取整。

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
返回大于或者等于指定表达式的最小整数，即向上取整。

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


NumPy 算术函数包含简单的加减乘除: add()，subtract()，multiply() 和 divide()。


需要注意的是数组必须具有相同的形状或符合数组广播规则。


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

    numpy.reciprocal() 函数返回参数逐元素的倒数。如 1/4 倒数为 4/1。


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

    numpy.power() 函数将第一个输入数组中的元素作为底数，计算它与第二个输入数组中相应元素的幂。


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

    numpy.mod() 计算输入数组中相应元素的相除后的余数。 函数 numpy.remainder() 也产生相同的结果。


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


## 统计函数

- numpy.amin() 和 numpy.amax()

    numpy.amin() 用于计算数组中的元素沿指定轴的最小值。


    ```python
    numpy.amin(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
    
    # 参数说明：
    #     a: 输入的数组，可以是一个NumPy数组或类似数组的对象。
    #     axis: 可选参数，用于指定在哪个轴上计算最小值。如果不提供此参数，则返回整个数组的最小值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
    #     out: 可选参数，用于指定结果的存储位置。
    #     keepdims: 可选参数，如果为True，将保持结果数组的维度数目与输入数组相同。如果为False（默认值），则会去除计算后维度为1的轴。
    #     initial: 可选参数，用于指定一个初始值，然后在数组的元素上计算最小值。
    #     where: 可选参数，一个布尔数组，用于指定仅考虑满足条件的元素。
    ```


    numpy.amax() 用于计算数组中的元素沿指定轴的最大值。


    ```python
    numpy.amax(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
    
    # 参数说明：
    #     a: 输入的数组，可以是一个NumPy数组或类似数组的对象。
    #     axis: 可选参数，用于指定在哪个轴上计算最大值。如果不提供此参数，则返回整个数组的最大值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
    #     out: 可选参数，用于指定结果的存储位置。
    #     keepdims: 可选参数，如果为True，将保持结果数组的维度数目与输入数组相同。如果为False（默认值），则会去除计算后维度为1的轴。
    #     initial: 可选参数，用于指定一个初始值，然后在数组的元素上计算最大值。
    #     where: 可选参数，一个布尔数组，用于指定仅考虑满足条件的元素。
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

    numpy.ptp() 函数计算数组中元素最大值与最小值的差（最大值 - 最小值）。


    ```python
    numpy.ptp(a,axis=None,out=None,keepdims=<no value>,initial=<no value>,where=<no value>)
    
    # 参数说明：
    #     a: 输入的数组，可以是一个 NumPy 数组或类似数组的对象。
    #     axis: 可选参数，用于指定在哪个轴上计算峰-峰值。如果不提供此参数，则返回整个数组的峰-峰值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
    #     out: 可选参数，用于指定结果的存储位置。
    #     keepdims: 可选参数，如果为 True，将保持结果数组的维度数目与输入数组相同。如果为 False（默认值），则会去除计算后维度为1的轴。
    #     initial: 可选参数，用于指定一个初始值，然后在数组的元素上计算峰-峰值。
    # where: 可选参数，一个布尔数组，用于指定仅考虑满足条件的元素。
    
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

    百分位数是统计中使用的度量，表示小于这个值的观察值的百分比。 函数numpy.percentile()接受以下参数。

    > 首先明确百分位数：  
    > 第 p 个百分位数是这样一个值，它使得至少有 p% 的数据项小于或等于这个值，且至少有 (100-p)% 的数据项大于或等于这个值。  
    > 举个例子：高等院校的入学考试成绩经常以百分位数的形式报告。比如，假设某个考生在入学考试中的语文部分的原始分数为 54 分。相对于参加同一考试的其他学生来说，他的成绩如何并不容易知道。但是如果原始分数54分恰好对应的是第70百分位数，我们就能知道大约70%的学生的考分比他低，而约30%的学生考分比他高。  
    > 这里的 p = 70。

    ```python
    numpy.percentile(a, q, axis)
    
    # 参数说明：
    #     a: 输入数组
    #     q: 要计算的百分位数，在 0 ~ 100 之间
    #     axis: 沿着它计算百分位数的轴
    
    import numpy as np
    
    a = np.array([[10, 7, 4], [3, 2, 1]])
    print ('我们的数组是：')
    print (a)
    
    print ('调用 percentile() 函数：')
    # 50% 的分位数，就是 a 里排序之后的中位数
    print (np.percentile(a, 50))
    
    # axis 为 0，在纵列上求
    print (np.percentile(a, 50, axis=0))
    
    # axis 为 1，在横行上求
    print (np.percentile(a, 50, axis=1))
    
    # 保持维度不变
    print (np.percentile(a, 50, axis=1, keepdims=True))
    ```

- numpy.median()

    numpy.median() 函数用于计算数组 a 中元素的中位数（中值）


    ```python
    numpy.median(a, axis=None, out=None, overwrite_input=False, keepdims=<no value>)
    
    # 参数说明：
    #     a: 输入的数组，可以是一个 NumPy 数组或类似数组的对象。
    #     axis: 可选参数，用于指定在哪个轴上计算中位数。如果不提供此参数，则计算整个数组的中位数。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
    #     out: 可选参数，用于指定结果的存储位置。
    #     overwrite_input: 可选参数，如果为True，则允许在计算中使用输入数组的内存。这可能会在某些情况下提高性能，但可能会修改输入数组的内容。
    #     keepdims: 可选参数，如果为True，将保持结果数组的维度数目与输入数组相同。如果为False（默认值），则会去除计算后维度为1的轴。
    
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

    numpy.mean() 函数返回数组中元素的算术平均值，如果提供了轴，则沿其计算。


    算术平均值是沿轴的元素的总和除以元素的数量。


    ```python
    numpy.mean(a, axis=None, dtype=None, out=None, keepdims=<no value>)
    
    # 参数说明：
    
    # a: 输入的数组，可以是一个 NumPy 数组或类似数组的对象。
    # axis: 可选参数，用于指定在哪个轴上计算平均值。如果不提供此参数，则计算整个数组的平均值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
    # dtype: 可选参数，用于指定输出的数据类型。如果不提供，则根据输入数据的类型选择合适的数据类型。
    # out: 可选参数，用于指定结果的存储位置。
    # keepdims: 可选参数，如果为True，将保持结果数组的维度数目与输入数组相同。如果为False（默认值），则会去除计算后维度为1的轴。
    ```

- numpy.average()

    numpy.average() 函数根据在另一个数组中给出的各自的权重计算数组中元素的加权平均值。


    该函数可以接受一个轴参数。 如果没有指定轴，则数组会被展开。


    加权平均值即将各数值乘以相应的权数，然后加总求和得到总体值，再除以总的单位数。


    ```python
    numpy.average(a, axis=None, weights=None, returned=False)
    
    # 参数说明：
    # a: 输入的数组，可以是一个 NumPy 数组或类似数组的对象。
    # axis: 可选参数，用于指定在哪个轴上计算加权平均值。如果不提供此参数，则计算整个数组的加权平均值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
    # weights: 可选参数，用于指定对应数据点的权重。如果不提供权重数组，则默认为等权重。
    # returned: 可选参数，如果为True，将同时返回加权平均值和权重总和。
    ```

- numpy.average()

    numpy.average() 函数根据在另一个数组中给出的各自的权重计算数组中元素的加权平均值。


    该函数可以接受一个轴参数。 如果没有指定轴，则数组会被展开。


    加权平均值即将各数值乘以相应的权数，然后加总求和得到总体值，再除以总的单位数。


    ```python
    numpy.average(a, axis=None, weights=None, returned=False)
    
    # 参数说明：
    # a: 输入的数组，可以是一个 NumPy 数组或类似数组的对象。
    # axis: 可选参数，用于指定在哪个轴上计算加权平均值。如果不提供此参数，则计算整个数组的加权平均值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
    # weights: 可选参数，用于指定对应数据点的权重。如果不提供权重数组，则默认为等权重。
    # returned: 可选参数，如果为True，将同时返回加权平均值和权重总和。
    
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

- 标准差

    标准差是一组数据平均值分散程度的一种度量。


    标准差是方差的算术平方根。


    标准差公式如下：


    `std = sqrt(mean((x - x.mean())^2))`


    ```python
    import numpy as np
    
    print (np.std([1,2,3,4]))
    ```

- 方差

    统计中的方差（样本方差）是每个样本值与全体样本值的平均数之差的平方值的平均数，即 mean((x - x.mean())** 2)。


    换句话说，标准差是方差的平方根。


    ```python
    import numpy as np
    
    print (np.var([1,2,3,4]))
    ```


## NumPy 排序、条件筛选函数


NumPy 提供了多种排序的方法。 这些排序函数实现不同的排序算法，每个排序算法的特征在于执行速度，最坏情况性能，所需的工作空间和算法的稳定性。 下表显示了三种排序算法的比较。


| 种类                | 速度 | 最坏情况          | 工作空间 | 稳定性 |
| ----------------- | -- | ------------- | ---- | --- |
| 'quicksort'（快速排序） | 1  | O(n^2)        | O(1) | 否   |
| 'mergesort'（归并排序） | 2  | O(n * log(n)) | O(n) | 是   |
| 'heapsort'（堆排序）   | 3  | O(n*log(n))   | O(1) | 否   |

- numpy.sort()

    numpy.sort() 函数返回输入数组的排序副本。函数格式如下：


    ```python
    numpy.sort(a, axis, kind, order)
    
    # 参数说明：
    #     a: 要排序的数组
    #     axis: 沿着它排序数组的轴，如果没有数组会被展开，沿着最后的轴排序， axis=0 按列排序，axis=1 按行排序
    #     kind: 默认为'quicksort'（快速排序）
    #     order: 如果数组包含字段，则是要排序的字段
    ```

- numpy.argsort()

    numpy.argsort() 函数返回的是数组值从小到大的索引值。


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

    numpy.lexsort() 用于对多个序列进行排序。把它想象成对电子表格进行排序，每一列代表一个序列，排序时优先照顾靠后的列。


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
    | msort(a)                                  | 数组按第一个轴排序，返回排序后的数组副本。np.msort(a) 相等于 np.sort(a, axis=0)。 |
    | sort_complex(a)                           | 对复数按照先实部后虚部的顺序进行排序。                                      |
    | partition(a, kth[, axis, kind, order])    | 指定一个数，对数组进行分区                                            |
    | argpartition(a, kth[, axis, kind, order]) | 可以通过关键字 kind 指定算法沿着指定轴对数组进行分区                            |

- numpy.argmax() 和 numpy.argmin()

    numpy.argmax() 和 numpy.argmin()函数分别沿给定轴返回最大和最小元素的索引。

- numpy.nonzero()

    numpy.nonzero() 函数返回输入数组中非零元素的索引。

- numpy.where()

    numpy.where() 函数返回输入数组中满足给定条件的元素的索引。

- numpy.extract()

    numpy.extract() 函数根据某个条件从数组中抽取元素，返回满条件的元素。


## NumPy 字节交换


在几乎所有的机器上，多字节对象都被存储为连续的字节序列。字节顺序，是跨越多字节的程序对象的存储规则。

- 大端模式：指数据的高字节保存在内存的低地址中，而数据的低字节保存在内存的高地址中，这样的存储模式有点儿类似于把数据当作字符串顺序处理：地址由小向大增加，而数据从高位往低位放；这和我们的阅读习惯一致。
- 小端模式：指数据的高字节保存在内存的高地址中，而数据的低字节保存在内存的低地址中，这种存储模式将地址的高低和数据位权有效地结合起来，高地址部分权值高，低地址部分权值低。

numpy.ndarray.byteswap() 函数将 ndarray 中每个元素中的字节进行大小端转换。


```python
import numpy as np

A = np.array([1, 256, 8755], dtype=np.int16)
print(A)
print(list(map(hex, A)))
print(A.byteswap(inplace=True))
print(list(map(hex, A)))
```


# Numpy 副本和视图


副本是一个数据的完整的拷贝，如果我们对副本进行修改，它不会影响到原始数据，物理内存不在同一位置。


视图是数据的一个别称或引用，通过该别称或引用亦便可访问、操作原有数据，但原有数据不会产生拷贝。如果我们对视图进行修改，它**会影响到原始数据，物理内存在同一位置**。


视图一般发生在：

1. numpy 的切片操作返回原数据的视图。
2. 调用 ndarray 的 view() 函数产生一个视图。

副本一般发生在：

- Python 序列的切片操作，调用deepCopy()函数。
- 调用 ndarray 的 copy() 函数产生一个副本。

## 无复制


简单的赋值不会创建数组对象的副本。 相反，它使用原始数组的相同id()来访问它。 id()返回 Python 对象的通用标识符，类似于 C 中的指针。


此外，一个数组的任何变化都反映在另一个数组上。 例如，一个数组的形状改变也会改变另一个数组的形状。


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


NumPy 中包含了一个矩阵库 numpy.matlib，该模块中的函数返回的是一个矩阵，而不是 ndarray 对象。


一个 的矩阵是一个由行（row）列（column）元素排列成的矩形阵列。


矩阵里的元素可以是数字、符号或数学式。


## 转置矩阵


NumPy 中除了可以使用 numpy.transpose 函数来对换数组的维度，还可以使用 T 属性。。


例如有个 m 行 n 列的矩阵，使用 t() 函数就能转换为 n 行 m 列的矩阵。


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


matlib.empty() 函数返回一个新的矩阵，语法格式为：


```python
numpy.matlib.empty(shape, dtype, order)

# 参数说明：
#     shape: 定义新矩阵形状的整数或整数元组
#     Dtype: 可选，数据类型
#     order: C（行序优先） 或者 F（列序优先）

import numpy.matlib
import numpy as np

print (np.matlib.empty((2,2)))
# 填充为随机数据
```


## numpy.matlib.zeros()


numpy.matlib.zeros() 函数创建一个以 0 填充的矩阵。


```python
import numpy as np

print (np.matlib.zeros((2,2)))
```


## numpy.matlib.ones()


numpy.matlib.ones()函数创建一个以 1 填充的矩阵。


```python
import numpy.matlib
import numpy as np

print (np.matlib.ones((2,2)))
```


## numpy.matlib.eye()


numpy.matlib.eye() 函数返回一个矩阵，对角线元素为 1，其他位置为零。


```python
numpy.matlib.eye(n, M,k, dtype)

# 参数说明：
#     n: 返回矩阵的行数
#     M: 返回矩阵的列数，默认为 n
#     k: 对角线的索引
#     dtype: 数据类型

import numpy.matlib
import numpy as np

print (np.matlib.eye(n =  3, M =  4, k =  0, dtype =  float))
```


## numpy.matlib.identity()


numpy.matlib.identity() 函数返回给定大小的单位矩阵。


单位矩阵是个方阵，从左上角到右下角的对角线（称为主对角线）上的元素均为 1，除此以外全都为 0。


```python
import numpy.matlib
import numpy as np

# 大小为 5，类型位浮点型
print (np.matlib.identity(5, dtype =  float))
```


## numpy.matlib.rand()


numpy.matlib.rand() 函数创建一个给定大小的矩阵，数据是随机填充的。


```python
import numpy.matlib
import numpy as np

print (np.matlib.rand(3,3))

# 矩阵总是二维的，而 ndarray 是一个 n 维数组。 两个对象都是可互换的。
import numpy.matlib
import numpy as np

i = np.matrix('1,2;3,4')
print (i)

j = np.asarray(i)
print (j)

k = np.asmatrix (j)
print (k)
```


# Numpy线性代数


NumPy 提供了线性代数函数库 linalg，该库包含了线性代数所需的所有功能，可以看看下面的说明：


| 函数          | 描述                                                | 函数                        |
| ----------- | ------------------------------------------------- | ------------------------- |
| dot         | 两个数组的点积，即元素对应相乘。                                  | numpy.dot(a, b, out=None) |
| vdot        | 两个向量的点积。如果第一个参数是复数，那么它的共轭复数会用于计算。 如果参数是多维数组，它会被展开 | numpy.vdot(a, b)          |
| inner       | 返回一维数组的向量内积。对于更高的维度，它返回最后一个轴上的和的乘积                | numpy.vdot(a, b)          |
| matmul      | 两个数组的矩阵积                                          | numpy.inner(a, b)         |
| determinant | 数组的行列式                                            | numpy.det(a, b)           |
| solve       | 求解线性矩阵方程                                          | numpy.solve(a, b)         |
| inv         | 计算矩阵的乘法逆矩阵                                        | numpy.inv(a)              |

- matmul

    numpy.matmul 函数返回两个数组的矩阵乘积。 虽然它返回二维数组的正常乘积，但如果任一参数的维数大于2，则将其视为存在于最后两个索引的矩阵的栈，并进行相应广播。


    另一方面，如果任一参数是一维数组，则通过在其维度上附加 1 来将其提升为矩阵，并在乘法之后被去除。


    对于二维数组，它就是矩阵乘法：


    ```python
    import numpy.matlib
    import numpy as np
    
    a = [[1,0],[0,1]]
    b = [[4,1],[2,2]]
    print (np.matmul(a,b))
    
    # 二维和一维运算
    a = [[1,0],[0,1]]
    b = [1,2]
    print (np.matmul(a,b))
    print (np.matmul(b,a))
    
    # 维度大于二的数组
    a = np.arange(8).reshape(2,2,2)
    b = np.arange(4).reshape(2,2)
    print (np.matmul(a,b))
    ```


# Numpy IO


Numpy 可以读写磁盘上的文本数据或二进制数据。


NumPy 为 ndarray 对象引入了一个简单的文件格式：npy。


npy 文件用于存储重建 ndarray 所需的数据、图形、dtype 和其他信息。


常用的 IO 函数有：

- load() 和 save() 函数是读写文件数组数据的两个主要函数，默认情况下，数组是以未压缩的原始二进制格式保存在扩展名为 .npy 的文件中。
- savez() 函数用于将多个数组写入文件，默认情况下，数组是以未压缩的原始二进制格式保存在扩展名为 .npz 的文件中。
- oadtxt() 和 savetxt() 函数处理正常的文本文件(.txt 等)

---

- numpy.save()

    numpy.save() 函数将数组保存到以 .npy 为扩展名的文件中。


    `numpy.save(file, arr, allow_pickle=True, fix_imports=True)`

- np.savez

    numpy.savez() 函数将多个数组保存到以 npz 为扩展名的文件中。


    `numpy.savez(file, *args, **kwds)`

- savetxt()

    savetxt() 函数是以简单的文本文件格式存储数据，对应的使用 loadtxt() 函数来获取数据。


    `np.loadtxt(FILENAME, dtype=int, delimiter=' ')np.savetxt(FILENAME, a, fmt="%d", delimiter=",")`


    参数 delimiter 可以指定各种分隔符、针对特定列的转换器函数、需要跳过的行数等。


# Numpy + Matplotlib


Matplotlib是Python的绘图库。 它可与NumPy一起使用，提供了一种有效的 MatLab开源替代方案。它也可以和图形工具包一起使用，如PyQt和wxPython。


pip3 安装：


```shell
pip3 install matplotlib

# 安装验证
pip3 list | grep matplotlib
```


使用：


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


## 中文使用


Matplotlib 默认情况不支持中文，我们可以使用以下简单的方法来解决。

1. 下载 [思源黑体](https://github.com/adobe-fonts/source-han-sans/tree/release/OTF/SimplifiedChinese)
2. 把下载的OTF字体放到代码文件下即可
3. `matplotlib.font_manager.FontProperties(fname="SourceHanSansSC-Bold.otf")`fname指定字体库路径

```python
import numpy as np
from matplotlib import pyplot as plt
import matplotlib

# fname 为 你下载的字体库路径，注意 SourceHanSansSC-Bold.otf 字体的路径
zhfont1 = matplotlib.font_manager.FontProperties(fname="SourceHanSansSC-Bold.otf")

x = np.arange(1,11)
y =  2  * x +  5
plt.title("菜鸟教程 - 测试", fontproperties=zhfont1)

# fontproperties 设置中文显示，fontsize 设置字体大小
plt.xlabel("x 轴", fontproperties=zhfont1)
plt.ylabel("y 轴", fontproperties=zhfont1)
plt.plot(x,y)
plt.show()
```
