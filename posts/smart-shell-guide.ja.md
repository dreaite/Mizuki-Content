---
title: '不足している学期-class01'
published: 2023-01-11
updated: 2023-01-11
description: 'Missing Semesterのシェル入門ノート。コマンド実行、パス移動、権限、パイプ、入出力リダイレクト、root権限を例題付きで整理します。'
image: 'https://r2.dreaife.tokyo/notion/covers/30d1fea56f3940319785fca81bdfd185/20220818_231226.jpg'
tags: ['bash', 'cs-base']
category: '研习'
draft: false
lang: 'ja'
---

[class01](https://missing-semester-cn.github.io/2020/course-shell/)

# shell

## 特徴

シェルを使うと、プログラムを実行し、入力を与え、その出力を半構造化された方法で確認できます。

## 使い方

```shell
date # 显示时间
echo hello # 输入参数‘hello’并输出
echo "hello world"

echo $PATH # 输出环境变量￥PATH
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin

```

`echo` コマンドを実行すると、shell は `echo` というプログラムを実行する必要があることを認識し、続いて `$PATH` 内に `:` で区切られて列挙されている一連のディレクトリから、その名前を持つプログラムを検索します。プログラムが見つかると、それを実行します。あるプログラム名が具体的にどのプログラムを指しているのかを確認するには、`which` プログラムを使用できます。また、実行するプログラムのパスを直接指定することで、`$PATH` を経由せずに実行することもできます。

## shell 内での移動

shell におけるパスは、区切り文字で分割されたディレクトリの並びです。Linux と macOS では `/`、Windows では `\\` で区切られます。`/` はルートディレクトリです。

```shell
pwd # 获取当前路径
cd /home # 根目录下的home文件夹
cd ./home # 当前目录下的home文件夹
cd .. # 上级目录

```

一般に、プログラムを実行するときにパスを指定しなければ、そのプログラムは現在のディレクトリで実行されます。

```shell
ls # 查看目录文件
ls --help
ls -l /home
# drwxr-xr-x  4 root    root    4096 11月 30 21:01 data

```

まず、この行の**最初の文字**である `d` は、`data` がディレクトリであることを示します。続く9文字は、3文字ずつで1つのグループを構成します（`rwx`）。それぞれ、**ファイルの所有者**（`root`）、**グループ**（`root`）、そして**その他のすべてのユーザー**が持つ権限を表します。`-` は、そのユーザーが該当する権限を持っていないことを示します。

上記の情報から、`data` フォルダを変更（たとえば、フォルダ内のファイルを追加または削除）できるのは、ファイルの所有者だけであることが分かります（`w`）。

あるフォルダに入るには、そのフォルダと親フォルダに対する「検索」権限（「実行可能」を示す `x`）が必要です。その内容を一覧表示するには、そのフォルダに対する読み取り権限（`r`）が必要です。ファイルに対する権限の意味も同様です。`/bin` ディレクトリ内のプログラムでは、最後のグループ、つまりその他のすべてのユーザーに `x` 権限が含まれている点に注目してください。これは、誰でもこれらのプログラムを実行できることを意味します。

```shell
mv test ./data/test.txt
cp test.c test01.c
mkdir test
man ls

```

## プログラムの接続

shell では、プログラムには主に2つの「ストリーム」があります。入力ストリームと出力ストリームです。プログラムが情報を読み取ろうとすると入力ストリームから読み取り、情報を表示すると出力ストリームへ書き出します。通常、プログラムの入出力ストリームは端末に接続されています。つまり、キーボードが入力、ディスプレイが出力になります。ただし、これらのストリームをリダイレクトすることもできます！

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

## root ユーザー

アクセス拒否（permission denied）

`sudo`

# 課題

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
