---
title: '排序 二分学习'
published: 2022-07-08
updated: 2022-07-08
description: '介绍了快速排序和归并排序的原理及实现，包括时间复杂度和相关题目。快速排序通过选取中点将数列分为两部分进行排序，归并排序则将已排序的子段合并。还讨论了整数和浮点数的二分查找算法及其实现方法。'
permalink: 'sorting-binary-search'
image: 'https://r2.dreaife.tokyo/notion/covers/4b474fbfaee24827aeb7eab319feed6b/440016BF77F4742DE9C878230F9C813E.jpg'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
lang: 'en'
---

AcWing Basic Course Study


# Sorting


## 1. Quick Sort


### 1. Principle


For a segment of an unordered sequence, if you want to sort it, you can proceed as follows:

- For a segment of numbers, you can first pick an arbitrary point `mid` as the pivot. (Where `mid` is generally the middle of the sequence)
- Perform a single pass on this segment, placing numbers greater than `mid` to the right, and numbers less than `mid` to the left.
- Then for the partitioned subsequences, select its `[l,p]` and `[p+1,r]` two subsegments to continue the above operation, until the length is `1`. (Where `p` is the boundary between the left and right ends)

### 2. Implementation (Code)


_**This code idea is adapted from Mr. Y**_


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

- Time complexity: O(N*logN)

### 3. Related Problems

- [AcWing 785. Quick Sort](https://www.acwing.com/problem/content/787/)
- [AcWing 786. The k-th Number](https://www.acwing.com/problem/content/788/)

## 2. Merge Sort


### 1. Principle


For an unordered sequence, similar to Quick Sort, if you want to sort it, you can proceed as follows:

- For a segment of numbers, you can first select a point `mid` as the split point. (Where `mid` is generally the middle of the sequence)
- First take its `[l,mid]` and `[mid+1,r]` two subsegments for sorting, and assume they are already sorted.
- Then for the two already sorted subsegments, place them into array `b` in sorted order, and then overwrite the original sequence with the sorted numbers.

### 2. Implementation (Code)


_**This code idea is adapted from Mr. Y**_


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

- Time complexity: O(N*logN)

### 3. Related Applications

- Inversions

When sorting an array with merge sort, you can observe that when `a[i] > a[j]` occurs, an inversion is formed, and for the current `a[j]`, there will be `mid-i+1` inversions (i.e., `a[j]` paired with the numbers in `[i,mid]` form `mid-i+1` inversions). Therefore, during sorting, we can compute the number of inversions present in the sequence.


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

### 4. Related Problems

- [AcWing 787. Merge Sort](https://www.acwing.com/problem/content/789/)
- [AcWing 788. Number of Inversions](https://www.acwing.com/problem/content/790/)

![ea85b4d19f624e219ca3da0cac7fa525.png](https://img-blog.csdnimg.cn/ea85b4d19f624e219ca3da0cac7fa525.png)


# Binary Search


## 1. Integer Binary Search


### 1.1 Algorithm Principle


For a monotonic sequence, by exploiting its monotonic property, to find the desired number `k`, you can proceed as follows:

> First determine the search range l and r. When l < r, take the midpoint mid, split the interval [l,r] into [l,mid] and [mid+1,r] (here mid = l+r>>1) or [l,mid-1] and [mid,r] (here mid = l+r+1>>1). Then, under the condition l<r, based on the check(mid) function, update l and r until l >= r

### 1.2 Code Implementation


_**This code idea is adapted from Mr. Y**_


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


### 1.3 Related Problems

- [AcWing 789. Range of Numbers](https://www.acwing.com/problem/content/791/)

## 2. Floating-point Binary Search


### 2.1 Algorithm Principle


For a monotonic sequence, using its monotonic property, similar to integer binary search, to find the desired number `k`:

> First determine the search range l and r. When r-l > eps, take the midpoint mid, mid = (l+r)/2, then, under the condition r-l > eps, based on the check(mid) function, update l and r until r-l <= eps

### 2.2 Code Implementation


_**This code idea is adapted from Mr. Y**_


```plain text
double bsearch(double l,double r){
	while(r-l>eps){
		double mid = (l+r)/2;
		if(check(mid)) r=mid;
		else l=mid;
	}return l;
}
```


### 2.3 Related Problems

- [AcWing 790. Cube Root of a Number](https://www.acwing.com/problem/content/792/)

![626e3c9dbe834576b1f325b94c772550.png](https://img-blog.csdnimg.cn/626e3c9dbe834576b1f325b94c772550.png)
