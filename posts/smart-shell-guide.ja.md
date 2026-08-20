---
title: 'missing-semester-class01'
published: 2023-01-11
updated: 2023-01-11
description: 'Missing Semesterのシェル入門ノート。コマンド実行、パス移動、権限、パイプ、入出力リダイレクト、root権限を例題付きで整理します。'
image: 'https://r2.dreaife.tokyo/notion/covers/30d1fea56f3940319785fca81bdfd185/20220818_231226.jpg'
tags: ['bash']
category: 'cs-base'
draft: false
lang: 'ja'
---

[class01](https://missing-semester-cn.github.io/2020/course-shell/)
# シェル
## 特徴
プログラムを実行し、入力を与え、その出力を半構造化された方法で確認できます
## 使い方
```shell
date # 显示时间
echo hello # 输入参数‘hello’并输出
echo "hello world"

echo $PATH # 输出环境变量￥PATH
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin

```
`echo` コマンドを実行すると、シェルは `echo` というプログラムを実行する必要があると判断し、`$PATH` 内にある `:` で区切られた一連のディレクトリから、その名前を持つプログラムを検索します。プログラムが見つかると、それを実行します。あるプログラム名が具体的にどのプログラムを指しているかを確認するには、`which` プログラムを使用できます。また、実行するプログラムのパスを直接指定することで、`$PATH` を使わずに実行することもできます。
## シェル内での移動
シェルにおけるパスは、複数のディレクトリを区切って並べたものです。Linux と macOS では `/`、Windows では `\\` を区切り文字として使用します。`/` はルートディレクトリです。
```shell
pwd # 获取当前路径
cd /home # 根目录下的home文件夹
cd ./home # 当前目录下的home文件夹
cd .. # 上级目录

```
一般に、パスを指定せずにプログラムを実行すると、そのプログラムは現在のディレクトリで実行されます。
```shell
ls # 查看目录文件
ls --help
ls -l /home
# drwxr-xr-x  4 root    root    4096 11月 30 21:01 data

```
まず、この行の**最初の文字** `d` は、`data` がディレクトリであることを示しています。続く9文字は、3文字ずつのグループ（`rwx`）に分かれています。それぞれ、**ファイルの所有者**（`root`）、**ユーザーグループ**（`root`）、そして**その他のすべてのユーザー**が持つ権限を表します。`-` は、そのユーザーが該当する権限を持っていないことを示します。
上記の情報から、`data` フォルダーを変更（`w`）できるのはファイルの所有者だけだと分かります（たとえば、フォルダー内のファイルを追加または削除できます）。
あるフォルダーに入るには、そのフォルダーと親フォルダーに対する「検索」権限（「実行可能」権限の `x` で表されます）が必要です。フォルダーの内容を一覧表示するには、そのフォルダーに対する読み取り権限（`r`）が必要です。ファイルの場合も、各権限の意味は同様です。`/bin` ディレクトリ内のプログラムでは、最後のグループ、つまりその他のすべてのユーザーに `x` 権限が含まれている点に注目してください。これは、誰でもこれらのプログラムを実行できることを意味します。
```shell
mv test ./data/test.txt
cp test.c test01.c
mkdir test
man ls

```
## プログラム間の接続
シェル内のプログラムには、主に入力ストリームと出力ストリームという2つの「ストリーム」があります。プログラムが情報を読み取ろうとすると入力ストリームから読み取り、情報を表示すると出力ストリームへ書き込みます。通常、プログラムの入出力ストリームはどちらも端末につながっています。つまり、キーボードが入力、ディスプレイが出力として機能します。しかし、これらのストリームはリダイレクトすることもできます！
最も単純なリダイレクトは `< file` と `> file` です。これらのコマンドを使うと、プログラムの入力ストリームと出力ストリームをそれぞれファイルへリダイレクトできます。
```shell
echo hello > hello.txt
cat hello.txt
cat < hello.txt
cat < hello.txt > hello2.txt
cat hello2.txt

ls -l / | tail -n1
curl --head --silent baidu.com | grep --ignore-case content-length | cut --delimiter=' ' -f2

```
## rootユーザー
アクセス拒否（permission denied）
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
