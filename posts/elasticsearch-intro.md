---
title: 'elasticsearch初识'
published: 2024-01-03
updated: 2023-08-13
description: 'elasticsearch是一款强大的开源搜索引擎，主要用于快速搜索和分析海量数据。它基于Lucene，并与Kibana、Logstash等组成ELK技术栈。文中介绍了正向索引与倒排索引的概念，倒排索引能显著提高模糊查询的效率。此外，elasticsearch的文档、索引、映射等概念与MySQL有相似之处。文中还详细描述了elasticsearch的安装、索引库操作、文档操作、REST API使用、数据同步和集群管理等内容，强调了其在海量数据处理和实时搜索中的优势。'
permalink: 'elasticsearch-intro'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/463265ba-7427-4230-a975-e664d0928282/2421860-20230813210602593-194327638.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DNAGBRM%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T073411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE0vgzlQNnEBFzki8QxtRbByU425%2Bb1eZ4DAmR1R0gfgIhAOfalBB%2BYC7xzdxKheF%2BM%2F7nFITIBJiamVzGD8jmZYwtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw5UmJG0w26p%2Fro6Qq3AMKnsrukopqrOxumn0SuV3QywcjdT3nHwsb%2FLQ9XvNgF7fIz5YsOyr4l5hERbGe3SwZjjnxPCKWWSR7y2tl9ofdViCjgHrzfs%2FFfVWnSP94Et3I5edTTllUX5bi7jgXbwJo9UnPgi5HyhBc9FQRoE2TbP%2FQNujMAmUHgWYlkURI42rGDbZbEWPc1ktnIpt3jOyURp4HeEAqP2vqm9Z4VqlL0xcMK89GZKWp1cUpKWbK8bk5n%2Bjrl8F1KQ%2F6EkJKBMeN0xlG8pEY7WehwZy%2ByWH6KsHd%2F24Iq1kUOtGznIRcJGzs9miCE9SCZy7pzb22BqD%2B6RWd0lhPNG9bE25Pq%2Bp91YVVLpc%2B%2BZ8C7Ee8POJEAFx7KaqDSi0%2BIqwRmyal1R1KXp2xkwsRJU%2FwFY2X41sjZnhnFHqGbredYg0us8kcSibeXPagDaFGolwS63ki3rWmr7pbYjIGFOd6wV4OqadwZWGR%2F3usj5XMHUShIGMKXAfcwzWJ6bRyikOhcwFjdybU3QRov577SZocfaO4vjRPsnpyIqunU0rfW9VoR6WfdyQlvCemwEttg%2FwQpLh6zhsz%2FJeICdWG42vwj095qGxNXjdv1TLHIuw68Vl8bWZtRwdGbGrqk4f%2BCKAy4TDNxerMBjqkAQCl9Mk6qBl8gUkMQa2epzGBxSlLtg3ZLtOIYstBfg8KzwvMtoSu2bBhY5A1iQL3%2F8%2B5Cd2V3ztI%2Bj%2FHzL58w0r1IXYFYJuNLHOHJIoYONBgZEthT9TVnfgUYMQcSXomYMAHYkqOgt1gtQ%2Fx8giBkDvuCii1%2FqypVck3WH8%2BT50HSAlKADmpcUxIhheTj%2BMka7oDB6sHcy3aKe2hlVGxHc5xGjCp&X-Amz-Signature=2d8e3497cccd0903f78835a4f41b079141313b3b224b0d8f5b134db69fadc6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['elasticSearch', 'java']
category: 'middle-side'
draft: false
---

# 初识elasticsearch


## 了解ES


### elasticsearch的作用


elasticsearch是一款非常强大的开源搜索引擎，具备非常多强大功能，可以帮助我们从海量数据中快速找到需要的内容


例如：

- 在GitHub搜索代码
- 在电商网站搜索商品
- 在百度搜索答案
- 在打车软件搜索附近的车

### ELK技术栈


elasticsearch结合kibana、Logstash、Beats，也就是elastic stack（ELK）。被广泛应用在日志数据分析、实时监控等领域


而elasticsearch是elastic stack的核心，负责存储、搜索、分析数据。


![image-20230813012450107.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813012450107.png)


### elasticsearch和lucene


elasticsearch底层是基于**lucene**来实现的。


**Lucene**是一个Java语言的搜索引擎类库，是Apache公司的顶级项目，由DougCutting于1999年研发。


**elasticsearch**的发展历史：

- 2004年Shay Banon基于Lucene开发了Compass
- 2010年Shay Banon 重写了Compass，取名为Elasticsearch。

什么是elasticsearch？

- 一个开源的分布式搜索引擎，可以用来实现搜索、日志统计、分析、系统监控等功能

什么是elastic stack（ELK）？

- 是以elasticsearch为核心的技术栈，包括beats、Logstash、kibana、elasticsearch

什么是Lucene？

- 是Apache的开源搜索引擎类库，提供了搜索引擎的核心API

## 倒排索引


倒排索引的概念是基于MySQL这样的正向索引而言的。


### 正向索引


如给表中的id创建索引，如果是根据id查询，那么直接走索引，查询速度非常快。


但如果是基于title做模糊查询，只能是逐行扫描数据，流程如下：

1. 用户搜索数据，条件是title符合`"%手机%"
2. 逐行获取数据，比如id为1的数据
3. 判断数据中的title是否符合用户搜索条件
4. 如果符合则放入结果集，不符合则丢弃。回到步骤1

逐行扫描，也就是全表扫描，随着数据量增加，其查询效率也会越来越低。当数据量达到数百万时，就是一场灾难。


### 倒排索引


倒排索引中有两个非常重要的概念：

- 文档（`Document`）：用来搜索的数据，其中的每一条数据就是一个文档。例如一个网页、一个商品信息
- 词条（`Term`）：对文档数据或用户搜索数据，利用某种算法分词，得到的具备含义的词语就是词条

**创建倒排索引**是对正向索引的一种特殊处理，流程如下：

- 将每一个文档的数据利用算法分词，得到一个个词条
- 创建表，每行数据包括词条、词条所在文档id、位置等信息
- 因为词条唯一性，可以给词条创建索引，例如hash表结构索引

倒排索引的**搜索流程**如下（以搜索"小米手机"为例）：


1）用户输入条件`"小米手机"`进行搜索。


2）对用户输入内容**分词**，得到词条：`小米`、`手机`。


3）拿着词条在倒排索引中查找，可以得到包含词条的文档id：1、2、3。


4）拿着文档id到正向索引中查找具体文档。


虽然要先查询倒排索引，再查询倒排索引，但是无论是词条、还是文档id都建立了索引，查询速度非常快！无需全表扫描。


### 正向和倒排


那么为什么一个叫做正向索引，一个叫做倒排索引呢？

- **正向索引**是最传统的，根据id索引的方式。但根据词条查询时，必须先逐条获取每个文档，然后判断文档中是否包含所需要的词条，是**根据文档找词条的过程**。
- 而**倒排索引**则相反，是先找到用户要搜索的词条，根据词条得到保护词条的文档的id，然后根据id获取文档。是**根据词条找文档的过程**。

**正向索引**：

- 优点：
    - 可以给多个字段创建索引
    - 根据索引字段搜索、排序速度非常快
- 缺点：
    - 根据非索引字段，或者索引字段中的部分词条查找时，只能全表扫描。

**倒排索引**：

- 优点：
    - 根据词条搜索、模糊搜索时，速度非常快
- 缺点：
    - 只能给词条创建索引，而不是字段
    - 无法根据字段做排序

## es的一些概念


elasticsearch中有很多独有的概念，与mysql中略有差别，但也有相似之处。


### 文档和字段


elasticsearch是面向**文档（Document）**存储的，可以是数据库中的一条商品数据，一个订单信息。文档数据会被序列化为json格式后存储在elasticsearch中：


而Json文档中往往包含很多的**字段（Field）**，类似于数据库中的列。


### 索引和映射


**索引（Index）**，就是相同类型的文档的集合。


例如：

- 所有用户文档，就可以组织在一起，称为用户的索引；
- 所有商品的文档，可以组织在一起，称为商品的索引；
- 所有订单的文档，可以组织在一起，称为订单的索引；

因此，我们可以把索引当做是数据库中的表。


数据库的表会有约束信息，用来定义表的结构、字段的名称、类型等信息。因此，索引库中就有**映射（mapping）**，是索引中文档的字段约束信息，类似表的结构约束。


### mysql与elasticsearch


我们统一的把mysql与elasticsearch的概念做一下对比：


| **MySQL** | **Elasticsearch** | **说明**                                                   |
| --------- | ----------------- | -------------------------------------------------------- |
| Table     | Index             | 索引(index)，就是文档的集合，类似数据库的表(table)                         |
| Row       | Document          | 文档（Document），就是一条条的数据，类似数据库中的行（Row），文档都是JSON格式           |
| Column    | Field             | 字段（Field），就是JSON文档中的字段，类似数据库中的列（Column）                  |
| Schema    | Mapping           | Mapping（映射）是索引中文档的约束，例如字段类型约束。类似数据库的表结构（Schema）          |
| SQL       | DSL               | DSL是elasticsearch提供的JSON风格的请求语句，用来操作elasticsearch，实现CRUD |


两者各自有自己的擅长支出：

- Mysql：擅长事务类型操作，可以确保数据的安全和一致性
- Elasticsearch：擅长海量数据的搜索、分析、计算

在企业中，往往是两者结合使用：

- 对安全性要求较高的写操作，使用mysql实现
- 对查询性能要求较高的搜索需求，使用elasticsearch实现
- 两者再基于某种方式，实现数据的同步，保证一致性

## 安装


### 安装es、kibana


```shell
docker run -d \\
	--name es \\
    -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" \\
    -e "discovery.type=single-node" \\
    -v es-data:/usr/share/elasticsearch/data \\
    -v es-plugins:/usr/share/elasticsearch/plugins \\
    --privileged \\
    --network es-net \\
    -p 9200:9200 \\
    -p 9300:9300 \\
