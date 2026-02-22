---
title: '阿里云配置docker+code-server实现线上编译器'
published: 2022-07-06
updated: 2022-07-06
description: '通过安装Docker和code-server，实现线上编译器的配置。步骤包括安装Docker、配置阿里云镜像、运行Nginx、安装和配置code-server，以及设置C/C++编译环境，最终成功运行测试代码。'
permalink: 'alicloud-docker-coder'
image: 'https://r2.dreaife.tokyo/notion/covers/ae4b0038e910408cadb36f3651ee3fc2/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_2022-09-18_025217.png'
tags: ['network', 'school']
category: 'cs-base'
draft: false
---

# **阿里云配置docker+code-server实现线上编译器**


## **1. 安装docker**

1. 安装Docker

Docker有两个分支版本：Docker CE和Docker EE，即社区版和企业版。本实验使用Docker CE进行操作。

- 安装Docker依赖库,添加Docker的软件源信息

```plain text
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

- 安装Docker

```plain text
yum makecache fast          //更新yum缓存
yum -y install docker-ce
docker info                 //查看安装状态
```

- 启动Docker服务

```plain text
systemctl start docker          //启动docker服务
systemctl status docker         //查看docker状态
systemctl enable docker         //设置docker开机启动
```

1. 配置阿里云镜像仓库(镜像加速)
- 进入[阿里云镜像加速器界面](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
- 按照操作文档进行配置

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

- 配置后重新加载

```plain text
systemctl daemon-reload         //重新加载服务配置文件
systemctl restart docker        //重启Docker服务
```

1. 通过Docker按照Nginx
- 获取最新Nginx镜像

```plain text
docker search nginx             //查看Nginx可用版本
docker pull nginx:latest        //拉取镜像
docker images                   //查看本地镜像
```

- 运行Nginx

```plain text
docker run --name nginx-test -p 8080:80 -d nginx
```


访问8080端口，出现Nginx服务主页，运行正常。


## **2. 安装code-server**

1. 安装code-server

```plain text
curl -fOL https://github.com/cdr/code-server/releases/download/v4.4.0/code-server-4.4.0-amd64.rpm
sudo rpm -i code-server-4.4.0-amd64.rpm
sudo systemctl enable --now code-server@dreaife
```

1. 配置code-server

```plain text
sudo systemctl enable --now code-server@dreaife             //启动coder-server服务
sudo vi ~/.config/code-server/config.yaml                   //修改配置文件
sudo systemctl restart code-sercer@dreaife                  //重启code-server
```

1. 将code-server部署在0.0.0.0

```plain text
sudo vi ~/.config/code-server/config.yaml                   //修改配置文件
sudo systemctl restart code-sercer@dreaife                  //重启code-server
firewall-cmd --zone=public --add-port=7777/tcp --permanent  //开放端口
```


安装完成后进入code-server界面


## **3. 配置code-server编译环境**

1. 通过VSIX安装code-server的C/C++组件
2. 设置.vscode的允许配置文件
- c_cpp_properties.json文件

![iWM4JDYnke5twCm.png](https://s2.loli.net/2022/06/13/iWM4JDYnke5twCm.png)

- launch.json文件

![DeKW5BM21nfzgsx.png](https://s2.loli.net/2022/06/13/DeKW5BM21nfzgsx.png)

- tasks.json

![Uh2TIQKx6VwzBnp.png](https://s2.loli.net/2022/06/13/Uh2TIQKx6VwzBnp.png)

1. 测试安装结果
- 编写测试用test.cpp文件

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

- 运行测试

![MaGmNUobEurdwOc.png](https://s2.loli.net/2022/06/13/MaGmNUobEurdwOc.png)


运行成功，结果正确，线上编译器配置完成。
