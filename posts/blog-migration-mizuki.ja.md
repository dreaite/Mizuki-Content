---
title: 'ブログ移行-Mizuki 設定記録'
published: 2026-02-22
updated: 2026-02-23
description: 'notionNextからmizukiへの移行過程を記録した。主な理由はnotionNextの制限である。mizukiはAstroをベースとしたブログフレームワークで、軽量な日記とプロジェクト表示をサポートします。設定は比較的シンプルで、内容はmdおよびtsファイルで制御され、bangumiのAPIと接続することができます。CIを通じてnotionの内容をリアルタイムで同期し、多言語対応を行い、翻訳にはLLMを用いる予定です。全体の設定方針は出力プロセスを最適化することを目的としています。'
image: 'https://r2.dreaife.tokyo/notion/covers/30f5465cca1780cc8df8e7c367a16f3d/IMG_4450.jpg'
tags: ['blog', 'llm', 'deploy', 'notion']
category: 'infra'
draft: false
lang: 'ja'
---

2026/02/22、記録

今日はNotionNextからMizukiへ移行しました。

====

Mizukiへ切り替える理由は、おおむねNotionNextの制約があまりにも厳しいからです。現在Vibe Codingがこれだけ発展している中、自由に調整したいという気持ちが強いです。

実は最初はHexoやinneiを試してみるつもりでしたが、偶然 Mizuki の動画に出会い、まず乗り換えてみることにしました。機能自体はそれほど重くなく、個人利用とプロジェクトのバランスにも適していると感じました。

以下は、Notionをブログのストレージとして使用している状態からMizukiへ移行した記録の概要です。

# Mizukiデプロイ

MizukiはAstroをベースに開発されたブログフレームワークです。正直なところ、以前はWordPress/Hexo/NotionNextのような自前デプロイのブログをいくつか作りましたが、外観を大まかに見るだけで、テーマが良いと感じたので乗り換えるつもりでした。もちろん今回も例外ではありません（

今回切り替えを選んだ主な理由は、Mizukiに日記機能があり、軽い愚痴を満たす要望を満たすことと、プロジェクトを展示する場所があることです。Astroはやはり広く使われているテーマなので、Vibeを使いたい場合には素材も比較的豊富だろうという点もあり、移行しました（そして困難に直面しました（笑））。

## Mizukiの設定

大まかな設定自体は特にありません。公式ドキュメントを参照して設定すれば大丈夫です。

大まかに注意すべき点は、postとaboutの内容はMarkdownを修正して制御するのに対し、日記/プロジェクト/タイムラインなどの他のコンテンツは、tsファイル内のdataを修正して制御することです。

ただし、小さな落とし穴として、Notionのヘッダ画像リンクを直接取得すると、実際には1時間で期限切れになるURLです（Notionが画像を保存しているのはAWS S3だそうで、R2の方が容量は大きいのでは、という気もします）。ですので、外部ストレージに永続化しておく必要があります（実際にはR2で十分です）。ただしNotionの画像を追加する際にURLを直接使うと、取得されるのは上記で入力した画像リンクのままです。したがって、事前に画像を更新しておけば、これは大した問題ではありません。

具体的な実装はおおよそこちらを参考にしてください：
[NotionSyncAction](https://github.com/dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md)（mizuki-GitHubのリポジトリをどう活用できるかを試してみる）

::github{repo="dreaite/Mizuki-Content/blob/notionUpdateSync/.github/notion-sync/README.md"}


### LLMを用いた多言語適応

実際にはNotionの同期CIの前に、Mizukiのフレームワーク部分にも修正が必要でした。現状はブラウザの言語に追従して表示言語を切り替える機能がまだ実装されていないため、少しだけ変更を加えました（つまり.en.md/.ja.mdのような拡張子のファイルを多言語対応に組み込む、という意味です。本来このフレームワークは静的サイトなので、多言語UIを表示するには大幅な改修が必要になります）。この種の多言語切替の実装は、さまざまなプロジェクトで既に数多く行われているはずなので、ざっくりとVibeを感じさせる程度に説明すれば十分です。

::github{repo="dreaifekks/Mizuki"}


次に、CIにLLMの翻訳モジュールを追加します。

実際にはほぼ同じです。一般的な翻訳プロンプトに、簡単なAPI呼び出しを組み合わせ、少しVibeを効かせればOKです。ただし、長文のLLMの返答時間が非常に長くなる可能性があるため、実際のリクエストのタイムアウトを少し調整する必要があります。

[LLM部分の実装](https://github.com/dreaite/Mizuki-Content/blob/feat(i18n)/llm-translate/.github/notion-sync/README.md)

::github{repo="dreaite/Mizuki-Content"}


# 結び

大体これくらいです。深い変更はあまりないので、私の個人的な設定方針をざっくりと説明します。

現在CIを設定したことで、出力のフローを少しスムーズにしたと言えるでしょう（

ただし将来的に多言語UIへ対応するのも大きな課題になる気がします（
