---
title: '面试算法学习1'
published: 2023-08-11
updated: 2023-08-11
description: '包含多个算法面试题及其解法，包括蛇形矩阵填充、单链表快速排序、寻找峰值、极小值、鸡蛋硬度问题、支持最小值检索的栈以及链表中环的入口节点的查找。每个题目附有详细描述、输入输出格式和示例代码。'
permalink: 'interview-algorithms'
image: 'https://r2.dreaife.tokyo/notion/covers/1670090a8eaf4eab9ccd3f1332d4e916/2421860-20230811144113268-1519746820.png'
tags: ['meeting', 'algorithm']
category: 'algorithm'
draft: false
lang: 'en'
---

# Spiral Matrix

Microsoft interview question

### Problem Description

Input two integers $n$ and $m$, output an $n$ by $m$ matrix, filling numbers from $1$ to $n \times m$ in a spiral snake pattern.

The exact matrix form can be referenced from the sample.

### Input format

The input consists of a single line containing two integers $n$ and $m$.

### Output format

Output the required matrix.

The matrix has $n$ rows, each row containing $m$ integers separated by spaces.

### Constraints

$1 \le n,m \le 100$

## Solution

### Simulation Method:

```c
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;
const int N = 110;
int n,m,a[N][N];
int main(){
    cin>>n>>m;
    int l = 0,r = m-1, t = 0,d = n-1,cnt=1;
    while(l<=r || t <= d){
        for(int i=l;i<=r && t<=d;i++) a[t][i] = cnt++;t++;
        for(int i=t;i<=d && l<=r;i++) a[i][r] = cnt++;r--;
        for(int i=r;i>=l && t<=d;i--) a[d][i] = cnt++;d--;
        for(int i=d;i>=t && l<=r;i--) a[i][l] = cnt++;l++;
    }
    for(int i=0;i<n;i++)
        for(int j=0;j<m;j++)
            cout<<a[i][j]<<" \\n"[j==m-1];

    return 0;
}
```

### Boundary-following Simulation:

```c
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;
const int N = 110;
int n,m,a[N][N],dx[4]={0,1,0,-1},dy[4]={1,0,-1,0};
int main(){
    cin>>n>>m;int x=0,y=0;
    for(int i=1,u=0;i<=n*m;i++){
        a[x][y] = i;
        x += dx[u];y += dy[u];
        if(a[x][y] || x<0 || y<0 || x>=n || y>=m)
            x-=dx[u],y-=dy[u],u = (u+1)%4,
            x += dx[u],y += dy[u];
    }

    for(int i=0;i<n;i++) for(int j=0;j<m;j++)
        cout<<a[i][j]<<" \\n"[j==m-1];
    return 0;
}
```


# Quick Sort on a Singly Linked List

Megvii interview question

### Problem Description

Given a singly linked list, sort it using the quicksort algorithm.

Requirements: expected average time complexity is $O(n \log n)$ and expected additional space complexity is $O(\log n)$.

**Thought question:** If you can only change the structure of the list and cannot modify each node's val, how would you do it?

### Constraints

All numbers in the list are within the int range, and the list length is in $[0, 10000]$.

The data for this problem is completely randomly generated.

## Solution

The approach is basically the same as ordinary quicksort: partition the list into three parts based on a value: less than the value, equal to the value, and greater than the value; recursively quicksort the front and back sections, and then concatenate the three parts in order.

```c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* quickSortList(ListNode* head) {
        if(!head || !head->next) return head;

        auto left = new ListNode(-1),mid=new ListNode(-1),right=new ListNode(-1),
            ltail = left,mtail = mid,rtail = right;
        int val = head->val;

        for(auto p=head;p;p = p->next){
            if(p->val < val) ltail = ltail->next = p;
            else if(p->val == val) mtail = mtail->next = p;
            else rtail = rtail->next = p;
        }

        ltail->next = mtail->next = rtail->next = NULL;
        left->next = quickSortList(left->next);
        right->next = quickSortList(right->next);

        get_tail(left)->next = mid->next;
        get_tail(left)->next = right->next;

        auto p = left->next;
        delete left;delete mid;delete right;
        return p;
    }

    ListNode* get_tail(ListNode* head) {
        while (head->next) head = head->next;
        return head;
    }
};
```


# Find Peak Element

A peak element is an element that is strictly greater than its left and right neighbors.

Given an integer array nums, find a peak element and return its index. The array may contain multiple peaks; in that case, you may return the index of any one of the peaks.

