---
title: '位运算、离散化和区间合并 算法学习'
published: 2022-07-16
updated: 2022-07-16
description: '介绍了位运算、离散化和区间合并的算法。位运算用于处理二进制数，离散化用于优化稀疏数据的存储和查询，区间合并则通过排序和覆盖判断快速合并多个区间。提供了相关例题和参考代码以帮助理解这些算法的应用。'
permalink: 'bitwise-algorithm'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/8cfb4679-8874-4a49-a58b-9fc59dd8fd44/2421860-20220716210357012-2135810169.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNS6BWN%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T113457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CnggUmQNTIWcxpk71sKe%2BtcT0RVUJnkPa1sONfkxywIgWix1CfX3kaputgPwarZUIm7ANIL%2FnkR%2Bs9ctAQYwHUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoT9%2B%2FRgaZzFud2TSrcA6ZIdkCm0Ediqay5sOB%2BtmFTfvN%2F%2FiM3m%2F741v%2F4WBgrN8nAdCqs3K0VwKqA87HJN%2FOVRcC613qZ8Vk3uuCXBRVmMq3bP4SIlSXY05b9NsSlLB21h4aAJO%2BUo9I5B0OKrge%2FTIMz5t56djaob1uhJaeKQadOFjvvl4vBIoul9KfMJe3GpdLQfkWx5HKq9mGFkHtGO2EWxSRKt1PzPg8778DWmZBTnwZ2YZNpAF8Vp2zEZF6UMPZRWWYTe3AAB65obPV1EWwXRTDaJ9z%2BncisYqkargisww8OzzKImvt5cZILOD8cEL%2Fp2uopoku1gp5jLHz3lvfO6DyEerPRGgpCtAqjNzjhPJLT1T3eqgap6aKwSmtpmKjsPT7jYyAmMNTk92IzUW0sTA9HsYbfl5BQchOJqYBSimo7RP0jfpBzIPcPAjR0IPIpavdDv0u272P00%2BnvavidCmm6%2FjDHZzLK%2FWMhCC1qParzGxRVFKQfj5JIWHcMA2t6qMlrLcqjAZGqb0Sf9jAIV1ylcSFBpa7YSppoqLOEkQwnaRmZiaKxGM%2BouTPJDU71RslQ9XjZWdbID5ENcci%2F98HbSW8Oe5SR3HH5tDagoVWqoCx1Q2uszHPL7uAQ8Z6hoX4Ws%2FRNMIbF6swGOqUBQOf5kXQFX3yokCvwpqOkVYHnJ%2BkSV26e003qD3b5u%2BdxOClHMeiP5JxnpBXoNTy4%2F5LsnK38wifdV7M7j9Zpx3qluNkI115JBCKcURrDbXplhGJUCPuZaVV7yhvlTO3qekjS8%2By3g9Yy4Gdvhf1d3CBLBgYPAxCxE%2Fd9myIs0pAcvhHT4nUEkZwrjkso1JE0Ev147f5qpEKi59tWtwfvL%2Fi4Xl%2Fl&X-Amz-Signature=a5ace3e8ec765c350c4933615ff5ddfaa41110942548cdbfda0ebe52c206e5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
---

# 1. 位运算


## 1.1 使用背景


在进行位运算时，我们可以将数看为二进制数，而位运算也就是对于数特定位置的值进行运算。


## 1.2 例题

- [801. 二进制中1的个数](https://www.acwing.com/problem/content/803/)

在找数字中的1的时候有两种常用方法。

- 当`1<<i & x = 1`时，第`i`位存在1
- `lowbit(x) = x & -x`找出末位的1

参考代码：


```c++
int lowbit(int x){
    return x & -x;
}
void solve(){
	for(int i=0;i<n;i++){
        cin>>t;
        int cnt = 0;
        for(;t;t -= lowbit(t)) cnt++;
        cout<<cnt<<' ';
    }
}
```


# 2. 离散化


## 2.1 使用背景


当获得的数据是在较长的范围内呈稀疏分布，为了节省使用的空间以及搜索数据的速度，我们使用了离散化对数据进行处理。


## 2.2 例题

- [802. 区间和](https://www.acwing.com/problem/content/804/)

对于查询问题，我们可以通过前缀和在`o(1)`内求出，所以该问题的重点主要在于对于数据的离散化。


可以发现在数轴上要使用的数有插入位置`x`、查询左右范围`l,r`共三个数，将这三个数存入离散化后的数组中，并保持其位置与原数组位置的映射即可。


参考代码：


```c++
void solve(){
    cin>>n>>m;
    for(int i=0;i<n;i++){
        cin>>x>>c;
        if(a[x]) a[x] += c;
        else a[x] = c;
        all.push_back(x);
    }
    while(m--){
        cin>>l>>r;
        q.push_back({l,r});
        all.push_back(l);
        all.push_back(r);
    }
    sort(all.begin(),all.end());
    all.erase(unique(all.begin(),all.end()),all.end());

    for(int i=1;i<=all.size();i++){
        int t = a[all[i-1]];
        s[i] = t + s[i-1];
    }
    for(auto i:q){
        l = lower_bound(all.begin(),all.end(),i.first)-all.begin();
        r = lower_bound(all.begin(),all.end(),i.second)-all.begin();
        cout<<s[r+1] - s[l]<<endl;
    }
}
```


# 3. 区间合并


## 3.1 使用背景


快速对多个区间进行合并，对区间按首端点排序后，判断是否覆盖即可。


## 3.2 例题

- [803. 区间合并](https://www.acwing.com/problem/content/805/)

参考代码：


```c++
void solve(){
    for(int i=0;i<n;i++){
        cin>>l>>r;
        a.push_back({l,r});
    }
    sort(a.begin(),a.end(),[](PII t1,PII t2){
        return t1.first < t2.first;
    });
    int al = -2e9,ar = -2e9;
    for(auto i : a){
        int ml = i.first,mr = i.second;
        if(ml > ar){
            ans ++;
            al = ml;ar = mr;
        }else if(mr > ar){
            ar = mr;
        }
    }cout<<(ans ? ans : 1)<<endl;
}
```
