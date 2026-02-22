---
title: '实验2 IP协议分析'
published: 2024-01-03
updated: 2022-07-01
description: '实验旨在了解IP报文格式及其字段含义，掌握tcpdump和wireshark的使用。通过tcpdump抓包并利用wireshark分析数据包，学习IP协议的结构和traceroute命令的应用，解决了相关问题并提升了编程能力。'
permalink: 'ip-analysis-lab'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/d9665c5e-f981-45be-914b-c126bacaa185/B5C598D57D9DEEA398003F8C3664D184.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNAGBRM%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T073412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE0vgzlQNnEBFzki8QxtRbByU425%2Bb1eZ4DAmR1R0gfgIhAOfalBB%2BYC7xzdxKheF%2BM%2F7nFITIBJiamVzGD8jmZYwtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw5UmJG0w26p%2Fro6Qq3AMKnsrukopqrOxumn0SuV3QywcjdT3nHwsb%2FLQ9XvNgF7fIz5YsOyr4l5hERbGe3SwZjjnxPCKWWSR7y2tl9ofdViCjgHrzfs%2FFfVWnSP94Et3I5edTTllUX5bi7jgXbwJo9UnPgi5HyhBc9FQRoE2TbP%2FQNujMAmUHgWYlkURI42rGDbZbEWPc1ktnIpt3jOyURp4HeEAqP2vqm9Z4VqlL0xcMK89GZKWp1cUpKWbK8bk5n%2Bjrl8F1KQ%2F6EkJKBMeN0xlG8pEY7WehwZy%2ByWH6KsHd%2F24Iq1kUOtGznIRcJGzs9miCE9SCZy7pzb22BqD%2B6RWd0lhPNG9bE25Pq%2Bp91YVVLpc%2B%2BZ8C7Ee8POJEAFx7KaqDSi0%2BIqwRmyal1R1KXp2xkwsRJU%2FwFY2X41sjZnhnFHqGbredYg0us8kcSibeXPagDaFGolwS63ki3rWmr7pbYjIGFOd6wV4OqadwZWGR%2F3usj5XMHUShIGMKXAfcwzWJ6bRyikOhcwFjdybU3QRov577SZocfaO4vjRPsnpyIqunU0rfW9VoR6WfdyQlvCemwEttg%2FwQpLh6zhsz%2FJeICdWG42vwj095qGxNXjdv1TLHIuw68Vl8bWZtRwdGbGrqk4f%2BCKAy4TDNxerMBjqkAQCl9Mk6qBl8gUkMQa2epzGBxSlLtg3ZLtOIYstBfg8KzwvMtoSu2bBhY5A1iQL3%2F8%2B5Cd2V3ztI%2Bj%2FHzL58w0r1IXYFYJuNLHOHJIoYONBgZEthT9TVnfgUYMQcSXomYMAHYkqOgt1gtQ%2Fx8giBkDvuCii1%2FqypVck3WH8%2BT50HSAlKADmpcUxIhheTj%2BMka7oDB6sHcy3aKe2hlVGxHc5xGjCp&X-Amz-Signature=3d610a05d7854d8e7e66dcc7f219c37b3f525ce8cf55efe3e8f5ae13b0591bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['network', 'school']
category: 'cs-base'
draft: false
---

## **1．实验目的**

- 了解IP报文格式，熟悉IP报文各个字段含义、长度
- 掌握基于tcpdump和wireshark软件进行数据包抓取和分析技术

## **2．实验环境**

- 硬件要求：阿里云云主机ECS 一台。
- 软件要求：Linux/ Windows 操作系统

## **3．实验内容**


### **3.1** **tcpdump基本用法**


tcpdump是一个用于截取网络分组，并输出分组内容的工具。凭借强大的功能和灵活的截取策略，使其成为类UNIX系统下用于网络分析和问题排查的首选工具


tcpdump 支持针对网络层、协议、主机、网络或端口的过滤，并提供and、or、not等逻辑语句来帮助你去掉无用的信息


**参考资料：**


