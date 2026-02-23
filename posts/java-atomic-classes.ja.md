---
title: 'java Atomic原子类&&常见并发容器'
published: 2024-02-04
updated: 2024-02-04
description: '介绍了Java中的原子类及常见并发容器，包括基本类型的原子类（如AtomicInteger、AtomicLong、AtomicBoolean）、数组类型的原子类、引用类型的原子类以及对象属性修改类型的原子类。还详细讲解了ConcurrentHashMap、CopyOnWriteArrayList、ConcurrentLinkedQueue、BlockingQueue和ConcurrentSkipListMap等并发容器的特性和使用场景。'
permalink: 'java-atomic-classes'
image: 'https://r2.dreaife.tokyo/notion/covers/dedc5c0018d0466f9c9db27d02d5c771/20240203_041836.jpg'
tags: ['meeting', 'multi-prog', 'doc', 'java']
category: 'cs-base'
draft: false
lang: 'ja'
---

# Atomic原子クラス


## Atomic原子クラスの紹介


Atomic は中国語で原子を意味します。ここでの Atomic は、操作が中断されないことを指します。複数のスレッドが同時に実行していても、ある操作を開始すれば他のスレッドに妨げられることはありません。


ですので、いわゆる原子クラスとは、基本的に原子性/原子操作の特性を持つクラスのことを指します。


並行性パッケージの `java.util.concurrent` の原子クラスはすべて `java.util.concurrent.atomic` に格納されています。


操作するデータ型に応じて、JUC パッケージの原子クラスを4つのカテゴリに分けられます。

1. **基本データ型**

    基本データ型を原子性を用いて更新する

    - `AtomicInteger`：整数型原子クラス
    - `AtomicLong`：長整数型原子クラス
    - `AtomicBoolean`：布尔型原子クラス
2. **配列型**

    配列の特定の要素を原子性を用いて更新する

    - `AtomicIntegerArray`：整型配列原子クラス
    - `AtomicLongArray`：長整型配列原子クラス
    - `AtomicReferenceArray`：参照型配列原子クラス
3. **参照型**
    - `AtomicReference`：参照型原子クラス
    - `AtomicMarkableReference`：マーク付き参照型を原子更新するクラス。 boolean マークと参照を関連付けます。
    - `AtomicStampedReference`：バージョン番号を持つ参照型を原子更新するクラス。整数値と参照を関連付け、原子更新データとデータのバージョン番号を解決するのに使用でき、CAS を用いた原子更新時に発生する可能性のある ABA 問題を解決できます。
    > 注意: `AtomicMarkableReference` は ABA 問題を解決できません。
4. **オブジェクトの属性変更型**
    - `AtomicIntegerFieldUpdater`：整数型フィールドを原子更新するアップデータ
    - `AtomicLongFieldUpdater`：長整形フィールドを原子更新するアップデータ
    - `AtomicReferenceFieldUpdater`：参照型フィールドを原子更新するアップデータ

## 基本データ型原子クラス


基本データ型を原子性を用いて更新する

- `AtomicInteger`：整数型原子クラス
- `AtomicLong`：長整型原子クラス
- `AtomicBoolean`：ブール型原子クラス

上記の3つのクラスの提供するメソッドはほぼ同じなので、ここでは `AtomicInteger` を例として紹介します。


### **AtomicInteger クラスの一般的なメソッド**


```java
public final int get() //現在の値を取得
public final int getAndSet(int newValue)//現在の値を取得し、新しい値を設定
public final int getAndIncrement()//現在の値を取得し、インクリメント
public final int getAndDecrement() //現在の値を取得し、デクリメント
public final int getAndAdd(int delta) //現在の値を取得し、(delta)だけ加算
boolean compareAndSet(int expect, int update) //期待値と実際の値が等しい場合、原子的にその値を update に設定
public final void lazySet(int newValue)//最終的に newValue を設定。lazySet 後でも他のスレッドがしばらくの間旧値を読む可能性があります。
```


**`AtomicInteger` クラスの使用例** :


