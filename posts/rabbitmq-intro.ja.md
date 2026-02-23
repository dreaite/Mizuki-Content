---
title: 'RabbitMQ入門'
published: 2023-08-12
updated: 2023-08-12
description: 'RabbitMQは同期通信と非同期通信をサポートするメッセージキューです。非同期通信では仲介役のBrokerを介して疎結合化し、スループット向上と障害分離を実現します。RabbitMQはDockerで導入でき、ワークキュー、Publish/Subscribe、ルーティングなど複数のメッセージモデルをサポートします。Spring AMQPはキューの自動宣言や非同期受信機能を提供し、RabbitMQ利用を簡素化します。メッセージコンバータにはJSON形式を使うことで可読性と効率を高められます。'
image: 'https://r2.dreaife.tokyo/notion/covers/3f6c59309d7d440ca8a9aa5ab567ebc0/2421860-20230812233849958-1924148470.png'
tags: ['rabbitMQ', 'java', 'springAMQP']
category: 'middle-side'
draft: false
lang: 'ja'
---

消息队列-RabbitMQ

# 认识MQ

## 同步和异步通讯

マイクロサービス間の通信には同期と非同期の2つの方式があります：

同期通信：電話のように、リアルタイムで応答を必要とします。

非同期通信：メールのように、すぐに返信を求めません。

### 同步通讯

同期呼び出しの利点：

- 即時性が高く、すぐに結果を得られる

同期呼び出しの問題：

- 結合度が高い
- パフォーマンスとスループットが低下
- 追加のリソース消費がある
- 連鎖的な失敗の問題がある

### 异步通讯

非同期呼び出しは上記の問題を回避します：

私たちは商品を購入するケースを例として挙げます。ユーザーが支払った後、注文サービスを呼び出して注文状況の変更を完了し、物流サービスを呼び出して倉庫から在庫を割り当て、出荷準備を行います。

イベント駆動モードでは、支払いサービスがイベントの発行者（publisher）で、支払い完了後に支払い成功イベント（event）を発行します。イベントには注文IDが含まれます。注文サービスと物流サービスはイベント購読者（Consumer）で、支払い成功イベントを購読し、イベントを検知したらそれぞれの業務を完了します。

イベント発行者と購読者の結合を解消するため、直接の通信は行われず、中間者（Broker）が存在します。発行者はイベントをBrokerに発行しますが、誰が購読するかは関心を持ちません。購読者はBrokerからイベントを購読し、誰が送ってきた消息かを気にせず処理します。

![image-20230811220006405.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230811220006405.png)

Brokerはデータ的な総線のようなもので、全サービスがデータを受け取り、データを送るためにこの総線に送ります。この総線はまるでプロトコルのように、サービス間の通信を標準化・制御可能にします。

好处：

- 吞吐量向上：サブスクライバーの処理完了を待たずに応答が速くなる
- 故障隔离：サービスが直接呼び出されず、連鎖的な失敗の問題がない
- 呼び出し間にブロックがなく、無駄なリソース占用が発生しない
- 耦合度が非常に低く、各サービスは柔軟に挿抜・置換が可能
- 流量削峰：イベントの発行量の変動に関係なく、Brokerが受け取り、サブスクライバーは自分の速度で処理できる

缺点：

- アーキテクチャが複雑になり、ビジネスの明確なフローがなく、管理が難しくなる
- Brokerの信頼性・セキュリティ・性能に依存する

## MQ技術对比

MQ、中文はメッセージキュー（MessageQueue）で、字面通りメッセージを格納するキューです。すなわちイベント駆動アーキテクチャのブローカーです。

比較的よく使われるMQ実装：

- ActiveMQ
- RabbitMQ
- RocketMQ
- Kafka

いくつかのメジャーなMQの比較：

|       | **RabbitMQ**         | **ActiveMQ**                  | **RocketMQ** | **Kafka**  |
| ----- | -------------------- | ----------------------------- | ------------ | ---------- |
| 会社/コミュニティ | Rabbit               | Apache                        | 阿里           | Apache     |
| 開発言語  | Erlang               | Java                          | Java         | Scala&Java |
| プロトコルサポート  | AMQP，XMPP，SMTP，STOMP | OpenWire,STOMP，REST,XMPP,AMQP | 自定义协议        | 自定义协议      |
| 可用性   | 高                    | 一般                            | 高            | 高          |
| シングルノード吞吐量 | 一般                   | 差                             | 高            | 非常高        |
| メッセージ遅延  | 微秒級                  | 毫秒級                           | 毫秒級          | 毫秒以下       |
| メッセージ信頼性 | 高                    | 一般                            | 高            | 一般         |

