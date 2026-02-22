---
title: 'Java AQS'
published: 2024-02-03
updated: 2024-02-04
description: 'AQS（抽象队列同步器）是Java中的一个抽象类，主要用于构建锁和同步器。其核心原理是通过CLH锁实现线程的阻塞等待和唤醒机制。AQS支持独占和共享两种资源共享方式，常见的同步工具类包括Semaphore和CountDownLatch，分别用于控制线程访问资源的数量和等待多个线程完成任务。CyclicBarrier则允许一组线程在到达同步点时被阻塞，直到最后一个线程到达。'
permalink: 'java-aqs-intro.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/d4c9fe2ac69c466bae31d027d7c36398/20240204_060715.jpg'
tags: ['meeting', 'doc', 'multi-prog', 'java']
category: 'cs-base'
draft: false
lang: 'ja'
---

## AQS 紹介

AQS の正式名称は `AbstractQueuedSynchronizer` で、和訳すると「抽象キュー同期化子」です。このクラスは `java.util.concurrent.locks` パッケージにあります。

AQS は抽象クラスで、主にロックと同期機構を構築するために用いられます。

```java
public abstract class AbstractQueuedSynchronizer extends AbstractOwnableSynchronizer implements java.io.Serializable {
}
```

AQS はロックと同期器を構築するための共通機能の実装を提供します。したがって AQS を使用すると、広く使われている多数の同期器を簡潔かつ高効率に構築できます。例えば前述の `ReentrantLock`、`Semaphore` の他にも、`ReentrantReadWriteLock`、`SynchronousQueue` などはすべて AQS を基盤としています。

## AQS 原理

面接で並行知識を問われるとき、多くは「自分の AQS 原理の理解を教えてください」と聞かれます。以下は参考になる例です。面接は暗記ではなく、皆さん自身の考えを加えるべきです。自分の考えを完全に持てなくても、平易に説明できるようにしておくことが大切です。

### AQS の核心思想

AQS の核心思想は、要求された共有資源が空いていれば、現在リソースを要求しているスレッドを有効な作業スレッドとして設定し、共有資源をロック状態にすることです。もし要求された共有資源が占有されている場合には、スレッドのブロック待機と、解放時のロック割り当てを行う仕組みが必要になります。この仕組みは AQS が **CLH ロック**（Craig, Landin, and Hagersten locks）に基づいて実装しています。

CLH ロックはスピンロックの改良版で、仮想の双方向キュー（仮想の双方向キューすなわち実体としてのキューは存在せず、ノード同士の関連だけがある状態）です。現在ロックを取得できないスレッドはこのキューに追加されます。AQS は共有リソースを要求するスレッドを CLH キューのノード（Node）として包み込み、ロックの割り当てを実現します。CLH キューでは、ノードは1つのスレッドを表し、スレッドの参照（thread）、現在のノードのキュー内状態（waitStatus）、前駆ノード（prev）、後継ノード（next）を保持します。

AQS(`AbstractQueuedSynchronizer`) の核心原理図：

![20240204132148.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240204132148.png)

AQS は **int 型のメンバ変数** `state` を使って同期状態を表します。内蔵の **FIFO スレッド待機/待機列** によって、資源を取得しようとするスレッドの待機を整えます。

```java
// 共有変数、volatile修飾でスレッド可視性を保証
private volatile int state;
```

また、状態情報 `state` は `protected` な `getState()`、`setState()`、`compareAndSetState()` で操作できます。なお、これらのメソッドはすべて `final` なので、サブクラスでオーバーライドすることはできません。

```java
// 現在の同期状態の値を返す
protected final int getState() {
     return state;
}
 // 同期状態の値を設定する
protected final void setState(int newState) {
     state = newState;
}
// 原子的に（CAS操作）同期状態を指定値に更新する
protected final boolean compareAndSetState(int expect, int update) {
      return unsafe.compareAndSwapInt(this, stateOffset, expect, update);
}
```