```java
import java.util.concurrent.atomic.AtomicInteger;

public class AtomicIntegerTest {

    public static void main(String[] args) {
        int temvalue = 0;
        AtomicInteger i = new AtomicInteger(0);
        temvalue = i.getAndSet(3);
        System.out.println("temvalue:" + temvalue + ";  i:" + i); //temvalue:0;  i:3
        temvalue = i.getAndIncrement();
        System.out.println("temvalue:" + temvalue + ";  i:" + i); //temvalue:3;  i:4
        temvalue = i.getAndAdd(5);
        System.out.println("temvalue:" + temvalue + ";  i:" + i); //temvalue:4;  i:9
    }
}
```


### 基本データ型原子クラスの利点


簡単な例を通じて、基本データ型原子クラスの利点を見てみましょう。

1. **マルチスレッド環境で原子クラスを使用せずにスレッドセーフを保証する（基本データ型）**

    ```java
    class Test {
            private volatile int count = 0;
            // count++ をスレッドセーフに実行するにはロックが必要
            public synchronized void increment() {
                      count++;
            }
    
            public int getCount() {
                      return count;
            }
    }
    ```

2. **マルチスレッド環境で原子クラスを使用してスレッドセーフを保証する（基本データ型）**

    ```java
    class Test2 {
            private AtomicInteger count = new AtomicInteger();
    
            public void increment() {
                      count.incrementAndGet();
            }
          // AtomicInteger を使用すれば、ロックを取らなくてもスレッドセーフを実現できる。
           public int getCount() {
                    return count.get();
            }
    }
    ```


### AtomicInteger のスレッドセーフ原理の簡易分析


`AtomicInteger` クラスの一部ソースコード：

```java
// 更新操作のために Unsafe.compareAndSwapInt を使用する設定
    private static final Unsafe unsafe = Unsafe.getUnsafe();
    private static final long valueOffset;

    static {
        try {
            valueOffset = unsafe.objectFieldOffset
                (AtomicInteger.class.getDeclaredField("value"));
        } catch (Exception ex) { throw new Error(ex); }
    }

    private volatile int value;
```


`AtomicInteger` クラスは主に CAS (compare and swap) + volatile およびネイティブメソッドを用いて原子操作を保証し、synchronized の高オーバーヘッドを回避して実行効率を大幅に向上させます。

CAS の原理は、期待値と現在値を比較し、同じであれば新しい値に更新することです。Unsafe クラスの `objectFieldOffset()` メソッドはネイティブメソッドで、元の値のメモリアドレスを取得するために使われます。さらに value は volatile 変数で、メモリ上で可視性が保証されるため、JVM は任意の時点で任意のスレッドがこの値の最新値を必ず取得できるようにします。


## 配列タイプ原子クラス


配列の特定の要素を原子性を用いて更新する

- `AtomicIntegerArray`：整型配列原子クラス
- `AtomicLongArray`：長整型配列原子クラス
- `AtomicReferenceArray`：参照型配列原子クラス

上記の3つのクラスのメソッドはほぼ同じなので、ここでは `AtomicIntegerArray` を例として紹介します。


**`AtomicIntegerArray` クラスの一般的なメソッド** :


```java
public final int get(int i) // index=i の位置要素の値を取得
public final int getAndSet(int i, int newValue)// index=i の位置の現在の値を返し、これを newValue に設定
public final int getAndIncrement(int i)// index=i の位置要素の値を取得し、同位置の要素を自動的にインクリメント
public final int getAndDecrement(int i) // index=i の位置要素の値を取得し、同位置の要素をデクリメント
public final int getAndAdd(int i, int delta) // index=i の位置要素の値を取得し、delta を加算
boolean compareAndSet(int i, int expect, int update) // index=i の位置の要素値が expect に等しければ、原子更新して update に設定
public final void lazySet(int i, int newValue)// 最終的に index=i の位置の要素を newValue に設定。lazySet を使用後、しばらくの間他スレッドが旧値を読む可能性があります。
```


**`AtomicIntegerArray` クラスの使用例** :