You may assume nums[-1] = nums[n] = -∞.

You must implement an algorithm with time complexity O(log n) to solve this problem.

**Hint:**

- 1 <= nums.length <= 1000
- -2^31 <= nums[i] <= 2^31 - 1
- For all valid i, nums[i] != nums[i + 1]

## Solution

One can observe that when there is a slope, following the direction of the higher point leads to the answer.

```c++
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int l=0,r = nums.size()-1;
        while(l<r){
            int mid = (l+r) >> 1;
            long long lm = mid-1,rm = mid+1;
            if(lm<0) lm = INT_MIN-1ll;
            else lm = nums[lm];
            if(rm>=nums.size()) rm = INT_MIN-1ll;
            else rm = nums[rm];
            long long key = nums[mid];
            if(key>lm && key>rm)
                return mid;
            else if(key>lm &&rm>key)
                l = mid+1;
            else
                r = mid-1;
        }return l;
    }
};
```


# Find a Local Minimum in a Matrix

Microsoft interview question

### Problem Description

Given an $n \times n$ matrix containing $n \times n$ pairwise distinct integers.

Define a local minimum as a value that is smaller than all of its adjacent numbers. An adjacent number is one of the four directions (up, down, left, right). Numbers on the border or corner may have fewer than four neighbors.

You must find any local minimum in $O(n \log n)$ time and output its position as its row index and column index.

The matrix is hidden, and you can obtain values via the predefined function query. For example, query(a,b) returns the value at row a, column b.

Notes:
1. Rows and columns are 0-based.
2. The number of query() calls must not exceed $(n + 2) \times \lceil \log_2 n \rceil + n$.
3. The answer is not unique; output any one local minimum's position.

### Data Range

$1 \le n \le 300$, matrix values fit in int.

## Solution

Similar to the previous problem, and the call limit gives a hint: we can scan n numbers across log2(n) columns. The approach is to binary search for the column containing a local minimum, then scan that column to obtain the answer, where the binary search condition compares the minimum value in a column with its left and right neighbors.

```c++
// Forward declaration of queryAPI.
// int query(int x, int y);
// return int means matrix[x][y].
class Solution {
public:
    vector<int> getMinimumValue(int n) {
        typedef long long ll;
        ll INF = 1e15;
        int l,r;l=0;r = n-1;

        while(l<r){
            int mid = l+r>>1;
            ll val = INF;
            int p=0;
            for(int i=0;i<n;i++){
                int t = query(i,mid);
                if(t < val)
                    val = t,p = i;
            }
            ll lt = mid ? query(p,mid-1):INF;
            ll rt = mid+1<n ? query(p,mid+1):INF;

            if(val<lt && val<rt)
                return {p,mid};
            if(lt<val)
                r = mid - 1;
            else
                l = mid + 1;
        }

        ll val = INF;int p=0;
        for(int i=0;i<n;i++){
            int t = query(i,r);
            if(t<val)
                val = t,p = i;
        }
        return {p,r};

    }
};
```


# Egg Dropping Problem

Google interview question

### Input Format

The input consists of multiple test cases, each on one line containing two positive integers $n$ and $m$, where $n$ is the height of the building and $m$ is the number of eggs you have. All eggs have the same hardness (i.e., they either all break or all do not break when dropped from the same height), and $m \le n$.

You may assume the hardness is between $0$ and $n$, i.e., dropping from the $(n+1)$-th floor will certainly break.

### Output Format

For each test case, output a single integer representing the minimum number of egg drops required in the worst case with the optimal strategy.

### Data Range

$1 \le n \le 100$,
$1 \le m \le 10$

### Sample Explanation

An optimal strategy minimizes the number of drops in the worst case.

If you have only one egg, you can only start from the first floor; in the worst case, the hardness is 100, so you need 100 drops. If you use another strategy, you might not be able to determine the egg hardness (for example, if you drop on the second floor first and it breaks, you cannot determine whether the hardness is 0 or 1), i.e., in the worst case you would need infinitely many drops, so the answer for the first test case is 100.

## Solution

### dp1

Let f[i][j] denote the optimal number of drops for an interval of length i with j eggs.

For each egg j, there are two possibilities: not using egg j, i.e., f[i][j] = f[i][j-1]; using egg j, for the i positions 1..i there are i cases, choose one k; if the egg breaks we have f[k-1][j-1], if not we have f[i-k][j]. The worst-case is max(f[k-1][j-1], f[i-k][j]); the minimal strategy is min(f[i][j], max(f[k-1][j-1], f[i-k][j]) + 1).

