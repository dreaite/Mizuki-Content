---
title: 'ブログ移行-Mizuki設定記録'
published: 2026-02-22
updated: 2026-02-23
description: 'NotionNextからAstro製Mizukiへの移行記録。Bangumi連携、セルフホストCIによるNotion同期、R2での画像永続化、LLMによる多言語記事生成を扱います。'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion', 'INFRA']
category: '开荒'
draft: false
lang: 'ja'
---

2026/02/22、記録

本日、notionNextからmizukiへ移行した。

====

なぜmizukiへ乗り換えたのかというと、notionNextは制約が厳しすぎたからだと思う。今はvibe codingもかなり発達しているので、もう少し自由に調整したくなった。

当初はhexoやinneiを試すつもりだったが、ちょうどmizukiの動画を見かけたので、まずは乗り換えてみることにした。機能も重すぎず、個人利用とプロジェクト用途のバランスもよさそうに感じた。

以下は、Notionをブログの保存先として利用している自分が行った、mizukiへの移行記録である。

# mizukiのデプロイ

MizukiはAstroをベースに開発されたブログフレームワークだ。正直なところ、これまでwordpress、hexo、notionNextなどのセルフホスト型ブログをいろいろ触ってきたものの、実際には外観をざっと見て、テーマがよさそうなら乗り換えるという程度だった。もちろん今回も例外ではない（

今回乗り換えた主な理由は、mizukiには軽い愚痴を書くのにちょうどよい日記機能があり、プロジェクトを紹介できるprojectページも用意されているからだ。それにAstroはメジャーなフレームワークなので、vibeするための素材も豊富そうだと思い、乗り換えることにした（そしてさっそく落とし穴に遭遇した（笑）

## mizukiの設定

基本的な設定については特に難しいところはなく、[公式ドキュメント](https://docs.mizuki.mysqil.com/)に従って設定すればよい。

注意点として、postとaboutの内容はmdを編集して管理する一方、dairy/project/timelineなどの内容はts内のdataを編集して管理する。

また、面白い機能として、bangumiのAPI（`/v0/users/{userId}/collections`）に接続して、ユーザーのアニメ視聴記録を取得できる。実は取得対象の種類を少し変更し、bangumiのtokenを設定すれば、erogeのお気に入りlistも表示できる。あとはアニメページを少し改修すれば、erogeの記録ページが完成する（新たな沼を掘る

## 個人設定

続いて個人用の設定について。CIを使ってNotionの内容をmizukiへリアルタイムに同期する予定で、さらにmizukiはちょうど[ブログのコンテンツと構成を分離して管理する方法](https://docs.mizuki.mysqil.com/Other/separation/)に対応している。そのため、コンテンツ用リポジトリ側に手を加えることにした。構造がシンプルなので変更もしやすい。

変更する予定の箇所は大きく分けて2つ。CIによるNotionコンテンツの同期と、LLMによるNotionから同期した記事の前処理を利用した多言語対応だ。

### CIによるNotionコンテンツの同期

やっていること自体は、cronで定期実行し、Notionのコンテンツ更新状況を定期的に確認するだけだ。ただ、Notion APIのあの通信速度では、2日ほど動かしただけでGitHub Actionsの利用枠を使い切りかねない。そのため、この同期Actionはself-hosted環境で動かすことにした。

具体的な実装もそれほど複雑ではない。まずNotionのdatabaseからコンテンツを取得し、post/about/dairyなどの種類ごとにtypeで振り分ける。続いて、Notionデータベースのcolumnを、それぞれのコンテンツで使用する実際の設定項目に対応付ければ、あとは自然な流れで完成する（つまり少しvibeする）。

ただし、小さな落とし穴もある。一部のimgでは、Notionのカバー画像リンクをそのまま取得すると、1時間で期限切れになるURLが返される（そういえば、Notionの画像ストレージが実はAWS S3だったのは意外だった。R2のほうが容量に余裕がある気がする）。そのため、外部ストレージに保存して永続化する必要がある（実際にはR2で十分）。ただし、Notionへ画像を追加するときにURLを直接指定していれば、取得されるのは入力した画像リンクのままとなる。つまり、あらかじめ画像をupdateしておけば、それほど大きな問題ではない。

具体的な実装については、こちらを参照：<br>[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)（ちょうどmizukiのGitHub repo機能がどう使えるか試してみる（

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### LLMによる多言語対応

Notion同期用CIを作る前に、mizukiのフレームワーク部分にも少し変更を加える必要があった。現状ではブラウザの言語設定に応じた表示言語の切り替えに対応していないため、少しだけ改修した（具体的には、.en.md/.ja.mdのような接尾辞を持つファイルを多言語対応の対象に追加した。フレームワーク自体が静的サイトなので、UIまで多言語表示に対応させるには大幅な改修が必要になる）。多言語切り替えの実装例はさまざまなプロジェクトにたくさんあるはずなので、大まかに説明して少しvibeすればよい。

::github{repo="dreaifekks/Mizuki"}

続いて、CIにLLM翻訳モジュールを追加する。

こちらもほぼ同じで、汎用的な翻訳promptとシンプルなAPI呼び出しを用意し、少しvibeすれば完成する。ただし、長い記事ではLLMの応答にかなり時間がかかる可能性があるため、実際のリクエストのタイムアウト時間を少し調整する必要がある。

[LLM部分の実装](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# おわりに

だいたい以上になる。そこまで深い改修をしたわけではないので、個人的な設定方針を簡単にまとめてみた。

CIの設定も終わり、これでアウトプットのflowも少しスムーズになったと思う（

ただ、将来的な多言語UI対応はかなり大きな沼になりそうだ（
