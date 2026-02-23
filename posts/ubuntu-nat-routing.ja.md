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
lang: 'ja'
---

個人的な都合により、まずホストを介してネットワークを取得し、次にそのネットワークを介して転送し、LANケーブルを使ってルータへネットワークを共有します。

以下は解決方法です。

追記：この構成環境はUbuntuを新規にインストールした直後の状態です。環境に保存すべき設定がある場合は、削除されるのを避けるため事前に保存しておくことをおすすめします。

# 現在のネットワーク状態を確認

```shell
ip addr
# 1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
#    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
#    inet 127.0.0.1/8 scope host lo
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

自分がインターネットへ接続しているインターフェースと、ルータへ接続しているインターフェースを特定します。

# ネットワーク設定

## 1. Netplan の設定を変更

1. 既存の Netplan 設定ファイルをすべて削除する：

    ```shell
    sudo rm -rf /etc/netplan/*.yaml
    ```

2. 新しい基本設定ファイルを作成する：

    ```shell
    sudo nano /etc/netplan/01-netcfg.yaml
    ```

3. 以下を追加して、インターフェースの DHCP を有効にし、ルータに接続する NIC に静的 IP アドレスを設定します：

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

4. ファイルを保存して退出し、設定を適用する：

    ```shell
    sudo netplan apply
    ```

---

## 2. ネットワーク設定の検証

以下のコマンドを実行して、各インターフェースが正しく IP アドレスを取得しているかを確認します：

```shell
ip addr
```

- 目標状態：
    - 設定したインターフェースは DHCP で IP アドレスを取得すること。
    - ルータのインターフェースには静的アドレスが割り当てられていること。

        以下のコマンドを実行して、**`enp1s0`** に静的 IP アドレスが割り当てられているかを確認します：

        ```shell
        ip addr show enp1s0
        ```

        出力には以下が含まれるはずです：

        ```plain text
        inet 192.168.1.1/24 scope global enp1s0
        ```

---

## 3. ルータのネットワーク共有の設定

私のネットワーク構成では、インターネット接続は **`enx5a5f0a205236`** によって提供され、**`enp1s0`** を介してルータへ共有します：

### 3.1 IP 転送の有効化

1. 一時的に有効化：

    ```shell
    sudo sysctl -w net.ipv4.ip_forward=1
    ```

2. 永続的に有効化： 編集するファイル

    ```shell
    sudo nano /etc/sysctl.conf
    ```

    以下の行がコメントアウトされていないことを確認します：

    ```plain text
    net.ipv4.ip_forward=1
    ```

3. 設定を適用：

    ```shell
    sudo sysctl -p
    ```

### 3.2 NAT 転送の設定

1. NAT 転送ルールを追加：

    ```shell
    sudo iptables -t nat -A POSTROUTING -o enx5a5f0a205236 -j MASQUERADE
    sudo iptables -A FORWARD -i enx5a5f0a205236 -o enp1s0 -m state --state RELATED,ESTABLISHED -j ACCEPT
    sudo iptables -A FORWARD -i enp1s0 -o enx5a5f0a205236 -j ACCEPT
    ```

2. ルールを保存：

    ```shell
    sudo apt install iptables-persistent
    sudo netfilter-persistent save
    sudo netfilter-persistent reload
    ```

---

## 4. DHCP サービスの設定

ルータの WAN は enp1s0 経由で IP アドレスを取得する必要があるため、DHCP サービスを設定します。

### 4.1 DHCP サービスのインストール

インストールする：

```shell
sudo apt update
sudo apt install isc-dhcp-server
```

### 4.2 DHCP の設定

`/etc/dhcp/dhcpd.conf` ファイルを編集します：

```shell
sudo nano /etc/dhcp/dhcpd.conf
```

以下を追加します：

```plain text
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.10 192.168.1.100;
    option routers 192.168.1.1;
    option domain-name-servers 8.8.8.8, 8.8.4.4;
}
```

DHCP サービスのインタフェースを指定します：

```shell
sudo nano /etc/default/isc-dhcp-server
```

設定：

```plain text
INTERFACESv4="enp1s0"
```

### 4.3 DHCP サービスの起動

DHCP サービスを起動して状態を確認します：

```shell
sudo systemctl restart isc-dhcp-server
sudo systemctl status isc-dhcp-server
```

---

## 5. ネットワーク共有の検証

1. NAT と IP 転送が有効かどうかを確認：

    ```shell
    sudo iptables -t nat -L -v
    cat /proc/sys/net/ipv4/ip_forward
    ```

    - NAT ルールが存在することを確認。
    - **`cat /proc/sys/net/ipv4/ip_forward`** は **`1`** を返す必要があります。

2. **enp1s0** に接続したデバイスでネットワーク接続をテストする：
    - デバイスが DHCP で IP アドレスを取得していることを確認。
    - デバイスがインターネットにアクセスできることを確認。