elasticsearch:8.8.1

# 端口打不开记得把ssl认证跟密码认证关掉
xpack.security.enabled: false
xpack.security.http.ssl:
  enabled: false
  keystore.path: certs/http.p12

docker run -d \\
--name kibana \\
-e ELASTICSEARCH_HOSTS=http://es:9200 \\
--network=es-net \\
-p 5601:5601  \\
kibana:8.8.1
```


### 安装IK分词器


```shell
docker exec -it es bash

./bin/elasticsearch-plugin install <https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v8.8.1/elasticsearch-analysis-ik-8.8.1.zip>

exit
#重启容器
docker restart elasticsearch
```


IKAnalyzer.cfg.xml配置文件内容添加：


```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE properties SYSTEM "<http://java.sun.com/dtd/properties.dtd>">
<properties>
        <comment>IK Analyzer 扩展配置</comment>
        <!--用户可以在这里配置自己的扩展字典 *** 添加扩展词典-->
        <entry key="ext_dict">ext.dic</entry>
    	<!--用户可以在这里配置自己的扩展停止词字典  *** 添加停用词词典-->
        <entry key="ext_stopwords">stopword.dic</entry>
</properties>
```


在对应文件中修改后重启即可。


分词器的作用是什么？

- 创建倒排索引时对文档分词
- 用户搜索时，对输入的内容分词

IK分词器有几种模式？

- ik_smart：智能切分，粗粒度
- ik_max_word：最细切分，细粒度

IK分词器如何拓展词条？如何停用词条？

- 利用config目录的IkAnalyzer.cfg.xml文件添加拓展词典和停用词典
- 在词典中添加拓展词条或者停用词条

# 索引库操作


索引库就类似数据库表，mapping映射就类似表的结构。


我们要向es中存储数据，必须先创建“库”和“表”。


## mapping映射属性


mapping是对索引库中文档的约束，常见的mapping属性包括：

- type：字段数据类型，常见的简单类型有：
    - 字符串：text（可分词的文本）、keyword（精确值，例如：品牌、国家、ip地址）
    - 数值：long、integer、short、byte、double、float、
    - 布尔：boolean
    - 日期：date
    - 对象：object
- index：是否创建索引，默认为true
- analyzer：使用哪种分词器
- properties：该字段的子字段

## 索引库的CRUD


索引库操作有哪些？

- 创建索引库：PUT /索引库名
- 查询索引库：GET /索引库名
- 删除索引库：DELETE /索引库名
- 添加字段：PUT /索引库名/_mapping

### 创建索引库和映射


**基本语法**：

- 请求方式：PUT
- 请求路径：/索引库名，可以自定义
- 请求参数：mapping映射

格式：


```json
PUT /索引库名称
{
  "mappings": {
    "properties": {
      "字段名":{
        "type": "text",
        "analyzer": "ik_smart"
      },
      "字段名2":{
        "type": "keyword",
        "index": "false"
      },
      "字段名3":{
        "properties": {
          "子字段": {
            "type": "keyword"
          }
        }
      },
      // ...略
    }
  }
}
```


### 查询索引库


**基本语法**：

- 请求方式：GET
- 请求路径：/索引库名
- 请求参数：无

**格式**：


```plain text
GET /索引库名
```


### 修改索引库


倒排索引结构虽然不复杂，但是一旦数据结构改变（比如改变了分词器），就需要重新创建倒排索引，这简直是灾难。因此索引库**一旦创建，无法修改mapping**。


虽然无法修改mapping中已有的字段，但是却允许添加新的字段到mapping中，因为不会对倒排索引产生影响。


**语法说明**：


```json
PUT /索引库名/_mapping
{
  "properties": {
    "新字段名":{
      "type": "integer"
    }
  }
}
```


### 删除索引库


**语法：**

- 请求方式：DELETE
- 请求路径：/索引库名
- 请求参数：无

**格式：**


```plain text
DELETE /索引库名
```


# 文档操作


文档操作有哪些？

- 创建文档：POST /{索引库名}/_doc/文档id { json文档 }
- 查询文档：GET /{索引库名}/_doc/文档id
- 删除文档：DELETE /{索引库名}/_doc/文档id
- 修改文档：
    - 全量修改：PUT /{索引库名}/_doc/文档id { json文档 }
    - 增量修改：POST /{索引库名}/_update/文档id { "doc": {字段}}

## 新建文档


**语法：**


```json
POST /索引库名/_doc/文档id
{
    "字段1": "值1",
    "字段2": "值2",
    "字段3": {
        "子属性1": "值3",
        "子属性2": "值4"
    },
    // ...
}
```


## 查询文档


根据rest风格，新增是post，查询应该是get，不过查询一般都需要条件，这里我们把文档id带上。


**语法：**


```json
GET /{索引库名称}/_doc/{id}
```


## 删除文档


删除使用DELETE请求，同样，需要根据id进行删除：


**语法：**


```plain text
DELETE /{索引库名}/_doc/id值
```


## 修改文档


修改有两种方式：

- 全量修改：直接覆盖原来的文档
- 增量修改：修改文档中的部分字段

### 全量修改


全量修改是覆盖原来的文档，其本质是：

- 根据指定的id删除文档
- 新增一个相同id的文档

**注意**：如果根据id删除时，id不存在，第二步的新增也会执行，也就从修改变成了新增操作了。


**语法：**


```json
PUT /{索引库名}/_doc/文档id
{
    "字段1": "值1",
    "字段2": "值2",
    // ... 略
}
```


### 增量修改


增量修改是只修改指定id匹配的文档中的部分字段。


**语法：**


```json
POST /{索引库名}/_update/文档id
{
    "doc": {
         "字段名": "新的值",
    }
}
```


# RestAPI


ES官方提供了各种不同语言的客户端，用来操作ES。这些客户端的本质就是组装DSL语句，通过http请求发送给ES。


其中的Java Rest Client又包括两种：

- Java Low Level Rest Client
- Java High Level Rest Client

索引库操作的基本步骤：

- 初始化RestHighLevelClient
- 创建XxxIndexRequest。XXX是Create、Get、Delete
- 准备DSL（ Create时需要，其它是无参）
- 发送请求。调用RestHighLevelClient#indices().xxx()方法，xxx是create、exists、delete

## 初始化RestClient


在elasticsearch提供的API中，与elasticsearch一切交互都封装在一个名为RestHighLevelClient的类中，必须先完成这个对象的初始化，建立与elasticsearch的连接。


分为三步：

1. 引入es的RestHighLevelClient依赖：

```xml
<dependency>
    <groupId>org.elasticsearch.client</groupId>
    <artifactId>elasticsearch-rest-high-level-client</artifactId>
</dependency>
```

1. 因为SpringBoot默认的ES版本是7.6.2，所以我们需要覆盖默认的ES版本：

```xml
<properties>
    <java.version>1.8</java.version>
    <elasticsearch.version>7.12.1</elasticsearch.version>
