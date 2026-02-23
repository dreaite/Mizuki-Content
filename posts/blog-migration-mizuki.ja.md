---
title: 'ブログ移行-Mizuki設定記録'
published: 2026-02-22
updated: 2026-02-23
description: 'notionNext から mizuki への移行プロセスを記録したものです。主な理由は notionNext の制限です。mizuki は Astro をベースにしたブログフレームワークで、軽量な日記とプロジェクトの展示をサポートします。設定は比較的シンプルで、内容はmdおよびtsファイルで制御され、bangumiのAPIに接続することもできます。CI を通じて notionのコンテンツをリアルタイムに同期し、多言語対応を行い、llm を用いて翻訳します。全体の設定方針は出力フローの最適化を目指します。'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'ja'
---

2026/02/22、記録

今日はNotionNextからMizukiへ移行しました。

====


要说为什么要换到mizuki，大概就是因为notionNext的限制太死了，毕竟现在vibe coding这么发达，还是想自由调整一点的。

実は現在はVibe Codingがこれだけ発展しているのに、やはり自由に調整したいと思い、NotionNextの制限があまりにも厳しいのが大きな理由です。

其实一开始是打算使用hexo或者innei看看的，结果没想到正好碰到mizuki的一个视频，就打算先换换看，正好功能不算太重，感觉对于个人和项目的平衡也不错。

当初はHexoやInneiを試してみようと思っていましたが、たまたま Mizuki の動画に出会い、まずは試してみることにしました。機能はそれほど重くなく、個人とプロジェクトのバランスにも良さそうだと感じました。

那么下面就大概是本人使用notion作为blog存储进行的mizuki迁移记录。

それでは、Notionをブログの保管場所として使って Mizuki へ移行した記録の概略を以下に示します。

# mizuki部署

MizukiはAstroをベースに開発されたブログフレームワークです。正直、以前はWordPress/Hexo/NotionNextのような自デプロイのブログをいくつか作りましたが、外観をざっくり見てテーマが良いと感じたので切り替える予定でした。今回ももちろん例外ではありません（

今回切り替えを選んだ主な理由は、Mizukiには日記機能があり、軽いつぶやきの需要を満たせること、またプロジェクトを紹介する場所があることです。Astroは定番のテーマということもあり、Vibeを求めるなら素材も比較的豊富だろうと思い、切り替えました（そして坑に遭遇しました（楽））

## mizuki配置

大まかな設定には特に難しい点はなく、[公式ドキュメント](https://docs.mizuki.mysqil.com/)に従って設定すれば大丈夫です。

大まかに注意すべき点は、postとaboutの内容はMarkdownを編集して制御するのに対し、dairy（日記）/project/timelineなどの他の内容は、ts内のdataを編集して制御する、という点です。

不过还有一个有趣的是可以连接bangumi的api(`/v0/users/{userId}/collections`)来获取用户番剧记录。那么其实稍微把获取类型改一下，加上配置一个bangumi的token其实就可以看到eroge的收藏list了。然后把动画页面再稍微改一下，eroge的记录页面就新鲜出炉了（挖坑

さらに面白いのは Bangumi の API(`/v0/users/{userId}/collections`) に接続してユーザーのアニメ記録を取得できる点です。実際には取得タイプを少し変え、Bangumiのトークンを設定すれば、エロゲーのコレクションリストを見ることができます。そしてアニメページを少しだけ修正すれば、エロゲーの記録ページが新しく完成します（穴を掘る

## 个人配置

次に個人設定についてです。CIを使ってNotionの内容を Mizuki にリアルタイムで同期させる予定なので、Mizukiは[ブログ内容とアーキテクチャを分離して記述することをサポートしている](https://docs.mizuki.mysqil.com/Other/separation/)ため、コンテンツリポジトリで手を動かすことになり、構造の変更も簡単です。

大まかに変更を想定しているのは2点です。1点目はCIを通じてNotionの執筆内容を同期させ、2点目はNotion同期の記事の前処理をLLMで行い多言語対応を実現することです。

### 通过ci对Notion内容进行同步

要するに cron 的な定時処理を作って Notion の内容更新状況を定期的に照会する、ということですが、Notion API の通信速度を考えると、2日も経たずに GitHub Actions のクォータが尽きてしまうのではないかと思うので、この同期用の Action を自ホスト上で動かすことにしました。

具体的な実装は特に難しくなく、Notionデータベースの内容を取り出し、post/about/dairy のような異なるタイプの内容を1つの type で分流し、Notion データベースのカラムと上記内容の実際の設定を対応させる、という流れです。そうすれば自然と連携が成立します（Vibeっぽく）。

ただし小さな問題点として、Notionのヘッダ画像リンクの一部は1時間で期限切れになるURLのまま取得されることがあります（Notionが使用している画像保存は実はAWS S3らしく、R2のほうが容量は大きいはずだと思います）。したがって外部ストレージに永続化しておく必要があります（実際にはR2で十分です）。ただしNotionの画像を追加する際にURLを直接使うと、取得されるリンクは上記の画像リンクのままです。事前に画像を更新しておけば、それほど問題にはなりません。

具体的な実装はおおよそ以下を参照してください： [NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)（Mizuki-GitHubのリポジトリをどう使えるかを試すにはちょうどいいです）

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### 通过llm来进行多语言适配

実際には Notion同期CI の前に、Mizuki のフレームワーク部分にも少し手を加える必要がありました。現状はブラウザの言語に追従して表示言語を切り替える機能がまだないため、少しだけ変更しました（.en.md/.ja.md のようなサフィックスを持つファイルを多言語対応に組み込む、という意味です。静的サイトを使っている場合、複数のUIを表示するには大幅な変更が必要になるでしょう）。この種の多言語切替はさまざまなプロジェクトで実現されているはずなので、大ざっぱに雰囲気を説明しておきます。

::github{repo="dreaifekks/Mizuki"}

それからCIにLLMの翻訳モジュールを追加します。

実際にはほぼ同じで、一般的な翻訳プロンプトと簡単なAPI呼び出しを組み合わせて、雰囲気を出す程度なら十分です。ただし長文のLLMの応答時間が長くなる可能性があるため、実際のリクエストのタイムアウトを少し調整する必要があります。

[llm部分实现](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# 结语

大体はこれくらいです。あまり深い変更はなく、個人の設定方針を概略だけ述べます。

現在CIを設定できたので、出力のフローを少しスムーズにしたと考えていいでしょう。
