---
title: 'Experiment 9: Encryption, Digital Signatures, and Certificates'
published: 2022-07-01
updated: 2022-07-01
description: 'This experiment explores the concepts and applications of symmetric encryption, asymmetric encryption, hash functions, digital signatures, and digital certificates. OpenSSL is used for encryption and decryption, key pair generation, digital signing, and self-signed certificate creation. Troubleshooting issues encountered during the experiment also improved programming skills and understanding of Linux commands.'
image: 'https://r2.dreaife.tokyo/notion/covers/ead9a6ad0dad4177bebb60afc7f8009d/6d45869cbcd30156.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

## **1．Experiment Objectives**

- Understand the concepts of symmetric and asymmetric cryptosystems
- Understand the concepts and theories of hash functions, digital signatures, and digital certificates
- Master symmetric encryption and key-pair creation and application using `Openssl`
- Master the creation and application of digital signatures and digital certificates using `Openssl`

## **2．Experiment Environment**

- Hardware requirement: One Alibaba Cloud ECS instance.
- Software requirement: Linux/Windows operating system

## **3．Experiment Content**


OpenSSL is an open-source software library package that applications can use for secure communication, preventing eavesdropping while verifying the identity of the party at the other end of the connection. This package is widely used by web servers on the Internet.


**References:**


[https://www.openssl.org/](https://www.openssl.org/)


[https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download](https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download)


[https://www.openssl.org/](https://www.openssl.org/)


[https://www.jianshu.com/p/fb2ae3dc7986](https://www.jianshu.com/p/fb2ae3dc7986)


[https://www.yisu.com/zixun/21796.html](https://www.yisu.com/zixun/21796.html)


### **3.1 Symmetric Encryption**


Install `Openssl` and prepare a text document named lx.txt containing any content. Use a symmetric encryption algorithm to encrypt and decrypt lx.txt.


**Requirements: Include a written description of the process, explain the current operation and the meaning of its parameters, and provide screenshots of the corresponding operations.**


### **3.2 Hash Functions**


Calculate the MD5 and SHA256 hash values of lx.txt.


### **3.3 Asymmetric Encryption**


Create a 2048-bit RSA key pair for a public-key cryptosystem. Encrypt lx.txt using the generated public key and decrypt it using the private key.


### **3.4 Digital Signatures**


Digitally sign and verify the lx.txt file.


### **3.5 Certificates**


Use `openssl` to create a self-signed certificate.


## **4．Experiment Results and Analysis**


### **4.1 Symmetric Encryption**

1. Install `Openssl`

```plain text
yum info openssl    //检查openssl版本
yum update openssl  //更新openssl
```

1. Encrypt and decrypt using an encryption algorithm
- Create the lx.txt file

![9A5TmHWvDkIqu83.png](https://s2.loli.net/2022/06/12/9A5TmHWvDkIqu83.png)

- Encrypt

```plain text
openssl enc -e -des -in lx.txt -out lx1.txt
```


![PEQLCYzpkm8dOGt.png](https://s2.loli.net/2022/06/12/PEQLCYzpkm8dOGt.png)


Encryption successful

- Decrypt

```plain text
openssl enc -d -des -in lx1.txt -out lx1.txt
```


![eBMfwzKmXyCcahr.png](https://s2.loli.net/2022/06/12/eBMfwzKmXyCcahr.png)


Decryption successful


### **4.2 Hash Functions**


Calculate the MD5 and SHA256 hash values of lx.txt.

- Calculate MD5

```plain text
openssl md5 -out lx.txt.md5 lx.txt
cat lx.txt.md5
```


![XSIpCiHKY1sxRcN.png](https://s2.loli.net/2022/06/12/XSIpCiHKY1sxRcN.png)

- Calculate the SHA256 hash value

```plain text
openssl sha256 -out lx.txt.sha lx.txt
cat lx.txt.sha
```


![32wdiMY9o1FtBTp.png](https://s2.loli.net/2022/06/12/32wdiMY9o1FtBTp.png)


### **4.3 Asymmetric Encryption**


Create a 2048-bit RSA key pair for a public-key cryptosystem. Encrypt lx.txt using the generated public key and decrypt it using the private key.


```plain text
OpenSSL> genrsa -out RsaPrivateKey.pem 2048
OpenSSL> rsa -in RsaPrivateKey.pem -pubout -out RsaPublicKey.pem
OpenSSL> rsautl -in plain.txt -out enc.txt -inkey RSAPublicKey.pem -pubin -encrypt
OpenSSL> rsautl -in enc.txt -out replain.txt -inkey RSAPrivateKey.pem -decrypt
```


![PZNMUg4Ss7ke1L8.png](https://s2.loli.net/2022/06/12/PZNMUg4Ss7ke1L8.png)


Key creation complete


![KlN3SMRq8dEXZQ5.png](https://s2.loli.net/2022/06/12/KlN3SMRq8dEXZQ5.png)


Generate the public key


![HzujWoMiJ2grXlV.png](https://s2.loli.net/2022/06/12/HzujWoMiJ2grXlV.png)


Files after encryption and decryption


### **4.4 Digital Signatures**


Digitally sign and verify the lx.txt file.


```plain text
sha1 -out digest.txt lx.txt
rsautl -sign -inkey RsaPrivateKey.pem -in digest.txt -out signT.bin
rsautl -verify -inkey RsaPublicKey.pem -pubin -keyform PEM -in signT.bin
```


![b5jAVxnSl6UYskf.jpg](https://s2.loli.net/2022/06/12/b5jAVxnSl6UYskf.jpg)


### **4.5 Certificates**


Use `openssl` to create a self-signed certificate.


```plain text
genrsa -des3 -out ca.key 1024
rsa -in ca.key -out ca.key
req -new -x509 -key ca.key -out ca.crt -days 365
genrsa -des3 -out server.key 2048
req -new -key server.key -out server.csr
x509 -req -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt -days 365
```


![fdRanm3e5BElwuU.jpg](https://s2.loli.net/2022/06/12/fdRanm3e5BElwuU.jpg)


## **5、Experiment Summary**


### **5.1 Problems and Solutions**

> Problem: When creating the digital signature, an error occurred while running the sha1 -out digest.txt lx.txt command. Solution: The error occurred because the sha1 command was mistyped as shal. Entering sha1 -out digest.txt lx.txt correctly resolved the issue.

### **5.2 Reflections**

- This experiment familiarized me with using OpenSSL to encrypt files and create self-signed certificates, reinforcing the knowledge learned in class. Through this experiment, I mastered the specific process of using OpenSSL, learned the basic usage of commonly used Linux configuration software, and improved my programming skills.
- By using these common Linux commands to configure and operate OpenSSL, I reinforced the knowledge learned in class.
