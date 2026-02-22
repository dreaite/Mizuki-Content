---
title: 'Java AQS'
published: 2024-02-03
updated: 2024-02-04
description: 'AQS（抽象队列同步器）是Java中的一个抽象类，主要用于构建锁和同步器。其核心原理是通过CLH锁实现线程的阻塞等待和唤醒机制。AQS支持独占和共享两种资源共享方式，常见的同步工具类包括Semaphore和CountDownLatch，分别用于控制线程访问资源的数量和等待多个线程完成任务。CyclicBarrier则允许一组线程在到达同步点时被阻塞，直到最后一个线程到达。'
permalink: 'java-aqs-intro.en'
image: 'https://r2.dreaife.tokyo/notion/covers/d4c9fe2ac69c466bae31d027d7c36398/20240204_060715.jpg'
tags: ['meeting', 'doc', 'multi-prog', 'java']
category: 'cs-base'
draft: false
lang: 'en'
---

## AQS Introduction

AQS stands for `AbstractQueuedSynchronizer`, which translates to Abstract Queued Synchronizer. This class is under the `java.util.concurrent.locks` package.

AQS is an abstract class mainly used to build locks and synchronizers.

```java
public abstract class AbstractQueuedSynchronizer extends AbstractOwnableSynchronizer implements java.io.Serializable {
}
```

AQS provides implementations of some common functionalities for building locks and synchronizers, so using AQS makes it simple and efficient to construct a wide range of widely-used synchronizers, such as the ones we mentioned: `ReentrantLock`, `Semaphore`; others like `ReentrantReadWriteLock`, `SynchronousQueue`, etc., are all based on AQS.


## AQS Principles

In concurrency interviews, people are often asked, “Please explain your understanding of the principles of AQS.” Here’s a reference example. Interviews aren’t about memorization; you should add your own thoughts. Even if you can’t add your own thoughts, you should be able to explain it in a straightforward way rather than reciting.

### Core idea of AQS

The core idea of AQS is: if the requested shared resource is free, set the requesting thread as an active worker thread and set the shared resource to a locked state. If the requested shared resource is occupied, a mechanism for blocking/waiting threads and for unlocking and distributing the lock upon wake-up is needed. This mechanism in AQS is based on **CLH locks** (Craig, Landin, and Hagersten locks).

CLH locks are an improvement over spinlocks, forming a virtual bidirectional queue (a virtual bidirectional queue meaning there is no actual queue instance, only the relationships between nodes). Threads that temporarily cannot acquire the lock are added to this queue. AQS encapsulates each thread requesting the shared resource into a CLH queue lock node (Node) to implement lock distribution. In a CLH queue lock, a node represents a thread, and it stores the thread reference, the node’s state in the queue (waitStatus), the previous node (prev), and the next node (next).

AQS (`AbstractQueuedSynchronizer`) core diagram:

![20240204132148.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240204132148.png)

AQS uses an int state variable to represent the synchronization state, and relies on an internal FIFO thread-waiting/wait queue to handle the queuing of threads trying to acquire the resource.

```java
// Shared variable, use volatile to ensure visibility
private volatile int state;
```

Additionally, the state can be accessed via the `protected`-typed `getState()`, `setState()` and `compareAndSetState()` methods. And these methods are all declared `final`, so they cannot be overridden in subclasses.

```java
// Return the current value of the synchronization state
protected final int getState() {
     return state;
}
 // Set the synchronization state value
protected final void setState(int newState) {
     state = newState;
}
// Atomically (CAS) set the synchronization state to the given value
protected final boolean compareAndSetState(int expect, int update) {
      return unsafe.compareAndSwapInt(this, stateOffset, expect, update);
}
```


Take the reentrant mutual-exclusion lock `ReentrantLock` as an example. It maintains an internal `state` variable to indicate the lock’s occupancy. The initial value of `state` is 0, meaning the lock is unlocked. When thread A calls `lock()`, it will try to exclusively acquire the lock via `tryAcquire()` and increment the value of `state` by 1. If successful, thread A obtains the lock. If it fails, thread A is added to a waiting queue (the CLH queue) until another thread releases the lock. Suppose thread A acquires the lock; before releasing it, thread A can reacquire the lock (the `state` will accumulate). This is the manifestation of reentrancy: a thread can acquire the same lock multiple times without being blocked. However, this also means a thread must release the lock the same number of times as it acquired it, so that the value of `state` returns to 0 and the lock becomes unlocked again. Only in this way can other waiting threads have a chance to acquire the lock.

