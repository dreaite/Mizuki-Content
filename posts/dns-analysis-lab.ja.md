---
title: '実験6 DNSプロトコル分析と測定'
published: 2022-07-01
updated: 2022-07-01
description: '本実験は、DNSプロトコルとその基本概念（ドメイン名の構造、DNSサーバー、名前解決の原理など）を理解することを目的としています。DNSシステムの設定、digツールを用いたDNS情報の測定、tcpdumpとWiresharkによるDNSクエリパケットの解析を行います。結果としてDNSクエリ各フィールドの意味を確認し、実験中に遭遇した問題と解決策をまとめることで、DNSプロトコルへの理解とプログラミング能力を高めました。'
image: 'https://r2.dreaife.tokyo/notion/covers/40cdf76fbbbc44cb93d9578eb25a3a4b/3df8494814797e70.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

## **1. 実験目的**

- インターネットのドメイン名構造、DNS（Domain Name System）およびそのドメイン名サーバの基本概念を理解する
- DNSプロトコルおよびそのメッセージの基本構成、DNSドメイン名解決の原理を熟知する
- よく使われるDNS測定ツールdigの使い方とDNS測定の基本技術を習得する

## **2. 実験環境**

- ハードウェア要件: Alibaba Cloud ECS を1台。
- ソフトウェア要件: Linux/ Windows オペレーティングシステム

## **3. 実験内容**


### **3.1 ローカルマシンのDNSシステムの確認と設定**


まず、本機のDNSサーバー設定状況を確認し、次に DNS サーバーを1つ追加します：114.114.114.114 または 8.8.8.8。


### **3.2 DNS情報測定**


digは、著名なDNSソフトウェア「Bind」が提供するDNS分析および測定ツールです。DigはDNSのNSレコード、Aレコード、MXレコードなどの関連情報を照会するツールで、これを用いてDNS測定と分析を行うことができます。
digコマンドをインストールし、以下の照会と測定を行います


```plain text
dig www.xju.edu.cn
dig aaaa www.xju.edu.cn
dig cname  www.sohu.com
dig www.xju.edu.cn @8.8.8.8
dig mx xju.edu.cn
dig ns xju.edu.cn @8.8.8.8
dig www.xju.edu.cn +trace                    重要
dig edu.cn +dnssec @8.8.8.8                  重要
dig edu.cn +dnssec @114.114.114.114           //解释RRSIG作用
```


