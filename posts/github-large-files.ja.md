---
title: 'GitHubに大容量ファイルをアップロードする'
published: 2022-07-07
updated: 2022-07-07
description: 'GitHubに大きなファイルをアップロードするには、Git Large File Storage（LFS）をインストールし、ローカルGitリポジトリで設定する必要があります。具体的には、LFSの導入、大容量ファイルを追跡するポインタ設定、対応コマンドによるアップロードを行います。これらの手順を完了すれば、大容量ファイルをGitHubへ正常にアップロードできます。'
image: 'https://r2.dreaife.tokyo/notion/covers/6bf781e8f3ef4da79c4dabda7a6c3103/20220922_201845.jpg'
tags: ['github', 'lfs']
category: 'infra'
draft: false
lang: 'ja'
---

ご存知のとおり、GitHubには大きすぎるファイルをアップロードすることはできません。私は資料のPDFをアップロードしてバックアップする必要があるため、複数のブログを参考にして解決しました。

すでにローカルにGitが設定されている場合は、3つのステップで完了します。まだGitの設定が済んでいない場合は、他のブログを参照して設定を完了してください。

# 1 Git Large File Storage のインストールとダウンロード [Git Large File Storage](https://git-lfs.github.com/)

大きなファイルをアップロードするには、まずGit LFS（Large File Storage）に対応した git lfs プログラムを取得する必要があります。

# 2 Git Large File Storage の設定

Git リポジトリがあるフォルダで、以下のコードを入力してインストールします。

```plain text
git lfs install
```

# 3 ファイルのアップロード

Git LFSをインストールしたら、以下のコードを順に入力します。

```plain text
git lfs track "YourFileName"
git add .gitattributes
git commit -m "..."
git push                          #上传用于替代大文件的指针
git add YourFileName
git commit -m "..."
git push                          #正常上传文件即可
```

このようにして、GitHub 上で大容量ファイルをアップロードすることができます。