</properties>
```

1. 初始化RestHighLevelClient：

初始化的代码如下：


```java
RestHighLevelClient client = new RestHighLevelClient(RestClient.builder(
        HttpHost.create("<http://127.0.0.1:9200>")
));
```


## 创建索引库


代码分为三步：

- 创建Request对象。因为是创建索引库的操作，因此Request是CreateIndexRequest。
- 添加请求参数，其实就是DSL的JSON参数部分。因为json字符串很长，这里是定义了静态字符串常量MAPPING_TEMPLATE，让代码看起来更加优雅。
- 发送请求，client.indices()方法的返回值是IndicesClient类型，封装了所有与索引库操作有关的方法。

在constants包下，创建一个类，定义mapping映射的JSON字符串常量。


在测试类中，编写单元测试，实现创建索引：


```java
@Test
void createHotelIndex() throws IOException {
    // 1.创建Request对象
    CreateIndexRequest request = new CreateIndexRequest("hotel");
    // 2.准备请求的参数：DSL语句
    request.source(MAPPING_TEMPLATE, XContentType.JSON);
    // 3.发送请求
    client.indices().create(request, RequestOptions.DEFAULT);
}
```


## 删除索引库


删除索引库的DSL语句非常简单：


```json
DELETE /hotel
```


与创建索引库相比：

- 请求方式从PUT变为DELTE
- 请求路径不变
- 无请求参数

所以代码的差异，注意体现在Request对象上。依然是三步走：

- 创建Request对象。这次是DeleteIndexRequest对象
- 准备参数。这里是无参
- 发送请求。改用delete方法

在hotel-demo中的HotelIndexTest测试类中，编写单元测试，实现删除索引：


```java
@Test
void testDeleteHotelIndex() throws IOException {
    // 1.创建Request对象
    DeleteIndexRequest request = new DeleteIndexRequest("hotel");
    // 2.发送请求
    client.indices().delete(request, RequestOptions.DEFAULT);
}
```


## 判断索引库是否存在


判断索引库是否存在，本质就是查询，对应的DSL是：


```json
GET /hotel
```


因此与删除的Java代码流程是类似的。依然是三步走：

- 1）创建Request对象。这次是GetIndexRequest对象
- 2）准备参数。这里是无参
- 3）发送请求。改用exists方法

```java
@Test
void testExistsHotelIndex() throws IOException {
    // 1.创建Request对象
    GetIndexRequest request = new GetIndexRequest("hotel");
    // 2.发送请求
    boolean exists = client.indices().exists(request, RequestOptions.DEFAULT);
    // 3.输出
    System.err.println(exists ? "索引库已经存在！" : "索引库不存在！");
}
```


# RestClient操作文档


JavaRestClient操作elasticsearch的流程基本类似。核心是client.indices()方法来获取索引库的操作对象。


文档操作的基本步骤：

- 初始化RestHighLevelClient
- 创建XxxRequest。XXX是Index、Get、Update、Delete、Bulk
- 准备参数（Index、Update、Bulk时需要）
- 发送请求。调用RestHighLevelClient#.xxx()方法，xxx是index、get、update、delete、bulk
- 解析结果（Get时需要）

## 新增文档


我们要将数据库的酒店数据查询出来，写入elasticsearch中。


定义一个新的类型，与索引库结构吻合：


```java
package cn.itcast.hotel.pojo;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class HotelDoc {
    private Long id;
    private String name;
    private String address;
    private Integer price;
    private Integer score;
    private String brand;
    private String city;
    private String starName;
    private String business;
    private String location;
    private String pic;

    public HotelDoc(Hotel hotel) {
        this.id = hotel.getId();
        this.name = hotel.getName();
        this.address = hotel.getAddress();
        this.price = hotel.getPrice();
        this.score = hotel.getScore();
        this.brand = hotel.getBrand();
        this.city = hotel.getCity();
        this.starName = hotel.getStarName();
        this.business = hotel.getBusiness();
        this.location = hotel.getLatitude() + ", " + hotel.getLongitude();
        this.pic = hotel.getPic();
    }
}
```


新增文档的DSL语句如下：


```json
POST /{索引库名}/_doc/1
{
    "name": "Jack",
    "age": 21
}
```


与创建索引库类似，同样是三步走：

- 创建Request对象
- 准备请求参数，也就是DSL中的JSON文档
- 发送请求

变化的地方在于，[这里直接使用client.xxx](http://xn--client-vt9in98k266am0d6y0gd5e.xxx/)()的API，不再需要client.indices()了。


编写单元测试：


```java
@Test
void testAddDocument() throws IOException {
    // 1.根据id查询酒店数据
    Hotel hotel = hotelService.getById(61083L);
    // 2.转换为文档类型
    HotelDoc hotelDoc = new HotelDoc(hotel);
    // 3.将HotelDoc转json
    String json = JSON.toJSONString(hotelDoc);

    // 1.准备Request对象
    IndexRequest request = new IndexRequest("hotel").id(hotelDoc.getId().toString());
    // 2.准备Json文档
    request.source(json, XContentType.JSON);
    // 3.发送请求
    client.index(request, RequestOptions.DEFAULT);
}
```


## 查询文档


查询的DSL语句如下：


```json
GET /hotel/_doc/{id}
```


非常简单，因此代码大概分两步：

- 准备Request对象
- 发送请求

不过查询的目的是得到结果，解析为HotelDoc，因此难点是结果的解析。


结果是一个JSON，其中文档放在一个`_source`属性中，因此解析就是拿到`_source`，反序列化为Java对象即可。


与之前类似，也是三步走：

- 准备Request对象。这次是查询，所以是GetRequest
- 发送请求，得到结果。因为是查询，这里调用client.get()方法
- 解析结果，就是对JSON做反序列化

编写单元测试：


```java
@Test
void testGetDocumentById() throws IOException {
    // 1.准备Request
    GetRequest request = new GetRequest("hotel", "61082");
    // 2.发送请求，得到响应
    GetResponse response = client.get(request, RequestOptions.DEFAULT);
    // 3.解析响应结果
    String json = response.getSourceAsString();

    HotelDoc hotelDoc = JSON.parseObject(json, HotelDoc.class);
    System.out.println(hotelDoc);
}
```


## 删除文档


删除的DSL为是这样的：


```json
DELETE /hotel/_doc/{id}
```


与查询相比，仅仅是请求方式从DELETE变成GET，可以想象Java代码应该依然是三步走：

- 准备Request对象，因为是删除，这次是DeleteRequest对象。要指定索引库名和id
- 准备参数，无参
- 发送请求。因为是删除，所以是client.delete()方法

编写单元测试：


```java
@Test
void testDeleteDocument() throws IOException {
    // 1.准备Request
    DeleteRequest request = new DeleteRequest("hotel", "61083");
    // 2.发送请求
    client.delete(request, RequestOptions.DEFAULT);
}
```


## 修改文档


修改我们讲过两种方式：

- 全量修改：本质是先根据id删除，再新增
- 增量修改：修改文档中的指定字段值

在RestClient的API中，全量修改与新增的API完全一致，判断依据是ID：

- 如果新增时，ID已经存在，则修改
- 如果新增时，ID不存在，则新增

这里不再赘述，我们主要关注增量修改。

- 准备Request对象。这次是修改，所以是UpdateRequest
- 准备参数。也就是JSON文档，里面包含要修改的字段
- 更新文档。这里调用client.update()方法

编写单元测试：


```java
@Test
void testUpdateDocument() throws IOException {
    // 1.准备Request
    UpdateRequest request = new UpdateRequest("hotel", "61083");
    // 2.准备请求参数
    request.doc(
        "price", "952",
        "starName", "四钻"
    );
    // 3.发送请求
    client.update(request, RequestOptions.DEFAULT);
}
```


## 批量导入文档


案例需求：利用BulkRequest批量将数据库数据导入到索引库中。


步骤如下：

- 利用mybatis-plus查询酒店数据
- 将查询到的酒店数据（Hotel）转换为文档类型数据（HotelDoc）
- 利用JavaRestClient中的BulkRequest批处理，实现批量新增文档

批量处理BulkRequest，其本质就是将多个普通的CRUD请求组合在一起发送。其中提供了一个add方法，用来添加其他请求：


可以看到，能添加的请求包括：

- IndexRequest，也就是新增
- UpdateRequest，也就是修改
- DeleteRequest，也就是删除

编写单元测试：


```java
@Test
void testBulkRequest() throws IOException {
    // 批量查询酒店数据
    List<Hotel> hotels = hotelService.list();

    // 1.创建Request
    BulkRequest request = new BulkRequest();
    // 2.准备参数，添加多个新增的Request
    for (Hotel hotel : hotels) {
        // 2.1.转换为文档类型HotelDoc
        HotelDoc hotelDoc = new HotelDoc(hotel);
        // 2.2.创建新增文档的Request对象
        request.add(new IndexRequest("hotel")
                    .id(hotelDoc.getId().toString())
                    .source(JSON.toJSONString(hotelDoc), XContentType.JSON));
    }
    // 3.发送请求
    client.bulk(request, RequestOptions.DEFAULT);
}
```


# DSL查询文档


elasticsearch的查询依然是基于JSON风格的DSL来实现的。


## DSL查询分类


Elasticsearch提供了基于JSON的DSL（[Domain Specific Language](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html)）来定义查询。常见的查询类型包括：

- **查询所有**：查询出所有数据，一般测试用。例如：match_all
- **全文检索（full text）查询**：利用分词器对用户输入内容分词，然后去倒排索引库中匹配。例如：
    - match_query
    - multi_match_query
- **精确查询**：根据精确词条值查找数据，一般是查找keyword、数值、日期、boolean等类型字段。例如：
    - ids
    - range
    - term
- **地理（geo）查询**：根据经纬度查询。例如：
    - geo_distance
    - geo_bounding_box
- **复合（compound）查询**：复合查询可以将上述各种查询条件组合起来，合并查询条件。例如：
    - bool
    - function_score

查询的语法基本一致：


```json
GET /indexName/_search
{
  "query": {
    "查询类型": {
      "查询条件": "条件值"
    }
  }
}
```


## 全文检索查询


全文检索查询的基本流程如下：

- 对用户搜索的内容做分词，得到词条
- 根据词条去倒排索引库中匹配，得到文档id
- 根据文档id找到文档，返回给用户

比较常用的场景包括：

- 商城的输入框搜索
- 百度输入框搜索

常见的全文检索查询包括：

- match查询：单字段查询

```json
GET /indexName/_search
{
  "query": {
    "match": {
      "FIELD": "TEXT"
    }
  }
}
```

- multi_match查询：多字段查询，任意一个字段符合条件就算符合查询条件；参与查询字段越多，查询性能越差

```json
GET /indexName/_search
{
  "query": {
    "multi_match": {
      "query": "TEXT",
      "fields": ["FIELD1", " FIELD12"]
    }
  }
}
```


## 精准查询


精确查询一般是查找keyword、数值、日期、boolean等类型字段。所以**不会**对搜索条件分词。常见的有：

- term：根据词条精确值查询，一般搜索keyword类型、数值类型、布尔类型、日期类型字段

    因为精确查询的字段搜是不分词的字段，因此查询的条件也必须是**不分词**的词条。查询时，用户输入的内容跟自动值完全匹配时才认为符合条件。如果用户输入的内容过多，反而搜索不到数据。


    ```json
    // term查询
    GET /indexName/_search
    {
      "query": {
        "term": {
          "FIELD": {
            "value": "VALUE"
          }
        }
      }
    }
    ```

- range：根据值的范围查询，可以是数值、日期的范围

    范围查询，一般应用在对数值类型做范围过滤的时候。比如做价格范围过滤。


    ```json
    // range查询
    GET /indexName/_search
    {
      "query": {
        "range": {
          "FIELD": {
            "gte": 10, // 这里的gte代表大于等于，gt则代表大于
            "lte": 20 // lte代表小于等于，lt则代表小于
          }
        }
      }
    }
    ```


## 地理坐标查询


所谓的地理坐标查询，其实就是根据经纬度查询


常见的使用场景包括：

- 携程：搜索我附近的酒店
- 滴滴：搜索我附近的出租车
- 微信：搜索我附近的人
- 矩形范围查询

    矩形范围查询，也就是geo_bounding_box查询，查询坐标落在某个矩形范围的所有文档


    查询时，需要指定矩形的**左上**、**右下**两个点的坐标，然后画出一个矩形，落在该矩形内的都是符合条件的点。


    ```json
    // geo_bounding_box查询
    GET /indexName/_search
    {
      "query": {
        "geo_bounding_box": {
          "FIELD": {
            "top_left": { // 左上点
              "lat": 31.1,
              "lon": 121.5
            },
            "bottom_right": { // 右下点
              "lat": 30.9,
              "lon": 121.7
            }
          }
        }
      }
    }
    ```

- 附近查询

    附近查询，也叫做距离查询（geo_distance）：查询到指定中心点小于某个距离值的所有文档。


    换句话来说，在地图上找一个点作为圆心，以指定距离为半径，画一个圆，落在圆内的坐标都算符合条件


    ```json
    // geo_distance 查询
    GET /indexName/_search
    {
      "query": {
        "geo_distance": {
          "distance": "15km", // 半径
          "FIELD": "31.21,121.5" // 圆心
        }
      }
    }
    ```


## 复合查询


复合（compound）查询：复合查询可以将其它简单查询组合起来，实现更复杂的搜索逻辑。常见的有两种：

- fuction score：算分函数查询，可以控制文档相关性算分，控制文档排名
- bool query：布尔查询，利用逻辑关系组合多个其它的查询，实现复杂搜索

### 相关性算分


当我们利用match查询时，文档结果会根据与搜索词条的关联度打分（_score），返回结果时按照分值降序排列。


在elasticsearch中，早期使用的打分算法是TF-IDF算法，公式如下


$$
TF(词条频率) = \frac{词条出现次数}{文档中词条总数}
$$


$$
IDF(逆文档频率)=Log(\frac{文档总数}{包含词条的文档总数})
$$


$$
score = \sum_{i=1}^{n}TF(词条频率)*IDF(逆文档频率)
$$


在后来的5.1版本升级中，elasticsearch将算法改进为BM25算法，公式如下


$$
Score(Q,d) = \sum_{i=1}^n\log(1+\frac{N-n+0.5}{n+0.5})\cdot\frac{f_i}{f_i+k_1\cdot(1-b+b\cdot\frac{dl}{avgdl})}
$$


TF-IDF算法有一各缺陷，就是词条频率越高，文档得分也会越高，单个词条对文档影响较大。而BM25则会让单个词条的算分有一个上限，曲线更加平滑


### 算分函数查询


根据相关度打分是比较合理的需求，但**合理的不一定是产品经理需要**的。


以百度为例，你搜索的结果中，并不是相关度越高排名越靠前，而是谁掏的钱多排名就越靠前


要想认为控制相关性算分，就需要利用elasticsearch中的function score 查询了


function score 查询中包含四部分内容：

- **原始查询**条件：query部分，基于这个条件搜索文档，并且基于BM25算法给文档打分，**原始算分**（query score)
- **过滤条件**：filter部分，符合该条件的文档才会重新算分
- **算分函数**：符合filter条件的文档要根据这个函数做运算，得到的**函数算分**（function score），有四种函数
    - weight：函数结果是常量
    - field_value_factor：以文档中的某个字段值作为函数结果
    - random_score：以随机数作为函数结果
    - script_score：自定义算分函数算法
- **运算模式**：boost_mode,算分函数的结果、原始查询的相关性算分，两者之间的运算方式，包括：
    - multiply：相乘
    - replace：用function score替换query score
    - 其它，例如：sum、avg、max、min

function score的运行流程如下：

- 根据**原始条件**查询搜索文档，并且计算相关性算分，称为**原始算分**（query score）
- 根据**过滤条件**，过滤文档
- 符合**过滤条件**的文档，基于**算分函数**运算，得到**函数算分**（function score）
- 将**原始算分**（query score）和**函数算分**（function score）基于**运算模式**做运算，得到最终结果，作为相关性算分。

```json
GET /hotel/_search
{
  "query": {
    "function_score": {
      "query": {  .... }, // 原始查询，可以是任意条件
      "functions": [ // 算分函数
        {
          "filter": { // 满足的条件，品牌必须是如家
            "term": {
              "brand": "如家"
            }
          },
          "weight": 2 // 算分权重为2
        }
      ],
      "boost_mode": "sum" // 加权模式，求和
    }
  }
}
```


function score query定义的三要素是什么？

- 过滤条件：哪些文档要加分
- 算分函数：如何计算function score
- 加权方式：function score 与 query score如何运算

### 布尔查询


布尔查询是一个或多个查询子句的组合，每一个子句就是一个**子查询**。子查询的组合方式有：

- must：必须匹配每个子查询，类似“与”
- should：选择性匹配子查询，类似“或”
- must_not：必须不匹配，**不参与算分**，类似“非”
- filter：必须匹配，**不参与算分**

需要注意的是，搜索时，参与**打分的字段越多，查询的性能也越差**。因此这种多条件查询时，建议这样做：

- 搜索框的关键字搜索，是全文检索查询，使用must查询，参与算分
- 其它过滤条件，采用filter查询。不参与算分

```json
GET /hotel/_search
{
  "query": {
    "bool": {
      "must": [
        {"term": {"city": "上海" }}
      ],
      "should": [
        {"term": {"brand": "皇冠假日" }},
        {"term": {"brand": "华美达" }}
      ],
      "must_not": [
        { "range": { "price": { "lte": 500 } }}
      ],
      "filter": [
        { "range": {"score": { "gte": 45 } }}
      ]
    }
  }
}
```


# 搜索结果处理


搜索的结果可以按照用户指定的方式去处理或展示。


## 排序


elasticsearch默认是根据相关度算分（_score）来排序，但是也支持自定义方式对搜索[结果排序](https://www.elastic.co/guide/en/elasticsearch/reference/current/sort-search-results.html)。可以排序字段类型有：keyword类型、数值类型、地理坐标类型、日期类型等。

- 普通字段排序

    keyword、数值、日期类型排序的语法基本一致。


    ```json
    GET /indexName/_search
    {
      "query": {
        "match_all": {}
      },
      "sort": [
        {
          "FIELD": "desc"  // 排序字段、排序方式ASC、DESC
        }
      ]
    }
    ```


    排序条件是一个数组，也就是可以写多个排序条件。按照声明的顺序，当第一个条件相等时，再按照第二个条件排序，以此类推

- 理坐标排序

    地理坐标排序略有不同。


    ```json
    GET /indexName/_search
    {
      "query": {
        "match_all": {}
      },
      "sort": [
        {
          "_geo_distance" : {
              "FIELD" : "纬度，经度", // 文档中geo_point类型的字段名、目标坐标点
              "order" : "asc", // 排序方式
              "unit" : "km" // 排序的距离单位
          }
        }
      ]
    }
    ```


    这个查询的含义是：

    - 指定一个坐标，作为目标点
    - 计算每一个文档中，指定字段（必须是geo_point类型）的坐标 到目标点的距离是多少
    - 根据距离排序

## 分页


elasticsearch 默认情况下只返回top10的数据。而如果要查询更多数据就需要修改分页参数了。elasticsearch中通过修改from、size参数来控制要返回的分页结果：

- from：从第几个文档开始
- size：总共查询几个文档

类似于mysql中的`limit ?, ?`


分页的基本语法如下：


```json
GET /hotel/_search
{
  "query": {
    "match_all": {}
  },
  "from": 0, // 分页开始的位置，默认为0
  "size": 10, // 期望获取的文档总数
  "sort": [
    {"price": "asc"}
  ]
}
```


当查询分页深度较大时，汇总数据过多，对内存和CPU会产生非常大的压力，因此elasticsearch会禁止from+ size 超过10000的请求。


针对深度分页，ES提供了两种解决方案

- search after：分页时需要排序，原理是从上一次的排序值开始，查询下一页数据。官方推荐使用的方式。
- scroll：原理将排序后的文档id形成快照，保存在内存。官方已经不推荐使用。

分页查询的常见实现方案以及优缺点：

- `from + size`：
    - 优点：支持随机翻页
    - 缺点：深度分页问题，默认查询上限（from + size）是10000
    - 场景：百度、京东、谷歌、淘宝这样的随机翻页搜索
- `after search`：
    - 优点：没有查询上限（单次查询的size不超过10000）
    - 缺点：只能向后逐页查询，不支持随机翻页
    - 场景：没有随机翻页需求的搜索，例如手机向下滚动翻页
- `scroll`：
    - 优点：没有查询上限（单次查询的size不超过10000）
    - 缺点：会有额外内存消耗，并且搜索结果是非实时的
    - 场景：海量数据的获取和迁移。从ES7.1开始不推荐，建议用 after search方案。

## 高亮


我们在百度，京东搜索时，关键字会变成红色，比较醒目，这叫高亮显示：


高亮显示的实现分为两步：

- 给文档中的所有关键字都添加一个标签，例如`<em>`标签
- 页面给`<em>`标签编写CSS样式

**高亮的语法**：


```json
GET /hotel/_search
{
  "query": {
    "match": {
      "FIELD": "TEXT" // 查询条件，高亮一定要使用全文检索查询
    }
  },
  "highlight": {
    "fields": { // 指定要高亮的字段
      "FIELD": {
        "pre_tags": "<em>",  // 用来标记高亮字段的前置标签
        "post_tags": "</em>" // 用来标记高亮字段的后置标签
      }
    }
  }
}
```


**注意：**

- 高亮是对关键字高亮，因此**搜索条件必须带有关键字**，而不能是范围这样的查询。
- 默认情况下，**高亮的字段，必须与搜索指定的字段一致**，否则无法高亮
- 如果要对非搜索字段高亮，则需要添加一个属性：`required_field_match=false`

# RestClient查询文档


文档的查询同样适用之前学习的 RestHighLevelClient对象，基本步骤包括：

- 准备Request对象
- 准备请求参数
- 发起请求
- 解析响应

## 快速入门


```java
@Test
void testMatchAll() throws IOException {
    // 1.准备Request
    SearchRequest request = new SearchRequest("hotel");
    // 2.准备DSL
    request.source()
        .query(QueryBuilders.matchAllQuery());
    // 3.发送请求
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);

    // 4.解析响应
    handleResponse(response);
}

