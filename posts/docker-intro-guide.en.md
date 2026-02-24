---
title: 'Getting Started with Docker'
published: 2023-08-10
updated: 2023-08-10
description: 'Docker is a technology for solving microservice deployment problems by packaging applications and their dependencies into isolated containers, avoiding inconsistent environments and dependency conflicts. Compared with virtual machines, Docker starts faster and uses fewer resources. Its architecture includes images and containers, and users can share and obtain images through Docker Hub. Basic operations include creating and managing images and containers and using volumes for data persistence and host-container decoupling. Docker Compose can simplify distributed application deployment.'
image: 'https://r2.dreaife.tokyo/notion/covers/093263234b9d454390c0f01ed1b0909d/2421860-20230810182019038-697482712.png'
tags: ['docker', 'deploy']
category: 'infra'
draft: false
lang: 'en'
---

# Docker

## What is Docker

Microservices, while offering many advantages, bring deployment headaches due to service decomposition.

- In a distributed system, there are many dependencies; different components often clash during deployment.
- Repeating deployments across hundreds or thousands of services may not yield consistent environments, leading to various issues.

### Environment issues for application deployment

Large projects have many components and complex runtime environments, so deployment often runs into issues:

- Complex dependencies can easily lead to compatibility problems
- Development, testing, and production environments differ from each other

For example, a project may depend on Node.js, Redis, RabbitMQ, MySQL, and more. The libraries and dependencies required by these services differ from each other and may even conflict, which makes deployment very difficult.

### How Docker Solves Dependency Compatibility Issues

Docker happens to solve these problems very well. How does it do that?

Docker uses two methods to solve dependency compatibility issues:

- Package the application's Libs (libraries), Deps (dependencies), and configuration together with the application
- Run each application in an isolated **container** to avoid interference

This packaged application bundle includes both the application itself and the Libs/Deps it requires, so you no longer need to install them separately on the operating system. Naturally, compatibility conflicts between applications are avoided.

### How Docker Solves OS Environment Differences

To solve differences between operating system environments, we first need to understand the OS structure. Taking Ubuntu as an example, it consists of:

- Computer hardware: CPU, memory, disk, etc.
- System kernel: All Linux distributions use the Linux kernel (e.g. CentOS, Ubuntu, Fedora). The kernel interacts with hardware and exposes **kernel instructions** for operating hardware.
- System applications: Applications and libraries provided by the OS itself. These libraries wrap kernel instructions to make them easier to use.

The interaction flow between applications and the computer is as follows:


1) Applications call OS-provided applications (libraries) to implement various functions


2) System libraries wrap the kernel instruction set and invoke kernel instructions


3) Kernel instructions operate the computer hardware


How does Docker solve cross-system environment issues?

- Docker packages the user program together with the required system libraries (for example, Ubuntu libraries)
- When Docker runs on different operating systems, it uses the packaged libraries while relying on the host OS's Linux kernel

Docker is a technology for quickly delivering and running applications, with the following advantages:

- It can package a program, its dependencies, and runtime environment into an image that can be migrated to any Linux operating system
- At runtime it uses sandboxing to create isolated containers so applications do not interfere with each other
- Startup and removal can both be done with a single command, which is convenient and efficient

## Differences Between Docker and Virtual Machines

Docker allows an application to run very conveniently across operating systems. Virtual machines can also run another operating system on top of a host OS and run applications inside it.

- **Virtual machine** (`virtual machine`) simulates hardware devices inside an operating system and then runs another operating system, e.g. running Ubuntu inside Windows, so you can run arbitrary Ubuntu applications.
- **Docker** only packages libraries and dependencies; it does not simulate a complete operating system.

| Feature | Docker | Virtual Machine |
| ---- | ------ | ----- |
| Performance | Near-native | Lower |
| Disk usage | Usually MB | Usually GB |
| Startup time | Seconds | Minutes |

Differences between Docker and virtual machines:

- Docker is a system process; a virtual machine is effectively another OS running inside the host OS
- Docker is smaller, starts faster, and performs better; VMs are larger, start slower, and generally perform worse

## Docker Architecture

### Images and Containers

There are several important concepts in Docker:

- **Image**: Docker packages an application together with its dependencies, libraries, environment, configuration, and related files into an image.
- **Container**: The process formed when an application in an image runs is a **container**. Docker isolates the container process so it is not directly visible externally.

At the end of the day, applications are made of code, and code is stored as **files** (bytes on disk). Only when running are they loaded into memory and become processes.

An **image** is a read-only package formed by bundling an application's files on disk, its runtime environment, and some system library files.

A **container** loads the programs/functions in those files into memory and runs them as processes, while isolating them. Therefore, one image can be started multiple times to form multiple container processes.

### DockerHub

There are many open-source applications, and packaging them repeatedly is wasted effort. To avoid this, people publish the application images they package (such as Redis and MySQL images) online for sharing, similar to code sharing on GitHub.