```java
import java.util.concurrent.atomic.AtomicIntegerArray;

public class AtomicIntegerArrayTest {

    public static void main(String[] args) {
        int temvalue = 0;
        int[] nums = { 1, 2, 3, 4, 5, 6 };
        AtomicIntegerArray i = new AtomicIntegerArray(nums);
        for (int j = 0; j < nums.length; j++) {
            System.out.println(i.get(j));
        }
        temvalue = i.getAndSet(0, 2);
        System.out.println("temvalue:" + temvalue + ";  i:" + i);
        temvalue = i.getAndIncrement(0);
        System.out.println("temvalue:" + temvalue + ";  i:" + i);
        temvalue = i.getAndAdd(0, 5);
        System.out.println("temvalue:" + temvalue + ";  i:" + i);
    }

}
```


## 参照型原子クラス


基本データ型原子クラスは変数1つを更新するだけですが、複数の変数を原子更新したい場合は参照型原子クラスを使用します。

- `AtomicReference`：参照型原子クラス
- `AtomicStampedReference`：バージョン番号を持つ参照型を原子更新するクラス。整数値と参照を関連付け、原子更新データとデータのバージョン番号を解決するのに使用でき、CAS を用いた原子更新時に発生する可能性のある ABA 問題を解決できます。
- `AtomicMarkableReference`：マーク付き参照型を原子更新するクラス。 boolean マークと参照を関連付けます。

### **使用例**

- **`AtomicReference` クラス**:

    ```java
    import java.util.concurrent.atomic.AtomicReference;
    
    public class AtomicReferenceTest {
    
        public static void main(String[] args) {
            AtomicReference < Person > ar = new AtomicReference < Person > ();
            Person person = new Person("SnailClimb", 22);
            ar.set(person);
            Person updatePerson = new Person("Daisy", 20);
            ar.compareAndSet(person, updatePerson);
    
            System.out.println(ar.get().getName());
            System.out.println(ar.get().getAge());
        }
    }
    
    class Person {
        private String name;
        private int age;
    
        public Person(String name, int age) {
            super();
            this.name = name;
            this.age = age;
        }
    
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
    
        public int getAge() {
            return age;
        }
        public void setAge(int age) {
            this.age = age;
        }
    }
    ```


    上記のコードはまず `Person` オブジェクトを作成し、それを `AtomicReference` に設定します。その後 `compareAndSet` メソッドを呼び出して ar の値を更新します。もし ar の値が `person` であれば、それを `updatePerson` に設定します。実装原理は `AtomicInteger` クラスの `compareAndSet` メソッドと同じです。上記のコードを実行した場合の出力は次のとおりです。


    ```plain text
    Daisy
    20
    ```

- **`AtomicStampedReference` クラスの使用例** :

    ```java
    import java.util.concurrent.atomic.AtomicStampedReference;
    
    public class AtomicStampedReferenceDemo {
        public static void main(String[] args) {
            // 初期値とスタンプ値をインスタンス化
            final Integer initialRef = 0, initialStamp = 0;
            final AtomicStampedReference<Integer> asr = new AtomicStampedReference<>(initialRef, initialStamp);
            System.out.println("currentValue=" + asr.getReference() + ", currentStamp=" + asr.getStamp());
    
            // compare and set
            final Integer newReference = 666, newStamp = 999;
            final boolean casResult = asr.compareAndSet(initialRef, newReference, initialStamp, newStamp);
            System.out.println("currentValue=" + asr.getReference()
                    + ", currentStamp=" + asr.getStamp()
                    + ", casResult=" + casResult);
    
            // 現在の値と現在の stamp 値を取得
            int[] arr = new int[1];
            final Integer currentValue = asr.get(arr);
            final int currentStamp = arr[0];
            System.out.println("currentValue=" + currentValue + ", currentStamp=" + currentStamp);
    
            // stamp のみを個別に設定
            final boolean attemptStampResult = asr.attemptStamp(newReference, 88);
            System.out.println("currentValue=" + asr.getReference()
                    + ", currentStamp=" + asr.getStamp()
                    + ", attemptStampResult=" + attemptStampResult);
    
            // 現在の値と stamp を再設定
            asr.set(initialRef, initialStamp);
            System.out.println("currentValue=" + asr.getReference() + ", currentStamp=" + asr.getStamp());
    
            // [推奨されません。コメントの意味を理解した場合のみ] weak compare and set
            // 混乱！weakCompareAndSet は結局 compareAndSet を呼び出します。[バージョン: jdk-8u191]
            // ただしコメントには「May fail spuriously and does not provide ordering guarantees,
            // so is only rarely an appropriate alternative to compareAndSet.」と書かれています。
            // もしかすると JVM がネイティブメソッドで転送しているのかもしれません。
            final boolean wCasResult = asr.weakCompareAndSet(initialRef, newReference, initialStamp, newStamp);
            System.out.println("currentValue=" + asr.getReference()
                    + ", currentStamp=" + asr.getStamp()
                    + ", wCasResult=" + wCasResult);
        }
    }
    ```


    出力結果は以下のとおりです：


    ```plain text
    currentValue=0, currentStamp=0
    currentValue=666, currentStamp=999, casResult=true
    currentValue=666, currentStamp=999
    currentValue=666, currentStamp=88, attemptStampResult=true
    currentValue=0, currentStamp=0
    currentValue=666, currentStamp=999, wCasResult=true
    ```

