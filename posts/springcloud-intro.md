---
title: 'SpringCloud初识'
published: 2023-08-10
updated: 2023-08-10
description: '微服务架构通过将系统拆分为独立服务，降低了耦合度，提升了灵活性。SpringCloud是流行的微服务框架，集成了服务注册、远程调用、监控和配置管理等功能。Eureka和Nacos是主要的服务注册中心，提供服务发现和负载均衡。Feign简化了远程调用的实现，而Spring Cloud Gateway提供了统一的API路由管理，具备权限控制和限流等功能。配置管理和跨域问题的解决方案也被详细讨论。'
permalink: 'springcloud-intro'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/2ca674b7-fd5a-4c62-b399-84366a656b7c/2421860-20230810154224677-1233062441.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=e50a86760d6d178d6c1611b55c2bf89235c59729bc50590efad41af576ab4386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['springCloud', 'java']
category: 'middle-side'
draft: false
---

# 认识微服务


## 单体架构


将业务的所有功能集中在一个项目中开发，打成一个包部署。


**优点：**

- 架构简单
- 部署成本低

**缺点：**

- 耦合度高（维护困难、升级困难）

## 分布式架构


根据业务功能对系统做拆分，每个业务功能模块作为独立项目开发，称为一个服务。


**优点：**

- 降低服务耦合
- 有利于服务升级和拓展

**缺点：**

- 服务调用关系错综复杂

分布式架构虽然降低了服务耦合，但是服务拆分时也有很多问题需要思考：

- 服务拆分的粒度如何界定？
- 服务之间如何调用？
- 服务的调用关系如何管理？

人们需要制定一套行之有效的标准来约束分布式架构。


## 微服务


微服务的架构特征：

- 单一职责：微服务拆分粒度更小，每一个服务都对应唯一的业务能力，做到单一职责
- 自治：团队独立、技术独立、数据独立，独立部署和交付
- 面向服务：服务提供统一标准的接口，与语言和技术无关
- 隔离性强：服务调用做好隔离、容错、降级，避免出现级联问题

微服务的上述特性其实是在给分布式架构制定一个标准，进一步降低服务之间的耦合度，提供服务的独立性和灵活性。做到高内聚，低耦合。


因此，可以认为**微服务**是一种经过良好架构设计的**分布式架构方案** 。


## `SpringCloud`


