---
title: 'Introduction to Elasticsearch'
published: 2023-08-13
updated: 2023-08-13
description: 'Elasticsearch is a powerful open-source search engine built on Lucene and commonly used for data storage, search, and analysis. Its core concepts include inverted indexes, documents and fields, indexes, and mappings. A comparison between Elasticsearch and MySQL highlights their respective advantages in data processing. Installing and using Elasticsearch involves creating indexes, managing documents, and querying through REST APIs. Aggregations enable statistical data analysis, while autocomplete and data synchronization improve user experience and data consistency. Cluster management ensures high availability and data security.'
image: 'https://r2.dreaife.tokyo/notion/covers/06857fefb59140378966d89e7a3f8914/2421860-20230813210602593-194327638.png'
tags: ['elasticSearch', 'java']
category: 'middle-side'
draft: false
lang: 'en'
---

# Getting Started with Elasticsearch


## Understanding ES


### What Elasticsearch Does


Elasticsearch is a very powerful open-source search engine with many powerful features. It can help us quickly find the content we need within massive amounts of data.


For example:

- Searching for code on GitHub
- Searching for products on e-commerce websites
- Searching for answers on Baidu
- Searching for nearby vehicles in ride-hailing apps

### The ELK Stack


Elasticsearch, together with Kibana, Logstash, and Beats, forms the Elastic Stack (ELK). It is widely used in fields such as log data analysis and real-time monitoring.


Elasticsearch is the core of the Elastic Stack and is responsible for storing, searching, and analyzing data.


![image-20230813012450107.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813012450107.png)


### Elasticsearch and Lucene


Elasticsearch is implemented on top of **Lucene**.


**Lucene** is a search engine library written in Java. It is a top-level Apache project developed by Doug Cutting in 1999.


The development history of **Elasticsearch**:

- In 2004, Shay Banon developed Compass based on Lucene
- In 2010, Shay Banon rewrote Compass and named it Elasticsearch

What is Elasticsearch?

- An open-source distributed search engine that can be used for search, log statistics, analysis, system monitoring, and other functions

What is the Elastic Stack (ELK)?

- A technology stack centered on Elasticsearch that includes Beats, Logstash, Kibana, and Elasticsearch

What is Lucene?

- An open-source Apache search engine library that provides the core APIs of a search engine

## Inverted Indexes


The concept of an inverted index is defined in contrast to a forward index such as those used by MySQL.


### Forward Indexes


For example, if an index is created for the `id` column in a table, a query by `id` can use the index directly and will be very fast.


However, a fuzzy query based on `title` can only scan the data row by row. The process is as follows:

1. The user searches for data where the title matches `"%手机%"
2. Retrieve data row by row, such as the row whose `id` is 1
3. Determine whether the `title` in the data matches the user's search condition
4. If it matches, add it to the result set; otherwise, discard it. Return to step 1

Scanning row by row is a full table scan. As the amount of data grows, query efficiency becomes progressively lower. When the data reaches millions of rows, this becomes a disaster.


### Inverted Indexes


There are two very important concepts in an inverted index:

- Document (`Document`): The data being searched. Each item of data is a document, such as a web page or a product record
- Term (`Term`): A meaningful word produced by applying a tokenization algorithm to document data or user search input

**Creating an inverted index** is a special way of processing a forward index. The process is as follows:

- Tokenize the data in each document with an algorithm to obtain individual terms
- Create a table in which each row contains the term, the ID and position of the document containing the term, and other information
- Because terms are unique, an index can be created for them, such as a hash-table-based index

The **search process** for an inverted index is as follows, using a search for "Xiaomi phone" as an example:


1) The user enters `"小米手机"` as the search condition.


2) **Tokenize** the user's input to obtain the terms `小米` and `手机`.


3) Look up the terms in the inverted index to obtain the IDs of documents containing them: 1, 2, and 3.


4) Use the document IDs to find the corresponding documents in the forward index.


Although the inverted index must be queried first and the forward index afterward, both the terms and document IDs are indexed, so queries are extremely fast and do not require a full table scan.


### Forward and Inverted Indexes


Why is one called a forward index and the other an inverted index?

- A **forward index** is the traditional method of indexing by ID. When querying by term, however, every document must first be retrieved individually and then checked to determine whether it contains the required term. This is the process of **finding terms from documents**.
- An **inverted index** works in the opposite direction. It first finds the term the user wants to search for, obtains the IDs of documents containing that term, and then retrieves the documents by ID. This is the process of **finding documents from terms**.

**Forward indexes**:

- Advantages:
    - Indexes can be created for multiple fields
    - Searching and sorting by indexed fields is extremely fast
- Disadvantages:
    - Searching by non-indexed fields or by partial terms within indexed fields requires a full table scan

**Inverted indexes**:

- Advantages:
    - Term-based and fuzzy searches are extremely fast
- Disadvantages:
    - Indexes can only be created for terms rather than fields
    - Results cannot be sorted by field

## Some ES Concepts


Elasticsearch has many concepts of its own. They differ slightly from those in MySQL, although there are also similarities.


### Documents and Fields


Elasticsearch stores data as **documents (`Document`)**. A document may represent a product record or an order record from a database. Document data is serialized into JSON and then stored in Elasticsearch.


A JSON document usually contains many **fields (`Field`)**, similar to columns in a database.


### Indexes and Mappings


An **index (`Index`)** is a collection of documents of the same type.


For example:

- All user documents can be organized together as a user index
- All product documents can be organized together as a product index
- All order documents can be organized together as an order index

Therefore, an index can be regarded as a table in a database.


Database tables have constraints that define their structure, field names, types, and other information. Similarly, an index has a **mapping (`mapping`)**, which defines constraints for the fields of documents in the index, similar to a table schema.


### MySQL and Elasticsearch


The concepts in MySQL and Elasticsearch can be compared as follows:


| **MySQL** | **Elasticsearch** | **Description** |
| --------- | ----------------- | -------------------------------------------------------- |
| Table     | Index             | An index is a collection of documents, similar to a database table |
| Row       | Document          | A document is an individual data record, similar to a row in a database. Documents are stored in JSON format |
| Column    | Field             | A field is a field within a JSON document, similar to a column in a database |
| Schema    | Mapping           | A mapping defines constraints for documents in an index, such as field type constraints. It is similar to a database table schema |
| SQL       | DSL               | DSL is the JSON-style request language provided by Elasticsearch for operating Elasticsearch and performing CRUD operations |


Each has its own strengths:

- MySQL: Excels at transactional operations and can ensure data security and consistency
- Elasticsearch: Excels at searching, analyzing, and computing massive amounts of data

In enterprise applications, the two are often used together:

- Write operations with high security requirements are implemented using MySQL
- Search requirements with high query-performance demands are implemented using Elasticsearch
- The data in both systems is synchronized in some way to ensure consistency

## Installation


### Installing ES and Kibana


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


### Installing the IK Analyzer


```shell
docker exec -it es bash

