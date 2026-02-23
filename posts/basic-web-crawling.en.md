---
title: '爬虫基础知识'
published: 2024-01-13
updated: 2024-01-14
description: '爬虫是自动化程序，用于获取网页信息。基本原理包括发送HTTP请求获取网页源代码，提取所需数据，并将其保存。网页由HTML、CSS和JavaScript构成，爬虫需处理静态和动态网页。会话和Cookies用于维持用户状态，代理服务器可隐藏真实IP以防止被封锁。常用的请求方法有GET和POST，响应状态码指示请求结果。爬虫需遵循反爬虫策略，使用代理和适当的请求头以提高抓取效率。'
permalink: 'basic-web-crawling'
image: 'https://r2.dreaife.tokyo/notion/covers/8f8cef85bfdc4abe842b94671f890b35/GCrf7hlbAAA-uaN.jpg'
tags: ['network', 'spider', 'python']
category: 'spider'
draft: false
lang: 'en'
---

# HTTP Basic Principles

## URI and URL

Here we first understand URI and URL. URI stands for Uniform Resource Identifier, and URL stands for Uniform Resource Locator.

For example, [https://github.com/favicon.ico，它是一个] URL, which is also a URI. There is such an icon resource, and we use URL/URI to uniquely specify its access method, which includes the access protocol https, the path (the root directory), and the resource name favicon.ico. Through such a link, we can locate this resource on the Internet, which is the URL/URI.

URL is a subset of URI, meaning every URL is a URI, but not every URI is a URL. Then, what URI is not a URL? URI also includes a subclass called URN, whose full name is Uniform Resource Name. URN only names a resource and does not specify how to locate it, for example urn:isbn:0451450523 specifies a book's ISBN, which can uniquely identify the book but does not specify where to locate it; that is URN.

![20240114035901.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240114035901.png)

But on the current Internet, URN usage is quite rare, so almost all URIs are URLs, thus general web links can be referred to as URL, or URI; I personally prefer to call them URL.

## Hypertext

Next, let's understand another concept — hypertext, whose English name is hypertext. The web pages we see in the browser are formed by hypertext parsing; their page source code is a sequence of HTML code containing various tags, such as img to display images, p to designate paragraphs, etc. After the browser parses these tags, it forms the web page we normally see, and the page source HTML can be called hypertext.

For example, in Chrome, right-click anywhere on any page and choose "Inspect" (or press F12) to open the browser's developer tools. In the Elements tab you can see the current page's source code; this code is hypertext.

## HTTP and HTTPS

On Taobao's homepage [https://www.taobao.com/], the URL at the beginning begins with http or https, which is the protocol required to access the resource. Sometimes you may also see URLs starting with ftp, sftp, smb; these are also protocol types. In crawlers, the pages we fetch are usually HTTP or HTTPS, so here we first understand these two protocols.

HTTP stands for Hyper Text Transfer Protocol; the Chinese name is Hypertext Transfer Protocol. The HTTP protocol is used to transfer hypertext data from the network to the local browser; it ensures efficient and accurate transmission of hypertext documents. HTTP is a standard developed through collaborative effort by the World Wide Web Consortium (W3C) and the Internet Engineering Task Force (IETF); the widely used version today is HTTP 1.1.

HTTPS stands for Hyper Text Transfer Protocol over Secure Socket Layer; it is a secure HTTP channel, simply the secure version of HTTP, i.e., HTTP with SSL layer, abbreviated as HTTPS.

The security basis of HTTPS is SSL, so content transmitted through it is encrypted with SSL. Its main purposes can be divided into two:

- Establish a secure communication channel to ensure data transmission security.
- Verify the authenticity of the website; any site using HTTPS can have its authentication information viewed by clicking the lock icon in the browser's address bar, or can be verified via the security signature issued by a CA authority.

Some sites, even though using HTTPS, may still be flagged as not secure by browsers.

## HTTP Request Process

When we enter a URL in the browser and press Enter, we see the page content in the browser. In fact, this process is the browser sending a request to the server hosting the site; the server processes and parses the request, then returns a corresponding response, which is sent back to the browser. The response contains the page's source code and other content; the browser parses it and renders the page.

![20240114035924.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240114035924.png)

Here the client represents our own PC or mobile browser, and the server is the website's hosting server.

Open Chrome, right-click and choose “Inspect” to open the browser's developer tools. Here, visit a site like Baidu [http://www.baidu.com/], enter that URL and press Enter, and observe how the network requests occur. You can see in the Network panel a series of entries, each entry representing a request/response cycle.

### General

Click this entry to see more detailed information.

First is the General section: Request URL is the URL of the request, Request Method is the method, Status Code is the response status, Remote Address is the address and port of the remote server, and Referrer Policy is the referrer-detection policy.
Continuing down, you can see Response Headers and Request Headers, which represent the response headers and request headers respectively. The request headers carry lots of information such as browser identification, cookies, Host, etc. This is part of the request; the server uses the information in the headers to decide whether the request is valid and respond accordingly. The Response Headers shown in the figure are part of the response, such as the server type, document type, date, etc. After the browser receives the response, it parses the content and renders the page.

## Request

A request, issued by the client to the server, can be divided into four parts: Request Method, Request URL, Request Headers, and Request Body.

1. Request Method

There are two common methods: GET and POST.

When you enter a URL in the browser and press Enter, this initiates a GET request; the request parameters are included directly in the URL. For example, searching Python on Baidu results in a GET request; the link is https://www.baidu.com/s?wd=Python, where the parameter wd indicates the search keyword. POST requests are usually initiated when submitting a form. For example, in a login form, after entering username and password and clicking the “Login” button, this typically triggers a POST request, and its data is usually transmitted as form data, not visible in the URL.

Differences between GET and POST:

- In GET requests, parameters are included in the URL and can be seen in the URL, while in POST requests the URL does not contain these data; the data are transmitted via the form and included in the request body.
- GET requests have a maximum data size of about 1024 bytes, while POST has no such limit.

Generally, when logging in, you submit a username and password, which contain sensitive information; using GET would expose the password in the URL, leading to leakage, so it is better to send via POST. When uploading files, due to potentially large content, POST is used as well.

Most requests you encounter are GET or POST, but there are other methods as well, such as GET, HEAD, POST, PUT, DELETE, OPTIONS, CONNECT, TRACE, etc.

| Method      | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| GET     | Requests the specified page information and returns the entity body.            |
| HEAD    | Similar to GET, but the response does not contain the body; used to obtain headers. |
| POST    | Submits data to be processed to a specified resource (e.g., submitting a form or uploading a file). Data is included in the request body. POST may create new resources and/or modify existing ones. |
| PUT     | Replaces the content of a specified document with the data sent by the client. |
| DELETE  | Requests the server to delete the specified page.                              |
| CONNECT | Reserved for proxies that can tunnel the connection.                         |
| OPTIONS | Allows the client to view the server's capabilities.                        |
| TRACE   | Echoes back the request received by the server, mainly for testing or diagnostics. |
| PATCH   | A supplement to PUT, used for partial updates to a known resource.            |

2. Request URL

The request URL, i.e., the Uniform Resource Locator (URL), uniquely identifies the resource we want to request.

3. Request Headers

Request headers specify additional information for the server to use. Important headers include Cookie, Referer, User-Agent, etc. Here are brief explanations of some common headers.

- Accept: Request header field used to specify which types of information the client can accept.
- Accept-Language: Specifies the languages the client can accept.
- Accept-Encoding: Specifies the content encodings the client can accept.
- Host: Specifies the host IP and port of the requested resource; its value is the location of the original server or gateway for the request URL. Since HTTP/1.1, this header must be included.
- Cookie: Also commonly Cookies; data stored on the client to differentiate users and maintain sessions. Its main function is to maintain the current session. For example, after logging in to a site, the server stores login state in the session; on subsequent requests, Cookies keep you logged in.
- Referer: Identifies which page the request came from; the server can use this for analytics, anti-hotlinking, etc.
- User-Agent: A short string header that helps the server identify the client’s operating system and version, browser and version, etc. Adding this in crawlers can pretend to be a browser; without it, you might be flagged as a crawler.
- Content-Type: Also known as Internet Media Type or MIME type. In HTTP headers, it indicates the media type of the request body. For example, text/html denotes HTML, image/gif denotes GIF images, application/json denotes JSON data, and more can be found in this reference table: http://tool.oschina.net/commons.

Thus, request headers are an important part of the request, and when writing crawlers, you usually need to set request headers.

4. Request Body

The request body generally carries the data in POST requests; for GET requests, the body is empty.

Before logging in, we fill in a username and password, and when submitting these are sent to the server as form data. In this case, pay attention to the Content-Type specified in the Request Headers as application/x-www-form-urlencoded. Only when Content-Type is set to application/x-www-form-urlencoded will the data be submitted as form data. You can also set Content-Type to application/json to submit JSON data, or to multipart/form-data to upload files.

| Content-Type                      | Data submission method     |
| --------------------------------- | ----------- |
| application/x-www-form-urlencoded | Form data        |
| multipart/form-data               | Form file uploads      |
| application/json                  | Serialized JSON data |
| text/xml                          | XML data      |

In a crawler, to construct a POST request, you need to use the correct Content-Type and understand which Content-Type different request libraries use for various parameters; otherwise, POST submissions may not receive a proper response.

## Response

A response is returned by the server to the client and can be divided into three parts: Response Status Code, Response Headers, and Response Body.

1. Response Status Code

The response status code indicates the server's response status. For example, 200 means normal response, 404 means not found, 500 means internal server error. In crawlers, you can determine whether the server responded normally by the status code; if the status is 200, you have data, and you can proceed; otherwise, you can ignore.

<details>
<summary>Common Error Codes</summary>

| Status Code | Description       | Details                              |
| ----------- | ----------------- | ------------------------------------ |
| 100 | Continue         | The requester should continue with the request. The server has received part of the request and is waiting for the rest. |
| 101 | Switching Protocols | The requester has asked the server to switch protocols, the server has agreed and is ready to switch. |
| 200 | OK | The server has successfully processed the request. |
| 201 | Created | The request has succeeded and the server has created a new resource. |
| 202 | Accepted | The server has accepted the request but has not yet processed it. |
| 203 | Non-Authoritative Information | The server has successfully processed the request, but the returned information may come from another source. |
| 204 | No Content | The server successfully processed the request, but there is no content to return. |
| 205 | Reset Content | The server successfully processed the request, and the content has been reset. |
| 206 | Partial Content | The server has successfully processed part of the request. |
| 300 | Multiple Choices | The server can provide multiple options for the request. |
| 301 | Moved Permanently | The requested page has permanently moved to a new location; permanent redirect. |
| 302 | Found | The requested page temporarily moves to another page; temporary redirect. |
| 303 | See Other | If the original request was POST, the redirected document should be retrieved with GET. |
| 304 | Not Modified | The requested page has not been modified; continue using the previous resource. |
| 305 | Use Proxy | The requester should use a proxy to access the page. |
| 307 | Temporary Redirect | The requested resource is temporarily located at another place. |
| 400 | Bad Request | The server cannot parse the request. |
| 401 | Unauthorized | The request lacks valid authentication credentials. |
| 403 | Forbidden | The server refuses to fulfill the request. |
| 404 | Not Found | The server cannot find the requested page. |
| 405 | Method Not Allowed | The method specified in the request is not allowed. |
| 406 | Not Acceptable | The server cannot respond with the requested content. |
| 407 | Proxy Authentication Required | The client must authenticate itself to the proxy. |
| 408 | Request Timeout | The server timed out waiting for the request. |
| 409 | Conflict | The request could not be completed due to a conflict with the current state of the resource. |
| 410 | Gone | The resource requested is no longer available. |
| 411 | Length Required | The server refuses to accept the request without a defined Content-Length. |
| 412 | Precondition Failed | The server does not meet one of the preconditions specified in the request headers. |
| 413 | Payload Too Large | The request entity is larger than the server is able to process. |
| 414 | URI Too Long | The URI requested is longer than the server is able to process. |
| 415 | Unsupported Media Type | The request format is not supported by the target resource. |
| 416 | Range Not Satisfiable | The server cannot provide the requested range. |
| 417 | Expectation Failed | The server cannot meet the requirements of the Expect request-header field. |
| 500 | Internal Server Error | The server encountered an error and could not complete the request. |
| 501 | Not Implemented | The server does not support the functionality required to fulfill the request. |
| 502 | Bad Gateway | The server, while acting as a gateway or proxy, received an invalid response from the upstream server. |
| 503 | Service Unavailable | The server is currently unable to handle the request. |
| 504 | Gateway Timeout | The server, acting as a gateway or proxy, did not receive a timely response from the upstream server. |
| 505 | HTTP Version Not Supported | The server does not support the HTTP protocol version used in the request. |
</details>

2. Response Headers

Response headers contain the server's reply information, such as Content-Type, Server, Set-Cookie, etc. Here are brief explanations of some common headers.

- Date: The time the response was generated.
- Last-Modified: The last modification time of the resource.
- Content-Encoding: The encoding of the response content.
- Server: Information about the server, such as its name and version.
- Content-Type: The document type, indicating the type of data returned, such as text/html for HTML documents, application/x-javascript for JavaScript files, image/jpeg for images.
- Set-Cookie: Sets cookies. The Set-Cookie header tells the browser to store this in Cookies; on subsequent requests, Cookies are sent.
- Expires: Specifies the expiration time of the response; proxies or browsers can update the cached content. If you visit again, content can be loaded directly from the cache, reducing server load and loading time.

3. Response Body

Most importantly is the content of the response body. The body contains the main data of the response; for example, when requesting a web page, the response body is the page's HTML code; when requesting an image, the response body is the image's binary data. When crawling a page, the content you parse comes from the response body.

In the browser's developer tools, click Preview to see the page's source code, which is the content of the response body; this is the target to parse.

When crawling, we mainly obtain the page's source code, JSON data, etc., from the response body, and then extract the corresponding content.

# Web Page Basics

## Composition of Web Pages

A webpage can be divided into three parts — HTML, CSS, and JavaScript. If you compare a webpage to a person, HTML is the skeleton, JavaScript is the muscles, and CSS is the skin; only when combined do they form a complete webpage.

1. HTML

HTML is a language used to describe webpages, full name Hyper Text Markup Language. Web pages include text, buttons, images, and videos, and the basic structure is HTML. Different types of elements are represented by different tags, such as img for images, video for videos, p for paragraphs; their layout is often achieved by nesting div elements. The tags are arranged and nested to form the page's framework.

In Chrome, open Baidu, right-click and choose “Inspect” (or press F12) to open the developer mode. In the Elements tab you can view the page's source code.

This is HTML; the entire page is built from nested tags. The nodes defined by these tags nest and combine to form a complex hierarchical structure, which constitutes the page's architecture.

2. CSS

HTML defines the page structure, but plain HTML layout alone isn’t very attractive. CSS is used to style the page.

CSS stands for Cascading Style Sheets. "Cascading" means that when multiple styles are applied to HTML and conflicts occur, the browser resolves them according to the cascade order. "Styles" refer to text size, color, spacing, layout, etc.

CSS is currently the only standard for web page styling. With CSS, pages look more attractive.

```css
#head_wrapper.s-ps-islite .s-p-top {
    position: absolute;
    bottom: 40px;
    width: 100%;
    height: 181px;
}
```

That is a CSS rule. The part before the braces is a CSS selector. This selector means: first select the node with id head_wrapper and class s-ps-islite, then select the internal node with class s-p-top. Inside the braces are individual style rules, such as position indicating absolute layout, bottom indicating a bottom margin of 40 pixels, width 100% to fill the parent, and height for the element's height. In other words, we write placement, width, height, and other styles in this form, bracketed, and the initial CSS selector that targets the selected elements makes the style take effect, and the elements render accordingly.

In web pages, style rules are usually defined globally and written into CSS files (with a .css suffix). In HTML, you can include the prepared CSS file with a link tag, and the whole page becomes more visually appealing.

3. JavaScript

JavaScript, or JS, is a scripting language. HTML and CSS together provide static information to users, but lack interactivity. You may see interactive effects on a page, such as download progress bars, prompts, or carousels, and this is usually thanks to JavaScript. It enables real-time, dynamic, interactive page functionality.

JavaScript is typically loaded as a separate file, with a .js suffix, and included in HTML via a script tag, for example:

```html
<script src="jquery-2.1.0.js"></script>
```

In summary, HTML defines the content and structure of a webpage, CSS describes the layout, and JavaScript defines the page's behavior.

## Web Page Structure

Let's start with an example to feel the basic structure of HTML. Create a text file with any name, with a .html extension, containing the following:

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>This is a Demo</title>
 </head>
 <body>
  <div id="container">
   <div class="wrapper">
    <h2 class="title">Hello World</h2>
    <p class="text">Hello, this is a paragraph.</p>
   </div>
  </div>
 </body>
</html>
```

This is the simplest HTML example. The document type is defined with DOCTYPE at the top; the outermost tag is html, and there are closing tags to mark the end. Inside are head and body tags, which represent the page header and page body, and both require closing tags. The head tag defines some page configurations and references, for example:

`<meta charset="UTF-8">`

This specifies the page's encoding as UTF-8.

The title tag defines the page title, which will be displayed on the browser tab but not in the body. The body tag contains the actual content displayed on the page. The div tag defines a block in the page; its id is container, a very commonly used attribute, and the id's value is unique in the page; we can access this block via it. Inside this block there is another div tag with class wrapper, which is another common attribute often used with CSS to set styles. Inside this block there is an h2 tag representing a second-level heading, and a p tag representing a paragraph. The corresponding content can be written directly inside these elements, and they also have their own class attributes.

Save the code, open the file in a browser, and you will see content like in the figure.

![20240114040127.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240114040127.png)

As you can see, the tab shows the text This is a Demo, which is defined in the head's title. The page body is generated by the elements defined in the body, and you can see the secondary heading and the paragraph.

This example is the general structure of a webpage. A standard webpage is html with nested head and body; the head defines the page's configuration and references, and the body defines the main content.

## Node Tree and Relationships Between Nodes

In HTML, all content defined by tags is a node, forming an HTML DOM tree.

First, let's understand what DOM is. The DOM is a standard by the W3C (World Wide Web Consortium). Its English full name is Document Object Model. It defines a standard for accessing HTML and XML documents:

> The W3C Document Object Model (DOM) is a platform- and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of documents.

The W3C DOM standard is divided into three parts:

- Core DOM — the standard model for any structured document
- XML DOM — the standard model for XML documents
- HTML DOM — the standard model for HTML documents

According to the W3C HTML DOM standard, all content in an HTML document is nodes:

- The whole document is a document node
- Each HTML element is an element node
- The text inside HTML elements is a text node
- Each HTML attribute is an attribute node
- Comments are comment nodes

HTML DOM treats an HTML document as a tree structure, called a node tree.

![20240114040145.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240114040145.png)

Through the HTML DOM, all nodes in the tree can be accessed via JavaScript; all HTML node elements can be modified, created, or deleted.

Nodes in the tree have hierarchical relationships. We commonly use terms such as parent, child, and sibling to describe these relationships. A parent node has child nodes, and siblings are nodes at the same level.

At the top of the node tree is the root. Besides the root, every node has a parent and can have any number of child or sibling nodes.

## Selectors

We know a webpage is made of individual nodes, and CSS selectors apply different style rules to different nodes. So how do we locate nodes?

In CSS, we use CSS selectors to locate nodes. For example, in the above example, the div node has id container, which can be expressed as #container; the # at the start represents an id selector, followed by the id name. If we want to select a node with class wrapper, we can use .wrapper; here the dot at the start denotes a class selector, followed by the class name. There's also a way to select by tag name, e.g., to select second-level headings, simply use h2. These are the three most common selectors: by id, by class, and by tag name; remember their syntax.

Additionally, CSS selectors support nested selection: place spaces between selectors to indicate nesting, such as #container .wrapper p, which means first select the node with id container, then select its internal node with class wrapper, and finally select the p node inside it. If you omit spaces, it denotes a sibling relationship, e.g., div#container .wrapper p.text means first select the div with id container, then the internal node with class wrapper, then the p node with class text inside that. This is CSS selectors; their filtering capability remains very powerful.

In addition, CSS selectors have some other syntactic rules.

<details>
<summary>CSS Syntax</summary>

| Selector | Example | Description |
| -------------------- | ------------------ | ----------------------------- |
| .class | .intro | Select all nodes with class="intro" |
| #id | #firstname | Select all nodes with id="firstname" |
| * | * | Select all nodes |
| element | p | Select all p nodes |
| element,element | div,p | Select all div nodes and all p nodes |
| element element | div p | Select all p nodes inside div nodes |
| element>element | div>p | Select all p nodes whose parent is a div |
| element+element | div+p | Select all p nodes immediately following a div |
| [attribute] | [target] | Select all nodes with the target attribute |
| [attribute=value] | [target=blank] | Select all nodes with target="blank" |
| [attribute~=value] | [title~=flower] | Select all nodes whose title attribute contains the word "flower" |
| :link | a:link | Select all unvisited links |
| :visited | a:visited | Select all visited links |
| :active | a:active | Select active links |
| :hover | a:hover | Select links under the mouse cursor |
| :focus | input:focus | Select focused input nodes |
| :first-letter | p:first-letter | Select the first letter of every p |
| :first-line | p:first-line | Select the first line of every p |
| :first-child | p:first-child | Select all p that are the first child of their parent |
| :before | p:before | Insert content before each p's content |
| :after | p:after | Insert content after each p's content |
| :lang(language) | p:lang | Select all p elements with lang attributes starting with "it" |
| element1~element2 | p~ul | Select all ul elements preceded by a p |
| [attribute^=value] | a[src^="https"] | Select all a elements whose src starts with "https" |
| [attribute$=value] | a[src$=".pdf"] | Select all a elements whose src ends with ".pdf" |
| [attribute*=value] | a[src*="abc"] | Select all a elements whose src contains the substring "abc" |
| :first-of-type | p:first-of-type | Select all p elements that are the first of their type among siblings |
| :last-of-type | p:last-of-type | Select all p elements that are the last of their type among siblings |
| :only-of-type | p:only-of-type | Select all p elements that are the only one of their type among siblings |
| :only-child | p:only-child | Select all p elements that are the only child of their parent |
| :nth-child(n) | p:nth-child | Select all p elements that are the nth child of their parent |
| :nth-last-child(n) | p:nth-last-child | As above, counting from the last child |
| :nth-of-type(n) | p:nth-of-type | Select all p elements that are the second p of their parent |
| :nth-last-of-type(n) | p:nth-last-of-type | Same as above, counting from the last child |
| :last-child | p:last-child | Select all p elements that are the last child of their parent |
| :root | :root | Select the root element of the document |
| :empty | p:empty | Select all p elements with no children (including text) |
| :target | #news:target | Select the currently active target in the document |
| :enabled | input:enabled | Select all enabled input elements |
| :disabled | input:disabled | Select all disabled input elements |
| :checked | input:checked | Select all checked input elements |
| :not(selector) | :not | Select all elements that do not match the selector |
| ::selection | ::selection | Select the portion of the document that has been highlighted by the user |

</details>

# Crawling Basics

We can think of the Internet as a giant web, and crawlers (web crawlers) as spiders crawling the net. Treat each node as a webpage; the crawler visits a page to obtain its information. The connections between nodes can be thought of as links between pages; after visiting one node, the spider can follow the links to reach the next node and fetch subsequent pages. In this way, all the web’s nodes can be crawled, and a site’s data can be scraped.

## Crawling Overview

In simple terms, a crawler is an automated program that fetches web pages and extracts and stores information. Here is a brief overview.

1. **Fetch Web Pages**

   The crawler’s first task is to fetch the page, i.e., to obtain the page’s source code. The source code contains useful information, so once fetched, you can extract the desired data.

   Previously we discussed the concepts of requests and responses: you send a request to the site's server, and the response body is the page's source code. Therefore, the key part is to construct a request and send it to the server, then receive and parse the response.

   Python provides many libraries to help us implement this operation, such as urllib, requests, etc. We can use these libraries to implement HTTP requests; requests and responses are represented using data structures provided by the libraries. After obtaining the response, you only need to parse the Body part of the data structure to get the page’s source code, enabling you to automate the page-getting process.

2. **Extract Information**

   After obtaining the page's source code, the next step is to analyze the source code to extract the data we want. First, the most universal method is to use regular expressions; this is a universal approach, but constructing regular expressions can be complex and error-prone.

   Additionally, because web page structures follow certain rules, there are libraries that extract web information based on node attributes, CSS selectors, or XPath, such as Beautiful Soup, pyquery, lxml, etc. Using these libraries, we can efficiently extract information from the page, such as node attributes and text values.

   Extracting information is a very important part of crawling; it helps organize scattered data for subsequent handling and analysis.

3. **Save Data**

   After extracting information, we typically save the data somewhere for later use. There are many formats, such as saving as TXT or JSON, or saving to databases like MySQL and MongoDB, or saving to remote servers via methods like SFTP.

4. **Automation**

   When we mention automation, it means crawlers can perform these tasks on our behalf. Of course, we can manually extract the information, but when the scale is large or we want to obtain a lot of data quickly, automation is preferable. A crawler is an automated program that carries out the crawling, can handle various exceptions and retry on errors, and ensures the crawling runs continuously and efficiently.

## What Data Can Be Retrieved

Web pages contain various kinds of information. The most common are standard web pages, which correspond to HTML code; the most commonly fetched data is the HTML source code.

Also, some pages return not HTML but a JSON string (many APIs use this form); this data format is convenient for transmission and parsing. It can be crawled as well, and data extraction can be easier.

Additionally, you may see various binary data, such as images, videos, and audio. With crawlers, you can fetch these binary data and save them with appropriate filenames.

You can also encounter files with various extensions, such as CSS, JavaScript, and configuration files; these are also common files that can be crawled as long as they are accessible in the browser.

All of the above correspond to their respective URLs, based on HTTP or HTTPS; as long as it is this type of data, crawlers can fetch it.

## JavaScript Rendering Pages

Sometimes, when we use urllib or requests to fetch a page, the source code we obtain may differ from what is seen in the browser.

This is a very common problem. Today’s websites increasingly use Ajax and frontend modular tools, and the entire page may be rendered by JavaScript, meaning the original HTML code is just an empty shell, for example:

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>This is a Demo</title>
 </head>
 <body>
  <div id="container">
  </div>
 </body>
 <script src="app.js"></script>
</html>
```

The body only contains a node with id container, but note that app.js is included after the body, and it is responsible for rendering the entire site.

When opening this page in a browser, the HTML content loads first, then the browser detects app.js, fetches it, and runs the JavaScript code, which modifies the HTML nodes by adding content, ultimately resulting in a complete page.

However, when requesting this page with urllib or requests, you only get the HTML code; it won’t load the JavaScript file, so you won’t see the browser-rendered content.

This explains why sometimes the source code you fetch differs from what you see in the browser.

Therefore, the HTML source obtained via basic HTTP request libraries may differ from the page as rendered by the browser. In such cases, you can analyze the backend Ajax interfaces or use libraries like Selenium or Splash to simulate JavaScript rendering.

# Sessions and Cookies

While browsing pages, you often encounter the need to log in; some pages are only accessible after login, and after logging in you can access many pages in a row, but sometimes you need to re-login after a certain time. Some sites also automatically log you in when you open the browser, and the login may remain valid for a long time. This involves sessions and cookies.

## Static vs Dynamic Web Pages

Before we begin, let's understand static vs dynamic web pages. Here is the example from earlier:

```html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="UTF-8">
  <title>This is a Demo</title>
 </head>
 <body>
  <div id="container">
   <div class="wrapper">
    <h2 class="title">Hello World</h2>
    <p class="text">Hello, this is a paragraph.</p>
   </div>
  </div>
 </body>
</html>
```

This is the most basic HTML code; save it as an .html file on a host with a fixed public IP, install a server like Apache or Nginx, so that others can access the page through the server—this is a simple website.

This kind of webpage is written in HTML; text, images, and other content are specified by HTML code. This type of page is static: it loads quickly, and is easy to write, but has significant drawbacks, such as poor maintainability and the inability to flexibly display content based on the URL. For example, if we want to pass a name parameter in the URL to display on the page, this is not feasible.

Therefore, dynamic pages emerged. They can parse changes in URL parameters, connect to a database, and dynamically render different content, offering great flexibility. Most sites we encounter today are dynamic; they are not just simple HTML, but may be written in languages like JSP, PHP, Python, etc., and are far more powerful and feature-rich than static pages.

Furthermore, dynamic sites can implement user login and registration. Recalling the initial question, many pages require login to view. In general, after entering a username and password to log in, you obtain something like a credential, and with it you can maintain a login state to access pages that require login.

## Stateless HTTP

To understand sessions and cookies, we first need to understand a feature of HTTP called statelessness.

HTTP’s statelessness means the HTTP protocol does not retain memory of transactions; the server does not know the client’s state. When we send a request to the server, the server processes it and returns a response, and this process is completely independent; the server does not remember prior state changes. This means that if later you need to process earlier information, you must resend those requests, leading to repeated requests and extra overhead, which is wasteful—especially for pages requiring user login.

Two techniques to maintain HTTP connection state emerged: sessions (on the server) and cookies (on the client). With cookies, the browser automatically includes them in subsequent requests to the server; the server identifies the user via cookies, determines if the user is logged in, and returns the appropriate response.

We can understand that cookies store login credentials; with them, on subsequent requests you only need to send cookies, without re-entering username and password.

Thus in crawling, when you need to access pages that require login, you can directly reuse the cookies obtained after a successful login in the request headers, without re-simulating login.

1. **Sessions**

   A session originally means a finite sequence of actions/messages. For example, a phone call—from picking up the phone to hanging up—constitutes a session.

   In the Web, a session object stores the attributes and configuration information needed for a specific user session. This way, when a user navigates between web pages of an application, the variables stored in the session object persist for the entire user session. When a user requests a Web page from the application and there is no session yet, the web server will automatically create a session object. When the session expires or is abandoned, the server will terminate the session.

2. Cookies

Cookies refer to data stored on the user’s local device by websites to distinguish users and track sessions.

- **Session persistence**

  When the client first requests the server, the server returns a response with a Set-Cookie header to identify the user. The browser stores the Cookies. On subsequent requests to the site, the browser includes these Cookies in the request header; the server uses the Cookies to locate the corresponding session and determine the user’s status.

  When you successfully log in to a site, the server tells the client which Cookies to set; on subsequent visits, the client sends the Cookies to the server, which then finds the corresponding session and verifies. If the variables in the session that indicate login status are valid, the user is considered logged in, and the server returns content that’s visible only after login; the browser can render it.

  Conversely, if the Cookies sent to the server are invalid or the session has expired, you will not be able to continue accessing the page, and you may receive an error response or be redirected to the login page.

  Therefore, Cookies and sessions must work together—the client side and the server side cooperate to implement login session control.

- **Attributes of Cookies**

  Now, let's look at what Cookies contain. Taking Zhihu as an example, open the Application tab in the browser’s developer tools, then on the left there is a Storage section; the last item is Cookies. Open it, and these are Cookies.

  ![20240114040215.png](https://dreaife-1306766477.cos.ap-nanjing.myqcloud.com/20240114040215.png)

  You can see that there are many entries; each entry can be called a Cookie. It has the following attributes:

  - Name, the name of the cookie. Once created, the name cannot be changed.
  - Value, the value of the cookie. If the value contains Unicode characters, you need to encode them. If the value is binary data, you need to use BASE64 encoding.
  - Max Age, the expiration time of the cookie in seconds; it is often used with Expires to calculate its validity. If Max-Age is positive, the cookie expires after Max-Age seconds. If negative, the cookie expires when the browser is closed, and the browser will not save this cookie in any form.
  - Path, the path for which the cookie is valid. If set to /path/, the cookie is accessible only on pages with that path. If set to /, the cookie is accessible across all pages of the domain.
  - Domain, the domain that can access the cookie. For example, if set to .zhihu.com, all domains ending with zhihu.com can access this cookie.
  - Size, the size of the cookie.
  - Http (HttpOnly), the cookie’s HttpOnly attribute. If true, the cookie is only included in HTTP requests and cannot be accessed via document.cookie.
  - Secure, whether this cookie should only be transmitted over secure protocols (HTTPS, SSL, etc.). Defaults to false.

- **Session Cookies and Persistent Cookies**

  In simple terms, session cookies keep cookies in the browser’s memory; when the browser is closed, these cookies disappear. Persistent cookies are saved to the client’s hard drive and can be used next time to maintain login state.

  In fact, strictly speaking, there is no hard division between session cookies and persistent cookies; it is determined by the cookie’s Max-Age or Expires field.

  Therefore, some sites that require persistent login set the cookie’s expiration longer, so that visiting again carries the previous cookie and you remain logged in.

## Common Misconceptions

When discussing session mechanisms, there is a common misconception—“as long as you close the browser, the session disappears.” Think of a membership card: unless the user actively cancels it with the store, the store won’t delete the user’s data. The same applies to sessions; unless the program tells the server to delete a session, the server keeps it.

But when you close the browser, the browser doesn’t actively inform the server that it will close, so the server has no opportunity to know. The illusion arises because most session mechanisms store the session ID in a session cookie, and after closing the browser the cookies disappear; upon reconnecting, you cannot locate the original session, so login state seems lost.

Moreover, since closing the browser does not delete the session, the server should set an expiration for the session; when the time since the last activity exceeds this expiration, the server can consider the client inactive and delete the session to save storage space.

# Proxy Basics

During crawling, you may encounter a scenario where the crawler runs smoothly at first, fetches data normally, and then, within a short time, you see errors like 403 Forbidden. Opening the page, you may see a message such as “Your IP address is making requests too frequently.” This is due to anti-crawling measures. For example, a server may monitor the number of requests from a single IP in a given time; if it exceeds a threshold, it may deny service and return an error. This is IP blocking.

If the server is monitoring the number of requests from an IP per unit time, using a method to disguise your IP so the server cannot identify your machine could help prevent IP blocking.

One effective method is to use a proxy.

## Basic Principle

A proxy, or proxy server, is a server that acts on behalf of network users to fetch information. In simple terms, it is an intermediary for network data.

When we normally request a website, we send the request to the Web server, and the server returns the response. If a proxy server is set, you effectively build a bridge between your machine and the server. Your machine does not directly request the Web server; instead, you send the request to the proxy server, which forwards the request to the Web server, and then forwards the Web server’s response back to your machine.

In this way, we can browse the web normally, but the real IP seen by the Web server is no longer your machine’s IP, achieving IP masking. This is the basic principle of a proxy.

## Uses of Proxies

So, what are proxies used for? Here are some common uses.

- Break through IP-based access restrictions to reach sites that are normally inaccessible.
- Access internal resources of organizations or institutions, e.g., using free proxies within an educational network to access FTP downloads/uploads and other resources.
- Improve access speed: proxies often have large disk caches; when information passes through, it is cached; subsequent requests for the same information can be served from the cache, speeding up access.
- Hide real IP: users can hide their IP, protecting against attacks. For crawlers, using proxies hides the crawler’s own IP to prevent blocking.

## Crawler Proxies

For crawlers, due to high fetch speeds, the same IP might be used too frequently, and sites may require CAPTCHA or block the IP, which is inconvenient.

Using proxies hides the real IP, making the server think the request comes from a proxy. By continuously changing proxies during crawling, you avoid blocking and can achieve better crawling performance.

## Proxy Classification

Proxies can be categorized by protocol or by anonymity level. Here is a summary:

1. By Protocol

- FTP proxy servers, mainly used to access FTP servers; typically support uploading, downloading, and caching; ports usually 21, 2121, etc.
- HTTP proxies, mainly used to access web pages; typically support content filtering and caching; ports 80, 8080, 3128, etc.
- SSL/TLS proxies, mainly used to access encrypted sites; generally provide SSL or TLS encryption (up to 128-bit); port 443.
- RTSP proxies, mainly for RealPlayer to access Real streaming servers; usually have caching; port 554.
- Telnet proxies, primarily for Telnet remote control (often used to hide identity in hacking); port 23.
- POP3/SMTP proxies, used for POP3/SMTP email; typically with caching; ports 110/25.
- SOCKS proxies, simply forward data packets without regard to protocol, so they are much faster; often include caching; port 1080. SOCKS has SOCKS4 and SOCKS5; SOCKS4 supports only TCP, while SOCKS5 supports TCP and UDP, and also supports various authentication mechanisms and server-side DNS resolution. In short, anything SOCKS4 can do, SOCKS5 can do as well; but SOCKS5 cannot necessarily do everything SOCKS4 can.

2. By Anonymity Level

- Highly anonymous proxies (elite proxies) forward data without modification, appearing to the server as a standard client, with the proxy’s IP being recorded.
- Ordinary anonymous proxies modify the data in some way; the server may detect that it’s a proxy and there’s a chance of tracing back to the client’s real IP. Proxies often add HTTP_VIA and HTTP_X_FORWARDED_FOR headers.
- Transparent proxies not only modify the data but also reveal the client’s real IP to the server. These proxies offer little more than caching for speed and content-filtering for security; the most common example is a hardware firewall in internal networks.
- Spy proxies refer to proxies created to record the data transmitted by users, for research, monitoring, etc.

## Common Proxy Settings

- Using free proxies from the Internet is best combined with high anonymity; fetch and filter usable proxies beforehand, or maintain a proxy pool.
- Use paid proxy services; there are many proxy providers online, and paid proxies typically offer higher quality than free proxies.
- ADSL dial-up: connect each time to obtain a new IP; high stability and a fairly effective solution.
