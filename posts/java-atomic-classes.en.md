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
lang: 'en'
---

# Atomic Classes

## Introduction to Atomic Classes

Atomic translates to "atomic" in Chinese. Here, Atomic refers to an operation that is non-interruptible. Even when executed by multiple threads together, once an operation starts, it will not be interrupted by other threads.

So, simply speaking, an atomic class is a class that has atomic/atomic-operation characteristics.

The atomic classes in the concurrency package java.util.concurrent are located under java.util.concurrent.atomic.

Based on the type of data being operated on, the atomic classes in the JUC package can be divided into four categories

1. **Primitive Types**

    Atomically updating primitive types

    - `AtomicInteger`: Atomic integer class
    - `AtomicLong`: Atomic long class
    - `AtomicBoolean`: Atomic boolean class
2. **Array Types**

    Atomically updating a specific element inside an array

    - `AtomicIntegerArray`: Atomic array class for integers
    - `AtomicLongArray`: Atomic array class for longs
    - `AtomicReferenceArray`: Atomic array class for reference types
3. **Reference Types**
    - `AtomicReference`: Atomic reference type
    - `AtomicMarkableReference`: Atomic update of a reference type with a mark. This class associates a boolean mark with a reference.
    - `AtomicStampedReference`: Atomic update of a reference type with a stamp. This class associates an integer value with a reference and can be used to address the ABA problem that might occur when performing atomic updates with CAS.
    > Note: `AtomicMarkableReference` cannot solve the ABA problem.
4. **Updater Types for Object Fields**
    - `AtomicIntegerFieldUpdater`: Updater for atomically updating integer fields
    - `AtomicLongFieldUpdater`: Updater for atomically updating long fields
    - `AtomicReferenceFieldUpdater`: Updater for atomically updating fields inside reference types

## Primitive Type Atomic Classes

Atomically updating primitive types

- `AtomicInteger`: Atomic integer class
- `AtomicLong`: Atomic long class
- `AtomicBoolean`: Atomic boolean class

The three classes above provide nearly the same methods, so here we use `AtomicInteger` as an example to illustrate.

### **Common Methods of the AtomicInteger Class**

```java
public final int get() // get the current value
public final int getAndSet(int newValue)// get the current value, then set a new value
public final int getAndIncrement()// get the current value, then increment
public final int getAndDecrement() // get the current value, then decrement
public final int getAndAdd(int delta) // get the current value, then add the delta
boolean compareAndSet(int expect, int update) // if the input equals the expected value, atomically set to update
public final void lazySet(int newValue)// eventually set to newValue; after lazySet, other threads may read the old value for a short period
```

**`AtomicInteger`**  **Common usage**:

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


### **Advantages of Primitive Type Atomic Classes**

Let's look at the advantages of primitive type atomic classes with a simple example.

1. **In a multi-threaded environment, not using atomic classes cannot guarantee thread safety (primitive types)**

    ```java
    class Test {
            private volatile int count = 0;
            // To execute count++ in a thread-safe way, you need to lock
            public synchronized void increment() {
                      count++;
            }
    
            public int getCount() {
                      return count;
            }
    }
    ```

2. **In a multi-threaded environment, using atomic classes guarantees thread safety (primitive types)**

    ```java
    class Test2 {
            private AtomicInteger count = new AtomicInteger();
    
            public void increment() {
                      count.incrementAndGet();
            }
          // After using AtomicInteger, you don't need to lock, and you can still achieve thread safety.
           public int getCount() {
                    return count.get();
            }
    }
    ```


### AtomicInteger 线程安全原理简单分析


`AtomicInteger` 类的部分源码：