The process of thread A attempting to acquire the lock is shown in the figure below:

![20240204132159.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240204132159.png)

Now, consider the Countdown Timer `CountDownLatch` as an example. The task is divided into N sub-threads to execute, and the `state` is initialized to N (note that N should match the number of threads). These N sub-threads begin executing their tasks; after finishing each sub-thread, they call `countDown()`. This method attempts a CAS operation to decrement the `state` by 1. When all sub-threads have completed (i.e., `state` becomes 0), `CountDownLatch` will call `unpark()` to wake up the main thread. At this point, the main thread can return from the `await()` method (the `await()` in `CountDownLatch`, not the one in AQS) and continue with subsequent operations.


## AQS Shared Resource Modes

AQS defines two resource-sharing modes: `Exclusive` (exclusive, only one thread can execute, e.g., `ReentrantLock`) and `Shared` (shared, multiple threads can execute concurrently, e.g., `Semaphore`/`CountDownLatch`).

Generally, a custom synchronizer’s sharing mode is either exclusive or shared, and you only need to implement one of `tryAcquire-tryRelease` or `tryAcquireShared-tryReleaseShared`. But AQS also supports a custom synchronizer implementing both exclusive and shared modes, such as in `ReentrantReadWriteLock`.


### Custom synchronizers

The design of a synchronizer is based on the template method pattern. A typical way to customize a synchronizer is as follows (a classic application of the template method pattern):

1. The user extends `AbstractQueuedSynchronizer` and overrides the specified methods.
2. The AQS is composed into the custom synchronization component's implementation, and its template methods are called, which in turn call the methods overridden by the user.

This is a major difference from the traditional approach of implementing interfaces.

**AQS uses the template method pattern; when designing a custom synchronizer, you need to override the following AQS-provided hook methods:**

```java
// Exclusive mode. Try to acquire the resource; return true if successful, false otherwise.
protected boolean tryAcquire(int)
// Exclusive mode. Try to release the resource; return true if successful, false otherwise.
protected boolean tryRelease(int)
// Shared mode. Try to acquire the resource. Negative means failure; 0 means success but no remaining resources; positive means success with remaining resources.
protected int tryAcquireShared(int)
// Shared mode. Try to release the resource; on success return true, on failure return false.
protected boolean tryReleaseShared(int)
// Whether this thread holds the lock exclusively. Only needed when you use condition.
protected boolean isHeldExclusively()
```

**What is a hook method?** A hook method is a method declared in an abstract class, usually marked with the `protected` keyword. It can be a no-op method (implemented by subclasses) or a method with a default implementation. The template method pattern uses hook methods to control the fixed step implementations.

Besides the hook methods mentioned above, the other methods in the AQS class are `final`, so they cannot be overridden by other classes.


# Common Synchronization Utilities

The following introduces several common synchronization utilities based on AQS.


## Semaphore (Semaphore)

### Introduction

`synchronized` and `ReentrantLock` both allow only one thread at a time to access a resource, while `Semaphore` (the semaphore) can be used to control how many threads can access a particular resource simultaneously.

The usage of `Semaphore` is straightforward. Suppose there are N (N > 5) threads trying to acquire the shared resource in the `Semaphore`. The following code indicates that at any moment among N threads, only 5 threads can obtain the shared resource, and the others will block until a thread releases the resource, after which the blocked threads can obtain it.

```java
// Initial number of shared resources
final Semaphore semaphore = new Semaphore(5);
// Acquire 1 permit
semaphore.acquire();
// Release 1 permit
semaphore.release();
```

When the initial resource count is 1, `Semaphore` degrades to an exclusive lock.

`Semaphore` has two modes:

- **Fair mode:** The order in which `acquire()` is called defines the order of acquiring permits, following FIFO;
- **Unfair mode:** Preemptive.

The two constructors for `Semaphore` are as follows:

