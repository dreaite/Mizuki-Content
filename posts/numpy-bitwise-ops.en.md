---
title: 'numpy学习笔记2'
published: 2024-01-05
updated: 2024-01-05
description: '本文介绍了NumPy的多种功能，包括位运算、字符串操作、数学函数、统计函数、排序和条件筛选、字节交换、数组的副本与视图、矩阵库、线性代数、文件输入输出，以及如何与Matplotlib结合使用。提供了详细的函数说明和示例代码，帮助用户理解和应用NumPy的各种功能。'
permalink: 'numpy-bitwise-ops'
image: 'https://r2.dreaife.tokyo/notion/covers/8f8d39bb1fb14003b5157b7cd6360426/GCn5JKCaAAALIni.jpg'
tags: ['python', 'numpy']
category: 'cs-base'
draft: false
lang: 'en'
---

# NumPy Calculations

## NumPy Bitwise Operations

Bitwise operations are a class of operations that perform on binary numbers at the bit level, directly manipulating the individual bits of binary representations without regard to the overall value.

Bitwise operations are widely used in computer science for optimization and handling of low-level data.

NumPy "bitwise_" prefixed functions are bitwise operation functions.

NumPy bitwise operations include the following functions:

| Function          | Description                                                        | Operator |
| ----------- | ----------------------------------------------------------------- | --- |
| bitwise_and | Bitwise AND, performs the AND operation on array elements          | &   |
| bitwise_or  | Bitwise OR, performs the OR operation on array elements            | |   |
| bitwise_xor | Bitwise XOR                                                      | ^   |
| bitwise_not | Bitwise NOT                                                      | ~   |
| invert      | Bitwise NOT                                                      | ~   |
| left_shift  | Left shift, shifts the binary representation to the left by bits | <<  |
| right_shift | Right shift, shifts the binary representation to the right by bits | >>  |


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

# Bitwise NOT
arr_invert = np.invert(np.array([1, 2], dtype=np.int8))
print("Invert:", arr_invert)  # [-2, -3]

# Left shift
arr_left_shift = np.left_shift(5, 2)
print("Left Shift:", arr_left_shift)  # 20

# Right shift
arr_right_shift = np.right_shift(10, 1)
print("Right Shift:", arr_right_shift)  # 5
```

## String Functions

The following functions operate on arrays with dtype numpy.string_ or numpy.unicode_ to perform vectorized string operations. They are based on the standard string functions in the Python standard library.

These functions are defined in the character array class (numpy.char).

| Function           | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| add()        | Concatenates corresponding elements of two arrays of strings        |
| multiply()   | Returns the strings formed by element-wise repetition               |
| center()     | Centers the string, padding with a specified character on the left and right |
| capitalize() | Converts the first letter of the string to uppercase               |
| title()      | Converts the first letter of each word in the string to uppercase  |
| lower()      | Converts array elements to lowercase                               |
| upper()      | Converts array elements to uppercase                               |
| split()      | Splits strings by a specified separator and returns a list of arrays |
| splitlines() | Returns a list of lines in each element, splitting on newline      |
| strip()      | Removes specified characters from the start or end of elements    |
| join()       | Joins elements in the array into a single string using a separator |
| replace()    | Replaces all substrings in the string with a new string           |
| decode()     | Calls str.decode on each array element                               |
| encode()     | Calls str.encode on each array element                               |

- numpy.char.add()/multiply()/center()

The numpy.char.add() function concatenates the elements of two arrays element-wise.


```python
import numpy as np

print ('Concatenating two strings:')
print (np.char.add(['hello'],[' xyz']))
print ('\\n')

print ('Concatenation examples:')
print (np.char.add(['hello', 'hi'],[' abc', ' xyz']))

print (np.char.multiply('Runoob ',3))

# np.char.center(str , width,fillchar) ：
# str: string, width: length, fillchar: fill character
print (np.char.center('Runoob', 20,fillchar = '*'))
```

- numpy.char.capitalize()/title()/lower()/upper()

```python
import numpy as np

print (np.char.capitalize('runoob'))

print (np.char.capitalize('runoob'))

