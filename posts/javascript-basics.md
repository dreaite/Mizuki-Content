---
title: 'JavaScript学习'
published: 2024-11-16
updated: 2024-11-16
description: 'JavaScript是一种动态、弱类型的解释型语言，具有轻量级、跨平台和事件驱动的特点。核心概念包括变量与数据类型、控制流、函数及异步编程。JavaScript可在浏览器和Node.js环境中运行，支持多种数据类型和操作，如对象、数组、解构赋值和模块化。异步编程使用回调函数、Promise和async/await来处理任务。'
permalink: 'javascript-basics'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/d32f97c4-78c3-48ea-a30b-5a80fb45ea76/IMG_1614.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGCMQXK%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T135441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECdV98jU4Z6aCq23IekBUhUXPG6LiVxQV5G%2BOXLgAcPAiEAxsRjx5P9y0MJ61o9GcT%2BMH%2BzflVmze1DFnG1Jv9KGWgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgrbMxntTsXBrrA0CrcA%2FTOBoNqWqsnz5xS5JGfgkmcrWQMp%2Fr8ljWRzo8iqRbwO3uQAXvzOu1xJ73aeLYIsLFER9QSdfsTO5A6lHOqYHtxFukOH0BlwiLBHHcyXalFZReKsJJk86tp0rP2gzLjFfPaUPvWrL1Z116brt0OdZqGSVJHq%2B7tw44%2Bfueqp7NviPiTfh2BWUrKmBpSqrjvZvmLRSSircwPvkggmIaK%2Bj8IihafkA51XRYR6oGpLUepz%2FmsLguPUyQbMLR9MvVKI%2FmcUc0wcYuUna7jcyTFkDLDWzt6Xa0QzTX9jFesRCjwcPy6s3JfHuN6IJMAw3KZ%2BzG%2B5OJF0Kv2o4kPp5S843M64hCQ9KCIOGuTZHiH5KovlP1Ye91sA0rjq7OP5EtWvX3yynBDmYWqjhGO47upYOsioPPYmLTQso3sz0DxzVx972aZFLBstGOsL8i1%2BMHgueKh1MRgQDEWyHpIcayh7h6RNjVE9LZwTMVMvKls4j1WzvBrNQYhahD6%2BUtxBNylWVY%2BCSbgucUXatn2DMXS3vIRuRvhUhfeeXOtCeOjyysEQh28kvIuAOcS9ctq7gthmg0m4D1lgPNHuNrZZBsj5Nnz6EEdi18kpPD46%2ByjGIdZzKxM%2Bj9r4mosXVlFMOHj68wGOqUBk8%2BXEVj9%2FD69%2FjN%2FUc5h%2BDOsNLt2mBONzOSU2QFSQaCxBAnpt%2BzdEaL1QgP44AE3Kbw%2Br5ugpZo%2FYbRvLjRQcMKSSeoSWLaANvfiOjtTaUIwk4Ui7pzjDGcYKlzRyeE23Uh3PUNgdhi6eFjUyfF%2FHS7QuFS93JtvebAld%2Bn8C%2BMNWH71uW9oU4i1mBnQsmSlJ%2FUzjmEKkoxkaN%2F1tVJlR3VxW3jn&X-Amz-Signature=3dfced84fba59018675947f27f314faa6f2740bd5e6710081dbf59f21d343365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['javaScript']
category: 'FRONTEND'
draft: false
---

# 关于js


JavaScript 是一种动态的、弱类型的解释型语言，最初设计用于浏览器端的交互。


## **特点**

- **轻量级**：语法简单，入门门槛低。
- **跨平台**：支持在浏览器、Node.js 等多种环境中运行。
- **解释型**：无需编译，直接在运行时执行。
- **事件驱动**：非常适合处理异步任务，如用户交互、网络请求等。

## 核心概念

- **变量与数据类型**
    - JavaScript 是动态类型语言，可以存储任何类型的数据。
    - 变量声明使用 **`var`**（老式方式），**`let`**（推荐），或 **`const`**（推荐）。

        ```javascript
        let name = "JavaScript";  // 字符串
        const version = 2024;    // 数字
        var isCool = true;       // 布尔值
        ```