追求可用性：Kafka、 RocketMQ 、RabbitMQ

追求可靠性：RabbitMQ、RocketMQ

追求吞吐能力：RocketMQ、Kafka

追求消息低遅延：RabbitMQ、Kafka

# 快速入门

## RabbitMQ安装

通过Docker安装：

先确定版本拉取镜像，再运行安装命令即可

```shell
docker pull rabbitmq:${your_version}

docker run \\
 -e RABBITMQ_DEFAULT_USER=${your_name} \\
 -e RABBITMQ_DEFAULT_PASS=${your_pwd} \\
 --name mq \\
 --hostname mq1 \\
 -p 15672:15672 \\
 -p 5672:5672 \\
 -d \\
 rabbitmq:${your_version}

# 如果出现安装后网页无法访问
docker exec -it rabbitMQ bash
rabbitmq-plugins ebable rabbitmq_management # 开启组件

echo management_agent.disable_metrics_collector = false > management_agent.disable_metrics_collector.conf
```

集群配置

- 普通模式：普通模式集群不进行数据同步，每个MQ都有自己的队列、数据信息（其它元数据信息如交换机等会同步）。例如我们有2个MQ：mq1，和mq2，如果你的消息在mq1，而你连接到了mq2，那么mq2会去mq1拉取消息，然后返回给你。如果mq1宕机，消息就会丢失。
- 镜像模式：与普通模式不同，队列会在各个mq的镜像节点之间同步，因此你连接到任何一个镜像节点，均可获取到消息。而且如果一个节点宕机，并不会导致数据丢失。不过，这种方式增加了数据同步的带宽消耗。

![image-20230812015649763.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230812015649763.png)

RabbitMQ中的一些角色：

- publisher：生产者
- consumer：消费者
- exchange：交换机，负责消息路由
- queue：队列，存储消息
- virtualHost：虚拟主机，隔离不同租户的exchange、queue、消息的隔离

## RabbitMQ消息模型

RabbitMQ官方提供了5个不同的Demo示例，对应了不同的消息模型

- 基本消息队列
- 工作消息队列

发布订阅，交换机类型：

- Fanout Exchange：广播
- Direct Exchange：路由
- Topic Exchange：主题

## 入门案例

官方的HelloWorld是基于最基础的消息队列模型来实现的，只包括三个角色：

- publisher：消息发布者，将消息发送到队列queue
- queue：消息队列，负责接受并缓存消息
- consumer：订阅队列，处理队列中的消息

### publisher实现

思路：

- 建立连接
- 创建Channel
- 声明队列
- 发送消息
- 关闭连接和channel

代码实现：


```java
package cn.itcast.mq.helloworld;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.junit.Test;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class PublisherTest {
    @Test
    public void testSendMessage() throws IOException, TimeoutException {
        // 1.建立连接
        ConnectionFactory factory = new ConnectionFactory();
        // 1.1.设置连接参数，分别是：主机名、端口号、vhost、用户名、密码
        factory.setHost("192.168.150.101");
        factory.setPort(5672);
        factory.setVirtualHost("/");
        factory.setUsername("itcast");
        factory.setPassword("123321");
        // 1.2.建立连接
        Connection connection = factory.newConnection();

        // 2.创建通道Channel
        Channel channel = connection.createChannel();

        // 3.创建队列
        String queueName = "simple.queue";
        channel.queueDeclare(queueName, false, false, false, null);

        // 4.发送消息
        String message = "hello, rabbitmq!";
        channel.basicPublish("", queueName, null, message.getBytes());
        System.out.println("发送消息成功：【" + message + "】");

        // 5.关闭通道和连接
        channel.close();
        connection.close();

    }
}
```

### consumer实现

代码思路：

- 建立连接
- 创建Channel
- 声明队列
- 订阅消息

代码实现：


