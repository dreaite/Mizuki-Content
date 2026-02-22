---
title: '实验9 加密、数字签名与证书'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在了解对称加密、非对称加密、散列函数、数字签名和数字证书的概念及应用，使用OpenSSL进行相关操作，包括加密解密、生成密钥对、数字签名和自签名证书的创建。实验过程中遇到问题并解决，提升了编程能力和对Linux命令的理解。'
permalink: 'encryption-signature'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/06f3a4e3-e3ac-487d-8b48-a361f3b25869/-6d45869cbcd30156.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNS6BWN%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T113457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CnggUmQNTIWcxpk71sKe%2BtcT0RVUJnkPa1sONfkxywIgWix1CfX3kaputgPwarZUIm7ANIL%2FnkR%2Bs9ctAQYwHUkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoT9%2B%2FRgaZzFud2TSrcA6ZIdkCm0Ediqay5sOB%2BtmFTfvN%2F%2FiM3m%2F741v%2F4WBgrN8nAdCqs3K0VwKqA87HJN%2FOVRcC613qZ8Vk3uuCXBRVmMq3bP4SIlSXY05b9NsSlLB21h4aAJO%2BUo9I5B0OKrge%2FTIMz5t56djaob1uhJaeKQadOFjvvl4vBIoul9KfMJe3GpdLQfkWx5HKq9mGFkHtGO2EWxSRKt1PzPg8778DWmZBTnwZ2YZNpAF8Vp2zEZF6UMPZRWWYTe3AAB65obPV1EWwXRTDaJ9z%2BncisYqkargisww8OzzKImvt5cZILOD8cEL%2Fp2uopoku1gp5jLHz3lvfO6DyEerPRGgpCtAqjNzjhPJLT1T3eqgap6aKwSmtpmKjsPT7jYyAmMNTk92IzUW0sTA9HsYbfl5BQchOJqYBSimo7RP0jfpBzIPcPAjR0IPIpavdDv0u272P00%2BnvavidCmm6%2FjDHZzLK%2FWMhCC1qParzGxRVFKQfj5JIWHcMA2t6qMlrLcqjAZGqb0Sf9jAIV1ylcSFBpa7YSppoqLOEkQwnaRmZiaKxGM%2BouTPJDU71RslQ9XjZWdbID5ENcci%2F98HbSW8Oe5SR3HH5tDagoVWqoCx1Q2uszHPL7uAQ8Z6hoX4Ws%2FRNMIbF6swGOqUBQOf5kXQFX3yokCvwpqOkVYHnJ%2BkSV26e003qD3b5u%2BdxOClHMeiP5JxnpBXoNTy4%2F5LsnK38wifdV7M7j9Zpx3qluNkI115JBCKcURrDbXplhGJUCPuZaVV7yhvlTO3qekjS8%2By3g9Yy4Gdvhf1d3CBLBgYPAxCxE%2Fd9myIs0pAcvhHT4nUEkZwrjkso1JE0Ev147f5qpEKi59tWtwfvL%2Fi4Xl%2Fl&X-Amz-Signature=0a0357883ea6e9b8b743ed7cfa2879d39d7126b2237c55ecf1cf12380503b15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['network', 'school']
category: 'cs-base'
draft: false
---

## **1．实验目的**

- 了解对称加密、非对称加密体制概念
- 了解散列函数、数字签名和数字证书的概念和理论
- 掌握基于`Openssl`的对称加密、密钥对的创建和应用
- 掌握基于`Openssl`数字签名和数字证书的创建和应用

## **2．实验环境**

- 硬件要求：阿里云云主机ECS 一台。
- 软件要求：Linux/ Windows 操作系统

## **3．实验内容**


OpenSSL是一个开放源代码的软件库包，应用程序可以使用这个包来进行安全通信，避免窃听，同时确认另一端连接者的身份。这个包广泛被应用在互联网的网页服务器上。


**参考资料：**


