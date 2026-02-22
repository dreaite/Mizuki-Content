---
title: 'Java核心技术卷 学习Day02'
published: 2022-07-14
updated: 2022-07-14
description: '本文主要讨论Java的核心技术，包括面向对象编程的基本概念、类的定义与使用、预定义类如LocalDate的操作、自定义类的构造与封装、静态方法与字段、包的管理、JAR文件的创建与使用，以及文档注释的编写技巧。强调了数据私有化、初始化、类设计原则等重要设计技巧。'
permalink: 'java-core-tech-day02'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/b3cc8aab-a0d2-47f9-9cb0-72940896ed3a/2421860-20220714045451784-444838695.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P42RBA5%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T104455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC648mwnl1EV1eF5sjrIj89Bji2O16z7%2FRdWKkwlB82AQIhAN0H0kIJC5KrbsP%2BGEjjmNtBaLpZRWOdT8awY5%2Fi56JxKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycX7UqbP7LGr9KOJ0q3AOttnI%2B%2BhfoFmn6LEAqobvpTBBFgJiarN4g90p1WCv7kUS1yY0FgngbK8Q57pDRurAX6zjKeCysHlXeBEKvyoHdSYN7bsULAbN%2BlF5PXuaJadnXho5suVzsRO%2Fix0g0VgmPNghm8nU9dw3pP1IvYQKvpKa%2F9R157kEyUXpJoGgqnpN%2B4hPmoSwGpnKOy%2FU%2BqBtwqnqonT00DxI46D3paVwNGlH8rYT8yClKV5K6bAgRfffhduq%2BGrhNyaMdKBHAQ7gHNS03QNVWmkJTJNWLWrMslh3wdaUp53KtXU3qKW45lh1GCf4MHLxE34LVGhOu8d4zKFuchSxeVwqaWLHrgiKDdkH3zDJcy%2BVP%2FEMPIxbjeetUFHrbakfqB%2FMdrLBHtPq6j6kYCbKoqOXtV5gi3la6UXEJo8YMHGDroOgXl5TUMb0w0pVQocpfuDSakt16jh4SyIGQIdjjI6HRL%2B7hLjJqkyWg1vYE6DtQyXFTfEqh4Lw8tgeYAr8f6UYjZ7dkEslOjoGMNPWiTvimuQwaB2BnFWUOPDHb4jsnnv%2BmI1h9Hr9yFBiPoznnPi3iRMeuHVyIJnkV6lI6jT6CTEblSZtV2vIbSTNe863o8iY2bC84YHLAP8myota02nd9KzCHxerMBjqkAZUsuAVDJx6FVnQiy4jOFjU5qkC1zMG9x2KK4Y%2FI3W4bv1JPJBIWBygB%2FPKBUVkx6w87yO%2B%2BKEMjY8ZLaoQWuGmVmUx%2BHF4HMHaPwcu6ZyQ4rZ72mlS50zwtZ9pb%2F%2B3LabGwhk%2Bf%2BbL2KuMT4Z8IRgxohJMqdIhlU13%2BVAXaw2LSDlwBwiBKpC9myjNYjEpTY9A8XDqMfnkxkQ%2FIfCCc8H1kDo1b&X-Amz-Signature=64e158fc7f469acd4a2ffc8c3c71814dddb0dc4c73432ee98253306b0a08e2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['java', 'language']
category: 'cs-base'
draft: false
---

