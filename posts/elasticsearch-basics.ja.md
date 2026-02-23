---
title: 'elasticsearch初识'
published: 2023-08-13
updated: 2023-08-13
description: 'elasticsearch是一款强大的开源搜索引擎，基于Lucene实现，常用于数据存储、搜索和分析。其核心概念包括倒排索引、文档和字段、索引与映射。elasticsearch与MySQL的对比显示了两者在数据处理上的不同优势。安装和使用elasticsearch涉及创建索引、文档操作以及使用REST API进行查询。聚合功能允许对数据进行统计分析，而自动补全和数据同步功能则提升了用户体验和数据一致性。集群管理确保高可用性和数据安全。'
permalink: 'elasticsearch-basics'
image: 'https://r2.dreaife.tokyo/notion/covers/06857fefb59140378966d89e7a3f8914/2421860-20230813210602593-194327638.png'
tags: ['elasticSearch', 'java']
category: 'middle-side'
draft: false
lang: 'ja'
---

# Elasticsearch入門

## ESの理解

### Elasticsearchの役割

Elasticsearchは非常に強力なオープンソースの検索エンジンで、非常に多くの強力な機能を備えています。膨大なデータの中から必要な内容を迅速に見つけるのに役立ちます。

例えば：

- GitHubでコードを検索する
- 電子商取引サイトで商品を検索する
- 百度で回答を検索する
- 配車アプリで近くの車を検索する

### ELK技術スタック

ElasticsearchはKibana、Logstash、Beatsと組み合わせて、すなわちElastic Stack（ELK）となります。ログデータ分析、リアルタイム監視などの分野で広く活用されています。

一方、ElasticsearchはElastic Stackの中核を担い、データの保存、検索、分析を担当します。

![image-20230813012450107.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813012450107.png)

### ElasticsearchとLucene

Elasticsearchの基盤は**Lucene**をベースに実装されています。

**Lucene**は、Java言語の検索エンジンライブラリで、Apacheのトッププロジェクトであり、Doug Cuttingによって1999年に開発されました。

**Elasticsearch**の歴史：

- 2004年、Shay BanonがLuceneを基にCompassを開発
- 2010年、Shay BanonがCompassを再設計し、Elasticsearchと命名

Elasticsearchとは？

- オープンソースの分散型検索エンジンで、検索、ログ統計、分析、システム監視などの機能を実現できる

Elastic Stack（ELK）とは？

- Elasticsearchを核とする技術スタックで、Beats、Logstash、Kibana、Elasticsearchを含む

Luceneとは？

- Apacheのオープンソース検索エンジンライブラリで、検索エンジンの核心APIを提供

## 倒排索引

倒排索引の概念はMySQLのような正順インデックスを基準にしたものです。

### 正順インデックス

テーブルのidにインデックスを作成した場合、idで検索すると直接インデックスを使用し、検索速度は非常に速い。

ただし、titleを基にしたあいまさ検索（模糊検索）を行うと、全行を走査する必要があり、手順は以下のとおり：

1. ユーザーがtitleで検索条件を入力
2. 1行ずつデータを取得、例えばidが1のデータ
3. データのtitleがユーザーの検索条件に符合するかを判定
4. 符合すれば結果セットに追加、そうでなければ破棄。ステップ1へ戻る

逐行スキャン、すなわち全表走査は、データ量が増えるにつれて検索効率が低下します。データ量が数百万件になると大惨事になります。

### 倒排索引

倒排索引には2つの非常に重要な概念があります：

- ドキュメント（`Document`）：検索に使われるデータ。各データが1つのドキュメント、例：1つのウェブページ、1つの商品情報
- 用語（`Term`）：ドキュメントデータまたはユーザー検索データを、あるアルゴリズムで分詞して得られる、有意味な語句

**倒排索引の作成**は正順インデックスの特別な処理で、流れは次のとおりです：

- 各ドキュメントのデータをアルゴリズムで分詞し、1つずつの語を得る
- テーブルを作成し、各行に語と語が含まれるドキュメントID、位置情報などを含める
- 語の一意性があるため、語に対してインデックスを作成できる、例えばハッシュ表構造のインデックス

倒排索引の**検索フロー**は以下のとおり（「小米手机」を検索する場合）：

1）ユーザーが条件`"小米手机"`を入力して検索。

2）ユーザー入力を**分词**し、語条を得る：`小米`、`手机`。

3）語条を倒排索引で検索すると、語条を含むドキュメントIDを得られる：1、2、3。

4）ドキュメントIDを元に正順索引で具体的な文書を検索。

語条も文書IDもインデックスを持つため、検索速度は非常に速い。全表走査は不要。

### 正向と倒排

なぜ「正向索引」と「倒排索引」と呼ぶのか？

- **正向索引**は最も伝統的で、IDに基づく検索です。しかし語条で検索する場合、各ドキュメントを1件ずつ取得してから、文書中に必要な語条が含まれているかを判断します。これは「文書から語条を探す過程」です。
- **倒排索引**は逆で、最初にユーザーが検索したい語条を見つけ、語条から該当する文書のIDを取得し、IDから文書を取得します。これは「語条から文書を探す過程」です。

**正向索引**：

- 利点：
  - 複数のフィールドにインデックスを作成可能
  - インデックス化したフィールドの検索・ソートが非常に速い
- 欠点：
  - 非インデックスフィールド、またはインデックスフィールドの一部語句で検索する場合は全表走査になる

**倒排索引**：

- 利点：
  - 語条での検索・あいまい検索が非常に速い
- 欠点：
  - 語条に対してのみインデックスを作成可能で、フィールドには作成できない
  - フィールドでのソートはできない

## esのいくつかの概念

ElasticsearchにはMySQLとは異なる独自の概念が多く、若干の違いがある一方、似ている点もあります。

### ドキュメントとフィールド

Elasticsearchは**ドキュメント（Document）**を対象として保存します。データベースの1つの商品データ、1つの注文情報などになり得ます。ドキュメントデータはJSON形式へシリアライズされ、Elasticsearchに保存されます。

JSONドキュメントには多くの場合、**フィールド（Field）**が含まれており、データベースの列に似ています。

### インデックスとマッピング

**インデックス（Index）**とは、同じタイプのドキュメントの集合です。

例えば：

- すべてのユーザードキュメントをまとめて、ユーザーインデックスと呼ぶ
- すべての商品ドキュメントをまとめて、商品インデックスと呼ぶ
- すべての注文ドキュメントをまとめて、注文インデックスと呼ぶ

したがって、インデックスはデータベースのテーブルに相当します。

データベースのテーブルには制約情報があり、表構造、フィールド名、型などを定義します。したがって、インデックスライブラリには**マッピング（mapping）**があり、インデックス内ドキュメントのフィールド制約情報で、テーブルの構造制約に相当します。

### MySQLとElasticsearch

以下に、MySQLとElasticsearchの概念を対比します。

| MySQL | Elasticsearch | 説明 |
| --------- | ----------------- | -------------------------------------------------------- |
| Table | Index | インデックス（index）は、ドキュメントの集合で、データベースのテーブル(table)に相当します |
| Row | Document | ドキュメント（Document）は、1つ1つのデータで、データベースの行(Row)に相当します。ドキュメントはJSON形式です |
| Column | Field | フィールド（Field）は、JSONドキュメントのフィールドで、データベースの列(Column)に相当します |
| Schema | Mapping | Mapping（マッピング）は、インデックス内ドキュメントの制約。フィールド型の制約など。データベースのスキーマ（Schema）に相当します |
| SQL | DSL | DSLはElasticsearchが提供するJSON風のリクエスト文で、Elasticsearchを操作してCRUDを実現します |

両者にはそれぞれ得意な分野があります：

- MySQL：トランザクション処理に長けており、データの安全性と整合性を確保
- Elasticsearch：大量データの検索・分析・計算に長ける

企業では、往々にして両者を組み合わせて使用します：

- セキュリティ要件の高い書き込み操作にはMySQLを使用
- クエリ性能が高い検索にはElasticsearchを使用
- 両者を何らかの方法でデータ同期し、一貫性を保証

## インストール

### ElasticsearchとKibanaのインストール

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

# 端口が開かない場合はssl認証とパスワード認証をオフにする
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

### IK分詞器のインストール

```shell
docker exec -it es bash

./bin/elasticsearch-plugin install <https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v8.8.1/elasticsearch-analysis-ik-8.8.1.zip>

exit
# コンテナ再起動
docker restart elasticsearch
```

IKAnalyzer.cfg.xmlの設定内容を追加：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE properties SYSTEM "<http://java.sun.com/dtd/properties.dtd>">
<properties>
        <comment>IK Analyzer 拡張設定</comment>
        <!--ユーザーはここに独自の拡張辞典を配置可能、*** 拡張辞書を追加***-->
        <entry key="ext_dict">ext.dic</entry>
    	<!--ユーザーはここに独自の拡張ストップワード辞書を配置可能、*** 停用語辞典を追加***-->
        <entry key="ext_stopwords">stopword.dic</entry>