private void handleResponse(SearchResponse response) {
    // 4.解析响应
    SearchHits searchHits = response.getHits();
    // 4.1.获取总条数
    long total = searchHits.getTotalHits().value;
    System.out.println("共搜索到" + total + "条数据");
    // 4.2.文档数组
    SearchHit[] hits = searchHits.getHits();
    // 4.3.遍历
    for (SearchHit hit : hits) {
        // 获取文档source
        String json = hit.getSourceAsString();
        // 反序列化
        HotelDoc hotelDoc = JSON.parseObject(json, HotelDoc.class);
        System.out.println("hotelDoc = " + hotelDoc);
    }
}
```

- 第一步，创建`SearchRequest`对象，指定索引库名
- 第二步，利用`request.source()`构建DSL，DSL中可以包含查询、分页、排序、高亮等
    - `query()`：代表查询条件，利用`QueryBuilders.matchAllQuery()`构建一个match_all查询的DSL,`QueryBuilders`中包含match、term、function_score、bool等各种查询
- 第三步，利用client.search()发送请求，得到响应

elasticsearch返回的结果是一个JSON字符串，结构包含：

- `hits`：命中的结果
    - `total`：总条数，其中的value是具体的总条数值
    - `max_score`：所有结果中得分最高的文档的相关性算分
    - `hits`：搜索结果的文档数组，其中的每个文档都是一个json对象
        - `_source`：文档中的原始数据，也是json对象

因此，我们解析响应结果，就是逐层解析JSON字符串，流程如下：

- `SearchHits`：通过response.getHits()获取，就是JSON中的最外层的hits，代表命中的结果
    - `SearchHits#getTotalHits().value`：获取总条数信息
    - `SearchHits#getHits()`：获取SearchHit数组，也就是文档数组
        - `SearchHit#getSourceAsString()`：获取文档结果中的_source，也就是原始的json文档数据

