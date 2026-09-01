---
title: '面接アルゴリズム学習1'
published: 2023-08-11
updated: 2023-08-11
description: '蛇行行列、連結リストのクイックソート、ピーク探索、卵落とし、最小スタック、循環入口検出などの面接問題を、解法とコード付きで整理します。'
image: 'https://r2.dreaife.tokyo/notion/covers/1670090a8eaf4eab9ccd3f1332d4e916/2421860-20230811144113268-1519746820.png'
tags: ['meeting', 'algorithm']
category: 'STUDY'
draft: false
lang: 'ja'
---

# 蛇行行列

Microsoftの面接問題

### 問題の説明

2つの整数 \$n\$ と \$m\$ を入力し、\$n\$ 行 \$m\$ 列の行列を出力します。数値 \$1\$ から \$n \\times m\$ までを渦巻き状に行列へ格納してください。

具体的な行列の形式については、サンプルを参照してください。

### 入力形式

入力は1行で、2つの整数 \$n\$ と \$m\$ が含まれます。

### 出力形式

要件を満たす行列を出力してください。

行列は \$n\$ 行で構成され、各行には空白で区切られた \$m\$ 個の整数が含まれます。

### データ範囲

\$1 \\le n,m \\le 100\$

## 解法

### シミュレーション：

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

### 境界到達シミュレーション：

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

# 単方向連結リストのクイックソート

Megviiの面接問題

### 問題の説明

単方向連結リストが与えられたとき、クイックソートアルゴリズムを使用して並べ替えてください。

要件：期待平均時間計算量を \$O(nlogn)\$、期待追加空間計算量を \$O(logn)\$ とします。

**考察問題：** 各ノードのval値を変更できず、連結リストの構造のみを変更できる場合は、どのようにすればよいでしょうか？

### データ範囲

連結リスト内のすべての数値は \$int\$ の範囲内で、連結リストの長さは \$\[0, 10000\]\$ です。

本問題のデータは完全にランダムに生成されます。

## 解法

考え方は通常のクイックソートとほぼ同じです。あるvalを基準として、連結リストをval未満、valと等しい、valより大きい、という3つの部分に分割します。前後の2つの部分を再帰的にクイックソートし、並べ替えが完了した3つの部分を先頭から順に連結すれば完成です。

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

# ピーク値の探索

ピーク要素とは、その値が左右の隣接要素よりも厳密に大きい要素のことです。

整数配列 `nums` が与えられたとき、ピーク要素を見つけ、そのインデックスを返してください。配列には複数のピークが含まれる場合があります。その場合は、**任意のピーク**の位置を返せば構いません。

`nums[-1] = nums[n] = -∞` と仮定できます。

この問題を解くために、時間計算量が `O(log n)` のアルゴリズムを実装する必要があります。

**ヒント：**

- `1 <= nums.length <= 1000`
- `231 <= nums[i] <= 231 - 1`
- すべての有効な `i` について `nums[i] != nums[i + 1]`

## 解法

傾斜が存在する場合、高い方へ進めば答えを見つけられることが分かります。

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

# 行列の極小値の探索

Microsoftの面接問題

### 問題の説明

\$n \\times n\$ の行列が与えられます。この行列には、**すべて異なる** \$n \\times n\$ 個の整数が含まれています。

極小値を次のように定義します。ある数値が隣接するすべての数値よりも小さい場合、その数値を極小値と呼びます。

ある数値に隣接する数値とは、上下左右の4方向に隣接する数値を指します。ただし、境界や角にある数値では、隣接する数値が4つ未満になる場合があります。

\$O(nlogn)\$ の時間計算量以内で任意の極小値の位置を見つけ、それが何行目の何列目にあるかを出力してください。

本問題では行列が非公開になっています。あらかじめ用意された \$int\$ 関数 \$query\$ を使用して、行列内の特定位置の値を取得できます。

たとえば、\$query(a,b)\$ を使用すると、行列の第 \$a\$ 行、第 \$b\$ 列にある値を取得できます。

**注意：**

1. 行列の行と列は、いずれも \$0\$ から番号が付けられます。
2. `query()`関数の呼び出し回数は \$(n + 2) \\times \\lceil log_2n \\rceil + n\$ を超えてはいけません。
3. 答えは一意ではないため、任意の極小値の位置を出力すれば構いません。

### データ範囲

\$1 \\le n \\le 300\$。行列内の整数は`int`の範囲内です。

## 解法

前問と同様です。また、呼び出し回数の制約からもヒントを得られます。\$log_2n\$ 個の列について、それぞれn個の数値を走査できます。具体的な方法は次のとおりです。

二分探索によって極小値を含む列を特定し、その列を走査することで答えを得られます。二分探索の条件には、ある列の最小値と、その値と同じ行にある左右の値との大小関係を使用します。

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