</properties>
```

対応ファイルを編集後、再起動してください。

分詞器の役割は？

- 倒排索引作成時の文章分詞
- ユーザー検索時の入力内容の分詞

IK分詞器にはいくつのモードがある？

- ik_smart：スマート分割、粗粒度
- ik_max_word：最細分割、細粒度

IK分詞器は語条をどう拡張する？語条をどう停止させる？

- configディレクトリのIkAnalyzer.cfg.xmlファイルに拡張語辞典と停止語辞典を追加
- 辞典に拡張語条または停止語条を追加

# 索引庫の操作

索引庫はデータベースのテーブルに相当し、mappingはテーブルの構造のようなものです。

ESにデータを保存するには、まず「データベース」と「テーブル」を作成する必要があります。

## mapping映射属性

mappingはインデックス内のドキュメントの制約で、一般的なmapping属性には以下が含まれます：

- type：フィールドデータタイプ。代表的な基本型は：
    - 字符串：text（分词可能なテキスト）、keyword（厳密値、例：ブランド、国、IPアドレス）
    - 数値：long、integer、short、byte、double、float
    - 布尔：boolean
    - 日付：date
    - オブジェクト：object
- index：インデックスを作成するかどうか。デフォルトはtrue
- analyzer：どの分詞器を使用するか
- properties：このフィールドのサブフィールド

## 索引庫のCRUD

索引庫操作には以下があります：

- 索引庫を作成：PUT /索引庫名
- 索引庫を検索：GET /索引庫名
- 索引庫を削除：DELETE /索引庫名
- フィールドを追加：PUT /索引庫名/_mapping

### 索引庫と映射の作成

**基本構文**：

- リクエスト方式：PUT
- リクエストパス：/索引庫名（自由に決めても良い）
- リクエストパラメータ：mapping映射

形式：

```json
PUT /索引库名称
{
  "mappings": {
    "properties": {
      "字段名":{
        "type": "text",
        "analyzer": "ik_smart"
      },
      "字段名2":{
        "type": "keyword",
        "index": "false"
      },
      "字段名3":{
        "properties": {
          "子字段": {
            "type": "keyword"
          }
        }
      },
      // ... 略
    }
  }
}
```

### 索引庫の検索

**基本構文**：

- リクエスト方式：GET
- パス：/索引库名
- パラメータ：なし

**形式**：

```plain text
GET /索引库名
```

### 索引庫の修改

倒排索引の構造は複雑ではありませんが、データ構造が変更された場合（例えば分詞器を変更した場合）は、倒排索引を再作成する必要があり、これは災難です。したがって、索引庫は**作成後はmappingを変更できません**。

既存のmappingのフィールドを変更することはできませんが、新しいフィールドをmappingに追加することは可能です。なぜなら倒排索引には影響を与えないからです。

**文法説明**：

```json
PUT /索引庫名/_mapping
{
  "properties": {
    "新字段名":{
      "type": "integer"
    }
  }
}
```

### 索引庫の削除

**文法**：

- リクエスト方式：DELETE
- パス：/索引库名
- パラメータ：なし

**形式**：

```plain text
DELETE /索引库名
```

# ドキュメント操作

ドキュメント操作には以下があります：

- ドキュメントを作成：POST /{索引库名}/_doc/文書id { json文書 }
- ドキュメントを検索：GET /{索引库名}/_doc/文档id
- ドキュメントを削除：DELETE /{索引库名}/_doc/文档id
- ドキュメントを変更：
    - 全量修改：PUT /{索引库名}/_doc/文档id { json文档 }
    - 増分修改：POST /{索引库名}/_update/文档id { "doc": {字段}}

## 新規文档

**文法：**

```json
POST /索引库名/_doc/文档id
{
    "字段1": "値1",
    "字段2": "値2",
    "字段3": {
        "子属性1": "値3",
        "子属性2": "値4"
    },
    // ...
}
```

## 文書の検索

RESTスタイルに基づくと、新規はPOST、検索はGETですが、検索には通常条件が必要なため、ここでは文書IDを含めます。

**文法：**

```json
GET /{索引库名称}/_doc/{id}
```

## 文書の削除

削除はDELETEリクエストを使用します。同様にIDで削除します：

**文法：**

```plain text
DELETE /{索引库名}/_doc/id値
```

## 文書の変更

変更には2つの方法があります：

- 全量修改：元の文書を上書き
- 増分修改：文書の一部フィールドを変更

### 全量修改

全量修改は元の文書を上書きするもので、本質は：

- 指定のIDで文書を削除
- 同じIDの新しい文書を追加

注意：IDで削除時にIDが存在しない場合、2番目の追加も実行され、変更から追加へと変わります。

**文法：**

```json
PUT /{索引庫名}/_doc/文档id
{
    "字段1": "値1",
    "字段2": "値2",
    // ... 略
}
```

### 増量修改

増分修改は、指定IDに一致する文書の一部のフィールドだけを変更します。

**文法：**

```json
POST /{索引庫名}/_update/文档id
{
    "doc": {
         "字段名": "新的值",
    }
}
```

# RestAPI

Elasticsearch公式には、さまざまな言語のクライアントが提供されており、これらのクライアントは本質的にDSL文を組み立て、HTTPリクエストでESへ送信します。

JavaのRest Clientには2種類があります：

- Java Low Level Rest Client
- Java High Level Rest Client

索引庫操作の基本的な手順：

- RestHighLevelClientを初期化する
- XxxIndexRequestを作成。XxxはCreate、Get、Delete
- DSLを準備する（Create時のみ必要、他はパラメータなし）
- リクエストを送信する。RestHighLevelClient#indices().xxx()メソッドを呼び出す。xxxはcreate、exists、delete

## RestClientの初期化

elasticsearchのAPIには、Elasticsearchとすべてのやり取りをRestHighLevelClientというクラスに封装しており、まずこのオブジェクトの初期化を完了して、Elasticsearchへの接続を作成する必要があります。

3つのステップに分かれます：

1. ESのRestHighLevelClient依存関係を追加：

```xml
<dependency>
    <groupId>org.elasticsearch.client</groupId>
    <artifactId>elasticsearch-rest-high-level-client</artifactId>
</dependency>
```

1. SpringBootのデフォルトESバージョンは7.6.2なので、デフォルトのESバージョンを上書きします：

```xml
<properties>
    <java.version>1.8</java.version>
    <elasticsearch.version>7.12.1</elasticsearch.version>
