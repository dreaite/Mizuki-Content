---
title: 'Experiment 8: Web Server Deployment and Application'
published: 2022-07-01
updated: 2022-07-01
description: 'This experiment aims to understand email system architecture, client-server communication, and the SMTP and POP3 protocols. By installing and deploying Nginx and Apache on Alibaba Cloud, it demonstrates access to static and dynamic web pages, resolves dependency package installation issues, and improves proficiency in configuring software on Linux and programming skills.'
image: 'https://r2.dreaife.tokyo/notion/covers/092e2f9199ad4baf8703ae177d13fba1/4668a3eb0510cf37.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

# **1．Experiment Objectives**

- Understand the basic structure of an email system
- Understand communication between clients and servers, as well as between servers
- Analyze and understand the SMTP and POP3 protocols

## **2．Experimental Environment**

- Hardware requirements: One Alibaba Cloud ECS instance.
- Software requirements: Linux/Windows operating system

## **3．Experiment Content**


### **3.1 Nginx Installation and Deployment**


Nginx is a lightweight web server/reverse proxy server and email (IMAP/POP3) proxy server.


This experiment requires installing and deploying the Nginx web server to provide basic access to static and dynamic web pages. The web page content is unrestricted.


References:


[https://nginx.org/en/download.html](https://nginx.org/en/download.html)


[https://blog.csdn.net/qq_33454884/article/details/89212702](https://blog.csdn.net/qq_33454884/article/details/89212702)


### **3.2 Apache Installation and Deployment**


Apache is one of the most popular web server applications. It is fast and stable.


This experiment requires installing and deploying the Apache web server to provide basic access to static and dynamic web pages. The web page content is unrestricted.


References:


[https://www.apache.org/](https://www.apache.org/)


[https://blog.csdn.net/weixin_42709659/article/details/81938176](https://blog.csdn.net/weixin_42709659/article/details/81938176)


## **4．Experimental Results and Analysis**


### **3.1 Nginx Installation and Deployment**


### **1. Nginx Installation and Deployment**

- Install the dependency packages `openssl`, `zlib`, and `pcre`
- Install Nginx

```plain text
tar -zxvf nginx-1.22.0.tar.gz
cd nginx-1.22.0
./configure --prefix=/usr/install/nginx --with-pcre=../pcre2-10.40 --with-zlib=../zlib-1.2.12 --with-openssl=../openssl-3.0.3
make && make install
```


The command output shows that the installation was completed.


![cM8xHj7TBGQK6LD.png](https://s2.loli.net/2022/06/09/cM8xHj7TBGQK6LD.png)


### **2. Displaying Static Pages with Nginx**


The default Nginx page can be accessed normally.


![ZCKyAR8J3qwSd7k.png](https://s2.loli.net/2022/06/09/ZCKyAR8J3qwSd7k.png)


PHP was also installed, and PHP support was enabled in the Nginx configuration, allowing Nginx to serve static PHP web pages.


![dULTw3emJsDc9y7.png](https://s2.loli.net/2022/06/09/dULTw3emJsDc9y7.png)


### **3. Displaying Dynamic Pages with Nginx**


PHP functions retrieve and output the IP address, operating system, and browser of the client accessing the server, thereby enabling dynamic web page display.


![F9euimjgq3sAPcw.png](https://s2.loli.net/2022/06/09/F9euimjgq3sAPcw.png)


![9R3SEbsXkmifLZ1.png](https://s2.loli.net/2022/06/09/9R3SEbsXkmifLZ1.png)


### **3.2 Apache Installation and Deployment**


### **1. Apache Installation and Deployment**


Install Apache using yum, start the service, and enable it to start automatically at boot.


```plain text
yum groupinstall web* -y
systemctl restart httpd
systemctl enablehttpd
```


Installation completed.


![Vd3IGPzEb6mh5Ol.png](https://s2.loli.net/2022/06/08/Vd3IGPzEb6mh5Ol.png)


Open ports 80 and 443.


![RZDTNCF8owfHLJE.png](https://s2.loli.net/2022/06/09/RZDTNCF8owfHLJE.png)


### **2. Displaying Static Web Pages with Apache**


The default Apache page can be accessed normally.


![CLFptic1Vf8M6qA.png](https://s2.loli.net/2022/06/09/CLFptic1Vf8M6qA.png)


PHP was also installed, and the Apache configuration file was adjusted, allowing Apache to serve static PHP web pages.


![RoLKMk3T19vW4FY.png](https://s2.loli.net/2022/06/09/RoLKMk3T19vW4FY.png)


### **3. Displaying Dynamic Pages with Apache**


As with Nginx, PHP functions retrieve and output the IP address, operating system, and browser of the client accessing the server, thereby enabling dynamic web page display.


![zX7Wxrg9Bf2Lhmv.png](https://s2.loli.net/2022/06/09/zX7Wxrg9Bf2Lhmv.png)


## **5、Experiment Summary**


### **5.1 Problems and Solutions**

> Problem: An error occurred while compiling and installing the dependency packages. Solution: This was because GCC was not installed; it can be installed using yum. yum -y install gcc Problem: Nginx could not be found when running nginx, resulting in an error. Solution: This was because the Nginx path had not been defined as a global variable. It worked normally after being set as a global variable. vim /etc/profilesource /etc/profilenginx -s reload

### **5.2 Lessons Learned**

- This experiment provided familiarity with deploying web pages using Nginx and Apache and verified the knowledge learned in class. Through this experiment, I mastered the specific procedures for using Nginx and Apache, learned the basics of configuring commonly used software on Linux, and improved my programming skills.
- By using these common Linux commands and configuring and working with Nginx and Apache, I was able to verify the knowledge learned in class.
