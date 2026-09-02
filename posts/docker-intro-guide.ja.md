---
title: 'Docker入門'
published: 2023-08-10
updated: 2023-08-10
description: 'Docker入門として、仮想マシンとの違い、イメージとコンテナ、Docker Hub、基本コマンド、永続化ボリューム、Docker Composeを整理します。'
image: 'https://r2.dreaife.tokyo/notion/covers/093263234b9d454390c0f01ed1b0909d/2421860-20230810182019038-697482712.png'
tags: ['docker', 'deploy', 'INFRA']
category: '研习'
draft: false
lang: 'ja'
---

# docker

## Dockerとは

マイクロサービスにはさまざまな利点がありますが、サービスの分割は一般的にデプロイに大きな負担をもたらします。

- 分散システムでは依存するコンポーネントが非常に多く、異なるコンポーネントをデプロイする際に競合が発生することがあります。
- 数百〜数千台のサーバーに繰り返しデプロイする場合、環境が必ずしも同一ではないため、さまざまな問題が発生します。

### アプリケーションのデプロイ環境に関する問題

大規模なプロジェクトはコンポーネントが多く、実行環境も複雑なため、デプロイ時に次のような問題が発生します。

- 依存関係が複雑で、互換性の問題が発生しやすい
- 開発環境、テスト環境、本番環境に違いがある

たとえば、あるプロジェクトをデプロイする際にnode.js、Redis、RabbitMQ、MySQLなどへの依存が必要な場合、それぞれのサービスで必要となるライブラリや依存関係は異なり、競合することさえあります。このため、デプロイが非常に困難になります。

### Dockerによる依存関係の互換性問題の解決

一方、Dockerはこれらの問題を巧みに解決しています。Dockerはどのように実現しているのでしょうか。

Dockerは依存関係の互換性問題を解決するため、次の2つの方法を採用しています。

- アプリケーションのLibs（ライブラリ）、Deps（依存関係）、設定をアプリケーションと一緒にパッケージ化する
- 各アプリケーションを隔離された**コンテナ**内で実行し、相互干渉を防ぐ

このようにパッケージ化されたアプリケーションパッケージには、アプリケーション本体だけでなく、必要なLibsやDepsも含まれています。これらをOS上に別途インストールする必要がないため、異なるアプリケーション間の互換性問題も自然に解消されます。

### DockerによるOS環境の違いの解決

異なるOS環境の違いを解決するには、まずOSの構造を理解する必要があります。Ubuntuを例にすると、その構造は次のとおりです。

- コンピューターハードウェア：CPU、メモリ、ディスクなど
- システムカーネル：CentOS、Ubuntu、Fedoraなど、すべてのLinuxディストリビューションのカーネルはLinuxです。カーネルはコンピューターハードウェアとやり取りし、外部に**カーネル命令**を提供して、コンピューターハードウェアを操作します。
- システムアプリケーション：OS自体が提供するアプリケーションやライブラリです。これらのライブラリはカーネル命令をラップしたもので、より簡単に利用できます。

アプリケーションとコンピューターがやり取りする流れは次のとおりです。

1）アプリケーションがOSのアプリケーション（ライブラリ）を呼び出し、さまざまな機能を実現する

2）システムライブラリはカーネル命令セットをラップしたものであり、カーネル命令を呼び出す

3）カーネル命令がコンピューターハードウェアを操作する

Dockerは異なるシステム環境の問題をどのように解決するのでしょうか。

- Dockerはユーザープログラムと、呼び出しに必要なシステム（Ubuntuなど）のライブラリをまとめてパッケージ化する
- Dockerを異なるOS上で実行する場合、パッケージ化されたライブラリを直接使用し、OSのLinuxカーネルを利用して動作する

Dockerは、アプリケーションを迅速に配布して実行するための技術であり、次の利点があります。

- プログラム、その依存関係、実行環境をまとめて1つのイメージとしてパッケージ化し、任意のLinux OSに移行できる
- 実行時にサンドボックス機構を利用して隔離されたコンテナを形成し、各アプリケーションが相互に干渉しない
- 起動や削除を1行のコマンドで実行でき、簡単かつ迅速である

## Dockerと仮想マシンの違い