- **`AtomicMarkableReference` クラスの使用例** :

    ```java
    import java.util.concurrent.atomic.AtomicMarkableReference;
    
    public class AtomicMarkableReferenceDemo {
        public static void main(String[] args) {
            // 初期値とマーク値を取得
            final Boolean initialRef = null, initialMark = false;
            final AtomicMarkableReference<Boolean> amr = new AtomicMarkableReference<>(initialRef, initialMark);
            System.out.println("currentValue=" + amr.getReference() + ", currentMark=" + amr.isMarked());
    
            // compare and set
            final Boolean newReference1 = true, newMark1 = true;
            final boolean casResult = amr.compareAndSet(initialRef, newReference1, initialMark, newMark1);
            System.out.println("currentValue=" + amr.getReference()
                    + ", currentMark=" + amr.isMarked()
                    + ", casResult=" + casResult);
    
            // 現在の値と現在の mark 値を取得
            boolean[] arr = new boolean[1];
            final Boolean currentValue = amr.get(arr);
            final boolean currentMark = arr[0];
            System.out.println("currentValue=" + currentValue + ", currentMark=" + currentMark);
    
            // 単独で mark 値を設定
            final boolean attemptMarkResult = amr.attemptMark(newReference1, false);
            System.out.println("currentValue=" + amr.getReference()
                    + ", currentMark=" + amr.isMarked()
                    + ", attemptMarkResult=" + attemptMarkResult);
    
            // 現在の値と mark を再設定
            amr.set(initialRef, initialMark);
            System.out.println("currentValue=" + amr.getReference() + ", currentMark=" + amr.isMarked());
    
            // [推奨されません。コメントの意味を理解した場合のみ] weak compare and set
            // 混乱！weakCompareAndSet は結局 compareAndSet を呼び出します。
            // ただしコメントには「May fail spuriously and does not provide ordering guarantees,
            // so is only rarely an appropriate alternative to compareAndSet.」と書かれています。
            // もしかすると JVM がネイティブメソッドで転送しているのかもしれません
            final boolean wCasResult = amr.weakCompareAndSet(initialRef, newReference1, initialMark, newMark1);
            System.out.println("currentValue=" + amr.getReference()
                    + ", currentMark=" + amr.isMarked()
                    + ", wCasResult=" + wCasResult);
        }
    }
    ```


    出力結果は以下のとおりです：


    ```plain text
    currentValue=null, currentMark=false
    currentValue=true, currentMark=true, casResult=true
    currentValue=true, currentMark=true
    currentValue=true, currentMark=false, attemptMarkResult=true
    currentValue=null, currentMark=false
    currentValue=true, currentMark=true, wCasResult=true
    ```


## オブジェクト属性更新型原子クラス


オブジェクトのあるクラスの特定フィールドを原子更新したい場合は、オブジェクト属性更新型原子クラスを使用します。

