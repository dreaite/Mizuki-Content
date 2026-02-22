---
title: 'HTML学习'
published: 2022-07-15
updated: 2022-07-15
description: 'HTML学习涵盖了文档结构、文本标签、图片、音频和视频、超链接、表单、列表、表格、语义标签和特殊符号等基本概念。重要元素包括<html>、<head>、<body>、<div>、<span>、<img>、<audio>、<video>、<form>等，提供了创建网页所需的基础知识和示例代码。'
permalink: 'html-learning-guide.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/be99704a6a9d4bcc89d4fef3e02b15fd/20220818_230852.jpg'
tags: ['web', 'html', 'language']
category: 'FRONTEND'
draft: false
lang: 'ja'
---

# HTMLの学習


[MDN公式ドキュメント](https://developer.mozilla.org/zh-CN/)


## 1. 構造


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

HTML文書の最上位要素

- `<head>`

文書に関する設定情報（メタデータ）を規定し、文書のタイトル、引用した文書スタイルやスクリプトなどを含む。

- `<body>`

文書の内容を表します。`document.body`

- `<title>`

文書のタイトル。

- `<meta>`

他の HTML 要素（メタ関連）では表現できないメタデータ情報を表します（`<base>`、`<link>`、`<script>`、`<style>`、または `<title>` のいずれかが示すもの以外）。

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

- 複数行のコメント

```html
<!--
	注释测试
-->
```


## 2. テキストタグ

- `<div>`

汎用のフローコンテンツ容器。CSSを使用しない場合、内容やレイアウトには影響を与えません。ブロック要素、末尾は改行。

例：`<h1> <p> <pre> <ul> <ol> <table>`

- `<span>`

語彙コンテンツの汎用行レベル容器で、特別な意味は持ちません。クラスや id 属性を用いて特定のスタイルを適用するために要素をグルーピングする際に使用します。

例：`<i> <b> <del> <ins> <td> <a>`

- `<h1>`

見出し`<h1>`-`<h6>`

- `<p>`

段落。空白と改行をフィルタします。

- `<pre>`

事前に定義されたフォーマットのテキストを表示します。この要素内のテキストは通常、元のファイルのレイアウトに従い等幅フォントで表示され、テキスト内の空白文字（スペースや改行など）もそのまま表示されます。


`&lt; == <			&gt; == >`

- `<br>`

改行

`&nbsp; == 空白`

- `<hr>`

水平線

- `<i>`

斜体

- `<b> | <strong>`

太字

- `<del>`

取り消し線

- `<ins>`

下線

- `<mark>`

マーク


## 3. 画像


```html
<img width="100px" src="/image/mountain.jpg" alt="大山">
```

- src

画像ファイルのパス

- alt

画像のテキスト説明（任意）

- height

高さ、CSSピクセル単位

- width

幅、CSSピクセル単位


## 4. 音声と動画

- 音声

`<audio>`

> 単一の音声を再生します
>
> ```html
> <audio
>     controls
>     src="/audios/bgm.mp3">
>         再生に失敗しました
> </audio>
> ```
>
> - 複数の音声を再生する場合
>
> ```html
> <audio controls>
>     <source src="/audios/sound1" type="audio/mpeg"/>
>     <source src="/audios/sound2" type="audio/mpeg"/>
> </audio>
> ```
>
>
- 動画

`<video>`


```html
<video controls width="500">

    <source src="/videos/video1.mp4" type="video/mp4">

    <source src="/videos/video2.mp4" type="video/mp4">

    再生に失敗しました
</video>
```


## 5. ハイパーリンク


`<a href="<https://dreaife.cc>" target="_blank">dreaife</a>`


新しいページを開くにはクリックします`target="_blank"`


## 6. フォーム


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
> 基本的な1行テキストボックスを作成します
>
> - number
>
> 数字を入力します。非数字の入力を拒否し、ステップアップ/ダウン矢印を提供します
>
> - email
>
> 電子メールアドレスを入力または編集します
>
> - password
>
> パスワードを入力します。文字は masking され、通常は星印（「*」）や点（「•」）などで置換されます
>
> - radio
>
> デフォルトは小さな円形のボタンとして表示され、選択状態は塗りつぶされ、チェックボックスに似ています
>
>
> 同じ name は排他的
>
>

よく使われる属性には：


`name	id	maxlength	minlength	required	placeholder(フォームコントロールが空のときに表示される内容)`

- `action` は送信後の遷移先を指定します。
- `<textarea>`
- `<select> & <option>`

```html
<label for="lang">言語</label>
<select name="lang" id="lang">
	<option value="">select...</option>
	<option value="cpp">cpp</option>
</select>
```


## 7. リスト

- `<ul>`

順序なしリスト

- `ol`

順序付きリスト


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


`<dt>` はタブなし


`<dd>` はタブ付き


## 8. テーブル


```html
<table>
        <caption>成績表</caption>		<!--タイトル-->
        <thead>							<!--表頭-->
            <tr>
                <th>姓名</th>
                <th>数学</th>
                <th>語文</th>
                <th>英語</th>
            </tr>
        </thead>
        <tbody>							<!--データ-->
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

## 9. セマンティック要素

- header

導入的な内容を表示するための要素で、通常は紹介的または補助的なナビゲーションの実用的な要素を包含します。

- nav

ページの一部を表し、現在の文書または他の文書にナビゲーションリンクを提供することを目的としています。

- section

HTML文書内の独立した部分を表します。

- figure

本文中に引用される画像、図、表、コード断片など。本文の主な部分が他の付録や別のページへ移動しても、本文には影響しません。

- figcaption

関連する画像の説明/タイトルで、親要素 <figure> のデータを説明します。

- article

文書、ページ、アプリケーション、サイト内の独立した構造を表します。可分離可能で再利用可能な構造として設計されています。

- aside

他のページの内容とほとんど関連がない部分を示し、それが独立して分割されても全体には影響を与えません。

- footer

直近の章の内容またはルート要素のフッターを表します。フッターには著者情報、著作権データ、文書に関連するリンクなどが含まれることが多いです。


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


| HTML源代码   | 表示結果 | 説明          |
| --------- | ---- | ----------- |
| `&lt;`    | <    | 小なり記号または表示用の記号    |
| `&gt;`    | >    | 大なり記号または表示用の記号    |
| `&amp;`   | &    | 他の特殊文字を表示するために使用できます |
| `&quot;`  | "    | 引用符          |
| `&reg;`   | ®    | 登録商標         |
| `&copy;`  | ©    | 著作権          |
| `&trade;` | ™    | 商標          |
| `&nbsp;`  |      | 改行不可の空白      |
