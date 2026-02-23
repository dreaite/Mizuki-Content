---
title: 'TypeScript入門'
published: 2024-11-04
updated: 2024-11-04
description: 'TypeScriptの基礎には、型システム、インターフェース、クラス、デコレータなどが含まれます。number、string、boolean などの基本型をサポートし、型注釈、ジェネリクス、ユニオン型、型エイリアスなどの機能も利用できます。デコレータはクラスやメソッドにメタデータを付与するために使われ、モジュールや名前空間はコード整理に役立ちます。'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca178025a684d438f265c6a0/IMG_1461.jpg'
tags: ['ts', 'doc']
category: 'FRONTEND'
draft: false
lang: 'ja'
---

## TypeScript の基礎

- **型システム**：変数と関数の型宣言（例として **`string`**, **`number`**, **`boolean`** など）。
- **インターフェース（Interfaces）**：データ構造を定義する方法。
- **クラス（Classes）**：クラスの定義と使用方法、コンストラクタやメソッドを含む。
- **デコレータ（Decorators）**：Angular ではコンポーネントやモジュールなどがデコレータで定義されており、例として **`@Component`**、**`@NgModule`** など。

### 1. **基本の型**


TypeScript は以下の一般的な基本型をサポートします：

- **number**：数値型、整数と浮動小数点数を含む。

    ```typescript
    let age: number = 30
    ```

- **string**：文字列型、テキストの保存に用いる。

    ```typescript
    let name: string = "Alice";
    ```

- **boolean**：真偽値型、値は `true` または `false`。

    ```typescript
    let isActive: boolean = true;
    ```

- **array**：配列型、配列の要素の型を指定できます。

    ```typescript
    let numbers: number[] = [1, 2, 3];
    ```

- **tuple**：タプル型、固定長と型の配列に用いる。

    ```typescript
    let user: [string, number] = ["Alice", 30]
    ```

- **enum**：列挙型、名前付き定数の集合を定義します。

    ```typescript
    enum Color { Red, Green, Blue }
    let color: Color = Color.Green;
    ```

- **any**：任意型、不確定な変数型に適用しますが、頻繁な使用は推奨されません。

    ```typescript
    let randomValue: any = "hello";
    randomValue = 5;  // 他の型に再代入可能
    ```

- **void**：戻り値がなく、通常は関数に戻り値がない場合に用います。

    ```typescript
    function logMessage(): void {
      console.log("This is a message");
    }
    ```

- **null と undefined**：変数が空または未定義であることを示します。

    ```typescript
    let u: undefined = undefined;
    let n: null = null;
    ```


### 2. **型注釈**


変数、引数、戻り値に型注釈を追加することで、コード補完とエラーチェックを容易にします。


```typescript
let name: string = "Alice";
function greet(name: string): string {
  return `Hello, ${name}`;
}
```


### 3. **インターフェース（Interfaces）**


インターフェースはオブジェクトの構造（どの属性とメソッドが含まれるか）を定義するため、コードの再利用性と柔軟性の実現に役立ちます。


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


TypeScript はオブジェクト指向プログラミングをサポートし、クラスと継承の使用を許可します。クラスにはコンストラクター、属性、メソッドが含まれます。


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

TypeScript はクラスメンバーのアクセス権を制御する3つのアクセス修飾子を提供します：

- **public**：公開、デフォルトの修飾子で、どこからでもアクセスできます。
- **private**：プライベート、クラス内部でのみアクセス可能。
- **protected**：プロテクト、クラス内部および継承したサブクラスでアクセス可能。

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


ジェネリクスは、関数・クラス・インターフェースを定義する際に型を指定せず、使用時に型を指定することを可能にします。これによりコードの再利用性が高まります。


```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");  // T が string に推論される
```


### 6. **型推論**


TypeScript はコードに基づいて自動的に変数の型を推論します。明示的な型宣言がない場合、型は代入に基づいて自動的に判断されます。


```typescript
let x = 10; // TypeScript は自動的に x を number と推論
```


### 7. **ユニオン型（Union Types）**


ユニオン型は、1つの変数が複数の型の値を受け取ることを許容します。`|` 記号を使用して定義します。


```typescript
let value: string | number;
value = "Hello";
value = 42;
```


### 8. **型エイリアス（Type Aliases）**


`type` キーワードを使用して型のエイリアスを定義し、再利用を容易にします。


```typescript
type ID = string | number;
let userId: ID = "123";
```


### 9. **型アサーション（Type Assertions）**


型アサーションは、コンパイラに特定の値の具体的な型を伝え、TypeScript よりも変数の型をよく知っている場合に適用します。


```typescript
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
```


### 10. **デコレータ（Decorators）**


デコレータは TypeScript の高度な機能で、クラス・メソッド・プロパティにメタデータを適用することを許可します。Angular ではデコレータを使ってコンポーネントやモジュールなどを多用します。


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


- **モジュール**：TypeScript は ES6 モジュールシステムをサポートしており、`import` と `export` を使ってモジュールのインポートとエクスポートを実現します。

    ```typescript
    // module.ts
    export const pi = 3.14;
    
    // main.ts
    import { pi } from './module';
    console.log(pi);
    ```

- **名前空間**：TypeScript はコードを整理するための名前空間（namespace）を提供します。大規模なアプリケーションに適しています。

    ```typescript
    namespace Geometry {
      export function calculateArea(radius: number): number {
        return Math.PI * radius * radius;
      }
    }
    
    console.log(Geometry.calculateArea(5));
    ```