# operate on arrays
print (np.char.lower(['RUNOOB','GOOGLE']))

# operate on strings
print (np.char.lower('RUNOOB'))
```

- numpy.char.split()/splitlines()/strip()

numpy.char.split() splits strings by a specified separator and returns an array. By default, the separator is a space.


```python
import numpy as np

# Separator defaults to space
print (np.char.split ('i like runoob?'))
# Separator is .
print (np.char.split ('www.runoob.com', sep = '.'))

# Newline characters \\n
# \\n, \\r, \\r\\n can all be used as line breaks.
print (np.char.splitlines('i\\nlike runoob?'))
print (np.char.splitlines('i\\rlike runoob?'))

# Remove the leading and trailing 'a' from the string
print (np.char.strip('ashok arunooba','a'))

# Remove the leading and trailing 'a' from array elements
print (np.char.strip(['arunooba','admin','java'],'a'))
```

- numpy.char.join()/replace()/encode()/decode()

numpy.char.join() function joins the elements of an array or strings using a specified separator.


```python
import numpy as np

# operate on strings
print (np.char.join(':','runoob'))

# operate on multiple separators for array elements
print (np.char.join([':','-'],['runoob','google']))

print (np.char.replace ('i like runoob', 'oo', 'cc'))

a = np.char.encode('runoob', 'cp500')
print (a)

print (np.char.decode(a,'cp500'))
```


## NumPy Mathematical Functions


### Trigonometric Functions

NumPy provides the standard trigonometric functions: sin(), cos(), tan().

```python
import numpy as np

a = np.array([0,30,45,60,90])
print ('Sine values for different angles:')
# Convert to radians by multiplying pi/180
print (np.sin(a*np.pi/180))
print ('\\n')
print ('Cosine values for angles in the array:')
print (np.cos(a*np.pi/180))
print ('\\n')
print ('Tangent values for angles in the array:')
print (np.tan(a*np.pi/180))
```


arcsin, arccos, and arctan functions return the inverse trigonometric functions of sin, cos and tan for given angles.

These function results can be converted from radians to degrees using numpy.degrees().

```python
import numpy as np

a = np.array([0,30,45,60,90])
print ('Array with sine values:')
sin = np.sin(a*np.pi/180)
print (sin)
print ('\\n')
print ('Inverse sine of the angles, result in radians:')
inv = np.arcsin(sin)
print (inv)
print ('\\n')
print ('Check the result by converting back to degrees:')
print (np.degrees(inv))
print ('\\n')
print ('Inverse cosine and arctan behave similarly:')
cos = np.cos(a*np.pi/180)
print (cos)
print ('\\n')
print ('Arccosine:')
inv = np.arccos(cos)
print (inv)
print ('\\n')
print ('Angle in degrees:')
print (np.degrees(inv))
print ('\\n')
print ('Tangent:')
tan = np.tan(a*np.pi/180)
print (tan)
print ('\\n')
print ('Inverse tangent:')
inv = np.arctan(tan)
print (inv)
print ('\\n')
print ('Angle in degrees:')
print (np.degrees(inv))
```


### Rounding Functions

- numpy.around()
The function returns the rounded value of the given number.

    ```python
    # numpy.around(a,decimals)
    #     a: array
    #     decimals: number of decimals to round to. Default is 0. If negative, round to the left of the decimal point
    
    import numpy as np
    
    a = np.array([1.0,5.55,  123,  0.567,  25.532])
    print  ('Original array:')
    print (a)
    print ('\\n')
    print ('Rounded:')
    print (np.around(a))
    print (np.around(a, decimals =  1))
    print (np.around(a, decimals =  -1))
    ```

- numpy.floor()
Returns the largest integer less than or equal to the given expression, i.e., floor.

    ```python
    import numpy as np
    
    a = np.array([-1.7,  1.5,  -0.2,  0.6,  10])
    print ('Provided array:')
    print (a)
    print ('\\n')
    print ('Modified array:')
    print (np.floor(a))
    ```

- numpy.ceil()
Returns the smallest integer greater than or equal to the given expression, i.e., ceil.

    ```python
    import numpy as np
    
    a = np.array([-1.7,  1.5,  -0.2,  0.6,  10])
    print  ('Provided array:')
    print (a)
    print ('\\n')
    print ('Modified array:')
    print (np.ceil(a))
    ```


## Arithmetic Functions


NumPy arithmetic functions include simple addition, subtraction, multiplication, and division: add(), subtract(), multiply() and divide().

Note that arrays must have the same shape or be broadcastable.

```python
import numpy as np

