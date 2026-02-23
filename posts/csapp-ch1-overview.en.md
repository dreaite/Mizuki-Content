---
title: 'csapp 第一章 计算机系统漫游'
published: 2023-01-15
updated: 2023-01-15
description: '计算机系统由硬件和系统软件组成，通过程序的生命周期（创建、运行、输出、终止）来运行应用。信息由位和上下文构成，程序通过编译系统转化为可执行文件。处理器读取指令并执行简单操作，使用高速缓存提高性能。操作系统管理硬件，通过进程和虚拟内存提供资源的抽象，支持并发和并行执行。抽象是计算机科学的重要概念，虚拟机提供对整个计算机的抽象。'
permalink: 'csapp-ch1-overview'
image: 'https://r2.dreaife.tokyo/notion/covers/fbaef38b501a4cd8a8a2d1c58798cf70/2421860-20230116004313116-1139297538.png'
tags: ['caapp', 'os', 'c']
category: 'cs-base'
draft: false
lang: 'en'
---

A computer system consists of hardware and system software, which work together to run applications.

```c
#include<stdio.h>
int main(){
    printf("hello world! C");
    return 0;
}
```


Trace the life cycle of the program hello.c → creation, execution, output, termination.

# 1 Information = Bit + Context

hello.c is the **source program**, the beginning of the hello program, a text file written by the programmer—composed of bytes (8 bits per group).

Most use the **ASCII standard**. Programs are stored in files as a sequence of bytes, with the integer value of each byte corresponding to a character. Files consisting only of ASCII characters are called **text files**, while other files are called **binary files**.

The basic idea: all information in a system is represented by a string of bits. Data objects are distinguished by the context of the data. The machine representation of numbers is different from their actual values, and is a finite-precision approximation of truth values.

# 2 Programs translated by other programs into different formats

High-level C language — translation —> low-level machine language instructions — packaging —> executable target program

```shell
gcc -o hello hello.c
./hello
```


![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20165458.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20165458.png)


Compiler system

Compiler system: preprocessor, compiler, assembler, linker

- Preprocessing

    The preprocessor (cpp) modifies the original program according to # directives, inserting the contents of header files directly into the program text.


    hello.c—cpp—>hello.i

- Compilation

    The compiler (ccl) translates the previous step’s .i file into a .s file, containing an assembly language program.


    hello.i—ccl—>hello.s

- Assembling

    The assembler (as) translates the .s file into machine language instructions, and packages them into a relocatable object file, stored in the .o binary file.


    hello.s—as—>hello.o

- Linking

    The linker (ld) merges the current .o file with precompiled target files for library functions, producing an executable target file that can be run by the system.


    hello.o+printf.o—ld—>hello


# 3 How understanding the compilation system helps

1. Improve runtime performance
2. Understand linker errors
3. Avoid security vulnerabilities

# 4 How the processor fetches and interprets instructions

## 4.1 System hardware components

![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20171549.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20171549.png)

System hardware components

1. Buses

    A set of electronic channels that run through the system and carry information bytes. They transfer fixed-length groups of bytes called words. The number of bytes per word varies by system, as a basic system parameter, e.g., 4 bytes (32-bit), 8 bytes (64-bit).


    System buses, memory buses, I/O buses

2. I/O devices

    Responsible for the system’s contact with the outside world. Input devices such as keyboards and mice, output displays, long-term storage disks, and so on.


    I/O devices connect to the I/O bus through controllers or adapters.

    - Difference between controllers and adapters

        Packaging methods differ.


        Controller: the I/O device itself or the chipset on the system motherboard.


        Adapter: a card plugged into a motherboard slot.

3. Main memory

    A temporary storage device that stores programs and the data they operate on.


    Physically, it is composed of Dynamic Random-Access Memory (DRAM) chips; logically, it is a linear array of bytes with unique addresses starting at zero.

