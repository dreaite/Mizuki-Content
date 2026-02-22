---
title: '阿里云配置docker+code-server实现线上编译器'
published: 2022-07-06
updated: 2022-07-06
description: '通过安装Docker和code-server，实现线上编译器的配置。步骤包括安装Docker、配置阿里云镜像、运行Nginx、安装和配置code-server，以及设置C/C++编译环境，最终成功运行测试代码。'
permalink: 'alicloud-docker-coder.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/ae4b0038e910408cadb36f3651ee3fc2/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_2022-09-18_025217.png'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'ja'
---

# **Alibaba CloudでDockerとcode-serverを設定してオンラインコンパイラを実現**

## **1. Dockerのインストール**

1. Dockerのインストール

Dockerには2つの分岐バージョンがある：Docker CEとDocker EE、すなわちコミュニティ版とエンタープライズ版。本実験ではDocker CEを使用します。

- Dockerの依存ライブラリをインストールし、Dockerのリポジトリ情報を追加する

```plain text
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

- Dockerのインストール

```plain text
yum makecache fast          //更新yumキャッシュ
yum -y install docker-ce
docker info                 //インストール状態を確認
```

- Dockerサービスを起動

```plain text
systemctl start docker          //Dockerサービスを起動
systemctl status docker         //Dockerの状態を確認
systemctl enable docker         //起動時にDockerを自動起動
```

1. 阿里云镜像仓库(镜像加速)の設定
- [Alibaba Cloudのイメージミラー画面](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
- 操作手順に従って設定

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

- 設定後の再読み込み

```plain text
systemctl daemon-reload         //サービス設定ファイルを再読み込み
systemctl restart docker        //Dockerサービスを再起動
```

1. Docker経由でNginx

- 最新のNginxイメージを取得

```plain text
docker search nginx             //Nginxの利用可能なバージョンを表示
docker pull nginx:latest        //イメージを取得
docker images                   //ローカルのイメージを表示
```

- Nginxを実行

```plain text
docker run --name nginx-test -p 8080:80 -d nginx
```

8080ポートにアクセスすると、Nginxサービスのトップページが表示され、正常に動作します。

## **2. code-serverのインストール**

1. code-serverのインストール

```plain text
curl -fOL https://github.com/cdr/code-server/releases/download/v4.4.0/code-server-4.4.0-amd64.rpm
sudo rpm -i code-server-4.4.0-amd64.rpm
sudo systemctl enable --now code-server@dreaife
```

1. code-serverの設定

```plain text
sudo systemctl enable --now code-server@dreaife             //code-serverサービスを起動
sudo vi ~/.config/code-server/config.yaml                   //設定ファイルを編集
sudo systemctl restart code-sercer@dreaife                  //code-serverを再起動
```

1. code-serverを0.0.0.0でデプロイ

```plain text
sudo vi ~/.config/code-server/config.yaml                   //設定ファイルを編集
sudo systemctl restart code-sercer@dreaife                  //code-serverを再起動
firewall-cmd --zone=public --add-port=7777/tcp --permanent  //ポートを開放
```

インストール完了後、code-serverの画面に入ります。

## **3. code-serverのビルド環境の設定**

1. VSIXを使ってcode-serverのC/C++コンポーネントをインストール
2. .vscodeの設定ファイルの許可を設定する
- c_cpp_properties.jsonファイル

![iWM4JDYnke5twCm.png](https://s2.loli.net/2022/06/13/iWM4JDYnke5twCm.png)

- launch.jsonファイル

![DeKW5BM21nfzgsx.png](https://s2.loli.net/2022/06/13/DeKW5BM21nfzgsx.png)

- tasks.json

![Uh2TIQKx6VwzBnp.png](https://s2.loli.net/2022/06/13/Uh2TIQKx6VwzBnp.png)

1. テストインストール結果
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

- テストを実行

![MaGmNUobEurdwOc.png](https://s2.loli.net/2022/06/13/MaGmNUobEurdwOc.png)

実行に成功し、結果は正しいです。オンラインコンパイラの設定が完了しました。
