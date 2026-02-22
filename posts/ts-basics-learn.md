---
title: 'ts初步学习'
published: 2024-11-04
updated: 2024-11-04
description: 'TypeScript基础包括类型系统、接口、类、装饰器等。支持多种基础类型如number、string、boolean等，并允许类型注解、泛型、联合类型和类型别名等特性。装饰器用于在类和方法上应用元数据，模块和命名空间帮助组织代码。'
permalink: 'ts-basics-learn'
image: 'https://r2.dreaife.tokyo//notion/covers/1345465cca178025a684d438f265c6a0/IMG_1461.jpg'
tags: ['ts', 'doc']
category: 'FRONTEND'
draft: false
---

## ts基础

- **类型系统**：变量和函数的类型声明（如 **`string`**, **`number`**, **`boolean`** 等）。
- **接口（Interfaces）**：如何使用接口定义数据结构。
- **类（Classes）**：了解类的定义和使用，包括类的构造函数和方法。
- **装饰器（Decorators）**：Angular 中的组件、模块等都是用装饰器定义的，如 **`@Component`**, **`@NgModule`** 等。

### 1. **基础类型**


TypeScript 支持以下常用的基础类型：

- **number**：数字类型，包括整数和浮点数。

    ```typescript
    let age: number = 30
    ```

- **string**：字符串类型，用来存储文本。

    ```typescript
    let name: string = "Alice";
    ```

- **boolean**：布尔类型，值为 `true` 或 `false`。

    ```typescript
    let isActive: boolean = true;
    ```

- **array**：数组类型，可以指定数组中元素的类型。

    ```typescript
    let numbers: number[] = [1, 2, 3];
    ```

- **tuple**：元组类型，用于固定长度和类型的数组。

    ```typescript
    let user: [string, number] = ["Alice", 30]
    ```

- **enum**：枚举类型，定义一组命名常量。

    ```typescript
    enum Color { Red, Green, Blue }
    let color: Color = Color.Green;
    ```

- **any**：任意类型，适用于不确定的变量类型，但不建议频繁使用。

    ```typescript
    let randomValue: any = "hello";
    randomValue = 5;  // 可以重新赋值为其他类型
    ```

- **void**：无返回值，通常用于函数没有返回值的情况。

    ```typescript
    function logMessage(): void {
      console.log("This is a message");
    }
    ```

- **null 和 undefined**：表示变量为空或未定义。

    ```typescript
    let u: undefined = undefined;
    let n: null = null;
    ```


### 2. **类型注解**


可以在变量、参数和返回值上添加类型注解，便于代码提示和错误检查。


```typescript
let name: string = "Alice";
function greet(name: string): string {
  return `Hello, ${name}`;
}
```


### 3. **接口（Interfaces）**


接口用于定义对象的结构（即包含哪些属性和方法），有助于实现代码的重用和灵活性。


```typescript
interface Person {
  name: string;
  age: number;
  greet(): string;
}

let alice: Person = {
  name: "Alice",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};
```


### 4. **类（Classes）**


TypeScript 支持面向对象编程，允许使用类和继承。类包含构造函数、属性和方法。


```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

let dog = new Animal("Dog");
dog.move(10);
```

- 访问修饰符

TypeScript 提供三种访问修饰符来控制类成员的访问权限：

- **public**：公共的，默认修饰符，任何地方都可以访问。
- **private**：私有的，只能在类内部访问。
- **protected**：受保护的，允许在类内部及继承的子类中访问。

```typescript
class Person {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
```


### 5. **泛型（Generics）**


泛型允许定义函数、类或接口时不指定类型，而在使用时再指定类型。这提高了代码的复用性。


```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");  // T 被推断为 string
```


### 6. **类型推断**


TypeScript 会根据代码自动推断变量的类型，如果没有显式声明类型，TypeScript 会根据赋值自动判断类型。


```typescript
let x = 10; // TypeScript 自动推断 x 为 number
```


### 7. **联合类型（Union Types）**


联合类型允许一个变量接受多种类型值，使用 `|` 符号定义。


```typescript
let value: string | number;
value = "Hello";
value = 42;
```


### 8. **类型别名（Type Aliases）**


使用 `type` 关键字可以为类型定义别名，便于复用。


```typescript
type ID = string | number;
let userId: ID = "123";
```


### 9. **类型断言（Type Assertions）**


类型断言告诉编译器某个值的具体类型，适用于我们比 TypeScript 更清楚变量的类型的情况。


```typescript
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
```


### 10. **装饰器（Decorators）**


装饰器是 TypeScript 的高级特性，允许在类、方法或属性上应用一些元数据。Angular 中大量使用了装饰器来定义组件、模块等。


```typescript
function log(target: any, key: string) {
  console.log(`${key} was called`);
}

class Person {
  @log
  greet() {
    console.log("Hello!");
  }
}
```


### 11. **模块和命名空间**

- **模块**：TypeScript 支持 ES6 模块系统，可以通过 `import` 和 `export` 实现模块的导入和导出。

    ```typescript
    // module.ts
    export const pi = 3.14;
    
    // main.ts
    import { pi } from './module';
    console.log(pi);
    ```

- **命名空间**：TypeScript 提供了命名空间（namespace）来组织代码，适用于大型应用。

    ```typescript
    namespace Geometry {
      export function calculateArea(radius: number): number {
        return Math.PI * radius * radius;
      }
    }
    
    console.log(Geometry.calculateArea(5));
    ```
