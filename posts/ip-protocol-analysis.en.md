---
title: 'Experiment 2: IP Protocol Analysis'
published: 2022-07-01
updated: 2022-07-01
description: 'This experiment aims to understand the IP packet format and the meaning of its fields, and to master the use of tcpdump and Wireshark. The environment includes an Alibaba Cloud host and operating systems. Through packet capture with tcpdump and analysis with Wireshark, it studies the IP protocol structure and related commands, resolves traceroute and Xftp connection issues, and improves programming ability and understanding of IP.'
image: 'https://r2.dreaife.tokyo/notion/covers/74d05503541048198288c21511f5a2ee/B5C598D57D9DEEA398003F8C3664D184.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

## **1. Experiment Objectives**  
- Understand the IP packet format, and become familiar with the meaning and length of each IP header field  
- Master packet capture and analysis techniques based on tcpdump and Wireshark

## **2. Experimental Environment**  
- Hardware requirements: One Alibaba Cloud ECS instance.  
- Software requirements: Linux/Windows operating system

## **3. Experimental Content**


### **3.1** **Basic tcpdump Usage**  
tcpdump is a tool used to capture network packets and output their contents. With its powerful features and flexible capture filters, it has become the preferred tool on UNIX-like systems for network analysis and problem troubleshooting.  

tcpdump supports filtering by network layer, protocol, host, network, or port, and provides logical statements such as and, or, not to help you weed out unnecessary information.  

**References:**  

