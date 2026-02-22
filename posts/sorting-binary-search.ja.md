---
title: '排序 二分学习'
published: 2022-07-08
updated: 2022-07-08
description: '介绍了快速排序和归并排序的原理及实现，包括时间复杂度和相关题目。快速排序通过选取中点将数列分为两部分进行排序，归并排序则将已排序的子段合并。还讨论了整数和浮点数的二分查找算法及其实现方法。'
permalink: 'sorting-binary-search.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/4b474fbfaee24827aeb7eab319feed6b/440016BF77F4742DE9C878230F9C813E.jpg'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
lang: 'ja'
---

AcWing基礎講座の学習


# ソート


## 1. クイックソート


### 1. 原理


無秩序な数列を並べ替えるには、以下の手順で進めることができる：

- 一段の数列に対して、まず任意の点を`mid`として判定点とする。（この`mid`は一般に数列の中央の要素である）
- この数列を一度走査し、`mid`より大きい数は右端へ、`mid`より小さい数は左端へ置く。
- その後、分割された列について、`[l,p]`、`[p+1,r]` の2つのサブ区間を選び、上記の操作を続け、長さが`1`になるまで繰り返す。（`p`は前述の左右の端の境界点）

### 2. 具体的な実装（コード)


_**本コードの考え方はy総を参考にした**_


```plain text
void quick_sort(int a[],int l,int r){
	if(l>=r) return;//设置退出条件
	int i=l-1,j+1,mid = a[l+r>>1];//设置判断点
	while(i<j){
		do i++;while(a[i]<mid);
		do j--;while(a[j]>mid);
		if(i<j) swap(a[i],a[j]);
	}
	quick_sort(a,l,j);//继续对子段排序
	quick_sort(a,j+1,r);
}
```

- 計算量：O(N*logN)

### 3. 関連問題

- [AcWing 785. クイックソート](https://www.acwing.com/problem/content/787/)
- [AcWing 786. 第k個の数](https://www.acwing.com/problem/content/788/)

## 2. マージソート


### 1. 原理


無秩序な数列について、クイックソートと同様、これを並べ替えるには次の手順で進める：

- 一段の数列に対して、まず任意の点を`mid`として分割点とする。（この`mid`は一般に数列の中点である）
- その後、`[l,mid]`、`[mid+1,r]` の2つのサブ区間を選択して並べ替えを続け、すでに整列済みと仮定する。
- その後、すでに整列済みの2つの区間を、整列順に先に`b`配列へ格納し、次に整列済みの数列で元の数列を上書きする。

### 2. 具体的な実装（コード)


_**本コードの考え方はy総を参考にした**_


```c++
void merge_sort(int a[],int b[],int l,int r){
	if(l>=r) return;//设置退出条件
	int mid = l+r>>1,i=l,j=mid+1,k=0;//设置分割点
    merge_sort(a,b,l,mid);merge_sort(a,b,mid+1,r);//先对子段排序
	while(i<=mid&&j<=r)
        if(a[i]<=a[j]) b[k++] = a[i++];
    	else b[k++] = a[j++];
    while(i<=mid) b[k++]=a[i++];
    while(j<=r) b[k++]=a[j++];
    for(i=l,j=0;i<=r;i++,j++) a[i]=b[j];
}
```

- 計算量：O(N*logN)

### 3. 関連アプリケーション

- 逆順対

マージソートで配列を並べ替える際、`a[i]>b[j]` が現れた時、それは逆順対が現れたことを意味し、かつ現在の`a[j]`については、`mid - i + 1` 個の逆順対が現れる。すなわち`a[j]`と`[i, mid]`が合計で`mid - i + 1`個の数の組み合わせとなって逆順対を成す。これにより、並べ替え時に対応する配列に存在する逆順対を求めることができる。

```c++
long long merge_sort(int a[],int b[],int l,int r){
    if(l>=r) return 0;
    int mid = l+r>>1,i=l,j=mid+1,k=0;
    long long ans = merge_sort(a,b,l,mid)+merge_sort(a,b,mid+1,r);
    while(i<=mid&&j<=r)
        if(a[i]<=a[j]) b[k++] = a[i++];
        else ans += mid-i+1,b[k++]=a[j++];
    while(i<=mid) b[k++] = a[i++];
    while(j<=r) b[k++] = a[j++];
    for(i=l,j=0;i<=r;i++,j++) a[i]=b[j];
    return ans;
}
```

### 4. 関連問題

- [AcWing 787. マージソート](https://www.acwing.com/problem/content/789/)
- [AcWing 788. 逆順対の数](https://www.acwing.com/problem/content/790/)

![ea85b4d19f624e219ca3da0cac7fa525.png](https://img-blog.csdnimg.cn/ea85b4d19f624e219ca3da0cac7fa525.png)


# 二分法


## 1. 整数二分探索


### 1.1 アルゴリズムの原理


単調な列について、その単調性を利用して、探している数`k`を以下の方法で見つけることができる：

> まず探索範囲lとrを決定し、l<r の場合、範囲の中点midを取り、区間[l,r]を [l,mid] と [mid+1,r]（このとき mid = l+r>>1）または [l,mid-1] と [mid,r]（このとき mid = l+r+1>>1）に分け、l<r の条件の下で check(mid) 関数に基づき、lとrを更新し、l>=r になるまで続ける。

### 1.2 コード実装


_**本コードの考え方はy総を参考にした**_


```plain text
//将区间[l,r]分为[l,mid]和[mid+1,r]
int bsearch_1(int l,int r){
	while(l<r){
		int mid = l+r>>1;
		if(check(mid)) r=mid;
		else l=mid+1;
	}return l;
}
//将区间[l,r]分为[l,mid-1]和[mid,r]
int bsearch_2(int l,int r){
	while(l<r){
		int mid = l+r+1>>1;
		if(check(mid)) l=mid;
		else r=mid-1
	}
}
```


### 1.3 相关题目

- [AcWing 789. 数的范围](https://www.acwing.com/problem/content/791/)

## 2. 浮点数二分

### 2.1 アルゴリズムの原理


単調な列について、その単調性を活用して、整数の二分探索と同様に、探している数`k`を見つけることができる：

> まず探索範囲lとrを決定し、r-l>eps のとき、範囲の中点midを取り、mid=(l+r)/2、次に r-l>eps の条件の下で check(mid) 関数に基づき、lとrを更新し、r-l<=eps になるまで続ける

### 2.2 コード実装


_**本コードの考え方はy総を参考にした**_


```plain text
double bsearch(double l,double r){
	while(r-l>eps){
		double mid = (l+r)/2;
		if(check(mid)) r=mid;
		else l=mid;
	}return l;
}
```


### 2.3 関連題目

- [AcWing 790. 数の三次方根](https://www.acwing.com/problem/content/792/)

![626e3c9dbe834576b1f325b94c772550.png](https://img-blog.csdnimg.cn/626e3c9dbe834576b1f325b94c772550.png)
