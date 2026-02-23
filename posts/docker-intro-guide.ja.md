---
title: 'Docker入門'
published: 2023-08-10
updated: 2023-08-10
description: 'Dockerは、アプリケーションと依存関係を分離されたコンテナにパッケージ化することで、環境差異や依存関係の衝突を避け、マイクロサービスのデプロイ問題を解決する技術です。仮想マシンと比べて起動が速く、リソース使用量も少ないのが特徴です。Dockerのアーキテクチャはイメージとコンテナで構成され、Docker Hubでイメージを共有・取得できます。基本操作にはイメージ/コンテナの作成・管理や、データ永続化とホスト分離のためのボリューム利用が含まれます。Docker Composeを使うと分散アプリケーションのデプロイを簡素化できます。'
image: 'https://r2.dreaife.tokyo/notion/covers/093263234b9d454390c0f01ed1b0909d/2421860-20230810182019038-697482712.png'
tags: ['docker', 'deploy']
category: 'infra'
draft: false
lang: 'ja'
---

# Docker

## Dockerとは

マイクロサービスはさまざまな利点を持つ一方で、サービスを分割するとデプロイメントには共通して大きな手間が生じます。

- 分散システムでは依存するコンポーネントが非常に多く、異なるコンポーネントをデプロイする際にしばしば衝突が生じます。
- 数百〜千台規模のサービスを繰り返し展開する際、環境が必ずしも一致せず、さまざまな問題に遭遇します。

### アプリケーションデプロイの環境問題

大型プロジェクトは部品が多く、実行環境も複雑で、デプロイ時にいくつかの問題に直面します：

- 依存関係が複雑で、互換性の問題が発生しやすい
- 開発、テスト、本番環境に差異がある

例えばあるプロジェクトでは、デプロイ時に node.js、Redis、RabbitMQ、MySQL などの依存関係が必要となり、それらのサービスが必要とするライブラリや依存関係はそれぞれ異なり、時には衝突さえ生じます。デプロイには非常に大きな困難をもたらします。

### Dockerは依存互換性の問題を解決します

Dockerはこの問題を巧みに解決します。Dockerはどのように実現しているのでしょうか？

Dockerは依存の互換性問題を解決するため、2つの手段を採用しています：

- アプリの Libs（ライブラリ）、Deps（依存関係）、設定をアプリと一緒にパッケージ化する
- 各アプリを分離された**コンテナ**に入れて実行し、互いの干渉を避ける

このようにパッケージ化されたアプリパッケージには、アプリ自体だけでなく、アプリが必要とする Libs、Deps も含まれており、OS 上にそれらを再度インストールする必要はなくなるため、異なるアプリ間の互換性の問題は自然と解消されます。

### DockerはOS環境差異を解決します

OS環境の差異問題を解決するには、まずOSの構造を理解する必要があります。Ubuntu を例にとると、構造は以下のとおりです：

- コンピュータハードウェア：例えば CPU、メモリ、ディスクなど
- システムカーネル：すべての Linux ディストリビューションのカーネルは Linux であり、CentOS、Ubuntu、Fedora など。カーネルはハードウェアとやり取りし、外部に**カーネル命令**を提供してハードウェアを操作します
- システムアプリケーション：OS 自体が提供するアプリケーション、ライブラリ。これらのライブラリはカーネル命令のラッパーで、より使いやすくなっています

コンピュータとの対話の流れは次のとおりです：

1）アプリがOSアプリケーション（ライブラリ）を呼び出してさまざまな機能を実現する

2）システムライブラリはカーネル命令セットのラッパーで、カーネル命令を呼び出す

3）カーネル命令が計算機ハードウェアを操作する

Dockerは異なるOS環境の問題をどう解決するのか？

- Dockerはユーザーのプログラムと、呼び出す必要のあるシステム（例えば Ubuntu）のライブラリを一緒にパッケージ化する
- Dockerを別のOSで実行する場合、パッケージ化されたライブラリを直接基にして、OSのLinuxカーネルを借りて実行する

Dockerはアプリケーションを迅速に提供・実行する技術で、以下の利点を備えています：

