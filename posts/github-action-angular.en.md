---
title: 'Automatically Deploy Angular Pages with GitHub Actions'
published: 2024-11-04
updated: 2024-11-04
description: 'This post explains how to configure an Angular project for automatic deployment to GitHub Pages, including modifying the outputPath in angular.json, installing angular-cli-ghpages, creating a GitHub Actions workflow to build and deploy on pushes to a specific branch, and generating the token required to access the repository. Finally, it sets the GitHub Pages branch to gh-pages.'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca1780709669dd1e198f2678/Gal1mvpbQAA_8s_.jpg'
tags: ['github-action']
category: 'infra'
draft: false
lang: 'en'
---

## angular.json

 **`projects > {your-project-name} > architect > build > options > outputPath`**

If the default static webpage is generated under the browser, remember to modify/add the property

```javascript
"baseHref": "/browser/",
```


Install angular-cli-ghpages


```shell
ng add angular-cli-ghpages
```


## **Create a workflow in .github/workflows**

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


Remember to generate a token on GitHub to access the repo, and add it to the action's environment variables.

`https://github.com/${your_name}/${your_repo}/settings/secrets/actions`


## Push to the monitored branch

Modify the GitHub Pages configuration, and set the Pages branch to gh-pages
