---
title: 'Experiment 2: IP Protocol Analysis'
published: 2022-07-01
updated: 2022-07-01
description: 'This experiment explores the IP packet format and field meanings while developing proficiency with tcpdump and Wireshark. Using an Alibaba Cloud server and operating system environment, it captures packets with tcpdump and analyzes them in Wireshark to study the IP protocol structure and related commands. It also resolves traceroute and Xftp connection issues, improving programming skills and understanding of the IP protocol.'
image: 'https://r2.dreaife.tokyo/notion/covers/74d05503541048198288c21511f5a2ee/B5C598D57D9DEEA398003F8C3664D184.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

## **1．Objectives**

- Understand the IP packet format and become familiar with the meaning and length of each IP packet field
- Master packet capture and analysis techniques using tcpdump and Wireshark

## **2．Experimental Environment**

- Hardware requirement: One Alibaba Cloud ECS instance.
- Software requirement: Linux/Windows operating system

## **3．Experimental Content**


### **3.1** **Basic tcpdump Usage**


tcpdump is a tool used to capture network packets and output their contents. Its powerful features and flexible capture strategies make it the preferred tool for network analysis and troubleshooting on UNIX-like systems.


tcpdump supports filtering by network layer, protocol, host, network, or port, and provides logical operators such as and, or, and not to help eliminate irrelevant information.


**References:**