</properties>
```

1. RestHighLevelClientを初期化します：

以下のコードで初期化します：

```java
RestHighLevelClient client = new RestHighLevelClient(RestClient.builder(
        HttpHost.create("<http://127.0.0.1:9200>")
));
```

## 索引庫の作成

コードは3ステップに分かれます：

- Requestオブジェクトを作成。作成するのはIndexの作成なのでCreateIndexRequest
- リクエストパラメータを追加。実際にはDSLのJSONパラメータ部分。JSON文字列が長いため、静的文字列定数MAPPING_TEMPLATEを定義してコードをきれいにします
- リクエストを送信。client.indices()の戻り値はIndicesClientタイプで、インデックス操作に関連するすべてのメソッドを包含

constantsパッケージの中に、mapping映射のJSON文字列定数を定義するクラスを作成します。

テストクラスで、インデックスの作成を実装するユニットテストを作成します：

```java
@Test
void createHotelIndex() throws IOException {
    // 1.作成Requestオブジェクト
    CreateIndexRequest request = new CreateIndexRequest("hotel");
    // 2.リクエストパラメータ：DSL文
    request.source(MAPPING_TEMPLATE, XContentType.JSON);
    // 3.リクエストを送信
    client.indices().create(request, RequestOptions.DEFAULT);
}
```

## 索引库の削除

索引庫のDSLは非常にシンプルです：

```json
DELETE /hotel
```

作成と比較して：

- リクエスト方式がPUTからDELETEへ変更
- パスは同じ
- パラメータはなし

従ってコードの差異はRequestオブジェクトに現れます。3ステップを踏みます：

- Requestオブジェクトを作成。今回はDeleteIndexRequest
- パラメータ準備。パラメータなし
- リクエストを送信。deleteメソッドを使用

hotel-demoのHotelIndexTestで、削除のユニットテストを作成します：

```java
@Test
void testDeleteHotelIndex() throws IOException {
    // 1.作成Requestオブジェクト
    DeleteIndexRequest request = new DeleteIndexRequest("hotel");
    // 2.リクエスト送信
    client.indices().delete(request, RequestOptions.DEFAULT);
}
```

## 索引库の存在確認

索引庫が存在するかどうかを判断するのは、検索と同様の流れです。対応するDSLは：

```json
GET /hotel
```

したがって、削除と同様のJavaコードの流れになります。三段階：

- 1）Requestオブジェクトを作成。今回はGetIndexRequest
- 2）パラメータ準備。無参
- 3）送信。existsメソッドを使用

```java
@Test
void testExistsHotelIndex() throws IOException {
    // 1.作成Requestオブジェクト
    GetIndexRequest request = new GetIndexRequest("hotel");
    // 2.リクエスト送信
    boolean exists = client.indices().exists(request, RequestOptions.DEFAULT);
    // 3.出力
    System.err.println(exists ? "索引庫は既に存在します！" : "索引庫は存在しません！");
}
```

# RestClient操作文書

JavaRestClientを用いたElasticsearch操作の流れは基本的に同じです。コアはclient.indices()メソッドを用いて索引庫の操作オブジェクトを取得することです。

文書操作の基本ステップ：

- RestHighLevelClientを初期化
- XxxRequestを作成。XXXはIndex、Get、Update、Delete、Bulk
- パラメータを準備（Index、Update、Bulk時には必要）
- リクエストを送信。RestHighLevelClient#.xxx()メソッドを呼び出す。xxxはindex、get、update、delete、bulk
- 結果を解析（Getの場合）

## 新規文書

データベースのホテルデータを検索し、Elasticsearchに書き込みます。

対応する型を定義します（インデックス構造に合わせる）：

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

新規文書のDSLは以下のとおり：

```json
POST /{索引库名}/_doc/1
{
    "name": "Jack",
    "age": 21
}
```

索引庫作成と同様、3ステップです：

- Requestオブジェクト作成
- DSLとしてJSON文書を用意
- 送信

ここで変更点は、client.indices()ではなく、直接client.xxx APIを使用する点です。

ユニットテストの例：

```java
@Test
void testAddDocument() throws IOException {
    // 1.ホテルデータをIDから取得
    Hotel hotel = hotelService.getById(61183L);
    // 2.ドキュメント型へ変換
    HotelDoc hotelDoc = new HotelDoc(hotel);
    // 3.HotelDocをJSONへ変換
    String json = JSON.toJSONString(hotelDoc);

    // 1. Requestオブジェクトを準備
    IndexRequest request = new IndexRequest("hotel").id(hotelDoc.getId().toString());
    // 2. JSONドキュメントを準備
    request.source(json, XContentType.JSON);
    // 3. 送信
    client.index(request, RequestOptions.DEFAULT);
}
```

## 文書の検索

検索のDSLは以下のとおり：

```json
GET /hotel/_doc/{id}
```

非常にシンプルで、コードはおおむね2つのステップです：

- Requestオブジェクトを準備
- 送信

ただし検索の目的は結果を得て、HotelDocとして解析することです。そのため結果はJSONの`_source`属性として格納されているため、`_source`を取得してJavaオブジェクトへ逆シリアライズします。

結果は以下の3ステップ：

- Requestオブジェクトを用意（今回はGetRequest）
- 送信して結果を取得（client.get()を呼び出し）
- 結果を解析（JSONをデシリアライズ）

ユニットテスト：

```java
@Test
void testGetDocumentById() throws IOException {
    // 1.リクエスト準備
    GetRequest request = new GetRequest("hotel", "61082");
    // 2.リクエスト送信、応答を取得
    GetResponse response = client.get(request, RequestOptions.DEFAULT);
    // 3.応答結果を解析
    String json = response.getSourceAsString();

    HotelDoc hotelDoc = JSON.parseObject(json, HotelDoc.class);
    System.out.println(hotelDoc);
}
```

## 文書の削除

削除のDSLは以下のとおり：

```json
DELETE /hotel/_doc/{id}
```

検索と比べ、リクエスト方式がDELETEになるだけです。Javaコードも3ステップです：

- Requestオブジェクトを準備。今回はDeleteRequest。インデックス名とIDを指定
- パラメータなし
- 送信。削除なのでclient.delete()を使用

ユニットテスト：

```java
@Test
void testDeleteDocument() throws IOException {
    // 1.リクエスト準備
    DeleteRequest request = new DeleteRequest("hotel", "61083");
    // 2.リクエスト送信
    client.delete(request, RequestOptions.DEFAULT);
}
```

## 文書の修改

変更には2つの方法があります：

- 全量修改：まずIDで削除し、次に同じIDで追加
- 増分修改：文書内の特定フィールドを変更

RestClientのAPIでは、全量修改と追加のAPIはIDを基準にしており、次の条件で判定されます：

- 追加時にIDがすでに存在すれば変更
- 追加時にIDが存在しなければ追加

ここでは増分修改に焦点を当てます。

- Requestオブジェクト準備。今回はUpdateRequest
- パラメータ準備。更新したいJSON文書を含む
- 文書を更新。ここでclient.update()を呼び出す

ユニットテスト：

```java
@Test
void testUpdateDocument() throws IOException {
    // 1.リクエスト準備
    UpdateRequest request = new UpdateRequest("hotel", "61083");
    // 2.パラメータ準備
    request.doc(
        "price", "952",
        "starName", "四つ星"
    );
    // 3.送信
    client.update(request, RequestOptions.DEFAULT);
}
```

## バッチ導入文書

ケース要件：BulkRequestを利用してデータベースデータを一括して索引庫へ導入。

手順は以下のとおり：

- mybatis-plusでホテルデータを照会
- 照会したホテルデータ（Hotel）を、文書タイプデータ（HotelDoc）へ変換
- JavaRestClientのBulkRequestを用いて一括追加文書を実現

BulkRequestの本質は、複数のCRUDリクエストを一括して送信することです。addメソッドが提供されており、他のリクエストを追加できます：

- IndexRequest：新規追加
- UpdateRequest：更新
- DeleteRequest：削除

ユニットテスト：

```java
@Test
void testBulkRequest() throws IOException {
    // 一括でホテルデータを照会
    List<Hotel> hotels = hotelService.list();

    // 1. Requestを作成
    BulkRequest request = new BulkRequest();
    // 2. パラメータ準備。複数の新規追加リクエストを追加
    for (Hotel hotel : hotels) {
        // 2.1. HotelDocへ変換
        HotelDoc hotelDoc = new HotelDoc(hotel);
        // 2.2. 新規追加のRequestを作成
        request.add(new IndexRequest("hotel")
                    .id(hotelDoc.getId().toString())
                    .source(JSON.toJSONString(hotelDoc), XContentType.JSON));
    }
    // 3. 送信
    client.bulk(request, RequestOptions.DEFAULT);
}
```

# DSLによる文書検索

Elasticsearchの検索は引き続きJSON風のDSLを用いて実現します。

## DSL検索の分類

ElasticsearchはJSONベースのDSL（[Domain Specific Language](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html)）を提供して、検索を定義します。代表的な検索タイプは以下のとおり：

- **全件検索**：すべてのデータを検索、一般的なテストとして。例：match_all
- **全文検索（full text）**：入力を分詞して、倒排索引と照合。例：
    - match_query
    - multi_match_query
- **精密検索**：特定の語条の値でデータを検索。通常はkeyword、数値、日付、booleanなどのフィールドに対して：
    - ids
    - range
    - term
- **地理（geo）検索**：緯度経度で検索。例：
    - geo_distance
    - geo_bounding_box
- **複合（compound）検索**：上記の複数条件を組み合わせて、複雑な検索を実現
    - bool
    - function_score

検索の基本的な文法はほぼ同じです：

```json
GET /indexName/_search
{
  "query": {
    "検索タイプ": {
      "検索条件": "条件値"
    }
  }
}
```

## 全文検索クエリ

全文検索クエリの基本的な流れは以下のとおりです：

- ユーザーが検索する内容を分詞して、語条を得る
- 語条を倒排索引でマッチさせ、文書IDを得る
- 文書IDから文書を検索してユーザーに返す

よく使われる状況は次のとおり：

- ECサイトの検索ボックス
- 百度の検索ボックス

よくある全文検索クエリには次のものがあります：

- matchクエリ：単一フィールドの検索

```json
GET /indexName/_search
{
  "query": {
    "match": {
      "FIELD": "TEXT"
    }
  }
}
```

- multi_matchクエリ：複数フィールドの検索。一方のフィールドでも条件を満たせば検索条件を満たしたとみなす；検索対象フィールドが多いほど検索性能が低下

```json
GET /indexName/_search
{
  "query": {
    "multi_match": {
      "query": "TEXT",
      "fields": ["FIELD1", " FIELD12"]
    }
  }
}
```

## 精密検索

精密検索は通常、keyword、数値、日付、booleanなどのフィールドを対象とするため、検索条件は分词されません。よくあるもの：

- term：語条の厳密値で検索。通常はkeywordタイプ、数値タイプ、布尔型、日付型のフィールドを検索

  分词されていないフィールドを検索するため、入力する条件も**非分詞**語条である必要があります。ユーザー入力が完全一致する場合のみ、条件に合致すると見なされます。もし入力が多すぎると、データを見つけることができなくなる場合があります。

```json
// termクエリ
GET /indexName/_search
{
  "query": {
    "term": {
      "FIELD": {
        "value": "VALUE"
      }
    }
  }
}
```

- range：値の範囲で検索。数値や日付の範囲を対象

```json
// rangeクエリ
GET /indexName/_search
{
  "query": {
    "range": {
      "FIELD": {
        "gte": 10, // ここでgteは「以上」、gtは「より大きい」
        "lte": 20 // lteは「以下」、ltは「未満」
      }
    }
  }
}
```

## 地理坐標検索

地理座標検索は、要するに経緯度に基づく検索です。

よくあるケース：

- 携程：周辺のホテルを検索
- 滴滴：周辺のタクシーを検索
- 微信：周辺の人を検索
- 矩形範囲検索

矩形範囲検索、すなわちgeo_bounding_box検索、特定の矩形範囲内のすべての文書を検索します。

検索時には矩形の**左上**、**右下**の2点の座標を指定し、矩形を描画します。その矩形内に落ちる座標が条件を満たします。

```json
// geo_bounding_boxクエリ
GET /indexName/_search
{
  "query": {
    "geo_bounding_box": {
      "FIELD": {
        "top_left": { // 左上点
          "lat": 31.1,
          "lon": 121.5
        },
        "bottom_right": { // 右下点
          "lat": 30.9,
          "lon": 121.7
        }
      }
    }
  }
}
```

- 周辺検索

  周辺検索、別名距離検索（geo_distance）：中心点から指定距離以下の全文書を検索。

  すなわち、地図上の点を円心とし、半径を距離として円を描き、円内の座標をすべて条件として扱います。

```json
// geo_distance クエリ
GET /indexName/_search
{
  "query": {
    "geo_distance": {
      "distance": "15km", // 半径
      "FIELD": "31.21,121.5" // 円心
    }
  }
}
```

## 複合検索

複合検索（compound）は、他のシンプルな検索を組み合わせ、より複雑な検索ロジックを実現します。一般的には2つの形：

- fuction_score：スコア算出関数検索で、文書の関連性スコアを制御し、文書の順位を操作
- boolクエリ：ブール条件で複数の他の検索を組み合わせ、複雑な検索を実現

### 関連性スコア

matchクエリを使うと、文書結果は検索語条との関連度（_score）に基づいてスコアリングされ、結果はスコアの降順で返されます。

早期のTF-IDFアルゴリズムを使っていたElasticsearchは、5.1でBM25アルゴリズムへ置換されました。

BM25の式は以下のとおりです：

```
Score(Q,d) = ∑_{i=1}^n log(1 + (N-n+0.5)/(n+0.5)) * f_i / (f_i + k_1*(1-b+b*(dl/avgdl)))
```

TF-IDFには欠点があり、語条の頻度が高いと文書のスコアが高くなりすぎる点がありました。BM25は単一語条のスコアに上限を設け、曲線をより滑らかにします。

### 算分関数クエリ

関連性に基づくスコアリングは合理的な要件ですが、必ずしも製品マネージャーの要件に適うとは限りません。

百度の例では、結果の関連性が高いほど上位になるとは限らず、誰が金を多く払うかで順位が決まる場合もあります。

関連性算出をコントロールするには、Elasticsearchのfunction_scoreクエリを使います。

function_scoreクエリは4つの要素を含みます：

- 原始クエリ（query）：この条件で文書を検索し、BM25に基づく原始スコア（query score）を得る
- フィルタ条件（filter）：この条件を満たす文書だけが再スコアリング対象になる
- 算分関数（functions）：filter条件を満たす文書に対してこの関数で演算し、得られる**関数算分**（function score）を得る。4種類の関数
  - weight：定数としての関数結果
  - field_value_factor：文書中の特定フィールド値を関数結果として使用
  - random_score：乱数を関数結果として使用
  - script_score：独自算分関数アルゴリズム
- 運算モード（boost_mode）：function_scoreの結果と原始クエリの関連性スコアの演算方式を決定

function_scoreの実行フローは次のとおりです：

- 原始条件で文書を検索し、関連性算分（query score）を計算
- filter条件で文書をフィルタ
- filter条件を満たす文書を、算分関数で演算し、関数算分を得る
- 原始算分と関数算分を、boost_modeに基づいて演算し、最終結果として関連性算分を得る

```json
GET /hotel/_search
{
  "query": {
    "function_score": {
      "query": {  .... }, // 原始検索、任意の条件
      "functions": [ // 算分関数
        {
          "filter": { // 満たす条件、ブランドが如家
            "term": {
              "brand": "如家"
            }
          },
          "weight": 2 // 算分のウェイトを2に設定
        }
      ],
      "boost_mode": "sum" // 加重モード、合計
    }
  }
}
```

function_scoreクエリの3要素は？

- フィルター条件：どの文書を加点するか
- 算分関数：function_scoreの計算方法
- 加重方式：function_scoreとquery scoreの演算方法

### ブールクエリ

ブールクエリは、1つ以上のサブクエリを組み合わせたものです。サブクエリの組み合わせ方には：

- must：各サブクエリを必ずマッチさせる（AND）
- should：サブクエリの任意一致（OR的な要素）
- must_not：必ず一致しない（スコアには関与しない）
- filter：必ず一致（スコアには関与しない）

検索時、スコアリングに参与するフィールドが多いほど性能が低下する可能性があるため、次のように分けて使うと良いです：

- 検索ボックスのキーワード検索は全文検索クエリを使い、mustで算分に参加させる
- その他のフィルタ条件はfilterで使用。算分には参加させない

```json
GET /hotel/_search
{
  "query": {
    "bool": {
      "must": [
        {"term": {"city": "上海" }}
      ],
      "should": [
        {"term": {"brand": "皇冠假日" }},
        {"term": {"brand": "华美达" }}
      ],
      "must_not": [
        { "range": { "price": { "lte": 500 } } }
      ],
      "filter": [
        { "range": {"score": { "gte": 45 } } }
      ]
    }
  }
}
```

# 検索結果の処理

検索結果は、ユーザーが指定した方法で処理または表示できます。

## ソート

Elasticsearchはデフォルトで関連性スコア（_score）でソートしますが、検索結果のソートをカスタムすることもできます。ソート可能なフィールドタイプには、keyword、数値、地理座標、日付などがあります。

- 通常のフィールドのソート

  keyword、数値、日付タイプのソートの文法はほぼ同じ。

```json
GET /indexName/_search
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "FIELD": "desc"  // ソート対象フィールド、ASCまたはDESC
    }
  ]
}
```

- 緯度経度ソート

  地理座標ソートは少し異なります。

```json
GET /indexName/_search
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "_geo_distance" : {
          "FIELD" : "latitude, longitude", // ドキュメントのgeo_point型フィールド名とターゲット座標
          "order" : "asc", // ソート順
          "unit" : "km" // ソートの距離単位
      }
    }
  ]
}
```

このクエリの意味は：

- 座標を指定し、それをターゲット点として使用する
- 各文書中の指定フィールド（geo_point型である必要あり）の座標とターゲット点との距離を計算
- 距離に基づいてソート

## ページネーション

Elasticsearchはデフォルトでトップ10のみ返します。より多くのデータを取得するには、fromとsizeパラメータを使ってページネーションを制御します。

- from：何番目の文書から開始するか
- size：取得する文書数の総数

Mysqlのlimit ?, ? に相当します。

基本的なページネーションの形式：

```json
GET /hotel/_search
{
  "query": {
    "match_all": {}
  },
  "from": 0, // ページ開始位置、デフォルトは0
  "size": 10, // 取得したい文書の総数
  "sort": [
    {"price": "asc"}
  ]
}
```

深いページネーションはメモリとCPUに大きな負荷を与えるため、from + size の組み合わせは10000を超えないよう Elasticsearchが制限します。

深いページネーションへの対応として、ESはいくつかの解決策を提供します。

- search_after：ソートが必要な場合に、前回のソート値から次のページを取得する方法。公式推奨。
- scroll：ソートした文書IDのスナップショットをメモリに保存する方式。公式は推奨していません。

 depth pagination の実装案と長所・短所：

- `from + size`：
  - 長所：ランダムアクセスが可能
  - 短所：深いページネーションの上限が10000
  - 想定シナリオ：百度、京東、Google、淘宝などのランダムページネーション検索
- `after`（search_after）：
  - 長所：上限なし（単一のクエリのsizeが10000を超えなければOK）
  - 短所：後ろへのみ逐次ページネーション、ランダムページは不可
  - 想定シナリオ：ランダムページネーションを必要としない検索
- `scroll`：
  - 長所：上限なし
  - 短所：追加のメモリ消費、検索結果はリアルタイムではない
  - 想定シナリオ：大量データの取得・移行。ES7.1以降は推奨されず、after searchの方を推奨

## ハイライト

百度や京東の検索では、キーワードが赤カラーで強調表示されます。これがハイライト表示です。

ハイライトの実装は2段階：

- ドキュメント中のすべてのキーワードにタグを追加（例：`<em>`タグ）
- ページで`<em>`タグのCSSを作成

**ハイライトの構文**：

```json
GET /hotel/_search
{
  "query": {
    "match": {
      "FIELD": "TEXT" // クエリ条件。ハイライトは全文検索が必須
    }
  },
  "highlight": {
    "fields": { // ハイライト対象フィールドを指定
      "FIELD": {
        "pre_tags": "<em>",  // ハイライト前置タグ
        "post_tags": "</em>" // ハイライト後置タグ
      }
    }
  }
}
```

**注意事項：**

- ハイライトはキーワードに対して行われるため、検索条件は必ずキーワードを含む全文検索である必要があります。範囲条件などの検索ではハイライトは生成されません。
- デフォルトでは、ハイライト対象フィールドは検索で指定したフィールドと同一である必要があります。そうでない場合はハイライトされません
- 検索対象外のフィールドをハイライトしたい場合は、属性を追加する必要があります：`required_field_match=false`

# RestClientによる文書検索

RestHighLevelClientオブジェクトを使う前提の検索は、RestClientでも基本的には同様です。核心はclient.indices()メソッドを使用して索引操作オブジェクトを取得する点です。

文書検索の基本手順：

- RestHighLevelClientを初期化
- XxxRequestを作成。XXXはIndex、Get、Update、Delete、Bulk
- パラメータを準備（Index、Update、Bulk時には必要）
- リクエストを送信。client.xxx()を呼び出す
- 結果を解析

## 新規文書の追加

ホテルデータをElasticsearchに追加します。

インデックス設計と構造に合わせて新しいタイプを定義します：

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

新規文書のDSL：

```json
POST /{索引庫名}/_doc/1
{
    "name": "Jack",
    "age": 21
}
```

索引庫作成と同様、3ステップです：

- Requestオブジェクトを作成
- JSON文書を準備
- 送信

コード内のAPIは、`client.indices()`の代わりに直接`client.xxx()`を使用します。

ユニットテスト：

```java
@Test
void testAddDocument() throws IOException {
    // 1. IDでホテルデータを検索
    Hotel hotel = hotelService.getById(61083L);
    // 2. HotelDocへ変換
    HotelDoc hotelDoc = new HotelDoc(hotel);
    // 3. HotelDocをJSONへ変換
    String json = JSON.toJSONString(hotelDoc);

    // 1. Requestオブジェクトを準備
    IndexRequest request = new IndexRequest("hotel").id(hotelDoc.getId().toString());
    // 2. JSON文書を準備
    request.source(json, XContentType.JSON);
    // 3. 送信
    client.index(request, RequestOptions.DEFAULT);
}
```

## 文書の検索

検索のDSLは以下のとおり：

```json
GET /hotel/_doc/{id}
```

非常にシンプルなため、コードは概ね2ステップです：

- Requestオブジェクト作成
- 送信

ただし検索の目的は結果を得て、それをHotelDocへデシリアライズすることです。そのため、結果は`_source`として格納されているので、それを取得してJavaオブジェクトへデシリアライズします。

- Requestオブジェクトを作成。今回はGetRequest
- 送信して結果を取得。GetResponseを使用
- 結果を解析。JSONをデシリアライズ

ユニットテスト：

```java
@Test
void testGetDocumentById() throws IOException {
    // 1.リクエスト作成
    GetRequest request = new GetRequest("hotel", "61082");
    // 2.リクエストを送信して応答を取得
    GetResponse response = client.get(request, RequestOptions.DEFAULT);
    // 3.応答結果を解析
    String json = response.getSourceAsString();

    HotelDoc hotelDoc = JSON.parseObject(json, HotelDoc.class);
    System.out.println(hotelDoc);
}
```

## 文書の削除

削除のDSLは次のとおり：

```json
DELETE /hotel/_doc/{id}
```

検索と比べ、リクエスト方式がGETへ変更されるだけです。Javaコードは3ステップ：

- Requestオブジェクトを準備。今回はDeleteRequest
- パラメータなし
- 送信。削除なのでclient.delete()を使用

ユニットテスト：

```java
@Test
void testDeleteDocument() throws IOException {
    // 1.リクエスト準備
    DeleteRequest request = new DeleteRequest("hotel", "61083");
    // 2.リクエスト送信
    client.delete(request, RequestOptions.DEFAULT);
}
```

## 文書の変更

変更には2つの方法があります：

- 全量修改：まずIDで削除、次に同じIDで追加
- 増分修改：文書の特定フィールドを変更

RestClientのAPIでは、全量修改と追加のAPIはIDで判定します：

- 追加時にIDが既に存在すれば変更
- 追加時にIDが存在しなければ追加

ここでは増分修改にフォーカスします。

- Requestオブジェクト準備。今回はUpdateRequest
- パラメータ準備。変更するフィールドを含むJSON文書
- 文書を更新。ここではclient.update()を呼び出します

ユニットテスト：

```java
@Test
void testUpdateDocument() throws IOException {
    // 1.リクエスト準備
    UpdateRequest request = new UpdateRequest("hotel", "61083");
    // 2.リクエストパラメータ
    request.doc(
        "price", "952",
        "starName", "四つ星"
    );
    // 3.送信
    client.update(request, RequestOptions.DEFAULT);
}
```

## バッチ導入文書

ケース：BulkRequestを用いてデータベースデータを一括して索引庫へ導入。

手順：

- MyBatis-Plusでホテルデータを検索
- 検索されたホテルデータ（Hotel）を、文書型データ（HotelDoc）へ変換
- BulkRequestを用いて一括追加文書を実現

BulkRequestは複数のCRUDリクエストをまとめて送信します。addメソッドで他のリクエストを追加可能です：

追加可能なリクエストには以下があります：

- IndexRequest（新規追加）
- UpdateRequest（更新）
- DeleteRequest（削除）

ユニットテスト：

```java
@Test
void testBulkRequest() throws IOException {
    // 一括でホテルデータを取得
    List<Hotel> hotels = hotelService.list();

    // 1. Requestを作成
    BulkRequest request = new BulkRequest();
    // 2. パラメータを準備、複数の新規追加Requestを追加
    for (Hotel hotel : hotels) {
        // 2.1. HotelDocへ変換
        HotelDoc hotelDoc = new HotelDoc(hotel);
        // 2.2. 新規追加のRequestを作成
        request.add(new IndexRequest("hotel")
                    .id(hotelDoc.getId().toString())
                    .source(JSON.toJSONString(hotelDoc), XContentType.JSON));
    }
    // 3. 送信
    client.bulk(request, RequestOptions.DEFAULT);
}
```

# DSL検索

Elasticsearchの検索は、JSONスタイルのDSLに基づいて実装されます。

## DSL検索の分類

ElasticsearchはJSONベースのDSLを提供し、定義された検索として以下が一般的です：

- **全件検索**：すべてのデータを検索。例：match_all
- **全文検索（full text）**：分詞器を用いて入力を分詞し、倒排索引と一致
  - match_query
  - multi_match_query
- **正確検索**：語条の厳密値で検索。通常はkeyword、数値、日付、booleanなど
  - ids
  - range
  - term
- **地理（geo）検索**：経緯度ベース
  - geo_distance
  - geo_bounding_box
- **複合（compound）検索**：他の検索条件を組み合わせる
  - bool
  - function_score

検索の文法はほぼ共通です：

```json
GET /indexName/_search
{
  "query": {
    "検索タイプ": {
      "検索条件": "条件値"
    }
  }
}
```

## 全文検索クエリ

全文検索クエリの基本的な流れ：

- ユーザーの検索内容を分詞して語条を得る
- 語条を倒排索引で検索して文書IDを得る
- 文書IDから文書を検索して返す

代表的なシーン：

- ショッピングサイトの検索ボックス
- 百度の検索ボックス

よく使われる全文検索クエリ：

- matchクエリ：単一フィールドの検索

```json
GET /indexName/_search
{
  "query": {
    "match": {
      "FIELD": "TEXT"
    }
  }
}
```

- multi_matchクエリ：複数フィールドの検索。条件を満たすフィールドが多いほど性能が低下

```json
GET /indexName/_search
{
  "query": {
    "multi_match": {
      "query": "TEXT",
      "fields": ["FIELD1", " FIELD12"]
    }
  }
}
```

## 正確検索

正確検索は、主に次の2つです：

- term：語条の厳密値で検索。通常はkeyword、数値、boolean、日付のフィールドを検索

  なぜなら、正確検索対象のフィールドは分詞されていないため、検索条件も**非分詞**の語条である必要があります。ユーザーが入力した内容が完全一致する場合にのみ、条件に合致するとみなされます。もし入力が多すぎると、データを見つけられなくなることがあります。

```json
// termクエリ
GET /indexName/_search
{
  "query": {
    "term": {
      "FIELD": {
        "value": "VALUE"
      }
    }
  }
}
```

- range：値の範囲で検索。数値・日付の範囲

```json
// rangeクエリ
GET /indexName/_search
{
  "query": {
    "range": {
      "FIELD": {
        "gte": 10, // 大なり以上
        "lte": 20  // 小なり以下
      }
    }
  }
}
```

## 地理座標検索

地理座標検索は、経緯度に基づく検索です。

よくあるシナリオ：

- 携程：周辺のホテルを検索
- 滴滴：周辺のタクシーを検索
- WeChat：周辺の人を検索
- 矩形範囲検索

矩形範囲検索、すなわちgeo_bounding_boxクエリは、座標が矩形範囲内に落ちる全ての文書を検索します。

検索時には矩形の左上と右下の2点の座標を指定し、矩形を作成します。その矩形内の座標が条件を満たします。

```json
// geo_bounding_boxクエリ
GET /indexName/_search
{
  "query": {
    "geo_bounding_box": {
      "FIELD": {
        "top_left": { // 左上点
          "lat": 31.1,
          "lon": 121.5
        },
        "bottom_right": { // 右下点
          "lat": 30.9,
          "lon": 121.7
        }
      }
    }
  }
}
```

- 近隣検索

  近隣検索、別名距離検索（geo_distance）：中心点から指定距離以下の文書を検索。

  言い換えれば、地図上の点を円心として、指定距離を半径とする円を描き、その円内の座標を条件とします。

```json
// geo_distance クエリ
GET /indexName/_search
{
  "query": {
    "geo_distance": {
      "distance": "15km", // 半径
      "FIELD": "31.21,121.5" // 円心
    }
  }
}
```

## 複合クエリ

複合（compound）クエリは、他の複数のクエリを組み合わせて、より複雑な検索ロジックを実現します。一般的には2種類：

- fuction score：スコア算出関数クエリ。文書の関連性を制御して、順位を調整
- boolクエリ：論理演算によって複数のクエリを組み合わせ、複雑な検索を実現

### 関連性スコア

matchクエリを使用すると、ドキュメントの結果は検索語条との関連度に基づいてスコア付けされ、結果はスコアの降順で返されます。

BM25以前のTF-IDFアルゴリズムは、語条頻度が高いほど文書のスコアが高くなる欠点がありました。BM25は単一語条のスコアに上限を設け、曲線を滑らかにします。

### スコア関数クエリ

関連度スコアを制御するにはfunction_scoreクエリを使います。

function_scoreクエリには4つの要素があります：

- 原始クエリ（query）：この条件で文書を検索し、BM25アルゴリズムに基づく原始スコア（query score）を得る
- フィルタ条件（filter）：この条件を満たす文書のみ再スコアリング対象になる
- 算分関数（functions）：条件を満たす文書に対してこの関数で演算して得られる**関数算分**（function score）がある。4つの関数
  - weight：関数結果は定数
  - field_value_factor：文書中の特定フィールド値を関数結果として使用
  - random_score：乱数を関数結果として使用
  - script_score：カスタム算分関数
- 運算モード（boost_mode）：function_scoreの結果と原始クエリの関連性算分をどう組み合わせるか

function_scoreの実行フローは以下のとおりです：

- 原始条件で文書を検索し、関連性算分（query score）を計算
- filter条件で文書をフィルタ
- filter条件を満たす文書は、算分関数で演算して関数算分を得る
- 原始算分（query score）と関数算分を、運用モードに基づいて演算して最終結果の関連性算分を得る

```json
GET /hotel/_search
{
  "query": {
    "function_score": {
      "query": {  .... }, // 原始クエリ、任意の条件
      "functions": [ // 算分関数
        {
          "filter": { // 条件を満たす、ブランドが如家である
            "term": {
              "brand": "如家"
            }
          },
          "weight": 2 // 算分のウェイト
        }
      ],
      "boost_mode": "sum" // 加重モード、加算
    }
  }
}
```

function_scoreクエリの3要素は？

- フィルター条件：どの文書に点数を与えるか
- 算分関数：function_scoreの計算方法
- 加重方式：function_scoreとquery scoreの演算方法

### ブールクエリ

ブールクエリは、1つ以上のサブクエリの組み合わせで、各サブクエリは「サブクエリ」です。サブクエリの組み合わせ方法には：

- must：各サブクエリを必ずマッチさせる、つまり「AND」
- should：サブクエリの任意一致、つまり「OR」
- must_not：必ずマッチしない、スコアには参加しない、つまり「NOT」
- filter：必ずマッチ、スコアには参加しない

検索時、スコアリングに参加するフィールドが多いほど、検索の性能は低下します。したがって、次のように多条件検索を行うのが望ましいです。

- 検索ボックスのキーワード検索は全文検索クエリを使用し、mustで算分に参加させる
- その他のフィルタ条件はfilterで使用。算分には参加させない

```json
GET /hotel/_search
{
  "query": {
    "bool": {
      "must": [
        {"term": {"city": "上海" }}
      ],
      "should": [
        {"term": {"brand": "皇冠假日" }},
        {"term": {"brand": "华美达" }}
      ],
      "must_not": [
        { "range": { "price": { "lte": 500 } } }
      ],
      "filter": [
        { "range": {"score": { "gte": 45 } } }
      ]
    }
  }
}
```

# 検索結果の処理

検索結果は、ユーザーが指定した方式で処理・表示できます。

## 並べ替え

デフォルトでは、Elasticsearchは関連性スコアに基づいて並べ替えしますが、検索結果の並べ替えをカスタムすることも可能です。[検索結果の並べ替え](https://www.elastic.co/guide/en/elasticsearch/reference/current/sort-search-results.html)。ソート可能なフィールドタイプには、keywordタイプ、数値、地理座標、日付などがあります。

- 普通のフィールドのソート

  keyword、数値、日付タイプのソートの文法はほぼ同じ。

```json
GET /indexName/_search
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "FIELD": "desc"  // ソートフィールド、ソート方法はASCまたはDESC
    }
  ]
}
```

- 緯度経度ソート

  地理座標ソートは少し違います。

```json
GET /indexName/_search
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "_geo_distance" : {
          "FIELD" : "緯度, 経度", // ドキュメント中のgeo_point型フィールド名、ターゲット座標
          "order" : "asc", // ソート順
          "unit" : "km" // 距離の単位
      }
    }
  ]
}
```

この検索の意味は：

- 座標を指定して、ターゲット点として使う
- ドキュメント中の指定フィールド（geo_point型である必要あり）の座標とターゲット点の距離を算出
- 距離に基づいてソート

## ページネーション

Elasticsearchはデフォルトでトップ10のみ返します。より多くのデータを取得するには、fromとsizeで分页を制御します。

from：開始位置

size：取得するドキュメント数

Mysqlのlimit ?, ?に相当

基本的なページネーションの形式：

```json
GET /hotel/_search
{
  "query": {
    "match_all": {}
  },
  "from": 0,  // ページの開始位置、デフォルトは0
  "size": 10, // 取得したいドキュメント数
  "sort": [
    {"price": "asc"}
  ]
}
```

深いページネーションは、メモリとCPUに大きな負荷を与えるため、from+sizeの組み合わせでのリクエストを10000を超えないように制限します。

深いページネーションへの対応として、ESは以下の2つの解決策を提供します。

- search after：ソートが必要な場合、前回のソート値から次ページを取得する。公式推奨
- scroll：ソート済みの文書IDをスナップショットとしてメモリに保持する。公式は推奨せず

ページネーションの実装方法と長所・短所：

- `from + size`：
  - 長所：ランダムページネーション対応
  - 短所：深いページネーションの上限は10000
  - シナリオ：百度、京東、Google、淘宝のようなランダムページネーション検索
- `after`（search_after）：
  - 長所：クエリごとにサイズが10000を超えない限り、制限なし
  - 短所：後ろへのみページ進行、ランダムページは不可
  - シナリオ：ランダムページネーションの必要がない検索
- `scroll`：
  - 長所：上限なし
  - 短所：追加のメモリ消費、検索結果はリアルタイムではない
  - シナリオ：大量データの取得・移行。ES7.1以降は推奨されず、after searchを使用する推奨

## ハイライト

百度、京東の検索では、キーワードが赤色で表示されます。これがハイライト表示です。

ハイライトの実装は2段階：

- ドキュメント中のすべてのキーワードにタグを追加する（例：`<em>`タグ）
- ページ上で`<em>`タグのCSSを作成する

**ハイライトの構文**：

```json
GET /hotel/_search
{
  "query": {
    "match": {
      "FIELD": "TEXT" // クエリ条件、ハイライトは必ず全文検索を使う
    }
  },
  "highlight": {
    "fields": { // ハイライトするフィールドを指定
      "FIELD": {
        "pre_tags": "<em>",  // ハイライト前置タグ
        "post_tags": "</em>" // ハイライト後置タグ
      }
    }
  }
}
```

**注意事項：**

- ハイライトはキーワードに対して行われるため、検索条件は必ずキーワードを含む必要があります。範囲条件のような検索ではハイライトは表示されません
- デフォルトでは、ハイライト対象フィールドは検索で指定されたフィールドと一致している必要があります。そうでない場合、ハイライトされません
- 検索対象外のフィールドをハイライトする場合は、属性を追加する必要があります：`required_field_match=false`

# RestClientによる文書検索

RestHighLevelClientと同様の流れでElasticsearchを操作します。核心はclient.indices()メソッドで索引操作オブジェクトを取得します。

文書検索の基本ステップ：

- RestHighLevelClientを初期化
- XxxRequestを作成。XXXはIndex、Get、Update、Delete、Bulk
- パラメータを準備（Index、Update、Bulk時）
- リクエストを送信。client.xxx()を呼び出す
- 結果を解析

## 迅速な入門

```java
@Test
void testMatchAll() throws IOException {
    // 1.リクエストを準備
    SearchRequest request = new SearchRequest("hotel");
    // 2.DSLを準備
    request.source()
        .query(QueryBuilders.matchAllQuery());
    // 3.リクエストを送信
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);

    // 4.応答を解析
    handleResponse(response);
}