- プログラムとその依存関係、実行環境を1つのイメージにパッケージ化でき、任意の Linux OS へ移行可能
- 実行時にはサンドボックス機構により隔離されたコンテナを作成し、各アプリは互いに干渉しません
- 起動・削除は1行のコマンドで完了でき、便利で迅速

## Dockerと仮想マシンの違い

Dockerは1つのアプリケーションを任意のOSで非常に便利に実行できます。一方、仮想マシンも1つのOS上で別のOSを実行して、システム内のアプリケーションを保護します。

- **仮想マシン（virtual machine）**はOS上で**ハードウェアを模倣**し、別のOSを実行します。たとえば Windows 上で Ubuntu を動かし、Ubuntu のアプリを任意に実行できます。
- **Docker**は単にライブラリをパッケージ化しているだけで、完全なOSを模倣しているわけではありません

| 特性 | Docker | 仮想マシン |
| ---- | ------ | ----- |
| 性能 | ネイティブに近い | 性能は劣る |
| ハードディスク使用量 | 一般的にはMB | 一般的にはGB |
| 起動 | 秒単位 | 分単位 |

Dockerと仮想マシンの違い：

- dockerはシステムプロセス；仮想マシンはOS内の別のOS
- dockerはコンパクトで起動速度が速く、性能が良い；仮想マシンはサイズが大きく、起動が遅く、性能は普通

## Dockerアーキテクチャ

### イメージとコンテナ

Dockerにはいくつかの重要な概念があります：

- **イメージ（Image）**：Dockerはアプリケーションとその依存関係、ライブラリ、環境、設定などのファイルをひとまとめにパッケージ化するイメージと呼びます。
- **コンテナ（Container）**：イメージの中でアプリケーションが実行されて形成されるプロセスは**コンテナ**です。Dockerはコンテナプロセスを分離し、外部からは見えません。

すべてのアプリケーションは最終的にコードで構成され、ハードディスク上の1つずつのバイトで形成される**ファイル**です。実行時に初めてメモリへロードされ、プロセスを形成します。

そして**イメージ**は、アプリケーションのハードディスク上のファイルとその実行環境、部分的なシステムライブラリを一緒にパッケージ化して形成されるファイルパッケージです。このファイルパッケージは読み取り専用です。

**コンテナ**は、これらのファイルに含まれるプログラムや関数をメモリへロードして実行を許可しますが、分離されます。従って1つ의イメージを複数回起動して、複数のコンテナプロセスを形成します。

### Docker Hub

オープンソースのアプリケーションは非常に多く、それらをパッケージ化する作業は繰り返しになります。この繰り返し作業を避けるため、人々は自分でパッケージ化したアプリのイメージ（例：Redis、MySQL のイメージ）をネット上に公開・共有します。GitHub のコード共有のように。

