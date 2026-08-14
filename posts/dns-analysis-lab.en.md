---
title: 'Experiment 6: DNS Protocol Analysis and Measurement'
published: 2022-07-01
updated: 2022-07-01
description: 'This experiment aims to understand the DNS protocol and its fundamental concepts, including domain name structure, DNS servers, and the principles of domain name resolution. It covers DNS system configuration, using the dig tool to measure DNS information, and analyzing DNS query packets with tcpdump and Wireshark. The results illustrate the fields in DNS queries and their meanings. Finally, the experiment summarizes the problems encountered and their solutions, improving understanding of the DNS protocol and programming skills.'
image: 'https://r2.dreaife.tokyo/notion/covers/40cdf76fbbbc44cb93d9578eb25a3a4b/3df8494814797e70.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

## **1．Experiment Objectives**

- Understand the basic concepts of the Internet domain name structure, the Domain Name System (DNS), and DNS servers
- Become familiar with the DNS protocol, the basic structure of DNS messages, and the principles of DNS name resolution
- Master the use of the commonly used DNS measurement tool dig and the basic techniques of DNS measurement

## **2．Experiment Environment**

- Hardware requirements: One Alibaba Cloud Elastic Compute Service (ECS) instance.
- Software requirements: Linux/Windows operating system

## **3．Experiment Content**


### **3.1 View and Configure the Local DNS System**


First, view the local DNS server configuration. Then add a DNS server: 114.114.114.114 or 8.8.8.8.


### **3.2 DNS Information Measurement**


dig is a DNS analysis and measurement tool provided by the well-known DNS software BIND. Dig can query DNS information such as NS, A, and MX records, and can be used for DNS measurement and analysis.
Install the dig command and perform the following queries and measurements:


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


