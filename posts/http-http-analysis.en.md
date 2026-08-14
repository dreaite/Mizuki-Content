---
title: 'Experiment 7: HTTP Protocol Analysis and Measurement'
published: 2022-07-01
updated: 2022-07-01
description: 'This experiment aims to understand the HTTP protocol and its message structure, and to learn how to capture and analyze HTTP packets using tcpdump and Wireshark. By downloading the Xinjiang University homepage, it examines the HTTP version, IP addresses, status codes, content length, and header fields. Connection errors were resolved during the experiment, improving programming skills and understanding of HTTP.'
image: 'https://r2.dreaife.tokyo/notion/covers/70ae8f6e946948d7839c6e2b781e11aa/165371EE8BB9E99C4121DDB4A9C0DE46.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

# **1. Experiment Objectives**

- Understand the HTTP protocol and its message structure
- Understand the HTTP operation process: the TCP three-way handshake and request-response interactions
- Master HTTP packet capture and analysis techniques using `tcpdump` and `wireshark`

## **2. Experiment Environment**

- Hardware requirements: One Alibaba Cloud ECS instance.
- Software requirements: Linux/Windows operating system

## **3. Experiment Content**


Use `wget` to download the Xinjiang University homepage, **[**[www.xju.edu.cn](https://www.notion.so/dreaifenote/www.xju.edu.cn)**](**[**http://www.xju.edu.cn**](http://www.xju.edu.cn/)**)**, capture packets using `tcpdump`, and analyze them using `wireshark`.

1. Is the browser running HTTP version 1 or 1.1? What version of HTTP is the server running?
2. What is your computer’s IP address? What is the server’s IP address?
3. What status code is returned from the server to the browser?
4. When was the HTML file retrieved from the server last modified?
5. How many bytes of content were returned to the browser?
6. In addition to the fields already covered above, what other header fields are present? Inspect the raw data in the packet content pane. Are there any headers that are not displayed in the packet list?

## **4. Experiment Results and Analysis**


### **1. Download the Xinjiang University homepage and capture packets**


![IFScZVzToMAhDnd.png](https://s2.loli.net/2022/06/07/IFScZVzToMAhDnd.png)


### **2. Analyze the capture file using****`wireshark`**


### **2.1 Filter for the HTTP protocol**


![cVTMD8wmz9RJyNG.png](https://s2.loli.net/2022/06/07/cVTMD8wmz9RJyNG.png)


The packet capture shows that the client requests a simple HTML file from the server, and the server returns the file to the client.


### **2.2 Answers**

> Is the browser running HTTP version 1 or 1.1? What version of HTTP is the server running? The browser is running HTTP version 1.1, and the server is also running HTTP version 1.1. What is your computer’s IP address? What is the server’s IP address? The computer’s IP address is 172.16.2.155, and the server’s IP address is 100.100.109.104. What status code is returned from the server to the browser? The returned status code is 200, indicating that the request was processed successfully. When was the HTML file retrieved from the server last modified? The time was Tue, 07 Jun 2022 07:02:12 GMT. How many bytes of content were returned to the browser? 0 bytes of content were returned to the browser. In addition to the fields already covered above, what other header fields are present? Inspect the raw data in the packet content pane. Are there any headers that are not displayed in the packet list? The HTTP request message also contains fields such as Host, Connection, Accept, User-Agent, and Accept-Encoding. The HTTP response message also contains fields such as Server and Connection.

## **5. Experiment Summary**


### **5.1 Problems and Solutions**

> Problem: A connection error occurred when using Xftp to connect to the server. Solution: The connection returned to normal after switching to the campus network. Troubleshooting revealed that the server firewall was the cause.

### **5.2 Reflections**

- This experiment familiarized me with the code and software operations involved in HTTP protocol analysis and validated the knowledge learned in class. Through this experiment, I mastered the specific process of using the `wget` command, learned the basic usage of common HTTP protocol analysis software, and improved my programming skills.
- By using these common HTTP analysis commands to trace and analyze HTTP protocol activity and examine the structure of HTTP messages, I was able to validate the knowledge learned in class.