./bin/elasticsearch-plugin install <https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v8.8.1/elasticsearch-analysis-ik-8.8.1.zip>

exit
#重启容器
docker restart elasticsearch
```


Add the following to the `IKAnalyzer.cfg.xml` configuration file:


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


Restart after modifying the corresponding files.


What does an analyzer do?

- Tokenizes documents when creating an inverted index
- Tokenizes input when a user performs a search

What modes does the IK analyzer provide?

- ik_smart: Intelligent coarse-grained tokenization
- ik_max_word: Finest-grained tokenization

How can terms be added to or excluded from the IK analyzer?

- Use the `IkAnalyzer.cfg.xml` file in the `config` directory to add extension and stop-word dictionaries
- Add extended terms or stop words to the dictionaries

# Index Operations


An index is similar to a database table, while a mapping is similar to the table's structure.


Before storing data in ES, we must first create the “database” and “table.”


## Mapping Properties


A mapping defines constraints for documents in an index. Common mapping properties include:

- type: Field data type. Common simple types include:
    - String: text (tokenizable text), keyword (exact values such as brands, countries, and IP addresses)
    - Numeric: long, integer, short, byte, double, float
    - Boolean: boolean
    - Date: date
    - Object: object
- index: Whether to create an index; defaults to true
- analyzer: Which analyzer to use
- properties: Subfields of the field

## Index CRUD Operations


What index operations are available?

- Create an index: PUT /index name
- Query an index: GET /index name
- Delete an index: DELETE /index name
- Add a field: PUT /index name/_mapping

### Creating an Index and Mapping


**Basic syntax**:

- Request method: PUT
- Request path: /index name, which can be customized
- Request parameters: mapping

Format:


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


### Querying an Index


**Basic syntax**:

- Request method: GET
- Request path: /index name
- Request parameters: None

**Format**:


```plain text
GET /索引库名
```


### Modifying an Index


Although the structure of an inverted index is not complex, once its data structure changes—for example, when the analyzer changes—the inverted index must be rebuilt. This would be disastrous. Therefore, **once an index has been created, its mapping cannot be modified**.


Although existing fields in a mapping cannot be modified, new fields can be added because doing so does not affect the inverted index.


**Syntax**:


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


### Deleting an Index


**Syntax:**

- Request method: DELETE
- Request path: /index name
- Request parameters: None

**Format:**


```plain text
DELETE /索引库名
```


# Document Operations


What document operations are available?

- Create a document: POST /{index name}/_doc/document ID { JSON document }
- Query a document: GET /{index name}/_doc/document ID
- Delete a document: DELETE /{index name}/_doc/document ID
- Modify a document:
    - Full update: PUT /{index name}/_doc/document ID { JSON document }
    - Partial update: POST /{index name}/_update/document ID { "doc": {field}}

## Creating a Document


**Syntax:**


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


## Querying a Document


Following REST conventions, `POST` is used to create data and `GET` should be used to query it. Queries generally require conditions, so the document ID is included here.


**Syntax:**


```json
GET /{索引库名称}/_doc/{id}
```


## Deleting a Document


Deletion uses a DELETE request and likewise requires an ID:


**Syntax:**


```plain text
DELETE /{索引库名}/_doc/id值
```


## Modifying a Document


There are two ways to modify a document:

- Full update: Directly overwrite the original document
- Partial update: Modify only some fields in the document

### Full Update


A full update overwrites the original document. Essentially, it:

- Deletes the document with the specified ID
- Creates a document with the same ID

**Note**: If no document exists for the ID during deletion, the creation in the second step will still be performed, turning the update into a create operation.


**Syntax:**


```json
PUT /{索引库名}/_doc/文档id
{
    "字段1": "值1",
    "字段2": "值2",
    // ... 略
}
```


### Partial Update


A partial update modifies only specified fields in the document matching the given ID.


**Syntax:**


```json
POST /{索引库名}/_update/文档id
{
    "doc": {
         "字段名": "新的值",
    }
}
```


# REST API


ES officially provides clients for various programming languages. These clients essentially assemble DSL statements and send them to ES through HTTP requests.


There are two types of Java REST clients:

- Java Low Level Rest Client
- Java High Level Rest Client

The basic steps for index operations are:

- Initialize `RestHighLevelClient`
- Create an `XxxIndexRequest`, where `XXX` is Create, Get, or Delete
- Prepare the DSL, which is required for Create but not for the others
- Send the request by calling the `RestHighLevelClient#indices().xxx()` method, where `xxx` is create, exists, or delete

