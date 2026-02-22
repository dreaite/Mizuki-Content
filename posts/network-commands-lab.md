---
title: '实验1 常用网络命令'
published: 2022-07-01
updated: 2022-07-01
description: '实验旨在了解Linux和Windows命令行的使用，熟悉常用网络命令如ping、ifconfig、traceroute、arp和netstat的基本用法。实验包括测试网络连通性、显示TCP/IP配置、测量数据包路径、查看ARP缓存和活动TCP连接。通过实验，掌握了命令行的使用，认识到不同操作系统中相同功能命令的参数差异，并提高了编程能力。'
permalink: 'network-commands-lab'
image: 'https://r2.dreaife.tokyo/notion/covers/4bc2401a79a84e83a627abb60bf6034e/8C68EB45EE291520ABAA7A26C10251D0.jpg'
tags: ['network', 'school']
category: 'cs-base'
draft: false
---

# 实验1 常用网络命令


## 1、实验目的

- 了解Linux命令终端和Windows命令行使用
- 熟悉常用网络命令基本用法
- 掌握基于`ping`、`ifconfig`、`traceroute`、`arp`、`netstat`网络状态分析和测量技术

## 2、实验环境

- 硬件要求：阿里云云主机ECS 一台。
- 软件要求：Linux/ Windows 操作系统

## 3、实验内容


### 3.1 ping基本用法


使用ping命令测试网络连通性。这对确定网络是否正确连接，以及网络连接的状况十分有用。如果ping运行正确，大体上就可以排除网络访问层、网卡、Modem的输入输出线路、电缆和路由器等存在的故障，从而缩小问题的范围。


```plain text
ping -c 4  www.baidu.com
ping -c 4  166.111.4.100
```


### 3.2 ifconfig/ipconfig（Windows）基本用法


使用ifconfig实用程序可用于显示当前的TCP/IP配置的设置值。这些信息一般用来检验人工配置的TCP/IP设置是否正确。


```plain text
ifconfig
ifconfig eth0
```


### 3.3 traceroute基本用法


使用traceroute命令测量路由情况，即用来显示数据包到达目的主机所经过的路径。


```plain text
traceroute www.sohu.com
traceroute 166.111.4.100
```


### 3.4 arp基本用法


ARP是TCP/IP协议族中的一个重要协议，用于确定对应IP地址的网卡物理地址。使用`arp`命令，能够查看本地计算机或另一台计算机的ARP高速缓存中的当前内容。


```plain text
arp –a
arp -i eth0
```


### 3.5 netstat基本用法


netstat命令能够显示活动的TCP连接、计算机侦听的端口、以太网统计信息。netstat显示活动的TCP连接。


```plain text
netstat –a
netstat -t
```


## 4、实验结果与分析


### 4.1 ping基本用法


```plain text
ping -c 4  www.baidu.com
ping -c 4  166.111.4.100
```


