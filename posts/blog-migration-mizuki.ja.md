---
title: '博客迁移-Mizuki配置记录'
published: 2026-02-22
updated: 2026-02-23
description: '记录了从notionNext迁移到mizuki的过程，主要原因是notionNext的限制。mizuki是基于Astro的博客框架，支持轻量级的日记和项目展示。配置相对简单，内容通过md和ts文件控制，并可以连接bangumi的API。计划通过CI实现notion内容的实时同步，并进行多语言适配，使用llm进行翻译。整体配置思路旨在优化输出流程。'
permalink: 'blog-migration-mizuki.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'ja'
---

2026/02/22、記録

今日はNotionNextからMizukiへ移行しました。

====


なぜMizukiへ切り替えるのかというと、NotionNextの制約があまりにも窮屈すぎるからです。いまやVibe Codingがこれだけ発展しているのに、もう少し自由に調整したいと思いました。

実際には最初、HexoやInneiを試してみようと思っていましたが、たまたま Mizuki の動画を見つけて、まず乗り換えてみることにしました。機能はさほど重くなく、個人用とプロジェクトのバランスにも良さそうだと感じました。

それでは、Notionをブログの保存場所としてMizukiへ移行した際の移行記録の概要を以下に記します。

# Mizukiのデプロイ

MizukiはAstroをベースに開発されたブログフレームワークです。正直なところ、以前はWordPress/Hexo/NotionNextなどのセルフデプロイ型ブログをいくつか試しましたが、外観をざっと眺めてテーマが良さそうだと感じたので切り替えるつもりでした。今回も例外はありません（


今回切り替えを決めた主な理由は、Mizukiには日記機能があり、軽い愚痴を吐くのに適していて、プロジェクトを展示する場所もある点です。Astroはやはり定番のテーマなので、Vibeを取り入れたい場合には素材が比較的豊富だろうし、導入してみました（ただしハマりました（笑）

## Mizukiの設定

設定自体は特別なものはなく、[公式ドキュメント](https://docs.mizuki.mysqil.com/)に従って設定すればよいです。

大まかに注意すべき点は、postとaboutの内容は.mdを修正して制御する一方、dairyやproject、timelineといった他のコンテンツは、ts内のdataを修正して制御します。

また、面白い点としてBangumiのAPI（/v0/users/{userId}/collections）に接続して、ユーザーの番組履歴を取得できることがあります。取得タイプを少し変えて、Bangumiのトークンを設定すれば、エロゲーのコレクションのリストを見ることができるはずです。さらにアニメページを少しだけ手直しすれば、エロゲーの履歴ページが新たに出来上がります（穴を掘る

## 個人設定

次に個人設定について。Notionの内容をCIでリアルタイムにMizukiに同期させる予定なので、Mizukiは [ブログの内容とアーキテクチャを分離して記述する] に対応していることもあり（https://docs.mizuki.mysqil.com/Other/separation/）、内容のリポジトリでちょっと手を入れることにしました。構造を簡単に変更するのもずっと楽になります。

大まかに変更する点は二つです。CIを用いてNotionの作成内容を同期させ、LLMを使ってNotion同期記事の前処理を実現して多言語化すること。

### Notionの内容をCIで同期する

実際にはNotionの内容更新状況を定期的に照会する cron を作るということですが、Notion APIの通信速度の都合上、2日も走ればGitHub Actionsの利用上限を超えてしまいそうなので、この同期アクションは自前のホスト上で実行することにしました。

具体的な実装は特に難しいことはなく、Notionのデータベースの内容を取り出して、post/about/dairyなどの異なるタイプのコンテンツを1つのタイプで分流させ、Notionデータベースの列（columns）と上記コンテンツの具体的な設定と対応させる、という流れです。そうすれば自然と整うはずです（雰囲気づくりを指します）。

ただし小さな落とし穴があって、Notionのヘッダー画像リンクのいくつかは1時間で期限切れになるURLだったりします。（Notionが使っている画像ストレージはAWS S3だとは思いませんでしたが、R2の方が容量は大きいのではないでしょうか） そのため、外部ストレージに永続化する必要があります（実際にはR2で十分です）。ただしNotionの画像を追加する際に直接URLを使っていた場合、取り出したときも上記の画像リンクのままです。なので事前に画像を更新しておけば、大きな問題にはなりません。

具体的な実装はおおよそ以下を参照してください：
[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)(ちょうど Mizuki-GitHub のリポジトリをどう使えるかを試してみる

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### LLMを用いた多言語対応

Notionの同期CIの前に、Mizukiのフレームワーク部分も少し変更しました。現在はブラウザ言語に追随して表示言語を切り替える機能は実装されていないため、少しだけ手を加えました（.en.md/.ja.md のようなサフィックスのファイルを多言語対応に含める、という意味。本来のフレームワークは静的サイトなので、多言UIを表示するには大幅な変更が必要になります）。この種の多言語切替はさまざまなプロジェクトで実装されているはずなので、雰囲気だけ伝えれば十分です。

::github{repo="dreaifekks/Mizuki"}

次にCIにLLMの翻訳モジュールを追加します。

実際には、汎用の翻訳プロンプトに加えて簡単なAPI呼び出しを組み合わせ、雰囲気を出せればOKです。ただし長文のLLM応答時間が長くなることがあるため、実際のリクエストのタイムアウト時間を少し調整する必要があります。

[LLM部分実装](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# 結語

大体はこんな感じです。深い変更はあまりありませんが、私的な設定方針をざっくりと述べておきます。

今、CIを整えたことで、出力のフローも少しスムーズになったと言えるでしょう（