```java
package cn.itcast.mq.helloworld;

import com.rabbitmq.client.*;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public class ConsumerTest {

    public static void main(String[] args) throws IOException, TimeoutException {
        // 1.建立连接
        ConnectionFactory factory = new ConnectionFactory();
        // 1.1.设置连接参数，分别是：主机名、端口号、vhost、用户名、密码
        factory.setHost("192.168.150.101");
        factory.setPort(5672);
        factory.setVirtualHost("/");
        factory.setUsername("itcast");
        factory.setPassword("123321");
        // 1.2.建立连接
        Connection connection = factory.newConnection();

        // 2.创建通道Channel
        Channel channel = connection.createChannel();

        // 3.创建队列
        String queueName = "simple.queue";
        channel.queueDeclare(queueName, false, false, false, null);

        // 4.订阅消息
        channel.basicConsume(queueName, true, new DefaultConsumer(channel){
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope,
                                       AMQP.BasicProperties properties, byte[] body) throws IOException {
                // 5.处理消息
                String message = new String(body);
                System.out.println("接收到消息：【" + message + "】");
            }
        });
        System.out.println("等待接收消息。。。。");
    }
}
```

# SpringAMQP

SpringAMQPはRabbitMQをベースにしたテンプレートのセットで、Spring Bootを利用した自動設定も実現しており、使い勝手が非常に良いです。

SpringAMQPは3つの機能を提供します：

- 自動的にキュー、エクスチェンジおよびそれらの結合を宣言する
- アノテーションベースのリスナー模式、非同期でメッセージを受信する
- RabbitTemplateツールをラップして、メッセージを送信する

## Basic Queue 簡易キュー模型

依存関係の追加

```xml
<!--AMQP依存，RabbitMQを含む-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

### 消息发送

まずMQアドレスを設定します。publisherサービスの application.yml に設定を追加します：

```yaml
spring:
  rabbitmq:
    host: 192.168.150.101 # ホスト名
    port: 5672 # ポート
    virtual-host: / # 仮想ホスト
    username: itcast # ユーザー名
    password: 123321 # パスワード
```

次に publisher サービスでテストクラス SpringAmqpTest を作成し、RabbitTemplate を用いてメッセージを送信します：

```java
package cn.itcast.mq.spring;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringAmqpTest {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Test
    public void testSimpleQueue() {
        // キュー名
        String queueName = "simple.queue";
        // メッセージ
        String message = "hello, spring amqp!";
        // メッセージを送信
        rabbitTemplate.convertAndSend(queueName, message);
    }
}
```

### 消息接收

まずMQアドレスを設定します。consumerサービスの application.yml に設定を追加します：

```yaml
spring:
  rabbitmq:
    host: 192.168.150.101 # ホスト名
    port: 5672 # ポート
    virtual-host: / # 仮想ホスト
    username: itcast # ユーザー名
    password: 123321 # パスワード
```

次に consumerサービスの `cn.itcast.mq.listener` パッケージに新しいクラス SpringRabbitListener を作成します。コードは以下のとおり：

```java
package cn.itcast.mq.listener;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class SpringRabbitListener {

    @RabbitListener(queues = "simple.queue")
    public void listenSimpleQueueMessage(String msg) throws InterruptedException {
        System.out.println("spring 消費者接收到消息：【" + msg + "】");
    }
}
```

## WorkQueue

Work queues、別名（Task queues）、タスクモデル。簡単に言えば、複数のコンシューマーを1つのキューにバインドして、キュー内のメッセージを共同で消費させます。

メッセージ処理が比較的時間を要する場合、メッセージ生成速度が消費速度を大きく上回ることがあります。長く続くと、メッセージは蓄積され、タイムリーに処理できなくなります。そのとき Work モデルを使用すると、複数のコンシューマーが共同で処理するため、速度が大幅に向上します。

### 消息发送

今回は大量のメッセージ蓄積現象を模倣するため、ループ送信を行います。

publisherサービスの SpringAmqpTest クラスにテストメソッドを追加します：

```java
/**
     * workQueue
     * 向队列中不断发送消息，模拟消息堆积。
     */
