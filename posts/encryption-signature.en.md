---
title: 'Experiment 9: Encryption, Digital Signatures, and Certificates'
published: 2022-07-01
updated: 2022-07-01
description: 'This experiment aims to understand the concepts and applications of symmetric encryption, asymmetric encryption, hash functions, digital signatures, and digital certificates. It uses OpenSSL for related operations including encryption and decryption, key pair generation, digital signatures, and creation of self-signed certificates. Problems encountered during the experiment were solved, improving programming skills and understanding of Linux commands.'
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

Key pair generated

![KlN3SMRq8dEXZQ5.png](https://s2.loli.net/2022/06/12/KlN3SMRq8dEXZQ5.png)

Public key generated

![HzujWoMiJ2grXlV.png](https://s2.loli.net/2022/06/12/HzujWoMiJ2grXlV.png)

Files before and after encryption/decryption

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
