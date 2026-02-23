---
title: '实验5 电子邮件'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在理解电子邮件系统的基本结构和通信协议，包括SMTP和POP3。通过使用邮件代理、客户端、Web邮件和telnet命令进行邮件收发，分析其通信过程和协议。实验结果表明，掌握了邮件发送的具体流程和SMTP协议的分析，提高了编程能力和对协议的理解。'
permalink: 'email-experiment-2022'
image: 'https://r2.dreaife.tokyo/notion/covers/04494c67f6c14b5d8a184b32d9acc165/663438ca13025ac9.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

## **1．実験目的**

- メールシステムの基本構造を理解する
- クライアントとサーバー、およびサーバー間の通信を理解する
- SMTPおよびPOP3プロトコルを分析・理解する

## **2．実験環境**

- ハードウェア要件：Alibaba Cloud ECSを1台。
- ソフトウェア要件：Linux/Windows オペレーティングシステム

## **3．実験内容**


### **3.1 使用メール代理受送信**

メールクライアント（例：`windows` `Outlook` `Express`、`linux` の Thunderbird など；OS に付属のものを使用するか、または自分でダウンロードして使用することができます。）、ローカルでメールを作成し、自分のQQメールを受信します。

### **3.2 ローカルでの受送信**

ローカルクライアントを使用してQQメールを作成・送信します。同時にWiresharkを使用して通信の過程と通信プロトコルをキャプチャして分析します。

### **3.3 ウェブメール**

ブラウザを使ってQQメールにログインし、QQメールを作成・送信します。同時にWiresharkを使用して通信の過程と通信プロトコルをキャプチャして分析します。

### **3.4 telnetでの受送信**

telnetコマンドを使用してQQメールサーバへログインし、メールを送信します。同時にWiresharkを使用して通信の過程と通信プロトコルをキャプチャして分析します。

具体的な操作コマンドとポートの照会はネット情報を参照して自分で解決してください。

## **4．実験結果と分析**

### **4.1 使用メール代理受送信**

1. QQメールにアクセスし、POP3/SMTPサービスを有効化し、認証コードを取得する。

![WAPvTMgEO7DYlX9.png](https://s2.loli.net/2022/06/06/WAPvTMgEO7DYlX9.png)

1. QQメールの案内に従ってOutlookをQQメールに紐づける。

![nyDNv6BM2EXT8W4.png](https://s2.loli.net/2022/06/06/nyDNv6BM2EXT8W4.png)


### **4.2 ローカルでの受送信**

1. アカウントのSSLを無効にする

![pdY93TjtRnJUafk.png](https://s2.loli.net/2022/06/06/pdY93TjtRnJUafk.png)

1. Wiresharkを使用してWLANをキャプチャし、メールを送信する

![e5dzHk21IfX4xBa.png](https://s2.loli.net/2022/06/06/e5dzHk21IfX4xBa.png)

1. Wiresharkを使用してSMTPをトレースする

![L83wZDIPviyQljA.png](https://s2.loli.net/2022/06/06/L83wZDIPviyQljA.png)

1. 通信の過程および通信プロトコルを分析する

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


### **4.3 ウェブメール**

1. Wiresharkを使用してWLANをキャプチャし、メールを送信する

![9yA3gaBJip5nZFx.png](https://s2.loli.net/2022/06/06/9yA3gaBJip5nZFx.png)

1. TLS/SSLを追跡するためにWiresharkを使用する

![f56VQIEgGpxHtyr.png](https://s2.loli.net/2022/06/06/f56VQIEgGpxHtyr.png)

1. 通信の過程および通信プロトコルを分析する
> Client Hello
>
> ![SPGzmxOXKJpVorj.png](https://s2.loli.net/2022/06/06/SPGzmxOXKJpVorj.png)
>
>
> TLSハンドシェイクの最初のステップはクライアントがリクエストを開始することで、クライアントが生成したランダム文字列（セッションキー）やクライアントがサポートする暗号スイートのリスト、乱数などの情報を含みます。
>
>
> ![MUh98dIWNmpn1Lc.png](https://s2.loli.net/2022/06/06/MUh98dIWNmpn1Lc.png)
>
> 1. Server Hello && Certificate
>
> ![Aa2ZoQi6EhGBbeR.png](https://s2.loli.net/2022/06/06/Aa2ZoQi6EhGBbeR.png)
>
>
> サーバーはクライアントのClient Helloデータを受信後、クライアントが送信した暗号スイートリストに基づいて暗号スイートを選択し、クライアントに返すランダム文字列を生成します。鍵交換アルゴリズムはECDHE_RSAを使用し、対称暗号はAES_128_GCM_SHA256を使用します。サーバ証明書情報も返されます。
>
>
> ![phEZKM1VHBfUAdt.png](https://s2.loli.net/2022/06/06/phEZKM1VHBfUAdt.png)
>
> 1. Server Key Exchange & Server Hello Done
>
> ![3RYzrJUFaiPZKAM.png](https://s2.loli.net/2022/06/06/3RYzrJUFaiPZKAM.png)
>
>
> サーバーはクライアントへデータを交換するための鍵を渡すためのServer Key Exchangeデータ包を返し、Server Hello Doneは鍵交換のデータがクライアントの応答を待っていることを通知します。
>
>
> ![EvhOaj35WegzYoF.png](https://s2.loli.net/2022/06/06/EvhOaj35WegzYoF.png)
>
> 1. Client Key Change & Change Cipher Spec & Encrypted HandShake Message
>
> ![w1rncSCU9YBhsiR.png](https://s2.loli.net/2022/06/06/w1rncSCU9YBhsiR.png)
>
>
> クライアントはサーバーが返したDHデータを基にDHデータをサーバへ送信し、最終的なpre-master-secretを生成します。図のとおり：
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
> 定期的にセッション鍵を更新します
>
>
> ![rwfkcnzlxQ1DBSL.png](https://s2.loli.net/2022/06/06/rwfkcnzlxQ1DBSL.png)
>

### **4.4 Telnetでの受送信**

1. PC上でTelnetを有効化し、Wiresharkでパケットをキャプチャする

![DldVe27vhCkrOQ4.png](https://s2.loli.net/2022/06/06/DldVe27vhCkrOQ4.png)

1. コマンドプロンプトを開いて操作を行う
> テキスト入力：telnet imap.qq.com 25でサーバへ接続した後、以下のコードを入力
>
> ![bOlcSHmnQYNGPyq.png](https://s2.loli.net/2022/06/06/bOlcSHmnQYNGPyq.png)
>
> 1. メール送信完了
>
> ![SGZ1ThwLfAgRnIU.png](https://s2.loli.net/2022/06/06/SGZ1ThwLfAgRnIU.png)
>
1. 通信の過程および通信プロトコルを分析する

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

### **5.1 問題と解決策**

> 問題はXftpでサーバーに接続する際に接続エラーが発生しました。解決策としてキャンパスネットワークに接続した後に正常に戻りました。調査の結果、原因はサーバーのファイアウォールによるものでした。

### **5.2 感想**

- 本実験レポートではSMTPプロトコルの分析過程でのコードとソフトウェアの操作、SMTPメッセージの分析と抽出を習得し、授業で学んだ知識を実証しました。この実験を通じてtelnetを使ったメール送信の具体的な手順を身につけ、一般的なSMTPプロトコル分析ツールの基本的な使い方を理解し、自己のプログラミング能力を高めました。
- これらの一般的なSMTPプロトコル分析コマンドの操作を通じて、SMTPプロトコルの使用時の追跡分析と、SMTPメッセージの構造分析を実践的に検証し、授業で学んだ知識を裏付けることができました。