java学习&复习，本文主要参照[《Java核心技术卷》](https://github.com/dreaife/JavaBaseLearning/blob/master/source/)作为学习对象。


# 第四章 对象与类


## 1. 类


面向对象程序设计OOP


类：封装实例字段+方法


类>==继承(is a)/依赖(uses a)/聚合(has a)==>类


![DVjasvCERhIqiUH.png](https://s2.loli.net/2022/07/14/DVjasvCERhIqiUH.png)


## 2. 预定义类


```java
// Math

// Date
Date date = null;		//类似于cpp的对象指针
date = new Date();
System.out.println(date.toString());
```


### `localDate`


```java
// LocalDate
System.out.println(LocalDate.now());
LocalDate date = LocalDate.now();				//构造当前日期
date = LocalDate.of("year","month","day");		//构造指定日期
int today = date.getDayOfMonth();
int getYear();
int getMonthValue();
int getDayofMonth();
int getDayofWeek();								//1~7

// 先前n天,向后n天
date = date.minusDays(n);
date = date.plusDays(n);

// is闰年
date.isLeapYear();

// 当前年的天数和当前月的天数
date.lengthOfYear();
date.lengthOfMonth();
```

- 使用`localDate`输出当月日历

```java
public class chapter04main {
    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        int month = date.getMonthValue();
        int today = date.getDayOfMonth();
        date = date.minusDays(today-1);     //当月第一天
        DayOfWeek week = date.getDayOfWeek();
        System.out.println("Mon Tue Wed Thu Fri Sat Sun");
        for(int i=0;i<week.getValue();i++) System.out.printf("   ");
        while (date.getMonthValue() == month){
            int now = date.getDayOfMonth();
            System.out.printf("%3d",now);                 //输出日期
            if(now == today) System.out.printf("*");
            else System.out.printf(" ");
            date = date.plusDays(1);            //下一天
            if(date.getDayOfWeek().getValue() == 1) System.out.println();
        }
    }
}
```


![KiyBMQgl85CdVjU.png](https://s2.loli.net/2022/07/14/KiyBMQgl85CdVjU.png)


## 3. 自定义类


```java
class Test{
	//field
    private int t;

    //constructor
    public Test(/*...*/){
        //...
    }

    // method
    public void test(int n){
        System.out.println("just test");
    }
}
```

- 运行多个源程序

```plain text
javac Test*.java
```

- 实例化

```java
// 使用构造函数
Test test1 = new Test();
var test2 = new Test();

// 发现null
t = Objects.requireNonNullElse(n,"unknown");		//报警但接收
Objects.requireNonNull(n,"not to be null");			//直接拒绝
```

- 显式参数、隐式参数

`test1.test(3)`中test1即为隐式参数，方法中的3即为显式参数。

- 封装性

不要返回类的私有对象

- 访问权限

public：共有


private：私有

- final

必须初始化，且无法修改指针指向，不过指向的对象可以改变。


```java
private final StringBuilder eva;
eva = new StringBuilder();			//必须初始化
eva.append("ok!\\n");				//合法
```


## 4. 静态方法和静态字段


```java
static int number = 1;						//静态字段，被类共享

static final double PI = 3.141592653589;	//静态常量
```

- 静态方法

`static int getNum(){...}`


没有隐式函数，直接使用类来调用。eg.`Test.getNum()`

> 不用对象状态只需访问类的静态字段
- 工厂方法

类似于`LocalDate`，`NumberFormat`的构造。

- main

main方法也是静态方法。


## 5. 方法参数

- 按值调用(java使用)
- 按引用调用
- 按名调用(Algol使用)

按值调用，参数为副本(基本数据类型)。


对象引用，让参数为对象引用，但仍为**按值传递**。eg.不能swap交换两个类。


## 6. 对象构造

- 重载
> 相同名字不同参数(不包括返回类型)
- 无参构造

初始化为默认值。


**P.S. 当存在自定义时，需自己写一个无参。**

- 显式字段初始化

`private String name = "";`直接在class中初始化。

- 调用this来构造

```java
public Test(double s){
	this("Test "+Double.toString(s));
}
```

- 初始化块

```java
class Test{
	private static int Aid = 1;

	private int id;
	// 初始化块
    // static 如果有，在类第一次加载时运行。
	{
		id = Aid;
		Aid ++;
	}

	//...
}
```


只要构造对象，初始化块就会执行。先运行初始化块。

- 析构

Java可以自动垃圾回收


## 7. 包


package

- 包名
- 类的导入

直接使用包内的所有类。


使用其他包公共类。

> 完全限定名
>
> `java.time.LocalDate today = java.time.LocalDate.now();`
>
> - import导入
>
> `import java.time.*; | import java.time.LocalDate;`
>
>
> 只能使用`*`来导入包，
>
>
- 静态导入

`import static java.lang.System.*;`


可以直接使用`out.println();`

- 包

`package cc.dreaife.chapter04;`


没有`package`语句的话，该文件中的类属于**无名包**。

- 包访问

未指定`public`或`private`，可以被同一个包访问。

- 类路径

类可以存储于JAR文件中，可以包含多个类文件和子目录。


JAR使用ZIP格式组织文件和子目录。


```plain text
# 设置类路径
java -classpath ${PATH(JAR)} ${className};
export CLASSPATH=${PATH};
set CLASSPATH=${PATH}
```


## 8. JAR文件

- 创建jar文件

`jar cvf jarFileName file1 file2 ...`

- 清单文件

META-INF/MANIFEST.MF


`jar cfm jarName manifestName ...`

- 可执行jar文件

`java -jar jarName`

- 多版本jar文件

## 9. 文档注释


javadoc=>HTML文件

- 注释位置
> 模块包公共类和接口公共的、受保护的字段公共的、受保护的构造器和方法

`/**...*/` 注释


`@ param` 标记 + 自由格式文本(第一句概要，可以使用HTML修饰符)

- 类注释

import后，类定义前

- 方法注释
> @param
>
> 参数，可以占多行，可以使用HTML修饰符
>
> - @return
>
> 返回值，可以占多行，可以使用HTML修饰符
>
> - @throws
>
> 抛出异常
>
>

```java
/**
     * testA
     * @param s
     * @param num
     * @return string
     */
    public String testA(String s,int num){
        return s + Integer.toString(num);
    }
```

- 字段注释
- 通用解释
> @author name@since text@version text@see | @link (使用超链接 #包隔类和方法)
- 包注释

在包目录中添加单独文件。

> package-info.javapackage.html       抽取<body>...</body>之间的文本
- 注释抽取

```plain text
javadoc -encoding UTF-8 -d ../doc Chapter04		#抽取包
javadoc -encoding UTF-8 -d docTest test.java	#抽取类
```


## 10. 类设计技巧

- 保证数据私有
- 数据初始化
- 不要使用过多基本类型
- 不是所有都需要`get()`和`set()`
- 分解过多责任的类
- 类名和方法名可以体现职责
- 优先使用不可变类
