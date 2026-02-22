---
title: 'docker初识'
published: 2024-01-03
updated: 2023-08-10
description: 'Docker是一种解决微服务部署中依赖和环境兼容性问题的技术，通过将应用及其依赖打包到隔离的容器中运行，避免了不同应用间的干扰。Docker与虚拟机的主要区别在于性能、启动速度和资源占用。Docker的基本操作包括镜像和容器管理，支持数据卷以解耦数据与容器。Docker Compose可以快速部署分布式应用，简化容器管理。'
permalink: 'docker-getting-started'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/5597bffb-983f-4d53-9d80-98575548dc2d/2421860-20230810182019038-697482712.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNAGBRM%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T073411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE0vgzlQNnEBFzki8QxtRbByU425%2Bb1eZ4DAmR1R0gfgIhAOfalBB%2BYC7xzdxKheF%2BM%2F7nFITIBJiamVzGD8jmZYwtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw5UmJG0w26p%2Fro6Qq3AMKnsrukopqrOxumn0SuV3QywcjdT3nHwsb%2FLQ9XvNgF7fIz5YsOyr4l5hERbGe3SwZjjnxPCKWWSR7y2tl9ofdViCjgHrzfs%2FFfVWnSP94Et3I5edTTllUX5bi7jgXbwJo9UnPgi5HyhBc9FQRoE2TbP%2FQNujMAmUHgWYlkURI42rGDbZbEWPc1ktnIpt3jOyURp4HeEAqP2vqm9Z4VqlL0xcMK89GZKWp1cUpKWbK8bk5n%2Bjrl8F1KQ%2F6EkJKBMeN0xlG8pEY7WehwZy%2ByWH6KsHd%2F24Iq1kUOtGznIRcJGzs9miCE9SCZy7pzb22BqD%2B6RWd0lhPNG9bE25Pq%2Bp91YVVLpc%2B%2BZ8C7Ee8POJEAFx7KaqDSi0%2BIqwRmyal1R1KXp2xkwsRJU%2FwFY2X41sjZnhnFHqGbredYg0us8kcSibeXPagDaFGolwS63ki3rWmr7pbYjIGFOd6wV4OqadwZWGR%2F3usj5XMHUShIGMKXAfcwzWJ6bRyikOhcwFjdybU3QRov577SZocfaO4vjRPsnpyIqunU0rfW9VoR6WfdyQlvCemwEttg%2FwQpLh6zhsz%2FJeICdWG42vwj095qGxNXjdv1TLHIuw68Vl8bWZtRwdGbGrqk4f%2BCKAy4TDNxerMBjqkAQCl9Mk6qBl8gUkMQa2epzGBxSlLtg3ZLtOIYstBfg8KzwvMtoSu2bBhY5A1iQL3%2F8%2B5Cd2V3ztI%2Bj%2FHzL58w0r1IXYFYJuNLHOHJIoYONBgZEthT9TVnfgUYMQcSXomYMAHYkqOgt1gtQ%2Fx8giBkDvuCii1%2FqypVck3WH8%2BT50HSAlKADmpcUxIhheTj%2BMka7oDB6sHcy3aKe2hlVGxHc5xGjCp&X-Amz-Signature=435aff48136f0688347862b4ac83a543b3d10b37eb1cf879a9eab51d40993639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['docker', 'deploy']
category: 'infra'
draft: false
---

# docker


## 什么是Docker


微服务虽然具备各种各样的优势，但服务的拆分通用给部署带来了很大的麻烦。

- 分布式系统中，依赖的组件非常多，不同组件之间部署时往往会产生一些冲突。
- 在数百上千台服务中重复部署，环境不一定一致，会遇到各种问题

### 应用部署的环境问题


大型项目组件较多，运行环境也较为复杂，部署时会碰到一些问题：

- 依赖关系复杂，容易出现兼容性问题
- 开发、测试、生产环境有差异

例如一个项目中，部署时需要依赖于node.js、Redis、RabbitMQ、MySQL等，这些服务部署时所需要的函数库、依赖项各不相同，甚至会有冲突。给部署带来了极大的困难。


### docker解决依赖兼容问题