可用性の高い再入互斥ロック `ReentrantLock` を例にとると、その内部は `state` 変数を用いてロックの占有状態を表します。`state` の初期値は 0 で、ロックが未占有状態を表します。スレッド A が `lock()` を呼ぶと、`tryAcquire()` を介してそのロックを独占し、`state` を 1 つ増やします。成功すればスレッド A はロックを取得します。失敗した場合、スレッド A は待機キュー（CLH キュー）に加わり、他のスレッドがロックを解放するのを待ちます。A がロックを取得できたとき、解放前に A 自身はこのロックを再取得できる（`state` が累加）ことがあります。これは再入性の表れです。つまり、同じスレッドが同じロックを複数回取得してもブロックされません。しかし、他のスレッドにロックを渡すためには、取得回数と同じ回数の解放が必要で、`state` が 0 に戻って初めて他の待機スレッドがロックを取得できるようになります。

スレッド A がロックを取得しようとする過程は以下の図のとおりです：

![20240204132159.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240204132159.png)

倒计時器 CountDownLatch を例に挙げると、タスクを N 個のサブスレッドに分割して実行し、`state` も初期値を N にします（N はスレッド数と同じである必要があります）。この N 個のサブスレッドはタスクを実行し終えると、それぞれ `countDown()` を呼び出します。この方法は CAS（Compare and Swap）操作を用いて `state` の値を 1 減らします。すべてのサブスレッドが実行を終えると（`state` が 0 になる）、`CountDownLatch` は主スレッドを `unpark()` で起こします。これにより主スレッドは `await()`（`CountDownLatch` の `await()`、AQS のものではない）から戻り、以後の処理を継続できます。

## AQS 资源共享方式

AQS はリソース共有モードを 2 つ定義しています：`Exclusive`（独占、1スレッドのみ実行、例: `ReentrantLock`）と `Share`（共有、複数スレッドが同時に実行可能、例: `Semaphore` / `CountDownLatch`）。

一般には、カスタム同期器の共有モードは独占か共有のどちらかを実装すれば足り、`tryAcquire-tryRelease`、`tryAcquireShared-tryReleaseShared` のいずれかを実装すればよいです。しかし AQS は、独占と共有の両方を同時に実装できるカスタム同期器もサポートしており、例えば `ReentrantReadWriteLock` があります。

### 自定义同步器

同期器の設計はテンプレートメソッドパターンに基づきます。カスタム同期器を作成する一般的な方法は以下のとおりです（テンプレートメソッドパターンは古典的な適用例です）：

1. ユーザーは `AbstractQueuedSynchronizer` を継承し、指定したメソッドをオーバーライドします。
2. AQS をカスタム同期コンポーネントの実装に組み込み、そのテンプレートメソッドを呼び出します。これらのテンプレ methods は、ユーザーがオーバーライドしたメソッドを呼び出します。

これは、従来のインタフェース実装方式と大きく異なる点で、テンプレートメソッドパターンの古典的な応用例です。

**AQS はテンプレートメソッドパターンを使用しています。カスタム同期器を作成する際には、以下の AQS 提供のフックメソッドをオーバーライドする必要があります：**

```java
// 独占方式。資源を取得して成功すれば true を返し、失敗すれば false を返す。
protected boolean tryAcquire(int)
// 独占方式。資源を解放して成功すれば true を返し、失敗すれば false を返す。
protected boolean tryRelease(int)
// 共有方式。資源を取得する。負数は失敗；0 は成功だが残り資源なし；正数は成功で残り資源あり。
protected int tryAcquireShared(int)
// 共有方式。資源を解放する。成功すれば true、失敗すれば false。
protected boolean tryReleaseShared(int)
// このスレッドが独占資源を保持しているか。条件が必要な場合にだけ実装します。
protected boolean isHeldExclusively()
```

**フックメソッドとは何か？** フックメソッドは、抽象クラスに宣言されるメソッドで、通常は `protected` で修飾されます。空の実装（サブクラスが実装）もしくはデフォルト実装を持つことがあります。テンプレートデザインパターンは、フックメソッドを通じて固定の手順の実装を制御します。

上記のフックメソッド以外、AQS クラスの他のメソッドはすべて `final` なので、他のクラスで再定義することはできません。

# よく使われる同期ツール類

以下に、AQS をベースにした代表的な同期ツールクラスを紹介します。

## Semaphore（セマフォ）

### 概要

