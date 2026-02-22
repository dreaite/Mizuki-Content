---
title: 'HTML学习'
published: 2022-07-15
updated: 2022-07-15
description: 'HTML学习涵盖了文档结构、文本标签、图片、音频和视频、超链接、表单、列表、表格、语义标签和特殊符号等基本概念。重要元素包括<html>、<head>、<body>、<div>、<span>、<img>、<audio>、<video>、<form>等，提供了创建网页所需的基础知识和示例代码。'
permalink: 'html-learning-guide.en'
image: 'https://r2.dreaife.tokyo/notion/covers/be99704a6a9d4bcc89d4fef3e02b15fd/20220818_230852.jpg'
tags: ['web', 'html', 'language']
category: 'FRONTEND'
draft: false
lang: 'en'
---

# HTML Learning

[MDN Official Documentation](https://developer.mozilla.org/zh-CN/)

## 1. Structure

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Web应用课</title>
</head>

<body>
    <h1>第一讲</h1>
</body>

</html>
```

- `<html>`

The top-level element of an HTML document

- `<head>`

Specifies configuration information related to the document (metadata), including the document's title, linked styles, and scripts.

- `<body>`

Represents the content of the document. `document.body`

- `<title>`

Document title.

- `<meta>`

Represents metadata information that cannot be represented by other HTML meta-related elements (one of `<base>`, `<link>`, `<script>`, `<style>` or `<title>`).

> charset
>
> `<meta charset="UTF-8">`
>
> - name / content
>
> ```html
> <meta name="viewport" content="width=device-width,initial-scale=1.0">
> <meta name="description" content="练习页面">
> <meta name="keywords" content="test">
> ```
>
>
- icon

`<link rel="icon" href="images/icon.png">`

- Multi-line comments

```html
<!--
	注释测试
-->
```


## 2. Text Tags

- `<div>`

A generic block-level container for flow content; without CSS, it has no effect on the content or layout. Block-level, ends with a newline.


eg.`<h1> <p> <pre> <ul> <ol> <table>`

- `<span>`

A generic inline container for phrasing content, with no specific semantic meaning. It can be used to group elements to achieve a styling intent (by using class or id attributes), or these elements share common attributes.


eg.`<i> <b> <del> <ins> <td> <a>`

- `<h1>`

Heading tags `<h1>`-`<h6>`

- `<p>`

Paragraphs; whitespace and line breaks are collapsed.

- `<pre>`

Represents preformatted text. The text inside is usually displayed respecting the original formatting, in a monospaced font, and whitespace characters (like spaces and line breaks) are preserved.


`&lt; == <			&gt; == >`

- `<br>`

Line break.

- `&nbsp; == ` Non-breaking space

- `<hr>`

Horizontal rule

- `<i>`

Italic

- `<b> | <strong>`

Bold

- `<del>`

Strikethrough

- `<ins>`

Underline

- `<mark>`

Highlight


## 3. Images


```html
<img width="100px" src="/image/mountain.jpg" alt="大山">
```

- src

The image file path

- alt

The text description of the image, optional

- height

Height, in CSS pixels

- width

Width, in CSS pixels


## 4. Audio and Video

- Audio

`<audio>`

> Play a single audio
>
> ```html
> <audio
>     controls
>     src="/audios/bgm.mp3">
>         播放失败
> </audio>
> ```
>
> - Play multiple audio sources
>
> ```html
> <audio controls>
>     <source src="/audios/sound1" type="audio/mpeg"/>
>     <source src="/audios/sound2" type="audio/mpeg"/>
> </audio>
> ```
>
>
- Video

`<video>`


```html
<video controls width="500">

    <source src="/videos/video1.mp4" type="video/mp4">

    <source src="/videos/video2.mp4" type="video/mp4">

    播放失败
</video>
```


## 5. Hyperlinks


`<a href="<https://dreaife.cc>" target="_blank">dreaife</a>`


Click to open in a new page `target="_blank"`


## 6. Forms


`form`

- `<input>`

```html
<form>
    <label for="aaa">AAA</label>
    <input type="text" name="AaA" id="aaa" placeholder="fdalflaf">
    <button type="submit">提交</button>
</form>
```

> type=""
> - text
>
> Create a basic single-line text input
>
> - number
>
> Enter a number, reject non-numeric input, and provide stepper arrows
>
> - email
>
> Enter or edit an email address
>
> - password
>
> Enter a password; the text is obscured so it cannot be read, typically replaced with symbols like asterisks (“*”) or bullets (“•”)
>
> - radio
>
> Rendered as small circular options; the selected one is active, similar to a checkbox
>
>
> Mutually exclusive for the same name
>
>

Common attributes include：


`name	id	maxlength	minlength	required	placeholder(when the form control is empty, the placeholder text)`

- `action` Redirects after submission.
- `<textarea>`
- `<select> & <option>`

```html
<label for="lang">语言</label>
<select name="lang" id="lang">
	<option value="">select...</option>
	<option value="cpp">cpp</option>
</select>
```


## 7. Lists

- `<ul>`

Unordered list

- `ol`

Ordered list


```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>

<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

- `<dl> <dt> <dd>`

```html
<dl>
    <dt>Name</dt>
    <dd>Godzilla</dd>
    <dt>Born</dt>
    <dd>1952</dd>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
    <dt>Color</dt>
    <dd>Green</dd>
    <dd>Orange</dd>
</dl>
```


`<dt>` not tab


`<dd>` add a tab


## 8. Tables


```html
<table>
        <caption>成绩单</caption>		<!--标题-->
        <thead>							<!--表头-->
            <tr>
                <th>姓名</th>
                <th>数学</th>
                <th>语文</th>
                <th>英语</th>
            </tr>
        </thead>
        <tbody>							<!--数据-->
            <tr>
                <td>Alice</td>
                <td>100</td>
                <td>99</td>
                <td>98</td>
            </tr>
            <tr>
                <td>Bob</td>
                <td>99</td>
                <td>98</td>
                <td>97</td>
            </tr>
        </tbody>
    </table>
```

- table
- thead
- tbody
- tr
- th
- td
- caption


## 9. Semantic Elements

- header

Used to display introductory content, typically containing a set of introductory or auxiliary navigation utility elements.

- nav

Represents a section of a page whose purpose is to provide navigation links within the current document or other documents.

- section

Represents a standalone section of content contained within an HTML document.

- figure

A figure referenced in the main text, such as an image, illustration, diagram, code snippet, etc.; when this portion is moved to an appendix or another page, it does not affect the main content.

- figcaption

The caption/title for the associated image, describing the other data within its parent <figure> element.

- article

Represents a self-contained composition in a document, page, application, or site, intended to be independently distributable or reusable.

- aside

Represents a part of the page that is related to the rest of the content but can be considered separate from that content and could be removed without affecting the rest of the page.

- footer

Represents the footer for the nearest section or root element. A footer typically contains the author, copyright data, or links related to the document.


```html
<header>
        <h3>我的收藏夹</h3>
    </header>
    <section>
        <h4>图片</h4>
        <figure>
            <img width="100" src="/images/logo.png" alt="logo">
            <figcaption>logo</figcaption>
        </figure>
    </section>
    <section>
        <h4>古诗</h4>
        <article>
            <h5>春晓</h5>
            <p>春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。</p>
        </article>
    </section>
    <footer>
        &copy;2018-2022 Me 版权所有
    </footer>
```


## 10. Special Symbols


| HTML Source Code   | Display Result | Description          |
| --------- | ---- | ----------- |
| `&lt;`    | <    | Less-than sign or display character    |
| `&gt;`    | >    | Greater-than sign or display character    |
| `&amp;`   | &    | Used to display other special characters |
| `&quot;`  | "    | Quotation mark          |
| `&reg;`   | ®    | Registered         |
| `&copy;`  | ©    | Copyright          |
| `&trade;` | ™    | Trademark          |
| `&nbsp;`  |      | Non-breaking space      |
