---
title: 'Java JMM内存模型'
published: 2024-02-01
updated: 2024-02-01
description: 'Java内存模型（JMM）定义了共享变量在多线程环境中的可见性，涉及CPU缓存模型和指令重排序。JMM通过规范线程与主内存的关系，确保共享变量的可见性和一致性，解决了多线程编程中的问题。关键概念包括happens-before原则、原子性、可见性和有序性，确保在并发环境中程序的正确执行。'
permalink: 'java-jmm-memory.en'
image: 'https://r2.dreaife.tokyo/notion/covers/1457cd9aa9e84f8e94f72b9ceaa720be/GE1MmaUaoAAIsgg.jpg'
tags: ['java', 'doc', 'meeting', 'multi-prog']
category: 'cs-base'
draft: false
lang: 'en'
---

JMM (Java Memory Model) primarily defines the visibility of a shared variable after another thread performs a write operation on that shared variable.

To understand JMM (Java Memory Model) thoroughly, we first need to start with CPU cache models and instruction reordering!

# Starting from CPU cache models

**Why do we need a CPU cache?** It’s analogous to the caches we use in backend systems (like Redis) to solve the speed mismatch between program processing and accessing a conventional relational database. **The CPU cache is to solve the mismatch between CPU processing speed and memory processing speed.**

We can even think of memory as a cache for external storage; during program execution we copy data from external storage into memory, and since memory is much faster than external storage, this speeds up processing.

Summary: **The CPU cache caches memory data to solve the mismatch between CPU processing speed and memory; the memory cache caches disk data to solve the problem of slow disk access speeds.**

![20240202001117.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240202001117.png)

Modern CPUs typically have three levels of cache, called L1, L2, L3 cache. Some CPUs may also have an L4 cache.

**How the CPU Cache works:** first copy data into the CPU Cache; when the CPU needs it, it can read directly from the CPU Cache; after the computation, write the computed data back to Main Memory. However, this can lead to the problem of memory cache coherence! For example, if two threads both perform an i++ operation, and both read i=1 from the CPU Cache, after both increment and write back to Main Memory, i becomes 2, whereas the correct result should be i=3.

