---
title: '実験9 暗号化、デジタル署名と証明書'
published: 2022-07-01
updated: 2022-07-01
description: 'この実験では、共通鍵暗号、公開鍵暗号、ハッシュ関数、デジタル署名、デジタル証明書の概念と応用を理解することを目的とし、OpenSSLを用いて暗号化・復号、鍵ペアの生成、デジタル署名、自己署名証明書の作成を行いました。実験中に発生した問題を解決することで、プログラミング能力とLinuxコマンドへの理解が深まりました。'
image: 'https://r2.dreaife.tokyo/notion/covers/ead9a6ad0dad4177bebb60afc7f8009d/6d45869cbcd30156.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

## **1．実験目的**

- 対称暗号方式、非対称暗号方式の概念を理解する
- ハッシュ関数、デジタル署名、デジタル証明書の概念と理論を理解する
- `Openssl`を利用した対称暗号化、鍵ペアの作成および利用方法を習得する
- `Openssl`を利用したデジタル署名とデジタル証明書の作成および利用方法を習得する

## **2．実験環境**

- ハードウェア要件：Alibaba Cloud ECSインスタンス1台。
- ソフトウェア要件：Linux／Windowsオペレーティングシステム

## **3．実験内容**


OpenSSLはオープンソースのソフトウェアライブラリパッケージです。アプリケーションはこのパッケージを使用して安全な通信を行い、盗聴を防ぐとともに、接続相手の身元を確認できます。このパッケージはインターネット上のWebサーバーで広く利用されています。


**参考資料：**


[https://www.openssl.org/](https://www.openssl.org/)


[https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download](https://gitee.com/mirrors/openssl?utm_source=alading&utm_campaign=repo#download)


[https://www.openssl.org/](https://www.openssl.org/)


[https://www.jianshu.com/p/fb2ae3dc7986](https://www.jianshu.com/p/fb2ae3dc7986)


[https://www.yisu.com/zixun/21796.html](https://www.yisu.com/zixun/21796.html)


### **3.1 対称暗号化**


`Openssl`をインストールし、任意の内容を含むテキストファイルlx.txtを用意して、対称暗号アルゴリズムによりlx.txtの暗号化と復号を行います。


**要件：手順を文章で説明し、現在の操作と各パラメーターの意味を解説したうえで、該当する操作画面のスクリーンショットを提示すること**


### **3.2 ハッシュ関数**


lx.txtのMD5およびSHA256ハッシュ値を計算します


### **3.3 非対称暗号化**


2048ビットの公開鍵暗号方式によるRSA鍵ペアを作成します。作成した公開鍵でlx.txtを暗号化し、秘密鍵で復号します


### **3.4 デジタル署名**


ファイルlx.txtにデジタル署名を行い、検証します


### **3.5 証明書**


`openssl`を使用して自己署名証明書を作成します


## **4．実験結果と分析**


### **4.1 対称暗号化**

1. `Openssl`をインストールする

```plain text
yum info openssl    //检查openssl版本
yum update openssl  //更新openssl
```

1. 暗号アルゴリズムを使用して暗号化と復号を行う
- lx.txtファイルを作成する

![9A5TmHWvDkIqu83.png](https://s2.loli.net/2022/06/12/9A5TmHWvDkIqu83.png)

- 暗号化

```plain text
openssl enc -e -des -in lx.txt -out lx1.txt
```


![PEQLCYzpkm8dOGt.png](https://s2.loli.net/2022/06/12/PEQLCYzpkm8dOGt.png)


暗号化に成功しました

- 復号

```plain text
openssl enc -d -des -in lx1.txt -out lx1.txt
```


![eBMfwzKmXyCcahr.png](https://s2.loli.net/2022/06/12/eBMfwzKmXyCcahr.png)


復号に成功しました


### **4.2 ハッシュ関数**


lx.txtのMD5およびSHA256ハッシュ値を計算します

- MD5を計算する

```plain text
openssl md5 -out lx.txt.md5 lx.txt
cat lx.txt.md5
```


![XSIpCiHKY1sxRcN.png](https://s2.loli.net/2022/06/12/XSIpCiHKY1sxRcN.png)

- SHA256ハッシュ値を計算する

```plain text
openssl sha256 -out lx.txt.sha lx.txt
cat lx.txt.sha
```


![32wdiMY9o1FtBTp.png](https://s2.loli.net/2022/06/12/32wdiMY9o1FtBTp.png)


### **4.3 非対称暗号化**


2048ビットの公開鍵暗号方式によるRSA鍵ペアを作成します。作成した公開鍵でlx.txtを暗号化し、秘密鍵で復号します


```plain text
OpenSSL> genrsa -out RsaPrivateKey.pem 2048
OpenSSL> rsa -in RsaPrivateKey.pem -pubout -out RsaPublicKey.pem
OpenSSL> rsautl -in plain.txt -out enc.txt -inkey RSAPublicKey.pem -pubin -encrypt
OpenSSL> rsautl -in enc.txt -out replain.txt -inkey RSAPrivateKey.pem -decrypt
```


![PZNMUg4Ss7ke1L8.png](https://s2.loli.net/2022/06/12/PZNMUg4Ss7ke1L8.png)


鍵の作成が完了しました


![KlN3SMRq8dEXZQ5.png](https://s2.loli.net/2022/06/12/KlN3SMRq8dEXZQ5.png)


公開鍵を生成しました


![HzujWoMiJ2grXlV.png](https://s2.loli.net/2022/06/12/HzujWoMiJ2grXlV.png)


暗号化および復号後のファイル


### **4.4 デジタル署名**


ファイルlx.txtにデジタル署名を行い、検証します


```plain text
sha1 -out digest.txt lx.txt
rsautl -sign -inkey RsaPrivateKey.pem -in digest.txt -out signT.bin
rsautl -verify -inkey RsaPublicKey.pem -pubin -keyform PEM -in signT.bin
```


![b5jAVxnSl6UYskf.jpg](https://s2.loli.net/2022/06/12/b5jAVxnSl6UYskf.jpg)


### **4.5 証明書**


`openssl`を使用して自己署名証明書を作成します


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


### **5.1 問題と解決方法**

> 問題：デジタル署名を行う際、sha1 -out digest.txt lx.txtコマンドの実行時にエラーが発生しました。原因はsha1コマンドをshalと入力していたことでした。sha1 -out digest.txt lx.txtと正しく入力することで解決しました。

### **5.2 感想**

- 今回の実験レポートを通じて、OpenSSLを使用したファイルの暗号化と自己署名証明書の作成について理解を深め、授業で学んだ知識を確認できました。この実験により、OpenSSLを使用する具体的な手順を習得し、Linuxで一般的に使用されるソフトウェアの基本的な設定方法を理解するとともに、自身のプログラミング能力を向上させることができました。
- これらの一般的なLinuxコマンドによる操作とOpenSSLの設定・使用を通じて、授業で学んだ知識を確認できました。
