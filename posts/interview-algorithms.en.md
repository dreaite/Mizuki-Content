---
title: 'Interview Algorithm Study 1'
published: 2023-08-11
updated: 2023-08-11
description: 'Interview solutions for snake matrices, linked-list quicksort, peaks, egg dropping, minimum stacks, and cycle-entry detection, with code.'
image: 'https://r2.dreaife.tokyo/notion/covers/1670090a8eaf4eab9ccd3f1332d4e916/2421860-20230811144113268-1519746820.png'
tags: ['meeting', 'algorithm']
category: 'STUDY'
draft: false
lang: 'en'
---

# Snake Matrix

Microsoft interview question

### Problem Description

Given two integers \$n\$ and \$m\$, output an \$n\$-row, \$m\$-column matrix filled with the numbers \$1\$ through \$n \\times m\$ in a spiral pattern.

See the examples for the exact matrix format.

### Input Format

The input consists of one line containing two integers, \$n\$ and \$m\$.

### Output Format

Output the required matrix.

The matrix occupies \$n\$ lines, with each line containing \$m\$ space-separated integers.

### Data Range

\$1 \\le n,m \\le 100\$

## Solution

### Simulation:

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

### Boundary Simulation:

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

# Quicksort on a Singly Linked List

Megvii interview question

### Problem Description

Given a singly linked list, sort it using the quicksort algorithm.

Requirements: The expected average time complexity is \$O(nlogn)\$, and the expected additional space complexity is \$O(logn)\$.

**Question:** What should you do if you can only modify the linked-list structure and cannot modify the val of each node?

### Data Range

All numbers in the linked list are within the \$int\$ range, and the list length is within \$\[0, 10000\]\$.

The test data is generated completely at random.

## Solution

The idea is essentially the same as ordinary quicksort. Partition the linked list into three segments containing values less than val, equal to val, and greater than val. Recursively quicksort the first and last segments, then concatenate the three sorted segments in order.

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

# Find a Peak Element

A peak element is an element whose value is strictly greater than the values of its adjacent elements.

Given an integer array `nums`, find a peak element and return its index. The array may contain multiple peaks; in that case, you may return the position of **any peak element**.

You may assume that `nums[-1] = nums[n] = -∞`.

You must implement an algorithm with a time complexity of `O(log n)` to solve this problem.

**Constraints:**

- `1 <= nums.length <= 1000`
- `231 <= nums[i] <= 231 - 1`
- `nums[i] != nums[i + 1]` for every valid `i`

## Solution

When there is a slope, following it toward the higher point will lead to an answer.

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

Given an \$n \\times n\$ matrix containing \$n \\times n\$ **distinct** integers.

Definition of a local minimum: If a number is smaller than all of its adjacent numbers, it is called a local minimum.

The adjacent numbers of an element are the elements immediately above, below, to the left, and to the right of it. Note that an element on an edge or in a corner may have fewer than four adjacent elements.

Find the position of any local minimum within a time complexity of \$O(nlogn)\$, and output its row and column.

The matrix is hidden in this problem. You can obtain the value at a particular position in the matrix through the predefined \$int\$ function \$query\$.

For example, \$query(a,b)\$ returns the value at row \$a\$ and column \$b\$ of the matrix.

**Notes:**

1. Matrix rows and columns are both indexed starting from \$0\$.
2. The number of calls to `query()` cannot exceed \$(n + 2) \\times \\lceil log_2n \\rceil + n\$.
3. The answer may not be unique; output the position of any local minimum.

### Data Range

\$1 \\le n \\le 300\$, and the integers in the matrix are within the `int` range.

## Solution

As in the previous problem, the call limit provides a hint: We can traverse the n elements in each of \$log_2n\$ columns. Specifically:

Use binary search to determine which column contains a local minimum, then traverse that column to obtain the answer. The binary-search condition is based on comparing the minimum value in a column with the values to its left and right in the same row.

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

# Egg Hardness

