---
title: 'Uploading Large Files to GitHub'
published: 2022-07-07
updated: 2022-07-07
description: 'To upload large files to GitHub, install Git Large File Storage (LFS) and configure it in your local Git repository. The process involves installing LFS, setting up pointers to track large files, and uploading the files using the appropriate commands. Once these steps are complete, you can successfully upload large files to GitHub.'
image: 'https://r2.dreaife.tokyo/notion/covers/6bf781e8f3ef4da79c4dabda7a6c3103/20220922_201845.jpg'
tags: ['github', 'lfs']
category: 'infra'
draft: false
lang: 'en'
---

As is widely known, GitHub does not support uploading excessively large files. Since I needed to upload PDF documents for backup, I consulted several blog posts and found a solution.


If you have already configured Git locally, you can complete the process in just three steps. If you have not yet configured Git, please consult other blog posts to complete the setup first.


# 1 Install [Git Large File Storage](https://git-lfs.github.com/)


To upload large files, you first need Git LFS, which adds support for handling large files in Git.


# 2 Configure Git Large File Storage


Run the following command in the folder containing your Git repository to install Git LFS.


```plain text
git lfs install
```


# 3 Upload the File


After installing Git LFS, run the following commands in sequence.


```plain text
git lfs track "YourFileName"
git add .gitattributes
git commit -m "..."
git push                          #上传用于替代大文件的指针
git add YourFileName
git commit -m "..."
git push                          #正常上传文件即可
```


You can now upload large files to GitHub.