## match查询


全文检索的match和multi_match查询与match_all的API基本一致。差别是查询条件，也就是query的部分。


因此，Java代码上的差异主要是request.source().query()中的参数了。同样是利用QueryBuilders提供的方法


```java
@Test
void testMatch() throws IOException {
    // 1.准备Request
    SearchRequest request = new SearchRequest("hotel");
    // 2.准备DSL
    request.source()
        .query(QueryBuilders.matchQuery("all", "如家"));
    // 3.发送请求
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);
    // 4.解析响应
    handleResponse(response);

}
```


## 精确查询


精确查询主要是两者：

- term：词条精确匹配
- range：范围查询

与之前的查询相比，差异同样在查询条件，其它都一样。


```java
//词条查询
QueryBuilders.termQuery("city","杭州");

//范围查询
QueryBuilders.rangeQuery("price").gte(100).lte(150);
```


## 布尔查询


布尔查询是用must、must_not、filter等方式组合其它查询


可以看到，API与其它查询的差别同样是在查询条件的构建，QueryBuilders，结果解析等其他代码完全不变。


```java
@Test
void testBool() throws IOException {
    // 1.准备Request
    SearchRequest request = new SearchRequest("hotel");
    // 2.准备DSL
    // 2.1.准备BooleanQuery
    BoolQueryBuilder boolQuery = QueryBuilders.boolQuery();
    // 2.2.添加term
    boolQuery.must(QueryBuilders.termQuery("city", "杭州"));
    // 2.3.添加range
    boolQuery.filter(QueryBuilders.rangeQuery("price").lte(250));

    request.source().query(boolQuery);
    // 3.发送请求
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);
    // 4.解析响应
    handleResponse(response);
}
```


## 排序、分页


搜索结果的排序和分页是与query同级的参数，因此同样是使用request.source()来设置。


```java
@Test
void testPageAndSort() throws IOException {
    // 页码，每页大小
    int page = 1, size = 5;

    // 1.准备Request
    SearchRequest request = new SearchRequest("hotel");
    // 2.准备DSL
    // 2.1.query
    request.source().query(QueryBuilders.matchAllQuery());
    // 2.2.排序 sort
    request.source().sort("price", SortOrder.ASC);
    // 2.3.分页 from、size
    request.source().from((page - 1) * size).size(5);
    // 3.发送请求
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);
    // 4.解析响应
    handleResponse(response);

}
```


## 高亮


高亮的代码与之前代码差异较大，有两点：

- 查询的DSL：其中除了查询条件，还需要添加高亮条件，同样是与query同级。
- 结果解析：结果除了要解析_source文档数据，还要解析高亮结果
    - 第一步：从结果中获取source。hit.getSourceAsString()，这部分是非高亮结果，json字符串。还需要反序列为HotelDoc对象
    - 第二步：获取高亮结果。hit.getHighlightFields()，返回值是一个Map，key是高亮字段名称，值是HighlightField对象，代表高亮值
    - 第三步：从map中根据高亮字段名称，获取高亮字段值对象HighlightField
    - 第四步：从HighlightField中获取Fragments，并且转为字符串。这部分就是真正的高亮字符串了
    - 第五步：用高亮的结果替换HotelDoc中的非高亮结果

```java
@Test
void testHighlight() throws IOException {
    // 1.准备Request
    SearchRequest request = new SearchRequest("hotel");
    // 2.准备DSL
    // 2.1.query
    request.source().query(QueryBuilders.matchQuery("all", "如家"));
    // 2.2.高亮
    request.source().highlighter(new HighlightBuilder().field("name").requireFieldMatch(false));
    // 3.发送请求
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);
    // 4.解析响应
    handleResponse(response);
}

private void handleResponse(SearchResponse response) {
    // 4.解析响应
    SearchHits searchHits = response.getHits();
    // 4.1.获取总条数
    long total = searchHits.getTotalHits().value;
    System.out.println("共搜索到" + total + "条数据");
    // 4.2.文档数组
    SearchHit[] hits = searchHits.getHits();
    // 4.3.遍历
    for (SearchHit hit : hits) {
        // 获取文档source
        String json = hit.getSourceAsString();
        // 反序列化
        HotelDoc hotelDoc = JSON.parseObject(json, HotelDoc.class);
        // 获取高亮结果
        Map<String, HighlightField> highlightFields = hit.getHighlightFields();
        if (!CollectionUtils.isEmpty(highlightFields)) {
            // 根据字段名获取高亮结果
            HighlightField highlightField = highlightFields.get("name");
            if (highlightField != null) {
                // 获取高亮值
                String name = highlightField.getFragments()[0].string();
                // 覆盖非高亮结果
                hotelDoc.setName(name);
            }
        }
        System.out.println("hotelDoc = " + hotelDoc);
    }
}
```


# 黑马旅游案例


