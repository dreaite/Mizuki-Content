---
title: 'missing-semester-class01'
published: 2023-01-11
updated: 2023-01-11
description: 'This article introduces the basic features and usage of the shell, including how to run programs, navigate paths, manage file permissions, redirect input/output streams, and manage root user privileges. It provides multiple bash command examples and after-class exercises to reinforce learning.'
image: 'https://r2.dreaife.tokyo/notion/covers/30d1fea56f3940319785fca81bdfd185/20220818_231226.jpg'
tags: ['bash']
category: 'prog-side'
draft: false
lang: 'en'
---

[class01](https://missing-semester-cn.github.io/2020/course-shell/)


# shell


## Features


They allow you to run programs, give them input, and inspect their output in a semi-structured way


## Usage


```shell
date # 显示时间
echo hello # 输入参数‘hello’并输出
echo "hello world"

echo $PATH # 输出环境变量￥PATH
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin
```


When we execute the `echo` command, the shell realizes that it needs to run the `echo` program; it will then search for that program in the directories separated by `:` in the `$PATH`, performing a name-based search for the program. When the program is found, it is executed. To determine exactly which program a given program name refers to, you can use the `which` command. We can also bypass the `$PATH` by directly specifying the path to the program we want to run.


## Navigating in the shell


The paths in the shell are a set of directories separated by `/` on Linux and macOS, and by `\\` on Windows. `/` is the root directory.


```shell
pwd # 获取当前路径
cd /home # 根目录下的home文件夹
cd ./home # 当前目录下的home文件夹
cd .. # 上级目录
```


Generally speaking, when we run a program, if we do not specify a path, the program will be executed from the current directory.


```shell
ls # 查看目录文件
ls --help
ls -l /home
# drwxr-xr-x  4 root    root    4096 11月 30 21:01 data
```


First, the line's **first character** `d` indicates that `data` is a directory. Then the next nine characters, three characters at a time, form a group. (`rwx`). They represent the permissions that the **file owner** (`root`), **user group** (`root`), and **everyone else** have. A `-` indicates that the corresponding permission is not granted.


From the above information, only the file owner can modify (w), the `data` folder (for example, adding or removing files within the folder).


To enter a folder, a user needs the folder and its parent folders' “execute” permission (represented by `x`). To list its contents, the user must have read permission (`r`) on that folder. For files, the meaning of the permissions is similar. Note that the programs in the last group of the `/bin` directory have `x` permission for everyone, meaning anyone can execute these programs.


```shell
mv test ./data/test.txt
cp test.c test01.c
mkdir test
man ls
```


## Redirection of input/output in Programs


In the shell, a program has two main “streams”: its input stream and its output stream. When a program tries to read information, it reads from the input stream; when a program prints information, it outputs to the output stream. Typically, a program's input/output streams are your terminal. That is, your keyboard as input and the display as output. However, we can also redirect these streams!


The simplest redirection is `< file` and `> file`. These two forms can redirect the program's input and output streams respectively to a file:


```shell
echo hello > hello.txt
cat hello.txt
cat < hello.txt
cat < hello.txt > hello2.txt
cat hello2.txt

ls -l / | tail -n1
curl --head --silent baidu.com | grep --ignore-case content-length | cut --delimiter=' ' -f2
```


## Root user


Permission denied


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
