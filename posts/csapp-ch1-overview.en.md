---
title: 'CSAPP Chapter 1: A Tour of Computer Systems'
published: 2023-01-15
updated: 2023-01-15
description: 'CSAPP Chapter 1 notes tracing a program from bits and compilation through CPU execution, caches, OS abstractions, processes, and virtual memory.'
image: 'https://r2.dreaife.tokyo/notion/covers/fbaef38b501a4cd8a8a2d1c58798cf70/2421860-20230116004313116-1139297538.png'
tags: ['caapp', 'os', 'c', 'cs-base']
category: 'STUDY'
draft: false
lang: 'en'
---

A computer system consists of hardware and system software that work together to run applications.

```c
#include<stdio.h>
int main(){
    printf("hello world! C");
    return 0;
}

```

Tracing the lifecycle of the hello.c program—\>creation, execution, output, and termination.

# 1 Information = Bits + Context

hello.c is the **source program**, the starting point of the hello program. It is a text file written by a programmer and consists of bytes, each composed of eight bits.

Most systems use the **ASCII standard**. Programs are stored in files as sequences of bytes, with the integer value of each byte corresponding to a character. Files consisting exclusively of ASCII characters are called **text files**; all other files are called **binary files**.

The basic idea is that all information in a system is represented as a sequence of bits. Different data objects are distinguished by the context in which the data appears. Machine representations of numbers differ from their actual values and are finite approximations of the true values.

# 2 Programs Are Translated into Different Formats by Other Programs

High-level C language—translation—\>low-level machine-language instructions—packaging—\>executable object program

```shell
gcc -o hello hello.c
./hello

```

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20165458.png)

Compilation system

Compilation system: preprocessor, compiler, assembler, and linker

- Preprocessing

	The preprocessor (cpp) modifies the original program according to commands beginning with #, directly inserting the contents of header files into the program text.

	hello.c—cpp—\>hello.i

- Compilation

	The compiler (ccl) translates the .i file from the previous step into a .s file containing an assembly-language program.

	hello.i—ccl—\>hello.s

- Assembly

	The assembler (as) translates the .s file into machine-language instructions and packages them as a relocatable object program stored in a binary .o file.

	hello.s—as—\>hello.o

- Linking

	The linker (ld) combines the current .o file with precompiled object files for the library functions it invokes, producing an executable object file that the system can execute.

	hello.o+printf.o—ld—\>hello

# 3 Benefits of Understanding Compilation Systems

1. Optimizing program performance
2. Understanding linking errors
3. Avoiding security vulnerabilities

# 4 Processors Read and Interpret Instructions

## 4.1 Hardware Organization of a System

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20171549.png)

Hardware organization of a system

1. Buses

	A bus is a collection of electronic conduits running throughout the system that carry bytes of information between components. Buses transfer fixed-size blocks of bytes called words. The number of bytes in a word varies between systems and is a fundamental system parameter, such as four bytes (32 bits) or eight bytes (64 bits).

	System bus, memory bus, and I/O bus

2. I/O devices

	I/O devices connect the system to the outside world. Examples include keyboards and mice for input, displays for output, and disks for long-term storage.

	I/O devices connect to the I/O bus through controllers or adapters.

	- Difference between controllers and adapters

		They differ in how they are packaged.

		Controller: a chipset in the I/O device itself or on the system's motherboard.

		Adapter: a card plugged into a slot on the motherboard.

3. Main memory

	Main memory is a temporary storage device that holds both programs and the data they process.

	Physically, it consists of dynamic random-access memory (DRAM) chips. Logically, it is a linear array of bytes, where every byte has a unique address starting from zero.

