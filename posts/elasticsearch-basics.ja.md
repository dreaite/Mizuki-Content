---
title: 'Elasticsearch入門'
published: 2023-08-13
updated: 2023-08-13
description: 'Elasticsearchは、Luceneを基盤とする強力なオープンソース検索エンジンで、データの保存、検索、分析に広く利用されています。主要な概念には、転置インデックス、ドキュメントとフィールド、インデックスとマッピングがあります。ElasticsearchとMySQLを比較すると、データ処理におけるそれぞれの強みの違いが明らかになります。Elasticsearchの導入と利用には、インデックスの作成、ドキュメント操作、REST APIを使用したクエリが含まれます。集約機能によってデータの統計分析が可能になり、オートコンプリート機能とデータ同期機能によって、ユーザー体験とデータの整合性が向上します。クラスター管理により、高可用性とデータの安全性が確保されます。'
image: 'https://r2.dreaife.tokyo/notion/covers/06857fefb59140378966d89e7a3f8914/2421860-20230813210602593-194327638.png'
tags: ['elasticSearch', 'java']
category: 'middle-side'
draft: false
lang: 'ja'
---

# Elasticsearch入門


## ESを理解する


### Elasticsearchの役割


Elasticsearchは非常に強力なオープンソースの検索エンジンです。多くの優れた機能を備えており、膨大なデータの中から必要な情報をすばやく見つけることができます。


たとえば：

- GitHubでコードを検索する
- ECサイトで商品を検索する
- Baiduで回答を検索する
- 配車アプリで近くの車両を検索する

### ELK技術スタック


ElasticsearchにKibana、Logstash、Beatsを組み合わせたものがElastic Stack（ELK）です。ログデータ分析やリアルタイム監視などの分野で広く利用されています。


ElasticsearchはElastic Stackの中核であり、データの保存、検索、分析を担当します。


![image-20230813012450107.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813012450107.png)


### ElasticsearchとLucene


Elasticsearchは内部的に**Lucene**をベースとして実装されています。


**Lucene**はJavaで記述された検索エンジンライブラリです。Apacheのトップレベルプロジェクトであり、Doug Cuttingによって1999年に開発されました。


**Elasticsearch**の発展の歴史：

- 2004年、Shay BanonがLuceneをベースにCompassを開発
- 2010年、Shay BanonがCompassを書き直し、Elasticsearchと命名

Elasticsearchとは？

- 検索、ログ集計、分析、システム監視などを実現できる、オープンソースの分散型検索エンジン

Elastic Stack（ELK）とは？

- Elasticsearchを中核とし、Beats、Logstash、Kibana、Elasticsearchで構成される技術スタック

Luceneとは？

- 検索エンジンの中核APIを提供する、Apacheのオープンソース検索エンジンライブラリ

## 転置インデックス


転置インデックスの概念は、MySQLのような順方向インデックスとの対比に基づいています。


### 順方向インデックス


たとえばテーブルのidにインデックスを作成した場合、idによる検索ではインデックスが直接使用されるため、非常に高速です。


しかし、titleに基づいてあいまい検索を行う場合、データを1行ずつ走査するしかありません。処理の流れは次のとおりです：

1. ユーザーがデータを検索し、条件としてtitleが`"%手机%"`に一致することを指定
2. idが1のデータなど、データを1行ずつ取得
3. データ内のtitleがユーザーの検索条件に一致するか判定
4. 一致する場合は結果セットに追加し、一致しない場合は破棄して手順1に戻る

1行ずつ走査する処理は、すなわちフルテーブルスキャンです。データ量が増えるほど検索効率は低下します。データが数百万件に達すると、深刻な問題になります。


### 転置インデックス


転置インデックスには、非常に重要な概念が2つあります：

- ドキュメント（`Document`）：検索対象となるデータであり、各データが1つのドキュメントです。たとえばWebページや商品情報などです
- ターム（`Term`）：ドキュメントデータやユーザーの検索データを何らかのアルゴリズムで分割して得られる、意味を持つ単語です

**転置インデックスの作成**は、順方向インデックスに対する特殊な処理であり、流れは次のとおりです：

- アルゴリズムを使用して各ドキュメントのデータを分割し、複数のタームを取得する
- ターム、そのタームが存在するドキュメントのid、位置などの情報を含むテーブルを作成する
- タームは一意であるため、ハッシュテーブル構造などのインデックスをタームに作成する

転置インデックスの**検索フロー**は次のとおりです（「小米手机」を検索する場合）：


1）ユーザーが条件として`"小米手机"`を入力して検索します。


2）ユーザーの入力内容を**分割**し、`小米`と`手机`というタームを取得します。


3）タームを使って転置インデックスを検索すると、そのタームを含むドキュメントidである1、2、3が得られます。


4）ドキュメントidを使って順方向インデックスから具体的なドキュメントを検索します。


最初に転置インデックスを検索し、その後に転置インデックスを検索する必要はありますが、タームにもドキュメントidにもインデックスが作成されているため、検索は非常に高速です。フルテーブルスキャンは必要ありません。


### 順方向インデックスと転置インデックス


では、なぜ一方を順方向インデックス、もう一方を転置インデックスと呼ぶのでしょうか？

- **順方向インデックス**は、idに基づく最も伝統的なインデックス方式です。しかしタームを検索する場合は、各ドキュメントを1件ずつ取得し、必要なタームが含まれているか確認しなければなりません。これは**ドキュメントからタームを探す処理**です。
- **転置インデックス**はその逆です。まずユーザーが検索するタームを見つけ、そのタームを含むドキュメントのidを取得し、idに基づいてドキュメントを取得します。これは**タームからドキュメントを探す処理**です。

**順方向インデックス**：

- 長所：
    - 複数のフィールドにインデックスを作成できる
    - インデックスが作成されたフィールドによる検索やソートが非常に高速
- 短所：
    - インデックスのないフィールドや、インデックス付きフィールド内の一部のタームを検索する場合、フルテーブルスキャンしか行えない

**転置インデックス**：

- 長所：
    - ターム検索やあいまい検索が非常に高速
- 短所：
    - インデックスを作成できるのはフィールドではなくタームのみ
    - フィールドに基づくソートができない

## ESの基本概念


Elasticsearchには独自の概念が数多くあります。MySQLとは多少異なりますが、似ている部分もあります。


### ドキュメントとフィールド


Elasticsearchは**ドキュメント（Document）**指向でデータを保存します。ドキュメントには、データベース内の1件の商品データや注文情報などがあります。ドキュメントデータはJSON形式にシリアライズされた後、Elasticsearchに保存されます。


JSONドキュメントには通常、多数の**フィールド（Field）**が含まれます。これはデータベースの列に相当します。


### インデックスとマッピング


**インデックス（Index）**とは、同じ種類のドキュメントの集合です。


たとえば：

