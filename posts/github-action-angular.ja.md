---
title: 'GitHub ActionsでAngularページを自動デプロイする'
published: 2024-11-04
updated: 2024-11-04
description: 'GitHub ActionsでAngularをGitHub Pagesへ自動デプロイ。outputPath、angular-cli-ghpages、ワークフロー、トークン、gh-pagesブランチの設定を扱います。'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca1780709669dd1e198f2678/Gal1mvpbQAA_8s_.jpg'
tags: ['github-action', 'INFRA']
category: '踩坑'
draft: false
lang: 'ja'
---

## angular.json

 **`projects > {your-project-name} > architect > build > options > outputPath`**

デフォルトで静的ページが `browser` 配下に生成される場合は、次のプロパティを変更または追加してください。

```javascript
"baseHref": "/browser/",
```

angular-cli-ghpages をインストールします。

```shell
ng add angular-cli-ghpages
```

## **`.github/workflows` 配下にワークフローを作成**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master  # または監視するブランチ名

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'  # プロジェクトの要件に応じて Node.js のバージョンを変更してください

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist/my-angular-project/browser  # 実際の出力パスに合わせて指定してください
          token: ${{ secrets.TOKEN }}

env:
  GITHUB_TOKEN: ${{ secrets.TOKEN }}
```

GitHub でリポジトリへのアクセスに使用する [token を生成](https://github.com/settings/tokens)し、Actions の環境変数に追加してください。

`https://github.com/${your_name}/${your_repo}/settings/secrets/actions`

## 監視対象のブランチへプッシュ

GitHub Pages の設定を変更し、Pages のブランチを `gh-pages` に設定します。
