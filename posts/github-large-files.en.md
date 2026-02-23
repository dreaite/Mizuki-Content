---
title: 'github上传大文件'
published: 2022-07-07
updated: 2022-07-07
description: '要在GitHub上上传大文件，需要安装Git Large File Storage（LFS），并在本地Git仓库中进行配置。具体步骤包括安装LFS、配置跟踪大文件的指针，并通过相应的命令上传文件。完成这些步骤后，即可成功上传大文件至GitHub。'
permalink: 'github-large-files'
image: 'https://r2.dreaife.tokyo/notion/covers/6bf781e8f3ef4da79c4dabda7a6c3103/20220922_201845.jpg'
tags: ['github', 'lfs']
category: 'infra'
draft: false
lang: 'en'
---

As is widely known, GitHub cannot upload excessively large files. I needed to back up PDF documents, so I consulted several blogs to find a solution.

For those who have already configured Git locally, three steps are enough. If Git is not configured yet, please refer to other blogs to complete the Git setup.

# 1 Install and download [Git Large File Storage](https://git-lfs.github.com/)

To upload large files, you first need to obtain the Git LFS program that supports Git large-file uploads.

# 2 Configuring Git Large File Storage

In the folder containing the Git repository, enter the following commands to install.

```plain text
git lfs install
```

# 3 File Upload

After installing Git LFS, enter the following commands in order.

```plain text
git lfs track "YourFileName"
git add .gitattributes
git commit -m "..."
git push                          #上传用于替代大文件的指针
git add YourFileName
git commit -m "..."
git push                          #正常上传文件即可
```

This will enable uploading large files on GitHub.
