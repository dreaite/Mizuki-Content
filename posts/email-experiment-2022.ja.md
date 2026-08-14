---
title: '実験5 電子メール'
published: 2022-07-01
updated: 2022-07-01
description: '本実験は、SMTPやPOP3を含む電子メールシステムの基本構造と通信プロトコルの理解を目的としています。メールエージェント、クライアント、Webメール、telnetコマンドを使用してメールを送受信し、その通信過程とプロトコルを分析しました。実験を通じて、メール送信の具体的な流れとSMTPプロトコルの分析方法を習得し、プログラミング能力およびプロトコルへの理解を深めました。'
image: 'https://r2.dreaife.tokyo/notion/covers/04494c67f6c14b5d8a184b32d9acc165/663438ca13025ac9.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

## **1．実験目的**

- 電子メールシステムの基本構造を理解する
- クライアントとサーバー間、およびサーバー同士の通信を理解する
- SMTP、POP3プロトコルを分析・理解する

## **2．実験環境**

- ハードウェア要件：Alibaba Cloud ECSインスタンス1台。
- ソフトウェア要件：Linux／Windowsオペレーティングシステム

## **3．実験内容**


### **3.1 メールエージェントを使用したメールの送受信**


メールユーザーエージェント（例：`windows`の`Outlook` `Express`、`linux`のThunderbirdなど。システム標準のものを使用しても、各自でダウンロードしてもよい。）を設定し、ローカルでメールを作成して自分のQQメールを受信する。


### **3.2 ローカルでのメール送受信**


ローカルクライアントを使用してQQメールを作成・送信する。同時に`Wireshark`でパケットをキャプチャし、その通信プロセスと通信プロトコルを分析する。


### **3.3 Webメール**


ブラウザからQQメールにログインし、QQメールを作成・送信する。同時に`Wireshark`でパケットをキャプチャし、その通信プロセスと通信プロトコルを分析する。


### **3.4 telnetによるメール送受信**


`telnet`コマンドでQQメールサーバーにログインし、電子メールを送信する。同時に`Wireshark`でパケットをキャプチャし、その通信プロセスと通信プロトコルを分析する。


具体的な操作コマンドとポート番号については、各自でインターネット上の資料を調べて確認する。


## **4．実験結果と分析**


### **4.1 メールエージェントを使用したメールの送受信**

1. QQメールにアクセスし、POP3/SMTPサービスを有効にして認証コードを取得する。

