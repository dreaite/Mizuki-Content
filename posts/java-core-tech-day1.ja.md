---
title: 'Java核心技术卷 学习Day01'
published: 2022-07-08
updated: 2022-07-08
description: '本文主要介绍Java的核心技术，包括Java的概述、环境配置、基本程序结构、数据类型、变量、运算符、字符串处理、输入输出、流程控制以及数组的使用。强调了Java的简单性、面向对象特性和跨平台能力，并详细列出了Java开发工具包（JDK）、运行时环境（JRE）等专业术语及其解释。'
permalink: 'java-core-tech-day1'
image: 'https://r2.dreaife.tokyo/notion/covers/487668a94c7e4b98be77b6919f7e737e/300b942f9dd6e8b7.jpg'
tags: ['java', 'language']
category: 'cs-base'
draft: false
lang: 'ja'
---

Javaの学習と復習として、本稿は主に[《Java核心技术卷》](https://github.com/dreaife/JavaBaseLearning/blob/master/source/)を参照して学習対象とします。

# 第1章 Javaの概要

> Javaホワイトペーパー
>
> 簡潔性 オブジェクト指向 分散性 堅牢性 安全性 アーキテクチャ中立性 移植性 解釈型 高性能 マルチスレッド 動的性
>
> - Javaアプレット
>
> ウェブページ上で実行されるJavaプログラム: applet
>
> - JavaScriptとJava
>
> 名前が同じでも両者には関係がありません。Javaは静的型付けで、JavaScriptよりもエラーを検出する能力が強いです
>
>

# 第2章 Java環境

- Java専門用語

| 用語名                                  | 略語  | 説明                                             |
| ------------------------------------ | --- | ---------------------------------------------- |
| Java Development Kit（Java開発キット）      | JDK | Javaプログラムを作成するプログラマーが使用するソフトウェア                              |
| Java Runtime Environment（Java実行環境） | JRE | Javaプログラムを実行するユーザーが使用するソフトウェア                               |
| Server JRE（サーバーJRE）                  |     | サーバー上でJavaプログラムを実行するソフトウェア                             |
| Standard Edition（標準エディション）                | SE  | デスクトップまたは簡易サーバーアプリケーション向けのJavaプラットフォーム                           |
| Enterprise Edition（エンタープライズ版）              | EE  | 複雑なサーバーアプリケーション向けのJavaプラットフォーム                              |
| Micro Edition（マイクロエディション）                    | ME  | 小型デバイス向けのJavaプラットフォーム                                 |
| JavaFX                              |     | グラフィカルユーザーインターフェースの代替ツールキットで、Java 11以前の一部のJava SEリリースで提供されていました |
| OpenJDK                              |     | Java SE の無料のオープンソース実装                              |
| Java2                                | J2  | 1998～2006年のJavaバージョンを説明するための時代遅れの用語               |
| Software Development Kit（ソフトウェア開発キット）    | SDK | 1998～2006年のJDKを指す時代遅れの用語                  |
| Update                               | u   | Oracle社の用語で、Java8以前のバグ修正リリースを示す               |
| NetBeans                             |     | Oracle社の統合開発環境                               |

- Javaのインストールとコンパイル

```plain text
# 配置環境変数
javac --version			# 見るJavaのバージョン

# コマンドラインでのコンパイル
javac welcome.java
java welcome
```

- 統合開発環境

Eclipse | IntelliJ IDEA | NetBeans

- JShell

Javaの対話的実行


# 第3章 Java基本プログラム

- キャメルケース命名

myClass

- コメント

```plain text
//注释
/*注释*/
/**
  *自動生成ドキュメント
  *注释
  */
```


## 1 データ型

1. 整数型

| int   | 4バイト | -2^32 ~ 2^32 - 1 |
| ----- | --- | ---------------- |
| short | 2バイト | -2^16 ~ 2^16 - 1 |
| long  | 8バイト | -2^64 ~ 2^64 - 1 |
| byte  | 1バイト | -2^8 ~ 2^8 - 1   |


1L/1l　長整数型


0x　十六進法　0 は十進法　0b/0B　二進法

1. 浮動小数点型

| float  | 4バイト | 約±3.40282347E+38F 6~7桁         |
| ------ | --- | ------------------------------- |
| double | 8バイト | 約±1.79769313486231570E+308 15桁 |


float 1f/1F


double 1D/1d


NaN <== 0/0 || sqrt(-n)


![1356cde21b065d583b5134f9365d4fd4.png](https://img-blog.csdnimg.cn/img_convert/1356cde21b065d583b5134f9365d4fd4.png)

1. char型

```plain text
\\b 退格	\\t タブ	\\n 改行	\\r 復帰	\\" ダブルクォート	\\' シングルクォート	\\\\ バックスラッシュ
```

- Unicode

16ビット：初期

コードポイント U+十六ビット

17コード平面 1（基本多言語平面U+0000 ~ U+FFFF 伝統的なUnicodeコード）

		  2~17（補助字符 U+10000 ~ U+10FFF）

1. boolean型

Boolean型 false || true　論理判定


## 2 変数

- 初期化

定義後には明示的な初期化が必要で、初期化されていないと使用できません


final 常量	 enum 列挙型


## 3 演算子


`+ - * / %`

- Math

sqrt	pow	floorMod


三角関数 sin cos tan atan atan2


対数 exp log log10


πとeの近似値 Math.PI Math.E


import static java.lang.Math.*を使用して直接利用可能

- 型変換

低精度 -> 高精度はロスなし


高精度 -> 低精度 有損失-強制型変換 (int) | ...


```plain text
+=	*=	%=	...
k++	++k
==	!=	>	<	>=	<=
&&	||
x?a:b	//(true:false)
&	|	^	~	>>	<<
```


演算子の優先順位


![596cc3093bc2ab5fbb56aba8146403af.png](https://img-blog.csdnimg.cn/img_convert/596cc3093bc2ab5fbb56aba8146403af.png)


## 4 文字列


```plain text
"...".substring(l,r)	//[l,r)
"a"+"b"
"a".repeat(3)			//ans = "aaa"
```


Stringは不変の文字列

- `equals`と`==`

`==`は文字列が同じ参照を指しているかどうかを判断します。リテラルで共有される場合にのみ有効で、共有されない`+`や`substring`では誤りが生じます


文字列間の比較には`a.equals(b)`または`a.compareTo(b)`を用います

- 空文字列とnull文字列

""
null

- コードポイントとコードユニット

```plain text
int index = a.offsetByCodePoints(0,i);	//第iコードポイントの位置
int cp = a.codePointAt(index);			//第iコードポイントを取得
// UTF-16の部分的な文字は2つのコードユニットを必要とするため、charAt(pos)では取得できない
```

- 文字列構築

```plain text
StringBuilder builder = new StringBuilder();	//文字列ビルダー
builder.append('a');
builder.append(b);
String res = builder.toString();				//文字列を生成
```


## 5 入力出力

- 入力

```plain text
Scanner in = new Scanner(System.in);
in.nextLine();		//1行を読む
in.next();			//空白で区切って読み取る
in.nextInt();		//int型を取得
in.nextDouble();	//Double型を取得
in.hasNext();		//入力に他の内容があるか判定
```

- 出力

```plain text
System.out.println();
System.out.printf(“%8.2f",x);		//C言語のprintfに似ています
// d 十進数 x 十六進数 o 八進数 f 固定小数点数 e 指数表記
// s 文字列 c 文字 b 真偽 h ハッシュコード
```

- ファイル入出力

```plain text
Scanner in = new Scanner(Path.of(""),StandardCharsets.UTF_8);
PrintWriter out = new PrintWriter("",StandardCharsets.UTF_8);
```


## 6 制御フロー


```plain text
// ブロックのスコープ
{}

// 条件文
if(){

}else if(){

}else {}

// ループ
while(...){}			// 先に判定してから実行
do ... while(...);		// 先に実行してから判定

for(int i = ..;i <= .. ; i++) {}

switch (...){
	case ...://ラベルは char byte short int 枚挙定数 文字列リテラル
        ...
        break;
    ...
	default:
        ...
        break;//breakに出会うまで停止
}

//break	 continue 	 goto
//break tag;	Gotoのように tag: の場所へ飛ぶ
```

- 大数

BigInteger	BigDecimal


valueOf(x)を使用してxを変換


## 7 配列


```plain text
//配列の定義
int[] a = new int[len];
int[] b = {1,2,3,4};
new Type[0] || new Type[] {}		//長さ0の配列、nullとは異なる

//for eachループ
for(int i:a) ...		//配列または他の要素集合を処理

//- 配列のコピー
a = b;
a = Array.copyOf(b,copyLen);

//配列のソート
Arrays.sort(a);		//クイックソート		Math.random() -> [0,1)

//多次元配列
int[][] a = new int[lenA][lenB];
a = {
	{...},
	{...}
};
for(int[] i:a)
	for(int j:i)
		...

//不規則配列
int[][] a = new int[N][]; //N個の指针を含む配列
a = {...};
```
