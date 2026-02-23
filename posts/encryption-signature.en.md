---
title: '实验9 加密、数字签名与证书'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在了解对称加密、非对称加密、散列函数、数字签名和数字证书的概念及应用，使用OpenSSL进行相关操作，包括加密解密、生成密钥对、数字签名和自签名证书的创建。实验过程中遇到问题并解决，提升了编程能力和对Linux命令的理解。'
permalink: 'encryption-signature'
image: 'https://r2.dreaife.tokyo/notion/covers/ead9a6ad0dad4177bebb60afc7f8009d/6d45869cbcd30156.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

## **1. Experiment Objectives**

- Understand the concepts of symmetric and asymmetric encryption systems
- Understand the concepts and theory of hash functions, digital signatures, and digital certificates
- Master symmetric encryption, key-pair creation, and application based on `Openssl`
- Master the creation and application of digital signatures and digital certificates based on `Openssl`

## **2. Experimental Environment**

- Hardware requirements: One Alibaba Cloud ECS instance.
- Software requirements: Linux or Windows operating system

## **3. Experiment Content**

OpenSSL is an open-source software library that applications can use to perform secure communications, prevent eavesdropping, and verify the identity of the other connected party. This package is widely used on Internet web servers.

**References:**

[https://www.openssl.org/](https://www.openssl.org/)

[https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download](https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download)

[https://www.openssl.org/](https://www.openssl.org/)

[https://www.jianshu.com/p/fb2ae3dc7986](https://www.jianshu.com/p/fb2ae3dc7986)

[https://www.yisu.com/zixun/21796.html](https://www.yisu.com/zixun/21796.html)

### **3.1 Symmetric Encryption**

Install `Openssl`, and prepare a plaintext document lx.txt with arbitrary content. Use a symmetric encryption algorithm to encrypt and decrypt lx.txt.

**Requirements:** There should be descriptive process text, explanations of the current operation and parameter meanings, and provide corresponding operation screenshots

### **3.2 Hash Functions**

Compute the MD5 and SHA-256 hash values of lx.txt

### **3.3 Asymmetric Encryption**

Create a 2048-bit RSA key pair (public-key cryptosystem). Use the created public key to encrypt lx.txt, and decrypt with the private key

```plain text
OpenSSL> genrsa -out RsaPrivateKey.pem 2048
OpenSSL> rsa -in RsaPrivateKey.pem -pubout -out RsaPublicKey.pem
OpenSSL> rsautl -in plain.txt -out enc.txt -inkey RSAPublicKey.pem -pubin -encrypt
OpenSSL> rsautl -in enc.txt -out replain.txt -inkey RSAPrivateKey.pem -decrypt
```

密匙创建完成

![KlN3SMRq8dEXZQ5.png](https://s2.loli.net/2022/06/12/KlN3SMRq8dEXZQ5.png)

生成公匙

![HzujWoMiJ2grXlV.png](https://s2.loli.net/2022/06/12/HzujWoMiJ2grXlV.png)

加密于解密后文件

### **4.4 Digital Signature**

Digitally sign lx.txt and verify

```plain text
sha1 -out digest.txt lx.txt
rsautl -sign -inkey RsaPrivateKey.pem -in digest.txt -out signT.bin
rsautl -verify -inkey RsaPublicKey.pem -pubin -keyform PEM -in signT.bin
```

![b5jAVxnSl6UYskf.jpg](https://s2.loli.net/2022/06/12/b5jAVxnSl6UYskf.jpg)

### **4.5 Certificate**

Create a self-signed certificate using `openssl`

```plain text
genrsa -des3 -out ca.key 1024
rsa -in ca.key -out ca.key
req -new -x509 -key ca.key -out ca.crt -days 365
genrsa -des3 -out server.key 2048
req -new -key server.key -out server.csr
x509 -req -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt -days 365
```


![fdRanm3e5BElwuU.jpg](https://s2.loli.net/2022/06/12/fdRanm3e5BElwuU.jpg)

## **5. Experimental Summary**

### **5.1 Issues and Solutions**

> During the digital signature step, the command sha1 -out digest.txt lx.txt produced an error. The fix was that sha1 had been mistyped as shal; after entering sha1 -out digest.txt lx.txt, it worked.

### **5.2 Reflections**

- This experiment familiarized me with applying OpenSSL to encrypt files and create self-signed certificates, reinforcing the knowledge presented in class. Through this experiment, I have mastered the concrete workflow of using OpenSSL, learned the basic usage of common Linux configuration software, and improved my programming ability.
- Through these common Linux command operations and OpenSSL configuration and usage, I validated the knowledge learned in class.
