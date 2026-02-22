---
title: 'Ubuntu通过nat将网络转发给路由器'
published: 2024-12-15
updated: 2024-12-15
description: '通过修改Netplan配置、启用IP转发和配置NAT转发，实现Ubuntu将网络转发给路由器的功能。步骤包括清除现有配置、设置静态IP、安装和配置DHCP服务，并验证网络共享的有效性。'
permalink: 'ubuntu-nat-routing'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/4cebe136-c579-4ef2-97a6-bc3e93beb4eb/IMG_1935.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNAGBRM%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T073411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE0vgzlQNnEBFzki8QxtRbByU425%2Bb1eZ4DAmR1R0gfgIhAOfalBB%2BYC7xzdxKheF%2BM%2F7nFITIBJiamVzGD8jmZYwtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw5UmJG0w26p%2Fro6Qq3AMKnsrukopqrOxumn0SuV3QywcjdT3nHwsb%2FLQ9XvNgF7fIz5YsOyr4l5hERbGe3SwZjjnxPCKWWSR7y2tl9ofdViCjgHrzfs%2FFfVWnSP94Et3I5edTTllUX5bi7jgXbwJo9UnPgi5HyhBc9FQRoE2TbP%2FQNujMAmUHgWYlkURI42rGDbZbEWPc1ktnIpt3jOyURp4HeEAqP2vqm9Z4VqlL0xcMK89GZKWp1cUpKWbK8bk5n%2Bjrl8F1KQ%2F6EkJKBMeN0xlG8pEY7WehwZy%2ByWH6KsHd%2F24Iq1kUOtGznIRcJGzs9miCE9SCZy7pzb22BqD%2B6RWd0lhPNG9bE25Pq%2Bp91YVVLpc%2B%2BZ8C7Ee8POJEAFx7KaqDSi0%2BIqwRmyal1R1KXp2xkwsRJU%2FwFY2X41sjZnhnFHqGbredYg0us8kcSibeXPagDaFGolwS63ki3rWmr7pbYjIGFOd6wV4OqadwZWGR%2F3usj5XMHUShIGMKXAfcwzWJ6bRyikOhcwFjdybU3QRov577SZocfaO4vjRPsnpyIqunU0rfW9VoR6WfdyQlvCemwEttg%2FwQpLh6zhsz%2FJeICdWG42vwj095qGxNXjdv1TLHIuw68Vl8bWZtRwdGbGrqk4f%2BCKAy4TDNxerMBjqkAQCl9Mk6qBl8gUkMQa2epzGBxSlLtg3ZLtOIYstBfg8KzwvMtoSu2bBhY5A1iQL3%2F8%2B5Cd2V3ztI%2Bj%2FHzL58w0r1IXYFYJuNLHOHJIoYONBgZEthT9TVnfgUYMQcSXomYMAHYkqOgt1gtQ%2Fx8giBkDvuCii1%2FqypVck3WH8%2BT50HSAlKADmpcUxIhheTj%2BMka7oDB6sHcy3aKe2hlVGxHc5xGjCp&X-Amz-Signature=4d4cd54280e5f7a2043a63bea6138124cfdabcb641417c4974b4afb6fcff6ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['network', 'linux']
category: 'prog-side'
draft: false
---

因为个人需要，需要先通过主机获取网络，再通过网络转发，通过网线将网线共享给路由器。


下面是解决方法。


ps：事前声明，本配置环境为刚装完的Ubuntu，如果你的环境有需要保存的配置，建议先进行保存，避免被删除。


# 查看当前网络状态


```shell
ip addr
# 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
#    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
#    inet 127.0.0.1/8 scope host lo
#       valid_lft forever preferred_lft forever
#    inet6 ::1/128 scope host noprefixroute 
#       valid_lft forever preferred_lft forever
#2: enp1s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
#    link/ether 68:1d:ef:4a:41:4e brd ff:ff:ff:ff:ff:ff
#    inet6 fe80::85cf:33e6:14a0:3af6/64 scope link noprefixroute 
#       valid_lft forever preferred_lft forever
#3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
#    link/ether 68:1d:ef:4a:41:4f brd ff:ff:ff:ff:ff:ff
#    inet 192.168.0.148/24 brd 192.168.0.255 scope global dynamic noprefixroute enp3s0
#       valid_lft 7094sec preferred_lft 7094sec
#    inet6 fe80::8590:b5db:d80c:eae8/64 scope link noprefixroute 
#       valid_lft forever preferred_lft forever
#4: wlp2s0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
#    link/ether bc:2b:02:7c:27:a7 brd ff:ff:ff:ff:ff:ff
#5: enx5a5f0a205236: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN group default qlen 1000
#    link/ether 5a:5f:0a:20:52:36 brd ff:ff:ff:ff:ff:ff
#    inet 192.168.9.107/24 brd 192.168.9.255 scope global dynamic noprefixroute enx5a5f0a205236
#       valid_lft 3421sec preferred_lft 3421sec
#    inet6 fe80::86cb:2037:bfdc:9300/64 scope link noprefixroute 
#       valid_lft forever preferred_lft forever
```


