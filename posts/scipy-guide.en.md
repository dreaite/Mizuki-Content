---
title: 'scipy基础使用学习'
published: 2024-01-09
updated: 2024-01-09
description: 'SciPy是基于NumPy的开源Python库，广泛应用于数学、科学和工程领域，提供优化、线性代数、积分、插值等功能。安装方法包括使用pip命令，且可通过模块如scipy.optimize和scipy.sparse处理优化和稀疏矩阵。SciPy还支持图结构和空间数据处理，提供多种距离计算方法，并能与Matlab交互，执行显著性检验和统计分析。'
permalink: 'scipy-guide.en'
image: 'https://r2.dreaife.tokyo/notion/covers/4237f3b649a54c4bb8893843403dc454/GCrU-yHbUAAfcqw.jpg'
tags: ['python']
category: 'cs-base'
draft: false
lang: 'en'
---

# Scipy

## Introduction

SciPy is an open-source Python library for mathematics and scientific computing.

SciPy is a scientific computing library built on NumPy, used in mathematics, science, engineering, and other fields where many advanced abstractions and physical models require SciPy.

SciPy includes modules for optimization, linear algebra, integration, interpolation, special functions, fast Fourier transforms, signal processing and image processing, solving ordinary differential equations, and other computations commonly used in science and engineering.

## Applications

SciPy is a widely used package for mathematics, science, and engineering, capable of handling optimization, linear algebra, integration, interpolation, fitting, special functions, fast Fourier transforms, signal processing, image processing, solvers for ordinary differential equations, and more.

SciPy includes modules for optimization, linear algebra, integration, interpolation, special functions, fast Fourier transforms, signal processing and image processing, solving ordinary differential equations, and other computations common in science and engineering.

The synergy between NumPy and SciPy enables efficient solutions to many problems, with broad applications in astronomy, biology, meteorology and climate science, as well as materials science and other disciplines.

## Installation

```shell
python3 -m pip install -U pip
python3 -m pip install -U scipy
```

Verify the installation:

```python
import scipy

print(scipy.__version__)
```

## Module List

The following lists some commonly used SciPy modules and their official API URLs:

