---
title: '高精度 学习记录'
published: 2022-07-08
updated: 2022-07-08
description: '高精度运算包括加法、减法、乘法和除法，适用于处理超出常规数据类型范围的大数。加法和减法通过模拟手动计算实现，乘法和除法则依次处理每位数字，注意前导零的去除。提供了相关的例题和参考代码以帮助理解和实现这些运算。'
permalink: 'high-precision-calcs'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/8b1362ad-5ada-4ff7-90ef-8802f61c6148/2421860-20220712031131300-1134503314.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWJX3HLY%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzRfEUzvECGh1cWJ9H0inqZZW0sx%2BEYU3A4h1vHZTm3AiAYy8CkYEOQRpRvg96VUuLPvE%2FTjPGVIcJdydH8Py56tCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5MJ5QmaZIMajWuDKtwDhAhh4T%2FgWReft4bSCiNa%2BcO08IJfPlWFtycMs5%2FGGmtaOcGxKUDLN6s5AeynvMdNvsTcm%2FqSllbh9AtsaHbHYoiqGvjwsoFKQ%2F34n%2Fdjc2pnFQmRE7ZUwASRobUq74xdimaI59Vv2cOOxAFt%2FL81is6PzF3XAzWMuQnKn9DmLPNc9obYPFQVaTFsWr4akuAcl40%2FjamY1c37Iz5l4qStx0lXyda6u79OO8Whf0NK5HrU3oJFsz5k3uKHDT3YQR6DfH0H7zgp4qVGhP2UVm8cNk1Ngeejb4qQyNl0RO3XLoXssKo7PZ4D9PUtJm%2FCjvYyojZuYnLzAUCxD6vJqhUSqIs%2BxrriNKb3YUl9dM7xavjkI0iv3GP99kw8EF4K6MOHrGZd5tQBMBJWBIgs%2BQzsTTc%2BxpfjN3Ez1L0M2dBXEfT5mWymxxaJNB0X7jWuEWvd3obeOZeiLcURUtZLVsgtTgV3HUMiHuVlxP8RVdYxx9HhsBOag%2F6DD6PVnVbp1VAi3BjVULW00r5ZwFYiSoqzguruLgta2hE%2BZElbviZCnFdVdvQEUnbGUj5AKHQKAJm3pOOBmDkHIe1Oj2sM9XWyvL4MmnjqOmgT%2BiuFM5VlPuK%2BW6W%2BJMwGs%2FhkKNwwisbqzAY6pgERLmOIitzUnefSFwHeaPD4ENIIDGeh4ZwaETt7%2FqzovW56OX9xGq3avpB1p7eRMwogfeyyHQfahV7rJj6vnc6KnpMsNCTh3PRm2zZBILgpvQInkOzF2AiNR%2F45OD1eKlwj2e2TvUY1SE9fpTYnUDKNkhPs6jXmtIglnxusQkZv1hcFXj32jRa10JM1ArerYjTVRb5DkYbL9bIHIllzgGz9FMegfowV&X-Amz-Signature=22df4e3471e59d1bd640bbf499ab91f63f6b6f84af51894cf47642ddd4b59bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
---

# 高精度


平时我们对于加减乘除是直接使用`+-*/`来实现的，但当数的长度来到`100`、`1000`时，`int`、`long long`的存储范围就不够了，此时就是使用高精度的时候。


## 1. 高精度加法 A+B


### 1.1 运算原理


首先是大数之间的加法，可以模拟我们正常进行加法的步骤来进行运算。例如下图：


![EZr2Gb4qHlkJixe.png](https://s2.loli.net/2022/07/12/EZr2Gb4qHlkJixe.png)


可以发现加法运算是从后向前进行的，所以我们可以`reverse`将获得的大数倒序，运算完毕后再使其正序输出。


### 1.2 例题

- [AcWing 791. 高精度加法](https://www.acwing.com/problem/content/793/)

参考代码：


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


## 2. 高精度减法 A-B


### 2.1 运算原理


其次是大数之间的减法，具体方法依然类似于大数加法，不同的是由于AB大小的不同会导致结果负数的出现，此时我们可以使`A-B = -(B-A)`让减法的结果始终保持为正。


**P.S. 注意由于是减法，可能会导致前导零的出现，注意在输出前去除。**


### 2.2 例题

- [AcWing 792. 高精度减法](https://www.acwing.com/problem/content/794/)

参考代码：


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


## 3. 高精度乘法 A*b


### 3.1 运算原理


大数与小数之间的乘法较简单，用一个数来记录`A`每位数与b乘积和的剩余值，依次得到每位的运算结果即可。


**P.S. 注意当大数为0时，其乘积可能会有前导零，注意去除。**


### 3.2 例题

- [AcWing 793. 高精度乘法](https://www.acwing.com/problem/content/795/)

参考代码：


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


## 4. 高精度除法 A/b


### 4.1 运算原理


同大数与小数的乘法，大数和小数的除法同样较为简单。此时可以从大数前段依次向后除以b，依次记录前段和`c`除以`b`的商和余数即可。


**P.S. 注意由于在运算较前期可能由于被除数过小导致前导零的出现，注意在输出前去除。**


### 4.2 例题

- [AcWing 794. 高精度除法](https://www.acwing.com/problem/content/796/)

参考代码：


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
