---
title: 'Java核心技术卷 学习Day01'
published: 2022-07-08
updated: 2022-07-08
description: '本文主要介绍Java的核心技术，包括Java的概述、环境配置、基本程序结构、数据类型、变量、运算符、字符串处理、输入输出、流程控制以及数组的使用。强调了Java的简单性、面向对象特性和跨平台能力，并详细列出了Java开发工具包（JDK）、运行时环境（JRE）等专业术语及其解释。'
permalink: 'java-core-tech-day1'
image: 'https://r2.dreaife.tokyo/notion/covers/487668a94c7e4b98be77b6919f7e737e/300b942f9dd6e8b7.jpg'
tags: ['java', 'language']
category: 'cs-base'
draft: false
---

java学习&复习，本文主要参照[《Java核心技术卷》](https://github.com/dreaife/JavaBaseLearning/blob/master/source/)作为学习对象。


# 第一章 Java概述

> java白皮书
>
> 简单性 面向对象 分布式 健壮性 安全性 体系结构中立 可移植性 解释型 高性能 多线程 动态性
>
> - Java applet
>
> 在网页中运行的Java程序：applet
>
> - JavaScript与Java
>
> 除去名字二者并无关系。Java是强类型的，比JavaScript捕捉错误的能力更强
>
>

# 第二章 Java环境

- Java专业术语

| 术语名                                  | 缩写  | 解释                                             |
| ------------------------------------ | --- | ---------------------------------------------- |
| Java Development Kit（Java开发工具包）      | JDK | 编写Java程序的程序员使用的软件                              |
| Java Runtime Environment（Java 运行时环境） | JRE | 运行Java程序的用户使用的软件                               |
| Server JRE（服务器 JRE）                  |     | 在服务器上运行 Java 程序的软件                             |
| Standard Edition（标准版）                | SE  | 用于桌面或简单服务器应用的 Java平台                           |
| Enterprise Edition（企业版）              | EE  | 用于复杂服务器应用的 Java平台                              |
| Micro Edition微型版）                    | ME  | 用于小型设备的 Java平台                                 |
| Java FX                              |     | 用于图形化用户界面的一个备选工具包，在Java 11之前的某些Java SE 发布版本中提供 |
| OpenJDK                              |     | Java SE 的一个免费开源实现                              |
| Java2                                | J2  | 一个过时的术语，用于描述 1998～2006年之间的Java版本               |
| Software Development Kit（软件开发工具包）    | SDK | 一个过时的术语，用于描述 1998～2006年之间的JDK                  |
| Update                               | u   | Oracle 公司的术语，表示 Java8之前的 bug修正版本               |
| NetBeans                             |     | Oracle 公司的集成开发环境                               |

- Java安装&编译

```plain text
# 配置环境变量
javac --version			# 查看java版本

# 命令行编译
javac welcome.java
java welcome
```

- 集成开发环境

Eclipse | IntelliJ IDEA | NetBeans

- JShell

java即时运行


# 第三章 Java基本程序

- 驼峰命名

myClass

- 注释

```plain text
//注释
/*注释*/
/**
  *自动生成文档
  *注释
  */
```


## 1 数据类型

1. 整型

| int   | 4字节 | -2^32 ~ 2^32 - 1 |
| ----- | --- | ---------------- |
| short | 2字节 | -2^16 ~ 2^16 - 1 |
| long  | 8字节 | -2^64 ~ 2^64 - 1 |
| byte  | 1字节 | -2^8 ~ 2^8 - 1   |


1L/1l	长整型


0x	十六进制		0	八进制	0b/0B	二进制

1. 浮点型

| float  | 4字节 | 大约±3.40282347E+38F 6~7位         |
| ------ | --- | ------------------------------- |
| double | 8字节 | 大约±1.79769313486231570E+308 15位 |


float 1f/1F


double 1D/1d


NaN <== 0/0 || sqrt(-n)


![1356cde21b065d583b5134f9365d4fd4.png](https://img-blog.csdnimg.cn/img_convert/1356cde21b065d583b5134f9365d4fd4.png)

1. char类型

```plain text
\\b 退格	\\t 制表	\\n 换行	\\r 回车	\\" 双引号	\\' 单引号	\\\\ 反斜杠
```

- unicode

16位：初期


码点 U+十六位


17代码平面 1(基本多语言平面U+0000 ~ U+FFFF 经典Unicode代码)


		  2~17(包括辅助字符 U+10000 ~ U+10FFF)

1. boolean类型

布尔类型 false || true	逻辑判断


## 2 变量

- 初始化

定义后需显式初始化，然后才能使用


final 常量		enum 枚举类型


## 3 运算符


`+ - * / %`

- Math

sqrt	pow	floorMod


三角函数 sin cos tan atan atan2


对数 exp log log10


pi与e近似值 Math.PI Math.E


可以`import static java.lang.Math.*`直接使用

- 类型转换

低精度 -> 高精度 无损失


高精度 -> 低精度 有损失-强制类型转换 (int) | ...


```plain text
+=	*=	%=	...
k++	++k
==	!=	>	<	>=	<=
&&	||
x?a:b	//(true:false)
&	|	^	~	>>	<<
```


运算符优先级


![596cc3093bc2ab5fbb56aba8146403af.png](https://img-blog.csdnimg.cn/img_convert/596cc3093bc2ab5fbb56aba8146403af.png)


## 4 字符串


```plain text
"...".substring(l,r)	//[l,r)
"a"+"b"
"a".repeat(3)			//ans = "aaa"
```


String是不可变字符串

- `equals`与`==`

`==`判断字符串是否处于同一位置，只能判断可以共享的字面量，对于不可共享的+||substring会出现错误


使用`a.equals(b)`或`a.compareTo(b)`用于字符串之间进行比较

- 空串和null串

""
null

- 码点与代码单元

```plain text
int index = a.offsetByCodePoints(0,i);	//第i个码点的位置
int cp = a.codePointAt(index);			//获取第i个码点
//UTF-16部分字符需要两个代码单元，不能用charAt(pos)来获取
```

- 字符串构建

```plain text
StringBuilder builder = new StringBuilder();	//字符串构建器
builder.append('a');
builder.append(b);
String res = builder.toString();				//生成字符串
```


## 5 输入输出

- 输入

```plain text
Scanner in = new Scanner(System.in);
in.nextLine();		//读取一行
in.next();			//以空格为分隔符读取
in.nextInt();		//获取int型
in.nextDouble();	//获取Double型
in.hasNext();		//判断输入中是否还有其他内容
```

- 输出

```plain text
System.out.println();
System.out.printf(“%8.2f",x);		//类似于c中的printf
// d 十进制	x 十六进制 	o 八进制 	f 定点浮点数 	e 指数浮点数
// s 字符串 	c 字符	 b 布尔 	h 散列码
```

- 文件输入输出

```plain text
Scanner in = new Scanner(Path.of(""),StandardCharsets.UTF_8);
PrintWriter out = new PrintWriter("",StandardCharsets.UTF_8);
```


## 6 流程控制


```plain text
// 块作用域
{}

// 条件语句
if(){

}else if(){

}else {}

// 循环
while(...){}			//先判断后执行
do ... while(...);		//先执行后判断

for(int i = ..;i <= .. ; i++) {}

switch (...){
	case ...://标签可以是char byte short int 枚举常量 字符串字面量
        ...
        break;
    ...
	default:
        ...
        break;//直到遇到break才会停止
}

//break		continue 		goto
//break tag;	类似于goto 跳到tag:处
```

- 大数

BigInteger	BigDecimal


使用valueOf(x)转换x


## 7 数组


```plain text
//数组定义
int[] a = new int[len];
int[] b = {1,2,3,4};
new Type[0] || new Type[] {}		//长度为0的数组，不同于null

//for each循环
for(int i:a) ...		//处理数组或其他元素集合

//- 数组拷贝
a = b;
a = Array.copyOf(b,copyLen);

//数组排序
Arrays.sort(a);		//快排		Math.random() -> [0,1)

//多维数组
int[][] a = new int[lenA][lenB];
a = {
	{...},
	{...}
};
for(int[] i:a)
	for(int j:i)
		...

//不规则数组
int[][] a = new int[N][]; //包含N个指针的数组
a = {...};
```
