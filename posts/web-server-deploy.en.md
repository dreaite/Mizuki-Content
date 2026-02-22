---
title: '实验8 WEB服务器的部署与应用'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在理解电子邮件系统结构、客户端与服务器通信及SMTP、POP3协议。通过在阿里云上安装和部署Nginx与Apache，实验展示了静态和动态网页的访问，解决了依赖包安装问题，并提高了对Linux配置软件的掌握与编程能力。'
permalink: 'web-server-deploy.en'
image: 'https://r2.dreaife.tokyo/notion/covers/092e2f9199ad4baf8703ae177d13fba1/4668a3eb0510cf37.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

# **1. Objectives**

- Understand the basic structure of email systems
- Understand clients and servers, and the communication between servers
- Analyze and understand the SMTP and POP3 protocols

## **2. Experimental Environment**

- Hardware requirements: One Alibaba Cloud ECS instance.
- Software requirements: Linux/Windows operating system

## **3. Experimental Content**


### **3.1 Nginx Installation and Deployment**


Nginx is a lightweight web server/reverse proxy server and an email (IMAP/POP3) proxy server.


This experiment requires installing and deploying the Nginx web server to implement basic static and dynamic web page access. The page content is not restricted.


References:


[https://nginx.org/en/download.html](https://nginx.org/en/download.html)


[https://blog.csdn.net/qq_33454884/article/details/89212702](https://blog.csdn.net/qq_33454884/article/details/89212702)


### **3.2 Apache Installation and Deployment**


Apache is one of the most popular web server software. It is fast and stable.


This experiment requires installing and deploying the Apache web server to realize basic static and dynamic webpage access. The page content is not restricted.


References:


[https://www.apache.org/](https://www.apache.org/)


[https://blog.csdn.net/weixin_42709659/article/details/81938176](https://blog.csdn.net/weixin_42709659/article/details/81938176)


## **4. Experimental Results and Analysis**


### **3.1 Nginx Installation and Deployment**


### **1. Nginx Installation and Deployment**

- Install dependencies: `openssl`, `zlib`, `pcre`
- Install Nginx

```plain text
tar -zxvf nginx-1.22.0.tar.gz
cd nginx-1.22.0
./configure --prefix=/usr/install/nginx --with-pcre=../pcre2-10.40 --with-zlib=../zlib-1.2.12 --with-openssl=../openssl-3.0.3
make && make install
```


The run result shows the installation is complete


![cM8xHj7TBGQK6LD.png](https://s2.loli.net/2022/06/09/cM8xHj7TBGQK6LD.png)


### **2. Nginx Displays Static Page**


The Nginx configuration homepage can be accessed normally


![ZCKyAR8J3qwSd7k.png](https://s2.loli.net/2022/06/09/ZCKyAR8J3qwSd7k.png)


At the same time, by installing PHP and enabling Nginx's PHP support configuration, Nginx serves static PHP pages.


![dULTw3emJsDc9y7.png](https://s2.loli.net/2022/06/09/dULTw3emJsDc9y7.png)


### **3. Nginx Displays Dynamic Page**


Using PHP functions to extract the IP address, operating system, and browser of the server requests and output them, thereby achieving dynamic page display.


![F9euimjgq3sAPcw.png](https://s2.loli.net/2022/06/09/F9euimjgq3sAPcw.png)


![9R3SEbsXkmifLZ1.png](https://s2.loli.net/2022/06/09/9R3SEbsXkmifLZ1.png)


### **3.2 Apache Installation and Deployment**


### **1. Apache Installation and Deployment**


Install Apache via yum and start the service and enable at boot.


```plain text
yum groupinstall web* -y
systemctl restart httpd
systemctl enablehttpd
```


Installation completed


![Vd3IGPzEb6mh5Ol.png](https://s2.loli.net/2022/06/08/Vd3IGPzEb6mh5Ol.png)


Open ports 80 and 443


![RZDTNCF8owfHLJE.png](https://s2.loli.net/2022/06/09/RZDTNCF8owfHLJE.png)


### **2. Apache Displays Static Web Page**


The Apache default homepage can be accessed normally


![CLFptic1Vf8M6qA.png](https://s2.loli.net/2022/06/09/CLFptic1Vf8M6qA.png)


At the same time, by installing PHP and adjusting the Apache configuration file, Apache serves static PHP pages.


![RoLKMk3T19vW4FY.png](https://s2.loli.net/2022/06/09/RoLKMk3T19vW4FY.png)


### **3. Apache Displays Dynamic Page**


Similar to Nginx, by using PHP functions to extract the IP address, operating system, and browser of server access and output them, the webpage is displayed dynamically.


![zX7Wxrg9Bf2Lhmv.png](https://s2.loli.net/2022/06/09/zX7Wxrg9Bf2Lhmv.png)


## **5. Experimental Summary**


### **5.1 Problems and Solutions**

> Problems encountered when compiling and installing dependencies. The solution is that GCC was not installed; install it with yum -y install gcc. The issue of nginx not being found when running nginx is caused by not defining the Nginx address as a global variable; after setting it as a global variable, it works normally. vim /etc/profilesource /etc/profilenginx -s reload

### **5.2 Learnings and Reflections**

- This lab report familiarized with applying Nginx and Apache to deploy webpages, validating the knowledge learned in class. Through this experiment, I mastered the specific workflow for using Nginx and Apache, understood the basic usage of common Linux configuration software, and improved my programming ability.
- Through these common Linux command operations, the configuration and use of Nginx and Apache confirmed what was learned in class.