private void handleResponse(SearchResponse response) {
    // 4.応答を解析
    SearchHits searchHits = response.getHits();
    // 4.1.総件数を取得
    long total = searchHits.getTotalHits().value;
    System.out.println("共検索到 " + total + " 件のデータ");
    // 4.2. ドキュメント配列
    SearchHit[] hits = searchHits.getHits();
    // 4.3. ループ
    for (SearchHit hit : hits) {
        // ドキュメントのsourceを取得
        String json = hit.getSourceAsString();
        // 逆シリアライズ
        HotelDoc hotelDoc = JSON.parseObject(json, HotelDoc.class);
        System.out.println("hotelDoc = " + hotelDoc);
    }
}
```

- 第1歩：`SearchRequest`オブジェクトを作成し、インデックス名を指定
- 第2歩：`request.source()`を用いてDSLを構築。DSLには検索、ページネーション、ソート、ハイライトなどが含まれる
  - `query()`：検索条件。本質的には`QueryBuilders.matchAllQuery()`等を使って、検索条件を構築
- 第3歩：`client.search()`でリクエストを送信して、レスポンスを取得

Elasticsearchの返却結果はJSON文字列で、以下の構造を含みます：

- `hits`：ヒットした結果
  - `total`：総ヒット数。valueが具体的な総数
  - `max_score`：すべての結果の中で最も高い関連度スコア
  - `hits`：検索結果の文書配列。それぞれがJSONオブジェクト
    - `_source`：ドキュメントの元データ、JSONオブジェクト

したがって、応答を解析するには、JSON文字列を階層的に解析します。

- `SearchHits`：response.getHits()で取得。JSONの最外層のhits
  - `SearchHits#getTotalHits().value`：総件数を取得
  - `SearchHits#getHits()`：SearchHitの配列を取得。文書配列
    - `SearchHit#getSourceAsString()`：ドキュメントの_sourceを取得。元のJSONデータ