- `AtomicIntegerFieldUpdater`: 整数型フィールドを原子更新するアップデータ
- `AtomicLongFieldUpdater`：長整型フィールドを原子更新するアップデータ
- `AtomicReferenceFieldUpdater`：参照型フィールドを原子更新するアップデータ

オブジェクトの属性を原子更新したい場合は、2ステップが必要です。まず、これらの原子クラスはすべて抽象クラスなので、使用するたびに静的メソッド `newUpdater()` を用いて更新器を作成し、更新したいクラスと属性を設定します。次に、更新対象のオブジェクトの属性は public volatile 修飾子を持っている必要があります。


上記の3つのクラスのメソッドはほぼ同じなので、ここでは `AtomicIntegerFieldUpdater` を例として紹介します。


**`AtomicIntegerFieldUpdater` クラスの使用例** :


```java
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;

public class AtomicIntegerFieldUpdaterTest {
  public static void main(String[] args) {
    AtomicIntegerFieldUpdater<User> a = AtomicIntegerFieldUpdater.newUpdater(User.class, "age");

    User user = new User("Java", 22);
    System.out.println(a.getAndIncrement(user));// 22
    System.out.println(a.get(user));// 23
  }
}

class User {
  private String name;
  public volatile int age;

  public User(String name, int age) {
    super();
    this.name = name;
    this.age = age;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

}
```


# よく使われる並行コンテナ


JDK が提供するこれらのコンテナの大半は `java.util.concurrent` パッケージにあります。

- **`ConcurrentHashMap`** : スレッドセーフな HashMap
- **`CopyOnWriteArrayList`** : スレッドセーフな List、読み取りが多く書き込みが少ない場面で性能が非常に良く、`Vector` を大きく上回ります。
- **`ConcurrentLinkedQueue`** : 高効率な并行キュー。リンクリストを用いて実装。これは非ブロッキングキューであり、スレッドセーフです。
- **`BlockingQueue`** : これはインタフェースで、JDK 内部ではリンクリストや配列などの方法でこのインタフェースを実装しています。ブロッキングキューを表し、データ共有チャネルとして非常に適しています。
- **`ConcurrentSkipListMap`** : 跳表の実装です。これは Map で、跳表のデータ構造を用いて高速な検索を実現します。

## ConcurrentHashMap


HashMap はスレッドセーフではないことは周知の通りです。並行シナリオで実現可能な方法としては、`Collections.synchronizedMap()` メソッドで HashMap をラップする方法があります。しかし、これはグローバルなロックを使って異なるスレッド間の同時アクセスを同期させるため、無視できないパフォーマンス問題を招きます。


そこで生まれたのが HashMap のスレッドセーフ版である `ConcurrentHashMap` です。


JDK1.7 の時点では、`ConcurrentHashMap` は全体のバケツ配列を分割（Segment、セグメントロック）して、それぞれのロックがコンテナの一部データのみをロックします（下面の図参照）。複数スレッドがコンテナ内の異なるデータセグメントを読み書きしても、ロック競合が発生せず、並行アクセスが向上します。


JDK1.8 になると、`ConcurrentHashMap` は `Segment` の概念を捨て、代わりに `Node` 配列 + 連結リスト + 赤黒木のデータ構造で実装され、並行制御は `synchronized` と CAS を用いて操作します。（JDK1.6 以降 `synchronized` ロックには多くの最適化が施されています。）全体としては最適化されたスレッドセーフな `HashMap` のように見えます。JDK1.8 では `Segment` のデータ構造をまだ見ることができますが、属性はすでに簡略化され、旧バージョンとの互換性のためだけです。


## CopyOnWriteArrayList


JDK1.5以前は、並行安全な List を使おうとすると `Vector` を使うしかありませんでした。しかし、`Vector` は旧式のコレクションで、ほとんどの操作で `synchronized` を用い、全体に大鎖をかけるような設計で、各メソッドの実行時にロックを獲得する必要があるため、性能は非常に低いです。


