---
title: 'Using SVN'
published: 2024-11-04
updated: 2024-11-04
description: 'SVN is a centralized file management/version control tool that supports fine-grained file access management. Before use, a repository must be created, and graphical clients such as TortoiseSVN are recommended. Common commands include checkout, commit, update, add, delete, log, diff, revert, and ignore, and the article also covers branch management and help commands. Detailed command usage is listed to help users get started quickly.'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca178060a708e1b3428bd22e/IMG_1451.jpg'
tags: ['SVN']
category: 'infra'
draft: false
lang: 'en'
---

# What is SVN

SVN is a version control system similar to Git. However, unlike Git, SVN is not distributed; instead, it uses a central server to manage the code repository. At the same time, SVN provides finer-grained file security management than Git, allowing you to checkout not only an entire repository but also a specific folder or file within the repository.

# SVN Repositories

Before using SVN, you need to have a repository.

- Self-hosted repositories
- Free online repositories

# SVN Client

SVN tends to favor graphical clients, such as TortoiseSVN.

## SVN Command-Line Usage

### checkout

```shell
svn checkout svn://url
svn checkout svn://url save-dir
svn checkout svn://url --username xxx --password xxx
```

### commit

```shell
# 描述是必须的，但是可以填写空字符串，不指定
svn commit -m "提交描述"
# 只提交指定文件或目录
svn commit /path/to/file-or-dir -m "提交指定文件"
# 指定后缀的所有文件
svn commit *.js -m "提交所有 js 文件"
```

### update

```shell
# 更新到最新
svn update
# 更新到指定版本的代码。特别是最新版本代码有问题时，我们可以用这个命令回到之前的版本
svn update -r xxx 
# 仅更新指定文件或者目录
svn up /path/to/file-or-dir
```

### add

```shell
# 添加指定文件或目录
svn add /path/to/file-or-dir
# 添加当前目录下所有 php 文件
svn add *.php
```

### delete

```shell
svn delete /path/to/file-or-dir
# 删除版本控制，但是本地依旧保留文件
svn delete /path/to/file-or-dir --keep-local
```

### log

```shell
# 查看当前目录的日志
svn log
# 查看指定文件或目录的提交日志
svn log /path/to/file-or-dir
# 查看日志，并且输出变动的文件列表
svn log -v
# 限定只输出最新的 5 条日志
svn log -l 5
```

### diff

```shell
# 查看当前工作区的改动
svn diff
# 查看指定文件或目录的改动
svn diff /path/to/file-or-dir
# 本地文件跟指定版本号比较差异
svn diff /path/to/file-or-dir -r xxx
# 指定版本号比较差异
svn diff /path/to/file-or-dir -r 1:2
```

### **revert**

```shell
# 撤销文件的本地修改
svn revert test.php
# 递归撤销目录中的本地修改
svn revert -R /path/to/dir
```

### **ignore**

```shell
# 忽略所有 log 文件。注意最后有个点号，表示在当前目录设置忽略属性。
svn propset svn:ignore "*.log" .
# 递归忽略 global-ignores
svn propset svn:global-ignores "*.log" .
# 从文件读取忽略规则，一行一个规则。
svn propset svn:ignore -F filename.txt .
# 打开编辑器修改忽略属性
svn propedit svn:ignore .
# 查看当前目录的属性配置
svn proplist . -v
# 删除当前目录的忽略设置
svn propdel svn:ignore .
```


### command list


```shell
# status
svn status
svn status /path/to/file-or-dir

# cleanup
svn cleanup

# info
svn info

#ls
svn ls
svn ls -r 100

# cat
svn cat test.py -r 2


# blame
svn blame filename.php

# change svn url
svn switch --relocate old_url new_url
```


### branches


```shell
# 创建分支，从主干 trunk 创建一个分支保存到 branches/online1.0
svn cp -m "描述内容" http://svnbucket.com/repos/trunk http://svnbucket.com/repos/branches/online1.0
# 合并主干上的最新代码到分支上
cd branches/online1.0
svn merge http://svnbucket.com/repos/trunk 
# 分支合并到主干
svn merge --reintegrate http://svnbucket.com/repos/branches/online1.0
# 切换分支
svn switch svn://svnbucket.com/test/branches/online1.0
# 删除分支
svn rm http://svnbucket.com/repos/branches/online1.0
```


### help


```shell
# 查看SVN帮助
svn help
# 查看指定命令的帮助信息
svn help commit
```