```java
public Semaphore(int permits) {
    sync = new NonfairSync(permits);
}

public Semaphore(int permits, boolean fair) {
    sync = fair ? new FairSync(permits) : new NonfairSync(permits);
}
```

Both constructors must specify the number of permits. The second constructor allows you to choose fair or unfair mode, with unfair mode as default.

`Semaphore` is typically used in scenarios where there is a clear limit on resource access, such as rate limiting (limited to a single machine; for real projects, Redis + Lua is recommended for rate limiting).


### Principle

`Semaphore` is an implementation of a shared lock, and it initializes AQS’s `state` to `permits` by default. You can think of `permits` as the number of licenses; only threads that hold a license can proceed.

Taking the no-argument `acquire` method as an example, calling `semaphore.acquire()` makes a thread attempt to obtain a permit. If `state > 0`, it means it can succeed; if `state <= 0`, it means there are not enough permits, and acquisition fails.

If acquisition can succeed (`state > 0`), it will attempt a CAS to modify the `state` value to `state - 1`. If acquisition fails, a Node is created and added to the waiting queue, and the current thread is suspended.

```java
// Acquire 1 permit
public void acquire() throws InterruptedException {
    sync.acquireSharedInterruptibly(1);
}

// Acquire one or more permits
public void acquire(int permits) throws InterruptedException {
    if (permits < 0) throw new IllegalArgumentException();
    sync.acquireSharedInterruptibly(permits);
}
```

`acquireSharedInterruptibly` is the default implementation in `AbstractQueuedSynchronizer`.

```java
// Acquire a permit in shared mode; if successful return, otherwise join the waiting queue and suspend the thread
public final void acquireSharedInterruptibly(int arg)
    throws InterruptedException {
    if (Thread.interrupted())
      throw new InterruptedException();
        // Try to acquire a permit; arg is the number of permits to acquire. If acquisition fails, create a node and join the waiting queue, suspending the current thread.
    if (tryAcquireShared(arg) < 0)
      doAcquireSharedInterruptibly(arg);
}
```

Taking the nonfair mode (`NonfairSync`) as an example, here is the implementation of `tryAcquireShared`:

```java
// In shared mode, attempt to acquire the resource (the resource in Semaphore is the permit):
protected int tryAcquireShared(int acquires) {
    return nonfairTryAcquireShared(acquires);
}

// Nonfair shared mode permit acquisition
final int nonfairTryAcquireShared(int acquires) {
    for (;;) {
        // Current number of available permits
        int available = getState();
        /*
         * Try to acquire a permit. If the current available permits are less than or equal to 0, return a negative value to indicate failure.
         * If the current available permits are greater than 0, success may occur; if CAS fails, loop to retry with the latest value.
         */
        int remaining = available - acquires;
        if (remaining < 0 ||
            compareAndSetState(available, remaining))
            return remaining;
    }
}
```

For the no-argument `release` method, calling `semaphore.release();` makes the thread attempt to release a permit and uses CAS to modify the `state` value to `state + 1`. After successfully releasing a permit, one thread in the waiting queue is awakened. The awakened thread will again try to modify the `state` value to `state - 1`; if `state > 0` the token is acquired successfully, otherwise it re-enters the waiting queue and suspends.

```java
// Release 1 permit
public void release() {
    sync.releaseShared(1);
}

// Release one or more permits
public void release(int permits) {
    if (permits < 0) throw new IllegalArgumentException();
    sync.releaseShared(permits);
}
```

`releaseShared` is the default implementation in `AbstractQueuedSynchronizer`.

```java
// Release shared lock
// If tryReleaseShared returns true, wake up one or more waiting threads.
public final boolean releaseShared(int arg) {
    // Release the shared lock
    if (tryReleaseShared(arg)) {
      // Release the current node's successor waiting node
      doReleaseShared();
      return true;
    }
    return false;
}
```

`tryReleaseShared` is a method overridden in Semaphore’s inner `Sync` class; the default implementation in `AbstractQueuedSynchronizer` simply throws `UnsupportedOperationException`.

```java
// Overridden in the inner class Sync of Semaphore
// Attempt to release resources
protected final boolean tryReleaseShared(int releases) {
    for (;;) {
        int current = getState();
        // Available permits + 1
        int next = current + releases;
        if (next < current) // overflow
            throw new Error("Maximum permit count exceeded");
         // CAS update of state
        if (compareAndSetState(current, next))
            return true;
    }
}
```