- **基本数据类型**
    - **原始类型**：**`String`**、**`Number`**、**`Boolean`**、**`undefined`**、**`null`**、**`Symbol`**、**`BigInt`**
    - **复杂类型**：**`Object`**（包括数组、函数等）

        ```javascript
        let array = [1, 2, 3]; // 数组
        let obj = { key: "value" }; // 对象
        ```

- **控制流**
    - 条件语句：**`if-else`**、**`switch`**
    - 循环：**`for`**、**`while`**、**`forEach`**

        ```javascript
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
        ```

- **函数**
    - 可以定义普通函数或箭头函数。

        ```javascript
        function greet(name) {
            return `Hello, ${name}!`;
        }
        
        const greetArrow = (name) => `Hello, ${name}!`;
        ```

- **事件驱动与异步**
    - 使用 **`setTimeout`** 和 **`setInterval`** 定时执行。
    - 使用 **`Promise`** 或 **`async/await`** 处理异步操作。

        ```javascript
        const fetchData = async () => {
            let response = await fetch("https://api.example.com/data");
            let data = await response.json();
            console.log(data);
        };
        ```


## **JS 的运行环境**

1. **浏览器**
    - JavaScript 最初是为浏览器设计，用于动态操作 DOM（网页内容）。
    - 示例：点击按钮时弹出提示框。

        ```javascript
        javascript
        复制代码
        document.querySelector("button").addEventListener("click", () => {
            alert("Button clicked!");
        });
        ```

2. **Node.js**
    - Node.js 是 JavaScript 的服务端运行环境。
    - 示例：创建一个简单的 HTTP 服务器。

        ```javascript
        javascript
        复制代码
        const http = require("http");
        
        const server = http.createServer((req, res) => {
            res.end("Hello, Node.js!");
        });
        
        server.listen(3000, () => console.log("Server running at http://localhost:3000"));
        ```


# JavaScript基础


## **第一章：JavaScript 基础**


### **1.1 变量与常量**

- 变量声明方式：
    - `var`（不推荐）：函数作用域。
    - `let`（推荐）：块作用域，允许重新赋值。
    - `const`（推荐）：块作用域，不允许重新赋值。

**示例**：


```javascript
let age = 25;
const name = "Alice";
console.log(`${name} is ${age} years old.`);
```

- **变量的作用域**
    - **全局作用域**：声明在函数之外，整个程序都可以访问。
    - **函数作用域**：使用 **`var`** 声明的变量只在函数内可用。
    - **块作用域**：使用 **`let`** 或 **`const`** 声明的变量只在代码块 **`{}`** 内可用。
- **变量提升**
    - **`var`** **会被提升**，但值未赋予时是 **`undefined`**。
    - **`let`** **和** **`const`** **不会被提升**。

### **1.2 数据类型**

- **基本类型**：`String`、`Number`、`Boolean`、`undefined`、`null`、`Symbol`、`BigInt`
- **复杂类型**：`Object`（包括数组、函数等）

**示例**：


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


### **1.3 条件语句**

- `if-else`、`switch`、三元运算符。

**示例**：


```javascript
const age = 18;
const message = age >= 18 ? "Adult" : "Minor";
console.log(message);
```


**逻辑运算符**


**`if`** 条件中经常使用逻辑运算符，结合多个条件判断。

- **逻辑与（&&）**：所有条件为真时，返回真。
- **逻辑或（||）**：只要有一个条件为真，返回真。
- **逻辑非（!）**：将条件取反。

**真假值（Truthy 和 Falsy）**


JavaScript 中一些值在布尔上下文中会被认为是真或假。

- **Falsy（假值）**：**`false`**、**`0`**、**`""`**（空字符串）、**`null`**、**`undefined`**、**`NaN`**。
- **Truthy（真值）**：除了 Falsy 以外的所有值。

### **1.4 循环**

- `for`、`while`、`do-while`、`for...in`、`for...of`

**示例**：


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


**控制循环：break 和 continue**

- **`break`**：退出整个循环。
- **`continue`**：跳过本次循环，直接进入下一次。

---


## **第二章：函数与作用域**


### **2.1 函数基础**

- 普通函数、函数表达式、箭头函数。
- 默认参数、不定参数。

**示例**：


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


### **2.2 作用域与闭包**

- 全局作用域、函数作用域、块作用域。
    - **全局作用域**：在函数之外声明的变量，可以被整个程序访问。
    - **函数作用域**：在函数内部声明的变量，只能在函数内部访问。
    - **块作用域**：**`let`** 和 **`const`** 声明的变量，只在块 **`{}`** 内可访问。
