---
title: '位运算、离散化和区间合并 算法学习'
published: 2022-07-16
updated: 2022-07-16
description: '介绍了位运算、离散化和区间合并的算法。位运算用于处理二进制数，离散化用于优化稀疏数据的存储和查询，区间合并则通过排序和覆盖判断快速合并多个区间。提供了相关例题和参考代码以帮助理解这些算法的应用。'
permalink: 'bitwise-algorithm'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/8cfb4679-8874-4a49-a58b-9fc59dd8fd44/2421860-20220716210357012-2135810169.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGCMQXK%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T135442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECdV98jU4Z6aCq23IekBUhUXPG6LiVxQV5G%2BOXLgAcPAiEAxsRjx5P9y0MJ61o9GcT%2BMH%2BzflVmze1DFnG1Jv9KGWgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgrbMxntTsXBrrA0CrcA%2FTOBoNqWqsnz5xS5JGfgkmcrWQMp%2Fr8ljWRzo8iqRbwO3uQAXvzOu1xJ73aeLYIsLFER9QSdfsTO5A6lHOqYHtxFukOH0BlwiLBHHcyXalFZReKsJJk86tp0rP2gzLjFfPaUPvWrL1Z116brt0OdZqGSVJHq%2B7tw44%2Bfueqp7NviPiTfh2BWUrKmBpSqrjvZvmLRSSircwPvkggmIaK%2Bj8IihafkA51XRYR6oGpLUepz%2FmsLguPUyQbMLR9MvVKI%2FmcUc0wcYuUna7jcyTFkDLDWzt6Xa0QzTX9jFesRCjwcPy6s3JfHuN6IJMAw3KZ%2BzG%2B5OJF0Kv2o4kPp5S843M64hCQ9KCIOGuTZHiH5KovlP1Ye91sA0rjq7OP5EtWvX3yynBDmYWqjhGO47upYOsioPPYmLTQso3sz0DxzVx972aZFLBstGOsL8i1%2BMHgueKh1MRgQDEWyHpIcayh7h6RNjVE9LZwTMVMvKls4j1WzvBrNQYhahD6%2BUtxBNylWVY%2BCSbgucUXatn2DMXS3vIRuRvhUhfeeXOtCeOjyysEQh28kvIuAOcS9ctq7gthmg0m4D1lgPNHuNrZZBsj5Nnz6EEdi18kpPD46%2ByjGIdZzKxM%2Bj9r4mosXVlFMOHj68wGOqUBk8%2BXEVj9%2FD69%2FjN%2FUc5h%2BDOsNLt2mBONzOSU2QFSQaCxBAnpt%2BzdEaL1QgP44AE3Kbw%2Br5ugpZo%2FYbRvLjRQcMKSSeoSWLaANvfiOjtTaUIwk4Ui7pzjDGcYKlzRyeE23Uh3PUNgdhi6eFjUyfF%2FHS7QuFS93JtvebAld%2Bn8C%2BMNWH71uW9oU4i1mBnQsmSlJ%2FUzjmEKkoxkaN%2F1tVJlR3VxW3jn&X-Amz-Signature=cf356a2b9d39c7f16758078ff51934b6d13a515d7ce5d46181c164aea46a3b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
