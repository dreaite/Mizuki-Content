---
title: 'Uploading Large Files to GitHub'
published: 2022-07-07
updated: 2022-07-07
description: 'To upload large files to GitHub, you need to install Git Large File Storage (LFS) and configure it in the local Git repository. The process includes installing LFS, setting up pointers to track large files, and uploading the files with the corresponding commands. After completing these steps, large files can be uploaded to GitHub successfully.'
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