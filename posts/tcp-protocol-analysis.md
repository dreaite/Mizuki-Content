---
title: '实验4 TCP协议分析'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在了解TCP协议的基本概念和报文结构，分析连接建立和释放过程，掌握使用tcpdump和wireshark进行TCP协议分析的技术。实验通过wget下载网页并抓取数据包，分析TCP报文头部及其字段，探讨三次握手和四次挥手的过程，最后总结了实验中的问题及解决方法，并提高了对IP协议和TCP报文结构的理解。'
permalink: 'tcp-protocol-analysis'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/c48ca7e5-b379-477e-a5ae-13773eda0ecb/3ba609c40d7ab32a.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=18f7ac8bdf85174a2617da72fb499dacdcd662c937bf94e0e6a4cde2e0cc6bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['network', 'school']
category: 'cs-base'
draft: false
---

# **1．实验目的**

- 了解运输层TCP协议基本概念、报文结构
- 分析TCP报文头部
- 分析TCP连接建立过程、TCP连接释放
- 掌握利用`tcpdump`和`wireshark`进行`tcp`协议分析技术。

## **2．实验环境**

- 硬件要求：阿里云云主机ECS 一台。
- 软件要求：Linux/ Windows 操作系统

## **3．实验内容**


TCP是面向连接的、在不可靠的互联网络上提供可靠的端到端通信。它是TCP/IP协议集的核心协议。


TCP为了保证报文传输的可靠，就给每个包一个序号，同时序号也保证了传送到接收端实体的包的按序接收。然后接收端实体对已成功收到的字节发回一个相应的确认（ACK）；如果发送端实体在合理的往返时延（RTT）内未收到确认，那么对应的数据（假设丢失了）将会被重传。


利用`wget`下载新疆大学主页`www.xju.edu.cn`，与此同时使用`tcpdump`抓包。使用`wireshark`分析TCP数据报文头部，分析建立连接三次握手和分析释放连接的四次挥手。


## **4．实验结果与分析**


### **4.1** **填写表格**

- 首先抓取wget下载 时的数据，操作如下：

