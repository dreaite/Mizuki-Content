---
title: 'Configure Docker + code-server on Alibaba Cloud to Build an Online Compiler'
published: 2022-07-06
updated: 2022-07-06
description: 'Set up an online compiler by installing Docker and code-server. The process includes installing Docker, configuring an Alibaba Cloud mirror, running Nginx, installing and configuring code-server, and setting up a C/C++ build environment, then successfully running test code.'
image: 'https://r2.dreaife.tokyo/notion/covers/ae4b0038e910408cadb36f3651ee3fc2/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_2022-09-18_025217.png'
tags: ['network', 'school']
category: 'cs-base'
draft: false
lang: 'en'
---

# **Alibaba Cloud: Configure Docker + code-server to enable an online compiler**

## **1. Install Docker**

1. Install Docker

Docker has two branch versions: Docker CE and Docker EE, i.e., Community Edition and Enterprise Edition. This experiment uses Docker CE.

- Install Docker dependencies and add Docker's software repository information

```plain text
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

- Install Docker

```plain text
yum makecache fast          //更新yum缓存
yum -y install docker-ce
docker info                 //查看安装状态
```

- Start the Docker service

```plain text
systemctl start docker          //启动docker服务
systemctl status docker         //查看docker状态
systemctl enable docker         //设置docker开机启动
```

1. Configure Alibaba Cloud image registry (image acceleration)

- Go to the Alibaba Cloud Image Accelerator interface
- Follow the operation guide to configure

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

- Reload after configuration

```plain text
systemctl daemon-reload         //重新加载服务配置文件
systemctl restart docker        //重启Docker服务
```

1. Run Nginx via Docker

- Get the latest Nginx image

```plain text
docker search nginx             //查看Nginx可用版本
docker pull nginx:latest        //拉取镜像
docker images                   //查看本地镜像
```

- Run Nginx

```plain text
docker run --name nginx-test -p 8080:80 -d nginx
```

Access port 8080 to see the Nginx home page, running normally.

## **2. Install code-server**

1. Install code-server

```plain text
curl -fOL https://github.com/cdr/code-server/releases/download/v4.4.0/code-server-4.4.0-amd64.rpm
sudo rpm -i code-server-4.4.0-amd64.rpm
sudo systemctl enable --now code-server@dreaife
```

1. Configure code-server

```plain text
sudo systemctl enable --now code-server@dreaife             //启动coder-server服务
sudo vi ~/.config/code-server/config.yaml                   //修改配置文件
sudo systemctl restart code-sercer@dreaife                  //重启code-server
```

1. Deploy code-server to listen on 0.0.0.0

```plain text
sudo vi ~/.config/code-server/config.yaml                   //修改配置文件
sudo systemctl restart code-sercer@dreaife                  //重启code-server
firewall-cmd --zone=public --add-port=7777/tcp --permanent  //开放端口
```

After installation, enter the code-server interface

## **3. Configure the code-server build environment**

1. Install the C/C++ components of code-server via VSIX
2. Enable .vscode configuration files
- c_cpp_properties.json

![iWM4JDYnke5twCm.png](https://s2.loli.net/2022/06/13/iWM4JDYnke5twCm.png)

- launch.json

![DeKW5BM21nfzgsx.png](https://s2.loli.net/2022/06/13/DeKW5BM21nfzgsx.png)

- tasks.json

![Uh2TIQKx6VwzBnp.png](https://s2.loli.net/2022/06/13/Uh2TIQKx6VwzBnp.png)

1. Test installation results
- Create a test file test.cpp

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

- Run the test

![MaGmNUobEurdwOc.png](https://s2.loli.net/2022/06/13/MaGmNUobEurdwOc.png)

The run is successful, the result is correct, and the online compiler configuration is complete.