![WAPvTMgEO7DYlX9.png](https://s2.loli.net/2022/06/06/WAPvTMgEO7DYlX9.png)

1. QQメールが提供するチュートリアルに従い、OutlookとQQメールの連携設定を完了する。

![nyDNv6BM2EXT8W4.png](https://s2.loli.net/2022/06/06/nyDNv6BM2EXT8W4.png)


### **4.2 ローカルでのメール送受信**

1. アカウントのSSLを無効にする。

![pdY93TjtRnJUafk.png](https://s2.loli.net/2022/06/06/pdY93TjtRnJUafk.png)

1. `wireshark`を使用してWLANのパケットをキャプチャし、メールを送信する。

![e5dzHk21IfX4xBa.png](https://s2.loli.net/2022/06/06/e5dzHk21IfX4xBa.png)

1. `wireshark`を使用してSMTPを追跡する。

![L83wZDIPviyQljA.png](https://s2.loli.net/2022/06/06/L83wZDIPviyQljA.png)

1. 通信プロセスと通信プロトコルを分析する。

```plain text
C: telnet imap.qq.com 25                                                //以telnet方式连接qq邮件服务器
S: 220 newxmesmtplogicsvrszc10.qq.com XMail Esmtp QQ Mail Server.       //连接成功，220为响应数字，后面为欢迎信息
C: EHLO DREAIFEDESKTOP                                                  //向服务器表明身份
S: 250-newxmesmtplogicsvrszc10.qq.com | PIPELINING | SIZE 73400320 | STARTTLS | AUTH LOGIN PLAIN XOAUTH XOAUTH2 | AUTH=LOGIN | MAILCOMPRESS | 8BITMIME                                                  //成功
C: AUTH LOGIN                                                           //登录账号
S: 334 VXNlcm5hbWU6
C: User: ODc3MjYxNzkzQHFxLmNvbQ==                                       //输入账号与授权码的base64编码
S: 334 UGFzc3dvcmQ6
C: Pass: enVqbnVobWFhcnB5YmJiYg==
S: 235 Authentication successful
C: MAIL FROM: <877261793@qq.com>                                        //发送人邮箱
S: 250 OK
C: RCPT TO: <877261793@qq.com>                                          //收信人邮箱
S: 250 OK
C: DATA                                                                 //邮件内容
S: 354 End data with <CR><LF>.<CR><LF>.
C: DATA fragment, 2429 bytes
from: <877261793@qq.com>, subject:  ,  (text/plain) (text/html)
S: 250 OK: queued as.
C: QUIT                                                                 //发送完成并退出
S：221 Bye
```


### **4.3 Webメール**

1. `wireshark`を使用してWLANのパケットをキャプチャし、メールを送信する。

![9yA3gaBJip5nZFx.png](https://s2.loli.net/2022/06/06/9yA3gaBJip5nZFx.png)

1. `wireshark`を使用して`tls/ssl`を追跡する。

![f56VQIEgGpxHtyr.png](https://s2.loli.net/2022/06/06/f56VQIEgGpxHtyr.png)

1. 通信プロセスと通信プロトコルを分析する。
> Client Hello
>
> ![SPGzmxOXKJpVorj.png](https://s2.loli.net/2022/06/06/SPGzmxOXKJpVorj.png)
>
>
> TLSハンドシェイクの最初のステップでは、クライアントがリクエストを開始する。これには主にクライアントが生成したランダム文字列（session key）のほか、クライアントがサポートする暗号スイートの一覧や乱数などの情報が含まれる。
>
>
> ![MUh98dIWNmpn1Lc.png](https://s2.loli.net/2022/06/06/MUh98dIWNmpn1Lc.png)
>
> 1. Server Hello && Certificate
>
> ![Aa2ZoQi6EhGBbeR.png](https://s2.loli.net/2022/06/06/Aa2ZoQi6EhGBbeR.png)
>
>
> サーバーはクライアントのClient Helloパケットを受信すると、クライアントから送信された暗号スイートの一覧に基づいて暗号スイートを1つ選択し、ランダム文字列を生成してクライアントに返す。鍵交換アルゴリズムにはECDHE_RSA、共通鍵暗号アルゴリズムにはAES_128_GCM_SHA256が選択されており、同時にサーバーの証明書情報も返される。
>
>
> ![phEZKM1VHBfUAdt.png](https://s2.loli.net/2022/06/06/phEZKM1VHBfUAdt.png)
>
> 1. Server Key Exchange & Server Hello Done
>
> ![3RYzrJUFaiPZKAM.png](https://s2.loli.net/2022/06/06/3RYzrJUFaiPZKAM.png)
>
>
> サーバーは、データ暗号化に使用する鍵をクライアントと交換するためにServer Key Exchangeパケットを返す。Server Hello Doneは、鍵交換用データの送信が完了し、クライアントからの応答を待っていることを通知するために使用される。
>
>
> ![EvhOaj35WegzYoF.png](https://s2.loli.net/2022/06/06/EvhOaj35WegzYoF.png)
>
> 1. Client Key Change & Change Cipher Spec & Encrypted HandShake Message
>
> ![w1rncSCU9YBhsiR.png](https://s2.loli.net/2022/06/06/w1rncSCU9YBhsiR.png)
>
>
> クライアントはサーバーから返されたDHデータに基づいてDHデータを生成し、サーバーへ送信する。これは最終的なpre-master-secretを生成するために使用される。次の図に示す。
>
>
> ![7GXgdnSAIuFOCfe.png](https://s2.loli.net/2022/06/06/7GXgdnSAIuFOCfe.png)
>
> 1. Application Data
>
> ![QZ9AqUsz3n7NGSw.png](https://s2.loli.net/2022/06/06/QZ9AqUsz3n7NGSw.png)
>
> 1. Change Cipher Spec & Encrypted HandShake Message
>
> ![TjVrHfLqJBPXeYc.png](https://s2.loli.net/2022/06/06/TjVrHfLqJBPXeYc.png)
>
>
> セッション鍵は一定時間ごとに更新する必要がある。
>
>
> ![rwfkcnzlxQ1DBSL.png](https://s2.loli.net/2022/06/06/rwfkcnzlxQ1DBSL.png)
>
>

### **4.4 telnetによるメール送受信**

1. コンピューターの`Telnet`を有効にし、`wireshark`でパケットをキャプチャする。

![DldVe27vhCkrOQ4.png](https://s2.loli.net/2022/06/06/DldVe27vhCkrOQ4.png)

1. `cmd`を開いて操作する。
> telnet imap.qq.com 25と入力してサーバーに接続した後、次のコードを入力する。
>
> ![bOlcSHmnQYNGPyq.png](https://s2.loli.net/2022/06/06/bOlcSHmnQYNGPyq.png)
>
> 1. メールの送信が完了する。
>
> ![SGZ1ThwLfAgRnIU.png](https://s2.loli.net/2022/06/06/SGZ1ThwLfAgRnIU.png)
>
>
1. 通信プロセスと通信プロトコルを分析する。

```plain text
C: telnet imap.qq.com 25                                                //以telnet方式连接qq邮件服务器
S: 220 newxmesmtplogicsvrszc10.qq.com XMail Esmtp QQ Mail Server.       //连接成功，220为响应数字，后面为欢迎信息
C: helo qq.com                                                          //向服务器表明身份
S: 250-newxmesmtplogicsvrsza5.qq.com-9.22.14.83-57293480
S: 250-SIZE 73400320
S: 250 OK                                                               //成功
C: auth login                                                           //登录账号
S: 334 VXNlcm5hbWU6
C: User: ODc3MjYxNzkzQHFxLmNvbQ==                                       //输入账号与授权码的base64编码
S: 334 UGFzc3dvcmQ6
C: Pass: enVqbnVobWFhcnB5YmJiYg==
S: 235 Authentication successful
C: MAIL FROM: <877261793@qq.com>                                        //发送人邮箱
S: 250 OK
C: RCPT TO: <877261793@qq.com>                                          //收信人邮箱
S: 250 OK
C: DATA                                                                 //邮件内容
S: 354 End data with <CR><LF>.<CR><LF>.
C: DATA fragment, 2429 bytes
from: <877261793@qq.com>, subject:  ,  (text/plain) (text/html)
S: 250 OK: queued as.
C: QUIT                                                                 //发送完成并退出
S：221 Bye
```


## **5、実験のまとめ**


### **5.1 問題と解決方法**

> 問題：Xftpを使用してサーバーに接続した際、接続エラーが発生した。解決方法：キャンパスネットワークに接続すると正常に戻った。調査の結果、サーバーのファイアウォールが原因であることが判明した。

### **5.2 感想**

- 今回の実験レポートを通じて、SMTPプロトコルの分析過程におけるコードやソフトウェアの操作、およびSMTPメッセージの分析と抽出に習熟し、授業で学んだ知識を検証することができた。この実験を通じて、telnetでメールを送信する具体的な流れと手順を習得し、一般的なSMTPプロトコル解析ソフトウェアの基本的な使用方法を理解するとともに、自身のプログラミング能力を向上させることができた。
- 一般的なSMTPプロトコル解析コマンドの操作、SMTPプロトコル使用時のトレース分析、SMTPメッセージの構造分析を通じて、授業で学んだ知識を検証することができた。