a = np.arange(9, dtype = np.float_).reshape(3,3)
print ('First array:')
print (a)
print ('\\n')
print ('Second array:')
b = np.array([10,10,10])
print (b)
print ('\\n')
print ('Addition of the two arrays:')
print (np.add(a,b))
print ('\\n')
print ('Subtraction of the two arrays:')
print (np.subtract(a,b))
print ('\\n')
print ('Multiplication of the two arrays:')
print (np.multiply(a,b))
print ('\\n')
print ('Division of the two arrays:')
print (np.divide(a,b))
```

- numpy.reciprocal()

    numpy.reciprocal() 返回参数逐元素的倒数。如 1/4 倒数为 4/1。

    ```python
    import numpy as np
    
    a = np.array([0.25,  1.33,  1,  100])
    print ('Our array:')
    print (a)
    print ('\\n')
    print ('Calling reciprocal function:')
    print (np.reciprocal(a))
    ```

- numpy.power()

    numpy.power() 函数将第一个输入数组中的元素作为底数，计算它与第二个输入数组中相应元素的幂。

    ```python
    import numpy as np
    
    a = np.array([10,100,1000])
    print ('Our array:')
    print (a)
    print ('\\n')
    print ('Calling power function:')
    print (np.power(a,2))
    print ('\\n')
    print ('Second array:')
    b = np.array([1,2,3])
    print (b)
    print ('\\n')
    print ('Calling power function again:')
    print (np.power(a,b))
    ```

- numpy.mod()

    numpy.mod() 计算输入数组中相应元素的相除后的余数。 函数 numpy.remainder() 也产生相同的结果。

    ```python
    import numpy as np
    
    a = np.array([10,20,30])
    b = np.array([3,5,7])
    print ('First array:')
    print (a)
    print ('\\n')
    print ('Second array:')
    print (b)
    print ('\\n')
    print ('Calling mod() function:')
    print (np.mod(a,b))
    print ('\\n')
    print ('Calling remainder() function:')
    print (np.remainder(a,b))
    ```


## Statistical Functions

- numpy.amin() and numpy.amax()

    numpy.amin() is used to compute the minimum value of elements in an array along a specified axis.


    ```python
    numpy.amin(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
    
    # Parameter descriptions:
    #     a: input array, can be a NumPy array or array-like object.
    #     axis: optional parameter to specify along which axis to compute the minimum. If not provided, returns the minimum of the entire array. Can be an integer or a tuple of axes.
    #     out: optional parameter for the output storage.
    #     keepdims: optional parameter; if True, keeps the number of dimensions of the result the same as input. If False (default), reduces axes of length 1.
    #     initial: optional parameter to specify an initial value for the minimum calculation.
    #     where: optional boolean array to specify which elements to consider.
    ```


    numpy.amax() is used to compute the maximum value along a specified axis of the array.


    ```python
    numpy.amax(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
    
    # Parameter descriptions:
    #     a: input array, can be a NumPy array or array-like object.
    #     axis: optional parameter to specify along which axis to compute the maximum. If not provided, returns the maximum of the entire array. Can be an integer or a tuple of axes.
    #     out: optional parameter for the output storage.
    #     keepdims: optional parameter; if True, keeps the number of dimensions of the result the same as input. If False (default), reduces axes of length 1.
    #     initial: optional parameter to specify an initial value for the maximum calculation.
    #     where: optional boolean array to specify which elements to consider.
    ```


```python
import numpy as np

a = np.array([[3,7,5],[8,4,3],[2,4,9]])
print ('Our array is:')
print (a)
print ('\\n')
print ('Calling amin() function:')
print (np.amin(a,1))
print ('\\n')
print ('Calling amin() again:')
print (np.amin(a,0))
print ('\\n')
print ('Calling amax() function:')
print (np.amax(a))
print ('\\n')
print ('Calling amax() again:')
print (np.amax(a, axis =  0))
```

- numpy.ptp()

    numpy.ptp() 函数计算数组中元素最大值与最小值的差（最大值 - 最小值）。

    ```python
    numpy.ptp(a,axis=None,out=None,keepdims=<no value>,initial=<no value>,where=<no value>)
    
    # Parameter descriptions:
    #     a: input array, can be a NumPy array or array-like object.
    #     axis: optional parameter; specify axis for peak-to-peak value. If not provided, returns the peak-to-peak of the entire array. Can be an integer or a tuple of axes.
    #     out: optional parameter for the output storage.
    #     keepdims: optional parameter; if True, keeps the dimensions. If False (default), reduces axes of length 1.
    #     initial: optional parameter for an initial value.
    # where: optional boolean array to specify which elements to consider.
    
    import numpy as np
    
    a = np.array([[3,7,5],[8,4,3],[2,4,9]])
    print ('Our array:')
    print (a)
    print ('\\n')
    print ('Calling ptp() function:')
    print (np.ptp(a))
    print ('\\n')
    print ('Along axis 1:')
    print (np.ptp(a, axis =  1))
    print ('\\n')
    print ('Along axis 0:')
    print (np.ptp(a, axis =  0))
    ```

- numpy.percentile()

    Percentiles are metrics used in statistics that indicate the percentage of observations below this value. The function numpy.percentile() accepts the following parameters.

    > First, the percentile:  
    > The p-th percentile is a value such that at least p% of the data items are less than or equal to this value, and at least (100-p)% are greater than or equal to this value.  
    > For example, college entrance exam results are often reported in percentiles. Suppose a candidate's raw score in the Chinese section is 54. Relative to others, it is not easy to judge. But if a raw score of 54 corresponds to the 70th percentile, we know about 70% of students scored below him and about 30% scored above him.  
    > Here p = 70.

```python
numpy.percentile(a, q, axis)

# Parameter descriptions:
#     a: input array
#     q: percentiles to compute, in the range 0 ~ 100
#     axis: axis along which to compute the percentiles

import numpy as np

a = np.array([[10, 7, 4], [3, 2, 1]])
print ('Our array:')
print (a)

print ('Calling percentile() function:')
# 50% percentile is the median of a after sorting
print (np.percentile(a, 50))

# axis 0, along columns
print (np.percentile(a, 50, axis=0))

# axis 1, along rows
print (np.percentile(a, 50, axis=1))

# keep dimensions
print (np.percentile(a, 50, axis=1, keepdims=True))
```

- numpy.median()

    numpy.median() 函数用于计算数组 a 中元素的中位数（中值）


    ```python
    numpy.median(a, axis=None, out=None, overwrite_input=False, keepdims=<no value>)
    
    # Parameter descriptions:
    #     a: input array, can be a NumPy array or array-like object.
    #     axis: optional parameter to specify along which axis to compute the median. If not provided, computes the median of the entire array. Can be an integer or a tuple of axes.
    #     out: optional parameter for the output storage.
    #     overwrite_input: optional parameter; if True, allows using the input array's memory in the computation. This may improve performance in some cases, but may modify the input array.
    #     keepdims: optional parameter; if True, keeps the dimensionality of the result the same as the input array. If False (default), reduces axes of length 1.
    
    import numpy as np
    
    a = np.array([[30,65,70],[80,95,10],[50,90,60]])
    print ('Our array:')
    print (a)
    print ('\\n')
    print ('Calling median() function:')
    print (np.median(a))
    print ('\\n')
    print ('Along axis 0:')
    print (np.median(a, axis =  0))
    print ('\\n')
    print ('Along axis 1:')
    print (np.median(a, axis =  1))
    ```

- numpy.mean()

    numpy.mean() 函数返回数组中元素的算术平均值，如果提供了轴，则沿其计算。

    算术平均值是沿轴的元素的总和除以元素的数量。


    ```python
    numpy.mean(a, axis=None, dtype=None, out=None, keepdims=<no value>)
    
    # Parameter descriptions:
    
    # a: input array, can be a NumPy array or array-like object.
    # axis: optional parameter to specify along which axis to compute the mean. If not provided, computes the mean of the entire array. Can be an integer or a tuple of axes.
    # dtype: optional parameter to specify the output data type. If not provided, an appropriate dtype is chosen based on the input data.
    # out: optional parameter to specify the output storage.
    # keepdims: optional parameter; if True, keeps the dimensions of the result the same as the input; if False (default), reduces axes of length 1.
    ```

- numpy.average()

    numpy.average() 函数根据在另一个数组中给出的各自的权重计算数组中元素的加权平均值。

    该函数可以接受一个轴参数。 如果没有指定轴，则数组会被展开。

    加权平均值即将各数值乘以相应的权数，然后加总求和得到总体值，再除以总的单位数。


    ```python
    numpy.average(a, axis=None, weights=None, returned=False)
    
    # Parameter descriptions：
    # a: input array, can be a NumPy array or array-like object.
    # axis: optional parameter to specify along which axis to compute the weighted average. If not provided, computes the weighted average of the entire array. Can be an integer or a tuple of axes.
    # weights: optional parameter to specify the weights for data points. If weights are not provided, equal weights are assumed.
    # returned: optional parameter; if True, returns the weighted average and the sum of weights.
    
    import numpy as np
    
    a = np.array([1,2,3,4])
    print ('Our array:')
    print (a)
    print ('\\n')
    print ('Calling average() function:')
    print (np.average(a))
    print ('\\n')
    # If weights are not specified, equivalent to mean
    wts = np.array([4,3,2,1])
    print ('Calling average() again:')
    print (np.average(a,weights = wts))
    print ('\\n')
    # If returned is true, also return the sum of weights
    print ('Sum of weights:')
    print (np.average([1,2,3,  4],weights =  [4,3,2,1], returned =  True))
    
    # In a multi-dimensional array, you can specify the axis to compute on.
    a = np.arange(6).reshape(3,2)
    print ('Our array:')
    print (a)
    print ('\\n')
    print ('Modified array:')
    wt = np.array([3,5])
    print (np.average(a, axis =  1, weights = wt))
    print ('\\n')
    print ('Modified array:')
    print (np.average(a, axis =  1, weights = wt, returned =  True))
    ```

- Standard Deviation

    Standard deviation is a measure of the dispersion of a set of data around its mean.

    The standard deviation is the square root of the variance.

    `std = sqrt(mean((x - x.mean())^2))`


    ```python
    import numpy as np
    
    print (np.std([1,2,3,4]))
    ```

- Variance

    The variance (sample variance) in statistics is the average of the squared differences between each sample value and the mean of all samples, i.e., mean((x - x.mean())** 2).

    In other words, the standard deviation is the square root of the variance.

    ```python
    import numpy as np
    
    print (np.var([1,2,3,4]))
    ```


## NumPy Sorting and Filtering Functions


NumPy provides several sorting methods. These sorting functions implement different sorting algorithms, each characterized by speed, worst-case performance, required workspace, and stability. The table below compares three sorting algorithms.

| Kind                | Speed | Worst case          | Workspace | Stability |
| ----------------- | -- | ------------- | ---- | --- |
| 'quicksort' (Quicksort) | 1  | O(n^2)        | O(1) | No   |
| 'mergesort' (Merge Sort) | 2  | O(n * log(n)) | O(n) | Yes   |
| 'heapsort' (Heap Sort)   | 3  | O(n*log(n))   | O(1) | No   |

- numpy.sort()

    numpy.sort() function returns a sorted copy of the input array. The function signature is:

    ```python
    numpy.sort(a, axis, kind, order)
    
    # Parameter descriptions:
    #     a: array to be sorted
    #     axis: axis along which to sort the array; if the array is flat, it is flattened, sorting along the last axis
    #     kind: defaults to 'quicksort'
    #     order: if the array has fields, the field to sort by
    ```

- numpy.argsort()

    numpy.argsort() returns the indices that would sort the array values in ascending order.


```python
import numpy as np

x = np.array([3,  1,  2])
print ('Our array:')
print (x)
print ('\\n')
print ('Calling argsort() on x:')
y = np.argsort(x)
print (y)
print ('\\n')
print ('Reconstruct the original array in sorted order:')
print (x[y])
```

- numpy.lexsort()

    numpy.lexsort() sorts multiple sequences. Think of it as sorting a spreadsheet where each column represents a sequence, with sorting given priority to the later columns.


```python
import numpy as np

nm =  ('raju','anil','ravi','amar')
dv =  ('f.y.',  's.y.',  's.y.',  'f.y.')
ind = np.lexsort((dv,nm))
print ('Calling lexsort() function:')
print (ind)
print ('\\n')
print ('Using this index to get the sorted data:')
print ([nm[i]  +  ", "  + dv[i]  for i in ind])
```

- msort、sort_complex、partition、argpartition

| Function                                        | Description                                                       |
| ----------------------------------------- | -------------------------------------------------------- |
| msort(a)                                  | Sorts the array along the first axis and returns a sorted copy. np.msort(a) is equivalent to np.sort(a, axis=0). |
| sort_complex(a)                           | Sorts complex numbers by real part first, then imaginary part.                                      |
| partition(a, kth[, axis, kind, order])    | Partitions the array around a given index kth                                            |
| argpartition(a, kth[, axis, kind, order]) | Partitions the array along the specified axis using the given kth index with optional algorithm |

- numpy.argmax() 和 numpy.argmin()

    numpy.argmax() and numpy.argmin() return the indices of the maximum and minimum elements along the given axis, respectively.

- numpy.nonzero()

    numpy.nonzero() returns the indices of the non-zero elements in the input array.

- numpy.where()

    numpy.where() returns the indices of elements in the input array that satisfy a given condition.

- numpy.extract()

    numpy.extract() extracts elements from an array that satisfy a condition and returns them.


## NumPy Byte Swapping


On almost all machines, multi-byte objects are stored as a contiguous sequence of bytes. Endianness is the storage rule for multi-byte program objects.

- Big-endian: the high-order byte is stored at the low memory address, and the low-order byte at the high memory address; this storage pattern is somewhat like treating data as a string: addresses increase from low to high, and the data is placed from high to low; this matches our reading habit.
- Little-endian: the high-order byte is stored at the high memory address, and the low-order byte at the low memory address; this storage pattern effectively combines address order and data significance, with high-address parts having high weight and low-address parts having low weight.

numpy.ndarray.byteswap() swaps the byte order of every element in the ndarray.


```python
import numpy as np

A = np.array([1, 256, 8755], dtype=np.int16)
print(A)
print(list(map(hex, A)))
print(A.byteswap(inplace=True))
print(list(map(hex, A)))
```


# Numpy Copies and Views


A copy is a complete duplicate of the data; if we modify the copy, it will not affect the original data, and the physical memory locations are different.

A view is an alias or reference to the data; through that alias, you can access and operate on the original data, but no data copy is made. If you modify the view, it will affect the original data, and the memory location is the same.


Views generally occur in:

1. numpy slicing operations that return a view of the original data.
2. calling ndarray’s view() function to produce a view.

A copy generally occurs in:

- Slicing a Python sequence and calling deepcopy().
- Calling ndarray.copy() to produce a copy.

```python
import numpy as np

a = np.arange(6)
print ('Our array:')
print (a)
print ('Calling id() function:')
print (id(a))
print ('a assigned to b:')
b = a
print (b)
print ('b has the same id():')
print (id(b))
print ('Modify b’s shape:')
b.shape =  3,2
print (b)
print ('a shape also changed:')
print (a)
```


## Views or Shallow Copy

ndarray.view() creates a new array object; the view’s shape changes do not affect the original data.


```python
import numpy as np

# Initially a is a 3x2 array
a = np.arange(6).reshape(3,2)
print ('Array a:')
print (a)
print ('Create a view of a:')
b = a.view()
print (b)
print ('Different id() for a and b:')
print ('a id():')
print (id(a))
print ('b id():')
print (id(b))
# Modifying b's shape does not modify a
b.shape =  2,3
print ('b shape:')
print (b)
print ('a shape:')
print (a)

# Slicing to create views modifies data and affects the original array:
arr = np.arange(12)
print ('Our array:')
print (arr)
print ('Create slices:')
a=arr[3:]
b=arr[3:]
a[1]=123
b[2]=234
print(arr)
print(id(a),id(b),id(arr[3:]))
```


## Copies or Deep Copy


ndarray.copy() creates a copy. Modifications to the copy do not affect the original data; they do not share memory.


```python
import numpy as np

a = np.array([[10,10],  [2,3],  [4,5]])
print ('Array a:')
print (a)
print ('Create a deep copy of a:')
b = a.copy()
print ('Array b:')
print (b)
# b and a do not share any content
print ('Can we write to b to write to a?')
print (b is a)
print ('Modify b:')
b[0,0]  =  100
print ('Modified array b:')
print (b)
print ('a remains unchanged:')
print (a)
```


# Numpy Matrix Library


NumPy includes a matrix library numpy.matlib; the functions in this module return a matrix rather than an ndarray.

A matrix is a rectangular array of elements arranged in rows and columns.

Matrix elements can be numbers, symbols, or mathematical expressions.


## Transpose Matrix


NumPy not only supports the numpy.transpose function to swap the array’s axes, but also supports the T attribute.

For example, for a matrix with m rows and n columns, using the T attribute converts it to an n-by-m matrix.


![matrixTranspose.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/matrixTranspose.png)


```python
import numpy as np

a = np.arange(12).reshape(3,4)

print ('Original array:')
print (a)
print ('\\n')

print ('Transposed array:')
print (a.T)
```


## matlib.empty()


matlib.empty() function returns a new matrix, with the syntax:

```python
numpy.matlib.empty(shape, dtype, order)

# Parameter explanations:
#     shape: integer or tuple of integers defining the new matrix shape
#     Dtype: optional, data type
#     order: C (row-major) or F (column-major)

import numpy.matlib
import numpy as np

print (np.matlib.empty((2,2)))
# Fill with random data
```


## numpy.matlib.zeros()


numpy.matlib.zeros() function creates a matrix filled with zeros.


```python
import numpy as np

print (np.matlib.zeros((2,2)))
```


## numpy.matlib.ones()


numpy.matlib.ones() function creates a matrix filled with ones.


```python
import numpy.matlib
import numpy as np

print (np.matlib.ones((2,2)))
```


## numpy.matlib.eye()


numpy.matlib.eye() function returns a matrix with 1s on the diagonal and zeros elsewhere.


```python
numpy.matlib.eye(n, M,k, dtype)

# Parameter explanations:
#     n: number of rows to return
#     M: number of columns to return, default is n
#     k: index of the diagonal
#     dtype: data type

import numpy.matlib
import numpy as np

print (np.matlib.eye(n =  3, M =  4, k =  0, dtype =  float))
```


## numpy.matlib.identity()


numpy.matlib.identity() function returns the identity matrix of a given size.

The identity matrix is a square matrix with 1s on the main diagonal from the top-left to the bottom-right, and 0s elsewhere.

```python
import numpy.matlib
import numpy as np

# Size 5, type is floating point
print (np.matlib.identity(5, dtype =  float))
```


## numpy.matlib.rand()


numpy.matlib.rand() function creates a matrix of a given size with random data.


```python
import numpy.matlib
import numpy as np

print (np.matlib.rand(3,3))

# Matrices are always two-dimensional, while ndarray is an n-dimensional array. Both objects are interchangeable.
import numpy.matlib
import numpy as np

i = np.matrix('1,2;3,4')
print (i)

j = np.asarray(i)
print (j)

k = np.asmatrix (j)
print (k)
```


# Numpy Linear Algebra


NumPy provides a linear algebra function library linalg, which includes all the functionality needed for linear algebra. See the description below:

| Function          | Description                                                | Function                        |
| ----------- | ------------------------------------------------- | ------------------------- |
| dot         | The dot product of two arrays, i.e., element-wise multiplication. | numpy.dot(a, b, out=None) |
| vdot        | The dot product of two vectors. If the first argument is complex, its conjugate is used. If the argument is multi-dimensional, it will be flattened | numpy.vdot(a, b)          |
| inner       | Returns the vector inner product of 1-D arrays. For higher dimensions, it returns the sum of the products over the last axis | numpy.vdot(a, b)          |
| matmul      | The matrix product of two arrays | numpy.inner(a, b)         |
| determinant | The determinant of an array | numpy.det(a, b)           |
| solve       | Solve a linear matrix equation | numpy.solve(a, b)         |
| inv         | Calculate the inverse of a matrix | numpy.inv(a)              |

- matmul

    numpy.matmul function returns the matrix product of two arrays. While it returns the normal product for 2-D arrays, if either argument has dimension greater than 2, it is treated as a stack of matrices residing in the last two indices and broadcast accordingly.

    On the other hand, if either argument is a 1-D array, it is promoted to a matrix by prepending a 1 to its shape and is removed after the multiplication.

    For 2-D arrays, it is the matrix product:

    ```python
    import numpy.matlib
    import numpy as np
    
    a = [[1,0],[0,1]]
    b = [[4,1],[2,2]]
    print (np.matmul(a,b))
    
    # 2-D and 1-D operations
    a = [[1,0],[0,1]]
    b = [1,2]
    print (np.matmul(a,b))
    print (np.matmul(b,a))
    
    # Arrays with dimension greater than 2
    a = np.arange(8).reshape(2,2,2)
    b = np.arange(4).reshape(2,2)
    print (np.matmul(a,b))
    ```


# NumPy IO


NumPy can read and write text data or binary data on disk.

NumPy introduces a simple file format for ndarray objects: npy.

.npy files are used to store the data, shape, dtype and other information needed to reconstruct the ndarray.

Common IO functions include:

- load() and save() are the two main functions for reading and writing array data; by default, arrays are stored in an uncompressed raw binary format in files with the .npy extension.
- savez() is used to write multiple arrays to a file; by default, arrays are stored in an uncompressed raw binary format in files with the .npz extension.
- loadtxt() and savetxt() handle ordinary text files (.txt, etc.)

---

- numpy.save()

    numpy.save() function saves an array to a file with a .npy extension.

    `numpy.save(file, arr, allow_pickle=True, fix_imports=True)`

- np.savez

    numpy.savez() function saves multiple arrays to a file with a .npz extension.

    `numpy.savez(file, *args, **kwds)`

- savetxt()

    savetxt() function stores data in a simple text file format; to retrieve the data, use loadtxt().

    `np.loadtxt(FILENAME, dtype=int, delimiter=' ')np.savetxt(FILENAME, a, fmt="%d", delimiter=",")`

    The delimiter parameter can specify various delimiters, per-column converters, the number of lines to skip, and so on.


# Numpy + Matplotlib


Matplotlib is Python's plotting library. It can be used with NumPy, providing an effective open-source MATLAB-like alternative. It can also be used with GUI toolkits like PyQt and wxPython.

pip3 installation:

```shell
pip3 install matplotlib

# Installation verification
pip3 list | grep matplotlib
```


Usage:

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


## Using Chinese

Matplotlib does not support Chinese by default, and we can resolve this with the following simple method.

1. Download Source Han Sans
2. Put the downloaded OTF font into the code directory
3. `matplotlib.font_manager.FontProperties(fname="SourceHanSansSC-Bold.otf")` fname specifies the font path

```python
import numpy as np
from matplotlib import pyplot as plt
import matplotlib

# fname is the path to your downloaded font library; note SourceHanSansSC-Bold.otf path
zhfont1 = matplotlib.font_manager.FontProperties(fname="SourceHanSansSC-Bold.otf")

x = np.arange(1,11)
y =  2  * x +  5
plt.title("菜鸟教程 - 测试", fontproperties=zhfont1)

# fontproperties sets Chinese display, fontsize sets font size
plt.xlabel("x 轴", fontproperties=zhfont1)
plt.ylabel("y 轴", fontproperties=zhfont1)
plt.plot(x,y)
plt.show()
```
