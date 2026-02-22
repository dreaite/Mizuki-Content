---
title: 'github action自动部署angular页面'
published: 2024-11-04
updated: 2024-11-04
description: '配置angular项目以自动部署到GitHub Pages，包括修改angular.json文件的outputPath，安装angular-cli-ghpages，创建GitHub Actions工作流以在推送到指定分支时构建并部署项目，并生成访问repo所需的token。最后，设置GitHub Pages的分支为gh-pages。'
permalink: 'github-action-angular'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca1780709669dd1e198f2678/Gal1mvpbQAA_8s_.jpg'
tags: ['github-action']
category: 'infra'
draft: false
---

## angular.json


 **`projects > {your-project-name} > architect > build > options > outputPath`**


如果默认生成静态网页在browser下，记得修改/添加属性


```javascript
"baseHref": "/browser/",
```


安装angular-cli-ghpages


```shell
ng add angular-cli-ghpages
```


## **.github/workflows下创建工作流**


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


记得在github中[生成token](https://github.com/settings/tokens)用于访问repo，并在action的环境变量中添加。


`https://github.com/${your_name}/${your_repo}/settings/secrets/actions`


## 推送到监控的分支


修改github page配置，设置page分支为gh-pages