**To solve memory cache coherence problems, CPUs use cache coherence protocols (for example** [MESI protocol]**）or other means.** This coherence protocol refers to the principles and norms to be followed when CPU caches interact with the main memory. Different CPUs may use different coherence protocols.

Our programs run on top of an operating system, which hides the low-level hardware details and virtualizes resources. Therefore, the OS also needs to address memory cache coherence issues.

The OS defines a set of rules via a Memory Model to address this problem. Whether on Windows or Linux, they have their own memory models.

# Instruction reordering

After discussing the CPU cache model, let’s look at another important concept: **instruction reordering**.

To improve execution speed/performance, computers may reorder instructions when executing code.

**What is instruction reordering?** Simply put, the system does not necessarily execute code exactly in the order you wrote.

There are two common situations of instruction reordering:

- **Compiler optimization reordering**: the compiler (including the JVM, JIT compilers, etc.) rearranges the order of statements without changing the semantics of a single-threaded program.
- **Instruction parallelism reordering**: modern processors use instruction-level parallelism (Instruction-Level Parallelism, ILP) to overlap-execute multiple instructions. If there are no data dependencies, the processor can change the execution order of the machine instructions corresponding to statements.

Additionally, the memory system may also “reorder,” but not in the strict sense of real reordering. In the JMM this is manifested as possible inconsistencies between the main memory and local memory, which can lead to issues when programs run across multiple threads.

Java source code goes through a process of **compiler optimization reordering → instruction-level parallelism reordering → memory system reordering**, eventually becoming the executable instruction sequence for the operating system.

**Instruction reordering can preserve serial semantics, but there is no obligation to preserve semantics across multiple threads**, so in multithreading, instruction reordering may cause some issues.

Compilers and processors treat instruction reordering differently. For compilers, reordering is prevented by forbidding certain types of compiler reordering. For processors, by inserting memory barriers (Memory Barrier, or sometimes called Memory Fence) to prevent certain types of processor reordering. Instruction-level parallelism reordering and memory system reordering both fall under processor-level instruction reordering.

> Memory barrier (Memory Barrier, or sometimes called Memory Fence) is a CPU instruction used to forbid processor instructions from reordering (like a barrier), thus guaranteeing the ordered execution of instructions. In addition, to achieve the barrier effect, it will also cause the processor to write the main memory values into the cache before reads/writes, clear invalid queues, thereby guaranteeing the visibility of variables.

# JMM (Java Memory Model)

## What is the JMM? Why do we need the JMM?

Java was one of the first programming languages to attempt to provide a memory model. Because early memory models had flaws (for example, they could significantly weaken compiler optimizations), starting with Java 5, Java began using a new memory model [JSR-133: Java Memory Model and Thread Specification](http://www.cs.umd.edu/~pugh/java/memoryModel/CommunityReview.pdf).

Generally, programming languages can reuse the OS memory model directly. However, different operating systems have different memory models. If you reuse the OS memory model directly, the same code might not run on a different OS. Java is cross-platform and thus needs its own memory model to shield system differences.

This is just one reason JMM exists. In fact, for Java, you can think of JMM as a set of specifications defined for concurrent programming. Besides abstracting the relationship between threads and main memory, it also prescribes which concurrency-related principles and rules must be followed in the transformation from Java source code to CPU-executable instructions, with the main goal of simplifying multithreaded programming and enhancing portability.

**Why follow these concurrency-related principles and specifications?** Because in concurrent programming, designs like CPU multi-level caches and instruction reordering can cause execution issues. For example, the instruction reordering mentioned above may cause problems in multithreaded programs; to address this, the JMM abstracts the happens-before principle (which will be described in detail later).

In short, the JMM defines a set of rules to address these problems, allowing developers to use these rules to develop multithreaded programs more easily. For Java developers, you don’t need to understand the underlying principles; just use some concurrency-related keywords and classes (such as volatile, synchronized, various Locks) to develop thread-safe programs.

## How does the JMM abstract the relationship between threads and main memory?

**The Java Memory Model (JMM)** abstracts the relationship between threads and main memory, for example, shared variables between threads must reside in main memory.

Before JDK 1.2, the Java memory model implementation always read variables from the main memory (shared memory), without special attention. In the current Java memory model, a thread can keep a variable in local memory (for example, in machine registers) rather than reading/writing directly in main memory. This can cause one thread to modify a variable in main memory while another thread continues to use the copy of the variable in its registers, leading to data inconsistency.

This is very similar to the CPU cache model we discussed above.

**What is main memory? What is local memory?**

- **Main memory**: All instances created by threads are stored in main memory, whether the instance is a member variable, a local variable, class information, constants, or static variables. To achieve better run-time speed, the VM and hardware may keep working memory in registers and caches.
- **Local memory**: Each thread has a private local memory that stores copies of shared variables for that thread’s reads/writes. Each thread can only operate on its own local memory and cannot directly access other threads’ local memory. If threads need to communicate, they must go through main memory. Local memory is an abstract concept in the JMM; it does not physically exist. It encompasses caches, write buffers, registers, and other hardware and compiler optimizations.

The abstract diagram of the Java Memory Model is as follows:

![20240202001140.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240202001140.png)

From the diagram above, if thread 1 and thread 2 want to communicate, they must go through the following two steps:

1. Thread 1 synchronizes the value of the modified shared variable copy from local memory back to main memory.
2. Thread 2 reads the corresponding shared variable value from main memory.

That is to say, the JMM provides visibility guarantees for shared variables.

However, in multithreading, operating on a shared variable in main memory can potentially cause thread-safety issues. For example:

1. Thread 1 and Thread 2 operate on the same shared variable, one performs a modification, the other reads.
2. Thread 2 might read the value before Thread 1’s modification or after; it’s not certain, because both threads first copy the shared variable from main memory into their working memories.

Regarding the specific interaction protocol between main memory and working memory, i.e., how a variable is copied from main memory to working memory and how it is synchronized back to main memory, the Java Memory Model defines eight synchronization operations (understand them; no need to memorize):

- **lock**: applied to a variable in main memory, marking it as a thread-exclusive variable.
- **unlock**: applied to a variable in main memory, releasing the lock; a variable released from the lock can be locked by other threads.
- **read**: applied to a variable in main memory; it transfers the value of a variable from main memory to the thread’s working memory for subsequent load usage.
- **load**: takes the value obtained by read from main memory and places it into a copy of the variable in working memory.
- **use**: passes the value of a variable in working memory to the execution engine; each time the VM encounters an instruction that uses the variable, this operation is used.
- **assign**: applied to a working memory variable; it assigns to the working memory variable a value received from the execution engine; whenever the VM encounters a bytecode instruction that assigns to a variable, this operation is executed.
- **store**: applied to a working memory variable; it transfers the value of a working memory variable to main memory for subsequent write usage.
- **write**: applied to a variable in main memory; it places the value obtained by the store operation from working memory into the main memory variable.

In addition to these eight synchronization operations, the following synchronization rules are specified to ensure the correct execution of these synchronization operations (understand them; no need to memorize):

- A thread is not allowed to synchronize data from its working memory back to main memory without any reason (without any assign operation).
- A new variable can only be “born” in main memory; it is not allowed to directly use an uninitialized (load or assign) variable in working memory. In other words, before performing use and store on a variable, you must have performed assign and load.
- A variable can be locked by only one thread at the same moment, but a lock operation can be repeated by the same thread multiple times; after performing lock multiple times, only the same number of unlock operations will unlock the variable.
- If you perform a lock on a variable, the value of this variable in working memory will be cleared; before the execution engine uses this variable, you need to re-execute load or assign to initialize the variable’s value.
- If a variable has not been locked beforehand, unlock operations are not allowed on it, nor unlock a variable that is locked by another thread.

## What is the difference between Java memory regions and the JMM?

**Java memory regions and the memory model are two completely different things**:

- **JVM memory structure** relates to the runtime areas of the Java Virtual Machine and defines how the JVM partitions and stores program data at runtime; for example, the heap is primarily used to hold object instances.
- **Java Memory Model** relates to Java’s concurrency programming; it abstracts the relationship between threads and main memory and defines the rules and principles to follow when converting from Java source code to CPU-executable instructions, with the aim of simplifying multithreaded programming and improving portability.

## What is happens-before?

The concept of happens-before originated in Leslie Lamport’s 1978 paper [“Time, Clocks and the Ordering of Events in a Distributed System”](https://lamport.azurewebsites.net/pubs/time-clocks.pdf). In this paper, Lamport introduced the concept of logical clocks, which became the first logical clock algorithm. In distributed environments, a set of rules defines the evolution of logical clocks, allowing the ordering of events in a distributed system to be determined by the logical clocks. **Logical clocks do not measure time per se; they only distinguish the order of events; in essence, they define a happens-before relationship.**

The background of the happens-before concept’s birth mentioned above is not the focus; a quick understanding will do.

JSR 133 introduces the concept of happens-before to describe memory visibility between two operations.

**Why is the happens-before principle needed?** The happens-before principle was born to balance programmers with compilers and processors. Programmers seek an easily understandable and strongly memory-consistent model by following rules. Compilers and processors seek weaker constraints to optimize performance as much as possible. The design idea of the happens-before principle is really simple:

- To minimize constraints on compilers and processors as much as possible, as long as the program’s execution result does not change (single-threaded programs and correctly executed multithreaded programs), compilers and processors can reorder as they please.
- For reorders that would change the program’s execution result, the JMM requires compilers and processors to prohibit such reordering.

The following diagram is from the book The Art of Java Concurrency Programming, illustrating the JMM design philosophy.

![20240202001151.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240202001151.png)

After understanding the design idea of the happens-before principle, let’s look at JSR-133’s definition of happens-before:

- If one operation happens-before another operation, then the result of the first operation will be visible to the second operation, and the first operation’s execution must occur before the second operation.
- If there is a happens-before relationship between two operations, it does not mean that the Java platform’s specific implementation must execute them in the exact order specified by happens-before. If the result after reordering is the same as the result when executed according to the happens-before relationship, the JMM also allows such reordering.

We look at the following code:

```java
int userNum = getUserNum();   // 1
int teacherNum = getTeacherNum();   // 2
int totalNum = userNum + teacherNum;  // 3
```

- 1 happens-before 2
- 2 happens-before 3
- 1 happens-before 3

Although 1 happens-before 2, reordering 1 and 2 does not affect the execution result of the code, so the JMM allows the compiler and processor to reorder them. But 1 and 2 must occur before 3, i.e., 1,2 happens-before 3.

**The meaning of the happens-before principle is not just about one operation occurring before another; more accurately, it expresses that the result of the preceding operation is visible to the following operation, regardless of whether they are in the same thread.**

For example: Operation 1 happens-before Operation 2; even if Operation 1 and Operation 2 are not in the same thread, the JMM will guarantee that the result of Operation 1 is visible to Operation 2.

## What are the common happens-before rules? Share your understanding.

There are eight rules for happens-before; not too many, but focus on the five listed below. Memorizing all of them is unlikely and not very useful; you can look them up as needed.

1. **Program order rule**: Within a thread, in code order, an operation written earlier happens-before the operation written later;
2. **Unlock rule**: unlock happens-before lock;
3. **Volatile variable rule**: a write to a volatile variable happens-before a subsequent read of that volatile variable. In short, the effect of a write to a volatile variable is visible to all subsequent operations.
4. **Transitivity rule**: If A happens-before B, and B happens-before C, then A happens-before C;
5. **Thread start rule**: The start() method of a Thread object happens-before every action in that thread.

If two operations do not satisfy any of the above happens-before rules, there is no ordering guarantee, and the JVM may reorder these two operations.

## What is the relationship between happens-before and the JMM?

The relationship between happens-before and the JMM can be very well explained with a diagram from The Art of Java Concurrency Programming.

![20240202001214.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240202001214.png)

# Three important properties of concurrent programming

## Atomicity

An operation or a group of operations must either all complete and not be interrupted by any factor, or none of them execute.

In Java, atomicity can be achieved with synchronized, various Locks, and atomic classes.

`synchronized` and various Locks guarantee that at any moment only one thread can access the code block, thus providing atomicity. Atomic classes use CAS (compare-and-swap) operations (and may also use volatile or final keywords) to guarantee atomic operations.

## Visibility

When one thread modifies a shared variable, other threads can immediately see the updated value.

In Java, visibility can be achieved with synchronized, volatile, and various Locks.

If we declare a variable as volatile, it tells the JVM that this variable is shared and that every use should read from main memory.

## Ordering

Because of instruction reordering, the execution order of code may not be the same as the order in which it was written.

We mentioned when discussing reordering:

> Instruction reordering can preserve serial semantics, but there’s no obligation to preserve semantics across multithreading, so in multithreaded contexts, instruction reordering may cause problems.

In Java, the volatile keyword can prevent instruction reordering optimizations.
