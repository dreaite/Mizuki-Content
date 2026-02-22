---
title: '前缀和、差分和双指针 算法学习'
published: 2022-07-16
updated: 2022-07-16
description: '介绍了前缀和、差分和双指针算法的原理和应用。前缀和用于快速计算数组区间和，差分用于高效处理区间更新，双指针法通过维护指针来优化查询效率。提供了相关例题及参考代码以帮助理解和应用这些算法。'
permalink: 'prefix-sum-difference.en'
image: 'https://r2.dreaife.tokyo/notion/covers/c019ca737cef4889b7134b143022cb7a/2421860-20220716154134976-1182892165.png'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
lang: 'en'
---

# 1. Prefix Sum

## 1.1 Algorithm Principle

The prefix sum is defined as recording the sum of all data to the left; when intermediate data is needed, it can be obtained in O(1) time.

- One-dimensional prefix sum
> The sum of all terms from 1 to i.
>
> Since when processing the i-th position, the first i-1 positions have already been computed, thus a[i] = a[i] + a[i-1].
>
> 1. When the sum of [l,r] is needed, it can be obtained by a[r]-a[l-1]

- Two-dimensional prefix sum
> Find the sum of data within the rectangle whose top-left corner is (1,1) and bottom-right corner is (i,j)
>
> When processing (i,j), the first i-1 rows and the first j-1 elements in row i have been computed, so a[i][j] = a[i][j] + a[i-1][j] + a[i][j-1] - a[i-1][j-1].
>
> 1. When the sum of data inside the rectangle with top-left corner (x1,y1) and bottom-right corner (x2,y2) is needed, it is a[x2][y2]-a[x2][y1-1]-a[x1-1][y2]+a[x1-1][y1-1]

## 1.2 Examples

- [795. Prefix Sum](https://www.acwing.com/problem/content/797/)

Reference code：

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

- [796. Sum of Submatrices](https://www.acwing.com/problem/content/798/)

Reference code：

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


# 2. Difference

## 2.1 Algorithm Principle

The so-called difference array records the difference between each value and the previous value; when needing to operate on a range, the operation can be completed in O(1) time.

At the same time, we can see that the prefix sum of the difference array is the original array.

- One-dimensional difference
> Compute the difference from the previous term. When needing to add or subtract to numbers in the range [l,r], it can be achieved by b[l]+=c and b[r+1]-=c
- Two-dimensional difference
> The construction of the two-dimensional difference array can be reasoned backwards from its prefix sum.
>
> When all data inside the rectangle defined by (x1,y1) and (x2,y2) is increased by c, i.e., a[x1,y1]~a[x2,y2] are all increased by c. Therefore by doing b[x1,y1]+=c, b[x1,y2+1]-=c, b[x2+1,y1]-=c, b[x2+1,y2+1]+=c, we can achieve adding c only to the region.
>
>
> ![20201217171134926.png](https://img-blog.csdnimg.cn/20201217171134926.png)
>
>
> When constructing the difference array, one can see that it is adding a rectangle of width and height 1 with a[i,j], thus realizing a two-dimensional difference array.
>

## 2.2 Examples

- [797. Difference](https://www.acwing.com/problem/content/799/)

Reference code：

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

- [798. Difference Matrix](https://www.acwing.com/problem/content/800/)

Reference code：

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


# 3. Two Pointers

## 3.1 Algorithm Principle

Two-pointer problems are mainly based on the properties of the sequence, using pointer j to record the valid query range, thereby reducing the time complexity of computations.

Two-pointer problems are mainly divided into the following two categories:

1. In a single sequence, two pointers maintain a segment.
2. In two sequences, maintain some order

Basic template (from AcWing)

```c++
void solve(){
    for(int i=0,j=0;i<n;i++){
        while(j<i && check(i,j)) j++;

        // Specific problem logic
    }
}
```

## 3.2 Examples

- [799. Longest continuous non-repeating subsequence](https://www.acwing.com/problem/content/801/)

Solution idea: set a cnt array to record the occurrence count of data in the [j,i] interval; when i points to a[i] that has already appeared, move j forward until the count of a[i] in [j,i-1] becomes 0. Track the length along the way.

Reference code：

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

- [800. Target Sum of Array Elements](https://www.acwing.com/problem/content/802/)

Solution idea: Since the sequence is sorted in ascending order, you can stop when a[i]+a[j]>x; then a[i+1]+a[j] will also be greater than x. Therefore you can use j to record the boundary that needs to be checked, reducing search time.

Reference code：

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

- [799. Longest continuous non-repeating subsequence](https://www.acwing.com/problem/content/801/)

Solution idea: Since the substring appears in the source string in order, we can locate each character of the substring in the source string sequentially.

Reference code：

```c++
void solve(){
    for(int i=0,j=0;i<n && j<m;i++,j++){
        while(a[i] != b[j] && j<m) j++;
        if(i==n-1 && j < m) {cout<<"Yes"<<endl;return 0;}
    }cout<<"No"<<endl;
}
```
