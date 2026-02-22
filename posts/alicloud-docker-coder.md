---
title: '阿里云配置docker+code-server实现线上编译器'
published: 2022-07-06
updated: 2022-07-06
description: '通过安装Docker和code-server，实现线上编译器的配置。步骤包括安装Docker、配置阿里云镜像、运行Nginx、安装和配置code-server，以及设置C/C++编译环境，最终成功运行测试代码。'
permalink: 'alicloud-docker-coder'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/d1f8bc25-8cb1-491c-bb22-b15fc0445c78/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_2022-09-18_025217.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=47315f5472a14c1e3c3d5fba4b0fa0a337442f91ad4986a803c15e7accc4c548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