下面，我们通过黑马旅游的案例来实战演练下之前学习的知识。


我们实现四部分功能：

- 酒店搜索和分页
- 酒店结果过滤
- 我周边的酒店
- 酒店竞价排名

## 酒店搜索和分页


案例需求：实现黑马旅游的酒店搜索功能，完成关键字搜索和分页


### 定义实体类


实体类有两个，一个是前端的请求参数实体，一个是服务端应该返回的响应结果实体。


```java
// 请求
package cn.itcast.hotel.pojo;
import lombok.Data;

@Data
public class RequestParams {
    private String key;
    private Integer page;
    private Integer size;
    private String sortBy;
}

// 返回
import lombok.Data;
import java.util.List;

@Data
public class PageResult {
    private Long total;
    private List<HotelDoc> hotels;

    public PageResult() {
    }

    public PageResult(Long total, List<HotelDoc> hotels) {
        this.total = total;
        this.hotels = hotels;
    }
}
```


### 定义controller


定义一个HotelController，声明查询接口，满足下列要求：

- 请求方式：Post
- 请求路径：/hotel/list
- 请求参数：对象，类型为RequestParam
- 返回值：PageResult，包含两个属性
    - `Long total`：总条数
    - `List<HotelDoc> hotels`：酒店数据

```java
@RestController
@RequestMapping("/hotel")
public class HotelController {

    @Autowired
    private IHotelService hotelService;
	// 搜索酒店数据
    @PostMapping("/list")
    public PageResult search(@RequestBody RequestParams params){
        return hotelService.search(params);
    }
}
```


### 实现搜索业务


我们在controller调用了IHotelService，并没有实现该方法，因此下面我们就在IHotelService中定义方法，并且去实现业务逻辑。


实现搜索业务，肯定离不开RestHighLevelClient，我们需要把它注册到Spring中作为一个Bean。在`cn.itcast.hotel`中的`HotelDemoApplication`中声明这个Bean：


```java
@Bean
public RestHighLevelClient client(){
    return  new RestHighLevelClient(RestClient.builder(
        HttpHost.create("<http://127.0.0.1:9200>")
    ));
}

// Service
@Override
public PageResult search(RequestParams params) {
    try {
        // 1.准备Request
        SearchRequest request = new SearchRequest("hotel");
        // 2.准备DSL
        // 2.1.query
        String key = params.getKey();
        if (key == null || "".equals(key)) {
            boolQuery.must(QueryBuilders.matchAllQuery());
        } else {
            boolQuery.must(QueryBuilders.matchQuery("all", key));
        }

        // 2.2.分页
        int page = params.getPage();
        int size = params.getSize();
        request.source().from((page - 1) * size).size(size);

        // 3.发送请求
        SearchResponse response = client.search(request, RequestOptions.DEFAULT);
        // 4.解析响应
        return handleResponse(response);
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}

// 结果解析
private PageResult handleResponse(SearchResponse response) {
    // 4.解析响应
    SearchHits searchHits = response.getHits();
    // 4.1.获取总条数
    long total = searchHits.getTotalHits().value;
    // 4.2.文档数组
    SearchHit[] hits = searchHits.getHits();
    // 4.3.遍历
    List<HotelDoc> hotels = new ArrayList<>();
    for (SearchHit hit : hits) {
        // 获取文档source
        String json = hit.getSourceAsString();
        // 反序列化
        HotelDoc hotelDoc = JSON.parseObject(json, HotelDoc.class);
		// 放入集合
        hotels.add(hotelDoc);
    }
    // 4.4.封装返回
    return new PageResult(total, hotels);
}
```


## 酒店结果过滤


需求：添加品牌、城市、星级、价格等过滤功能


在HotelService的search方法中，只有一个地方需要修改：requet.source().query( ... )其中的查询条件。


在之前的业务中，只有match查询，根据关键字搜索，现在要添加条件过滤，包括：

- 品牌过滤：是keyword类型，用term查询
- 星级过滤：是keyword类型，用term查询
- 价格过滤：是数值类型，用range查询
- 城市过滤：是keyword类型，用term查询

多个查询条件组合，肯定是boolean查询来组合：

- 关键字搜索放到must中，参与算分
- 其它过滤条件放到filter中，不参与算分

```java
private void buildBasicQuery(RequestParams params, SearchRequest request) {
    // 1.构建BooleanQuery
    BoolQueryBuilder boolQuery = QueryBuilders.boolQuery();
    // 2.关键字搜索
    String key = params.getKey();
    if (key == null || "".equals(key)) {
        boolQuery.must(QueryBuilders.matchAllQuery());
    } else {
        boolQuery.must(QueryBuilders.matchQuery("all", key));
    }
    // 3.城市条件
    if (params.getCity() != null && !params.getCity().equals("")) {
        boolQuery.filter(QueryBuilders.termQuery("city", params.getCity()));
    }
    // 4.品牌条件
    if (params.getBrand() != null && !params.getBrand().equals("")) {
        boolQuery.filter(QueryBuilders.termQuery("brand", params.getBrand()));
    }
    // 5.星级条件
    if (params.getStarName() != null && !params.getStarName().equals("")) {
        boolQuery.filter(QueryBuilders.termQuery("starName", params.getStarName()));
    }
	// 6.价格
    if (params.getMinPrice() != null && params.getMaxPrice() != null) {
        boolQuery.filter(QueryBuilders
                         .rangeQuery("price")
                         .gte(params.getMinPrice())
                         .lte(params.getMaxPrice())
                        );
    }
	// 7.放入source
    request.source().query(boolQuery);
}
```


## 我周边的酒店


基于location坐标，按照距离对周围酒店排序。实现思路如下：

- 修改RequestParams参数，接收location字段
- 修改search方法业务逻辑，如果location有值，添加根据geo_distance排序的功能

```json
GET /indexName/_search
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "price": "asc"
    },
    {
      "_geo_distance" : {
          "FIELD" : "纬度，经度",
          "order" : "asc",
          "unit" : "km"
      }
    }
  ]
}
```


在`search`方法中，添加一个排序功能：


```java
// 2.3.排序
String location = params.getLocation();
if (location != null && !location.equals("")) {
    request.source().sort(SortBuilders
                          .geoDistanceSort("location", new GeoPoint(location))
                          .order(SortOrder.ASC)
                          .unit(DistanceUnit.KILOMETERS)
                         );
}
```


## 酒店竞价排名


需求：让指定的酒店在搜索结果中排名置顶,页面会给指定的酒店添加**广告**标记。


function_score查询可以影响算分，算分高了，自然排名也就高了。而function_score包含3个要素：

- 过滤条件：哪些文档要加分
- 算分函数：如何计算function score
- 加权方式：function score 与 query score如何运算

这里的需求是：让**指定酒店**排名靠前。因此我们需要给这些酒店添加一个标记，这样在过滤条件中就可以**根据这个标记来判断，是否要提高算分**。


我们可以将之前写的boolean查询作为**原始查询**条件放到query中，接下来就是添加**过滤条件**、**算分函数**、**加权模式**了。


```java
// 2.算分控制
FunctionScoreQueryBuilder functionScoreQuery =
    QueryBuilders.functionScoreQuery(
    // 原始查询，相关性算分的查询
    boolQuery,
    // function score的数组
    new FunctionScoreQueryBuilder.FilterFunctionBuilder[]{
        // 其中的一个function score 元素
        new FunctionScoreQueryBuilder.FilterFunctionBuilder(
            // 过滤条件
            QueryBuilders.termQuery("isAD", true),
            // 算分函数
            ScoreFunctionBuilders.weightFactorFunction(10)
        )
    });
request.source().query(functionScoreQuery);
```


# 数据聚合

- [**聚合（aggregations）**](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html)可以让我们极其方便的实现对数据的统计、分析、运算。例如：
- 什么品牌的手机最受欢迎？
- 这些手机的平均价格、最高价格、最低价格？
- 这些手机每月的销售情况如何？

实现这些统计功能的比数据库的sql要方便的多，而且查询速度非常快，可以实现近实时搜索效果。


## 聚合的种类


聚合常见的有三类：

- **桶（Bucket)**聚合：用来对文档做分组
    - TermAggregation：按照文档字段值分组，例如按照品牌值分组、按照国家分组
    - Date Histogram：按照日期阶梯分组，例如一周为一组，或者一月为一组
- **度量（Metric）**聚合：用以计算一些值，比如：最大值、最小值、平均值等
    - Avg：求平均值
    - Max：求最大值
    - Min：求最小值
    - Stats：同时求max、min、avg、sum等
- **管道（pipeline）**聚合：其它聚合的结果为基础做聚合
> **注意：**参加聚合的字段必须是keyword、日期、数值、布尔类型

## DSL实现聚合


现在，我们要统计所有数据中的酒店品牌有几种，其实就是按照品牌对数据分组。此时可以根据酒店品牌的名称做聚合，也就是Bucket聚合。


### Bucket聚合语法


语法如下：


```json
GET /hotel/_search
{
  "size": 0,  // 设置size为0，结果中不包含文档，只包含聚合结果
  "aggs": { // 定义聚合
    "brandAgg": { //给聚合起个名字
      "terms": { // 聚合的类型，按照品牌值聚合，所以选择term
        "field": "brand", // 参与聚合的字段
        "size": 20 // 希望获取的聚合结果数量
      }
    }
  }
}
```


