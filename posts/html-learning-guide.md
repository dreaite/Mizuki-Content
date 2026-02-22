---
title: 'HTML学习'
published: 2022-07-15
updated: 2022-07-15
description: 'HTML学习涵盖了文档结构、文本标签、图片、音频和视频、超链接、表单、列表、表格、语义标签和特殊符号等基本概念。重要元素包括<html>、<head>、<body>、<div>、<span>、<img>、<audio>、<video>、<form>等，提供了创建网页所需的基础知识和示例代码。'
permalink: 'html-learning-guide'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/23aac541-6d6c-41de-94de-056f6f9ea81e/20220818_230852.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=e14b8b41957bcf0c11123ecebbfefb184ed88c361b40ca5cd3ae4131f8d4c788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['web', 'html', 'language']
category: 'FRONTEND'
draft: false
---

# HTML学习


[MDN官方文档](https://developer.mozilla.org/zh-CN/)


## 1. 结构


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

HTML文档顶级元素

- `<head>`

规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。

- `<body>`

表示文档的内容。`document.body`

- `<title>`

文档标题。

- `<meta>`

表示那些不能由其它 HTML 元相关（meta-related）元素（(`<base>、<link>, <script>、<style> 或 <title>`）之一表示的任何元数据信息。

> charset
>
> `<meta charset="UTF-8">`
>
> - name content
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

- 多行注释

```html
<!--
	注释测试
-->
```


## 2. 文本标签

- `<div>`

通用型的流内容容器，在不使用CSS的情况下，其对内容或布局没有任何影响。块状，末尾带回车。


eg.`<h1> <p> <pre> <ul> <ol> <table>`

- `<span>`

短语内容的通用行内容器，并没有任何特殊语义。可以使用它来编组元素以达到某种样式意图（通过使用类或者 Id 属性），或者这些元素有着共同的属性。


eg.`<i> <b> <del> <ins> <td> <a>`

- `<h1>`

标题`<h1>-<h6>`

- `<p>`

段落，过滤掉空格和回车。

- `<pre>`

表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。


`&lt; == <			&gt; == >`

- `<br>`

回车，换行。


`&nbsp; == 空格`

- `<hr>`

横线

- `<i>`

斜体

- `<b> | <strong>`

加粗

- `<del>`

删除线

- `<ins>`

下划线

- `<mark>`

标注


## 3. 图片


```html
<img width="100px" src="/image/mountain.jpg" alt="大山">
```

- src

图片的文件路径

- alt

图片的文字描述，非强制

- height

高度，单位CSS像素

- width

宽度，单位CSS像素


## 4. 音频和视频

- 音频

`<audio>`

> 播放单个音频
>
> ```html
> <audio
>     controls
>     src="/audios/bgm.mp3">
>         播放失败
> </audio>
> ```
>
> - 播放多个音频
>
> ```html
> <audio controls>
>     <source src="/audios/sound1" type="audio/mpeg"/>
>     <source src="/audios/sound2" type="audio/mpeg"/>
> </audio>
> ```
>
>
- 视频

`<video>`


```html
<video controls width="500">

    <source src="/videos/video1.mp4" type="video/mp4">

    <source src="/videos/video2.mp4" type="video/mp4">

    播放失败
</video>
```


## 5. 超链接


`<a href="<https://dreaife.cc>" target="_blank">dreaife</a>`


点击跳到新页面`target="_blank"`


## 6. 表单


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
> 创建基础的单行文本框
>
> - number
>
> 输入一个数字，拒绝非数字输入，提供步进箭头
>
> - email
>
> 输入或编辑一个电子邮箱地址
>
> - password
>
> 输入密码，其中文本被遮蔽以致于无法读取，通常通过用诸如星号（“*”）或点（“•”）等符号替换每个字符来实现
>
> - radio
>
> 默认渲染为小型圆圈图表，填充即为激活，类似于checkbox
>
>
> 相同name互斥
>
>

常用属性有：


`name	id	maxlength	minlength	required	placeholder(当表单控件为空时，控件中显示的内容)`

- `action` 提交后跳转。
- `<textarea>`
- `<select> & <option>`

```html
<label for="lang">语言</label>
<select name="lang" id="lang">
	<option value="">select...</option>
	<option value="cpp">cpp</option>
</select>
```


## 7. 列表

- `<ul>`

无序列表

- `ol`

有序列表


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


`<dt>` 不tab


`<dd>` 加tab


## 8. 表格


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

## 9. 语义标签

- header

用于展示介绍性内容，通常包含一组介绍性的或是辅助导航的实用元素。

- nav

表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。

- section

表示一个包含在 HTML 文档中的独立部分。

- figure

在主文中引用的图片，插图，表格，代码段等等，当这部分转移到附录中或者其他页面时不会影响到主体。

- figcaption

是与其相关联的图片的说明/标题，用于描述其父节点 <figure> 元素里的其他数据。

- article

表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构。

- aside

示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。

- footer

表示最近一个章节内容或者根节点元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。


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


## 10. 特殊符号


| HTML源代码   | 显示结果 | 描述          |
| --------- | ---- | ----------- |
| `&lt;`    | <    | 小于号或显示标记    |
| `&gt;`    | >    | 大于号或显示标记    |
| `&amp;`   | &    | 可用于显示其它特殊字符 |
| `&quot;`  | "    | 引号          |
| `&reg;`   | ®    | 已注册         |
| `&copy;`  | ©    | 版权          |
| `&trade;` | ™    | 商标          |
| `&nbsp;`  |      | 不断行的空白      |