Dockerを使用すると、アプリケーションをあらゆるOS上で簡単に実行できます。仮想マシンでも、あるOS上で別のOSを実行し、そのシステム内のあらゆるアプリケーションを実行できます。

- **仮想マシン**（virtual machine）は、OS内でハードウェアデバイスを**エミュレート**し、その上で別のOSを実行します。たとえば、Windows上でUbuntuを実行することで、任意のUbuntuアプリケーションを実行できます。
- **Docker**はライブラリをパッケージ化するだけで、完全なOSをエミュレートするわけではありません。

<table>
<tr>
<td>特性</td>
<td>Docker</td>
<td>仮想マシン</td>
</tr>
<tr>
<td>性能</td>
<td>ネイティブに近い</td>
<td>性能が低い</td>
</tr>
<tr>
<td>ディスク使用量</td>
<td>通常はMB単位</td>
<td>通常はGB単位</td>
</tr>
<tr>
<td>起動</td>
<td>秒単位</td>
<td>分単位</td>
</tr>
</table>

Dockerと仮想マシンの違いは次のとおりです。

- dockerは1つのシステムプロセスであり、仮想マシンはOS内で動作する別のOSである
- dockerはサイズが小さく、起動が速く、性能も高い。仮想マシンはサイズが大きく、起動が遅く、性能も一般的である

## Dockerアーキテクチャ

### イメージとコンテナ

Dockerにはいくつかの重要な概念があります。

- **イメージ（Image）**：Dockerがアプリケーションと、それに必要な依存関係、ライブラリ、環境、設定などのファイルをまとめてパッケージ化したものをイメージと呼びます。
- **コンテナ（Container）**：イメージ内のアプリケーションを実行して生成されたプロセスが**コンテナ**です。ただし、Dockerはコンテナプロセスを隔離するため、外部からは見えません。

すべてのアプリケーションは最終的にコードで構成されており、ハードディスク上ではバイト列からなる**ファイル**です。実行時に初めてメモリへ読み込まれ、プロセスになります。

**イメージ**とは、ハードディスク上にあるアプリケーションのファイル、実行環境、および一部のシステムライブラリをまとめてパッケージ化したファイルです。このファイルパッケージは読み取り専用です。

**コンテナ**とは、これらのファイルに記述されたプログラムや関数をメモリに読み込んで実行し、プロセスとして隔離したものです。そのため、1つのイメージを複数回起動し、複数のコンテナプロセスを作成できます。

### DockerHub

オープンソースのアプリケーションは非常に多く、それらをパッケージ化する作業は重複しがちです。この重複作業を避けるため、RedisやMySQLなど、自分でパッケージ化したアプリケーションイメージをネットワーク上に公開して共有します。これはGitHubでコードを共有するのと同じです。

- DockerHub：DockerHubは、Docker公式のイメージホスティングプラットフォームです。このようなプラットフォームをDocker Registryと呼びます。
- 中国国内にもDockerHubに似た公開サービスがあり、たとえば[NetEase Cloudイメージサービス](https://c.163yun.com/hub)や[Alibaba Cloudイメージリポジトリ](https://cr.console.aliyun.com/)などがあります。

自分のイメージをDockerHubで共有できる一方、DockerHubからイメージを取得することもできます。

### Dockerアーキテクチャ

Dockerを使用してイメージやコンテナを操作するには、Dockerをインストールする必要があります。

DockerはC/Sアーキテクチャのプログラムで、次の2つの部分から構成されています。

- サーバー（server）：Dockerデーモン。Docker命令を処理し、イメージやコンテナなどを管理する
- クライアント（client）：コマンドまたはRestAPIを使用してDockerサーバーへ命令を送信する。ローカルまたはリモートからサーバーへ命令を送信できる

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810161802874.png)

# Dockerの基本操作

## イメージの操作

### イメージ名

まず、イメージ名の構成を確認します。

- イメージ名は通常、\[repository\]:\[tag\]の2つの部分から構成されます。
- tagを指定しない場合、デフォルトはlatestとなり、最新バージョンのイメージを表します。

### イメージ関連コマンド

一般的なイメージ操作コマンドは次の図のとおりです。

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810162617340.png)

