---
title: '実験6 DNSプロトコルの分析と測定'
published: 2022-07-01
updated: 2022-07-01
description: 'この実験では、ドメイン名の構造、DNSサーバー、名前解決の仕組みなど、DNSプロトコルとその基本概念を理解することを目的としています。実験内容には、DNSシステムの設定、digツールを用いたDNS情報の測定、tcpdumpとWiresharkによるDNSクエリパケットの解析が含まれます。実験結果では、DNSクエリの各フィールドとその意味を確認し、最後に実験中に発生した問題とその解決策をまとめることで、DNSプロトコルへの理解とプログラミング能力を高めました。'
image: 'https://r2.dreaife.tokyo/notion/covers/40cdf76fbbbc44cb93d9578eb25a3a4b/3df8494814797e70.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

## **1．実験目的**

- インターネットのドメイン名構造、ドメインネームシステム（DNS）、およびDNSサーバーの基本概念を理解する
- DNSプロトコルとそのメッセージの基本構成、DNS名前解決の仕組みに習熟する
- 一般的なDNS測定ツールdigの使用方法とDNS測定の基本技術を習得する

## **2．実験環境**

- ハードウェア要件：Alibaba Cloud ECSインスタンス1台。
- ソフトウェア要件：Linux/ Windows オペレーティングシステム

## **3．実験内容**


### **3.1 ローカルマシンのDNSシステムの確認と設定**


まずローカルマシンのDNSサーバー設定を確認し、次にDNSサーバーとして114.114.114.114または8.8.8.8を追加する。


### **3.2 DNS情報の測定**


digは、著名なDNSソフトウェアBindが提供するDNS分析・測定ツールである。Digでは、NSレコード、Aレコード、MXレコードなどのDNS関連情報を照会でき、DNSの測定と分析に利用できる。
digコマンドをインストールし、以下の照会と測定を実施する。


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


