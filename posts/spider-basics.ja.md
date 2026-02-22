---
title: 'spider基础库学习'
published: 2024-01-18
updated: 2024-01-19
description: '学习爬虫基础库，包括Python的urllib和requests库的使用。介绍了HTTP请求的构造、异常处理、URL解析、正则表达式的应用，以及如何提取猫眼电影排行榜的信息。强调了请求头、Cookies、代理设置和会话维持等高级用法。'
permalink: 'spider-basics.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/b672eece915b4f3cb2fef5ac4001a49b/20240116_182154923_iOS.png'
tags: ['spider', 'python', 'regex', 'inHand']
category: 'spider'
draft: false
lang: 'ja'
---

# スパイダー基本ライブラリ


クローリングを学ぶ際の最初の操作は、ブラウザを模倣してサーバへリクエストを送ることです。では、どこから始めればよいのでしょうか？リクエストは自分で構築する必要がありますか？このデータ構造の実装を気にする必要がありますか？HTTP、TCP、IP 層のネットワーク伝送通信について知っておくべきですか？サーバの応答・応答原理を知る必要がありますか？


もしかしたら手がかりがなく手をつけられないかもしれませんが、心配はいりません。Python の強みは、これらのリクエストを支援する機能豊富なライブラリを提供している点です。最も基本的な HTTP ライブラリには urllib、httplib2、requests、treq などがあります。


# urllib