As you can see, the methods mentioned above are largely implemented by the synchronizer `sync` behind the scenes. `Sync` is the inner class of `CountDownLatch`, inheriting from `AbstractQueuedSynchronizer`, and it overrides some of its methods. There are also two subclasses corresponding to the modes: `NonfairSync` (for unfair mode) and `FairSync` (for fair mode).

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


### Practical Example

```java
public class SemaphoreExample {
  // Number of requests
  private static final int threadCount = 550;

  public static void main(String[] args) throws InterruptedException {
    // Create a thread pool with a fixed number of threads (if this is too small, you’ll see it runs slowly)
    ExecutorService threadPool = Executors.newFixedThreadPool(300);
    // Initial permits
    final Semaphore semaphore = new Semaphore(20);

    for (int i = 0; i < threadCount; i++) {
      final int threadnum = i;
      threadPool.execute(() -> {// Using a lambda expression
        try {
          semaphore.acquire();// Acquire a permit, so at most 20 threads can run
          test(threadnum);
          semaphore.release();// Release a permit
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
    Thread.sleep(1000);// Simulate a time-consuming operation
    System.out.println("threadnum:" + threadnum);
    Thread.sleep(1000);// Simulate a time-consuming operation
  }
}
```

Calling `acquire()` blocks until a permit can be obtained, then grabs one permit; each `release` increases a permit, which may release a blocked `acquire()` method. However, there is no actual permit object; `Semaphore` simply maintains a count of available permits. Semaphores are often used to limit the number of threads that can access a resource.

Of course, you can also acquire and release multiple permits at once, though it’s usually unnecessary:

```java
semaphore.acquire(5);// Acquire 5 permits, so at most 20/5 = 4 threads can run
test(threadnum);
semaphore.release(5);// Release 5 permits
```

Besides the `acquire()` method, another commonly used counterpart is the `tryAcquire()` method, which returns false immediately if a permit cannot be obtained.

> Semaphore, like CountDownLatch, is also a shared lock implementation. It initializes AQS’s state to permits by default. If the number of threads executing tasks exceeds permits, the extra threads will be parked in a waiting queue (Park) and spin until `state` becomes greater than 0. Only when `state` is greater than 0 can the blocked threads continue; at that moment, the threads that previously performed tasks continue to execute `release()`, which increments `state` by 1, and the spinning threads will detect the success. Thus, at any time, no more than `permits` threads can spin successfully, limiting the number of threads executing tasks.


## CountDownLatch (Countdown Latch)

### Introduction

`CountDownLatch` allows `count` threads to block at a location until all threads’ tasks have completed.

`CountDownLatch` is a one-shot mechanism; the counter value can only be initialized in the constructor, and there is no mechanism to reset it afterwards. Once a `CountDownLatch` is used up, it cannot be used again.


### Principle

`CountDownLatch` is an implementation of a shared lock; it initializes AQS’s `state` to `count` by default. This is evident from the constructor.

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

When threads call `countDown()`, it actually uses `tryReleaseShared` with CAS to decrement `state`, until `state` becomes 0. When `state` reaches 0, it means all threads have called `countDown`, and the threads waiting on the CountDownLatch will be awakened and proceed.

```java
public void countDown() {
    // Sync is an inner class of CountDownLatch, extending AbstractQueuedSynchronizer
    sync.releaseShared(1);
}
```

`releaseShared` is the default implementation in `AbstractQueuedSynchronizer`.

```java
// Release shared lock
// If tryReleaseShared returns true, wake up one or more waiting threads.
public final boolean releaseShared(int arg) {
    // Release the shared lock
    if (tryReleaseShared(arg)) {
      // Release the successor waiting nodes of the current node
      doReleaseShared();
      return true;
    }
    return false;
}
```

`tryReleaseShared` is a method overridden in the inner `Sync` class of CountDownLatch; the default implementation in `AbstractQueuedSynchronizer` simply throws `UnsupportedOperationException`.