JDK1.5 で `Java.util.concurrent`（JUC）パッケージが導入され、スレッドセーフで並列性能の良いコンテナが多数提供されました。その中で唯一のスレッドセーフな List 実装が `CopyOnWriteArrayList` です。


ほとんどのビジネスシーンでは読み取り操作が書き込み操作よりも多いです。読み取り操作は元データを変更しないため、毎回読み取りにロックをかけるのは資源の無駄です。これに対して、内部データへ複数のスレッドが同時にアクセスできるようにするべきです。読み取り操作は安全だからです。


この考え方は `ReentrantReadWriteLock` の設計思想と非常に類似しており、読み取りは読み取り同士で競合せず、読み取りと書き込みは互いに排他的、書き込み同士のみ排他という原理です（読み取り同士は排他なし）。`CopyOnWriteArrayList` はこの思想をさらに実現しています。読み取りのパフォーマンスを最大化するため、`CopyOnWriteArrayList` の読み取り操作は完全にロック不要です。さらに、書き込み操作も読み取りをブロックしません。書き込み同士のみが排他されます。これにより読み取りの性能が大幅に向上します。


`CopyOnWriteArrayList` のスレッドセーフの核心は、コピーオンライト（Copy-On-Write）戦略を採用している点にあり、その名前からもそれが読み取れます。


更新（`add`、`set`、`remove` など）を行う際には、元の配列を直接変更せず、まず下層配列のコピーを作成し、コピー配列を変更してから変更後の配列を元の場所に再設定します。こうすることで、書き込み操作が読み取り操作を妨げることを回避します。


## ConcurrentLinkedQueue


Java が提供するスレッドセーフな `Queue` は、ブロッキングキューとノンブロッキングキューに分けられます。ブロッキングキューの典型例は `BlockingQueue`、ノンブロッキングキューの典型例は `ConcurrentLinkedQueue` です。実際のアプリケーションでは、ニーズに応じてブロッキングキューとノンブロッキングキューを選択します。**ブロッキングキューはロックで実現、ノンブロッキングキューは CAS 操作で実現。**


名前から分かる通り、`ConcurrentLinkedQueue` は内部データ構造としてリンクリストを使用します。`ConcurrentLinkedQueue` は高い同時実行環境で最も性能の良いキューの1つと考えられます。その高性能の理由は、内部の複雑な実装にあります。


`ConcurrentLinkedQueue` の内部コードについてはここでは分析しません。主に CAS 非ブロッキングアルゴリズムを用いてスレッドセーフを実現していることだけを知っていれば十分です。


`ConcurrentLinkedQueue` は、性能要件が相対的に高く、キューの読み書きが複数のスレッドにより同時に行われる状況に適しています。つまり、キューにロックをかけるコストが高い場合にはロックレスの `ConcurrentLinkedQueue` を代替として使用するのが適しています。


## BlockingQueue


### BlockingQueue の概要


前述のとおり、`ConcurrentLinkedQueue` は高性能な非ブロッキングキューです。ここからはブロッキングキューである BlockingQueue について説明します。BlockingQueue は広く「生産者-消費者」問題で用いられ、ブロック可能な挿入と削除のメソッドを提供します。キューが満杯のとき、生産者スレッドはブロックされ、キューに空きができるまで待機します。キューが空のとき、消費者スレッドはブロックされ、キューが非空になるまで待機します。


BlockingQueue はインタフェースで、Queue を継承しています。従って、その実装クラスも Queue の実装として使用でき、Queue は Collection インタフェースを継承します。以下は BlockingQueue の関連実装クラスです。


以下では、3つの一般的な BlockingQueue の実装クラス：ArrayBlockingQueue、LinkedBlockingQueue、PriorityBlockingQueue について主に説明します。


### ArrayBlockingQueue


`ArrayBlockingQueue` は BlockingQueue インタフェースの有界キュー実装クラスで、底層は配列を用いて実装されています。


```java
public class ArrayBlockingQueue<E>
extends AbstractQueue<E>
implements BlockingQueue<E>, Serializable{}
```


