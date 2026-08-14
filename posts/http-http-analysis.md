---
title: '实验7 HTTP协议分析与测量'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在了解HTTP协议及其报文结构，掌握使用tcpdump和wireshark进行HTTP数据包抓取与分析。通过下载新疆大学主页，分析HTTP版本、IP地址、状态码、内容字节数及头部字段。实验中解决了连接错误的问题，并提高了编程能力和对HTTP协议的理解。'
permalink: 'http-http-analysis'
image: 'https://r2.dreaife.tokyo/notion/covers/70ae8f6e946948d7839c6e2b781e11aa/165371EE8BB9E99C4121DDB4A9C0DE46.jpg'
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
