---
title: '实验2 IP协议分析'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在了解IP报文格式及字段含义，掌握tcpdump和Wireshark的使用。实验环境包括阿里云主机和操作系统。通过tcpdump抓包和Wireshark分析，学习IP协议结构及相关命令的应用，解决了traceroute命令和Xftp连接问题，提升了编程能力和对IP协议的理解。'
permalink: 'ip-protocol-analysis'
image: 'https://r2.dreaife.tokyo/notion/covers/74d05503541048198288c21511f5a2ee/B5C598D57D9DEEA398003F8C3664D184.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

## **1．実験目的**

- IPパケットのフォーマットを理解し、IPパケット各フィールドの意味と長さに慣れる
- tcpdumpとWiresharkソフトウェアを用いたデータパケットのキャプチャと分析技術を習得

## **2．実験環境**

- ハードウェア要件：Alibaba Cloudのクラウドホスト ECS を1台。
- ソフトウェア要件：Linux/Windows オペレーティングシステム

## **3．実験内容**


### **3.1** **tcpdump基本的な使い方**


tcpdumpは、ネットワークパケットをキャプチャしてパケット内容を出力するツールです。強力な機能と柔軟なキャプチャ戦略により、UNIX系システム上のネットワーク分析とトラブルシューティングの第一選択ツールとなっています。


tcpdump は、ネットワーク層、プロトコル、ホスト、ネットワークまたはポートに対するフィルタリングをサポートし、and、or、not などの論理文を提供して不要な情報を除去するのに役立ちます。


**参考資料：**