参考资料：
	[https://www.isc.org/bind/](https://www.isc.org/bind/)[https://www.cnblogs.com/machangwei-8/p/10353216.html](https://www.cnblogs.com/machangwei-8/p/10353216.html)


### **3.3 DNSプロトコル分析**


tcpdumpを用いてDNSクエリのネットワーク通信データをキャプチャし、wiresharkを用いてUDPとDNSプロトコルデータを分析する

## **4. 実験結果と分析**


### **3.1 ローカルマシンのDNSシステムの確認と設定**


まず、本機のDNSサーバー設定を確認し、次に DNS サーバーを追加します：`114.114.114.114`。


![YrGfCz3hJjMsOBN.png](https://s2.loli.net/2022/06/06/YrGfCz3hJjMsOBN.png)


### **3.2 DNS情報測定**


digは、著名なDNSソフトウェア Bindが提供するDNS分析および測定ツールです。DigはDNSのNSレコード、Aレコード、MXレコードなどの関連情報を照会するツールで、これを利用してDNS測定と分析を行います。以下の照会と測定を実施します。


### **1. `dig www.xju.edu.cn`**


![8KhtSgkXpQB4L9i.png](https://s2.loli.net/2022/06/06/8KhtSgkXpQB4L9i.png)


### **2. `dig aaaa www.xju.edu.cn`**


![PvYQAzmlajKfXh2.png](https://s2.loli.net/2022/06/06/PvYQAzmlajKfXh2.png)


### **3. `dig cname www.sohu.com`**


![uU57TrN6wRJpCAz.png](https://s2.loli.net/2022/06/06/uU57TrN6wRJpCAz.png)


### **4. `dig www.xju.edu.cn @8.8.8.8`**


![sxISZ7uJ1Da6nT5.png](https://s2.loli.net/2022/06/06/sxISZ7uJ1Da6nT5.png)


### **5. `dig mx xju.edu.cn`**


![zgq5GRrLwtKiBoD.png](https://s2.loli.net/2022/06/06/zgq5GRrLwtKiBoD.png)


### **6. `dig ns xju.edu.cn @8.8.8.8`**


![P2zQs4pTrCUHMdf.png](https://s2.loli.net/2022/06/06/P2zQs4pTrCUHMdf.png)


### **7. `dig www.xju.edu.cn +trace`**


![zM4VqduAoymiegZ.png](https://s2.loli.net/2022/06/06/zM4VqduAoymiegZ.png)


### **8. `dig edu.cn +dnssec @8.8.8.8`**


![okQfBGY58IeMnqO.png](https://s2.loli.net/2022/06/06/okQfBGY58IeMnqO.png)


### **9. `dig edu.cn +dnssec @114.114.114.114`**


![DvayGBOWxJbzN3u.png](https://s2.loli.net/2022/06/06/DvayGBOWxJbzN3u.png)


### **3.3 DNSプロトコル分析**


### **1. `tcpdump`を使用してDNSクエリをパケットキャプチャする**


![YnCjGS8fA9wkgh5.png](https://s2.loli.net/2022/06/06/YnCjGS8fA9wkgh5.png)


### **2. `wireshark`を用いて分析する**


- DNSクエリUDPデータ分析

キャプチャ結果をDNSでフィルタリングしてUDPデータを分析します。下の図


![jfvM2aVIc9Pn1qE.png](https://s2.loli.net/2022/06/06/jfvM2aVIc9Pn1qE.png)


以下の表にデータを入力します


| **フィールド名**          | **フィールド値** | **フィールド情報**                      |
| ---------------- | ------- | ----------------------------- |
| Source Port      | 44175   | Source Port: 44175            |
| Destination Port | 53      | Destination Port: 53          |
| Length           | 58      | Length: 58                    |
| Checksum         | 0x93d2  | Checksum: 0x93d2 [unverified] |

- DNSプロトコル分析

DNSデータには主に以下の内容が含まれます：


| **フィールド**               | **説明**                                                             |
| -------------------- | ------------------------------------------------------------------ |
| Transaction ID (2字节) | トランザクションID、DNS応答パケットがどのリクエストに対する応答かを識別するためのフィールド                                         |
| Flags (2字节)          | フラグ、各ビットの意味が異なる                                                      |
| QR (1bit)            | クエリ/応答フラグ、0はクエリ、1は応答                                            |
| opcode (4bit)        | 0 は標準クエリ、1 は逆引きクエリ、2 はサーバー状態リクエスト、3-15 は保留値                            |
| AA (1bit)            | 認証応答を示す。応答時にのみ意味を持ち、返答を提供するサーバーが照会ドメインを認証済みの解析サーバーであることを指す;                      |
| TC (1bit)            | 断片化可能を示す。メッセージが許容長を超えて断片化されている場合に設定される                                       |
| RD (1bit)            | 再帰を希望するかを示す。要求時に設定され、応答時にも同じ値で返される。RDが設定されている場合、ドメイン名サーバは再帰解析を行うことを推奨します。        |
| RA (1bit)            | 再帰を利用可能かを示す。応答で設定または取消され、サーバが再帰クエリをサポートしているかを表す                                |
| ZERO (1bit)          | 全0の保留フィールド                                                             |
| RCODE (4bit)         | 応答コード。0はエラーなし、1は形式エラー、2はドメイン名サーバのエラー、3はドメイン参照の問題、4はクエリタイプ未対応、5は禁止、6-15は保留       |
| Questions (2字节)      | 問い合わせ数、通常は1                                                               |
| Answer RRs (2字节)     | リソースレコード数                                                              |
| Authority RRs (2字节)  | 権威リソースレコード数                                                            |
| Additional RRs (2字节) | 追加リソースレコード数                                                            |
| Queries (38字节)       | クエリまたは応答の本文部分。Name Type Class                                      |
| Name (34字节)          | クエリ名。ここではping後のパラメータ。長さは0で終端される                                          |
| Type (2字节)           | クエリタイプ。ここではAレコード                                                      |
| Class (2字节)          | クラス。INはインターネットデータを表す。通常は1                                              |

> 分析リクエストパケット
>
> ![Xra4QGzLukA31yq.png](https://s2.loli.net/2022/06/07/Xra4QGzLukA31yq.png)
>
>
> | **フィールド名**              | **フィールド値**                          | **フィールド情報**                                                      |
> | -------------------- | -------------------------------- | ------------------------------------------------------------- |
> | UDP Dst Port         | 53                               | UDP Dst Port: 53                                              |
> | IPv4 Src             | 172.16.2.146                     | IPv4 Src: 172.16.2.146                                        |
> | Transaction ID (2字节) | 0x3a3c                           | Transaction ID: 0x3a3c                                        |
> | QR (1bit)            | 0                                | 0... .... .... .... = Response: Message is a query            |
> | opcode (4bit)        | 0                                | .000 0... .... .... = Opcode: Standard query (0)              |
> | TC (1bit)            | 0                                | .... ..0. .... .... = Truncated: Message is not truncated     |
> | RD (1bit)            | 1                                | .... ...1 .... .... = Recursion desired: Do query recursively |
> | ZERO (1bit)          | 0                                | .... .... .0.. .... = Z: reserved (0)                         |
> | Questions (2字节)      | 1                                | Questions: 1                                                  |
> | Answer RRs (2字节)     | 0                                | Answer RRs: 0                                                 |
> | Authority RRs (2字节)  | 0                                | Authority RRs: 0                                              |
> | Additional RRs (2字节) | 0                                | Additional RRs: 0                                             |
> | Name (34字节)          | metrichub-cn-shanghai.aliyun.com | Name: metrichub-cn-shanghai.aliyun.com                        |
> | Type (2字节)           | 1                                | Type: A (Host Address) (1)                                    |
> | Class (2字节)          | 1                                | Class: IN (0x0001)                                            |
>
> 1. 分析応答パケット
>
> ![p9zOSr862ewHbdQ.png](https://s2.loli.net/2022/06/07/p9zOSr862ewHbdQ.png)
>
>
> このうち、Answer RRsが1であるため、Answers項目には1つの結果が現れます。
>
>
> AnswersフィールドはListとして見ることができ、集合の各項は1つのリソースレコードです。Name、Type、Classの他にTime to Live、Data length、Addressがあります。
>
>
> | **フィールド名**      | **フィールド値**         | **フィールド情報**                                |
> | ------------ | --------------- | --------------------------------------- |
> | Time to live | 75              | Time to live: 75 (1分15秒) |
> | Data length  | 4               | Data length: 4                          |
> | Address      | 100.100.109.104 | Address: 100.100.109.104                |
>

## **5、実験のまとめ**


### **5.1 問題点と解決策**

> digコマンドを使用した際、-bash: dig: command not foundというエラーが表示される問題の解決方法は、digサポートコンポーネントが未インストールのためです。デフォルトのシステムにはbind-utilsパッケージが不足しているので、yumでインストールします。yum -y install bind-utils

### **5.2 感想**

- 本実験レポートは、DNSプロトコル分析の過程でのコードおよびソフトウェアの操作、UDPパケットの分析と抽出、授業で学んだ知識を実証しました。今回の実験を通じて、digコマンドの具体的な使用手順を習得し、一般的なDNSプロトコル分析ソフトウェアの基本的な使い方を理解し、自身のプログラミング能力を向上させました。
- これらの一般的なDNSプロトコル分析コマンドの操作を通じて、DNSプロトコルの使用時のトレース分析、DNSおよびUDPパケットの構造分析を行い、授業で学んだ知識を裏付けました。