```java
// Decrement the state; only when state reaches 0 will countDown return true
protected boolean tryReleaseShared(int releases) {
    // Optional: check if state is 0
    for (;;) {
        int c = getState();
        // If state is already 0, return false
        if (c == 0)
            return false;
        // Decrement state
        int nextc = c-1;
        // CAS update of state
        if (compareAndSetState(c, nextc))
            return nextc == 0;
    }
}
```

No-argument `await` blocks until the `state` becomes 0. When `await()` is called and `state` is not 0, the task is blocked, meaning statements after `await()` won’t execute (the main thread is added to the CLH queue). CountDownLatch then spin-waits via CAS to observe when `state == 0`. When it is 0, all waiting threads are released and the code after `await()` continues to execute.

```java
// Waits (also can be called as locking)
public void await() throws InterruptedException {
    sync.acquireSharedInterruptibly(1);
}
// Waits with timeout
public boolean await(long timeout, TimeUnit unit)
    throws InterruptedException {
    return sync.tryAcquireSharedNanos(1, unit.toNanos(timeout));
}
```

`acquireSharedInterruptibly` is the default implementation in `AbstractQueuedSynchronizer`.

```java
// Try to acquire the lock, on success return, on failure join the waiting queue and suspend the thread
public final void acquireSharedInterruptibly(int arg)
    throws InterruptedException {
    if (Thread.interrupted())
      throw new InterruptedException();
        // Try to acquire the lock; if acquisition fails, join the waiting queue and suspend the thread
    if (tryAcquireShared(arg) < 0)
      // Acquire failed, join the waiting queue and suspend the thread
      doAcquireSharedInterruptibly(arg);
}
```

`tryAcquireShared` is the method overridden in CountDownLatch’s inner `Sync` class; its role is to determine whether `state` is 0 or not—if it is 0, return 1; otherwise return -1.

```java
protected int tryAcquireShared(int acquires) {
    return (getState() == 0) ? 1 : -1;
}
```

### Practical Examples

Two typical uses of CountDownLatch:

1. A thread waits for N threads to complete before starting: initialize CountDownLatch with N (`new CountDownLatch(n)`); each task thread, upon completion, calls `countDown()`. When the counter reaches 0, the thread waiting on the CountDownLatch is awakened. A typical use case is waiting for multiple components to load before starting a service.

2. Realize maximum parallelism by starting multiple threads at the same time: initialize a shared CountDownLatch with 1 (`new CountDownLatch(1)`), have multiple threads wait on it before starting. When the main thread calls `countDown()`, the count becomes 0 and all threads are awakened to start concurrently.

CountDownLatch code example:

```java
public class CountDownLatchExample {
  // Number of requests
  private static final int THREAD_COUNT = 550;

  public static void main(String[] args) throws InterruptedException {
    // Create a thread pool with a fixed number of threads (for testing; adjust in real scenarios)
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
          // Indicates that one request has completed
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

In the above code, we defined the number of requests as 550. Only after all 550 requests are processed will the line `System.out.println("finish");` execute.

The first interaction with CountDownLatch is the main thread waiting for other threads. The main thread must call `CountDownLatch.await()` immediately after starting the other threads. This blocks the main thread at that method until the other threads finish their tasks.

The other N threads must reference the latch object because they need to notify CountDownLatch that they have completed their tasks. This notification is accomplished via `CountDownLatch.countDown()`; every call decrements the initial count by 1. When all N threads have called this method, the count reaches 0, and the main thread can resume execution via `await()`.


## CyclicBarrier (Cyclic Barrier)

### Introduction

`CyclicBarrier` and `CountDownLatch` are very similar; they can both realize inter-thread waiting, but CyclicBarrier is more complex and powerful. Its typical usage is similar to CountDownLatch.

> CountDownLatch is implemented based on AQS, while CyclicBarrier is based on ReentrantLock (which is also an AQS synchronizer) and Condition.

The literal meaning of CyclicBarrier is a barrier that can be reused (cyclic). It is designed to block a group of threads when they reach the barrier, until the last thread arrives, at which point the barrier opens and the threads that were blocked can continue working.

### Principle

Internally, CyclicBarrier uses a count variable as a counter; the initial value of count is the value of the `parties` parameter. Each time a thread reaches the barrier, the counter is decremented by 1. When the count reaches 0, it indicates that the last thread has arrived at the barrier, and the task provided in the constructor is attempted to be executed.

```java
// Number of threads intercepted each time
private final int parties;
// Counter
private int count;
```

Now, let’s briefly look at the source.

1. The default constructor of `CyclicBarrier` is `CyclicBarrier(int parties)`, whose parameter represents the number of threads to barrier. Each thread calling `await()` tells the barrier that it has reached the barrier, and the current thread is blocked.

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

Here, `parties` represents the number of threads to intercept; once the number reaches this value, the barrier opens and all threads pass through.

2. When a `CyclicBarrier` object’s `await()` method is called, it actually calls `dowait(false, 0L)`. The `await()` method blocks the threads as if a barrier has been erected; when the number of waiting threads reaches `parties`, the barrier opens and the threads proceed.

```java
public int await() throws InterruptedException, BrokenBarrierException {
  try {
      return dowait(false, 0L);
  } catch (TimeoutException toe) {
      throw new Error(toe); // cannot happen
  }
}
```


The following is the analysis of `dowait(false, 0L)`:

```java
// When the number of threads reaches count, the await method will proceed. In the example above, count is 5.
    private int count;
    /**
     * Main barrier code, covering the various policies.
     */
    private int dowait(boolean timed, long nanos)
        throws InterruptedException, BrokenBarrierException,
               TimeoutException {
        final ReentrantLock lock = this.lock;
        // Lock
        lock.lock();
        try {
            final Generation g = generation;

            if (g.broken)
                throw new BrokenBarrierException();

            // If the thread is interrupted, throw exception
            if (Thread.interrupted()) {
                breakBarrier();
                throw new InterruptedException();
            }
            // Decrement count
            int index = --count;
            // If count becomes 0, this is the last thread to reach the barrier
            if (index == 0) {  // tripped
                boolean ranAction = false;
                try {
                    final Runnable command = barrierCommand;
                    if (command != null)
                        command.run();
                    ranAction = true;
                    // Reset count to the initial value of parties
                    // Wake up the previously waiting threads
                    // Start next generation
                    nextGeneration();
                    return 0;
                } finally {
                    if (!ranAction)
                        breakBarrier();
                }
            }

            // Loop until tripped, broken, interrupted, or timed out
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
                        // We're about to finish waiting even if we had not
                        // been interrupted, so this interrupt is deemed to
                        // "belong" to subsequent execution.
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


### Practical Examples

Example 1:

```java
public class CyclicBarrierExample1 {
  // Number of requests
  private static final int threadCount = 550;
  // Number of threads to synchronize
  private static final CyclicBarrier cyclicBarrier = new CyclicBarrier(5);

  public static void main(String[] args) throws InterruptedException {
    // Create thread pool
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
      /**Wait for 60 seconds to ensure all sub-threads finish*/
      cyclicBarrier.await(60, TimeUnit.SECONDS);
    } catch (Exception e) {
      System.out.println("-----CyclicBarrierException------");
    }
    System.out.println("threadnum:" + threadnum + "is finish");
  }

}
```

Running result:

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

You can see that when the number of threads—i.e., the number of requests—reaches the defined value of 5, the code after `await()` is executed.

Additionally, CyclicBarrier provides a more advanced constructor `CyclicBarrier(int parties, Runnable barrierAction)` to run the barrierAction first when threads reach the barrier, which is convenient for handling more complex business scenarios.

Example 2:

```java
public class CyclicBarrierExample2 {
  // Number of requests
  private static final int threadCount = 550;
  // Number of threads to synchronize
  private static final CyclicBarrier cyclicBarrier = new CyclicBarrier(5, () -> {
    System.out.println("------When the thread count is reached, this runs first------");
  });

  public static void main(String[] args) throws InterruptedException {
    // Create thread pool
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

Running result:

```plain text
threadnum:0is ready
threadnum:1is ready
threadnum:2is ready
threadnum:3is ready
threadnum:4is ready
------When the thread count is reached, this runs first------
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
------When the thread count is reached, this runs first------
threadnum:9is finish
threadnum:5is finish
threadnum:6is finish
threadnum:8is finish
threadnum:7is finish
......
```