Google interview question

### Input Format

The input contains multiple test cases. Each test case occupies one line and contains two positive integers, \$n\$ and \$m\$. Here, \$n\$ represents the building height, and \$m\$ represents the number of eggs you currently have. These eggs have the same hardness—that is, when dropped from the same height, they will either all break or all remain intact—and their hardness is at most \$n\$.

You may assume that an egg with hardness \$x\$ will never break when dropped from a height less than or equal to \$x\$; an unbroken egg can be reused. It will always break when dropped from any height greater than \$x\$.

For each input test case, you may assume that the hardness of the eggs is between \$0\$ and \$n\$. In other words, an egg dropped from floor \$n+1\$ will certainly break.

### Output Format

For each test case, output an integer representing the number of egg drops required in the worst case when using the optimal strategy.

### Data Range

\$1 \\le n \\le 100\$,<br>\$1 \\le m \\le 10\$

### Example Explanation

The optimal strategy is the strategy that minimizes the number of egg drops required in the worst case.

If there is only one egg, you can only start dropping it from the first floor. In the worst case, the egg's hardness is 100, so 100 drops are required. If you use another strategy, you may be unable to determine the egg's hardness. For example, if you first drop it from the second floor and it breaks, you cannot determine whether its hardness is 0 or 1. Therefore, in the worst case, infinitely many drops would be required, so the answer for the first test case is 100.

## Solution

### dp1

Use `f[i][j]` to represent the optimal strategy for an interval of length i using j eggs.

For each egg j, there are two possible cases: Egg j is not used, so `f[i][j]=f[i][j-1]`; or egg j is used. There are i possible drop positions from 1\~i. Let one such position be k. Two outcomes are possible: The egg breaks (`f[k-1][j-1]`), or the egg does not break (`f[i-k][j]`). The worst case is the maximum of these two values, so the minimum number of drops is `min(f[i][j],max(f[k-1][j-1],f[i-k][j])+1)`.

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

Unlike the previous method, `f[i][j]` represents the maximum interval length that can be tested using j eggs in i trials.

Suppose the test position is k. There are two possible outcomes: The egg breaks (`f[i-1][j-1]`, recursively testing the lower part), or it does not break (`f[i-1][j]`, recursively testing the upper part).

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

# Stack with a min Function

Hulu interview question

### Problem Description

Design a stack that supports operations such as push, pop, and top, and can retrieve its minimum element in O(1) time.

- push(x)–inserts element x into the stack
- pop()–removes the top element from the stack
- top()–gets the top element
- getMin()–gets the minimum element in the stack

### Data Range

The total number of operation commands is \$\[0,100\]\$.

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

Use an array to directly store the current minimum value at each position when a number is inserted.

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

Maintain the minimum value using a monotonic stack.

Use `ck.top() >= x` to ensure that the minimum values stored in ck are monotonically decreasing. During a pop operation, ck only needs to be updated if the popped value equals the current minimum in ck. To obtain the minimum value, simply return `ck.top()`.

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

# Entry Node of a Cycle in a Linked List

Alibaba interview question

### Problem Description

Given a linked list, output the entry node of its cycle if it contains one.

If it does not contain a cycle, output `null`.

### Data Range

Node val values are within \$\[1,1000\]\$.<br>All node val values are distinct.<br>The linked-list length is within \$\[0,500\]\$.

### Example

![](https://www.acwing.com/media/article/image/2018/12/02/19_69ba6d14f5-QQ%E6%88%AA%E5%9B%BE20181202023846.png)

```plain text
给定如上所示的链表：
[1, 2, 3, 4, 5, 6]
2
注意，这里的2表示编号是2的节点，节点编号从0开始。所以编号是2的节点就是val等于3的节点。
则输出环的入口节点3.

```

## Solution

Since all val values are distinct and their range is only 1000, use an array to record the node corresponding to each previously encountered val. When a recorded val is encountered again, a cycle has been found.

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
