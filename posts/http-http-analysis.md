---
title: '实验7 HTTP协议分析与测量'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在了解HTTP协议及其报文结构，掌握使用tcpdump和wireshark进行HTTP数据包抓取与分析。通过下载新疆大学主页，分析HTTP版本、IP地址、状态码、内容字节数及头部字段。实验中解决了连接错误的问题，并提高了编程能力和对HTTP协议的理解。'
permalink: 'http-http-analysis'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/927cc895-720d-4769-a70d-b8405d703421/165371EE8BB9E99C4121DDB4A9C0DE46.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=12251fb76d3b753d73251de062b2a9cd53ebb3b7f1e60ae19557662a0b341bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['network', 'school']
category: 'cs-base'
draft: false
---

# **1．实验目的**

- 了解HTTP协议及其报文结构
- 了解HTTP操作过程：TCP三次握手、请求和响应交互
- 掌握基于`tcpdump`和`wireshark`软件进行HTTP数据包抓取和分析技术

## **2．实验环境**

- 硬件要求：阿里云云主机ECS 一台。
- 软件要求：Linux/ Windows 操作系统

## **3．实验内容**


使用`wget`下载新疆大学主页**[**[www.xju.edu.cn](https://www.notion.so/dreaifenote/www.xju.edu.cn)**](**[**http://www.xju.edu.cn**](http://www.xju.edu.cn/)**)**，利用`tcpdump`抓包并利用`wireshark`分析。

1. 浏览器运行HTTP版本1还是1.1？服务器运行的是什么版本的HTTP？
2. 你的电脑的IP地址是什么？服务器呢？
3. 从服务器返回到浏览器的状态代码是什么？
4. 您在服务器上检索到的HTML文件是在什么时候修改的？
5. 有多少字节的内容被返回到浏览器？
6. 除以上已回答过的字段外，头部还有哪些字段？在数据包内容窗口中检查原始数据，是否有未在数据包列表中显示的头部？

## **4．实验结果与分析**


### **1. 下载新疆大学主页并抓包**


![IFScZVzToMAhDnd.png](https://s2.loli.net/2022/06/07/IFScZVzToMAhDnd.png)


### **2. 使用****`wireshark`****对抓取文件进行分析**


### **2.1 对http协议进行筛选**


![cVTMD8wmz9RJyNG.png](https://s2.loli.net/2022/06/07/cVTMD8wmz9RJyNG.png)


通过抓包结果可以看到，客户端向服务器请求一个简单的HTML文件，服务器将该文件返回给客户端。


### **2.2 问题解答**

> 浏览器运行HTTP版本1还是1.1？服务器运行的是什么版本的HTTP？浏览器运行的HTTP版本是1.1，服务器运行的HTTP版本也是1.1。服务器浏览器你的电脑的IP地址是什么？服务器呢？电脑IP为172.16.2.155，服务器IP为100.100.109.104从服务器返回到浏览器的状态代码是什么？返回状态码为200，表示成功处理请求您在服务器上检索到的HTML文件是在什么时候修改的？时间为Tue, 07 Jun 2022 07:02:12 GMT有多少字节的内容被返回到浏览器？有0字节的内容被返回到浏览器除以上已回答过的字段外，头部还有哪些字段？在数据包内容窗口中检查原始数据，是否有未在数据包列表中显示的头部？ HTTP请求报文中还有Host字段、connection字段、Accept字段、User-agent字段、Accept-Encoding字段等。HTTP响应报文中还有server字段、connection字段等。

## **5、实验小结**


### **5.1 问题与解决办法**

> 问题使用Xftp连接服务器时，出现连接错误的情况解决方法使用校园网连接后恢复正常，排查后发现为服务器防火墙原因

### **5.2 心得体会**

- 本次实验报告熟系了对HTTP协议分析过程中代码及软件的操作，实现对课上知识的印证。通过这次实验，我掌握了wget命令使用中的具体流程，了解了常用HTTP协议分析软件的基本用法，提高了自身编程能力。
- 通过这些常用的HTTP分析命令操作，对HTTP协议使用时的跟踪分析，HTTP报文的结构分析，让我印证了上课所学的知识。
