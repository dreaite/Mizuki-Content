---
title: '位运算、离散化和区间合并 算法学习'
published: 2022-07-16
updated: 2022-07-16
description: '介绍了位运算、离散化和区间合并的算法。位运算用于处理二进制数，离散化用于优化稀疏数据的存储和查询，区间合并则通过排序和覆盖判断快速合并多个区间。提供了相关例题及参考代码。'
permalink: 'bitwise-algo-2022'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/8cfb4679-8874-4a49-a58b-9fc59dd8fd44/2421860-20220716210357012-2135810169.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWN76A4U%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T082608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUW7D6q4RRvWenRJ30pDGAl0so0Uk%2B5wzxaSeCWwvR2AiEArDRJ%2FUz92k4befy%2FztuI8BZV3aqw%2FoCtDnMUhmKbdcEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD28YvzChQqrFIeSDyrcAx9fj0oHbdu7gAayUWpJq7ZgNpBQr2yQp0eG8m%2FTCohguvPQrtfgPkkhwS2aro3Ql5C8vjwX3nEI7c2wHSja8A6F9PPgjaifLVN4G4LA4Mt7wcAAGaIkZ0nDHf%2FpOOKel7mttkXwBneXhJ1aqYHFn7ZwZSmNLv7BnNNe57upDe8xGfvFz0B%2FJKmalguscc0FfFSKBpSP4hWt6tF6VNMJlYohgokVK%2Ft%2Btn8LnEcGyYB5NnBlPVSzhNusBBYqvskI3aDz1pnG0%2BmNNmgkimjxWntZN2aHLAn3bKcbtUXT74VSmY3xZeLzoViod4RxBe%2FbObg1syekROPQsixgTvA5hTOy5A13F8Frs4k6ZzPcQ8EJQih3QPUEWW%2FsDkzb22M%2BpGT9fxTiJ42vmxka8j3OZdXONwQWxaFnKDQhlrO3h7mczScXKn1m2336kwxxm2Fhmxku5A9%2F7jhmiP6yHL4eZVlZXw7ErpUxspaVw8CEd1lzIbLLspqttHMylVzyQDdcKC2VgUt1iBdQq%2FO88607WKvry1MLZNOint4IXqGriS%2FnmUirdMXWqUjCsH8MVKiKIsvK2l0DQ1ZRQUD5FKnWfPm4eWnPUuIKiW6ZuasTh5EmiSimGnHUnbmXYiLVMLnF6swGOqUBaHYUXSvyItfbGvPRA%2BIlkpmcu6OtOXL19iwhZZidWWgZyq849Pki%2FoEwsmkvKGD8f4LxgCksmPHX9VIeGXokq40HQTrFkeLmPP8noKGJJ%2Fz5yiFO1pkUMeTm6SmM2TYJWg45IoRBsQhZM4d1wNk8Pfi%2BPJwaWHCwO52cA9lNd1s9KCwMq0jNek12X9aB4PvYy6CGEVhB4oG8en18N0NLExHNO97G&X-Amz-Signature=cd6493cc43f54ee6772bcf020a18abc915ad1d2744df96533e234b6ee4c17357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