## matchクエリ

全文検索のmatchとmulti_matchクエリは、match_allのAPIと基本的には同じです。差異は、クエリの条件部分です。

従って、Javaコードでの差異は、`request.source().query()`内のパラメータになります。以下は同様に`QueryBuilders`を使用します。

```java
@Test
void testMatch() throws IOException {
    // 1.リクエスト準備
    SearchRequest request = new SearchRequest("hotel");
    // 2.DSL準備
    request.source()
        .query(QueryBuilders.matchQuery("all", "如家"));
    // 3.リクエスト送信
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);
    // 4.応答を解析
    handleResponse(response);
}
```

## 正確検索

正確検索は主に次の2つです：

- term：語条の正確なマッチ
- range：範囲検索

他のクエリとの違いは、検索条件が分詞されない点です。

```java
//語条検索
QueryBuilders.termQuery("city","杭州");

//範囲検索
QueryBuilders.rangeQuery("price").gte(100).lte(150);
```

## ブールクエリ

ブールクエリは、must、must_not、filter等を用いて他のクエリを組み合わせます。

APIは他のクエリと同様に、条件の構築部分だけが異なります。

```java
@Test
void testBool() throws IOException {
    // 1.リクエスト準備
    SearchRequest request = new SearchRequest("hotel");
    // 2.DSL準備
    // 2.1 Booleanクエリの準備
    BoolQueryBuilder boolQuery = QueryBuilders.boolQuery();
    // 2.2 termの追加
    boolQuery.must(QueryBuilders.termQuery("city", "杭州"));
    // 2.3 rangeの追加
    boolQuery.filter(QueryBuilders.rangeQuery("price").lte(250));

    request.source().query(boolQuery);
    // 3.リクエスト送信
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);
    // 4.応答を解析
    handleResponse(response);
}
```