# 卵の硬さ

Googleの面接問題

### 入力形式

入力には複数のデータセットが含まれます。各データセットは1行で、2つの正の整数 \$n\$ と \$m\$ を含みます。\$n\$ は建物の高さ、\$m\$ は現在所持している卵の個数を表します。これらの卵の硬さは同じです（つまり、同じ高さから落とすと、すべて割れるか、すべて割れないかのいずれかです）。また、\$m\$ は \$n\$ 以下です。

硬さが \$x\$ の卵は、高さ \$x\$ 以下の場所から落としても決して割れず（割れなかった卵は引き続き使用できます）、\$x\$ より高い場所から落とすと必ず割れるものとします。

各入力データについて、卵の硬さは \$0\$ から \$n\$ の間であると仮定できます。つまり、\$n+1\$ 階から卵を落とすと必ず割れます。

### 出力形式

各入力について、最適な戦略を使用した場合に、最悪のケースで必要となる卵を落とす回数を表す整数を出力してください。

### データ範囲

\$1 \\le n \\le 100\$,<br>\$1 \\le m \\le 10\$

### サンプルの説明

最適な戦略とは、最悪のケースで必要となる卵を落とす回数が最小になる戦略を指します。

卵が1個しかない場合、1階から順に落とすしかありません。最悪のケースでは卵の硬さが100なので、100回落とす必要があります。ほかの戦略を採用すると、卵の硬さを特定できない可能性があります（たとえば、最初に2階から落として割れた場合、硬さが0なのか1なのか判断できません）。つまり、最悪のケースでは無限回落とす必要があるため、最初のデータセットの答えは100です。

## 解法

### dp1

`f[i][j]` を、長さiの区間でj個の卵を使用した場合の最適な戦略とします。

各卵jについて、2つのケースを考えられます。卵jを使用しない場合は `f[i][j]=f[i][j-1]` です。卵jを使用する場合、1\~iの間にi通りのケースがあります。そのうち1つをkとすると、さらに2つのケースに分かれます。卵が割れた場合（`f[k-1][j-1]`）と、卵が割れなかった場合（`f[i-k][j]`）です。最悪のケースは両者の最大値となり、このときの最小戦略は `min(f[i][j],max(f[k-1][j-1],f[i-k][j])+1)` です。

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

前の方法とは異なり、`f[i][j]` はi回の測定でj個の卵を使用して測定できる最大の長さを表します。

測定位置をkとすると、卵が割れた場合（`f[i-1][j-1]`、下半分を再帰的に探索）と、割れなかった場合（`f[i-1][j]`、上半分を再帰的に探索）の2つのケースがあります。

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

# min関数を備えたスタック

Huluの面接問題

### 問題の説明

push、pop、topなどの操作をサポートし、最小要素をO(1)時間で取得できるスタックを設計してください。

- push(x)–要素xをスタックに挿入する
- pop()–スタックの先頭要素を削除する
- top()–スタックの先頭要素を取得する
- getMin()–スタック内の最小要素を取得する

### データ範囲

操作コマンドの総数は \$\[0,100\]\$ です。

### サンプル

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

## 解法

### 方法1

配列を1つ使用し、各数値を格納するときに、その位置までの最小値を記録すればよいです。

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

### 方法2

単調スタックを使用して最小値を管理します。

`ck.top() >= x` によって、ckに格納される最小値を単調減少にします。popを実行するとき、削除する値がckの現在の最小値と等しくない限り、ckを更新する必要はありません。最小値を取得するときは、`ck.top()` を取得すればよいです。

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

# 連結リスト内のループの入口ノード

Alibabaの面接問題

### 問題の説明

連結リストが与えられ、その中にループが含まれている場合は、ループの入口ノードを出力してください。

ループが含まれていない場合は、`null` を出力してください。

### データ範囲

ノードのval値の範囲は \$\[1,1000\]\$ です。<br>各ノードのval値は互いに異なります。<br>連結リストの長さは \$\[0,500\]\$ です。

### サンプル

![](https://www.acwing.com/media/article/image/2018/12/02/19_69ba6d14f5-QQ%E6%88%AA%E5%9B%BE20181202023846.png)

```plain text
给定如上所示的链表：
[1, 2, 3, 4, 5, 6]
2
注意，这里的2表示编号是2的节点，节点编号从0开始。所以编号是2的节点就是val等于3的节点。
则输出环的入口节点3.

```

## 解法

val値は互いに異なり、その範囲も1000までであるため、配列を使用して、使用済みのval値に対応するノードを記録すればよいことが分かります。記録済みのvalに再びアクセスしたとき、ループが発生したことになります。

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
