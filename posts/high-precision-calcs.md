---
title: '高精度 学习记录'
published: 2022-07-08
updated: 2022-07-08
description: '高精度运算包括加法、减法、乘法和除法，适用于处理超出常规数据类型范围的大数。加法和减法通过模拟手动计算实现，乘法和除法则依次处理每位数字，注意前导零的去除。提供了相关的例题和参考代码以帮助理解和实现这些运算。'
permalink: 'high-precision-calcs'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/8b1362ad-5ada-4ff7-90ef-8802f61c6148/2421860-20220712031131300-1134503314.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=c774b71a0c4b2e01a066cd69a8ca6db87164406f99e5f397552e7a41405e0b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
