---
title: '前缀和、差分和双指针 算法学习'
published: 2022-07-16
updated: 2022-07-16
description: '介绍了前缀和、差分和双指针算法的原理和应用。前缀和用于快速计算数组区间和，差分用于高效处理区间更新，双指针法通过维护指针来优化查询效率。提供了相关例题及参考代码以帮助理解和应用这些算法。'
permalink: 'prefix-sum-difference'
image: 'https://r2.dreaife.tokyo/notion/covers/c019ca737cef4889b7134b143022cb7a/2421860-20220716154134976-1182892165.png'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
---

# 1. 前缀和


## 1.1 算法原理


所谓前缀和，就是记录下前方所有数据之和，当所需中间数据时，可以通过`o(1)`的时间复杂度将数据求出。

- 一维数组前缀和
> 求出1~i的所有项之和。
>
> 由于当运算到第`i`位时，前`i-1`位已经运算完成，故`a[i] = a[i] + a[i-1]`。
>
> 1. 当需要`[l,r]`之和时，可以通过`a[r]-a[l-1]`求出
>
- 二维数组前缀和
> 求出左上端点、右下端点分别为(1,1)，(i,j)的长方形内的数据之和
>
> 当运算到`(i,j)`时，前`i-1`排、第`i`排前`j-1`位均已运算完成，故`a[i][j] = a[i][j]+a[i-1][j]+a[i-1]-a[i-1][j-1]`。
>
> 1. 当需要左上端点、右下端点分别为`(x1,y1)`，`(x2,y2)`的长方形内的数据之和时，`a[x2][y2]-a[x2][y1-1]-a[x1-1][y2]+a[x1-1][y1-1]`
>

## 1.2 例题

- [795. 前缀和](https://www.acwing.com/problem/content/797/)

参考代码：


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

- [796. 子矩阵的和](https://www.acwing.com/problem/content/798/)

参考代码：


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


## 2.1 算法原理


所谓差分，就是记录每位数据与前一位数据之间的差，当需要对区间进行操作时，可以通过`o(1)`的时间复杂度完成操作。


同时我们可以发现差分数组的前缀和就是原数组。

- 一维数组差分
> 求出与前一项之差。当需要对[l,r]范围内的数进行加减操作时时，可以通过b[l]+c、b[r+1]-c实现
- 二维数组差分
> 二维差分数组的构建可以由其前缀和的结果来逆向考虑。
>
> 当对`(x1,y1)`，`(x2,y2)`的长方形内的数据都加上`c`时，即`a[x1,y1]~a[x2,y2]`均加`c`。故当`b[x1,y1]+=c`，`b[x1,y2+1]-=c`，`b[x2+1,y1]-=c`，`b[x2+1,y2+1]+=c`，即可实现仅区间内的数据加`c`。
>
>
> ![20201217171134926.png](https://img-blog.csdnimg.cn/20201217171134926.png)
>
>
> 当构建差分数组时，可以发现其为对长宽为1的长方形加`a[i,j]`，由此实现二维差分数组。
>
>

## 2.2 例题

- [797. 差分](https://www.acwing.com/problem/content/799/)

参考代码：


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

参考代码：


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


## 3.1 算法原理


双指针问题主要是依据序列性质，使用指针`j`对有效查询范围进行记录，从而减少运算的时间复杂度。


双指针问题主要分为下面两类：

1. 在一个序列中，两个指针维护一段区间。
2. 在两个序列中，维护某种次序

基本模板(来自[AcWing](https://www.acwing.com/blog/content/277/))


```c++
void solve(){
    for(int i=0,j=0;i<n;i++){
        while(j<i && check(i,j)) j++;

        //具体问题逻辑
    }
}
```


## 3.2 例题

- [799. 最长连续不重复子序列](https://www.acwing.com/problem/content/801/)

解决逻辑：设置`cnt`数组记录`[j,i]`区间内的数据出现次数，当`i`指向数`a[i]`已经出现时，让`j`向前移动，直到`[j,i-1]`中`a[i]`出现次数为0。过程中记录长度。


参考代码：


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

- [800. 数组元素的目标和](https://www.acwing.com/problem/content/802/)

解决逻辑：由序列升序，可以直到当`a[i]+a[j]>x`时，`a[i+1]+a[j]`必然大于`x`。所以可以使用`j`来记录需要判断的边界，从而减少搜索时间。


参考代码：


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

- [799. 最长连续不重复子序列](https://www.acwing.com/problem/content/801/)

解决逻辑：由子串是在母串中按次序出现，我们可以按位寻找子串每位在母串中对应的位置。


参考代码：


```c++
void solve(){
    for(int i=0,j=0;i<n && j<m;i++,j++){
        while(a[i] != b[j] && j<m) j++;
        if(i==n-1 && j < m) {cout<<"Yes"<<endl;return 0;}
    }cout<<"No"<<endl;
}
```
