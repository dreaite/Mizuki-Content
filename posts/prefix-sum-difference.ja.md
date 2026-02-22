---
title: '前缀和、差分和双指针 算法学习'
published: 2022-07-16
updated: 2022-07-16
description: '介绍了前缀和、差分和双指针算法的原理和应用。前缀和用于快速计算数组区间和，差分用于高效处理区间更新，双指针法通过维护指针来优化查询效率。提供了相关例题及参考代码以帮助理解和应用这些算法。'
permalink: 'prefix-sum-difference.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/c019ca737cef4889b7134b143022cb7a/2421860-20220716154134976-1182892165.png'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
lang: 'ja'
---

# 1. 累積和

## 1.1 アルゴリズムの原理

いわゆる累積和とは、前方のすべてのデータの和を記録しておくことを指し、所要の中間データを得る際には、`o(1)`の時間計算量でデータを求めることができる。

- 一次元配列の累積和
> 1からiまでのすべての項の和を求める。
>
>  1. 当運算到第`i`位時、前`i-1`位はすでに運算完了しているため、`a[i] = a[i] + a[i-1]`。
>
> 1. 当需要`[l,r]`の和時は、`a[r]-a[l-1]`で求められる

- 二次元配列の累積和
> 左上端点、右下端点がそれぞれ(1,1)、(i,j)の長方形内のデータの和を求める
>
> i,jへ到達した時、前`i-1`排目と、第`i`排目の前`j-1`位はすべて計算済みであるため、`a[i][j] = a[i][j]+a[i-1][j]+a[i-1]-a[i-1][j-1]`。
>
> 1. 左上端点、右下端点がそれぞれ`(x1,y1)`、`(x2,y2)`の長方形内のデータの和は、`a[x2][y2]-a[x2][y1-1]-a[x1-1][y2]+a[x1-1][y1-1]`

## 1.2 例題

- [795. 累積和](https://www.acwing.com/problem/content/797/)

参考コード：


```c++
void solve(){
    cin>>n>>m;
    for(int i=1;i<=n;i++) cin>>a[i],a[i]+=a[i-1];
    while(m--){
        cin>>l>>r;
        cout<<a[r]-a[l-1]<<endl;
    }
}
```

- [796. 部分行列の和](https://www.acwing.com/problem/content/798/)

参考コード：


```c++
void solve(){
    cin>>n>>m>>q;
    for(int i=1;i<=n;i++) for(int j=1;j<=m;j++)
        cin>>a[i][j],a[i][j]+=a[i-1][j]+a[i][j-1]-a[i-1][j-1];
    while(q--){
        cin>>x1>>y1>>x2>>y2;
        cout<<a[x2][y2]-a[x2][y1-1]-a[x1-1][y2]+a[x1-1][y1-1]<<endl;
    }
}
```


# 2. 差分

## 2.1 アルゴリズムの原理

差分とは、各データと前のデータとの差を記録することで、区間に対して操作を行う際に`o(1)`の時間計算量で処理を完了できる。

また、差分配列の前縁の和は元の配列そのものになることが分かる。

- 一次元配列の差分
> 前項との差を求める。 `[l,r]` 範囲の数を加減する必要がある場合、`b[l]+=c`、`b[r+1]-=c` で実現
- 二次元配列の差分
> 二次元差分配列の構築は、その前縁和の結果から逆算して考えることができる。
>
> `(x1,y1)`、`(x2,y2)` の長方形内のデータをすべて `c` 加えるとき、すなわち `a[x1,y1]~a[x2,y2]` がすべて `c` となるようにします。したがって `b[x1,y1]+=c`、`b[x1,y2+1]-=c`、`b[x2+1,y1]-=c`、`b[x2+1,y2+1]+=c` とすれば、区間内のデータのみを加えることができます。
>
>
> ![20201217171134926.png](https://img-blog.csdnimg.cn/20201217171134926.png)
>
> 差分配列を構築する際、それは長さ1の長方形に対して `a[i,j]` を加えることになるため、2次元差分配列を実現できる。

## 2.2 例题

- [797. 差分](https://www.acwing.com/problem/content/799/)

参考コード：


```c++
void solve(){
    for(int i=1;i<=n;i++) cin>>a[i];
    for(int i=1;i<=n;i++) b[i] = a[i]-a[i-1];
    while(m--){
        cin>>l>>r>>c;
        b[l]+=c;b[r+1]-=c;
    }for(int i=1,t=0;i<=n;i++) t+=b[i],cout<<t<<' ';
}
```

- [798. 差分矩阵](https://www.acwing.com/problem/content/800/)

参考コード：


```c++
void add(){
    b[x1][y1] += c;b[x1][y2+1] -=c;
    b[x2+1][y1] -= c;b[x2+1][y2+1] +=c;
}
void solve(){
    for(int i=1;i<=n;i++) for(int j=1;j<=m;j++)
        cin>>a[i][j],x1=x2=i,y1=y2=j,c=a[i][j],add();
    while(q--){
        cin>>x1>>y1>>x2>>y2>>c;
        add();
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            a[i][j] = b[i][j] + a[i-1][j]+a[i][j-1]-a[i-1][j-1];
            cout<<a[i][j]<<' ';
        }cout<<endl;
    }
}
```


# 3. 双指针

## 3.1 アルゴリズムの原理

ダブルポインタ問題は、列の性質に基づき、有効なクエリ範囲を指針 j で記録することにより、計算時間の複雑さを低減します。

ダブルポインタ問題は主に以下の2つに分類されます。

1. 一つの列で、二つのポインタが区間を維持する。
2. 二つの列で、ある種の順序を維持する

基本テンプレート（AcWing より）

```c++
void solve(){
    for(int i=0,j=0;i<n;i++){
        while(j<i && check(i,j)) j++;

        //具体的な問題ロジック
    }
}
```

## 3.2 例题

- [799. 最長連続不重複部分列](https://www.acwing.com/problem/content/801/)

解法の逻辑：`cnt` 配列を用いて `[j,i]` 区間内のデータの出現回数を記録します。`i` が `a[i]` をすでに出現させている場合、`[j,i-1]` 内で `a[i]` の出現回数が0になるまで `j` を前方へ動かします。長さを途中で記録します。


```c++
void solve(){
    for(int i=1,j=1;i<=n;i++){
        if(cnt[a[i]]){
            while(cnt[a[i]]) cnt[a[j++]]--;
        }
        cnt[a[i]]++;
        ans = max(i-j+1,ans);
    }cout<<ans<<endl;
}
```

- [800. 配列の要素の和を x に等しくする問題](https://www.acwing.com/problem/content/802/)

解法の逻辑：数列は昇順なので、`a[i]+a[j] > x` となると、`a[i+1]+a[j]` は必ず x より大きくなる。従って判定が必要な境界を `j` で記録することで探索時間を削減できる。

```c++
void solve(){
    for(int i=0,j=m-1;i<n,j>0;i++){
        while(a[i]+b[j]>x) j--;
        if(a[i]+b[j]==x){
            cout<<i<<' '<<j<<endl;
            return 0;
        }
    }
}
```

- [799. 最長連続不重複部分列](https://www.acwing.com/problem/content/801/)

解法の逻辑：母串中に子文字列は順序通り現れるため、母串中の各位置に対応する位置を順に探すことができます。

```c++
void solve(){
    for(int i=0,j=0;i<n && j<m;i++,j++){
        while(a[i] != b[j] && j<m) j++;
        if(i==n-1 && j < m) {cout<<"Yes"<<endl;return 0;}
    }cout<<"No"<<endl;
}
```