`synchronized` および `ReentrantLock` は同時に 1 スレッドだけがある資源へアクセスできるようにしますが、`Semaphore`（セマフォ）は特定の資源へ同時にアクセスできるスレッド数を制御できます。

`Semaphore` の使い方は簡単です。ここでは N（N > 5）個のスレッドが `Semaphore` の共有資源を取得するとします。以下のコードは、同時に N 個のスレッドがいてもうち 5 個だけが共有資源を取得でき、それ以外はブロックされ、共有資源を取得したスレッドだけが処理を実行できる、ということを示しています。

```java
// 初期の共有資源の数
final Semaphore semaphore = new Semaphore(5);
// 1 つの許可を取得
semaphore.acquire();
// 1 つの許可を解放
semaphore.release();
```

初期の資源数が 1 の場合、`Semaphore` は排他ロックへと退化します。

`Semaphore` には二つのモードがあります。

- **公平モード：** `acquire()` を呼ぶ順序が許可の取得順序になり、FIFO に従います；
- **非公平モード：** 抢占的です。

`Semaphore` の対応する二つのコンストラクタは以下のとおりです。

```java
public Semaphore(int permits) {
    sync = new NonfairSync(permits);
}

public Semaphore(int permits, boolean fair) {
    sync = fair ? new FairSync(permits) : new NonfairSync(permits);
}
```

これら二つのコンストラクタは、許可の数を必ず指定する必要があります。第二のコンストラクタでは公平モードか非公平モードを指定でき、デフォルトは非公平モードです。

`Semaphore` は通常、資源のアクセス数が明確に制限されているシーン、例えばレートリミット（単一機器モードに限定。実プロジェクトでは Redis + Lua を使ってレートリミットを行うことを推奨）で使われます。

### 原理

`Semaphore` は共有ロックの一種の実装で、AQS の `state` 値をデフォルトで `permits` に設定します。`permits` の値をライセンスの数として理解してください。ライセンスを取得したスレッドのみが実行できます。

例として無引数の `acquire` メソッドを見てみると、`semaphore.acquire()` を呼ぶとスレッドは許可を取得しようとします。`state > 0` なら取得成功、`state <= 0` なら許可数が不足して取得に失敗します。

取得可能である場合（`state > 0`）、`state` の値を `state = state - 1` に変更するために CAS を試みます。取得に失敗すると待機キューにノードを追加し、現在のスレッドを待機させます。

```java
// 1 つの許可を取得
public void acquire() throws InterruptedException {
    sync.acquireSharedInterruptibly(1);
}

// 1 つ以上の許可を取得
public void acquire(int permits) throws InterruptedException {
    if (permits < 0) throw new IllegalArgumentException();
    sync.acquireSharedInterruptibly(permits);
}
```

`acquireSharedInterruptibly` メソッドは `AbstractQueuedSynchronizer` のデフォルト実装です。

```java
// 共有モードで許可を取得。取得成功なら戻り、失敗なら待機キューに追加してスレッドを待機
public final void acquireSharedInterruptibly(int arg)
    throws InterruptedException {
    if (Thread.interrupted())
      throw new InterruptedException();
        // 許可を取得。arg は取得する許可数。取得に失敗した場合はノードを作成して待機列へ追加し、現在のスレッドを待機させる。
    if (tryAcquireShared(arg) < 0)
      doAcquireSharedInterruptibly(arg);
}
```

ここでは非公平モード（`NonfairSync`）の `tryAcquireShared` の実装を例に取ります。

```java
// 共有モードでリソースを取得してみる（Semaphore でいうと許可を取る）
protected int tryAcquireShared(int acquires) {
    return nonfairTryAcquireShared(acquires);
}

// 非公平な共有モードで許可を取得
final int nonfairTryAcquireShared(int acquires) {
    for (;;) {
        // 現在利用可能な許可数
        int available = getState();
        /*
         * 許可を取得する試み。現在の利用可能許可数が 0 以下なら負の値を返して取得失敗を示す。
         * 利用可能許可数が正のときのみ取得が成功する可能性がある。CAS が失敗した場合は最新値を取得して再試行する
         */
        int remaining = available - acquires;
        if (remaining < 0 ||
            compareAndSetState(available, remaining))
            return remaining;
    }
}
```