@Test
public void testWorkQueue() throws InterruptedException {
    // 队列名称
    String queueName = "simple.queue";
    // 消息
    String message = "hello, message_";
    for (int i = 0; i < 50; i++) {
        // 发送消息
        rabbitTemplate.convertAndSend(queueName, message + i);
        Thread.sleep(20);
    }
}
```

### 消息接收

複数のコンシューマーが同じキューをバインドする状況を模倣するため、consumer サービスの SpringRabbitListener に2つの新しいメソッドを追加します：

```java
@RabbitListener(queues = "simple.queue")
public void listenWorkQueue1(String msg) throws InterruptedException {
    System.out.println("消费者1接收到消息：【" + msg + "】" + LocalTime.now());
    Thread.sleep(20);
}

@RabbitListener(queues = "simple.queue")
public void listenWorkQueue2(String msg) throws InterruptedException {
    System.err.println("消费者2........接收到消息：【" + msg + "】" + LocalTime.now());
    Thread.sleep(200);
}
```

### 配置优化

ConsumerApplication を起動した後、先ほど作成した送信テスト方法 testWorkQueue を publisher サービスで実行します。

消費者1 は自分の25件のメッセージをすぐに処理します。消費者2 は自分の25件を遅いペースで処理します。

つまり、メッセージは各コンシューマーに均等に割り当てられ、コンシューマーの処理能力を考慮していません。これは問題です。

Spring にはこの問題を解決する簡単な設定があります。consumer サービスの application.yml ファイルを編集し、設定を追加します：

```yaml
spring:
  rabbitmq:
    listener:
      simple:
        prefetch: 1 # 毎回1つのメッセージのみ取得、処理完了後に次を取得
```

## 発行/購読

![image-20230812181249063.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230812181249063.png)

サブスクリプションモデルでは、エクスチェンジの役割が追加され、プロセスが少し変わります：

- Publisher：プロデューサー、つまりメッセージを送信するプログラムですが、キューへ送るのではなくX（エクスチェンジ）へ送ります
- Exchange：エクスチェンジ、図のX。 一方、プロデューサーが送信するメッセージを受け取り、もう一方、どのように処理するかを知っています。例えば、特定のキューへ配布、すべてのキューへ配布、またはメッセージを破棄します。動作はExchangeのタイプに依存します。Exchangeには以下の3種類があります：
    - Fanout：ブロードキャスト、メッセージをすべてのバインドされたキューへ渡す
    - Direct：ルーティング、指定された routing key のキューへ渡す
    - Topic：トピック、routing pattern にマッチするキューへ渡す
- Consumer：コンシューマー、従来と同様、キューを購読します
- Queue：メッセージキュー、従来どおり、メッセージを受信・キャッシュします。

Exchange（交換機）はメッセージを転送するだけで、メッセージを保存する能力はないため、もしキューがExchangeにバインドされていない、またはルーティング規則に合致するキューが存在しない場合、メッセージは失われます！

## Fanout

ブロードキャストモードでは、メッセージ送信の流れは次のとおりです：

- 複数のキューを持つことができる
- 各キューは Exchange（エクスチェンジ）にバインドされている必要がある
- 送信者が送るメッセージは交換機にのみ送られ、交換機がどのキューへ送るかを決定します。送信者には決定権がない
- 交換機はバインド済みのすべてのキューへメッセージを送信する
- サブスクライブしているコンシューマーは全員メッセージを受け取れる

テスト計画は以下のとおりです：

- 交換機 itcast.fanout、タイプは Fanout を作成
- キュー fanout.queue1 と fanout.queue2 を作成し、交換機 itcast.fanout にバインド

### 声明队列和交换机

Spring は Exchange という、すべての異なるタイプの交換機を表すインタフェースを提供します

consumer 側で、キューと交換機を宣言するクラスを作成します：

```java
package cn.itcast.mq.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FanoutConfig {
    /**
     * 声明交换机
     * @return Fanout类型交换機
     */
    @Bean
    public FanoutExchange fanoutExchange(){
        return new FanoutExchange("itcast.fanout");
    }

    /**
     * 第1个队列
     */
    @Bean
    public Queue fanoutQueue1(){
        return new Queue("fanout.queue1");
    }

    /**
     * 绑定队列和交换机
     */
    @Bean
    public Binding bindingQueue1(Queue fanoutQueue1, FanoutExchange fanoutExchange){
        return BindingBuilder.bind(fanoutQueue1).to(fanoutExchange);
    }

    /**
     * 第2个队列
     */
    @Bean
    public Queue fanoutQueue2(){
        return new Queue("fanout.queue2");
    }

    /**
     * 绑定队列和交换机
     */
    @Bean
    public Binding bindingQueue2(Queue fanoutQueue2, FanoutExchange fanoutExchange){
        return BindingBuilder.bind(fanoutQueue2).to(fanoutExchange);
    }
}
```

### 消息发送

 publisher サービスの SpringAmqpTest クラスにテストメソッドを追加します：

```java
@Test
public void testFanoutExchange() {
    // 交換機名称
    String exchangeName = "itcast.fanout";
    // メッセージ
    String message = "hello, everyone!";
    rabbitTemplate.convertAndSend(exchangeName, "", message);
}
```

### 消息接收

 consumer サービスの SpringRabbitListener に2つのメソッドを追加して、コンシューマーとして動作させます：

```java
@RabbitListener(queues = "fanout.queue1")
public void listenFanoutQueue1(String msg) {
    System.out.println("消费者1接收到Fanout消息：【" + msg + "】");
}

