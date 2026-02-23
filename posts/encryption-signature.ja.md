---
title: '実験9 暗号化・デジタル署名・証明書'
published: 2022-07-01
updated: 2022-07-01
description: '本実験は、共通鍵暗号、公開鍵暗号、ハッシュ関数、デジタル署名、デジタル証明書の概念と応用を理解することを目的としています。OpenSSLを用いて、暗号化/復号、鍵ペア生成、デジタル署名、自己署名証明書の作成などを行います。実験中に発生した問題を解決することで、プログラミング能力とLinuxコマンドへの理解を高めました。'
image: 'https://r2.dreaife.tokyo/notion/covers/ead9a6ad0dad4177bebb60afc7f8009d/6d45869cbcd30156.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

## **1. 実験目的**

- 対称暗号・非対称暗号体制の概念を理解する
- ハッシュ関数、デジタル署名、およびデジタル証明書の概念と理論を理解する
- OpenSSL に基づく対称暗号、鍵対の作成と適用を習得する
- OpenSSL に基づくデジタル署名およびデジタル証明書の作成と適用を習得する

## **2. 実験環境**

- ハードウェア要件: Alibaba Cloud の ECS を1台。
- ソフトウェア要件: Linux/ Windows オペレーティングシステム

## **3. 実験内容**

OpenSSL はオープンソースのソフトウェアライブラリです。アプリケーションはこのライブラリを使用して安全な通信を行い、盗聴を回避し、相手側の接続者の身元を確認することができます。このライブラリはインターネットのウェブサーバーに広く使用されています。

**参考資料：**


[https://www.openssl.org/](https://www.openssl.org/)


[https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download](https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download)


[https://www.openssl.org/](https://www.openssl.org/)


[https://www.jianshu.com/p/fb2ae3dc7986](https://www.jianshu.com/p/fb2ae3dc7986)


[https://www.yisu.com/zixun/21796.html](https://www.yisu.com/zixun/21796.html)


### **3.1 対称暗号**

OpenSSL をインストールし、任意の内容のテキスト文書 lx.txt を準備し、対称暗号アルゴリズムを用いて lx.txt を暗号化および復号する操作を行う。

**要件：操作過程を説明する文章を含め、現在の操作およびパラメータの意味を説明し、対応する操作のスクリーンショットを提供すること**

### **3.2 ハッシュ関数**

lx.txt の MD5 および SHA256 ハッシュ値を計算する

### **3.3 非対称暗号**

2048ビットの RSA 鍵ペアを作成する。作成した公開鍵を用いて lx.txt を暗号化し、秘密鍵で復号する操作

```plain text
OpenSSL> genrsa -out RsaPrivateKey.pem 2048
OpenSSL> rsa -in RsaPrivateKey.pem -pubout -out RsaPublicKey.pem
OpenSSL> rsautl -in plain.txt -out enc.txt -inkey RSAPublicKey.pem -pubin -encrypt
OpenSSL> rsautl -in enc.txt -out replain.txt -inkey RSAPrivateKey.pem -decrypt
```


![PZNMUg4Ss7ke1L8.png](https://s2.loli.net/2022/06/12/PZNMUg4Ss7ke1L8.png)


鍵の作成が完了しました


![KlN3SMRq8dEXZQ5.png](https://s2.loli.net/2022/06/12/KlN3SMRq8dEXZQ5.png)


公開鍵を生成


![HzujWoMiJ2grXlV.png](https://s2.loli.net/2022/06/12/HzujWoMiJ2grXlV.png)


暗号化および復号後のファイル


### **4.4 デジタル署名**

lx.txt にデジタル署名を行い、検証する

```plain text
sha1 -out digest.txt lx.txt
rsautl -sign -inkey RsaPrivateKey.pem -in digest.txt -out signT.bin
rsautl -verify -inkey RsaPublicKey.pem -pubin -keyform PEM -in signT.bin
```


![b5jAVxnSl6UYskf.jpg](https://s2.loli.net/2022/06/12/b5jAVxnSl6UYskf.jpg)


### **4.5 証明書**

OpenSSL を使用して自己署名証明書を作成する


```plain text
genrsa -des3 -out ca.key 1024
rsa -in ca.key -out ca.key
req -new -x509 -key ca.key -out ca.crt -days 365
genrsa -des3 -out server.key 2048
req -new -key server.key -out server.csr
x509 -req -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt -days 365
```


![fdRanm3e5BElwuU.jpg](https://s2.loli.net/2022/06/12/fdRanm3e5BElwuU.jpg)


## **5、実験のまとめ**

### **5.1 問題と対策**

> デジタル署名を行う際、sha1 -out digest.txt lx.txt コマンドの実行でエラーが出ました。原因は sha1 コマンドを shal と誤って入力してしまったためであり、sha1 -out digest.txt lx.txt を入力すると正しく動作しました。

### **5.2 学びと感想**

- 本実験レポートは、OpenSSL を用いてファイルの暗号化および自己署名証明書の作成を実践し、授業で学んだ知識を実証しました。今回の実験を通じて、OpenSSL の具体的な使用手順を身につけ、一般的な Linux 設定ソフトウェアの基本的な使い方を理解し、プログラミング能力を向上させました。
- これらの一般的な Linux コマンド操作を通じて、OpenSSL の設定と使用を実践的に確認でき、授業で学んだ知識を裏付けることができました。