無引数の `release` メソッドを例にすると、`semaphore.release()` を呼ぶとスレッドは許可を解放し、`state` を `state = state + 1` に更新します。許可を解放すると、待機キュー中の1つのスレッドが起床します。起床したスレッドは再度 `state` を `state - 1` に更新しようとし、`state > 0` ならトークンの取得に成功します。そうでなければ再度待機列へ戻ってスレッドを待機させます。

```java
// 1 つの許可を解放
public void release() {
    sync.releaseShared(1);
}

// 1 つ以上の許可を解放
public void release(int permits) {
    if (permits < 0) throw new IllegalArgumentException();
    sync.releaseShared(permits);
}
```

`releaseShared` メソッドは `AbstractQueuedSynchronizer` のデフォルト実装です。

```java
// 共有ロックを解放
// tryReleaseShared が true を返したら、待機列の1つ以上のスレッドを起こす。
public final boolean releaseShared(int arg) {
    // 共有ロックを解放
    if (tryReleaseShared(arg)) {
      // 現在のノードの後続待機ノードを解放
      doReleaseShared();
      return true;
    }
    return false;
}
```

`tryReleaseShared` メソッドは Semaphore の内部クラス `Sync` がオーバーライドしたメソッドで、`AbstractQueuedSynchronizer` のデフォルト実装は単に `UnsupportedOperationException` をスローします。

```java
// 内部クラス Sync のオーバーライドされたメソッド
// リソースを解放する
protected final boolean tryReleaseShared(int releases) {
    for (;;) {
        int current = getState();
        // 利用可能な許可を +1
        int next = current + releases;
        if (next < current) // オーバーフロー
            throw new Error("Maximum permit count exceeded");
         // state の値を CAS で更新
        if (compareAndSetState(current, next))
            return true;
    }
}
```

上で述べた複数のメソッドは、基本的に同期機能の実装を `sync` を通じて行っています。`Sync` は `CountDownLatch` の内部クラスであり、`AbstractQueuedSynchronizer` を継承して、いくつかのメソッドをオーバーライドしています。さらに、`Sync` には二つのサブクラスがあります。`NonfairSync`（非公平モード対応）と `FairSync`（公平モード対応）です。

```java
private static final class Sync extends AbstractQueuedSynchronizer {
  // ...
}
static final class NonfairSync extends Sync {
  // ...
}
static final class FairSync extends Sync {
  // ...
}
```

### 実戦

```java
public class SemaphoreExample {
  // 要求数
  private static final int threadCount = 550;

  public static void main(String[] args) throws InterruptedException {
    // 固定スレッド数のスレッドプールを作成（ここでスレッド数を少なくしすぎると遅くなる場合があります）
    ExecutorService threadPool = Executors.newFixedThreadPool(300);
    // 初期許可数
    final Semaphore semaphore = new Semaphore(20);

    for (int i = 0; i < threadCount; i++) {
      final int threadnum = i;
      threadPool.execute(() -> {// ラムダ式の利用
        try {
          semaphore.acquire();// 1つの許可を取得。したがって同時実行数は 20
          test(threadnum);
          semaphore.release();// 1つの許可を解放
        } catch (InterruptedException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        }

      });
    }
    threadPool.shutdown();
    System.out.println("finish");
  }

  public static void test(int threadnum) throws InterruptedException {
    Thread.sleep(1000);// 模擬リクエストの処理時間
    System.out.println("threadnum:" + threadnum);
    Thread.sleep(1000);// 模擬リクエストの処理時間
  }
}
```

`acquire()` はブロックされ、利用可能な許可が現れ次第取得されます。各 `release` は1つの許可を追加し、ブロックされている `acquire()` が解放される可能性を作ります。しかし、実際には許可自体のオブジェクトは存在せず、`Semaphore` は取得可能な許可の数を保持しているだけです。`Semaphore` は、1つのリソースを取得するスレッド数を制限する場合に頻繁に使われます。

もちろん、一度に複数の許可を同時に取得・解放することも可能ですが、通常は必要ありません。

```java
semaphore.acquire(5);// 5 個の許可を取得、したがって実行可能スレッド数は 20/5=4
test(threadnum);
semaphore.release(5);// 5 個の許可を解放
```