而Docker确巧妙的解决了这些问题，Docker是如何实现的呢？


Docker为了解决依赖的兼容问题的，采用了两个手段：

- 将应用的Libs（函数库）、Deps（依赖）、配置与应用一起打包
- 将每个应用放到一个隔离**容器**去运行，避免互相干扰

这样打包好的应用包中，既包含应用本身，也保护应用所需要的Libs、Deps，无需再操作系统上安装这些，自然就不存在不同应用之间的兼容问题了。


### Docker解决操作系统环境差异


要解决不同操作系统环境差异问题，必须先了解操作系统结构。以一个Ubuntu操作系统为例，结构包括：

- 计算机硬件：例如CPU、内存、磁盘等
- 系统内核：所有Linux发行版的内核都是Linux，例如CentOS、Ubuntu、Fedora等。内核可以与计算机硬件交互，对外提供**内核指令**，用于操作计算机硬件。
- 系统应用：操作系统本身提供的应用、函数库。这些函数库是对内核指令的封装，使用更加方便。

应用于计算机交互的流程如下：


1）应用调用操作系统应用（函数库），实现各种功能


2）系统函数库是对内核指令集的封装，会调用内核指令


3）内核指令操作计算机硬件


Docker如何解决不同系统环境的问题？

- Docker将用户程序与所需要调用的系统(比如Ubuntu)函数库一起打包
- Docker运行到不同操作系统时，直接基于打包的函数库，借助于操作系统的Linux内核来运行

Docker是一个快速交付应用、运行应用的技术，具备下列优势：

- 可以将程序及其依赖、运行环境一起打包为一个镜像，可以迁移到任意Linux操作系统
- 运行时利用沙箱机制形成隔离容器，各个应用互不干扰
- 启动、移除都可以通过一行命令完成，方便快捷

## Docker和虚拟机的区别


Docker可以让一个应用在任何操作系统中非常方便的运行。而虚拟机也能在一个操作系统中，运行另外一个操作系统，保护系统中的任何应用。

- **虚拟机**（virtual machine）是在操作系统中**模拟**硬件设备，然后运行另一个操作系统，比如在 Windows 系统里面运行 Ubuntu 系统，这样就可以运行任意的Ubuntu应用了。
- **Docker**仅仅是封装函数库，并没有模拟完整的操作系统

| 特性   | Docker | 虚拟机   |
| ---- | ------ | ----- |
| 性能   | 接近原生   | 性能较差  |
| 硬盘占用 | 一般为MB  | 一般为GB |
| 启动   | 秒级     | 分钟级   |


Docker和虚拟机的差异：

- docker是一个系统进程；虚拟机是在操作系统中的操作系统
- docker体积小、启动速度快、性能好；虚拟机体积大、启动速度慢、性能一般

## Docker架构


### 镜像和容器


Docker中有几个重要的概念：

- **镜像（Image）**：Docker将应用程序及其所需的依赖、函数库、环境、配置等文件打包在一起，称为镜像。
- **容器（Container）**：镜像中的应用程序运行后形成的进程就是**容器**，只是Docker会给容器进程做隔离，对外不可见。

一切应用最终都是代码组成，都是硬盘中的一个个的字节形成的**文件**。只有运行时，才会加载到内存，形成进程。


而**镜像**，就是把一个应用在硬盘上的文件、及其运行环境、部分系统函数库文件一起打包形成的文件包。这个文件包是只读的。


**容器**呢，就是将这些文件中编写的程序、函数加载到内存中允许，形成进程，只不过要隔离起来。因此一个镜像可以启动多次，形成多个容器进程。


### DockerHub


开源应用程序非常多，打包这些应用往往是重复的劳动。为了避免这些重复劳动，人们就会将自己打包的应用镜像，例如Redis、MySQL镜像放到网络上，共享使用，就像GitHub的代码共享一样。

