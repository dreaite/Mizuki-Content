---
title: '高精度 学习记录'
published: 2022-07-08
updated: 2022-07-08
description: '高精度运算包括加法、减法、乘法和除法，适用于处理超出常规数据类型范围的大数。加法和减法通过模拟手动计算实现，乘法和除法则依次处理每位数字，注意前导零的去除。提供了相关的例题和参考代码以帮助理解和实现这些运算。'
permalink: 'high-precision-calcs'
image: 'https://r2.dreaife.tokyo/notion/covers/d815ba777b54406bbf59e6a4bf6fd14a/2421860-20220712031131300-1134503314.png'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
lang: 'en'
---

# High-precision

Normally we implement addition, subtraction, multiplication, and division directly using `+-*/`, but when the numbers grow to lengths of 100 or 1000, the storage range of `int` and `long long` is no longer sufficient; at this point it is time to use high-precision.

## 1. High-precision addition A+B

### 1.1 How it works

First is addition between large numbers, which can be simulated by following the normal steps of addition. For example, see the figure below:

![EZr2Gb4qHlkJixe.png](https://s2.loli.net/2022/07/12/EZr2Gb4qHlkJixe.png)

You can see that addition is performed from right to left, so we can `reverse` the obtained digits to invert their order, and after computation output in forward order.

### 1.2 Examples

- [AcWing 791. High-Precision Addition](https://www.acwing.com/problem/content/793/)

Reference code：

```c++
void solve(){
	//...
	for(int i=0,c=0;i<max(a.length(),b.length()) || c;i++){
        int t1=0,t2=0;
        if(i<a.length()) t1 = a[i]-'0';
        if(i<b.length()) t2 = b[i]-'0';
        int t = t1 + t2 + c;
        c = t / 10;t %= 10;
        ans.push_back(t+'0');
    }
    //...
}
```


## 2. High-precision subtraction A-B

### 2.1 How it works

Next is subtraction between large numbers. The method is still similar to high-precision addition; the difference is that due to the relative sizes of A and B, the result may be negative. In that case we can write `A-B = -(B-A)` to keep the subtraction result non-negative.

**P.S. Note that because this is subtraction, leading zeros may appear; remember to remove them before output.**

### 2.2 Examples

- [AcWing 792. High-precision Subtraction](https://www.acwing.com/problem/content/794/)

Reference code：

```c++
bool comp(){
    if(a.length()!=b.length()) return a.length()>b.length();
    for(int i=a.length()-1;~i;i--)
        if(a[i]!=b[i]) return a[i]>b[i];
    return true;
}
void solve(){
    //...
    if(!comp()) p = 1,swap(a,b);
    for(int i=0,c=0;i<a.length();i++){
        int t1=0,t2=0;
        if(i<a.length()) t1 = a[i]-'0';
        if(i<b.length()) t2 = b[i]-'0';
        int t = t1 - t2 + c;
        if(t < 0) c=-1,t+=10;
        else c = 0;
        ans.push_back(t+'0');
    }reverse(ans.begin(),ans.end());
    if(p) cout<<"-";p=-1;
    while(++p<ans.length() && ans[p]=='0');
    ans = ans.substr(min(p,(int)(ans.length()-1)),max((int)(ans.length()-p),1));
    //...
}
```


## 3. High-precision multiplication A*b

### 3.1 How it works

Multiplication between a large number and a small number is relatively straightforward: use a variable to record the carry of the products of each digit of A with b, and obtain the result for each digit in sequence.

**P.S. Note that when the large number is 0, the product may have leading zeros; be sure to remove them.**

### 3.2 Examples

- [AcWing 793. High-precision Multiplication](https://www.acwing.com/problem/content/795/)

Reference code：

```c++
void solve(){
    for(int i=0,c=0;i<a.length() || c;i++){
        int t1 = 0;
        if(i<a.length()) t1 = a[i]-'0';
        int t = t1 * b + c;
        ans.push_back(t%10+'0');c = t / 10;
    }
}
```


## 4. High-precision division A/b

### 4.1 How it works

Similar to the multiplication of large numbers by small numbers, the division of a large number by a small number is also straightforward. You can divide the leading part of the large number from left to right by b, recording the quotient and remainder of each prefix with c/b.

**P.S. Note that in earlier stages the dividend may be too small, causing leading zeros; remember to remove them before output.**

### 4.2 Examples

- [AcWing 794. High-precision Division](https://www.acwing.com/problem/content/796/)

Reference code：

```c++
void solve(){
    for(int i=0;i<a.length();i++){
        int t1 = a[i]-'0';
        int t = t1 + 10 * c;
        ans.push_back(t/b + '0');
        c = t%b;
    }int p = -1;while(++p<ans.length() && ans[p]=='0');
    ans = ans.substr(min(p,(int)(ans.length()-1)),max(1,(int)(ans.length()-p)));
}
```
