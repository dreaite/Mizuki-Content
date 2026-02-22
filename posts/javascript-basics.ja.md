---
title: 'JavaScript学习'
published: 2024-11-16
updated: 2024-11-16
description: 'JavaScript是一种动态、弱类型的解释型语言，具有轻量级、跨平台和事件驱动的特点。核心概念包括变量与数据类型、控制流、函数及异步编程。JavaScript可在浏览器和Node.js环境中运行，支持多种数据类型和操作，如对象、数组、解构赋值和模块化。异步编程使用回调函数、Promise和async/await来处理任务。'
permalink: 'javascript-basics.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/1405465cca178007b423cb34358c1fa9/IMG_1614.jpg'
tags: ['javaScript']
category: 'FRONTEND'
draft: false
lang: 'ja'
---

# JavaScript について

JavaScript は動的で、弱い型の解釈型言語で、元々はブラウザ側のインタラクションのために設計されました。

## **特徴**

- **軽量**：構文はシンプルで、入門のハードルが低い。
- **クロスプラットフォーム対応**：ブラウザ、Node.js など、複数の環境で実行可能。
- **解釈型**：コンパイル不要、実行時に直接実行。
- **イベント駆動**：ユーザーインタラクション、ネットワーク要求などの非同期処理の扱いに適している。

## **コア概念**

- **変数とデータ型**
    - JavaScript は動的型言語で、あらゆるタイプのデータを格納できます。
    - 変数宣言には **`var`**（旧式）、**`let`**（推奨）、または **`const`**（推奨）を使用します。

        ```javascript
        let name = "JavaScript";  // 文字列
        const version = 2024;    // 数字
        var isCool = true;       // ブール値
        ```

- **基本データ型**
    - **原始型**：**`String`**、**`Number`**、**`Boolean`**、**`undefined`**、**`null`**、**`Symbol`**、**`BigInt`**
    - **複合型**：**`Object`**（配列、関数などを含む）

        ```javascript
        let array = [1, 2, 3]; // 配列
        let obj = { key: "value" }; // オブジェクト
        ```

- **制御フロー**
    - 条件文：**`if-else`**、**`switch`**
    - ループ：**`for`**、**`while`**、**`forEach`**

        ```javascript
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
        ```

- **関数**
    - 普通の関数またはアロー関数を定義できます。

        ```javascript
        function greet(name) {
            return `Hello, ${name}!`;
        }
        
        const greetArrow = (name) => `Hello, ${name}!`;
        ```

- **イベント駆動と非同期**
    - 使用 **`setTimeout`** および **`setInterval`** を用いて定期的に実行。
    - 使用 **`Promise`** または **`async/await`** を用いて非同期処理を処理。

        ```javascript
        const fetchData = async () => {
            let response = await fetch("https://api.example.com/data");
            let data = await response.json();
            console.log(data);
        };
        ```

## **JS の実行環境**

1. **ブラウザ**
    - JavaScript は最初、ブラウザ用に設計され、動的に DOM（ウェブページの内容）を操作します。
    - 例：ボタンをクリックしたときにアラートを表示します。

        ```javascript
        javascript
        复制代码
        document.querySelector("button").addEventListener("click", () => {
            alert("Button clicked!");
        });
        ```

2. **Node.js**
    - Node.js は JavaScript のサーバサイド実行環境です。
    - 例：簡単な HTTP サーバーを作成します。

        ```javascript
        javascript
        复制代码
        const http = require("http");
        
        const server = http.createServer((req, res) => {
            res.end("Hello, Node.js!");
        });
        
        server.listen(3000, () => console.log("Server running at http://localhost:3000"));
        ```


# JavaScript基礎


## **第一章：JavaScript 基礎**


### **1.1 変数と定数**

- 変数宣言の方法：
    - `var`（推奨されない）：関数スコープ。
    - `let`（推奨）：ブロックスコープ、再代入を許可。
    - `const`（推奨）：ブロックスコープ、再代入不可。

**例**：


```javascript
let age = 25;
const name = "Alice";
console.log(`${name} is ${age} years old.`);
```

- **変数のスコープ**
    - **グローバルスコープ**：関数の外で宣言され、プログラム全体からアクセス可能。
    - **関数スコープ**：`var` で宣言された変数は関数内でのみ利用可能。
    - **ブロックスコープ**：`let` または `const` で宣言された変数は、ブロック `{}` 内でのみ有効。
