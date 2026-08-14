---
title: 'Experiment 1: Common Network Commands'
published: 2022-07-01
updated: 2022-07-01
description: 'This experiment explored the use of the Linux and Windows command lines and introduced common networking commands such as ping, ifconfig, traceroute, arp, and netstat. It covered testing network connectivity, displaying TCP/IP configurations, tracing packet routes, viewing the ARP cache, and inspecting active TCP connections. Through the experiment, I gained proficiency with command-line tools, learned how command parameters differ across operating systems despite providing the same functionality, and improved my programming skills.'
image: 'https://r2.dreaife.tokyo/notion/covers/4bc2401a79a84e83a627abb60bf6034e/8C68EB45EE291520ABAA7A26C10251D0.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

# Experiment 1: Common Network Commands


## 1. Objectives

- Learn how to use the Linux terminal and Windows command line
- Become familiar with the basic usage of common network commands
- Master network status analysis and measurement techniques based on `ping`, `ifconfig`, `traceroute`, `arp`, and `netstat`

## 2. Environment

- Hardware requirement: One Alibaba Cloud ECS instance.
- Software requirement: Linux/Windows operating system

## 3. Experiment Content


### 3.1 Basic Usage of ping


Use the ping command to test network connectivity. This is very useful for determining whether the network is connected correctly and assessing the state of the network connection. If ping works correctly, faults involving the network access layer, network adapter, modem input/output lines, cables, and routers can generally be ruled out, thereby narrowing down the scope of the problem.


```plain text
ping -c 4  www.baidu.com
ping -c 4  166.111.4.100
```


### 3.2 Basic Usage of ifconfig/ipconfig (Windows)


The ifconfig utility can be used to display the current TCP/IP configuration settings. This information is generally used to verify whether manually configured TCP/IP settings are correct.


```plain text
ifconfig
ifconfig eth0
```


### 3.3 Basic Usage of traceroute


Use the traceroute command to measure routes—that is, to display the path taken by packets to reach the destination host.


```plain text
traceroute www.sohu.com
traceroute 166.111.4.100
```


### 3.4 Basic Usage of arp


ARP is an important protocol in the TCP/IP protocol suite. It is used to determine the physical address of the network adapter corresponding to an IP address. The `arp` command allows you to view the current contents of the ARP cache on the local computer or another computer.


```plain text
arp –a
arp -i eth0
```


### 3.5 Basic Usage of netstat


The netstat command can display active TCP connections, ports on which the computer is listening, and Ethernet statistics. netstat displays active TCP connections.


```plain text
netstat –a
netstat -t
```


## 4. Results and Analysis


### 4.1 Basic Usage of ping


```plain text
ping -c 4  www.baidu.com
ping -c 4  166.111.4.100
```


