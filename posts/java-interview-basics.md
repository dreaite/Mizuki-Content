---
title: 'java面试基础'
published: 2024-01-19
updated: 2024-01-19
description: 'Java语言的特点包括简单易学、面向对象、平台无关性、多线程支持、可靠性和安全性。Java SE是基础版，适合桌面应用，Java EE是企业版，适合复杂的企业级应用。JVM、JDK和JRE的区别在于JVM运行字节码，JDK是开发工具包，JRE是运行环境。Java使用字节码提高效率，支持编译与解释并存。异常处理分为Checked和Unchecked，使用try-catch-finally结构。泛型增强代码可读性，反射提供运行时分析能力。序列化用于对象持久化，IO流分为字节流和字符流，设计模式如装饰器和适配器在IO中应用广泛。'
permalink: 'java-interview-basics'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/f6681c35-e424-4457-a693-65ec8eaa9884/GEXWTXvbgAAOpzq.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGCMQXK%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T135442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECdV98jU4Z6aCq23IekBUhUXPG6LiVxQV5G%2BOXLgAcPAiEAxsRjx5P9y0MJ61o9GcT%2BMH%2BzflVmze1DFnG1Jv9KGWgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgrbMxntTsXBrrA0CrcA%2FTOBoNqWqsnz5xS5JGfgkmcrWQMp%2Fr8ljWRzo8iqRbwO3uQAXvzOu1xJ73aeLYIsLFER9QSdfsTO5A6lHOqYHtxFukOH0BlwiLBHHcyXalFZReKsJJk86tp0rP2gzLjFfPaUPvWrL1Z116brt0OdZqGSVJHq%2B7tw44%2Bfueqp7NviPiTfh2BWUrKmBpSqrjvZvmLRSSircwPvkggmIaK%2Bj8IihafkA51XRYR6oGpLUepz%2FmsLguPUyQbMLR9MvVKI%2FmcUc0wcYuUna7jcyTFkDLDWzt6Xa0QzTX9jFesRCjwcPy6s3JfHuN6IJMAw3KZ%2BzG%2B5OJF0Kv2o4kPp5S843M64hCQ9KCIOGuTZHiH5KovlP1Ye91sA0rjq7OP5EtWvX3yynBDmYWqjhGO47upYOsioPPYmLTQso3sz0DxzVx972aZFLBstGOsL8i1%2BMHgueKh1MRgQDEWyHpIcayh7h6RNjVE9LZwTMVMvKls4j1WzvBrNQYhahD6%2BUtxBNylWVY%2BCSbgucUXatn2DMXS3vIRuRvhUhfeeXOtCeOjyysEQh28kvIuAOcS9ctq7gthmg0m4D1lgPNHuNrZZBsj5Nnz6EEdi18kpPD46%2ByjGIdZzKxM%2Bj9r4mosXVlFMOHj68wGOqUBk8%2BXEVj9%2FD69%2FjN%2FUc5h%2BDOsNLt2mBONzOSU2QFSQaCxBAnpt%2BzdEaL1QgP44AE3Kbw%2Br5ugpZo%2FYbRvLjRQcMKSSeoSWLaANvfiOjtTaUIwk4Ui7pzjDGcYKlzRyeE23Uh3PUNgdhi6eFjUyfF%2FHS7QuFS93JtvebAld%2Bn8C%2BMNWH71uW9oU4i1mBnQsmSlJ%2FUzjmEKkoxkaN%2F1tVJlR3VxW3jn&X-Amz-Signature=888efe69ecd30c1c7dccf03dabf3f34df30e4e9bb5659dfa7b51e0041b02b77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['java', 'doc', 'meeting']
category: 'cs-base'
draft: false
---

# Java 语言有哪些特点

1. 简单易学
2. 面向对象（封装，继承，多态）
3. 平台无关性（ Java 虚拟机实现平台无关性）
4. 支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）
5. 可靠性（具备异常处理和自动内存管理机制）
6. 安全性（Java 语言本身的设计就提供了多重安全防护机制如访问权限修饰符、限制程序直接访问操作系统资源）
7. 高效性（通过 Just In Time 编译器等技术的优化，Java 语言的运行效率还是非常不错的）
8. 支持网络编程并且很方便
9. 编译与解释并存
10. 动态性（Java 语言是一种解释型语言， 因为在 Java 语言的运行期， 对于很多不确定的情况只能到运行时才能确定， 这样就需要一个解释器对这些动态生成的代码进行解释执行， 并且逐句翻译成机器语言并运行。 但是 Java 语言又是一种编译型语言， 因为 Java 程序在运行之前需要经过编译， 将源代码编译成为字节码文件， 这种字节码文件仍然不能直接被机器所识别， 因为它不是对应于具体机器的机器码。 因此， Java 程序还需要运行期间的解释器， 通过解释器对字节码文件进行解释运行。 ）
> Write Once, Run Anywhere（一次编写，随处运行）

# Java SE vs Java EE

- Java SE（Java Platform，Standard Edition）: Java 平台标准版，Java 编程语言的基础，它包含了支持 Java 应用程序开发和运行的核心类库以及虚拟机等核心组件。Java SE 可以用于构建桌面应用程序或简单的服务器应用程序。
- Java EE（Java Platform, Enterprise Edition ）：Java 平台企业版，建立在 Java SE 的基础上，包含了支持企业级应用程序开发和部署的标准和规范（比如 Servlet、JSP、EJB、JDBC、JPA、JTA、JavaMail、JMS）。 Java EE 可以用于构建分布式、可移植、健壮、可伸缩和安全的服务端 Java 应用程序，例如 Web 应用程序。

简单来说，Java SE 是 Java 的基础版本，Java EE 是 Java 的高级版本。Java SE 更适合开发桌面应用程序或简单的服务器应用程序，Java EE 更适合开发复杂的企业级应用程序或 Web 应用程序。


除了 Java SE 和 Java EE，还有一个 Java ME（Java Platform，Micro Edition）。Java ME 是 Java 的微型版本，主要用于开发嵌入式消费电子设备的应用程序，例如手机、PDA、机顶盒、冰箱、空调等。Java ME 无需重点关注，知道有这个东西就好了，现在已经用不上了。


# JVM vs JDK vs JRE


## JVM


Java 虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM 有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。字节码和不同系统的 JVM 实现是 Java 语言“一次编译，随处可以运行”的关键所在。


