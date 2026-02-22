---
title: 'spider基础库学习'
published: 2024-01-18
updated: 2024-01-19
description: '学习爬虫基础库，包括Python的urllib和requests库的使用。介绍了HTTP请求的构造、异常处理、URL解析、正则表达式的应用，以及如何提取猫眼电影排行榜的信息。强调了请求头、Cookies、代理设置和会话维持等高级用法。'
permalink: 'spider-basics'
image: 'https://r2.dreaife.tokyo/notion/covers/b672eece915b4f3cb2fef5ac4001a49b/20240116_182154923_iOS.png'
tags: ['spider', 'python', 'regex', 'inHand']
category: 'spider'
draft: false
---

# spider 基本库


学习爬虫，最初的操作便是模拟浏览器向服务器发出请求，那么我们需要从哪个地方做起呢？请求需要我们自己来构造吗？需要关心请求这个数据结构的实现吗？需要了解 HTTP、TCP、IP 层的网络传输通信吗？需要知道服务器的响应和应答原理吗？


可能你不知道无从下手，不过不用担心，Python 的强大之处就是提供了功能齐全的类库来帮助我们完成这些请求。最基础的 HTTP 库有 urllib、httplib2、requests、treq 等。


# urllib


在 Python2 中，有 urllib 和 urllib2 两个库来实现请求的发送。而在 Python3 中，已经不存在 urllib2 这个库了，统一为 urllib，其官方文档链接为:[https://docs.python.org/3/library/urllib.html](https://docs.python.org/3/library/urllib.html)


urllib库是Python内置的HTTP请求库，也就是说不需要额外安装即可使用它包含如下4个模块。

- request
它是最基本的HTTP请求模块，可以用来模拟发送请求。就像在浏览器里输入网挝然后回车一样，只需要给库方法传入URL以及额外的参数，就可以模拟实现这个过程了。
- error
异常处理模块，如果出现请求错误，我们可以捕获这些异常，然后进行重试或 其他 操作以保证程序不会意外终止。
- parse
一个工具模块，提供了许多URL处理方法，比如拆分、解析、合并等。
- robot parser
主要是用来识别网站的robots.txt文件，然后判断哪些网站可以爬，哪些网站不可以爬，它其实用得比较少

本节代码可以参考这个[库](https://github.com/Python3WebSpider/UrllibTest)


## 发送请求


使用 urllib 的 request 模块，我们可以方便地实现请求的发送并得到响应。


### urlopen


urllib.request模块提供了最基本的构造HTTP请求的方法，利用它可以模拟浏览器的一个请求发起过程，同时它还带有处理授权验证(authentication)、重定向(redirection)、浏览器Cookies以及其他内容。


以 Python 官网为例，我们来把这个网页抓下来：


```python
import urllib.request

response = urllib.request.urlopen('<https://www.python.org>')
print(response.read().decode('utf-8'))

print(type(response))
```


一个 HTTPResposne 类型的对象，主要包含 read、readinto、getheader、getheaders、fileno 等方法，以及 msg、version、status、reason、debuglevel、closed等属性。


得到这个对象之后，我们把它赋值为 response 变量，然后就可以调用这些方法和属性，得到返回结果的一系列信息了。


```python
import urllib.request

response = urllib.request.urlopen('<https://www.python.org>')
print(response.status)
print(response.getheaders())
print(response.getheader('Server'))

print(type(response))
# <class 'http.client.HTTPResponse'>
```


可以发现，返回的是一个 HTTPResposne 类型的对象，主要包含 read、readinto、getheader、getheaders、fileno 等方法，以及 msg、version、status、reason、debuglevel、closed 等属性。


得到这个对象之后，我们把它赋值为 response 变量，然后就可以调用这些方法和属性，得到返回结果的一系列信息了。


例如，调用 read 方法可以得到返回的网页内容，调用 status 属性可以得到返回结果的状态码，如 200 代表请求成功，404 代表网页未找到等。


利用最基本的 urlopen 方法，可以完成最基本的简单网页的 GET 请求抓取。


如果想给链接传递一些参数，该怎么实现呢？首先看一下 urlopen 方法的 API：


`urllib.request.urlopen(url, data=None, [timeout,]*, cafile=None, capath=None, cadefault=False, context=None)`


可以发现，除了第一个参数可以传递 URL 之外，我们还可以传递其他内容，比如 data（附加数据）、timeout（超时时间）等。

- data 参数
data 参数是可选的。如果要添加该参数，需要使用 bytes 方法将参数转化为字节流编码格式的内容，即 bytes 类型。另外，如果传递了这个参数，则它的请求方式就不再是 GET 方式，而是 POST 方式。

    ```python
    import urllib.parse
    import urllib.request
    
    data = bytes(urllib.parse.urlencode({'word': 'hello'}), encoding='utf8')
    response = urllib.request.urlopen('<http://httpbin.org/post>', data=data)
    print(response.read())
    ```


    这里我们传递了一个参数 word，值是 hello。它需要被转码成 bytes（字节流）类型。其中转字节流采用了 bytes 方法，该方法的第一个参数需要是 str（字符串）类型，需要用 urllib.parse 模块里的 urlencode 方法来将参数字典转化为字符串；第二个参数指定编码格式，这里指定为 utf8。


    在这里请求的站点是 [httpbin.org](http://httpbin.org/)，它可以提供 HTTP 请求测试，本次我们请求的 URL 为：[http://httpbin.org/post](http://httpbin.org/post)，这个链接可以用来测试 POST 请求，它可以输出 Request 的一些信息，其中就包含我们传递的 data 参数。


    运行结果如下：


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


    可以看到，我们传递的参数出现在了 form 字段中，这表明是模拟了表单提交的方式，以 POST 方式传输数据。

- timeout 参数

    timeout 参数用于设置超时时间，单位为秒，意思就是如果请求超出了设置的这个时间，还没有得到响应，就会抛出异常。如果不指定该参数，就会使用全局默认时间。它支持 HTTP、HTTPS、FTP 请求。


    ```python
    import urllib.request
    
    response = urllib.request.urlopen('<http://httpbin.org/get>', timeout=1)
    print(response.read())
    ```


    这里我们设置超时时间是 1 秒。程序 1 秒过后，服务器依然没有响应，于是抛出了 URLError 异常。该异常属于 urllib.error 模块，错误原因是超时。


    因此，可以通过设置这个超时时间来控制一个网页如果长时间未响应，就跳过它的抓取。这可以利用 try except 语句来实现，相关代码如下：


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


    这里我们请求了 [http://httpbin.org/get](http://httpbin.org/get) 这个测试链接，设置了超时时间是 0.1 秒，然后捕获了 URLError 这个异常，然后判断异常原因是 socket.timeout 类型，意思就是超时异常，就得出它确实是因为超时而报错，打印输出了 TIME OUT。


    通过设置 timeout 这个参数来实现超时处理，有时还是很有用的。

- 其他参数

    除了 data 参数和 timeout 参数外，还有 context 参数，它必须是 ssl.SSLContext 类型，用来指定 SSL 设置。此外，cafile 和 capath 这两个参数分别指定 CA 证书和它的路径，这个在请求 HTTPS 链接时会有用。cadefault 参数现在已经弃用了，其默认值为 False。


    前面讲解了 urlopen 方法的用法，通过这个最基本的方法，我们可以完成简单的请求和网页抓取。若需更加详细的信息，可以参见官方文档：[https://docs.python.org/3/library/urllib.request.html](https://docs.python.org/3/library/urllib.request.html)。


### Request


我们知道利用 urlopen 方法可以实现最基本请求的发起，但这几个简单的参数并不足以构建一个完整的请求。如果请求中需要加入 Headers 等信息，就可以利用更强大的 Request 类来构建。


首先，我们用实例来感受一下 Request 的用法：


```python
import urllib.request

request = urllib.request.Request('<https://python.org>')
response = urllib.request.urlopen(request)
print(response.read().decode('utf-8'))
```


可以发现，我们依然是用 urlopen 方法来发送这个请求，只不过这次该方法的参数不再是 URL，而是一个 Request 类型的对象。通过构造这个数据结构，一方面我们可以将请求独立成一个对象，另一方面可更加丰富和灵活地配置参数。


它的构造方法如下：

> class urllib.request.Request(url, data=None, headers={}, origin_req_host=None, unverifiable=False, method=None)
> 1. 第一个参数 url 用于请求 URL，这是必传参数，其他都是可选参数。
> 2. 第二个参数 data 如果要传，必须传 bytes（字节流）类型的。如果它是字典，可以先用 urllib.parse 模块里的 urlencode() 编码。
> 3. 第三个参数 headers 是一个字典，它就是请求头，我们可以在构造请求时通过 headers 参数直接构造，也可以通过调用请求实例的 add_header() 方法添加。
> 添加请求头最常用的用法就是通过修改 User-Agent 来伪装浏览器，默认的 User-Agent 是 Python-urllib，我们可以通过修改它来伪装浏览器。比如要伪装火狐浏览器，你可以把它设置为：`Mozilla/5.0 (X11; U; Linux i686) Gecko/20071127 Firefox/`
> 4. 第四个参数 origin_req_host 指的是请求方的 host 名称或者 IP 地址。
> 5. 第五个参数 unverifiable 表示这个请求是否是无法验证的，默认是 False，意思就是说用户没有足够权限来选择接收这个请求的结果。例如，我们请求一个 HTML 文档中的图片，但是我们没有自动抓取图像的权限，这时 unverifiable 的值就是 True。
> 6. 第六个参数 method 是一个字符串，用来指示请求使用的方法，比如 GET、POST 和 PUT 等。
>

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


这里我们通过 4 个参数构造了一个请求，其中 url 即请求 URL，headers 中指定了 User-Agent 和 Host，参数 data 用 urlencode 和 bytes 方法转成字节流。另外，指定了请求方式为 POST。


运行结果如下：


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


观察结果可以发现，我们成功设置了 data、headers 和 method。


另外，headers 也可以用 add_header 方法来添加：


```python
req = request.Request(url=url, data=data, method='POST')
req.add_header('User-Agent', 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)')
```


如此一来，可以更加方便地构造请求，实现请求的发送。


### 高级用法


在上面的过程中，我们虽然可以构造请求，但是对于一些更高级的操作（比如 Cookies 处理、代理设置等），我们该怎么办呢？


接下来，就需要更强大的工具 Handler 登场了。简而言之，我们可以把它理解为各种处理器，有专门处理登录验证的，有处理 Cookies 的，有处理代理设置的。利用它们，我们几乎可以做到 HTTP 请求中所有的事情。


首先，介绍一下 urllib.request 模块里的 BaseHandler 类，它是所有其他 Handler 的父类，它提供了最基本的方法，例如 default_open、protocol_request 等。


接下来，就有各种 Handler 子类继承这个 BaseHandler 类，举例如下

- HTTPDefaultErrorHandler：用于处理 HTTP 响应错误，错误都会抛出 HTTPError 类型的异常。
- HTTPRedirectHandler：用于处理重定向。
- HTTPCookieProcessor：用于处理 Cookies。
- ProxyHandler：用于设置代理，默认代理为空。
- HTTPPasswordMgr：用于管理密码，它维护了用户名密码的表。
- HTTPBasicAuthHandler：用于管理认证，如果一个链接打开时需要认证，那么可以用它来解决认证问题。

另外还有其他的 Handler 类，在这不一一列举了，详情可以参考官方文档： [https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler](https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler)


另一个比较重要的类就是 OpenerDirector，我们可以称为 Opener。我们之前用过 urlopen 这个方法，实际上它就是 urllib 为我们提供的一个 Opener。


那么，为什么要引入 Opener 呢？因为需要实现更高级的功能。


Opener 可以使用 open 方法，返回的类型和 urlopen 如出一辙，同时可以利用 Handler 来构建 Opener。

- 验证

    有些网站在打开时就会弹出提示框，直接提示你输入用户名和密码，验证成功后才能查看页面。


    那么，如果要请求这样的页面，该怎么办呢？借助 HTTPBasicAuthHandler 就可以完成，相关代码如下：


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


    这里首先实例化 HTTPBasicAuthHandler 对象，其参数是 HTTPPasswordMgrWithDefaultRealm 对象，它利用 add_password 方法添加进去用户名和密码，这样就建立了一个处理验证的 Handler。


    接下来，利用这个 Handler 并使用 build_opener 方法构建一个 Opener，这个 Opener 在发送请求时就相当于已经验证成功了。然后，利用 Opener 的 open 方法打开链接，就可以完成验证了。这里获取到的结果就是验证后的页面源码内容。

- 代理

    有些网站会检测某一段时间某个 IP 的访问次数，如果访问次数过多，它会禁止你的访问。所以我们可以设置一些代理服务器，每隔一段时间换一个代理，就算 IP 被禁止，依然可以换个 IP 继续爬取。


    代理的设置也是通过 Handler 来实现的，这里介绍下 ProxyHandler 的用法：


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


    这里我们在本地搭建了一个代理，它运行在 9743 端口上。以及使用了 ProxyHandler，其参数是一个字典，键名是协议类型（比如 HTTP 或者 HTTPS 等），键值是代理链接，可以添加多个代理。


    然后，利用这个 Handler 及 build_opener 方法构造一个 Opener，之后发送请求即可。

- Cookies

    Cookies 的处理就需要相关的 Handler 了。


    ```python
    import http.cookiejar, urllib.request
    
    cookie = http.cookiejar.CookieJar()
    handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)
    response = opener.open('<http://www.baidu.com>')
    for item in cookie:
        print(item.name+"="+item.value)
    ```


    首先，我们必须声明一个 CookieJar 对象。接下来，就需要利用 HTTPCookieProcessor 来构建一个 Handler，最后利用 build_opener 方法构建出 Opener，执行 open 函数即可。


    可以看到，这里输出了每条 Cookie 的名称和值。


    也可以输出成文件格式，我们知道 Cookies 实际上也是以文本形式保存的。


    ```python
    filename = 'cookies.txt'
    cookie = http.cookiejar.MozillaCookieJar(filename)
    handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)
    response = opener.open('<http://www.baidu.com>')
    cookie.save(ignore_discard=True, ignore_expires=True)
    ```


    这时 CookieJar 就需要换成 MozillaCookieJar，它在生成文件时会用到，是 CookieJar 的子类，可以用来处理 Cookies 和文件相关的事件，比如读取和保存 Cookies，可以将 Cookies 保存成 Mozilla 型浏览器的 Cookies 格式。


    另外，LWPCookieJar 同样可以读取和保存 Cookies，但是保存的格式和 MozillaCookieJar 不一样，它会保存成 libwww-perl(LWP) 格式的 Cookies 文件。


    要保存成 LWP 格式的 Cookies 文件，可以在声明时就改为：`cookie = http.cookiejar.LWPCookieJar(filename)`


    那么，生成了 Cookies 文件后，怎样从文件中读取并利用？


    ```python
    cookie = http.cookiejar.LWPCookieJar()
    cookie.load('cookies.txt', ignore_discard=True, ignore_expires=True)
    handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)
    response = opener.open('<http://www.baidu.com>')
    print(response.read().decode('utf-8'))
    ```


    可以看到，这里调用 load 方法来读取本地的 Cookies 文件，获取到了 Cookies 的内容。不过前提是我们首先生成了 LWPCookieJar 格式的 Cookies，并保存成文件，然后读取 Cookies 之后使用同样的方法构建 Handler 和 Opener 即可完成操作。


    运行结果正常的话，会输出百度网页的源代码。


    通过上面的方法，我们可以实现绝大多数请求功能的设置了。


    这便是 urllib 库中 request 模块的基本用法，如果想实现更多的功能，可以参考官方文档的说明： [https://docs.python.org/3/library/urllib.request.html#basehandler-objects](https://docs.python.org/3/library/urllib.request.html#basehandler-objects)


## 处理异常


前一节我们了解了请求的发送过程，但是在网络不好的情况下，如果出现了异常，该怎么办呢？这时如果不处理这些异常，程序很可能因报错而终止运行，所以异常处理还是十分有必要的。
urllib 的 error 模块定义了由 request 模块产生的异常。如果出现了问题，request 模块便会抛出 error 模块中定义的异常。


### URLError


URLError 类来自 urllib 库的 error 模块，它继承自 OSError 类，是 error 异常模块的基类，由 request 模块产生的异常都可以通过捕获这个类来处理。
它具有一个属性 reason，即返回错误的原因。


```python
from urllib import request, error
try:
    response = request.urlopen('<https://cuiqingcai.com/index.htm>')
except error.URLError as e:
    print(e.reason)
```


我们打开一个不存在的页面，照理来说应该会报错，但是这时我们捕获了 URLError 这个异常，运行结果如下：
`Not Found`
程序没有直接报错，而是输出了如上内容，这样通过如上操作，我们就可以避免程序异常终止，同时异常得到了有效处理。


### HTTPError


它是 URLError 的子类，专门用来处理 HTTP 请求错误，比如认证请求失败等。它有如下 3 个属性。

- code：返回 HTTP 状态码，比如 404 表示网页不存在，500 表示服务器内部错误等。
- reason：同父类一样，用于返回错误的原因。
- headers：返回请求头。

```python
from urllib import request,error
try:
    response = request.urlopen('<https://cuiqingcai.com/index.htm>')
except error.HTTPError as e:
    print(e.reason, e.code, e.headers, sep='\\n')
```


运行结果如下：


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


依然是同样的网址，这里捕获了 HTTPError 异常，输出了 reason、code 和 headers 属性。
因为 URLError 是 HTTPError 的父类，所以可以先选择捕获子类的错误，再去捕获父类的错误，所以上述代码更好的写法如下：


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


这样就可以做到先捕获 HTTPError，获取它的错误状态码、原因、headers 等信息。如果不是 HTTPError 异常，就会捕获 URLError 异常，输出错误原因。最后，用 else 来处理正常的逻辑。这是一个较好的异常处理写法。
有时候，reason 属性返回的不一定是字符串，也可能是一个对象。


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


这里我们直接设置超时时间来强制抛出 timeout 异常。
运行结果如下：
`<class'socket.timeout'> TIME OUT`
可以发现，reason 属性的结果是 socket.timeout 类。所以，这里我们可以用 isinstance 方法来判断它的类型，作出更详细的异常判断。


## 解析链接


前面说过，urllib 库里还提供了 parse 模块，它定义了处理 URL 的标准接口，例如实现 URL 各部分的抽取、合并以及链接转换。它支持如下协议的 URL 处理：file、ftp、gopher、hdl、http、https、imap、mailto、 mms、news、nntp、prospero、rsync、rtsp、rtspu、sftp、 sip、sips、snews、svn、svn+ssh、telnet 和 wais。本节中，我们介绍一下该模块中常用的方法来看一下它的便捷之处。


### urlparse


该方法可以实现 URL 的识别和分段


```python
from urllib.parse import urlparse

result = urlparse('<http://www.baidu.com/index.html;user?id=5#comment>')
print(type(result), result)
```


`<class 'urllib.parse.ParseResult'> ParseResult(scheme='http', netloc='www.baidu.com', path='/index.html', params='user', query='id=5', fragment='comment')`


可以看到，返回结果是一个 ParseResult 类型的对象，它包含 6 个部分，分别是 scheme、netloc、path、params、query 和 fragment。


可以发现，urlparse 方法将其拆分成了 6 个部分。大体观察可以发现，解析时有特定的分隔符。比如，:// 前面的就是 scheme，代表协议；第一个 / 符号前面便是 netloc，即域名，后面是 path，即访问路径；分号；后面是 params，代表参数；问号？后面是查询条件 query，一般用作 GET 类型的 URL；井号 #后面是锚点，用于直接定位页面内部的下拉位置。


所以，可以得出一个标准的链接格式，具体如下：


scheme://netloc/path;params?query#fragment


一个标准的 URL 都会符合这个规则，利用 urlparse 方法可以将它拆分开来。


```python
# API配置
urllib.parse.urlparse(urlstring, scheme='', allow_fragments=True)
```


可以看到，它有 3 个参数。

- urlstring：这是必填项，即待解析的 URL。
- scheme：它是默认的协议（比如 http 或 https 等）。
scheme 参数只有在 URL 中不包含 scheme 信息时才生效。如果 URL 中有 scheme 信息，就会返回解析出的 scheme。
- allow_fragments：即是否忽略 fragment。如果它被设置为 False，fragment 部分就会被忽略，它会被解析为 path、parameters 或者 query 的一部分，而 fragment 部分为空。

### urlunparse


有了 urlparse 方法，相应地就有了它的对立方法 urlunparse。它接受的参数是一个可迭代对象，但是它的长度必须是 6，否则会抛出参数数量不足或者过多的问题。


```python
from urllib.parse import urlunparse

data = ['http', 'www.baidu.com', 'index.html', 'user', 'a=6', 'comment']
print(urlunparse(data))
```


这里参数 data 用了列表类型。当然，你也可以用其他类型，比如元组或者特定的数据结构。


`http://www.baidu.com/index.html;user?a=6#comment`


### urlsplit


这个方法和 urlparse 方法非常相似，只不过它不再单独解析 params 这一部分，只返回 5 个结果。上面例子中的 params 会合并到 path 中。


```python
from urllib.parse import urlsplit

result = urlsplit('<http://www.baidu.com/index.html;user?id=5#comment>')
print(result)
```


返回结果是 SplitResult，它其实也是一个元组类型，既可以用属性获取值，也可以用索引来获取。


### urlunsplit


与 urlunparse 方法类似，它也是将链接各个部分组合成完整链接的方法，传入的参数也是一个可迭代对象，例如列表、元组等，唯一的区别是长度必须为 5。


```python
from urllib.parse import urlunsplit

data = ['http', 'www.baidu.com', 'index.html', 'a=6', 'comment']
print(urlunsplit(data))
```


`http://www.baidu.com/index.html?a=6#comment`


### urljoin


有了 urlunparse 和 urlunsplit 方法，我们可以完成链接的合并，不过前提必须要有特定长度的对象，链接的每一部分都要清晰分开。
此外，生成链接还有另一个方法，那就是 urljoin 方法。我们可以提供一个 base_url（基础链接）作为第一个参数，将新的链接作为第二个参数，该方法会分析 base_url 的 scheme、netloc 和 path 这 3 个内容并对新链接缺失的部分进行补充，最后返回结果。


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


运行结果如下：


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


可以发现，base_url 提供了三项内容 scheme、netloc 和 path。如果这 3 项在新的链接里不存在，就予以补充；如果新的链接存在，就使用新的链接的部分。而 base_url 中的 params、query 和 fragment 是不起作用的。
通过 urljoin 方法，我们可以轻松实现链接的解析、拼合与生成。


### urlencode


这里我们再介绍一个常用的方法 ——urlencode，它在构造 GET 请求参数的时候非常有用


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


这里首先声明了一个字典来将参数表示出来，然后调用 urlencode 方法将其序列化为 GET 请求参数。


`http://www.baidu.com?name=germey&amp;age=22`


可以看到，参数就成功地由字典类型转化为 GET 请求参数了。
这个方法非常常用。有时为了更加方便地构造参数，我们会事先用字典来表示。要转化为 URL 的参数时，只需要调用该方法即可。


### parse_qs


有了序列化，必然就有反序列化。如果我们有一串 GET 请求参数，利用 parse_qs 方法，就可以将它转回字典，示例如下：


```python
from urllib.parse import parse_qs

query = 'name=germey&amp;age=22'
print(parse_qs(query))
```


### parse_qsl


另外，还有一个 parse_qsl 方法，它用于将参数转化为元组组成的列表


```python
from urllib.parse import parse_qsl

query = 'name=germey&amp;age=22'
print(parse_qsl(query))
```


### quote


该方法可以将内容转化为 URL 编码的格式。URL 中带有中文参数时，有时可能会导致乱码的问题，此时用这个方法可以将中文字符转化为 URL 编码


```python
from urllib.parse import quote

keyword = ' 壁纸 '
url = '<https://www.baidu.com/s?wd=>' + quote(keyword)
print(url)
```


这里我们声明了一个中文的搜索文字，然后用 quote 方法对其进行 URL 编码，最后得到的结果如下：


`https://www.baidu.com/s?wd=% E5% A3%81% E7% BA% B8`


### unquote


有了 quote 方法，当然还有 unquote 方法，它可以进行 URL 解码，示例如下：


```python
from urllib.parse import unquote

url = '<https://www.baidu.com/s?wd=%> E5% A3%81% E7% BA% B8'
print(unquote(url))
```


这是上面得到的 URL 编码后的结果，这里利用 unquote 方法还原，结果如下：


`https://www.baidu.com/s?wd = 壁纸`


可以看到，利用 unquote 方法可以方便地实现解码。


## 分析 Robots 协议


利用 urllib 的 robotparser 模块，我们可以实现网站 Robots 协议的分析。本节中，我们来简单了解一下该模块的用法。


### Robots 协议


Robots 协议也称作爬虫协议、机器人协议，它的全名叫作网络爬虫排除标准（Robots Exclusion Protocol），用来告诉爬虫和搜索引擎哪些页面可以抓取，哪些不可以抓取。它通常是一个叫作 robots.txt 的文本文件，一般放在网站的根目录下。
当搜索爬虫访问一个站点时，它首先会检查这个站点根目录下是否存在 robots.txt 文件，如果存在，搜索爬虫会根据其中定义的爬取范围来爬取。如果没有找到这个文件，搜索爬虫便会访问所有可直接访问的页面。
下面我们看一个 robots.txt 的样例：


```plain text
User-agent: *
Disallow: /
Allow: /public/3
```


这实现了对所有搜索爬虫只允许爬取 public 目录的功能，将上述内容保存成 robots.txt 文件，放在网站的根目录下，和网站的入口文件（比如 index.php、index.html 和 index.jsp 等）放在一起。
上面的 User-agent 描述了搜索爬虫的名称，这里将其设置为`*` 则代表该协议对任何爬取爬虫有效。比如，我们可以设置：
`User-agent: Baiduspider`
这就代表我们设置的规则对百度爬虫是有效的。如果有多条 User-agent 记录，则就会有多个爬虫会受到爬取限制，但至少需要指定一条。
`Disallow` 指定了不允许抓取的目录，比如上例子中设置为 `/` 则代表不允许抓取所有页面。
`Allow` 一般和 `Disallow` 一起使用，一般不会单独使用，用来排除某些限制。现在我们设置为 `/public/`，则表示所有页面不允许抓取，但可以抓取 `public` 目录。
下面我们再来看几个例子。


```plain text
<!-- 禁止所有爬虫访问任何目录的代码如下： -->
User-agent: *
Disallow: /
<!-- 允许所有爬虫访问任何目录的代码如下： -->
User-agent: *
Disallow:
<!-- 另外，直接把 robots.txt 文件留空也是可以的。 -->
<!-- 禁止所有爬虫访问网站某些目录的代码如下： -->
User-agent: *
Disallow: /private/
Disallow: /tmp/
<!-- 只允许某一个爬虫访问的代码如下： -->
User-agent: WebCrawler
Disallow:
User-agent: *
Disallow: /
```


这些是 robots.txt 的一些常见写法。


### 爬虫名称


大家可能会疑惑，爬虫名是哪儿来的？为什么就叫这个名？其实它是有固定名字的了，比如百度的就叫作 BaiduSpider。


| 爬虫名称        | 名　　称      | 网　　站                                             |
| ----------- | --------- | ------------------------------------------------ |
| BaiduSpider | 百度        | <[www.baidu.com](http://www.baidu.com/)>         |
| Googlebot   | 谷歌        | <[www.google.com](http://www.google.com/)>       |
| 360Spider   | 360 搜索    | <[www.so.com](http://www.so.com/)>               |
| YodaoBot    | 有道        | <[www.youdao.com](http://www.youdao.com/)>       |
| ia_archiver | Alexa     | <[www.alexa.cn](http://www.alexa.cn/)>           |
| Scooter     | altavista | <[www.altavista.com](http://www.altavista.com/)> |


### robotparser


了解 Robots 协议之后，我们就可以使用 robotparser 模块来解析 robots.txt 了。该模块提供了一个类 RobotFileParser，它可以根据某网站的 robots.txt 文件来判断一个爬取爬虫是否有权限来爬取这个网页。


该类用起来非常简单，只需要在构造方法里传入 robots.txt 的链接即可。首先看一下它的声明：


`urllib.robotparser.RobotFileParser(url='')`


当然，也可以在声明时不传入，默认为空，最后再使用 set_url() 方法设置一下也可。


下面列出了这个类常用的几个方法。

- set_url ：用来设置 robots.txt 文件的链接。如果在创建 RobotFileParser 对象时传入了链接，那么就不需要再使用这个方法设置了。
- read：读取 robots.txt 文件并进行分析。注意，这个方法执行一个读取和分析操作，如果不调用这个方法，接下来的判断都会为 False，所以一定记得调用这个方法。这个方法不会返回任何内容，但是执行了读取操作。
- parse：用来解析 robots.txt 文件，传入的参数是 robots.txt 某些行的内容，它会按照 robots.txt 的语法规则来分析这些内容。
can_fetch：该方法传入两个参数，第一个是 User-agent，第二个是要抓取的 URL。返回的内容是该搜索引擎是否可以抓取这个 URL，返回结果是 True 或 False。
- mtime：返回的是上次抓取和分析 robots.txt 的时间，这对于长时间分析和抓取的搜索爬虫是很有必要的，你可能需要定期检查来抓取最新的 robots.txt。
- modified：它同样对长时间分析和抓取的搜索爬虫很有帮助，将当前时间设置为上次抓取和分析 robots.txt 的时间。

下面我们用实例来看一下：


```python
from urllib.robotparser import RobotFileParser
rp = RobotFileParser()
rp.set_url('<http://www.jianshu.com/robots.txt>')
rp.read()
print(rp.can_fetch('*', '<http://www.jianshu.com/p/b67554025d7d>'))
print(rp.can_fetch('*', "<http://www.jianshu.com/search?q=python&page=1&type=collections>"))
```


这里以简书为例，首先创建 RobotFileParser 对象，然后通过 set_url 方法设置了 robots.txt 的链接。当然，不用这个方法的话，可以在声明时直接用如下方法设置：
`rp = RobotFileParser('<http://www.jianshu.com/robots.txt>')`
接着利用 can_fetch 方法判断了网页是否可以被抓取。
运行结果如下：


```plain text
True
False
```


这里同样可以使用 parse 方法执行读取和分析，示例如下：


```python
from urllib.robotparser import RobotFileParser
from urllib.request import urlopen
rp = RobotFileParser()
rp.parse(urlopen('<http://www.jianshu.com/robots.txt').read().decode('utf-8').split('\\n>'))
print(rp.can_fetch('*', '<http://www.jianshu.com/p/b67554025d7d>'))
print(rp.can_fetch('*', "<http://www.jianshu.com/search?q=python&page=1&type=collections>"))
```


# requests


上一节中，我们了解了 urllib 的基本用法，但是其中确实有不方便的地方，比如处理网页验证和 Cookies 时，需要写 Opener 和 Handler 来处理。为了更加方便地实现这些操作，就有了更为强大的库 requests，有了它，Cookies、登录验证、代理设置等操作都不是事儿。
接下来，让我们领略一下它的强大之处吧。


## 基本用法

1. 准备工作
在开始之前，请确保已经正确安装好了 requests 库。
2. 实例引入
urllib 库中的 urlopen 方法实际上是以 GET 方式请求网页，而 requests 中相应的方法就是 get 方法。下面通过实例来看一下：

    ```python
    import requests
    
    r = requests.get('<https://www.baidu.com/>')
    print(type(r))
    print(r.status_code)
    print(type(r.text))
    print(r.text)
    print(r.cookies)
    ```


    运行结果如下：


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
    <RequestsCookieJar[<Cookie BIDUPSID=992C3B26F4C4D09505C5E959D5FBC005 for .baidu.com/>, <Cookie
    PSTM=1472227535 for .baidu.com/>, <Cookie __bsi=15304754498609545148_00_40_N_N_2_0303_C02F_N_N_N_0
    for .www.baidu.com/>, <Cookie BD_NOT_HTTPS=1 for www.baidu.com/>]>
    ```


    这里我们调用 get 方法实现与 urlopen 相同的操作，得到一个 Response 对象，然后分别输出了 Response 的类型、状态码、响应体的类型、内容以及 Cookies。


    通过运行结果可以发现，它的返回类型是 requests.models.Response，响应体的类型是字符串 str，Cookies 的类型是 RequestsCookieJar。


    使用 get 方法成功实现一个 GET 请求，这倒不算什么，更方便之处在于其他的请求类型依然可以用一句话来完成，示例如下：


    ```python
    r = requests.post('<http://httpbin.org/post>')
    r = requests.put('<http://httpbin.org/put>')
    r = requests.delete('<http://httpbin.org/delete>')
    r = requests.head('<http://httpbin.org/get>')
    r = requests.options('<http://httpbin.org/get>')
    ```


    这里分别用 post、put、delete 等方法实现了 POST、PUT、DELETE 等请求。

3. GET 请求

    HTTP 中最常见的请求之一就是 GET 请求，下面首先来详细了解一下利用 requests 构建 GET 请求的方法。
    基本实例
    首先，构建一个最简单的 GET 请求，请求的链接为 [http://httpbin.org/get](http://httpbin.org/get)，该网站会判断如果客户端发起的是 GET 请求的话，它返回相应的请求信息：


    ```python
    import requests
    
    r = requests.get('<http://httpbin.org/get>')
    print(r.text)
    ```


    运行结果如下：


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


    可以发现，我们成功发起了 GET 请求，返回结果中包含请求头、URL、IP 等信息。
    那么，对于 GET 请求，如果要附加额外的信息，利用 params 这个参数进行存储


    ```python
    import requests
    
    data = {
        'name': 'germey',
        'age': 22
    }
    r = requests.get("<http://httpbin.org/get>", params=data)
    print(r.text)
    ```


    请求的链接会被自动被构造成：[http://httpbin.org/get?age=22&name=germey。](http://httpbin.org/get?age=22&name=germey%E3%80%82)


    另外，网页的返回类型实际上是 str 类型，但是它很特殊，是 JSON 格式的。所以，如果想直接解析返回结果，得到一个字典格式的话，可以直接调用 json 方法。示例如下：


    ```python
    import requests
    
    r = requests.get("<http://httpbin.org/get>")
    print(type(r.text))
    print(r.json())
    print(type(r.json()))
    ```


    调用 json 方法，就可以将返回结果是 JSON 格式的字符串转化为字典。


    但需要注意的是，如果返回结果不是 JSON 格式，便会出现解析错误，抛出 json.decoder.JSONDecodeError 异常。

    - 抓取网页
    上面的请求链接返回的是 JSON 形式的字符串，那么如果请求普通的网页，则肯定能获得相应的内容了。下面以 “知乎”→“发现” 页面为例来看一下：

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


        这里我们加入了 headers 信息，其中包含了 User-Agent 字段信息，也就是浏览器标识信息。如果不加这个，知乎会禁止抓取。

    - 抓取二进制数据

        在上面的例子中，我们抓取的是知乎的一个页面，实际上它返回的是一个 HTML 文档。如果想抓取图片、音频、视频等文件，应该怎么办呢？
        图片、音频、视频这些文件本质上都是由二进制码组成的，由于有特定的保存格式和对应的解析方式，我们才可以看到这些形形色色的多媒体。所以，想要抓取它们，就要拿到它们的二进制码。


        下面以 GitHub 的站点图标为例来看一下：


        ```python
        import requests
        
        r = requests.get("<https://github.com/favicon.ico>")
        print(r.text)
        print(r.content)
        ```


        这里抓取的内容是站点图标，也就是在浏览器每一个标签上显示的小图标


        接着，我们将刚才提取到的图片保存下来：


        ```python
        import requests
        
        r = requests.get("<https://github.com/favicon.ico>")
        with open('favicon.ico', 'wb') as f:
            f.write(r.content)
        ```


        这里用了 open 方法，它的第一个参数是文件名称，第二个参数代表以二进制写的形式打开，可以向文件里写入二进制数据。


        运行结束之后，可以发现在文件夹中出现了名为 favicon.ico 的图标。


        同样地，音频和视频文件也可以用这种方法获取。

    - 添加 headers

        与 urllib.request 一样，我们也可以通过 headers 参数来传递头信息。


        ```python
        import requests
        
        headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'
        }
        r = requests.get("<https://www.zhihu.com/explore>", headers=headers)
        print(r.text)
        ```


        当然，我们可以在 headers 这个参数中任意添加其他的字段信息。

4. POST 请求

    前面我们了解了最基本的 GET 请求，另外一种比较常见的请求方式是 POST


    ```python
    import requests
    
    data = {'name': 'germey', 'age': '22'}
    r = requests.post("<http://httpbin.org/post>", data=data)
    print(r.text)
    ```

5. 响应

    发送请求后，得到的自然就是响应。在上面的实例中，我们使用 text 和 content 获取了响应的内容。此外，还有很多属性和方法可以用来获取其他信息，比如状态码、响应头、Cookies 等。


    ```python
    import requests
    
    r = requests.get('<http://www.jianshu.com>')
    print(type(r.status_code), r.status_code)
    print(type(r.headers), r.headers)
    print(type(r.cookies), r.cookies)
    print(type(r.url), r.url)
    print(type(r.history), r.history)
    ```


    这里分别打印输出 status_code 属性得到状态码，输出 headers 属性得到响应头，输出 cookies 属性得到 Cookies，输出 url 属性得到 URL，输出 history 属性得到请求历史。


    状态码常用来判断请求是否成功，而 requests 还提供了一个内置的状态码查询对象 requests.codes


    ```python
    import requests
    
    r = requests.get('<http://www.jianshu.com>')
    exit() if not r.status_code == requests.codes.ok else print('Request Successfully')
    ```


    这里通过比较返回码和内置的成功的返回码，来保证请求得到了正常响应，输出成功请求的消息，否则程序终止，这里我们用 requests.codes.ok 得到的是成功的状态码 200。.


    下面列出了返回码和相应的查询条件：


    ```plain text
    # 信息性状态码
    
    100: ('continue',),
    101: ('switching_protocols',),
    102: ('processing',),
    103: ('checkpoint',),
    122: ('uri_too_long', 'request_uri_too_long'),
    
    # 成功状态码
    
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
    
    # 重定向状态码
    
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
    
    # 客户端错误状态码
    
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
    
    # 服务端错误状态码
    
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


    比如，如果想判断结果是不是 404 状态，可以用 requests.codes.not_found 来比对。


## requests高级用法


在前一节中，我们了解了 requests 的基本用法，如基本的 GET、POST 请求以及 Response 对象。本节中，我们再来了解下 requests 的一些高级用法，如文件上传、Cookies 设置、代理设置等。

1. 文件上传

    我们知道 requests 可以模拟提交一些数据。假如有的网站需要上传文件，我们也可以用它来实现


    ```python
    import requests
    
    files = {'file': open('favicon.ico', 'rb')}
    r = requests.post('<http://httpbin.org/post>', files=files)
    print(r.text)
    ```


    这个网站会返回响应，里面包含 files 这个字段，而 form 字段是空的，这证明文件上传部分会单独有一个 files 字段来标识。

2. Cookies

    前面我们使用 urllib 处理过 Cookies，写法比较复杂，而有了 requests，获取和设置 Cookies 只需一步即可完成。


    ```python
    import requests
    
    r = requests.get('<https://www.baidu.com>')
    print(r.cookies)
    for key, value in r.cookies.items():
        print(key + '=' + value)
    ```


    这里我们首先调用 cookies 属性即可成功得到 Cookies，可以发现它是 RequestCookieJar 类型。然后用 items 方法将其转化为元组组成的列表，遍历输出每一个 Cookie 的名称和值，实现 Cookie 的遍历解析。


    当然，我们也可以直接用 Cookie 来维持登录状态，下面以知乎为例来说明。


    首先登录知乎，将 Headers 中的 Cookie 内容复制下来，将其设置到 Headers 里面，然后发送请求


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


    当然，你也可以通过 cookies 参数来设置，不过这样就需要构造 RequestsCookieJar 对象，而且需要分割一下 cookies。这相对烦琐，不过效果是相同的


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


    这里我们首先新建了一个 RequestCookieJar 对象，然后将复制下来的 cookies 利用 split 方法分割，接着利用 set 方法设置好每个 Cookie 的 key 和 value，然后通过调用 requests 的 get() 方法并传递给 cookies 参数即可。当然，由于知乎本身的限制，headers 参数也不能少，只不过不需要在原来的 headers 参数里面设置 cookie 字段了。


    测试后，发现同样可以正常登录知乎。

3. 会话维持

    在 requests 中，如果直接利用 get 或 post 等方法的确可以做到模拟网页的请求，但是这实际上是相当于不同的会话，也就是说相当于你用了两个浏览器打开了不同的页面。


    设想这样一个场景，第一个请求利用 post 方法登录了某个网站，第二次想获取成功登录后的自己的个人信息，你又用了一次 get 方法去请求个人信息页面。实际上，这相当于打开了两个浏览器，是两个完全不相关的会话，能成功获取个人信息吗？那当然不能。


    其实解决这个问题的主要方法就是维持同一个会话，也就是相当于打开一个新的浏览器选项卡而不是新开一个浏览器。但是我又不想每次设置 cookies，那该怎么办呢？这时候就有了新的利器 ——Session 对象。


    利用它，我们可以方便地维护一个会话，而且不用担心 cookies 的问题，它会帮我们自动处理好。


    ```python
    import requests
    
    s = requests.Session()
    s.get('<http://httpbin.org/cookies/set/number/123456789>')
    r = s.get('<http://httpbin.org/cookies>')
    print(r.text)
    ```


    所以，利用 Session，可以做到模拟同一个会话而不用担心 Cookies 的问题。它通常用于模拟登录成功之后再进行下一步的操作。
    Session 在平常用得非常广泛，可以用于模拟在一个浏览器中打开同一站点的不同页面

4. SSL 证书验证

    此外，requests 还提供了证书验证的功能。当发送 HTTP 请求的时候，它会检查 SSL 证书，我们可以使用 verify 参数控制是否检查此证书。其实如果不加 verify 参数的话，默认是 True，会自动验证。


    如果请求一个 HTTPS 站点，但是证书验证错误的页面时，就会提示错误 SSLError，表示证书验证错误。那么如何避免这个错误呢？把 verify 参数设置为 False 即可。


    ```python
    import requests
    
    response = requests.get('<https://www.12306.cn>', verify=False)
    print(response.status_code)
    ```


    当然，我们也可以指定一个本地证书用作客户端证书，这可以是单个文件（包含密钥和证书）或一个包含两个文件路径的元组：


    ```python
    import requests
    
    response = requests.get('<https://www.12306.cn>', cert=('/path/server.crt', '/path/key'))
    print(response.status_code)
    ```


    注意，本地私有证书的 key 必须是解密状态，加密状态的 key 是不支持的。

5. 代理设置

    对于某些网站，在测试的时候请求几次，能正常获取内容。但是一旦开始大规模爬取，对于大规模且频繁的请求，网站可能会弹出验证码，或者跳转到登录认证页面，更甚者可能会直接封禁客户端的 IP，导致一定时间段内无法访问。
    那么，为了防止这种情况发生，我们需要设置代理来解决这个问题，这就需要用到 proxies 参数。可以用这样的方式设置：


    ```python
    import requests
    
    proxies = {
    'http': '<http://10.10.1.10:3128>',
    'https': '<http://10.10.1.10:1080>',
    }
    
    requests.get('<https://www.taobao.com>', proxies=proxies)
    ```


    当然，直接运行这个实例可能不行，因为这个代理可能是无效的，请换成自己的有效代理试验一下。


    若代理需要使用 HTTP Basic Auth，可以使用类似 [http://user:password@host:port](http://user:password@host/:port) 这样的语法来设置代理，示例如下：


    ```python
    import requests
    
    proxies = {'https': '<http://user:password@10.10.1.10:3128/',}>
    requests.get('<https://www.taobao.com>', proxies=proxies)
    ```


    除了基本的 HTTP 代理外，requests 还支持 SOCKS 协议的代理。
    首先，需要安装 socks 这个库：
    `pip3 install"requests[socks]"`
    然后就可以使用 SOCKS 协议代理了，示例如下：


    ```python
    import requests
    
    proxies = {
        'http': 'socks5://user:password@host:port',
        'https': 'socks5://user:password@host:port'
    }
    requests.get('<https://www.taobao.com>', proxies=proxies)
    ```

6. 超时设置

    在本机网络状况不好或者服务器网络响应太慢甚至无响应时，我们可能会等待特别久的时间才可能收到响应，甚至到最后收不到响应而报错。为了防止服务器不能及时响应，应该设置一个超时时间，即超过了这个时间还没有得到响应，那就报错。这需要用到 timeout 参数。这个时间的计算是发出请求到服务器返回响应的时间。


    ```python
    import requests
    
    r = requests.get('<https://www.taobao.com>', timeout=1)
    print(r.status_code)
    ```


    通过这样的方式，我们可以将超时时间设置为 1 秒，如果 1 秒内没有响应，那就抛出异常。
    实际上，请求分为两个阶段，即连接（connect）和读取（read）。
    上面设置的 timeout 将用作连接和读取这二者的 timeout 总和。
    如果要分别指定，就可以传入一个元组：
    `r = requests.get('<https://www.taobao.com>', timeout=(5, 30))`
    如果想永久等待，可以直接将 timeout 设置为 None，或者不设置直接留空，因为默认是 None。这样的话，如果服务器还在运行，但是响应特别慢，那就慢慢等吧，它永远不会返回超时错误的。其用法如下：
    `r = requests.get('<https://www.taobao.com>', timeout=None)`
    或直接不加参数：
    `r = requests.get('<https://www.taobao.com>')`

7. 身份认证

    在访问网站时，我们可能会遇到登录认证的页面。


    此时可以使用 requests 自带的身份认证功能


    ```python
    import requests
    from requests.auth import HTTPBasicAuth
    
    r = requests.get('<http://localhost:5000>', auth=HTTPBasicAuth('username', 'password'))
    print(r.status_code)
    ```


    如果用户名和密码正确的话，请求时就会自动认证成功，会返回 200 状态码；如果认证失败，则返回 401 状态码。
    当然，如果参数都传一个 HTTPBasicAuth 类，就显得有点烦琐了，所以 requests 提供了一个更简单的写法，可以直接传一个元组，它会默认使用 HTTPBasicAuth 这个类来认证。


    所以上面的代码可以直接简写如下：


    ```python
    import requests
    
    r = requests.get('<http://localhost:5000>', auth=('username', 'password'))
    print(r.status_code)
    ```


    此外，requests 还提供了其他认证方式，如 OAuth 认证，不过此时需要安装 oauth 包，安装命令如下：
    `pip3 install requests_oauthlib`
    使用 OAuth1 认证的方法如下：


    ```python
    import requests
    from requests_oauthlib import OAuth1
    
    url = '<https://api.twitter.com/1.1/account/verify_credentials.json>'
    auth = OAuth1('YOUR_APP_KEY', 'YOUR_APP_SECRET',
                'USER_OAUTH_TOKEN', 'USER_OAUTH_TOKEN_SECRET')
    requests.get(url, auth=auth)
    ```


    更多详细的功能就可以参考 requests_oauthlib 的官方文档：[https://requests-oauthlib.readthedocs.org/](https://requests-oauthlib.readthedocs.org/)

8. Prepared Request

    前面介绍 urllib 时，我们可以将请求表示为数据结构，其中各个参数都可以通过一个 Request 对象来表示。这在 requests 里同样可以做到，这个数据结构就叫 Prepared Request


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


    这里我们引入了 Request，然后用 url、data 和 headers 参数构造了一个 Request 对象，这时需要再调用 Session 的 prepare_request 方法将其转换为一个 Prepared Request 对象，然后调用 send 方法发送即可


    有了 Request 这个对象，就可以将请求当作独立的对象来看待，这样在进行队列调度时会非常方便。后面我们会用它来构造一个 Request 队列。


更多的用法可以参考 Requests 的官方文档：[http://docs.python-requests.org/](http://docs.python-requests.org/)


# 正则表达式


本节中，我们看一下正则表达式的相关用法。正则表达式是处理字符串的强大工具，它有自己特定的语法结构，有了它，实现字符串的检索、替换、匹配验证都不在话下。


当然，对于爬虫来说，有了它，从 HTML 里提取想要的信息就非常方便了。


## 实例引入


说了这么多，可能我们对它到底是个什么还是比较模糊，下面就用几个实例来看一下正则表达式的用法。


打开开源中国提供的正则表达式测试工具 [http://tool.oschina.net/regex/](http://tool.oschina.net/regex/)，输入待匹配的文本，然后选择常用的正则表达式，就可以得出相应的匹配结果了。例如，这里输入待匹配的文本如下：


```plain text
Hello, my phone number is 010-86432100 and email is <cqc@cuiqingcai.com>, and my website is <https://cuiqingcai.com>.
```


这段字符串中包含了一个电话号码和一个电子邮件，接下来就尝试用正则表达式提取出来。


电子邮件开头是一段字符串，然后是一个 @符号，最后是某个域名，这是有特定的组成格式的。另外，对于 URL，开头是协议类型，然后是冒号加双斜线，最后是域名加路径。


对于 URL 来说，可以用下面的正则表达式匹配：


`[a-zA-z]+://[^\\s]*`


用这个正则表达式去匹配一个字符串，如果这个字符串中包含类似 URL 的文本，那就会被提取出来。


这个正则表达式看上去是乱糟糟的一团，其实不然，这里面都是有特定的语法规则的。比如，a-z 代表匹配任意的小写字母，\s 表示匹配任意的空白字符，* 就代表匹配前面的字符任意多个，这一长串的正则表达式就是这么多匹配规则的组合。


写好正则表达式后，就可以拿它去一个长字符串里匹配查找了。不论这个字符串里面有什么，只要符合我们写的规则，统统可以找出来。对于网页来说，如果想找出网页源代码里有多少 URL，用匹配 URL 的正则表达式去匹配即可。


常用的匹配规则


| 模　　式   | 描　　述                                            |
| ------ | ----------------------------------------------- |
| \w     | 匹配字母、数字及下划线                                     |
| \W     | 匹配不是字母、数字及下划线的字符                                |
| \s     | 匹配任意空白字符，等价于 [\t\n\r\f]                         |
| \S     | 匹配任意非空字符                                        |
| \d     | 匹配任意数字，等价于 [0-9]                                |
| \D     | 匹配任意非数字的字符                                      |
| \A     | 匹配字符串开头                                         |
| \Z     | 匹配字符串结尾，如果存在换行，只匹配到换行前的结束字符串                    |
| \z     | 匹配字符串结尾，如果存在换行，同时还会匹配换行符                        |
| \G     | 匹配最后匹配完成的位置                                     |
| \n     | 匹配一个换行符                                         |
| \t     | 匹配一个制表符                                         |
| ^      | 匹配一行字符串的开头                                      |
| $      | 匹配一行字符串的结尾                                      |
| .      | 匹配任意字符，除了换行符，当 re.DOTALL 标记被指定时，则可以匹配包括换行符的任意字符 |
| [...]  | 用来表示一组字符，单独列出，比如 [amk] 匹配 a、m 或 k               |
| ^      | 不在 [] 中的字符，比如  匹配除了 a、b、c 之外的字符                 |
| *      | 匹配 0 个或多个表达式                                    |
| +      | 匹配 1 个或多个表达式                                    |
| ?      | 匹配 0 个或 1 个前面的正则表达式定义的片段，非贪婪方式                  |
| {n}    | 精确匹配 n 个前面的表达式                                  |
| {n, m} | 匹配 n 到 m 次由前面正则表达式定义的片段，贪婪方式                    |
| a|b    | 匹配 a 或 b                                        |
| ( )    | 匹配括号内的表达式，也表示一个组                                |


其实正则表达式不是 Python 独有的，它也可以用在其他编程语言中。但是 Python 的 re 库提供了整个正则表达式的实现，利用这个库，可以在 Python 中使用正则表达式。在 Python 中写正则表达式几乎都用这个库，下面就来了解它的一些常用方法。


## match


这里首先介绍第一个常用的匹配方法 —— match，向它传入要匹配的字符串以及正则表达式，就可以检测这个正则表达式是否匹配字符串。
match 方法会尝试从字符串的起始位置匹配正则表达式，如果匹配，就返回匹配成功的结果；如果不匹配，就返回 None。示例如下：


```python
import re

content = 'Hello 123 4567 World_This is a Regex Demo'
print(len(content))
result = re.match('^Hello\\s\\d\\d\\d\\s\\d{4}\\s\\w{10}', content)
print(result)
print(result.group())
print(result.span())
```


这里首先声明了一个字符串，其中包含英文字母、空白字符、数字等。接下来，我们写一个正则表达式`^Hello\\s\\d\\d\\d\\s\\d{4}\\s\\w{10}`用它来匹配这个长字符串。


开头的 ^ 是匹配字符串的开头，也就是以 Hello 开头；然后 \s 匹配空白字符，用来匹配目标字符串的空格；\d 匹配数字，3 个 \d 匹配 123；然后再写 1 个 \s 匹配空格；后面还有 4567，我们其实可以依然用 4 个 \d 来匹配，但是这么写比较烦琐，所以后面可以跟 {4} 以代表匹配前面的规则 4 次，也就是匹配 4 个数字；然后后面再紧接 1 个空白字符，最后 \w{10} 匹配 10 个字母及下划线。我们注意到，这里其实并没有把目标字符串匹配完，不过这样依然可以进行匹配，只不过匹配结果短一点而已。


而在 match 方法中，第一个参数传入了正则表达式，第二个参数传入了要匹配的字符串。

- 匹配目标

    刚才我们用 match 方法可以得到匹配到的字符串内容，但是如果想从字符串中提取一部分内容，该怎么办呢？就像最前面的实例一样，从一段文本中提取出邮件或电话号码等内容。


    这里可以使用 () 括号将想提取的子字符串括起来。() 实际上标记了一个子表达式的开始和结束位置，被标记的每个子表达式会依次对应每一个分组，调用 group 方法传入分组的索引即可获取提取的结果。


    ```python
    import re
    
    content = 'Hello 1234567 World_This is a Regex Demo'
    result = re.match('^Hello\\s(\\d+)\\sWorld', content)
    print(result)
    print(result.group())
    print(result.group(1))
    print(result.span())
    ```


    这里我们想把字符串中的 1234567 提取出来，此时可以将数字部分的正则表达式用 () 括起来，然后调用了 group(1) 获取匹配结果。


    这里用的是 group(1)，它与 group() 有所不同，后者会输出完整的匹配结果，而前者会输出第一个被 () 包围的匹配结果。假如正则表达式后面还有 () 包括的内容，那么可以依次用 group(2)、group(3) 等来获取。

- 通用匹配

    刚才我们写的正则表达式其实比较复杂，出现空白字符我们就写 \s 匹配，出现数字我们就用 \d 匹配，这样的工作量非常大。其实完全没必要这么做，因为还有一个万能匹配可以用，那就是.（点星）。其中.（点）可以匹配任意字符（除换行符），（\*星）代表匹配前面的字符无限次，所以它们组合在一起就可以匹配任意字符了。有了它，我们就不用挨个字符地匹配了。


    接着上面的例子，我们可以改写一下正则表达式：


    ```python
    import re
    
    content = 'Hello 123 4567 World_This is a Regex Demo'
    result = re.match('^Hello.*Demo$', content)
    print(result)
    print(result.group())
    print(result.span())
    ```


    这里我们将中间部分直接省略，全部用 .* 来代替，最后加一个结尾字符串就好了。


    group 方法输出了匹配的全部字符串，也就是说我们写的正则表达式匹配到了目标字符串的全部内容；span 方法输出 (0, 41)，这是整个字符串的长度。


    因此，我们可以使用 .*简化正则表达式的书写。

- 修饰符

    正则表达式可以包含一些可选标志修饰符来控制匹配的模式。修饰符被指定为一个可选的标志。


    `result = re.match('^He.*?(\\d+).*?Demo$', content)`


    当字符串中存在换行符时，运行直接报错，也就是说正则表达式没有匹配到这个字符串，返回结果为 None，而我们又调用了 group 方法导致 AttributeError。


    那么，为什么加了一个换行符，就匹配不到了呢？这是因为。匹配的是除换行符之外的任意字符，当遇到换行符时，.*? 就不能匹配了，所以导致匹配失败。这里只需加一个修饰符 re.S，即可修正这个错误：


    ```python
    import re
    
    content = '''Hello 1234567 World_This
    is a Regex Demo
    '''
    result = re.match('^He.*?(\\d+).*?Demo$', content, re.S)
    print(result.group(1))
    ```


    这个修饰符的作用是使。匹配包括换行符在内的所有字符。


    这个 re.S 在网页匹配中经常用到。因为 HTML 节点经常会有换行，加上它，就可以匹配节点与节点之间的换行了。


    另外，还有一些修饰符，在必要的情况下也可以使用


    | 修饰符  | 描　　述                                    |
    | ---- | --------------------------------------- |
    | re.I | 使匹配对大小写不敏感                              |
    | re.L | 做本地化识别（locale-aware）匹配                  |
    | re.M | 多行匹配，影响 ^ 和 $                           |
    | re.S | 使。匹配包括换行在内的所有字符                         |
    | re.U | 根据 Unicode 字符集解析字符。这个标志影响 \w、\W、\b 和 \B |
    | re.X | 该标志通过给予你更灵活的格式以便你将正则表达式写得更易于理解          |


    在网页匹配中，较为常用的有 re.S 和 re.I。


## search


前面提到过，match 方法是从字符串的开头开始匹配的，一旦开头不匹配，那么整个匹配就失败了。


```python
import re

content = 'Extra stings Hello 1234567 World_This is a Regex Demo Extra stings'
result = re.match('Hello.*?(\\d+).*?Demo', content)
print(result)
```


这里的字符串以 Extra 开头，但是正则表达式以 Hello 开头，整个正则表达式是字符串的一部分，但是这样匹配是失败的。


因为 match 方法在使用时需要考虑到开头的内容，这在做匹配时并不方便。它更适合用来检测某个字符串是否符合某个正则表达式的规则。
这里就有另外一个方法 search，它在匹配时会扫描整个字符串，然后返回第一个成功匹配的结果。也就是说，正则表达式可以是字符串的一部分，在匹配时，search 方法会依次扫描字符串，直到找到第一个符合规则的字符串，然后返回匹配内容，如果搜索完了还没有找到，就返回 None。


我们把上面代码中的 match 方法修改成 search


```python
import re

content = 'Extra stings Hello 1234567 World_This is a Regex Demo Extra stings'
result = re.search('Hello.*?(\\d+).*?Demo', content)
print(result)
```


## findall


前面我们介绍了 search 方法的用法，它可以返回匹配正则表达式的第一个内容，但是如果想要获取匹配正则表达式的所有内容，那该怎么办呢？这时就要借助 findall 方法了。该方法会搜索整个字符串，然后返回匹配正则表达式的所有内容。


还是上面的 HTML 文本，如果想获取所有 a 节点的超链接、歌手和歌名，就可以将 search 方法换成 findall 方法。如果有返回结果的话，就是列表类型，所以需要遍历一下来依次获取每组内容。代码如下：


```python
results = re.findall('<li.*?href="(.*?)".*?singer="(.*?)">(.*?)</a>', html, re.S)
print(results)
print(type(results))
for result in results:
    print(result)
    print(result[0], result[1], result[2])
```


返回的列表中的每个元素都是元组类型，我们用对应的索引依次取出即可。


如果只是获取第一个内容，可以用 search 方法。当需要提取多个内容时，可以用 findall 方法。


## sub


除了使用正则表达式提取信息外，有时候还需要借助它来修改文本。比如，想要把一串文本中的所有数字都去掉，如果只用字符串的 replace 方法，那就太烦琐了，这时可以借助 sub 方法。


```python
import re

content = '54aK54yr5oiR54ix5L2g'
content = re.sub('\\d+', '', content)
print(content)
```


这里只需要给第一个参数传入 \d+ 来匹配所有的数字，第二个参数为替换成的字符串（如果去掉该参数的话，可以赋值为空），第三个参数是原字符串。


## compile


前面所讲的方法都是用来处理字符串的方法，最后再介绍一下 compile 方法，这个方法可以将正则字符串编译成正则表达式对象，以便在后面的匹配中复用。示例代码如下：


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


例如，这里有 3 个日期，我们想分别将 3 个日期中的时间去掉，这时可以借助 sub 方法。该方法的第一个参数是正则表达式，但是这里没有必要重复写 3 个同样的正则表达式，此时可以借助 compile 方法将正则表达式编译成一个正则表达式对象，以便复用。


另外，compile 还可以传入修饰符，例如 re.S 等修饰符，这样在 search、findall 等方法中就不需要额外传了。所以，compile 方法可以说是给正则表达式做了一层封装，以便我们更好地复用。


# 爬虫基本库使用-猫眼电影排行


使用request来提取出猫眼电影 TOP100 的电影名称、时间、评分、图片等信息，提取的站点URL[http://maoyan.com/board/4](http://maoyan.com/board/4)，提取的结果会以文件形式保存下来。


## 页面分析


排名第一的电影是霸王别姬，页面中显示的有效信息有影片名称、主演、上映时间、上映地区、评分、图片等信息。


将网页滚动到最下方，可以发现有分页的列表，直接点击第 2 页，观察页面的 URL 变为 [http://maoyan.com/board/4?offset=10](http://maoyan.com/board/4?offset=10)


offset 代表偏移量值，如果偏移量为 n，则显示的电影序号就是 n+1 到 n+10，每页显示 10 个电影信息。


如果想获取 TOP100 电影，只需要分开请求 10 次，而 10 次的 offset 参数分别设置为 0、10、20…90 即可，这样获取不同的页面之后，再用正则表达式提取出相关信息，就可以得到 TOP100 的所有电影信息了。


## 抓取首页


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

> 注意： 由于猫眼电影的反爬虫机制，需要在请求头中添加 Cookie 信息，否则会返回418错误。

## 正则表达式提取信息


可以看到，一部电影信息对应的源代码是一个 dd 节点，我们用正则表达式来提取这里面的一些电影信息。


```python
def parse_one_page(html):
    pattern = re.compile('<dd>.*?board-index.*?>(.*?)</i>.*?data-src="(.*?)".*?name.*?a.*?>(.*?)</a>.*?star.*?>(.*?)</p>.*?releasetime.*?>(.*?)</p>.*?integer.*?>(.*?)</i>.*?fraction.*?>(.*?)</i>.*?</dd>',
        re.S)
    items = re.findall(pattern, html)
    print(items)
```


这样就可以成功地将一页的 10 个电影信息都提取出来。


但这样还不够，数据比较杂乱，我们再将匹配结果处理一下，遍历提取结果并生成字典，此时方法改写如下：


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


## 写入文件


随后，我们将提取的结果写入文件，这里直接写入到一个文本文件中。这里通过 JSON 库的 dumps 方法实现字典的序列化，并指定 ensure_ascii 参数为 False，这样可以保证输出结果是中文形式而不是 Unicode 编码


```python
def write_to_file(content):
    with open('result.txt', 'a', encoding='utf-8') as f:
        print(type(json.dumps(content)))
        f.write(json.dumps(content, ensure_ascii=False)+'\\n')
```


## 完整代码


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
