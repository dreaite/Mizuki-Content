---
title: 'Alibaba CloudでDocker＋code-serverを設定してオンラインコンパイラを実現する'
published: 2022-07-06
updated: 2022-07-06
description: 'Alibaba Cloud上でDocker、Nginx、code-serverを使い、オンラインC/C++開発環境を構築する手順。ミラー設定、コンテナ起動、コンパイラ導入、テスト実行までを扱います。'
image: 'https://r2.dreaife.tokyo/notion/covers/ae4b0038e910408cadb36f3651ee3fc2/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_2022-09-18_025217.png'
tags: ['network', 'school', 'cs-base']
category: 'TROUBLESHOOT'
draft: false
lang: 'ja'
---

# **Alibaba CloudでDocker＋code-serverを構成してオンラインコンパイラを実現する**

## **1. Dockerのインストール**

1. Dockerをインストールする

Dockerには、コミュニティ版のDocker CEとエンタープライズ版のDocker EEという2つのバージョンがあります。本手順ではDocker CEを使用します。

- Dockerの依存ライブラリをインストールし、Dockerのソフトウェアリポジトリ情報を追加する

```plain text
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

- Dockerをインストールする

```plain text
yum makecache fast          //更新yum缓存
yum -y install docker-ce
docker info                 //查看安装状态
```

- Dockerサービスを起動する

```plain text
systemctl start docker          //启动docker服务
systemctl status docker         //查看docker状态
systemctl enable docker         //设置docker开机启动
```

1. Alibaba Cloudのイメージリポジトリを設定する（イメージアクセラレーション）
- [Alibaba Cloudイメージアクセラレーター画面](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)にアクセスする
- 操作ドキュメントに従って設定する

```plain text
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://0o9w7e5n.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

- 設定後に再読み込みする

```plain text
systemctl daemon-reload         //重新加载服务配置文件
systemctl restart docker        //重启Docker服务
```

1. Dockerを使用してNginxをインストールする
- 最新のNginxイメージを取得する

```plain text
docker search nginx             //查看Nginx可用版本
docker pull nginx:latest        //拉取镜像
docker images                   //查看本地镜像
```

- Nginxを実行する

```plain text
docker run --name nginx-test -p 8080:80 -d nginx
```

8080ポートにアクセスしてNginxサービスのホームページが表示されれば、正常に動作しています。

## **2. code-serverのインストール**

1. code-serverをインストールする

```plain text
curl -fOL https://github.com/cdr/code-server/releases/download/v4.4.0/code-server-4.4.0-amd64.rpm
sudo rpm -i code-server-4.4.0-amd64.rpm
sudo systemctl enable --now code-server@dreaife
```

1. code-serverを設定する

```plain text
sudo systemctl enable --now code-server@dreaife             //启动coder-server服务
sudo vi ~/.config/code-server/config.yaml                   //修改配置文件
sudo systemctl restart code-sercer@dreaife                  //重启code-server
```

1. code-serverを0.0.0.0にデプロイする

```plain text
sudo vi ~/.config/code-server/config.yaml                   //修改配置文件
sudo systemctl restart code-sercer@dreaife                  //重启code-server
firewall-cmd --zone=public --add-port=7777/tcp --permanent  //开放端口
```

インストール完了後、code-serverの画面にアクセスします。

## **3. code-serverのコンパイル環境を設定する**

1. VSIXを使用してcode-serverのC/C++コンポーネントをインストールする
2. .vscodeの実行構成ファイルを設定する
- c_cpp_properties.jsonファイル

![](https://s2.loli.net/2022/06/13/iWM4JDYnke5twCm.png)

- launch.jsonファイル

![](https://s2.loli.net/2022/06/13/DeKW5BM21nfzgsx.png)

- tasks.json

![](https://s2.loli.net/2022/06/13/Uh2TIQKx6VwzBnp.png)

1. インストール結果をテストする
- テスト用のtest.cppファイルを作成する

```plain text
#include<iostream>
#include<algorithm>
#include<string>
using namespace std;
typedef long long ll;
const int N = 1e5+10;
int n,a[N];
string s;
void solve(){
    cout<<"hello"<<endl;
}
int main(){
    int _;cin>>_;
    while(_--) solve();
    return 0;
}
```

- テストを実行する

![](https://s2.loli.net/2022/06/13/MaGmNUobEurdwOc.png)

正常に実行され、結果も正しいことを確認できました。これでオンラインコンパイラの設定は完了です。