参考資料：
	[https://www.isc.org/bind/](https://www.isc.org/bind/)[https://www.cnblogs.com/machangwei-8/p/10353216.html](https://www.cnblogs.com/machangwei-8/p/10353216.html)


### **3.3 DNSプロトコルの分析**


`tcpdump`を使用してDNSクエリのネットワーク通信パケットをキャプチャし、`wireshark`を使用してUDPおよびDNSプロトコルのデータを分析する。


## **4．実験結果と分析**


### **3.1 ローカルマシンのDNSシステムの確認と設定**


まずローカルマシンのDNSサーバー設定を確認し、次にDNSサーバーとして`114.114.114.114`を追加する。


![YrGfCz3hJjMsOBN.png](https://s2.loli.net/2022/06/06/YrGfCz3hJjMsOBN.png)


### **3.2 DNS情報の測定**


digは、著名なDNSソフトウェアBindが提供するDNS分析・測定ツールである。Digでは、NSレコード、Aレコード、MXレコードなどのDNS関連情報を照会でき、DNSの測定と分析に利用できる。以下の照会と測定を実施する。


### **1.****`dig www.xju.edu.cn`**


![8KhtSgkXpQB4L9i.png](https://s2.loli.net/2022/06/06/8KhtSgkXpQB4L9i.png)


### **2.****`dig aaaa www.xju.edu.cn`**


![PvYQAzmlajKfXh2.png](https://s2.loli.net/2022/06/06/PvYQAzmlajKfXh2.png)


### **3.****`dig cname www.sohu.com`**


![uU57TrN6wRJpCAz.png](https://s2.loli.net/2022/06/06/uU57TrN6wRJpCAz.png)


### **4.** **`dig www.xju.edu.cn @8.8.8.8`**


![sxISZ7uJ1Da6nT5.png](https://s2.loli.net/2022/06/06/sxISZ7uJ1Da6nT5.png)


### **5.** **`dig mx xju.edu.cn`**


![zgq5GRrLwtKiBoD.png](https://s2.loli.net/2022/06/06/zgq5GRrLwtKiBoD.png)


### **6.** **`dig ns xju.edu.cn @8.8.8.8`**


![P2zQs4pTrCUHMdf.png](https://s2.loli.net/2022/06/06/P2zQs4pTrCUHMdf.png)


### **7.** **`dig www.xju.edu.cn +trace`**


![zM4VqduAoymiegZ.png](https://s2.loli.net/2022/06/06/zM4VqduAoymiegZ.png)


### **8.** **`dig edu.cn +dnssec @8.8.8.8`**


![okQfBGY58IeMnqO.png](https://s2.loli.net/2022/06/06/okQfBGY58IeMnqO.png)


### **9.** **`dig edu.cn +dnssec @114.114.114.114`**


![DvayGBOWxJbzN3u.png](https://s2.loli.net/2022/06/06/DvayGBOWxJbzN3u.png)


### **3.3 DNSプロトコルの分析**


### **1. ****`tcpdump`****を使用してDNSクエリのパケットをキャプチャ**


![YnCjGS8fA9wkgh5.png](https://s2.loli.net/2022/06/06/YnCjGS8fA9wkgh5.png)


### **2. ****`wireshark`****を使用した分析**

- **DNSクエリのUDPデータ分析**

キャプチャ結果をdnsでフィルタリングし、以下の図のようにUDPデータを分析する。


![jfvM2aVIc9Pn1qE.png](https://s2.loli.net/2022/06/06/jfvM2aVIc9Pn1qE.png)


取得したデータを以下の表に記入する。


| **フィールド名**       | **フィールド値** | **フィールド情報**                   |
| ---------------- | ------- | ----------------------------- |
| Source Port      | 44175   | Source Port: 44175            |
| Destination Port | 53      | Destination Port: 53          |
| Length           | 58      | Length: 58                    |
| Checksum         | 0x93d2  | Checksum: 0x93d2 [unverified] |

- DNSプロトコルの分析

DNSデータに含まれる主な内容は以下のとおりである。


| **フィールド**            | **説明**                                                             |
| -------------------- | ------------------------------------------------------------------ |
| Transaction ID (2バイト) | DNS応答メッセージがどの要求メッセージに対する応答であるかを識別するためのフィールド                         |
| Flags (2バイト)          | 各ビットがそれぞれ異なる意味を持つフラグフィールド                                         |
| QR (1bit)            | クエリ／応答フラグ。0はクエリメッセージ、1は応答メッセージ                                   |
| opcode (4bit)        | 0は標準クエリ、1は逆引きクエリ、2はサーバーステータス要求、3～15は予約値                         |
| AA (1bit)            | 権威応答を示す。このフィールドは応答時のみ意味を持ち、応答したサーバーが照会対象ドメイン名の権威DNSサーバーであることを示す |
| TC (1bit)            | メッセージが許容される長さを超えたため、切り詰められたことを示す                                |
| RD (1bit)            | 再帰処理要求を示す。このフィールドは要求側で設定され、応答時にも同じ値が返される。RDが設定されている場合、DNSサーバーに再帰的な名前解決を推奨する。再帰クエリへの対応は任意である |
| RA (1bit)            | 再帰処理が利用可能かどうかを示す。応答時に設定または解除され、サーバーが再帰クエリに対応しているかを表す          |
| ZERO (1bit)          | すべて0の予約フィールド                                                    |
| RCODE (4bit)         | リターンコード。0はエラーなし、1は形式エラー、2はDNSサーバーエラー、3はドメイン参照の問題、4はクエリタイプ未対応、5は禁止、6～15は予約値 |
| Questions (2バイト)      | 質問数。通常は1                                                         |
| Answer RRs (2バイト)     | リソースレコード数                                                       |
| Authority RRs (2バイト)  | 権威リソースレコード数                                                    |
| Additional RRs (2バイト) | 追加リソースレコード数                                                    |
| Queries (38バイト)       | クエリまたは応答の本文部分で、Name、Type、Classに分かれる                              |
| Name (34バイト)          | クエリ名。ここではpingの後に指定した引数であり、長さは可変で0を終端とする                         |
| Type (2バイト)           | クエリタイプ。ここではホストのAレコード                                            |
| Class (2バイト)          | クラス。INはInternetデータを表し、通常は1                                      |

> リクエストパケットの分析
>
> ![Xra4QGzLukA31yq.png](https://s2.loli.net/2022/06/07/Xra4QGzLukA31yq.png)
>
>
> | **フィールド名**           | **フィールド値**                     | **フィールド情報**                                                   |
> | -------------------- | -------------------------------- | ------------------------------------------------------------- |
> | UDP Dst Port         | 53                               | UDP Dst Port: 53                                              |
> | IPv4 Src             | 172.16.2.146                     | IPv4 Src: 172.16.2.146                                        |
> | Transaction ID (2バイト) | 0x3a3c                           | Transaction ID: 0x3a3c                                        |
> | QR (1bit)            | 0                                | 0... .... .... .... = Response: Message is a query            |
> | opcode (4bit)        | 0                                | .000 0... .... .... = Opcode: Standard query (0)              |
> | TC (1bit)            | 0                                | .... ..0. .... .... = Truncated: Message is not truncated     |
> | RD (1bit)            | 1                                | .... ...1 .... .... = Recursion desired: Do query recursively |
> | ZERO (1bit)          | 0                                | .... .... .0.. .... = Z: reserved (0)                         |
> | Questions (2バイト)      | 1                                | Questions: 1                                                  |
> | Answer RRs (2バイト)     | 0                                | Answer RRs: 0                                                 |
> | Authority RRs (2バイト)  | 0                                | Authority RRs: 0                                              |
> | Additional RRs (2バイト) | 0                                | Additional RRs: 0                                             |
> | Name (34バイト)          | metrichub-cn-shanghai.aliyun.com | Name: metrichub-cn-shanghai.aliyun.com                        |
> | Type (2バイト)           | 1                                | Type: A (Host Address) (1)                                    |
> | Class (2バイト)          | 1                                | Class: IN (0x0001)                                            |
>
> 1. 応答パケットの分析
>
> ![p9zOSr862ewHbdQ.png](https://s2.loli.net/2022/06/07/p9zOSr862ewHbdQ.png)
>
>
> Answer RRsが1であるため、Answers項目には1件の結果が表示される。
>
>
> AnswersフィールドはListとみなすことができ、集合内の各項目が1つのリソースレコードを表す。前述のName、Type、Classに加えて、Time to Live、Data length、Addressが含まれる。
>
>
> | **フィールド名**  | **フィールド値**    | **フィールド情報**                             |
> | ------------ | --------------- | --------------------------------------- |
> | Time to live | 75              | Time to live: 75 (1 minute, 15 seconds) |
> | Data length  | 4               | Data length: 4                          |
> | Address      | 100.100.109.104 | Address: 100.100.109.104                |
>
>

## **5、実験のまとめ**


### **5.1 問題と解決方法**

> digコマンドの使用時に、-bash: dig: command not found エラーが発生した。この問題はdigのサポートコンポーネントがインストールされておらず、デフォルトのシステムにbind-utilsパッケージが含まれていないために発生する。yumを使用してインストールすれば解決できる。yum -y install bind-utils

### **5.2 所感**

- 今回の実験を通じて、DNSプロトコルの分析におけるコードやソフトウェアの操作、およびUDPメッセージの分析と抽出に習熟し、授業で学んだ知識を検証できた。また、digコマンドを使用する具体的な手順と、一般的なDNSプロトコル分析ソフトウェアの基本的な使用方法を習得し、プログラミング能力を向上させることができた。
- 一般的なDNSプロトコル分析コマンドの操作、DNSプロトコル使用時の追跡分析、DNSおよびUDPメッセージの構造分析を通じて、授業で学んだ知識を確認できた。