### 聚合结果排序


默认情况下，Bucket聚合会统计Bucket内的文档数量，记为_count，并且按照_count降序排序。


我们可以指定order属性，自定义聚合的排序方式：


```json
GET /hotel/_search
{
  "size": 0,
  "aggs": {
    "brandAgg": {
      "terms": {
        "field": "brand",
        "order": {
          "_count": "asc" // 按照_count升序排列
        },
        "size": 20
      }
    }
  }
}
```


### 限定聚合范围


默认情况下，Bucket聚合是对索引库的所有文档做聚合，但真实场景下，用户会输入搜索条件，因此聚合必须是对搜索结果聚合。那么聚合必须添加限定条件。


我们可以限定要聚合的文档范围，只要添加query条件即可：


```json
GET /hotel/_search
{
  "query": {
    "range": {
      "price": {
        "lte": 200 // 只对200元以下的文档聚合
      }
    }
  },
  "size": 0,
  "aggs": {
    "brandAgg": {
      "terms": {
        "field": "brand",
        "size": 20
      }
    }
  }
}
```


### Metric聚合语法


现在我们需要对桶内的酒店做运算，获取每个品牌的用户评分的min、max、avg等值。


这就要用到Metric聚合了，例如stat聚合：就可以获取min、max、avg等结果。


语法如下：


```json
GET /hotel/_search
{
  "size": 0,
  "aggs": {
    "brandAgg": {
      "terms": {
        "field": "brand",
        "size": 20
      },
      "aggs": { // 是brands聚合的子聚合，也就是分组后对每组分别计算
        "score_stats": { // 聚合名称
          "stats": { // 聚合类型，这里stats可以计算min、max、avg等
            "field": "score" // 聚合字段，这里是score
          }
        }
      }
    }
  }
}
```


这次的score_stats聚合是在brandAgg的聚合内部嵌套的子聚合。因为我们需要在每个桶分别计算。


aggs代表聚合，与query同级，此时query的作用是？

- 限定聚合的的文档范围

聚合必须的三要素：

- 聚合名称
- 聚合类型
- 聚合字段

聚合可配置属性有：

- size：指定聚合结果数量
- order：指定聚合结果排序方式
- field：指定聚合字段

## RestAPI实现聚合


聚合条件与query条件同级别，因此需要使用request.source()来指定聚合条件。


使用聚合功能，利用Bucket聚合，对搜索结果中的文档基于品牌分组、基于城市分组，就能得知包含哪些品牌、哪些城市了。


因为是对搜索结果聚合，因此聚合是**限定范围的聚合**，也就是说聚合的限定条件跟搜索文档的条件一致。


```java
@Override
public Map<String, List<String>> filters(RequestParams params) {
    try {
        // 1.准备Request
        SearchRequest request = new SearchRequest("hotel");
        // 2.准备DSL
        // 2.1.query
        buildBasicQuery(params, request);
        // 2.2.设置size
        request.source().size(0);
        // 2.3.聚合
        buildAggregation(request);
        // 3.发出请求
        SearchResponse response = client.search(request, RequestOptions.DEFAULT);
        // 4.解析结果
        Map<String, List<String>> result = new HashMap<>();
        Aggregations aggregations = response.getAggregations();
        // 4.1.根据品牌名称，获取品牌结果
        List<String> brandList = getAggByName(aggregations, "brandAgg");
        result.put("品牌", brandList);
        // 4.2.根据品牌名称，获取品牌结果
        List<String> cityList = getAggByName(aggregations, "cityAgg");
        result.put("城市", cityList);
        // 4.3.根据品牌名称，获取品牌结果
        List<String> starList = getAggByName(aggregations, "starAgg");
        result.put("星级", starList);

        return result;
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}

private void buildAggregation(SearchRequest request) {
    request.source().aggregation(AggregationBuilders
                                 .terms("brandAgg")
                                 .field("brand")
                                 .size(100)
                                );
    request.source().aggregation(AggregationBuilders
                                 .terms("cityAgg")
                                 .field("city")
                                 .size(100)
                                );
    request.source().aggregation(AggregationBuilders
                                 .terms("starAgg")
                                 .field("starName")
                                 .size(100)
                                );
}

private List<String> getAggByName(Aggregations aggregations, String aggName) {
    // 4.1.根据聚合名称获取聚合结果
    Terms brandTerms = aggregations.get(aggName);
    // 4.2.获取buckets
    List<? extends Terms.Bucket> buckets = brandTerms.getBuckets();
    // 4.3.遍历
    List<String> brandList = new ArrayList<>();
    for (Terms.Bucket bucket : buckets) {
        // 4.4.获取key
        String key = bucket.getKeyAsString();
        brandList.add(key);
    }
    return brandList;
}
```


# 自动补全


当用户在搜索框输入字符时，我们应该提示出与该字符有关的搜索项，这种根据用户输入的字母，提示完整词条的功能，就是自动补全了。


## 拼音分词器


要实现根据字母做补全，就必须对文档按照拼音分词。在GitHub上恰好有elasticsearch的拼音分词插件


与安装IK分词器步骤相同


```shell
docker exec -it es bash

./bin/elasticsearch-plugin install <https://github.com/medcl/elasticsearch-analysis-pinyin/releases/download/v7.12.1/elasticsearch-analysis-pinyin-7.12.1.zip>

exit
#重启容器
docker restart elasticsearch
```


## 自定义分词器


默认的拼音分词器会将每个汉字单独分为拼音，而我们希望的是每个词条形成一组拼音，需要对拼音分词器做个性化定制，形成自定义分词器。


elasticsearch中分词器（analyzer）的组成包含三部分：

- character filters：在tokenizer之前对文本进行处理。例如删除字符、替换字符
- tokenizer：将文本按照一定的规则切割成词条（term）。例如keyword，就是不分词；还有ik_smart
- tokenizer filter：将tokenizer输出的词条做进一步处理。例如大小写转换、同义词处理、拼音处理等

文档分词时会依次由这三部分来处理文档：


![image-20230813184315319.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813184315319.png)


```json
PUT /test
{
  "settings": {
    "analysis": {
      "analyzer": { // 自定义分词器
        "my_analyzer": {  // 分词器名称
          "tokenizer": "ik_max_word",
          "filter": "py"
        }
      },
      "filter": { // 自定义tokenizer filter
        "py": { // 过滤器名称
          "type": "pinyin", // 过滤器类型，这里是pinyin
		  "keep_full_pinyin": false,
          "keep_joined_full_pinyin": true,
          "keep_original": true,
          "limit_first_letter_length": 16,
          "remove_duplicated_term": true,
          "none_chinese_pinyin_tokenize": false
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "name": {
        "type": "text",
        "analyzer": "my_analyzer",
        "search_analyzer": "ik_smart"
      }
    }
  }
}
```


## 自动补全查询


