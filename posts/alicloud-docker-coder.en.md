---
title: 'Configure Docker + code-server on Alibaba Cloud to Build an Online IDE'
published: 2022-07-06
updated: 2022-07-06
description: 'Build a C/C++ development environment on Alibaba Cloud with Docker, Nginx, and code-server, from mirror setup to compiling and running test code.'
image: 'https://r2.dreaife.tokyo/notion/covers/ae4b0038e910408cadb36f3651ee3fc2/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_2022-09-18_025217.png'
tags: ['network', 'school', 'cs-base']
category: '踩坑'
draft: false
lang: 'en'
---

# **Configure Docker + code-server on Alibaba Cloud to Create an Online Compiler**

## **1. Install Docker**

1. Install Docker

Docker has two editions: Docker CE and Docker EE, namely the Community Edition and Enterprise Edition. This tutorial uses Docker CE.

- Install Docker dependencies and add the Docker software repository

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

1. Configure the Alibaba Cloud image registry (registry mirror)
- Go to the [Alibaba Cloud image accelerator page](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
- Follow the documentation to complete the configuration

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

1. Install Nginx via Docker
- Obtain the latest Nginx image

```plain text
docker search nginx             //查看Nginx可用版本
docker pull nginx:latest        //拉取镜像
docker images                   //查看本地镜像
```

- Run Nginx

```plain text
docker run --name nginx-test -p 8080:80 -d nginx
```

Visit port 8080. If the Nginx service homepage appears, it is running correctly.

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

1. Deploy code-server on 0.0.0.0

```plain text
sudo vi ~/.config/code-server/config.yaml                   //修改配置文件
sudo systemctl restart code-sercer@dreaife                  //重启code-server
firewall-cmd --zone=public --add-port=7777/tcp --permanent  //开放端口
```

After installation is complete, open the code-server interface.

## **3. Configure the code-server Compilation Environment**

1. Install the C/C++ extension for code-server via VSIX
2. Configure the required files in .vscode
- c_cpp_properties.json file

![](https://s2.loli.net/2022/06/13/iWM4JDYnke5twCm.png)

- launch.json file

![](https://s2.loli.net/2022/06/13/DeKW5BM21nfzgsx.png)

- tasks.json

![](https://s2.loli.net/2022/06/13/Uh2TIQKx6VwzBnp.png)

1. Test the installation
- Create a test.cpp file for testing

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

![](https://s2.loli.net/2022/06/13/MaGmNUobEurdwOc.png)

The program ran successfully and produced the correct result. The online compiler configuration is complete.
