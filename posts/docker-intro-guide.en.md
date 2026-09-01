---
title: 'Getting Started with Docker'
published: 2023-08-10
updated: 2023-08-10
description: 'A practical Docker introduction covering containers vs. VMs, images, Docker Hub, core commands, persistent volumes, and Docker Compose.'
image: 'https://r2.dreaife.tokyo/notion/covers/093263234b9d454390c0f01ed1b0909d/2421860-20230810182019038-697482712.png'
tags: ['docker', 'deploy', 'INFRA']
category: 'STUDY'
draft: false
lang: 'en'
---

# docker

## What Is Docker?

Although microservices offer many advantages, splitting services generally creates significant deployment challenges.

- Distributed systems depend on many components, and conflicts often arise when deploying different components.
- When deployment is repeated across hundreds or thousands of servers, inconsistent environments can cause various problems.

### Application Deployment Environment Issues

Large projects contain many components and have complex runtime environments, which can lead to deployment issues:

- Complex dependencies can easily cause compatibility problems.
- Development, testing, and production environments may differ.

For example, a project may depend on Node.js, Redis, RabbitMQ, MySQL, and other services. The libraries and dependencies required by these services vary and may even conflict with one another, making deployment extremely difficult.

### How Docker Solves Dependency Compatibility Issues

Docker cleverly solves these problems. How does it work?

Docker uses two approaches to resolve dependency compatibility issues:

- Package the application's Libs (libraries), Deps (dependencies), configuration, and the application itself together.
- Run each application in an isolated **container** to prevent interference between applications.

The resulting application package contains both the application itself and the Libs and Deps it requires. There is no need to install them separately on the operating system, so compatibility problems between different applications are naturally avoided.

### How Docker Solves Differences Between Operating System Environments

To understand how Docker solves differences between operating system environments, we must first understand the structure of an operating system. Using Ubuntu as an example, its structure includes:

- Computer hardware: such as the CPU, memory, and disks.
- System kernel: All Linux distributions, including CentOS, Ubuntu, and Fedora, use the Linux kernel. The kernel interacts with computer hardware and provides **kernel instructions** for operating it.
- System applications: Applications and libraries provided by the operating system itself. These libraries encapsulate kernel instructions, making them easier to use.

The interaction between an application and a computer works as follows:

1）The application calls operating system applications (libraries) to implement various functions.

2）System libraries encapsulate the kernel instruction set and call kernel instructions.

3）Kernel instructions operate the computer hardware.

How does Docker solve differences between system environments?

- Docker packages the user program together with the required system libraries, such as Ubuntu libraries.
- When Docker runs on different operating systems, it uses the packaged libraries and the operating system's Linux kernel.

Docker is a technology for rapidly delivering and running applications. It offers the following advantages:

- Programs, their dependencies, and runtime environments can be packaged into an image that can be migrated to any Linux operating system.
- At runtime, sandboxing creates isolated containers so that applications do not interfere with one another.
- Containers can be started or removed with a single command, making operations quick and convenient.

## Differences Between Docker and Virtual Machines

Docker makes it easy to run an application on any operating system. A virtual machine can also run one operating system within another, allowing applications from the guest operating system to run.

- A **virtual machine** simulates hardware devices within an operating system and then runs another operating system. For example, Ubuntu can run inside Windows, allowing any Ubuntu application to run.
- **Docker** only packages libraries and does not simulate a complete operating system.

<table>
<tr>
<td>Feature</td>
<td>Docker</td>
<td>Virtual Machine</td>
</tr>
<tr>
<td>Performance</td>
<td>Near-native</td>
<td>Lower performance</td>
</tr>
<tr>
<td>Disk usage</td>
<td>Typically measured in MB</td>
<td>Typically measured in GB</td>
</tr>
<tr>
<td>Startup</td>
<td>Seconds</td>
<td>Minutes</td>
</tr>
</table>

Differences between Docker and virtual machines:

- Docker is a system process, whereas a virtual machine is an operating system running inside another operating system.
- Docker is lightweight, starts quickly, and performs well. Virtual machines are larger, start slowly, and offer average performance.

## Docker Architecture

### Images and Containers

Docker includes several important concepts:

- **Image**: Docker packages an application together with its required dependencies, libraries, environment files, configuration files, and other resources into an image.
- **Container**: The process created when the application in an image runs is a **container**. Docker isolates the container process so that it is not externally visible.

All applications ultimately consist of code stored as byte-based **files** on a disk. Only when an application runs are those files loaded into memory to form a process.

An **image** is a read-only package containing an application's files, runtime environment, and some system library files.

A **container** loads the programs and functions contained in these files into memory and runs them as an isolated process. Therefore, one image can be started multiple times to create multiple container processes.

### DockerHub

There are many open-source applications, and packaging them repeatedly would duplicate effort. To avoid this, people upload packaged application images, such as Redis and MySQL images, to the internet for others to use, much like sharing code on GitHub.

