---
title: 'missing-semester-class01'
published: 2023-01-11
updated: 2023-01-11
description: '介绍了shell的基本特性和使用，包括如何运行程序、导航路径、文件权限、输入输出流的重定向，以及根用户的权限管理。提供了多个bash命令示例和课后习题以巩固学习内容。'
permalink: 'smart-shell-guide'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/03682a53-5425-472c-ac18-cc5592097df0/20220818_231226.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=335472173991e2ccf6cada62802be28ddc3f669feecdf58737a5739be4607979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['bash']
category: 'prog-side'
draft: false
---

[class01](https://missing-semester-cn.github.io/2020/course-shell/)


# shell


## 特点


they allow you to run programs, give them input, and inspect their output in a semi-structured way


## 使用


```shell
date # 显示时间
echo hello # 输入参数‘hello’并输出
echo "hello world"

echo $PATH # 输出环境变量￥PATH
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin
```


当我们执行 `echo`命令时，shell 了解到需要执行 `echo`这个程序，随后它便会在 `$PATH`中搜索由 `:`所分割的一系列目录，基于名字搜索该程序。当找到该程序时便执行。确定某个程序名代表的是哪个具体的程序，可以使用 `which`程序。我们也可以绕过 `$PATH`，通过直接指定需要执行的程序的路径来执行该程序。


## shell中导航


shell 中的路径是一组被分割的目录，在 Linux 和 macOS 上使用 `/`分割，而在Windows上是 `\\`。`/`为根目录。


```shell
pwd # 获取当前路径
cd /home # 根目录下的home文件夹
cd ./home # 当前目录下的home文件夹
cd .. # 上级目录
```


一般来说，当我们运行一个程序时，如果我们没有指定路径，则该程序会在当前目录下执行。


```shell
ls # 查看目录文件
ls --help
ls -l /home
# drwxr-xr-x  4 root    root    4096 11月 30 21:01 data
```


首先，本行**第一个字符** `d`表示 `data`是一个目录。然后接下来的九个字符，每三个字符构成一组。 （`rwx`）. 它们分别代表了**文件所有者**（`root`），**用户组**（`root`） 以及**其他所有人**具有的权限。其中 `-`表示该用户不具备相应的权限。


从上面的信息来看，只有文件所有者可以修改（`w`），`data` 文件夹 （例如，添加或删除文件夹中的文件）。


为了进入某个文件夹，用户需要具备该文件夹以及其父文件夹的“搜索”权限（以“可执行”：`x`）权限表示。为了列出它的包含的内容，用户必须对该文件夹具备读权限（`r`）。对于文件来说，权限的意义也是类似的。注意，`/bin` 目录下的程序在最后一组，即表示所有人的用户组中，均包含 `x` 权限，也就是说任何人都可以执行这些程序。


```shell
mv test ./data/test.txt
cp test.c test01.c
mkdir test
man ls
```


## 程序中创建连接


在 shell 中，程序有两个主要的“流”：它们的输入流和输出流。 当程序尝试读取信息时，它们会从输入流中进行读取，当程序打印信息时，它们会将信息输出到输出流中。 通常，一个程序的输入输出流都是您的终端。也就是，您的键盘作为输入，显示器作为输出。 但是，我们也可以重定向这些流！


最简单的重定向是 `< file` 和 `> file`。这两个命令可以将程序的输入输出流分别重定向到文件：


```shell
echo hello > hello.txt
cat hello.txt
cat < hello.txt
cat < hello.txt > hello2.txt
cat hello2.txt

ls -l / | tail -n1
curl --head --silent baidu.com | grep --ignore-case content-length | cut --delimiter=' ' -f2
```


## 根用户root


拒绝访问（permission denied）


`sudo`


# 课后习题


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
