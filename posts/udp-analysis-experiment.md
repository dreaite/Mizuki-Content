---
title: '实验3 UDP协议分析'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在掌握UDP协议的内容和工作原理，分析DNS查询和QQ通信的UDP数据包。实验结果显示UDP报文由报头和数据两部分组成，报头包含源端口、目的端口、长度和校验和。通过实验，解决了traceroute命令和Xftp连接的问题，并提高了对IP协议分析的理解和编程能力。'
permalink: 'udp-analysis-experiment'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/44475078-17ea-4b46-876d-779ba27f93a2/9E0F191710C320C89F71ACDEA51B80B6.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWN76A4U%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T082607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUW7D6q4RRvWenRJ30pDGAl0so0Uk%2B5wzxaSeCWwvR2AiEArDRJ%2FUz92k4befy%2FztuI8BZV3aqw%2FoCtDnMUhmKbdcEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD28YvzChQqrFIeSDyrcAx9fj0oHbdu7gAayUWpJq7ZgNpBQr2yQp0eG8m%2FTCohguvPQrtfgPkkhwS2aro3Ql5C8vjwX3nEI7c2wHSja8A6F9PPgjaifLVN4G4LA4Mt7wcAAGaIkZ0nDHf%2FpOOKel7mttkXwBneXhJ1aqYHFn7ZwZSmNLv7BnNNe57upDe8xGfvFz0B%2FJKmalguscc0FfFSKBpSP4hWt6tF6VNMJlYohgokVK%2Ft%2Btn8LnEcGyYB5NnBlPVSzhNusBBYqvskI3aDz1pnG0%2BmNNmgkimjxWntZN2aHLAn3bKcbtUXT74VSmY3xZeLzoViod4RxBe%2FbObg1syekROPQsixgTvA5hTOy5A13F8Frs4k6ZzPcQ8EJQih3QPUEWW%2FsDkzb22M%2BpGT9fxTiJ42vmxka8j3OZdXONwQWxaFnKDQhlrO3h7mczScXKn1m2336kwxxm2Fhmxku5A9%2F7jhmiP6yHL4eZVlZXw7ErpUxspaVw8CEd1lzIbLLspqttHMylVzyQDdcKC2VgUt1iBdQq%2FO88607WKvry1MLZNOint4IXqGriS%2FnmUirdMXWqUjCsH8MVKiKIsvK2l0DQ1ZRQUD5FKnWfPm4eWnPUuIKiW6ZuasTh5EmiSimGnHUnbmXYiLVMLnF6swGOqUBaHYUXSvyItfbGvPRA%2BIlkpmcu6OtOXL19iwhZZidWWgZyq849Pki%2FoEwsmkvKGD8f4LxgCksmPHX9VIeGXokq40HQTrFkeLmPP8noKGJJ%2Fz5yiFO1pkUMeTm6SmM2TYJWg45IoRBsQhZM4d1wNk8Pfi%2BPJwaWHCwO52cA9lNd1s9KCwMq0jNek12X9aB4PvYy6CGEVhB4oG8en18N0NLExHNO97G&X-Amz-Signature=bf45ba9506fa182b45bc31fe1b4f5a93840b7bdcddc67b6171a4832ada4a4d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
