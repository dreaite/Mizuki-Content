---
title: '实验3 UDP协议分析'
published: 2024-01-03
updated: 2022-07-01
description: '实验旨在掌握UDP协议的内容和工作原理，分析DNS查询和QQ通信的UDP数据包。实验结果显示UDP报文由报头和数据两部分组成，报头包含源端口、目的端口、长度和校验和。通过实验，解决了traceroute命令和Xftp连接的问题，并提高了对IP协议分析的理解和编程能力。'
permalink: 'udp-analysis-experiment'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/44475078-17ea-4b46-876d-779ba27f93a2/9E0F191710C320C89F71ACDEA51B80B6.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNAGBRM%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T073411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE0vgzlQNnEBFzki8QxtRbByU425%2Bb1eZ4DAmR1R0gfgIhAOfalBB%2BYC7xzdxKheF%2BM%2F7nFITIBJiamVzGD8jmZYwtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw5UmJG0w26p%2Fro6Qq3AMKnsrukopqrOxumn0SuV3QywcjdT3nHwsb%2FLQ9XvNgF7fIz5YsOyr4l5hERbGe3SwZjjnxPCKWWSR7y2tl9ofdViCjgHrzfs%2FFfVWnSP94Et3I5edTTllUX5bi7jgXbwJo9UnPgi5HyhBc9FQRoE2TbP%2FQNujMAmUHgWYlkURI42rGDbZbEWPc1ktnIpt3jOyURp4HeEAqP2vqm9Z4VqlL0xcMK89GZKWp1cUpKWbK8bk5n%2Bjrl8F1KQ%2F6EkJKBMeN0xlG8pEY7WehwZy%2ByWH6KsHd%2F24Iq1kUOtGznIRcJGzs9miCE9SCZy7pzb22BqD%2B6RWd0lhPNG9bE25Pq%2Bp91YVVLpc%2B%2BZ8C7Ee8POJEAFx7KaqDSi0%2BIqwRmyal1R1KXp2xkwsRJU%2FwFY2X41sjZnhnFHqGbredYg0us8kcSibeXPagDaFGolwS63ki3rWmr7pbYjIGFOd6wV4OqadwZWGR%2F3usj5XMHUShIGMKXAfcwzWJ6bRyikOhcwFjdybU3QRov577SZocfaO4vjRPsnpyIqunU0rfW9VoR6WfdyQlvCemwEttg%2FwQpLh6zhsz%2FJeICdWG42vwj095qGxNXjdv1TLHIuw68Vl8bWZtRwdGbGrqk4f%2BCKAy4TDNxerMBjqkAQCl9Mk6qBl8gUkMQa2epzGBxSlLtg3ZLtOIYstBfg8KzwvMtoSu2bBhY5A1iQL3%2F8%2B5Cd2V3ztI%2Bj%2FHzL58w0r1IXYFYJuNLHOHJIoYONBgZEthT9TVnfgUYMQcSXomYMAHYkqOgt1gtQ%2Fx8giBkDvuCii1%2FqypVck3WH8%2BT50HSAlKADmpcUxIhheTj%2BMka7oDB6sHcy3aKe2hlVGxHc5xGjCp&X-Amz-Signature=03c14fc17a07585c2516d2010a0ae8e62aac2abd5245b01b941d1b0120bc3eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['network', 'school']
category: 'cs-base'
draft: false
---

## **1．实验目的**

- 掌握运输层UDP协议内容
- 理解UDP协议的工作原理
- 了解应用层和运输层协议的关系

## **2．实验环境**

- 硬件要求：阿里云云主机ECS 一台。
- 软件要求：Linux/ Windows 操作系统

## **3．实验内容**


UDP（User Datagram Protocol）用户数据报协议是一种无连接的运输层协议，提供面向事物的简单不可靠信息传送服务，服务于很多应用层协议包括网络文件系统（NFS）,简单的网络管理协议（SNMP）,域名系统（DNS）以及简单的文件传输系统（TFTP）。与TCP不同UDP并不提供对IP协议的可靠机制，控制以及错误恢复等。由于UDP比较简单，UDP头包含很少的字节，比TCP负载消耗少。


完成下面实验并填写表格，回答问题。


### **3.1** **DNS查询UDP数据分析**


使用`tcpdump`抓取DNS查询网络通信数据包,利用`wireshark`分析UDP数据。


例如：