4. Processor

    Central Processing Unit (CPU), the engine that interprets instructions stored in main memory.


    The core is a storage unit the size of one word, called the program counter (PC), which points to the address of a machine-language instruction in memory. From power-on, the processor continually executes the instruction pointed to by the PC, then updates the PC to the next instruction.


    The processor operates according to an instruction execution model (defined by the instruction set architecture). In the model, instructions are executed in strict sequence. To execute one instruction, the CPU reads the instruction from memory via the PC, decodes the bits in the instruction, performs the **simple operations** the instruction specifies, and updates the PC to point to the next instruction.


    The simple operations are not many; they revolve around the **main memory**, the **register file** [a small storage device consisting of registers of fixed word length, each with a unique name], and the **Arithmetic/Logic Unit** (ALU) [computes new data and address values].

    - Simple operations
        - Load

            Copy a byte or a word from main memory into a register, overwriting the register’s previous contents

        - Store

            Copy a byte or a word from a register into a location in main memory, overwriting whatever was there.

        - Operate

            Copy the contents of two registers to the ALU, the ALU performs arithmetic on these two words, and stores the result in a register, overwriting the original contents of that register.

        - Jump

            Extract a word from the instruction itself and copy this word into the program counter (PC), overwriting the previous value in PC


    Formally, the processor is a simple implementation of the instruction set architecture, but in practice it uses very complex mechanisms to speed up execution. Therefore the instruction set architecture and the processor’s microarchitecture are distinguished: the **instruction set architecture** describes the effect of each machine code instruction; the **microarchitecture** describes how the processor is actually implemented.

## 4.2 Running a program

Process:

The shell runs commands and waits for input; when you type `./hello`, the shell reads characters into registers one by one, then stores them in memory; press Enter to execute the command; load the hello file, copying its code and data from disk into main memory.


![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20205941.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20205941.png)


Reading the hello command


Using Direct Memory Access (DMA), data can move directly from disk to main memory without going through the processor.


![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20210054.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20210054.png)


Disk loads the executable file into main memory


Then begin executing the machine-language instructions in hello’s main, copying the bytes of the string "hello world! C" from main memory to the registers, and then from the registers to the display device, finally shown on the screen.


![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20210406.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20210406.png)


The string is output to the screen


# 5 The Importance of Caches

As shown above, the system spends a lot of time moving information; these copies slow the program down to some extent.

To address speed differences between the processor and main memory, use a cache memory (cache) to store recently used information. L1 cache, L2 cache, etc., implemented with Static RAM (SRAM) hardware. By exploiting the locality principle: programs tend to access data and code within a working set.

Using caches can improve program performance by an order of magnitude.

![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20211426.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20211426.png)


Cache memory

# 6 Hierarchy of storage devices

A memory hierarchy inserts smaller, faster storage between the processor and a larger, slower device.

![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20211607.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20211607.png)


Memory hierarchy

# 7 Operating System Manages Hardware

Programs access hardware through services provided by the operating system. All hardware operations by applications must go through the OS.

![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20212054.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20212054.png)


Layered view of the computer system


The operating system can prevent hardware from being misused by untrusted applications and provides a simple, consistent mechanism to control a variety of different hardware devices. This is implemented using a few abstractions (**processes**, **virtual memory**, **files**).

Files are an abstraction of I/O devices, virtual memory is an abstraction of main memory and I/O devices, and processes are abstractions of the processor, main memory, and I/O devices.

![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20212428.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20212428.png)


Abstract representations provided by the operating system


## 7.1 Processes

During execution, the OS provides the illusion that the current program alone owns the processor, memory, and I/O devices. This illusion is implemented via processes.

A process is the OS’s abstraction of a running program. A system can have multiple processes running simultaneously, and each process appears to have exclusive use of the hardware.

Concurrency means that instructions from one process and another process are interleaved in execution. This is achieved by the processor switching between processes, a mechanism called context switching.

![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20213547.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20213547.png)


Context switching of a process


As shown, process switching is managed by the OS **kernel** (kernel), the portion of OS code resident in main memory, a **collection** of code and data structures used to manage all processes. When an application needs OS functionality, the kernel executes a special **system call** instruction, transferring control to the kernel. Then the kernel performs the requested operation and returns to the application.

## 7.2 Threads

A process can consist of multiple execution units (**threads**), each running in the process’s context and sharing the same code and global data. Threads are generally more efficient than processes because they share data more easily.