- DockerHub: DockerHub is Docker's official image-hosting platform. This type of platform is called a Docker Registry.
- Similar public services are also available in China, such as [NetEase Cloud Image Service](https://c.163yun.com/hub) and [Alibaba Cloud Container Registry](https://cr.console.aliyun.com/).

We can share our own images on DockerHub and pull images from DockerHub.

### Docker Architecture

To use Docker to manage images and containers, we must first install Docker.

Docker uses a C/S architecture and consists of two parts:

- Server: The Docker daemon, which processes Docker instructions and manages images, containers, and other resources.
- Client: Sends instructions to the Docker server through commands or a REST API. Instructions can be sent to a local or remote server.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810161802874.png)

# Basic Docker Operations

## Image Operations

### Image Names

First, let's examine the structure of an image name:

- An image name generally consists of two parts: \[repository\]:\[tag\].
- If no tag is specified, it defaults to latest, which represents the latest version of the image.

### Image Commands

Common image operation commands are shown below.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810162617340.png)

```shell
docker pull nginx	# 拉取镜像
docker images		# 查看拉取的镜像

# docker save -o [保存的目标文件名称] [镜像名称]
docker save -o nginx.tar nginx:latest	# 保存镜像
docker rmi nginx:latest					# 删除镜像
docker load -i nginx.tar				# 加载镜像

```

## Container Operations

A container has three states:

- Running: The process is running normally.
- Paused: The process is paused and no longer uses CPU time, but its memory is not released.
- Stopped: The process is terminated, and resources such as its memory and CPU usage are released.

### Container-Related Commands

- docker run: Creates and runs a container in the running state.

	```shell
	docker run --name containerName -p 80:80 -d nginx

	```

	- docker run: Creates and runs a container.
	- -name: Assigns a name to the container, such as mn.
	- p: Maps a host port to a container port. The host port is on the left side of the colon, and the container port is on the right.
	- d: Runs the container in the background.
	- nginx: The image name, such as nginx.
- docker pause: Pauses a running container.
- docker unpause: Resumes a paused container.
- docker stop: Stops a running container.
- docker start: Starts a stopped container again.
- docker rm: Deletes a container.
- docker exec: Enters a container.

	```plain text
	docker exec -it mn bash

	```

	- docker exec: Enters a container and executes a command.
	- it: Creates a standard input/output terminal for the current container, allowing us to interact with it.
	- mn: The name of the container to enter.
	- bash: The command executed after entering the container. bash is an interactive Linux terminal command.

	The container simulates an independent Linux file system internally, making it appear similar to a Linux server.

Common parameters of the docker run command:

- -name: Specifies the container name.
- p: Specifies port mappings.
- d: Runs the container in the background.

Commands for viewing container logs:

- docker logs
- Add the -f parameter to continuously view logs.

Viewing container status:

- docker ps
- docker ps -a displays all containers, including stopped containers.

## Volumes (Container Data Management)

In the previous nginx example, modifying the nginx HTML page required entering the nginx container. Because no editor was available, modifying files was also inconvenient.

This is a consequence of coupling the container with its data—the files inside the container.

To solve this problem, the data must be decoupled from the container by using volumes.

### What Is a Volume?

- \*A data volume (volume)\*\* is a virtual directory that points to a directory in the host file system.

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810164051404.png)

Once a volume is mounted, all operations on the relevant container files affect the corresponding host directory.

Therefore, operating on the host's /var/lib/docker/volumes/html directory is equivalent to operating on the container's /usr/share/nginx/html directory.

### Volume Operation Commands

The basic syntax for volume operations is as follows:

```plain text
docker volume [COMMAND]

```

The docker volume command manages volumes. The command that follows determines the next operation:

- create creates a volume
- inspect displays information about one or more volumes
- ls lists all volumes
- prune removes unused volumes
- rm removes one or more specified volumes

### Creating and Viewing Volumes

**Requirement**: Create a volume and view the location of its directory on the host.

1. Create a volume

```plain text
docker volume create html

```

1. View all volumes

```plain text
docker volume ls

```

1. View detailed volume information

```shell
docker volume inspect html

```

The host directory associated with the created html volume is `/var/lib/docker/volumes/html/_data`.

### Mounting a Volume

When creating a container, we can use the -v parameter to mount a volume to a directory inside the container. The command format is as follows:

```plain text
docker run \\
  --name mn \\
  -v html:/root/html \\
  -p 8080:80
  nginx \\

```

Here, -v is the command for mounting a volume:

- `v html:/root/htm`: Mounts the html volume to the /root/html directory inside the container.

A container can mount not only a volume but also a host directory directly. The relationships are as follows:

- Volume mount mode: Host directory --\> volume ---\> container directory
- Direct mount mode: Host directory ---\> container directory

Installing MySQL 5.7 with docker:

```shell
# --privileged=true参数，让容器拥有真正的root权限
docker run --privileged=true --name mysql5.7 -p 3307:3306 \\
-e MYSQL_ROOT_PASSWORD=123456 -d \\
-v /mydata/mysql/data:/var/lib/mysql \\
-v /mydata/mysql/conf:/etc/mysql \\
-v /mydata/mysql/log:/var/log/mysql \\
mysql:5.7

```

The docker run command uses the -v parameter to mount files or directories into a container:

- v volume name:container directory
- v host file:container file
- v host directory:container directory