```plain text
dig www.xju.edu.cn
```


### **3.2** **QQ通信UDP数据分析**


利用wireshark抓取QQ网络通信数据包，分析UDP数据。


QQ客户端之间消息传送采用了UDP。国内网络环境非常复杂而且很多用户采用的方式是通过代理服务器共享一条线路上网方式，UDP包能够穿透大部分的代理服务器，因此QQ选择了UDP作为客户之间的通信协议。因此我们打开QQ聊天窗口开启捕获，与好友进行对话，停止捕获就得到了UDP数据包。


## **4．实验结果与分析**


### **4.1** **根据捕获的数据包，分析UDP的报文结构，将UDP协议中个字段名，字段值，字段信息填入下表:**

- **DNS查询UDP数据分析**

先通过`tcpdump -i eth0 -w test.cap`和`traceroute www.xju.edu.cn -T`进行抓包，然后对于test.cap中的数据进行分析，运行过程如下图：


![uZAyJgwOr46GMmi.png](https://s2.loli.net/2022/06/09/uZAyJgwOr46GMmi.png)


然后对dns进行过滤并分析UDP数据，如下图


![Bv96TUKWqdJXFPV.png](https://s2.loli.net/2022/05/15/Bv96TUKWqdJXFPV.png)


将获取数据填入下表


| **字段名**          | **字段值** | **字段信息**                      |
| ---------------- | ------- | ----------------------------- |
| Source Port      | 54022   | Source Port: 54022            |
| Destination Port | 53      | Destination Port: 53          |
| Length           | 52      | Length: 52                    |
| Checksum         | 0x1582  | Checksum: 0x1582 [unverified] |

- **QQ通信UDP数据分析**

通过wireshark抓取本地qq数据，过程如下图：

1. 选择以太网

![nAiTQXL4dvC3Jow.png](https://s2.loli.net/2022/05/15/nAiTQXL4dvC3Jow.png)

1. 结束抓包

![1joF3KvGeUSn2Tw.png](https://s2.loli.net/2022/05/15/1joF3KvGeUSn2Tw.png)

1. 过滤OICQ并分析获取数据

![A3XliLQpaKSwgjb.png](https://s2.loli.net/2022/05/15/A3XliLQpaKSwgjb.png)


将获取数据填入下表


| **字段名**          | **字段值** | **字段信息**                      |
| ---------------- | ------- | ----------------------------- |
| Source Port      | 4022    | Source Port: 4022             |
| Destination Port | 8000    | Destination Port: 8000        |
| Length           | 63      | Length: 63                    |
| Checksum         | 0x8c64  | Checksum: 0x8c64 [unverified] |


### **4.2** **通过分析实验结果，UDP报文结构由哪几部分组成，其功能是什么？**


通过实验获得数据，我们可以发现，UDP报文主体分为两个部分:UDP报头(占8个字节)+UDP数据/UDP载荷，其中UPD报头由源端口号+目的端口号+包长度+校验和组成。


UDP首部中的四个字段每一个占用两个字节(16 bit)，其功能为：

> 源端口号  
> 传递源端口号有助于服务器端应用程序确定报文的来源。目的端口号  
> 传递目的端口号可以使目的主机将应用数据交付运行在目的端口的响应进程(即执行分解功能)。长度  
> 长度字段则指示了在UDP报文段中的字节数(首部加数据)，因为数据字段的长度在UDP报文段中不是固定的，为了便于接收端程序的处理，所以需要一个长度字段。检验和  
> 接收方使用检验和来检查该报文段中是否出现了差错。

## **5、实验小结**


### **5.1 问题与解决办法**

> 问题在使用traceroute命令时，出现-bash: traceroute: command not found错误解决方法使用yum install traceroute命令，首先安装traceroute
> 问题使用Xftp连接服务器时，出现连接错误的情况解决方法使用校园网连接后恢复正常，排查后发现为服务器防火墙原因

### **5.2 心得体会**

- 本次实验报告熟系了对IP协议分析过程中代码及软件的操作，以及对UDP报文的分析与提取，实现对课上知识的印证。通过这次实验，我掌握了traceroute命令使用中的具体流程，了解了常用IP协议分析软件的基本用法，提高了自身编程能力。
- 通过这些常用的IP协议分析命令操作，对IP协议使用时的跟踪分析，UDP报文的结构分析，让我印证了上课所学的知识。