## 7.3 Virtual Memory

**Virtual memory** provides a process with the illusion of exclusive use of main memory. Each process sees a consistent memory space, called the **virtual address space**. In Linux, the top region of the address space is for the OS code and data, and the bottom stores the user process-defined code and data.

- Program code and data

    For all processes, the code starts at the same fixed address, followed by the data locations corresponding to C global variables.

- Heap

    The run-time heap, which can dynamically grow and shrink when malloc and free are called.

- Shared libraries

    The middle portion stores shared library code and data, such as the C standard library and math library.

- Stack

    The **user stack** sits at the top of the user virtual memory space, used by the compiler to implement function calls, and can also dynamically grow and shrink at runtime. When a function is called, the stack grows; when a function returns, the stack shrinks.

- Kernel virtual memory

    Located at the top of the address space. Applications are not allowed to read or write the contents of its region or directly call kernel code-defined functions; calls must go through the kernel.

The basic idea is to store a process’s virtual memory contents on disk and use main memory as a cache for the disk.

## 7.4 Files

**Files** are sequences of bytes, and every I/O device can be viewed as a file. Linux I/O is implemented by reading and writing files using a small set of system calls known as Unix I/O.

Files provide applications with a uniform view of various I/O devices.

# 8 Inter-system Network Communication

From the perspective of a single system, the network can be viewed as an I/O device. A system can read data sent from other machines and copy it into its own main memory.

![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20220432.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20220432.png)


Network device I/O


For the hello program, we can also run it via a remote server, communicate with it over the network, and obtain the results.

![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20220649.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20220649.png)


Run hello remotely over the network using Telnet

# 9 Key Topics

## 9.1 Amdahl's Law

When speeding up part of a system, the overall system speedup depends on the importance and the speedup of that part.

α is the fraction of the total time spent in that part, k is the speedup factor.

$$
T_{new}=(1-\alpha)T_{old}+(\alpha  T_{old})/k = T_{old}[(1-\alpha)+\alpha/k]
$$

Compute the speedup S = T_old / T_new

$$
S=\frac{1}{(1-\alpha)+\alpha/k}
$$

As k tends to infinity,

$$
S_{\infty}=\frac{1}{(1-\alpha)}
$$


## 9.2 Concurrency and Parallelism

Concurrency: a system with multiple active activities at once; parallelism: using concurrency to make the system run faster.

1. Thread-level concurrency

    Using processes, multiple programs can run concurrently. This concurrency is simulated by fast switching between processes on a single computer, enabling multiple users to interact with the system simultaneously and users to run multiple tasks at the same time.

    A **multi-core processor** integrates multiple CPUs on a single integrated circuit die.

    ![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20223232.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20223232.png)


    Multi-core processors


    **Hyper-threading**, or simultaneous multithreading, is a technique that allows a CPU to execute multiple control flows. Hyper-threading processors can decide which thread to execute on a per-cycle basis, enabling better use of the processor’s resources.


    Performance gains from multiple processors: 1. reduces the need to simulate concurrency for multiple tasks; 2. makes applications run faster (requires multi-threaded programming)

2. Instruction-level parallelism

    Refers to the ability of a processor to execute multiple instructions simultaneously. Processors increase instruction throughput through **pipelining**. Splitting instruction execution into different steps, organizing processor hardware into a series of stages, with each stage performing one step. Stages operate in parallel, processing different steps of different instructions.

    A superscalar processor is one that can execute more than one instruction per cycle.

3. Single Instruction, Multiple Data (SIMD) parallelism

    Through special hardware in the processor, a single instruction can produce multiple parallel operations, called SIMD parallelism. It is largely used to speed up processing of images, sound, and video data. You can write programs using special vector data types supported by the compiler.

## 9.3 The Importance of Abstraction

The use of abstraction is one of the most important concepts in computer science.

In the processor, the instruction set architecture provides an abstraction of the actual processor hardware.

![%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20224949.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20224949.png)


Abstractions of computer systems

Virtual machines are abstractions of an entire computer, including the operating system, processor, and programs.