- **変数のホイスティング**
    - **`var`** はホイスティングされますが、値が代入されていない場合は **`undefined`** になります。
    - **`let`** および **`const`** はホイスティングされません。

### **1.2 データ型**

- **基本型**：`String`、`Number`、`Boolean`、`undefined`、`null`、`Symbol`、`BigInt`
- **複合型**：`Object`（配列、関数などを含む）

**例**：


```javascript
let age = 25; // 整数
let price = 19.99; // 浮動小数点数
let result = "abc" / 2; // NaN
let infinite = 1 / 0; // Infinity

let name = "John";
let greeting = `Hello, ${name}!`; // テンプレート文字列
console.log(greeting); // Hello, John!

let isOnline = true;
let hasPermission = false;

let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

let bigNum = 123456789012345678901234567890n;
console.log(bigNum); // 123456789012345678901234567890n

let person = {
    name: "Alice",
    age: 30,
};
console.log(person.name); // Alice

let numbers = [1, 2, 3, 4];
console.log(numbers[0]); // 1

console.log(typeof 123); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" （これは歴史的な問題です）
console.log(typeof {}); // "object"
console.log(typeof []); // "object"

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// 型変換
let str = String(123); // 文字列へ変換
let num = Number("123"); // 数値へ変換
let bool = Boolean(1); // ブール値へ変換

console.log("5" + 2); // "52" （文字列結合）
console.log("5" - 2); // 3 （文字列を数値に変換して計算）
console.log(true + 1); // 2 （真偽値を数値へ変換）
```


### **1.3 条件文**

- `if-else`、`switch`、三項演算子。

**例**：


```javascript
const age = 18;
const message = age >= 18 ? "Adult" : "Minor";
console.log(message);
```


**論理演算子**


**`if`** 条件では、複数の条件判断を組み合わせるために論理演算子を頻繁に使用します。

- **論理積（&&）**：すべての条件が真のとき、真を返します。
- **論理和（||）**：どれか1つの条件が真であれば、真を返します。
- **論理非（!）**：条件を反転します。

**真偽値（Truthy と Falsy）**


JavaScript では、ブール値の文脈で真偽とみなされる値がいくつかあります。

- **Falsy（偽値）**：**`false`**、**`0`**、**`""`**（空文字列）、**`null`**、**`undefined`**、**`NaN`**。
- **Truthy（真値）**：Falsy 以外のすべての値。

### **1.4 ループ**

- `for`、`while`、`do-while`、`for...in`、`for...of`

**例**：


```javascript
for (initialization; condition; increment) {
    // ループ本体：条件が true の間、繰り返し実行されるコード
}

while (condition) {
    // ループ本体
}

do {
    // ループ本体
} while (condition);

for (const element of iterable) {
    // ループ本体：各反復で要素を element に代入
}

for (const key in object) {
    // ループ本体：各反復でプロパティ名を key に代入
}
```


**ループの制御：break と continue**

- **`break`**：全体のループを抜ける。
- **`continue`**：今回のループをスキップし、次の反復へ。

---


## **第二章：関数と作用域**


### **2.1 関数の基礎**

- 普通の関数、関数式、アロー関数。
- デフォルト引数、可変長引数。

**例**：


```javascript
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet("Alice"));

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // 出力: Hello, Guest!

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 出力: 10
```


### **2.2 作用域とクロージャ**

- グローバルスコープ、関数スコープ、ブロックスコープ。
    - **グローバルスコープ**：関数の外で宣言された変数は、プログラム全体からアクセス可能。
    - **関数スコープ**：関数内部で宣言された変数は、関数内部でのみアクセス可能。
    - **ブロックスコープ**：`let` および `const` で宣言された変数は、ブロック `{}` 内でのみアクセス可能。
- クロージャ：関数が定義されたときのスコープ変数を捕捉し、通常はプライベート変数や関数を作るのに用いられます。

**例**：


```javascript
function outerFunction() {
    let counter = 0;
    return function () {
        return ++counter;
    };
}
const increment = outerFunction();
console.log(increment()); // 1
console.log(increment()); // 2


function createMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // 出力: 10
console.log(triple(5)); // 出力: 15
```


---


## **第三章：オブジェクトと配列**


### **3.1 オブジェクト操作**

- オブジェクトの作成、属性の参照、属性の変更、属性の削除。
    - 作成：{}, new Object(), クラス
    - 参照：${class}.prop、${class}[prop]
    - 変更/削除