## Initializing RestClient


In the API provided by Elasticsearch, all interaction with Elasticsearch is encapsulated in a class named `RestHighLevelClient`. This object must first be initialized to establish a connection to Elasticsearch.


There are three steps:

1. Add the ES `RestHighLevelClient` dependency:

```xml
<dependency>
    <groupId>org.elasticsearch.client</groupId>
    <artifactId>elasticsearch-rest-high-level-client</artifactId>
</dependency>
```

1. Because the default ES version in Spring Boot is 7.6.2, override the default ES version:

```xml
<properties>
    <java.version>1.8</java.version>
    <elasticsearch.version>7.12.1</elasticsearch.version>
</properties>
```

1. Initialize `RestHighLevelClient`:

The initialization code is as follows:


```java
RestHighLevelClient client = new RestHighLevelClient(RestClient.builder(
        HttpHost.create("<http://127.0.0.1:9200>")
));
```


## Creating an Index


The code consists of three steps:

- Create the Request object. Because this operation creates an index, the Request is a `CreateIndexRequest`.
- Add request parameters, which are the JSON parameters in the DSL. Because the JSON string is lengthy, a static string constant named `MAPPING_TEMPLATE` is defined to make the code more elegant.
- Send the request. The return value of the `client.indices()` method is of type `IndicesClient`, which encapsulates all methods related to index operations.

Create a class in the `constants` package and define a JSON string constant for the mapping.


In the test class, write a unit test that creates the index:


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


## Deleting an Index


The DSL statement for deleting an index is very simple:


```json
DELETE /hotel
```


Compared with creating an index:

- The request method changes from PUT to DELTE
- The request path remains unchanged
- There are no request parameters

The primary difference in the code is therefore the Request object. The operation still consists of three steps:

- Create the Request object, this time a `DeleteIndexRequest`
- Prepare the parameters; there are none here
- Send the request using the `delete` method

In the `HotelIndexTest` test class in `hotel-demo`, write a unit test that deletes the index:


```java
@Test
void testDeleteHotelIndex() throws IOException {
    // 1.创建Request对象
    DeleteIndexRequest request = new DeleteIndexRequest("hotel");
    // 2.发送请求
    client.indices().delete(request, RequestOptions.DEFAULT);
}
```


## Checking Whether an Index Exists


Checking whether an index exists is essentially a query. The corresponding DSL is:


```json
GET /hotel
```


Therefore, the Java code follows a process similar to deletion. It still consists of three steps:

- 1) Create the Request object, this time a `GetIndexRequest`
- 2) Prepare the parameters; there are none here
- 3) Send the request using the `exists` method

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


# Operating on Documents with RestClient


The general process for operating Elasticsearch with Java Rest Client is similar. The core is using the `client.indices()` method to obtain an object for index operations.


The basic steps for document operations are:

- Initialize `RestHighLevelClient`
- Create an `XxxRequest`, where `XXX` is Index, Get, Update, Delete, or Bulk
- Prepare parameters, which are required for Index, Update, and Bulk
- Send the request by calling the `RestHighLevelClient#.xxx()` method, where `xxx` is index, get, update, delete, or bulk
- Parse the result, which is required for Get

## Adding a Document


We want to retrieve hotel data from the database and write it to Elasticsearch.


Define a new type that matches the index structure:


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


The DSL statement for adding a document is:


```json
POST /{索引库名}/_doc/1
{
    "name": "Jack",
    "age": 21
}
```


As with creating an index, this also consists of three steps:

- Create the Request object
- Prepare the request parameters, namely the JSON document in the DSL
- Send the request