Python2 では urllib と urllib2 の 2 つのライブラリでリクエストの送信を実現していましたが、Python3 では urllib2 は廃止され、統一して urllib が用いられます。公式ドキュメントのリンクは:[https://docs.python.org/3/library/urllib.html](https://docs.python.org/3/library/urllib.html)


urllib ライブラリは Python に組み込まれている HTTP リクエストライブラリで、追加のインストールは不要です。次の4つのモジュールを含みます。

- request
最も基本的な HTTP リクエストモジュールで、リクエストを模擬送信するのに用います。ブラウザでURLを入力して Enter を押すのと同じように、ライブラリのメソッドに URL と追加パラメータを渡すだけでこの過程を模倣できます。
- error
例外処理モジュール。リクエストエラーが発生した場合、これらの例外を捕捉してリトライやその他の処理を行い、プログラムが予期せず終了しないようにします。
- parse
ツールモジュール。URL の処理に関する多くのメソッドを提供します。例えば分割、解析、結合など。
- robot parser
主に robots.txt ファイルを識別し、どのサイトをクローリングしてよく、どのサイトをクローリングしてはいけないかを判断します。実際にはあまり使われません。

本節のコードはこの[ライブラリ](https://github.com/Python3WebSpider/UrllibTest) を参照してください。


## 送信リクエスト


urllib の request モジュールを使うと、リクエストの送信を簡単に実現し、応答を得ることができます。


### urlopen


urllib.request モジュールは、最も基本的な HTTP リクエストの構築方法を提供します。これを利用して、ブラウザのリクエスト発行プロセスを模倣できます。さらに、認証認可(authentication)、リダイレクション(redirection)、ブラウザ Cookies などの処理も備えています。


例として Python の公式サイトを取得してみましょう：


```python
import urllib.request

response = urllib.request.urlopen('<https://www.python.org>')
print(response.read().decode('utf-8'))

print(type(response))
```


HTTPResposne 型のオブジェクトは、主に read、readinto、getheader、getheaders、fileno などのメソッド、および msg、version、status、reason、debuglevel、closed などの属性を含みます。


このオブジェクトを取得したら、response 変数に代入して、これらのメソッドと属性を呼び出し、返される結果の一連の情報を取得できます。


```python
import urllib.request

response = urllib.request.urlopen('<https://www.python.org>')
print(response.status)
print(response.getheaders())
print(response.getheader('Server'))

print(type(response))
# <class 'http.client.HTTPResponse'>
```


戻り値は HTTPResposne 型のオブジェクトで、主に read、readinto、getheader、getheaders、fileno などのメソッド、および msg、version、status、reason、debuglevel、closed などの属性を含みます。


このオブジェクトを response 変数に代入して、これらのメソッドと属性を呼び出し、返される結果の一連の情報を取得します。


例えば、read メソッドを呼び出すと返されるウェブページの内容を得られ、status 属性を呼び出すと返される結果のステータスコードを取得できます。200 はリクエスト成功、404 はページが見つからない、などを意味します。


最も基本的な urlopen メソッドを利用すれば、最も基本的でシンプルなウェブページの GET リクエストの取得を完了できます。


リンクにパラメータを渡したい場合は、まず urlopen メソッドの API を見てみましょう：


`urllib.request.urlopen(url, data=None, [timeout,]*, cafile=None, capath=None, cadefault=False, context=None)`


第1引数が URL のみ渡せる点に加え、data（追加データ）、timeout（タイムアウト時間）など、他の内容を渡すこともできます。

- data パラメータ
data パラメータは任意です。追加する場合には bytes 型のデータを渡します。したがって、dict の場合は urllib.parse モジュールの urlencode() を使って文字列に変換した後、bytes() でバイト列にします。さらにこのパラメータを渡すと GET ではなく POST で送信されます。

    ```python
    import urllib.parse
    import urllib.request
    
    data = bytes(urllib.parse.urlencode({'word': 'hello'}), encoding='utf8')
    response = urllib.request.urlopen('<http://httpbin.org/post>', data=data)
    print(response.read())
    ```


    ここでは word=hello を渡しています。これは bytes（バイト列）にエンコードする必要があります。bytes() の第一引数は str でなければならず、第二引数には utf8 を指定します。url のエンコードには urllib.parse モジュールの urlencode() を使います。

    送信先は [httpbin.org](http://httpbin.org/) です。ここは HTTP リクエストのテストを提供します。今回の URL は：[http://httpbin.org/post](http://httpbin.org/post) です。このリンクは POST リクエストのテストに使え、Request のいくつかの情報を出力します。この中には私たちが渡した data パラメータも含まれます。


    実行結果の例は以下のとおりです：


    ```json
    {
        "args": {},
        "data": "",
        "files": {},
        "form": {
            "word": "hello"
        },
        "headers": {
            "Accept-Encoding": "identity",
            "Content-Length": "10",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "httpbin.org",
            "User-Agent": "Python-urllib/3.5"
        },
        "json": null,
        "origin": "123.124.23.253",
        "url":"<http://httpbin.org/post>"
    }
    ```


    渡したパラメータは form フィールドに現れており、これは POST によるフォーム送信を模倣してデータを伝送していることを意味します。

- timeout パラメータ

    timeout パラメータはタイムアウト時間を設定します。単位は秒で、設定した時間を超えても応答が無い場合は例外が発生します。指定しなければグローバルのデフォルト時間が使われます。HTTP、HTTPS、FTP リクエストすべてに対応しています。


    ```python
    import urllib.request
    
    response = urllib.request.urlopen('<http://httpbin.org/get>', timeout=1)
    print(response.read())
    ```


    ここではタイムアウトを 1 秒に設定しています。1 秒経ってもサーバーが応答しない場合、URLError 例外が発生します。この例外は urllib.error モジュールに属し、原因はタイムアウトです。


    このように timeout を設定して、長時間応答がない場合には取得をスキップするタイムアウト処理を実装できます。これには try except 文を用います。関連コードは次のとおりです：


    ```python
    import socket
    import urllib.request
    import urllib.error
    
    try:
        response = urllib.request.urlopen('<http://httpbin.org/get>', timeout=0.1)
    except urllib.error.URLError as e:
        if isinstance(e.reason, socket.timeout):
            print('TIME OUT')
    ```


    ここでは [http://httpbin.org/get](http://httpbin.org/get) のテストリンクをリクエストし、タイムアウト時間を 0.1 秒に設定しています。URLError 例外を捕捉し、原因が socket.timeout 型かを判定して、タイムアウトでエラーになったことを示す TIME OUT を出力します。

    timeout パラメータを使ってタイムアウト処理を実現するのは有用なこともあります。

- その他のパラメータ

    data パラメータと timeout パラメータ以外にも、context パラメータがあります。これは ssl.SSLContext の型で、SSL 設定を指定します。cafile と capath はそれぞれ CA 証明書とそのパスを指定します。HTTPS のリンクをリクエストする際に役立ちます。cadefault パラメータは現在は廃止され、デフォルトは False です。


    urlopen メソッドの使い方は前述のとおりで、この最も基本的な方法を用いれば、単純なリクエストとウェブページの取得を実現できます。より詳しい情報は公式ドキュメントを参照してください：[https://docs.python.org/3/library/urllib.request.html](https://docs.python.org/3/library/urllib.request.html)。


### Request


urlopen メソッドを用いて最も基本的なリクエスト発行は実現できますが、これらの単純なパラメータだけでは完全なリクエストを構築するには不十分です。リクエストに Headers などの情報を加える必要がある場合には、より強力な Request クラスを用いて構築します。


まず、実例を使って Request の使い方を体感してみましょう：


```python
import urllib.request

request = urllib.request.Request('<https://python.org>')
response = urllib.request.urlopen(request)
print(response.read().decode('utf-8'))
```


分かるように、urlopen メソッドを使ってこのリクエストを送信していますが、今回はこのメソッドの引数が URL ではなく、Request 型のオブジェクトになっています。このデータ構造を構築することで、リクエストを独立したオブジェクトとして扱えるだけでなく、パラメータをより豊富で柔軟に設定できます。


その構築方法は次のとおりです：

> class urllib.request.Request(url, data=None, headers={}, origin_req_host=None, unverifiable=False, method=None)
> 1. 第1引数の url はリクエスト URL で、必須です。その他は任意のパラメータです。
> 2. 第2引数の data は渡す場合、bytes（バイト列）型で渡します。辞書の場合は urllib.parse モジュールの urlencode() を使ってエンコードします。
> 3. 第3引数の headers は辞書で、これはリクエストヘッダです。headers パラメータを使って直接構築することも、リクエスト实例の add_header() メソッドを用いて追加することもできます。
> リクエストヘッダを最もよく使う用途は User-Agent を変更してブラウザを偽装することです。デフォルトの User-Agent は Python-urllib です。例えば Firefox を偽装したい場合は次のように設定します：「`Mozilla/5.0 (X11; U; Linux i686) Gecko/20071127 Firefox/`」
> 4. 第4引数の origin_req_host はリクエスト元のホスト名または IP アドレスを指します。
> 5. 第5引数の unverifiable はこのリクエストが検証不可能かどうかを表します。デフォルトは False で、つまりユーザがこのリクエストの結果を受信する十分な権限を持っていないことを意味します。例として HTML ドキュメント内の画像をリクエストしますが、画像を自動取得する権限がない場合、unverifiable の値は TRUE になります。
> 6. 第6引数の method は、GET、POST、PUT など、リクエストで使用するメソッドを示す文字列です。

```python
from urllib import request, parse

url = '<http://httpbin.org/post>'
headers = {'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)',
    'Host': 'httpbin.org'
}
dict = {'name': 'Germey'}
data = bytes(parse.urlencode(dict), encoding='utf8')
req = request.Request(url=url, data=data, headers=headers, method='POST')
response = request.urlopen(req)
print(response.read().decode('utf-8'))
```


ここでは 4 つの引数でリクエストを構築しています。url はリクエスト URL、headers には User-Agent と Host を指定、data には urlencode と bytes の方法でバイト列に変換したデータを使用しています。加えてリクエスト方法として POST を指定しています。


実行結果は以下のとおりです：


```json
{
    "args": {},
    "data": "",
    "files": {},
    "form": {
        "name": "Germey"
    },
    "headers": {
        "Accept-Encoding": "identity",
        "Content-Length": "11",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "httpbin.org",
        "User-Agent": "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)"
    },
    "json": null,
    "origin": "219.224.169.11",
    "url":"<http://httpbin.org/post>"
}
```


観察すると、私たちが渡した data、headers、method が設定されていることが分かります。


さらに headers は add_header メソッドを使って追加することも可能です：


```python
req = request.Request(url=url, data=data, method='POST')
req.add_header('User-Agent', 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)')
```


このように、リクエストをより便利に構築し、リクエストの送信を実現できます。


### 高度な使い方


上記の過程ではリクエストを構築することはできますが、Cookies の処理、プロキシ設定など、より高度な操作にはどう対応すればよいのでしょうか？


そのためには Handler というより強力なツールが登場します。簡単に言えば、各種処理を担当する「ハンドラ」として理解できます。認証処理、Cookies の処理、代理設定の処理など、HTTP リクエストのあらゆることをほぼ実現できます。


まず、urllib.request モジュールの BaseHandler クラスを紹介します。これは他のハンドラの親クラスで、default_open、protocol_request などの基本的なメソッドを提供します。


次に、BaseHandler を継承したさまざまな Handler クラスが現れます。例として以下のものがあります。

- HTTPDefaultErrorHandler：HTTP 応答エラーを処理します。エラーはすべて HTTPError 型の例外としてスローされます。
- HTTPRedirectHandler：リダイレクションを処理します。
- HTTPCookieProcessor：Cookies を処理します。
- ProxyHandler：プロキシを設定します。デフォルトのプロキシは空です。
- HTTPPasswordMgr：パスワードを管理します。ユーザー名とパスワードの表を保持します。
- HTTPBasicAuthHandler：認証を管理します。リンクを開く際に認証が必要な場合にこれを使って認証問題を解決できます。

他にもさまざまな Handler があり、詳細は公式ドキュメントを参照してください：[https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler](https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler)


もう一つ重要なクラスは OpenerDirector、別名 Opener です。これまで urlopen というメソッドを使ってきましたが、実際には urllib が提供してくれる Opener に相当します。


では、なぜ Opener を導入するのでしょうか。より高度な機能を実現するためです。


Opener は open メソッドを使用でき、返される型は urlopen と同じで、また Handler を使って Opener を構築することができます。

- 検証

    一部のサイトでは開くときにダイアログが表示され、ユーザー名とパスワードの入力を求められ、認証に成功して初めてページが閲覧できることがあります。


    このようなページをリクエストするには HTTPBasicAuthHandler を用います。関連コードは以下のとおりです：


```python
from urllib.request import HTTPPasswordMgrWithDefaultRealm, HTTPBasicAuthHandler, build_opener
from urllib.error import URLError
    
username = 'username'
password = 'password'
url = '<http://localhost:5000/>'
    
p = HTTPPasswordMgrWithDefaultRealm()
p.add_password(None, url, username, password)
auth_handler = HTTPBasicAuthHandler(p)
opener = build_opener(auth_handler)
    
try:
    result = opener.open(url)
    html = result.read().decode('utf-8')
    print(html)
except URLError as e:
    print(e.reason)
```


ここではまず HTTPBasicAuthHandler オブジェクトを作成します。引数は HTTPPasswordMgrWithDefaultRealm オブジェクトで、add_password メソッドを使ってユーザー名とパスワードを追加します。これで認証処理用の Handler が作成されました。

次に、この Handler を使い build_opener で Opener を構築します。これによりリクエストを送信するときにはすでに認証が完了している状態になります。Open の結果として得られるのは認証後のページのソースコードです。

- プロキシ

    一部のサイトは一定期間にある IP のアクセス回数を検出します。アクセス回数が多すぎるとアクセスを禁止する場合があります。その場合、プロキシサーバを設定して一定期間ごとに別のプロキシを使用することで、IP が禁止されても別の IP に切り替えてクロールを続行できます。


    プロキシの設定も Handler を使って実現します。以下に ProxyHandler の使い方を示します：


```python
from urllib.error import URLError
from urllib.request import ProxyHandler, build_opener
    
proxy_handler = ProxyHandler({
    'http': '<http://127.0.0.1>：9743',
    'https': '<https://127.0.0.1:9743>'
})
opener = build_opener(proxy_handler)
try:
    response = opener.open('<https://www.baidu.com>')
    print(response.read().decode('utf-8'))
except URLError as e:
    print(e.reason)
```


ここではローカルにプロキシを構築し、ポート 9743 で動作しているとします。ProxyHandler の引数はディクショナリで、キーはプロトコルの種類（HTTP、HTTPS など）、値はプロキシのリンクです。複数のプロキシを追加することもできます。


その後、この Handler を用いて build_opener で Opener を構築し、リクエストを送信します。

- Cookies

    Cookies の処理には対応する Handler が必要です。


```python
import http.cookiejar, urllib.request
    
cookie = http.cookiejar.CookieJar()
handler = urllib.request.HTTPCookieProcessor(cookie)
opener = urllib.request.build_opener(handler)
response = opener.open('<http://www.baidu.com>')
for item in cookie:
    print(item.name+"="+item.value)
```


まず CookieJar オブジェクトを宣言します。次に HTTPCookieProcessor を用いて Handler を構築し、build_opener で Opener を作成します。open 関数を実行します。


このように、ここでは各クローラ出力として Cookie の名前と値が表示されます。


また、ファイル形式へ出力することもできます。Cookies は実際にはテキスト形式で保存されるためです。


```python
filename = 'cookies.txt'
cookie = http.cookiejar.MozillaCookieJar(filename)
handler = urllib.request.HTTPCookieProcessor(cookie)
opener = urllib.request.build_opener(handler)
response = opener.open('<http://www.baidu.com>')
cookie.save(ignore_discard=True, ignore_expires=True)
```


この場合 CookieJar は MozillaCookieJar に変更します。ファイル作成時には Mozilla 形式の Cookies ファイルが使用され、Cookies としての操作や、読み込み・保存などのイベントを処理できます。


さらに LWPCookieJar も Cookies を読み書きできますが、保存形式は MozillaCookieJar とは異なり、libwww-perl（LWP）形式の Cookies ファイルとして保存されます。


LWP 形式の Cookies ファイルとして保存するには、宣言時に次のようにします： `cookie = http.cookiejar.LWPCookieJar(filename)`


Cookies ファイルを生成した後、ファイルから読み込み、それを使って処理するには次のようにします：


```python
cookie = http.cookiejar.LWPCookieJar()
cookie.load('cookies.txt', ignore_discard=True, ignore_expires=True)
handler = urllib.request.HTTPCookieProcessor(cookie)
opener = urllib.request.build_opener(handler)
response = opener.open('<http://www.baidu.com>')
print(response.read().decode('utf-8'))
```


ここでは load メソッドを呼び出してローカルの Cookies ファイルを読み取り、Cookies の内容を取得します。しかし前提として LWPCookieJar 形式の Cookies を生成してファイルとして保存してから読み込み、同じ方法で Handler と Opener を構築して操作を完了します。


実行結果が正常であれば、百度のページのソースコードが出力されます。


上記の方法を使えば、ほとんどのリクエスト機能を設定できます。


これが urllib ライブラリの request モジュールの基本的な使い方です。より多くの機能を実現したい場合は、公式ドキュメントの説明を参照してください：[https://docs.python.org/3/library/urllib.request.html#basehandler-objects](https://docs.python.org/3/library/urllib.request.html#basehandler-objects)


## 处理异常


前節ではリクエストの送信プロセスを理解しましたが、ネットワークが悪い場合には例外が発生します。これを処理せずに放置すると、プログラムがエラーで終了してしまう可能性があるため、例外処理は非常に重要です。urllib の error モジュールは request モジュールが発生させる例外を定義します。問題が発生した場合、request モジュールは error モジュールで定義された例外を投げます。


### URLError


URLError クラスは urllib ライブラリの error モジュールに属し、OSError の派生クラスです。request モジュールが発生させる例外の基底クラスになります。reason という属性を持ち、エラーの原因を返します。


```python
from urllib import request, error
try:
    response = request.urlopen('<https://cuiqingcai.com/index.htm>')
except error.URLError as e:
    print(e.reason)
```


存在しないページを開こうとすると当然エラーになりますが、この例では URLError を捕捉して、実行結果として Not Found が表示されます。プログラムは例外を直接報告せず、適切に処理されます。


### HTTPError


HTTPError は URLError のサブクラスで、HTTP リクエストのエラー（認証に失敗した等）を処理するためのものです。以下の3つの属性を持ちます。

- code：HTTP ステータスコードを返します。例えば 404 はページが存在しない、500 はサーバ内部エラーなど。
- reason：親クラスと同様、エラーの原因を返します。
- headers：リクエストヘッダを返します。

```python
from urllib import request,error
try:
    response = request.urlopen('<https://cuiqingcai.com/index.htm>')
except error.HTTPError as e:
    print(e.reason, e.code, e.headers, sep='\\n')
```


実行結果は以下のとおりです：


```plain text
Not Found
404
Server: nginx/1.4.6 (Ubuntu)
Date: Wed, 03 Aug 2016 08:54:22 GMT
Content-Type: text/html; charset=UTF-8
Transfer-Encoding: chunked
Connection: close
X-Powered-By: PHP/5.5.9-1ubuntu4.14
Vary: Cookie
Expires: Wed, 11 Jan 1984 05:00:00 GMT
Cache-Control: no-cache, must-revalidate, max-age=0
Pragma: no-cache
Link: <https://cuiqingcai.com/wp-json/>; rel="<https://api.w.org/>"
```


同じ URL に対しても、HTTPError 例外を捕捉して reason、code、headers の情報を取得できます。URLError は HTTPError の父クラスなので、まず子クラスのエラーを捕捉し、次に父クラスのエラーを捕捉するという書き方がよい場合があります。上述のコードのより良い書き方は次のとおりです：


```python
from urllib import request, error

try:
    response = request.urlopen('<https://cuiqingcai.com/index.htm>')
except error.HTTPError as e:
    print(e.reason, e.code, e.headers, sep='\\n')
except error.URLError as e:
    print(e.reason)
else:
    print('Request Successfully')
```


このようにして、まず HTTPError を捕捉してエラー状態コード、原因、headers などの情報を取得します。HTTPError でなければ URLError が捕捉され、エラーの原因が出力されます。最後に else で正常時の処理を行います。これは比較的良い例外処理の書き方です。
時には reason 属性が文字列でないこともあり得ます。


```python
import socket
import urllib.request
import urllib.error

try:
    response = urllib.request.urlopen('<https://www.baidu.com>', timeout=0.01)
except urllib.error.URLError as e:
    print(type(e.reason))
    if isinstance(e.reason, socket.timeout):
        print('TIME OUT')
```


ここではタイムアウトを強制的に発生させることで timeout 例外を確認しています。
実行結果は次のとおりです：
`<class'socket.timeout'> TIME OUT`
reason 属性の結果が socket.timeout クラスであることが分かります。したがって isinstance メソッドを用いて型を判定し、より詳しい例外判断を行うことができます。


## リンクの解析


前述のとおり、urllib ライブラリには parse モジュールも用意されており、URL の分解・結合・変換などの標準インタフェースを提供します。ファイル、ftp、gopher、hdl、http、https、imap、mailto などの URL 処理をサポートします。本節では、このモジュールでよく使われるメソッドを見て、その利便性を確認します。


### urlparse


このメソッドは URL の識別と分割を実現します


```python
from urllib.parse import urlparse

result = urlparse('<http://www.baidu.com/index.html;user?id=5#comment>')
print(type(result), result)
```


`<class 'urllib.parse.ParseResult'> ParseResult(scheme='http', netloc='www.baidu.com', path='/index.html', params='user', query='id=5', fragment='comment')`


戻り値は ParseResult 型のオブジェクトで、6つの部分（scheme、netloc、path、params、query、fragment）を含みます。


urlparse はそれを6つの部分に分割します。大まかな規則として、特定の区切り文字で分けられます。たとえば、:// の前が scheme（プロトコルを表す）、最初の / の前が netloc（ドメイン名）、後ろが path、セミコロン ; の後が params、クエリ条件 ? の後が query、シャープ # の後がアンカー（ページ内の位置）です。


従って、標準的なリンクの形式は次の通りです：


scheme://netloc/path;params?query#fragment


標準の URL はこの規則に従います。urlparse メソッドを使って分割できます。


```python
# API設定
urllib.parse.urlparse(urlstring, scheme='', allow_fragments=True)
```


3つの引数があることが分かります。

- urlstring：必須。解析対象の URL。
- scheme：デフォルトのプロトコル（http や https など）。URL に scheme 情報が含まれていない場合にのみ有効です。URL に scheme 情報が含まれていれば、解析された scheme が返されます。
- allow_fragments：fragment を無視するかどうか。False に設定すると、fragment 部分は無視され、path、parameters、query の一部として解析され、fragment は空になります。


### urlunparse


urlparse に対する対になる関数で、urlunparse は引数として反復可能なオブジェクトを受け取りますが、長さは 6 でなければなりません。そうでないと、引数の数が不足または多すぎるというエラーになります。


```python
from urllib.parse import urlunparse

data = ['http', 'www.baidu.com', 'index.html', 'user', 'a=6', 'comment']
print(urlunparse(data))
```


ここで data はリスト型を使用しています。もちろん他の型、例えばタプルや特定のデータ構造を使うことも可能です。


`http://www.baidu.com/index.html;user?a=6#comment`


### urlsplit


このメソッドは urlparse と非常に似ていますが、params 部分を個別には解析せず、5 つの結果だけを返します。上の例の params は path に結合されます。


```python
from urllib.parse import urlsplit

result = urlsplit('<http://www.baidu.com/index.html;user?id=5#comment>')
print(result)
```


結果は SplitResult で、これは実質的にタプル型で、属性取得もインデックス取得も可能です。


### urlunsplit


urlunparse と似ており、リンクの各部を結合して完全なリンクを作成する方法です。引数は反復可能なオブジェクト（リスト、タプルなど）で、唯一の違いは長さが 5 でなければならない点です。


```python
from urllib.parse import urlunsplit

data = ['http', 'www.baidu.com', 'index.html', 'a=6', 'comment']
print(urlunsplit(data))
```


`http://www.baidu.com/index.html?a=6#comment`


### urljoin


urlunparse や urlunsplit でリンクを結合することは可能ですが、前提として長さが特定のサイズである必要があります。リンクの各部を明確に分けて生成するもう一つの方法として urljoin があります。base_url（基礎リンク）を第一引数として与え、新しいリンクを第二引数として渡します。この方法は base_url の scheme、netloc、path を解析して、新しいリンクに欠落している部分を補完し、最終的な結果を返します。


```python
from urllib.parse import urljoin

print(urljoin('<http://www.baidu.com>', 'FAQ.html'))
print(urljoin('<http://www.baidu.com>', '<https://cuiqingcai.com/FAQ.html>'))
print(urljoin('<http://www.baidu.com/about.html>', '<https://cuiqingcai.com/FAQ.html>'))
print(urljoin('<http://www.baidu.com/about.html>', '<https://cuiqingcai.com/FAQ.html?question=2>'))
print(urljoin('<http://www.baidu.com?wd=abc>', '<https://cuiqingcai.com/index.php>'))
print(urljoin('<http://www.baidu.com>', '?category=2#comment'))
print(urljoin('www.baidu.com', '?category=2#comment'))
print(urljoin('www.baidu.com#comment', '?category=2'))
```


実行結果は以下のとおり：


```plain text
<http://www.baidu.com/FAQ.html>
<https://cuiqingcai.com/FAQ.html>
<https://cuiqingcai.com/FAQ.html>
<https://cuiqingcai.com/FAQ.html?question=2>
<https://cuiqingcai.com/index.php>
<http://www.baidu.com?category=2#comment>
www.baidu.com?category=2#comment
www.baidu.com?category=2
```


ベース URL が提供する三つの内容は scheme、netloc、path であり、これらの値が新しいリンクに存在しなければ補完されます。base_url のパラメータ、query、fragment は作用しません。urljoin によってリンクの解析・結合・生成を簡単に実現できます。


### urlencode


ここでまたよく使われるメソッドを紹介します―― urlencode。GET リクエストのパラメータを作成する際に非常に有用です


```python
from urllib.parse import urlencode

params = {
    'name': 'germey',
    'age': 22
}
base_url = '<http://www.baidu.com>?'
url = base_url + urlencode(params)
print(url)
```


ここでは最初にパラメータを辞書型として表現し、 urlencode メソッドを呼び出して GET リクエストパラメータへシリアライズします。


`http://www.baidu.com?name=germey&amp;age=22`


このように、パラメータは辞書型から GET リクエストのパラメータへと変換されます。このメソッドはとても頻繁に使われます。パラメータを作成するのをさらに簡単にするために、事前に辞書を表現しておき、URL のパラメータへ変換するだけ、という方法もあります。


### parse_qs


シリアライズしたものがあれば、それをデシリアライズすることもできます。GET リクエストパラメータの列を持っている場合、parse_qs メソッドを使って辞書に戻すことができます。以下は例です：


```python
from urllib.parse import parse_qs

query = 'name=germey&amp;age=22'
print(parse_qs(query))
```


### parse_qsl


さらに、parse_qsl メソッドもあり、パラメータをタプルのリストとして変換します。


```python
from urllib.parse import parse_qsl

query = 'name=germey&amp;age=22'
print(parse_qsl(query))
```


### quote


このメソッドは内容を URL エンコードされた形式に変換します。URL に中国語などのパラメータが含まれる場合、文字化けを避けるためにこの方法で中国語を URL エンコードします。


```python
from urllib.parse import quote

keyword = ' 壁纸 '
url = '<https://www.baidu.com/s?wd=>' + quote(keyword)
print(url)
```


ここでは中国語の検索語を宣言し、 quote メソッドで URL エンコードします。最終的な結果は次のとおりです：


`https://www.baidu.com/s?wd=% E5% A3%81% E7% BA% B8`


### unquote


quote メソッドに続いて unquote メソッドもあります。URL のデコードを行います。以下は例です：


```python
from urllib.parse import unquote

url = '<https://www.baidu.com/s?wd=%> E5% A3%91% E7% BA% B8'
print(unquote(url))
```


これは URL エンコード済みの結果のデコード例で、結果は次のとおりです：


`https://www.baidu.com/s?wd = 壁纸`


unquote メソッドを使うとデコードを簡単に実現できます。


## Robots プロトコルの分析


urllib の robotparser モジュールを利用して、サイトの Robots プロトコルの分析を実現します。本節ではこのモジュールの使い方を簡単に見ていきます。


### Robots プロトコル


Robots プロトコルは「クローラー規約」またはロボット規約とも呼ばれ、全名はネットワーク クローラ除外規約（Robots Exclusion Protocol）です。クローラーや検索エンジンに対して、どのページをクローリングしてよいかを知らせるためのものです。通常 robots.txt という名前のテキストファイルで、サイトのルートディレクトリに置かれます。
検索クローラがサイトにアクセスする際、まずサイトのルートディレクトリに robots.txt が存在するかを確認します。存在すれば、その規定されたクローリング範囲に従ってクローリングします。ファイルが見つからない場合、クローラーはすべての公開ページを訪問します。
以下は robots.txt のサンプルです：


```plain text
User-agent: *
Disallow: /
Allow: /public/3
```


これはすべての検索クローラに対して public ディレクトリのみをクローリングを許可することを実現します。上記の内容を robots.txt ファイルとしてサイトのルートに保存し、サイトのエントリーファイル（例えば index.php、index.html、index.jsp など）と同じ場所に置きます。
上の User-agent は検索クローラの名前を示します。ここで `*` と設定すると、この規則はすべてのクローラに有効になります。例えば次のように設定します：
`User-agent: Baiduspider`
これにより百度クローラにはこの規則が有効になります。複数の User-agent 記述がある場合、複数のクローラがクローリング制限を受けますが、少なくとも 1 つは指定する必要があります。
`Disallow` はクローリングを許可しないディレクトリを指します。上の例では `/` が設定されているため、すべてのページのクローリングを禁止します。
`Allow` は通常、Disallow と一緒に使われ、特定の制約を除外する場合に用いられます。今は `/public/` に設定します。すべてのページはクローリング不可ですが、public ディレクトリは取得可能、という意味になります。
以下に他の例を見てみましょう。


```plain text
<!-- 禁止すべきすべてのクローラがすべてのディレクトリをクロール不可にするコードは以下です： -->
User-agent: *
Disallow: /
<!-- すべてのクローラが任意のディレクトリをクロール可能にするコードは以下です： -->
User-agent: *
Disallow:
<!-- 直接 robots.txt ファイルを空にしてもよいです。 -->
<!-- サイトのいくつかのディレクトリを禁止するコードは以下です： -->
User-agent: *
Disallow: /private/
Disallow: /tmp/
<!-- 1つの特定のクローラだけを許可するコードは以下です： -->
User-agent: WebCrawler
Disallow:
User-agent: *
Disallow: /
```


これらは robots.txt のよくある書き方です。


### クローラ名


クローラ名はどこから来たのでしょうか。なぜこの名前なのでしょうか。実は固定の名前があり、例えば百度のクローラ名は BaiduSpider です。


| クローラ名        | 名称      | サイト                                             |
| ----------- | --------- | ------------------------------------------------ |
| BaiduSpider | 百度        | <[www.baidu.com](http://www.baidu.com/)>         |
| Googlebot   | 谷歌        | <[www.google.com](http://www.google.com/)>       |
| 360Spider   | 360 検索    | <[www.so.com](http://www.so.com/)>               |
| YodaoBot    | 有道        | <[www.youdao.com](http://www.youdao.com/)>       |
| ia_archiver | Alexa     | <[www.alexa.cn](http://www.alexa.cn/)>           |
| Scooter     | altavista | <[www.altavista.com](http://www.altavista.com/)> |


### robotparser


Robots プロトコルを理解した後、robotparser モジュールを使って robots.txt を解析できます。本節ではこのモジュールの使い方を簡単に紹介します。


#### ロボットファイルのパーサ RobotFileParser

このクラスは robots.txt の URL を渡して初期化します。宣言時にリンクを渡しても、後から set_url() を使って設定しても構いません。

`urllib.robotparser.RobotFileParser(url='')`

次にこのクラスのよく使うメソッドを挙げます。

- set_url ：robots.txt ファイルのリンクを設定します。RobotFileParser オブジェクトを作成する時にリンクを渡した場合は、このメソッドを使う必要はありません。
- read：robots.txt ファイルを読み込み、分析します。このメソッドは読み込みと分析を行いますが、これを呼び出さないと以降の判断は全て False になります。必ずこのメソッドを呼び出してください。内容は返りませんが、読み込み操作を実行します。
- parse：robots.txt のファイルを解析します。引数は robots.txt の一部の行の内容で、robots.txt の文法規則に従って分析します。
- can_fetch：このメソッドは 2 つの引数を取ります。1 つ目は User-agent、2 つ目は取得する URL。URL をこの検索エンジンが取得できるかどうかを True または False で返します。
- mtime：最後に robots.txt を取得・分析した時刻を返します。長時間にわたる分析・取得を行う検索クローラーには必要で、最新の robots.txt を取得するため定期的にチェックする必要があります。
- modified：現在時刻を前回取得・分析 robots.txt の時刻として設定します。長時間分析・取得を行うクローラーにも有用です。

以下、例を見てみましょう：


```python
from urllib.robotparser import RobotFileParser
rp = RobotFileParser()
rp.set_url('<http://www.jianshu.com/robots.txt>')
rp.read()
print(rp.can_fetch('*', '<http://www.jianshu.com/p/b67554025d7d>'))
print(rp.can_fetch('*', "<http://www.jianshu.com/search?q=python&page=1&type=collections>"))
```


简书を例に取り、RobotFileParser オブジェクトを作成し、set_url メソッドで robots.txt のリンクを設定します。宣言時に以下のように設定することもできます：
`rp = RobotFileParser('<http://www.jianshu.com/robots.txt>')`
次に can_fetch を使ってウェブページがクロール可能かを判断します。
実行結果は以下のとおりです：


```plain text
True
False
```


同様に parse メソッドを使って読み込みと分析を行うこともできます。以下はその例：


```python
from urllib.robotparser import RobotFileParser
from urllib.request import urlopen
rp = RobotFileParser()
rp.parse(urlopen('<http://www.jianshu.com/robots.txt').read().decode('utf-8').split('\\n>'))
print(rp.can_fetch('*', '<http://www.jianshu.com/p/b67554025d7d>'))
print(rp.can_fetch('*', "<http://www.jianshu.com/search?q=python&page=1&type=collections>"))
```


# requests


前節では urllib の基本的な使い方を見てきましたが、実際には扱いづらい点も多く、例えばウェブサイトの認証や Cookies の処理には Opener や Handler を作る必要がありました。より便利にこれらを実現するための、より強力なライブラリである requests を使うと、Cookies、認証、プロキシ設定などの操作も難しくありません。これからその強力さを体感してみましょう。


## 基本的な使い方

1. 準備
まずは requests ライブラリが正しくインストールされていることを確認してください。

2. 実例の導入
urllib ライブラリの urlopen メソッドは実質 GET でウェブページをリクエストしますが、requests の対応するメソッドは get です。以下の例で見ていきましょう：

```python
import requests

r = requests.get('<https://www.baidu.com/>')
print(type(r))
print(r.status_code)
print(type(r.text))
print(r.text)
print(r.cookies)
```


実行結果は以下のとおりです：


```html
<class 'requests.models.Response'>
200
<class'str'>
<html>
    <head>
        <script>
            location.replace(location.href.replace("https://","http://"));
        </script>
    </head>
    <body>
        <noscript><meta http-equiv="refresh" content="0;url=http://www.baidu.com/"></noscript>
    </body>
</html>
(RequestsCookieJar[<Cookie BIDUPSID=992C3B26F4C4D09505C5E959D5FBC005 for .baidu.com/>, <Cookie
PSTM=1472227535 for .baidu.com/>, <Cookie __bsi=15304754498609545148_00_40_N_N_2_0303_C02F_N_N_N_0
for .www.baidu.com/>, <Cookie BD_NOT_HTTPS=1 for www.baidu.com/>])
```


ここでは get メソッドを使って urlopen と同じ操作を実現し、Response オブジェクトを取得します。続いて Response の型、ステータスコード、レスポンス本文の型、内容、Cookies をそれぞれ出力します。


この結果から、戻り値の型は requests.models.Response、レスポンス本文の型は文字列 str、Cookies の型は RequestsCookieJar であることが分かります。


GET リクエストを成功させるには十分ですが、他のリクエストタイプも 1 行で実行できます。以下は例です：


```python
r = requests.post('<http://httpbin.org/post>')
r = requests.put('<http://httpbin.org/put>')
r = requests.delete('<http://httpbin.org/delete>')
r = requests.head('<http://httpbin.org/get>')
r = requests.options('<http://httpbin.org/get>')
```


これらはそれぞれ POST、PUT、DELETE、HEAD、OPTIONS のリクエストを実現します。


3. GET リクエスト

HTTP において最も一般的なリクエストの1つが GET です。requests を使って GET リクエストを構築する方法を詳しく見ていきます。

基本例
まず、最も単純な GET リクエストを作成します。リンクは [http://httpbin.org/get](http://httpbin.org/get) で、サイトは GET リクエストが発行された場合、そのリクエスト情報を返します：


```python
import requests

r = requests.get('<http://httpbin.org/get>')
print(r.text)
```


実行結果は以下のとおりです：


```json
{"args": {},
"headers": {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate",
    "Host": "httpbin.org",
    "User-Agent": "python-requests/2.10.0"
},
"origin": "122.4.215.33",
"url": "<http://httpbin.org/get>"
}
```


このように、GET リクエストを正常に発行し、返却結果にはヘッダ、URL、IP などの情報が含まれています。
GET リクエストに追加情報を付与するには、params パラメータを使います。


```python
import requests

data = {
    'name': 'germey',
    'age': 22
}
r = requests.get("<http://httpbin.org/get>", params=data)
print(r.text)
```


リクエスト URL は自動的に http://httpbin.org/get?age=22&name=germey の形に組み立てられます。


返却データの型は実際には str ですが、これは特別で、JSON 形式の文字列です。従って、返却結果を辞書形式で直接解析したい場合には json メソッドを使います。以下は例です：


```python
import requests

r = requests.get("<http://httpbin.org/get>")
print(type(r.text))
print(r.json())
print(type(r.json()))
```


json メソッドを呼ぶと、JSON 形式の文字列を辞書へ変換できます。


ただし、返却結果が JSON 形式でない場合は、解析エラーが発生し、 json.decoder.JSONDecodeError 例外が投げられます。

- ウェブを取得

上記のリクエストURL は JSON 形式の文字列を返しますので、通常のウェブページを取得する場合も、当然内容を得られます。以下は「知乎」→「发现」ページの例です。

```python
import requests
import re

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'
}
r = requests.get("<https://www.zhihu.com/explore>", headers=headers)
pattern = re.compile('explore-feed.*?question_link.*?>(.*?)</a>', re.S)
titles = re.findall(pattern, r.text)
print(titles)
```


ここでは headers 情報を追加しており、User-Agent の情報を含んでいます。これがないと知乎はクロールを制限します。

- バイナリデータの取得

上記の例では知乎のページを取得していますが、実際には HTML ドキュメントが返されます。画像、音声、動画などのファイルを取得するにはどうすればよいでしょうか？これらは本質的にバイナリデータであり、保存形式や解析方法があるため、バイナリデータを取得する必要があります。


以下は GitHub のサイトアイコンの例です：


```python
import requests

r = requests.get("<https://github.com/favicon.ico>")
print(r.text)
print(r.content)
```


ここで取得しているのは、ブラウザのタブに表示される小さなアイコン（サイトアイコン）です。


続いて、取得したアイコンを保存します：


```python
import requests

r = requests.get("<https://github.com/favicon.ico>")
with open('favicon.ico', 'wb') as f:
    f.write(r.content)
```


open 関数の第1引数はファイル名、第2引数はバイナリ書き込みを指定します。これでファイルにバイナリデータを書き込みます。


実行後、フォルダ内に favicon.ico という名前のアイコンが作成されます。音声ファイルや動画ファイルでも同様の方法で取得できます。

- headers の追加

urllib.request と同様、headers パラメータを使ってヘッダー情報を渡すことができます。

```python
import requests

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'
}
r = requests.get("<https://www.zhihu.com/explore>", headers=headers)
print(r.text)
```


もちろん、headers パラメータには他の任意のフィールド情報を追加できます。

4. POST リクエスト

前述の GET リクエストに対して、もう1つ一般的なリクエスト方法として POST があります。

```python
import requests

data = {'name': 'germey', 'age': '22'}
r = requests.post("<http://httpbin.org/post>", data=data)
print(r.text)
```

5. 応答

リクエストを送信すると、当然応答が返ってきます。上述の例では text と content を使って応答の内容を取得しました。その他にも、ステータスコード、応答ヘッダ、Cookies などの情報を取得するための属性やメソッドが多数用意されています。


```python
import requests

r = requests.get('<http://www.jianshu.com>')
print(type(r.status_code), r.status_code)
print(type(r.headers), r.headers)
print(type(r.cookies), r.cookies)
print(type(r.url), r.url)
print(type(r.history), r.history)
```


ここでは status_code、headers、cookies、url、history の各属性を出力しています。

ステータスコードは、リクエストが成功したかどうかを判断するためによく使われます。requests には組み込みのステータスコード照会オブジェクト requests.codes も用意されています。


```python
import requests

r = requests.get('<http://www.jianshu.com>')
exit() if not r.status_code == requests.codes.ok else print('Request Successfully')
```


このコードは、返却コードを組み込みの成功コードと比較して、リクエストが正常に応答を得られたかを判断します。requests.codes.ok が返す値は 200 です。


以下は代表的な戻り値のコードと、それに対応する意味の一覧です：


```plain text
# 情報性ステータスコード

100: ('continue',),
101: ('switching_protocols',),
102: ('processing',),
103: ('checkpoint',),
122: ('uri_too_long', 'request_uri_too_long'),

# 成功ステータスコード

200: ('ok', 'okay', 'all_ok', 'all_okay', 'all_good', '\\\\o/', '✓'),
201: ('created',),
202: ('accepted',),
203: ('non_authoritative_info', 'non_authoritative_information'),
204: ('no_content',),
205: ('reset_content', 'reset'),
206: ('partial_content', 'partial'),
207: ('multi_status', 'multiple_status', 'multi_stati', 'multiple_stati'),
208: ('already_reported',),
226: ('im_used',),

# リダイレクト

300: ('multiple_choices',),
301: ('moved_permanently', 'moved', '\\\\o-'),
302: ('found',),
303: ('see_other', 'other'),
304: ('not_modified',),
305: ('use_proxy',),
306: ('switch_proxy',),
307: ('temporary_redirect', 'temporary_moved', 'temporary'),
308: ('permanent_redirect',
        'resume_incomplete', 'resume',), # These 2 to be removed in 3.0

# クライアントエラー

400: ('bad_request', 'bad'),
401: ('unauthorized',),
402: ('payment_required', 'payment'),
403: ('forbidden',),
404: ('not_found', '-o-'),
405: ('method_not_allowed', 'not_allowed'),
406: ('not_acceptable',),
407: ('proxy_authentication_required', 'proxy_auth', 'proxy_authentication'),
408: ('request_timeout', 'timeout'),
409: ('conflict',),
410: ('gone',),
411: ('length_required',),
412: ('precondition_failed', 'precondition'),
413: ('request_entity_too_large',),
414: ('request_uri_too_large',),
415: ('unsupported_media_type', 'unsupported_media', 'media_type'),
416: ('requested_range_not_satisfiable', 'requested_range', 'range_not_satisfiable'),
417: ('expectation_failed',),
418: ('im_a_teapot', 'teapot', 'i_am_a_teapot'),
421: ('misdirected_request',),
422: ('unprocessable_entity', 'unprocessable'),
423: ('locked',),
424: ('failed_dependency', 'dependency'),
425: ('unordered_collection', 'unordered'),
426: ('upgrade_required', 'upgrade'),
428: ('precondition_required', 'precondition'),
429: ('too_many_requests', 'too_many'),
431: ('header_fields_too_large', 'fields_too_large'),
444: ('no_response', 'none'),
449: ('retry_with', 'retry'),
450: ('blocked_by_windows_parental_controls', 'parental_controls'),
451: ('unavailable_for_legal_reasons', 'legal_reasons'),
499: ('client_closed_request',),

# サーバエラー

500: ('internal_server_error', 'server_error', '/o\\\\', '✗'),
501: ('not_implemented',),
502: ('bad_gateway',),
503: ('service_unavailable', 'unavailable'),
504: ('gateway_timeout',),
505: ('http_version_not_supported', 'http_version'),
506: ('variant_also_negotiates',),
507: ('insufficient_storage',),
509: ('bandwidth_limit_exceeded', 'bandwidth'),
510: ('not_extended',),
511: ('network_authentication_required', 'network_auth', 'network_authentication')
```


例えば 404 のステータスかどうかを判断したい場合は、requests.codes.not_found と比較することができます。


## requests の高度な使い方


前節では requests の基本的な使い方、GET・POST リクエスト、Response オブジェクトについて解説しました。ここでは、ファイルのアップロード、Cookies の設定、プロキシ設定など、requests の高度な使い方を紹介します。

1. ファイルアップロード

requests はデータの送信を模倣できます。もしサイトがファイルのアップロードを要求する場合にも対応できます。

```python
import requests

files = {'file': open('favicon.ico', 'rb')}
r = requests.post('<http://httpbin.org/post>', files=files)
print(r.text)
```


このサイトはファイルアップロードの部分をファイルとして返します。response の中の files フィールドがあり、form フィールドは空であることを意味します。

2. Cookies

これまで urllib で Cookies を扱ってきましたが、requests を使えば Cookies の取得・設定が一段と簡単になります。

```python
import requests

r = requests.get('<https://www.baidu.com>')
print(r.cookies)
for key, value in r.cookies.items():
    print(key + '=' + value)
```


ここでは cookies プロパティを呼ぶだけで Cookies を取得できます。これは RequestsCookieJar 型で、items() でタプルのリストへ変換し、各 Cookies の名称と値を出力します。

もちろん、Cookies を使ってログイン状態を維持することもできます。以下は知乎を例に説明します。

まず知乎にログインして、Headers の Cookie 内容をコピーして Headers に設定してリクエストを送ります。

```python
import requests

headers = {
    'Cookie': '',
    'Host': 'www.zhihu.com',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36',
}
r = requests.get('<https://www.zhihu.com>', headers=headers)
print(r.text)
```


もちろん、cookies パラメータを用いて設定することもできます。ただしこの場合は RequestsCookieJar オブジェクトを構築する必要があり、cookie を分割する必要があります。やや煩雑ですが、効果は同じです。

```python
import requests

cookies = ''
jar = requests.cookies.RequestsCookieJar()
headers = {
    'Host': 'www.zhihu.com',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36'
}
for cookie in cookies.split(';'):
    key, value = cookie.split('=', 1)
    jar.set(key, value)
r = requests.get('<http://www.zhihu.com>', cookies=jar, headers=headers)
print(r.text)
```


ここではまず新しく RequestCookieJar オブジェクトを作成し、コピーしてきた Cookies を split で分割して、set メソッドで各 Cookie のキーと値を設定し、requests の get() メソッドに cookies パラメータとして渡します。もちろん、知乎自体の制限のため、headers パラメータには cookie フィールドを設定する必要があります。

テスト後、知乎 へのログインが正常に機能することが確認できます。

3. セッションの維持

requests では、単に get または post のような方法を使ってウェブページのリクエストを模倣するだけで、実際には異なるセッションを利用することになります。つまり、別々のブラウザで異なるページを開いている状態です。

この問題を解決する主要な方法は、同じセッションを維持すること、つまり cookies の問題を気にせず、1 つのセッションを維持することです。これを実現するには Session オブジェクトを使います。

```python
import requests

s = requests.Session()
s.get('<http://httpbin.org/cookies/set/number/123456789>')
r = s.get('<http://httpbin.org/cookies>')
print(r.text)
```


このように、Session を使えば Cookies の問題を気にせず、同じセッションを模倣することができます。通常はログイン成功後の次の操作を行う場合に使われます。

4. SSL 証明書の検証

requests は証明書検証の機能を提供します。HTTP リクエストを送る際に SSL 証明書を確認します。verify パラメータでこの検証を行うかどうかを制御します。デフォルトは True で、自動的に検証されます。


```python
import requests

response = requests.get('<https://www.12306.cn>', verify=False)
print(response.status_code)
```


また、ローカル証明書をクライアント証明書として使用することもできます。これは単一ファイル（秘密鍵と証明書を含む）または二つのファイルパスを含むタプルです：


```python
import requests

response = requests.get('<https://www.12306.cn>', cert=('/path/server.crt', '/path/key'))
print(response.status_code)
```


注意：ローカルの秘密鍵は非暗号状態である必要があります。暗号化された鍵はサポートされていません。

5. 代理設定

一部のサイトには、テスト中に複数回リクエストすると、验证码が表示されたり、認証ページへリダイレクトされたり、場合によってはクライアントの IP がブロックされたりすることがあります。これを回避するには代理設定が有効です。以下のように proxies パラメータを使います：


```python
import requests

proxies = {
'http': '<http://10.10.1.10:3128>',
'https': '<http://10.10.1.10:1080>',
}

requests.get('<https://www.taobao.com>', proxies=proxies)
```


この例は有効な代理を使っていない場合もあるので、実際にはご自身の有効な代理を使って試してください。

HTTP Basic Auth が必要な場合には、http://user:password@host:port のような形式でプロキシを設定することもできます：

```python
import requests

proxies = {'https': '<http://user:password@10.10.1.10:3128/',}
requests.get('<https://www.taobao.com>', proxies=proxies)
```

requests は SOCKS プロキシにも対応しています。まず socks ライブラリをインストールします：
`pip3 install"requests[socks]"`
その後、SOCKS プロキシを使う例は次のとおりです：

```python
import requests

proxies = {
    'http': 'socks5://user:password@host:port',
    'https': 'socks5://user:password@host:port'
}
requests.get('<https://www.taobao.com>', proxies=proxies)
```

6. タイムアウト設定

ローカルネットワークが安定していない、またはサーバの応答が遅い場合、応答を待つ時間が非常に長くなることがあります。サーバがすぐに応答しない場合には timeout を設定してタイムアウトを設け、超過するとエラーを発生させることができます。timeout はこのリクエストの総待機時間を表します。

```python
import requests

r = requests.get('<https://www.taobao.com>', timeout=1)
print(r.status_code)
```


このようにしてタイムアウトを 1 秒に設定します。1 秒以内に応答がなければ例外が発生します。実際にはリクエストは接続（connect）と読み取り（read）の二段階に分かれており、上の timeout はこの両方の総和として計算されます。個別に指定したい場合はタプルを渡します：
`r = requests.get('<https://www.taobao.com>', timeout=(5, 30))`
永久に待つ必要がある場合は timeout=None に設定します。あるいは省略しても良いです。サーバが動作していて、応答が極端に遅い場合でも timeout には達しません。使い方は以下のとおりです：
`r = requests.get('<https://www.taobao.com>', timeout=None)`
または単にパラメータを渡さない。

7. 認証

ウェブサイトにアクセスする際には、ログイン認証のページに遭遇することがあります。


この場合、requests が用意している認証機能を使用できます。

```python
import requests
from requests.auth import HTTPBasicAuth

r = requests.get('<http://localhost:5000>', auth=HTTPBasicAuth('username', 'password'))
print(r.status_code)
```


ユーザー名とパスワードが正しければ、認証は自動的に成功し、200 が返ります。認証に失敗すれば 401 が返ります。もちろん、HTTPBasicAuth クラスをすべてのパラメータとして渡すのは煩雑なので、タプルを渡して自動的に HTTPBasicAuth を使用して認証することもできます。

以下のように簡略化できます：


```python
import requests

r = requests.get('<http://localhost:5000>', auth=('username', 'password'))
print(r.status_code)
```


さらに、requests は OAuth 認証などの他の認証方式も提供していますが、その場合は oauth パッケージのインストールが必要です。インストール方法は以下：
`pip3 install requests_oauthlib`
OAuth1 認証の例は次のとおりです：


```python
import requests
from requests_oauthlib import OAuth1

url = '<https://api.twitter.com/1.1/account/verify_credentials.json>'
auth = OAuth1('YOUR_APP_KEY', 'YOUR_APP_SECRET',
            'USER_OAUTH_TOKEN', 'USER_OAUTH_TOKEN_SECRET')
requests.get(url, auth=auth)
```


詳細な機能については、requests_oauthlib の公式ドキュメントを参照してください：[https://requests-oauthlib.readthedocs.org/](https://requests-oauthlib.readthedocs.org/)

8. Prepared Request

これまで urllib で、リクエストをデータ構造として表現することができましたが、requests でも同様に可能です。このデータ構造は Prepared Request と呼ばれます。


```python
from requests import Request, Session

url = '<http://httpbin.org/post>'
data = {'name': 'germey'}
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36'
}
s = Session()
req = Request('POST', url, data=data, headers=headers)
prepped = s.prepare_request(req)
r = s.send(prepped)
print(r.text)
```


ここでは Request を導入し、url、data、headers のパラメータで Request オブジェクトを構築します。次に Session の prepare_request メソッドで Prepared Request オブジェクトへ変換し、send メソッドで送信します。


Request オブジェクトを使うことで、リクエストを独立したオブジェクトとして扱えるため、キューによるスケジューリングなどに非常に便利です。今後はこの Prepared Request を用いて Request のキューを構築します。


さらなる使い方は Requests の公式ドキュメントを参照してください：[http://docs.python-requests.org/](http://docs.python-requests.org/)


# 正規表現


本節では正規表現の関連使用法を見ていきます。正規表現は文字列を扱う強力なツールで、独自の文法構造を持っています。これを使えば、文字列の検索・置換・検証などが容易にできます。


もちろん、クローラにとっては、正規表現を使って HTML から欲しい情報を抽出するのにも非常に有用です。


## 実例の導入


これだけ説明してきましたが、正規表現がいったい何なのかまだ分からないかもしれません。以下の実例を使って正規表現の使い方を見てみましょう。


オープンソース中国の正規表現テストツール http://tool.oschina.net/regex/ を開き、マッチさせたいテキストを入力して、一般的な正規表現を選択すると、対応するマッチ結果が得られます。例えば、以下のテキストを入力します：


```plain text
Hello, my phone number is 010-86432100 and email is <cqc@cuiqingcai.com>, and my website is <https://cuiqingcai.com>.
```


この文字列には電話番号とメールアドレスが含まれており、正規表現を使って抽出してみましょう。


メールアドレスの構成は、先頭が文字列、次に @、最後にドメイン名という特定の形を持っています。また、URL に関しては、先頭はプロトコル、次にコロン＋スラッシュスラッシュ、最後にドメイン名とパスが続きます。


URL のマッチには次の正規表現を使用します：


`[a-zA-z]+://[^\\s]*`


この正規表現を文字列に適用すると、URL のようなテキストが含まれていれば、それを抽出します。


この正規表現は一見複雑に見えますが、実際には特定の文法規則の組み合わせです。例えば、a-z は任意の小文字文字を、\s は任意の空白文字を、* は前の文字を0回以上繰り返すことを意味します。この長い正規表現は、たくさんのマッチ規則の組み合わせです。


正規表現を作成したら、それを長い文字列に適用して検索を行えます。文字列の内容に関係なく、書いた規則に合致すればすべて見つけられます。ウェブページの場合、ウェブページのソースコード中に含まれる URL の数を見つけたい場合は、URL をマッチさせる正規表現を使用してマッチさせればよいです。


よく使われるマッチ規則


| パターン   | 説明                                            |
| ------ | ----------------------------------------------- |
| \w     | 文字、数字、アンダースコアをマッチ                    |
| \W     | 文字、数字、アンダースコア以外の文字をマッチ              |
| \s     | 任意の空白文字をマッチ、等価は [\t\n\r\f]           |
| \S     | 任意の非空白文字をマッチ                              |
| \d     | 任意の数字をマッチ、等価は [0-9]                       |
| \D     | 非数字の文字をマッチ                                   |
| \A     | 文字列の先頭にマッチ                                   |
| \Z     | 文字列の末尾にマッチ、改行がある場合は改行前のみをマッチ     |
| \z     | 文字列の末尾にマッチ、改行がある場合は改行もマッチ           |
| \G     | 最後にマッチした場所にマッチ                               |
| \n     | 改行をマッチ                                           |
| \t     | タブをマッチ                                           |
| ^      | 行の先頭にマッチ                                         |
| $      | 行の末尾にマッチ                                         |
| .      | 任意の文字（改行を除く。re.DOTALL を指定すると改行を含む任意文字をマッチ） |
| [...]  | 文字集合を表す。例として [amk] は a、m、または k にマッチ             |
| ^      | [] の外にある文字、例えば「a、b、c 以外の文字」にマッチ           |
| *      | 0 回以上の繰り返しをマッチ                                |
| +      | 1 回以上の繰り返しをマッチ                                |
| ?      | 前の正規表現の断片が 0 回または 1 回、非貪欲モード                   |
| {n}    | 前の式をちょうど n 回マッチ                           |
| {n, m} | 前の正規表現の断片を n 回以上 m 回以下、貪欲にマッチ                 |
| a|b    | a または b をマッチ                                        |
| ( )    | 括弧内の式をグループとしてマッチ                           |


正規表現は Python 独自のものではなく、他のプログラミング言語でも使用できます。しかし、Python の re ライブラリは正規表現の実装を提供し、Python ではこのライブラリを使って正規表現を扱います。Python で正規表現を書く際にはほぼこのライブラリを使用します。以下に、このライブラリのよく使われるメソッドをいくつか紹介します。


## match


まずはよく使われるマッチングメソッドの1つ、match を紹介します。文字列と正規表現を渡すと、この正規表現が文字列にマッチするかどうかを検証します。
match は文字列の先頭からマッチを試み、成功すればマッチした結果を返します。マッチしなければ None を返します。以下は例です：


```python
import re

content = 'Hello 123 4567 World_This is a Regex Demo'
print(len(content))
result = re.match('^Hello\\s\\d\\d\\d\\s\\d{4}\\s\\w{10}', content)
print(result)
print(result.group())
print(result.span())
```


ここでは、英字、空白、数字などが含まれる文字列を宣言しています。次に正規表現 `^Hello\\s\\d\\d\\d\\s\\d{4}\\s\\w{10}` を用いてこの長い文字列に対してマッチさせます。


先頭の ^ は文字列の先頭にマッチします。次に \\s は空白文字にマッチします。\\d は数字にマッチします。3 つの \\d は 123 に対応します。その後 1 個の \\s の空白文字にマッチします。続いて 4567 は、より煩雑ですが、4 個の \\d で表現することも可能です。ここでは {4} を使用して、前の規則を4回繰り返します。最後に 1 個の空白文字を挟み、\\w{10} は 10 個の文字とアンダースコアにマッチします。ここではターゲット文字列全体をマッチさせるわけではなく、マッチの一部だけを得ることになります。

- マッチ対象

    先ほどの例では、マッチした文字列の一部を取り出したい場合があります。Text の中からメールアドレスや電話番号などを取り出す場合です。括弧 () を使って抽出したい部分をグループ化します。グループのインデックスを group() に渡すと、抽出結果を得られます。

```python
import re

content = 'Hello 1234567 World_This is a Regex Demo'
result = re.match('^Hello\\s(\\d+)\\sWorld', content)
print(result)
print(result.group())
print(result.group(1))
print(result.span())
```


この場合、文字列の中の 1234567 を取り出すために、数字部分の正規表現を () で囲んでいます。group(1) でマッチ結果を取得します。group(1) は group() と異なり、最初の括弧で囲まれた部分のみを返します。後続に () があれば group(2)、group(3) などを順次使って取得できます。

- 一般的なマッチ

    先に書いた正規表現はやや複雑で、空白文字には \\s、数字には \\d を使うなど、作業量が多いです。正規表現を単純化する万能なマッチとして .（ドット）を使う方法があります。.（ドット）は改行を除く任意の文字を、* は直前の文字の0回以上の繰り返しを表します。これらを組み合わせると、任意の文字列をマッチさせることができます。これで、個々の文字を順番にマッチさせる必要がなくなります。


    上の例を元に正規表現を次のように書き換えることができます：


```python
import re

content = 'Hello 123 4567 World_This is a Regex Demo'
result = re.match('^Hello.*Demo$', content)
print(result)
print(result.group())
print(result.span())
```


この場合、中間の部分をすべて省略して、.* を使って置き換え、末尾の文字列だけを追加しました。

group() はマッチしたすべての文字列を出力します。つまり、正規表現がターゲット文字列の全体に一致していることを意味します。span() は (0, 41) となり、全体の長さを表します。したがって、.* を使って正規表現の記述を簡略化できます。

- 修飾子

    正規表現には、マッチの動作を制御するオプションのフラグが含まれます。修飾子は任意のフラグとして指定されます。


    `result = re.match('^He.*?(\\d+).*?Demo$', content)`


    文字列に改行が含まれる場合、実行時にエラーが発生します。つまり、正規表現はこの文字列にマッチしない、結果は None となり、続く group() の呼び出しで AttributeError が発生します。


    改行を含む場合にマッチできない理由は、改行文字を除く任意の文字をマッチさせる際、. は改行を含みません。これを修正するには修飾子 re.S（DOTALL）を追加します：

```python
import re

content = '''Hello 1234567 World_This
is a Regex Demo
'''
result = re.match('^He.*?(\\d+).*?Demo$', content, re.S)
print(result.group(1))
```


この修飾子の役割は、改行を含むすべての文字をマッチさせることです。

この re.S はウェブページのマッチングにもよく使われます。HTML ノードは改行を含むことがあるため、ノード間の改行をマッチさせるのに有効です。


その他、必要に応じて使われる修飾子があります。


| 修飾子  | 説　　明                                    |
| ---- | --------------------------------------- |
| re.I | 大文字と小文字を区別しないようにします                              |
| re.L | locale に基づく識別を行います                  |
| re.M | 行単位でマッチ、^ と $ に影響                           |
| re.S | ドットが改行を含むすべての文字をマッチ                          |
| re.U | Unicode の文字セットに従って文字を解釈します。これは \w、\W、\b、\B に影響します |
| re.X | 正規表現を見やすくするための拡張モード。より柔軟な書き方が可能          |


ウェブのマッチングでは、re.S と re.I が特に頻繁に使われます。


## search


前述の match は文字列の先頭からのマッチを行います。先頭がマッチしないと、マッチは失敗します。


```python
import re

content = 'Extra stings Hello 1234567 World_This is a Regex Demo Extra stings'
result = re.match('Hello.*?(\\d+).*?Demo', content)
print(result)
```


この文字列は Extra から始まっており、正規表現は Hello で始まるべきなので、マッチは失敗します。match は先頭の内容を考慮する必要があるため、正規表現の使用には適さない場合があります。代わって、文字列全体をスキャンして最初に成功したマッチを返す search を使用すると良いです。正規表現は文字列の一部としてもよく、search は文字列を順次スキャンして、条件に合う最初の文字列を見つけてマッチ内容を返します。もし探索しても見つからなければ None を返します。


上記の code を match から search に変更してみます：


```python
import re

content = 'Extra stings Hello 1234567 World_This is a Regex Demo Extra stings'
result = re.search('Hello.*?(\\d+).*?Demo', content)
print(result)
```


## findall


前に紹介した search の使い方は、最初のマッチ内容のみを返します。正規表現にマッチするすべての内容を取得したい場合は、findall を使います。これにより、文字列全体を検索し、正規表現にマッチするすべての内容を返します。


上記の HTML テキストでは、すべての a ノードのリンク先、アーティスト名、曲名を取得したい場合は、search を findall に置き換えます。結果がある場合はリスト型になりますので、各グループを順に取得します。コードは以下のとおりです：


```python
results = re.findall('<li.*?href="(.*?)".*?singer="(.*?)">(.*?)</a>', html, re.S)
print(results)
print(type(results))
for result in results:
    print(result)
    print(result[0], result[1], result[2])
```


返ってきたリストの各要素はタプル型です。対応するインデックスを使って順番に取り出します。


最初の内容だけを取得したい場合は search を使います。複数の内容を抽出したい場合は findall を使います。


## sub


正規表現を使って情報を抽出する以外にも、テキストを変更する際にも使うことができます。例えば、テキスト中のすべての数字を削除したい場合、replace だけでは煩雑になるため、sub を使います。


```python
import re

content = '54aK54yr5oiR54ix5L2g'
content = re.sub('\\d+', '', content)
print(content)
```


最初の引数にはすべての数字をマッチさせる \d+ を渡します。2番目の引数は置換後の文字列（省略すると空文字にします）、3番目は元の文字列です。


## compile


前節で紹介した方法はすべて文字列を処理するためのものです。最後に compile メソッドを紹介します。これは正規表現の文字列を正規表現オブジェクトへコンパイルし、後のマッチングで再利用できるようにします。コード例は以下のとおりです：


```python
import re

content1 = '2016-12-15 12:00'
content2 = '2016-12-17 12:55'
content3 = '2016-12-22 13:21'
pattern = re.compile('\\d{2}:\\d{2}')
result1 = re.sub(pattern, '', content1)
result2 = re.sub(pattern, '', content2)
result3 = re.sub(pattern, '', content3)
print(result1, result2, result3)
```


例えば、3 つの日付があり、それぞれの時刻を削除したい場合には sub を使います。第一引数は正規表現ですが、3 回同じ正規表現を繰り返し書く必要はありません。compile を用いて正規表現をオブジェクトとして再利用可能にします。


さらに、compile に修飾子（例えば re.S など）を渡すこともできます。これにより、search、findall などのメソッドで追加の引数を渡す必要がなくなります。つまり、compile は正規表現の処理をひとまとまりの形にして、再利用を容易にするということです。


# クローラ基本ライブラリの使用例 - 猫眼映画ランキング


request を使って、猫眼映画 TOP100 の映画名、公開時間、評価、画像などの情報を抽出します。対象サイトの URL は [http://maoyan.com/board/4](http://maoyan.com/board/4) で、抽出結果はファイルとして保存されます。


## ページ分析


ランキング1位の映画は「霸王别姬（巴拜別）」で、ページに表示される有効情報は映画名、主演、上映時間、上映地域、評価、画像などです。


ページを一番下までスクロールすると、ページネーション付きのリストが現れます。第2ページを直接クリックすると、URL が [http://maoyan.com/board/4?offset=10](http://maoyan.com/board/4?offset=10) となるのを観察できます。


offset はオフセット値を表します。オフセットが n の場合、表示される映画の番号は n+1 から n+10 までで、1 ページあたり 10 件の映画情報が表示されます。


TOP100 を取得するには、10 回に分けてリクエストを送ればよく、それぞれの offset パラメータを 0、10、20…90 に設定します。異なるページを取得した後、正規表現で関連情報を抽出すれば、TOP100 全部の映画情報を得られます。


## トップ頁の取得


```python
import requests

def get_one_page(url):
    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36',
                'Cookie': ''
    }

    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.text
    return None

def main():
    url = '<http://maoyan.com/board/4>'
    html = get_one_page(url)
    print(html)

main()
```

> 注意： 猫眼映画の反スクレイピング機構のため、リクエストヘッダに Cookie 情報を追加する必要があります。さもないと 418 エラーが返されます。


## 正規表現で情報を抽出


映画情報に対応するソースコードは dd ノードです。正規表現を使ってここから映画情報を抽出します。


```python
def parse_one_page(html):
    pattern = re.compile('<dd>.*?board-index.*?>(.*?)</i>.*?data-src="(.*?)".*?name.*?a.*?>(.*?)</a>.*?star.*?>(.*?)</p>.*?releasetime.*?>(.*?)</p>.*?integer.*?>(.*?)</i>.*?fraction.*?>(.*?)</i>.*?</dd>',
        re.S)
    items = re.findall(pattern, html)
    print(items)
```


このようにして、1ページの 10 件の映画情報を抽出できます。


しかし、データは雑然としているため、マッチ結果を処理して辞書として生成するなど、以下のように改良します：


```python
def parse_one_page(html):
    pattern = re.compile('<dd>.*?board-index.*?>(.*?)</i>.*?data-src="(.*?)".*?name.*?a.*?>(.*?)</a>.*?star.*?>(.*?)</p>.*?releasetime.*?>(.*?)</p>.*?integer.*?>(.*?)</i>.*?fraction.*?>(.*?)</i>.*?</dd>',
        re.S)
    items = re.findall(pattern, html)
    for item in items:
        yield {'index': item[0],
            'image': item[1],
            'title': item[2].strip(),
            'actor': item[3].strip()[3:] if len(item[3]) > 3 else '',
            'time': item[4].strip()[5:] if len(item[4]) > 5 else '',
            'score': item[5].strip() + item[6].strip()}
```


## ファイルへの書き込み


続いて、抽出結果をファイルへ書き込みます。ここではテキストファイルへ直接書き込みます。JSON ライブラリの dumps メソッドを使用して辞書をシリアライズし、ensure_ascii パラメータを False にします。これにより、出力結果が Unicode 文字列としてではなく、中国語のまま出力されます。


```python
def write_to_file(content):
    with open('result.txt', 'a', encoding='utf-8') as f:
        print(type(json.dumps(content)))
        f.write(json.dumps(content, ensure_ascii=False)+'\\n')
```


## 完全なコード


```python
import json
import requests
from requests.exceptions import RequestException
import re
import time

def get_one_page(url):
    headers = {
        'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)',
        'Cookie':''
    }
    try:
        response = requests.get(url,headers=headers)
        if response.status_code == 200:
            return response.text
        return None
    except RequestException:
        return None

def parse_one_page(html):
    pattern = re.compile('<dd>.*?board-index.*?>(\\d+)</i>.*?data-src="(.*?)".*?name"><a'
                         + '.*?>(.*?)</a>.*?star">(.*?)</p>.*?releasetime">(.*?)</p>'
                         + '.*?integer">(.*?)</i>.*?fraction">(.*?)</i>.*?</dd>', re.S)
    items = re.findall(pattern, html)
    for item in items:
        yield {
            'index': item[0],
            'image': item[1],
            'title': item[2],
            'actor': item[3].strip()[3:],
            'time': item[4].strip()[5:],
            'score': item[5] + item[6]
        }

def write_to_file(content):
    with open('result.txt', 'a', encoding='utf-8') as f:
        f.write(json.dumps(content, ensure_ascii=False) + '\\n')

def main(offset):
    url = '<http://maoyan.com/board/4?offset=>' + str(offset)
    html = get_one_page(url)
    for item in parse_one_page(html):
        print(item)
        write_to_file(item)

if __name__ == '__main__':
    for i in range(10):
        main(offset=i * 10)
        time.sleep(1)
```