Differences between volume mounts and direct directory mounts:

- Volume mounts have low coupling and Docker manages their directories, but the directories are deeply nested and difficult to locate.
- Directory mounts have high coupling and require us to manage the directories ourselves, but the directories are easy to locate and inspect.

# Creating Custom Images with Dockerfile

Common images can be found on DockerHub, but we must build images ourselves for our own projects.

Before creating a custom image, we must first understand the image structure.

## Image Structure

An image packages an application together with its required system libraries, environment, configuration, and dependencies.

In simple terms, an image combines application files, configuration files, dependencies, and other resources on top of system libraries and a runtime environment, and then packages them together with a startup script.

Building an image means carrying out this packaging process.

## Dockerfile Syntax

When building a custom image, we do not need to copy and package every file individually.

We only need to tell Docker what the image consists of, which BaseImage it requires, which files to copy, which dependencies to install, and which startup script to use. Docker will then build the image for us.

The file that describes this information is called a Dockerfile.

A **Dockerfile** is a text file containing a series of **instructions** that describe the operations required to build an image. Each instruction creates a Layer.

<table>
<tr>
<td>Instruction</td>
<td>Description</td>
<td>Example</td>
</tr>
<tr>
<td>FROM</td>
<td>Specifies the base image</td>
<td>FROM centos:6</td>
</tr>
<tr>
<td>ENV</td>
<td>Sets an environment variable</td>
<td>ENV key value</td>
</tr>
<tr>
<td>COPY</td>
<td>Copies a local file to a specified directory in the image</td>
<td>COPY ./mysql-5.7.rpm /tmp</td>
</tr>
<tr>
<td>RUN</td>
<td>Executes a Linux shell command</td>
<td>RUN yum install gcc</td>
</tr>
<tr>
<td>EXPOSE</td>
<td>Specifies the listening port used at runtime</td>
<td>EXPOSE 8080</td>
</tr>
<tr>
<td>ENTRYPOINT</td>
<td>Specifies the startup command for the application in the image, which is invoked when the container runs</td>
<td>ENTRYPOINT java -jar xx.jar</td>
</tr>
</table>

## Building a Java Project

Build a Java project based on Java 8.

A Java project image can be built from a base image that already includes the JDK.

- Write a Dockerfile:
	- Use java:8-alpine as the base image.
	- Copy app.jar into the image.
	- Expose the port.
	- Define the ENTRYPOINT.

	```plain text
	FROM java:8-alpine
	COPY ./app.jar /tmp/app.jar
	EXPOSE 8090
	ENTRYPOINT java -jar /tmp/app.jar

	```

- Use the docker build command to build the image.
- Use docker run to create and run a container.

# Docker Compose

Docker Compose can quickly deploy distributed applications based on a Compose file, eliminating the need to manually create and run containers one by one.

## Introduction to Docker Compose

A Compose file is a text file that uses instructions to define how each container in a cluster runs. Its format is as follows:

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

The Compose file above describes a project containing two containers:

- mysql: A container based on the `mysql:5.7.25` image with two directories mounted.
- web: A container based on an image temporarily built with `docker build`, with port 8090 mapped.

A Docker Compose file can essentially be viewed as multiple docker run commands written in a single file, although the syntax is slightly different.

## Deploying a Microservice Cluster

**Requirement**: Deploy the previously studied cloud-demo microservice cluster using Docker Compose.

**Implementation approach**:

1. Write the docker-compose file.

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

	It contains five services:

	- `nacos`: Acts as the service registry and configuration center.
		- `image: nacos/nacos-server`: Built from the nacos/nacos-server image.
		- `environment`: Environment variables.
			- `MODE: standalone`: Starts in standalone mode.
		- `ports`: Port mappings. Port 8848 is exposed here.
	- `mysql`: The database.
		- `image: mysql:5.7.25`: The image version is mysql:5.7.25.
		- `environment`: Environment variables.
			- `MYSQL_ROOT_PASSWORD: 123`: Sets the password of the database root account to 123.
		- `volumes`: Volume mounts. The MySQL data and conf directories are mounted here and contain data prepared in advance.
	- `userservice`, `orderservice`, and `gateway`: All are temporarily built from Dockerfiles.
2. Modify the cloud-demo project so that the database and nacos addresses use the service names defined in docker-compose.

	Because the microservices will be deployed as Docker containers, containers communicate using container names rather than IP addresses. Therefore, the MySQL and nacos addresses for the order-service, user-service, and gateway services must be changed to use container names.

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

3. Use Maven to package each microservice in the project as app.jar.

	Next, each microservice must be packaged. Because the JAR file in the Dockerfile is named app.jar, every microservice must use this name.

	This can be achieved by modifying the package name in pom.xml. Each microservice must be updated:

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

4. Copy each packaged app.jar into its corresponding subdirectory in cloud-demo.
5. Upload cloud-demo to the virtual machine and deploy it using `docker-compose up -d`.

# Docker Image Registry

## Pushing and Pulling Images

Before pushing an image to a private registry, it must first be tagged. The steps are as follows:

- Retag the local image using the private registry address, 192.168.150.101:8080/, as the name prefix:

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
