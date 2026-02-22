---
title: '排序 二分学习'
published: 2022-07-08
updated: 2022-07-08
description: '介绍了快速排序和归并排序的原理及实现，包括时间复杂度和相关题目。快速排序通过选取中点将数列分为两部分进行排序，归并排序则将已排序的子段合并。还讨论了整数和浮点数的二分查找算法及其实现方法。'
permalink: 'sorting-binary-search'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/beae9843-d9d2-4fc1-95c0-0035f255dfa2/440016BF77F4742DE9C878230F9C813E.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWJX3HLY%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzRfEUzvECGh1cWJ9H0inqZZW0sx%2BEYU3A4h1vHZTm3AiAYy8CkYEOQRpRvg96VUuLPvE%2FTjPGVIcJdydH8Py56tCqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5MJ5QmaZIMajWuDKtwDhAhh4T%2FgWReft4bSCiNa%2BcO08IJfPlWFtycMs5%2FGGmtaOcGxKUDLN6s5AeynvMdNvsTcm%2FqSllbh9AtsaHbHYoiqGvjwsoFKQ%2F34n%2Fdjc2pnFQmRE7ZUwASRobUq74xdimaI59Vv2cOOxAFt%2FL81is6PzF3XAzWMuQnKn9DmLPNc9obYPFQVaTFsWr4akuAcl40%2FjamY1c37Iz5l4qStx0lXyda6u79OO8Whf0NK5HrU3oJFsz5k3uKHDT3YQR6DfH0H7zgp4qVGhP2UVm8cNk1Ngeejb4qQyNl0RO3XLoXssKo7PZ4D9PUtJm%2FCjvYyojZuYnLzAUCxD6vJqhUSqIs%2BxrriNKb3YUl9dM7xavjkI0iv3GP99kw8EF4K6MOHrGZd5tQBMBJWBIgs%2BQzsTTc%2BxpfjN3Ez1L0M2dBXEfT5mWymxxaJNB0X7jWuEWvd3obeOZeiLcURUtZLVsgtTgV3HUMiHuVlxP8RVdYxx9HhsBOag%2F6DD6PVnVbp1VAi3BjVULW00r5ZwFYiSoqzguruLgta2hE%2BZElbviZCnFdVdvQEUnbGUj5AKHQKAJm3pOOBmDkHIe1Oj2sM9XWyvL4MmnjqOmgT%2BiuFM5VlPuK%2BW6W%2BJMwGs%2FhkKNwwisbqzAY6pgERLmOIitzUnefSFwHeaPD4ENIIDGeh4ZwaETt7%2FqzovW56OX9xGq3avpB1p7eRMwogfeyyHQfahV7rJj6vnc6KnpMsNCTh3PRm2zZBILgpvQInkOzF2AiNR%2F45OD1eKlwj2e2TvUY1SE9fpTYnUDKNkhPs6jXmtIglnxusQkZv1hcFXj32jRa10JM1ArerYjTVRb5DkYbL9bIHIllzgGz9FMegfowV&X-Amz-Signature=c3f12d2dd418f7b4dfc26cd69a7c7f31c0ef54fc2e54e8b3e2c45d0fef4f5713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
---

AcWing基础课学习


# 排序


## 1. 快速排序


### 1. 原理


对于一段无序的数列，若要将其排序，可以以此步骤进行：

- 对于一段的数列，可以先任取一点`mid`作为判断点。(其中`mid`一般为数列中点)
- 对于这段数列进行一次遍历，将大于`mid`的数放于右端，小于`mid`的数放于左端。
- 然后对于分配过的序列，选取其`[l,p]`,`[p+1,r]`两个子段继续上述操作，直到长度为`1`。(其中`p`为上述左右两端的分界点)

### 2. 具体实现(代码)


_**本代码思路参考自y总**_


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

- 时间复杂度：O(N*logN)

### 3. 相关题目

- [AcWing 785. 快速排序](https://www.acwing.com/problem/content/787/)
- [AcWing 786. 第k个数](https://www.acwing.com/problem/content/788/)

## 2. 归并排序


### 1. 原理


对于一段无序的数列，与快速排序相似，若要将其排序，可以以此步骤进行：

- 对于一段的数列，可以先任取一点`mid`作为分割点。(其中`mid`一般为数列中点)
- 先选取其`[l,mid]`,`[mid+1,r]`两个子段继续排序，并假定其已经排序完成。
- 然后对于已经排序过的两段子段，按照排序顺序先放入`b`数组中，然后再将排序过的数列覆盖原数列。

### 2. 具体实现(代码)


_**本代码思路参考自y总**_


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

- 时间复杂度：O(N*logN)

### 3. 相关应用

- 求逆序对

当用归并排序对数组进行排序时，可以发现，当出现`a[i]>b[j]`时，即出现了逆序对，且对于当前`a[j]`来说，会出现`mid-i+1`个逆序对(即`a[j]`与`[i,mid]`共`mid-i+1`个数配对组合成逆序对)。由此我们可以在排序时求出对应数列中存在的逆序对。


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


### 4. 相关题目

- [AcWing 787. 归并排序](https://www.acwing.com/problem/content/789/)
- [AcWing 788. 逆序对的数量](https://www.acwing.com/problem/content/790/)

![ea85b4d19f624e219ca3da0cac7fa525.png](https://img-blog.csdnimg.cn/ea85b4d19f624e219ca3da0cac7fa525.png)


# 二分


## 1. 整数二分


### 1.1 算法原理


对于一个单调的队列，我们可以通过其单调的特性，对于要找到的数`k`可以通过以下方法找到：

> 先确定寻找的范围l和r当l<r时，先取范围中点mid，将区间[l,r]分为[l,mid]和[mid+1,r]（此时mid=l+r>>1）或[l,mid-1]和[mid,r]（此时mid=l+r+1>>1）然后，在l<r条件下，根据check(mid)函数，对l，r进行更新，直到l>=r

### 1.2 代码实现


_**本代码思路参考自y总**_


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


### 2.1 算法原理


对于一个单调的队列，我们可以通过其单调的特性，与整数二分相似，对于要找到的数`k`可以通过以下方法找到：

> 先确定寻找的范围l和r当r-l>eps时，先取范围中点mid，mid=(l+r)/2然后，在r-l>eps条件下，根据check(mid)函数，对l，r进行更新，直到r-l<=eps

### 2.2 代码实现


_**本代码思路参考自y总**_


```plain text
double bsearch(double l,double r){
	while(r-l>eps){
		double mid = (l+r)/2;
		if(check(mid)) r=mid;
		else l=mid;
	}return l;
}
```


### 2.3 相关题目

- [AcWing 790. 数的三次方根](https://www.acwing.com/problem/content/792/)

![626e3c9dbe834576b1f325b94c772550.png](https://img-blog.csdnimg.cn/626e3c9dbe834576b1f325b94c772550.png)