References:
	[https://www.isc.org/bind/](https://www.isc.org/bind/)[https://www.cnblogs.com/machangwei-8/p/10353216.html](https://www.cnblogs.com/machangwei-8/p/10353216.html)


### **3.3 DNS Protocol Analysis**


Use `tcpdump` to capture DNS query network packets, and use `wireshark` to analyze UDP and DNS protocol data.


## **4．Experiment Results and Analysis**


### **3.1 View and Configure the Local DNS System**


First, view the local DNS server configuration. Then add a DNS server: `114.114.114.114`.


![YrGfCz3hJjMsOBN.png](https://s2.loli.net/2022/06/06/YrGfCz3hJjMsOBN.png)


### **3.2 DNS Information Measurement**


dig is a DNS analysis and measurement tool provided by the well-known DNS software BIND. Dig can query DNS information such as NS, A, and MX records, and can be used for DNS measurement and analysis. The following queries and measurements are performed below.


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


### **3.3 DNS Protocol Analysis**


### **1. Use****`tcpdump`****to Capture DNS Query Packets**


![YnCjGS8fA9wkgh5.png](https://s2.loli.net/2022/06/06/YnCjGS8fA9wkgh5.png)


### **2. Use****`wireshark`****for Analysis**

- **UDP Data Analysis of DNS Queries**

Filter the captured packets by DNS and analyze the UDP data, as shown below:


![jfvM2aVIc9Pn1qE.png](https://s2.loli.net/2022/06/06/jfvM2aVIc9Pn1qE.png)


Enter the captured data in the following table:


| **Field Name**          | **Field Value** | **Field Information**             |
| ---------------- | ------- | ----------------------------- |
| Source Port      | 44175   | Source Port: 44175            |
| Destination Port | 53      | Destination Port: 53          |
| Length           | 58      | Length: 58                    |
| Checksum         | 0x93d2  | Checksum: 0x93d2 [unverified] |

- DNS Protocol Analysis

DNS data mainly contains the following fields:


| **Field**               | **Description**                                                             |
| -------------------- | ------------------------------------------------------------------ |
| Transaction ID (2 bytes) | Identification field used to determine which request message a DNS response corresponds to |
| Flags (2 bytes)          | Flag field in which each bit has a different meaning |
| QR (1bit)            | Query/response flag: 0 indicates a query message, and 1 indicates a response message |
| opcode (4bit)        | 0 indicates a standard query, 1 indicates a reverse query, 2 indicates a server status request, and 3–15 are reserved values |
| AA (1bit)            | Indicates an authoritative answer. This field is meaningful only in responses and indicates that the responding server is an authoritative name server for the queried domain name; |
| TC (1bit)            | Indicates truncation and is used to show that the message exceeded the permitted length and was therefore truncated |
| RD (1bit)            | Indicates that recursion is desired. This field is set in the request, and the same value is returned in the response. If RD is set, the DNS server is requested to perform recursive resolution. Support for recursive queries is optional |
| RA (1bit)            | Indicates that recursion is available. This field is set or cleared in the response to indicate whether the server supports recursive queries |
| ZERO (1bit)          | Reserved field containing all zeros |
| RCODE (4bit)         | Return code: 0 indicates no error, 1 a format error, 2 a DNS server error, 3 a domain reference error, 4 an unsupported query type, 5 a prohibited query, and 6–15 are reserved |
| Questions (2 bytes)      | Number of questions, usually 1 |
| Answer RRs (2 bytes)     | Number of answer resource records |
| Authority RRs (2 bytes)  | Number of authoritative resource records |
| Additional RRs (2 bytes) | Number of additional resource records |
| Queries (38 bytes)       | Body of the query or response, divided into Name, Type, and Class |
| Name (34 bytes)          | Query name, which is the argument following ping here; it has a variable length and ends with 0 |
| Type (2 bytes)           | Query type, which is a host A record here |
| Class (2 bytes)          | Class; IN indicates Internet data and is usually 1 |

> Analyze the request packet
>
> ![Xra4QGzLukA31yq.png](https://s2.loli.net/2022/06/07/Xra4QGzLukA31yq.png)
>
>
> | **Field Name**              | **Field Value**                  | **Field Information**                                           |
> | -------------------- | -------------------------------- | ------------------------------------------------------------- |
> | UDP Dst Port         | 53                               | UDP Dst Port: 53                                              |
> | IPv4 Src             | 172.16.2.146                     | IPv4 Src: 172.16.2.146                                        |
> | Transaction ID (2 bytes) | 0x3a3c                           | Transaction ID: 0x3a3c                                        |
> | QR (1bit)            | 0                                | 0... .... .... .... = Response: Message is a query            |
> | opcode (4bit)        | 0                                | .000 0... .... .... = Opcode: Standard query (0)              |
> | TC (1bit)            | 0                                | .... ..0. .... .... = Truncated: Message is not truncated     |
> | RD (1bit)            | 1                                | .... ...1 .... .... = Recursion desired: Do query recursively |
> | ZERO (1bit)          | 0                                | .... .... .0.. .... = Z: reserved (0)                         |
> | Questions (2 bytes)      | 1                                | Questions: 1                                                  |
> | Answer RRs (2 bytes)     | 0                                | Answer RRs: 0                                                 |
> | Authority RRs (2 bytes)  | 0                                | Authority RRs: 0                                              |
> | Additional RRs (2 bytes) | 0                                | Additional RRs: 0                                             |
> | Name (34 bytes)          | metrichub-cn-shanghai.aliyun.com | Name: metrichub-cn-shanghai.aliyun.com                        |
> | Type (2 bytes)           | 1                                | Type: A (Host Address) (1)                                    |
> | Class (2 bytes)          | 1                                | Class: IN (0x0001)                                            |
>
> 1. Analyze the response packet
>
> ![p9zOSr862ewHbdQ.png](https://s2.loli.net/2022/06/07/p9zOSr862ewHbdQ.png)
>
>
> Because Answer RRs is 1, one result appears in the Answers section.
>
>
> The Answers field can be regarded as a list. Each item in the collection is a resource record containing the previously mentioned Name, Type, and Class fields, as well as Time to Live, Data length, and Address.
>
>
> | **Field Name**      | **Field Value** | **Field Information**                   |
> | ------------ | --------------- | --------------------------------------- |
> | Time to live | 75              | Time to live: 75 (1 minute, 15 seconds) |
> | Data length  | 4               | Data length: 4                          |
> | Address      | 100.100.109.104 | Address: 100.100.109.104                |
>
>

## **5、Experiment Summary**


### **5.1 Problems and Solutions**

> Problem: When using the dig command, the error -bash: dig: command not found appeared. Solution: This issue occurs because the dig support component is not installed and the default system lacks the bind-utils package. Install it using yum: yum -y install bind-utils

### **5.2 Reflections**

- This experiment helped me become familiar with the code and software operations involved in DNS protocol analysis, as well as the analysis and extraction of UDP messages, thereby validating the knowledge learned in class. Through this experiment, I mastered the specific procedures for using the dig command, learned the basic usage of commonly used DNS protocol analysis software, and improved my programming skills.
- By using these common DNS protocol analysis commands, tracing and analyzing DNS protocol activity, and examining the structures of DNS and UDP messages, I was able to validate the knowledge learned in class.