- すべてのユーザードキュメントをまとめたものは、ユーザーインデックスと呼べる
- すべての商品ドキュメントをまとめたものは、商品インデックスと呼べる
- すべての注文ドキュメントをまとめたものは、注文インデックスと呼べる

したがって、インデックスはデータベースのテーブルに相当すると考えられます。


データベースのテーブルには、テーブル構造、フィールド名、型などを定義する制約情報があります。同様に、インデックスには**マッピング（mapping）**があり、インデックス内のドキュメントに対するフィールド制約を定義します。これはテーブル構造の制約に相当します。


### MySQLとElasticsearch


MySQLとElasticsearchの概念をまとめて比較します：


| **MySQL** | **Elasticsearch** | **説明**                                                   |
| --------- | ----------------- | -------------------------------------------------------- |
| Table     | Index             | インデックス（index）はドキュメントの集合であり、データベースのテーブル（table）に相当する |
| Row       | Document          | ドキュメント（Document）は1件ごとのデータであり、データベースの行（Row）に相当する。ドキュメントはすべてJSON形式 |
| Column    | Field             | フィールド（Field）はJSONドキュメント内のフィールドであり、データベースの列（Column）に相当する |
| Schema    | Mapping           | Mapping（マッピング）は、フィールド型の制約など、インデックス内のドキュメントに対する制約であり、データベースのテーブル構造（Schema）に相当する |
| SQL       | DSL               | DSLはElasticsearchが提供するJSON形式のリクエスト文であり、Elasticsearchを操作してCRUDを実現する |


両者には、それぞれ得意な領域があります：

- MySQL：トランザクション処理を得意とし、データの安全性と一貫性を保証できる
- Elasticsearch：大量データの検索、分析、計算を得意とする

企業では、多くの場合、両者を組み合わせて使用します：

- 高い安全性が求められる書き込み処理にはMySQLを使用する
- 高い検索性能が求められる検索処理にはElasticsearchを使用する
- 何らかの方法で両者のデータを同期し、一貫性を保証する

## インストール


### ESとKibanaのインストール


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


### IKアナライザーのインストール


```shell
docker exec -it es bash

./bin/elasticsearch-plugin install <https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v8.8.1/elasticsearch-analysis-ik-8.8.1.zip>

exit
#重启容器
docker restart elasticsearch
```


IKAnalyzer.cfg.xml設定ファイルに次の内容を追加します：


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


対応するファイルを変更した後、再起動すれば反映されます。


アナライザーの役割は何でしょうか？

- 転置インデックスの作成時にドキュメントを分割する
- ユーザーの検索時に入力内容を分割する

IKアナライザーにはどのようなモードがありますか？

- ik_smart：スマート分割。粗粒度
- ik_max_word：最も細かい分割。細粒度

IKアナライザーでタームを拡張したり、ストップワードを設定したりするにはどうすればよいでしょうか？

- configディレクトリのIkAnalyzer.cfg.xmlファイルに拡張辞書とストップワード辞書を追加する
- 辞書に拡張タームまたはストップワードを追加する

# インデックス操作


インデックスはデータベースのテーブルに、mappingはテーブル構造に相当します。


ESにデータを保存するには、最初に「データベース」と「テーブル」を作成する必要があります。


## mappingの属性


mappingはインデックス内のドキュメントに対する制約です。一般的なmappingの属性は次のとおりです：

- type：フィールドのデータ型。一般的な単純型は次のとおり：
    - 文字列：text（分割可能なテキスト）、keyword（ブランド、国、IPアドレスなどの正確な値）
    - 数値：long、integer、short、byte、double、float、
    - 真偽値：boolean
    - 日付：date
    - オブジェクト：object
- index：インデックスを作成するかどうか。デフォルトはtrue
- analyzer：使用するアナライザー
- properties：そのフィールドのサブフィールド

## インデックスのCRUD


インデックスにはどのような操作がありますか？

- インデックスの作成：PUT /インデックス名
- インデックスの照会：GET /インデックス名
- インデックスの削除：DELETE /インデックス名
- フィールドの追加：PUT /インデックス名/_mapping

### インデックスとマッピングの作成


**基本構文**：

- リクエストメソッド：PUT
- リクエストパス：/インデックス名。任意に指定可能
- リクエストパラメーター：mapping

形式：


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


### インデックスの照会


**基本構文**：

- リクエストメソッド：GET
- リクエストパス：/インデックス名
- リクエストパラメーター：なし

**形式**：


```plain text
GET /索引库名
```


### インデックスの変更


転置インデックスの構造自体は複雑ではありませんが、データ構造が変更されると（アナライザーを変更した場合など）、転置インデックスを再作成しなければなりません。これは非常に大きな問題です。そのため、インデックスは**一度作成するとmappingを変更できません**。


mapping内の既存フィールドは変更できませんが、新しいフィールドの追加は転置インデックスに影響しないため許可されています。


**構文の説明**：


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


### インデックスの削除


**構文：**

- リクエストメソッド：DELETE
- リクエストパス：/インデックス名
- リクエストパラメーター：なし

**形式：**


```plain text
DELETE /索引库名
```


# ドキュメント操作


ドキュメントにはどのような操作がありますか？

- ドキュメントの作成：POST /{インデックス名}/_doc/ドキュメントid { JSONドキュメント }
- ドキュメントの照会：GET /{インデックス名}/_doc/ドキュメントid
- ドキュメントの削除：DELETE /{インデックス名}/_doc/ドキュメントid
- ドキュメントの変更：
    - 全体更新：PUT /{インデックス名}/_doc/ドキュメントid { JSONドキュメント }
    - 部分更新：POST /{インデックス名}/_update/ドキュメントid { "doc": {フィールド}}

## ドキュメントの新規作成


**構文：**


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


## ドキュメントの照会


RESTスタイルでは、新規作成にはPOST、照会にはGETを使用します。ただし、照会には通常条件が必要であるため、ここではドキュメントidを指定します。


**構文：**


```json
GET /{索引库名称}/_doc/{id}
```


## ドキュメントの削除


削除にはDELETEリクエストを使用し、同様にidを指定して削除します：


**構文：**


```plain text
DELETE /{索引库名}/_doc/id值
```


## ドキュメントの変更


変更方法は2種類あります：

- 全体更新：元のドキュメントを直接上書きする
- 部分更新：ドキュメント内の一部のフィールドを変更する

### 全体更新


全体更新では元のドキュメントを上書きします。その本質は次のとおりです：

- 指定したidに基づいてドキュメントを削除する
- 同じidのドキュメントを新規作成する

**注意**：idに基づいて削除するときに対象のidが存在しなくても、2番目の新規作成処理は実行されます。そのため、変更処理が新規作成処理になります。


**構文：**


```json
PUT /{索引库名}/_doc/文档id
{
    "字段1": "值1",
    "字段2": "值2",
    // ... 略
}
```


