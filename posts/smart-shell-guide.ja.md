---
title: 'missing-semester-class01'
published: 2023-01-11
updated: 2023-01-11
description: '介绍了shell的基本特性和使用，包括如何运行程序、导航路径、文件权限、输入输出流的重定向，以及根用户的权限管理。提供了多个bash命令示例和课后习题以巩固学习内容。'
permalink: 'smart-shell-guide'
image: 'https://r2.dreaife.tokyo/notion/covers/30d1fea56f3940319785fca81bdfd185/20220818_231226.jpg'
tags: ['bash']
category: 'prog-side'
draft: false
lang: 'ja'
---

[class01](https://missing-semester-cn.github.io/2020/course-shell/)


# shell


## 特徴


それらは、プログラムを実行し、入力を与え、出力を半構造化された方法で確認できるようにします。


## 使い方


```shell
date # 显示时间
echo hello # 输入参数‘hello’并输出
echo "hello world"

echo $PATH # 输出环境变量￥PATH
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin
```


私たちが `echo` コマンドを実行すると、シェルは `echo` というプログラムを実行する必要があると理解し、次いで `$PATH` によって「:」で区切られた一連のディレクトリの中から名前でそのプログラムを検索します。プログラムが見つかると、それを実行します。どのプログラム名が具体的にどのプログラムを指しているかを確認するには `which` コマンドを使用します。私たちは `$PATH` を回避し、実行したいプログラムのパスを直接指定して実行することもできます。


## シェルでのナビゲーション


シェルでのパスは、区切られたディレクトリの集合です。Linux と macOS では `/` で区切りますが、Windows では `\\` です。`/` はルートディレクトリです。


```shell
pwd # 現在のディレクトリを取得
cd /home # ルートディレクトリ直下の home ディレクトリへ
cd ./home # 現在のディレクトリ内の home ディレクトリへ
cd .. # 一つ上のディレクトリ
```


一般的には、プログラムを実行する際、パスを指定しなければ、そのプログラムは現在のディレクトリで実行されます。


```shell
ls # ディレクトリ内のファイルを表示
ls --help
ls -l /home
# drwxr-xr-x  4 root    root    4096 11月 30 21:01 data
```


まず、この行の**最初の文字** `d` は、`data` がディレクトリであることを示します。続く9文字は、それぞれ3文字ずつグループを形成します（`rwx`）。それぞれが、**ファイルの所有者**（`root`）、**グループ**（`root`）および**その他の人** が持つ権限を表します。`-` は、そのユーザーが該当する権限を持っていないことを意味します。


上記の情報から、ファイルの所有者だけが変更できる（`w`）、`data` ディレクトリ（例：ディレクトリ内のファイルを追加・削除すること）です。


あるディレクトリに入るには、そのディレクトリとその親ディレクトリの「検索」権限（実行権限：`x`）が必要です。含まれる内容を一覧表示するには、そのディレクトリに対して読み取り権限（`r`）が必要です。ファイルについても、権限の意味は同様です。注意として、`/bin` ディレクトリ内のプログラムは、最後のグループにあるものとして、すべてのユーザーのグループにも `x` 権限が含まれており、つまり誰でもこれらのプログラムを実行できるということです。


```shell
mv test ./data/test.txt
cp test.c test01.c
mkdir test
man ls
```


## プロセスにおける入出力リダイレクト


シェルでは、プログラムには2つの主な「ストリーム」すなわち入力ストリームと出力ストリームがあります。プログラムが情報を読み取ろうとする場合、入力ストリームから読み取り、情報を表示する場合は出力ストリームへ出力します。通常、プログラムの入出力ストリームは端末です。つまり、キーボードを入力、ディスプレイを出力として使います。しかし、これらのストリームをリダイレクトすることもできます！


最も簡単なリダイレクトは `< file` と `> file` です。これらのリダイレクトは、プログラムの入力ストリームと出力ストリームを、それぞれファイルへリダイレクトします：


```shell
echo hello > hello.txt
cat hello.txt
cat < hello.txt
cat < hello.txt > hello2.txt
cat hello2.txt

ls -l / | tail -n1
curl --head --silent baidu.com | grep --ignore-case content-length | cut --delimiter=' ' -f2
```


## ルートユーザー root


アクセスが拒否されました（permission denied）


`sudo`


# 演習問題


```shell
# 第二题
cd /tmp
mkdir missing
ls | grep missing

# 第三题
man touch

# 第四题
touch ./missing/semester

# 第五题
echo '#! /bin/sh' > ./missing/semester
echo 'curl --head --silent <https://baidu.com>' | tee -a ./missing/semester
cat ./missing/semester

# 第六题
./missing/semester
ls -l ./missing
# -rw-r--r-- 1 root root 62  1月 11 21:46 semester
# 该文件无x 运行权限

# 第七题
man chmod

# 第八题
chmod +x ./missing/semester

# 第九题
./semester | grep Date > ./last-modified.txt
cat last-modified.txt
```
