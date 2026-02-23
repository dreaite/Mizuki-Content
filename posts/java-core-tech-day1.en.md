---
title: 'Core Java Study Day 01'
published: 2022-07-08
updated: 2022-07-08
description: 'This article mainly introduces core Java topics including an overview of Java, environment setup, basic program structure, data types, variables, operators, string processing, input and output, flow control, and array usage. It emphasizes Java simplicity, object-oriented features, and cross-platform capabilities, and also lists key terms such as JDK and JRE with detailed explanations.'
image: 'https://r2.dreaife.tokyo/notion/covers/487668a94c7e4b98be77b6919f7e737e/300b942f9dd6e8b7.jpg'
tags: ['java', 'language']
category: 'cs-base'
draft: false
lang: 'en'
---

Java study and review. This article mainly references [Java Core Technologies Volume](https://github.com/dreaife/JavaBaseLearning/blob/master/source/) as the object of study.

# Chapter 1: Java Overview

> Java White Paper
>
> Simplicity, Object-oriented, Distributed, Robust, Secure, Architecture-neutral, Portable, Interpreted, High performance, Multithreading, Dynamism
>
> - Java applet
>
> A Java program that runs in a web page: applet
>
> - JavaScript and Java
>
> Apart from the name, the two are not related. Java is strongly typed and catches errors more effectively than JavaScript
>
>

# Chapter 2: Java Environment

- Java Terminology

| Term | Abbreviation | Explanation |
| ------------------------------------ | --- | ---------------------------------------------- |
| Java Development Kit（Java开发工具包）      | JDK | Software used by programmers to write Java programs |
| Java Runtime Environment（Java 运行时环境） | JRE | Software used by users to run Java programs |
| Server JRE（服务器 JRE）                  |     | Software for running Java programs on a server |
| Standard Edition（标准版）                | SE  | Java platform for desktop or simple server applications |
| Enterprise Edition（企业版）              | EE  | Java platform for complex server applications |
| Micro Edition微型版）                    | ME  | Java platform for small devices |
| Java FX                              |     | An alternative toolkit for graphical user interfaces, provided in some Java SE releases prior to Java 11 |
| OpenJDK                              |     | A free open-source implementation of Java SE |
| Java2                                | J2  | An obsolete term used to describe Java versions between 1998 and 2006 |
| Software Development Kit（软件开发工具包）    | SDK | An obsolete term used to describe the JDK between 1998 and 2006 |
| Update                               | u   | Oracle's term, indicating bug-fix releases prior to Java 8 |
| NetBeans                             |     | Oracle's integrated development environment |

- Java Installation & Compilation

```plain text
# 配置环境变量
javac --version			# 查看java版本

# 命令行编译
javac welcome.java
java welcome
```

- Integrated Development Environments

Eclipse | IntelliJ IDEA | NetBeans

- JShell

JShell: Java's interactive shell


# Chapter 3: Java Basic Programs

- CamelCase Naming

myClass

- Comments

```plain text
//注释
/*注释*/
/**
  *自动生成文档
  *注释
  */
```

## 1 Data Types

1. Integers

| int   | 4 bytes | -2^32 ~ 2^32 - 1 |
| ----- | --- | ---------------- |
| short | 2 bytes | -2^16 ~ 2^16 - 1 |
| long  | 8 bytes | -2^64 ~ 2^64 - 1 |
| byte  | 1 byte | -2^8 ~ 2^8 - 1   |


1L/1l	Long integer


0x	Hexadecimal		0	Octal	0b/0B	Binary

1. Floating-point

| float  | 4 bytes | Approximately ±3.40282347E+38F 6~7 digits         |
| ------ | --- | ------------------------------- |
| double | 8 bytes | Approximately ±1.79769313486231570E+308 15 digits |


float 1f/1F


double 1D/1d


NaN <= 0/0 || sqrt(-n)


![1356cde21b065d583b5134f9365d4fd4.png](https://img-blog.csdnimg.cn/img_convert/1356cde21b065d583b5134f9365d4fd4.png)

1. char type

```plain text
\\b 退格	\\t 制表	\\n 换行	\\r 回车	\\" 双引号	\\' 单引号	\\\\ 反斜杠
```

- Unicode

16-bit: early era


Code point U+ 16-bit


Planes 2–17 (including supplementary characters U+10000 ~ U+10FFF)

1. boolean type

Boolean type false || true	Logical evaluation


## 2 Variables

- Initialization

After defining, you must explicitly initialize before you can use it


final constants	 enum types


## 3 Operators


`+ - * / %`

- Math

sqrt	pow	floorMod


Trigonometric functions sin cos tan atan atan2


Logarithms exp log log10


Pi and e approximations Math.PI Math.E


You can `import static java.lang.Math.*` to use them directly

- Type conversion

Low precision -> high precision is lossless


High precision -> low precision incurs loss - explicit casting (int) | ...


```plain text
+=	*=	%=	...
k++	++k
==	!=	>	<	>=	<=
&&	||
x?a:b	//(true:false)
&	|	^	~	>>	<<
```


Operator precedence


![596cc3093bc2ab5fbb56aba8146403af.png](https://img-blog.csdnimg.cn/img_convert/596cc3093bc2ab5fbb56aba8146403af.png)


## 4 Strings


```plain text
"...".substring(l,r)	//[l,r)
"a"+"b"
"a".repeat(3)			//ans = "aaa"
```


Strings are immutable

- `equals` and `==`

`==` checks whether strings are in the same location, and can only reliably compare shared literals; for non-shared concatenations or substring there can be errors


Use `a.equals(b)` or `a.compareTo(b)` for comparing strings

- Empty strings and null strings

""
null

- Code points and code units

```plain text
int index = a.offsetByCodePoints(0,i);	//position of ith code point
int cp = a.codePointAt(index);			//get the ith code point
//UTF-16 surrogate pairs require two code units; cannot use charAt(pos)
```

- Building strings

```plain text
StringBuilder builder = new StringBuilder();	//String builder
builder.append('a');
builder.append(b);
String res = builder.toString();				//generate string
```

## 5 Input/Output

- Input

```plain text
Scanner in = new Scanner(System.in);
in.nextLine();		//read a line
in.next();			//read with space delimiter
in.nextInt();		//read int
in.nextDouble();	//read Double
in.hasNext();		//check if there is more input
```

- Output

```plain text
System.out.println();
System.out.printf(“%8.2f",x);		//similar to printf in C
// d decimal  x hexadecimal  o octal  f fixed-point  e exponential
// s string  c character	 b boolean  h hash code
```

- File Input/Output

```plain text
Scanner in = new Scanner(Path.of(""),StandardCharsets.UTF_8);
PrintWriter out = new PrintWriter("",StandardCharsets.UTF_8);
```


## 6 Control Flow


```plain text
// 块作用域
{}

// 条件语句
if(){

}else if(){

}else {}

// 循环
while(...){}			// Evaluate condition first, then execute
do ... while(...);		// Execute first, then evaluate

for(int i = ..;i <= .. ; i++) {}

switch (...){
	case ...://Label can be char byte short int enum constants string literals
        ...
        break;
    ...
	default:
        ...
        break;//Will stop only when break is encountered
}

//break	 continue 	 goto
//break tag;	Similar to goto jumping to tag:
```

- Large numbers

BigInteger	BigDecimal


Use valueOf(x) to convert x


## 7 Arrays


```plain text
//数组定义
int[] a = new int[len];
int[] b = {1,2,3,4};
new Type[0] || new Type[] {}		//Length-0 arrays, different from null

//for each loop
for(int i:a) ...		//process array or other element collections

//- Array copying
a = b;
a = Array.copyOf(b,copyLen);

//Array sorting
Arrays.sort(a);		//Quicksort		Math.random() -> [0,1)

//Multidimensional arrays
int[][] a = new int[lenA][lenB];
a = {
	{...},
	{...}
};
for(int[] i:a)
	for(int j:i)
		...

//Jagged arrays
int[][] a = new int[N][]; //Array of N references
a = {...};
```