### 部分更新


部分更新では、指定したidに一致するドキュメント内の一部のフィールドだけを変更します。


**構文：**


```json
POST /{索引库名}/_update/文档id
{
    "doc": {
         "字段名": "新的值",
    }
}
```


# RestAPI


ES公式は、ESを操作するためのさまざまな言語のクライアントを提供しています。これらのクライアントは、実質的にはDSL文を組み立て、HTTPリクエストでESに送信します。


Java Rest Clientには次の2種類があります：

- Java Low Level Rest Client
- Java High Level Rest Client

インデックス操作の基本手順：

- RestHighLevelClientを初期化する
- XxxIndexRequestを作成する。XXXはCreate、Get、Delete
- DSLを準備する（Createの場合に必要。それ以外はパラメーターなし）
- リクエストを送信する。RestHighLevelClient#indices().xxx()メソッドを呼び出す。xxxはcreate、exists、delete

## RestClientの初期化


Elasticsearchが提供するAPIでは、Elasticsearchとのすべてのやり取りがRestHighLevelClientというクラスにカプセル化されています。最初にこのオブジェクトを初期化し、Elasticsearchとの接続を確立する必要があります。


手順は3つです：

1. ESのRestHighLevelClient依存関係を導入する：

```xml
<dependency>
    <groupId>org.elasticsearch.client</groupId>
    <artifactId>elasticsearch-rest-high-level-client</artifactId>
</dependency>
```

1. Spring BootのデフォルトのESバージョンは7.6.2であるため、デフォルトのESバージョンを上書きする必要があります：

```xml
<properties>
    <java.version>1.8</java.version>
    <elasticsearch.version>7.12.1</elasticsearch.version>
</properties>
```

1. RestHighLevelClientを初期化する：

初期化コードは次のとおりです：


```java
RestHighLevelClient client = new RestHighLevelClient(RestClient.builder(
        HttpHost.create("<http://127.0.0.1:9200>")
));
```


## インデックスの作成


コードは3つの手順に分かれます：

- Requestオブジェクトを作成します。インデックスを作成する操作なので、RequestはCreateIndexRequestです。
- リクエストパラメーター、つまりDSLのJSONパラメーター部分を追加します。JSON文字列は非常に長いため、ここでは静的文字列定数MAPPING_TEMPLATEとして定義し、コードを読みやすくしています。
- リクエストを送信します。client.indices()メソッドの戻り値はIndicesClient型であり、インデックス操作に関連するすべてのメソッドをカプセル化しています。

constantsパッケージにクラスを作成し、mappingのJSON文字列定数を定義します。


テストクラスに、インデックスを作成する単体テストを記述します：


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


## インデックスの削除


インデックスを削除するDSL文は非常に単純です：


```json
DELETE /hotel
```


インデックスの作成と比較すると：

- リクエストメソッドがPUTからDELTEに変わる
- リクエストパスは変わらない
- リクエストパラメーターはない

したがって、コード上の主な違いはRequestオブジェクトです。手順は引き続き3つです：

- Requestオブジェクトを作成する。今回はDeleteIndexRequestオブジェクト
- パラメーターを準備する。ここではパラメーターなし
- リクエストを送信する。deleteメソッドを使用する

hotel-demoのHotelIndexTestテストクラスに、インデックスを削除する単体テストを記述します：


```java
@Test
void testDeleteHotelIndex() throws IOException {
    // 1.创建Request对象
    DeleteIndexRequest request = new DeleteIndexRequest("hotel");
    // 2.发送请求
    client.indices().delete(request, RequestOptions.DEFAULT);
}
```


## インデックスが存在するか判定する


インデックスが存在するかの判定は、本質的には照会であり、対応するDSLは次のとおりです：


```json
GET /hotel
```


したがって、Javaコードの流れは削除処理と似ています。手順は引き続き3つです：

- 1）Requestオブジェクトを作成する。今回はGetIndexRequestオブジェクト
- 2）パラメーターを準備する。ここではパラメーターなし
- 3）リクエストを送信する。existsメソッドを使用する

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


# RestClientによるドキュメント操作


JavaRestClientでElasticsearchを操作する流れは基本的に共通しています。中心となるのは、client.indices()メソッドを使用してインデックス操作用のオブジェクトを取得することです。


ドキュメント操作の基本手順：

- RestHighLevelClientを初期化する
- XxxRequestを作成する。XXXはIndex、Get、Update、Delete、Bulk
- パラメーターを準備する（Index、Update、Bulkの場合に必要）
- リクエストを送信する。RestHighLevelClient#.xxx()メソッドを呼び出す。xxxはindex、get、update、delete、bulk
- 結果を解析する（Getの場合に必要）

## ドキュメントの新規作成


データベースからホテルデータを取得し、Elasticsearchに書き込みます。


インデックス構造に一致する新しい型を定義します：


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


ドキュメントを新規作成するDSL文は次のとおりです：


```json
POST /{索引库名}/_doc/1
{
    "name": "Jack",
    "age": 21
}
```


インデックスの作成と同様に、次の3つの手順があります：

- Requestオブジェクトを作成する
- リクエストパラメーター、つまりDSL内のJSONドキュメントを準備する
- リクエストを送信する