- オブジェクトの反復：`for...in`、`Object.keys()`、`Object.entries()`。

**例**：


```javascript
const person = { name: "Alice", age: 25 };
console.log(person.name); // Alice

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


Object.keys(person).forEach((key) => {
    console.log(`${key}: ${person[key]}`);
});


Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```


ヒント：クラス内で () を使用すると、クラス内部の属性を呼び出せなくなることがあります。これは、アロー関数 (() => {}) の this の挙動が通常の関数と異なるためです。アロー関数は自身の this を作成せず、定義時の外部コンテキストから継承します。

- アロー関数の **`this`** は **function** 定義時のスコープから継承します。
- **`function`** 定義は **`class`** オブジェクトの文脈にありますが、アロー関数の **`this`** はグローバルスコープを指します（ブラウザでは **`window`**、Node.js では **`global`**）、つまり **`person`** ではありません。

したがって、**`this.prop`** は未定義になります。グローバルスコープには **`prop`** 属性が存在しないためです。


### **3.2 配列操作**

- よく使われるメソッド：`push`、`pop`、`map`、`filter`、`reduce`。
- デストラクチャリングと展開演算子。

**例**：


```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6


const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 出力: 1 2 3
```


---


## **第四章：高度な文法とモジュール化**


### **4.1 デストラクチャリングと展開演算子**

- デストラクチャリング：配列やオブジェクトから値を素早く取り出す。
- 展開演算子：オブジェクト/配列を素早くコピーまたは結合する。

**例**：


```javascript
const [x, , ...z] = [1, 2, 3, 4, 5];
console.log(x, z); // 出力: 1 [3,4,5]

const { name, age } = { name: "Alice", age: 25 };
console.log(name, age); // Alice 25
```


### **4.2 テンプレート文字列**

- バッククォート（```）を使用して、動的に文字列を生成する。

**例**：


```javascript
const name = "Alice";
console.log(`Hello, ${name}!`);
```


### **4.3 モジュール化**

- エクスポート：`export` と `export default`。
- インポート：`import`、`import * as`。

**例**：


```javascript
// module.js
export function greet(name) {
    return `Hello, ${name}!`;
}
// main.js
import { greet } from './module.js';
console.log(greet("Alice"));
```


ヒント：


export default は各モジュールにつき1つだけの、デフォルトエクスポートであり、インポート時には {} は不要です。


`export * as test from "test.js"` を使用すると、直接 `test.default` を使用できます。


---


## **第五章：非同期プログラミング**


### **5.1 コールバック関数**

- 非同期タスクが完了したときにコールバック関数を呼び出します。

**例**：


```javascript
setTimeout(() => console.log("Task complete"), 1000);
```

- コールバック地獄

複数の非同期タスクを順番に実行する必要がある場合、ネストされたコールバックがコードを保守しづらくします。この現象を「コールバック地獄」と呼びます。


```javascript
setTimeout(() => {
    console.log("Task 1 complete");
    setTimeout(() => {
        console.log("Task 2 complete");
        setTimeout(() => {
            console.log("Task 3 complete");
        }, 1000);
    }, 1000);
}, 1000);
```


この問題を解決するには、**Promise** を使用します。


### **5.2 Promise**

- 非同期タスクを連鎖して処理するために、`Promise` を使用します。

    **`Promise`** は、非同期操作の最終的な完了または失敗を表すオブジェクトです。以下の3つの状態があります：

    1. Pending（進行中）：初期状態、完了も失敗もしていない。
    2. Fulfilled（完了）：操作が成功し、結果を返す。
    3. Rejected（失敗）：操作が失敗し、エラーを返す。

**例**：


```javascript
const promise = new Promise((resolve, reject) => {
    // 非同期操作
    if (success) {
        resolve(value); // 成功時に resolve を呼ぶ
    } else {
        reject(error); // 失敗時に reject を呼ぶ
    }
});

fetch("<https://api.myip.com>")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```


### **5.3 async/await**

1. **`async`** は、関数を宣言して、それが返す値を **`Promise`** にする。
2. **`await`** は、コードの実行を一時停止して、**`Promise`** が解決されるのを待ってから続行する。

**例**：


```javascript
async function fetchData() {
    const response = await fetch("<https://api.myip.com>");
    const data = await response.json();
    console.log(data);
}
fetchData();
```
