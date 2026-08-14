---
title: 'GitHubに大容量ファイルをアップロードする'
published: 2022-07-07
updated: 2022-07-07
description: 'GitHubに大容量ファイルをアップロードするには、Git Large File Storage（LFS）をインストールし、ローカルのGitリポジトリで設定する必要があります。具体的には、LFSをインストールし、大容量ファイルを追跡するためのポインターを設定したうえで、対応するコマンドを使用してファイルをアップロードします。これらの手順を完了すると、GitHubへ大容量ファイルを正常にアップロードできます。'
image: 'https://r2.dreaife.tokyo/notion/covers/6bf781e8f3ef4da79c4dabda7a6c3103/20220922_201845.jpg'
tags: ['github', 'lfs']
category: 'infra'
draft: false
lang: 'ja'
---

ご存じのとおり、GitHubにはサイズが大きすぎるファイルをアップロードできません。資料のPDFをバックアップとしてアップロードする必要があったため、複数のブログを参考にして解決しました。


Gitをローカル環境ですでに設定済みの場合は、わずか3ステップで完了します。まだGitを設定していない場合は、先にほかのブログを参照してGitの設定を完了してください。


# 1 [Git Large File Storage](https://git-lfs.github.com/)のダウンロードとインストール


大容量ファイルをアップロードするには、まずGitでの大容量ファイルのアップロードをサポートするGit LFSを入手する必要があります。


# 2 Git Large File Storageの設定


Gitリポジトリがあるフォルダーで、インストールのために次のコードを入力します。


```plain text
git lfs install
```


# 3 ファイルのアップロード


Git LFSをインストールしたら、次のコードを順番に入力します。


```plain text
git lfs track "YourFileName"
git add .gitattributes
git commit -m "..."
git push                          #上传用于替代大文件的指针
git add YourFileName
git commit -m "..."
git push                          #正常上传文件即可
```


これで、GitHubに大容量ファイルをアップロードできます。