- 闭包：函数捕获其定义时的作用域变量，通常用于创建私有变量或函数。

**示例**：


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


## **第三章：对象与数组**


### **3.1 对象操作**

- 创建对象、访问属性、修改属性、删除属性。
    - 创建：{},new Object(),class
    - 访问：${class}.prop,${class}[prop]
    - 修改/删除
- 遍历对象：`for...in`、`Object.keys()`、`Object.entries()`。

**示例**：


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


tips:如果在class中使用()的话：


使用this的时候会调用不了clas内部的属性，这是因为箭头函数 **`() => {}`** 的 **`this`** 行为与普通函数不同。箭头函数不会创建自己的 **`this`**，而是继承自它定义时的外部上下文。

- 箭头函数的 **`this`** 继承自 **`frunction`** 定义时的作用域。
- **`frunction`** 定义在 **`class`** 对象的上下文中，但箭头函数的 **`this`** 指向的是**全局作用域**（在浏览器中，**`this`** 是 **`window`**；在 Node.js 中是 **`global`**），而不是 **`person`**。

因此，**`this.prop`** 是未定义的，因为全局作用域中没有 **`prop`** 属性。


### **3.2 数组操作**

- 常用方法：`push`、`pop`、`map`、`filter`、`reduce`。
    - **`push()`**：添加到数组末尾。
    - **`pop()`**：从数组末尾移除。
    - **`unshift()`**：添加到数组开头。
    - **`shift()`**：从数组开头移除。
    - **`indexOf()`**：找到第一个匹配的索引。
    - **`includes()`**：检查是否包含某个元素。
    - **`forEach()`**：对每个元素执行操作。
    - **`map()`**：返回一个新数组，包含每个元素的处理结果。
    - **`filter()`**：筛选满足条件的元素。
    - **`reduce()`**：对数组进行累积计算。
- 解构赋值与展开运算符。

**示例**：


```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6


const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 输出: 1 2 3
```


---


## **第四章：高级语法与模块化**


### **4.1 解构赋值与展开运算符**

- 解构：快速提取数组或对象中的值。
- 展开运算符：快速拷贝或合并对象/数组。

**示例**：


```javascript
const [x, , ...z] = [1, 2, 3, 4, 5];
console.log(x, z); // 输出: 1 [3,4,5]

const { name, age } = { name: "Alice", age: 25 };
console.log(name, age); // Alice 25
```


### **4.2 模板字符串**

- 使用反引号（```）动态生成字符串。

**示例**：


```javascript
const name = "Alice";
console.log(`Hello, ${name}!`);
```


### **4.3 模块化**

- 导出模块：`export` 和 `export default`。
- 导入模块：`import`、`import * as`。

**示例**：


```javascript
// module.js
export function greet(name) {
    return `Hello, ${name}!`;
}
// main.js
import { greet } from './module.js';
console.log(greet("Alice"));
```


tips:


export default默认导出每个模块只有一个，导入时不需要{}。


当使用`export * as test from “test.js”`时可以直接用`test.default`


---


## **第五章：异步编程**


### **5.1 回调函数**

- 异步任务完成时调用回调函数。

**示例**：


```javascript
setTimeout(() => console.log("Task complete"), 1000);
```

- 回调地狱

当多个异步任务需要按顺序执行时，嵌套的回调函数会导致代码难以维护，这种现象被称为“回调地狱”。


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


为了解决回调地狱的问题，可以使用 **Promise**。


### **5.2 Promise**

- 使用 `Promise` 链式处理异步任务。

    **`Promise`** 是一个对象，表示一个异步操作的最终完成或失败。它有以下三种状态：

    1. **Pending**（进行中）：初始状态，未完成或失败。
    2. **Fulfilled**（已完成）：操作成功，返回结果。
    3. **Rejected**（已失败）：操作失败，返回错误。

**示例**：


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

1. **`async`** 用于声明一个函数，使其返回一个 **`Promise`**。
2. **`await`** 用于暂停代码执行，等待 **`Promise`** 解决（resolve）后再继续。

**示例**：


```javascript
async function fetchData() {
    const response = await fetch("<https://api.myip.com>");
    const data = await response.json();
    console.log(data);
}
fetchData();
```