![p4lJiLgDakWBonr.png](https://s2.loli.net/2022/06/09/p4lJiLgDakWBonr.png)


image-20220409224423767


Ping is a service command that operates at the application layer of the TCP/IP network architecture. It primarily sends ICMP (Internet Control Message Protocol) Echo Request messages to a specified destination host to test whether the destination is reachable and obtain information about its status. In network reachability tests, the ping command generates ICMP Echo Request and Echo Reply messages. After receiving an ICMP Echo Request message, the destination host immediately returns an Echo Reply message. If the source host receives the ICMP Echo Reply message, the network path to that host is functioning normally.


On Linux, the c parameter can be used to specify the number of Echo Requests to send or receive. Here, we tested whether `www.baidu.com` and `166.111.4.100` were reachable. The screenshot shows that all four packets were received successfully without any loss, indicating that the network was connected and that the hosts `www.baidu.com` and `166.111.4.100` were reachable. Their average round-trip times were 10.105 ms and 31.997 ms, respectively.


### 4.2 Basic Usage of ifconfig/ipconfig (Windows)


```plain text
ifconfig
ifconfig eth0
```


![3vtchm2ryeR1kXa.png](https://s2.loli.net/2022/06/09/3vtchm2ryeR1kXa.png)


image-20220409230049094


`ipconfig` is a Windows command used to view network configuration information. The `ipconfig` utility in Windows can display the current TCP/IP configuration settings. This information is generally used to verify whether manually configured TCP/IP settings are correct.


`ifconfig` is a Linux command used to display or configure network settings. ifconfig can be used to view, configure, enable, or disable network interfaces in the kernel. This tool is widely used and configures the necessary network interface parameters during system startup. It can temporarily configure a network adapter's IP address, subnet mask, broadcast address, gateway, and other settings. These settings can also be written to a file such as `/etc/rc.d/rc.local`, allowing the system to read the file and assign an IP address to the network adapter after startup.


`ifconfig` can display information about all network devices, while `ifconfig eth0` displays information only about eth0, the first network adapter. Here, we viewed the host's network device information. We can see that the host's maximum transmission unit is `1500`, along with the network adapter's IP address (`172.16.2.6`), broadcast address (`172.16.2.255`), and subnet mask (`255.255.255.0`).


lo represents the host's loopback address. It is generally used to test a network application without allowing users on the LAN or external network to access it; the relevant network interface can only be used and viewed on the local host. For example, if an HTTPD server is bound to the loopback address, you can enter `127.0.0.1` in a browser to view the website you host. However, only you can view it; other hosts or users on the LAN will not know about it.


### 4.3 Basic Usage of traceroute


```plain text
traceroute www.sohu.com
traceroute 166.111.4.100
traceroute www.xju.edu.cn
traceroute www.xju.edu.cn -T
```


![MBVg4aXbmCf1w2k.png](https://s2.loli.net/2022/06/09/MBVg4aXbmCf1w2k.png)


image-20220409232055284


The `traceroute` command in Linux displays the path taken by packets between hosts. The traceroute command allows you to trace the route of network packets. The default packet size is 40 bytes, but users can configure a different size.


Traceroute is designed to use ICMP and the TTL (Time To Live) field in the IP header. First, traceroute sends an IP datagram with a TTL of 1 to the destination. When the first router on the path receives the datagram, it decrements the TTL by 1. The TTL then becomes 0, so the router discards the datagram and returns an ICMP Time Exceeded message. After traceroute receives this message, it knows that the router exists on the path. Traceroute then sends another datagram with a TTL of 2 to discover the second router. Traceroute increments the TTL of each outgoing datagram by 1 to discover each successive router. This process continues until a datagram reaches the destination.


When Traceroute sends UDP datagrams to the destination, it selects a destination port number that ordinary applications generally do not use—typically above 30000. When the UDP datagram reaches the destination, the host returns an ICMP Port Unreachable message. When traceroute receives this message, it knows that the destination has been reached. Therefore, traceroute does not require a daemon program on the server.


Traceroute extracts the IP address of each device that sends an ICMP TTL Exceeded message and performs domain name resolution. Each time, Traceroute prints a series of data that includes the domain name and IP address of each routing device along the path, as well as the round-trip time for each of three packets.


Here, we used the simplest and most common traceroute syntax, `traceroute hostname`, to measure the routes from the host to `www.baidu.com` and `166.111.4.100`. In other words, it displays the path taken by packets to reach each destination host. In the figure, records are numbered sequentially starting from 1. Each record represents one hop, and each hop represents a gateway. The three times on each line, measured in `ms`, represent the time taken for each gateway to respond after three probe packets have been sent to it. In addition, several subsequent lines are represented by asterisks. This may occur because a firewall has blocked the returning ICMP messages, preventing us from receiving the corresponding packet data. The `-T` option means that `TCP SYN` is used for probing.


### 4.4 Basic Usage of arp


```plain text
arp –a
arp -i eth0
```


![9mabXeSE87TA3ri.png](https://s2.loli.net/2022/06/09/9mabXeSE87TA3ri.png)


image-20220409233845980


ARP is an important protocol in the TCP/IP protocol suite. It is used to determine the physical address of the network adapter corresponding to an IP address. The `arp` command can display and modify the Address Resolution Protocol (ARP) cache table. The ARP cache contains one or more tables used to store IP addresses and their resolved Ethernet or Token Ring physical addresses. Essentially, it is a table that maps `ip` addresses to `mac` addresses.


On Linux, the a parameter of the `arp` command displays the ARP cache tables for all interfaces. Each Ethernet or Token Ring network adapter installed on the computer has its own table. `arp -i eth0` displays the `arp` cache for the specified device—that is, the `arp` cache for `eth0`. Under `HWaddress`, we can see that the current physical address of eth0, the first network adapter, is `ee:ff:ff:ff:ff:ff`.


### 4.5 Basic Usage of netstat


The `netstat` command can display active TCP connections, ports on which the computer is listening, and Ethernet statistics. `netstat` displays active TCP connections.


```plain text
netstat –a
netstat -t
```


![SCv6fGV2RJpn4Ux.png](https://s2.loli.net/2022/06/09/SCv6fGV2RJpn4Ux.png)


image-20220410000001138


![DdMLpEe7uTjWItg.png](https://s2.loli.net/2022/06/09/DdMLpEe7uTjWItg.png)


image-20220410000017070


Netstat is a console command and a highly useful tool for monitoring TCP/IP networks. It can display the routing table, active network connections, and status information for each network interface device. Netstat displays statistics related to the IP, TCP, UDP, and ICMP protocols and is generally used to inspect network connections on the local machine's ports.


On Linux, the a parameter of the netstat command lists all current connections. In the figure above, we can see that the command lists all socket connections under the `tcp`, `udp`, and `unix` protocols, while LISTEN-related entries are not displayed by default. By using `metstat -t`, we can make the host display only `tcp`-related entries.


## 5. Experiment Summary


### 5.1 Problems and Solutions

> Problem: When using the traceroute command, the error -bash: traceroute: command not found appeared. Solution: First install traceroute using the yum install traceroute command.
> Problem: Running the ping -c 4 www.baidu.com command on Windows 10 produced an error. Solution: Use the ping /? command to view the usage help for ping. This showed that -n must be used to set the number of requests.

### 5.2 Reflections

- This experiment provided practical experience with common network commands and verified the knowledge learned in class. Through this experiment, I mastered using the command line in the Linux terminal, learned the basic usage of common network commands, and improved my programming skills.
- I learned that software providing the same functionality may use different parameters in Linux and Windows environments. When taking measurements, the help documentation should be consulted to configure the command options correctly.
- By using these common network commands to perform various operations on hardware and software at different network layers, I was able to verify the knowledge learned in class.