@RabbitListener(queues = "fanout.queue2")
public void listenFanoutQueue2(String msg) {
    System.out.println("消费者2接收到Fanout消息：【" + msg + "】");
}
```

交換機の役割は何ですか？

- Publisher が送信したメッセージを受け取る
- メッセージを規則に従って、結合されているキューへルーティングする
- メッセージをキャッシュできず、ルーティング失敗時にはメッセージが失われる
- FanoutExchange はメッセージを結合された全てのキューへルーティングします

声明队列、交换机、绑定关系のBeanは何ですか？

- Queue
- FanoutExchange
- Binding

## Direct

Fanoutモードでは、1つのメッセージはすべての購読キューで消費されます。しかし、特定の場面では、異なるメッセージを異なるキューで消費したい場合があります。そんなとき Direct 型の Exchange を使用します。

Direct モデルでは：

- キューとエクスチェンジの結合は任意の結合ではなく、RoutingKey（ルーティングキー）を指定する必要があります
- メッセージの送信元は Exchange にメッセージを送信する際、必ず RoutingKey を指定します
- Exchange は全てのバインドされたキューへメッセージを渡すのではなく、メッセージの Routing Key に基づいて、キューの RoutingKey がメッセージの Routing Key と完全一致する場合のみ受信します

ケースの要求は以下のとおりです。

1. @RabbitListener を用いて Exchange、Queue、RoutingKey を宣言する
2. consumer サービスで、direct.queue1 と direct.queue2 をリッスンする2つのコンシューマーを作成する
3. publisher でテストメソッドを作成し、itcast.direct にメッセージを送信する

### 基于注解声明队列和交换机

@Bean ベースの宣言は煩雑なので、Spring はアノテーションベースの宣言も提供します。

consumer の SpringRabbitListener に、2つのコンシューマーを追加し、アノテーションを用いてキューとエクスチェンジを宣言します：

```java
@RabbitListener(bindings = @QueueBinding(
    value = @Queue(name = "direct.queue1"),
    exchange = @Exchange(name = "itcast.direct", type = ExchangeTypes.DIRECT),
    key = {"red", "blue"}
))
public void listenDirectQueue1(String msg){
    System.out.println("消费者接收到direct.queue1の消息：【" + msg + "】");
}

@RabbitListener(bindings = @QueueBinding(
    value = @Queue(name = "direct.queue2"),
    exchange = @Exchange(name = "itcast.direct", type = ExchangeTypes.DIRECT),
    key = {"red", "yellow"}
))
public void listenDirectQueue2(String msg){
    System.out.println("消费者接收到direct.queue2の消息：【" + msg + "】");
}
```

### 消息发送

publisherサービスの SpringAmqpTest クラスにテストメソッドを追加します：

```java
@Test
public void testSendDirectExchange() {
    // 交換機名称
    String exchangeName = "itcast.direct";
    // メッセージ
    String message = "紅色警報！日本乱排核廃水，导致海洋生物变异，惊现哥斯拉！";
    // 发送消息
    rabbitTemplate.convertAndSend(exchangeName, "red", message);
}
```

Direct交換機とFanout交換機の差異を説明してください。

- Fanout交換機はメッセージをすべてのバインドされたキューへルーティングします
- Direct交換機は RoutingKey によってどのキューへルーティングするかを判断します
- 複数のキューが同じ RoutingKey を持つ場合、Fanout の機能に近い

基于@RabbitListener注解声明队列和交换机有哪些常见注解？

- @Queue
- @Exchange

## Topic

### 说明

Topicタイプの Exchange は、Direct と比較しても、RoutingKey に基づいてメッセージを異なるキューへルーティングできます。ただし Topic タイプの Exchange は、キューを Routing Key にバインドする際にワイルドカードを使用できます！

RoutingKey は一般に1語以上で、複数語は「.」で区切られます。例： item.insert

ワイルドカード規則：

`#`：0語以上をマッチ