`SpringCloud`是目前国内使用最广泛的微服务框架。官网地址：[https://spring.io/projects/spring-cloud。](https://spring.io/projects/spring-cloud%E3%80%82)


`SpringCloud`集成了各种微服务功能组件，并基于`SpringBoot`实现了这些组件的自动装配，从而提供了良好的开箱即用体验。


组件包括：

- 服务注册发现：`Eureka`、`Nacos`、`Consul`
- 服务远程调用：`OpenFeign`、`Dubbo`
- 服务链路监控：`Zipkin`、`Sleuth`
- 统一配置管理：`SpringCloudConfig`、`Nacos`
- 统一网关路由：`SpringCloudGateway`、`Zuul`
- 流控、降级、保护：`Hystix`、`Sentinel`

# 服务的拆分和远程调用


服务拆分原则：

- 不同微服务，不要重复开发相同业务
- 微服务数据独立，不要访问其它微服务的数据库
- 微服务可以将自己的业务暴露为接口，供其它微服务调用

## 服务间远程调用


通过调用`RestTemplate`来实现

1. 在启动项中注册RestTamplate实例

    ```java
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    ```

2. 服务中调用

    ```java
    @Autowired
    private RestTemplate restTemplate;
    
    public Order queryOrderById(Long orderId) {
        // 1.查询订单
        Order order = orderMapper.findById(orderId);
        // 2. 远程查询User
        String url = "<http://localhost:8081/user/>" + order.getUserId();
        User user = restTemplate.getForObject(url, User.class);
        // 3. 存入order
        order.setUser(user);
        // 4.返回
        return order;
    }
    ```


## 提供者与消费者


在服务调用关系中，会有两个不同的角色：


**服务提供者**：一次业务中，被其它微服务调用的服务。（提供接口给其它微服务）


**服务消费者**：一次业务中，调用其它微服务的服务。（调用其它微服务提供的接口）


# Eureka注册中心


## Eureka结构和作用


注册中心用来解决消费者远端调用存在部署了多个实例的服务提供者。


![image-20230810013953728.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810013953728.png)

- 问题1：order-service如何得知user-service实例地址？
    - user-service服务实例启动后，将自己的信息注册到eureka-server（Eureka服务端）。这个叫服务注册
    - eureka-server保存服务名称到服务实例地址列表的映射关系
    - order-service根据服务名称，拉取实例地址列表。这个叫服务发现或服务拉取
- 问题2：order-service如何从多个user-service实例中选择具体的实例？
    - order-service从实例列表中利用负载均衡算法选中一个实例地址
    - 向该实例地址发起远程调用
- 问题3：order-service如何得知某个user-service实例是否依然健康，是不是已经宕机？
    - user-service会每隔一段时间（默认30秒）向eureka-server发起请求，报告自己状态，称为心跳
    - 当超过一定时间没有发送心跳时，eureka-server会认为微服务实例故障，将该实例从服务列表中剔除
    - order-service拉取服务时，就能将故障实例排除了

## 搭建Eureka-Server

1. 创建euraka-server服务

在父工程下创建子模块，maven项目

1. 导入eureka依赖 - server

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

1. 编写启动类

添加`@EnableEurekaServer`注解，开启Eureka注册中心功能


```java
@SpringBootApplication
@EnableEurekaServer
public class EurekaApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaApplication.class, args);
    }
}
```

1. 编写配置文件

```yaml
server:
  port: 10086
spring:
  application:
    name: eureka-server
eureka:
  client:
    service-url:
      defaultZone: <http://127.0.0.1:10086/eureka>
```

1. 启动服务

访问设置的Eureka服务路径


![image-20230810022710687.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810022710687.png)


## 服务注册

1. 依赖导入 - client

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

1. 配置文件

```yaml
spring:
  application:
    name: userservice
eureka:
  client:
    service-url:
      defaultZone: <http://127.0.0.1:10086/eureka>
```

1. 启动多个服务实例

SpringBoot中复制启动配置，VM options中配置`-Dserver.port=8082`


## 服务发现


作为消费者的order-service前两步与提供者一致。

1. 服务拉取与负载均衡

负载均衡：在`restTemplate`的Bean中添加`@LoadBalanced`注解即可


```java
@Bean
@LoadBalanced
public RestTemplate restTemplate(){
    return new RestTemplate();
}
```


获取服务：


```java
public Order queryOrderById(Long orderId) {
    // 1.查询订单
    Order order = orderMapper.findById(orderId);
    // 2. 远程查询User
//        String url = "<http://localhost:8081/user/>" + order.getUserId();
    String url = "<http://userservice/user/>" + order.getUserId();
    User user = restTemplate.getForObject(url, User.class);
    // 3. 存入order
    order.setUser(user);
    // 4.返回
    return order;
}
```


spring会自动帮助我们从eureka-server端，根据`userservice`这个服务名称，获取实例列表，而后完成负载均衡。


## Ribbon负载均衡


### 负载均衡原理


`SpringCloud`底层其实是利用了一个名为Ribbon的组件，来实现负载均衡功能的。


![image-20230810023502680.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810023502680.png)


### SpringCloud实现


`SpringCloudRibbon`的底层采用了一个拦截器，拦截了`RestTemplate`发出的请求，对地址做了修改。


基本流程如下：

- 拦截我们的`RestTemplate`请求http://userservice/user/1
- `RibbonLoadBalancerClient`会从请求`url`中获取服务名称，也就是user-service
- `DynamicServerListLoadBalancer`根据user-service到eureka拉取服务列表
- eureka返回列表，localhost:8081、localhost:8082
- `IRule`利用内置负载均衡规则，从列表中选择一个，例如localhost:8081
- `RibbonLoadBalancerClient`修改请求地址，用localhost:8081替代`userservice`，得到http://localhost:8081/user/1，发起真实请求

![image-20230810023941647.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810023941647.png)


### 负载均衡策略


负载均衡的规则都定义在IRule接口中，而IRule有很多不同的实现类。


| **内置负载均衡规则类**             | **规则描述**                                                                                                                                                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RoundRobinRule            | 简单轮询服务列表来选择服务器。它是Ribbon**默认**的负载均衡规则。                                                                                                                                                                                                                    |
| AvailabilityFilteringRule | 对以下两种服务器进行忽略：   （1）在默认情况下，这台服务器如果3次连接失败，这台服务器就会被设置为“短路”状态。短路状态将持续30秒，如果再次连接失败，短路的持续时间就会几何级地增加。  （2）并发数过高的服务器。如果一个服务器的并发连接数过高，配置了AvailabilityFilteringRule规则的客户端也会将其忽略。并发连接数的上限，可以由客户端的<clientName>.<clientConfigNameSpace>.ActiveConnectionsLimit属性进行配置。 |
| WeightedResponseTimeRule  | 为每一个服务器赋予一个权重值。服务器响应时间越长，这个服务器的权重就越小。这个规则会随机选择服务器，这个权重值会影响服务器的选择。                                                                                                                                                                                        |
| **ZoneAvoidanceRule**     | 以区域可用的服务器为基础进行服务器的选择。使用Zone对服务器进行分类，这个Zone可以理解为一个机房、一个机架等。而后再对Zone内的多个服务做轮询。                                                                                                                                                                             |
| BestAvailableRule         | 忽略那些短路的服务器，并选择并发数较低的服务器。                                                                                                                                                                                                                                 |
| RandomRule                | 随机选择一个可用的服务器。                                                                                                                                                                                                                                            |
| RetryRule                 | 重试机制的选择逻辑                                                                                                                                                                                                                                                |


### 自定义负载均衡策略


通过定义IRule实现可以修改负载均衡规则，有两种方式：

1. 代码方式：在order-service中的`OrderApplication`类中，定义一个新的IRule：

```java
@Bean
public IRule randomRule(){
    return new RandomRule();
}
```

1. 配置文件方式：在order-service的application.yml文件中，添加新的配置也可以修改规则：

```yaml
userservice: # 给某个微服务配置负载均衡规则，这里是userservice服务
  ribbon:
    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule # 负载均衡规则
```


### 饥饿加载


Ribbon默认是采用懒加载，即第一次访问时才会去创建LoadBalanceClient，请求时间会很长。


而饥饿加载则会在项目启动时创建，降低第一次访问的耗时，通过下面配置开启饥饿加载：


```yaml
ribbon:
  eager-load:
    enabled: true
    clients: userservice
```


# Nacos注册中心


[Nacos](https://nacos.io/)是阿里巴巴的产品，现在是[SpringCloud](https://spring.io/projects/spring-cloud)中的一个组件。相比[Eureka](https://github.com/Netflix/eureka)功能更加丰富，在国内受欢迎程度较高。


参考官方文档[Nacos 快速开始](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html)安装即可


Nacos是SpringCloudAlibaba的组件，而SpringCloudAlibaba也遵循SpringCloud中定义的服务注册、服务发现规范。因此使用Nacos和使用Eureka对于微服务来说，并没有太大区别。


主要差异在于：

- 依赖不同
- 服务地址不同

## 服务注册到Nacos


### 引入依赖


在cloud-demo父工程的pom文件中的`<dependencyManagement>`中引入SpringCloudAlibaba的依赖：


```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-alibaba-dependencies</artifactId>
    <version>2.2.6.RELEASE</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
```


然后在user-service和order-service中的pom文件中引入nacos-discovery依赖：


```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```


### 配置nacos地址


在user-service和order-service的application.yml中添加nacos地址：


```yaml
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
```


### 重启


重启微服务后，登录nacos管理页面，可以看到微服务信息


## 服务分级存储模型


一个**服务**可以有多个**实例**，假如这些实例分布于全国各地的不同机房，Nacos就将同一机房内的实例 划分为一个**集群**。


微服务互相访问时，应该尽可能访问同集群实例，因为本地访问速度更快。当本集群内不可用时，才访问其它集群。

- 配置

修改application.yml文件，添加集群配置：


```yaml
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: HZ # 集群名称
```


Nacos中提供了一个`NacosRule`的实现，可以优先从同集群中挑选实例。


```yaml
userservice:
  ribbon:
    NFLoadBalancerRuleClassName: com.alibaba.cloud.nacos.ribbon.NacosRule # 负载均衡规则
```

- 权重配置

实际部署中会出现这样的场景：


服务器设备性能有差异，部分实例所在机器性能较好，另一些较差，我们希望性能好的机器承担更多的用户请求。


但默认情况下`NacosRule`是同集群内随机挑选，不会考虑机器的性能问题。


因此，Nacos提供了权重配置来控制访问频率，权重越大则访问频率越高。

- 环境隔离

    Nacos提供了namespace来实现环境隔离功能。

    - nacos中可以有多个namespace
    - namespace下可以有group、service等
    - 不同namespace之间相互隔离，例如不同namespace的服务互相不可见
- 服务实例

    Nacos的服务实例分为两种l类型：

    - 临时实例：如果实例宕机超过一定时间，会从服务列表剔除，默认的类型。
    - 非临时实例：如果实例宕机，不会从服务列表剔除，也可以叫永久实例。

    配置一个服务实例为永久实例：


    ```yaml
    spring:
      cloud:
        nacos:
          discovery:
            ephemeral: false # 设置为非临时实例
    ```


## Nacos和Eureka区别


Nacos和Eureka整体结构类似，服务注册、服务拉取、心跳等待，但是也存在一些差异

- Nacos与eureka的共同点
    - 都支持服务注册和服务拉取
    - 都支持服务提供者心跳方式做健康检测
- Nacos与Eureka的区别
    - Nacos支持服务端主动检测提供者状态：临时实例采用心跳模式，非临时实例采用主动检测模式
    - 临时实例心跳不正常会被剔除，非临时实例则不会被剔除
    - Nacos支持服务列表变更的消息推送模式，服务列表更新更及时
    - Nacos集群默认采用AP方式，当集群中存在非临时实例时，采用CP模式；Eureka采用AP方式

# Nacos配置管理


当微服务部署的实例越来越多，达到数十、数百时，逐个修改微服务配置就会让人抓狂，而且很容易出错。我们需要一种统一配置管理方案，可以集中管理所有实例的配置。


Nacos一方面可以将配置集中管理，另一方可以在配置变更时，及时通知微服务，实现配置的热更新。


## 从微服务拉取配置


微服务要拉取nacos中管理的配置，并且与本地的application.yml配置合并，才能完成项目启动。


但如果尚未读取application.yml，又如何得知nacos地址呢？


因此spring引入了一种新的配置文件：bootstrap.yaml文件，会在application.yml之前被读取

1. 导入nacos-config依赖

```xml
<!--nacos配置管理依赖-->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```

1. 添加bootstrap.yml

```yaml
spring:
  application:
    name: userservice # 服务名称
  profiles:
    active: dev #开发环境，这里是dev
  cloud:
    nacos:
      server-addr: localhost:8848 # Nacos地址
      config:
        file-extension: yaml # 文件后缀名
```


这里会根据spring.cloud.nacos.server-addr获取nacos地址，再根据


`${spring.application.name}-${spring.profiles.active}.${spring.cloud.nacos.config.file-extension}`作为文件id，来读取配置。

1. 读取nacos配置

```java
@Value("${pattern.dateformat}")
private String dateformat;

@GetMapping("now")
public String now(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern(dateformat));
}
```


## 配置热更新


修改nacos中的配置后，微服务中无需重启即可让配置生效，也就是**配置热更新**。

- 方法一：添加注解`@RefreshScope`
- 方法二

    使用`@ConfigurationProperties`注解代替`@Value`注解。

    1. 在user-service服务中，添加一个类，读取`patterrn.dateformat`属性：

    ```java
    package cn.itcast.user.config;
    
    import lombok.Data;
    import org.springframework.boot.context.properties.ConfigurationProperties;
    import org.springframework.stereotype.Component;
    
    @Component
    @Data
    @ConfigurationProperties(prefix = "pattern")
    public class PatternProperties {
        private String dateformat;
    }
    ```

    1. 在`UserController`中使用这个类代替@Value：

    ```java
    @Autowired
    private PatternProperties patternProperties;
    
    @GetMapping("now")
    public String now(){
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(patternProperties.getDateformat()));
    }
    ```


## 配置共享


其实微服务启动时，会去nacos读取多个配置文件，例如：

- `[spring.application.name]-[spring.profiles.active].yaml`，例如：userservice-dev.yaml
- `[spring.application.name].yaml`，例如：userservice.yaml

而`[spring.application.name].yaml`不包含环境，因此可以被多个环境共享。


**配置共享优先级**：


当nacos、服务本地同时出现相同属性时，优先级有高低之分：


![image-20230810125713022.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810125713022.png)


## Nacos集群


通过Nginx代理多个Nacos服务器


nacos的conf中配置`cluster.conf`，其中添加Nacos集群地址。


# Feign远程调用


RestTemplate发起远程调用的代码存在下面的问题：

- 代码可读性差，编程体验不统一
- 参数复杂URL难以维护

Feign是一个声明式的http客户端，其作用就是帮助我们优雅的实现http请求的发送，解决上面提到的问题。


## Feign代替RestTemplate

1. 引入依赖

    ```xml
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-openfeign</artifactId>
    </dependency>
    ```

2. 添加注解

    在启动项添加`@EnableFeignClients`注解

3. 编写Feign客户端

    在服务中新建一个接口：


    ```java
    @FeignClient("userservice")
    public interface UserClient {
        @GetMapping("/user/{id}")
        User findById(@PathVariable("id") Long id);
    }
    ```


    这个客户端主要是基于SpringMVC的注解来声明远程调用的信息，比如：

    - 服务名称：userservice
    - 请求方式：GET
    - 请求路径：/user/{id}
    - 请求参数：Long id
    - 返回值类型：User

    这样，Feign就可以帮助我们发送http请求，无需自己使用RestTemplate来发送了。

4. 调用

    在服务类中调用方法：


    ```java
    @Autowired
    private UserClient userClient;
    
    public Order queryOrderById(Long orderId) {
        // 1.查询订单
        Order order = orderMapper.findById(orderId);
        // 2. 远程查询User
        User user = userClient.findById(order.getUserId());
        // 3. 存入order
        order.setUser(user);
        // 4.返回
        return order;
    }
    ```


## 自定义配置


Feign可以支持很多的自定义配置，如下表所示：


| 类型                     | 作用       | 说明                                |
| ---------------------- | -------- | --------------------------------- |
| **feign.Logger.Level** | 修改日志级别   | 包含四种不同的级别：NONE、BASIC、HEADERS、FULL |
| feign.codec.Decoder    | 响应结果的解析器 | http远程调用的结果做解析，例如解析json字符串为java对象 |
| feign.codec.Encoder    | 请求参数编码   | 将请求参数编码，便于通过http请求发送              |
| feign. Contract        | 支持的注解格式  | 默认是SpringMVC的注解                   |
| feign. Retryer         | 失败重试机制   | 请求失败的重试机制，默认是没有，不过会使用Ribbon的重试    |


一般情况下，默认值就能满足我们使用，如果要自定义时，只需要创建自定义的@Bean覆盖默认Bean即可。


### 通过配置文件自定义


基于配置文件修改feign的日志级别可以针对单个服务：


```yaml
feign:
  client:
    config:
      userservice: # 针对某个微服务的配置
        loggerLevel: FULL #  日志级别
```


也可以针对所有服务：


```yaml
feign:
  client:
    config:
      default: # 这里用default就是全局配置，如果是写服务名称，则是针对某个微服务的配置
        loggerLevel: FULL #  日志级别
```


而日志的级别分为四种：

- NONE：不记录任何日志信息，这是默认值。
- BASIC：仅记录请求的方法，URL以及响应状态码和执行时间
- HEADERS：在BASIC的基础上，额外记录了请求和响应的头信息
- FULL：记录所有请求和响应的明细，包括头信息、请求体、元数据。

### 代码方式


也可以基于Java代码来修改日志级别，先声明一个类，然后声明一个Logger.Level的对象：


```java
public class DefaultFeignConfiguration  {
    @Bean
    public Logger.Level feignLogLevel(){
        return Logger.Level.BASIC; // 日志级别为BASIC
    }
}
```


如果要**全局生效**，将其放到启动类的@EnableFeignClients这个注解中：


```java
@EnableFeignClients(defaultConfiguration = DefaultFeignConfiguration .class)
```


如果是**局部生效**，则把它放到对应的@FeignClient这个注解中：


```java
@FeignClient(value = "userservice", configuration = DefaultFeignConfiguration .class)
```


## Feign使用优化


Feign底层发起http请求，依赖于其它的框架。其底层客户端实现包括：

- URLConnection：默认实现，不支持连接池
- Apache HttpClient ：支持连接池
- OKHttp：支持连接池

因此提高Feign的性能主要手段就是使用**连接池**代替默认的URLConnection。


这里我们用Apache的HttpClient来演示。

1. 引入依赖

在order-service的pom文件中引入Apache的HttpClient依赖：


```xml
<!--httpClient的依赖 -->
<dependency>
    <groupId>io.github.openfeign</groupId>
    <artifactId>feign-httpclient</artifactId>
</dependency>
```

1. 配置连接池

在order-service的application.yml中添加配置：


```yaml
feign:
  client:
    config:
      default: # default全局的配置
        loggerLevel: BASIC # 日志级别，BASIC就是基本的请求和响应信息
  httpclient:
    enabled: true # 开启feign对HttpClient的支持
    max-connections: 200 # 最大的连接数
    max-connections-per-route: 50 # 每个路径的最大连接数
```


总结，Feign的优化：

1. _日志级别_ 尽量用basic
2. 使用HttpClient或OKHttp代替URLConnection
    - 引入feign-httpClient依赖
    - 配置文件开启httpClient功能，设置连接池参数

## 最佳实现


Feign的客户端与服务提供者的controller代码非常相似，简化这种重复的代码编写方法如下


### 继承方式


一样的代码可以通过继承来共享：

1. 定义一个API接口，利用定义方法，并基于SpringMVC注解做声明。
2. Feign客户端和Controller都集成改接口

优点：

- 简单
- 实现了代码共享

缺点：

- 服务提供方、服务消费方紧耦合
- 参数列表中的注解映射并不会继承，因此Controller中必须再次声明方法、参数列表、注解

### 抽取方式


将Feign的Client抽取为独立模块，并且把接口有关的POJO、默认的Feign配置都放到这个模块中，提供给所有消费者使用。


例如，将UserClient、User、Feign的默认配置都抽取到一个feign-api包中，所有微服务引用该依赖包，即可直接使用。


### 实现基于抽取的最佳实践

1. 抽取

    创建模块feign-api


    添加openfeign依赖


    复制服务中的方法

2. 在order-service中使用feign-api

    引入依赖：


    ```xml
    <dependency>
        <groupId>cn.itcast.demo</groupId>
        <artifactId>feign-api</artifactId>
        <version>1.0</version>
    </dependency>
    ```

3. 扫包问题
    - 方法一：

        指定Feign应该扫描的包：


        ```java
        @EnableFeignClients(basePackages = "cn.itcast.feign.clients")
        ```

    - 方式二：

        指定需要加载的Client接口：


        ```java
        @EnableFeignClients(clients = {UserClient.class})
        ```


# Gateway服务网关


Spring Cloud Gateway 是 Spring Cloud 的一个全新项目，该项目是基于 Spring 5.0，Spring Boot 2.0 和 Project Reactor 等响应式编程和事件流技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的 API 路由管理方式。


## 为什么需要网关


Gateway网关是我们服务的守门神，所有微服务的统一入口。


网关的**核心功能特性**：

- **权限控制**：网关作为微服务入口，需要校验用户是是否有请求资格，如果没有则进行拦截。
- **路由和负载均衡**：一切请求都必须先经过gateway，但网关不处理业务，而是根据某种规则，把请求转发到某个微服务，这个过程叫做路由。当然路由的目标服务有多个时，还需要做负载均衡。
- **限流**：当请求流量过高时，在网关中按照下流的微服务能够接受的速度来放行请求，避免服务压力过大。

在SpringCloud中网关的实现包括两种：

- gateway
- zuul

Zuul是基于Servlet的实现，属于阻塞式编程。而SpringCloudGateway则是基于Spring5中提供的WebFlux，属于响应式编程的实现，具备更好的性能。


## 快速入门

1. 创建SpringBoot工程gateway，引入网关依赖

    ```xml
    <!--网关-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-gateway</artifactId>
    </dependency>
    <!--nacos服务发现依赖-->
    <dependency>
        <groupId>com.alibaba.cloud</groupId>
        <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
    </dependency>
    ```

2. 编写启动类

    ```java
    @SpringBootApplication
    public class GatewayApplication {
    
    	public static void main(String[] args) {
    		SpringApplication.run(GatewayApplication.class, args);
    	}
    }
    ```

3. 编写基础配置和路由规则

    路由配置包括：

    1. 路由id：路由的唯一标示
    2. 路由目标（uri）：路由的目标地址，http代表固定地址，lb代表根据服务名负载均衡
    3. 路由断言（predicates）：判断路由的规则，
    4. 路由过滤器（filters）：对请求或响应做处理

    ```yaml
    server:
      port: 10010 # 网关端口
    spring:
      application:
        name: gateway # 服务名称
      cloud:
        nacos:
          server-addr: localhost:8848 # nacos地址
        gateway:
          routes: # 网关路由配置
            - id: user-service # 路由id，自定义，只要唯一即可
              # uri: <http://127.0.0.1:8081> # 路由的目标地址 http就是固定地址
              uri: lb://userservice # 路由的目标地址 lb就是负载均衡，后面跟服务名称
              predicates: # 路由断言，也就是判断请求是否符合路由规则的条件
                - Path=/user/** # 这个是按照路径匹配，只要以/user/开头就符合要求
    ```

4. 启动网关服务进行测试

    重启网关，访问http://localhost:10010/user/1时，符合`/user/**`规则，请求转发到uri：[http://userservice/user/1，得到了结果：](http://userservice/user/1%EF%BC%8C%E5%BE%97%E5%88%B0%E4%BA%86%E7%BB%93%E6%9E%9C%EF%BC%9A)


![image-20230810144857166.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230810144857166.png)


## 断言工厂


我们在配置文件中写的断言规则只是字符串，这些字符串会被Predicate Factory读取并处理，转变为路由判断的条件


例如Path=/user/**是按照路径匹配，这个规则是由`org.springframework.cloud.gateway.handler.predicate.PathRoutePredicateFactory`类来处理的，像这样的断言工厂在`SpringCloudGateway`还有十几个:


| **名称**     | **说明**            | **示例**                                                                                                   |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| After      | 是某个时间点后的请求        | -  After=2037-01-20T17:42:47.789-07:00[America/Denver]                                                   |
| Before     | 是某个时间点之前的请求       | -  Before=2031-04-13T15:14:47.433+08:00[Asia/Shanghai]                                                   |
| Between    | 是某两个时间点之前的请求      | -  Between=2037-01-20T17:42:47.789-07:00[America/Denver],  2037-01-21T17:42:47.789-07:00[America/Denver] |
| Cookie     | 请求必须包含某些cookie    | - Cookie=chocolate, ch.p                                                                                 |
| Header     | 请求必须包含某些header    | - Header=X-Request-Id, \d+                                                                               |
| Host       | 请求必须是访问某个host（域名） | -  Host=**.somehost.org,**.anotherhost.org                                                               |
| Method     | 请求方式必须是指定方式       | - Method=GET,POST                                                                                        |
| Path       | 请求路径必须符合指定规则      | - Path=/red/{segment},/blue/**                                                                           |
| Query      | 请求参数必须包含指定参数      | - Query=name, Jack或者-  Query=name                                                                        |
| RemoteAddr | 请求者的ip必须是指定范围     | - RemoteAddr=192.168.1.1/24                                                                              |
| Weight     | 权重处理              |                                                                                                          |


## 过滤器工厂


GatewayFilter是网关中提供的一种过滤器，可以对进入网关的请求和微服务返回的响应做处理

- 对路由的请求或响应做加工处理，比如添加请求头
- 配置在路由下的过滤器只对当前路由的请求生效

### 路由过滤器的种类


Spring提供了31种不同的路由过滤器工厂。例如：


| **名称**               | **说明**         |
| -------------------- | -------------- |
| AddRequestHeader     | 给当前请求添加一个请求头   |
| RemoveRequestHeader  | 移除请求中的一个请求头    |
| AddResponseHeader    | 给响应结果中添加一个响应头  |
| RemoveResponseHeader | 从响应结果中移除有一个响应头 |
| RequestRateLimiter   | 限制请求的流量        |


### 请求头过滤器


下面我们以AddRequestHeader 为例来讲解。


**需求**：给所有进入userservice的请求添加一个请求头：Truth=dreaife is freaking awesome!


只需要修改gateway服务的application.yml文件，添加路由过滤即可：


```yaml
spring:
  cloud:
    gateway:
      routes:
      - id: user-service
        uri: lb://userservice
        predicates:
        - Path=/user/**
        filters: # 过滤器
        - AddRequestHeader=Truth, dreaife is freaking awesome! # 添加请求头
```


当前过滤器写在userservice路由下，因此仅仅对访问userservice的请求有效。


### 默认过滤器


如果要对所有的路由都生效，则可以将过滤器工厂写到default下。格式如下：


```yaml
spring:
  cloud:
    gateway:
      routes:
      - id: user-service
        uri: lb://userservice
        predicates:
        - Path=/user/**
      default-filters: # 默认过滤项
      - AddRequestHeader=Truth, dreaife is freaking awesome!
```


## 全局过滤器


### 全局过滤器作用


全局过滤器的作用也是处理一切进入网关的请求和微服务响应，与GatewayFilter的作用一样。区别在于GatewayFilter通过配置定义，处理逻辑是固定的；而GlobalFilter的逻辑需要自己写代码实现。


定义方式是实现GlobalFilter接口。


```java
public interface GlobalFilter {
    /**
     *  处理当前请求，有必要的话通过{@link GatewayFilterChain}将请求交给下一个过滤器处理
     *
     * @param exchange 请求上下文，里面可以获取Request、Response等信息
     * @param chain 用来把请求委托给下一个过滤器
     * @return {@code Mono<Void>} 返回标示当前过滤器业务结束
     */
    Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain);
}
```


在filter中编写自定义逻辑，可以实现下列功能：

- 登录状态判断
- 权限校验
- 请求限流等

### 自定义全局过滤器


需求：定义全局过滤器，拦截请求，判断请求的参数是否满足下面条件：

- 参数中是否有authorization，
- authorization参数值是否为admin

如果同时满足则放行，否则拦截


```java
package cn.itcast.gateway.filters;

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Order(-1)
@Component
public class AuthorizeFilter implements GlobalFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        // 1.获取请求参数
        MultiValueMap<String, String> params = exchange.getRequest().getQueryParams();
        // 2.获取authorization参数
        String auth = params.getFirst("authorization");
        // 3.校验
        if ("admin".equals(auth)) {
            // 放行
            return chain.filter(exchange);
        }
        // 4.拦截
        // 4.1.禁止访问，设置状态码
        exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN);
        // 4.2.结束处理
        return exchange.getResponse().setComplete();
    }
}
```


### 过滤器执行顺序


请求进入网关会碰到三类过滤器：当前路由的过滤器、DefaultFilter、GlobalFilter


请求路由后，会将当前路由过滤器和DefaultFilter、GlobalFilter，合并到一个过滤器链（集合）中，排序后依次执行每个过滤器


排序的规则是什么呢？

- 每一个过滤器都必须指定一个int类型的order值，**order值越小，优先级越高，执行顺序越靠前**。
- GlobalFilter通过实现Ordered接口，或者添加@Order注解来指定order值，由我们自己指定
- 路由过滤器和defaultFilter的order由Spring指定，默认是按照声明顺序从1递增。
- 当过滤器的order值一样时，会按照 defaultFilter > 路由过滤器 > GlobalFilter的顺序执行。

## 跨域问题


跨域：域名不一致就是跨域，主要包括：

- 域名不同： [www.taobao.com](http://www.taobao.com/) 和 [www.taobao.org](http://www.taobao.org/) 和 [www.jd.com](http://www.jd.com/) 和 [miaosha.jd.com](http://miaosha.jd.com/)
- 域名相同，端口不同：localhost:8080和localhost8081

跨域问题：浏览器禁止请求的发起者与服务端发生跨域ajax请求，请求被浏览器拦截的问题


解决方案：CORS


在gateway服务的application.yml文件中，添加下面的配置：


```yaml
spring:
  cloud:
    gateway:
      globalcors: # 全局的跨域处理
        add-to-simple-url-handler-mapping: true # 解决options请求被拦截问题
        corsConfigurations:
          '[/**]':
            allowedOrigins: # 允许哪些网站的跨域请求
              - "<http://localhost:8090>"
            allowedMethods: # 允许的跨域ajax的请求方式
              - "GET"
              - "POST"
              - "DELETE"
              - "PUT"
              - "OPTIONS"
            allowedHeaders: "*" # 允许在请求中携带的头信息
            allowCredentials: true # 是否允许携带cookie
            maxAge: 360000 # 这次跨域检测的有效期
```