[_https://www.cnblogs.com/ggjucheng/archive/2012/01/14/2322659.html_](https://www.cnblogs.com/ggjucheng/archive/2012/01/14/2322659.html)


[_https://www.jianshu.com/p/d9162722f189_](https://www.jianshu.com/p/d9162722f189)


### **3.2** **Basic Wireshark Usage**


Wireshark (formerly Ethereal) is a network packet analyzer. Network packet analyzers capture network packets and display their contents in as much detail as possible. Wireshark uses WinPcap as its interface to exchange packet data directly with the network adapter.


Network administrators use Wireshark to diagnose network problems, network security engineers use it to investigate information security issues, developers use it to debug new communication protocols, and general users use it to learn about network protocols.


**References:**


[_https://www.wireshark.org/#download_](https://www.wireshark.org/#download)


[_https://pc.qq.com/search.html#!keyword=wireshark_](https://pc.qq.com/search.html#!keyword=wireshark)


[_https://www.cnblogs.com/csnd/p/11807736.html_](https://www.cnblogs.com/csnd/p/11807736.html)


[_https://pc.qq.com/search.html#!keyword=xshell_](https://pc.qq.com/search.html#!keyword=xshell)


### **3.3** **Capturing Packets with tcpdump and Analyzing Them with Wireshark**


Run the command `traceroute www.xju.edu.cn –T` on the Alibaba Cloud instance and use `tcpdump` to capture packets. Download the file to the local machine and analyze it using `wireshark`.


**Tip:** 1. You must run the packet capture command before running the traceroute command. Packet capture command: `tcpdump -i eth0 -w test.cap`


2. You can use the `scp` command or use `xshell` and `xftp` to download the packet capture file to the local machine.


1) Use `tcpdump` to capture packets and `wireshark` to analyze them. Analyze the `IP` packet structure and enter the name, length, value, and information represented by each field in the `IP` protocol tree into the following table.


| **Field Name**                | **Field Length** | **Field Value** | **Information Represented by the Field**                                                                                      |
| ----------------------------- | ---------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Version                       | 4bit             | 4               | Identifies the version number of the IP protocol used                                                                         |
| Header length IP              | 4bit             | 20              | Identifies the version number of the IP protocol used                                                                         |
| Differentiated services Filed | 8bit             | 0x00            | Used to obtain better service. In the old standard, this field was called the Type of Service and identified packet priority, but it was never actually used. |
| Total length                  | 16bit            | 40              | Identifies the total size of the IP packet                                                                                     |
| Indentification               | 16bit            | 0x6f33          | An ID number used to identify the packet                                                                                       |
| flag                          | 3bit             | 0x40            | Determines whether more fragments follow                                                                                      |
| Fragment offset               | 13bit            | 0               | Identifies the offset of the fragmented packet relative to the beginning of the original packet                               |
| Time to time                  | 8bit             | 64              | Sets the maximum number of routers through which a datagram may pass, also known as the number of hops.                        |
| protocol                      | 8bit             | 6               | Identifies which encapsulation protocol is used above the network layer                                                       |
| Header checksum               | 16bit            | 0x9d2c          | Checks the correctness of the header and prevents corruption of IP header data                                                 |
| source                        | 32bit            | 172.16.2.237    | Source IP address                                                                                                              |
| destination                   | 32bit            | 100.100.27.15   | Destination IP address                                                                                                         |


2) Use `wireshark` to analyze and interpret the relevant results of the `traceroute` command.


**Tip:** Configure the `wireshark` filter toolbar to display only `ICMP`.


## **4．Experimental Results and Analysis**


### **4.1** **Basic tcpdump Usage**


tcpdump is a tool used to capture network packets and output their contents. Its powerful features and flexible capture strategies make it the preferred tool for network analysis and troubleshooting on UNIX-like systems.


tcpdump supports filtering by network layer, protocol, host, network, or port, and provides logical operators such as and, or, and not to help eliminate irrelevant information.

- **Default Startup**

```plain text
tcpdump//普通情况下，直接启动tcpdump将监视第一个网络接口上所有流过的数据包。
```


![XBDLEKRJiZI1o4z.png](https://s2.loli.net/2022/04/24/XBDLEKRJiZI1o4z.png)

- Monitor packets on a specified network interface

```plain text
tcpdump -i eth1//如果不指定网卡，默认tcpdump只会监视第一个网络接口，一般是eth0
```


### **4.2** **Basic Wireshark Usage**


Wireshark (formerly Ethereal) is a network packet analyzer. Network packet analyzers capture network packets and display their contents in as much detail as possible. Wireshark uses WinPcap as its interface to exchange packet data directly with the network adapter.


Network administrators use Wireshark to diagnose network problems, network security engineers use it to investigate information security issues, developers use it to debug new communication protocols, and general users use it to learn about network protocols. Its interface is shown below.


![hwT2YybXpv4DZdP.png](https://s2.loli.net/2022/04/24/hwT2YybXpv4DZdP.png)


### **4.3** **Capturing Packets with tcpdump and Analyzing Them with Wireshark**

1. Run the packet capture command `tcpdump -i eth0 -w test.cap` and store the captured information in `/root/test.cap`

![tMLwgqz9cHUPhDa.png](https://s2.loli.net/2022/04/24/tMLwgqz9cHUPhDa.png)

1. Run the command `traceroute www.xju.edu.cn –T`

![bekUQoM2hriayS4.png](https://s2.loli.net/2022/04/24/bekUQoM2hriayS4.png)

1. Use `xftp` to connect to the host and save the packet capture file to the computer

![Mn1O56hby9ultBL.png](https://s2.loli.net/2022/04/24/Mn1O56hby9ultBL.png)

1. Use `wiresharp` to open and analyze the `test.cap` file

![F2Sg186ZxmW4HYn.png](https://s2.loli.net/2022/04/24/F2Sg186ZxmW4HYn.png)

1. Analyze the `IP` packet structure of the captured packets and enter the name, length, value, and information represented by each field in the `IP` protocol tree into the following table.

| **Field Name**                | **Field Length** | **Field Value** | **Information Represented by the Field**                         |
| ----------------------------- | ---------------- | --------------- | ---------------------------------------------------------------- |
| Version                       | 4bit             | 4               | 0100 .... = Version: 4                                           |
| Header length IP              | 4bit             | 20              | .... 0101 = Header Length: 20 bytes (5)                          |
| Differentiated services Filed | 8bit             | 0x00            | Differentiated Services Field: 0x00 (DSCP: CS0, ECN: Not-ECT)    |
| Total length                  | 16bit            | 40              | Total Length: 40                                                 |
| Indentification               | 16bit            | 0x6f33          | Identification: 0x6f33 (28467)                                   |
| flag                          | 3bit             | 0x40            | Flags: 0x40, Don't fragment                                      |
| Fragment offset               | 13bit            | 0               | ...0 0000 0000 0000 = Fragment Offset: 0                         |
| Time to time                  | 8bit             | 64              | Time to Live: 64                                                 |
| protocol                      | 8bit             | 6               | Protocol: TCP (6)                                                |
| Header checksum               | 16bit            | 0x9d2c          | Header Checksum: 0x9d2c [validation disabled]                    |
| source                        | 32bit            | 172.16.2.237    | Source Address: 172.16.2.237                                     |
| destination                   | 32bit            | 100.100.27.15   | Destination Address: 100.100.27.15                               |

1. Analyze and interpret the relevant results of the `traceroute` command by examining the `ICMP` packets.

![2jCLdqIHZOUyec5.png](https://s2.loli.net/2022/04/24/2jCLdqIHZOUyec5.png)


![G3D2ajfuXOV7LFM.png](https://s2.loli.net/2022/04/24/G3D2ajfuXOV7LFM.png)


![VviL34IUOpz5tjF.png](https://s2.loli.net/2022/04/24/VviL34IUOpz5tjF.png)

> Analysis results:
>
> There are two types of `ICMP` messages: `ICMP` error-reporting messages and `ICMP` query messages. All the ICMP messages captured during this process were of the `Time to live exceeded in transit` type, indicating that the time limit was exceeded. Selecting a random `ICMP` message shows that it has `Type=11,Code=0`. This is an error-reporting message indicating that the time limit was exceeded. Its checksum is `0x4e4d`; the result is correct, the checksum status is good, and its `TTL` is 4.
>
>

## **5、Experiment Summary**


### **5.1 Problems and Solutions**

> Problem: When using the traceroute command, the error -bash: traceroute: command not found appeared. Solution: Use the yum install traceroute command to install traceroute first.
> Problem: A connection error occurred when using Xftp to connect to the server. Solution: The connection returned to normal after switching to the campus network. Troubleshooting showed that the server firewall was the cause.

### **5.2 Reflections**

- This experiment familiarized me with the code and software operations involved in IP protocol analysis and verified the knowledge learned in class. Through this experiment, I mastered the specific procedure for using the traceroute command, learned the basic usage of common IP protocol analysis software, and improved my programming skills.
- By using these common IP protocol analysis commands to trace and analyze IP protocol activity, I was able to verify the knowledge learned in class.
