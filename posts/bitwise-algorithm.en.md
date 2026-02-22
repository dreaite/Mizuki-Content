---
title: '位运算、离散化和区间合并 算法学习'
published: 2022-07-16
updated: 2022-07-16
description: '介绍了位运算、离散化和区间合并的算法。位运算用于处理二进制数，离散化用于优化稀疏数据的存储和查询，区间合并则通过排序和覆盖判断快速合并多个区间。提供了相关例题和参考代码以帮助理解这些算法的应用。'
permalink: 'bitwise-algorithm.en'
image: 'https://r2.dreaife.tokyo/notion/covers/ae04b8a575694a71a8b1fb3ef5312c61/2421860-20220716210357012-2135810169.png'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
lang: 'en'
---

# 1. Bitwise Operations


## 1.1 Background


When performing bit operations, we can view numbers as binary, and bitwise operations operate on the value at specific positions in the number.


## 1.2 Example problems

- [801. Number of 1s in Binary](https://www.acwing.com/problem/content/803/)

There are two common methods for finding the number of 1s in a number.

- When `1<<i & x = 1`, the i-th bit is 1
- `lowbit(x) = x & -x` to find the least significant 1

Reference code:


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


# 2. Discretization


## 2.1 Background


When the obtained data are sparsely distributed over a wide range, to save space and speed up data searching, we use discretization to process the data.


## 2.2 Example problems

- [802. Range Sum](https://www.acwing.com/problem/content/804/)

For query problems, we can obtain it in O(1) via prefix sums, so the key of this problem lies mainly in data discretization.


It can be seen that on the number line the numbers we need to use are the insertion position `x`, and the left and right query ranges `l,r` — a total of three numbers. Put these three numbers into the discretized array and maintain their mapping to the original array positions.


Reference code:


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


# 3. Interval Merging


## 3.1 Background


Quickly merge multiple intervals by sorting the intervals by their left endpoints and checking for overlaps.


## 3.2 Example problems

- [803. Merge Intervals](https://www.acwing.com/problem/content/805/)

Reference code:


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