- Docker Hub：Docker Hubは公式の Docker イメージをホストするプラットフォームです。このようなプラットフォームは Docker Registry と呼ばれます。
- 国内にも Docker Hub に類似した公開サービスがあり、例えば [网易云镜像服务](https://c.163yun.com/hub)、[Alibaba Cloud イメージライブラリ](https://cr.console.aliyun.com/) などがあります。

私たちは一方で自分のイメージを Docker Hub に共有することができ、他方で Docker Hub からイメージをプルすることもできます。

### Dockerアーキテクチャ

イメージやコンテナを操作するには、Docker をインストールしておく必要があります。

DockerはCSアーキテクチャのプログラムで、2つの部分から成り立っています：

- サーバー（server）：Docker デーモン、Docker の指示を処理し、イメージ・コンテナなどを管理します
- クライアント（client）：コマンドや RestAPI を通じて Docker サーバーへ指示を送ります。ローカルまたはリモートでサービスへ指示を送れます

![image-20230810161802874.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810161802874.png)

# Dockerの基本操作

## イメージ操作

### イメージ名

まずイメージ名の構成を見てみましょう：

- イメージ名は通常2つの部分で構成されます：[repository]:[tag]
- tag が未指定の場合、デフォルトは latest で、最新バージョンのイメージを表します

### イメージコマンド

一般的なイメージ操作コマンドは図のとおりです

![image-20230810162617340.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810162617340.png)

```shell
docker pull nginx	# イメージを取得
docker images		# 取得したイメージを表示

# docker save -o [保存の対象ファイル名] [イメージ名]
docker save -o nginx.tar nginx:latest	# イメージを保存
docker rmi nginx:latest					# イメージを削除
docker load -i nginx.tar				# イメージを読み込む
```

## コンテナ操作

コンテナは3つの状態を保護します：

- 実行中：プロセスが正常に動作
- 一時停止：プロセスが一時停止、CPUは動作せず、メモリは解放されません
- 停止：プロセスが終了、プロセスが占有していたメモリ、CPU などのリソースを回収

### コンテナ関連コマンド

- docker run：1つのコンテナを作成して実行、実行状態へ

```shell
docker run --name containerName -p 80:80 -d nginx
```

- docker run：1つのコンテナを作成して実行
- -name : コンテナに名前を付ける、例えば mn
- -p ：ホストとコンテナのポートをマッピング。コロン左がホスト、右がコンテナ
- -d：バックグラウンドで実行
- nginx：イメージ名、例として nginx
- docker pause：実行中のコンテナを一時停止
- docker unpause：一時停止状態から再開
- docker stop：実行中のコンテナを停止
- docker start：停止したコンテナを再度実行
- docker rm：コンテナを削除
- docker exec: コンテナへ入る

```plain text
docker exec -it mn bash
```

- docker exec：コンテナ内部に入り、コマンドを実行
- -i -t：現在入っているコンテナに標準入力・出力端末を作成し、コンテナと対話可能にする
- mn：入るコンテナの名前
- bash：コンテナ内で実行するコマンド。bashは Linux の端末対話コマンド

コンテナ内部には独立したLinuxファイルシステムが模倣され、まるで別の Linux サーバーのように見えます


docker run コマンドの一般的なパラメータ

- -name：コンテナ名を指定
- -p：ポートマッピングを指定
- -d：コンテナをバックグラウンドで実行

コンテナのログを表示するコマンド：

- docker logs
- -f を追加すると、ログを継続的に表示できます

コンテナの状態を確認する：

- docker ps
- docker ps -a は停止済みを含むすべてのコンテナを表示

## データボリューム（コンテナデータ管理）

以前の nginx のケースでは、nginx 内部へ入って html を修正する必要がありました。編集用のエディタがないため、ファイルの修正も煩雑です。

これが、コンテナとデータ（コンテナ内ファイル）が結びついてしまう結果です。

この問題を解決するには、データとコンテナをデカップリングする必要があり、データボリュームを使います。

### データボリュームとは

- *データボリューム（volume）**は仮想ディレクトリで、ホストマシンのファイルシステム内の特定のディレクトリを指します。

![image-20230810164051404.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810164051404.png)

データボリュームのマウントが完了すると、コンテナへのすべての操作はデータボリュームに対応するホスト側のディレクトリに作用します。

このように、ホストの /var/lib/docker/volumes/html ディレクトリを操作すれば、コンテナ内の /usr/share/nginx/html ディレクトリを操作したことになります

### データセット操作コマンド

データボリューム操作の基本的な構文は以下のとおりです：

```plain text
docker volume [COMMAND]
```

docker volume コマンドはデータボリューム操作で、続く command によって次の操作を決定します：

- create：1つのボリュームを作成
- inspect：1つまたは複数のボリュームの情報を表示
- ls：すべてのボリュームを列挙
- prune：未使用のボリュームを削除
- rm：指定した1つまたは複数のボリュームを削除

### データボリュームの作成と確認

**要件**：データボリュームを作成し、ホストマシン上のディレクトリ位置を確認します

1. データボリュームを作成

```plain text
docker volume create html
```

1. すべてのデータを表示

```plain text
docker volume ls
```

1. データボリュームの詳細情報を表示

```shell
docker volume inspect html
```

作成された html データボリュームが関連付けるホスト側のディレクトリは `/var/lib/docker/volumes/html/_data` ディレクトリです。

### データボリュームのマウント

コンテナを作成する際に、-v パラメータを使ってデータボリュームをコンテナ内の特定のディレクトリにマウントできます。コマンドの形式は以下のとおりです：

```plain text
docker run \\
  --name mn \\
  -v html:/root/html \\
  -p 8080:80
  nginx \\
```

ここでの -v はデータボリュームをマウントするコマンドです：

- `-v html:/root/html`：html データボリュームをコンテナ内の /root/html ディレクトリにマウント

コンテナはデータボリュームだけでなく、ホストマシンのディレクトリにも直接マウントできます。関連付けは以下のとおりです：

- データボリュームモード：ホストディレクトリ --> データボリューム ---> コンテナ内ディレクトリ
- 直接マウントモード：ホストディレクトリ --> コンテナ内ディレクトリ

dockerはMySQL 5.7 をインストールする：

```shell
# --privileged=true パラメータで、コンテナに真の root 権限を付与
docker run --privileged=true --name mysql5.7 -p 3307:3306 \\
-e MYSQL_ROOT_PASSWORD=123456 -d \\
-v /mydata/mysql/data:/var/lib/mysql \\
-v /mydata/mysql/conf:/etc/mysql \\
-v /mydata/mysql/log:/var/log/mysql \\
mysql:5.7
```

docker run のコマンドの中で -v パラメータを使ってファイルやディレクトリをコンテナにマウントします：

- -v ボリューム名:コンテナ内ディレクトリ
- -v ホストファイル:コンテナ内のファイル
- -v ホストディレクトリ:コンテナ内ディレクトリ

データボリュームのマウントとディレクトリ直接マウントの

- データボリュームマウントは結合度が低く、Docker がディレクトリを管理しますが、ディレクトリが深くて見つけにくいです
- ディレクトリ直接マウントは結合度が高く、ディレクトリを自分で管理する必要がありますが、ディレクトリは探しやすく閲覧しやすいです

# Dockerfileによるカスタムイメージ

一般的なイメージは Docker Hub で見つけられますが、私たちの自作プロジェクトの場合は自分でイメージを構築する必要があります。

そしてカスタムイメージを作るには、まずイメージの構造を理解する必要があります。

## イメージの構造

イメージはアプリケーションと、それに必要なシステムライブラリ、環境、設定、依存関係をパックして作られています。

簡単に言うと、イメージはシステムライブラリ・実行環境を基盤として、アプリケーションファイル・設定ファイル・依存ファイルなどを追加して、起動スクリプトを用意してパッケージ化したファイルです。

イメージを構築することは、上述のパッケージ化のプロセスを実現することです。

## Dockerfileの文法

カスタムイメージを構築する際、一つ一つのファイルをコピーしてパッケージ化する必要はありません。

私たちはDockerに、イメージの構成、どのBaseImageが必要か、どんなファイルをコピーするか、どの依存をインストールするか、起動スクリプトは何か、将来 Docker がイメージを構築してくれることを伝えるだけです。

この情報を記述するファイルがDockerfileです。

**Dockerfile** はテキストファイルで、複数の**指令（Instruction）**を含み、指令を用いてイメージを構築する操作を説明します。各指令は1つのLayerを形成します。

| 指令         | 説明                 | サンプル                          |
| ---------- | ------------------ | --------------------------- |
| FROM       | 基礎イメージを指定      | FROM centos:6               |
| ENV        | 環境変数を設定        | ENV key value               |
| COPY       | ローカルファイルをイメージの指定ディレクトリへコピー | COPY ./mysql-5.7.rpm /tmp   |
| RUN        | Linux のシェルコマンドを実行 | RUN yum install gcc         |
| EXPOSE     | 実行時の待機ポートを指定（利用者に表示） | EXPOSE 8080                 |
| ENTRYPOINT | イメージ内アプリの起動コマンド、コンテナ実行時に呼ばれる | ENTRYPOINT java -jar xx.jar |

## Java プロジェクトの構築

Java 8 をベースに Java プロジェクトを構築

Java プロジェクトのイメージを構築するには、すでに JDK が用意された基盤イメージの上に構築できます。

- Dockerfile を作成：
    - java:8-alpine を基礎イメージとして使用
    - app.jar をイメージにコピー
    - ポートを公開
    - エントリーポイントを記述

```plain text
FROM java:8-alpine
COPY ./app.jar /tmp/app.jar
EXPOSE 8090
ENTRYPOINT java -jar /tmp/app.jar
```

- docker build コマンドでイメージを構築
- docker run でコンテナを作成して実行

# Docker-Compose

Docker Compose は Compose ファイルを基に、分散アプリケーションを迅速にデプロイすることができ、手動でコンテナを1つずつ作成して実行する必要はありません！

## Docker Compose 初識

Compose ファイルはテキストファイルで、クラスター内の各コンテナをどう動作させるかを指示で定義します。形式は以下のとおり：

```json
version: "3.8"
 services:
  mysql:
    image: mysql:5.7.25
    environment:
     MYSQL_ROOT_PASSWORD: 123
    volumes:
     - "/tmp/mysql/data:/var/lib/mysql"
     - "/tmp/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf"
  web:
    build: .
    ports:
     - "8090:8090"
```

上記の Compose ファイルは、2つのコンテナを含むプロジェクトを説明しています：

- mysql：`mysql:5.7.25` イメージを基に構築されたコンテナで、2つのディレクトリをマウントしています
- web：`docker build` によって一時的に構築されたイメージのコンテナで、ポートマッピングは 8090

実際には Docker Compose ファイルは、複数の docker run コマンドを1つのファイルに書き換えたものと見なせます。文法は少し異なるだけです。

## マイクロサービスクラスタのデプロイ

**要件**：これまで学んだ cloud-demo のマイクロサービスクラスタを Docker Compose でデプロイ

**実装方針**：

1. docker-compose ファイルを作成

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

この中には5つの service が含まれています：

- `nacos`：登録センターと設定センターとして
  - `image: nacos/nacos-server`：nacos/nacos-server イメージを基に構築
  - `environment`：環境変数
    - `MODE: standalone`：単一ノード起動
  - `ports`：ポートマッピング、ここでは 8848 を公開
- `mysql`：データベース
  - `image: mysql:5.7.25`：イメージのバージョンは mysql:5.7.25
  - `environment`：環境変数
    - `MYSQL_ROOT_PASSWORD: 123`：データベースの root アカウントのパスワードを 123 に設定
  - `volumes`：データボリュームのマウント。ここでは mysql の data、conf ディレクトリをマウントしており、事前に用意したデータを含む
- `userservice`、`orderservice`、`gateway`：すべて Dockerfile を基に一時的に構築

2. 自分の cloud-demo プロジェクトを修正し、データベースと nacos のアドレスを docker-compose のサービス名で指定

マイクロサービスは将来的に Docker コンテナとしてデプロイされ、コンテナ同士の連携は IP アドレスではなくコンテナ名で行われるため、order-service、user-service、gateway の mysql、nacos のアドレスをコンテナ名ベースのアクセスに変更します。

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
      server-addr: nacos:8848 # nacosサービス地址
```

3. Maven のビルドツールを使って、各マイクロサービスを app.jar にパッケージ化

次に、それぞれのマイクロサービスをパッケージ化します。以前の Dockerfile での jar 名が app.jar であることを考慮すると、各マイクロサービスはこの名前を使う必要があります。

以下を変更します：

```xml
<build>
  <!-- サービスの最終的なパッケージ名 -->
  <finalName>app</finalName>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>
```

4. パッケージ化した app.jar を cloud-demo の各対応するサブディレクトリにコピー

5. cloud-demo を仮想マシンへアップロードし、`docker-compose up -d` でデプロイ

# Dockerイメージリポジトリ

## イメージのプッシュとプル

私用のイメージリポジトリへイメージをプッシュするには、先にタグ付けを行う必要があります。手順は以下のとおり：

- ローカルイメージのタグを再設定する。名前のプレフィックスは私有リポジトリのアドレス：192.168.150.101:8080/

```plain text
docker tag nginx:latest 192.168.150.101:8080/nginx:1.0
```

- イメージをプッシュ

```plain text
docker push 192.168.150.101:8080/nginx:1.0
```

- イメージをプル

```plain text
docker pull 192.168.150.101:8080/nginx:1.0
```