```shell
docker pull nginx	# 拉取镜像
docker images		# 查看拉取的镜像

# docker save -o [保存的目标文件名称] [镜像名称]
docker save -o nginx.tar nginx:latest	# 保存镜像
docker rmi nginx:latest					# 删除镜像
docker load -i nginx.tar				# 加载镜像

```

## コンテナの操作

コンテナには3つの状態があります。

- 実行：プロセスが正常に実行されている
- 一時停止：プロセスが一時停止し、CPUは動作しなくなるが、メモリは解放されない
- 停止：プロセスが終了し、プロセスが使用していたメモリやCPUなどのリソースが回収される

### コンテナ関連コマンド

- docker run：コンテナを作成して実行状態にする

	```shell
	docker run --name containerName -p 80:80 -d nginx

	```

	- docker run：コンテナを作成して実行する
	- -name：mnなど、コンテナに名前を付ける
	- p：ホストマシンのポートとコンテナのポートをマッピングする。コロンの左側がホストマシンのポート、右側がコンテナのポート
	- d：コンテナをバックグラウンドで実行する
	- nginx：nginxなどのイメージ名
- docker pause：実行中のコンテナを一時停止する
- docker unpause：一時停止中のコンテナを再開する
- docker stop：実行中のコンテナを停止する
- docker start：停止中のコンテナを再度実行する
- docker rm：コンテナを削除する
- docker exec：コンテナ内に入る

	```plain text
	docker exec -it mn bash

	```

	- docker exec：コンテナ内部に入り、コマンドを実行する
	- it：現在入っているコンテナに標準入出力端末を作成し、コンテナとの対話を可能にする
	- mn：入る対象となるコンテナの名前
	- bash：コンテナに入った後で実行するコマンド。bashはLinux端末の対話コマンド

	コンテナ内部では独立したLinuxファイルシステムがエミュレートされ、Linuxサーバーのように見えます。

docker runコマンドの一般的なパラメーターは次のとおりです。

- -name：コンテナ名を指定する
- p：ポートマッピングを指定する
- d：コンテナをバックグラウンドで実行する

コンテナのログを確認するコマンド：

- docker logs
- -fパラメーターを追加すると、継続的にログを確認できる

コンテナの状態を確認するコマンド：

- docker ps
- docker ps -aですべてのコンテナを確認する。停止済みのコンテナも含まれる

## データボリューム（コンテナのデータ管理）

前述のnginxの例では、nginxのhtmlページを変更するためにnginxコンテナ内へ入る必要がありました。また、エディターがないため、ファイルの変更も非常に面倒でした。

これは、コンテナとデータ（コンテナ内のファイル）が密結合しているためです。

この問題を解決するには、データとコンテナを分離する必要があり、そのためにデータボリュームを使用します。

### データボリュームとは

- \*データボリューム（volume）\*\*は、ホストマシンのファイルシステム内にある特定のディレクトリを参照する仮想ディレクトリです。

![](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810164051404.png)

データボリュームをマウントすると、コンテナに対するすべての操作が、データボリュームに対応するホストマシンのディレクトリへ反映されます。

つまり、ホストマシンの/var/lib/docker/volumes/htmlディレクトリを操作することは、コンテナ内の/usr/share/nginx/htmlディレクトリを操作することと同じです。

### データボリューム操作コマンド

データボリュームを操作する基本構文は次のとおりです。

```plain text
docker volume [COMMAND]

```

docker volumeコマンドはデータボリュームを操作するためのコマンドであり、後ろに続くcommandによって実行する操作が決まります。

- create：volumeを作成する
- inspect：1つまたは複数のvolumeの情報を表示する
- ls：すべてのvolumeを一覧表示する
- prune：使用されていないvolumeを削除する
- rm：指定した1つまたは複数のvolumeを削除する

### データボリュームの作成と確認

**要件**：データボリュームを作成し、ホストマシン上のディレクトリ位置を確認する

1. データボリュームを作成する

```plain text
docker volume create html

```

1. すべてのデータボリュームを確認する

```plain text
docker volume ls

```

1. データボリュームの詳細情報を確認する

```shell
docker volume inspect html

```

作成したhtmlデータボリュームに関連付けられたホストマシンのディレクトリは、`/var/lib/docker/volumes/html/_data`です。

### データボリュームのマウント

コンテナを作成する際、-vパラメーターを使用してデータボリュームをコンテナ内の特定のディレクトリにマウントできます。コマンド形式は次のとおりです。

