---
title: 'Ubuntu通过nat将网络转发给路由器'
published: 2024-12-15
updated: 2024-12-15
description: '通过修改Netplan配置、启用IP转发和配置NAT转发，实现Ubuntu将网络转发给路由器的功能。步骤包括清除现有配置、设置静态IP、安装和配置DHCP服务，并验证网络共享的有效性。'
permalink: 'ubuntu-nat-routing'
image: 'https://r2.dreaife.tokyo/notion/covers/15d5465cca1780bf85eac8dea673675e/IMG_1935.jpg'
tags: ['network', 'linux']
category: 'prog-side'
draft: false
lang: 'en'
---

For personal use, I first obtain the network on the host, then forward it over the network, sharing the network with the router via an Ethernet cable.

Here is the solution.

P.S.: This configuration environment is a freshly installed Ubuntu. If your environment has configurations you need to preserve, please back them up first to avoid loss.

# View current network status

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
#4: wlp2s0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
#    link/ether bc:2b:02:7c:27:a7 brd ff:ff:ff:ff:ff:ff
#5: enx5a5f0a205236: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UNKNOWN group default qlen 1000
#    link/ether 5a:5f:0a:20:52:36 brd ff:ff:ff:ff:ff:ff
#    inet 192.168.9.107/24 brd 192.168.9.255 scope global dynamic noprefixroute enx5a5f0a205236
#       valid_lft 3421sec preferred_lft 3421sec
#    inet6 fe80::86cb:2037:bfdc:9300/64 scope link noprefixroute 
#       valid_lft forever preferred_lft forever
```

Identify the interfaces connected to the Internet and to the router

# **Network Configuration**

## **1. Modify Netplan configuration**

1. Remove all existing Netplan configuration files:

    ```shell
    sudo rm -rf /etc/netplan/*.yaml
    ```

2. Create a new base configuration file:

    ```shell
    sudo nano /etc/netplan/01-netcfg.yaml
    ```

3. Add the following content to enable DHCP on the interfaces and configure a static IP address for the NIC connected to the router:

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

4. Save the file and exit, then apply the configuration:

    ```shell
    sudo netplan apply
    ```


---

## **2. Validate network configuration**


Run the following commands to check whether each interface has successfully obtained an IP address:


```shell
ip addr
```

- **Target state**:
    - The configured interfaces should obtain IP addresses via DHCP.
    - The router-facing interface should be assigned a static address.

        Run the following command to check whether **`enp1s0`** has a static IP address:


        ```shell
        ip addr show enp1s0
        ```


        The output should include:



        ```plain text
        inet 192.168.1.1/24 scope global enp1s0
        ```


---

## **3. Configure router network sharing**


According to my network layout, the Internet connection is provided by **`enx5a5f0a205236`** and is shared to the router via **`enp1s0`**:


### **3.1 Enable IP forwarding**

1. Temporarily enable:

    ```shell
    sudo sysctl -w net.ipv4.ip_forward=1
    ```

2. Permanently enable: Edit the **`/etc/sysctl.conf`** file:

    ```shell
    sudo nano /etc/sysctl.conf
    ```

    Ensure the following line is not commented:

    ```plain text
    net.ipv4.ip_forward=1
    ```

3. Apply the configuration:

    ```shell
    sudo sysctl -p
    ```


### **3.2 Configure NAT forwarding**

1. Add NAT forwarding rules:

    ```shell
    sudo iptables -t nat -A POSTROUTING -o enx5a5f0a205236 -j MASQUERADE
    sudo iptables -A FORWARD -i enx5a5f0a205236 -o enp1s0 -m state --state RELATED,ESTABLISHED -j ACCEPT
    sudo iptables -A FORWARD -i enp1s0 -o enx5a5f0a205236 -j ACCEPT
    ```

2. Save the rules:

    ```shell
    sudo apt install iptables-persistent
    sudo netfilter-persistent save
    sudo netfilter-persistent reload
    ```


---

## **4. Configure DHCP Service**


The router's WAN needs to obtain an IP address via **`enp1s0`**, which requires configuring a DHCP service.


### **4.1 Install DHCP Service**


Install **`isc-dhcp-server`**:


```shell
sudo apt update
sudo apt install isc-dhcp-server
```


### **4.2 Configure DHCP**


Edit **`/etc/dhcp/dhcpd.conf`** file:


```shell
sudo nano /etc/dhcp/dhcpd.conf
```


Add the following content:


```plain text
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.10 192.168.1.100;
    option routers 192.168.1.1;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
}
```


Specify the interface for the DHCP service:


```shell
sudo nano /etc/default/isc-dhcp-server
```


Set:


```plain text
INTERFACESv4="enp1s0"
```


### **4.3 Start DHCP Service**


Start the DHCP service and check its status:


```shell
sudo systemctl restart isc-dhcp-server
sudo systemctl status isc-dhcp-server
```


## **5. Validate network sharing**

1. **Check NAT and IP forwarding are active**:

    ```shell
    sudo iptables -t nat -L -v
    cat /proc/sys/net/ipv4/ip_forward
    ```

    - Ensure the NAT rules exist.
    - **`cat /proc/sys/net/ipv4/ip_forward`** should return **`1`**.
2. **Test network connectivity on devices connected to** **`enp1s0`**:
    - Ensure devices obtain IP addresses via DHCP.
    - Test whether devices can access the Internet.