找到自己连接互联网和连接路由器的网络接口


# **网络配置**


## **1. 修改 Netplan 配置**

1. 清除所有现有 Netplan 配置文件：

    ```shell
    sudo rm -rf /etc/netplan/*.yaml
    ```

2. 创建一个新的基础配置文件：

    ```shell
    sudo nano /etc/netplan/01-netcfg.yaml
    ```

3. 添加以下内容，启用接口的 DHCP，为连接路由器的网卡配置静态 IP 地址：

    ```yaml
    network:
      version: 2
      renderer: networkd
      ethernets:
        enp1s0:
          addresses:
            - 192.168.1.1/24
          dhcp4: false
          gateway4: 192.168.1.254
          nameservers:
            addresses:
              - 8.8.8.8
              - 8.8.4.4
        enx5a5f0a205236:
          dhcp4: true
    ```

4. 保存文件并退出，然后应用配置：

    ```shell
    sudo netplan apply
    ```


---


## **2. 验证网络配置**


运行以下命令检查每个接口是否成功获取 IP 地址：


```shell
ip addr
```

- **目标状态**：
    - 配置接口应通过 DHCP 获取 IP 地址。
    - 路由器接口应分配为静态地址。

        运行以下命令，检查 **`enp1s0`** 是否分配了静态 IP 地址：


        ```shell
        ip addr show enp1s0
        ```


        输出应包含：


        ```plain text
        inet 192.168.1.1/24 scope global enp1s0
        ```


---


## **3. 配置路由器网络共享**


按照本人的网络结构，是由 **`enx5a5f0a205236`** 提供互联网连接，并通过 **`enp1s0`** 共享到路由器：


### **3.1 启用 IP 转发**

1. 临时启用：

    ```shell
    sudo sysctl -w net.ipv4.ip_forward=1
    ```

2. 永久启用： 编辑 **`/etc/sysctl.conf`** 文件：

    ```shell
    sudo nano /etc/sysctl.conf
    ```


    确保以下行未被注释：


    ```plain text
    net.ipv4.ip_forward=1
    ```

3. 应用配置：

    ```shell
    sudo sysctl -p
    ```


### **3.2 配置 NAT 转发**

1. 添加 NAT 转发规则：

    ```shell
    sudo iptables -t nat -A POSTROUTING -o enx5a5f0a205236 -j MASQUERADE
    sudo iptables -A FORWARD -i enx5a5f0a205236 -o enp1s0 -m state --state RELATED,ESTABLISHED -j ACCEPT
    sudo iptables -A FORWARD -i enp1s0 -o enx5a5f0a205236 -j ACCEPT
    ```

2. 保存规则：

    ```shell
    sudo apt install iptables-persistent
    sudo netfilter-persistent save
    sudo netfilter-persistent reload
    ```


---


## **4. 配置 DHCP 服务**


路由器的 WAN 需要通过 **`enp1s0`** 获取 IP 地址，这需要配置 DHCP 服务。


### **4.1 安装 DHCP 服务**


安装 **`isc-dhcp-server`**：


```shell
sudo apt update
sudo apt install isc-dhcp-server
```


### **4.2 配置 DHCP**


编辑 **`/etc/dhcp/dhcpd.conf`** 文件：


```shell
sudo nano /etc/dhcp/dhcpd.conf
```


添加以下内容：


```plain text
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.10 192.168.1.100;
    option routers 192.168.1.1;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
}
```


指定 DHCP 服务的接口：


```shell
sudo nano /etc/default/isc-dhcp-server
```


设置：


```plain text
INTERFACESv4="enp1s0"
```


### **4.3 启动 DHCP 服务**


启动 DHCP 服务并检查状态：


```shell
sudo systemctl restart isc-dhcp-server
sudo systemctl status isc-dhcp-server
```


## **5. 验证网络共享**

1. **检查 NAT 和 IP 转发是否生效**：

    ```shell
    sudo iptables -t nat -L -v
    cat /proc/sys/net/ipv4/ip_forward
    ```

    - 确保 NAT 规则已存在。
    - **`cat /proc/sys/net/ipv4/ip_forward`** 应返回 **`1`**。
2. **在连接** **`enp1s0`** **的设备上测试网络连接**：
    - 确保设备通过 DHCP 获取 IP 地址。
    - 测试设备是否可以访问互联网。
