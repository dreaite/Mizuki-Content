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
lang: 'en'
---

# Spider Basic Library

Learning about web crawlers, the initial operation is to simulate a browser sending requests to a server. So where should we start? Do we need to construct requests ourselves? Do we need to care about the implementation of the request data structure? Do we need to understand network transmission at the HTTP, TCP, and IP layers? Do we need to know how servers respond and reply?

You might feel unsure where to start, but don’t worry—the power of Python lies in providing feature-complete libraries to help us accomplish these requests. The most basic HTTP libraries include urllib, httplib2, requests, treq, etc.

## urllib

In Python 2, there were two libraries, urllib and urllib2, to implement sending requests. In Python 3, urllib2 no longer exists; it was unified into urllib, with the official documentation at: [https://docs.python.org/3/library/urllib.html](https://docs.python.org/3/library/urllib.html)

The urllib library is Python’s built-in HTTP request library, which means no extra installation is required. It contains the four modules below.

- request
  It is the most basic HTTP request module and can be used to simulate sending requests. Just like typing a URL in a browser and pressing Enter, you only need to pass the URL and any extra parameters to the library method to simulate this process.
- error
  The exception handling module. If a request error occurs, we can catch these exceptions and then retry or perform other actions to ensure the program doesn’t terminate unexpectedly.
- parse
  A utility module that provides many URL-handling methods, such as splitting, parsing, and joining.
- robot parser
  Mainly used to identify a site’s robots.txt file and determine which sites can be crawled and which cannot. It’s used less frequently.

This section’s code can refer to this [library](https://github.com/Python3WebSpider/UrllibTest)

## Sending Requests

Using urllib’s request module, we can conveniently implement sending requests and obtaining responses.

### urlopen

The urllib.request module provides the most basic method to construct HTTP requests. It can simulate a browser’s request initiation process, and it also handles authentication, redirection, browser cookies, and other content.

Take the Python official site as an example; we’ll fetch this page:

```python
import urllib.request

response = urllib.request.urlopen('<https://www.python.org>')
print(response.read().decode('utf-8'))

print(type(response))
```

An HTTPResponse object mainly contains methods such as read, readinto, getheader, getheaders, fileno, and attributes like msg, version, status, reason, debuglevel, and closed.

After obtaining this object, assign it to a variable named response, and you can call these methods and attributes to obtain a return information series.

```python
import urllib.request

response = urllib.request.urlopen('<https://www.python.org>')
print(response.status)
print(response.getheaders())
print(response.getheader('Server'))

print(type(response))
# <class 'http.client.HTTPResponse'>
```

It can be seen that the return is an HTTPResponse type object, mainly containing methods such as read, readinto, getheader, getheaders, fileno, and attributes like msg, version, status, reason, debuglevel, and closed.

After obtaining this object, assign it to a variable named response, and you can call these methods and attributes to obtain a series of information about the return result.

For example, calling read can obtain the web page content, and accessing the status attribute gives the status code of the response, where 200 indicates success and 404 indicates not found, etc.

Using the most basic urlopen method, you can complete the simplest GET request for a web page.

If you want to pass parameters in the link, how can you implement that? First, look at the urlopen method API:

`urllib.request.urlopen(url, data=None, [timeout,]*, cafile=None, capath=None, cadefault=False, context=None)`

You can see that besides the first argument which can pass a URL, we can also pass other contents, such as data (payload), timeout (timeout) and so on.

- data parameter
  The data parameter is optional. If you want to add this parameter, you must convert the parameter to a bytes type using the bytes method. Also, if this parameter is passed, the request method is no longer GET but POST.

    ```python
    import urllib.parse
    import urllib.request
    
    data = bytes(urllib.parse.urlencode({'word': 'hello'}), encoding='utf8')
    response = urllib.request.urlopen('<http://httpbin.org/post>', data=data)
    print(response.read())
    ```

    Here, we pass a parameter word with the value hello. It needs to be encoded into bytes. The bytes method requires the first argument to be a string, and you should use urllib.parse.urlencode to convert the parameter dictionary into a string; the second argument specifies the encoding, here utf8.

    The target site here is [httpbin.org](http://httpbin.org/), which provides HTTP request testing. Our request URL is [http://httpbin.org/post](http://httpbin.org/post), a URL that can be used to test POST requests. It outputs some information about the Request, including the data parameter we passed.

    The result is as follows:

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

    As you can see, the parameter we passed appears in the form field, indicating that we simulated a form submission using the POST method to transmit data.

- timeout parameter

    The timeout parameter is used to set a timeout in seconds. It means that if the request exceeds this time without a response, an exception will be raised. If this parameter is not specified, a global default time will be used. It supports HTTP, HTTPS, and FTP requests.

    ```python
    import urllib.request
    
    response = urllib.request.urlopen('<http://httpbin.org/get>', timeout=1)
    print(response.read())
    ```

    Here the timeout is set to 1 second. After 1 second, the server still hasn’t responded, so an URLError exception is raised. This exception comes from the urllib.error module, and the reason is a timeout.

    Therefore, you can control a webpage’s crawl by setting this timeout. This can be implemented with try-except as follows:

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

    Here we request the test URL [http://httpbin.org/get](http://httpbin.org/get) with a timeout of 0.1 seconds, and then catch the URLError exception, checking that the reason is socket.timeout, meaning a timeout error occurred.

    Timeout handling via the timeout parameter can be very useful.

- Other parameters

    In addition to data and timeout, there are also context, cafile, capath, cadefault, etc. The context must be an ssl.SSLContext object to specify SSL settings. Besides, cafile and capath specify CA certificates and their paths, which are useful when requesting HTTPS links. The cadefault parameter has been deprecated and its default is False.

    We have explained how to use the urlopen method above. With this fundamental method, we can complete simple requests and webpage crawling. For more detailed information, refer to the official documentation: [https://docs.python.org/3/library/urllib.request.html](https://docs.python.org/3/library/urllib.request.html).

### Request

We know that using the urlopen method can initiate the most basic request, but these simple parameters are not enough to build a complete request. If you need to add information such as headers in the request, you can use the more powerful Request class to construct it.

First, let’s feel the usage of Request with an example:

```python
import urllib.request

request = urllib.request.Request('<https://python.org>')
response = urllib.request.urlopen(request)
print(response.read().decode('utf-8'))
```

We can see that we still use the urlopen method to send this request; the only difference is that this time the argument is not a URL but a Request object. By constructing this data structure, we can separate the request into an object and configure parameters more richly and flexibly.

Its constructor is as follows:

> class urllib.request.Request(url, data=None, headers={}, origin_req_host=None, unverifiable=False, method=None)
> 1. The first parameter url is the request URL and is required; the others are optional.
> 2. The second parameter data, if provided, must be of type bytes. If it is a dictionary, you can first use urllib.parse.urlencode() to encode it.
> 3. The third parameter headers is a dictionary representing the request headers. You can construct it directly via the headers parameter when creating the request, or you can add headers later by calling add_header() on the request instance.
>  Adding request headers most commonly via modifying the User-Agent to masquerade as a browser. The default User-Agent is Python-urllib; you can modify it to masquerade as a browser. For example, to masquerade as Firefox, you can set it to: `Mozilla/5.0 (X11; U; Linux i686) Gecko/20071127 Firefox/`
> 4. The fourth parameter origin_req_host refers to the host name or IP address of the requester.
> 5. The fifth parameter unverifiable indicates whether this request is verifiable; the default is False, meaning the user does not have sufficient permission to choose the outcome of receiving this request. For example, if we request an image within an HTML document but we do not have permission to automatically fetch images, the unverifiable value would be True.
> 6. The sixth parameter method is a string used to indicate the method used by the request, such as GET, POST, PUT, etc.

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

Here we construct a request with four parameters, where url is the request URL, headers specify User-Agent and Host, data is converted to bytes via urlencode and bytes, and the request method is set to POST.

The following shows the result:

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

From the result, we can see that we successfully set data, headers, and method.

Headers can also be added using the add_header method:

```python
req = request.Request(url=url, data=data, method='POST')
req.add_header('User-Agent', 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)')
```

This allows for easier request construction and sending.

### Advanced Usage

In the previous process, although we could construct requests, for more advanced operations (such as cookies handling, proxy settings, etc.), what should we do?

Next, we need more powerful tools: Handlers. In short, you can think of them as various processors—some for login validation, some for handling cookies, some for managing proxies. With them, you can almost do everything in HTTP requests.

First, let’s introduce the BaseHandler class inside the urllib.request module. It is the parent class of all other Handlers and provides the most basic methods, such as default_open, protocol_request, etc.

Next, there are various Handler subclasses that inherit from BaseHandler, for example:

- HTTPDefaultErrorHandler: handles HTTP response errors; errors will raise HTTPError exceptions.
- HTTPRedirectHandler: handles redirection.
- HTTPCookieProcessor: handles Cookies.
- ProxyHandler: configures proxies; the default proxy is none.
- HTTPPasswordMgr: manages passwords; maintains a table of username/password.
- HTTPBasicAuthHandler: handles authentication; if a link requires authentication, this can resolve it.

There are other Handler classes as well; for details, refer to the official documentation: [https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler](https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler)

Another important class is OpenerDirector, which we can call Opener. We have used urlopen before; in fact, it is an Opener provided by urllib for us.

Why introduce Opener? Because it enables more advanced functionality.

An Opener can use the open method; the return type is the same as urlopen, and it can be built using Handlers.

- Authentication

    Some sites present a login prompt on open, requiring you to enter a username and password; you can view the page only after successful authentication.

    To request such a page, you can complete it with HTTPBasicAuthHandler; the relevant code is:

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

    Here we first instantiate an HTTPBasicAuthHandler object, whose parameter is an HTTPPasswordMgrWithDefaultRealm object. It uses the add_password method to add the username and password, thereby creating a Handler to perform the authentication.

    Next, use this Handler and build_opener to construct an Opener; this Opener acts as if authentication has already succeeded when sending requests. Then, use the Opener’s open method to open the link, completing the authentication. The result is the page source after authentication.

- Proxies

    Some sites monitor access counts from a given IP. If the count is too high, access may be blocked. We can configure proxies and switch IPs periodically to continue crawling even if one IP is blocked.

    Proxy settings are also implemented via Handlers. Here is how to use ProxyHandler:

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

    Here we set up a local proxy running on port 9743. ProxyHandler’s argument is a dictionary where the keys are protocol types (e.g., HTTP or HTTPS) and the values are proxy URLs; you can add multiple proxies.

    Then, using this Handler and build_opener, construct an Opener and send requests.

- Cookies

    Handling cookies requires the corresponding Handler.

    ```python
    import http.cookiejar, urllib.request
    
    cookie = http.cookiejar.CookieJar()
    handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)
    response = opener.open('<http://www.baidu.com>')
    for item in cookie:
        print(item.name+"="+item.value)
    ```

    First, declare a CookieJar object. Next, use HTTPCookieProcessor to build a Handler, and finally use build_opener to construct an Opener and call open.

    You can see that it prints the name and value of each cookie.

    Cookies can also be saved to a file format. Cookies are stored as text as well.

    ```python
    filename = 'cookies.txt'
    cookie = http.cookiejar.MozillaCookieJar(filename)
    handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)
    response = opener.open('<http://www.baidu.com>')
    cookie.save(ignore_discard=True, ignore_expires=True)
    ```

    Here, CookieJar needs to be MozillaCookieJar, which is used when generating files. It handles cookies and file-related events, such as reading and saving cookies, and can save cookies in Mozilla-style browser format.

    LWPCookieJar can also read and save cookies, but its format differs from MozillaCookieJar and saves cookies in the libwww-perl (LWP) format.

    To save as an LWP cookies file, declare it as: `cookie = http.cookiejar.LWPCookieJar(filename)`

    After generating the cookies file, how do you read it from the file and use it?

    ```python
    cookie = http.cookiejar.LWPCookieJar()
    cookie.load('cookies.txt', ignore_discard=True, ignore_expires=True)
    handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)
    response = opener.open('<http://www.baidu.com>')
    print(response.read().decode('utf-8'))
    ```

    You can see that this uses load to read the local Cookies file and obtains its contents. The prerequisite is that you first generate a LWPCookieJar-formatted cookie and save it to a file, then read the cookies and use the same method to build a Handler and an Opener to complete the operation.

    If the page returns normally, you will see the source of the Baidu page.

    The above methods allow you to implement most request feature configurations.

    This is the basic usage of the request module in urllib. For more features, refer to the official documentation: [https://docs.python.org/3/library/urllib.request.html#basehandler-objects](https://docs.python.org/3/library/urllib.request.html#basehandler-objects)

## Handling Exceptions

In the previous section we learned about sending requests, but in poor network conditions, what should we do when an exception occurs? If these exceptions aren’t handled, the program may terminate due to errors, so exception handling is quite necessary. urllib’s error module defines exceptions raised by the request module. If issues arise, the request module raises exceptions defined in the error module.

### URLError

URLError is a class from urllib’s error module; it inherits from OSError and is the base class for error exceptions produced by the request module. It has an attribute reason that returns the cause of the error.

```python
from urllib import request, error
try:
    response = request.urlopen('<https://cuiqingcai.com/index.htm>')
except error.URLError as e:
    print(e.reason)
```

If we open a non-existent page, an error would normally be raised, but in this case we catch URLError and print the reason, which would be:

Not Found

The program does not crash, and the error is handled gracefully.

### HTTPError

It is a subclass of URLError, specifically for HTTP request errors, such as authentication failures. It has three attributes:

- code: the HTTP status code, e.g., 404 for not found, 500 for server error.
- reason: like the parent, the error reason.
- headers: the response headers.

```python
from urllib import request,error
try:
    response = request.urlopen('<https://cuiqingcai.com/index.htm>')
except error.HTTPError as e:
    print(e.reason, e.code, e.headers, sep='\n')
```

The result is:

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

Here we catch HTTPError and print reason, code, and headers.

Since URLError is the parent of HTTPError, a better approach is to catch the subclass first, then the parent:

```python
from urllib import request, error

try:
    response = request.urlopen('<https://cuiqingcai.com/index.htm>')
except error.HTTPError as e:
    print(e.reason, e.code, e.headers, sep='\n')
except error.URLError as e:
    print(e.reason)
else:
    print('Request Successfully')
```

This way, you can first catch HTTPError and obtain its status code, reason, and headers. If it’s not an HTTPError, you’ll catch URLError and print the reason. Finally, use an else to handle normal logic. This is a good exception-handling pattern.

Sometimes, the reason attribute may not be a string; it can be an object as well.

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

Here we directly set a timeout to force a timeout exception. The result is:

<class 'socket.timeout'> TIME OUT

As you can see, the reason attribute is the socket.timeout class. So you can use isinstance to check its type for more precise error handling.

## Parsing Links

Earlier, the urllib library also provides the parse module, which defines standard interfaces for URL handling, such as extracting, merging, and converting link components. It supports URL processing for protocols such as file, ftp, gopher, hdl, http, https, imap, mailto, mms, news, nntp, prospero, rsync, rtsp, rtspu, sftp, sip, sips, snews, svn, svn+ssh, telnet, and wais. In this section, we’ll look at commonly used methods to see how convenient they are.

### urlparse

This method can identify and split a URL

```python
from urllib.parse import urlparse

result = urlparse('<http://www.baidu.com/index.html;user?id=5#comment>')
print(type(result), result)
```

`<class 'urllib.parse.ParseResult'> ParseResult(scheme='http', netloc='www.baidu.com', path='/index.html', params='user', query='id=5', fragment='comment')`

You’ll see that the result is a ParseResult object containing six parts: scheme, netloc, path, params, query, and fragment.

It shows that urlparse splits into six parts. Generally, there are specific delimiters in parsing. For example, the part before :// is the scheme (the protocol); the first / is the netloc (domain); the part after is the path; the semicolon leads to params; the question mark indicates query; the hash denotes the fragment.

Thus, the standard URL format is:

scheme://netloc/path;params?query#fragment

A standard URL adheres to this rule, and urlparse can split it.

```python
# API configuration
urllib.parse.urlparse(urlstring, scheme='', allow_fragments=True)
```

It has three parameters:

- urlstring: required; the URL to be parsed.
- scheme: the default protocol (e.g., http or https). The scheme parameter only takes effect if the URL does not contain a scheme. If the URL contains a scheme, the parsed scheme is returned.
- allow_fragments: whether to ignore the fragment. If set to False, the fragment portion will be ignored and parsed as part of path, parameters, or query, and fragment becomes empty.

### urlunparse

With urlparse, there is the opposite method urlunparse. It accepts an iterable object, but its length must be 6; otherwise you’ll get an error about insufficient or excessive arguments.

```python
from urllib.parse import urlunparse

data = ['http', 'www.baidu.com', 'index.html', 'user', 'a=6', 'comment']
print(urlunparse(data))
```

Here, data is a list. Of course, you can also use other types, such as a tuple or a specific data structure.

`http://www.baidu.com/index.html;user?a=6#comment`

### urlsplit

This method is very similar to urlparse, except it does not parse the params section separately; it returns five results. In the above example, params are merged into path.

```python
from urllib.parse import urlsplit

result = urlsplit('<http://www.baidu.com/index.html;user?id=5#comment>')
print(result)
```

The result is SplitResult, which is a tuple-like object; you can access its values via attributes or indices.

### urlunsplit

Similar to urlunparse, it also combines URL parts into a complete URL. The parameter is an iterable object, for example a list or tuple; the only difference is the length must be 5.

```python
from urllib.parse import urlunsplit

data = ['http', 'www.baidu.com', 'index.html', 'a=6', 'comment']
print(urlunsplit(data))
```

`http://www.baidu.com/index.html?a=6#comment`

### urljoin

With urlunparse and urlunsplit, we can merge links, but a base_url must be provided with scheme, netloc, and path. Another method to generate links is urljoin. You can provide a base_url as the first argument and the new link as the second; the method analyzes base_url’s scheme, netloc, and path, fills in the missing parts of the new link, and returns the result.

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

The results are:

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

You can see base_url provides three parts: scheme, netloc, and path. If these three parts do not exist in the new link, they will be filled in; if the new link already has them, those parts from the new link are used. The params, query, and fragment in base_url do not apply.

With urljoin, you can easily perform link parsing, concatenation, and generation.

### urlencode

Here we introduce another commonly used method—urlencode—which is very useful for constructing GET request parameters.

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

Here we first declare a dictionary to represent the parameters, then call urlencode to serialize them into a GET parameter string.

`http://www.baidu.com?name=germey&amp;age=22`

As you can see, the parameters have been converted from a dictionary to GET parameters. This method is very common. For convenience, you may represent parameters as a dictionary beforehand; to convert to URL parameters, simply call this method.

### parse_qs

Once serialized, there is necessarily deserialization. If we have a string of GET request parameters, using parse_qs we can convert it back to a dictionary:

```python
from urllib.parse import parse_qs

query = 'name=germey&amp;age=22'
print(parse_qs(query))
```

### parse_qsl

There is also a parse_qsl method, which converts parameters into a list of tuples.

```python
from urllib.parse import parse_qsl

query = 'name=germey&amp;age=22'
print(parse_qsl(query))
```

### quote

This method can convert content into URL-encoded format. When a URL contains non-ASCII characters, this can cause garbling; this method converts Chinese characters into URL encoding.

```python
from urllib.parse import quote

keyword = ' 壁纸 '
url = '<https://www.baidu.com/s?wd=>' + quote(keyword)
print(url)
```

Here we declare a Chinese search term and URL-encode it with quote, yielding:

`https://www.baidu.com/s?wd=% E5% A3% 81% E7% BA% B8`

### unquote

With quote comes unquote, which decodes URL-encoded content:

```python
from urllib.parse import unquote

url = '<https://www.baidu.com/s?wd=%> E5% A3% E7% BA% B8'
print(unquote(url))
```

This is the URL-encoded result obtained above; unquote decodes it to:

`https://www.baidu.com/s?wd = 壁纸`

As you can see, unquote makes decoding easy.

## Analyzing the Robots Protocol

Using urllib’s robotparser module, we can analyze a website’s Robots protocol. In this section, we’ll briefly understand how to use this module.

### Robots Protocol

The Robots Protocol, also called the crawler protocol or robot protocol, is short for the Robots Exclusion Protocol. It tells crawlers and search engines which pages may be crawled and which should not be crawled. It is typically a text file named robots.txt, usually placed in the site’s root directory.

When a search crawler visits a site, it first checks whether a robots.txt file exists in the site’s root directory. If it exists, the crawler crawls according to the scope defined there. If not, the crawler will access all directly accessible pages.

Here is a sample robots.txt:

```plain text
User-agent: *
Disallow: /
Allow: /public/3
```

This restricts all crawlers to crawl only the public directory. Save the above content as robots.txt in the site’s root directory, alongside the site’s entry files (such as index.php, index.html, index.jsp, etc.). The User-agent describes the crawler’s name; setting it to * means the protocol applies to any crawler. For example:

`User-agent: Baiduspider`

This means the rules apply to Baidu’s crawler. If there are multiple User-agent lines, multiple crawlers will be affected, but at least one should be specified.

Disallow specifies the directories not allowed to crawl (in the above example, / means disallow crawling all pages). Allow is usually used together with Disallow to carve out exceptions. Now we set Allow to /public/, meaning all pages are not crawlable except the public directory.

Let’s look at a few more examples.

```plain text
<!-- Code below forbids all crawlers from accessing any directory: -->
User-agent: *
Disallow: /
<!-- Code below allows all crawlers to access any directory: -->
User-agent: *
Disallow:
<!-- Also, leaving robots.txt empty is allowed. -->
<!-- Code below forbids all crawlers from accessing certain website directories: -->
User-agent: *
Disallow: /private/
Disallow: /tmp/
<!-- Code below allows only one crawler to access: -->
User-agent: WebCrawler
Disallow:
User-agent: *
Disallow: /
```

These are common patterns for robots.txt.

### Crawler Names

You might wonder where crawler names come from; they have fixed names, for example, Baidu’s crawler is called BaiduSpider.

| Crawler Name | Name | Website |
| ------------ | ---- | ------- |
| BaiduSpider  | Baidu | <[www.baidu.com](http://www.baidu.com/)> |
| Googlebot    | Google | <[www.google.com](http://www.google.com/)> |
| 360Spider    | 360 Search | <[www.so.com](http://www.so.com/)> |
| YodaoBot     | Youdao | <[www.youdao.com](http://www.youdao.com/)> |
| ia_archiver  | Alexa | <[www.alexa.cn](http://www.alexa.cn/)> |
| Scooter      | Altavista | <[www.altavista.com](http://www.altavista.com/)> |

### robotparser

After understanding the Robots protocol, we can use robotparser to parse robots.txt. This module provides the RobotFileParser class, which can determine whether a given crawler has permission to crawl a website’s pages based on the site’s robots.txt.

The class is simple to use: simply pass the robots.txt URL to the constructor. First, here is its declaration:

`urllib.robotparser.RobotFileParser(url='')`

Of course, you can also instantiate it without passing a URL, defaulting to empty, and then use set_url() to set it.

Here are the commonly used methods of this class:

- set_url: sets the robots.txt URL. If the link is provided when creating the RobotFileParser, you don’t need to call this method.
- read: reads robots.txt and analyzes it. Note that this method performs a read and analyze operation. If you don’t call this method, subsequent checks will return False, so be sure to call it. This method does not return content, but performs the read operation.
- parse: parses the contents of robots.txt. The argument is some lines from robots.txt; it will analyze these contents according to robots.txt syntax.
- can_fetch: this method takes two parameters: the first is User-agent, the second is the URL to fetch. It returns True if the search engine is allowed to crawl the URL, otherwise False.
- mtime: returns the last time robots.txt was fetched and analyzed; useful for long-running crawlers.
- modified: similarly updates the time to now for long-running crawlers.

Let’s see an example:

```python
from urllib.robotparser import RobotFileParser
rp = RobotFileParser()
rp.set_url('<http://www.jianshu.com/robots.txt>')
rp.read()
print(rp.can_fetch('*', '<http://www.jianshu.com/p/b67554025d7d>'))
print(rp.can_fetch('*', "<http://www.jianshu.com/search?q=python&page=1&type=collections>"))
```

Here we use JianShu (jianshu) as an example. First we create a RobotFileParser object, set the robots.txt link with set_url. Of course, without this method you can also set it directly at declaration: `rp = RobotFileParser('<http://www.jianshu.com/robots.txt>')`. Then we use can_fetch to determine if a page can be crawled. The output is:

```plain text
True
False
```

We can also use the parse method to read and analyze, as follows:

```python
from urllib.robotparser import RobotFileParser
from urllib.request import urlopen
rp = RobotFileParser()
rp.parse(urlopen('<http://www.jianshu.com/robots.txt').read().decode('utf-8').split('\\n>'))
print(rp.can_fetch('*', '<http://www.jianshu.com/p/b67554025d7d>'))
print(rp.can_fetch('*', "<http://www.jianshu.com/search?q=python&page=1&type=collections>"))
```

# Requests

In the previous section, we learned the basic usage of urllib, but there are indeed some inconveniences, such as dealing with website authentication and cookies—these require writing Openers and Handlers. To make these operations easier, there is a more powerful library: requests. With it, operations like cookies, login authentication, and proxies are no longer a hassle. Next, let’s explore its power.

## Basic Usage

1. Prerequisites
Make sure you have the requests library installed correctly.
2. Getting Started with an Example
The urlopen method in urllib is effectively a GET request, while the corresponding method in requests is get. Here is an example:

```python
import requests

r = requests.get('<https://www.baidu.com/>')
print(type(r))
print(r.status_code)
print(type(r.text))
print(r.text)
print(r.cookies)
```

The result is:

```html
<class 'requests.models.Response'>
200
<class 'str'>
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

Here we call the get method to perform the same operation as urlopen, obtaining a Response object, and then output the Response’s type, status code, the type of the response body, the content, and Cookies.

From the results, we can see that the return type is requests.models.Response, the response body is a string, and Cookies are of type RequestsCookieJar.

Using get successfully performs a GET request, which is not remarkable in itself, but it’s more convenient because other request types can also be done with a single line, for example:

```python
r = requests.post('<http://httpbin.org/post>')
r = requests.put('<http://httpbin.org/put>')
r = requests.delete('<http://httpbin.org/delete>')
r = requests.head('<http://httpbin.org/get>')
r = requests.options('<http://httpbin.org/get>')
```

Here we used post, put, delete, etc. to perform POST, PUT, DELETE, and so on.

### GET Requests

One of the most common HTTP requests is GET. Here we’ll detail how to construct GET requests with requests.

Basic example

First, build a simple GET request to [http://httpbin.org/get](http://httpbin.org/get). That site will return information about the request if the client uses GET:

```python
import requests

r = requests.get('<http://httpbin.org/get>')
print(r.text)
```

The result:

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

We can see that the GET request succeeded and the response includes the request headers, URL, IP, etc.

If you want to attach extra information to GET requests, you can use the params parameter to store them:

```python
import requests

data = {
    'name': 'germey',
    'age': 22
}
r = requests.get("<http://httpbin.org/get>", params=data)
print(r.text)
```

The request URL will be automatically constructed as: [http://httpbin.org/get?age=22&name=germey](http://httpbin.org/get?age=22&name=germey).

Additionally, the response is a string that is actually in JSON format. If you want to parse it directly into a dictionary, you can call the json method. For example:

```python
import requests

r = requests.get("<http://httpbin.org/get>")
print(type(r.text))
print(r.json())
print(type(r.json()))
```

Calling json converts the JSON-formatted string into a dictionary.

Note that if the response isn’t JSON, parsing will raise json.decoder.JSONDecodeError.

- Fetching a webpage

The above URL returns JSON-formatted content. If you fetch a regular webpage, you’ll get the page content. For example, here is how to fetch Zhihu’s Explore page:

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

Here we include headers, which contain the User-Agent header to masquerade as a browser. Without this, Zhihu may block Crawling.

- Fetching binary data

In the above example, Zhihu’s page is HTML. If you want to fetch images, audio, video, etc., what to do? Images, audio, and video are binary data and require saving in binary format with appropriate encoding.

For example, GitHub’s site favicon:

```python
import requests

r = requests.get("<https://github.com/favicon.ico>")
print(r.text)
print(r.content)
```

This fetches the site icon displayed in a browser tab.

Then save the image:

```python
import requests

r = requests.get("<https://github.com/favicon.ico>")
with open('favicon.ico', 'wb') as f:
    f.write(r.content)
```

Here we used the open method to write in binary mode to a file, which creates a favicon.ico file when done.

Similarly, audio and video can be obtained this way.

- Adding headers

As with urllib.request, you can also pass header information via the headers parameter.

```python
import requests

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36'
}
r = requests.get("<https://www.zhihu.com/explore>", headers=headers)
print(r.text)
```

You can add other fields in the headers parameter as well.

4. POST Requests

Earlier we learned the basics of GET requests; another common method is POST.

```python
import requests

data = {'name': 'germey', 'age': '22'}
r = requests.post("<http://httpbin.org/post>", data=data)
print(r.text)
```

5. Response

After sending a request, you naturally receive a response. In the examples above, we used text and content to obtain the response, and there are many other attributes and methods for obtaining additional information such as status code, headers, cookies, etc.

```python
import requests

r = requests.get('<http://www.jianshu.com>')
print(type(r.status_code), r.status_code)
print(type(r.headers), r.headers)
print(type(r.cookies), r.cookies)
print(type(r.url), r.url)
print(type(r.history), r.history)
```

Here we print the status_code (status), headers, cookies, url, and history to show their types.

The status code is commonly used to determine if the request was successful, and requests also provides a built-in status code lookup object, requests.codes.

```python
import requests

r = requests.get('<http://www.jianshu.com>')
exit() if not r.status_code == requests.codes.ok else print('Request Successfully')
```

This compares the status code to the built-in success code to ensure a proper response; here, requests.codes.ok gives the success status code 200.

The following is a list of status codes and their query values:

```plain text
# Informational status codes
100: ('continue',),
101: ('switching_protocols',),
102: ('processing',),
103: ('checkpoint',),
122: ('uri_too_long', 'request_uri_too_long'),

# Successful status codes
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

# Redirection status codes
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

# Client error status codes
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

# Server error status codes
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

For example, if you want to check whether the result is 404, you can compare with requests.codes.not_found.

## Advanced Usage of Requests

In the previous section, we covered the basic usage of requests, such as GET and POST, and the Response object. This section covers some advanced usage, such as file upload, cookies settings, proxies, etc.

1. File Upload

We know that requests can simulate submitting data. If a site requires uploading files, we can use it too.

```python
import requests

files = {'file': open('favicon.ico', 'rb')}
r = requests.post('<http://httpbin.org/post>', files=files)
print(r.text)
```

This site will return a response containing a files field, while the form field is empty, indicating that the file upload is handled separately under files.

2. Cookies

Earlier we used urllib to handle cookies, which was quite verbose. With requests, obtaining and setting cookies is as simple as a single step.

```python
import requests

r = requests.get('<https://www.baidu.com>')
print(r.cookies)
for key, value in r.cookies.items():
    print(key + '=' + value)
```

Here we can obtain cookies via the cookies attribute, which is a RequestsCookieJar. Using items yields a list of (key, value) pairs to iterate over each cookie.

Of course, you can also maintain login state with cookies directly in some cases, as Zhihu illustrates:

- First, log into Zhihu. Copy the Cookie content from Headers, place it into Headers, then send the request.

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

Of course, you can also use the cookies parameter to manage cookies, but this requires constructing a RequestsCookieJar object and splitting cookies, which is a bit tedious; the result is the same.

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

Here we first create a RequestsCookieJar object, then split the copied cookies and set each cookie’s key and value, and finally call requests.get() with the cookies parameter. Of course, Zhihu’s own restrictions mean you still need to include the headers parameter with cookies as before, but you don’t need to include the cookie field in the headers.

Tests show that this approach also allows successful login to Zhihu.

3. Session Persistence

In requests, using get or post can simulate web requests, but this is effectively different sessions—two separate browser windows opening different pages.

Imagine a scenario where the first request uses post to log in to a site, and a second request then fetches your personal data after login using get. This is like opening two different browsers with two separate sessions. It would not be possible to fetch your profile in a single session.

The main solution is to maintain the same session, which is like opening a single browser tab rather than a new browser window. But we don’t want to repeatedly set cookies. This is where a new tool comes in—Session objects.

Using a Session, you can easily maintain a single session and cookies will be handled automatically.

```python
import requests

s = requests.Session()
s.get('<http://httpbin.org/cookies/set/number/123456789>')
r = s.get('<http://httpbin.org/cookies>')
print(r.text)
```

Thus, using Session allows you to simulate a single session without worrying about cookies, usually used after a successful login for subsequent actions.

4. SSL Certificate Verification

Additionally, requests provides certificate verification. When sending HTTP requests, it checks SSL certificates, and you can control whether to verify the certificate using the verify parameter. By default, verify is True and certificates are automatically verified.

If you request an HTTPS site and encounter a certificate verification error, you’ll see SSLError. To avoid this, set verify to False.

```python
import requests

response = requests.get('<https://www.12306.cn>', verify=False)
print(response.status_code)
```

You can also specify a local certificate to use as a client certificate. This can be a single file (containing the key and certificate) or a tuple containing two file paths:

```python
import requests

response = requests.get('<https://www.12306.cn>', cert=('/path/server.crt', '/path/key'))
print(response.status_code)
```

Note: The private key for a local certificate must be unencrypted; encrypted keys are not supported.

5. Proxy Settings

For some sites, during testing you might get content fine a few times, but during large-scale crawling, a site might present a captcha or redirect to a login page, or even block your IP. To prevent this, you can set proxies via the proxies parameter as follows:

```python
import requests

proxies = {
'http': '<http://10.10.1.10:3128>',
'https': '<http://10.10.1.10:1080>',
}

requests.get('<https://www.taobao.com>', proxies=proxies)
```

Of course, this example may not work if the proxy is invalid—replace with a valid proxy for testing.

If a proxy requires HTTP Basic Auth, you can use a syntax like http://user:password@host:port, for example:

```python
import requests

proxies = {'https': '<http://user:password@10.10.1.10:3128/',}
requests.get('<https://www.taobao.com>', proxies=proxies)
```

In addition to HTTP proxies, requests also supports SOCKS proxies. First, install the socks library:

`pip3 install "requests[socks]"`

Then you can use SOCKS proxy:

```python
import requests

proxies = {
    'http': 'socks5://user:password@host:port',
    'https': 'socks5://user:password@host:port'
}
requests.get('<https://www.taobao.com>', proxies=proxies)
```

6. Timeout Settings

If your local network is poor or the server is slow to respond, you might wait a long time for a response or not receive one at all. To prevent this, set a timeout. This is the time between sending the request and receiving the response.

```python
import requests

r = requests.get('<https://www.taobao.com>', timeout=1)
print(r.status_code)
```

This sets the timeout to 1 second. If there is no response within 1 second, an exception will be raised. In fact, requests uses two phases: connect and read. The timeout applies to the total time for both connect and read. If you want to specify them separately, you can pass a tuple:

`r = requests.get('<https://www.taobao.com>', timeout=(5, 30))`

If you want to wait indefinitely, you can set timeout to None or omit it entirely (default is None):

`r = requests.get('<https://www.taobao.com>', timeout=None)`

Or simply omit the parameter:

`r = requests.get('<https://www.taobao.com>')`

7. Authentication

When visiting a site you may encounter a login authentication page.

You can use requests’ built-in authentication features:

```python
import requests
from requests.auth import HTTPBasicAuth

r = requests.get('<http://localhost:5000>', auth=HTTPBasicAuth('username', 'password'))
print(r.status_code)
```

If the username and password are correct, authentication succeeds automatically and returns 200; if authentication fails, it returns 401. Of course, if you pass all parameters as an HTTPBasicAuth object, it can be cumbersome, so requests offers a simpler form: you can pass a tuple, and it will default to HTTPBasicAuth authentication.

```python
import requests

r = requests.get('<http://localhost:5000>', auth=('username', 'password'))
print(r.status_code)
```

Additionally, requests provides other authentication methods, such as OAuth authentication, which requires installing the oauth package. Install with:
`pip3 install requests_oauthlib`

Here is a method using OAuth1 authentication:

```python
import requests
from requests_oauthlib import OAuth1

url = '<https://api.twitter.com/1.1/account/verify_credentials.json>'
auth = OAuth1('YOUR_APP_KEY', 'YOUR_APP_SECRET',
            'USER_OAUTH_TOKEN', 'USER_OAUTH_TOKEN_SECRET')
requests.get(url, auth=auth)
```

For more details, refer to the official document of requests_oauthlib: [https://requests-oauthlib.readthedocs.org/](https://requests-oauthlib.readthedocs.org/)

8. Prepared Request

Earlier, when introducing urllib, we showed requests as a data structure, where parameters can be represented by a Request object. This is also possible in requests, and the data structure is called Prepared Request.

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

Here we introduced a Request, then used the url, data, and headers to construct the Request object, then called Session’s prepare_request to convert it into a Prepared Request object, and finally used send to dispatch it.

With the Request object, you can treat the request as an independent object, which is convenient for queue scheduling. Later we will use it to construct a Request queue.

More usage can be found in Requests’ official documentation: [http://docs.python-requests.org/](http://docs.python-requests.org/)

# Regular Expressions

In this section, we look at the usage of regular expressions. Regular expressions are a powerful tool for text processing with their own syntax. They enable search, replace, and validation on strings.

Of course, for crawlers, they are very convenient for extracting information from HTML.

## Example Introduction

Having said so much, you might still be fuzzy about what regular expressions actually are. Let’s look at a few examples to understand how to use them.

Open the regex tester provided by Open Source China: http://tool.oschina.net/regex/; paste the text to be matched, then choose common regular expressions to obtain the corresponding match results. For example, here is some text to be matched:

```plain text
Hello, my phone number is 010-86432100 and email is <cqc@cuiqingcai.com>, and my website is <https://cuiqingcai.com>.
```

This string contains a phone number and an email. Next, we’ll try to extract them with regular expressions.

An email starts with a string, followed by an @ symbol, and ends with a domain. It has a particular structure. For URLs, the beginning is the protocol, followed by ://, and then the domain and path.

For URLs, you can match with the following regular expression:

`[a-zA-z]+://[^\\s]*`

Using this regex to match a string will extract text that resembles a URL.

This regex looks chaotic, but it actually follows specific rules. For example, a-z matches lowercase letters, \s matches any whitespace, and * means repeating the preceding pattern any number of times. This long regex is a combination of many matching rules.

Once the regex is written, you can apply it to a long string to search and find matches. For a webpage, if you want to find how many URLs exist in the page source, you can match URLs with the URL-matching regex.

Common matching rules

| Pattern   | Description |
| ------ | ----------------------------------------------- |
| \w     | Matches letters, digits, and underscores |
| \W     | Matches characters that are not letters, digits, or underscores |
| \s     | Matches any whitespace character, equivalent to [\t\n\r\f] |
| \S     | Matches any non-whitespace character |
| \d     | Matches any digit, equivalent to [0-9] |
| \D     | Matches any non-digit character |
| \A     | Matches the start of a string |
| \Z     | Matches the end of the string; if a newline exists, only matches up to the newline |
| \z     | Matches the end of the string; if a newline exists, also matches the newline |
| \G     | Matches the position of the last match |
| \n     | Matches a newline |
| \t     | Matches a tab |
| ^      | Matches the start of a line |
| $      | Matches the end of a line |
| .      | Matches any character except a newline; when re.DOTALL is set, it matches any character including newline |
| [...]  | Denotes a set of characters; for example, [amk] matches a or m or k |
| ^      | Characters not in [] (negated character set) |
| *      | Repeats the preceding expression 0 or more times |
| +      | Repeats the preceding expression 1 or more times |
| ?      | Repeats the preceding expression 0 or 1 times (non-greedy) |
| {n}    | Exactly n repetitions of the preceding expression |
| {n, m} | Repeats of the preceding expression from n to m times (greedy) |
| a|b    | Matches a or b |
| ( )    | Groups the expressions inside parentheses |

Regular expressions aren’t Python-specific; they can be used in other languages too. But Python’s re module provides the full implementation of regular expressions, enabling regex use in Python. In Python, you almost always use this library for regular expressions. Let’s now learn some common methods.

## match

First, we introduce the most common matching method—match. Pass in the string to be matched and the regular expression; it checks whether the regex matches the string from the start.

The match method attempts to match the regex at the beginning of the string. If matched, it returns the matched result; if not, it returns None.

```python
import re

content = 'Hello 123 4567 World_This is a Regex Demo'
print(len(content))
result = re.match('^Hello\\s\\d\\d\\d\\s\\d{4}\\s\\w{10}', content)
print(result)
print(result.group())
print(result.span())
```

Here we first declare a string containing letters, whitespace, and digits. We then write a regex `^Hello\\s\\d\\d\\d\\s\\d{4}\\s\\w{10}` to match this long string.

The leading ^ matches the start of the string, i.e., Hello. Then \s matches whitespace to capture spaces. \d matches digits; three \d match 123. Then we again use one \s to match a space; after that there are 4 digits matched by \d{4}. Finally, there is a single whitespace character, and \w{10} matches 10 letters or underscores. Note that this does not fully match the target string, but it still succeeds; the match result simply ends earlier.

- Capturing groups

  To extract a portion of the string, you can enclose the desired substrings in parentheses. Each captured group corresponds to a group index, and you can obtain the extracted result by calling group with the index.

  ```python
  import re
  
  content = 'Hello 1234567 World_This is a Regex Demo'
  result = re.match('^Hello\\s(\\d+)\\sWorld', content)
  print(result)
  print(result.group())
  print(result.group(1))
  print(result.span())
  ```

  Here, we want to extract 1234567 from the string by wrapping the numeric part in parentheses and then using group(1) to obtain the match.

  group(1) differs from group(); group() returns the full match, while group(1) returns the first captured group. If there are additional groups, you can use group(2), group(3), etc.

- General matching

  The previous regex can be quite complex. For whitespace we use \s; for numbers we use \d. This can be tedious. There is a universal matcher: . (dot). The dot matches any character (except a newline); * repeats the preceding character zero or more times. They combine to match any character, so you don’t need to match character by character.

  Continuing the example, we can rewrite the regex as:

  ```python
  import re
  
  content = 'Hello 123 4567 World_This is a Regex Demo'
  result = re.match('^Hello.*Demo$', content)
  print(result)
  print(result.group())
  print(result.span())
  ```

  Here we omit the middle portion entirely, replacing it with .* and ending with the final string.

  group returns the entire matched string; span returns (0, 41), indicating the entire string length.

  Therefore, you can use .* to simplify regex writing.

- Modifiers

  Regular expressions can include optional flag modifiers to control the matching behavior. Modifiers are specified as optional flags.

  `result = re.match('^He.*?(\\d+).*?Demo$', content)`

  If the string contains a newline, the run will fail because the pattern does not account for newlines; the result would be None, and calling group would raise an AttributeError.

  Why does adding a newline cause a mismatch? Because the expression matches any character except a newline; when a newline is encountered, .*? cannot match, causing failure. Simply add the modifier re.S to fix this:

  ```python
  import re
  
  content = '''Hello 1234567 World_This
  is a Regex Demo
  '''
  result = re.match('^He.*?(\\d+).*?Demo$', content, re.S)
  print(result.group(1))
  ```

  The re.S modifier makes the dot match across newlines as well. This is frequently used in web scraping because HTML nodes often contain line breaks.

  There are other modifiers that can be used when necessary:

  | Modifier  | Description |
  | ---- | --------------------------------------- |
  | re.I | Case-insensitive matching |
  | re.L | Locale-aware matching |
  | re.M | Multiline matching; affects ^ and $ |
  | re.S | Dot matches all characters, including newline |
  | re.U | Unicode character properties for parsing; affects \w, \W, \b, and \B |
  | re.X | Allows for more readable regex with verbose mode |

  In web matching, re.S and re.I are the most commonly used.

## search

Earlier we mentioned that match starts from the beginning of the string, and if the start doesn’t match, the entire match fails.

```python
import re

content = 'Extra stings Hello 1234567 World_This is a Regex Demo Extra stings'
result = re.match('Hello.*?(\\d+).*?Demo', content)
print(result)
```

Here the string starts with Extra, but the regex starts with Hello, so the entire match fails because match requires the start to align with the pattern.

Because match requires the start to align, it’s less convenient for general searches. It’s better to use search, which scans the entire string and returns the first successful match. In other words, the regex can be a substring; search will scan the string and return the first matching content, or None if no match is found.

We replace match with search in the above code:

```python
import re

content = 'Extra stings Hello 1234567 World_This is a Regex Demo Extra stings'
result = re.search('Hello.*?(\\d+).*?Demo', content)
print(result)
```

## findall

Earlier we introduced search, which returns the first match. But if you want all matches, use findall. This method searches the entire string and returns all matches of the regex.

If you want all the links, singers, and song titles from the HTML text's a nodes, you can replace search with findall. If there are results, it will be a list, and you can iterate to extract each group.

```python
results = re.findall('<li.*?href="(.*?)".*?singer="(.*?)">(.*?)</a>', html, re.S)
print(results)
print(type(results))
for result in results:
    print(result)
    print(result[0], result[1], result[2])
```

Each element in the returned list is a tuple; use the corresponding index to retrieve.

If you only want the first content, you can use search. When you need multiple contents, use findall.

## sub

Besides extracting information, sometimes you need to modify text using regex. For example, removing all digits from a string is cumbersome with replace; you can use sub:

```python
import re

content = '54aK54yr5oiR54ix5L2g'
content = re.sub('\\d+', '', content)
print(content)
```

Here the first argument is \d+ to match all digits; the second argument is the replacement string (you can leave it empty to remove), and the third argument is the original string.

## compile

All the methods above operate on strings. Finally, we introduce compile, which compiles a regex string into a regex object for reuse in later matches. Example:

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

For example, there are three dates and we want to remove the time from all three. The sub method can be helped by compiling the regular expression into a regex object for reuse.

Moreover, compile can also take modifiers like re.S, so you don’t need to pass them every time to methods like search or findall. Therefore, compile acts as a wrapper around the regex to facilitate reuse.

# Spider Basic Library Usage - Maoyan Movie Ranking

Using requests to extract the top 100 Maoyan movies’ titles, times, ratings, images, and so on from the site http://maoyan.com/board/4. The extracted results will be saved to a file.

## Page Analysis

The top-ranked movie is Farewell My Concubine, and the page shows information such as the film title, cast, release time, release region, rating, and image.

Scroll to the bottom; you’ll see a paginated list. Click page 2, and observe the URL changes to: http://maoyan.com/board/4?offset=10

offset represents the offset value. If the offset is n, the displayed movie numbers are n+1 to n+10; each page shows 10 movies.

If you want to fetch the TOP 100, you can request 10 pages separately with offset values 0, 10, 20, ..., 90. After getting each page, use a regex to extract the relevant information to obtain all TOP 100 movies.

## Fetching the Homepage

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

> Note: Because Maoyan’s anti-crawling mechanism detects requests without cookies, add Cookie information in the request headers, otherwise you will get 418 errors.

## Regular Expression Extraction of Information

As you can see, a single movie’s information in the source code is represented by a dd node. We use a regex to extract some of this information.

```python
def parse_one_page(html):
    pattern = re.compile('<dd>.*?board-index.*?>(.*?)</i>.*?data-src="(.*?)".*?name.*?a.*?>(.*?)</a>.*?star.*?>(.*?)</p>.*?releasetime.*?>(.*?)</p>.*?integer.*?>(.*?)</i>.*?fraction.*?>(.*?)</i>.*?</dd>',
        re.S)
    items = re.findall(pattern, html)
    print(items)
```

This allows us to successfully extract all 10 movies on one page.

But that’s not enough—the data is a bit messy. We’ll process the matching results and generate dictionaries; the rewritten method is:

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

## Writing to a File

Next, we write the extracted results to a text file. Here we serialize the dictionaries using the JSON library’s dumps method, and set ensure_ascii to False to ensure the output is in Chinese characters rather than Unicode escapes.

```python
def write_to_file(content):
    with open('result.txt', 'a', encoding='utf-8') as f:
        print(type(json.dumps(content)))
        f.write(json.dumps(content, ensure_ascii=False)+'\\n')
```

## Complete Code

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
