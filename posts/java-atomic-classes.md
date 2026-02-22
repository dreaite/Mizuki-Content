---
title: 'java Atomic原子类&&常见并发容器'
published: 2024-02-04
updated: 2024-02-04
description: '介绍了Java中的原子类及常见并发容器，包括基本类型的原子类（如AtomicInteger、AtomicLong、AtomicBoolean）、数组类型的原子类、引用类型的原子类以及对象属性修改类型的原子类。还详细讲解了ConcurrentHashMap、CopyOnWriteArrayList、ConcurrentLinkedQueue、BlockingQueue和ConcurrentSkipListMap等并发容器的特性和使用场景。'
permalink: 'java-atomic-classes'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/f2d8a449-70d7-4977-8fd2-510c3a4ccfa4/20240203_041836.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNAGBRM%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T073412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE0vgzlQNnEBFzki8QxtRbByU425%2Bb1eZ4DAmR1R0gfgIhAOfalBB%2BYC7xzdxKheF%2BM%2F7nFITIBJiamVzGD8jmZYwtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw5UmJG0w26p%2Fro6Qq3AMKnsrukopqrOxumn0SuV3QywcjdT3nHwsb%2FLQ9XvNgF7fIz5YsOyr4l5hERbGe3SwZjjnxPCKWWSR7y2tl9ofdViCjgHrzfs%2FFfVWnSP94Et3I5edTTllUX5bi7jgXbwJo9UnPgi5HyhBc9FQRoE2TbP%2FQNujMAmUHgWYlkURI42rGDbZbEWPc1ktnIpt3jOyURp4HeEAqP2vqm9Z4VqlL0xcMK89GZKWp1cUpKWbK8bk5n%2Bjrl8F1KQ%2F6EkJKBMeN0xlG8pEY7WehwZy%2ByWH6KsHd%2F24Iq1kUOtGznIRcJGzs9miCE9SCZy7pzb22BqD%2B6RWd0lhPNG9bE25Pq%2Bp91YVVLpc%2B%2BZ8C7Ee8POJEAFx7KaqDSi0%2BIqwRmyal1R1KXp2xkwsRJU%2FwFY2X41sjZnhnFHqGbredYg0us8kcSibeXPagDaFGolwS63ki3rWmr7pbYjIGFOd6wV4OqadwZWGR%2F3usj5XMHUShIGMKXAfcwzWJ6bRyikOhcwFjdybU3QRov577SZocfaO4vjRPsnpyIqunU0rfW9VoR6WfdyQlvCemwEttg%2FwQpLh6zhsz%2FJeICdWG42vwj095qGxNXjdv1TLHIuw68Vl8bWZtRwdGbGrqk4f%2BCKAy4TDNxerMBjqkAQCl9Mk6qBl8gUkMQa2epzGBxSlLtg3ZLtOIYstBfg8KzwvMtoSu2bBhY5A1iQL3%2F8%2B5Cd2V3ztI%2Bj%2FHzL58w0r1IXYFYJuNLHOHJIoYONBgZEthT9TVnfgUYMQcSXomYMAHYkqOgt1gtQ%2Fx8giBkDvuCii1%2FqypVck3WH8%2BT50HSAlKADmpcUxIhheTj%2BMka7oDB6sHcy3aKe2hlVGxHc5xGjCp&X-Amz-Signature=26eb664d7cad9ad469c5f2ac43fccf14f0841811f1683403a791f354b21f138b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['meeting', 'multi-prog', 'doc', 'java']
category: 'cs-base'
draft: false
---

# Atomic原子类


## Atomic 原子类介绍


Atomic 翻译成中文是原子的意思。在这里 Atomic 是指一个操作是不可中断的。即使是在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程干扰。


所以，所谓原子类说简单点就是具有原子/原子操作特征的类。


并发包 `java.util.concurrent` 的原子类都存放在`java.util.concurrent.atomic`下。


根据操作的数据类型，可以将 JUC 包中的原子类分为 4 类

1. **基本类型**

    使用原子的方式更新基本类型

    - `AtomicInteger`：整型原子类
    - `AtomicLong`：长整型原子类
    - `AtomicBoolean`：布尔型原子类