`acquire()` メソッド以外にも、もう一つよく使われる対応メソッドは `tryAcquire()` です。このメソッドは許可を取得できない場合、即座に false を返します。

> Semaphore は CountDownLatch と同様、共有ロックの一種の実装です。デフォルトで AQS の `state` が `permits` に設定されています。タスクを実行しているスレッド数が `permits` を超えると、多すぎるスレッドは Park 処理に入り、`state` が 0 になるかを自分で待機し続けます。`state` が 0 より大きい場合にのみ、ブロックされているスレッドが継続できます。前述のタスクを実行しているスレッドは順次 `release()` を呼び、`state` が 1 ずつ増え、待機中のスレッドは再開します。したがって、毎回 `permits` 数を超えないスレッドのみが自回的 retry に成功します。これにより、実行するスレッド数を制限します。

## CountDownLatch（カウントダウン・ラッチ）

### 介绍

`CountDownLatch` は `count` 個のスレッドをある場所で待機させ、全スレッドのタスクが完了するまで待機します。

`CountDownLatch` は一度きりのもので、カウンタの値はコンストラクタで初期化された後、再設定する仕組みはありません。使用後は再利用できません。

### 原理

`CountDownLatch` は共有ロックの一種で、AQS の `state` の初期値を `count` に設定します。次のコードはその振る舞いを示します。

```java
public CountDownLatch(int count) {
    if (count < 0) throw new IllegalArgumentException("count < 0");
    this.sync = new Sync(count);
}

private static final class Sync extends AbstractQueuedSynchronizer {
    Sync(int count) {
        setState(count);
    }
  //...
}
```

スレッドが `countDown()` を呼ぶと、実際には `tryReleaseShared` を CAS 操作で呼び出して `state` を減らします。`state` が 0 になると、すべてのスレッドが `countDown` を呼んだことになり、`CountDownLatch` 上で待機しているスレッドが起床して処理を継続します。

```java
public void countDown() {
    // Sync は CountDownLatch の内部クラス ,  继承した AbstractQueuedSynchronizer
    sync.releaseShared(1);
}
```

`releaseShared` メソッドは `AbstractQueuedSynchronizer` のデフォルト実装です。

```java
// 共有ロックを解放
// tryReleaseShared が true を返したら、待機列の1つ以上のスレッドを起こす。
public final boolean releaseShared(int arg) {
    // 共有ロックを解放
    if (tryReleaseShared(arg)) {
      // 現在のノードの後続待機ノードを解放
      doReleaseShared();
      return true;
    }
    return false;
}
```

`tryReleaseShared` は CountDownLatch の内部クラス `Sync` がオーバーライドするメソッドで、`AbstractQueuedSynchronizer` のデフォルト実装は `UnsupportedOperationException` を投げるだけです。

```java
// state を減らして、state が 0 になるまで実行
// count が 0 になると countDown は true を返す
protected boolean tryReleaseShared(int releases) {
    // state が 0 かどうかを任意にチェック
    for (;;) {
        int c = getState();
        // state がすでに 0 の場合は false を返す
        if (c == 0)
            return false;
        // state を減らす
        int nextc = c-1;
        // CAS 操作で state の値を更新
        if (compareAndSetState(c, nextc))
            return nextc == 0;
    }
}
```

無引数の `await` メソッドを例にすると、`await()` を呼ぶと `state` が 0 でない場合、タスクはまだ完了していないことを意味し、`await()` はブロックされ、`await()` 以降の文は実行されません（`main` スレッドが CLH キューに待機します）。その後、CountDownLatch は `state == 0` になるまで CAS を回し、0 になれば待機中のすべてのスレッドを解放して、`await()` 以降の文を実行可能にします。

```java
// 待機（ロック付加とも呼ばれます）
public void await() throws InterruptedException {
    sync.acquireSharedInterruptibly(1);
}
// タイムアウト付きの待機
public boolean await(long timeout, TimeUnit unit)
    throws InterruptedException {
    return sync.tryAcquireSharedNanos(1, unit.toNanos(timeout));
}
```