The difference is that the [`client.xxx`](http://xn--client-vt9in98k266am0d6y0gd5e.xxx/)() API is used directly here, and `client.indices()` is no longer needed.


Write a unit test:


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


## Querying a Document


The DSL statement for querying a document is:


```json
GET /hotel/_doc/{id}
```


This is very simple, so the code can broadly be divided into two steps:

- Prepare the Request object
- Send the request

However, the purpose of the query is to obtain a result and parse it into a `HotelDoc`, so the difficult part is parsing the result.


The result is JSON, with the document stored in a `_source` property. Parsing therefore consists of retrieving `_source` and deserializing it into a Java object.


As before, there are three steps:

- Prepare the Request object. This is a query, so use `GetRequest`
- Send the request and obtain the result. Because this is a query, call the `client.get()` method
- Parse the result by deserializing the JSON

Write a unit test:


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


## Deleting a Document


The DSL for deletion is:


```json
DELETE /hotel/_doc/{id}
```


Compared with a query, only the request method changes from DELETE to GET. The Java code can therefore still be considered a three-step process:

- Prepare the Request object. Because this is a deletion, use a `DeleteRequest` and specify the index name and ID
- Prepare the parameters; there are none
- Send the request using the `client.delete()` method

Write a unit test:


```java
@Test
void testDeleteDocument() throws IOException {
    // 1.准备Request
    DeleteRequest request = new DeleteRequest("hotel", "61083");
    // 2.发送请求
    client.delete(request, RequestOptions.DEFAULT);
}
```


## Modifying a Document


As discussed earlier, there are two ways to modify a document:

- Full update: Essentially delete by ID and then create the document again
- Partial update: Modify specified field values in the document

In the RestClient API, the API for a full update is exactly the same as the API for creation. The behavior depends on the ID:

- If the ID already exists when adding the document, the document is updated
- If the ID does not exist when adding the document, a new document is created

This will not be repeated here. We will focus mainly on partial updates.

- Prepare the Request object. This is an update, so use `UpdateRequest`
- Prepare the parameters, namely the JSON document containing the fields to be modified
- Update the document by calling the `client.update()` method

Write a unit test:


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


## Bulk Importing Documents


Case requirement: Use `BulkRequest` to import database data into an index in batches.


The steps are as follows:

- Query hotel data using MyBatis-Plus
- Convert the queried hotel data (`Hotel`) into document data (`HotelDoc`)
- Use `BulkRequest` in Java Rest Client for batch processing and bulk document creation

A `BulkRequest` essentially combines multiple ordinary CRUD requests and sends them together. It provides an `add` method for adding other requests:


The supported requests include:

- `IndexRequest`, which creates a document
- `UpdateRequest`, which updates a document
- `DeleteRequest`, which deletes a document

Write a unit test:


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


# Querying Documents with DSL


Elasticsearch queries are also implemented using a JSON-style DSL.


## DSL Query Categories


Elasticsearch provides a JSON-based DSL ([Domain Specific Language](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html)) for defining queries. Common query types include:

- **Match-all queries**: Retrieve all data and are generally used for testing. For example: match_all
- **Full-text queries**: Use an analyzer to tokenize user input and then match the resulting terms against the inverted index. For example:
    - match_query
    - multi_match_query
- **Exact queries**: Find data by exact term values and are generally used for keyword, numeric, date, boolean, and similar field types. For example:
    - ids
    - range
    - term
- **Geographic (`geo`) queries**: Query by latitude and longitude. For example:
    - geo_distance
    - geo_bounding_box
- **Compound queries**: Combine different query conditions into a single query. For example:
    - bool
    - function_score

The basic query syntax is consistent:


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


## Full-Text Queries


The basic process of a full-text query is as follows:

- Tokenize the user's search input to obtain terms
- Match the terms against the inverted index to obtain document IDs
- Find the documents by their IDs and return them to the user

Common use cases include:

- Search boxes in online stores
- The Baidu search box

Common full-text queries include:

- match query: Single-field query

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

- multi_match query: Multi-field query. A result matches if any field meets the condition. The more fields included in the query, the worse its performance

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


## Exact Queries


Exact queries are generally used for keyword, numeric, date, boolean, and similar field types. Therefore, search conditions are **not** tokenized. Common exact queries include:

- term: Queries by an exact term value and is generally used for keyword, numeric, boolean, and date fields

    Because fields used for exact queries are not tokenized, the query condition must also be an **untokenized** term. A result matches only when the user's input exactly matches the stored value. If the user enters too much content, no data may be found.


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

- range: Queries by a range of values, such as a numeric or date range

    Range queries are generally used to filter numeric fields by range, such as filtering by price range.


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


## Geographic Coordinate Queries


A geographic coordinate query is simply a query based on latitude and longitude.


Common use cases include:

- Ctrip: Searching for hotels near me
- Didi: Searching for taxis near me
- WeChat: Searching for people near me
- Rectangular bounding-box queries

    A rectangular bounding-box query, also known as a `geo_bounding_box` query, retrieves all documents whose coordinates fall within a specified rectangle.


    The query requires the coordinates of the rectangle's **top-left** and **bottom-right** points. A rectangle is then drawn, and all points within it satisfy the condition.


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

- Nearby queries

    A nearby query, also called a distance query (`geo_distance`), retrieves all documents within a specified distance of a center point.


    In other words, select a point on the map as the center and draw a circle with the specified distance as its radius. All coordinates within the circle satisfy the condition.


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


## Compound Queries


Compound queries combine other simple queries to implement more complex search logic. There are two common types:

- function score: A scoring-function query that controls document relevance scores and rankings
- bool query: A Boolean query that combines multiple queries through logical relationships to implement complex searches

### Relevance Scoring


When a match query is used, document results are scored according to their relevance to the search terms (`_score`) and returned in descending order of score.


Early versions of Elasticsearch used the TF-IDF scoring algorithm, whose formulas are shown below:


$$
TF(\text{term frequency}) = \frac{\text{number of term occurrences}}{\text{total number of terms in the document}}
$$


$$
IDF(\text{inverse document frequency})=Log(\frac{\text{total number of documents}}{\text{number of documents containing the term}})
$$


$$
score = \sum_{i=1}^{n}TF(\text{term frequency})*IDF(\text{inverse document frequency})
$$


In the later version 5.1 update, Elasticsearch improved the algorithm by switching to BM25, whose formula is shown below:


$$
Score(Q,d) = \sum_{i=1}^n\log(1+\frac{N-n+0.5}{n+0.5})\cdot\frac{f_i}{f_i+k_1\cdot(1-b+b\cdot\frac{dl}{avgdl})}
$$


One drawback of TF-IDF is that the higher a term's frequency, the higher the document's score becomes, allowing a single term to have a large impact on the document. BM25 places an upper limit on the contribution of a single term, producing a smoother curve.


### Function Score Queries


Scoring by relevance is a reasonable requirement, but **what is reasonable is not necessarily what the product manager needs**.


Take Baidu as an example. Search results are not necessarily ranked higher because they are more relevant; those who pay more may rank higher.


To manually control relevance scoring, use a function score query in Elasticsearch.


A function score query contains four parts:

- **Original query** condition: The `query` section searches for documents and scores them using BM25, producing the **original score** (`query score`)
- **Filter condition**: The `filter` section determines which documents are rescored
- **Scoring function**: Documents that meet the filter condition are processed by this function to produce a **function score**. There are four types of functions:
    - weight: The function result is a constant
    - field_value_factor: Uses the value of a document field as the function result
    - random_score: Uses a random number as the function result
    - script_score: Uses a custom scoring algorithm
- **Combination mode**: `boost_mode` determines how the scoring function's result and the original query's relevance score are combined. Options include:
    - multiply: Multiply them
    - replace: Replace the query score with the function score
    - Others, such as sum, avg, max, and min

The function score execution process is as follows:

- Search for documents using the **original condition** and calculate relevance scores, known as the **original scores** (`query score`)
- Filter the documents using the **filter condition**
- Apply the **scoring function** to documents that meet the **filter condition**, producing a **function score**
- Combine the **original score** (`query score`) and **function score** according to the **combination mode** to obtain the final relevance score

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


What are the three elements of a function score query?

- Filter condition: Which documents should receive a score boost
- Scoring function: How the function score is calculated
- Combination method: How the function score and query score are combined

### Boolean Queries


A Boolean query combines one or more query clauses, each of which is a **subquery**. Subqueries can be combined in the following ways:

- must: Must match every subquery, similar to “AND”
- should: Optionally matches subqueries, similar to “OR”
- must_not: Must not match and **does not participate in scoring**, similar to “NOT”
- filter: Must match and **does not participate in scoring**

Note that during a search, **the more fields that participate in scoring, the worse the query performance**. For multi-condition queries, the following approach is recommended:

- Use a full-text query in `must` for keyword searches from the search box so that they participate in scoring
- Use `filter` for other filtering conditions so that they do not participate in scoring

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


# Processing Search Results


Search results can be processed or displayed in a user-specified manner.


## Sorting


By default, Elasticsearch sorts results by relevance score (`_score`), but it also supports custom [result sorting](https://www.elastic.co/guide/en/elasticsearch/reference/current/sort-search-results.html). Sortable field types include keyword, numeric, geographic coordinate, and date fields.

- Sorting by ordinary fields

    The syntax for sorting keyword, numeric, and date fields is essentially the same.


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


    The sort conditions form an array, so multiple conditions can be specified. They are applied in declaration order: if the first condition produces equal values, results are sorted by the second condition, and so on.

- Sorting by geographic coordinates

    Geographic coordinate sorting is slightly different.


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


    This query means:

    - Specify a coordinate as the target point
    - Calculate the distance from the coordinate in a specified field of each document—which must be of type `geo_point`—to the target point
    - Sort by distance

## Pagination


By default, Elasticsearch returns only the top 10 records. To query more data, pagination parameters must be changed. Elasticsearch controls the paginated results through the `from` and `size` parameters:

- from: The document at which to start
- size: The total number of documents to query

This is similar to `limit ?, ?` in MySQL.


The basic pagination syntax is:


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


When the pagination depth is large, aggregating too much data places substantial pressure on memory and CPU. Elasticsearch therefore rejects requests where `from + size` exceeds 10,000.


ES provides two solutions for deep pagination:

- search after: Requires sorting during pagination. It begins from the previous page's sort value and queries the next page. This is the officially recommended approach.
- scroll: Creates a snapshot of the sorted document IDs and stores it in memory. This approach is no longer officially recommended.

Common pagination implementations and their advantages and disadvantages:

- `from + size`:
    - Advantage: Supports random page navigation
    - Disadvantage: Has a deep-pagination problem, and the default query limit for `from + size` is 10,000
    - Use case: Search experiences with random page navigation, such as Baidu, JD.com, Google, and Taobao
- `after search`:
    - Advantage: No query limit, provided that the `size` of a single query does not exceed 10,000
    - Disadvantage: Can only query pages sequentially in the forward direction and does not support random page navigation
    - Use case: Searches that do not require random page navigation, such as scrolling downward on a mobile device
- `scroll`:
    - Advantage: No query limit, provided that the `size` of a single query does not exceed 10,000
    - Disadvantage: Consumes additional memory, and search results are not real-time
    - Use case: Retrieving and migrating massive amounts of data. It has not been recommended since ES 7.1; the after search approach is recommended instead.

## Highlighting


When searching on Baidu or JD.com, keywords turn red and become more noticeable. This is called highlighting.


Highlighting is implemented in two steps:

- Add a tag such as an `<em>` tag around every keyword in the document
- Define a CSS style for the `<em>` tag on the page

**Highlight syntax**:


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


**Note:**

- Highlighting applies to keywords, so the **search condition must contain keywords** rather than being a range query or similar query
- By default, the **highlighted field must be the same as the field specified in the search**, otherwise it cannot be highlighted
- To highlight a field that is not searched, add the property `required_field_match=false`

# Querying Documents with RestClient


Document queries also use the previously introduced `RestHighLevelClient` object. The basic steps include:

- Prepare the Request object
- Prepare the request parameters
- Send the request
- Parse the response

## Quick Start


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

- First, create a `SearchRequest` object and specify the index name
- Second, use `request.source()` to build the DSL. The DSL can contain queries, pagination, sorting, highlighting, and other options
    - `query()`: Represents the query condition. `QueryBuilders.matchAllQuery()` builds the DSL for a match_all query. `QueryBuilders` also provides match, term, function_score, bool, and various other queries
- Third, use `client.search()` to send the request and obtain the response

The result returned by Elasticsearch is a JSON string with the following structure:

- `hits`: The matching results
    - `total`: The total number of records; its `value` contains the specific total
    - `max_score`: The highest relevance score among all matching documents
    - `hits`: An array of documents in the search results, where each document is a JSON object
        - `_source`: The document's original data, which is also a JSON object

Therefore, parsing the response means parsing the JSON string layer by layer, as follows:

- `SearchHits`: Obtained through `response.getHits()`. This corresponds to the outermost `hits` in the JSON and represents the matching results
    - `SearchHits#getTotalHits().value`: Retrieves the total number of records
    - `SearchHits#getHits()`: Retrieves the `SearchHit` array, namely the document array
        - `SearchHit#getSourceAsString()`: Retrieves `_source` from the document result, namely the original JSON document data

## Match Queries


The APIs for the full-text `match` and `multi_match` queries are essentially the same as the API for `match_all`. The difference lies in the query condition, namely the `query` section.


Therefore, the main difference in the Java code is the parameter passed to `request.source().query()`. The appropriate method provided by `QueryBuilders` is still used.


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


## Exact Queries


There are two main types of exact queries:

- term: Exact term matching
- range: Range queries

Compared with previous queries, the only difference is again the query condition; everything else remains the same.


```java
//词条查询
QueryBuilders.termQuery("city","杭州");

//范围查询
QueryBuilders.rangeQuery("price").gte(100).lte(150);
```


## Boolean Queries


Boolean queries combine other queries using `must`, `must_not`, `filter`, and similar clauses.


The API differs from other queries only in how the query condition is built. `QueryBuilders`, result parsing, and all other code remain unchanged.


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


## Sorting and Pagination


Sorting and pagination of search results are parameters at the same level as `query`, so they are also configured through `request.source()`.


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


## Highlighting


The highlighting code differs significantly from the previous code in two ways:

- Query DSL: In addition to the query condition, a highlighting condition must be added at the same level as `query`
- Result parsing: In addition to parsing the `_source` document data, the highlighting result must also be parsed
    - Step 1: Retrieve `source` from the result using `hit.getSourceAsString()`. This is the non-highlighted result as a JSON string and must be deserialized into a `HotelDoc` object
    - Step 2: Retrieve the highlighting result using `hit.getHighlightFields()`. The return value is a Map whose keys are highlighted field names and whose values are `HighlightField` objects representing highlighted values
    - Step 3: Retrieve the `HighlightField` object from the Map using the highlighted field name
    - Step 4: Retrieve the fragments from `HighlightField` and convert them to a string. This is the actual highlighted string
    - Step 5: Replace the non-highlighted value in `HotelDoc` with the highlighted result

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


# Heima Travel Case Study


Next, we will put the knowledge covered above into practice through the Heima Travel case study.


We will implement four features:

- Hotel search and pagination
- Hotel result filtering
- Hotels near me
- Sponsored hotel rankings

## Hotel Search and Pagination


Case requirement: Implement the hotel search function for Heima Travel, including keyword search and pagination.


### Defining Entity Classes


There are two entity classes: one for request parameters from the frontend and another for the response results returned by the server.


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


### Defining the Controller


Define a `HotelController` and declare a query endpoint that meets the following requirements:

- Request method: POST
- Request path: /hotel/list
- Request parameter: An object of type `RequestParam`
- Return value: `PageResult`, containing two properties
    - `Long total`: Total number of records
    - `List<HotelDoc> hotels`: Hotel data

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


### Implementing the Search Service


The controller calls `IHotelService`, but this method has not yet been implemented. We will therefore define it in `IHotelService` and implement the business logic.


The search service requires `RestHighLevelClient`, so it must be registered as a Spring Bean. Declare this Bean in `HotelDemoApplication` under `cn.itcast.hotel`:


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


## Filtering Hotel Results


Requirement: Add filtering by brand, city, star rating, price, and other criteria.


Only one part of the `search` method in `HotelService` needs to be modified: the query condition inside `requet.source().query( ... )`.


The previous implementation contained only a match query for keyword searches. We now need to add conditional filters, including:

- Brand filter: A keyword field queried using term
- Star-rating filter: A keyword field queried using term
- Price filter: A numeric field queried using range
- City filter: A keyword field queried using term

Multiple query conditions should be combined using a Boolean query:

- Place the keyword search in `must` so that it participates in scoring
- Place the other filter conditions in `filter` so that they do not participate in scoring

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


## Hotels Near Me


Sort nearby hotels by distance based on the `location` coordinates. The implementation approach is as follows:

- Modify `RequestParams` to accept a `location` field
- Modify the business logic of the `search` method so that when `location` has a value, results are sorted using `geo_distance`

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


Add sorting to the `search` method:


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


## Sponsored Hotel Rankings


Requirement: Place specified hotels at the top of the search results and add an **advertisement** label to them on the page.


A function_score query can influence scores. A higher score naturally results in a higher ranking. A function_score query contains three elements:

- Filter condition: Which documents should receive a score boost
- Scoring function: How the function score is calculated
- Combination method: How the function score and query score are combined

The requirement is to rank **specified hotels** higher. Therefore, these hotels need a marker so that the filter condition can **use that marker to determine whether their scores should be increased**.


The previously written Boolean query can be placed inside `query` as the **original query** condition. The next step is to add the **filter condition**, **scoring function**, and **combination mode**.


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


# Data Aggregation

- [**Aggregations**](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html) make it extremely convenient to perform statistics, analysis, and calculations on data. For example:
- Which mobile phone brand is the most popular?
- What are the average, highest, and lowest prices of these phones?
- What are the monthly sales figures for these phones?

Implementing these statistical functions is much more convenient than using database SQL, and query performance is extremely fast, enabling near-real-time search.


## Types of Aggregations


There are three common categories of aggregations:

- **Bucket aggregations**: Used to group documents
    - TermAggregation: Groups by document field values, such as by brand or country
    - Date Histogram: Groups into date intervals, such as one week or one month per group
- **Metric aggregations**: Used to calculate values such as the maximum, minimum, and average
    - Avg: Calculates the average
    - Max: Calculates the maximum
    - Min: Calculates the minimum
    - Stats: Calculates max, min, avg, sum, and other values together
- **Pipeline aggregations**: Perform aggregations based on the results of other aggregations
> **Note:** Fields participating in aggregations must be of the keyword, date, numeric, or boolean type

## Implementing Aggregations with DSL


Suppose we want to count how many hotel brands exist in all the data. This is essentially grouping the data by brand. We can aggregate by hotel brand name using a Bucket aggregation.


### Bucket Aggregation Syntax


The syntax is as follows:


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


### Sorting Aggregation Results


By default, a Bucket aggregation counts the documents in each Bucket as `_count` and sorts them by `_count` in descending order.


The `order` property can be specified to customize aggregation sorting:


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


### Limiting the Aggregation Scope


By default, a Bucket aggregation processes all documents in the index. In real-world scenarios, however, users enter search conditions, so the aggregation must be applied to the search results. A limiting condition must therefore be added.


The document scope of the aggregation can be limited by adding a `query` condition:


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


### Metric Aggregation Syntax


Suppose we now need to calculate values for hotels within each bucket, such as the minimum, maximum, and average user ratings for each brand.


This requires a Metric aggregation. For example, a stats aggregation can return min, max, avg, and other results.


The syntax is as follows:


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


Here, the `score_stats` aggregation is a nested sub-aggregation inside the `brandAgg` aggregation because the values need to be calculated separately for each bucket.


`aggs` represents an aggregation and is at the same level as `query`. What is the purpose of `query` here?

- To limit the document scope of the aggregation

The three required elements of an aggregation are:

- Aggregation name
- Aggregation type
- Aggregation field

Configurable aggregation properties include:

- size: Specifies the number of aggregation results
- order: Specifies how aggregation results are sorted
- field: Specifies the aggregation field

## Implementing Aggregations with the REST API


Aggregation conditions are at the same level as `query` conditions, so `request.source()` must be used to specify them.


Using Bucket aggregations to group documents in the search results by brand and city reveals which brands and cities are present.


Because the aggregation is performed on search results, it is a **scoped aggregation**. In other words, the aggregation uses the same limiting conditions as the document search.


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


# Autocomplete


When a user enters characters in a search box, related search terms should be suggested. This feature, which suggests complete terms based on the letters entered by the user, is called autocomplete.


## Pinyin Analyzer


To implement completion based on letters, documents must be tokenized into Pinyin. Elasticsearch has a Pinyin analysis plugin available on GitHub.


The installation steps are the same as for the IK analyzer.


```shell
docker exec -it es bash

./bin/elasticsearch-plugin install <https://github.com/medcl/elasticsearch-analysis-pinyin/releases/download/v7.12.1/elasticsearch-analysis-pinyin-7.12.1.zip>

exit
#重启容器
docker restart elasticsearch
```


## Custom Analyzers


By default, the Pinyin analyzer converts each Chinese character into a separate Pinyin token. We instead want each term to produce a group of Pinyin tokens, so the Pinyin analyzer must be customized to create a custom analyzer.


An Elasticsearch analyzer consists of three parts:

- character filters: Process text before the tokenizer, such as by deleting or replacing characters
- tokenizer: Splits text into terms according to specified rules. For example, `keyword` does not tokenize text, while `ik_smart` does
- tokenizer filter: Further processes the terms output by the tokenizer, such as converting case, handling synonyms, or processing Pinyin

When a document is analyzed, these three components process it in sequence:


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


## Autocomplete Queries


Elasticsearch provides the [Completion Suggester](https://www.elastic.co/guide/en/elasticsearch/reference/7.6/search-suggesters.html) query for implementing autocomplete. This query matches and returns terms that begin with the user's input. To improve completion-query efficiency, fields used by the query have several constraints:

- Fields participating in completion queries must be of the completion type
- A field's content is generally an array of multiple terms used for completion

Implementing autocomplete:


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


# Data Synchronization


The hotel data in Elasticsearch comes from a MySQL database. Therefore, when the MySQL data changes, the Elasticsearch data must change accordingly. This is known as **data synchronization** between Elasticsearch and MySQL.


There are three common data synchronization approaches:

- Synchronous calls
    - `hotel-demo` provides an external endpoint for modifying data in Elasticsearch
    - After completing a database operation, the hotel management service directly calls the endpoint provided by `hotel-demo`
- Asynchronous notifications
    - After `hotel-admin` creates, deletes, or updates data in the MySQL database, it sends an MQ message
    - `hotel-demo` listens for MQ messages and updates the Elasticsearch data after receiving one
- Listening to the binlog
    - Enable the binlog feature in MySQL
    - Every create, delete, and update operation performed by MySQL is recorded in the binlog
    - `hotel-demo` uses Canal to listen for binlog changes and update Elasticsearch content in real time

Approach 1: Synchronous calls

- Advantage: Simple and direct to implement
- Disadvantage: High coupling between services

Approach 2: Asynchronous notifications

- Advantage: Low coupling and moderate implementation difficulty
- Disadvantage: Depends on MQ reliability

Approach 3: Listening to the binlog

- Advantage: Completely decouples the services
- Disadvantage: Enabling the binlog increases the database load, and implementation is complex

## Implementing Data Synchronization


Use the `hotel-admin` project provided in the course materials as the hotel-management microservice. Whenever hotel data is created, deleted, or updated, the same operation must also be applied to the data in Elasticsearch.

- Start and test CRUD operations for hotel data
- Declare the exchange, queue, and RoutingKey
- Send messages from the create, delete, and update operations in `hotel-admin`
- Listen for messages in `hotel-demo` and update the data in Elasticsearch
- Start and test the data synchronization feature

## Declaring the Exchange and Queues


The MQ structure is shown below:


![image-20230813192805650.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813192805650.png)


Add the dependency:


```xml
<!--amqp-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```


Define a configuration class containing the declarations:


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


Send MQ messages from the create, delete, and update operations in `hotel-admin`:


## Sending MQ Messages


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


## Receiving MQ Messages


Write a listener.


Add a class to the `cn.itcast.hotel.mq` package in `hotel-demo`:


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


Implement the business logic:


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


# Clusters


A standalone Elasticsearch instance used for data storage inevitably faces two problems: storing massive amounts of data and single points of failure.

- Massive data storage: Logically divide an index into N shards and store them across multiple nodes
- Single point of failure: Back up shard data on different nodes using replicas

**ES cluster concepts**:

- Cluster (`cluster`): A group of nodes sharing the same cluster name
- <font color="red">Node (`node`)</font>: An Elasticsearch instance within a cluster
- <font color="red">Shard (`shard`)</font>: An index can be divided into separate parts for storage, and these parts are called shards. In a cluster environment, different shards of the same index can be distributed across different nodes

    Problem solved: The amount of data is too large for the limited storage capacity of a single node.

- Primary shard: Defined in contrast to replica shards
- Replica shard: Each primary shard can have one or more replicas containing the same data as the primary shard

Data replication ensures high availability, but if every shard has one replica, the required number of nodes doubles, making the cost too high.


To balance high availability and cost, we can do the following:

- First, shard the data and store the shards on different nodes
- Then, replicate each shard onto another node so that the nodes back each other up

This can greatly reduce the number of required service nodes.


## Creating an ES Cluster


Create the cluster using Docker Compose:


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


If installation through WSL makes the cluster inaccessible, run the following commands to increase the memory limit. At least 4 GB is required.


```shell
wsl -d docker-desktop
echo 262144 >> /proc/sys/vm/max_map_count
```


Monitor the ES cluster using Cerebro.


![image-20230813204137138.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813204137138.png)


## Cluster Split-Brain Problems


### Separation of Cluster Responsibilities


Nodes in an Elasticsearch cluster have different responsibilities:


![image-20230813204627948.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813204627948.png)


By default, every node in a cluster has all four roles described above.


In a real cluster, however, these responsibilities must be separated:

- Master nodes: Have high CPU requirements but lower memory requirements
- Data nodes: Have high CPU and memory requirements
- Coordinating nodes: Have high network-bandwidth and CPU requirements

Separating responsibilities allows different hardware to be assigned according to the needs of each node and prevents different workloads from interfering with one another.


### Split-Brain Problems


Split brain occurs when nodes in a cluster lose contact with one another.


When the network recovers, the cluster may have two master nodes with inconsistent cluster states, resulting in split brain.


The solution is to require more than `(number of eligible nodes + 1) / 2` votes for a node to be elected master. The number of eligible nodes should therefore preferably be odd. The corresponding configuration option is `discovery.zen.minimum_master_nodes`. Since ES 7.0, this has been the default configuration, so split brain generally does not occur.


What is the role of a master-eligible node?

- Participates in electing the cluster master
- A master node can manage cluster state and shard information, and process requests to create and delete indexes

What is the role of a data node?

- Performs data CRUD operations

What is the role of a coordinator node?

- Routes requests to other nodes
- Merges query results and returns them to the user

## Distributed Cluster Storage


When a document is created, it should be stored in one of the shards so that the data remains balanced. How does a coordinating node determine which shard should store the data?


**Shard storage principles**


Elasticsearch uses a hash algorithm to calculate which shard should store a document:


`shard = hash(_routing) % number_of_shards`


Explanation:

- `_routing` defaults to the document ID
- The algorithm depends on the number of shards, so once an index has been created, the number of shards cannot be changed

![image-20230813205142296.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813205142296.png)


## Distributed Cluster Queries


An Elasticsearch query consists of two phases:

- scatter phase: The coordinating node distributes the request to every shard
- gather phase: The coordinating node aggregates search results from the data nodes, processes them into the final result set, and returns it to the user

## Cluster Failover


The cluster's master node monitors the status of all nodes in the cluster. If a node goes down, the master immediately migrates the failed node's shard data to other nodes to ensure data safety. This is called failover.

1. `node1` is the master node, and the other two nodes are follower nodes
2. `node1` fails, so a new master is elected—for example, `node2`
3. `node2` checks the cluster state and discovers that `shard-1` and `shard-0` have no replica nodes
4. The data from `node1` is migrated to `node2` and `node3`
