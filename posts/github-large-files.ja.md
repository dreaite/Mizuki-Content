---
title: 'github上传大文件'
published: 2022-07-07
updated: 2022-07-07
description: '要在GitHub上上传大文件，需要安装Git Large File Storage（LFS），并在本地Git仓库中进行配置。具体步骤包括安装LFS、配置跟踪大文件的指针，并通过相应的命令上传文件。完成这些步骤后，即可成功上传大文件至GitHub。'
permalink: 'github-large-files.ja'
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
