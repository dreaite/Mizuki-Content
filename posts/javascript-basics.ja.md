---
title: 'JavaScript学習'
published: 2024-11-16
updated: 2024-11-16
description: 'JavaScriptは、軽量・クロスプラットフォーム・イベント駆動という特徴を持つ、動的かつ弱い型付けのインタプリタ型言語です。中核となる概念には、変数とデータ型、制御フロー、関数、非同期プログラミングがあります。JavaScriptはブラウザおよびNode.js環境で実行でき、オブジェクト、配列、分割代入、モジュール化など、多様なデータ型や操作をサポートしています。非同期プログラミングでは、コールバック関数、Promise、async/awaitを使用してタスクを処理します。'
image: 'https://r2.dreaife.tokyo/notion/covers/1405465cca178007b423cb34358c1fa9/IMG_1614.jpg'
tags: ['javaScript']
category: 'FRONTEND'
draft: false
lang: 'ja'
---

# jsについて


JavaScript は、動的で弱い型付けのインタプリタ型言語であり、もともとはブラウザ上でのインタラクションのために設計されました。


## **特徴**

- **軽量**：構文がシンプルで、学習を始めるハードルが低い。
- **クロスプラットフォーム**：ブラウザや Node.js など、さまざまな環境で実行できます。
- **インタプリタ型**：コンパイル不要で、実行時に直接処理されます。
- **イベント駆動**：ユーザー操作やネットワークリクエストなどの非同期タスクの処理に非常に適しています。

## コアコンセプト

- **変数とデータ型**
    - JavaScript は動的型付け言語であり、あらゆる型のデータを格納できます。
    - 変数の宣言には **`var`**（古い方法）、**`let`**（推奨）、または **`const`**（推奨）を使用します。

        ```javascript
        let name = "JavaScript";  // 字符串
        const version = 2024;    // 数字
        var isCool = true;       // 布尔值
        ```

- **基本データ型**
    - **プリミティブ型**：**`String`**、**`Number`**、**`Boolean`**、**`undefined`**、**`null`**、**`Symbol`**、**`BigInt`**
    - **複合型**：**`Object`**（配列や関数などを含む）

        ```javascript
        let array = [1, 2, 3]; // 数组
        let obj = { key: "value" }; // 对象
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
    - 通常の関数またはアロー関数を定義できます。

        ```javascript
        function greet(name) {
            return `Hello, ${name}!`;
        }
        
        const greetArrow = (name) => `Hello, ${name}!`;
        ```

- **イベント駆動と非同期処理**
    - **`setTimeout`** と **`setInterval`** を使用して、指定したタイミングで処理を実行します。
    - **`Promise`** または **`async/await`** を使用して非同期処理を扱います。

        ```javascript
        const fetchData = async () => {
            let response = await fetch("https://api.example.com/data");
            let data = await response.json();
            console.log(data);
        };
        ```


## **JS の実行環境**

1. **ブラウザ**
    - JavaScript はもともとブラウザ向けに設計され、DOM（Web ページのコンテンツ）を動的に操作するために使用されます。
    - 例：ボタンをクリックしたときにアラートを表示します。

        ```javascript
        javascript
        复制代码
        document.querySelector("button").addEventListener("click", () => {
            alert("Button clicked!");
        });
        ```

2. **Node.js**
    - Node.js は、JavaScript のサーバーサイド実行環境です。
    - 例：シンプルな HTTP サーバーを作成します。

        ```javascript
        javascript
        复制代码
        const http = require("http");
        
        const server = http.createServer((req, res) => {
            res.end("Hello, Node.js!");
        });
        
        server.listen(3000, () => console.log("Server running at http://localhost:3000"));
        ```


# JavaScriptの基礎


## **第1章：JavaScript の基礎**


### **1.1 変数と定数**

- 変数の宣言方法：
    - `var`（非推奨）：関数スコープ。
    - `let`（推奨）：ブロックスコープで、再代入が可能。
    - `const`（推奨）：ブロックスコープで、再代入は不可。

**例**：


```javascript
let age = 25;
const name = "Alice";
console.log(`${name} is ${age} years old.`);
```

- **変数のスコープ**
    - **グローバルスコープ**：関数の外側で宣言され、プログラム全体からアクセスできます。
    - **関数スコープ**：**`var`** で宣言された変数は、関数内でのみ使用できます。
    - **ブロックスコープ**：**`let`** または **`const`** で宣言された変数は、コードブロック **`{}`** 内でのみ使用できます。
- **変数のホイスティング**
    - **`var`** は**ホイスティングされます**が、値が代入されていない場合は **`undefined`** になります。
    - **`let`** **と** **`const`** は**ホイスティングされません**。

### **1.2 データ型**

- **基本型**：`String`、`Number`、`Boolean`、`undefined`、`null`、`Symbol`、`BigInt`
- **複合型**：`Object`（配列や関数などを含む）

**例**：


```javascript
let age = 25; // 整数
let price = 19.99; // 浮点数
let result = "abc" / 2; // NaN
let infinite = 1 / 0; // Infinity

