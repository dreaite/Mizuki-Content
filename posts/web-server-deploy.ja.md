---
title: '实验8 WEB服务器的部署与应用'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在理解电子邮件系统结构、客户端与服务器通信及SMTP、POP3协议。通过在阿里云上安装和部署Nginx与Apache，实验展示了静态和动态网页的访问，解决了依赖包安装问题，并提高了对Linux配置软件的掌握与编程能力。'
permalink: 'web-server-deploy'
image: 'https://r2.dreaife.tokyo/notion/covers/092e2f9199ad4baf8703ae177d13fba1/4668a3eb0510cf37.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

# **1. 実験目的**

- 電子メールシステムの基本構造を理解する
- クライアントとサーバー側、そしてサーバー間の通信を理解する
- SMTP、POP3プロトコルを分析・理解する

## **2. 実験環境**

- ハードウェア要件：阿里雲クラウドホストECS 1台。
- ソフトウェア要件：Linux / Windows オペレーティングシステム

## **3. 実験内容**


### **3.1 Nginxのインストールとデプロイ**

Nginxは、軽量なWebサーバー/リバースプロキシサーバーおよびメール（IMAP/POP3）プロキシサーバーです。

本実験では、WebサーバーNginxをインストール・デプロイし、最も基本的な静的ウェブページと動的ウェブページのアクセスを実現します。ページ内容は制限なし。

参考資料：

[https://nginx.org/en/download.html](https://nginx.org/en/download.html)

[https://blog.csdn.net/qq_33454884/article/details/89212702](https://blog.csdn.net/qq_33454884/article/details/89212702)


### **3.2 Apacheのインストールとデプロイ**

Apacheは最も人気のあるWebサーバーソフトウェアの1つです。高速で安定しています。

本実験では、WebサーバーApacheをインストール・デプロイし、最も基本的な静的ウェブページと動的ウェブページのアクセスを実現します。ページ内容は制限なし。

参考資料：

[https://www.apache.org/](https://www.apache.org/)

[https://blog.csdn.net/weixin_42709659/article/details/81938176](https://blog.csdn.net/weixin_42709659/article/details/81938176)


## **4. 実験結果と分析**


### **1. Nginxのインストールとデプロイ**

- Nginxのインストールとデプロイ

- 依存パッケージ`openssl`、`zlib`、`pcre`をインストール
- Nginxをインストール

```plain text
tar -zxvf nginx-1.22.0.tar.gz
cd nginx-1.22.0
./configure --prefix=/usr/install/nginx --with-pcre=../pcre2-10.40 --with-zlib=../zlib-1.2.12 --with-openssl=../openssl-3.0.3
make && make install
```

実行結果はインストール完了を示しています


![cM8xHj7TBGQK6LD.png](https://s2.loli.net/2022/06/09/cM8xHj7TBGQK6LD.png)


### **2. Nginxが静的ページを表示**

Nginx設定のトップページへ正常にアクセスできます。


![ZCKyAR8J3qwSd7k.png](https://s2.loli.net/2022/06/09/ZCKyAR8J3qwSd7k.png)


同時にPHPをインストールし、NginxのPHPサポートを有効にする設定を通じて、Nginxが静的PHPページを表示できるようにします。


![dULTw3emJsDc9y7.png](https://s2.loli.net/2022/06/09/dULTw3emJsDc9y7.png)


### **3. Nginxが動的ページを表示**

PHP関数を使用してサーバーへのアクセス元のIPアドレス、OS、ブラウザを抽出・表示し、ウェブページの動的表示を実現します。


![F9euimjgq3sAPcw.png](https://s2.loli.net/2022/06/09/F9euimjgq3sAPcw.png)


![9R3SEbsXkmifLZ1.png](https://s2.loli.net/2022/06/09/9R3SEbsXkmifLZ1.png)


### **2. Apacheのインストールとデプロイ**

### **1. Apacheのインストールとデプロイ**

 Yumを用いてApacheをインストールし、サービス起動および起動時自動起動を設定します。

```plain text
yum groupinstall web* -y
systemctl restart httpd
systemctl enablehttpd
```

インストール完了


![Vd3IGPzEb6mh5Ol.png](https://s2.loli.net/2022/06/08/Vd3IGPzEb6mh5Ol.png)


80番ポートと443番ポートを開放


![RZDTNCF8owfHLJE.png](https://s2.loli.net/2022/06/09/RZDTNCF8owfHLJE.png)


### **2. Apacheが静的ページを表示**

Apacheのデフォルトトップページへ正常にアクセスできます


![CLFptic1Vf8M6qA.png](https://s2.loli.net/2022/06/09/CLFptic1Vf8M6qA.png)


同時にPHPをインストールし、Apacheの設定ファイルを調整することで、静的PHPウェブページの表示を実現します。


![RoLKMk3T19vW4FY.png](https://s2.loli.net/2022/06/09/RoLKMk3T19vW4FY.png)


### **3. Apacheが動的ページを表示**

Nginxと同様に、PHP関数を用いてサーバーへのアクセス元のIPアドレス・OS・ブラウザを抽出・表示し、ウェブページの動的表示を実現します。


![zX7Wxrg9Bf2Lhmv.png](https://s2.loli.net/2022/06/09/zX7Wxrg9Bf2Lhmv.png)


## **5. 実験のまとめ**


### **5.1 問題と解決策**

> 依存パッケージのビルド・インストール時にエラーが発生しました。原因はGCCが未インストールであったためで、yum -y install gccで解決します。 nginxを実行するとNginxが見つからないエラーが出る場合の原因は、Nginxのアドレスをグローバル変数として定義していなかったためで、グローバル変数として設定すれば正常に動作します。vim /etc/profile; source /etc/profile; nginx -s reload

### **5.2 感想と得たもの**

- 本実験レポートは、NginxとApacheを用いたウェブページのデプロイの運用に熟練し、授業での知識を裏付けることができました。今回の実験を通じて、NginxとApacheの使用手順を具体的に習得し、一般的なLinux設定ソフトウェアの基本的な使い方を理解し、技術力を向上させました。
- これらの一般的なLinuxコマンド操作を通じて、NginxとApacheの設定と使用を実践し、授業で学んだ知識を再確認できました。