2. **数组类型**

    使用原子的方式更新数组里的某个元素

    - `AtomicIntegerArray`：整型数组原子类
    - `AtomicLongArray`：长整型数组原子类
    - `AtomicReferenceArray`：引用类型数组原子类
3. **引用类型**
    - `AtomicReference`：引用类型原子类
    - `AtomicMarkableReference`：原子更新带有标记的引用类型。该类将 boolean 标记与引用关联起来。
    - `AtomicStampedReference`：原子更新带有版本号的引用类型。该类将整数值与引用关联起来，可用于解决原子的更新数据和数据的版本号，可以解决使用 CAS 进行原子更新时可能出现的 ABA 问题。
    > 注意: `AtomicMarkableReference` 不能解决 ABA 问题。
4. **对象的属性修改类型**
    - `AtomicIntegerFieldUpdater`:原子更新整型字段的更新器
    - `AtomicLongFieldUpdater`：原子更新长整型字段的更新器
    - `AtomicReferenceFieldUpdater`：原子更新引用类型里的字段

## 基本类型原子类


使用原子的方式更新基本类型

- `AtomicInteger`：整型原子类
- `AtomicLong`：长整型原子类
- `AtomicBoolean`：布尔型原子类

上面三个类提供的方法几乎相同，所以我们这里以 `AtomicInteger` 为例子来介绍。


### **AtomicInteger 类常用方法**


```java
public final int get() //获取当前的值
public final int getAndSet(int newValue)//获取当前的值，并设置新的值
public final int getAndIncrement()//获取当前的值，并自增
public final int getAndDecrement() //获取当前的值，并自减
public final int getAndAdd(int delta) //获取当前的值，并加上预期的值
boolean compareAndSet(int expect, int update) //如果输入的数值等于预期值，则以原子方式将该值设置为输入值（update）
public final void lazySet(int newValue)//最终设置为newValue,使用 lazySet 设置之后可能导致其他线程在之后的一小段时间内还是可以读到旧的值。
```


**`AtomicInteger`** **类使用示例** :


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


### 基本数据类型原子类的优势


通过一个简单例子带大家看一下基本数据类型原子类的优势

1. **多线程环境不使用原子类保证线程安全（基本数据类型）**

    ```java
    class Test {
            private volatile int count = 0;
            //若要线程安全执行执行count++，需要加锁
            public synchronized void increment() {
                      count++;
            }
    
            public int getCount() {
                      return count;
            }
    }
    ```

