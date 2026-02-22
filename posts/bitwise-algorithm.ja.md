---
title: '位运算、离散化和区间合并 算法学习'
published: 2022-07-16
updated: 2022-07-16
description: '介绍了位运算、离散化和区间合并的算法。位运算用于处理二进制数，离散化用于优化稀疏数据的存储和查询，区间合并则通过排序和覆盖判断快速合并多个区间。提供了相关例题和参考代码以帮助理解这些算法的应用。'
permalink: 'bitwise-algorithm.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/ae04b8a575694a71a8b1fb3ef5312c61/2421860-20220716210357012-2135810169.png'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
lang: 'ja'
---

# 1. ビット演算

## 1.1 背景

ビット演算を行う際には、数を二進数としてみなし、ビット演算は数の特定の位置にある値に対して演算を行うものです。

## 1.2 練習問題

- [801. 二進数の中の1の個数](https://www.acwing.com/problem/content/803/)

数の中の1を探すときには、主に2つの方法があります。

- 当`1<<i & x = 1`のとき、第`i`ビットには1が存在します
- `lowbit(x) = x & -x`を用いて末尾の1を見つける

参考コード：


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


# 2. 離散化

## 2.1 背景

取得したデータが長い範囲にわたって疎に分布している場合、使用するメモリを節約しデータを検索する速度を高めるために、データを離散化して処理します。

## 2.2 練習問題

- [802. 区間和](https://www.acwing.com/problem/content/804/)

クエリ問題については、累積和を用いることで O(1) 内に求められるため、この問題の焦点はデータの離散化にあります。

数軸上で使用するべき数は挿入位置`x`、左右の範囲を表す`l,r`の3つであり、これら3つの数を離散化後の配列に格納し、それぞれの位置を元の配列の位置と対応づけておけばよい。

参考コード：


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


# 3. 区間合併

## 3.1 背景

複数の区間を高速にマージするには、区間を開始点でソートし、被覆しているかどうかを判断すればよい。

## 3.2 練習問題

- [803. 区間合併](https://www.acwing.com/problem/content/805/)

参考コード：


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