4. Processor

	The central processing unit (CPU) is the engine that interprets instructions stored in main memory.

	At its core is a word-sized storage device called the program counter (PC), which points to the address of a machine-language instruction in main memory. From the moment the system is powered on, the processor repeatedly executes the instruction indicated by the PC, updates the PC, and then executes the next instruction.

	The processor operates according to an instruction execution model determined by its instruction set architecture. In this model, instructions are executed in strict sequence. Executing an instruction involves the CPU reading the instruction from the memory address indicated by the PC, interpreting the bits in the instruction, performing the **simple operation** specified by the instruction, and updating the PC to point to the next instruction.

	There are only a few such simple operations. They revolve around **main memory**, the **register file** \[a small storage device consisting of individually named, word-sized registers\], and the **arithmetic/logic unit** (ALU) \[which computes new data and address values\].

	- Simple operations
		- Load

			Copy a byte or word from main memory into a register, overwriting the register's previous contents.

		- Store

			Copy a byte or word from a register to a location in main memory, overwriting the previous contents of that location.

		- Operate

			Copy the contents of two registers into the ALU, which performs an arithmetic operation on the two words and stores the result in a register, overwriting its previous contents.

		- Jump

			Extract a word from the instruction itself and copy it into the program counter (PC), overwriting the PC's previous value.

	Conceptually, a processor is a simple implementation of its instruction set architecture, but in practice it uses highly complex mechanisms to accelerate program execution. It is therefore important to distinguish between a processor's instruction set architecture and its microarchitecture: the **instruction set architecture** describes the effect of each machine-code instruction, whereas the **microarchitecture** describes how the processor is actually implemented.

## 4.2 Running the Program

Process:

The shell program executes instructions while waiting for a command to be entered. After `./hello` is entered, the shell reads each character into a register and then stores it in memory. When Enter is pressed, the command is executed: the hello file is loaded, and its code and data are copied from disk into main memory.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20205941.png)

Reading the hello command

With direct memory access (**DMA**), data can be transferred directly from disk to main memory without passing through the processor.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20210054.png)

Loading the executable file from disk into main memory

The machine-language instructions in the hello program's main function then begin executing. The bytes in the “hello world! C” string are copied from main memory into a register and then from the register to the display device, where the string is ultimately displayed on the screen.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20210406.png)

Outputting the string to the screen

# 5 Caches Matter

As shown above, the system spends a great deal of time moving information, and this copying slows down program execution to some extent.

To address the difference in speed between the processor and main memory, **cache memory** is used to store information that is likely to be needed soon. L1 caches, L2 caches, and others are implemented using **static random-access memory** (SRAM) technology. Caches exploit the principle of **locality**: programs tend to access data and code in localized regions.

Using caches can improve program performance by an order of magnitude.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20211426.png)

Cache memory

# 6 The Storage Hierarchy

A memory hierarchy inserts smaller, faster storage devices between the processor and larger, slower devices.

The main idea is to use the storage at one level as a cache for the storage at the level below it.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20211607.png)

Memory hierarchy

# 7 The Operating System Manages the Hardware

Programs access hardware through services provided by the operating system. All operations that applications perform on hardware must go through the operating system.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20212054.png)

Layered view of a computer system

The operating system prevents hardware from being misused by uncontrolled applications and provides applications with simple, consistent mechanisms for controlling complex and diverse hardware devices. It accomplishes this through several abstractions: **processes**, **virtual memory**, and **files**.

Files are abstractions of I/O devices, virtual memory is an abstraction of main memory and I/O devices, and processes are abstractions of the processor, main memory, and I/O devices.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20212428.png)

Abstractions provided by the operating system

## 7.1 Processes

When a program runs, the operating system creates the illusion that the program has exclusive use of the processor, main memory, and I/O devices. This illusion is implemented through processes.

A **process** is the operating system's abstraction of a running program. Multiple processes can run concurrently on a system, with each process appearing to have exclusive use of the hardware.

**Concurrent** execution means that the instructions of one process are interleaved with those of another. It is achieved by switching the processor between processes through a mechanism called **context switching**.

A **context** consists of all the state information tracked by the operating system that a process needs to run, including the PC, the current values of registers, and the contents of main memory. Because a uniprocessor system can execute the code of only one process at a time, running another process requires a **context switch**, which saves the context of the current process and restores the context of the new process.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20213547.png)

Process context switching

As shown in the figure, process switching is managed by the operating system **kernel**. The kernel is the portion of operating system code that always resides in main memory and is the **collection** of code and data structures used by the operating system to manage all processes. When an application requires an operating system function, it executes a special **system call** instruction that transfers control to the kernel. The kernel then performs the requested operation and returns control to the application.

## 7.2 Threads

A process can consist of multiple execution units called **threads**. Each thread runs within the context of the process and shares the same code and global data. Because threads can share data more easily than separate processes, they are generally more efficient than processes.

## 7.3 Virtual Memory

**Virtual memory** gives each process the illusion that it has exclusive use of main memory. Every process sees the same memory layout, called the **virtual address space**. In Linux, the uppermost region of the address space is reserved for operating system code and data, while the lower region stores the code and data defined by user processes.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20214623.png)

