---
title: 'Experiment 4: TCP Protocol Analysis'
published: 2022-07-01
updated: 2022-07-01
description: 'This experiment aims to understand the basic concepts and segment structure of TCP, analyze connection establishment and termination, and learn to use tcpdump and Wireshark for TCP protocol analysis. It uses wget to download a webpage while capturing packets, examines the TCP header and its fields, explores the three-way handshake and four-way termination processes, summarizes problems encountered and their solutions, and deepens understanding of the IP protocol and TCP segment structure.'
image: 'https://r2.dreaife.tokyo/notion/covers/a9889b8836ad49a39c4f9bec4325b5fa/3ba609c40d7ab32a.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

# **1．Experimental Objectives**

- Understand the basic concepts and segment structure of the transport-layer TCP protocol
- Analyze TCP segment headers
- Analyze the TCP connection establishment and termination processes
- Master TCP protocol analysis techniques using `tcpdump` and `wireshark`.

## **2．Experimental Environment**

- Hardware requirement: One Alibaba Cloud ECS instance.
- Software requirement: Linux/Windows operating system

## **3．Experimental Content**


TCP is connection-oriented and provides reliable end-to-end communication over an unreliable internetwork. It is a core protocol of the TCP/IP protocol suite.


To ensure reliable segment transmission, TCP assigns a sequence number to each packet. Sequence numbers also ensure that packets are received in order by the receiving entity. The receiving entity then returns an acknowledgment (ACK) for the bytes successfully received. If the sending entity does not receive an acknowledgment within a reasonable round-trip time (RTT), the corresponding data, presumed lost, is retransmitted.


Use `wget` to download the Xinjiang University homepage at `www.xju.edu.cn` while capturing packets with `tcpdump`. Use `wireshark` to analyze the TCP segment header, the three-way handshake used to establish a connection, and the four-way handshake used to terminate a connection.


## **4．Experimental Results and Analysis**


### **4.1** **Complete the Table**

- First, capture the data while wget is downloading, as follows:

![L6OKb28SnoZCtIR.png](https://s2.loli.net/2022/05/15/L6OKb28SnoZCtIR.png)

- Open the cap file with wareshark for analysis and filter for the TCP protocol. The results are as follows:

![Wn6tz9xaCfgMUBS.png](https://s2.loli.net/2022/05/15/Wn6tz9xaCfgMUBS.png)

- Based on the captured packets, analyze the TCP segment structure and enter each TCP field name, field length, field value, and field meaning in the following table:

| **Field Name**                  | **Field Length** | **Field Value** | **Field Meaning**                                         |
| ------------------------------- | ---------------- | --------------- | --------------------------------------------------------- |
| Source Port                     | 2bit             | 23242           | Source Port: 23242                                        |
| Destination Port                | 2bit             | 22              | Destination Port: 22                                      |
| TCP Segment Len                 | 1bit             | 0               | [TCP Segment Len: 0]                                      |
| relative Sequence Number        | 4bit             | 1               | Sequence Number: 1    (relative sequence number)          |
| Sequence Number                 | 4bit             | 3259399585      | Sequence Number (raw): 3259399585                         |
| relative Acknowledgment Number  | 4bit             | 1               | Acknowledgment Number: 1    (relative ack number)         |
| Acknowledgment number (raw)     | 4bit             | 1484179832      | Acknowledgment number (raw): 1484179832                   |
| Header Length                   | 4bit             | 20              | 0101 .... = Header Length: 20 bytes (5)                   |
| Reserved                        | 1bit             | 0               | 000. .... .... = Reserved: Not set                        |
| Nonce                           | 1bit             | 0               | ...0 .... .... = Nonce: Not set                           |
| Congestion Window Reduced (CWR) | 1bit             | 0               | .... 0... .... = Congestion Window Reduced (CWR): Not set |
| ECN-Echo                        | 1bit             | 0               | .... .0.. .... = ECN-Echo: Not set                        |
| Urgent                          | 1bit             | 0               | .... ..0. .... = Urgent: Not set                          |
| Acknowledgment                  | 1bit             | 1               | .... ...1 .... = Acknowledgment: Set                      |
| Push                            | 1bit             | 0               | .... .... 0... = Push: Not set                            |
| Reset                           | 1bit             | 0               | .... .... .0.. = Reset: Not set                           |
| Syn                             | 1bit             | 0               | .... .... ..0. = Syn: Not set                             |
| Fin                             | 1bit             | 0               | .... .... ...0 = Fin: Not set                             |
| Window                          | 2bit             | 229             | Window: 229                                               |
| Calculated window size          | 2bit             | 29312           | [Calculated window size: 29312]                           |
| Window size scaling factor      | 2bit             | 128             | [Window size scaling factor: 128]                         |
| Checksum                        | 2bit             | 0xda61          | Checksum: 0xda61 [unverified]                             |
| Urgent Pointer                  | 2bit             | 0               | Urgent Pointer: 0                                         |

- Based on the experimental results, which parts make up a TCP segment, and what are their functions?

A TCP segment can generally be divided into:

1. Port numbers: Used to identify different application processes on the same computer.

1.1 Source port: Together with the IP address, the source port identifies the return address of the segment.


1.2 Destination port: Identifies the application interface on the receiving computer.


The source and destination port numbers in the TCP header, together with the source and destination IP addresses in the IP datagram, uniquely identify a TCP connection.

1. Sequence number and acknowledgment number: These are essential to reliable TCP transmission. The sequence number is the number of the first byte of data sent in the current segment, ensuring that TCP data is transmitted in order. The acknowledgment number, or ACK, specifies the sequence number of the next byte expected and indicates that all data preceding that sequence number has been received correctly.
2. Data offset/header length: 4 bits. Because the header may contain options, the length of the TCP header is variable. This field indicates the offset at which the data area begins within the segment.
3. Reserved: Reserved for future uses and generally set to 0.
4. Control bits: URG, ACK, PSH, RST, SYN, and FIN. Each of these six flags represents a control function.

5.1 URG: The urgent pointer flag. A value of 1 indicates that the urgent pointer is valid; when it is 0, the urgent pointer is ignored.


5.2 ACK: The acknowledgment number flag. A value of 1 indicates that the acknowledgment number is valid; a value of 0 indicates that the segment contains no acknowledgment information, so the acknowledgment number field is ignored.


5.3 PSH: The push flag. A value of 1 indicates that the data carries the push flag, instructing the receiver to deliver the segment to the application as soon as possible instead of queuing it in the buffer.


5.4 RST: The connection reset flag. It is used to reset a connection that has become invalid because of a host crash or another cause. It can also be used to reject invalid segments and connection requests.


5.5 SYN: The sequence number synchronization flag, used during connection establishment. In a connection request, SYN=1 and ACK=0 indicate that the segment does not use a piggybacked acknowledgment field. The connection response carries an acknowledgment, with SYN=1 and ACK=1.


5.6 FIN: The finish flag, used to terminate a connection. A value of 1 indicates that the sender has no more data to send and is closing its outgoing data stream.

1. Window: The sliding-window size. It informs the sender of the receiver's available buffer size, thereby controlling the sender's data transmission rate and providing flow control.
2. Checksum: A parity check calculated over the entire TCP segment, including the TCP header and TCP data, using 16-bit words. It is calculated and stored by the sender and verified by the receiver.
3. Urgent pointer: The urgent pointer is valid only when the URG flag is set to 1. TCP urgent mode allows the sender to transmit urgent data to the other endpoint.
4. Data section: The transmitted information.

### **4.2** **Analyze the Three-Way Handshake for Connection Establishment**

- Analyze the flags and sequence numbers of the three-way handshake

![YrHyu594bim7VpD.png](https://s2.loli.net/2022/05/15/YrHyu594bim7VpD.png)


First handshake: The client sends a segment to the server with the SYN flag set and Seq=0 (x), requesting that a connection be established with the server.


Second handshake: The server responds to the client with a segment whose SYN and ACK flags are set, with Seq=0 (y) and ACK=1 (x+1).


Third handshake: After receiving the server's SYN segment, the client responds with ACK=1 (y+1), with the ACK flag set.


### **4.3** **Analyze the Four-Way Handshake for Connection Termination**

- Analyze the segment flags and sequence numbers of the four-way handshake

![O6n4rQpIR8DHjsL.png](https://s2.loli.net/2022/05/15/O6n4rQpIR8DHjsL.png)


First handshake: The client sends FIN to the server, with Seq=166 and Ack=7725.


Second handshake: The server returns ACK, with Seq=7725 and Ack=167.


Third handshake: The server sends FIN, with Seq=7725 and Ack=167.


Fourth handshake: The client replies to the server with ACK, with Seq=167 and Ack=7726.

- Why Wireshark captured only four segments

As shown in the figure, the four-way handshake consists of only three exchanges in this case. This is because TCP uses full-duplex communication. After the client has no more data to send to the server, it can send a FIN signal to inform the server that data transmission from the client to the remote server has ended. However, the remote server can still continue sending packets to the client. Therefore, termination of data transmission in each direction is independent in timing, and the two events may be separated by a relatively long interval. Consequently, at least 2+2=4 exchanges are normally required to terminate the connection completely. However, if the server also has no more data to send to the client after receiving the client's FIN packet, the ACK packet sent to the client and the server's own FIN packet can be combined into a single packet. This reduces the four-way handshake to three exchanges.


## **5、Experiment Summary**


### **5.1 Problems and Solutions**

> Problem: A connection error occurred when using Xftp to connect to the server. Solution: The connection returned to normal after switching to the campus network. Further investigation found that the issue was caused by the server firewall.

### **5.2 Reflections**

- This experiment familiarized me with the code and software operations involved in IP protocol analysis, as well as the analysis and extraction of TCP segments, allowing me to verify the knowledge covered in class. Through this experiment, I mastered the specific process for using the wget command, learned the basic usage of common IP protocol analysis software, and improved my programming skills.
- By using these common IP protocol analysis commands to trace and analyze IP protocol activity and examine TCP segment structures, I was able to verify the knowledge learned in class.