```plain text
docker run \\
  --name mn \\
  -v html:/root/html \\
  -p 8080:80
  nginx \\

```

ここで-vはデータボリュームをマウントするためのコマンドです。

- `v html:/root/htm`：htmlデータボリュームをコンテナ内の/root/htmlディレクトリにマウントする

コンテナにはデータボリュームだけでなく、ホストマシンのディレクトリを直接マウントすることもできます。関連付けは次のとおりです。

- データボリューム方式：ホストマシンのディレクトリ --\> データボリューム ---\> コンテナ内のディレクトリ
- 直接マウント方式：ホストマシンのディレクトリ ---\> コンテナ内のディレクトリ

DockerでMySQL 5.7をインストールする場合：

```shell
# --privileged=true参数，让容器拥有真正的root权限
docker run --privileged=true --name mysql5.7 -p 3307:3306 \\
-e MYSQL_ROOT_PASSWORD=123456 -d \\
-v /mydata/mysql/data:/var/lib/mysql \\
-v /mydata/mysql/conf:/etc/mysql \\
-v /mydata/mysql/log:/var/log/mysql \\
mysql:5.7

```

docker runコマンドでは、-vパラメーターを使用してファイルまたはディレクトリをコンテナにマウントします。

- v volume名:コンテナ内ディレクトリ
- v ホストマシンのファイル:コンテナ内ファイル
- v ホストマシンのディレクトリ:コンテナ内ディレクトリ

データボリュームのマウントとディレクトリの直接マウントの違い：

- データボリュームのマウントは結合度が低く、dockerがディレクトリを管理する。ただし、ディレクトリの階層が深いため見つけにくい
- ディレクトリの直接マウントは結合度が高く、自分でディレクトリを管理する必要がある。ただし、ディレクトリを簡単に見つけて確認できる

# Dockerfileによるカスタムイメージの作成

一般的なイメージはDockerHubで見つけられますが、自分で作成したプロジェクトについては、自分でイメージをビルドする必要があります。

カスタムイメージを作成するには、まずイメージの構造を理解する必要があります。

## イメージの構造

イメージは、アプリケーションと、それに必要なシステムライブラリ、環境、設定、依存関係をまとめてパッケージ化したものです。

簡単に言えば、イメージとは、システムライブラリと実行環境をベースに、アプリケーションファイル、設定ファイル、依存関係ファイルなどを追加し、起動スクリプトと一緒にパッケージ化したファイルです。

イメージの構築とは、実際には上記のパッケージ化処理を実現することです。

## Dockerfileの構文

カスタムイメージを構築する際、ファイルを1つずつコピーしてパッケージ化する必要はありません。

イメージの構成、必要なBaseImage、コピーするファイル、インストールする依存関係、起動スクリプトなどをDockerに伝えるだけで、Dockerがイメージを構築してくれます。

これらの情報を記述するファイルがDockerfileです。

**Dockerfile**は、複数の**命令（Instruction）**を含むテキストファイルです。命令を使用して、イメージを構築するために実行する操作を指定します。各命令によって1つのLayerが形成されます。

<table>
<tr>
<td>命令</td>
<td>説明</td>
<td>例</td>
</tr>
<tr>
<td>FROM</td>
<td>ベースイメージを指定する</td>
<td>FROM centos:6</td>
</tr>
<tr>
<td>ENV</td>
<td>環境変数を設定する</td>
<td>ENV key value</td>
</tr>
<tr>
<td>COPY</td>
<td>ローカルファイルをイメージ内の指定ディレクトリへコピーする</td>
<td>COPY ./mysql-5.7.rpm /tmp</td>
</tr>
<tr>
<td>RUN</td>
<td>Linux shellコマンドを実行する</td>
<td>RUN yum install gcc</td>
</tr>
<tr>
<td>EXPOSE</td>
<td>実行時に待ち受けるポートを利用者向けに指定する</td>
<td>EXPOSE 8080</td>
</tr>
<tr>
<td>ENTRYPOINT</td>
<td>イメージ内のアプリケーションを起動するコマンド。コンテナの実行時に呼び出される</td>
<td>ENTRYPOINT java -jar xx.jar</td>
</tr>
</table>

## Javaプロジェクトの構築