[_https://www.cnblogs.com/ggjucheng/archive/2012/01/14/2322659.html_](https://www.cnblogs.com/ggjucheng/archive/2012/01/14/2322659.html)


[_https://www.jianshu.com/p/d9162722f189_](https://www.jianshu.com/p/d9162722f189)


### **3.2** **wireshark基本用法**


Wireshark（旧称 Ethereal）は、ネットワークパケット解析ソフトウェアです。ネットワークパケット解析ソフトウェアの機能は、ネットワークパケットを取得し、可能な限り最も詳細なネットワークパケット情報を表示することです。WiresharkはWinPCAPをインタフェースとして使用し、NICとデータグラムを直接交換します。


ネットワーク管理者はネットワークの問題を検出するためにWiresharkを使用し、ネットワークセキュリティエンジニアは情報セキュリティ関連の問題を確認するためにWiresharkを使用し、開発者は新しい通信プロトコルのデバッグのためにWiresharkを使用し、一般のユーザーはネットワークプロトコルに関する知識を学ぶためにWiresharkを使用します。そのインターフェースは図のとおりです。


**参考资料：**


[_https://www.wireshark.org/#download_](https://www.wireshark.org/#download)


[_https://pc.qq.com/search.html#!keyword=wireshark_](https://pc.qq.com/search.html#!keyword=wireshark)


[_https://www.cnblogs.com/csnd/p/11807736.html_](https://www.cnblogs.com/csnd/p/11807736.html)


[_https://pc.qq.com/search.html#!keyword=xshell_](https://pc.qq.com/search.html#!keyword=xshell)


### **3.3** **利用tcpdump抓包，wireshark分析包**


在阿里云主機運行命令 `traceroute www.xju.edu.cn –T`，並利用`tcpdump`抓包。下載文件到本地機器利用`wireshark`軟件进行分析。


**提示：**1. 必须首先执行抓包命令，然后再执行路径追踪命令。抓包命令 `tcpdump -i eth0 -w test.cap`


2. 可使用`scp`命令或者利用`xshell`和`xftp`下载数据包到本地机器。


1) tcpdumpを用いてパケットをキャプチャし、Wiresharkでキャプチャデータを分析します。IPヘッダの構造を分析し、IPプロトコルツリーの各名称フィールド、フィールド長、フィールド情報を以下の表に記入します。


| **フィールド名**                       | **フィールド長** | **フィールド値**       | **フィールド表現情報**                                                    |
| ----------------------------- | -------- | ------------- | ------------------------------------------------------------- |
| バージョン (Version)                       | 4bit     | 4             | 0100 .... = バージョン: 4                                        |
| ヘッダ長 IP              | 4bit     | 20            | .... 0101 = ヘッダ長: 20 bytes (5)                       |
| Differentiated services フィールド | 8bit     | 0x00          | Differentiated Services Field: 0x00 (DSCP: CS0, ECN: Not-ECT) |
| 全長                  | 16bit    | 40            | 全長: 40                                              |
| 識別子               | 16bit    | 0x6f33        | 識別子: 0x6f33 (28467)                                |
| フラグ                          | 3bit     | 0x40          | Flags: 0x40, Don't fragment                                   |
| 分割オフセット               | 13bit    | 0             | ...0 0000 0000 0000 = 分割オフセット: 0                      |
| 生存時間（TTL）                  | 8bit     | 64            | 生存時間: 64                                              |
| プロトコル                      | 8bit     | 6             | プロトコル: TCP (6)                                             |
| ヘッダーチェックサム               | 16bit    | 0x9d2c        | ヘッダーチェックサム: 0x9d2c [validation disabled]                 |
| 送信元アドレス                        | 32bit    | 172.16.2.237  | 送信元アドレス: 172.16.2.237                                  |
| 宛先アドレス                   | 32bit    | 100.100.27.15 | 宛先アドレス: 100.100.27.15                            |


2) Wiresharkを用いて関連する traceroute コマンドの実行結果を分析・解釈します。


**提示：**Wireshark のフィルタ欄で表示を ICMP のみに設定します。


## **4．実験結果と分析**


### **4.1** **tcpdump基本的な使い方**


tcpdumpは、ネットワークパケットをキャプチャしてパケット内容を出力するツールです。強力な機能と柔軟なキャプチャ戦略により、UNIX系システム上のネットワーク分析とトラブルシューティングの第一選択ツールとなっています。


tcpdump は、ネットワーク層、プロトコル、ホスト、ネットワークまたはポートに対するフィルタリングをサポートし、and、or、not などの論理文を提供して不要な情報を除去するのに役立ちます。

- **デフォルトの起動**

```plain text
tcpdump//普通情况下，直接启动tcpdump将监视第一个网络接口上所有流过的数据包。
```


![XBDLEKRJiZI1o4z.png](https://s2.loli.net/2022/04/24/XBDLEKRJiZI1o4z.png)

- 指定ネットワークインターフェースのデータパケットを監視

```plain text
tcpdump -i eth1//如果不指定网卡，默认tcpdump只会监视第一个网络接口，一般是eth0
```


### **4.2** **wireshark基本用法**


Wireshark（旧称 Ethereal）は、ネットワークパケット解析ソフトウェアです。ネットワークパケット解析ソフトウェアの機能は、ネットワークパケットを取得し、可能な限り最も詳細なネットワークパケット情報を表示することです。WiresharkはWinPCAPをインタフェースとして使用し、 NICとデータグラムを直接交換します。


ネットワーク管理者はネットワークの問題を検出するためにWiresharkを使用し、ネットワークセキュリティエンジニアは情報セキュリティ関連の問題を確認するためにWiresharkを使用し、開発者は新しい通信プロトコルのデバッグのためにWiresharkを使用し、普通の利用者はネットワークプロトコルの関連知識を学ぶためにWiresharkを使用します。そのインターフェースは図のとおりです。


![hwT2YybXpv4DZdP.png](https://s2.loli.net/2022/04/24/hwT2YybXpv4DZdP.png)


### **4.3** **利用tcpdumpでのキャプチャ、wiresharkでのパケット分析**

1. パケットキャプチャコマンド`tcpdump -i eth0 -w test.cap`を実行し、取得情報を`/root/test.cap`ファイルに保存します

![tMLwgqz9cHUPhDa.png](https://s2.loli.net/2022/04/24/tMLwgqz9cHUPhDa.png)

1. コマンド`traceroute www.xju.edu.cn –T`を実行

![bekUQoM2hriayS4.png](https://s2.loli.net/2022/04/24/bekUQoM2hriayS4.png)

1. `xftp`でホストに接続し、保存したキャプチャファイルをPCへ保存します

![Mn1O56hby9ultBL.png](https://s2.loli.net/2022/04/24/Mn1O56hby9ultBL.png)

1. `wireshark`で`test.cap`ファイルを開き、分析します

![F2Sg186ZxmW4HYn.png](https://s2.loli.net/2022/04/24/F2Sg186ZxmW4HYn.png)

1. 捕捉したデータパケットについて、`IP`ヘッダの構造を分析し、IPプロトコルツリーの各名称フィールド、フィールド長、フィールド情報を以下の表に記入します。

| **フィールド名**                       | **フィールド長** | **フィールド値**       | **フィールド表現情報**                                                    |
| ----------------------------- | -------- | ------------- | ------------------------------------------------------------- |
| バージョン (Version)                       | 4bit     | 4             | 0100 .... = バージョン: 4                                        |
| ヘッダ長 IP              | 4bit     | 20            | .... 0101 = ヘッダ長: 20 bytes (5)                       |
| Differentiated services フィールド | 8bit     | 0x00          | Differentiated Services Field: 0x00 (DSCP: CS0, ECN: Not-ECT) |
| 全長                  | 16bit    | 40            | 全長: 40                                              |
| 識別子               | 16bit    | 0x6f33        | 識別子: 0x6f33 (28467)                                |
| フラグ                          | 3bit     | 0x40          | Flags: 0x40, Don't fragment                                   |
| 分割オフセット               | 13bit    | 0             | ...0 0000 0000 0000 = 分割オフセット: 0                      |
| 生存時間（TTL）                  | 8bit     | 64            | 生存時間: 64                                              |
| プロトコル                      | 8bit     | 6             | プロトコル: TCP (6)                                             |
| ヘッダーチェックサム               | 16bit    | 0x9d2c        | ヘッダーチェックサム: 0x9d2c [validation disabled]                 |
| 送信元アドレス                        | 32bit    | 172.16.2.237  | 送信元アドレス: 172.16.2.237                                  |
| 宛先アドレス                   | 32bit    | 100.100.27.15 | 宛先アドレス: 100.100.27.15                            |

1. 関連する`traceroute`コマンドの結果を分析・解釈します。ICMPを用いて実行結果を分析します。

![2jCLdqIHZOUyec5.png](https://s2.loli.net/2022/04/24/2jCLdqIHZOUyec5.png)


![G3D2ajfuXOV7LFM.png](https://s2.loli.net/2022/04/24/G3D2ajfuXOV7LFM.png)


![VviL34IUOpz5tjF.png](https://s2.loli.net/2022/04/24/VviL34IUOpz5tjF.png)

> 分析結果：
>
> ICMPパケットの種類は2つに分かれます：ICMPエラーメッセージとICMPエコー（クエリ）メッセージです。キャプチャ中に現れたICMPパケットのタイプはすべて「Time to live exceeded in transit」（TTL超過）で、時間超過を意味します。ランダムに1つのICMPパケットを選ぶと、このパケットのType=11, Code=0で、エラーレポートに該当し、時間超過を示します。そのチェックサムは0x4e4dで、正しく、チェックサムの状態は良好で、TTLは4です。
>


## **5．実験のまとめ**


### **5.1 問題と対処方法**

> tracerouteコマンドを使用した際に -bash: traceroute: command not found エラーが発生した場合の解決方法は、yum install traceroute コマンドを使用して traceroute を最初にインストールします。
> Xftpでサーバへ接続する際に接続エラーが発生した場合の対処方法は、キャンパスネットワークで接続した後復旧、原因を調査したところサーバのファイアウォールが原因であると判明しました。

### **5.2 感想**

- 本実験レポートは、IPプロトコル分析の過程でコードとソフトウェアの操作に習熟し、授業で学んだ知識を検証しました。今回の実験を通じて、traceroute コマンドの具体的な使用手順を身につけ、一般的な IP プロトコル分析ソフトの基本的な使い方を理解し、自身のプログラミング能力を向上させました。
- これらの一般的な IP プロトコル分析コマンドの操作を通じ、IP プロトコルの追跡分析を実施することで、授業で学んだ知識を裏付けることができました。
