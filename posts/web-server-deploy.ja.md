---
title: '実験8 Webサーバーの導入と応用'
published: 2022-07-01
updated: 2022-07-01
description: '本実験は、電子メールシステムの構造、クライアントとサーバー間の通信、およびSMTP・POP3プロトコルの理解を目的としています。Alibaba Cloud上にNginxとApacheをインストールしてデプロイし、静的・動的Webページへのアクセスを実演するとともに、依存パッケージのインストールに関する問題を解決し、Linuxでのソフトウェア設定に対する理解とプログラミング能力を向上させました。'
image: 'https://r2.dreaife.tokyo/notion/covers/092e2f9199ad4baf8703ae177d13fba1/4668a3eb0510cf37.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

# **1．実験目的**

- 電子メールシステムの基本構造を理解する
- クライアント側とサーバー側、およびサーバー間の通信を理解する
- SMTP、POP3プロトコルを分析し理解する

## **2．実験環境**

- ハードウェア要件：Alibaba Cloud ECSインスタンス1台。
- ソフトウェア要件：Linux／Windowsオペレーティングシステム

## **3．実験内容**


### **3.1 Nginxのインストールとデプロイ**


Nginxは、軽量なWebサーバー／リバースプロキシサーバーおよび電子メール（IMAP／POP3）プロキシサーバーです。


本実験では、WebサーバーNginxをインストールおよびデプロイし、基本的な静的Webページと動的Webページへのアクセスを実現します。Webページの内容は問いません。


参考資料：


[https://nginx.org/en/download.html](https://nginx.org/en/download.html)


[https://blog.csdn.net/qq_33454884/article/details/89212702](https://blog.csdn.net/qq_33454884/article/details/89212702)


### **3.2 Apacheのインストールとデプロイ**


Apacheは、最も普及しているWebサーバーソフトウェアの一つです。高速かつ安定しています。


本実験では、WebサーバーApacheをインストールおよびデプロイし、基本的な静的Webページと動的Webページへのアクセスを実現します。Webページの内容は問いません。


参考資料：


[https://www.apache.org/](https://www.apache.org/)


[https://blog.csdn.net/weixin_42709659/article/details/81938176](https://blog.csdn.net/weixin_42709659/article/details/81938176)


## **4．実験結果と分析**


### **3.1 Nginxのインストールとデプロイ**


### **1. Nginxのインストールとデプロイ**

- 依存パッケージ`openssl`、`zlib`、`pcre`をインストール
- Nginxをインストール

```plain text
tar -zxvf nginx-1.22.0.tar.gz
cd nginx-1.22.0
./configure --prefix=/usr/install/nginx --with-pcre=../pcre2-10.40 --with-zlib=../zlib-1.2.12 --with-openssl=../openssl-3.0.3
make && make install
```


実行結果から、インストールが完了したことを確認しました。


![cM8xHj7TBGQK6LD.png](https://s2.loli.net/2022/06/09/cM8xHj7TBGQK6LD.png)


### **2. Nginxで静的ページを表示**


Nginxのデフォルトホームページに正常にアクセスできました。


![ZCKyAR8J3qwSd7k.png](https://s2.loli.net/2022/06/09/ZCKyAR8J3qwSd7k.png)


また、PHPをインストールし、NginxのPHPサポート設定を有効にすることで、Nginxで静的なPHP Webページを表示できるようにしました。


![dULTw3emJsDc9y7.png](https://s2.loli.net/2022/06/09/dULTw3emJsDc9y7.png)


### **3. Nginxで動的ページを表示**


PHP関数を使用して、サーバーにアクセスしたクライアントのIPアドレス、システム、ブラウザーを取得して出力することで、Webページの動的表示を実現しました。


![F9euimjgq3sAPcw.png](https://s2.loli.net/2022/06/09/F9euimjgq3sAPcw.png)


![9R3SEbsXkmifLZ1.png](https://s2.loli.net/2022/06/09/9R3SEbsXkmifLZ1.png)


### **3.2 Apacheのインストールとデプロイ**


### **1. Apacheのインストールとデプロイ**


yumを使用してApacheをインストールし、サービスを起動して自動起動を有効にしました。


```plain text
yum groupinstall web* -y
systemctl restart httpd
systemctl enablehttpd
```


インストールが完了しました。


![Vd3IGPzEb6mh5Ol.png](https://s2.loli.net/2022/06/08/Vd3IGPzEb6mh5Ol.png)


ポート80とポート443を開放しました。


![RZDTNCF8owfHLJE.png](https://s2.loli.net/2022/06/09/RZDTNCF8owfHLJE.png)


### **2. Apacheで静的Webページを表示**


Apacheのデフォルトホームページに正常にアクセスできました。


![CLFptic1Vf8M6qA.png](https://s2.loli.net/2022/06/09/CLFptic1Vf8M6qA.png)


また、PHPをインストールしてApacheの設定ファイルを調整することで、Apacheで静的なPHP Webページを表示できるようにしました。


![RoLKMk3T19vW4FY.png](https://s2.loli.net/2022/06/09/RoLKMk3T19vW4FY.png)


### **3. Apacheで動的ページを表示**


Nginxと同様に、PHP関数を使用して、サーバーにアクセスしたクライアントのIPアドレス、システム、ブラウザーを取得して出力することで、Webページの動的表示を実現しました。


![zX7Wxrg9Bf2Lhmv.png](https://s2.loli.net/2022/06/09/zX7Wxrg9Bf2Lhmv.png)


## **5、実験のまとめ**


### **5.1 問題と解決方法**

> 問題：依存パッケージをコンパイルしてインストールする際にエラーが発生しました。解決方法：この問題はGCCがインストールされていないことが原因であり、yumを使用してインストールすれば解決できます。yum -y install gcc問題：nginxの実行時にNginxが見つからず、エラーが発生しました。解決方法：この問題はNginxのパスがグローバル変数として定義されていなかったことが原因であり、グローバル変数に設定すると正常に動作しました。vim /etc/profilesource /etc/profilenginx -s reload

### **5.2 感想**

- 今回の実験を通じて、NginxとApacheを使用したWebページのデプロイに習熟し、授業で学んだ知識を実際に確認できました。また、NginxとApacheを使用する具体的な手順を習得し、Linuxで一般的に使用されるソフトウェアの基本的な設定方法を理解するとともに、自身のプログラミング能力を向上させることができました。
- これらの一般的なLinuxコマンドを操作し、NginxとApacheを設定・使用することで、授業で学んだ知識を確認できました。