java8をベースにJavaプロジェクトを構築します。

Javaプロジェクトのイメージは、JDKが用意されたベースイメージを基に構築できます。

- Dockerfileを作成する：
	- java:8-alpineをベースイメージとして使用する
	- app.jarをイメージへコピーする
	- ポートを公開する
	- ENTRYPOINTを記述する

	```plain text
	FROM java:8-alpine
	COPY ./app.jar /tmp/app.jar
	EXPOSE 8090
	ENTRYPOINT java -jar /tmp/app.jar

	```

- docker buildコマンドを使用してイメージを構築する
- docker runを使用してコンテナを作成し、実行する

# Docker-Compose

Docker Composeは、Composeファイルを基に分散アプリケーションを迅速にデプロイできます。コンテナを1つずつ手動で作成して実行する必要はありません。

## DockerCompose入門

Composeファイルは、クラスター内の各コンテナをどのように実行するかを命令によって定義するテキストファイルです。形式は次のとおりです。

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

上記のComposeファイルは、2つのコンテナを含む1つのプロジェクトを記述しています。

- mysql：`mysql:5.7.25`イメージを基に構築されたコンテナで、2つのディレクトリをマウントしている
- web：`docker build`によって一時的に構築されたイメージのコンテナで、8090ポートをマッピングしている

DockerComposeファイルは、複数のdocker runコマンドを1つのファイルにまとめたものと考えられます。ただし、構文には若干の違いがあります。

## マイクロサービスクラスターのデプロイ

**要件**：以前学習したcloud-demoマイクロサービスクラスターをDockerComposeでデプロイする

**実装方針**：

1. docker-composeファイルを作成する

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

	このファイルには5つのserviceが含まれています。

	- `nacos`：サービスレジストリおよび設定センターとして使用する
		- `image: nacos/nacos-server`：nacos/nacos-serverイメージを基に構築する
		- `environment`：環境変数
			- `MODE: standalone`：スタンドアロンモードで起動する
		- `ports`：ポートマッピング。ここでは8848ポートを公開している
	- `mysql`：データベース
		- `image: mysql:5.7.25`：イメージのバージョンはmysql:5.7.25
		- `environment`：環境変数
			- `MYSQL_ROOT_PASSWORD: 123`：データベースのrootアカウントのパスワードを123に設定する
		- `volumes`：データボリュームのマウント。ここでは、事前に用意したデータを含むmysqlのdataディレクトリとconfディレクトリをマウントしている
	- `userservice`、`orderservice`、`gateway`：いずれもDockerfileを基に一時的に構築する
2. 自分のcloud-demoプロジェクトを変更し、データベースとnacosのアドレスをdocker-compose内のサービス名にする

	マイクロサービスは最終的にdockerコンテナとしてデプロイされます。コンテナ間の接続にはIPアドレスではなく、コンテナ名を使用します。そのため、order-service、user-service、gatewayサービスのmysqlとnacosのアドレスを、コンテナ名を使用したアクセス方式に変更します。

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

3. mavenパッケージ化ツールを使用し、プロジェクト内の各マイクロサービスをapp.jarとしてパッケージ化する

	次に、各マイクロサービスをパッケージ化する必要があります。前述のDockerfile内のjarファイル名がすべてapp.jarであるため、各マイクロサービスもこの名前にする必要があります。

	pom.xml内のパッケージ名を変更することで実現できます。各マイクロサービスで変更が必要です。

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

4. パッケージ化したapp.jarをcloud-demo内の対応する各サブディレクトリへコピーする
5. cloud-demoを仮想マシンへアップロードし、`docker-compose up -d`を使用してデプロイする

# Dockerイメージリポジトリ

## イメージのプッシュとプル

イメージをプライベートイメージサービスへプッシュする前に、tagを付ける必要があります。手順は次のとおりです。

- ローカルイメージに再度tagを付け、名前のプレフィックスにプライベートリポジトリのアドレス192.168.150.101:8080/を指定する

```plain text
docker tag nginx:latest 192.168.150.101:8080/nginx:1.0

```

- イメージをプッシュする

```plain text
docker push 192.168.150.101:8080/nginx:1.0

```

- イメージをプルする

```plain text
docker pull 192.168.150.101:8080/nginx:1.0

```
