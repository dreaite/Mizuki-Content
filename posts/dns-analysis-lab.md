---
title: '实验6 DNS协议分析与测量'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在了解DNS协议及其基本概念，使用dig工具进行DNS信息测量和分析，抓取DNS查询数据包并利用wireshark进行协议分析。实验结果表明，掌握了DNS查询的基本流程和UDP报文的结构，提升了编程能力和对DNS协议的理解。'
permalink: 'dns-analysis-lab'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/14fd970e-c00d-42b2-ad0d-c38e4e384aca/-3df8494814797e70.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWN76A4U%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T082608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUW7D6q4RRvWenRJ30pDGAl0so0Uk%2B5wzxaSeCWwvR2AiEArDRJ%2FUz92k4befy%2FztuI8BZV3aqw%2FoCtDnMUhmKbdcEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD28YvzChQqrFIeSDyrcAx9fj0oHbdu7gAayUWpJq7ZgNpBQr2yQp0eG8m%2FTCohguvPQrtfgPkkhwS2aro3Ql5C8vjwX3nEI7c2wHSja8A6F9PPgjaifLVN4G4LA4Mt7wcAAGaIkZ0nDHf%2FpOOKel7mttkXwBneXhJ1aqYHFn7ZwZSmNLv7BnNNe57upDe8xGfvFz0B%2FJKmalguscc0FfFSKBpSP4hWt6tF6VNMJlYohgokVK%2Ft%2Btn8LnEcGyYB5NnBlPVSzhNusBBYqvskI3aDz1pnG0%2BmNNmgkimjxWntZN2aHLAn3bKcbtUXT74VSmY3xZeLzoViod4RxBe%2FbObg1syekROPQsixgTvA5hTOy5A13F8Frs4k6ZzPcQ8EJQih3QPUEWW%2FsDkzb22M%2BpGT9fxTiJ42vmxka8j3OZdXONwQWxaFnKDQhlrO3h7mczScXKn1m2336kwxxm2Fhmxku5A9%2F7jhmiP6yHL4eZVlZXw7ErpUxspaVw8CEd1lzIbLLspqttHMylVzyQDdcKC2VgUt1iBdQq%2FO88607WKvry1MLZNOint4IXqGriS%2FnmUirdMXWqUjCsH8MVKiKIsvK2l0DQ1ZRQUD5FKnWfPm4eWnPUuIKiW6ZuasTh5EmiSimGnHUnbmXYiLVMLnF6swGOqUBaHYUXSvyItfbGvPRA%2BIlkpmcu6OtOXL19iwhZZidWWgZyq849Pki%2FoEwsmkvKGD8f4LxgCksmPHX9VIeGXokq40HQTrFkeLmPP8noKGJJ%2Fz5yiFO1pkUMeTm6SmM2TYJWg45IoRBsQhZM4d1wNk8Pfi%2BPJwaWHCwO52cA9lNd1s9KCwMq0jNek12X9aB4PvYy6CGEVhB4oG8en18N0NLExHNO97G&X-Amz-Signature=7f966d19ba6adeafe116f8e8fc15a4f5cd61b09df0d2baeafb2ecbbd28c6606c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['network', 'school']
category: 'cs-base'
draft: false
---

## **1．实验目的**

- 了解互联网的域名结构、域名系统DNS及其域名服务器的基本概念
- 熟悉DNS协议及其报文基本组成、DNS域名解析原理
- 掌握常用DNS测量工具dig使用方法和DNS测量的基本技术

## **2．实验环境**

- 硬件要求：阿里云云主机ECS 一台。
- 软件要求：Linux/ Windows 操作系统

## **3．实验内容**


### **3.1** **查看和配置本机的DNS系统**


首先查看本机DNS服务器配置情况，其次增加一个DNS服务器：114.114.114.114或者8.8.8.8。


### **3.2** **DNS信息测量**


dig是著名的DNS软件 Bind提供的DNS分析和测量工具。Dig可以查询DNS包括NS记录，A记录，MX记录等相关信息的工具，利用它可以进行DNS测量和分析。
安装dig命令并进行以下查询和测量


```plain text
dig www.xju.edu.cn
dig aaaa www.xju.edu.cn
dig cname  www.sohu.com
dig www.xju.edu.cn @8.8.8.8
dig mx xju.edu.cn
dig ns xju.edu.cn @8.8.8.8
dig www.xju.edu.cn +trace                    重要
dig edu.cn +dnssec @8.8.8.8                  重要
dig edu.cn +dnssec @114.114.114.114           //解释RRSIG作用
```