![L6OKb28SnoZCtIR.png](https://s2.loli.net/2022/05/15/L6OKb28SnoZCtIR.png)

- 利用wareshark打开分析cap文件，筛选TCP协议，结果如下：

![Wn6tz9xaCfgMUBS.png](https://s2.loli.net/2022/05/15/Wn6tz9xaCfgMUBS.png)

- 根据捕获的数据包，分析TCP的报文结构，将TCP协议中个字段名，字段长度，字段值，字段含义填入下表：

| **字段名**                         | **字段长度** | **字段值**    | **字段含义**                                                  |
| ------------------------------- | -------- | ---------- | --------------------------------------------------------- |
| Source Port                     | 2bit     | 23242      | Source Port: 23242                                        |
| Destination Port                | 2bit     | 22         | Destination Port: 22                                      |
| TCP Segment Len                 | 1bit     | 0          | [TCP Segment Len: 0]                                      |
| relative Sequence Number        | 4bit     | 1          | Sequence Number: 1    (relative sequence number)          |
| Sequence Number                 | 4bit     | 3259399585 | Sequence Number (raw): 3259399585                         |
| relative Acknowledgment Number  | 4bit     | 1          | Acknowledgment Number: 1    (relative ack number)         |
| Acknowledgment number (raw)     | 4bit     | 1484179832 | Acknowledgment number (raw): 1484179832                   |
| Header Length                   | 4bit     | 20         | 0101 .... = Header Length: 20 bytes (5)                   |
| Reserved                        | 1bit     | 0          | 000. .... .... = Reserved: Not set                        |
| Nonce                           | 1bit     | 0          | ...0 .... .... = Nonce: Not set                           |
| Congestion Window Reduced (CWR) | 1bit     | 0          | .... 0... .... = Congestion Window Reduced (CWR): Not set |
| ECN-Echo                        | 1bit     | 0          | .... .0.. .... = ECN-Echo: Not set                        |
| Urgent                          | 1bit     | 0          | .... ..0. .... = Urgent: Not set                          |
| Acknowledgment                  | 1bit     | 1          | .... ...1 .... = Acknowledgment: Set                      |
| Push                            | 1bit     | 0          | .... .... 0... = Push: Not set                            |
| Reset                           | 1bit     | 0          | .... .... .0.. = Reset: Not set                           |
| Syn                             | 1bit     | 0          | .... .... ..0. = Syn: Not set                             |
| Fin                             | 1bit     | 0          | .... .... ...0 = Fin: Not set                             |
| Window                          | 2bit     | 229        | Window: 229                                               |
| Calculated window size          | 2bit     | 29312      | [Calculated window size: 29312]                           |
| Window size scaling factor      | 2bit     | 128        | [Window size scaling factor: 128]                         |
| Checksum                        | 2bit     | 0xda61     | Checksum: 0xda61 [unverified]                             |
| Urgent Pointer                  | 2bit     | 0          | Urgent Pointer: 0                                         |

- 通过分析实验结果，TCP报文结构由哪几部分组成，其功能是什么？

TCP报文一般可以分为:

1. 端口号：用来标识同一台计算机的不同的应用进程。

1.1 源端口：源端口和IP地址的作用是标识报文的返回地址。


1.2 目的端口：端口指明接收方计算机上的应用程序接口。


TCP报头中的源端口号和目的端口号同IP数据报中的源IP与目的IP唯一确定一条TCP连接。

1. 序号和确认号：是TCP可靠传输的关键部分。序号是本报文段发送的数据组的第一个字节的序号，确保了TCP传输的有序性。确认号，即ACK，指明下一个期待收到的字节序号，表明该序号之前的所有数据已经正确无误的收到。
2. 数据偏移／首部长度：4bits。由于首部可能含有可选项内容，因此TCP报头的长度是不确定的，其实际上指示了数据区在报文段中的起始偏移值。
3. 保留：为将来定义新的用途保留，现在一般置0。
4. 控制位：URG ACK PSH RST SYN FIN，共6个，每一个标志位表示一个控制功能。

5.1 URG：紧急指针标志，为1时表示紧急指针有效，为0则忽略紧急指针。


5.2 ACK：确认序号标志，为1时表示确认号有效，为0表示报文中不含确认信息，忽略确认号字段。


5.3 PSH：push标志，为1表示是带有push标志的数据，指示接收方在接收到该报文段以后，应尽快将这个报文段交给应用程序，而不是在缓冲区排队。


5.4 RST：重置连接标志，用于重置由于主机崩溃或其他原因而出现错误的连接。或者用于拒绝非法的报文段和拒绝连接请求。


5.5 SYN：同步序号，用于建立连接过程，在连接请求中，SYN=1和ACK=0表示该数据段没有使用捎带的确认域，而连接应答捎带一个确认，即SYN=1和ACK=1。


5.6 FIN：finish标志，用于释放连接，为1时表示发送方已经没有数据发送了，即关闭本方数据流。

1. 窗口：滑动窗口大小，用来告知发送端接受端的缓存大小，以此控制发送端发送数据的速率，从而达到流量控制。
2. 校验和：奇偶校验，此校验和是对整个的 TCP 报文段，包括 TCP 头部和 TCP 数据，以 16 位字进行计算所得。由发送端计算和存储，并由接收端进行验证。
3. 紧急指针：只有当 URG 标志置 1 时紧急指针才有效。TCP 的紧急方式是发送端向另一端发送紧急数据的一种方式。
4. 数据部分：传输的信息。

### **4.2** **分析建立连接三次握手**

- 分析三次握手的标志位和序号

![YrHyu594bim7VpD.png](https://s2.loli.net/2022/05/15/YrHyu594bim7VpD.png)


第一次握手：客户端向服务器发送了标志位为SYN，并设置Seq=0（x），请求与服务器建立连接


第二次握手：服务器向客户端回应了SYN，标志位为SYN和ACK，并设置Seq=0（y），ACK=1（x+1）


第三次握手：客户端收到服务器的SYN报文，回应一个ACK=1（y+1），标志位为ACK


### **4.3** **分析释放连接的四次挥手**

- 分析四次挥手的报文标志和序号

![O6n4rQpIR8DHjsL.png](https://s2.loli.net/2022/05/15/O6n4rQpIR8DHjsL.png)


第一次挥手：客户端向服务器发送FIN，Seq=166，Ack=7725


第二次挥手：服务器回发了ACK，Seq=7725，Ack=167


第三次挥手：服务器发送FIN，Seq=7725，Ack=167


第四次挥手：客户端向服务器回复了ACK，Seq=167，Ack=7726

- wireshark只抓取了四段报文的原因

据图，我们可以发现此时四次挥手只有三次挥手，是因为TCP是全双工通信，Cliet在自己已经不会在有新的数据要发送给Server后，可以发送FIN信号告知Server，这边已经终止Client到对端Server那边的数据传输。但是，这个时候对端Server可以继续往Client这边发送数据包。于是，两端数据传输的终止在时序上是独立并且可能会相隔比较长的时间，这个时候就必须最少需要2+2=4次挥手来完全终止这个连接。但是，如果Server在收到Client的FIN包后，在也没数据需要发送给Client了，那么对Client的ACK包和Server自己的FIN包就可以合并成为一个包发送过去，这样四次挥手就可以变成三次了


## **5、实验小结**


### **5.1 问题与解决办法**

> 问题使用Xftp连接服务器时，出现连接错误的情况解决方法使用校园网连接后恢复正常，排查后发现为服务器防火墙原因

### **5.2 心得体会**

- 本次实验报告熟系了对IP协议分析过程中代码及软件的操作，以及对TCP报文的分析与提取，实现对课上知识的印证。通过这次实验，我掌握了wget命令使用中的具体流程，了解了常用IP协议分析软件的基本用法，提高了自身编程能力。
- 通过这些常用的IP协议分析命令操作，对IP协议使用时的跟踪分析，TCP报文的结构分析，让我印证了上课所学的知识。