`acquireSharedInterruptibly` メソッドは `AbstractQueuedSynchronizer` のデフォルト実装です。

```java
// ロックを取得しようと試み、成功すれば戻る。失敗なら待機列へ追加、スレッドを停止
public final void acquireSharedInterruptibly(int arg)
    throws InterruptedException {
    if (Thread.interrupted())
      throw new InterruptedException();
        // ロックを取得、取得に失敗した場合は待機列へ追加して現在のスレッドを停止
    if (tryAcquireShared(arg) < 0)
      // 待機列へ追加して待機
      doAcquireSharedInterruptibly(arg);
}
```

`tryAcquireShared` メソッドは CountDownLatch の内部クラス `Sync` がオーバーライドするメソッドで、`state` の値が 0 かどうかを判断します。0 であれば 1 を返し、そうでなければ -1 を返します。

```java
protected int tryAcquireShared(int acquires) {
    return (getState() == 0) ? 1 : -1;
}
```

### 実戦

**CountDownLatch の二つの典型的な使い方**：

1. あるスレッドが開始する前に n 個のスレッドの完了を待つ: CountDownLatch のカウンタを n に初期化します（`new CountDownLatch(n)`）。各タスクスレッドが完了するたびにカウンタを 1 減らします（`countDownLatch.countDown()`）。カウンタの値が 0 になれば、`CountDownLatch` 上で待機しているスレッドが起床して処理を継続します。典型的な用途は、サービスを起動する際に複数のコンポーネントのロード完了を待つケースです。

2. 複数のスレッドを同時に開始して最大の並行性を実現する: すなわち、複数のスレッドをスタート地点に配置し、信号発砲後に同時に走らせます。共有の CountDownLatch オブジェクトを用いて、カウンタを 1 に初期化します（`new CountDownLatch(1)`）。複数のスレッドはタスクを開始する前にまず `countDownLatch.await()` を呼び、メインスレッドが `countDown()` を呼ぶとカウントが 0 になり、複数のスレッドが同時に起動します。

CountDownLatch のコード例：

```java
public class CountDownLatchExample {
  // 要求数
  private static final int THREAD_COUNT = 550;

  public static void main(String[] args) throws InterruptedException {
    // 固定スレッド数のスレッドプールを用意
    // 実際の運用ではスレッドプールの設定を適切に行ってください
    ExecutorService threadPool = Executors.newFixedThreadPool(300);
    final CountDownLatch countDownLatch = new CountDownLatch(THREAD_COUNT);
    for (int i = 0; i < THREAD_COUNT; i++) {
      final int threadNum = i;
      threadPool.execute(() -> {
        try {
          test(threadNum);
        } catch (InterruptedException e) {
          e.printStackTrace();
        } finally {
          // リクエストが完了したことを表す
          countDownLatch.countDown();
        }

      });
    }
    countDownLatch.await();
    threadPool.shutdown();
    System.out.println("finish");
  }

  public static void test(int threadnum) throws InterruptedException {
    Thread.sleep(1000);
    System.out.println("threadNum:" + threadnum);
    Thread.sleep(1000);
  }
}
```

上記のコードでは、リクエスト数を 550 と定義しています。この 550 件のリクエストが処理完了した後にのみ `System.out.println("finish");` が実行されます。

CountDownLatch との初期のやり取りは、メインスレッドが他のスレッドを待機することです。メインスレッドは他のスレッドを起動した後すぐに `CountDownLatch.await()` を呼ぶべきです。これにより、メインスレッドの処理はこのメソッドでブロックされ、他のスレッドが各自のタスクを完了するまで待機します。

他の N 個のスレッドは、CountDownLatch オブジェクトに通知を送る必要があります。これは `CountDownLatch.countDown()` によって実現されます。呼び出されるたびに、コンストラクタで初期化されたカウントが 1 減ります。N 個のスレッドがすべてこのメソッドを呼ぶと、カウントは 0 となり、主スレッドは `await()` を通じて処理を再開できます。

ちなみに、CountDownLatch の `await()` の使い方を誤るとデッドロックを引き起こす可能性があります。例えば、上のコードの for ループを次のように変更します。

```java
for (int i = 0; i < threadCount-1; i++) {
.......
}
```