異なる点は、[ここではclient.xxxを直接使用する](http://xn--client-vt9in98k266am0d6y0gd5e.xxx/)()APIであり、client.indices()は使用しないことです。


単体テストを記述します：


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


## ドキュメントの照会


照会用のDSL文は次のとおりです：


```json
GET /hotel/_doc/{id}
```


非常に単純なので、コードはおおよそ2つの手順に分かれます：

- Requestオブジェクトを準備する
- リクエストを送信する

ただし、照会の目的は結果を取得してHotelDocに変換することなので、難しい部分は結果の解析です。


結果はJSONであり、ドキュメントは`_source`属性内に格納されています。そのため、`_source`を取得してJavaオブジェクトへデシリアライズすれば解析できます。


これまでと同様に、手順は3つです：

- Requestオブジェクトを準備する。今回は照会なのでGetRequest
- リクエストを送信して結果を取得する。照会なのでclient.get()メソッドを呼び出す
- 結果を解析する。つまりJSONをデシリアライズする

単体テストを記述します：


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


## ドキュメントの削除


削除用のDSLは次のとおりです：


```json
DELETE /hotel/_doc/{id}
```


照会との違いは、リクエストメソッドがDELETEからGETに変わることだけです。Javaコードも同様に次の3つの手順となります：

- Requestオブジェクトを準備する。削除なので、今回はDeleteRequestオブジェクト。インデックス名とidを指定する
- パラメーターを準備する。パラメーターなし
- リクエストを送信する。削除なのでclient.delete()メソッドを使用する

単体テストを記述します：


```java
@Test
void testDeleteDocument() throws IOException {
    // 1.准备Request
    DeleteRequest request = new DeleteRequest("hotel", "61083");
    // 2.发送请求
    client.delete(request, RequestOptions.DEFAULT);
}
```


## ドキュメントの変更


変更方法には次の2種類があります：

- 全体更新：本質的にはidに基づいて削除した後、新規作成する
- 部分更新：ドキュメント内の指定フィールドの値を変更する

RestClientのAPIでは、全体更新と新規作成のAPIは完全に同じであり、IDに基づいて判定されます：

- 新規作成時にIDがすでに存在する場合は変更
- 新規作成時にIDが存在しない場合は新規作成

ここでは詳細を繰り返さず、部分更新に注目します。

- Requestオブジェクトを準備する。今回は変更なのでUpdateRequest
- パラメーターを準備する。変更対象のフィールドを含むJSONドキュメント
- ドキュメントを更新する。client.update()メソッドを呼び出す

単体テストを記述します：


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


## ドキュメントの一括インポート


事例の要件：BulkRequestを使用して、データベースのデータをインデックスへ一括インポートします。


手順は次のとおりです：

- mybatis-plusを使用してホテルデータを照会する
- 取得したホテルデータ（Hotel）をドキュメント型のデータ（HotelDoc）へ変換する
- JavaRestClientのBulkRequestによるバッチ処理を使用して、ドキュメントを一括作成する

BulkRequestによるバッチ処理は、実質的には複数の通常のCRUDリクエストをまとめて送信するものです。他のリクエストを追加するためのaddメソッドが用意されています：


追加できるリクエストは次のとおりです：

- IndexRequest、つまり新規作成
- UpdateRequest、つまり変更
- DeleteRequest、つまり削除

単体テストを記述します：


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


# DSLによるドキュメント検索


Elasticsearchの検索も、JSON形式のDSLに基づいて実現されます。


## DSL検索の分類


Elasticsearchは、検索を定義するためのJSONベースのDSL（[Domain Specific Language](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html)）を提供しています。一般的な検索タイプは次のとおりです：

- **全件検索**：すべてのデータを検索します。通常はテストに使用します。例：match_all
- **全文検索（full text）**：アナライザーを使用してユーザーの入力内容を分割し、転置インデックス内で照合します。例：
    - match_query
    - multi_match_query
- **完全一致検索**：正確なターム値に基づいてデータを検索します。通常はkeyword、数値、日付、booleanなどの型のフィールドを検索します。例：
    - ids
    - range
    - term
- **地理（geo）検索**：緯度と経度に基づいて検索します。例：
    - geo_distance
    - geo_bounding_box
- **複合（compound）検索**：上記のさまざまな検索条件を組み合わせて検索できます。例：
    - bool
    - function_score

検索構文は基本的に共通しています：


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


## 全文検索


全文検索の基本的な流れは次のとおりです：

- ユーザーが検索した内容を分割してタームを取得する
- タームを転置インデックス内で照合し、ドキュメントidを取得する
- ドキュメントidに基づいてドキュメントを取得し、ユーザーに返す

よく使用される場面は次のとおりです：

- ECサイトの検索ボックス
- Baiduの検索ボックス

一般的な全文検索には次のものがあります：

- match検索：単一フィールド検索

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

- multi_match検索：複数フィールド検索。いずれか1つのフィールドが条件に一致すれば、検索条件を満たしたものと見なします。検索に参加するフィールドが多いほど、検索性能は低下します

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


## 完全一致検索


完全一致検索では通常、keyword、数値、日付、booleanなどの型のフィールドを検索します。そのため、検索条件を**分割しません**。一般的なものは次のとおりです：

- term：タームの正確な値に基づいて検索します。通常はkeyword型、数値型、真偽値型、日付型のフィールドを検索します

    完全一致検索の対象は分割されないフィールドなので、検索条件も**分割されない**タームでなければなりません。検索時は、ユーザーの入力内容が対象の値と完全に一致した場合にのみ条件を満たしたと判断されます。入力内容が多すぎると、かえってデータを検索できません。


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

- range：値の範囲に基づいて検索します。数値や日付の範囲を指定できます

    範囲検索は通常、数値型の範囲を絞り込む場合に使用します。たとえば価格帯による絞り込みです。


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


## 地理座標検索


地理座標検索とは、緯度と経度に基づく検索です。


一般的なユースケースは次のとおりです：

- Ctrip：近くのホテルを検索する
- Didi：近くのタクシーを検索する
- WeChat：近くにいる人を検索する
- 矩形範囲検索

    矩形範囲検索、つまりgeo_bounding_box検索では、座標が特定の矩形範囲内にあるすべてのドキュメントを検索します。


    検索時には矩形の**左上**と**右下**の2点の座標を指定して矩形を描き、その矩形内にある点を条件に一致するものと見なします。


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

- 周辺検索

    周辺検索は距離検索（geo_distance）とも呼ばれ、指定した中心点から一定距離以内にあるすべてのドキュメントを検索します。


    言い換えると、地図上の1点を円の中心として指定し、指定した距離を半径として円を描き、その円内にある座標をすべて条件に一致するものと見なします。


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


## 複合検索


複合（compound）検索：複合検索では、他の単純な検索を組み合わせ、より複雑な検索ロジックを実現できます。一般的なものは2種類あります：

- fuction score：スコア関数検索。ドキュメントの関連性スコアを制御し、ドキュメントの順位を調整できる
- bool query：ブール検索。論理関係を使用して複数の検索を組み合わせ、複雑な検索を実現する

### 関連性スコア


match検索を使用すると、ドキュメントの結果には検索タームとの関連度に基づいてスコア（_score）が付けられ、戻り値はスコアの降順で並べられます。


Elasticsearchでは、初期にはTF-IDFアルゴリズムが使用されていました。式は次のとおりです。


$$
TF(ターム頻度) = \frac{タームの出現回数}{ドキュメント内のターム総数}
$$


$$
IDF(逆文書頻度)=Log(\frac{ドキュメント総数}{タームを含むドキュメント総数})
$$


$$
score = \sum_{i=1}^{n}TF(ターム頻度)*IDF(逆文書頻度)
$$


その後、バージョン5.1へのアップグレードで、ElasticsearchはアルゴリズムをBM25へ改良しました。式は次のとおりです。


$$
Score(Q,d) = \sum_{i=1}^n\log(1+\frac{N-n+0.5}{n+0.5})\cdot\frac{f_i}{f_i+k_1\cdot(1-b+b\cdot\frac{dl}{avgdl})}
$$


TF-IDFアルゴリズムには、ターム頻度が高いほどドキュメントのスコアも高くなり、単一のタームがドキュメントへ与える影響が大きくなるという欠点があります。一方、BM25では単一タームによるスコアに上限が設けられ、曲線がより滑らかになります。


### スコア関数検索


関連度に基づくスコアリングは妥当な要件ですが、**妥当なものが必ずしもプロダクトマネージャーの求めるものとは限りません**。


Baiduを例にすると、検索結果は関連度が高い順ではなく、支払った金額が多いほど上位に表示される場合があります。


関連性スコアを人為的に制御するには、Elasticsearchのfunction score検索を使用する必要があります。


function score検索には、次の4つの要素が含まれます：

- **元の検索**条件：query部分。この条件に基づいてドキュメントを検索し、BM25アルゴリズムに基づいてドキュメントへ**元のスコア**（query score）を付ける
- **フィルター条件**：filter部分。この条件に一致するドキュメントのみ再スコアリングする
- **スコア関数**：filter条件に一致するドキュメントに対して、この関数を使用して計算し、**関数スコア**（function score）を取得する。関数は4種類ある
    - weight：関数の結果が定数
    - field_value_factor：ドキュメント内の特定フィールドの値を関数の結果とする
    - random_score：乱数を関数の結果とする
    - script_score：スコア関数のアルゴリズムを独自に定義する
- **演算モード**：boost_mode。スコア関数の結果と元の検索の関連性スコアをどのように演算するかを指定する：
    - multiply：乗算
    - replace：function scoreでquery scoreを置き換える
    - その他：sum、avg、max、minなど

function scoreの実行フローは次のとおりです：

- **元の条件**に基づいてドキュメントを検索し、関連性スコアを計算する。これを**元のスコア**（query score）と呼ぶ
- **フィルター条件**に基づいてドキュメントを絞り込む
- **フィルター条件**に一致するドキュメントに対して、**スコア関数**に基づく計算を行い、**関数スコア**（function score）を取得する
- **元のスコア**（query score）と**関数スコア**（function score）を**演算モード**に基づいて計算し、最終結果を関連性スコアとする

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


function score queryを定義する3つの要素は何でしょうか？

- フィルター条件：どのドキュメントにスコアを加算するか
- スコア関数：function scoreをどのように計算するか
- 重み付け方法：function scoreとquery scoreをどのように演算するか

### ブール検索


ブール検索は1つ以上の検索句を組み合わせたもので、各句が1つの**サブクエリ**です。サブクエリの組み合わせ方法は次のとおりです：

- must：すべてのサブクエリに一致する必要がある。「AND」に相当
- should：サブクエリへの一致を選択的に扱う。「OR」に相当
- must_not：一致してはならない。**スコアリングには参加しない**。「NOT」に相当
- filter：一致する必要がある。**スコアリングには参加しない**

検索時には、**スコアリングに参加するフィールドが多いほど、検索性能も低下する**ことに注意してください。そのため、このような複数条件の検索では次の方法を推奨します：

- 検索ボックスのキーワード検索は全文検索なので、must検索を使用してスコアリングに参加させる
- その他のフィルター条件にはfilter検索を使用し、スコアリングに参加させない

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


# 検索結果の処理


検索結果は、ユーザーが指定した方法で処理または表示できます。


## ソート


Elasticsearchはデフォルトでは関連性スコア（_score）に基づいてソートしますが、独自の方法で[検索結果をソート](https://www.elastic.co/guide/en/elasticsearch/reference/current/sort-search-results.html)することもできます。ソート可能なフィールド型には、keyword型、数値型、地理座標型、日付型などがあります。

- 通常フィールドによるソート

    keyword、数値、日付型のソート構文は基本的に同じです。


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


    ソート条件は配列なので、複数のソート条件を記述できます。宣言された順序に従い、最初の条件が同じ場合は2番目の条件でソートし、以降も同様に処理します。

- 地理座標によるソート

    地理座標のソートは少し異なります。


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


    この検索の意味は次のとおりです：

    - 1つの座標を目標地点として指定する
    - 各ドキュメント内の指定フィールド（geo_point型である必要がある）の座標から目標地点までの距離を計算する
    - 距離に基づいてソートする

## ページネーション


Elasticsearchはデフォルトで上位10件のデータのみを返します。より多くのデータを照会するには、ページネーションのパラメーターを変更する必要があります。Elasticsearchではfromとsizeを変更して、返すページネーション結果を制御します：

- from：何番目のドキュメントから開始するか
- size：合計で何件のドキュメントを照会するか

MySQLの`limit ?, ?`に相当します。


ページネーションの基本構文は次のとおりです：


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


深いページを照会すると、集約するデータが多くなり、メモリとCPUに非常に大きな負荷がかかります。そのため、Elasticsearchではfrom + sizeが10000を超えるリクエストを禁止しています。


ディープページネーションに対して、ESは2つの解決策を提供しています：

- search after：ページネーション時にソートが必要です。前回のソート値から次のページのデータを照会します。公式が推奨する方法です。
- scroll：ソート後のドキュメントidのスナップショットを作成し、メモリに保存します。現在は公式に推奨されていません。

一般的なページネーションの実装方法と、その長所・短所：

- `from + size`：
    - 長所：任意のページへ移動できる
    - 短所：ディープページネーションの問題があり、デフォルトの照会上限（from + size）は10000
    - 利用場面：Baidu、JD.com、Google、Taobaoなど、任意のページへ移動する検索
- `after search`：
    - 長所：照会上限がない（1回の照会のsizeは10000以下）
    - 短所：後方へ1ページずつしか照会できず、任意のページへ移動できない
    - 利用場面：スマートフォンで下方向にスクロールしてページを読み込む場合など、任意のページへ移動する必要がない検索
- `scroll`：
    - 長所：照会上限がない（1回の照会のsizeは10000以下）
    - 短所：追加のメモリを消費し、検索結果もリアルタイムではない
    - 利用場面：大量データの取得と移行。ES 7.1以降は非推奨であり、after search方式が推奨される

## ハイライト


BaiduやJD.comで検索すると、キーワードが赤色になって目立つように表示されます。これをハイライト表示と呼びます。


ハイライト表示は2つの手順で実現します：

- ドキュメント内のすべてのキーワードに、`<em>`タグなどのタグを追加する
- ページ側で`<em>`タグ用のCSSスタイルを記述する

**ハイライトの構文**：


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

- ハイライトはキーワードを強調するため、**検索条件にはキーワードが含まれている必要があり**、範囲検索のような条件は使用できません。
- デフォルトでは、**ハイライト対象のフィールドは、検索で指定したフィールドと一致している必要があります**。一致していない場合はハイライトできません
- 検索対象ではないフィールドをハイライトするには、`required_field_match=false`という属性を追加する必要があります

# RestClientによるドキュメント検索


ドキュメントの検索にも、これまで学習したRestHighLevelClientオブジェクトを使用します。基本手順は次のとおりです：

- Requestオブジェクトを準備する
- リクエストパラメーターを準備する
- リクエストを送信する
- レスポンスを解析する

## クイックスタート


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

- 最初の手順では、`SearchRequest`オブジェクトを作成し、インデックス名を指定します
- 2番目の手順では、`request.source()`を使用してDSLを構築します。DSLには検索、ページネーション、ソート、ハイライトなどを含められます
    - `query()`：検索条件を表します。`QueryBuilders.matchAllQuery()`を使用してmatch_all検索のDSLを構築します。`QueryBuilders`にはmatch、term、function_score、boolなど、さまざまな検索が含まれています
- 3番目の手順では、client.search()を使用してリクエストを送信し、レスポンスを取得します

Elasticsearchが返す結果はJSON文字列であり、構造には次の内容が含まれます：

- `hits`：ヒットした結果
    - `total`：合計件数。内部のvalueが具体的な合計件数
    - `max_score`：すべての結果のうち、最もスコアが高いドキュメントの関連性スコア
    - `hits`：検索結果のドキュメント配列。各ドキュメントはJSONオブジェクト
        - `_source`：ドキュメント内の元データ。これもJSONオブジェクト

したがって、レスポンス結果はJSON文字列を階層ごとに解析します。流れは次のとおりです：

- `SearchHits`：response.getHits()で取得します。JSON内の最上位のhitsであり、ヒットした結果を表します
    - `SearchHits#getTotalHits().value`：合計件数を取得する
    - `SearchHits#getHits()`：SearchHit配列、つまりドキュメント配列を取得する
        - `SearchHit#getSourceAsString()`：ドキュメント結果内の_source、つまり元のJSONドキュメントデータを取得する

## match検索


全文検索のmatch検索とmulti_match検索のAPIは、match_allと基本的に同じです。異なるのは検索条件、つまりquery部分です。


したがって、Javaコード上の主な違いはrequest.source().query()に渡すパラメーターです。同様にQueryBuildersが提供するメソッドを使用します。


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


## 完全一致検索


完全一致検索には主に次の2種類があります：

- term：タームの完全一致
- range：範囲検索

以前の検索と比較しても、違いは検索条件のみであり、その他は同じです。


```java
//词条查询
QueryBuilders.termQuery("city","杭州");

//范围查询
QueryBuilders.rangeQuery("price").gte(100).lte(150);
```


## ブール検索


ブール検索では、must、must_not、filterなどを使用して他の検索を組み合わせます。


APIと他の検索との違いも、検索条件の構築部分だけです。QueryBuildersや結果解析など、その他のコードは完全に同じです。


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


## ソートとページネーション


検索結果のソートとページネーションはqueryと同じ階層のパラメーターなので、同様にrequest.source()を使用して設定します。


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


## ハイライト


ハイライトのコードは、以前のコードと大きく異なる点が2つあります：

- 検索DSL：検索条件に加えてハイライト条件も追加する必要があります。これもqueryと同じ階層です。
- 結果解析：結果では_sourceのドキュメントデータに加え、ハイライト結果も解析する必要があります
    - 手順1：結果からsourceを取得します。hit.getSourceAsString()で取得する部分は、ハイライトされていない結果のJSON文字列です。さらにHotelDocオブジェクトへデシリアライズする必要があります
    - 手順2：ハイライト結果を取得します。hit.getHighlightFields()の戻り値はMapです。keyはハイライト対象のフィールド名、値はハイライト値を表すHighlightFieldオブジェクトです
    - 手順3：Mapからハイライト対象のフィールド名を使って、ハイライト値のHighlightFieldオブジェクトを取得します
    - 手順4：HighlightFieldからFragmentsを取得し、文字列へ変換します。この部分が実際のハイライト文字列です
    - 手順5：HotelDoc内のハイライトされていない結果を、ハイライト結果で置き換えます

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


# 黒馬旅行の事例


ここからは、黒馬旅行の事例を通じて、これまで学習した知識を実践します。


次の4つの機能を実装します：

- ホテル検索とページネーション
- ホテル検索結果のフィルタリング
- 周辺のホテル
- ホテルの入札ランキング

## ホテル検索とページネーション


事例の要件：黒馬旅行のホテル検索機能を実装し、キーワード検索とページネーションを完成させます。


### エンティティクラスの定義


エンティティクラスは2つあります。1つはフロントエンドのリクエストパラメーターを表すエンティティ、もう1つはサーバーが返すレスポンス結果を表すエンティティです。


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


### controllerの定義


HotelControllerを定義し、次の要件を満たす検索インターフェースを宣言します：

- リクエストメソッド：Post
- リクエストパス：/hotel/list
- リクエストパラメーター：RequestParam型のオブジェクト
- 戻り値：2つの属性を含むPageResult
    - `Long total`：合計件数
    - `List<HotelDoc> hotels`：ホテルデータ

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


### 検索処理の実装


controllerではIHotelServiceを呼び出していますが、このメソッドはまだ実装されていません。そのため、IHotelServiceにメソッドを定義し、ビジネスロジックを実装します。


検索処理の実装にはRestHighLevelClientが不可欠なので、BeanとしてSpringに登録する必要があります。`cn.itcast.hotel`内の`HotelDemoApplication`で、このBeanを宣言します：


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


## ホテル検索結果のフィルタリング


要件：ブランド、都市、星の数、価格などによるフィルタリング機能を追加します。


HotelServiceのsearchメソッドで変更する必要があるのは、requet.source().query( ... )内の検索条件だけです。


以前の処理ではキーワードに基づくmatch検索だけでしたが、今回は次の条件によるフィルタリングを追加します：

- ブランドのフィルタリング：keyword型なのでterm検索を使用する
- 星の数のフィルタリング：keyword型なのでterm検索を使用する
- 価格のフィルタリング：数値型なのでrange検索を使用する
- 都市のフィルタリング：keyword型なのでterm検索を使用する

複数の検索条件を組み合わせるため、boolean検索を使用します：

- キーワード検索はmustに配置し、スコアリングに参加させる
- その他のフィルター条件はfilterに配置し、スコアリングに参加させない

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


## 周辺のホテル


location座標に基づき、周辺のホテルを距離順に並べます。実装方針は次のとおりです：

- RequestParamsパラメーターを変更し、locationフィールドを受け取る
- searchメソッドのビジネスロジックを変更し、locationに値がある場合はgeo_distanceに基づくソート機能を追加する

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


`search`メソッドにソート機能を追加します：


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


## ホテルの入札ランキング


要件：指定したホテルを検索結果の最上位に表示し、ページ上では指定したホテルに**広告**マークを追加します。


function_score検索はスコアに影響を与えられます。スコアが高くなれば、自然に順位も上がります。function_scoreには3つの要素があります：

- フィルター条件：どのドキュメントにスコアを加算するか
- スコア関数：function scoreをどのように計算するか
- 重み付け方法：function scoreとquery scoreをどのように演算するか

ここでの要件は、**指定したホテル**を上位に表示することです。そのため、対象のホテルにマークを追加します。これにより、フィルター条件内で**そのマークに基づき、スコアを上げる必要があるかどうかを判定**できます。


以前作成したboolean検索を**元の検索**条件としてqueryに配置し、続いて**フィルター条件**、**スコア関数**、**重み付けモード**を追加します。


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


# データ集約

- [**集約（aggregations）**](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html)を使用すると、データの集計、分析、演算を非常に簡単に実現できます。たとえば：
- どのブランドのスマートフォンが最も人気なのか？
- これらのスマートフォンの平均価格、最高価格、最低価格はいくらか？
- これらのスマートフォンの月ごとの販売状況はどうなっているか？

これらの集計機能はデータベースのSQLよりもはるかに簡単に実装でき、検索速度も非常に高速なため、ほぼリアルタイムの検索を実現できます。


## 集約の種類


一般的な集約には3つの種類があります：

- **バケット（Bucket）**集約：ドキュメントをグループ化するために使用する
    - TermAggregation：ドキュメントのフィールド値に基づいてグループ化する。たとえばブランド値や国ごとのグループ化
    - Date Histogram：日付の間隔に基づいてグループ化する。たとえば1週間単位や1か月単位
- **メトリック（Metric）**集約：最大値、最小値、平均値などを計算するために使用する
    - Avg：平均値を求める
    - Max：最大値を求める
    - Min：最小値を求める
    - Stats：max、min、avg、sumなどを同時に求める
- **パイプライン（pipeline）**集約：他の集約結果を基礎として集約する
> **注意：**集約に使用するフィールドは、keyword、日付、数値、真偽値型でなければなりません

## DSLによる集約の実装


ここでは、すべてのデータに何種類のホテルブランドがあるかを集計します。これは実質的に、ブランドに基づいてデータをグループ化する処理です。この場合はホテルブランド名を使用して集約できるため、Bucket集約を使用します。


### Bucket集約の構文


構文は次のとおりです：


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


### 集約結果のソート


デフォルトでは、Bucket集約はBucket内のドキュメント数を_countとして集計し、_countの降順でソートします。


order属性を指定すると、集約結果のソート方法をカスタマイズできます：


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


### 集約範囲の限定


デフォルトでは、Bucket集約はインデックス内のすべてのドキュメントを集約します。しかし実際の場面では、ユーザーが検索条件を入力するため、検索結果に対して集約する必要があります。そのため、集約に限定条件を追加しなければなりません。


query条件を追加するだけで、集約対象となるドキュメントの範囲を限定できます：


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


### Metric集約の構文


ここではバケット内のホテルを計算し、ブランドごとにユーザー評価のmin、max、avgなどの値を取得します。


そのためにMetric集約を使用します。たとえばstat集約を使用すると、min、max、avgなどの結果を取得できます。


構文は次のとおりです：


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


今回のscore_stats集約は、brandAgg集約の内部にネストされたサブ集約です。各バケット内で個別に計算する必要があるためです。


aggsは集約を表し、queryと同じ階層にあります。この場合のqueryの役割は何でしょうか？

- 集約対象となるドキュメントの範囲を限定する

集約に必要な3つの要素：

- 集約名
- 集約タイプ
- 集約フィールド

集約で設定できる属性：

- size：集約結果の件数を指定する
- order：集約結果のソート方法を指定する
- field：集約対象のフィールドを指定する

## RestAPIによる集約の実装


集約条件はquery条件と同じ階層にあるため、request.source()を使用して集約条件を指定する必要があります。


集約機能とBucket集約を使用し、検索結果内のドキュメントをブランドや都市に基づいてグループ化すれば、どのブランドや都市が含まれているかを確認できます。


検索結果に対する集約なので、これは**範囲が限定された集約**です。つまり、集約の限定条件はドキュメントの検索条件と同じです。


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


# オートコンプリート


ユーザーが検索ボックスに文字を入力したとき、その文字に関連する検索候補を提示する必要があります。このように、ユーザーが入力した文字に基づいて完全なタームを提示する機能がオートコンプリートです。


## Pinyinアナライザー


アルファベットに基づく補完を実現するには、ドキュメントをPinyinで分割する必要があります。GitHubにはElasticsearch用のPinyinアナライザープラグインがあります。


インストール手順はIKアナライザーと同じです。


```shell
docker exec -it es bash

./bin/elasticsearch-plugin install <https://github.com/medcl/elasticsearch-analysis-pinyin/releases/download/v7.12.1/elasticsearch-analysis-pinyin-7.12.1.zip>

exit
#重启容器
docker restart elasticsearch
```


## カスタムアナライザー


デフォルトのPinyinアナライザーでは、各漢字が個別のPinyinに分割されます。しかし、ここでは各タームを1組のPinyinにしたいため、Pinyinアナライザーを個別にカスタマイズし、カスタムアナライザーを作成する必要があります。


Elasticsearchのアナライザー（analyzer）は、次の3つの部分で構成されます：

- character filters：tokenizerの前にテキストを処理する。たとえば文字の削除や置換
- tokenizer：一定のルールに基づいてテキストをターム（term）に分割する。たとえばkeywordは分割せず、ik_smartなどもある
- tokenizer filter：tokenizerが出力したタームをさらに処理する。たとえば大文字・小文字変換、同義語処理、Pinyin処理など

ドキュメントを分割するときは、この3つの部分によって順番に処理されます：


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


## オートコンプリート検索


Elasticsearchはオートコンプリート機能を実現するための[Completion Suggester](https://www.elastic.co/guide/en/elasticsearch/reference/7.6/search-suggesters.html)検索を提供しています。この検索は、ユーザーの入力内容から始まるタームに一致し、その結果を返します。補完検索の効率を高めるため、ドキュメント内のフィールド型には次の制約があります：

- 補完検索に使用するフィールドはcompletion型でなければならない
- フィールドの内容は通常、補完に使用する複数のタームからなる配列にする

オートコンプリートを実装します：


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


# データ同期


Elasticsearch内のホテルデータはMySQLデータベースから取得されます。そのため、MySQLのデータが変更された場合、Elasticsearchもそれに合わせて変更する必要があります。これがElasticsearchとMySQL間の**データ同期**です。


一般的なデータ同期方式には3種類あります：

- 同期呼び出し
    - hotel-demoが外部向けインターフェースを提供し、Elasticsearch内のデータを変更する
    - ホテル管理サービスがデータベース操作を完了した後、hotel-demoが提供するインターフェースを直接呼び出す
- 非同期通知
    - hotel-adminがMySQLデータベースのデータを追加、削除、変更した後、MQメッセージを送信する
    - hotel-demoがMQを監視し、メッセージの受信後にElasticsearchのデータを変更する
- binlogの監視
    - MySQLでbinlog機能を有効にする
    - MySQLによる追加、削除、変更操作をすべてbinlogへ記録する
    - hotel-demoがcanalを使用してbinlogの変更を監視し、Elasticsearch内の内容をリアルタイムで更新する

方式1：同期呼び出し

- 長所：実装が単純で直接的
- 短所：ビジネス間の結合度が高い

方式2：非同期通知

- 長所：疎結合で、実装難易度も一般的
- 短所：MQの信頼性に依存する

方式3：binlogの監視

- 長所：サービス間の結合を完全に解消できる
- 短所：binlogを有効にするとデータベースの負荷が増え、実装の複雑度も高い

## データ同期の実装


事前資料で提供されたhotel-adminプロジェクトを、ホテル管理用のマイクロサービスとして使用します。ホテルデータが追加、削除、変更された場合、Elasticsearch内のデータにも同じ操作を行う必要があります。

- ホテルデータのCRUDを起動してテストする
- exchange、queue、RoutingKeyを宣言する
- hotel-adminの追加、削除、変更処理でメッセージを送信する
- hotel-demoでメッセージを監視し、Elasticsearch内のデータを更新する
- データ同期機能を起動してテストする

## ExchangeとQueueの宣言


MQの構造は次の図のとおりです：


![image-20230813192805650.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813192805650.png)


依存関係を導入します。


```xml
<!--amqp-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```


設定クラスを定義して宣言します。


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


hotel-adminの追加、削除、変更処理で、それぞれMQメッセージを送信します：


## MQメッセージの送信


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


## MQメッセージの受信


リスナーを記述します。


hotel-demoの`cn.itcast.hotel.mq`パッケージに新しいクラスを追加します：


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


ビジネスロジックを実装します：


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


# クラスター


単一ノードのElasticsearchでデータを保存する場合、必然的に2つの問題に直面します。大量データの保存と単一障害点です。

- 大量データの保存問題：インデックスを論理的にN個のシャード（shard）へ分割し、複数のノードに保存する
- 単一障害点の問題：シャードのデータを異なるノードにバックアップする（replica）

**ESクラスターに関する概念**：

- クラスター（cluster）：共通のcluster nameを持つノードの集合
- <font color="red">ノード（node）</font>：クラスター内の1つのElasticsearchインスタンス
- <font color="red">シャード（shard）</font>：インデックスを異なる部分に分割して保存できます。この部分をシャードと呼びます。クラスター環境では、1つのインデックスの異なるシャードを別々のノードに分散できます

    解決する問題：データ量が多すぎ、単一ノードの保存容量が限られている問題。

- プライマリシャード（Primary shard）：レプリカシャードに対する定義
- レプリカシャード（Replica shard）：各プライマリシャードには1つ以上のレプリカを作成でき、データはプライマリシャードと同じ

データのバックアップによって高可用性を保証できますが、各シャードを1つずつバックアップすると、必要なノード数が2倍になり、コストが高くなりすぎます。


高可用性とコストのバランスを取るため、次のように構成できます：

- 最初にデータをシャードへ分割し、異なるノードに保存する
- 次に各シャードをバックアップし、相手側のノードへ配置して相互にバックアップする

これにより、必要なサービスノード数を大幅に削減できます。


## ESクラスターの作成


docker-composeを使用して作成します：


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


WSLを使用したインストール後に開けない場合は、次のコマンドを実行してメモリを増やせます（最低4GBが必要です）。


```shell
wsl -d docker-desktop
echo 262144 >> /proc/sys/vm/max_map_count
```


cerebroを使用してESクラスターを監視します。


![image-20230813204137138.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813204137138.png)


## クラスターのスプリットブレイン問題


### クラスター内の役割分担


Elasticsearchのクラスターノードには、異なる役割があります：


![image-20230813204627948.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813204627948.png)


デフォルトでは、クラスター内のすべてのノードが上記4つの役割を同時に持ちます。


しかし実際のクラスターでは、役割を分離する必要があります：

- masterノード：CPUに対する要件は高いが、メモリに対する要件は低い
- dataノード：CPUとメモリの両方に対する要件が高い
- coordinatingノード：ネットワーク帯域幅とCPUに対する要件が高い

役割を分離すれば、各ノードの要件に合わせて異なるハードウェアを割り当ててデプロイできます。また、処理同士が互いに干渉することも避けられます。


### スプリットブレイン問題


スプリットブレインは、クラスター内のノード間の接続が失われることによって発生します。


ネットワークが復旧した後、クラスター内に2つのmasterノードが存在し、クラスターの状態が一致しないことでスプリットブレインが発生します：


スプリットブレインを解決するには、（eligibleノード数 + 1）/ 2を超える票を獲得しなければmasterに選出されないようにします。そのため、eligibleノード数は奇数にするのが望ましいです。対応する設定項目はdiscovery.zen.minimum_master_nodesです。ES 7.0以降ではデフォルト設定となっているため、通常はスプリットブレイン問題は発生しません。


master eligibleノードの役割は何でしょうか？

- クラスターのmaster選出に参加する
- masterノードはクラスターの状態とシャード情報を管理し、インデックスの作成・削除リクエストを処理できる

dataノードの役割は何でしょうか？

- データのCRUD

coordinatorノードの役割は何でしょうか？

- リクエストを他のノードへルーティングする
- 検索結果を統合してユーザーへ返す

## クラスターの分散ストレージ


新しいドキュメントを追加するときは、データが均等になるように異なるシャードへ保存する必要があります。では、coordinating nodeはデータをどのシャードへ保存すべきか、どのように判断するのでしょうか？


**シャード保存の仕組み**


Elasticsearchはハッシュアルゴリズムを使用して、ドキュメントを保存するシャードを計算します：


`shard = hash(_routing) % number_of_shards`


説明：

- _routingのデフォルト値はドキュメントのid
- このアルゴリズムはシャード数に依存するため、インデックスを一度作成するとシャード数は変更できない

![image-20230813205142296.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813205142296.png)


## クラスターの分散検索


Elasticsearchの検索は2つのフェーズに分かれます：

- scatter phase：分散フェーズ。coordinating nodeが各シャードへリクエストを分配する
- gather phase：集約フェーズ。coordinating nodeがdata nodeの検索結果を集約し、最終的な結果セットとして処理してユーザーへ返す

## クラスターのフェイルオーバー


クラスターのmasterノードはクラスター内のノード状態を監視します。ノードの停止を検出すると、そのノード上のシャードデータをただちに他のノードへ移行し、データの安全性を確保します。これをフェイルオーバーと呼びます。

1. node1がmasterノードで、他の2つのノードが従属ノード
2. node1で障害が発生し、masterを再選出する。たとえばnode2が選出される
3. node2がクラスターの監視状態を確認し、shard-1とshard-0にレプリカノードがないことを検出する
4. node1上のデータをnode2とnode3へ移行する