elasticsearch提供了[Completion Suggester](https://www.elastic.co/guide/en/elasticsearch/reference/7.6/search-suggesters.html)查询来实现自动补全功能。这个查询会匹配以用户输入内容开头的词条并返回。为了提高补全查询的效率，对于文档中字段的类型有一些约束：

- 参与补全查询的字段必须是completion类型。
- 字段的内容一般是用来补全的多个词条形成的数组。

实现自动补全：


```java
@Override
public List<String> getSuggestions(String prefix) {
    try {
        // 1.准备Request
        SearchRequest request = new SearchRequest("hotel");
        // 2.准备DSL
        request.source().suggest(new SuggestBuilder().addSuggestion(
            "suggestions",
            SuggestBuilders.completionSuggestion("suggestion")
            .prefix(prefix)
            .skipDuplicates(true)
            .size(10)
        ));
        // 3.发起请求
        SearchResponse response = client.search(request, RequestOptions.DEFAULT);
        // 4.解析结果
        Suggest suggest = response.getSuggest();
        // 4.1.根据补全查询名称，获取补全结果
        CompletionSuggestion suggestions = suggest.getSuggestion("suggestions");
        // 4.2.获取options
        List<CompletionSuggestion.Entry.Option> options = suggestions.getOptions();
        // 4.3.遍历
        List<String> list = new ArrayList<>(options.size());
        for (CompletionSuggestion.Entry.Option option : options) {
            String text = option.getText().toString();
            list.add(text);
        }
        return list;
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}
```


# 数据同步


elasticsearch中的酒店数据来自于mysql数据库，因此mysql数据发生改变时，elasticsearch也必须跟着改变，这个就是elasticsearch与mysql之间的**数据同步**。


常见的数据同步方案有三种：

- 同步调用
    - hotel-demo对外提供接口，用来修改elasticsearch中的数据
    - 酒店管理服务在完成数据库操作后，直接调用hotel-demo提供的接口
- 异步通知
    - hotel-admin对mysql数据库数据完成增、删、改后，发送MQ消息
    - hotel-demo监听MQ，接收到消息后完成elasticsearch数据修改
- 监听binlog
    - 给mysql开启binlog功能
    - mysql完成增、删、改操作都会记录在binlog中
    - hotel-demo基于canal监听binlog变化，实时更新elasticsearch中的内容

方式一：同步调用

- 优点：实现简单，粗暴
- 缺点：业务耦合度高

方式二：异步通知

- 优点：低耦合，实现难度一般
- 缺点：依赖mq的可靠性

方式三：监听binlog

- 优点：完全解除服务间耦合
- 缺点：开启binlog增加数据库负担、实现复杂度高

## 实现数据同步


利用课前资料提供的hotel-admin项目作为酒店管理的微服务。当酒店数据发生增、删、改时，要求对elasticsearch中数据也要完成相同操作。

- 启动并测试酒店数据的CRUD
- 声明exchange、queue、RoutingKey
- 在hotel-admin中的增、删、改业务中完成消息发送
- 在hotel-demo中完成消息监听，并更新elasticsearch中数据
- 启动并测试数据同步功能

## 声明交换机、队列


MQ结构如图：


![image-20230813192805650.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813192805650.png)


引入依赖


```xml
<!--amqp-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```


定义配置类，进行声明


```java
import cn.itcast.hotel.constants.MqConstants;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MqConfig {
    @Bean
    public TopicExchange topicExchange(){
        return new TopicExchange(MqConstants.HOTEL_EXCHANGE, true, false);
    }

    @Bean
    public Queue insertQueue(){
        return new Queue(MqConstants.HOTEL_INSERT_QUEUE, true);
    }

    @Bean
    public Queue deleteQueue(){
        return new Queue(MqConstants.HOTEL_DELETE_QUEUE, true);
    }

    @Bean
    public Binding insertQueueBinding(){
        return BindingBuilder.bind(insertQueue()).to(topicExchange()).with(MqConstants.HOTEL_INSERT_KEY);
    }

    @Bean
    public Binding deleteQueueBinding(){
        return BindingBuilder.bind(deleteQueue()).to(topicExchange()).with(MqConstants.HOTEL_DELETE_KEY);
    }
}
```


在hotel-admin中的增、删、改业务中分别发送MQ消息：


## 发送MQ信息


```java
@PostMapping
public void saveHotel(@RequestBody Hotel hotel){
    hotelService.save(hotel);

    rabbitTemplate.convertAndSend(MqConstants.HOTEL_EXCHANGE,HOTEL_INSERT_KEY,hotel.getId());
}

@PutMapping()
public void updateById(@RequestBody Hotel hotel){
    if (hotel.getId() == null) {
        throw new InvalidParameterException("id不能为空");
    }
    hotelService.updateById(hotel);

    rabbitTemplate.convertAndSend(MqConstants.HOTEL_EXCHANGE,HOTEL_INSERT_KEY,hotel.getId());
}

@DeleteMapping("/{id}")
public void deleteById(@PathVariable("id") Long id) {
    hotelService.removeById(id);

    rabbitTemplate.convertAndSend(MqConstants.HOTEL_EXCHANGE,MqConstants.HOTEL_DELETE_KEY, id);
}
```


## 接收MQ信息


编写监听器


在hotel-demo中的`cn.itcast.hotel.mq`包新增一个类：


```java
@Component
public class HotelListener {

    @Autowired
    private IHotelService hotelService;

    /**
     * 监听酒店新增或修改的业务
     * @param id 酒店id
     */
    @RabbitListener(queues = MqConstants.HOTEL_INSERT_QUEUE)
    public void listenHotelInsertOrUpdate(Long id){
        hotelService.insertById(id);
    }

    /**
     * 监听酒店删除的业务
     * @param id 酒店id
     */
    @RabbitListener(queues = MqConstants.HOTEL_DELETE_QUEUE)
    public void listenHotelDelete(Long id){
        hotelService.deleteById(id);
    }
}
```


实现业务：


```java
@Override
public void deleteById(Long id) {
    try {
        // 1.准备Request
        DeleteRequest request = new DeleteRequest("hotel", id.toString());
        // 2.发送请求
        client.delete(request, RequestOptions.DEFAULT);
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}

@Override
public void insertById(Long id) {
    try {
        // 0.根据id查询酒店数据
        Hotel hotel = getById(id);
        // 转换为文档类型
        HotelDoc hotelDoc = new HotelDoc(hotel);

        // 1.准备Request对象
        IndexRequest request = new IndexRequest("hotel").id(hotel.getId().toString());
        // 2.准备Json文档
        request.source(JSON.toJSONString(hotelDoc), XContentType.JSON);
        // 3.发送请求
        client.index(request, RequestOptions.DEFAULT);
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}
```


# 集群


单机的elasticsearch做数据存储，必然面临两个问题：海量数据存储问题、单点故障问题。

- 海量数据存储问题：将索引库从逻辑上拆分为N个分片（shard），存储到多个节点
- 单点故障问题：将分片数据在不同节点备份（replica ）

**ES集群相关概念**:

- 集群（cluster）：一组拥有共同的 cluster name 的 节点。
- <font color="red">节点（node)</font> ：集群中的一个 Elasticearch 实例
- <font color="red">分片（shard）</font>：索引可以被拆分为不同的部分进行存储，称为分片。在集群环境下，一个索引的不同分片可以拆分到不同的节点中

    解决问题：数据量太大，单点存储量有限的问题。

- 主分片（Primary shard）：相对于副本分片的定义。
- 副本分片（Replica shard）每个主分片可以有一个或者多个副本，数据和主分片一样。

数据备份可以保证高可用，但是每个分片备份一份，所需要的节点数量就会翻一倍，成本太高


为了在高可用和成本间寻求平衡，我们可以这样做：

- 首先对数据分片，存储到不同节点
- 然后对每个分片进行备份，放到对方节点，完成互相备份

这样可以大大减少所需要的服务节点数量


## 创建es集群


通过docker-compose创建：


```yaml
version: '2.2'
services:
  es01:
    image: elasticsearch:7.12.1
    container_name: es01
    environment:
      - node.name=es01
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es02,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data01:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
    networks:
      - elastic
  es02:
    image: elasticsearch:7.12.1
    container_name: es02
    environment:
      - node.name=es02
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data02:/usr/share/elasticsearch/data
    ports:
      - 9201:9200
    networks:
      - elastic
  es03:
    image: elasticsearch:7.12.1
    container_name: es03
    environment:
      - node.name=es03
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es02
      - cluster.initial_master_nodes=es01,es02,es03
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data03:/usr/share/elasticsearch/data
    networks:
      - elastic
    ports:
      - 9202:9200
volumes:
  data01:
    driver: local
  data02:
    driver: local
  data03:
    driver: local

networks:
  elastic:
    driver: bridge
```


如果通过wsl来安装导致打不开的话，可以运行以下命令来提高内存（最低需要4g）


```shell
wsl -d docker-desktop
echo 262144 >> /proc/sys/vm/max_map_count
```


通过cerebro来监控es集群


![image-20230813204137138.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813204137138.png)


## 集群脑裂问题


### 集群职责划分


elasticsearch中集群节点有不同的职责划分：


![image-20230813204627948.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813204627948.png)


默认情况下，集群中的任何一个节点都同时具备上述四种角色。


但是真实的集群一定要将集群职责分离：

- master节点：对CPU要求高，但是内存要求第
- data节点：对CPU和内存要求都高
- coordinating节点：对网络带宽、CPU要求高

职责分离可以让我们根据不同节点的需求分配不同的硬件去部署。而且避免业务之间的互相干扰。


### 脑裂问题


脑裂是因为集群中的节点失联导致的。


当网络恢复后，因为集群中有两个master节点，集群状态的不一致，出现脑裂的情况：


解决脑裂的方案是，要求选票超过 ( eligible节点数量 + 1 ）/ 2 才能当选为主，因此eligible节点数量最好是奇数。对应配置项是discovery.zen.minimum_master_nodes，在es7.0以后，已经成为默认配置，因此一般不会发生脑裂问题


master eligible节点的作用是什么？

- 参与集群选主
- 主节点可以管理集群状态、管理分片信息、处理创建和删除索引库的请求

data节点的作用是什么？

- 数据的CRUD

coordinator节点的作用是什么？

- 路由请求到其它节点
- 合并查询到的结果，返回给用户

## 集群分布式存储


当新增文档时，应该保存到不同分片，保证数据均衡，那么coordinating node如何确定数据该存储到哪个分片呢？


**分片存储原理**


elasticsearch会通过hash算法来计算文档应该存储到哪个分片：


`shard = hash(_routing) % number_of_shards`


说明：

- _routing默认是文档的id
- 算法与分片数量有关，因此索引库一旦创建，分片数量不能修改

![image-20230813205142296.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813205142296.png)


## 集群分布式查询


elasticsearch的查询分成两个阶段：

- scatter phase：分散阶段，coordinating node会把请求分发到每一个分片
- gather phase：聚集阶段，coordinating node汇总data node的搜索结果，并处理为最终结果集返回给用户

## 集群故障转移


集群的master节点会监控集群中的节点状态，如果发现有节点宕机，会立即将宕机节点的分片数据迁移到其它节点，确保数据安全，这个叫做故障转移。

1. node1是主节点，其它两个节点是从节点
2. node1发生了故障,重新选主，例如选中了node2
3. node2检测集群监控状态，发现：shard-1、shard-0没有副本节点
4. 将node1上的数据迁移到node2、node3