`*`：ちょうど1語にマッチ

例：

`item.#`：`item.spu.insert` や `item.spu` にマッチ

`item.*`：`item.spu` にのみマッチします

実装方針は以下のとおり：

1. @RabbitListener を用いて Exchange、Queue、RoutingKey を宣言します
2. consumer サービスで、topic.queue1 と topic.queue2 をそれぞれ監視する2つのコンシューマーを作成します
3. publisher でテストメソッドを作成し、itcast.topic にメッセージを送信します

### 消息发送

 publisherサービスのSpringAmqpTestクラスにテスト方法を追加します：

```java
/**
     * topicExchange
     */
@Test
public void testSendTopicExchange() {
    // 交換機名称
    String exchangeName = "itcast.topic";
    // メッセージ
    String message = "This is a impossible land!";
    // 发送消息
    rabbitTemplate.convertAndSend(exchangeName, "china.news", message);
}
```

### 消息接收

 consumerサービスの SpringRabbitListener にメソッドを追加します：

```java
@RabbitListener(bindings = @QueueBinding(
    value = @Queue(name = "topic.queue1"),
    exchange = @Exchange(name = "itcast.topic", type = ExchangeTypes.TOPIC),
    key = "china.#"
))
public void listenTopicQueue1(String msg){
    System.out.println("消费者接收到topic.queue1の消息：【" + msg + "】");
}

@RabbitListener(bindings = @QueueBinding(
    value = @Queue(name = "topic.queue2"),
    exchange = @Exchange(name = "itcast.topic", type = ExchangeTypes.TOPIC),
    key = "#.news"
))
public void listenTopicQueue2(String msg){
    System.out.println("消费者接收到topic.queue2の消息：【" + msg + "】");
}
```

Direct交換機とTopic交換機の差異を説明してください？

- Topic交換機は受け取るメッセージの RoutingKey が複数の語で成り立ち、`*.**` のように分割されます
- Topic交換機とキューを結ぶときの bindingKey はワイルドカードを指定できます
- `#`：0語以上
- `*`：1語

## 消息转换器

以前に述べたように、Spring は送信するメッセージをバイト列にシリアライズして MQ に送信し、受信時にはそのバイト列を Java オブジェクトにデシリアライズします。

ただし、デフォルトでは Spring が使用するシリアライズ方式は JDK シリアライズです。ご存知のとおり、JDK シリアライズには以下の問題があります：

- データサイズが大きい
- セキュリティ上の脆弱性がある
- 読みやすさが低い

### デフォルト変換器のテスト

メッセージ送信コードを変更し、Map オブジェクトを送信します：

```java
@Test
public void testSendMap() throws InterruptedException {
    // 準備メッセージ
    Map<String,Object> msg = new HashMap<>();
    msg.put("name", "Jack");
    msg.put("age", 21);
    // 送信
    rabbitTemplate.convertAndSend("simple.queue","", msg);
}
```

送信された情報：

![image-20230812232356822.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230812232356822.png)

### JSON変換器の設定

明らかに JDK シリアライズは適切ではありません。メッセージ本体のサイズを小さくし、可読性を高めるため、JSON 形式をシリアライズ・デシリアライズに用います。

publisher と consumer の2つのサービスの両方に依存関係を追加します：

```xml
<dependency>
    <groupId>com.fasterxml.jackson.dataformat</groupId>
    <artifactId>jackson-dataformat-xml</artifactId>
    <version>2.9.10</version>
</dependency>
```

メッセージ変換器を設定します。

起動クラスに Bean を追加するだけです：

```java
@Bean
public MessageConverter jsonMessageConverter(){
    return new Jackson2JsonMessageConverter();
}
```