`ArrayBlockingQueue` は作成後、容量を変更できません。その並行制御は再入可能ロック `ReentrantLock` を用い、挿入操作でも読み取り操作でもロックを取得してから操作を行います。キューの容量が満杯の場合、要素を挿入しようとすると操作がブロックされ、空のキューから要素を取り出そうとしても同様にブロックされます。


`ArrayBlockingQueue` はデフォルトではスレッドがキューへアクセスする公平性を保証しません。公平性とは、スレッドの待機時間の絶対的な順序に厳密に従うこと、つまり最初に待っていたスレッドが最初に `ArrayBlockingQueue` にアクセスできることを指します。一方、公平性を保証しない場合は、アクセスの順序が厳密な時間順にはなりません。長時間待機しているスレッドがアクセスできないこともあります。公平性を保証する `ArrayBlockingQueue` を得たい場合は、以下のコードを使用します：


```java
private static ArrayBlockingQueue<Integer> blockingQueue = new ArrayBlockingQueue<Integer>(10,true);
```


### LinkedBlockingQueue


`LinkedBlockingQueue` は一方向リンクリストを基盤とするブロッキングキューです。無限大に近いキューとして使うことも、有界キューとして使うこともできます。FIFO を満たし、`ArrayBlockingQueue` に比べてスループットが高くなります。ただし、容量が急速に増えると大量のメモリを消費します。通常、`LinkedBlockingQueue` オブジェクトを作成する際にはサイズを指定します。未指定の場合、容量は `Integer.MAX_VALUE` となります。


**関連コンストラクタ:**


```java
/**
     *ある意味での無界キュー
     * Creates a {@code LinkedBlockingQueue} with a capacity of
     * {@link Integer#MAX_VALUE}.
     */
    public LinkedBlockingQueue() {
        this(Integer.MAX_VALUE);
    }

    /**
     *有界キュー
     * Creates a {@code LinkedBlockingQueue} with the given (fixed) capacity.
     *
     * @param capacity the capacity of this queue
     * @throws IllegalArgumentException if {@code capacity} is not greater
     *         than zero
     */
    public LinkedBlockingQueue(int capacity) {
        if (capacity <= 0) throw new IllegalArgumentException();
        this.capacity = capacity;
        last = head = new Node<E>(null);
    }
```


### PriorityBlockingQueue


`PriorityBlockingQueue` は優先度をサポートする無限ブロッキングキューです。デフォルトでは要素は自然順序でソートされ、あるいは `Comparable` を実装したクラスを用いてソート規則を指定することができます。また、初期化時にコンストラクタ引数 `Comparator` を用いてソート規則を指定することもできます。


`PriorityBlockingQueue` の同期制御は再入可能ロック `ReentrantLock` を用い、キューは無界です（`ArrayBlockingQueue` は有界、`LinkedBlockingQueue` も構築時に容量を指定して最大容量を設定可能ですが、`PriorityBlockingQueue` は初期のキューサイズのみを指定でき、後から要素を挿入する際には容量が足りない場合自動的に拡張されます）。


簡単に言えば、それは `PriorityQueue` のスレッドセーフ版です。null 値の挿入はできず、挿入されるオブジェクトは比較可能でなければならず、そうでない場合は `ClassCastException` が発生します。挿入操作の `put` はブロックされません。無界キューなので（`take` はキューが空のときにブロックします）。


## ConcurrentSkipListMap


跳表を導入する前に、まず跳表を簡単に理解しておきましょう。


単方向リストは有序であっても、データを検索したい場合は先頭から末尾まで走査する必要があり、効率は低いです。跳表は高速な検索を可能にするデータ構造で、平衡木に似ています。要素を高速に検索できます。しかし大きな違いは、平衡木の挿入・削除は全体の再調整を伴うことが多いのに対し、跳表の挿入・削除はデータ構造の局所的な操作のみで済む点です。これにより、並行時には全体をロックして平衡木のスレッドセーフを保証する必要が出てくる一方、跳表では一部のロックだけで済むことが多く、性能が向上します。検索の時間計算量は $O(log n)$ であり、並行データ構造の Map を実装する際には跳表が用いられています。JDK でこのデータ構造を実装しているクラスは `ConcurrentSkipListMap` です。