![java-virtual-machine-program-language-os.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/b53a8029-9b56-4d0b-b981-0b7f00f9561d/java-virtual-machine-program-language-os.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLGQDQ7%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T140353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2HmWfxklsnqxPF77i%2F7OWewzTMeiWQDMWrpjS3Am55AiA%2FnqPvPTOMG5N35AOvUpI83S9AV%2FJoi5v5JlACC%2F27OyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMljaqL22ro1NpxEAjKtwDarP%2BPFp1CO4IXBRbVgDejYMabQbCP6LWVqgoGw6xs%2FcJdXdSgN6BoTT1oj5PHCo3oXChsBsry5GP8uAQg%2B6W5hhf1oKAAbZ%2BdlRI2yC0052YRPTRAk3Djoj%2B44EcTPpX%2BXfQeuuC9xUTRzqsTnUApi62NWY9VNECWvv4PDpTqqD2V7iKbPCyMxqdpbPjNeeLHNd8gBTI8BO8y9xQBdx%2Bg9Q56chrw9OQi3noizYUho0s%2Be8bg69YMLrcTASjiFppBkmIoUMNBBGyTDa2woOqZDD8p9FTu4wq5BIUTP3uWSwrCGKCxjR8tvcziRXZiHIxW%2BJhm8xaiX0tGZKqN6BfLLf94Hq9k42pASkuz6ND4RdtiUflDicUjLYMfl4DSPyPrBEqorfdQfRdvHcfd3MZDX%2Fal2WBBxYaKrk%2FjMN4HQk9Gm%2B7Uha9vNy%2FWOT3FMWbO9lE8IILvGqpT1K8mPoUNL9hlJki%2FghTPcYASIwUG1p8cQauvQN%2BQ49nGW3XH0b1KzuQn2wvbWa%2BG7aRLa4cbxjvMTyKeCquI9mf8uDZLOshK6hd3wUyxilqMkdy0GUAjCb9A3%2Ba9%2Bn8VM7kXCaj8IQAexUyK%2FgNVcJrmfkmAXLInWUkh6weJ8tF5Dww1OXrzAY6pgEMDhKgXFfrEAIB1otNNMG7dzDf%2BJ83g64ikZfnCmcK%2FjTBzr14dtEPuxTuWEC1EpOc6EMpjG97PonrqbJ%2Fy6uFCRrSEdJRKfuOFOpQ%2FkbTYg%2F94RNq19wAecAhsT6slpYhdBD0%2F428uZeDtu1sLwT9Sd2cX%2FeJAzUWHvWbkxwpiN1ESnd4MP2h5gwPKY1ozrCAef0o9D2TyvRl%2Fidv603IGaR2TXfb&X-Amz-Signature=e9e47006fd21d062cdd9a5a7c17d1bf1cf18e01955272e4f87f964f121097670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


JVM 并不是只有一种！只要满足 JVM 规范，每个公司、组织或者个人都可以开发自己的专属 JVM。也就是说我们平时接触到的 HotSpot VM 仅仅是是 JVM 规范的一种实现而已。


除了我们平时最常用的 HotSpot VM 外，还有 J9 VM、Zing VM、JRockit VM 等 JVM 。维基百科上就有常见 JVM 的对比：[Comparison of Java virtual machines](https://en.wikipedia.org/wiki/Comparison_of_Java_virtual_machines)


## JDK和JRE


JDK（Java Development Kit），它是功能齐全的 Java SDK，是提供给开发者使用，能够创建和编译 Java 程序的开发套件。它包含了 JRE，同时还包含了编译 java 源码的编译器 javac 以及一些其他工具比如 javadoc（文档注释工具）、jdb（调试器）、jconsole（基于 JMX 的可视化监控⼯具）、javap（反编译工具）等等。


JRE（Java Runtime Environment） 是 Java 运行时环境。它是运行已编译 Java 程序所需的所有内容的集合，主要包括 Java 虚拟机（JVM）、Java 基础类库（Class Library）。


也就是说，JRE 是 Java 运行时环境，仅包含 Java 应用程序的运行时环境和必要的类库。而 **JDK 则包含了 JRE**，同时还包括了 javac、javadoc、jdb、jconsole、javap 等工具，可以用于 Java 应用程序的开发和调试。如果需要进行 Java 编程工作，比如编写和编译 Java 程序、使用 Java API 文档等，就需要安装 JDK。而对于某些需要使用 Java 特性的应用程序，如 JSP 转换为 Java Servlet、使用反射等，也需要 JDK 来编译和运行 Java 代码。因此，即使不打算进行 Java 应用程序的开发工作，也有可能需要安装 JDK。


不过，从 JDK 9 开始，就不需要区分 JDK 和 JRE 的关系了，取而代之的是模块系统（JDK 被重新组织成 94 个模块）+ jlink 工具 (随 Java 9 一起发布的新命令行工具，用于生成自定义 Java 运行时映像，该映像仅包含给定应用程序所需的模块) 。并且，从 JDK 11 开始，Oracle 不再提供单独的 JRE 下载。


# 什么是字节码?采用字节码的好处是什么?


在 Java 中，JVM 可以理解的代码就叫做字节码（即扩展名为 .class 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以， Java 程序运行时相对来说还是高效的（不过，和 C、 C++，Rust，Go 等语言还是有一定差距的），而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。


![java-code-to-machine-code.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/5582528a-ae95-4cfd-b0d5-d9302bd6aef2/java-code-to-machine-code.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLGQDQ7%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T140353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2HmWfxklsnqxPF77i%2F7OWewzTMeiWQDMWrpjS3Am55AiA%2FnqPvPTOMG5N35AOvUpI83S9AV%2FJoi5v5JlACC%2F27OyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMljaqL22ro1NpxEAjKtwDarP%2BPFp1CO4IXBRbVgDejYMabQbCP6LWVqgoGw6xs%2FcJdXdSgN6BoTT1oj5PHCo3oXChsBsry5GP8uAQg%2B6W5hhf1oKAAbZ%2BdlRI2yC0052YRPTRAk3Djoj%2B44EcTPpX%2BXfQeuuC9xUTRzqsTnUApi62NWY9VNECWvv4PDpTqqD2V7iKbPCyMxqdpbPjNeeLHNd8gBTI8BO8y9xQBdx%2Bg9Q56chrw9OQi3noizYUho0s%2Be8bg69YMLrcTASjiFppBkmIoUMNBBGyTDa2woOqZDD8p9FTu4wq5BIUTP3uWSwrCGKCxjR8tvcziRXZiHIxW%2BJhm8xaiX0tGZKqN6BfLLf94Hq9k42pASkuz6ND4RdtiUflDicUjLYMfl4DSPyPrBEqorfdQfRdvHcfd3MZDX%2Fal2WBBxYaKrk%2FjMN4HQk9Gm%2B7Uha9vNy%2FWOT3FMWbO9lE8IILvGqpT1K8mPoUNL9hlJki%2FghTPcYASIwUG1p8cQauvQN%2BQ49nGW3XH0b1KzuQn2wvbWa%2BG7aRLa4cbxjvMTyKeCquI9mf8uDZLOshK6hd3wUyxilqMkdy0GUAjCb9A3%2Ba9%2Bn8VM7kXCaj8IQAexUyK%2FgNVcJrmfkmAXLInWUkh6weJ8tF5Dww1OXrzAY6pgEMDhKgXFfrEAIB1otNNMG7dzDf%2BJ83g64ikZfnCmcK%2FjTBzr14dtEPuxTuWEC1EpOc6EMpjG97PonrqbJ%2Fy6uFCRrSEdJRKfuOFOpQ%2FkbTYg%2F94RNq19wAecAhsT6slpYhdBD0%2F428uZeDtu1sLwT9Sd2cX%2FeJAzUWHvWbkxwpiN1ESnd4MP2h5gwPKY1ozrCAef0o9D2TyvRl%2Fidv603IGaR2TXfb&X-Amz-Signature=6f0b620763d029e4356d6bbdeb569334774454eb1d651169803d21e79a1b6646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


我们需要格外注意的是 .class->机器码 这一步。在这一步 JVM 类加载器首先加载字节码文件，然后通过解释器逐行解释执行，这种方式的执行速度会相对比较慢。而且，有些方法和代码块是经常需要被调用的(也就是所谓的热点代码)，所以后面引进了 JIT（Just in Time Compilation） 编译器，而 JIT 属于**运行时编译**。


当 JIT 编译器完成第一次编译后，其会将字节码对应的机器码保存下来，下次可以直接使用。而我们知道，机器码的运行效率肯定是高于 Java 解释器的。这也解释了我们为什么经常会说 Java 是编译与解释共存的语言 。


![java-code-to-machine-code-with-jit.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/e7d51cdc-5223-4b27-bba7-c1cec51966de/java-code-to-machine-code-with-jit.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLGQDQ7%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T140353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2HmWfxklsnqxPF77i%2F7OWewzTMeiWQDMWrpjS3Am55AiA%2FnqPvPTOMG5N35AOvUpI83S9AV%2FJoi5v5JlACC%2F27OyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMljaqL22ro1NpxEAjKtwDarP%2BPFp1CO4IXBRbVgDejYMabQbCP6LWVqgoGw6xs%2FcJdXdSgN6BoTT1oj5PHCo3oXChsBsry5GP8uAQg%2B6W5hhf1oKAAbZ%2BdlRI2yC0052YRPTRAk3Djoj%2B44EcTPpX%2BXfQeuuC9xUTRzqsTnUApi62NWY9VNECWvv4PDpTqqD2V7iKbPCyMxqdpbPjNeeLHNd8gBTI8BO8y9xQBdx%2Bg9Q56chrw9OQi3noizYUho0s%2Be8bg69YMLrcTASjiFppBkmIoUMNBBGyTDa2woOqZDD8p9FTu4wq5BIUTP3uWSwrCGKCxjR8tvcziRXZiHIxW%2BJhm8xaiX0tGZKqN6BfLLf94Hq9k42pASkuz6ND4RdtiUflDicUjLYMfl4DSPyPrBEqorfdQfRdvHcfd3MZDX%2Fal2WBBxYaKrk%2FjMN4HQk9Gm%2B7Uha9vNy%2FWOT3FMWbO9lE8IILvGqpT1K8mPoUNL9hlJki%2FghTPcYASIwUG1p8cQauvQN%2BQ49nGW3XH0b1KzuQn2wvbWa%2BG7aRLa4cbxjvMTyKeCquI9mf8uDZLOshK6hd3wUyxilqMkdy0GUAjCb9A3%2Ba9%2Bn8VM7kXCaj8IQAexUyK%2FgNVcJrmfkmAXLInWUkh6weJ8tF5Dww1OXrzAY6pgEMDhKgXFfrEAIB1otNNMG7dzDf%2BJ83g64ikZfnCmcK%2FjTBzr14dtEPuxTuWEC1EpOc6EMpjG97PonrqbJ%2Fy6uFCRrSEdJRKfuOFOpQ%2FkbTYg%2F94RNq19wAecAhsT6slpYhdBD0%2F428uZeDtu1sLwT9Sd2cX%2FeJAzUWHvWbkxwpiN1ESnd4MP2h5gwPKY1ozrCAef0o9D2TyvRl%2Fidv603IGaR2TXfb&X-Amz-Signature=817d7c9ecf89c4b63528fa0f97b8727af4766f62c5674349358ed411e92c76cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> HotSpot 采用了惰性评估(Lazy Evaluation)的做法，根据二八定律，消耗大部分系统资源的只有那一小部分的代码（热点代码），而这也就是 JIT 所需要编译的部分。JVM 会根据代码每次被执行的情况收集信息并相应地做出一些优化，因此执行的次数越多，它的速度就越快。

![jdk-jre-jvm-jit.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c877ddec-1cad-4bed-9c22-9951782f72ab/jdk-jre-jvm-jit.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLGQDQ7%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T140353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2HmWfxklsnqxPF77i%2F7OWewzTMeiWQDMWrpjS3Am55AiA%2FnqPvPTOMG5N35AOvUpI83S9AV%2FJoi5v5JlACC%2F27OyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMljaqL22ro1NpxEAjKtwDarP%2BPFp1CO4IXBRbVgDejYMabQbCP6LWVqgoGw6xs%2FcJdXdSgN6BoTT1oj5PHCo3oXChsBsry5GP8uAQg%2B6W5hhf1oKAAbZ%2BdlRI2yC0052YRPTRAk3Djoj%2B44EcTPpX%2BXfQeuuC9xUTRzqsTnUApi62NWY9VNECWvv4PDpTqqD2V7iKbPCyMxqdpbPjNeeLHNd8gBTI8BO8y9xQBdx%2Bg9Q56chrw9OQi3noizYUho0s%2Be8bg69YMLrcTASjiFppBkmIoUMNBBGyTDa2woOqZDD8p9FTu4wq5BIUTP3uWSwrCGKCxjR8tvcziRXZiHIxW%2BJhm8xaiX0tGZKqN6BfLLf94Hq9k42pASkuz6ND4RdtiUflDicUjLYMfl4DSPyPrBEqorfdQfRdvHcfd3MZDX%2Fal2WBBxYaKrk%2FjMN4HQk9Gm%2B7Uha9vNy%2FWOT3FMWbO9lE8IILvGqpT1K8mPoUNL9hlJki%2FghTPcYASIwUG1p8cQauvQN%2BQ49nGW3XH0b1KzuQn2wvbWa%2BG7aRLa4cbxjvMTyKeCquI9mf8uDZLOshK6hd3wUyxilqMkdy0GUAjCb9A3%2Ba9%2Bn8VM7kXCaj8IQAexUyK%2FgNVcJrmfkmAXLInWUkh6weJ8tF5Dww1OXrzAY6pgEMDhKgXFfrEAIB1otNNMG7dzDf%2BJ83g64ikZfnCmcK%2FjTBzr14dtEPuxTuWEC1EpOc6EMpjG97PonrqbJ%2Fy6uFCRrSEdJRKfuOFOpQ%2FkbTYg%2F94RNq19wAecAhsT6slpYhdBD0%2F428uZeDtu1sLwT9Sd2cX%2FeJAzUWHvWbkxwpiN1ESnd4MP2h5gwPKY1ozrCAef0o9D2TyvRl%2Fidv603IGaR2TXfb&X-Amz-Signature=1a0c1b79e12e6aed3cac531594d90616f12507084ea3da1a4554fb2f6daeabab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 为什么说 Java 语言“编译与解释并存”？


其实这个问题我们讲字节码的时候已经提到过，因为比较重要，所以我们这里再提一下。


我们可以将高级编程语言按照程序的执行方式分为两种：

- 编译型：
编译型语言会通过编译器将源代码一次性翻译成可被该平台执行的机器码。一般情况下，编译语言的执行速度比较快，开发效率比较低。常见的编译性语言有 C、C++、Go、Rust 等等。
- 解释型：
解释型语言会通过解释器一句一句的将代码解释（interpret）为机器代码后再执行。解释型语言开发效率比较快，执行速度比较慢。常见的解释性语言有 Python、JavaScript、PHP 等等。

![compiled-and-interpreted-languages.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/217038f3-e41d-451f-a32c-c76fe2c72c4a/compiled-and-interpreted-languages.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLGQDQ7%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T140353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2HmWfxklsnqxPF77i%2F7OWewzTMeiWQDMWrpjS3Am55AiA%2FnqPvPTOMG5N35AOvUpI83S9AV%2FJoi5v5JlACC%2F27OyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMljaqL22ro1NpxEAjKtwDarP%2BPFp1CO4IXBRbVgDejYMabQbCP6LWVqgoGw6xs%2FcJdXdSgN6BoTT1oj5PHCo3oXChsBsry5GP8uAQg%2B6W5hhf1oKAAbZ%2BdlRI2yC0052YRPTRAk3Djoj%2B44EcTPpX%2BXfQeuuC9xUTRzqsTnUApi62NWY9VNECWvv4PDpTqqD2V7iKbPCyMxqdpbPjNeeLHNd8gBTI8BO8y9xQBdx%2Bg9Q56chrw9OQi3noizYUho0s%2Be8bg69YMLrcTASjiFppBkmIoUMNBBGyTDa2woOqZDD8p9FTu4wq5BIUTP3uWSwrCGKCxjR8tvcziRXZiHIxW%2BJhm8xaiX0tGZKqN6BfLLf94Hq9k42pASkuz6ND4RdtiUflDicUjLYMfl4DSPyPrBEqorfdQfRdvHcfd3MZDX%2Fal2WBBxYaKrk%2FjMN4HQk9Gm%2B7Uha9vNy%2FWOT3FMWbO9lE8IILvGqpT1K8mPoUNL9hlJki%2FghTPcYASIwUG1p8cQauvQN%2BQ49nGW3XH0b1KzuQn2wvbWa%2BG7aRLa4cbxjvMTyKeCquI9mf8uDZLOshK6hd3wUyxilqMkdy0GUAjCb9A3%2Ba9%2Bn8VM7kXCaj8IQAexUyK%2FgNVcJrmfkmAXLInWUkh6weJ8tF5Dww1OXrzAY6pgEMDhKgXFfrEAIB1otNNMG7dzDf%2BJ83g64ikZfnCmcK%2FjTBzr14dtEPuxTuWEC1EpOc6EMpjG97PonrqbJ%2Fy6uFCRrSEdJRKfuOFOpQ%2FkbTYg%2F94RNq19wAecAhsT6slpYhdBD0%2F428uZeDtu1sLwT9Sd2cX%2FeJAzUWHvWbkxwpiN1ESnd4MP2h5gwPKY1ozrCAef0o9D2TyvRl%2Fidv603IGaR2TXfb&X-Amz-Signature=af0d7d19038ac1d5406110ba067b4e51ef0e0a022a23e08e3aea21db48440f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> 为了改善编译语言的效率而发展出的即时编译技术，已经缩小了这两种语言间的差距。这种技术混合了编译语言与解释型语言的优点，它像编译语言一样，先把程序源代码编译成字节码。到执行期时，再将字节码直译，之后执行。Java与LLVM是这种技术的代表产物。

# AOT 有什么优点？为什么不全部使用 AOT 呢？


JDK 9 引入了一种新的编译模式 AOT(Ahead of Time Compilation) 。和 JIT 不同的是，这种编译模式会在程序被执行前就将其编译成机器码，属于静态编译（C、 C++，Rust，Go 等语言就是静态编译）。AOT 避免了 JIT 预热等各方面的开销，可以提高 Java 程序的启动速度，避免预热时间长。并且，AOT 还能减少内存占用和增强 Java 程序的安全性（AOT 编译后的代码不容易被反编译和修改），特别适合云原生场景。


![jit-vs-aot.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/95254d72-b3ab-486d-81c1-bdf57b04e789/jit-vs-aot.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLGQDQ7%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T140353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2HmWfxklsnqxPF77i%2F7OWewzTMeiWQDMWrpjS3Am55AiA%2FnqPvPTOMG5N35AOvUpI83S9AV%2FJoi5v5JlACC%2F27OyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMljaqL22ro1NpxEAjKtwDarP%2BPFp1CO4IXBRbVgDejYMabQbCP6LWVqgoGw6xs%2FcJdXdSgN6BoTT1oj5PHCo3oXChsBsry5GP8uAQg%2B6W5hhf1oKAAbZ%2BdlRI2yC0052YRPTRAk3Djoj%2B44EcTPpX%2BXfQeuuC9xUTRzqsTnUApi62NWY9VNECWvv4PDpTqqD2V7iKbPCyMxqdpbPjNeeLHNd8gBTI8BO8y9xQBdx%2Bg9Q56chrw9OQi3noizYUho0s%2Be8bg69YMLrcTASjiFppBkmIoUMNBBGyTDa2woOqZDD8p9FTu4wq5BIUTP3uWSwrCGKCxjR8tvcziRXZiHIxW%2BJhm8xaiX0tGZKqN6BfLLf94Hq9k42pASkuz6ND4RdtiUflDicUjLYMfl4DSPyPrBEqorfdQfRdvHcfd3MZDX%2Fal2WBBxYaKrk%2FjMN4HQk9Gm%2B7Uha9vNy%2FWOT3FMWbO9lE8IILvGqpT1K8mPoUNL9hlJki%2FghTPcYASIwUG1p8cQauvQN%2BQ49nGW3XH0b1KzuQn2wvbWa%2BG7aRLa4cbxjvMTyKeCquI9mf8uDZLOshK6hd3wUyxilqMkdy0GUAjCb9A3%2Ba9%2Bn8VM7kXCaj8IQAexUyK%2FgNVcJrmfkmAXLInWUkh6weJ8tF5Dww1OXrzAY6pgEMDhKgXFfrEAIB1otNNMG7dzDf%2BJ83g64ikZfnCmcK%2FjTBzr14dtEPuxTuWEC1EpOc6EMpjG97PonrqbJ%2Fy6uFCRrSEdJRKfuOFOpQ%2FkbTYg%2F94RNq19wAecAhsT6slpYhdBD0%2F428uZeDtu1sLwT9Sd2cX%2FeJAzUWHvWbkxwpiN1ESnd4MP2h5gwPKY1ozrCAef0o9D2TyvRl%2Fidv603IGaR2TXfb&X-Amz-Signature=d326724c9fdd1aaf71df337852dd710dae7ece8fdc983a6fd2010a5409c96768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


可以看出，AOT 的主要优势在于启动时间、内存占用和打包体积。JIT 的主要优势在于具备更高的极限处理能力，可以降低请求的最大延迟。


提到 AOT 就不得不提 GraalVM了！GraalVM 是一种高性能的 JDK（完整的 JDK 发行版本），它可以运行 Java 和其他 JVM 语言，以及 JavaScript、Python 等非 JVM 语言。 GraalVM 不仅能提供 AOT 编译，还能提供 JIT 编译。感兴趣的同学，可以去看看 GraalVM 的官方文档：[https://www.graalvm.org/latest/docs/](https://www.graalvm.org/latest/docs/)。


**既然 AOT 这么多优点，那为什么不全部使用这种编译方式呢？**


我们前面也对比过 JIT 与 AOT，两者各有优点，只能说 AOT 更适合当下的云原生场景，对微服务架构的支持也比较友好。除此之外，AOT 编译无法支持 Java 的一些动态特性，如反射、动态代理、动态加载、JNI（Java Native Interface）等。然而，很多框架和库（如 Spring、CGLIB）都用到了这些特性。如果只使用 AOT 编译，那就没办法使用这些框架和库了，或者说需要针对性地去做适配和优化。举个例子，CGLIB 动态代理使用的是 ASM 技术，而这种技术大致原理是运行时直接在内存中生成并加载修改后的字节码文件也就是 .class 文件，如果全部使用 AOT 提前编译，也就不能使用 ASM 技术了。为了支持类似的动态特性，所以选择使用 JIT 即时编译器。


# Oracle JDK vs OpenJDK


可能在看这个问题之前很多人和我一样并没有接触和使用过 OpenJDK 。那么 Oracle JDK 和 OpenJDK 之间是否存在重大差异？


首先，2006 年 SUN 公司将 Java 开源，也就有了 OpenJDK。2009 年 Oracle 收购了 Sun 公司，于是自己在 OpenJDK 的基础上搞了一个 Oracle JDK。Oracle JDK 是不开源的，并且刚开始的几个版本（Java8 ~ Java11）还会相比于 OpenJDK 添加一些特有的功能和工具。


其次，对于 Java 7 而言，OpenJDK 和 Oracle JDK 是十分接近的。 Oracle JDK 是基于 OpenJDK 7 构建的，只添加了一些小功能，由 Oracle 工程师参与维护。


简单总结一下 Oracle JDK 和 OpenJDK 的区别：

1. 是否开源：OpenJDK 是一个参考模型并且是完全开源的，而 Oracle JDK 是基于 OpenJDK 实现的，并不是完全开源的。OpenJDK 开源项目：[https://github.com/openjdk/jdk](https://github.com/openjdk/jdk)
2. 是否免费：Oracle JDK 会提供免费版本，但一般有时间限制。JDK8u221 之前只要不升级可以无限期免费。OpenJDK 是完全免费的。
3. 功能性：Oracle JDK 在 OpenJDK 的基础上添加了一些特有的功能和工具，比如 Java Flight Recorder（JFR，一种监控工具）、Java Mission Control（JMC，一种监控工具）等工具。不过，在 Java 11 之后，OracleJDK 和 OpenJDK 的功能基本一致。
4. 稳定性：OpenJDK 不提供 LTS 服务，而 OracleJDK 大概每三年都会推出一个 LTS 版进行长期支持。
5. 协议：Oracle JDK 使用 BCL/OTN 协议获得许可，而 OpenJDK 根据 GPL v2 许可获得许可。
> 既然 Oracle JDK 这么好，那为什么还要有 OpenJDK？
> 1. OpenJDK 是开源的，开源意味着你可以对它根据你自己的需要进行修改、优化，比如 Alibaba 基于 OpenJDK 开发了 Dragonwell8：[https://github.com/alibaba/dragonwell8](https://github.com/alibaba/dragonwell8)
> 2. OpenJDK 是商业免费的
> 3. OpenJDK 更新频率更快。Oracle JDK 一般是每 6 个月发布一个新版本，而 OpenJDK 一般是每 3 个月发布一个新版本。
>

Oracle JDK 和 OpenJDK 如何选择？


建议选择 OpenJDK 或者基于 OpenJDK 的发行版，比如 AWS 的 Amazon Corretto，阿里巴巴的 Alibaba Dragonwell。


拓展一下：

- BCL 协议（Oracle Binary Code License Agreement）：可以使用 JDK（支持商用），但是不能进行修改。
- OTN 协议（Oracle Technology Network License Agreement）：11 及之后新发布的 JDK 用的都是这个协议，可以自己私下用，但是商用需要付费。

# Java 和 C++ 的区别?

- Java 不提供指针来直接访问内存，程序内存更加安全
- Java 的类是单继承的，C++ 支持多重继承
- 虽然 Java 的类不可以多继承，但是接口可以多继承
- Java 有自动内存管理垃圾回收机制(GC)，不需要程序员手动释放无用内存
- C++同时支持方法重载和操作符重载，但是 Java 只支持方法重载（操作符重载增加了复杂性，这与 Java 最初的设计思想不符）

# 基本语法


## 注释有哪几种形式？


Java 中的注释有三种：

- 单行注释：以 `//` 开头，一直到行尾的内容都是注释
- 多行注释：以 `/*` 开头，以 `/` 结尾，中间的内容都是注释
- 文档注释：以 `/**` 开头，以 `/` 结尾，中间的内容都是注释，但是文档注释可以通过 `javadoc` 工具生成一定格式的文档

用的比较多的还是单行注释和文档注释，多行注释在实际开发中使用的相对较少。


在我们编写代码的时候，如果代码量比较少，我们自己或者团队其他成员还可以很轻易地看懂代码，但是当项目结构一旦复杂起来，我们就需要用到注释了。注释并不会执行(编译器在编译代码之前会把代码中的所有注释抹掉,字节码中不保留注释)，是我们程序员写给自己看的，注释是你的代码说明书，能够帮助看代码的人快速地理清代码之间的逻辑关系。因此，在写程序的时候随手加上注释是一个非常好的习惯。

> 代码的注释不是越详细越好。实际上好的代码本身就是注释，我们要尽量规范和美化自己的代码来减少不必要的注释。  
> 若编程语言足够有表达力，就不需要注释，尽量通过代码来阐述。

## 标识符和关键字的区别是什么？


在我们编写程序的时候，需要大量地为程序、类、变量、方法等取名字，于是就有了 **标识符** 。简单来说， 标识符就是一个名字 。


有一些标识符，Java 语言已经赋予了其特殊的含义，只能用于特定的地方，这些特殊的标识符就是 **关键字** 。简单来说，关键字是被赋予特殊含义的标识符 。


## Java 语言关键字有哪些？

- 分类关键字访问控制
private/protected/public
- 类，方法和变量修饰符
abstract/class/extends/final/implements/interface/native/new/static/strictfp/synchronized/transient/volatile/enum
- 程序控制
break/continue/return/do/while/if/else/for/instanceof/switch/case/default/assert
- 错误处理
try/catch/throw/throws/finally
- 包相关
import/package
- 基本类型
boolean/byte/char/double/float/int/long/short
- 变量引用
super/this/void
- 保留字
goto/const
> Tips：所有的关键字都是小写的，在 IDE 中会以特殊颜色显示。  
> default 这个关键字很特殊，既属于程序控制，也属于类，方法和变量修饰符，还属于访问控制。
> - 在程序控制中，当在 switch 中匹配不到任何情况时，可以使用 default 来编写默认匹配的情况。
> - 在类，方法和变量修饰符中，从 JDK8 开始引入了默认方法，可以使用 default 关键字来定义一个方法的默认实现。
> - 在访问控制中，如果一个方法前没有任何修饰符，则默认会有一个修饰符 default，但是这个修饰符加上了就会报错。
>
> 注意：虽然 true, false, 和 null 看起来像关键字但实际上他们是字面值，同时你也不可以作为标识符来使用。
>
>

[官方文档](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html)


## 自增自减运算符


在写代码的过程中，常见的一种情况是需要某个整数类型变量增加 1 或减少 1，Java 提供了一种特殊的运算符，用于这种表达式，叫做自增运算符（`++`)和自减运算符（`--`）。
`++` 和 `--` 运算符可以放在变量之前，也可以放在变量之后，当运算符放在变量之前时(前缀)，先自增/减，再赋值；当运算符放在变量之后时(后缀)，先赋值，再自增/减。


## 移位运算符


移位运算符是最基本的运算符之一，几乎每种编程语言都包含这一运算符。移位操作中，被操作的数据被视为二进制数，移位就是将其向左或向右移动若干位的运算。移位运算符在各种框架以及 JDK 自身的源码中使用还是挺广泛的，HashMap（JDK1.8） 中的 hash 方法的源码就用到了移位运算符


```java
static final int hash(Object key) {
    int h;
    // key.hashCode()：返回散列值也就是hashcode
    // ^：按位异或
    // >>>:无符号右移，忽略符号位，空位都以0补齐
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
  }
```


Java 中有三种移位运算符

- `<<`：左移运算符，num << 1,相当于num乘以2
- `>>`：右移运算符，num >> 1,相当于num除以2
- `>>>`：无符号右移，忽略符号位，空位都以0补齐

在 Java 代码里使用 `<<`、 `>>` 和`>>>`转换成的指令码运行起来会更高效些。掌握最基本的移位运算符知识还是很有必要的，这不光可以帮助我们在代码中使用，还可以帮助我们理解源码中涉及到移位运算符的代码。


由于 double，float 在二进制中的表现比较特殊，因此不能来进行移位操作。移位操作符实际上支持的类型只有int和long，编译器在对short、byte、char类型进行移位前，都会将其转换为int类型再操作。


如果移位的位数超过数值所占有的位数会怎样？当 int 类型左移/右移位数大于等于 32 位操作时，会先求余（%）后再进行左移/右移操作。也就是说左移/右移 32 位相当于不进行移位操作（32%32=0），左移/右移 42 位相当于左移/右移 10 位（42%32=10）。当 long 类型进行左移/右移操作时，由于 long 对应的二进制是 64 位，因此求余操作的基数也变成了 64。


## continue、break 和 return 的区别是什么？


在循环结构中，当循环条件不满足或者循环次数达到要求时，循环会正常结束。但是，有时候可能需要在循环的过程中，当发生了某种条件之后 ，提前终止循环，这就需要用到下面几个关键词：

1. continue：指跳出当前的这一次循环，继续下一次循环
2. break：指跳出整个循环体，继续执行循环下面的语句
3. return 用于跳出所在方法，结束该方法的运行。
    - return;：直接使用 return 结束方法执行，用于没有返回值函数的方法
    - return value;：return 一个特定值，用于有返回值函数的方法

# 基础数据类型


Java 中的几种基本数据类型了解么？Java 中有 8 种基本数据类型，分别为：

- 6 种数字类型：
    - 4 种整数型：byte、short、int、long
    - 2 种浮点型：float、double
- 1 种字符类型：char
- 1 种布尔型：boolean。

这 8 种基本数据类型的默认值以及所占空间的大小如下：


基本类型  | 位数 | 字节 | 默认值 | 取值范围
--- | ---  | --- | ---   | ---
byte    |8     |1    |  0    | -128 ~ 127
short   |16    |2    |  0    | -32768（-2^15） ~ 32767（2^15 - 1）
int     |32    |4    |  0    | -2147483648 ~ 2147483647
long    |64    |8    |  0L   | -9223372036854775808（-2^63） ~ 9223372036854775807（2^63 -1）
char    |16    |2    |'u0000'| 0 ~ 65535（2^16 - 1）
float   |32    |4    |0f     | 1.4E-45 ~ 3.4028235E38
double  |64    |8    |0d     | 4.9E-324 ~ 1.7976931348623157E308
boolean |1     |     |  false| true、false


可以看到，像 byte、short、int、long能表示的最大正数都减 1 了。这是为什么呢？这是因为在二进制补码表示法中，最高位是用来表示符号的（0 表示正数，1 表示负数），其余位表示数值部分。所以，如果我们要表示最大的正数，我们需要把除了最高位之外的所有位都设为 1。如果我们再加 1，就会导致溢出，变成一个负数。


对于 boolean，官方文档未明确定义，它依赖于 JVM 厂商的具体实现。逻辑上理解是占用 1 位，但是实际中会考虑计算机高效存储因素。


另外，Java 的每种基本类型所占存储空间的大小不会像其他大多数语言那样随机器硬件架构的变化而变化。这种所占存储空间大小的不变性是 Java 程序比用其他大多数语言编写的程序更具可移植性的原因之一

> 注意：
> 1. Java 里使用 long 类型的数据一定要在数值后面加上 L，否则将作为整型解析。
> 2. `char a = 'h'` char :单引号，String a = "hello" :双引号。
>

这八种基本类型都有对应的包装类分别为：Byte、Short、Integer、Long、Float、Double、Character、Boolean 。


## 基本类型和包装类型的区别？

- 用途：除了定义一些常量和局部变量之外，我们在其他地方比如方法参数、对象属性中很少会使用基本类型来定义变量。并且，包装类型可用于泛型，而基本类型不可以。
- 存储方式：基本数据类型的局部变量存放在 Java 虚拟机栈中的局部变量表中，基本数据类型的成员变量（未被 static 修饰 ）存放在 Java 虚拟机的堆中。包装类型属于对象类型，我们知道几乎所有对象实例都存在于堆中。
- 占用空间：相比于包装类型（对象类型）， 基本数据类型占用的空间往往非常小。
- 默认值：成员变量包装类型不赋值就是 null ，而基本类型有默认值且不是 null。
- 比较方式：对于基本数据类型来说，== 比较的是值。对于包装数据类型来说，== 比较的是对象的内存地址。所有整型包装类对象之间值的比较，全部使用 equals() 方法。

为什么说是几乎所有对象实例都存在于堆中呢？ 这是因为 HotSpot 虚拟机引入了 JIT 优化之后，会对对象进行逃逸分析，如果发现某一个对象并没有逃逸到方法外部，那么就可能通过标量替换来实现栈上分配，而避免堆上分配内存


注意：基本数据类型存放在栈中是一个常见的误区！ 基本数据类型的存储位置取决于它们的作用域和声明方式。如果它们是局部变量，那么它们会存放在栈中；如果它们是成员变量，那么它们会存放在堆中。


## 包装类型的缓存机制了解么？


Java 基本数据类型的包装类型的大部分都用到了缓存机制来提升性能。


Byte,Short,Integer,Long 这 4 种包装类默认创建了数值 [-128，127] 的相应类型的缓存数据，Character 创建了数值在 [0,127] 范围的缓存数据，Boolean 直接返回 True or False。


如果超出对应范围仍然会去创建新的对象，缓存的范围区间的大小只是在性能和资源之间的权衡。


两种浮点数类型的包装类 Float,Double 并没有实现缓存机制。


记住：所有整型包装类对象之间值的比较，全部使用 equals 方法比较。


![up-1ae0425ce8646adfb768b5374951eeb820d.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/a627081a-25fd-44e3-af58-8835a342f451/up-1ae0425ce8646adfb768b5374951eeb820d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZDK63AY%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T140354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI%2FbMCWdC4Qa26fiBi67UakK94nDo%2Fup0mxibt8DOyKAiEA3sBu1S4YuOS0vtkV7HnFrrEwDzYAdwuSAHzTiKSXQUcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3z8nKIMrLnkA5%2FZyrcAyM1R%2FFXthSM%2FAumqzQYvMkGKDJ01FNFfpnmy1HGR6zK7MuvgkYzNGoW8od91GGvIWuWngIN2DoAva%2FDdKWAcyHQmaVGPQ7%2F71%2FDQPcrDVjbs9Y9Hpr%2FnjXcTHz3czh9TLzzkau1xesqiV8oDHHsHAWLlT8ld7k%2FAjWeqh4xbj7CV0KDDub%2Fg%2BlfnCQdxlovwpYpnGl8fUk9ReSE12uNPIRHkDy%2FCa8J9tuJtk4fdUyM%2F%2FZSWkkAc%2BOOiHYAyNObQ8NXt0bv%2B3ItIOmKk1BdbIcPbCndEDDb%2BUsiUhu7kFXMcaySqbNWxslCHIG%2FAPoBKCFpIIgpBkzgShAg7ViUzAKpW55MoylZ4dv7Cs15N7L7I%2B9lECtZJx6TiOlPSy8Lxk9oGdPInjzuMafgMoez8W%2BUyxRvF1pVmtoX5G9BOmw%2Fe9JQ34%2FvcvL0X54a%2FrzUlkCrqW7TKULs20TYqZofPQclS5cpcx4BmyR1zHUChC4R%2B8a%2BAtTgXZ77N47Q9lE3ftPgpT7FVAzTY39R%2BM%2B0ypDTdIGD6h1yKD4IVTd2hzqilNWTRhuYFrTY%2F3uUargnnkL14HR0OfsWD%2FUg2qV0Lf%2BSUHZ6kl8r6XhYuQyBJzBzlWYEXoZduU9MSAOeMPfq68wGOqUBo3QcXcmmZBxdnZx5pPIUl%2BCQ76V4qbqUygN7f9e%2FG2ypa4JLs1SP1IQ4414w47ThlddBR3aw498sPcsyLFGtfuAxtnmYg6N46NuRJMbEPF79RZzGlIpENeBR79tjzaJr%2FpDv%2FDL4D8uMj1GEDE2BSpkYTl2iUBzl9IhSbfb%2FzAwZu3NQ9US5L5NoGdDc4KCaAO7heexMLlkAQKG0zYTmTERvddfD&X-Amz-Signature=5735dc6a1e2347f6bae01524e34873184d75ffcbd3b12659f9d95626a2097692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 自动装箱与拆箱了解吗？原理是什么？


什么是自动拆装箱？

- 装箱：将基本类型用它们对应的引用类型包装起来；
- 拆箱：将包装类型转换为基本数据类型；

```java
Integer i = 10;  //装箱
int n = i;   //拆箱
```


从字节码中，我们发现装箱其实就是调用了 包装类的`valueOf()`方法，拆箱其实就是调用了 `xxxValue()`方法。因此，

- `Integer i = 10` 等价于 `Integer i = Integer.valueOf(10)`
- `int n = i` 等价于 `int n = i.intValue()`

注意：如果频繁拆装箱的话，也会严重影响系统的性能。我们应该尽量避免不必要的拆装箱操作。


### 如何解决浮点数运算的精度丢失问题？


`BigDecimal` 可以实现对浮点数的运算，不会造成精度丢失。通常情况下，大部分需要浮点数精确运算结果的业务场景（比如涉及到钱的场景）都是通过 `BigDecimal` 来做的。


```java
BigDecimal a = new BigDecimal("1.0");
BigDecimal b = new BigDecimal("0.9");
BigDecimal c = new BigDecimal("0.8");

BigDecimal x = a.subtract(b);
BigDecimal y = b.subtract(c);

System.out.println(x); /* 0.1 */
System.out.println(y); /* 0.1 */
System.out.println(Objects.equals(x, y)); /* true */
```


### 超过 long 整型的数据应该如何表示？


基本数值类型都有一个表达范围，如果超过这个范围就会有数值溢出的风险。


在 Java 中，64 位 long 整型是最大的整数类型。


```java
long l = Long.MAX_VALUE;
System.out.println(l + 1); // -9223372036854775808
System.out.println(l + 1 == Long.MIN_VALUE); // true
```


`BigInteger` 内部使用 `int[]` 数组来存储任意大小的整形数据。


相对于常规整数类型的运算来说，`BigInteger` 运算的效率会相对较低。


## 变量


### 成员变量与局部变量的区别？

- **语法形式**：从语法形式上看，成员变量是属于类的，而局部变量是在代码块或方法中定义的变量或是方法的参数；成员变量可以被 `public`,`private`,`static` 等修饰符所修饰，而局部变量不能被访问控制修饰符及 `static` 所修饰；但是，成员变量和局部变量都能被 `final` 所修饰。
- **存储方式**：从变量在内存中的存储方式来看，如果成员变量是使用 `static` 修饰的，那么这个成员变量是属于类的，如果没有使用 `static` 修饰，这个成员变量是属于实例的。而对象存在于堆内存，局部变量则存在于栈内存。
- **生存时间**：从变量在内存中的生存时间上看，成员变量是对象的一部分，它随着对象的创建而存在，而局部变量随着方法的调用而自动生成，随着方法的调用结束而消亡。
- **默认值**：从变量是否有默认值来看，成员变量如果没有被赋初始值，则会自动以类型的默认值而赋值（一种情况例外:被 `final` 修饰的成员变量也必须显式地赋值），而局部变量则不会自动赋值。

**为什么成员变量有默认值？**

1. 先不考虑变量类型，如果没有默认值会怎样？变量存储的是内存地址对应的任意随机值，程序读取该值运行会出现意外。
2. 默认值有两种设置方式：手动和自动，根据第一点，没有手动赋值一定要自动赋值。成员变量在运行时可借助反射等方法手动赋值，而局部变量不行。
3. 对于编译器（javac）来说，局部变量没赋值很好判断，可以直接报错。而成员变量可能是运行时赋值，无法判断，误报“没默认值”又会影响用户体验，所以采用自动赋默认值。

### 静态变量有什么作用？


静态变量也就是被 `static` 关键字修饰的变量。它可以被类的所有实例共享，无论一个类创建了多少个对象，它们都共享同一份静态变量。也就是说，静态变量只会被分配一次内存，即使创建多个对象，这样可以节省内存。


静态变量是通过类名来访问的，例如`StaticVariableExample.staticVar`（如果被 `private`关键字修饰就无法这样访问了）。


```java
public class StaticVariableExample {
    // 静态变量
    public static int staticVar = 0;
}
```


通常情况下，静态变量会被 `final` 关键字修饰成为常量。


### 字符型常量和字符串常量的区别?

- **形式** : 字符常量是单引号引起的一个字符，字符串常量是双引号引起的 0 个或若干个字符。
- **含义** : 字符常量相当于一个整型值( ASCII 值),可以参加表达式运算; 字符串常量代表一个地址值(该字符串在内存中存放位置)。
- **占内存大小**：字符常量只占 2 个字节; 字符串常量占若干个字节。

注意 `char` 在 Java 中占两个字节。


字符型常量和字符串常量代码示例：


```java
public class StringExample {
    // 字符型常量
    public static final char LETTER_A = 'A';

    // 字符串常量
    public static final String GREETING_MESSAGE = "Hello, world!";
    public static void main(String[] args) {
        System.out.println("字符型常量占用的字节数为："+Character.BYTES);
        // 2
        System.out.println("字符串常量占用的字节数为："+GREETING_MESSAGE.getBytes().length);
        // 13
    }
}
```


## 方法


### 什么是方法的返回值?方法有哪几种类型？


**方法的返回值** 是指我们获取到的某个方法体中的代码执行后产生的结果！（前提是该方法可能产生结果）。返回值的作用是接收出结果，使得它可以用于其他的操作！


我们可以按照方法的返回值和参数类型将方法分为下面这几种：

1. **无参数无返回值的方法**

    ```java
    public void f1() {
        //......
    }
    // 下面这个方法也没有返回值，虽然用到了 return
    public void f(int a) {
        if (...) {
            // 表示结束方法的执行,下方的输出语句不会执行
            return;
        }
        System.out.println(a);
    }
    ```

2. **有参数无返回值的方法**

    ```java
    public void f2(Parameter 1, ..., Parameter n) {
        //......
    }
    ```

3. **有返回值无参数的方法**

    ```java
    public int f3() {
        //......
        return x;
    }
    ```

4. **有返回值有参数的方法**

    ```java
    public int f4(int a, int b) {
        return a * b;
    }
    ```


### 静态方法为什么不能调用非静态成员?


这个需要结合 JVM 的相关知识，主要原因如下：

1. 静态方法是属于类的，在类加载的时候就会分配内存，可以通过类名直接访问。而非静态成员属于实例对象，只有在对象实例化之后才存在，需要通过类的实例对象去访问。
2. 在类的非静态成员不存在的时候静态方法就已经存在了，此时调用在内存中还不存在的非静态成员，属于非法操作。

```java
public class Example {
    // 定义一个字符型常量
    public static final char LETTER_A = 'A';

    // 定义一个字符串常量
    public static final String GREETING_MESSAGE = "Hello, world!";

    public static void main(String[] args) {
        // 输出字符型常量的值
        System.out.println("字符型常量的值为：" + LETTER_A);

        // 输出字符串常量的值
        System.out.println("字符串常量的值为：" + GREETING_MESSAGE);
    }
}
```


### 静态方法和实例方法有何不同？


**1、调用方式**


在外部调用静态方法时，可以使用 `类名.方法名` 的方式，也可以使用 `对象.方法名` 的方式，而实例方法只有后面这种方式。也就是说，**调用静态方法可以无需创建对象** 。


不过，需要注意的是一般不建议使用 `对象.方法名` 的方式来调用静态方法。这种方式非常容易造成混淆，静态方法不属于类的某个对象而是属于这个类。


因此，一般建议使用 `类名.方法名` 的方式来调用静态方法。


```java
public class Person {
    public void method() {
      //......
    }

    public static void staicMethod(){
      //......
    }
    public static void main(String[] args) {
        Person person = new Person();
        // 调用实例方法
        person.method();
        // 调用静态方法
        Person.staicMethod()
    }
}
```


**2、访问类成员是否存在限制**


静态方法在访问本类的成员时，只允许访问静态成员（即静态成员变量和静态方法），不允许访问实例成员（即实例成员变量和实例方法），而实例方法不存在这个限制。


### **重载和重写有什么区别？**

> 重载就是同样的一个方法能够根据输入数据的不同，做出不同的处理
>
> 重写就是当子类继承自父类的相同方法，输入数据一样，但要做出有别于父类的响应时，你就要覆盖父类方法
>
>

### **重载**


发生在同一个类中（或者父类和子类之间），方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问修饰符可以不同。


《Java 核心技术》这本书是这样介绍重载的：

> 如果多个方法(比如 StringBuilder 的构造方法)有相同的名字、不同的参数， 便产生了重载。
>
> ```java
> StringBuilder sb = new StringBuilder();
> StringBuilder sb2 = new StringBuilder("HelloWorld");
> ```
>
>
> 编译器必须挑选出具体执行哪个方法，它通过用各个方法给出的参数类型与特定方法调用所使用的值类型进行匹配来挑选出相应的方法。 如果编译器找不到匹配的参数， 就会产生编译时错误， 因为根本不存在匹配， 或者没有一个比其他的更好(这个过程被称为重载解析(overloading resolution))。
>
>
> Java 允许重载任何方法， 而不只是构造器方法。
>
>

综上：重载就是同一个类中多个同名方法根据不同的传参来执行不同的逻辑处理。


### **重写**


重写发生在运行期，是子类对父类的允许访问的方法的实现过程进行重新编写。

1. 方法名、参数列表必须相同，子类方法返回值类型应比父类方法返回值类型更小或相等，抛出的异常范围小于等于父类，访问修饰符范围大于等于父类。
2. 如果父类方法访问修饰符为 `private/final/static` 则子类就不能重写该方法，但是被 `static` 修饰的方法能够被再次声明。
3. 构造方法无法被重写

综上：**重写就是子类对父类方法的重新改造，外部样子不能改变，内部逻辑可以改变。**


| 区别点   | 重载方法 | 重写方法                             |
| ----- | ---- | -------------------------------- |
| 发生范围  | 同一个类 | 子类                               |
| 参数列表  | 必须修改 | 一定不能修改                           |
| 返回类型  | 可修改  | 子类方法返回值类型应比父类方法返回值类型更小或相等        |
| 异常    | 可修改  | 子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等； |
| 访问修饰符 | 可修改  | 一定不能做更严格的限制（可以降低限制）              |
| 发生阶段  | 编译期  | 运行期                              |


**方法的重写要遵循“两同两小一大”**

- “两同”即方法名相同、形参列表相同；
- “两小”指的是子类方法返回值类型应比父类方法返回值类型更小或相等，子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等；
- “一大”指的是子类方法的访问权限应比父类方法的访问权限更大或相等。
- 如果方法的返回类型是 void 和基本数据类型，则返回值重写时不可修改。但是如果方法的返回值是引用类型，重写时是可以返回该引用类型的子类的。

### **什么是可变长参数？**


从 Java5 开始，Java 支持定义可变长参数，所谓可变长参数就是允许在调用方法时传入不定长度的参数。就比如下面的这个 `printVariable` 方法就可以接受 0 个或者多个参数。


```java
public static void method1(String... args) {
//......}
```


另外，可变参数只能作为函数的**最后一个参数**，但其前面可以有也可以没有任何其他参数。


```java
public static void method2(String arg1, String... args) {
//......}
```


**遇到方法重载的情况怎么办呢？会优先匹配固定参数还是可变参数的方法呢？**


答案是会优先匹配固定参数的方法，因为固定参数的方法匹配度更高


另外，Java 的可变参数编译后实际会被转换成一个数组


# 面向对象基础


## 面向对象和面向过程的区别


两者的主要区别在于解决问题的方式不同：

1. 面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。
2. 面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。

另外，面向对象开发的程序一般更易维护、易复用、易扩展。


## 创建一个对象用什么运算符?对象实体与对象引用有何不同?


new 运算符，new 创建对象实例（对象实例在堆内存中），对象引用指向对象实例（对象引用存放在栈内存中）。

- 一个对象引用可以指向 0 个或 1 个对象；
- 一个对象可以有 n 个引用指向它。

## 对象的相等和引用相等的区别

- 对象的相等一般比较的是内存中存放的内容是否相等。
- 引用相等一般比较的是他们指向的内存地址是否相等。

## 如果一个类没有声明构造方法，该程序能正确执行吗?


构造方法是一种特殊的方法，主要作用是完成对象的初始化工作。


如果一个类没有声明构造方法，也可以执行！因为一个类即使没有声明构造方法也会有默认的不带参数的构造方法。如果我们自己添加了类的构造方法（无论是否有参），Java 就不会添加默认的无参数的构造方法了。


## 构造方法有哪些特点？是否可被 override?


构造方法特点如下：

- 名字与类名相同。
- 没有返回值，但不能用 void 声明构造函数。
- 生成类的对象时自动执行，无需调用。

构造方法不能被 override（重写）,但是可以 overload（重载）,所以你可以看到一个类中有多个构造函数的情况。


## 面向对象三大特征

1. 封装

    封装是指把一个对象的状态信息（也就是属性）隐藏在对象内部，不允许外部对象直接访问对象的内部信息。但是可以提供一些可以被外界访问的方法来操作属性。如果属性不想被外界访问，我们大可不必提供方法给外界访问。但是如果一个类没有提供给外界访问的方法，那么这个类也没有什么意义了。

2. 继承

    不同类型的对象，相互之间经常有一定数量的共同点。继承是使用已存在的类的定义作为基础建立新类的技术，新类的定义可以增加新的数据或新的功能，也可以用父类的功能，但不能选择性地继承父类。通过使用继承，可以快速地创建新的类，可以提高代码的重用，程序的可维护性，节省大量创建新类的时间 ，提高我们的开发效率。

    - 子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，只是拥有。
    - 子类可以拥有自己属性和方法，即子类可以对父类进行扩展。
    - 子类可以用自己的方式实现父类的方法。（以后介绍）。
3. 多态

    多态，顾名思义，表示一个对象具有多种的状态，具体表现为父类的引用指向子类的实例。


    多态的特点:

    - 对象类型和引用类型之间具有继承（类）/实现（接口）的关系；
    - 引用类型变量发出的方法调用的到底是哪个类中的方法，必须在程序运行期间才能确定；
    - 多态不能调用“只在子类存在但在父类不存在”的方法；
    - 如果子类重写了父类的方法，真正执行的是子类覆盖的方法，如果子类没有覆盖父类的方法，执行的是父类的方法。

## 接口和抽象类有什么共同点和区别？


共同点：

- 都不能被实例化。
- 都可以包含抽象方法。
- 都可以有默认实现的方法（Java 8 可以用 default 关键字在接口中定义默认方法）。

区别：

- 接口主要用于对类的行为进行约束，你实现了某个接口就具有了对应的行为。抽象类主要用于代码复用，强调的是所属关系。
- 一个类只能继承一个类，但是可以实现多个接口。
- 接口中的成员变量只能是 public static final 类型的，不能被修改且必须有初始值，而抽象类的成员变量默认 default，可在子类中被重新定义，也可被重新赋值。

## 深拷贝和浅拷贝区别了解吗？什么是引用拷贝？

- 浅拷贝：浅拷贝会在堆上创建一个新的对象（区别于引用拷贝的一点），不过，如果原对象内部的属性是引用类型的话，浅拷贝会直接复制内部对象的引用地址，也就是说拷贝对象和原对象共用同一个内部对象。
- 深拷贝：深拷贝会完全复制整个对象，包括这个对象所包含的内部对象。

![image.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image.png)


# Object


## Object 类的常见方法有哪些？


Object 类是一个特殊的类，是所有类的父类。它主要提供了以下 11 个方法：


```java
/**
 * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
 */
public final native Class<?> getClass()
/**
 * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
 */
public native int hashCode()
/**
 * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
 */
public boolean equals(Object obj)
/**
 * native 方法，用于创建并返回当前对象的一份拷贝。
 */
protected native Object clone() throws CloneNotSupportedException
/**
 * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
 */
public String toString()
/**
 * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
 */
public final native void notify()
/**
 * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
 */
public final native void notifyAll()
/**
 * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
 */
public final native void wait(long timeout) throws InterruptedException
/**
 * 多了 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 纳秒。。
 */
public final void wait(long timeout, int nanos) throws InterruptedException
/**
 * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
 */
public final void wait() throws InterruptedException
/**
 * 实例被垃圾回收器回收的时候触发的操作
 */
protected void finalize() throws Throwable { }
```


## == 和 equals() 的区别


== 对于基本类型和引用类型的作用效果是不同的：

- 对于基本数据类型来说，== 比较的是值。
- 对于引用数据类型来说，== 比较的是对象的内存地址。
> 因为 Java 只有值传递，所以，对于 == 来说，不管是比较基本数据类型，还是引用数据类型的变量，其本质比较的都是值，只是引用类型变量存的值是对象的地址。

equals() 不能用于判断基本数据类型的变量，只能用来判断两个对象是否相等。equals()方法存在于Object类中，而Object类是所有类的直接或间接父类，因此所有的类都有equals()方法。


Object 类 equals() 方法：


```java
public boolean equals(Object obj) {
     return (this == obj);
}
```


equals() 方法存在两种使用情况：

- 类没有重写 equals()方法：通过equals()比较该类的两个对象时，等价于通过“==”比较这两个对象，使用的默认是 Object类equals()方法。
- 类重写了 equals()方法：一般我们都重写 equals()方法来比较两个对象中的属性是否相等；若它们的属性相等，则返回 true(即，认为这两个对象相等)。

当创建 String 类型的对象时，虚拟机会在常量池中查找有没有已经存在的值和要创建的值相同的对象，如果有就把它赋给当前引用。如果没有就在常量池中重新创建一个 String 对象。


## hashCode() 有什么用？


hashCode() 的作用是获取哈希码（int 整数），也称为散列码。这个哈希码的作用是确定该对象在哈希表中的索引位置。


hashCode() 定义在 JDK 的 Object 类中，这就意味着 Java 中的任何类都包含有 hashCode() 函数。另外需要注意的是：Object 的 hashCode() 方法是本地方法，也就是用 C 语言或 C++ 实现的。

> 注意：该方法在 Oracle OpenJDK8 中默认是 "使用线程局部状态来实现 Marsaglia's xor-shift 随机数生成", 并不是 "地址" 或者 "地址转换而来", 不同 JDK/VM 可能不同在 Oracle OpenJDK8 中有六种生成方式 (其中第五种是返回地址), 通过添加 VM 参数: -XX:hashCode=4 启用第五种。参考源码:
> - [https://hg.openjdk.org/jdk8u/jdk8u/hotspot/file/87ee5ee27509/src/share/vm/runtime/globals.hpp](https://hg.openjdk.org/jdk8u/jdk8u/hotspot/file/87ee5ee27509/src/share/vm/runtime/globals.hpp)（1127 行）
> - [https://hg.openjdk.org/jdk8u/jdk8u/hotspot/file/87ee5ee27509/src/share/vm/runtime/synchronizer.cpp](https://hg.openjdk.org/jdk8u/jdk8u/hotspot/file/87ee5ee27509/src/share/vm/runtime/synchronizer.cpp)（537 行开始）
>

散列表存储的是键值对(key-value)，它的特点是：能根据“键”快速的检索出对应的“值”。这其中就利用到了散列码！（可以快速找到所需要的对象）


## 为什么要有 hashCode？


我们以“HashSet 如何检查重复”为例子来说明为什么要有 hashCode？

> 当你把对象加入 HashSet 时，HashSet 会先计算对象的 hashCode 值来判断对象加入的位置，同时也会与其他已经加入的对象的 hashCode 值作比较，如果没有相符的 hashCode，HashSet 会假设对象没有重复出现。  
> 但是如果发现有相同 hashCode 值的对象，这时会调用 equals() 方法来检查 hashCode 相等的对象是否真的相同。  
> 如果两者相同，HashSet 就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。  
> 这样我们就大大减少了 equals 的次数，相应就大大提高了执行速度。

其实， hashCode() 和 equals()都是用于比较两个对象是否相等。


**那为什么 JDK 还要同时提供这两个方法呢？**


这是因为在一些容器（比如 HashMap、HashSet）中，有了 hashCode() 之后，判断元素是否在对应容器中的效率会更高（参考添加元素进HashSet的过程）！


我们在前面也提到了添加元素进HashSet的过程，如果 HashSet 在对比的时候，同样的 hashCode 有多个对象，它会继续使用 equals() 来判断是否真的相同。也就是说 hashCode 帮助我们大大缩小了查找成本。


**那为什么不只提供 hashCode() 方法呢？**


这是因为两个对象的hashCode 值相等并不代表两个对象就相等。


**那为什么两个对象有相同的 hashCode 值，它们也不一定是相等的？**


因为 hashCode() 所使用的哈希算法也许刚好会让多个对象传回相同的哈希值。越糟糕的哈希算法越容易碰撞，但这也与数据值域分布的特性有关（所谓哈希碰撞也就是指的是不同的对象得到相同的 hashCode)。

- 如果两个对象的hashCode 值相等，那这两个对象不一定相等（哈希碰撞）。
- 如果两个对象的hashCode 值相等并且equals()方法也返回 true，我们才认为这两个对象相等。
- 如果两个对象的hashCode 值不相等，我们就可以直接认为这两个对象不相等。

## 为什么重写 equals() 时必须重写 hashCode() 方法？


因为两个相等的对象的 hashCode 值必须是相等。也就是说如果 equals 方法判断两个对象是相等的，那这两个对象的 hashCode 值也要相等。


如果重写 equals() 时没有重写 hashCode() 方法的话就可能会导致 equals 方法判断是相等的两个对象，hashCode 值却不相等。

- equals 方法判断两个对象是相等的，那这两个对象的 hashCode 值也要相等。
- 两个对象有相同的 hashCode 值，他们也不一定是相等的（哈希碰撞）。

# String


## String、StringBuffer、StringBuilder 的区别？

- 可变性

    String 是不可变的（后面会详细分析原因）。


    StringBuilder 与 StringBuffer 都继承自 AbstractStringBuilder 类，在 AbstractStringBuilder 中也是使用字符数组保存字符串，不过没有使用 final 和 private 关键字修饰，最关键的是这个 AbstractStringBuilder 类还提供了很多修改字符串的方法比如 append 方法。


    ```java
    abstract class AbstractStringBuilder implements Appendable, CharSequence {
        char[] value;
        public AbstractStringBuilder append(String str) {
            if (str == null)
                return appendNull();
            int len = str.length();
            ensureCapacityInternal(count + len);
            str.getChars(0, len, value, count);
            count += len;
            return this;
        }
        //...
    }
    ```

- 线程安全性

    String 中的对象是不可变的，也就可以理解为常量，线程安全。AbstractStringBuilder 是 StringBuilder 与 StringBuffer 的公共父类，定义了一些字符串的基本操作，如 expandCapacity、append、insert、indexOf 等公共方法。StringBuffer 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。StringBuilder 并没有对方法进行加同步锁，所以是非线程安全的。

- 性能

    每次对 String 类型进行改变的时候，都会生成一个新的 String 对象，然后将指针指向新的 String 对象。StringBuffer 每次都会对 StringBuffer 对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用 StringBuilder 相比使用 StringBuffer 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。


对于三者使用的总结：

- 操作少量的数据: 适用 String
- 单线程操作字符串缓冲区下操作大量数据: 适用 StringBuilder
- 多线程操作字符串缓冲区下操作大量数据: 适用 StringBuffer

## String 为什么是不可变的?


String 类中使用 final 关键字修饰字符数组来保存字符串,被 final 关键字修饰的类不能被继承，修饰的方法不能被重写，修饰的变量是基本数据类型则值不能改变，修饰的变量是引用类型则不能再指向其他对象。

1. 保存字符串的数组被 final 修饰且为私有的，并且String 类没有提供/暴露修改这个字符串的方法。
2. String 类被 final 修饰导致其不能被继承，进而避免了子类破坏 String 不可变。
> 在 Java 9 之后，String、StringBuilder 与 StringBuffer 的实现改用 byte 数组存储字符串。
>
> 新版的 String 其实支持两个编码方案：Latin-1 和 UTF-16。如果字符串中包含的汉字没有超过 Latin-1 可表示范围内的字符，那就会使用 Latin-1 作为编码方案。Latin-1 编码方案下，byte 占一个字节(8 位)，char 占用 2 个字节（16），byte 相较 char 节省一半的内存空间。
> 如果字符串中包含的汉字超过 Latin-1 可表示范围内的字符，byte 和 char 所占用的空间是一样的。
>
>

## 字符串拼接用“+” 还是 StringBuilder?


Java 语言本身并不支持运算符重载，“+”和“+=”是专门为 String 类重载过的运算符，也是 Java 中仅有的两个重载过的运算符。


字符串对象通过“+”的字符串拼接方式，实际上是通过 StringBuilder 调用 append() 方法实现的，拼接完成之后调用 toString() 得到一个 String 对象 。


不过，在循环内使用“+”进行字符串的拼接的话，存在比较明显的缺陷：编译器不会创建单个 StringBuilder 以复用，会导致创建过多的 StringBuilder 对象。


不过，使用 “+” 进行字符串拼接会产生大量的临时对象的问题在 JDK9 中得到了解决。在 JDK9 当中，字符串相加 “+” 改为了用动态方法 makeConcatWithConstants() 来实现，而不是大量的 StringBuilder 了。


## String#equals() 和 Object#equals() 有何区别？


String 中的 equals 方法是被重写过的，比较的是 String 字符串的值是否相等。 Object 的 equals 方法是比较的对象的内存地址。


## 字符串常量池的作用了解吗？


字符串常量池 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。


```java
// 在堆中创建字符串对象”ab“
// 将字符串对象”ab“的引用保存在字符串常量池中
String aa = "ab";
// 直接返回字符串常量池中字符串对象”ab“的引用
String bb = "ab";
System.out.println(aa==bb);// true
```


## String s1 = new String("abc");这句话创建了几个字符串对象？


会创建 1 或 2 个字符串对象。

1. 如果字符串常量池中不存在字符串对象“abc”的引用，那么它会在堆上创建两个字符串对象，其中一个字符串对象的引用会被保存在字符串常量池中。
2. 如果字符串常量池中已存在字符串对象“abc”的引用，则只会在堆中创建 1 个字符串对象“abc”。

## String#intern 方法有什么作用?


String.intern() 是一个 native（本地）方法，其作用是将指定的字符串对象的引用保存在字符串常量池中，可以简单分为两种情况：

1. 如果字符串常量池中保存了对应的字符串对象的引用，就直接返回该引用。
2. 如果字符串常量池中没有保存了对应的字符串对象的引用，那就在常量池中创建一个指向该字符串对象的引用并返回。

```java
// 在堆中创建字符串对象”Java“
// 将字符串对象”Java“的引用保存在字符串常量池中
String s1 = "Java";
// 直接返回字符串常量池中字符串对象”Java“对应的引用
String s2 = s1.intern();
// 会在堆中在单独创建一个字符串对象
String s3 = new String("Java");
// 直接返回字符串常量池中字符串对象”Java“对应的引用
String s4 = s3.intern();
// s1 和 s2 指向的是堆中的同一个对象
System.out.println(s1 == s2); // true
// s3 和 s4 指向的是堆中不同的对象
System.out.println(s3 == s4); // false
// s1 和 s4 指向的是堆中的同一个对象
System.out.println(s1 == s4); //true
```


## String 类型的变量和常量做“+”运算时发生了什么？


对于编译期可以确定值的字符串，也就是常量字符串 ，jvm 会将其存入字符串常量池。并且，字符串常量拼接得到的字符串常量在编译阶段就已经被存放字符串常量池，这个得益于编译器的优化。


在编译过程中，Javac 编译器（下文中统称为编译器）会进行一个叫做 常量折叠(Constant Folding) 的代码优化


常量折叠会把常量表达式的值求出来作为常量嵌在最终生成的代码中，这是 Javac 编译器会对源代码做的极少量优化措施之一(代码优化几乎都在即时编译器中进行)。


对于 `String str3 = "str" + "ing";` 编译器会给你优化成 `String str3 = "string";` 。


并不是所有的常量都会进行折叠，只有编译器在程序编译期就可以确定值的常量才可以：

- 基本数据类型( byte、boolean、short、char、int、float、long、double)以及字符串常量。
- final 修饰的基本数据类型和字符串变量
- 字符串通过 “+”拼接得到的字符串、基本数据类型之间算数运算（加减乘除）、基本数据类型的位运算（<<、>>、>>> ）

引用的值在程序编译期是无法确定的，编译器无法对其进行优化。


对象引用和“+”的字符串拼接方式，实际上是通过 StringBuilder 调用 append() 方法实现的，拼接完成之后调用 toString() 得到一个 String 对象 。


被 final 关键字修饰之后的 String 会被编译器当做常量来处理，编译器在程序编译期就可以确定它的值，其效果就相当于访问常量。


如果 ，编译器在运行时才能知道其确切值的话，就无法对其优化。


# 异常


## Java 异常类层次结构图概览


![image-1.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-1.png)


## Exception 和 Error 有什么区别？


在 Java 中，所有的异常都有一个共同的祖先 java.lang 包中的 Throwable 类。Throwable 类有两个重要的子类:

- Exception :程序本身可以处理的异常，可以通过 catch 来进行捕获。Exception 又可以分为 Checked Exception (受检查异常，必须处理) 和 Unchecked Exception (不受检查异常，可以不处理)。
- Error：Error 属于程序无法处理的错误 ，我们没办法通过 catch 来进行捕获不建议通过catch捕获 。例如 Java 虚拟机运行错误（Virtual MachineError）、虚拟机内存不够错误(OutOfMemoryError)、类定义错误（NoClassDefFoundError）等 。这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。

## Checked Exception 和 Unchecked Exception 有什么区别？


Checked Exception 即 受检查异常 ，Java 代码在编译过程中，如果受检查异常没有被 catch或者throws 关键字处理的话，就没办法通过编译。


除了RuntimeException及其子类以外，其他的Exception类及其子类都属于受检查异常 。常见的受检查异常有：IO 相关的异常、ClassNotFoundException、SQLException...。


**Unchecked Exception** 即 不受检查异常 ，Java 代码在编译过程中 ，我们即使不处理不受检查异常也可以正常通过编译。


RuntimeException 及其子类都统称为非受检查异常，常见的有（建议记下来，日常开发中会经常用到）：

- NullPointerException(空指针错误)
- IllegalArgumentException(参数错误比如方法入参类型错误)
- NumberFormatException（字符串转换为数字格式错误，IllegalArgumentException的子类）
- ArrayIndexOutOfBoundsException（数组越界错误）
- ClassCastException（类型转换错误）
- ArithmeticException（算术错误）
- SecurityException （安全错误比如权限不够）
- UnsupportedOperationException(不支持的操作错误比如重复创建同一用户)

## Throwable 类常用方法有哪些？

- String getMessage(): 返回异常发生时的简要描述
- String toString(): 返回异常发生时的详细信息
- String getLocalizedMessage(): 返回异常对象的本地化信息。使用 Throwable 的子类覆盖这个方法，可以生成本地化信息。如果子类没有覆盖该方法，则该方法返回的信息与 getMessage()返回的结果相同
- void printStackTrace(): 在控制台上打印 Throwable 对象封装的异常信息

## try-catch-finally 如何使用？

- try块：用于捕获异常。其后可接零个或多个 catch 块，如果没有 catch 块，则必须跟一个 finally 块。
- catch块：用于处理 try 捕获到的异常。
- finally 块：无论是否捕获或处理异常，finally 块里的语句都会被执行。当在 try 块或 catch 块中遇到 return 语句时，finally 语句块将在方法返回之前被执行。
> 注意：不要在 finally 语句块中使用 return!  
> 当 try 语句和 finally 语句中都有 return 语句时，try 语句块中的 return 语句会被忽略。这是因为 try 语句中的 return 返回值会先被暂存在一个本地变量中，当执行到 finally 语句中的 return 之后，这个本地变量的值就变为了 finally 语句中的 return 返回值。

## finally 中的代码一定会执行吗？


不一定的！在某些情况下，finally 中的代码不会被执行。


就比如说 finally 之前虚拟机被终止运行的话，finally 中的代码就不会被执行。


另外，在以下 2 种特殊情况下，finally 块的代码也不会被执行：

- 程序所在的线程死亡。
- 关闭 CPU。

## 如何使用 try-with-resources 代替try-catch-finally？

1. 适用范围（资源的定义）： 任何实现 java.lang.AutoCloseable或者 java.io.Closeable 的对象
2. 关闭资源和 finally 块的执行顺序： 在 try-with-resources 语句中，任何 catch 或 finally 块在声明的资源关闭后运行

Java 中类似于InputStream、OutputStream、Scanner、PrintWriter等的资源都需要我们调用close()方法来手动关闭，一般情况下我们都是通过try-catch-finally语句来实现这个需求


当然多个资源需要关闭的时候，使用 try-with-resources 实现起来也非常简单，如果你还是用try-catch-finally可能会带来很多问题。


通过使用分号分隔，可以在try-with-resources块中声明多个资源。


## 异常使用有哪些需要注意的地方？

- 不要把异常定义为静态变量，因为这样会导致异常栈信息错乱。每次手动抛出异常，我们都需要手动 new 一个异常对象抛出。
- 抛出的异常信息一定要有意义。
- 建议抛出更加具体的异常比如字符串转换为数字格式错误的时候应该抛出NumberFormatException而不是其父类IllegalArgumentException。
- 使用日志打印异常之后就不要再抛出异常了（两者不要同时存在一段代码逻辑中）

# 泛型


## 什么是泛型？有什么作用？


Java 泛型（Generics） 是 JDK 5 中引入的一个新特性。使用泛型参数，可以增强代码的可读性以及稳定性。


编译器可以对泛型参数进行检测，并且通过泛型参数可以指定传入的对象类型。比如 `ArrayList<Person> persons = new ArrayList<Person>()` 这行代码就指明了该 ArrayList 对象只能传入 Person 对象，如果传入其他类型的对象就会报错。


```java
ArrayList<E> extends AbstractList<E>
```


并且，原生 List 返回类型是 Object ，需要手动转换类型才能使用，使用泛型后编译器自动转换。


## 泛型的使用方式有哪几种？


泛型一般有三种使用方式:泛型类、泛型接口、泛型方法。

1. 泛型类

    ```java
    //此处T可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型
    //在实例化泛型类时，必须指定T的具体类型
    public class Generic<T>{
    
        private T key;
    
        public Generic(T key) {
            this.key = key;
        }
    
        public T getKey(){
            return key;
        }
    }
    ```

2. 泛型接口

    ```java
    public interface Generator<T> {
        public T next();
    }
    ```

3. 泛型方法

    ```java
    public static < E > void printArray( E[] inputArray ) {
         for ( E element : inputArray ){
            System.out.printf( "%s ", element );
         }
         System.out.println();
    }
    ```

> 注意: public static < E > void printArray( E[] inputArray ) 一般被称为静态泛型方法;在 java 中泛型只是一个占位符，必须在传递类型后才能使用。  
> 类在实例化时才能真正的传递类型参数，由于静态方法的加载先于类的实例化，也就是说类中的泛型还没有传递真正的类型参数，静态的方法的加载就已经完成了，所以静态泛型方法是没有办法使用类上声明的泛型的。只能使用自己声明的 <E>

## 项目中哪里用到了泛型？

- 自定义接口通用返回结果 `CommonResult<T>` 通过参数 T 可根据具体的返回类型动态指定结果的数据类型
- 定义 Excel 处理类 `ExcelUtil<T>` 用于动态指定 Excel 导出的数据类型
- 构建集合工具类（参考 `Collections` 中的 `sort`, `binarySearch` 方法）。

# 反射


## 何谓反射？


如果说大家研究过框架的底层原理或者咱们自己写过框架的话，一定对反射这个概念不陌生。反射之所以被称为框架的灵魂，主要是因为它赋予了我们在运行时分析类以及执行类中方法的能力。通过反射你可以获取任意一个类的所有属性和方法，你还可以调用这些方法和属性。


## 反射的优缺点？


反射可以让我们的代码更加灵活、为各种框架提供开箱即用的功能提供了便利。


不过，反射让我们在运行时有了分析操作类的能力的同时，也增加了安全问题，比如可以无视泛型参数的安全检查（泛型参数的安全检查发生在编译时）。另外，反射的性能也要稍差点，不过，对于框架来说实际是影响不大的。


## 反射的应用场景？


像咱们平时大部分时候都是在写业务代码，很少会接触到直接使用反射机制的场景。但是！这并不代表反射没有用。相反，正是因为反射，你才能这么轻松地使用各种框架。像 Spring/Spring Boot、MyBatis 等等框架中都大量使用了反射机制。


这些框架中也大量使用了动态代理，而动态代理的实现也依赖反射。


比如下面是通过 JDK 实现动态代理的示例代码，其中就使用了反射类 Method 来调用指定的方法。


```java
public class DebugInvocationHandler implements InvocationHandler {
    /**
     * 代理类中的真实对象
     */
    private final Object target;

    public DebugInvocationHandler(Object target) {
        this.target = target;
    }

    public Object invoke(Object proxy, Method method, Object[] args) throws InvocationTargetException, IllegalAccessException {
        System.out.println("before method " + method.getName());
        Object result = method.invoke(target, args);
        System.out.println("after method " + method.getName());
        return result;
    }
}
```


另外，像 Java 中的一大利器 注解 的实现也用到了反射。


为什么你使用 Spring 的时候 ，一个@Component注解就声明了一个类为 Spring Bean 呢？为什么你通过一个 @Value注解就读取到配置文件中的值呢？究竟是怎么起作用的呢？


这些都是因为你可以基于反射分析类，然后获取到类/属性/方法/方法的参数上的注解。你获取到注解之后，就可以做进一步的处理。


# 注解


## 何谓注解？


Annotation （注解） 是 Java5 开始引入的新特性，可以看作是一种特殊的注释，主要用于修饰类、方法或者变量，提供某些信息供程序在编译或者运行时使用。


注解本质是一个继承了Annotation 的特殊接口：


```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.SOURCE)
public @interface Override {

}

public interface Override extends Annotation{

}
```


JDK 提供了很多内置的注解（比如 `@Override`、`@Deprecated`），同时，我们还可以自定义注解。


## 注解的解析方法有哪几种？


注解只有被解析之后才会生效，常见的解析方法有两种：

- 编译期直接扫描：编译器在编译 Java 代码的时候扫描对应的注解并处理，比如某个方法使用`@Override` 注解，编译器在编译的时候就会检测当前的方法是否重写了父类对应的方法。
- 运行期通过反射处理：像框架中自带的注解(比如 `Spring` 框架的 `@Value`、`@Component`)都是通过反射来进行处理的。

# SPI


在面向对象的设计原则中，一般推荐模块之间基于接口编程，通常情况下调用方模块是不会感知到被调用方模块的内部具体实现。一旦代码里面涉及具体实现类，就违反了开闭原则。如果需要替换一种实现，就需要修改代码。为了实现在模块装配的时候不用在程序里面动态指明，这就需要一种服务发现机制。Java SPI 就是提供了这样一个机制：为某个接口寻找服务实现的机制。这有点类似 IoC 的思想，将装配的控制权移交到了程序之外。


## 何谓 SPI?


SPI 即 Service Provider Interface ，字面意思就是：“服务提供者的接口”，我的理解是：专门提供给服务提供者或者扩展框架功能的开发者去使用的一个接口。


SPI 将服务接口和具体的服务实现分离开来，将服务调用方和服务实现者解耦，能够提升程序的扩展性、可维护性。修改或者替换服务实现并不需要修改调用方。


很多框架都使用了 Java 的 SPI 机制，比如：Spring 框架、数据库加载驱动、日志接口、以及 Dubbo 的扩展实现等等。


## SPI 和 API 有什么区别？


那 SPI 和 API 有啥区别？


说到 SPI 就不得不说一下 API 了，从广义上来说它们都属于接口，而且很容易混淆。


![image-2.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-2.png)


一般模块之间都是通过接口进行通讯，那我们在服务调用方和服务实现方（也称服务提供者）之间引入一个“接口”。


当实现方提供了接口和实现，我们可以通过调用实现方的接口从而拥有实现方给我们提供的能力，这就是 API ，这种接口和实现都是放在实现方的。


当接口存在于调用方这边时，就是 SPI ，由接口调用方确定接口规则，然后由不同的厂商去根据这个规则对这个接口进行实现，从而提供服务。


## SPI实现-ServiceLoader


Java 中的 SPI 机制就是在每次类加载的时候会先去找到 class 相对目录下的 META-INF 文件夹下的 services 文件夹下的文件，将这个文件夹下面的所有文件先加载到内存中，然后根据这些文件的文件名和里面的文件内容找到相应接口的具体实现类，找到实现类后就可以通过反射去生成对应的对象，保存在一个 list 列表里面，所以可以通过迭代或者遍历的方式拿到对应的实例对象，生成不同的实现。


所以会提出一些规范要求：文件名一定要是接口的全类名，然后里面的内容一定要是实现类的全类名，实现类可以有多个，直接换行就好了，多个实现类的时候，会一个一个的迭代加载。


ServiceLoader 具体实现想要使用 Java 的 SPI 机制是需要依赖 ServiceLoader 来实现的，那么我们接下来看看 ServiceLoader 具体是怎么做的：ServiceLoader 是 JDK 提供的一个工具类， 位于package java.util包下。

> 来自javaGuide的serviceLoader
>
> ```java
> package edu.jiangxuan.up.service;
>
> import java.io.BufferedReader;
> import java.io.InputStream;
> import java.io.InputStreamReader;
> import java.lang.reflect.Constructor;
> import java.net.URL;
> import java.net.URLConnection;
> import java.util.ArrayList;
> import java.util.Enumeration;
> import java.util.List;
>
> public class MyServiceLoader<S> {
>
>     // 对应的接口 Class 模板
>     private final Class<S> service;
>
>     // 对应实现类的 可以有多个，用 List 进行封装
>     private final List<S> providers = new ArrayList<>();
>
>     // 类加载器
>     private final ClassLoader classLoader;
>
>     // 暴露给外部使用的方法，通过调用这个方法可以开始加载自己定制的实现流程。
>     public static <S> MyServiceLoader<S> load(Class<S> service) {
>         return new MyServiceLoader<>(service);
>     }
>
>     // 构造方法私有化
>     private MyServiceLoader(Class<S> service) {
>         this.service = service;
>         this.classLoader = Thread.currentThread().getContextClassLoader();
>         doLoad();
>     }
>
>     // 关键方法，加载具体实现类的逻辑
>     private void doLoad() {
>         try {
>             // 读取所有 jar 包里面 META-INF/services 包下面的文件，这个文件名就是接口名，然后文件里面的内容就是具体的实现类的路径加全类名
>             Enumeration<URL> urls = classLoader.getResources("META-INF/services/" + service.getName());
>             // 挨个遍历取到的文件
>             while (urls.hasMoreElements()) {
>                 // 取出当前的文件
>                 URL url = urls.nextElement();
>                 System.out.println("File = " + url.getPath());
>                 // 建立链接
>                 URLConnection urlConnection = url.openConnection();
>                 urlConnection.setUseCaches(false);
>                 // 获取文件输入流
>                 InputStream inputStream = urlConnection.getInputStream();
>                 // 从文件输入流获取缓存
>                 BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
>                 // 从文件内容里面得到实现类的全类名
>                 String className = bufferedReader.readLine();
>
>                 while (className != null) {
>                     // 通过反射拿到实现类的实例
>                     Class<?> clazz = Class.forName(className, false, classLoader);
>                     // 如果声明的接口跟这个具体的实现类是属于同一类型，（可以理解为Java的一种多态，接口跟实现类、父类和子类等等这种关系。）则构造实例
>                     if (service.isAssignableFrom(clazz)) {
>                         Constructor<? extends S> constructor = (Constructor<? extends S>) clazz.getConstructor();
>                         S instance = constructor.newInstance();
>                         // 把当前构造的实例对象添加到 Provider的列表里面
>                         providers.add(instance);
>                     }
>                     // 继续读取下一行的实现类，可以有多个实现类，只需要换行就可以了。
>                     className = bufferedReader.readLine();
>                 }
>             }
>         } catch (Exception e) {
>             System.out.println("读取文件异常。。。");
>         }
>     }
>
>     // 返回spi接口对应的具体实现类列表
>     public List<S> getProviders() {
>         return providers;
>     }
> }
> ```
>
>

主要的流程就是：

1. 通过 URL 工具类从 jar 包的 /META-INF/services 目录下面找到对应的文件
2. 读取这个文件的名称找到对应的 spi 接口
3. 通过 InputStream 流将文件里面的具体实现类的全类名读取出来
4. 根据获取到的全类名，先判断跟 spi 接口是否为同一类型，如果是的，那么就通过反射的机制构造对应的实例对象
5. 将构造出来的实例对象添加到 Providers 的列表中。

其实不难发现，SPI 机制的具体实现本质上还是通过反射完成的。即：我们按照规定将要暴露对外使用的具体实现类在 META-INF/services/ 文件下声明。


另外，SPI 机制在很多框架中都有应用：Spring 框架的基本原理也是类似的方式。还有 Dubbo 框架提供同样的 SPI 扩展机制，只不过 Dubbo 和 spring 框架中的 SPI 机制具体实现方式跟上面有些细微的区别，不过整体的原理都是一致的。


## SPI 的优缺点？


通过 SPI 机制能够大大地提高接口设计的灵活性，但是 SPI 机制也存在一些缺点，比如：

- 需要遍历加载所有的实现类，不能做到按需加载，这样效率还是相对较低的。
- 当多个 ServiceLoader 同时 load 时，会有并发问题。

# 序列化和反序列化


## 什么是序列化?什么是反序列化?


如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。

- 序列化：将数据结构或对象转换成二进制字节流的过程
- 反序列化：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程

对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。


下面是序列化和反序列化常见应用场景：

- 对象在进行网络传输（比如远程方法调用 RPC 的时候）之前需要先被序列化，接收到序列化的对象之后需要再进行反序列化；
- 将对象存储到文件之前需要进行序列化，将对象从文件中读取出来需要进行反序列化；
- 将对象存储到数据库（如 Redis）之前需要用到序列化，将对象从缓存数据库中读取出来需要反序列化；
- 将对象存储到内存之前需要进行序列化，从内存中读取出来之后需要进行反序列化。

**序列化的主要目的是通过网络传输对象或者说是将对象存储到文件系统、数据库、内存中。**


![image-3.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-3.png)


## 序列化协议对应于 TCP/IP 4 层模型的哪一层？


我们知道网络通信的双方必须要采用和遵守相同的协议。TCP/IP 四层模型是下面这样的，序列化协议属于哪一层呢？


![image-4.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-4.png)


如上图所示，OSI 七层协议模型中，表示层做的事情主要就是对应用层的用户数据进行处理转换为二进制流。反过来的话，就是将二进制流转换成应用层的用户数据。这不就对应的是序列化和反序列化么？


因为，OSI 七层协议模型中的应用层、表示层和会话层对应的都是 TCP/IP 四层模型中的应用层，所以序列化协议属于 TCP/IP 协议应用层的一部分。


## 如果有些字段不想进行序列化怎么办？


对于不想进行序列化的变量，使用 `transient` 关键字修饰。


transient 关键字的作用是：阻止实例中那些用此关键字修饰的的变量序列化；当对象被反序列化时，被 transient 修饰的变量值不会被持久化和恢复。


关于 transient 还有几点注意：

- transient 只能修饰变量，不能修饰类和方法。
- transient 修饰的变量，在反序列化后变量值将会被置成类型的默认值。例如，如果是修饰 int 类型，那么反序列后结果就是 0。
- static 变量因为不属于任何对象(Object)，所以无论有没有 transient 关键字修饰，均不会被序列化。

## 常见序列化协议有哪些？


JDK 自带的序列化方式一般不会用 ，因为序列化效率低并且存在安全问题。比较常用的序列化协议有 Hessian、Kryo、Protobuf、ProtoStuff，这些都是基于二进制的序列化协议。


像 JSON 和 XML 这种属于文本类序列化方式。虽然可读性比较好，但是性能较差，一般不会选择。


## 为什么不推荐使用 JDK 自带的序列化？


我们很少或者说几乎不会直接使用 JDK 自带的序列化方式，主要原因有下面这些原因：

- 不支持跨语言调用 : 如果调用的是其他语言开发的服务的时候就不支持了。
- 性能差：相比于其他序列化框架性能更低，主要原因是序列化之后的字节数组体积较大，导致传输成本加大。
- 存在安全问题：序列化和反序列化本身并不存在问题。但当输入的反序列化的数据可被用户控制，那么攻击者即可通过构造恶意输入，让反序列化产生非预期的对象，在此过程中执行构造的任意代码。

# I/O


## Java IO 流了解吗？


IO 即 Input/Output，输入和输出。数据输入到计算机内存的过程即输入，反之输出到外部存储（比如数据库，文件，远程主机）的过程即输出。数据传输过程类似于水流，因此称为 IO 流。IO 流在 Java 中分为输入流和输出流，而根据数据的处理方式又分为字节流和字符流。


Java IO 流的 40 多个类都是从如下 4 个抽象类基类中派生出来的。

- InputStream/Reader: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。
- OutputStream/Writer: 所有输出流的基类，前者是字节输出流，后者是字符输出流。

## I/O 流为什么要分为字节流和字符流呢?


问题本质想问：不管是文件读写还是网络发送接收，信息的最小存储单元都是字节，那为什么 I/O 流操作要分为字节流操作和字符流操作呢？


个人认为主要有两点原因：

- 字符流是由 Java 虚拟机将字节转换得到的，这个过程还算是比较耗时
- 如果我们不知道编码类型的话，使用字节流的过程中很容易出现乱码问题。

## Java IO 中的设计模式有哪些？


### 装饰器模式


装饰器（Decorator）模式 可以在不改变原有对象的情况下拓展其功能。


装饰器模式通过组合替代继承来扩展原始类的功能，在一些继承关系比较复杂的场景（IO 这一场景各种类的继承关系就比较复杂）更加实用。


对于字节流来说， FilterInputStream （对应输入流）和FilterOutputStream（对应输出流）是装饰器模式的核心，分别用于增强 InputStream 和OutputStream子类对象的功能。


装饰器模式很重要的一个特征，那就是可以对原始类嵌套使用多个装饰器。


为了实现这一效果，装饰器类需要跟原始类继承相同的抽象类或者实现相同的接口。上面介绍到的这些 IO 相关的装饰类和原始类共同的父类是 InputStream 和OutputStream。


### 适配器模式


适配器（Adapter Pattern）模式 主要用于接口互不兼容的类的协调工作，你可以将其联想到我们日常经常使用的电源适配器。


适配器模式中存在被适配的对象或者类称为 适配者(Adaptee) ，作用于适配者的对象或者类称为适配器(Adapter) 。适配器分为对象适配器和类适配器。类适配器使用继承关系来实现，对象适配器使用组合关系来实现。


IO 流中的字符流和字节流的接口不同，它们之间可以协调工作就是基于适配器模式来做的，更准确点来说是对象适配器。通过适配器，我们可以将字节流对象适配成一个字符流对象，这样我们可以直接通过字节流对象来读取或者写入字符数据。


InputStreamReader 和 OutputStreamWriter 就是两个适配器(Adapter)， 同时，它们两个也是字节流和字符流之间的桥梁。InputStreamReader 使用 StreamDecoder （流解码器）对字节进行解码，实现字节流到字符流的转换， OutputStreamWriter 使用StreamEncoder（流编码器）对字符进行编码，实现字符流到字节流的转换。


InputStream 和 OutputStream 的子类是被适配者， InputStreamReader 和 OutputStreamWriter是适配器。

> 适配器模式和装饰器模式有什么区别呢？
> - 装饰器模式
> 更侧重于动态地增强原始类的功能，装饰器类需要跟原始类继承相同的抽象类或者实现相同的接口。并且，装饰器模式支持对原始类嵌套使用多个装饰器
> - 适配器模式
> 更侧重于让接口不兼容而不能交互的类可以一起工作，当我们调用适配器对应的方法时，适配器内部会调用适配者类或者和适配类相关的类的方法，这个过程透明的。就比如说 StreamDecoder （流解码器）和StreamEncoder（流编码器）就是分别基于 InputStream 和 OutputStream 来获取 FileChannel对象并调用对应的 read 方法和 write 方法进行字节数据的读取和写入。
>

### 工厂模式


工厂模式用于创建对象，NIO 中大量用到了工厂模式，比如 Files 类的 newInputStream 方法用于创建 InputStream 对象（静态工厂）、 Paths 类的 get 方法创建 Path 对象（静态工厂）、ZipFileSystem 类（sun.nio包下的类，属于 java.nio 相关的一些内部实现）的 getPath 的方法创建 Path 对象（简单工厂）。


### 观察者模式


NIO 中的文件目录监听服务使用到了观察者模式。


NIO 中的文件目录监听服务基于 WatchService 接口和 Watchable 接口。WatchService 属于观察者，Watchable 属于被观察者。


Watchable 接口定义了一个用于将对象注册到 WatchService（监控服务） 并绑定监听事件的方法 register 。


WatchService 用于监听文件目录的变化，同一个 WatchService 对象能够监听多个文件目录。


常用的监听事件有 3 种：

- StandardWatchEventKinds.ENTRY_CREATE：文件创建。
- StandardWatchEventKinds.ENTRY_DELETE : 文件删除。
- StandardWatchEventKinds.ENTRY_MODIFY : 文件修改。

register 方法返回 WatchKey 对象，通过WatchKey 对象可以获取事件的具体信息比如文件目录下是创建、删除还是修改了文件、创建、删除或者修改的文件的具体名称是什么。


WatchService 内部是通过一个 daemon thread（守护线程）采用定期轮询的方式来检测文件的变化


```java
class PollingWatchService
    extends AbstractWatchService
{
    // 定义一个 daemon thread（守护线程）轮询检测文件变化
    private final ScheduledExecutorService scheduledExecutor;

    PollingWatchService() {
        scheduledExecutor = Executors
            .newSingleThreadScheduledExecutor(new ThreadFactory() {
                 @Override
                 public Thread newThread(Runnable r) {
                     Thread t = new Thread(r);
                     t.setDaemon(true);
                     return t;
                 }});
    }

  void enable(Set<? extends WatchEvent.Kind<?>> events, long period) {
    synchronized (this) {
      // 更新监听事件
      this.events = events;

        // 开启定期轮询
      Runnable thunk = new Runnable() { public void run() { poll(); }};
      this.poller = scheduledExecutor
        .scheduleAtFixedRate(thunk, period, period, TimeUnit.SECONDS);
    }
  }
}
```


## BIO、NIO 和 AIO 的区别？


![20240123211356.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240123211356.png)


# 语法糖


## 什么是语法糖？


语法糖（Syntactic sugar） 代指的是编程语言为了方便程序员开发程序而设计的一种特殊语法，这种语法对编程语言的功能并没有影响。实现相同的功能，基于语法糖写出来的代码往往更简单简洁且更易阅读。


举个例子，Java 中的 for-each 就是一个常用的语法糖，其原理其实就是基于普通的 for 循环和迭代器。


```java
String[] strs = {"JavaGuide", "公众号：JavaGuide", "博客：<https://javaguide.cn/>"};
for (String s : strs) {
    System.out.println(s);
}
```


不过，JVM 其实并不能识别语法糖，Java 语法糖要想被正确执行，需要先通过编译器进行解糖，也就是在程序编译阶段将其转换成 JVM 认识的基本语法。这也侧面说明，Java 中真正支持语法糖的是 Java 编译器而不是 JVM。如果你去看com.sun.tools.javac.main.JavaCompiler的源码，你会发现在compile()中有一个步骤就是调用desugar()，这个方法就是负责解语法糖的实现的。


## Java 中有哪些常见的语法糖？


Java 中最常用的语法糖主要有泛型、自动拆装箱、变长参数、枚举、内部类、增强 for 循环、try-with-resources 语法、lambda 表达式等。