```java
// setup to use Unsafe.compareAndSwapInt for updates（更新操作时提供“比较并替换”的作用）
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


`AtomicInteger` 类主要利用 CAS (compare and swap) + volatile 和 native 方法来保证原子操作，从而避免 synchronized 的高开销，执行效率大为提升。


CAS 的原理是拿期望的值和原本的一个值作比较，如果相同则更新成新的值。Unsafe 类的 `objectFieldOffset()` 方法是一个本地方法，这个方法是用来拿到“原来的值”的内存地址。另外 value 是一个 volatile 变量，在内存中可见，因此 JVM 可以保证任何时刻任何线程总能拿到该变量的最新值。


## Array-Type Atomic Classes

Atomically updating a single element in an array

- `AtomicIntegerArray`: Atomic array class for integers
- `AtomicLongArray`: Atomic array class for longs
- `AtomicReferenceArray`: Atomic array class for reference types

The three classes above provide almost identical methods, so here we'll use `AtomicIntegerArray` as an example.

**`AtomicIntegerArray`**  **Common Methods**:

```java
public final int get(int i) // get the value at index i
public final int getAndSet(int i, int newValue)// return the current value at index i, and set it to newValue
public final int getAndIncrement(int i)// get the value at index i, and increment that element
public final int getAndDecrement(int i) // get the value at index i, and decrement that element
public final int getAndAdd(int i, int delta) // get the value at index i, and add delta
boolean compareAndSet(int i, int expect, int update) // if the input value equals the expected, atomically set the index i element to update
public final void lazySet(int i, int newValue)// finally set the element at index i to newValue; may read the old value for a short time after this
```

**`AtomicIntegerArray`**  **Usage Example**:

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


## Reference-Type Atomic Classes

Primitive type atomic classes can only update one variable. If you need to atomically update multiple variables, you should use reference-type atomic classes.

- `AtomicReference`: Atomic reference type
- `AtomicStampedReference`: Atomic update of a reference type with a stamp. This class associates an integer value with a reference and can be used to solve the ABA problem when performing atomic updates with CAS.
- `AtomicMarkableReference`: Atomic update of a reference type with a mark. This class associates a boolean mark with a reference

### **Usage Examples**

- **`AtomicReference` Class**:

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


    The above code first creates a Person object, then puts it into an AtomicReference, and calls compareAndSet, which CAS-sets the ar if its value is person. If ar equals person, it is set to updatePerson. The implementation principle is the same as the compareAndSet method in AtomicInteger. The output after running the code is:

```plain text
Daisy
20
```

- **`AtomicStampedReference` Class Usage Example**:

```java
import java.util.concurrent.atomic.AtomicStampedReference;

public class AtomicStampedReferenceDemo {
    public static void main(String[] args) {
        // Instantiate, get current value and stamp
        final Integer initialRef = 0, initialStamp = 0;
        final AtomicStampedReference<Integer> asr = new AtomicStampedReference<>(initialRef, initialStamp);
        System.out.println("currentValue=" + asr.getReference() + ", currentStamp=" + asr.getStamp());

        // compare and set
        final Integer newReference = 666, newStamp = 999;
        final boolean casResult = asr.compareAndSet(initialRef, newReference, initialStamp, newStamp);
        System.out.println("currentValue=" + asr.getReference()
                + ", currentStamp=" + asr.getStamp()
                + ", casResult=" + casResult);

        // Get current value and current stamp
        int[] arr = new int[1];
        final Integer currentValue = asr.get(arr);
        final int currentStamp = arr[0];
        System.out.println("currentValue=" + currentValue + ", currentStamp=" + currentStamp);

        // Individually set the stamp
        final boolean attemptStampResult = asr.attemptStamp(newReference, 88);
        System.out.println("currentValue=" + asr.getReference()
                + ", currentStamp=" + asr.getStamp()
                + ", attemptStampResult=" + attemptStampResult);

        // Reset current value and stamp
        asr.set(initialRef, initialStamp);
        System.out.println("currentValue=" + asr.getReference() + ", currentStamp=" + asr.getStamp());

        // [Not recommended unless you fully understand the comments]
        // weak compare and set
        // Confusing! weakCompareAndSet ultimately calls compareAndSet. [Version: jdk-8u191]
        // but the comment says "May fail spuriously and does not provide ordering guarantees,
        // so is only rarely an appropriate alternative to compareAndSet."
        // todo Might be JVM forwarding in native method due to method name
        final boolean wCasResult = asr.weakCompareAndSet(initialRef, newReference, initialStamp, newStamp);
        System.out.println("currentValue=" + asr.getReference()
                + ", currentStamp=" + asr.getStamp()
                + ", wCasResult=" + wCasResult);
    }
}
```


输出结果如下：


```plain text
currentValue=0, currentStamp=0
currentValue=666, currentStamp=999, casResult=true
currentValue=666, currentStamp=999
currentValue=666, currentStamp=88, attemptStampResult=true
currentValue=0, currentStamp=0
currentValue=666, currentStamp=999, wCasResult=true
```

- **`AtomicMarkableReference` Class Usage Example**:

```java
import java.util.concurrent.atomic.AtomicMarkableReference;