- DockerHub：DockerHub是一个官方的Docker镜像的托管平台。这样的平台称为Docker Registry。
- 国内也有类似于DockerHub 的公开服务，比如 [网易云镜像服务](https://c.163yun.com/hub)、[阿里云镜像库](https://cr.console.aliyun.com/)等。

我们一方面可以将自己的镜像共享到DockerHub，另一方面也可以从DockerHub拉取镜像


### Docker架构


我们要使用Docker来操作镜像、容器，就必须要安装Docker。


Docker是一个CS架构的程序，由两部分组成：

- 服务端(server)：Docker守护进程，负责处理Docker指令，管理镜像、容器等
- 客户端(client)：通过命令或RestAPI向Docker服务端发送指令。可以在本地或远程向服务端发送指令。

![image-20230810161802874.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810161802874.png)


# Docker的基本操作


## 镜像操作


### 镜像名称


首先来看下镜像的名称组成：

- 镜名称一般分两部分组成：[repository]:[tag]。
- 在没有指定tag时，默认是latest，代表最新版本的镜像

### 镜像命令


常见的镜像操作命令如图


![image-20230810162617340.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810162617340.png)


```shell
docker pull nginx	# 拉取镜像
docker images		# 查看拉取的镜像

# docker save -o [保存的目标文件名称] [镜像名称]
docker save -o nginx.tar nginx:latest	# 保存镜像
docker rmi nginx:latest					# 删除镜像
docker load -i nginx.tar				# 加载镜像
```


## 容器操作


容器保护三个状态：

- 运行：进程正常运行
- 暂停：进程暂停，CPU不再运行，并不释放内存
- 停止：进程终止，回收进程占用的内存、CPU等资源

### 容器相关命令

- docker run：创建并运行一个容器，处于运行状态

    ```shell
    docker run --name containerName -p 80:80 -d nginx
    ```

    - docker run ：创建并运行一个容器
    - -name : 给容器起一个名字，比如叫做mn
    - p ：将宿主机端口与容器端口映射，冒号左侧是宿主机端口，右侧是容器端口
    - d：后台运行容器
    - nginx：镜像名称，例如nginx
- docker pause：让一个运行的容器暂停
- docker unpause：让一个容器从暂停状态恢复运行
- docker stop：停止一个运行的容器
- docker start：让一个停止的容器再次运行
- docker rm：删除一个容器
- docker exec:进入容器

    ```plain text
    docker exec -it mn bash
    ```

    - docker exec ：进入容器内部，执行一个命令
    - it : 给当前进入的容器创建一个标准输入、输出终端，允许我们与容器交互
    - mn ：要进入的容器的名称
    - bash：进入容器后执行的命令，bash是一个linux终端交互命令

    容器内部会模拟一个独立的Linux文件系统，看起来如同一个linux服务器一样


docker run命令的常见参数

- -name：指定容器名称
- p：指定端口映射
- d：让容器后台运行

查看容器日志的命令：

- docker logs
- 添加 -f 参数可以持续查看日志

查看容器状态：

- docker ps
- docker ps -a 查看所有容器，包括已经停止的

## 数据卷（容器数据管理）


在之前的nginx案例中，修改nginx的html页面时，需要进入nginx内部。并且因为没有编辑器，修改文件也很麻烦。


这就是因为容器与数据（容器内文件）耦合带来的后果。


要解决这个问题，必须将数据与容器解耦，这就要用到数据卷了。


### 什么是数据卷

- *数据卷（volume）**是一个虚拟目录，指向宿主机文件系统中的某个目录。

![image-20230810164051404.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810164051404.png)


一旦完成数据卷挂载，对容器的一切操作都会作用在数据卷对应的宿主机目录了。


这样，我们操作宿主机的/var/lib/docker/volumes/html目录，就等于操作容器内的/usr/share/nginx/html目录了


### 数据集操作命令


数据卷操作的基本语法如下：


```plain text
docker volume [COMMAND]
```


docker volume命令是数据卷操作，根据命令后跟随的command来确定下一步的操作：

- create 创建一个volume
- inspect 显示一个或多个volume的信息
- ls 列出所有的volume
- prune 删除未使用的volume
- rm 删除一个或多个指定的volume

### 创建和查看数据卷


**需求**：创建一个数据卷，并查看数据卷在宿主机的目录位置

1. 创建数据卷

```plain text
docker volume create html
```

1. 查看所有数据

```plain text
docker volume ls
```

1. 查看数据卷详细信息卷

```shell
docker volume inspect html
```


创建的html这个数据卷关联的宿主机目录为`/var/lib/docker/volumes/html/_data`目录。


### 挂载数据卷


我们在创建容器时，可以通过 -v 参数来挂载一个数据卷到某个容器内目录，命令格式如下：


```plain text
docker run \\
  --name mn \\
  -v html:/root/html \\
  -p 8080:80
  nginx \\
```


这里的-v就是挂载数据卷的命令：

- `v html:/root/htm` ：把html数据卷挂载到容器内的/root/html这个目录中

容器不仅仅可以挂载数据卷，也可以直接挂载到宿主机目录上。关联关系如下：

- 带数据卷模式：宿主机目录 --> 数据卷 ---> 容器内目录
- 直接挂载模式：宿主机目录 ---> 容器内目录

docker安装MySQL5.7：


```shell
# --privileged=true参数，让容器拥有真正的root权限
docker run --privileged=true --name mysql5.7 -p 3307:3306 \\
-e MYSQL_ROOT_PASSWORD=123456 -d \\
-v /mydata/mysql/data:/var/lib/mysql \\
-v /mydata/mysql/conf:/etc/mysql \\
-v /mydata/mysql/log:/var/log/mysql \\
mysql:5.7
```


docker run的命令中通过 -v 参数挂载文件或目录到容器中：

- v volume名称:容器内目录
- v 宿主机文件:容器内文
- v 宿主机目录:容器内目录

数据卷挂载与目录直接挂载的

- 数据卷挂载耦合度低，由docker来管理目录，但是目录较深，不好找
- 目录挂载耦合度高，需要我们自己管理目录，不过目录容易寻找查看

# Dockerfile自定义镜像


常见的镜像在DockerHub就能找到，但是我们自己写的项目就必须自己构建镜像了。


而要自定义镜像，就必须先了解镜像的结构才行。


## 镜像结构


镜像是将应用程序及其需要的系统函数库、环境、配置、依赖打包而成。


简单来说，镜像就是在系统函数库、运行环境基础上，添加应用程序文件、配置文件、依赖文件等组合，然后编写好启动脚本打包在一起形成的文件。


我们要构建镜像，其实就是实现上述打包的过程。


## Dockerfile语法


构建自定义的镜像时，并不需要一个个文件去拷贝，打包。


我们只需要告诉Docker，我们的镜像的组成，需要哪些BaseImage、需要拷贝什么文件、需要安装什么依赖、启动脚本是什么，将来Docker会帮助我们构建镜像。


而描述上述信息的文件就是Dockerfile文件。


**Dockerfile**就是一个文本文件，其中包含一个个的**指令(Instruction)**，用指令来说明要执行什么操作来构建镜像。每一个指令都会形成一层Layer。


| 指令         | 说明                 | 示例                          |
| ---------- | ------------------ | --------------------------- |
| FROM       | 指定基础镜像             | FROM centos:6               |
| ENV        | 设置环境变量             | ENV key value               |
| COPY       | 拷贝本地文件到镜像指定目录      | COPY ./mysql-5.7.rpm /tmp   |
| RUN        | 执行Liunx shell命令    | RUN yum install gcc         |
| EXPOSE     | 指定运行监听端口，给使用者看     | EXPOSE 8080                 |
| ENTRYPOINT | 镜像中应用的启动命令，容器运行时调用 | ENTRYPOINT java -jar xx.jar |


## 构建Java项目


基于java8构建Java项目


构建java项目的镜像，可以在已经准备了JDK的基础镜像基础上构建。

- 编写Dockerfile文件：
    - 基于java:8-alpine作为基础镜像
    - 将app.jar拷贝到镜像中
    - 暴露端口
    - 编写入口ENTRYPOINT

    ```plain text
    FROM java:8-alpine
    COPY ./app.jar /tmp/app.jar
    EXPOSE 8090
    ENTRYPOINT java -jar /tmp/app.jar
    ```

- 使用docker build命令构建镜像
- 使用docker run创建容器并运行

# Docker-Compose


Docker Compose可以基于Compose文件帮我们快速的部署分布式应用，而无需手动一个个创建和运行容器！


## 初识DockerCompose


Compose文件是一个文本文件，通过指令定义集群中的每个容器如何运行。格式如下：


```json
version: "3.8"
 services:
  mysql:
    image: mysql:5.7.25
    environment:
     MYSQL_ROOT_PASSWORD: 123
    volumes:
     - "/tmp/mysql/data:/var/lib/mysql"
     - "/tmp/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf"
  web:
    build: .
    ports:
     - "8090:8090"
```


上面的Compose文件就描述一个项目，其中包含两个容器：

- mysql：一个基于`mysql:5.7.25`镜像构建的容器，并且挂载了两个目录
- web：一个基于`docker build`临时构建的镜像容器，映射端口时8090

其实DockerCompose文件可以看做是将多个docker run命令写到一个文件，只是语法稍有差异。


## 部署微服务集群


**需求**：将之前学习的cloud-demo微服务集群利用DockerCompose部署


**实现思路**：

1. 编写docker-compose文件

    ```yaml
    version: "3.2"
    
    services:
      nacos:
        image: nacos/nacos-server
        environment:
          MODE: standalone
        ports:
          - "8848:8848"
      mysql:
        image: mysql:5.7.25
        environment:
          MYSQL_ROOT_PASSWORD: 123
        volumes:
          - "$PWD/mysql/data:/var/lib/mysql"
          - "$PWD/mysql/conf:/etc/mysql/conf.d/"
      userservice:
        build: ./user-service
      orderservice:
        build: ./order-service
      gateway:
        build: ./gateway
        ports:
          - "10010:10010"
    ```


    其中包含5个service服务：

    - `nacos`：作为注册中心和配置中心
        - `image: nacos/nacos-server`： 基于nacos/nacos-server镜像构建
        - `environment`：环境变量
            - `MODE: standalone`：单点模式启动
        - `ports`：端口映射，这里暴露了8848端口
    - `mysql`：数据库
        - `image: mysql:5.7.25`：镜像版本是mysql:5.7.25
        - `environment`：环境变量
            - `MYSQL_ROOT_PASSWORD: 123`：设置数据库root账户的密码为123
        - `volumes`：数据卷挂载，这里挂载了mysql的data、conf目录，其中有我提前准备好的数据
    - `userservice`、`orderservice`、`gateway`：都是基于Dockerfile临时构建的
2. 修改自己的cloud-demo项目，将数据库、nacos地址都命名为docker-compose中的服务名

    因为微服务将来要部署为docker容器，而容器之间互联不是通过IP地址，而是通过容器名。这里我们将order-service、user-service、gateway服务的mysql、nacos地址都修改为基于容器名的访问。


    ```yaml
    spring:
      datasource:
        url: jdbc:mysql://mysql:3306/cloud_order?useSSL=false
        username: root
        password: 123
        driver-class-name: com.mysql.jdbc.Driver
      application:
        name: orderservice
      cloud:
        nacos:
          server-addr: nacos:8848 # nacos服务地址
    ```

3. 使用maven打包工具，将项目中的每个微服务都打包为app.jar

    接下来需要将我们的每个微服务都打包。因为之前查看到Dockerfile中的jar包名称都是app.jar，因此我们的每个微服务都需要用这个名称。


    可以通过修改pom.xml中的打包名称来实现，每个微服务都需要修改：


    ```xml
    <build>
      <!-- 服务打包的最终名称 -->
      <finalName>app</finalName>
      <plugins>
        <plugin>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
      </plugins>
    </build>
    ```

4. 将打包好的app.jar拷贝到cloud-demo中的每一个对应的子目录中
5. 将cloud-demo上传至虚拟机，利用 `docker-compose up -d` 来部署

# Docker镜像仓库


## 推送拉取镜像


推送镜像到私有镜像服务必须先tag，步骤如下：

- 重新tag本地镜像，名称前缀为私有仓库的地址：192.168.150.101:8080/

```plain text
docker tag nginx:latest 192.168.150.101:8080/nginx:1.0
```

- 推送镜像

```plain text
docker push 192.168.150.101:8080/nginx:1.0
```

- 拉取镜像

```plain text
docker pull 192.168.150.101:8080/nginx:1.0
```