## ソート、ページネーション

検索結果のソートとページネーションは、クエリと同階層のパラメータとして設定します。

```java
@Test
void testPageAndSort() throws IOException {
    // ページ数・1ページあたりのサイズ
    int page = 1, size = 5;

    // 1.リクエスト準備
    SearchRequest request = new SearchRequest("hotel");
    // 2.DSL準備
    // 2.1 query
    request.source().query(QueryBuilders.matchAllQuery());
    // 2.2 sort
    request.source().sort("price", SortOrder.ASC);
    // 2.3 from, sizeでページネーション
    request.source().from((page - 1) * size).size(5);
    // 3.リクエスト送信
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);
    // 4.応答を解析
    handleResponse(response);
}
```

## ハイライト

ハイライトのコードは前者のコードと大きく異なる点が2つあります：

- DSLの構造：クエリ条件に加えて、ハイライト条件を追加する必要がある
- 結果の解析：`_source`ドキュメントデータだけでなく、ハイライト結果の解析が必要

以下はハイライトの例と、その取得処理の要点です。

```java
@Test
void testHighlight() throws IOException {
    // 1.準備Request
    SearchRequest request = new SearchRequest("hotel");
    // 2.DSL準備
    // 2.1.クエリ
    request.source().query(QueryBuilders.matchQuery("all", "如家"));
    // 2.2.ハイライト
    request.source().highlighter(new HighlightBuilder().field("name").requireFieldMatch(false));
    // 3.送信
    SearchResponse response = client.search(request, RequestOptions.DEFAULT);
    // 4.解析
    handleResponse(response);
}

private void handleResponse(SearchResponse response) {
    // 4.解析結果
    SearchHits searchHits = response.getHits();
    long total = searchHits.getTotalHits().value;
    System.out.println("共検索到" + total + "条数据");
    SearchHit[] hits = searchHits.getHits();
    for (SearchHit hit : hits) {
        // sourceを取得
        String json = hit.getSourceAsString();
        HotelDoc hotelDoc = JSON.parseObject(json, HotelDoc.class);
        // ハイライト結果を取得
        Map<String, HighlightField> highlightFields = hit.getHighlightFields();
        if (!CollectionUtils.isEmpty(highlightFields)) {
            HighlightField highlightField = highlightFields.get("name");
            if (highlightField != null) {
                String name = highlightField.getFragments()[0].string();
                hotelDoc.setName(name);
            }
        }
        System.out.println("hotelDoc = " + hotelDoc);
    }
}
```

# ブラックホース旅行ケース

以下では、ブラックホース旅行のケースを用いて、これまで学んだ知識を実戦的に練習します。

実現する4つの機能：

- ホテル検索とページネーション
- ホテル結果のフィルタリング
- 周辺のホテル検索
- ホテルの入札ランキング

## ホテル検索とページネーション

ケース要件：ブラックホース旅行のホテル検索機能を実装。キーワード検索とページネーションを実現。

### エンティティの定義

エンティティは2つ。フロントエンドのリクエストパラメータ用エンティティと、サービスが返却するレスポンス結果エンティティ。

```java
// リクエスト
package cn.itcast.hotel.pojo;
import lombok.Data;

@Data
public class RequestParams {
    private String key;
    private Integer page;
    private Integer size;
    private String sortBy;
}

// レスポンス
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

### コントローラの定義

HotelControllerを定義し、検索APIを宣言します。要件は以下のとおり：

- リクエスト方式：Post
- リクエストパス：/hotel/list
- リクエストパラメータ：RequestParams型のオブジェクト
- 戻り値：PageResult。2つのプロパティを含む
  - `Long total`：総件数
  - `List<HotelDoc> hotels`：ホテルデータ

```java
@RestController
@RequestMapping("/hotel")
public class HotelController {

    @Autowired
    private IHotelService hotelService;
	// ホテルデータを検索
    @PostMapping("/list")
    public PageResult search(@RequestBody RequestParams params){
        return hotelService.search(params);
    }
}
```

### 検索業務の実装

コントローラでIHotelServiceを呼び出していますが、まだ実装されていません。したがって、IHotelServiceにメソッドを定義し、ビジネスロジックを実装します。

検索業務の実装にはRestHighLevelClientの登録が不可欠です。SpringにBeanとして登録します。`cn.itcast.hotel`内の`HotelDemoApplication`に以下のBeanを宣言します：

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
        // 1.リクエスト準備
        SearchRequest request = new SearchRequest("hotel");
        // 2.DSL準備
        // 2.1.クエリ
        String key = params.getKey();
        if (key == null || "".equals(key)) {
            boolQuery.must(QueryBuilders.matchAllQuery());
        } else {
            boolQuery.must(QueryBuilders.matchQuery("all", key));
        }

        // 2.2.ページネーション
        int page = params.getPage();
        int size = params.getSize();
        request.source().from((page - 1) * size).size(size);

        // 3.リクエストを送信
        SearchResponse response = client.search(request, RequestOptions.DEFAULT);
        // 4.応答を解析
        return handleResponse(response);
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}

// 結果の解析
private PageResult handleResponse(SearchResponse response) {
    // 4.応答を解析
    SearchHits searchHits = response.getHits();
    // 4.1.総件数
    long total = searchHits.getTotalHits().value;
    // 4.2.文書配列
    SearchHit[] hits = searchHits.getHits();
    // 4.3.ループ
    List<HotelDoc> hotels = new ArrayList<>();
    for (SearchHit hit : hits) {
        // ドキュメントsourceを取得
        String json = hit.getSourceAsString();
        // 逆シリアライズ
        HotelDoc hotelDoc = JSON.parseObject(json, HotelDoc.class);
		// コレクションに追加
        hotels.add(hotelDoc);
    }
    // 4.4.返却を包む
    return new PageResult(total, hotels);
}
```

## ホテル結果のフィルタリング

要件：ブランド、都市、星級、価格などのフィルタを追加します。

HotelServiceのsearchメソッドには1箇所のみ変更が必要です：`requet.source().query(...)`の中の検索条件。

以前のビジネスでは、match検索のみで、キーワード検索を実施していました。今は次の条件を追加します。