public class AtomicMarkableReferenceDemo {
    public static void main(String[] args) {
        // Instantiate, get current value and mark
        final Boolean initialRef = null, initialMark = false;
        final AtomicMarkableReference<Boolean> amr = new AtomicMarkableReference<>(initialRef, initialMark);
        System.out.println("currentValue=" + amr.getReference() + ", currentMark=" + amr.isMarked());

        // compare and set
        final Boolean newReference1 = true, newMark1 = true;
        final boolean casResult = amr.compareAndSet(initialRef, newReference1, initialMark, newMark1);
        System.out.println("currentValue=" + amr.getReference()
                + ", currentMark=" + amr.isMarked()
                + ", casResult=" + casResult);

        // Get current value and current mark
        boolean[] arr = new boolean[1];
        final Boolean currentValue = amr.get(arr);
        final boolean currentMark = arr[0];
        System.out.println("currentValue=" + currentValue + ", currentMark=" + currentMark);

        // Individually set mark
        final boolean attemptMarkResult = amr.attemptMark(newReference1, false);
        System.out.println("currentValue=" + amr.getReference()
                + ", currentMark=" + amr.isMarked()
                + ", attemptMarkResult=" + attemptMarkResult);

        // Reset current value and mark
        amr.set(initialRef, initialMark);
        System.out.println("currentValue=" + amr.getReference() + ", currentMark=" + amr.isMarked());

        // [Not recommended unless you fully understand the comments]
        // weak compare and set
        // Confusing! weakCompareAndSet ultimately calls compareAndSet. [Version: jdk-8u191]
        // but the comment says "May fail spuriously and does not provide ordering guarantees,
        // so is only rarely an appropriate alternative to compareAndSet."
        // todo Might be JVM forwarding in native method due to method name
        final boolean wCasResult = amr.weakCompareAndSet(initialRef, newReference1, initialMark, newMark1);
        System.out.println("currentValue=" + amr.getReference()
                + ", currentMark=" + amr.isMarked()
                + ", wCasResult=" + wCasResult);
    }
}
```


输出结果如下：


```plain text
currentValue=null, currentMark=false
currentValue=true, currentMark=true, casResult=true
currentValue=true, currentMark=true
currentValue=true, currentMark=false, attemptMarkResult=true
currentValue=null, currentMark=false
currentValue=true, currentMark=true, wCasResult=true
```


## Atomic Field Updaters for Object Fields

If you need to atomically update a field within a class, you should use the atomic field updater classes.

- `AtomicIntegerFieldUpdater`: Updater for atomically updating integer fields
- `AtomicLongFieldUpdater`: Updater for atomically updating long fields
- `AtomicReferenceFieldUpdater`: Updater for atomically updating fields inside reference types

To atomically update an object's field, two steps are required. First, because the atomic field updater classes are abstract, you must create an updater via the static method newUpdater(), specifying the class and the field to update. Second, the updated field must be declared as public volatile.

The three classes above provide almost identical methods, so here we'll use `AtomicIntegerFieldUpdater` as an example.

**Example usage of AtomicIntegerFieldUpdater**:

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
