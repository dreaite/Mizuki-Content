---
title: 'github action自动部署angular页面'
published: 2024-11-04
updated: 2024-11-04
description: '配置angular项目以自动部署到GitHub Pages，包括修改angular.json文件的outputPath，安装angular-cli-ghpages，创建GitHub Actions工作流以在推送到指定分支时构建并部署项目，并生成访问repo所需的token。最后，设置GitHub Pages的分支为gh-pages。'
permalink: 'github-action-angular'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/2a2b58ba-676a-4d9e-a786-a6c0d5c4e774/Gal1mvpbQAA_8s_.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWN76A4U%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T082607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUW7D6q4RRvWenRJ30pDGAl0so0Uk%2B5wzxaSeCWwvR2AiEArDRJ%2FUz92k4befy%2FztuI8BZV3aqw%2FoCtDnMUhmKbdcEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD28YvzChQqrFIeSDyrcAx9fj0oHbdu7gAayUWpJq7ZgNpBQr2yQp0eG8m%2FTCohguvPQrtfgPkkhwS2aro3Ql5C8vjwX3nEI7c2wHSja8A6F9PPgjaifLVN4G4LA4Mt7wcAAGaIkZ0nDHf%2FpOOKel7mttkXwBneXhJ1aqYHFn7ZwZSmNLv7BnNNe57upDe8xGfvFz0B%2FJKmalguscc0FfFSKBpSP4hWt6tF6VNMJlYohgokVK%2Ft%2Btn8LnEcGyYB5NnBlPVSzhNusBBYqvskI3aDz1pnG0%2BmNNmgkimjxWntZN2aHLAn3bKcbtUXT74VSmY3xZeLzoViod4RxBe%2FbObg1syekROPQsixgTvA5hTOy5A13F8Frs4k6ZzPcQ8EJQih3QPUEWW%2FsDkzb22M%2BpGT9fxTiJ42vmxka8j3OZdXONwQWxaFnKDQhlrO3h7mczScXKn1m2336kwxxm2Fhmxku5A9%2F7jhmiP6yHL4eZVlZXw7ErpUxspaVw8CEd1lzIbLLspqttHMylVzyQDdcKC2VgUt1iBdQq%2FO88607WKvry1MLZNOint4IXqGriS%2FnmUirdMXWqUjCsH8MVKiKIsvK2l0DQ1ZRQUD5FKnWfPm4eWnPUuIKiW6ZuasTh5EmiSimGnHUnbmXYiLVMLnF6swGOqUBaHYUXSvyItfbGvPRA%2BIlkpmcu6OtOXL19iwhZZidWWgZyq849Pki%2FoEwsmkvKGD8f4LxgCksmPHX9VIeGXokq40HQTrFkeLmPP8noKGJJ%2Fz5yiFO1pkUMeTm6SmM2TYJWg45IoRBsQhZM4d1wNk8Pfi%2BPJwaWHCwO52cA9lNd1s9KCwMq0jNek12X9aB4PvYy6CGEVhB4oG8en18N0NLExHNO97G&X-Amz-Signature=385a12a237882b54bf08bd37eb796804a9cf08618eb370e7e4866f8e378959e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
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
