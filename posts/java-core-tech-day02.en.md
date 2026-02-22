---
title: 'Java核心技术卷 学习Day02'
published: 2022-07-14
updated: 2022-07-14
description: '本文主要讨论Java的核心技术，包括面向对象编程的基本概念、类的定义与使用、预定义类如LocalDate的操作、自定义类的构造与封装、静态方法与字段、包的管理、JAR文件的创建与使用，以及文档注释的编写技巧。强调了数据私有化、初始化、类设计原则等重要设计技巧。'
permalink: 'java-core-tech-day02.en'
image: 'https://r2.dreaife.tokyo/notion/covers/428960ac595548c5ac010e340f6790da/2421860-20220714045451784-444838695.png'
tags: ['java', 'language']
category: 'cs-base'
draft: false
lang: 'en'
---

Java study & review; this article mainly references [Java Core Technologies Volume](https://github.com/dreaife/JavaBaseLearning/blob/master/source/) as the learning reference.

# Chapter 4: Objects and Classes

## 1. Class

Object-Oriented Programming (OOP)

Class: encapsulates instance fields + methods

Class >== Inheritance (is-a)/ Dependency (uses-a)/ Aggregation (has-a) ==> Class

![DVjasvCERhIqiUH.png](https://s2.loli.net/2022/07/14/DVjasvCERhIqiUH.png)

## 2. Built-in Classes

```java
// Math

// Date
Date date = null;		//类似于cpp的对象指针
date = new Date();
System.out.println(date.toString());
```


### `LocalDate`

```java
// LocalDate
System.out.println(LocalDate.now());
LocalDate date = LocalDate.now();				//construct current date
date = LocalDate.of("year","month","day");		//construct specified date
int today = date.getDayOfMonth();
int getYear();
int getMonthValue();
int getDayofMonth();
int getDayofWeek();								//1~7

// n days earlier, n days later
date = date.minusDays(n);
date = date.plusDays(n);

// is leap year
date.isLeapYear();

// number of days in the current year and in the current month
date.lengthOfYear();
date.lengthOfMonth();
```

- Use `LocalDate` to print the current month's calendar

```java
public class chapter04main {
    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        int month = date.getMonthValue();
        int today = date.getDayOfMonth();
        date = date.minusDays(today-1);     // first day of the month
        DayOfWeek week = date.getDayOfWeek();
        System.out.println("Mon Tue Wed Thu Fri Sat Sun");
        for(int i=0;i<week.getValue();i++) System.out.printf("   ");
        while (date.getMonthValue() == month){
            int now = date.getDayOfMonth();
            System.out.printf("%3d",now);                 // print date
            if(now == today) System.out.printf("*");
            else System.out.printf(" ");
            date = date.plusDays(1);            // next day
            if(date.getDayOfWeek().getValue() == 1) System.out.println();
        }
    }
}
```


![KiyBMQgl85CdVjU.png](https://s2.loli.net/2022/07/14/KiyBMQgl85CdVjU.png)


## 3. Custom Classes

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

- Run multiple source files

```plain text
javac Test*.java
```

- Instantiation

```java
// Using the constructor
Test test1 = new Test();
var test2 = new Test();

// detect null
t = Objects.requireNonNullElse(n,"unknown");		//warn but accept
Objects.requireNonNull(n,"not to be null");			//reject directly
```

- Explicit parameter, implicit parameter

In `test1.test(3)`, `test1` is the implicit parameter, and `3` is the explicit parameter.

- Encapsulation

Do not return private objects of the class

- Access modifiers

public: public

private: private

- final

Must be initialized, and the reference cannot be changed to point to another object, though the object it points to can be modified.


```java
private final StringBuilder eva;
eva = new StringBuilder();			//must be initialized
eva.append("ok!\\n");				//legal
```


## 4. Static Methods and Static Fields

```java
static int number = 1;						//static field, shared by the class

static final double PI = 3.141592653589;	//static constant
```

- Static methods

`static int getNum(){...}`


There are no implicit instances; call directly on the class. e.g. `Test.getNum()`

> No object state required; just access the class's static fields
- Factory methods

Similar to the constructors of `LocalDate` and `NumberFormat`.

- main

The main method is also a static method.


## 5. Method Parameters

- Call by value (Java default)
- Call by reference
- Call by name (used by Algol)

Call by value: parameters are copies (primitive data types).

Object references allow the parameter to refer to the object, but it is still passed by value. e.g., you cannot swap two objects.


## 6. Object Construction

- Overloading
> Same name, different parameter lists (not including return type)
- No-arg constructor

Initialize to default values.


P.S. When there is custom construction, you must provide a no-arg constructor yourself.

- Explicit field initialization

`private String name = "";` initialize directly in the class.

- Using this to delegate to another constructor

```java
public Test(double s){
	this("Test "+Double.toString(s));
}
```

- Initialization blocks

```java
class Test{
	private static int Aid = 1;

	private int id;
	// initialization block
    // static, if present, runs when the class is loaded for the first time.
	{
		id = Aid;
		Aid ++;
	}

	//...
}
```


As long as you construct an object, the initialization block will run. It runs before the constructor.

- Destruction

Java can perform automatic garbage collection


## 7. Packages

package

- Package name
- Importing classes

Directly use all classes within the package.


Use public classes from other packages.

> Fully qualified name
>
> `java.time.LocalDate today = java.time.LocalDate.now();`
>
> - import
>
> `import java.time.*; | import java.time.LocalDate;`
>
>
> You can only use `*` to import a package,
>
>
- Static imports

`import static java.lang.System.*;`


You can directly use `out.println();`

- Packages

`package cc.dreaife.chapter04;`


If there is no `package` statement, the classes in the file belong to the unnamed package.

- Package access

If neither `public` nor `private` is specified, it can be accessed within the same package.

- Class path

Classes can be stored in JAR files, which can contain multiple class files and subdirectories.


JARs organize files and subdirectories using ZIP format.


```plain text
# Set the classpath
java -classpath ${PATH(JAR)} ${className};
export CLASSPATH=${PATH};
set CLASSPATH=${PATH}
```


## 8. JAR Files

- Creating a jar file

`jar cvf jarFileName file1 file2 ...`

- Manifest file

META-INF/MANIFEST.MF


`jar cfm jarName manifestName ...`

- Executable jar file

`java -jar jarName`

- Multi-version jar files


## 9. Documentation Comments

javadoc => HTML files

- Comment placement
> Public classes and interfaces at the module/package level, public or protected fields, public or protected constructors and methods

`/**...*/` comments


`@ param` tag + free-form text (the first sentence should be a brief summary; HTML modifiers may be used)

- Class comments

After imports, before the class definition

- Method comments
> @param
>
> Parameter description, can span multiple lines, HTML modifiers may be used
>
> - @return
>
> Return value, can span multiple lines, HTML modifiers may be used
>
> - @throws
>
> Thrown exceptions
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

- Field comments
- General notes
> @author name@since text@version text@see | @link (use hyperlinks to packages, classes, and methods)
- Package comments

Add a separate file within the package directory.

> package-info.javapackage.html       extract the text between <body>...</body>
- Comment extraction

```plain text
javadoc -encoding UTF-8 -d ../doc Chapter04		#extract package
javadoc -encoding UTF-8 -d docTest test.java	#extract class
```


## 10. Class Design Tips

- Ensure data is private
- Data initialization
- Don’t use too many primitive types
- Not everything needs get() and set()
- Avoid classes with too many responsibilities
- Class names and method names should reflect their responsibilities
- Prefer immutable classes
