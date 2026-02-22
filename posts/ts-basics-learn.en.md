---
title: 'ts初步学习'
published: 2024-11-04
updated: 2024-11-04
description: 'TypeScript基础包括类型系统、接口、类、装饰器等。支持多种基础类型如number、string、boolean等，并允许类型注解、泛型、联合类型和类型别名等特性。装饰器用于在类和方法上应用元数据，模块和命名空间帮助组织代码。'
permalink: 'ts-basics-learn.en'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca178025a684d438f265c6a0/IMG_1461.jpg'
tags: ['ts', 'doc']
category: 'FRONTEND'
draft: false
lang: 'en'
---

## TypeScript Basics

- **Type System**: Type declarations for variables and functions (e.g., **`string`**, **`number`**, **`boolean`** etc).
- **Interfaces**: How to define data structures using interfaces.
- **Classes**: Understand class definitions and usage, including constructors and methods.
- **Decorators**: In Angular, components, modules, etc. are defined using decorators, such as **`@Component`**, **`@NgModule`** etc.

### 1. **Basic Types**

TypeScript supports the following common primitive types:

- **number**: numeric type, including integers and floating-point numbers.

    ```typescript
    let age: number = 30
    ```

- **string**: string type, used to store text.

    ```typescript
    let name: string = "Alice";
    ```

- **boolean**: boolean type, values are `true` or `false`.

    ```typescript
    let isActive: boolean = true;
    ```

- **array**: array type, can specify the element type.

    ```typescript
    let numbers: number[] = [1, 2, 3];
    ```

- **tuple**: tuple type, for fixed-length arrays with specified types.

    ```typescript
    let user: [string, number] = ["Alice", 30]
    ```

- **enum**: enumeration type, defines a set of named constants.

    ```typescript
    enum Color { Red, Green, Blue }
    let color: Color = Color.Green;
    ```

- **any**: any type, suitable for variables of uncertain type, but not recommended to use frequently.

    ```typescript
    let randomValue: any = "hello";
    randomValue = 5;  // can be reassigned to other types
    ```

- **void**: no return value, typically used for functions that do not return a value.

    ```typescript
    function logMessage(): void {
      console.log("This is a message");
    }
    ```

- **null and undefined**: represent empty or undefined variables.

    ```typescript
    let u: undefined = undefined;
    let n: null = null;
    ```


### 2. **Type Annotations**

You can add type annotations to variables, parameters, and return values to aid code completion and error checking.


```typescript
let name: string = "Alice";
function greet(name: string): string {
  return `Hello, ${name}`;
}
```


### 3. **Interfaces**

Interfaces are used to define the structure of objects (i.e., which properties and methods they have), helping to achieve code reuse and flexibility.


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


### 4. **Classes**

TypeScript supports object-oriented programming, allowing the use of classes and inheritance. Classes include constructors, properties, and methods.


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

- **Access Modifiers**

TypeScript provides three access modifiers to control the accessibility of class members:

- **public**: public, the default modifier; accessible anywhere.
- **private**: private; only accessible within the class.
- **protected**: protected; accessible within the class and in subclasses.

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


### 5. **Generics**

Generics allow defining functions, classes, or interfaces without specifying a type, and specify the type at use time. This increases code reuse.


```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");  // T inferred as string
```


### 6. **Type Inference**

TypeScript automatically infers the type of variables from the code; if no explicit type is declared, TypeScript infers it from the assigned value.


```typescript
let x = 10; // TypeScript automatically infers x as number
```


### 7. **Union Types**

Union types allow a variable to hold multiple types of values, defined using the | symbol.


```typescript
let value: string | number;
value = "Hello";
value = 42;
```


### 8. **Type Aliases**

Use the type keyword to define type aliases for reuse.


```typescript
type ID = string | number;
let userId: ID = "123";
```


### 9. **Type Assertions**

Type assertions tell the compiler the specific type of a value, useful when we know more about the variable than TypeScript does.


```typescript
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
```


### 10. **Decorators**

Decorators are an advanced feature in TypeScript that allow attaching metadata to classes, methods, or properties. Decorators are heavily used in Angular to define components, modules, etc.


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


### 11. **Modules and Namespaces**

- **Modules**: TypeScript supports the ES6 module system; modules can be imported and exported using `import` and `export`.


```typescript
// module.ts
export const pi = 3.14;

// main.ts
import { pi } from './module';
console.log(pi);
```

- **Namespaces**: TypeScript provides namespaces to organize code, suitable for large applications.


```typescript
namespace Geometry {
  export function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
  }
}

console.log(Geometry.calculateArea(5));
```
