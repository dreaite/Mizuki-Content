---
title: 'GitHub ActionsでAngularページを自動デプロイ'
published: 2024-11-04
updated: 2024-11-04
description: 'GitHub ActionsでAngularをGitHub Pagesへ自動デプロイ。outputPath、angular-cli-ghpages、ワークフロー、トークン、gh-pagesブランチの設定を扱います。'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca1780709669dd1e198f2678/Gal1mvpbQAA_8s_.jpg'
tags: ['github-action']
category: 'infra'
draft: false
lang: 'ja'
---

## angular.json


 **`projects > {your-project-name} > architect > build > options > outputPath`**


デフォルトで静的ウェブページがブラウザで生成される場合は、属性を変更/追加してください


```javascript
"baseHref": "/browser/",
```


angular-cli-ghpages のインストール


```shell
ng add angular-cli-ghpages
```


## **.github/workflowsでワークフローを作成**


```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master  # 或者你要监控的分支名称

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'  # 请根据项目需求修改 Node.js 版本

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist/my-angular-project/browser  # 请根据实际输出路径填写
          token: ${{ secrets.TOKEN }}

env:
  GITHUB_TOKEN: ${{ secrets.TOKEN }}
```


GitHubでトークンを生成してください（https://github.com/settings/tokens）リポジトリへアクセスするために使用します。また、Actions の環境変数に追加してください。


`https://github.com/${your_name}/${your_repo}/settings/secrets/actions`


## 監視対象のブランチへプッシュ


GitHub Pages の設定を変更し、ページ用のブランチを gh-pages に設定します。
