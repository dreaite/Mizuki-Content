---
title: 'missing-semester-class01'
published: 2023-01-11
updated: 2023-01-11
description: 'Missing Semester shell notes on commands, paths, permissions, pipes, I/O redirection, root privileges, Bash examples, and exercises.'
image: 'https://r2.dreaife.tokyo/notion/covers/30d1fea56f3940319785fca81bdfd185/20220818_231226.jpg'
tags: ['bash']
category: 'cs-base'
draft: false
lang: 'en'
---

[class01](https://missing-semester-cn.github.io/2020/course-shell/)

# Shell

## Features

They allow you to run programs, give them input, and inspect their output in a semi-structured way.

## Usage

```shell
date # 显示时间
echo hello # 输入参数‘hello’并输出
echo "hello world"

echo $PATH # 输出环境变量￥PATH
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin

```

When we execute the `echo` command, the shell recognizes that it needs to run the `echo` program. It then searches the sequence of directories in `$PATH`, separated by `:`, for a program with that name. Once found, the program is executed. To determine which specific program a program name refers to, you can use the `which` program. We can also bypass `$PATH` by directly specifying the path to the program we want to execute.

## Navigating in the Shell

A path in the shell is a sequence of directories separated by `/` on Linux and macOS, and by `\\` on Windows. `/` is the root directory.

```shell
pwd # 获取当前路径
cd /home # 根目录下的home文件夹
cd ./home # 当前目录下的home文件夹
cd .. # 上级目录

```

Generally, when we run a program without specifying a path, the program executes in the current directory.

```shell
ls # 查看目录文件
ls --help
ls -l /home
# drwxr-xr-x  4 root    root    4096 11月 30 21:01 data

```

First, the **first character** on this line, `d`, indicates that `data` is a directory. The next nine characters are divided into groups of three (`rwx`). They represent the permissions of the **file owner** (`root`), the **group** (`root`), and **everyone else**, respectively. A `-` indicates that the corresponding user does not have that permission.

From the information above, only the file owner can modify (`w`) the `data` directory—for example, by adding or deleting files within it.

To enter a directory, a user must have “search” permission, represented by the “execute” permission (`x`), for both that directory and its parent directories. To list its contents, the user must have read permission (`r`) for the directory. Permissions have similar meanings for files. Note that programs in the `/bin` directory include the `x` permission in the final group, which represents everyone else, meaning that anyone can execute these programs.

```shell
mv test ./data/test.txt
cp test.c test01.c
mkdir test
man ls

```

## Connecting Programs

In the shell, programs have two primary “streams”: an input stream and an output stream. When a program attempts to read information, it reads from its input stream; when it prints information, it writes to its output stream. Normally, a program’s input and output streams are connected to your terminal—your keyboard provides input, and your display shows output. However, we can also redirect these streams!

The simplest forms of redirection are `< file` and `> file`. These commands redirect a program’s input and output streams, respectively, to files:

```shell
echo hello > hello.txt
cat hello.txt
cat < hello.txt
cat < hello.txt > hello2.txt
cat hello2.txt

ls -l / | tail -n1
curl --head --silent baidu.com | grep --ignore-case content-length | cut --delimiter=' ' -f2

```

## The Root User

Access denied (permission denied)

`sudo`

# Exercises

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
