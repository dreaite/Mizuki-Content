---
title: '实验8 WEB服务器的部署与应用'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在理解电子邮件系统结构、客户端与服务器通信及SMTP、POP3协议。通过在阿里云上安装和部署Nginx与Apache，实验展示了静态和动态网页的访问，解决了依赖包安装问题，并提高了对Linux配置软件的掌握与编程能力。'
permalink: 'web-server-deploy'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/91de1199-96f9-49cb-ad9e-9fb627cf9889/4668a3eb0510cf37.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNS6BWN%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T113457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CnggUmQNTIWcxpk71sKe%2BtcT0RVUJnkPa1sONfkxywIgWix1CfX3kaputgPwarZUIm7ANIL%2FnkR%2Bs9ctAQYwHUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoT9%2B%2FRgaZzFud2TSrcA6ZIdkCm0Ediqay5sOB%2BtmFTfvN%2F%2FiM3m%2F741v%2F4WBgrN8nAdCqs3K0VwKqA87HJN%2FOVRcC613qZ8Vk3uuCXBRVmMq3bP4SIlSXY05b9NsSlLB21h4aAJO%2BUo9I5B0OKrge%2FTIMz5t56djaob1uhJaeKQadOFjvvl4vBIoul9KfMJe3GpdLQfkWx5HKq9mGFkHtGO2EWxSRKt1PzPg8778DWmZBTnwZ2YZNpAF8Vp2zEZF6UMPZRWWYTe3AAB65obPV1EWwXRTDaJ9z%2BncisYqkargisww8OzzKImvt5cZILOD8cEL%2Fp2uopoku1gp5jLHz3lvfO6DyEerPRGgpCtAqjNzjhPJLT1T3eqgap6aKwSmtpmKjsPT7jYyAmMNTk92IzUW0sTA9HsYbfl5BQchOJqYBSimo7RP0jfpBzIPcPAjR0IPIpavdDv0u272P00%2BnvavidCmm6%2FjDHZzLK%2FWMhCC1qParzGxRVFKQfj5JIWHcMA2t6qMlrLcqjAZGqb0Sf9jAIV1ylcSFBpa7YSppoqLOEkQwnaRmZiaKxGM%2BouTPJDU71RslQ9XjZWdbID5ENcci%2F98HbSW8Oe5SR3HH5tDagoVWqoCx1Q2uszHPL7uAQ8Z6hoX4Ws%2FRNMIbF6swGOqUBQOf5kXQFX3yokCvwpqOkVYHnJ%2BkSV26e003qD3b5u%2BdxOClHMeiP5JxnpBXoNTy4%2F5LsnK38wifdV7M7j9Zpx3qluNkI115JBCKcURrDbXplhGJUCPuZaVV7yhvlTO3qekjS8%2By3g9Yy4Gdvhf1d3CBLBgYPAxCxE%2Fd9myIs0pAcvhHT4nUEkZwrjkso1JE0Ev147f5qpEKi59tWtwfvL%2Fi4Xl%2Fl&X-Amz-Signature=e37671d0c445732a0e7da22a69a9da5aa0ada210b922d6472fe88d044fdb12d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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


### **3.1** **Nginx安装和部署**


Nginx是一款轻量级的Web服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。


本实验要求安装和部署Web服务器Nginx，实现最基本的静态网页和动态网页访问。网页内容不限。


参考资料：


[https://nginx.org/en/download.html](https://nginx.org/en/download.html)


[https://blog.csdn.net/qq_33454884/article/details/89212702](https://blog.csdn.net/qq_33454884/article/details/89212702)


### **3.2** **Apache安装和部署**


Apache是最流行的Web服务器端软件之一。它快速、稳定。


本实验要求安装和部署web服务器Apache，实现最基本的静态网页和动态网页访问。网页内容不限。


参考资料：


[https://www.apache.org/](https://www.apache.org/)


[https://blog.csdn.net/weixin_42709659/article/details/81938176](https://blog.csdn.net/weixin_42709659/article/details/81938176)


## **4．实验结果与分析**


### **3.1** **Nginx安装和部署**


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


### **3.2** **Apache安装和部署**


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