let name = "John";
let greeting = `Hello, ${name}!`; // 模板字符串
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
console.log(typeof null); // "object" （这是一个历史遗留问题）
console.log(typeof {}); // "object"
console.log(typeof []); // "object"

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// 类型转换
let str = String(123); // 转为字符串
let num = Number("123"); // 转为数字
let bool = Boolean(1); // 转为布尔值

console.log("5" + 2); // "52" （字符串拼接）
console.log("5" - 2); // 3 （字符串转数字后计算）
console.log(true + 1); // 2 （布尔值转为数字）
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


**`if`** の条件では、複数の条件を組み合わせて判定するために論理演算子がよく使用されます。

- **論理積（&&）**：すべての条件が真の場合、真を返します。
- **論理和（||）**：少なくとも1つの条件が真の場合、真を返します。
- **論理否定（!）**：条件の真偽を反転します。

**Truthy と Falsy**


JavaScript では、一部の値はブール値のコンテキストで真または偽として扱われます。

- **Falsy（偽とみなされる値）**：**`false`**、**`0`**、**`""`**（空文字列）、**`null`**、**`undefined`**、**`NaN`**。
- **Truthy（真とみなされる値）**：Falsy 以外のすべての値。

### **1.4 ループ**

- `for`、`while`、`do-while`、`for...in`、`for...of`

**例**：


```javascript
for (initialization; condition; increment) {
    // 循环体：在条件为 true 时重复执行的代码
}

while (condition) {
    // 循环体
}

do {
    // 循环体
} while (condition);

for (const element of iterable) {
    // 循环体：每次迭代都会赋值一个元素给 element
}

for (const key in object) {
    // 循环体：每次迭代都会赋值一个属性名给 key
}
```


**ループの制御：break と continue**

- **`break`**：ループ全体を終了します。
- **`continue`**：現在の反復処理をスキップし、次の反復に進みます。

---


## **第2章：関数とスコープ**


### **2.1 関数の基礎**

- 通常の関数、関数式、アロー関数。
- デフォルト引数、可変長引数。

**例**：


```javascript
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet("Alice"));

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // 输出: Hello, Guest!

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 输出: 10
```


### **2.2 スコープとクロージャ**

- グローバルスコープ、関数スコープ、ブロックスコープ。
    - **グローバルスコープ**：関数の外側で宣言された変数で、プログラム全体からアクセスできます。
    - **関数スコープ**：関数内で宣言された変数で、関数内からのみアクセスできます。
    - **ブロックスコープ**：**`let`** と **`const`** で宣言された変数は、ブロック **`{}`** 内でのみアクセスできます。
