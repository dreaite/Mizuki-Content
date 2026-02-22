---
title: 'github上传大文件'
published: 2022-07-07
updated: 2022-07-07
description: '要在GitHub上上传大文件，需要安装Git Large File Storage（LFS），并在本地Git仓库中进行配置。具体步骤包括安装LFS、配置跟踪大文件的指针，并通过相应的命令上传文件。完成这些步骤后，即可成功上传大文件至GitHub。'
permalink: 'github-large-files'
image: 'https://r2.dreaife.tokyo//notion/covers/6bf781e8f3ef4da79c4dabda7a6c3103/20220922_201845.jpg'
tags: ['github', 'lfs']
category: 'infra'
draft: false
---

众所周知，github不能上传过大的文件。本人由于需将资料pdf上传备份，故参考多份博客得以解决。


对于已经将git在本地配置过的只需三步即可完成。若尚未配置好git，请先浏览其他博客完成git设置。


# 1 安装下载[Git Large File Storage](https://git-lfs.github.com/)


要上传大文件首先需要获取对于git大文件上传支持的git lfs程序。


# 2 Git Large File Storage配置


在git仓库所在文件夹中输入如下代码，用于安装。


```plain text
git lfs install
```


# 3 文件上传


在安装git lfs后依次输入下列代码即可。


```plain text
git lfs track "YourFileName"
git add .gitattributes
git commit -m "..."
git push                          #上传用于替代大文件的指针
git add YourFileName
git commit -m "..."
git push                          #正常上传文件即可
```


如此即可实现在github上对于大文件的上传