```c++
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N =110,M=11;
int n,m,f[N][M];

int main(){
    while(cin>>n>>m){
        for(int i=1;i<=n;i++) f[i][1] = i;
        for(int i=1;i<=m;i++) f[1][i] = 1;

        for(int i=2;i<=n;i++)
            for(int j=2;j<=m;j++){
                f[i][j] = f[i][j-1];
                for(int k=1;k<=i;k++)
                    f[i][j] = min(f[i][j],max(f[k-1][j-1],f[i-k][j])+1);
            }
        cout<<f[n][m]<<endl;
    }return 0;
}
```

### dp2

Different from the previous method, let f[i][j] denote the maximum number of floors that can be tested with i moves and j eggs.

Assume the tested floor is k; there are two cases: the egg breaks (f[i-1][j-1], recurse to the lower part) or does not break (f[i-1][j], recurse upper part).

`f[i][j] = f[i-1][j]+f[i-1][j-1]+1;`

```c++
#include<iostream>
#include<algorithm>
#include<cstring>
using namespace std;
const int N =110,M=11;
int n,m,f[N][M];

int main(){
    while(cin>>n>>m){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=m;j++)
                f[i][j] = f[i-1][j]+f[i-1][j-1]+1;

            if(f[i][m] >= n){
                cout<<i<<endl;
                break;
            }
        }
    }return 0;
}
```


# Stack with min function

Hulu interview question

### Problem Description

Design a stack that supports push, pop, top, and can retrieve the minimum element in O(1) time.

- push(x) – push element x onto the stack
- pop() – remove the top element
- top() – get the top element
- getMin() – get the minimum element in the stack

### Constraints

Total number of operations in [0,100].

### Example

```plain text
MStack minStack = new MStack();
minStack.push(-1);
minStack.push(3);
minStack.push(-4);
minStack.getM();   --> Returns -4.
minStack.pop();
minStack.top();      --> Returns 3.
minStack.getM();   --> Returns -1.
```

## Solution

### Method 1

Directly store, for each position, the minimum value up to that position in an array.

```c++
class MinStack {
public:
    /** initialize your data structure here. */
    int len;
    int a[110],ck[110];

    MinStack() {
        len = a[0] = ck[0] = 0;
    }

    void push(int x) {
        a[len] = x;
        ck[len] = min(len?ck[len-1]:x,x);
        len++;
    }

    void pop() {
        len--;
    }

    int top() {
        return a[len-1];
    }

    int getMin() {
        return ck[len-1];
    }
};
```

### Method 2

Maintain the minimum values with a monotonic stack.

Keep ck as a monotone decreasing stack of minima by using ck.top() >= x. When popping, if the popped value equals the current minimum, pop from ck; otherwise, ck remains. The minimum is ck.top().

```c++
class MinStack {
public:
    /** initialize your data structure here. */
    stack<int> a;
    stack<int> ck;

    MinStack() {

    }

    void push(int x) {
        a.push(x);
        if(ck.empty() || ck.top() >= x)
            ck.push(x);
    }

    void pop() {
        if(ck.top() == a.top())
            ck.pop();
        a.pop();
    }

    int top() {
        return a.top();
    }

    int getMin() {
        return ck.top();
    }
};
```


# Entry Node of Loop in Linked List

Alibaba interview question

### Problem Description

Given a linked list, if it contains a loop, output the entry node of the loop.

If there is no loop, output null.

### Constraints

Node val range is [1,1000]. Node values are all distinct. List length is in [0,500].

### Sample

![19_69ba6d14f5-QQ%E6%88%AA%E5%9B%BE20181202023846.png](https://www.acwing.com/media/article/image/2018/12/02/19_69ba6d14f5-QQ%E6%88%AA%E5%9B%BE20181202023846.png)

```plain text
Given the linked list as shown above:
[1, 2, 3, 4, 5, 6]
2
Note that 2 denotes the node with index 2, and node indices start at 0. So the node with index 2 has val equal to 3.
Then the entry node of the loop is the one with value 3.
```

## Solution

It turns out that with distinct values and a range up to 1000, you can use an array to record the first node seen for each value. When you visit a value that has already been recorded, you have found the loop.

```c++
class Solution {
public:
    ListNode *entryNodeOfLoop(ListNode *head) {
        ListNode* ck[1010];

        for(auto p=head;p;p=p->next){
            int val = p->val;
            if(ck[val])
                return ck[val];
            ck[val] = p;
        }return NULL;
    }
};
```
