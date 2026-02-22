---
title: 'svn使用'
published: 2024-11-04
updated: 2024-11-04
description: 'svn是一种集中式文件管理工具，支持细粒度的文件安全管理。使用前需建立仓库，推荐使用图形化客户端如tortoiseSVN。常用命令包括checkout、commit、update、add、delete、log、diff、revert和ignore，此外还涉及分支管理和帮助命令。具体命令用法详尽列出，适合用户快速上手。'
permalink: 'svn-tool-guide'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/27ad89a2-e2e0-4c42-9fdb-64b1832f31ad/IMG_1451.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=70fce0a936b74e4c6146b2e991763d07512e94fd8c860e13bf248dd6fa4adeca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['SVN']
category: 'infra'
draft: false
---

# svn是什么


svn是跟git一样的文件管理工具，不过跟git不同，svn不是分布式管理，而是通过一个


服务器对代码仓库进行管理。同时svn对文件安全管理的细粒度较git更高，可以不仅对一个仓库进行checkout，同时可以对仓库内部的一个文件夹/文件进行checkout。


# SVN仓库


svn在使用前，需要有一个仓库。

- 自建仓库
- 线上免费仓库

# SVN客户端


SVN比较倾向于用图形化客户端，比如tortoiseSVN。


## SVN命令行使用


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
