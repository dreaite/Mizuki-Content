---
title: 'ブログ移行―Mizuki設定記録'
published: 2026-02-22
updated: 2026-02-23
description: 'NotionNextからAstro製Mizukiへの移行記録。Bangumi連携、セルフホストCIによるNotion同期、R2での画像永続化、LLMによる多言語記事生成を扱います。'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion', 'INFRA']
category: 'EXPLORE'
draft: false
lang: 'ja'
---

2026/02/22、記録

今日、notionNextからMizukiへ移行した。

====

なぜMizukiに乗り換えたのかというと、おそらくnotionNextの制約が厳しすぎたからだ。今はvibe codingもかなり発達しているので、もう少し自由に調整したくなった。

実は当初、HexoやInneiを試すつもりだったのだが、偶然Mizukiを紹介する動画を見かけたので、ひとまず乗り換えてみることにした。機能も重すぎず、個人用途とプロジェクト用途のバランスもよさそうに感じた。

以下は、Notionをブログの保存先として利用する場合のMizuki移行記録になる。

# Mizukiのデプロイ

MizukiはAstroベースで開発されたブログフレームワークだ。正直なところ、これまでWordPressやHexo、notionNextなどのセルフホスト型ブログをいろいろ触ってきたものの、実際には見た目をざっと確認して、テーマがよさそうなら乗り換えようと考える程度だった。もちろん今回も例外ではない（

今回乗り換えた主な理由は、Mizukiには軽い愚痴を書ける日記機能があり、プロジェクトを紹介できるprojectも用意されているからだ。それにAstroはメジャーなので、vibeするための素材も豊富そうだと思い、乗り換えることにした（そして落とし穴にハマった（笑））

## Mizukiの設定

設定自体は特に難しいものではなく、[公式ドキュメント](https://docs.mizuki.mysqil.com/)に沿って進めればよい。

注意点としては、postとaboutの内容はmdを編集して管理する一方、dairy/project/timelineなどの内容は、ts内のdataを編集して管理することだ。

もう一つ面白いのは、BangumiのAPI(`/v0/users/{userId}/collections`)に接続して、ユーザーのアニメ視聴記録を取得できることだ。取得する種類を少し変更し、Bangumiのtokenを設定すれば、実はerogeのコレクションリストも表示できる。あとはアニメページを少し改修すれば、erogeの記録ページのできあがりだ（新たな宿題を作る

## 個人設定

続いて個人設定について。CIを使ってNotionの内容をリアルタイムでMizukiへ同期する予定で、ちょうどMizukiが[ブログのコンテンツと構成を分離して管理すること](https://docs.mizuki.mysqil.com/Other/separation/)にも対応しているため、コンテンツリポジトリ側に手を加えることにした。構造がシンプルなので、変更もしやすい。

変更する予定なのは大きく二つ。CIによるNotionコンテンツの同期と、LLMによるNotion同期記事の前処理を利用した多言語対応だ。

### CIによるNotionコンテンツの同期

実際のところ、cronで定期実行し、Notionのコンテンツ更新状況を定期的に確認するだけだ。ただしNotion APIの通信速度では、2日ほど動かしただけでGitHub Actionsの利用枠を使い切りかねないため、この同期用Actionはself-hosted環境で動かすことにした。

具体的な実装もそれほど複雑ではない。Notionのdatabaseから内容を取得し、post/about/dairyなどの異なるコンテンツをtypeに応じて振り分ける。その後、Notionデータベースのcolumnと、前述した各コンテンツの具体的な設定を対応付ければ、あとは自然な流れで完成する（つまり少しvibeする）。

ただし、小さな落とし穴がある。一部のimgでは、Notionのカバー画像リンクをそのまま取得すると、実際には1hで期限切れになるURLが返ってくる（それにしてもNotionの画像ストレージが実はAWS S3だったのは意外だった。R2のほうが容量も多そうなのに）。そのため、外部ストレージに保存して永続化する必要がある（実際、R2で十分）。ただし、Notionに画像を追加する際にURLを直接指定していれば、取得されるのは入力した画像リンクのままだ。したがって、事前に画像をupdateしておけば、それほど大きな問題ではない。

具体的な実装は、こちらを参考にできる：<br>[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)（ちょうどMizukiのGitHub repo表示がどう使えるかも試してみる（

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}

### LLMによる多言語対応

Notion同期CIを作る前に、Mizukiのフレームワーク部分にも変更を加える必要があった。現状ではブラウザの言語に合わせて表示言語を切り替える機能がないため、少しだけ修正した（.en.md/.ja.mdのような接尾辞を持つファイルを多言語対応に含めた。本体は静的サイトなので、UIまで多言語表示に対応させるなら大幅な改修が必要になる）。このような多言語切り替えはさまざまなプロジェクトに実装例があるはずなので、大まかに要件を説明してvibeすればよい。

::github{repo="dreaifekks/Mizuki"}

次に、CIへLLMの翻訳モジュールを追加する。

こちらもほぼ同じで、汎用的な翻訳promptと簡単なAPI呼び出しを用意し、少しvibeすれば実装できる。ただし、長い記事ではLLMの応答にかなり時間がかかる可能性があるため、実際のリクエストのタイムアウト時間を調整する必要がある。

[LLM部分の実装](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}

# おわりに

だいたいこのくらいだと思う。それほど深い改修をしたわけではないので、個人的な設定方針を簡単にまとめてみた。

CIの設定も終わり、コンテンツを出力するflowも少しスムーズになったと思う（

ただ、将来的に多言語UIへ対応するのも大きな落とし穴になりそうだ（