Virtual address space

- Program code and data

	For every process, the code begins at the same fixed address, followed by data locations corresponding to global C variables.

- Heap

	The runtime **heap** can dynamically expand and contract while the program runs when functions such as `malloc` and `free` are called.

- Shared libraries

	The middle region of the address space stores the code and data for shared libraries such as the C standard library and mathematics library.

- Stack

	The **user stack** is located at the top of the user virtual address space and is used by the compiler to implement function calls. It can also dynamically expand and contract at runtime. The stack grows when a function is called and contracts when a function returns.

- Kernel virtual memory

	Kernel virtual memory is located at the top of the address space. Applications are not permitted to read or write the contents of this region or directly call functions defined in kernel code; they must access them through the kernel.

The basic idea is to store the contents of a process's virtual memory on disk and use main memory as a cache for the disk.

## 7.4 Files

A **file** is a sequence of bytes, and every I/O device can be viewed as a file. On a Linux system, input and output are implemented by reading and writing files through a small set of system calls known as Unix I/O.

Files provide applications with a uniform view of various I/O devices.

# 8 Network Communication Between Systems

From the perspective of an individual system, a network can be viewed as an I/O device. A system can read data sent from another machine and copy it into its own main memory.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20220432.png)

Network device I/O

The hello program can also be run on a remote server. We can communicate with that server over a network and receive the result it returns.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20220649.png)

Running hello remotely over a network using telnet

# 9 Important Themes

## 9.1 Amdahl's Law

When part of a system is accelerated, the effect on the overall system depends on both the importance of that part and the degree to which it is accelerated.

\$\\alpha\$ is the proportion of the total execution time spent on that part, and \$k\$ is its performance improvement factor.

\$\$<br>T_\{new\}=(1-\\alpha)T_\{old\}+(\\alpha  T_\{old\})/k = T_\{old\}\[(1-\\alpha)+\\alpha/k\]<br>\$\$

The speedup is \$S=T_\{old\}/T_\{new\}\$.

\$\$<br>S=\\frac\{1\}\{(1-\\alpha)+\\alpha/k\}<br>\$\$

As k approaches infinity,

\$\$<br>S_\{\\infty\}=\\frac\{1\}\{(1-\\alpha)\}<br>\$\$

## 9.2 Concurrency and Parallelism

Concurrency refers to a system with multiple simultaneous activities, while parallelism uses concurrency to make a system run faster.

1. Thread-level concurrency

	Processes allow multiple programs to execute at the same time, resulting in concurrency. This form of concurrency is simulated by rapidly switching a computer between the processes it is executing. It allows multiple users to interact with the system simultaneously and lets each user run multiple tasks at once.

	A **multicore processor** integrates multiple CPUs onto a single integrated circuit chip.

	![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20223232.png)

	Multicore processor

	**Hyperthreading**, also known as simultaneous multithreading, is a technique that allows one CPU to execute multiple flows of control. A hyperthreaded processor can decide which thread to execute on a cycle-by-cycle basis, allowing the CPU to make better use of its processing resources.

	Multiprocessors improve system performance in two ways: 1. they reduce the need to simulate concurrency among multiple tasks; 2. they allow applications to run faster, provided that the programs are written to use multiple threads.

2. Instruction-level parallelism

	This means that the processor can execute multiple instructions simultaneously. A processor increases its instruction execution rate through **pipelining**. Instruction execution is divided into separate steps, and the processor hardware is organized as a sequence of stages, with each stage performing one step. The stages operate in parallel, processing different steps of different instructions.

	A superscalar processor is a processor with an execution rate faster than one instruction per cycle.

3. Single-instruction, multiple-data parallelism

	Special processor hardware allows a single instruction to produce multiple operations that can be executed in parallel. This is called single-instruction, multiple-data, or **SIMD parallelism**. It is primarily used to improve the execution speed of applications that process images, audio, and video data. Programs can be written using special vector data types supported by the compiler.

## 9.3 The Importance of Abstraction

Abstraction is one of the most important concepts in computer science.

In a processor, the instruction set architecture provides an abstraction of the actual processor hardware.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-01-15%20224949.png)

Abstractions in a computer system

A virtual machine is an abstraction of an entire computer, including its operating system, processor, and programs.