このようにすると、カウントが 0 にならず、永久に待機します。

## CyclicBarrier（循環バリア）

### 介绍

`CyclicBarrier` は `CountDownLatch` と非常に似ていますが、スレッド間の待機の仕組みをより柔軟に扱える点で、`CountDownLatch` よりも複雑かつ強力です。主な適用シーンは `CountDownLatch` と同様です。

> CountDownLatch の実装は AQS に基づく一方、CyclicBarrier は ReentrantLock（ReentrantLock も AQS 同期器に属します）と Condition に基づいています。

CyclicBarrier の直訳は「循環可能な障壁（Barrier）」です。これが行うべきことは、複数のスレッドが障壁に到達する際にブロックし、最後のスレッドが到達したときに障壁を開放して、遮られていたすべてのスレッドが処理を再開することです。

### 原理

CyclicBarrier 内部では `count` 変数をカウントとして使用します。`count` の初期値は `parties` の初期値です。スレッドが到達するたびにカウントを 1 減らします。`count` が 0 になると、それはこの世代の最後のスレッドが到達したことを表し、コンストラクタで入力されたタスクを実行し、次の世代を開始します。

```java
//毎回ブロックするスレッド数
private final int parties;
//カウント
private int count;
```

以下、ソースコードの解説を簡略に。

1. `CyclicBarrier(int parties)` のデフォルト構成は `CyclicBarrier(int parties)` で、パラメータはバリアを遮断するスレッド数を表します。各スレッドは `await()` を呼び出して自分がバリアに到達したことを伝え、現在のスレッドはブロックされます。

    ```java
    public CyclicBarrier(int parties) {
        this(parties, null);
    }
    
    public CyclicBarrier(int parties, Runnable barrierAction) {
        if (parties <= 0) throw new IllegalArgumentException();
        this.parties = parties;
        this.count = parties;
        this.barrierCommand = barrierAction;
    }
    ```

    ここで、`parties` はブロックするスレッドの数を表します。到達するスレッド数がこの値に達すると、バーが開いて全てのスレッドが通過します。

2. `CyclicBarrier` オブジェクトが `await()` を呼ぶと、実際には `dowait(false, 0L)` が呼ばれます。`await()` はバリアを作動させる行動のように、スレッドをブロックします。到達スレッド数が `parties` の値に達すと、バリアが開きスレッドが通過します。

    ```java
    public int await() throws InterruptedException, BrokenBarrierException {
      try {
          return dowait(false, 0L);
      } catch (TimeoutException toe) {
          throw new Error(toe); // cannot happen
      }
    }
    ```

    `dowait(false, 0L)` のソース解析は以下のとおりです：

```java
// スレッド数または要求数が count に達した場合のみ await 後の処理が実行される。上の例では count は 5。
        private int count;
        /**
         * Main barrier code, covering the various policies.
         */
        private int dowait(boolean timed, long nanos)
            throws InterruptedException, BrokenBarrierException,
                   TimeoutException {
            final ReentrantLock lock = this.lock;
            // 施錠
            lock.lock();
            try {
                final Generation g = generation;
    
                if (g.broken)
                    throw new BrokenBarrierException();
    
                // スレッドが中断されている場合
                if (Thread.interrupted()) {
                    breakBarrier();
                    throw new InterruptedException();
                }
                // count を -1
                int index = --count;
                // index が 0 になれば tripped（通過可能）
                if (index == 0) {  // tripped
                    boolean ranAction = false;
                    try {
                        final Runnable command = barrierCommand;
                        if (command != null)
                            command.run();
                        ranAction = true;
                        // count を parties の初期値にリセット
                        // 待機していたスレッドを起こす
                        // 次の波を開始
                        nextGeneration();
                        return 0;
                    } finally {
                        if (!ranAction)
                            breakBarrier();
                    }
                }
    
                // トライする待機ループ
                for (;;) {
                    try {
                        if (!timed)
                            trip.await();
                        else if (nanos > 0L)
                            nanos = trip.awaitNanos(nanos);
                    } catch (InterruptedException ie) {
                        if (g == generation && ! g.broken) {
                            breakBarrier();
                            throw ie;
                        } else {
                            // 待機を終える直前なので、割り込みは
                            // 後続の実行に「属する」とみなす
                            Thread.currentThread().interrupt();
                        }
                    }
    
                    if (g.broken)
                        throw new BrokenBarrierException();
    
                    if (g != generation)
                        return index;
    
                    if (timed && nanos <= 0L) {
                        breakBarrier();
                        throw new TimeoutException();
                    }
                }
            } finally {
                lock.unlock();
            }
        }
```

