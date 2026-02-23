---
title: '博客迁移-Mizuki配置记录'
published: 2026-02-22
updated: 2026-02-22
description: '记录了从notionNext迁移到Mizuki的过程，主要原因是希望获得更多自由度。Mizuki是基于Astro的博客框架，支持日记和项目展示。配置过程中注意到内容控制通过md和ts文件，且可以连接bangumi API。计划通过CI实时同步notion内容，并实现多语言适配，使用llm进行翻译。整体配置思路旨在提升内容输出的流畅性。'
permalink: 'blog-migration-mizuki'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'ja'
---

2026/02/22、記録


今日は NotionNext から Mizuki へ移行しました。

====


 Mizuki に乗り換える理由は、おおむね NotionNext の制約があまりにも厳しすぎる点に尽きます。いまや vibe coding がここまで発展している以上、もう少し自由に調整したいと思いました。

 実は最初は hexo や innei を試してみようと考えていましたが、偶然 Mizuki の動画を見つけ、まずは試してみることにしました。機能がそれほど重くなく、個人とプロジェクトのバランスにも良い感じだと思いました。

 それでは、以下は私が Notion をブログのストレージとして Mizuki へ移行した記録の概要です。

# Mizuki 導入

Mizuki は Astro をベースに開発されたブログフレームワークです。正直なところ、これまで WordPress/Hexo/NotionNext などの自分でデプロイするブログをいくつか作りましたが、外観を大まかに見るだけでテーマが良さそうだと感じれば乗り換えるつもりでした。今回も例外ではありません（


今回切り替えを選んだ主な理由は、Mizuki に日記機能があり、軽い愚痴を吐くニーズを満たせること、またプロジェクトを紹介する場としての機能があることです。Astro はやはり一般的なテーマなので、vibe を求めるなら素材は比較的豊富だろうという点もあり、乗り換えました（ただし坑にぶつかりました（笑））

## Mizuki 配置

大まかな設定は特にありません。公式ドキュメントに従って設定すれば大丈夫です。

大まかに注意すべき点は、post と about の内容は md を修正して制御するのに対し、dairy（日記）/project/timeline などの他の内容は ts のデータ内の data を修正して制御する、という点です。

ただし面白いことに、Bangumi の API（/v0/users/{userId}/collections）に接続してユーザーの番組履歴を取得できます。取得タイプを少し変更し、Bangumi のトークンを設定すれば、エロゲのコレクションリストを見ることが実質可能になります。そしてアニメページを少しだけ修正すれば、エロゲの記録ページが新しく公開されます（穴を掘る

## 個人設定

次に個人設定について。Notion の内容を CI で Mizuki にリアルタイム同期する予定があり、Mizuki は[ブログの内容とアーキテクチャを分離して作成することをサポートしています](https://docs.mizuki.mysqil.com/Other/separation/)。そのため、内容リポジトリをいじって、構造をシンプルに保ちつつ変更するのがかなり楽になりました。

大まかに変更を考えているのは二つの部分です。CI で Notion の執筆内容を同期させ、LLM による Notion 同期記事の前処理を実現して多言語対応を実現する。

### CI を通じた Notion 内容の同期

要するに cron 的な定期実行をして Notion の内容更新状況を定期的に確認する、という話ですが、Notion API の通信速度の関係で、2日も走ると GitHub Actions のクォータが尽きてしまいそうなので、この同期アクションを自分のサーバー上で実行することにしました。

具体的な実装は特に難しくありません。Notion のデータベースの内容を取り出し、post/about/dairy のような異なるタイプの内容を一つの type に振り分け、Notion データベースの column と上記内容の具体的な設定を照合して対応づけ、自然な流れで実現します（vibe っぽく）。

ただし小さな落とし穴があります。Notion のトップ画像リンクを直接取得すると、1時間で期限切れになる URL になることがあります（Notion が画像を AWS S3 に保存しているらしいので、R2 の方が容量的には優れている気がします）。したがって外部ストレージを使って永久化しておく必要があります（実際には R2 で十分です）。ただし Notion に画像を追加する際に直接 URL を使うと、取得されるのは上記の画像リンクのままです。したがって事前に画像を更新しておけば、これは大きな問題にはなりません。

具体的な実装はおおよそここを参照してください：
[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)(正好试一下mizuki-GitHub的repo可以怎么用（


::github{repo=”[/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)”}


### LLM を使った多言語適応

実は Notion 同期 CI の前に Mizuki のフレームワーク部分にもいくつか変更を加えました。現状ではブラウザの言語に追従して表示言語を切替える機能がまだ実装されていないため、少しだけ変更しました（.en.md/.ja.md のような拡張子のファイルを多言語対応に取り込む、という意味です。本来のフレームワークは静的サイトなので、多言語 UI を追加するには大幅な変更が必要になります）。この種の多言語切替の実装は様々なプロジェクトでかなり見られるはずなので、大まかに雰囲気を説明します（雰囲気を掴んでください）。

::github{repo=”dreaifekks/Mizuki”}


次に、CI に LLM の翻訳モジュールを追加します。

実際にはだいたい同じで、汎用の翻訳プロンプトに簡単な API 呼び出しを組み合わせるだけで、少し雰囲気を出せます。ただし長文の LLM 応答時間が長くなる可能性があるため、実際のリクエストのタイムアウト時間を少し調整する必要があります。

[llm部分实现](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo=”dreaite/Mizuki-Content”}


# 結語

大体これくらいです。深い変更は特にありませんので、私の個人的な設定の方針を大まかに述べます。

現在 CI を整えたことで、出力のフローを少し快適にできたと思います（