2. **多线程环境使用原子类保证线程安全（基本数据类型）**

    ```java
    class Test2 {
            private AtomicInteger count = new AtomicInteger();
    
            public void increment() {
                      count.incrementAndGet();
            }
          //使用AtomicInteger之后，不需要加锁，也可以实现线程安全。
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


CAS 的原理是拿期望的值和原本的一个值作比较，如果相同则更新成新的值。UnSafe 类的 `objectFieldOffset()` 方法是一个本地方法，这个方法是用来拿到“原来的值”的内存地址。另外 value 是一个 volatile 变量，在内存中可见，因此 JVM 可以保证任何时刻任何线程总能拿到该变量的最新值。


## 数组类型原子类


使用原子的方式更新数组里的某个元素

- `AtomicIntegerArray`：整形数组原子类
- `AtomicLongArray`：长整形数组原子类
- `AtomicReferenceArray`：引用类型数组原子类

上面三个类提供的方法几乎相同，所以我们这里以 `AtomicIntegerArray` 为例子来介绍。


**`AtomicIntegerArray`** **类常用方法**：


```java
public final int get(int i) //获取 index=i 位置元素的值
public final int getAndSet(int i, int newValue)//返回 index=i 位置的当前的值，并将其设置为新值：newValue
public final int getAndIncrement(int i)//获取 index=i 位置元素的值，并让该位置的元素自增
public final int getAndDecrement(int i) //获取 index=i 位置元素的值，并让该位置的元素自减
public final int getAndAdd(int i, int delta) //获取 index=i 位置元素的值，并加上预期的值
boolean compareAndSet(int i, int expect, int update) //如果输入的数值等于预期值，则以原子方式将 index=i 位置的元素值设置为输入值（update）
public final void lazySet(int i, int newValue)//最终 将index=i 位置的元素设置为newValue,使用 lazySet 设置之后可能导致其他线程在之后的一小段时间内还是可以读到旧的值。
```


**`AtomicIntegerArray`** **类使用示例** :


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


## 引用类型原子类


基本类型原子类只能更新一个变量，如果需要原子更新多个变量，需要使用 引用类型原子类。

- `AtomicReference`：引用类型原子类
- `AtomicStampedReference`：原子更新带有版本号的引用类型。该类将整数值与引用关联起来，可用于解决原子的更新数据和数据的版本号，可以解决使用 CAS 进行原子更新时可能出现的 ABA 问题。
- `AtomicMarkableReference`：原子更新带有标记的引用类型。该类将 boolean 标记与引用关联起来

### **使用示例**

- **`AtomicReference`** **类**:

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


    上述代码首先创建了一个 `Person` 对象，然后把 `Person` 对象设置进 `AtomicReference` 对象中，然后调用 `compareAndSet` 方法，该方法就是通过 CAS 操作设置 ar。如果 ar 的值为 `person` 的话，则将其设置为 `updatePerson`。实现原理与 `AtomicInteger` 类中的 `compareAndSet` 方法相同。运行上面的代码后的输出结果如下：


    ```plain text
    Daisy
    20
    ```

- **`AtomicStampedReference`** **类使用示例** :

    ```java
    import java.util.concurrent.atomic.AtomicStampedReference;
    
    public class AtomicStampedReferenceDemo {
        public static void main(String[] args) {
            // 实例化、取当前值和 stamp 值
            final Integer initialRef = 0, initialStamp = 0;
            final AtomicStampedReference<Integer> asr = new AtomicStampedReference<>(initialRef, initialStamp);
            System.out.println("currentValue=" + asr.getReference() + ", currentStamp=" + asr.getStamp());
    
            // compare and set
            final Integer newReference = 666, newStamp = 999;
            final boolean casResult = asr.compareAndSet(initialRef, newReference, initialStamp, newStamp);
            System.out.println("currentValue=" + asr.getReference()
                    + ", currentStamp=" + asr.getStamp()
                    + ", casResult=" + casResult);
    
            // 获取当前的值和当前的 stamp 值
            int[] arr = new int[1];
            final Integer currentValue = asr.get(arr);
            final int currentStamp = arr[0];
            System.out.println("currentValue=" + currentValue + ", currentStamp=" + currentStamp);
    
            // 单独设置 stamp 值
            final boolean attemptStampResult = asr.attemptStamp(newReference, 88);
            System.out.println("currentValue=" + asr.getReference()
                    + ", currentStamp=" + asr.getStamp()
                    + ", attemptStampResult=" + attemptStampResult);
    
            // 重新设置当前值和 stamp 值
            asr.set(initialRef, initialStamp);
            System.out.println("currentValue=" + asr.getReference() + ", currentStamp=" + asr.getStamp());
    
            // [不推荐使用，除非搞清楚注释的意思了] weak compare and set
            // 困惑！weakCompareAndSet 这个方法最终还是调用 compareAndSet 方法。[版本: jdk-8u191]
            // 但是注释上写着 "May fail spuriously and does not provide ordering guarantees,
            // so is only rarely an appropriate alternative to compareAndSet."
            // todo 感觉有可能是 jvm 通过方法名在 native 方法里面做了转发
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

- **`AtomicMarkableReference`** **类使用示例** :

    ```java
    import java.util.concurrent.atomic.AtomicMarkableReference;
    
    public class AtomicMarkableReferenceDemo {
        public static void main(String[] args) {
            // 实例化、取当前值和 mark 值
            final Boolean initialRef = null, initialMark = false;
            final AtomicMarkableReference<Boolean> amr = new AtomicMarkableReference<>(initialRef, initialMark);
            System.out.println("currentValue=" + amr.getReference() + ", currentMark=" + amr.isMarked());
    
            // compare and set
            final Boolean newReference1 = true, newMark1 = true;
            final boolean casResult = amr.compareAndSet(initialRef, newReference1, initialMark, newMark1);
            System.out.println("currentValue=" + amr.getReference()
                    + ", currentMark=" + amr.isMarked()
                    + ", casResult=" + casResult);
    
            // 获取当前的值和当前的 mark 值
            boolean[] arr = new boolean[1];
            final Boolean currentValue = amr.get(arr);
            final boolean currentMark = arr[0];
            System.out.println("currentValue=" + currentValue + ", currentMark=" + currentMark);
    
            // 单独设置 mark 值
            final boolean attemptMarkResult = amr.attemptMark(newReference1, false);
            System.out.println("currentValue=" + amr.getReference()
                    + ", currentMark=" + amr.isMarked()
                    + ", attemptMarkResult=" + attemptMarkResult);
    
            // 重新设置当前值和 mark 值
            amr.set(initialRef, initialMark);
            System.out.println("currentValue=" + amr.getReference() + ", currentMark=" + amr.isMarked());
    
            // [不推荐使用，除非搞清楚注释的意思了] weak compare and set
            // 困惑！weakCompareAndSet 这个方法最终还是调用 compareAndSet 方法。[版本: jdk-8u191]
            // 但是注释上写着 "May fail spuriously and does not provide ordering guarantees,
            // so is only rarely an appropriate alternative to compareAndSet."
            // todo 感觉有可能是 jvm 通过方法名在 native 方法里面做了转发
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


## 对象的属性修改类型原子类


如果需要原子更新某个类里的某个字段时，需要用到对象的属性修改类型原子类。

- `AtomicIntegerFieldUpdater`:原子更新整形字段的更新器
- `AtomicLongFieldUpdater`：原子更新长整形字段的更新器
- `AtomicReferenceFieldUpdater`：原子更新引用类型里的字段的更新器

要想原子地更新对象的属性需要两步。第一步，因为对象的属性修改类型原子类都是抽象类，所以每次使用都必须使用静态方法 newUpdater()创建一个更新器，并且需要设置想要更新的类和属性。第二步，更新的对象属性必须使用 public volatile 修饰符。


上面三个类提供的方法几乎相同，所以我们这里以 `AtomicIntegerFieldUpdater`为例子来介绍。


**`AtomicIntegerFieldUpdater`** **类使用示例** :


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


# 常见并发容器


JDK 提供的这些容器大部分在 `java.util.concurrent` 包中。

- **`ConcurrentHashMap`** : 线程安全的 `HashMap`
- **`CopyOnWriteArrayList`** : 线程安全的 `List`，在读多写少的场合性能非常好，远远好于 `Vector`。
- **`ConcurrentLinkedQueue`** : 高效的并发队列，使用链表实现。可以看做一个线程安全的 `LinkedList`，这是一个非阻塞队列。
- **`BlockingQueue`** : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。
- **`ConcurrentSkipListMap`** : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。

## ConcurrentHashMap


我们知道 `HashMap` 不是线程安全的，在并发场景下如果要保证一种可行的方式是使用 `Collections.synchronizedMap()` 方法来包装我们的 `HashMap`。但这是通过使用一个全局的锁来同步不同线程间的并发访问，因此会带来不可忽视的性能问题。


所以就有了 `HashMap` 的线程安全版本—— `ConcurrentHashMap` 的诞生。


在 JDK1.7 的时候，`ConcurrentHashMap` 对整个桶数组进行了分割分段(`Segment`，分段锁)，每一把锁只锁容器其中一部分数据（下面有示意图），多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。


到了 JDK1.8 的时候，`ConcurrentHashMap` 已经摒弃了 `Segment` 的概念，而是直接用 `Node` 数组+链表+红黑树的数据结构来实现，并发控制使用 `synchronized` 和 CAS 来操作。（JDK1.6 以后 `synchronized` 锁做了很多优化） 整个看起来就像是优化过且线程安全的 `HashMap`，虽然在 JDK1.8 中还能看到 `Segment` 的数据结构，但是已经简化了属性，只是为了兼容旧版本。


## CopyOnWriteArrayList


在 JDK1.5 之前，如果想要使用并发安全的 `List` 只能选择 `Vector`。而 `Vector` 是一种老旧的集合，已经被淘汰。`Vector` 对于增删改查等方法基本都加了 `synchronized`，这种方式虽然能够保证同步，但这相当于对整个 `Vector` 加上了一把大锁，使得每个方法执行的时候都要去获得锁，导致性能非常低下。


JDK1.5 引入了 `Java.util.concurrent`（JUC）包，其中提供了很多线程安全且并发性能良好的容器，其中唯一的线程安全 `List` 实现就是 `CopyOnWriteArrayList` 。


对于大部分业务场景来说，读取操作往往是远大于写入操作的。由于读取操作不会对原有数据进行修改，因此，对于每次读取都进行加锁其实是一种资源浪费。相比之下，我们应该允许多个线程同时访问 `List` 的内部数据，毕竟对于读取操作来说是安全的。


这种思路与 `ReentrantReadWriteLock` 读写锁的设计思想非常类似，即读读不互斥、读写互斥、写写互斥（只有读读不互斥）。`CopyOnWriteArrayList` 更进一步地实现了这一思想。为了将读操作性能发挥到极致，`CopyOnWriteArrayList` 中的读取操作是完全无需加锁的。更加厉害的是，写入操作也不会阻塞读取操作，只有写写才会互斥。这样一来，读操作的性能就可以大幅度提升。


`CopyOnWriteArrayList` 线程安全的核心在于其采用了 **写时复制（Copy-On-Write）** 的策略，从 `CopyOnWriteArrayList` 的名字就能看出了。


当需要修改（ `add`，`set`、`remove` 等操作） `CopyOnWriteArrayList` 的内容时，不会直接修改原数组，而是会先创建底层数组的副本，对副本数组进行修改，修改完之后再将修改后的数组赋值回去，这样就可以保证写操作不会影响读操作了。


## ConcurrentLinkedQueue


Java 提供的线程安全的 `Queue` 可以分为**阻塞队列**和**非阻塞队列**，其中阻塞队列的典型例子是 `BlockingQueue`，非阻塞队列的典型例子是 `ConcurrentLinkedQueue`，在实际应用中要根据实际需要选用阻塞队列或者非阻塞队列。 **阻塞队列可以通过加锁来实现，非阻塞队列可以通过 CAS 操作实现。**


从名字可以看出，`ConcurrentLinkedQueue`这个队列使用链表作为其数据结构．`ConcurrentLinkedQueue` 应该算是在高并发环境中性能最好的队列了。它之所有能有很好的性能，是因为其内部复杂的实现。


`ConcurrentLinkedQueue` 内部代码我们就不分析了，大家知道 `ConcurrentLinkedQueue` 主要使用 CAS 非阻塞算法来实现线程安全就好了。


`ConcurrentLinkedQueue` 适合在对性能要求相对较高，同时对队列的读写存在多个线程同时进行的场景，即如果对队列加锁的成本较高则适合使用无锁的 `ConcurrentLinkedQueue` 来替代。


## BlockingQueue


### BlockingQueue 简介


上面我们己经提到了 `ConcurrentLinkedQueue` 作为高性能的非阻塞队列。下面我们要讲到的是阻塞队列——`BlockingQueue`。阻塞队列（`BlockingQueue`）被广泛使用在“生产者-消费者”问题中，其原因是 `BlockingQueue` 提供了可阻塞的插入和移除的方法。当队列容器已满，生产者线程会被阻塞，直到队列未满；当队列容器为空时，消费者线程会被阻塞，直至队列非空时为止。


`BlockingQueue` 是一个接口，继承自 `Queue`，所以其实现类也可以作为 `Queue` 的实现来使用，而 `Queue` 又继承自 `Collection` 接口。下面是 `BlockingQueue` 的相关实现类：


下面主要介绍一下 3 个常见的 `BlockingQueue` 的实现类：`ArrayBlockingQueue`、`LinkedBlockingQueue`、`PriorityBlockingQueue` 。


### ArrayBlockingQueue


`ArrayBlockingQueue` 是 `BlockingQueue` 接口的有界队列实现类，底层采用数组来实现。


```java
public class ArrayBlockingQueue<E>
extends AbstractQueue<E>
implements BlockingQueue<E>, Serializable{}
```


`ArrayBlockingQueue` 一旦创建，容量不能改变。其并发控制采用可重入锁 `ReentrantLock` ，不管是插入操作还是读取操作，都需要获取到锁才能进行操作。当队列容量满时，尝试将元素放入队列将导致操作阻塞;尝试从一个空队列中取一个元素也会同样阻塞。


`ArrayBlockingQueue` 默认情况下不能保证线程访问队列的公平性，所谓公平性是指严格按照线程等待的绝对时间顺序，即最先等待的线程能够最先访问到 `ArrayBlockingQueue`。而非公平性则是指访问 `ArrayBlockingQueue` 的顺序不是遵守严格的时间顺序，有可能存在，当 `ArrayBlockingQueue` 可以被访问时，长时间阻塞的线程依然无法访问到 `ArrayBlockingQueue`。如果保证公平性，通常会降低吞吐量。如果需要获得公平性的 `ArrayBlockingQueue`，可采用如下代码：


```java
private static ArrayBlockingQueue<Integer> blockingQueue = new ArrayBlockingQueue<Integer>(10,true);
```


### LinkedBlockingQueue


`LinkedBlockingQueue` 底层基于**单向链表**实现的阻塞队列，可以当做无界队列也可以当做有界队列来使用，同样满足 FIFO 的特性，与 `ArrayBlockingQueue` 相比起来具有更高的吞吐量，为了防止 `LinkedBlockingQueue` 容量迅速增，损耗大量内存。通常在创建 `LinkedBlockingQueue` 对象时，会指定其大小，如果未指定，容量等于 `Integer.MAX_VALUE` 。


**相关构造方法:**


```java
/**
     *某种意义上的无界队列
     * Creates a {@code LinkedBlockingQueue} with a capacity of
     * {@link Integer#MAX_VALUE}.
     */
    public LinkedBlockingQueue() {
        this(Integer.MAX_VALUE);
    }

    /**
     *有界队列
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


`PriorityBlockingQueue` 是一个支持优先级的无界阻塞队列。默认情况下元素采用自然顺序进行排序，也可以通过自定义类实现 `compareTo()` 方法来指定元素排序规则，或者初始化时通过构造器参数 `Comparator` 来指定排序规则。


`PriorityBlockingQueue` 并发控制采用的是可重入锁 `ReentrantLock`，队列为无界队列（`ArrayBlockingQueue` 是有界队列，`LinkedBlockingQueue` 也可以通过在构造函数中传入 `capacity` 指定队列最大的容量，但是 `PriorityBlockingQueue` 只能指定初始的队列大小，后面插入元素的时候，**如果空间不够的话会自动扩容**）。


简单地说，它就是 `PriorityQueue` 的线程安全版本。不可以插入 null 值，同时，插入队列的对象必须是可比较大小的（comparable），否则报 `ClassCastException` 异常。它的插入操作 put 方法不会 block，因为它是无界队列（take 方法在队列为空的时候会阻塞）。


## ConcurrentSkipListMap


为了引出 `ConcurrentSkipListMap`，先带着大家简单理解一下跳表。


对于一个单链表，即使链表是有序的，如果我们想要在其中查找某个数据，也只能从头到尾遍历链表，这样效率自然就会很低，跳表就不一样了。跳表是一种可以用来快速查找的数据结构，有点类似于平衡树。它们都可以对元素进行快速的查找。但一个重要的区别是：对平衡树的插入和删除往往很可能导致平衡树进行一次全局的调整。而对跳表的插入和删除只需要对整个数据结构的局部进行操作即可。这样带来的好处是：在高并发的情况下，你会需要一个全局锁来保证整个平衡树的线程安全。而对于跳表，你只需要部分锁即可。这样，在高并发环境下，你就可以拥有更好的性能。而就查询的性能而言，跳表的时间复杂度也是 $O(logn)$ 所以在并发数据结构中，JDK 使用跳表来实现一个 Map。


跳表的本质是同时维护了多个链表，并且链表是分层的，最低层的链表维护了跳表内所有的元素，每上面一层链表都是下面一层的子集。


跳表内的所有链表的元素都是排序的。查找时，可以从顶级链表开始找。一旦发现被查找的元素大于当前链表中的取值，就会转入下一层链表继续找。这也就是说在查找过程中，搜索是跳跃式的。


从上面很容易看出，**跳表是一种利用空间换时间的算法。**


使用跳表实现 `Map` 和使用哈希算法实现 `Map` 的另外一个不同之处是：哈希并不会保存元素的顺序，而跳表内所有的元素都是排序的。因此在对跳表进行遍历时，你会得到一个有序的结果。所以，如果你的应用需要有序性，那么跳表就是你不二的选择。JDK 中实现这一数据结构的类是 `ConcurrentSkipListMap`。