- DockerHub: DockerHub is the official hosting platform for Docker images. Platforms like this are called Docker Registries.
- There are also public services similar to DockerHub, such as [NetEase Cloud Image Service](https://c.163yun.com/hub) and [Alibaba Cloud Image Repository](https://cr.console.aliyun.com/).

We can both publish our own images to DockerHub and pull images from DockerHub.

### Docker Architecture

To use Docker to manage images and containers, we must first install Docker.

Docker follows a client-server architecture and consists of two parts:

- Server: the Docker daemon, responsible for handling Docker commands and managing images/containers
- Client: sends commands to the Docker server through CLI commands or REST API. It can send commands locally or remotely.

![image-20230810161802874.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810161802874.png)

# Basic Docker Operations

## Image Operations

### Image Names

Let's first look at how image names are composed:

- Image names are generally made of two parts: `[repository]:[tag]`.
- If no `tag` is specified, the default is `latest`, representing the latest version of the image.

### Image Commands

Common image operations are shown below.

![image-20230810162617340.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810162617340.png)

```shell
docker pull nginx	# 拉取镜像
docker images		# 查看拉取的镜像

# docker save -o [保存的目标文件名称] [镜像名称]
docker save -o nginx.tar nginx:latest	# 保存镜像
docker rmi nginx:latest					# 删除镜像
docker load -i nginx.tar				# 加载镜像
```

## Container Operations

Containers generally have three states:

- Running: the process is running normally
- Paused: the process is paused, CPU execution stops, but memory is not released
- Stopped: the process is terminated, and memory/CPU resources are reclaimed

### Container-Related Commands

- `docker run`: Create and run a container, entering the running state

    ```shell
    docker run --name containerName -p 80:80 -d nginx
    ```

    - `docker run`: Create and run a container
    - `--name`: Give the container a name, e.g. `mn`
    - `-p`: Map host port to container port; left side is host port, right side is container port
    - `-d`: Run the container in the background
    - `nginx`: Image name, e.g. `nginx`
- `docker pause`: Pause a running container
- `docker unpause`: Resume a paused container
- `docker stop`: Stop a running container
- `docker start`: Start a stopped container again
- `docker rm`: Delete a container
- `docker exec`: Enter a container

    ```plain text
    docker exec -it mn bash
    ```

    - `docker exec`: Enter the container and execute a command
    - `-it`: Create a stdin/stdout terminal for interaction
    - `mn`: The name of the container to enter
    - `bash`: The command executed after entering the container; `bash` is a Linux shell command

    Inside the container, Docker presents an isolated Linux filesystem that looks like a standalone Linux server.


Common parameters of the `docker run` command

- `--name`: Specify the container name
- `-p`: Specify port mapping
- `-d`: Run the container in the background

Command for viewing container logs:

- docker logs
- Add the `-f` parameter to continuously follow logs

Commands for checking container status:

- docker ps
- `docker ps -a` to view all containers, including stopped ones

## Volumes (Container Data Management)

In the earlier nginx example, to modify nginx's HTML page, we had to enter the nginx container. And since there was no editor inside, modifying files was inconvenient.

This is a consequence of coupling the container with the data (files inside the container).

To solve this problem, we must decouple data from containers, and for that we use volumes.

### What Is a Volume

- **Data volume (volume)**: A virtual directory that points to some directory on the host filesystem.

![image-20230810164051404.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810164051404.png)


Once volume mounting is complete, all operations on the container path affect the corresponding host directory behind the volume.

In this way, operating on `/var/lib/docker/volumes/html` on the host is equivalent to operating on `/usr/share/nginx/html` inside the container.


### Volume Operation Commands

The basic syntax for volume operations is as follows:


```plain text
docker volume [COMMAND]
```


the `docker volume` command is used for volume operations, and the action depends on the `command` that follows:

- `create`: create a volume
- `inspect`: show information about one or more volumes
- `ls`: list all volumes
- `prune`: remove unused volumes
- `rm`: remove one or more specified volumes

### Create and Inspect Volumes

**Goal**: Create a volume and check its directory location on the host machine.

1. Create a volume

```plain text
docker volume create html
```

1. View all volumes

```plain text
docker volume ls
```

1. View detailed information for a volume

```shell
docker volume inspect html
```

The host directory corresponding to the created `html` volume is `/var/lib/docker/volumes/html/_data`.

### Mounting Volumes

When creating a container, we can use the `-v` parameter to mount a volume to a directory inside the container, using the following format:


```plain text
docker run \\
  --name mn \\
  -v html:/root/html \\
  -p 8080:80
  nginx \\
```


Here, `-v` is the volume-mount option:

- `-v html:/root/html`: mount the `html` volume to `/root/html` inside the container

A container can mount not only volumes, but also host directories directly. The relationships are:

- Volume mode: host directory --> volume ---> container directory
- Direct bind mount mode: host directory --> container directory

Install MySQL 5.7 with Docker:


```shell
# --privileged=true参数，让容器拥有真正的root权限
docker run --privileged=true --name mysql5.7 -p 3307:3306 \\
-e MYSQL_ROOT_PASSWORD=123456 -d \\
-v /mydata/mysql/data:/var/lib/mysql \\
-v /mydata/mysql/conf:/etc/mysql \\
-v /mydata/mysql/log:/var/log/mysql \\
mysql:5.7
```


In the `docker run` command, the `-v` parameter can mount files or directories into the container:

- `-v <volume-name>:<container-dir>`
- `-v <host-file>:<container-file>`
- `-v <host-dir>:<container-dir>`

Volume mounts vs direct directory mounts:

- Volume mounts have lower coupling. Docker manages the directories, but the paths are deeper and harder to find.
- Directory mounts have higher coupling because we manage the directories ourselves, but the paths are easier to locate and inspect.

# Custom Images with Dockerfile

Common images can be found on DockerHub, but for our own projects we usually need to build images ourselves.

To customize an image, we first need to understand image structure.

## Image Structure

An image packages an application together with the system libraries, environment, configuration, and dependencies it needs.

In simple terms, an image is built by combining system libraries and runtime environment with application files, configuration files, dependency files, and a startup script, then packaging them together.

Building an image is essentially implementing this packaging process.

## Dockerfile Syntax

When building a custom image, we do not need to manually copy and package files one by one.

We only need to tell Docker what the image consists of, which BaseImage to use, what files to copy, what dependencies to install, and what the startup script is. Docker will build the image for us.

The file that describes this information is the Dockerfile.

A **Dockerfile** is a text file containing **instructions**, which describe what operations to execute in order to build the image. Each instruction forms one layer.

| Instruction | Description | Example |
| ---------- | ------------------ | --------------------------- |
| FROM       | Specify base image | FROM centos:6               |
| ENV        | Set environment variables | ENV key value               |
| COPY       | Copy local files to a target directory in the image | COPY ./mysql-5.7.rpm /tmp   |
| RUN        | Execute Linux shell commands | RUN yum install gcc         |
| EXPOSE     | Declare listening port for users/reference | EXPOSE 8080                 |
| ENTRYPOINT | Application startup command called when the container runs | ENTRYPOINT java -jar xx.jar |

## Building a Java Project

Build a Java project based on Java 8.

To build a Java project image, we can build on top of a base image that already contains the JDK.

- Write a Dockerfile:
    - Use `java:8-alpine` as the base image
    - Copy `app.jar` into the image
    - Expose the port
    - Write the `ENTRYPOINT`

    ```plain text
    FROM java:8-alpine
    COPY ./app.jar /tmp/app.jar
    EXPOSE 8090
    ENTRYPOINT java -jar /tmp/app.jar
    ```

- Use `docker build` to build the image
- Use `docker run` to create and run the container

# Docker-Compose

Docker Compose can help us quickly deploy distributed applications based on a Compose file, without manually creating and running containers one by one.

## Docker Compose Basics

A Compose file is a text file that defines how each container in the cluster runs. The format is as follows:


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


The Compose file above describes a project that contains two containers:

- `mysql`: a container built from the `mysql:5.7.25` image and mounted with two directories
- `web`: a container image built temporarily via `docker build`, with port `8090` mapped

A Docker Compose file can be viewed as multiple `docker run` commands written into one file, with only slight syntax differences.

## Deploy a Microservice Cluster

**Goal**: Deploy the previously learned `cloud-demo` microservice cluster using Docker Compose.

**Implementation approach**:

1. Write a `docker-compose` file

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


    It contains 5 services:

    - `nacos`: works as the registry and configuration center
        - `image: nacos/nacos-server`: based on the `nacos/nacos-server` image
        - `environment`: environment variables
            - `MODE: standalone`: start in standalone mode
        - `ports`: port mapping, exposing port `8848`
    - `mysql`: database
        - `image: mysql:5.7.25`: image version `mysql:5.7.25`
        - `environment`: environment variables
            - `MYSQL_ROOT_PASSWORD: 123`: sets the MySQL root password to `123`
        - `volumes`: data volume mounts for mysql `data` and `conf`, including prepared data
    - `userservice`, `orderservice`, `gateway`: all are built temporarily from Dockerfiles
2. Modify your `cloud-demo` project so that database and nacos addresses use the service names defined in `docker-compose`

    Because the microservices will be deployed as Docker containers, inter-container communication uses container names rather than IP addresses. Here we change the `mysql` and `nacos` addresses in `order-service`, `user-service`, and `gateway` to container-name-based addresses.


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

3. Use Maven to package each microservice in the project as `app.jar`

    Next we need to package each microservice. Since the jar name expected by the Dockerfile is `app.jar`, each microservice needs to use this name.

    This can be done by changing the package final name in `pom.xml`; each microservice needs this modification:


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

4. Copy the packaged `app.jar` into each corresponding subdirectory in `cloud-demo`
5. Upload `cloud-demo` to the VM and deploy with `docker-compose up -d`

# Docker Image Registry

## Push and Pull Images

To push an image to a private image registry, you must tag it first. The steps are:

- Retag the local image, prefixing the name with the private registry address: `192.168.150.101:8080/`

```plain text
docker tag nginx:latest 192.168.150.101:8080/nginx:1.0
```

- Push the image

```plain text
docker push 192.168.150.101:8080/nginx:1.0
```

- Pull the image

```plain text
docker pull 192.168.150.101:8080/nginx:1.0
```