- クロージャ：関数が定義時のスコープにある変数を保持する仕組みで、通常はプライベート変数や関数を作成するために使用されます。

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
console.log(double(5)); // 输出: 10
console.log(triple(5)); // 输出: 15
```


---


## **第3章：オブジェクトと配列**


### **3.1 オブジェクトの操作**

- オブジェクトの作成、プロパティへのアクセス、プロパティの変更、プロパティの削除。
    - 作成：{},new Object(),class
    - アクセス：${class}.prop,${class}[prop]
    - 変更／削除
- オブジェクトの走査：`for...in`、`Object.keys()`、`Object.entries()`。

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


ヒント：class 内で()を使用する場合：


this を使用すると class 内部のプロパティを参照できないことがあります。これは、アロー関数 **`() => {}`** の **`this`** の挙動が通常の関数とは異なるためです。アロー関数は独自の **`this`** を作成せず、定義時の外部コンテキストから継承します。

- アロー関数の **`this`** は、**`frunction`** が定義された時点のスコープから継承されます。
- **`frunction`** は **`class`** オブジェクトのコンテキスト内で定義されていますが、アロー関数の **`this`** は **`person`** ではなく、**グローバルスコープ**（ブラウザでは **`this`** は **`window`**、Node.js では **`global`**）を参照します。

したがって、グローバルスコープには **`prop`** プロパティが存在しないため、**`this.prop`** は未定義になります。


### **3.2 配列の操作**

- よく使われるメソッド：`push`、`pop`、`map`、`filter`、`reduce`。
    - **`push()`**：配列の末尾に追加します。
    - **`pop()`**：配列の末尾から削除します。
    - **`unshift()`**：配列の先頭に追加します。
    - **`shift()`**：配列の先頭から削除します。
    - **`indexOf()`**：最初に一致する要素のインデックスを取得します。
    - **`includes()`**：指定した要素が含まれているか確認します。
    - **`forEach()`**：各要素に対して処理を実行します。
    - **`map()`**：各要素の処理結果を含む新しい配列を返します。
    - **`filter()`**：条件を満たす要素を抽出します。
    - **`reduce()`**：配列の要素を累積的に計算します。
- 分割代入とスプレッド構文。

**例**：


```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6


const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 输出: 1 2 3
```


---


## **第4章：高度な構文とモジュール化**


### **4.1 分割代入とスプレッド構文**

- 分割代入：配列やオブジェクトから値を素早く取り出します。
- スプレッド構文：オブジェクトや配列を素早くコピーまたは結合します。

**例**：


```javascript
const [x, , ...z] = [1, 2, 3, 4, 5];
console.log(x, z); // 输出: 1 [3,4,5]

const { name, age } = { name: "Alice", age: 25 };
console.log(name, age); // Alice 25
```


### **4.2 テンプレートリテラル**

- バッククォート（```）を使用して文字列を動的に生成します。

**例**：


```javascript
const name = "Alice";
console.log(`Hello, ${name}!`);
```


### **4.3 モジュール化**

- モジュールのエクスポート：`export` と `export default`。
- モジュールのインポート：`import`、`import * as`。

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


export default によるデフォルトエクスポートは各モジュールに1つだけで、インポート時に{}は不要です。


`export * as test from “test.js”`を使用する場合は、`test.default`を直接使用できます。


---


## **第5章：非同期プログラミング**


### **5.1 コールバック関数**

- 非同期タスクが完了したときにコールバック関数を呼び出します。

**例**：


```javascript
setTimeout(() => console.log("Task complete"), 1000);
```

- コールバック地獄

複数の非同期タスクを順番に実行する必要がある場合、コールバック関数がネストされ、コードの保守が難しくなります。この現象は「コールバック地獄」と呼ばれます。


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


コールバック地獄の問題を解決するには、**Promise** を使用できます。


### **5.2 Promise**

- `Promise` を使用して、非同期タスクをチェーン形式で処理します。

    **`Promise`** は、非同期処理が最終的に完了または失敗したことを表すオブジェクトです。次の3つの状態があります：

    1. **Pending**（処理中）：初期状態で、完了も失敗もしていません。
    2. **Fulfilled**（完了）：処理が成功し、結果が返されます。
    3. **Rejected**（失敗）：処理が失敗し、エラーが返されます。

**例**：


```javascript
const promise = new Promise((resolve, reject) => {
    // 异步操作
    if (success) {
        resolve(value); // 成功时调用 resolve
    } else {
        reject(error); // 失败时调用 reject
    }
});

fetch("<https://api.myip.com>")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```


### **5.3 async/await**

1. **`async`** は、関数を宣言して **`Promise`** を返すようにするために使用します。
2. **`await`** は、コードの実行を一時停止し、**`Promise`** が解決（resolve）されるのを待ってから処理を続行するために使用します。

**例**：


```javascript
async function fetchData() {
    const response = await fetch("<https://api.myip.com>");
    const data = await response.json();
    console.log(data);
}
fetchData();
```