[https://www.openssl.org/](https://www.openssl.org/)


[https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download](https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download)


[https://www.openssl.org/](https://www.openssl.org/)


[https://www.jianshu.com/p/fb2ae3dc7986](https://www.jianshu.com/p/fb2ae3dc7986)


[https://www.yisu.com/zixun/21796.html](https://www.yisu.com/zixun/21796.html)


### **3.1对称加密**


安装`Openssl`，并准备任意内容的文本文档lx.txt，利用对称加密算法对lx.txt进行加密和解密操作。


**要求：要有过程描述文字，解释当前操作以及参数含义，并提供相应操作截图**


### **3.2 散列函数**


计算lx.txt的MD5和SHA256散列值


### **3.3 非对称加密**


创建2048位的公钥密码体制RSA密钥对。利用创建的公钥加密lx.txt，私钥进行解密操作


### **3.4 数字签名**


对文件lx.txt进行数字签名并鉴别


### **3.5 证书**


使用`openssl`创建自签名证书


## **4．实验结果与分析**


### **4.1 对称加密**

1. 安装`Openssl`

```plain text
yum info openssl    //检查openssl版本
yum update openssl  //更新openssl
```

1. 使用加密算法进行加密解密
- 创建lx.txt文件

![9A5TmHWvDkIqu83.png](https://s2.loli.net/2022/06/12/9A5TmHWvDkIqu83.png)

- 加密

```plain text
openssl enc -e -des -in lx.txt -out lx1.txt
```


![PEQLCYzpkm8dOGt.png](https://s2.loli.net/2022/06/12/PEQLCYzpkm8dOGt.png)


加密成功

- 解密

```plain text
openssl enc -d -des -in lx1.txt -out lx1.txt
```


![eBMfwzKmXyCcahr.png](https://s2.loli.net/2022/06/12/eBMfwzKmXyCcahr.png)


解密成功


### **4.2 散列函数**


计算lx.txt的MD5和SHA256散列值

- 计算MD5

```plain text
openssl md5 -out lx.txt.md5 lx.txt
cat lx.txt.md5
```


![XSIpCiHKY1sxRcN.png](https://s2.loli.net/2022/06/12/XSIpCiHKY1sxRcN.png)

- 计算SHA256散列值

```plain text
openssl sha256 -out lx.txt.sha lx.txt
cat lx.txt.sha
```


![32wdiMY9o1FtBTp.png](https://s2.loli.net/2022/06/12/32wdiMY9o1FtBTp.png)


### **4.3 非对称加密**


创建2048位的公钥密码体制RSA密钥对。利用创建的公钥加密lx.txt，私钥进行解密操作


```plain text
OpenSSL> genrsa -out RsaPrivateKey.pem 2048
OpenSSL> rsa -in RsaPrivateKey.pem -pubout -out RsaPublicKey.pem
OpenSSL> rsautl -in plain.txt -out enc.txt -inkey RSAPublicKey.pem -pubin -encrypt
OpenSSL> rsautl -in enc.txt -out replain.txt -inkey RSAPrivateKey.pem -decrypt
```


![PZNMUg4Ss7ke1L8.png](https://s2.loli.net/2022/06/12/PZNMUg4Ss7ke1L8.png)


密匙创建完成


![KlN3SMRq8dEXZQ5.png](https://s2.loli.net/2022/06/12/KlN3SMRq8dEXZQ5.png)


生成公匙


![HzujWoMiJ2grXlV.png](https://s2.loli.net/2022/06/12/HzujWoMiJ2grXlV.png)


加密于解密后文件


### **4.4 数字签名**


对文件lx.txt进行数字签名并鉴别


```plain text
sha1 -out digest.txt lx.txt
rsautl -sign -inkey RsaPrivateKey.pem -in digest.txt -out signT.bin
rsautl -verify -inkey RsaPublicKey.pem -pubin -keyform PEM -in signT.bin
```


![b5jAVxnSl6UYskf.jpg](https://s2.loli.net/2022/06/12/b5jAVxnSl6UYskf.jpg)


### **4.5 证书**


使用`openssl`创建自签名证书


```plain text
genrsa -des3 -out ca.key 1024
rsa -in ca.key -out ca.key
req -new -x509 -key ca.key -out ca.crt -days 365
genrsa -des3 -out server.key 2048
req -new -key server.key -out server.csr
x509 -req -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt -days 365
```


![fdRanm3e5BElwuU.jpg](https://s2.loli.net/2022/06/12/fdRanm3e5BElwuU.jpg)


## **5、实验小结**


### **5.1 问题与解决办法**

> 问题在进行数字签名时，运行sha1 -out digest.txt lx.txt命令错误。解决方法该问题是因为将sha1指令打为shal导致错误，输入sha1 -out digest.txt lx.txt后正确。

### **5.2 心得体会**

- 本次实验报告熟系了应用OpenSSL实现对于文件的加密以及创建自签证书，实现对课上知识的印证。通过这次实验，我掌握了OpenSSL使用的具体流程，了解了常用Linux配置软件的基本用法，提高了自身编程能力。
- 通过这些常用的Linux命令操作，对OpenSSL的配置与使用，让我印证了上课所学的知识。