| Module name           | Function / Description        | Reference documentation                                                                             |
| --------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------- |
| scipy.cluster         | Vector quantization          | [cluster API](https://docs.scipy.org/doc/scipy/reference/cluster.html)           |
| scipy.constants       | Mathematical constants      | [constants API](https://docs.scipy.org/doc/scipy/reference/constants.html)       |
| scipy.fft             | Fast Fourier Transform       | [fft API](https://docs.scipy.org/doc/scipy/reference/fft.html)                   |
| scipy.integrate       | Integration                 | [integrate API](https://docs.scipy.org/doc/scipy/reference/integrate.html)       |
| scipy.interpolate     | Interpolation               | [interpolate API](https://docs.scipy.org/doc/scipy/reference/interpolate.html)   |
| scipy.io              | Data input/output            | [io API](https://docs.scipy.org/doc/scipy/reference/io.html)                     |
| scipy.linalg          | Linear algebra              | [linalg API](https://docs.scipy.org/doc/scipy/reference/linalg.html)             |
| scipy.misc            | Image processing            | [misc API](https://docs.scipy.org/doc/scipy/reference/misc.html)                 |
| scipy.ndimage         | N-dimensional image         | [ndimage API](https://docs.scipy.org/doc/scipy/reference/ndimage.html)           |
| scipy.odr             | Orthogonal distance regression | [odr API](https://docs.scipy.org/doc/scipy/reference/odr.html)                   |
| scipy.optimize        | Optimization algorithms     | [optimize API](https://docs.scipy.org/doc/scipy/reference/optimize.html)         |
| scipy.signal          | Signal processing           | [signal API](https://docs.scipy.org/doc/scipy/reference/signal.html)             |
| scipy.sparse          | Sparse matrices             | [sparse API](https://docs.scipy.org/doc/scipy/reference/sparse.html)             |
| scipy.spatial         | Spatial data structures and algorithms | [spatial API](https://docs.scipy.org/doc/scipy/reference/spatial.html)           |
| scipy.special         | Special mathematical functions | [special API](https://docs.scipy.org/doc/scipy/reference/special.html)           |
| scipy.stats           | Statistical functions       | [stats.mstats API](https://docs.scipy.org/doc/scipy/reference/stats.mstats.html) |

For more module content, see the official documentation: https://docs.scipy.org/doc/scipy/reference/

# SciPy Constants Module

SciPy's constants module, constants, provides many built-in mathematical constants.

Pi is a mathematical constant—the ratio of a circle's circumference to its diameter, approximately 3.14159, commonly denoted by the symbol π.

The following prints pi:

```python
from scipy import constants

print(constants.pi)
```

The following prints the golden ratio:

```python
from scipy import constants

print(constants.golden)
```

We can use the dir() function to see which constants are contained in the constants module:

```python
from scipy import constants

print(dir(constants))
```

## Unit Types

The constants module contains the following kinds of units:

- SI prefixes
  The International System of Units prefixes (SI prefixes) denote multiples and submultiples of units; there are currently 20 prefixes, most of which are powers of ten. (centi equals 0.01):

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

- Binary, in bytes
  Returns byte units (kibi = 1024).

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

- Mass units
  Returns kilograms (kg). (gram returns 0.001).

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

- Angle conversions
  Returns radians (degree returns 0.017453292519943295).

    ```python
    from scipy import constants
    
    print(constants.degree)     #0.017453292519943295
    print(constants.arcmin)     #0.0002908882086657216
    print(constants.arcminute)  #0.0002908882086657216
    print(constants.arcsec)     #4.84813681109536e-06
    print(constants.arcsecond)  #4.84813681109536e-06
    ```

- Time units
  Returns seconds (hour returns 3600.0).

    ```python
    from scipy import constants
    
    print(constants.minute)      #60.0
    print(constants.hour)        #3600.0
    print(constants.day)         #86400.0
    print(constants.week)        #604800.0
    print(constants.year)        #31536000.0
    print(constants.Julian_year) #31557600.0
    ```

- Length units
  Returns meters (nautical_mile returns 1852.0).

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

- Pressure units
  Returns pascals, the SI unit of pressure. (psi returns 6894.757293168361).

    ```python
    from scipy import constants
    
    print(constants.atm)         #101325.0
    print(constants.atmosphere)  #101325.0
    print(constants.bar)         #100000.0
    print(constants.torr)        #133.32236842105263
    print(constants.mmHg)        #133.32236842105263
    print(constants.psi)         #6894.757293168361
    ```

- Area units
  Returns square meters, the metric unit of area; defined as the area of a square with side length 1 meter. (hectare returns 10000.0).

    ```python
    from scipy import constants
    
    print(constants.hectare) #10000.0
    print(constants.acre)    #4046.8564223999992
    ```

- Volume units

  Returns cubic meters; a volume of one cubic meter is the volume of a cube with sides of 1 meter; equal to 1 liter and 1 cubic decimeter, and equal to 1,000,000 cubic centimeters. (liter returns 0.001).

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

- Speed units
  Returns meters per second. (speed_of_sound returns 340.5).

    ```python
    from scipy import constants
    
    print(constants.kmh)            #0.2777777777777778
    print(constants.mph)            #0.44703999999999994
    print(constants.mach)           #340.5
    print(constants.speed_of_sound) #340.5
    print(constants.knot)           #0.5144444444444445
    ```

- Temperature units
  Returns kelvin. (zero_Celsius returns 273.15).

    ```python
    from scipy import constants
    
    print(constants.zero_Celsius)      #273.15
    print(constants.degree_Fahrenheit) #0.5555555555555556
    ```

- Energy units
  Returns joules; the joule (symbol J) is the SI derived unit of energy, work, or heat. (calorie returns 4.184).

    ```python
    from scipy import constants
    
    print(constants.calorie)      #4.184
    ```

- Power units
  Returns watts; the watt (symbol W) is the SI unit of power. One watt is defined as one joule per second (1 J/s), i.e., the rate of energy conversion, use, or dissipation. (horsepower returns 745.6998715822701).

    ```python
    from scipy import constants
    
    print(constants.hp)         #745.6998715822701
    print(constants.horsepower) #745.6998715822701
    ```

- Dynamical (mechanical) units
  Returns newtons; the newton (symbol N) is the SI unit of force. It is named after Isaac Newton, the founder of classical mechanics. (kilogram_force returns 9.80665).

    ```python
    from scipy import constants
    
    print(constants.dyn)             #1e-05
    print(constants.dyne)            #1e-05
    print(constants.lbf)             #4.4482216152605
    print(constants.pound_force)     #4.4482216152605
    print(constants.kgf)             #9.80665
    print(constants.kilogram_force)  #9.80665
    ```

# SciPy Optimizers

SciPy's optimize module provides implementations of common optimization algorithms that we can call directly to solve optimization problems, such as finding the minimum of a function or the roots of equations.

## Root Finding

NumPy can find roots of polynomials and linear equations, but it cannot find roots of nonlinear equations, as shown below:

x + cos(x)

Therefore we can use SciPy's optimize.root function, which requires two parameters:

- fun - the function representing the equation.
- x0 - initial guess for the root.

The function returns an object containing information about the solution.

```python
from scipy.optimize import root
from math import cos

def eqn(x):
  return x + cos(x)

myroot = root(eqn, 0)

print(myroot.x)
# See more information
#print(myroot)
```

## Minimizing Functions

A function represents a curve with maxima and minima.

- A high point is called a maximum.
- A low point is called a minimum.
- The highest point on the entire curve is the global maximum; the rest are local maxima.
- The lowest point on the entire curve is the global minimum; the rest are local minima.

You can use the scipy.optimize.minimize() function to minimize a function.

minimize() accepts the following parameters:

- fun - the function to optimize
- x0 - initial guess
- method - the name of the method to use; values can be: 'CG', 'BFGS', 'Newton-CG', 'L-BFGS-B', 'TNC', 'COBYLA', 'SLSQP'.
- callback - the function called after each optimization iteration.
- options - dictionary for other parameters:

    ```yaml
    {
         "disp": boolean - print detailed description
         "gtol": number - the tolerance of the error
    }
    ```


The minimization of x^2 + x + 2 using BFGS:

```python
from scipy.optimize import minimize

def eqn(x):
  return x**2 + x + 2

mymin = minimize(eqn, 0, method='BFGS')

print(mymin)
```

# SciPy Sparse Matrices

A sparse matrix is a matrix in which the vast majority of the elements are zero. Conversely, if most elements are nonzero, the matrix is dense.

In science and engineering, large sparse matrices frequently arise when solving linear models.

![image.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image.png)

The above sparse matrix contains only 9 nonzero elements, with 26 zeros. Its sparsity is 74%, density 26%.

SciPy's scipy.sparse module provides functions for working with sparse matrices.

We primarily use the following two types of sparse matrices:

- CSC - Compressed Sparse Column, compressed by column.
- CSR - Compressed Sparse Row, compressed by row.

In this chapter we primarily use CSR matrices.

## CSR Matrix

We can create a CSR matrix by passing an array to the scipy.sparse.csr_matrix() function.

```python
# Create a CSR matrix.
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([0, 0, 0, 0, 0, 1, 1, 0, 2])
print(csr_matrix(arr))
```

- data
Use the data attribute to view the stored data (excluding zero elements):

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

print(csr_matrix(arr).data)
```

- count_nonzero()
Use count_nonzero() to count the total number of non-zero elements:

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

print(csr_matrix(arr).count_nonzero())
```

- eliminate_zeros()
Use eliminate_zeros() to remove zero elements from the matrix:

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

mat = csr_matrix(arr)
mat.eliminate_zeros()

print(mat)
```

- sum_duplicates()
Use sum_duplicates() to remove duplicates:

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

mat = csr_matrix(arr)
mat.sum_duplicates()

print(mat)
```

- tocsc()
Convert CSR to CSC using tocsc():

```python
import numpy as np
from scipy.sparse import csr_matrix

arr = np.array([[0, 0, 0], [0, 0, 1], [1, 0, 2]])

newarr = csr_matrix(arr).tocsc()

print(newarr)
```

# SciPy Graph Structures

Graphs are one of the most powerful frameworks in algorithmic theory.

A graph is a set of nodes (vertices) and edges representing relationships; nodes correspond to objects and edges connect them.

SciPy provides the scipy.sparse.csgraph module to handle graph structures.

## Adjacency Matrix

An Adjacency Matrix is a matrix representing the adjacency relationships between vertices.

The adjacency matrix structure consists of two sets: V (vertices) and E (edges); edges may have weights indicating the strength of connections between nodes.

![image-1.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-1.png)

The above sparse matrix contains only 9 nonzero elements, with 26 zeros. Its sparsity is 74%, density 26%.

We can store all vertex data in a 1D array and the relationships between vertices (edges or arcs) in a 2D array; this 2D array is called the adjacency matrix.

Adjacency matrices can distinguish between directed and undirected graphs.

An undirected graph is a bidirectional relationship; edges have no direction:

A directed graph’s edges have direction and represent a one-way relationship:

### Connected Components

View all connected components using connected_components().

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

### Dijkstra -- Shortest Path Algorithm

Dijkstra’s algorithm computes the shortest paths from one node to all others.

SciPy uses the dijkstra() function to compute the shortest paths from one element to the others.
The dijkstra() function can be configured with the following parameters:

- return_predecessors: Boolean, set to True to traverse all paths; if you do not want to traverse all paths, set to False.
- indices: Indices of the elements; returns all paths to that element.
- limit: The maximum weight of a path.

```python
# Find the shortest path from element 1 to 2:
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

### Floyd Warshall -- Floyd-Warshall Algorithm

The Floyd-Warshall algorithm solves the all-pairs shortest path problem.

SciPy uses floyd_warshall() to find the shortest paths between all pairs of elements.

```python
# Find the shortest paths between all pairs:
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

### Bellman Ford -- Bellman-Ford Algorithm

The Bellman-Ford algorithm solves the all-pairs shortest path problem.

SciPy uses bellman_ford() to find the shortest paths between all pairs of nodes; it can be used on any graph, including directed graphs and graphs with negative edge weights.

```python
# Find the shortest path from element 1 to element 2 on a graph with negative weights:
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

### Depth-First Order

depth_first_order() returns the depth-first traversal order from a node.

It accepts the following parameters:

- Graph
- The starting element for traversal

```python
# Given an adjacency matrix, return the depth-first traversal order:
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


### Breadth-First Order

breadth_first_order() returns the breadth-first traversal order from a node.

It accepts the following parameters:

- Graph
- The starting element for traversal

```python
# Given an adjacency matrix, return the breadth-first traversal order:
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

# SciPy Spatial Data

Spatial data, also known as geometric data, is used to represent information about the position, shape, size, and distribution of objects, such as points in coordinates.

SciPy handles spatial data via the scipy.spatial module, for example, determining whether a point lies within a boundary, computing the nearest point around a given point, and finding all points within a given distance.

## Triangulation

Triangulation in trigonometry and geometry is a method of measuring the distance to a target by using the angles at known endpoints of fixed reference lines.

Polygon triangulation divides a polygon into multiple triangles; we can use these triangles to compute the polygon's area.

Topology tells us that every surface admits a triangulation.

Suppose a triangulation of a surface exists; let p be the total number of vertices (identical vertices counted once), a the number of edges, and n the number of triangles; then e = p - a + n is a topological invariant of the surface. In other words, regardless of the particular triangulation, e yields the same value. e is called the Euler characteristic.

Delaunay() triangulation is used for triangulating a set of points.

```python
# Create triangles from given points:
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

simplices = Delaunay(points).simplices    # indices of vertices of triangles

plt.triplot(points[:, 0], points[:, 1], simplices)
plt.scatter(points[:, 0], points[:, 1], color='r')

plt.show()
```

## Convex Hull

A convex hull is a concept in computational geometry.

In a real vector space V, given a set X, the intersection of all convex sets containing X is called the convex hull of X. The convex hull of X can be constructed by convex combinations of all points in X (X1, ... Xn).

We can create a convex hull using the ConvexHull() method.

```python
# Create a convex hull from given points:
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

## KD-Tree

A kd-tree (short for k-dimensional tree) is a tree data structure used for storing points in a k-dimensional space to enable fast retrieval. It is commonly used for searching high-dimensional data (e.g., range searches and nearest-neighbor searches).

KDTree() returns a KDTree object.

The query() method returns the nearest distance and the nearest location.

```python
# Nearest distance to (1,1):
from scipy.spatial import KDTree

points = [(1, -1), (2, 3), (-2, 3), (2, -3)]

kdtree = KDTree(points)

res = kdtree.query((1, 1))

print(res)
```

## Distance Matrix

In mathematics, a distance matrix is a matrix whose elements are the distances between points (a two-dimensional array). Given N points in Euclidean space, the distance matrix is an N×N symmetric matrix with non-negative real entries, conceptually similar to an adjacency matrix, but the latter only indicates whether there is a connection between points and does not contain information about the actual distances between points. Therefore, a distance matrix can be viewed as a weighted form of an adjacency matrix.

For example, we analyze the following 2D points a to f. Here, we use the Euclidean distances between points as the distance measure.

## Euclidean Distance

In mathematics, the Euclidean distance or Euclidean metric is the standard (straight-line) distance between two points in Euclidean space. Using this distance makes Euclidean space a metric space. The associated norm is called the Euclidean norm. Earlier literature called it the Pythagorean distance.

Euclidean distance (euclidean metric) is a commonly used distance definition, referring to the true distance between two points in an m-dimensional space, or the natural length of a vector (i.e., the distance from the origin). In 2D and 3D space, the Euclidean distance is simply the actual distance between two points.

```python
from scipy.spatial.distance import euclidean

p1 = (1, 0)
p2 = (10, 2)

res = euclidean(p1, p2)

print(res)
```

## Manhattan Distance

The Manhattan distance, coined by Hermann Minkowski in the 19th century, is a term in geometry used in metric spaces to denote the sum of the absolute distances along each axis between two points in a standard coordinate system.

Manhattan distance can only move in the four cardinal directions (up, down, left, right); the distance between two points using Manhattan distance is the shortest path under those constraints.

Manhattan and Euclidean distances: the red, blue, and yellow lines all have the same length (12) for Manhattan distance, while the green line shows the Euclidean distance is 6×√2 ≈ 8.48.

![image-2.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-2.png)

## Cosine Distance

Cosine distance, also known as cosine similarity, measures how similar two vectors are by the cosine of the angle between them.

0 degrees has a cosine value of 1; for any other angle, the cosine value is not greater than 1 and minimum is -1.

```python
# Compute the cosine distance between A and B:
from scipy.spatial.distance import cosine

p1 = (1, 0)
p2 = (10, 2)

res = cosine(p1, p2)

print(res)
```

## Hamming Distance

In information theory, the Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words, it counts the number of substitutions required to transform one string into another.

Hamming weight is the Hamming distance of a string relative to a zero string of the same length; that is, the number of nonzero elements in the string: for binary strings, the number of 1s, so the Hamming weight of 11101 is 4.

- The Hamming distance between 1011101 and 1001001 is 2.
- The Hamming distance between 2143896 and 2233796 is 3.
- The Hamming distance between "toned" and "roses" is 3.

```python
# Compute the Hamming distance between two points:
from scipy.spatial.distance import hamming

p1 = (True, False, True)
p2 = (False, True, True)

res = hamming(p1, p2)

print(res)
```

# SciPy MATLAB Arrays

NumPy provides a Python-readable format for saving data.

SciPy provides MATLAB interoperability.

SciPy's scipy.io module provides many functions to work with MATLAB arrays.

## Export data to MATLAB format

The savemat() method can export data in MATLAB format.
The method has these parameters:

- filename - the name of the file to save the data.
- mdict - dictionary containing the data.
- do_compression - boolean indicating whether to compress the resulting data. Default is False.

```python
# Export the array as a variable "vec" to a mat file:
from scipy import io
import numpy as np

arr = np.arange(10)

io.savemat('arr.mat', {"vec": arr})
```

> Note: The above code will save a file named "arr.mat" on your computer.

## Import MATLAB format data

The loadmat() method can import MATLAB format data.

This method has the following parameters:

- filename - the file name to load.

Return a structured array whose keys are variable names and whose values are the corresponding variable values.

```python
# Import from a mat file:
from scipy import io
import numpy as np

arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9,])

# Export
io.savemat('arr.mat', {"vec": arr})

# Import
mydata = io.loadmat('arr.mat')

print(mydata)

# Display only the MATLAB array with the variable name "vec":
print(mydata['vec'])
```

From the result, you can see the array was originally one-dimensional, but when extracted it gains an extra dimension and becomes a two-dimensional array.

To resolve this, you can pass an extra parameter squeeze_me=True:

```python
from scipy import io
import numpy as np

arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9,])

# Export
io.savemat('arr.mat', {"vec": arr})

# Import
mydata = io.loadmat('arr.mat', squeeze_me=True)

print(mydata['vec'])
```

# SciPy Interpolation

## What is interpolation?

In numerical analysis, interpolation is a method or process for estimating new data points within the range of a discrete set of known data points.

In simple terms, interpolation is a method for generating points between given points.

For example, for two points 1 and 2, we can interpolate to obtain points 1.33 and 1.66.

Interpolation has many applications; in machine learning, we often deal with missing data, and interpolation can be used to fill in these values.

This filling approach is called imputation.

Besides imputation, interpolation is frequently used wherever we need to smooth discrete points in a data set.

## How to implement interpolation in SciPy?

SciPy provides the scipy.interpolate module to handle interpolation.

## One-dimensional interpolation

Interpolation for one-dimensional data can be performed with the interp1d() method.

The method takes two inputs, x and y.

The return value is a callable function that you can call with new x values to obtain the corresponding y, i.e., y = f(x).

```python
# Interpolate given xs and ys from 2.1, 2.2... to 2.9:
from scipy.interpolate import interp1d
import numpy as np

xs = np.arange(10)
ys = 2*xs + 1

interp_func = interp1d(xs, ys)

newarr = interp_func(np.arange(2.1, 3, 0.1))

print(newarr)
```

## Univariate Interpolation

In one-dimensional interpolation, the points are fitted to a single curve, whereas in spline interpolation, the points are fitted to functions defined by piecewise polynomials.

Univariate interpolation uses the UnivariateSpline() function, which takes xs and ys and returns a callable function that can be called with new xs.

A piecewise function is a function that has different analytic expressions over different ranges of the independent variable x.

```python
# Find the univariate spline interpolation for nonlinear points at 2.1, 2.2...2.9:
from scipy.interpolate import UnivariateSpline
import numpy as np

xs = np.arange(10)
ys = xs**2 + np.sin(xs) + 1

interp_func = UnivariateSpline(xs, ys)

newarr = interp_func(np.arange(2.1, 3, 0.1))

print(newarr)
```

## Radial Basis Function Interpolation

Radial basis functions are functions defined with respect to fixed reference points.

In surface interpolation we typically use radial basis function interpolation.

```python
# The Rbf() function accepts xs and ys as arguments and returns a callable function
from scipy.interpolate import Rbf
import numpy as np

xs = np.arange(10)
ys = xs**2 + np.sin(xs) + 1

interp_func = Rbf(xs, ys)

newarr = interp_func(np.arange(2.1, 3, 0.1))

print(newarr)
```

# SciPy Significance Testing

A significance test is a hypothesis test conducted by making an a priori assumption about the population (random variable) or its distribution, and then using sample information to determine whether this assumption (the alternative hypothesis) is reasonable; i.e., whether the true population deviates significantly from the null hypothesis. In other words, a significance test asks whether the difference between the sample and our assumption about the population is due to random variation or a real discrepancy between the assumption and the population.

Significance testing is used to determine whether there is a difference between experimental and control groups, or between two different treatments, and whether that difference is statistically significant.

SciPy provides the scipy.stats module to perform SciPy significance testing.

## Statistical Hypotheses

A statistical hypothesis concerns the unknown distribution of one or more random variables. A statistical hypothesis that concerns only one or a few unknown parameters within a known distribution is called a parameter hypothesis. The process of testing a statistical hypothesis is called hypothesis testing; testing a parameter hypothesis is called a parameter test.

## Null Hypothesis

The null hypothesis, a term in statistics, also called the original hypothesis, is the hypothesis that is stated before performing a statistical test. When the null hypothesis is true, the test statistic should follow a known probability distribution.

When the computed statistic falls into the rejection region, a rare event has occurred, and the null hypothesis should be rejected.

A hypothesis to be tested is usually denoted as H0 (the null hypothesis), while the alternative hypothesis is denoted as H1 (the alternative hypothesis).

- When the null hypothesis is true, deciding to reject it constitutes a Type I error; its probability is usually denoted α.
- When the null hypothesis is false, deciding not to reject it constitutes a Type II error; its probability is usually denoted β.
- α + β does not necessarily equal 1.

Typically, only the maximum probability of making a Type I error, α, is constrained; β is not considered. This kind of hypothesis testing is called significance testing, and α is the significance level.

Common α values are 0.01, 0.05, 0.10, etc. In general, depending on the research question, if the cost of making a wrong decision is high, you choose a smaller α to reduce such errors; otherwise, you may choose a larger α.

## Alternative Hypothesis

The alternative hypothesis is one of the fundamental concepts in statistics; it includes any proposition about the population distribution that would render the null hypothesis invalid. It is also called the opposite hypothesis or alternative hypothesis.

The alternative hypothesis can replace the null hypothesis.

For example, in evaluating students, we might adopt:

- "Students are below average" — as the null hypothesis
- "Students are above average" — as the alternative hypothesis.

## One-Sided Test

One-sided test, also known as one-tailed or one-sided test, in hypothesis testing, uses the area of the tail on one side of the density curve to construct the critical region for testing.

When our hypothesis tests only one side of the value, it is called a one-tailed test.

Example:

For the null hypothesis:

"Mean equals k"

We can have alternative hypotheses:

- "Mean less than k"
- "Mean greater than k"

## Two-Sided Test

Two-sided test, also known as two-tailed or two-sided test, in hypothesis testing, uses the areas in both tails of the distribution to construct the critical region.

When our test concerns both sides of the mean:

Example:

For the null hypothesis:

"Mean equals k"

We can have alternative hypotheses:

"Mean not equal to k"

In this case, both sides (less than or greater than k) are checked.

## Alpha Value

The alpha value is the significance level.

The significance level is the probability of committing an error when the population parameter falls within a certain interval, denoted by α.

Data must be sufficiently close to the extremes to reject the null hypothesis.

Usually 0.01, 0.05, or 0.1.

## P-value

The P-value indicates how extreme the observed data are.

Compare the P-value with alpha to determine statistical significance.

If the p value <= alpha, we reject the null hypothesis and say the data are statistically significant; otherwise, we fail to reject the null.

## T Test

The T-test is used to determine whether there is a significant difference between the means of two variables and whether they come from the same distribution.

This is a two-sided test.

The function ttest_ind() takes two samples of the same size and returns a tuple of the t-statistic and p-value.

```python
# Find whether values v1 and v2 come from the same distribution:
import numpy as np
from scipy.stats import ttest_ind

v1 = np.random.normal(size=100)
v2 = np.random.normal(size=100)

res = ttest_ind(v1, v2)

print(res)

# If you only want the p-value
res = ttest_ind(v1, v2).pvalue
print(res)
```

## KS Test

The KS test checks whether a given value conforms to a distribution.

The function takes two arguments: the test values and the CDF.

CDF stands for Cumulative Distribution Function, also called the distribution function.

CDF can be a string or a callable function that returns probabilities.

It can be used for one-sided or two-sided tests.

By default, it is a two-sided test. We can pass a string for the alternative as one of two-sided, less, or greater.

```python
# Check whether a given value conforms to a normal distribution:
import numpy as np
from scipy.stats import kstest

v = np.random.normal(size=100)

res = kstest(v, 'norm')

print(res)
```

## Descriptive Statistics

Using describe() you can view information about an array, including:

- nobs -- number of observations
- minmax -- minimum and maximum
- mean -- arithmetic mean
- variance -- variance
- skewness -- skewness
- kurtosis -- kurtosis

```python
# Display descriptive statistics for an array:
import numpy as np
from scipy.stats import describe

v = np.random.normal(size=100)
res = describe(v)

print(res)
```

## Normality Test (Skewness and Kurtosis)

A normality test assesses whether observed data come from a normal distribution; it is an important special case of a goodness-of-fit test in statistics.

Normality tests are based on skewness and kurtosis.

The normaltest() function returns the p-value for the null hypothesis:

"x comes from a normal distribution"

### Skewness

A measure of the symmetry of the data.

For a normal distribution, it is 0.

If negative, the data are skewed to the left.

If positive, the data are skewed to the right.

### Kurtosis

A measure of whether the data are heavy-tailed or light-tailed relative to a normal distribution.

Positive kurtosis means heavy tails.

Negative kurtosis means light tails.

```python
# Find the skewness and kurtosis of values in an array:
import numpy as np
from scipy.stats import skew, kurtosis
from scipy.stats import normaltest

v = np.random.normal(size=100)

print(skew(v))
print(kurtosis(v))

# Check whether the data come from a normal distribution:
print(normaltest(v))
```
