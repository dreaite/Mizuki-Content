---
title: 'TypeScript入門学習'
published: 2024-11-04
updated: 2024-11-04
description: 'TypeScriptの基礎には、型システム、インターフェース、クラス、デコレーターなどが含まれます。number、string、booleanなどのさまざまな基本型をサポートし、型注釈、ジェネリクス、ユニオン型、型エイリアスなどの機能も利用できます。デコレーターはクラスやメソッドにメタデータを付与するために使用され、モジュールと名前空間はコードの整理に役立ちます。'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca178025a684d438f265c6a0/IMG_1461.jpg'
tags: ['ts', 'doc']
category: 'FRONTEND'
draft: false
lang: 'ja'
---

## TypeScriptの基礎

- **型システム**：変数や関数の型宣言（**`string`**、**`number`**、**`boolean`** など）。
- **インターフェース（Interfaces）**：インターフェースを使用してデータ構造を定義する方法。
- **クラス（Classes）**：コンストラクターやメソッドを含む、クラスの定義と使用方法。
- **デコレーター（Decorators）**：Angularのコンポーネントやモジュールなどは、**`@Component`**、**`@NgModule`** などのデコレーターを使用して定義されます。

### 1. **基本型**


TypeScriptは、以下の一般的な基本型をサポートしています。

- **number**：整数や浮動小数点数を含む数値型。

    ```typescript
    let age: number = 30
    ```

- **string**：テキストを格納するための文字列型。

    ```typescript
    let name: string = "Alice";
    ```

- **boolean**：値が `true` または `false` となる真偽値型。

    ```typescript
    let isActive: boolean = true;
    ```

- **array**：配列型。配列内の要素の型を指定できます。

    ```typescript
    let numbers: number[] = [1, 2, 3];
    ```

- **tuple**：固定された長さと型を持つ配列に使用するタプル型。

    ```typescript
    let user: [string, number] = ["Alice", 30]
    ```

- **enum**：名前付き定数の集合を定義する列挙型。

    ```typescript
    enum Color { Red, Green, Blue }
    let color: Color = Color.Green;
    ```

- **any**：任意の型。不確定な型の変数に使用できますが、頻繁な使用は推奨されません。

    ```typescript
    let randomValue: any = "hello";
    randomValue = 5;  // 可以重新赋值为其他类型
    ```

- **void**：戻り値がないことを表し、通常は戻り値を持たない関数に使用します。

    ```typescript
    function logMessage(): void {
      console.log("This is a message");
    }
    ```

- **nullとundefined**：変数が空、または未定義であることを表します。

    ```typescript
    let u: undefined = undefined;
    let n: null = null;
    ```


### 2. **型注釈**


変数、引数、戻り値に型注釈を追加すると、コード補完やエラーチェックに役立ちます。


```typescript
let name: string = "Alice";
function greet(name: string): string {
  return `Hello, ${name}`;
}
```


### 3. **インターフェース（Interfaces）**


インターフェースは、オブジェクトの構造（含まれるプロパティやメソッド）を定義するために使用され、コードの再利用性と柔軟性の向上に役立ちます。


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


### 4. **クラス（Classes）**


TypeScriptはオブジェクト指向プログラミングをサポートしており、クラスや継承を使用できます。クラスにはコンストラクター、プロパティ、メソッドが含まれます。


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

- アクセス修飾子

TypeScriptには、クラスメンバーへのアクセスを制御する3種類のアクセス修飾子があります。

- **public**：公開。デフォルトの修飾子で、どこからでもアクセスできます。
- **private**：非公開。クラス内部からのみアクセスできます。
- **protected**：保護。クラス内部および継承したサブクラスからアクセスできます。

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


### 5. **ジェネリクス（Generics）**


ジェネリクスを使用すると、関数、クラス、インターフェースを定義する際には型を指定せず、使用時に型を指定できます。これにより、コードの再利用性が向上します。


```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");  // T 被推断为 string
```


### 6. **型推論**


型が明示的に宣言されていない場合、TypeScriptはコードに基づいて変数の型を自動的に推論します。


```typescript
let x = 10; // TypeScript 自动推断 x 为 number
```


### 7. **ユニオン型（Union Types）**


ユニオン型を使用すると、1つの変数で複数の型の値を受け入れられます。`|` 記号を使用して定義します。


```typescript
let value: string | number;
value = "Hello";
value = 42;
```


### 8. **型エイリアス（Type Aliases）**


`type` キーワードを使用すると型に別名を定義でき、再利用しやすくなります。


```typescript
type ID = string | number;
let userId: ID = "123";
```


### 9. **型アサーション（Type Assertions）**


型アサーションは、ある値の具体的な型をコンパイラーに伝えるために使用します。TypeScriptよりも開発者のほうが変数の型を正確に把握している場合に適しています。


```typescript
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
```


### 10. **デコレーター（Decorators）**


デコレーターはTypeScriptの高度な機能で、クラス、メソッド、プロパティにメタデータを適用できます。Angularでは、コンポーネントやモジュールなどの定義にデコレーターが多用されています。


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


### 11. **モジュールと名前空間**

- **モジュール**：TypeScriptはES6のモジュールシステムをサポートしており、`import` と `export` を使用してモジュールをインポートおよびエクスポートできます。

    ```typescript
    // module.ts
    export const pi = 3.14;
    
    // main.ts
    import { pi } from './module';
    console.log(pi);
    ```

- **名前空間**：TypeScriptには、コードを整理するための名前空間（namespace）が用意されており、大規模なアプリケーションに適しています。

    ```typescript
    namespace Geometry {
      export function calculateArea(radius: number): number {
        return Math.PI * radius * radius;
      }
    }
    
    console.log(Geometry.calculateArea(5));
    ```
