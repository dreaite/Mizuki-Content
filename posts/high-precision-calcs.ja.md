---
title: '高精度演算の学習記録'
published: 2022-07-08
updated: 2022-07-08
description: '高精度演算には加算、減算、乗算、除算が含まれ、通常のデータ型の範囲を超える大きな数を扱う際に用いられます。加算と減算は筆算のシミュレーションで実装し、乗算と除算は各桁を順に処理しつつ先頭のゼロ除去に注意します。理解と実装に役立つ例題と参考コードも掲載しています。'
image: 'https://r2.dreaife.tokyo/notion/covers/d815ba777b54406bbf59e6a4bf6fd14a/2421860-20220712031131300-1134503314.png'
tags: ['algorithm', 'acwing']
category: 'algorithm'
draft: false
lang: 'ja'
---

# 高精度演算

普段、加算・減算・乗算・除算は直接`+-*/`を使って実現しますが、数の長さが`100`や`1000`になると、`int`や`long long`の格納範囲では足りなくなります。そんな時こそ高精度を使う時です。

## 1. 高精度加算 A+B

### 1.1 演算原理

まずは大きな数同士の加算です。通常の加算の手順を模して計算します。例えば下の図のように：

![EZr2Gb4qHlkJixe.png](https://s2.loli.net/2022/07/12/EZr2Gb4qHlkJixe.png)

加算は後ろから前に向かって行われることが分かります。なので得られた大数を`reverse`して逆順にし、計算が終わったら正順に出力します。

### 1.2 例題

- [AcWing 791. 高精度加算](https://www.acwing.com/problem/content/793/)

参考コード：

```c++
void solve(){
	//...
	for(int i=0,c=0;i<max(a.length(),b.length()) || c;i++){
        int t1=0,t2=0;
        if(i<a.length()) t1 = a[i]-'0';
        if(i<b.length()) t2 = b[i]-'0';
        int t = t1 + t2 + c;
        c = t / 10;t %= 10;
        ans.push_back(t+'0');
    }
    //...
}
```


## 2. 高精度減算 A-B

### 2.1 演算原理

次に大きな数同士の減算です。具体的な方法は依然として大数加算と似ていますが、ABの大きさの差により結果が負になることがあります。その場合、`A-B = -(B-A)`として減算の結果を常に正に保つことができます。

**P.S. 減算のため先頭ゼロが出現することがあります。出力前に除去してください。**

### 2.2 例題

- [AcWing 792. 高精度減法](https://www.acwing.com/problem/content/794/)

参考コード：

```c++
bool comp(){
    if(a.length()!=b.length()) return a.length()>b.length();
    for(int i=a.length()-1;~i;i--)
        if(a[i]!=b[i]) return a[i]>b[i];
    return true;
}
void solve(){
    //...
    if(!comp()) p = 1,swap(a,b);
    for(int i=0,c=0;i<a.length();i++){
        int t1=0,t2=0;
        if(i<a.length()) t1 = a[i]-'0';
        if(i<b.length()) t2 = b[i]-'0';
        int t = t1 - t2 + c;
        if(t < 0) c=-1,t+=10;
        else c = 0;
        ans.push_back(t+'0');
    }reverse(ans.begin(),ans.end());
    if(p) cout<<"-";p=-1;
    while(++p<ans.length() && ans[p]=='0');
    ans = ans.substr(min(p,(int)(ans.length()-1)),max((int)(ans.length()-p),1));
    //...
}
```


## 3. 高精度乘法 A*b

### 3.1 演算原理

大数と小数の乗算は比較的単純で、`A`の各桁とbの積和の残りを1つの値で記録します。順に各桁の計算結果を得るだけです。

**P.S. 大きな数が0の時は積の先頭ゼロが出ることがあります。取り除いてください。**

### 3.2 例題

- [AcWing 793. 高精度乗法](https://www.acwing.com/problem/content/795/)

参考コード：

```c++
void solve(){
    for(int i=0,c=0;i<a.length() || c;i++){
        int t1 = 0;
        if(i<a.length()) t1 = a[i]-'0';
        int t = t1 * b + c;
        ans.push_back(t%10+'0');c = t / 10;
    }
}
```


## 4. 高精度除法 A/b

### 4.1 演算原理

同大数と小数の乘法、大数と小数の除法も同様に比較的簡単です。此時は大数の前半から順に後ろへ除いていき、前段と`c`を`b`で割った商と余りを順次記録します。

**P.S. 初期の演算で被除数が小さすぎて先頭ゼロが出現することがあります。出力前に取り除いてください。**

### 4.2 例題

- [AcWing 794. 高精度除法](https://www.acwing.com/problem/content/796/)

参考コード：

```c++
void solve(){
    for(int i=0;i<a.length();i++){
        int t1 = a[i]-'0';
        int t = t1 + 10 * c;
        ans.push_back(t/b + '0');
        c = t%b;
    }int p = -1;while(++p<ans.length() && ans[p]=='0');
    ans = ans.substr(min(p,(int)(ans.length()-1)),max(1,(int)(ans.length()-p)));
}
```