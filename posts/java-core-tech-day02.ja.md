---
title: 'Javaコア技術 学習Day02'
published: 2022-07-14
updated: 2022-07-14
description: '本記事では、オブジェクト指向プログラミングの基本概念、クラスの定義と使用、LocalDateなどの定義済みクラスの操作、独自クラスの構築とカプセル化、静的メソッドとフィールド、パッケージ管理、JARファイルの作成と利用、ドキュメントコメント作成のコツなど、Javaコア技術を主に扱います。データの私有化、初期化、クラス設計原則といった重要な設計テクニックも強調しています。'
image: 'https://r2.dreaife.tokyo/notion/covers/428960ac595548c5ac010e340f6790da/2421860-20220714045451784-444838695.png'
tags: ['java', 'language']
category: 'cs-base'
draft: false
lang: 'ja'
---

javaの学習と復習、本文は主に[『Javaコア技術巻』](https://github.com/dreaife/JavaBaseLearning/blob/master/source/)を学習対象として参照します。

# 第4章 オブジェクトとクラス

## 1. クラス

オブジェクト指向プログラミング OOP

クラス：インスタンスフィールドとメソッドをカプセル化する

クラス >== 継承(is a)/依存(uses a)/集約(has a)==>クラス

![DVjasvCERhIqiUH.png](https://s2.loli.net/2022/07/14/DVjasvCERhIqiUH.png)

## 2. 事前定義済みクラス

```java
// Math

// Date
Date date = null;		//CPPのオブジェクトポインタに似ている
date = new Date();
System.out.println(date.toString());
```

### `localDate`

```java
// LocalDate
System.out.println(LocalDate.now());
LocalDate date = LocalDate.now();				//現在日付を構築
date = LocalDate.of("year","month","day");		//指定日を構築
int today = date.getDayOfMonth();
int getYear();
int getMonthValue();
int getDayofMonth();
int getDayofWeek();								//1~7

// 先日(n日)前, を含めてn日後
date = date.minusDays(n);
date = date.plusDays(n);

// is闰年
date.isLeapYear();

// 現在の年の日数と現在の月の日数
date.lengthOfYear();
date.lengthOfMonth();
```

- `localDate`を使用して今月のカレンダーを出力する

```java
public class chapter04main {
    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        int month = date.getMonthValue();
        int today = date.getDayOfMonth();
        date = date.minusDays(today-1);     //今月の初日
        DayOfWeek week = date.getDayOfWeek();
        System.out.println("Mon Tue Wed Thu Fri Sat Sun");
        for(int i=0;i<week.getValue();i++) System.out.printf("   ");
        while (date.getMonthValue() == month){
            int now = date.getDayOfMonth();
            System.out.printf("%3d",now);                 //日付を出力
            if(now == today) System.out.printf("*");
            else System.out.printf(" ");
            date = date.plusDays(1);            //次の日
            if(date.getDayOfWeek().getValue() == 1) System.out.println();
        }
    }
}
```


![KiyBMQgl85CdVjU.png](https://s2.loli.net/2022/07/14/KiyBMQgl85CdVjU.png)


## 3. 自作クラス

```java
class Test{
	//field
    private int t;

    //constructor
    public Test(/*...*/){
        //...
    }

    // method
    public void test(int n){
        System.out.println("just test");
    }
}
```

- 複数のソースファイルをコンパイルする

```plain text
javac Test*.java
```

- インスタンス化

```java
// コンストラクトを使用
Test test1 = new Test();
var test2 = new Test();

// nullになる場合
t = Objects.requireNonNullElse(n,"unknown");		//警告を出し受け取る
Objects.requireNonNull(n,"not to be null");			//直接拒否
```

- 明示的引数、暗黙的引数

`test1.test(3)`の中でtest1が暗黙的引数、メソッド内の3が明示的引数。

- カプセル化

クラスのプライベートオブジェクトを返してはいけない

- アクセス権限

public：公開

private：非公開

- final

初期化が必要で、参照先を変更できないが、参照先のオブジェクト自体は変更可能。

```java
private final StringBuilder eva;
eva = new StringBuilder();			//初期化が必須
eva.append("ok!\\n");				//合法
```

## 4. 静的メソッドと静的フィールド

```java
static int number = 1;						//静的フィールド、クラスで共有される

static final double PI = 3.141592653589;	//静的定数
```

- 静的メソッド

`static int getNum(){...}`


暗黙的な関数はなく、クラスを直接呼び出して使用します。例：`Test.getNum()`

> オブジェクト状態を使わず、クラスの静的フィールドにアクセスするだけ

- ファクトリメソッド

`LocalDate`、`NumberFormat`のようなコンストラクタ。

- main

mainメソッドも静的メソッドです。

## 5. メソッドの引数

- 値渡し（Javaで使用）
- 参照渡し
- 名前渡し（Algolで使用）

値渡しでは、引数はコピー（基本データ型）。

オブジェクト参照を渡す場合、引数はオブジェクト参照そのものになるが、依然として値渡しである。例：2つのクラスのオブジェクトを入れ替えることはできない。

## 6. オブジェクトの構築

- オーバーロード
> 同じ名前で異なるパラメータ（戻り値は含まない）

- 引数なし構造

デフォルト値で初期化される。

**P.S. 自作が存在する場合、引数なしのコンストラクタを自分で用意する必要がある。**

- 明示的フィールド初期化

`private String name = "";` をクラス内で直接初期化。

- thisを使って構築

```java
public Test(double s){
	this("Test "+Double.toString(s));
}
```

- 初期化ブロック

```java
class Test{
	private static int Aid = 1;

	private int id;
	// 初期化ブロック
    // static がある場合、クラスが初めてロードされる時に実行される。
	{
		id = Aid;
		Aid ++;
	}

	//...
}
```


オブジェクトを構築すると、初期化ブロックは実行される。先に初期化ブロックが実行される。

- デストラクション

Javaは自動的にガベージコレクションを行う。

## 7. パッケージ

package

- パッケージ名
- クラスのインポート

パッケージ内のすべてのクラスを直接使用する。

他のパッケージの公開クラスを使用する。

> 完全修飾名
>
> `java.time.LocalDate today = java.time.LocalDate.now();`
>
> - import のインポート
>
> `import java.time.*; | import java.time.LocalDate;`
>
>
> パッケージをインポートするには、`*`のみを使用することができる。
>
- 静的インポート

`import static java.lang.System.*;`


直接 `out.println();` を使用できる

- パッケージ

`package cc.dreaife.chapter04;`

ファイルに `package` 文がない場合、そのファイル内のクラスは**無名パッケージ**に属する。

- パッケージアクセス

public か private を指定していない場合、同一パッケージからアクセス可能。

- クラスパス

クラスは JAR ファイルに格納でき、複数のクラスファイルやサブディレクトリを含むことができる。

JAR は ZIP 形式でファイルとサブディレクトリを整理する。

```plain text
# クラスパスを設定
java -classpath ${PATH(JAR)} ${className};
export CLASSPATH=${PATH};
set CLASSPATH=${PATH}
```

## 8. JARファイル

- JARファイルを作成

`jar cvf jarFileName file1 file2 ...`

- マニフェストファイル

META-INF/MANIFEST.MF


`jar cfm jarName manifestName ...`

- 実行可能なJARファイル

`java -jar jarName`

- 複数バージョンのJARファイル

## 9. ドキュメントコメント

javadoc => HTMLファイル

- コメントの位置
> モジュール・パッケージ・公開クラスと公開のインターフェース、保護されたフィールドを公開する、保護されたコンストラクタとメソッド

`/**...*/` コメント

`@ param` タグ + 自由形式テキスト（最初の一文の概要、HTML修飾を使用可能）

- クラスコメント

importの後、クラス定義の前

- メソッドコメント
> @param

パラメータは複数行になることがあり、HTML修飾を使用できる

> - @return

戻り値は複数行になることがあり、HTML修飾を使用できる

> - @throws

スローされる例外

```java
/**
     * testA
     * @param s
     * @param num
     * @return string
     */
    public String testA(String s,int num){
        return s + Integer.toString(num);
    }
```

- フィールドのコメント
- 一般的な説明
> @author name@since text@version text@see | @link (ハイパーリンクを使用 #パッケージとクラス・メソッド)
- パッケージ注釈

パッケージディレクトリに別ファイルを追加します。

> package-info.javapackage.html       <body>...</body> のテキストを抽出
- コメントの抽出

```plain text
javadoc -encoding UTF-8 -d ../doc Chapter04		#パッケージを抽出
javadoc -encoding UTF-8 -d docTest test.java	#クラスを抽出
```

## 10. クラス設計のコツ

- データをプライベートに保つ
- データの初期化
- 過度な基本データ型の使用を避ける
- すべてに `get()` と `set()` が必要なわけではない
- 責任を過度に分解したクラスの分離を避ける
- クラス名とメソッド名は責務を表現できる
- 不変クラスを優先して使用する