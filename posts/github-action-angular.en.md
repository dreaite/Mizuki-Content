---
title: 'Automatically Deploy an Angular Page with GitHub Actions'
published: 2024-11-04
updated: 2024-11-04
description: 'Deploy Angular to GitHub Pages with GitHub Actions, covering outputPath, angular-cli-ghpages, workflow setup, tokens, and the gh-pages branch.'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca1780709669dd1e198f2678/Gal1mvpbQAA_8s_.jpg'
tags: ['github-action', 'INFRA']
category: '踩坑'
draft: false
lang: 'en'
---

## angular.json

 **`projects > {your-project-name} > architect > build > options > outputPath`**

If the generated static website is under `browser` by default, remember to modify or add this property:

```javascript
"baseHref": "/browser/",
```

Install angular-cli-ghpages:

```shell
ng add angular-cli-ghpages
```

## **Create a workflow under .github/workflows**

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

Remember to [generate a token](https://github.com/settings/tokens) on GitHub for repository access and add it to the Action's environment variables.

`https://github.com/${your_name}/${your_repo}/settings/secrets/actions`

## Push to the monitored branch

Update the GitHub Pages configuration and set the Pages branch to gh-pages.
