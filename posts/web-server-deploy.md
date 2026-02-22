---
title: '实验8 WEB服务器的部署与应用'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在理解电子邮件系统结构、客户端与服务器通信及SMTP、POP3协议。通过在阿里云上安装和部署Nginx与Apache，实验展示了静态和动态网页的访问，解决了依赖包安装问题，并提高了对Linux配置软件的掌握与编程能力。'
permalink: 'web-server-deploy'
image: 'https://r2.dreaife.tokyo/notion/covers/092e2f9199ad4baf8703ae177d13fba1/4668a3eb0510cf37.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
---

# **1．实验目的**

- 理解电子邮件系统基本结构
- 理解客户端和服务器端，以及服务器之间的通信
- 分析理解SMTP，pop3协议

## **2．实验环境**

- 硬件要求：阿里云云主机ECS 一台。
- 软件要求：Linux/ Windows 操作系统

## **3．实验内容**


### **3.1 Nginx安装和部署**


Nginx是一款轻量级的Web服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。


本实验要求安装和部署Web服务器Nginx，实现最基本的静态网页和动态网页访问。网页内容不限。


参考资料：


[https://nginx.org/en/download.html](https://nginx.org/en/download.html)


[https://blog.csdn.net/qq_33454884/article/details/89212702](https://blog.csdn.net/qq_33454884/article/details/89212702)


### **3.2 Apache安装和部署**


Apache是最流行的Web服务器端软件之一。它快速、稳定。


本实验要求安装和部署web服务器Apache，实现最基本的静态网页和动态网页访问。网页内容不限。


参考资料：


[https://www.apache.org/](https://www.apache.org/)


[https://blog.csdn.net/weixin_42709659/article/details/81938176](https://blog.csdn.net/weixin_42709659/article/details/81938176)


## **4．实验结果与分析**


### **3.1 Nginx安装和部署**


### **1. Nginx安装与部署**

- 安装依赖包`openssl`、`zlib`、`pcre`
- 安装Nginx

```plain text
tar -zxvf nginx-1.22.0.tar.gz
cd nginx-1.22.0
./configure --prefix=/usr/install/nginx --with-pcre=../pcre2-10.40 --with-zlib=../zlib-1.2.12 --with-openssl=../openssl-3.0.3
make && make install
```


运行结果显示安装完成


![cM8xHj7TBGQK6LD.png](https://s2.loli.net/2022/06/09/cM8xHj7TBGQK6LD.png)


### **2. Nginx显示静态页面**


可以正常进入Nginx配置首页


![ZCKyAR8J3qwSd7k.png](https://s2.loli.net/2022/06/09/ZCKyAR8J3qwSd7k.png)


同时通过安装php并启用Nginx对php支持的配置实现Nginx对静态php网页的实现。


![dULTw3emJsDc9y7.png](https://s2.loli.net/2022/06/09/dULTw3emJsDc9y7.png)


### **3. Nginx显示动态页面**


通过php函数提取server访问的IP地址、系统、浏览器，并输出，从而实现网页的动态显示。


![F9euimjgq3sAPcw.png](https://s2.loli.net/2022/06/09/F9euimjgq3sAPcw.png)


![9R3SEbsXkmifLZ1.png](https://s2.loli.net/2022/06/09/9R3SEbsXkmifLZ1.png)


### **3.2 Apache安装和部署**


### **1. Apache的安装与部署**


通过yum安装apache并启动服务及开机启动。


```plain text
yum groupinstall web* -y
systemctl restart httpd
systemctl enablehttpd
```


安装完成


![Vd3IGPzEb6mh5Ol.png](https://s2.loli.net/2022/06/08/Vd3IGPzEb6mh5Ol.png)


开放80端口和443端口


![RZDTNCF8owfHLJE.png](https://s2.loli.net/2022/06/09/RZDTNCF8owfHLJE.png)


### **2. Apache显示静态网页**


可以正常进入Apache默认首页


![CLFptic1Vf8M6qA.png](https://s2.loli.net/2022/06/09/CLFptic1Vf8M6qA.png)


同时通过安装php并调整Apache配置文件实现Apache对静态php网页的实现。


![RoLKMk3T19vW4FY.png](https://s2.loli.net/2022/06/09/RoLKMk3T19vW4FY.png)


### **3. Apache显示动态页面**


与Nginx类似，通过php函数提取server访问的IP地址、系统、浏览器，并输出，从而实现网页的动态显示。


![zX7Wxrg9Bf2Lhmv.png](https://s2.loli.net/2022/06/09/zX7Wxrg9Bf2Lhmv.png)


## **5、实验小结**


### **5.1 问题与解决办法**

> 问题对依赖包进行编译安装时出现错误。解决方法此问题是由于未安装GCC，使用yum安装即可。yum -y install gcc问题运行nginx时找不到Nginx导致出错解决方法此问题是由于未未将Nginx地址定义为全局变量，设为全局变量后正常。vim /etc/profilesource /etc/profilenginx -s reload

### **5.2 心得体会**

- 本次实验报告熟系了应用Nginx和Apache实现网页的部署，实现对课上知识的印证。通过这次实验，我掌握了Nginx和Apache使用中的具体流程，了解了常用Linux配置软件的基本用法，提高了自身编程能力。
- 通过这些常用的Linux命令操作，对Nginx和Apache的配置与使用，让我印证了上课所学的知识。