- ブランドフィルタ：keyword型、termクエリを使用
- 星級フィルタ：keyword型、termクエリを使用
- 価格フィルタ：数値型、rangeクエリを使用
- 都市フィルタ：keyword型、termクエリを使用

複数の検索条件を組み合わせるには、必ずboolクエリで組み合わせます：

- キーワード検索をmustに入れて算分に参加させる
- その他のフィルタをfilterに入れて算分には参加させない

```java
private void buildBasicQuery(RequestParams params, SearchRequest request) {
    // 1. BooleanQueryを構築
    BoolQueryBuilder boolQuery = QueryBuilders.boolQuery();
    // 2. キーワード検索
    String key = params.getKey();
    if (key == null || "".equals(key)) {
        boolQuery.must(QueryBuilders.matchAllQuery());
    } else {
        boolQuery.must(QueryBuilders.matchQuery("all", key));
    }
    // 3. 都市条件
    if (params.getCity() != null && !params.getCity().equals("")) {
        boolQuery.filter(QueryBuilders.termQuery("city", params.getCity()));
    }
    // 4. ブランド条件
    if (params.getBrand() != null && !params.getBrand().equals("")) {
        boolQuery.filter(QueryBuilders.termQuery("brand", params.getBrand()));
    }
    // 5. 星級条件
    if (params.getStarName() != null && !params.getStarName().equals("")) {
        boolQuery.filter(QueryBuilders.termQuery("starName", params.getStarName()));
    }
	// 6. 価格
    if (params.getMinPrice() != null && params.getMaxPrice() != null) {
        boolQuery.filter(QueryBuilders
                         .rangeQuery("price")
                         .gte(params.getMinPrice())
                         .lte(params.getMaxPrice())
                        );
    }
	// 7. 反映 into source
    request.source().query(boolQuery);
}
```

## 我周边のホテル

location座標を用いて、周辺のホテルを距離順に並べます。実装の方針は以下のとおり：

- RequestParamsのパラメータをlocationフィールドを受け取るようにする
- searchメソッドのビジネスロジックを修正。locationが値を持つ場合、geo_distanceソートを追加する

```json
GET /indexName/_search
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "price": "asc"
    },
    {
      "_geo_distance" : {
          "FIELD" : "緯度，经度", // ドキュメントのgeo_point型フィールド名とターゲット座標
          "order" : "asc",
          "unit" : "km"
      }
    }
  ]
}
```

`search`メソッドにソート機能を追加します：

```java
// 2.3.ソート
String location = params.getLocation();
if (location != null && !location.equals("")) {
    request.source().sort(SortBuilders
                          .geoDistanceSort("location", new GeoPoint(location))
                          .order(SortOrder.ASC)
                          .unit(DistanceUnit.KILOMETERS)
                         );
}
```

## ホテルの広告順位付け

要件：特定のホテルを検索結果で上位に表示し、広告マークを付与します。

function_scoreクエリはスコア算出に影響を与え、スコアが高いほど上位に表示されます。function_scoreには3つの要素があります：

- 过滤条件：どの文書にスコアを付与するか
- 算分関数：function scoreをどう計算するか
- 加重モード：function scoreとquery scoreの演算方式

このケースでは、指定したホテルを上位に表示したいので、これらのホテルに対して「広告」マークを追加することで、フィルタ条件としてそのホテルを特定し、算分関数でスコアを高めるべくします。

以前に書いたブールクエリを「原始クエリ」として使用し、以下のように「フィルタ条件」「算分関数」「加重モード」を追加します。

```java
// 2.算分コントロール
FunctionScoreQueryBuilder functionScoreQuery =
    QueryBuilders.functionScoreQuery(
    // 原始クエリ、関連性算分の検索
    boolQuery,
    // function scoreの配列
    new FunctionScoreQueryBuilder.FilterFunctionBuilder[]{
        // 1つのfunction score要素
        new FunctionScoreQueryBuilder.FilterFunctionBuilder(
            // フィルタ条件
            QueryBuilders.termQuery("isAD", true),
            // 算分関数
            ScoreFunctionBuilders.weightFactorFunction(10)
        )
    });
request.source().query(functionScoreQuery);
```

# データ聚合

- [聚合（aggregations）](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html) はデータの集計・分析・計算を非常に簡単に実現できます。
- 例えば、どのブランドのスマートフォンが最も人気があるか、これらのスマホの平均価格・最高価格・最低価格、それぞれの月別の販売状況など

これらの集計機能は、SQLよりもはるかに容易で、ほぼリアルタイムの検索効果を実現できます。

## 聚合の種類

聚合には大きく3つのタイプがあります：

- **Bucket（桶）聚合**：文書をグループ化します
  - TermAggregation：フィールド値ごとにグルーピング。ブランドごと、国ごとなど
  - Date Histogram：日付で階段状にグルーピング。例：1週間ごと、1か月ごと
- **Metric（度量）聚合**：最大値、最小値、平均値などを計算
  - Avg：平均値
  - Max：最大値
  - Min：最小値
  - Stats：最大・最小・平均・合計などを同時計算
- **Pipeline（パイプライン）聚合**：他の聚合結果を基に新たな聚合を行う

> 注意：聚合に参加するフィールドは、keyword、日付、数値、布尔型である必要があります

## DSLでの聚合実装

今データ全体のホテルブランドがいくついくつあるかを統計する場合、ブランドでデータをグルーピングするBucket聚合を使います。

### Bucket聚合の文法

```json
GET /hotel/_search
{
  "size": 0,  // sizeを0に設定、結果にはドキュメントを含めず、聚合結果のみを返す
  "aggs": {    // 聚合を定義
    "brandAgg": { // 聚合名を付ける
      "terms": { // 聚合タイプ：ブランド値でグルーピング
        "field": "brand", // 集約対象フィールド
        "size": 20 // 取得する聚合結果数
      }
    }
  }
}
```

### 聚合結果のソート

デフォルトでは、Bucket聚合はBucket内のドキュメント数を_countとして集計し、降順にソートします。

`order` 属性を指定して聚合のソート方式をカスタマイズできます：

```json
GET /hotel/_search
{
  "size": 0,
  "aggs": {
    "brandAgg": {
      "terms": {
        "field": "brand",
        "order": {
          "_count": "asc" // _countで昇順に並べ替え
        },
        "size": 20
      }
    }
  }
}
```

### 聚合範囲の限定

デフォルトでは Bucket聚合はインデックスの全文書を対象にしますが、現実的にはユーザーが検索条件を入力するため、聚合は検索結果に対して行う必要があります。したがって、聚合には限定条件を追加します。

文書範囲を限定するには、クエリ条件を追加するだけです：

```json
GET /hotel/_search
{
  "query": {
    "range": {
      "price": {
        "lte": 200 // 200元以下の文書のみを聚合
      }
    }
  },
  "size": 0,
  "aggs": {
    "brandAgg": {
      "terms": {
        "field": "brand",
        "size": 20
      }
    }
  }
}
```

### Metric聚合の文法

桶内のホテルを集計します。各ブランドごとのユーザー評価のmin、max、avgなどを算出します。

これにはMetric聚合を使います。たとえばstat聚合なら、min、max、avgなどを取得できます。

文法：

```json
GET /hotel/_search
{
  "size": 0,
  "aggs": {
    "brandAgg": {
      "terms": {
        "field": "brand",
        "size": 20
      },
      "aggs": { // ブランド別のサブ聚合
        "score_stats": { // 聚合名
          "stats": { // 聚合タイプ。ここではmin、max、avg、sumなどを計算
            "field": "score" // 聚合フィールド。ここはscore
          }
        }
      }
    }
  }
}
```

このscore_stats聚合は、brandAggの各桶ごとに計算を行うサブ聚合です。

aggsは聚合で、queryと同列です。現在のqueryの役割は？

- 聚合の対象文書を限定する

聚合に必要な3要素：

- 聚合名
- 聚合タイプ
- 聚合字段

聚合の設定可能属性：

- size：聚合結果の数を指定
- order：聚合結果のソート順を指定
- field：聚合対象フィールド

## RestAPIでの聚合実装

聚合条件はクエリ条件と同格で、聚合条件を指定するにはrequest.source()を使用します。

聚合機能を使い、Bucket聚合を用いて検索結果の文書をブランド別、都市別にグルーピングすることで、含まれるブランドや都市を知ることができます。

聚合は検索結果に対して限定条件を設ける聚合なので、検索文書条件と一致します。

```java
@Override
public Map<String, List<String>> filters(RequestParams params) {
    try {
        // 1.リクエスト準備
        SearchRequest request = new SearchRequest("hotel");
        // 2.DSL準備
        // 2.1.クエリ
        buildBasicQuery(params, request);
        // 2.2. sizeの設定
        request.source().size(0);
        // 2.3.聚合設定
        buildAggregation(request);
        // 3.リクエスト送信
        SearchResponse response = client.search(request, RequestOptions.DEFAULT);
        // 4.結果の解析
        Map<String, List<String>> result = new HashMap<>();
        Aggregations aggregations = response.getAggregations();
        // 4.1.ブランド名に基づく聚合結果を取得
        List<String> brandList = getAggByName(aggregations, "brandAgg");
        result.put("ブランド", brandList);
        // 4.2.都市名に基づく聚合結果を取得
        List<String> cityList = getAggByName(aggregations, "cityAgg");
        result.put("都市", cityList);
        // 4.3.星級に基づく聚合結果を取得
        List<String> starList = getAggByName(aggregations, "starAgg");
        result.put("星級", starList);

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
    // 4.1.聚合名で聚合結果を取得
    Terms brandTerms = aggregations.get(aggName);
    // 4.2. bucketを取得
    List<? extends Terms.Bucket> buckets = brandTerms.getBuckets();
    // 4.3.遍歴
    List<String> brandList = new ArrayList<>();
    for (Terms.Bucket bucket : buckets) {
        // 4.4. keyを取得
        String key = bucket.getKeyAsString();
        brandList.add(key);
    }
    return brandList;
}
```

# 自動補完

検索ボックスに文字を入力すると、それに関連する検索項目を提案します。これは、入力文字に基づいて完全な語句を補完する機能です。

## ピンイン分詞器

文字列で補完するには、文書をピンイン分詞で処理する必要があります。GitHubにはelasticsearchのピンイン分詞プラグインがあります。

IK分詞器のインストールと同様です。

```bash
docker exec -it es bash

./bin/elasticsearch-plugin install <https://github.com/medcl/elasticsearch-analysis-pinyin/releases/download/v7.12.1/elasticsearch-analysis-pinyin-7.12.1.zip>

exit
# コンテナを再起動
docker restart elasticsearch
```

## 自作分詞器