![p4lJiLgDakWBonr.png](https://s2.loli.net/2022/06/09/p4lJiLgDakWBonr.png)


image-20220409224423767


Ping 是工作在 TCP/IP 网络体系结构中应用层的一个服务命令， 主要是向特定的目的主机发送 ICMP（Internet Control Message Protocol 因特网报文控制协议）Echo 请求报文，测试目的站是否可达及了解其有关状态。在网络可达性测试中命令 ping 能产生 ICMP 回送请求和应答报文。目的主机收到 ICMP 回送请求报文后立刻回送应答报文，若源主机能收到 ICMP 回送应答报文，则说明到达该主机的网络正常。


在 Linux 下可以使用的参数 c 可以指定要被发送（或接收）的回送信号请求的数目。这里测试 `www.baidu.com` 与`166.111.4.100`是否可连通。截图显示，4个数据包均已成功接收，没有丢失，表明网络通，主机 `www.baidu.com` 、`166.111.4.100`可达，平均往返时延分别为 10.105ms和31.997ms。


### 4.2 ifconfig/ipconfig（Windows）基本用法


```plain text
ifconfig
ifconfig eth0
```


![3vtchm2ryeR1kXa.png](https://s2.loli.net/2022/06/09/3vtchm2ryeR1kXa.png)


image-20220409230049094


`ipconfig`是windows系统中用于查看网络配置信息的命令。Windows中的`ipconfig`实用程序可用于显示当前的TCP/IP配置的设置值。这些信息一般用来检验人工配置的TCP/IP设置是否正确。


`ifconfig`是Linux系统中用于显示或设置网络配置信息的命令。ifconfig可以用来查看、配置、启用或禁用位于内核中的网络接口，这个工具极为常用，在系统引导时它被用来设置必要的网络接口参数。可以用这个工具来临时性的配置网卡的IP地址、掩码、广播地址、网关等。也可以把它写入一个文件中（比如`/etc/rc.d/rc.local`)，这样系统引导后，会读取这个文件，为网卡设置IP地址。


`ifconfig`可以显示网络设备信息，而`ifconfig eth0`可以只显示eth0第一块网卡的信息。这里我们查看了主机的网络设备信息，可以看到该主机最大传输单元为`1500`，还有网卡的Ip地址（`172.16.2.6`）、广播地址（`172.16.2.255`）、掩码地址（`255.255.255.0`）。


而lo 是表示主机的回坏地址，这个一般是用来测试一个网络程序，但又不想让局域网或外网的用户能够查看，只能在此台主机上运行和查看所用的网络接口。比如把 HTTPD服务器的指定到回坏地址，在浏览器输入 `127.0.0.1` 就能看到你所架WEB网站了。但只是您能看得到，局域网的其它主机或用户无从知道。


### 4.3 traceroute基本用法


```plain text
traceroute www.sohu.com
traceroute 166.111.4.100
traceroute www.xju.edu.cn
traceroute www.xju.edu.cn -T
```


![MBVg4aXbmCf1w2k.png](https://s2.loli.net/2022/06/09/MBVg4aXbmCf1w2k.png)


image-20220409232055284


Linux中的`traceroute`命令用于显示数据包到主机间的路径。traceroute指令让你追踪网络数据包的路由途径，预设数据包大小是40Bytes，用户可另行设置。


Traceroute程序的设计是利用ICMP及IP header的TTL（Time To Live）栏位（field）。首先，traceroute送出一个TTL是1的IP datagram到目的地，当路径上的第一个路由器（router）收到这个datagram时，它将TTL减1。此时，TTL变为0了，所以该路由器会将此datagram丢掉，并送回一个ICMP time exceeded消息，traceroute 收到这个消息后，便知道这个路由器存在于这个路径上，接着traceroute 再送出另一个TTL是2 的datagram，发现第2 个路由器……traceroute 每次将送出的datagram的TTL 加1来发现另一个路由器，这个重复的动作一直持续到某个datagram 抵达目的地。


当Traceroute在送出UDP datagrams到目的地时，它所选择送达的port number 是一个一般应用程序都不会用的号码（30000 以上），所以当此UDP datagram 到达目的地后该主机会送回一个ICMP port unreachable的消息，而当traceroute 收到这个消息时，便知道目的地已经到达了。所以traceroute 在Server端也是没有所谓的Daemon 程式。


Traceroute提取发 ICMP TTL到期消息设备的IP地址并作域名解析。每次 ，Traceroute都打印出一系列数据,包括所经过的路由设备的域名及 IP地址,三个包每次来回所花时间。


这里我们使用traceroute最简单常用的方法`traceroute hostname`测量主机到`www.baidu.com` 与`166.111.4.100`的路由情况，即用来显示数据包到达目的主机所经过的路径。在图中，我们可以看到记录按序列号从1开始，每个纪录就是一跳 ，其中每跳表示一个网关，每行的三个时间，单位是 `ms`，代表探测数据包向每个网关发送三个数据包后，网关响应后返回的时间。此外，我们可以看到后面多行是以星号表示的。出现这样的情况，可能是防火墙封掉了ICMP的返回信息，所以我们得不到什么相关的数据包返回数据。而`-T`命令则是代表使用`TCP SYN`进行探测。


### 4.4 arp基本用法


```plain text
arp –a
arp -i eth0
```


![9mabXeSE87TA3ri.png](https://s2.loli.net/2022/06/09/9mabXeSE87TA3ri.png)


image-20220409233845980


ARP是TCP/IP协议族中的一个重要协议，用于确定对应IP地址的网卡物理地址。使用`arp`命令可以显示和修改“地址解析协议（ARP）”缓存表，ARP缓存中包含一个或多个表 ，它们用于存储IP地址及其经过解析的以太网或令牌环物理地址。 本质上是，一个`ip`和`mac`地址相对应的表


`arp`命令在 Linux 下使用的参数a可以显示所有接口的ARP缓存表（计算机上安装的每一个以太网或令牌环网络适配器都有自己单独的表），`arp -i eth0` 可以 显示指定设备的`arp`缓冲区（即`eth0`的`arp`缓冲区）。`HWaddress`可以看到当前eth0（第一块网卡）的物理地址为`ee:ff:ff:ff:ff:ff`。


### 4.5 netstat基本用法


`netstat`命令能够显示活动的TCP连接、计算机侦听的端口、以太网统计信息。`netstat`显示活动的TCP连接。


```plain text
netstat –a
netstat -t
```


![SCv6fGV2RJpn4Ux.png](https://s2.loli.net/2022/06/09/SCv6fGV2RJpn4Ux.png)


image-20220410000001138


![DdMLpEe7uTjWItg.png](https://s2.loli.net/2022/06/09/DdMLpEe7uTjWItg.png)


image-20220410000017070


Netstat是控制台命令,是一个监控TCP/IP网络的非常有用的工具，它可以显示路由表、实际的网络连接以及每一个网络接口设备的状态信息。Netstat用于显示与IP、TCP、UDP和ICMP协议相关的统计数据，一般用于检验本机各端口的网络连接情况。


netstat命令在 Linux 下使用的参数a可以列出所有当前的连接。在上图我们可以看到上述命令列出了 `tcp`, `udp` 和 `unix` 协议下所有套接字的所有连接且默认不显示LISTEN相关。而通过`metstat -t`我们可以让主机仅显示`tcp`相关选项。


## 5、实验小结


### 5.1 问题与解决办法

> 问题在使用traceroute命令时，出现-bash: traceroute: command not found错误解决方法使用yum install traceroute命令，首先安装traceroute
> 问题在windows10下使用ping -c 4 www.baidu.com命令报错解决方法使用ping /?命令查询ping命令使用帮助，发现需要通过设置-n使请求数被设置。

### 5.2 心得体会

- 本次实验报告完成了对常用网络命令的熟系，实现对课上知识的印证。通过这次实验，我掌握了Linux终端的命令行使用，了解了常用网络命令的基本用法，提高了自身编程能力。
- 认识到在 Linux 和 windows 环境下，同样功能软件，参数可能存在不同。在进行测量时要查看帮助来正确设置参数选项。
- 通过这些常用的网络命令操作，对网络不同层的硬件软件的不同方面进行了各项操作，让我印证了上课所学的知识。