参考资料：
	[https://www.isc.org/bind/](https://www.isc.org/bind/)[https://www.cnblogs.com/machangwei-8/p/10353216.html](https://www.cnblogs.com/machangwei-8/p/10353216.html)


### **3.3** **DNS协议分析**


使用`tcpdump`抓取DNS查询网络通信数据包,利用`wireshark`分析UDP和DNS协议数据


## **4．实验结果与分析**


### **3.1** **查看和配置本机的DNS系统**


首先查看本机DNS服务器配置情况，其次增加一个DNS服务器：`114.114.114.114`。


![YrGfCz3hJjMsOBN.png](https://s2.loli.net/2022/06/06/YrGfCz3hJjMsOBN.png)


### **3.2** **DNS信息测量**


dig是著名的DNS软件 Bind提供的DNS分析和测量工具。Dig可以查询DNS包括NS记录，A记录，MX记录等相关信息的工具，利用它可以进行DNS测量和分析,下面进行以下查询和测量。


### **1.****`dig www.xju.edu.cn`**


![8KhtSgkXpQB4L9i.png](https://s2.loli.net/2022/06/06/8KhtSgkXpQB4L9i.png)


### **2.****`dig aaaa www.xju.edu.cn`**


![PvYQAzmlajKfXh2.png](https://s2.loli.net/2022/06/06/PvYQAzmlajKfXh2.png)


### **3.****`dig cname www.sohu.com`**


![uU57TrN6wRJpCAz.png](https://s2.loli.net/2022/06/06/uU57TrN6wRJpCAz.png)


### **4.** **`dig www.xju.edu.cn @8.8.8.8`**


![sxISZ7uJ1Da6nT5.png](https://s2.loli.net/2022/06/06/sxISZ7uJ1Da6nT5.png)


### **5.** **`dig mx xju.edu.cn`**


![zgq5GRrLwtKiBoD.png](https://s2.loli.net/2022/06/06/zgq5GRrLwtKiBoD.png)


### **6.** **`dig ns xju.edu.cn @8.8.8.8`**


![P2zQs4pTrCUHMdf.png](https://s2.loli.net/2022/06/06/P2zQs4pTrCUHMdf.png)


### **7.** **`dig www.xju.edu.cn +trace`**


![zM4VqduAoymiegZ.png](https://s2.loli.net/2022/06/06/zM4VqduAoymiegZ.png)


### **8.** **`dig edu.cn +dnssec @8.8.8.8`**


![okQfBGY58IeMnqO.png](https://s2.loli.net/2022/06/06/okQfBGY58IeMnqO.png)


### **9.** **`dig edu.cn +dnssec @114.114.114.114`**


![DvayGBOWxJbzN3u.png](https://s2.loli.net/2022/06/06/DvayGBOWxJbzN3u.png)


### **3.3** **DNS协议分析**


### **1. 使用****`tcpdump`****对DNS查询进行抓包**


![YnCjGS8fA9wkgh5.png](https://s2.loli.net/2022/06/06/YnCjGS8fA9wkgh5.png)


### **2. 利用****`wireshark`****进行分析**

- **DNS查询UDP数据分析**

对抓包结果进行dns过滤并分析UDP数据，如下图


![jfvM2aVIc9Pn1qE.png](https://s2.loli.net/2022/06/06/jfvM2aVIc9Pn1qE.png)


将获取数据填入下表


| **字段名**          | **字段值** | **字段信息**                      |
| ---------------- | ------- | ----------------------------- |
| Source Port      | 44175   | Source Port: 44175            |
| Destination Port | 53      | Destination Port: 53          |
| Length           | 58      | Length: 58                    |
| Checksum         | 0x93d2  | Checksum: 0x93d2 [unverified] |

- DNS协议分析

DNS数据包含内容主要有：


| **字段**               | **说明**                                                             |
| -------------------- | ------------------------------------------------------------------ |
| Transaction ID (2字节) | 标识字段,用于辨别DNS应答报文是哪个请求报文的响应                                         |
| Flags (2字节)          | 标志字段,每一位的含义不同                                                      |
| QR (1bit)            | 查询/响应标志，0 为查询报文，1 为响应报文                                            |
| opcode (4bit)        | 0 表示标准查询，1 表示反向查询，2 表示服务器状态请求，3-15 是保留值                            |
| AA (1bit)            | 表示授权回答，该字段在应答的时候才有意义，指出给出应答的服务器是查询域名的授权解析服务器;                      |
| TC (1bit)            | 表示可截断的，用来指出报文比允许的长度还要长，导致被截断                                       |
| RD (1bit)            | 表示期望递归，该字段被请求设置，应答的时候使用的相同的值返回。如果设置了 RD，就建议域名服务器进行递归解析，递归查询的支持是可选的 |
| RA (1bit)            | 表示可用递归，该字段在应答中设置或取消，用来代表服务器是否支持递归查询                                |
| ZERO (1bit)          | 全0保留字段                                                             |
| RCODE (4bit)         | 返回码，0为无差错，1为格式错误，2为域名服务器出现错误，3为域参照问题，4为查询类型不支持，5为被禁止，6~15为保留       |
| Questions (2字节)      | 问题数，通常为1                                                           |
| Answer RRs (2字节)     | 资源记录数                                                              |
| Authority RRs (2字节)  | 授权资源记录数                                                            |
| Additional RRs (2字节) | 额外资源记录数                                                            |
| Queries (38字节)       | 查询或者响应的正文部分,分为Name Type Class                                      |
| Name (34字节)          | 查询名称，这里是ping后的参数,不定长度以0结束                                          |
| Type (2字节)           | 查询类型，这里是主机A记录                                                      |
| Class (2字节)          | 类,IN表示Internet数据,通常为1                                              |

> 分析请求包
>
> ![Xra4QGzLukA31yq.png](https://s2.loli.net/2022/06/07/Xra4QGzLukA31yq.png)
>
>
> | **字段名**              | **字段值**                          | **字段信息**                                                      |
> | -------------------- | -------------------------------- | ------------------------------------------------------------- |
> | UDP Dst Port         | 53                               | UDP Dst Port: 53                                              |
> | IPv4 Src             | 172.16.2.146                     | IPv4 Src: 172.16.2.146                                        |
> | Transaction ID (2字节) | 0x3a3c                           | Transaction ID: 0x3a3c                                        |
> | QR (1bit)            | 0                                | 0... .... .... .... = Response: Message is a query            |
> | opcode (4bit)        | 0                                | .000 0... .... .... = Opcode: Standard query (0)              |
> | TC (1bit)            | 0                                | .... ..0. .... .... = Truncated: Message is not truncated     |
> | RD (1bit)            | 1                                | .... ...1 .... .... = Recursion desired: Do query recursively |
> | ZERO (1bit)          | 0                                | .... .... .0.. .... = Z: reserved (0)                         |
> | Questions (2字节)      | 1                                | Questions: 1                                                  |
> | Answer RRs (2字节)     | 0                                | Answer RRs: 0                                                 |
> | Authority RRs (2字节)  | 0                                | Authority RRs: 0                                              |
> | Additional RRs (2字节) | 0                                | Additional RRs: 0                                             |
> | Name (34字节)          | metrichub-cn-shanghai.aliyun.com | Name: metrichub-cn-shanghai.aliyun.com                        |
> | Type (2字节)           | 1                                | Type: A (Host Address) (1)                                    |
> | Class (2字节)          | 1                                | Class: IN (0x0001)                                            |
>
> 1. 分析响应包
>
> ![p9zOSr862ewHbdQ.png](https://s2.loli.net/2022/06/07/p9zOSr862ewHbdQ.png)
>
>
> 其中由于Answer RRs为1，所以Answers项中出现一个结果。
>
>
> Answers字段可以看成一个List,集合中每项为一个资源记录,除了上面提到过的Name,Type,Class之外,还有Time to Live,Data length,Address。
>
>
> | **字段名**      | **字段值**         | **字段信息**                                |
> | ------------ | --------------- | --------------------------------------- |
> | Time to live | 75              | Time to live: 75 (1 minute, 15 seconds) |
> | Data length  | 4               | Data length: 4                          |
> | Address      | 100.100.109.104 | Address: 100.100.109.104                |
>
>

## **5、实验小结**


### **5.1 问题与解决办法**

> 问题使用dig命令时，出现-bash: dig: command not found错误解决方法此问题是由于未安装dig支持组件，默认系统中缺少bind-utils工具包，使用yum安装即可。yum -y install bind-utils

### **5.2 心得体会**

- 本次实验报告熟系了对DNS协议分析过程中代码及软件的操作，以及对UDP报文的分析与提取，实现对课上知识的印证。通过这次实验，我掌握了dig命令使用中的具体流程，了解了常用DNS协议分析软件的基本用法，提高了自身编程能力。
- 通过这些常用的DNS协议分析命令操作，对DNS协议使用时的跟踪分析，DNS、UDP报文的结构分析，让我印证了上课所学的知识。