### 実戦

例 1：

```java
public class CyclicBarrierExample1 {
  // 要求数
  private static final int threadCount = 550;
  // 同期するスレッド数
  private static final CyclicBarrier cyclicBarrier = new CyclicBarrier(5);

  public static void main(String[] args) throws InterruptedException {
    // スレッドプールの作成
    ExecutorService threadPool = Executors.newFixedThreadPool(10);

    for (int i = 0; i < threadCount; i++) {
      final int threadNum = i;
      Thread.sleep(1000);
      threadPool.execute(() -> {
        try {
          test(threadNum);
        } catch (InterruptedException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        } catch (BrokenBarrierException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        }
      });
    }
    threadPool.shutdown();
  }

  public static void test(int threadnum) throws InterruptedException, BrokenBarrierException {
    System.out.println("threadnum:" + threadnum + "is ready");
    try {
      /**Wait 60 seconds to ensure all sub-threads finish*/
      cyclicBarrier.await(60, TimeUnit.SECONDS);
    } catch (Exception e) {
      System.out.println("-----CyclicBarrierException------");
    }
    System.out.println("threadnum:" + threadnum + "is finish");
  }

}
```

実行結果は以下のとおり：

```plain text
threadnum:0is ready
threadnum:1is ready
threadnum:2is ready
threadnum:3is ready
threadnum:4is ready
threadnum:4is finish
threadnum:0is finish
threadnum:1is finish
threadnum:2is finish
threadnum:3is finish
threadnum:5is ready
threadnum:6is ready
threadnum:7is ready
threadnum:8is ready
threadnum:9is ready
threadnum:9is finish
threadnum:5is finish
threadnum:8is finish
threadnum:7is finish
threadnum:6is finish
......
```

5 が到達した時点で `await()` 後の処理が実行されるのが分かります。

また、CyclicBarrier にはさらに高度なコンストラクタ `CyclicBarrier(int parties, Runnable barrierAction)` も用意されています。スレッドが障壁に到達したとき、まず `barrierAction` を実行してから処理を続行させることができ、より複雑なビジネスシーンに対応します。

例 2：

```java
public class CyclicBarrierExample2 {
  // 要求数
  private static final int threadCount = 550;
  // 同期するスレッド数
  private static final CyclicBarrier cyclicBarrier = new CyclicBarrier(5, () -> {
    System.out.println("------当线程数达到之后，优先执行------");
  });

  public static void main(String[] args) throws InterruptedException {
    // スレッドプールを作成
    ExecutorService threadPool = Executors.newFixedThreadPool(10);

    for (int i = 0; i < threadCount; i++) {
      final int threadNum = i;
      Thread.sleep(1000);
      threadPool.execute(() -> {
        try {
          test(threadNum);
        } catch (InterruptedException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        } catch (BrokenBarrierException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        }
      });
    }
    threadPool.shutdown();
  }

  public static void test(int threadnum) throws InterruptedException, BrokenBarrierException {
    System.out.println("threadnum:" + threadnum + "is ready");
    cyclicBarrier.await();
    System.out.println("threadnum:" + threadnum + "is finish");
  }
}
```

実行結果は以下のとおり：

```plain text
threadnum:0is ready
threadnum:1is ready
threadnum:2is ready
threadnum:3is ready
threadnum:4is ready
------当线程数达到之后，优先执行------
threadnum:4is finish
threadnum:0is finish
threadnum:2is finish
threadnum:1is finish
threadnum:3is finish
threadnum:5is ready
threadnum:6is ready
threadnum:7is ready
threadnum:8is ready
threadnum:9is ready
------当线程数达到之后，优先执行------
threadnum:9is finish
threadnum:5is finish
threadnum:6is finish
threadnum:8is finish
threadnum:7is finish
......
```
