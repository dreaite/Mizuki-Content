---
title: 'Preliminary TypeScript Learning'
published: 2024-11-04
updated: 2024-11-04
description: 'TypeScript basics include the type system, interfaces, classes, decorators, and more. It supports basic types such as number, string, and boolean, as well as features including type annotations, generics, union types, and type aliases. Decorators apply metadata to classes and methods, while modules and namespaces help organize code.'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca178025a684d438f265c6a0/IMG_1461.jpg'
tags: ['ts', 'doc']
category: 'FRONTEND'
draft: false
lang: 'en'
---

## TS Basics

- **Type System**: Type declarations for variables and functions (such as **`string`**, **`number`**, **`boolean`**, etc.).
- **Interfaces**: How to use interfaces to define data structures.
- **Classes**: Learn how to define and use classes, including constructors and methods.
- **Decorators**: Components, modules, and other constructs in Angular are defined using decorators such as **`@Component`** and **`@NgModule`**.

### 1. **Basic Types**


TypeScript supports the following commonly used basic types:

- **number**: A numeric type that includes integers and floating-point numbers.

    ```typescript
    let age: number = 30
    ```

- **string**: A string type used to store text.

    ```typescript
    let name: string = "Alice";
    ```

- **boolean**: A Boolean type whose value is `true` or `false`.

    ```typescript
    let isActive: boolean = true;
    ```

- **array**: An array type whose element type can be specified.

    ```typescript
    let numbers: number[] = [1, 2, 3];
    ```

- **tuple**: A tuple type used for arrays with a fixed length and fixed types.

    ```typescript
    let user: [string, number] = ["Alice", 30]
    ```

- **enum**: An enumeration type that defines a set of named constants.

    ```typescript
    enum Color { Red, Green, Blue }
    let color: Color = Color.Green;
    ```

- **any**: A type that can hold any value. It is useful when a variable's type is uncertain, but frequent use is discouraged.

    ```typescript
    let randomValue: any = "hello";
    randomValue = 5;  // 可以重新赋值为其他类型
    ```

- **void**: Indicates no return value and is generally used for functions that do not return anything.

    ```typescript
    function logMessage(): void {
      console.log("This is a message");
    }
    ```

- **null and undefined**: Indicate that a variable is empty or undefined.

    ```typescript
    let u: undefined = undefined;
    let n: null = null;
    ```


### 2. **Type Annotations**


Type annotations can be added to variables, parameters, and return values to improve code completion and error checking.


```typescript
let name: string = "Alice";
function greet(name: string): string {
  return `Hello, ${name}`;
}
```


### 3. **Interfaces**


Interfaces define the structure of objects—that is, which properties and methods they contain—helping improve code reusability and flexibility.


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


TypeScript supports object-oriented programming, including classes and inheritance. A class contains constructors, properties, and methods.


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

- Access Modifiers

TypeScript provides three access modifiers for controlling access to class members:

- **public**: Public and accessible from anywhere. This is the default modifier.
- **private**: Private and accessible only within the class.
- **protected**: Protected and accessible within the class and its subclasses.

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


Generics allow functions, classes, or interfaces to be defined without specifying a type until they are used. This improves code reusability.


```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");  // T 被推断为 string
```


### 6. **Type Inference**


TypeScript automatically infers variable types from the code. If a type is not explicitly declared, TypeScript determines it based on the assigned value.


```typescript
let x = 10; // TypeScript 自动推断 x 为 number
```


### 7. **Union Types**


Union types allow a variable to accept values of multiple types and are defined using the `|` symbol.


```typescript
let value: string | number;
value = "Hello";
value = 42;
```


### 8. **Type Aliases**


The `type` keyword can be used to define an alias for a type, making it easier to reuse.


```typescript
type ID = string | number;
let userId: ID = "123";
```


### 9. **Type Assertions**


Type assertions tell the compiler the specific type of a value. They are useful when we know more about a variable's type than TypeScript does.


```typescript
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
```


### 10. **Decorators**


Decorators are an advanced TypeScript feature that allows metadata to be applied to classes, methods, or properties. Angular makes extensive use of decorators to define components, modules, and more.


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

- **Modules**: TypeScript supports the ES6 module system, allowing modules to be imported and exported using `import` and `export`.

    ```typescript
    // module.ts
    export const pi = 3.14;
    
    // main.ts
    import { pi } from './module';
    console.log(pi);
    ```

- **Namespaces**: TypeScript provides namespaces (`namespace`) for organizing code, making them suitable for large applications.

    ```typescript
    namespace Geometry {
      export function calculateArea(radius: number): number {
        return Math.PI * radius * radius;
      }
    }
    
    console.log(Geometry.calculateArea(5));
    ```