[_https://www.cnblogs.com/ggjucheng/archive/2012/01/14/2322659.html_](https://www.cnblogs.com/ggjucheng/archive/2012/01/14/2322659.html)


[_https://www.jianshu.com/p/d9162722f189_](https://www.jianshu.com/p/d9162722f189)


### **3.2** **wireshark基本用法**


Wireshark（前称Ethereal）是一个网络封包分析软件。网络封包分析软件的功能是撷取网络封包，并尽可能显示出最为详细的网络封包资料。Wireshark使用WinPCAP作为接口，直接与网卡进行数据报文交换。


网络管理员使用Wireshark来检测网络问题，网络安全工程师使用Wireshark来检查资讯安全相关问题，开发者使用Wireshark来为新的通讯协定除错，普通使用者使用Wireshark来学习网络协定的相关知识。


**参考资料：**


[_https://www.wireshark.org/#download_](https://www.wireshark.org/#download)


[_https://pc.qq.com/search.html#!keyword=wireshark_](https://pc.qq.com/search.html#!keyword=wireshark)


[_https://www.cnblogs.com/csnd/p/11807736.html_](https://www.cnblogs.com/csnd/p/11807736.html)


[_https://pc.qq.com/search.html#!keyword=xshell_](https://pc.qq.com/search.html#!keyword=xshell)


### **3.3** **利用tcpdump抓包，wireshark分析包**


在阿里云主机运行命令 `traceroute www.xju.edu.cn –T`，并利用`tcpdump`抓包。下载文件到本地机器利用`wireshark`软件进行分析。


**提示：**1. 必须首先执行抓包命令，然后再执行路径追踪命令。抓包命令 `tcpdump -i eth0 -w test.cap`


2. 可使用`scp`命令或者利用`xshell`和`xftp`下载数据包到本地机器。


1) 利用`tcpdump`抓包，通过`wireshark`分析捕获的数据包，分析`IP`的报文结构，将`IP`协议树中各个名字字段，字段长度，字段信息填入下表。


| **字段名**                       | **字段长度** | **字段值**       | **字段表达信息**                                         |
| ----------------------------- | -------- | ------------- | -------------------------------------------------- |
| Version                       | 4bit     | 4             | 标识采用的 IP 协议的版本号                                    |
| Header length IP              | 4bit     | 20            | 标识采用的 IP 协议的版本号                                    |
| Differentiated services Filed | 8bit     | 0x00          | 用来获得更好的服务。这个字段在旧标准中叫做服务类型，用于标识报文的优先级，但实际上一直没有被使用过。 |
| Total length                  | 16bit    | 40            | 标识这个 IP 封包的总容量                                     |
| Indentification               | 16bit    | 0x6f33        | 数据包的一个 ID 编号，用于识别标识数据包                             |
| flag                          | 3bit     | 0x40          | 确定是否还有更多的分段                                        |
| Fragment offset               | 13bit    | 0             | 标识分片报文相对于原始报文起始位置的偏移量                              |
| Time to time                  | 8bit     | 64            | 是设置一个“数据报可经过的路由器数量”的上限，也被称为“跳数”。                   |
| protocol                      | 8bit     | 6             | 用于标识网络层之上使用了哪种封装协议                                 |
| Header checksum               | 16bit    | 0x9d2c        | 用于检查报头的正确性，防止 IP 报头数据错乱                            |
| source                        | 32bit    | 172.16.2.237  | 源 IP 地址                                            |
| destination                   | 32bit    | 100.100.27.15 | 目标 IP 地址                                           |


2) 利用`wireshark`分析并解读相关`traceroute`命令执行结果。


**提示：**在`wireshark` 过滤器工具栏设置仅显示`ICMP`


## **4．实验结果与分析**


### **4.1** **tcpdump基本用法**


tcpdump是一个用于截取网络分组，并输出分组内容的工具。凭借强大的功能和灵活的截取策略，使其成为类UNIX系统下用于网络分析和问题排查的首选工具


tcpdump 支持针对网络层、协议、主机、网络或端口的过滤，并提供and、or、not等逻辑语句来帮助你去掉无用的信息

- **默认启动**

```plain text
tcpdump//普通情况下，直接启动tcpdump将监视第一个网络接口上所有流过的数据包。
```


![XBDLEKRJiZI1o4z.png](https://s2.loli.net/2022/04/24/XBDLEKRJiZI1o4z.png)

- 监视指定网络接口的数据包

```plain text
tcpdump -i eth1//如果不指定网卡，默认tcpdump只会监视第一个网络接口，一般是eth0
```


### **4.2** **wireshark基本用法**


Wireshark（前称Ethereal）是一个网络封包分析软件。网络封包分析软件的功能是撷取网络封包，并尽可能显示出最为详细的网络封包资料。Wireshark使用WinPCAP作为接口，直接与网卡进行数据报文交换。


网络管理员使用Wireshark来检测网络问题，网络安全工程师使用Wireshark来检查资讯安全相关问题，开发者使用Wireshark来为新的通讯协定除错，普通使用者使用Wireshark来学习网络协定的相关知识。其界面如图所示。


![hwT2YybXpv4DZdP.png](https://s2.loli.net/2022/04/24/hwT2YybXpv4DZdP.png)


### **4.3** **利用tcpdump抓包，wireshark分析包**

1. 执行抓包命令`tcpdump -i eth0 -w test.cap`并将获取信息存储于`/root/test.cap`文件中

![tMLwgqz9cHUPhDa.png](https://s2.loli.net/2022/04/24/tMLwgqz9cHUPhDa.png)

1. 运行命令`traceroute www.xju.edu.cn –T`

![bekUQoM2hriayS4.png](https://s2.loli.net/2022/04/24/bekUQoM2hriayS4.png)

1. 使用`xftp`连接主机，并将保存的抓包文件保存到电脑

![Mn1O56hby9ultBL.png](https://s2.loli.net/2022/04/24/Mn1O56hby9ultBL.png)

1. 使用`wiresharp`打开`test.cap`文件，并分析

![F2Sg186ZxmW4HYn.png](https://s2.loli.net/2022/04/24/F2Sg186ZxmW4HYn.png)

1. 对捕获的数据包，分析`IP`的报文结构，将`IP`协议树中各个名字字段，字段长度，字段信息填入下表。

| **字段名**                       | **字段长度** | **字段值**       | **字段表达信息**                                                    |
| ----------------------------- | -------- | ------------- | ------------------------------------------------------------- |
| Version                       | 4bit     | 4             | 0100 .... = Version: 4                                        |
| Header length IP              | 4bit     | 20            | .... 0101 = Header Length: 20 bytes (5)                       |
| Differentiated services Filed | 8bit     | 0x00          | Differentiated Services Field: 0x00 (DSCP: CS0, ECN: Not-ECT) |
| Total length                  | 16bit    | 40            | Total Length: 40                                              |
| Indentification               | 16bit    | 0x6f33        | Identification: 0x6f33 (28467)                                |
| flag                          | 3bit     | 0x40          | Flags: 0x40, Don't fragment                                   |
| Fragment offset               | 13bit    | 0             | ...0 0000 0000 0000 = Fragment Offset: 0                      |
| Time to time                  | 8bit     | 64            | Time to Live: 64                                              |
| protocol                      | 8bit     | 6             | Protocol: TCP (6)                                             |
| Header checksum               | 16bit    | 0x9d2c        | Header Checksum: 0x9d2c [validation disabled]                 |
| source                        | 32bit    | 172.16.2.237  | Source Address: 172.16.2.237                                  |
| destination                   | 32bit    | 100.100.27.15 | Destination Address: 100.100.27.15                            |

1. 分析并解读相关`traceroute`命令执行结果，通过`ICMP`对于执行结果进行分析。

![2jCLdqIHZOUyec5.png](https://s2.loli.net/2022/04/24/2jCLdqIHZOUyec5.png)


![G3D2ajfuXOV7LFM.png](https://s2.loli.net/2022/04/24/G3D2ajfuXOV7LFM.png)


![VviL34IUOpz5tjF.png](https://s2.loli.net/2022/04/24/VviL34IUOpz5tjF.png)

> 分析结果：
>
> `ICMP`报文的种类分为两种：`ICMP`差错报告报文和`ICMP`询问报文。可以发现，我们捕获的过程中出现的ICMP报文类型都为`Time to live exceeded in transit`，即为时间超过。随机选择一个`ICMP`报文，我们可以发现，此条`ICMP`报文`Type=11,Code=0`，属于差错报告报文，说明时间超过。其校验和为`0x4e4d`，结果正确，校验和状态良好，且其`TTL`为4.
>
>

## **5、实验小结**


### **5.1 问题与解决办法**

> 问题在使用traceroute命令时，出现-bash: traceroute: command not found错误解决方法使用yum install traceroute命令，首先安装traceroute
> 问题使用Xftp连接服务器时，出现连接错误的情况解决方法使用校园网连接后恢复正常，排查后发现为服务器防火墙原因

### **5.2 心得体会**

- 本次实验报告熟系了对IP协议分析过程中代码及软件的操作，实现对课上知识的印证。通过这次实验，我掌握了traceroute命令使用中的具体流程，了解了常用IP协议分析软件的基本用法，提高了自身编程能力。
- 通过这些常用的IP协议分析命令操作，对IP协议使用时的跟踪分析，让我印证了上课所学的知识。