[_https://www.cnblogs.com/ggjucheng/archive/2012/01/14/2322659.html_](https://www.cnblogs.com/ggjucheng/archive/2012/01/14/2322659.html)  

[_https://www.jianshu.com/p/d9162722f189_](https://www.jianshu.com/p/d9162722f189)  


### **3.2** **Basic Wireshark Usage**  
Wireshark (formerly Ethereal) is a network packet analysis software. The function of network packet analysis software is to capture network packets and display as detailed packet information as possible. Wireshark uses WinPcap as the interface, exchanging data frames directly with the network card.  

Network administrators use Wireshark to detect network problems; network security engineers use Wireshark to inspect information security related issues; developers use Wireshark to debug new communication protocols; ordinary users use Wireshark to learn about network protocols. Its interface is shown in the figure below.  

**References:**  

[_https://www.wireshark.org/#download_](https://www.wireshark.org/#download)  

[_https://pc.qq.com/search.html#!keyword=wireshark_](https://pc.qq.com/search.html#!keyword=wireshark)  

[_https://www.cnblogs.com/csnd/p/11807736.html_](https://www.cnblogs.com/csnd/p/11807736.html)  

[_https://pc.qq.com/search.html#!keyword=xshell_](https://pc.qq.com/search.html#!keyword=xshell)  


### **3.3** **Capture Packets with tcpdump and Analyze with Wireshark**  
On the Alibaba Cloud host, run the command `traceroute www.xju.edu.cn –T`, and capture packets using tcpdump. Download the file to your local machine and analyze it with Wireshark.  

**Tips:**  
1. You must run the capture command first, then run the traceroute command. Capture command: `tcpdump -i eth0 -w test.cap`  
2. You can download the data using the `scp` command or by using `xshell` and `xftp`.  

1) Capture with `tcpdump`, analyze the captured data with `wireshark`, analyze the IP packet structure, and fill the IP protocol tree's field names, field lengths, and field information into the table below.

| **Field Name**                       | **Field Length** | **Field Value** | **Field Description**                                             |
| ------------------------------------ | ---------------- | --------------- | ----------------------------------------------------------------- |
| Version                              | 4bit             | 4               | Indicates the IP protocol version                                   |
| Header length IP                     | 4bit             | 20              | Indicates the IP header length                                      |
| Differentiated services Field        | 8bit             | 0x00            | Used to obtain better service. In old standards this field was called Type of Service and used to indicate packet priority, but it has not been used in practice. |
| Total length                         | 16bit            | 40              | Indicates the total length of this IP packet                         |
| Indentification                      | 16bit            | 0x6f33          | An ID number for the packet used to identify the data packet        |
| flag                                 | 3bit             | 0x40            | Flags indicating whether there are more fragments                    |
| Fragment offset                      | 13bit            | 0               | Offset of the fragment relative to the start of the original packet  |
| Time to time                         | 8bit             | 64              | Sets the maximum number of routers a datagram can traverse, also known as "hops." |
| protocol                             | 8bit             | 6               | Identifies which encapsulation protocol is used above the network layer |
| Header checksum                      | 16bit            | 0x9d2c          | Used to check the correctness of the header to prevent IP header data corruption |
| source                               | 32bit            | 172.16.2.237    | Source IP address                                                  |
| destination                          | 32bit            | 100.100.27.15   | Destination IP address                                             |


2) Use Wireshark to analyze and interpret the relevant traceroute command results.  

**Tip:** Set the Wireshark filter bar to display only ICMP

## **4. Experimental Results and Analysis**


### **4.1** **Basic tcpdump Usage**  
tcpdump is a tool used to capture network packets and output their contents. With its powerful features and flexible capture filters, it has become the preferred tool on UNIX-like systems for network analysis and problem troubleshooting.  

tcpdump supports filtering by network layer, protocol, host, network or port, and provides logical statements such as and, or, not to help you weed out useless information

- **Default startup**

```plain text
tcpdump//普通情况下，直接启动tcpdump将监视第一个网络接口上所有流过的数据包。
```


![XBDLEKRJiZI1o4z.png](https://s2.loli.net/2022/04/24/XBDLEKRJiZI1o4z.png)

- Capture packets on a specified network interface

```plain text
tcpdump -i eth1//如果不指定网卡，默认tcpdump只会监视第一个网络接口，一般是eth0
```


### **4.2** **Basic Wireshark Usage**


Wireshark (formerly Ethereal) is a network packet analysis tool. Its purpose is to capture network packets and display packet details as comprehensively as possible. Wireshark uses WinPcap as an interface to exchange data frames directly with the network card.  

Network administrators use Wireshark to diagnose network issues, network security engineers use it to inspect information security problems, developers use it to debug new communication protocols, and ordinary users use it to learn about network protocols. Its interface is shown below.

![hwT2YybXpv4DZdP.png](https://s2.loli.net/2022/04/24/hwT2YybXpv4DZdP.png)


### **4.3** **Capture Packets with tcpdump and Analyze with Wireshark**

1. Execute the capture command `tcpdump -i eth0 -w test.cap` and store the captured information in the file `/root/test.cap`

![tMLwgqz9cHUPhDa.png](https://s2.loli.net/2022/04/24/tMLwgqz9cHUPhDa.png)

1. Run the command `traceroute www.xju.edu.cn –T`

![bekUQoM2hriayS4.png](https://s2.loli.net/2022/04/24/bekUQoM2hriayS4.png)

1. Use `xftp` to connect to the host, and save the captured packet file to your computer

![Mn1O56hby9ultBL.png](https://s2.loli.net/2022/04/24/Mn1O56hby9ultBL.png)

1. Use `wireshark` to open the `test.cap` file, and analyze

![F2Sg186ZxmW4HYn.png](https://s2.loli.net/2022/04/24/F2Sg186ZxmW4HYn.png)

1. For the captured packets, analyze the IP header structure and fill the IP protocol tree with the field names, lengths, and information into the table below.

| **Field Name**                       | **Field Length** | **Field Value** | **Field Description**                                            |
| ----------------------------- | -------- | ------------- | ------------------------------------------------------------- |
| Version                       | 4bit     | 4             | 0100 .... = Version: 4                                        |
| Header length IP              | 4bit     | 20            | .... 0101 = Header Length: 20 bytes (5)                       |
| Differentiated services Filed | 8bit     | 0x00          | Differentiated Services Field: 0x00 (DSCP: CS0, ECN: Not-ECT) |
| Total length                  | 16bit    | 40            | Total Length: 40                                              |
| Indentification               | 16bit    | 0x6f33        | Identification: 0x6f33 (28467)                                |
| flag                          | 3bit     | 0x40          | Flags: 0x40, Don't fragment                                   |
| Fragment offset               | 13bit    | 0             | ...0 0000 0000 0000 = Fragment Offset: 0                      |
| Time to time                  | 8bit     | 64            | Time to Live: 64                                              |
| protocol                      | 8bit     | 6             | Protocol: TCP (6)                                             |
| Header checksum               | 16bit    | 0x9d2c        | Header Checksum: 0x9d2c [validation disabled]                 |
| source                        | 32bit    | 172.16.2.237  | Source Address: 172.16.2.237                                  |
| destination                   | 32bit    | 100.100.27.15 | Destination Address: 100.100.27.15                            |

1. Analyze and interpret the results of the related traceroute command execution, using ICMP to analyze the results.

![2jCLdqIHZOUyec5.png](https://s2.loli.net/2022/04/24/2jCLdqIHZOUyec5.png)


![G3D2ajfuXOV7LFM.png](https://s2.loli.net/2022/04/24/G3D2ajfuXOV7LFM.png)


![VviL34IUOpz5tjF.png](https://s2.loli.net/2022/04/24/VviL34IUOpz5tjF.png)

> Analysis results:
>
> ICMP message types fall into two categories: ICMP error messages and ICMP echo messages. It can be seen that the ICMP messages we captured are all of type Time Exceeded in Transit, i.e., TTL exceeded. Choosing a random ICMP message, we can see that this ICMP message has Type=11, Code=0, which is an error-message type indicating time exceeded. Its checksum is 0x4e4d, which is correct, and the checksum status is good, with TTL equal to 4.
>

## **5. Experiment Summary**


### **5.1 Problems and Solutions**  
> The problem when using the traceroute command produced the error -bash: traceroute: command not found. Solution: use yum install traceroute to install traceroute.  
> When connecting to the server with Xftp, connection errors occurred. Solution: reconnect via campus network; after investigation found the cause was the server firewall.

### **5.2 Reflections**  
- This experiment familiarized me with the operation of code and software involved in IP protocol analysis, validating the knowledge learned in class. Through this experiment, I learned the concrete workflow for using the traceroute command, understood the basic usage of commonly used IP protocol analysis software, and improved my programming abilities.  
- Through these common IP protocol analysis command operations, tracing IP protocol usage, this reinforced the knowledge taught in class.