デフォルトのピンイン分詞器は漢字を1文字ずつ分割しますが、語条を一組のピンインとして形成したい場合は、ピンイン分詞器をカスタマイズして自作分詞器を作る必要があります。

Elasticsearchの分詞器（analyzer）は3つの要素から構成されます：

- character filters：トークン化前にテキストを処理（文字の削除・置換など）
- tokenizer：テキストを一定のルールで語条（token）に分割。例：keywordは分割なし、ik_max_wordやik_smartなど
- tokenizer filter：tokenizerの出力をさらに処理（大文字小文字変換、同義語、ピンイン処理など）

文書の分詞はこの3つの要素で順次処理されます：

```json
PUT /test
{
  "settings": {
    "analysis": {
      "analyzer": { // 自作分詞器
        "my_analyzer": {  // 分詞器名
          "tokenizer": "ik_max_word",
          "filter": "py"
        }
      },
      "filter": { // 自作tokenizer filter
        "py": { // フィルター名
          "type": "pinyin", // フィルタータイプ
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

## 自動補全クエリ

Elasticsearchは[Completion Suggester](https://www.elastic.co/guide/en/elasticsearch/reference/7.6/search-suggesters.html)を用いて自動補完機能を実現します。このクエリは、ユーザーの入力で始まる語条をマッチさせて返します。高速化のため、文書中のフィールドにはいくつかの制約があります：

- 自動補完クエリに参加するフィールドはcompletionタイプである必要があります
- フィールドの内容は、補完の語条として形成された配列であることが多い

補完を実現：

```java
@Override
public List<String> getSuggestions(String prefix) {
    try {
        // 1.準備Request
        SearchRequest request = new SearchRequest("hotel");
        // 2.準備DSL
        request.source().suggest(new SuggestBuilder().addSuggestion(
            "suggestions",
            SuggestBuilders.completionSuggestion("suggestion")
            .prefix(prefix)
            .skipDuplicates(true)
            .size(10)
        ));
        // 3.送信
        SearchResponse response = client.search(request, RequestOptions.DEFAULT);
        // 4.解析
        Suggest suggest = response.getSuggest();
        // 4.1.補完クエリの結果を取得
        CompletionSuggestion suggestions = suggest.getSuggestion("suggestions");
        // 4.2. optionsを取得
        List<CompletionSuggestion.Entry.Option> options = suggestions.getOptions();
        // 4.3.走査
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

Elasticsearch内のホテルデータはMySQLデータベースから取得します。したがって、MySQLデータが変更されると、Elasticsearchのデータも同様に更新する必要があります。これが、ElasticsearchとMySQL間のデータ同期です。

一般的なデータ同期の3つの方法：

- 同期呼び出し
  - hotel-demoが外部APIを提供しており、Elasticsearchデータを変更する
  - ホテル管理サービスがデータベース操作を完了した後、hotel-demoが提供するAPIを直接呼び出す
- 非同期通知
  - hotel-adminがMySQLデータの增・删・改を完了した後、MQメッセージを送る
  - hotel-demoがMQを監視し、メッセージを受信したらElasticsearchのデータを更新
- Binlogの監視
  - MySQLでBinlogを有効化
  - MySQLの增・删・改の操作は全てBinlogに記録
  - hotel-demoがCanalを用いてBinlogの変化をリアルタイムで監視し、Elasticsearchの内容を更新

方式1：同期呼び出し

- 長所：実装が簡単、素早い
- 短所：業務結合度が高い

方式2：非同期通知

- 長所：結合度が低く、実装難易度は中程度
- 短所：MQの信頼性に依存

方式3：Binlog監視

- 長所：サービス間の結合を完全に解放
- 短所：Binlogを有効化するとデータベースに負荷が増え、実装が高度

## データ同期の実現

事前資料のhotel-adminプロジェクトをホテル管理のマイクロサービスとして使用します。ホテルデータが増、削除、変更されるたび、Elasticsearchのデータも同様に更新します。

- ホテルデータのCRUDを起動してテスト
- Exchange、Queue、RoutingKeyを宣言
- hotel-adminの増・削除・変更業務でMQメッセージを送信
- hotel-demoでメッセージを受信し、Elasticsearchのデータを更新
- 動作を起動してデータ同期機能をテスト

## 交換機、キューの宣言

MQ構成は以下の図のとおり：

![image-20230813192805650.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813192805650.png)

依存関係の追加

```xml
<!--amqp-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

設定クラスを定義して宣言します：

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

hotel-adminの増・削・変更ビジネスで、それぞれMQメッセージを送信します。

## MQ情報の送信

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

## MQ情報の受信

リスナーを実装します

hotel-demoの`cn.itcast.hotel.mq`パッケージに新しいクラスを追加します：

```java
@Component
public class HotelListener {

    @Autowired
    private IHotelService hotelService;

    /**
     * ホテルの新規追加または更新をリッスン
     * @param id ホテルID
     */
    @RabbitListener(queues = MqConstants.HOTEL_INSERT_QUEUE)
    public void listenHotelInsertOrUpdate(Long id){
        hotelService.insertById(id);
    }

    /**
     * ホテルの削除をリッスン
     * @param id ホテルID
     */
    @RabbitListener(queues = MqConstants.HOTEL_DELETE_QUEUE)
    public void listenHotelDelete(Long id){
        hotelService.deleteById(id);
    }
}
```

実装：

```java
@Override
public void deleteById(Long id) {
    try {
        // 1.リクエスト準備
        DeleteRequest request = new DeleteRequest("hotel", id.toString());
        // 2.送信
        client.delete(request, RequestOptions.DEFAULT);
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}

@Override
public void insertById(Long id) {
    try {
        // 0. idからホテルを取得
        Hotel hotel = getById(id);
        // ドキュメント型へ変換
        HotelDoc hotelDoc = new HotelDoc(hotel);

        // 1.リクエストオブジェクトの準備
        IndexRequest request = new IndexRequest("hotel").id(hotel.getId().toString());
        // 2.JSON文書を準備
        request.source(JSON.toJSONString(hotelDoc), XContentType.JSON);
        // 3.送信
        client.index(request, RequestOptions.DEFAULT);
    } catch (IOException e) {
        throw new RuntimeException(e);
    }
}
```

# クラスター

単一ノードのElasticsearchは、データ量の増大と単一障害点の問題を引き起こします。

- 大量データの保存：インデックスをシャード（shard）に分割して複数ノードへ格納
- 単一障害点の解消：シャードを複製（replica）で別ノードへバックアップ

**ESクラスター関連の概念**:

- クラスター（cluster）：共通のクラスター名を持つノードの集合
- ノード（node）：クラスターの1つのElasticsearchインスタンス
- シャード（shard）：インデックスを複数の部分に分割したもの。クラスター内では、異なるノードにシャードを格納できる
- 主シャード（Primary shard）：副本シャード（Replica shard）に対する定義
- 副本シャード（Replica shard） 各主シャードには1つ以上の副本が存在する。データは主シャードと同じ

データのバックアップは高可用性を確保しますが、各シャードのバックアップが必要となるため、ノード数が膨らみコストが高くなります。

高可用性とコストのバランスを取るためには、以下のようにします：

- まずデータをシャードで分割し、異なるノードに格納
- 各シャードのバックアップを他のノードへ配置し、相互バックアップを完了

これにより、必要なサービスノード数を大幅に削減できます。

## ESクラスターの作成

docker-composeを用いて作成します：

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

WSLでのメモリ不足対策として：

```bash
wsl -d docker-desktop
echo 262144 >> /proc/sys/vm/max_map_count
```

CerebroでESクラスターを監視します。

![image-20230813204137138.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813204137138.png)

## クラスターのブレーク問題

### クラスターの責務分担

クラスター内のノードには役割分担があります：

![image-20230813204627948.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813204627948.png)

デフォルトでは、クラスター内の任意のノードがこれら4つの役割を同時に持つことができます。

ただし、実際のクラスターでは、責務を分離するのが望ましいです。

- マスター・ノード：CPU負荷が高いものの、メモリ要件は低い（説明が抜けていますが、実運用ではデザインが異なります）
- データ・ノード：CPUとメモリ双方の要件が高い
- コーディネーティング・ノード：ネットワーク帯域、CPUが要求される

責務を分離することで、異なるノードの要件に合わせて適切なハードウェアを割り当て、他の業務への影響を避けることができます。

### ブレーク（脑裂）問題

脑裂は、クラスターのノードが連絡不能となって発生します。

ネットワークが回復すると、クラスターには2つのマスターノードが存在する可能性があり、クラスター状態が不一致となって脑裂が生じます。

脑裂の解決策はスコア票（投票）を過半数以上にすることです（eligibleノードの数 + 1）/ 2 を超える必要があります。したがって、eligibleノード数は奇数であることが望ましいです。設定項目はdiscovery.zen.minimum_master_nodesです。7.0以降はデフォルト設定となっており、通常は脑裂は発生しません。

master eligibleノードの役割は？

- クラスターの選出に参加
- マスターはクラスターの状態、シャード情報、インデックスの作成・削除などの管理を行う

dataノードの役割は？

- データのCRUD

coordinatorノードの役割は？

- 他ノードへリクエストをルーティング
- 他ノードから集約した結果を統合してユーザーへ返す

## クラスターの分散ストレージ

新規文書を追加する際、異なるシャードに保存してデータを均等化します。では、coordinating nodeはどうやってどのシャードへデータを格納するかを決定するのでしょうか？

**シャード格納の原理**

Elasticsearchはハッシュアルゴリズムで、文書がどのシャードに格納されるべきかを決定します：

```
shard = hash(_routing) % number_of_shards
```

補足：

- _routingはデフォルトで文書のID
- アルゴリズムとシャード数に依存するため、インデックスを作成した後はシャード数を変更できません

![image-20230813205142296.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/image-20230813205142296.png)

## クラスターの分布型検索

Elasticsearchの検索は2段階で行われます：

- scatter phase（分散段階）：coordinating nodeがリクエストを各シャードへ分散
- gather phase（収集段階）：coordinating nodeがデータノードの検索結果を統合し、最終的な結果セットを返す

## クラスターのフェイルオーバー

クラスターのマスターは、ノードの状態を監視します。ノードがダウンした場合、ダウンしたノードのシャードデータを他のノードへ移動してデータを保護します。これをフェイルオーバーと呼びます。

1. node1がマスター、他はセカンダリノード
2. node1が故障した場合、別のノードを新しいマスターとして選出
3. node2がクラスター監視状態を検知し、shard-1、shard-0に副本ノードがないことを確認
4. node1上のデータをnode2、node3へ移行

このように、可用性を保つためには、適切にノードを配置し、データを分散させて冗長性を確保します。
