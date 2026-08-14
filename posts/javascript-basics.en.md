---
title: 'Learning JavaScript'
published: 2024-11-16
updated: 2024-11-16
description: 'JavaScript is a dynamic, weakly typed, interpreted language characterized by its lightweight, cross-platform, and event-driven nature. Its core concepts include variables and data types, control flow, functions, and asynchronous programming. JavaScript runs in browsers and Node.js environments and supports various data types and operations, such as objects, arrays, destructuring assignment, and modules. Asynchronous programming uses callbacks, Promises, and async/await to handle tasks.'
image: 'https://r2.dreaife.tokyo/notion/covers/1405465cca178007b423cb34358c1fa9/IMG_1614.jpg'
tags: ['javaScript']
category: 'FRONTEND'
draft: false
lang: 'en'
---

# About JS


JavaScript is a dynamic, weakly typed, interpreted language originally designed for browser-side interaction.


## **Features**

- **Lightweight**: Simple syntax and a low barrier to entry.
- **Cross-platform**: Runs in various environments, including browsers and Node.js.
- **Interpreted**: Executes directly at runtime without compilation.
- **Event-driven**: Well suited for handling asynchronous tasks such as user interactions and network requests.

## Core Concepts

- **Variables and Data Types**
    - JavaScript is dynamically typed and can store data of any type.
    - Variables are declared using **`var`** (the old approach), **`let`** (recommended), or **`const`** (recommended).

        ```javascript
        let name = "JavaScript";  // 字符串
        const version = 2024;    // 数字
        var isCool = true;       // 布尔值
        ```

- **Basic Data Types**
    - **Primitive types**: **`String`**, **`Number`**, **`Boolean`**, **`undefined`**, **`null`**, **`Symbol`**, **`BigInt`**
    - **Complex types**: **`Object`** (including arrays, functions, etc.)

        ```javascript
        let array = [1, 2, 3]; // 数组
        let obj = { key: "value" }; // 对象
        ```

- **Control Flow**
    - Conditional statements: **`if-else`**, **`switch`**
    - Loops: **`for`**, **`while`**, **`forEach`**

        ```javascript
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
        ```

- **Functions**
    - Regular functions and arrow functions can be defined.

        ```javascript
        function greet(name) {
            return `Hello, ${name}!`;
        }
        
        const greetArrow = (name) => `Hello, ${name}!`;
        ```

- **Event-Driven and Asynchronous Programming**
    - Use **`setTimeout`** and **`setInterval`** for scheduled execution.
    - Use **`Promise`** or **`async/await`** to handle asynchronous operations.

        ```javascript
        const fetchData = async () => {
            let response = await fetch("https://api.example.com/data");
            let data = await response.json();
            console.log(data);
        };
        ```


## **JS Runtime Environments**

1. **Browsers**
    - JavaScript was originally designed for browsers to manipulate the DOM (webpage content) dynamically.
    - Example: Display an alert when a button is clicked.

        ```javascript
        javascript
        复制代码
        document.querySelector("button").addEventListener("click", () => {
            alert("Button clicked!");
        });
        ```

2. **Node.js**
    - Node.js is a server-side runtime environment for JavaScript.
    - Example: Create a simple HTTP server.

        ```javascript
        javascript
        复制代码
        const http = require("http");
        
        const server = http.createServer((req, res) => {
            res.end("Hello, Node.js!");
        });
        
        server.listen(3000, () => console.log("Server running at http://localhost:3000"));
        ```


# JavaScript Fundamentals


## **Chapter 1: JavaScript Fundamentals**


### **1.1 Variables and Constants**

- Ways to declare variables:
    - `var` (not recommended): Function scope.
    - `let` (recommended): Block scope and allows reassignment.
    - `const` (recommended): Block scope and does not allow reassignment.

**Example**:


```javascript
let age = 25;
const name = "Alice";
console.log(`${name} is ${age} years old.`);
```

- **Variable Scope**
    - **Global scope**: Declared outside functions and accessible throughout the entire program.
    - **Function scope**: Variables declared with **`var`** are available only within the function.
    - **Block scope**: Variables declared with **`let`** or **`const`** are available only within the **`{}`** code block.
- **Variable Hoisting**
    - **`var`** **is hoisted**, but its value is **`undefined`** until assigned.
    - **`let`** **and** **`const`** **are not hoisted**.

### **1.2 Data Types**

- **Basic types**: `String`, `Number`, `Boolean`, `undefined`, `null`, `Symbol`, `BigInt`
- **Complex types**: `Object` (including arrays, functions, etc.)

**Example**:


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


### **1.3 Conditional Statements**

- `if-else`, `switch`, and the ternary operator.

**Example**:


```javascript
const age = 18;
const message = age >= 18 ? "Adult" : "Minor";
console.log(message);
```


**Logical Operators**


Logical operators are commonly used in **`if`** conditions to combine multiple conditions.

- **Logical AND (&&)**: Returns true when all conditions are true.
- **Logical OR (||)**: Returns true when at least one condition is true.
- **Logical NOT (!)**: Negates the condition.

**Truthy and Falsy Values**


Some values in JavaScript are treated as true or false in a Boolean context.

- **Falsy values**: **`false`**, **`0`**, **`""`** (empty string), **`null`**, **`undefined`**, **`NaN`**.
- **Truthy values**: All values other than falsy values.

### **1.4 Loops**

- `for`, `while`, `do-while`, `for...in`, `for...of`

**Example**:


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


**Controlling Loops: break and continue**

- **`break`**: Exits the entire loop.
- **`continue`**: Skips the current iteration and proceeds directly to the next one.

---


## **Chapter 2: Functions and Scope**


### **2.1 Function Basics**

- Regular functions, function expressions, and arrow functions.
- Default parameters and rest parameters.

**Example**:


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


### **2.2 Scope and Closures**

- Global scope, function scope, and block scope.
    - **Global scope**: Variables declared outside functions can be accessed throughout the entire program.
    - **Function scope**: Variables declared inside a function can only be accessed within that function.
    - **Block scope**: Variables declared with **`let`** and **`const`** can only be accessed within the **`{}`** block.
- Closures: A function captures variables from the scope in which it was defined, commonly used to create private variables or functions.

**Example**:


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


## **Chapter 3: Objects and Arrays**


### **3.1 Object Operations**

- Creating objects, accessing properties, modifying properties, and deleting properties.
    - Create: {},new Object(),class
    - Access: ${class}.prop,${class}[prop]
    - Modify/delete
- Iterating over objects: `for...in`, `Object.keys()`, `Object.entries()`.

**Example**:


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


Tips: If `()` is used in a class:


When using `this`, properties inside the class cannot be accessed. This is because the **`() => {}`** arrow function handles **`this`** differently from a regular function. Arrow functions do not create their own **`this`**; instead, they inherit it from the surrounding context in which they were defined.

- An arrow function's **`this`** is inherited from the scope in which **`frunction`** was defined.
- **`frunction`** is defined in the context of the **`class`** object, but the arrow function's **`this`** points to the **global scope** (in a browser, **`this`** is **`window`**; in Node.js, it is **`global`**), rather than **`person`**.

Therefore, **`this.prop`** is undefined because there is no **`prop`** property in the global scope.


### **3.2 Array Operations**

- Common methods: `push`, `pop`, `map`, `filter`, `reduce`.
    - **`push()`**: Adds an element to the end of an array.
    - **`pop()`**: Removes an element from the end of an array.
    - **`unshift()`**: Adds an element to the beginning of an array.
    - **`shift()`**: Removes an element from the beginning of an array.
    - **`indexOf()`**: Finds the index of the first match.
    - **`includes()`**: Checks whether an array contains an element.
    - **`forEach()`**: Performs an operation on each element.
    - **`map()`**: Returns a new array containing the processed result of each element.
    - **`filter()`**: Filters elements that satisfy a condition.
    - **`reduce()`**: Performs an accumulated calculation over an array.
- Destructuring assignment and the spread operator.

**Example**:


```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6


const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 输出: 1 2 3
```


---


## **Chapter 4: Advanced Syntax and Modules**


### **4.1 Destructuring Assignment and the Spread Operator**

- Destructuring: Quickly extracts values from arrays or objects.
- Spread operator: Quickly copies or merges objects/arrays.

**Example**:


```javascript
const [x, , ...z] = [1, 2, 3, 4, 5];
console.log(x, z); // 输出: 1 [3,4,5]

const { name, age } = { name: "Alice", age: 25 };
console.log(name, age); // Alice 25
```


### **4.2 Template Literals**

- Use backticks (```) to generate strings dynamically.

**Example**:


```javascript
const name = "Alice";
console.log(`Hello, ${name}!`);
```


### **4.3 Modules**

- Exporting modules: `export` and `export default`.
- Importing modules: `import`, `import * as`.

**Example**:


```javascript
// module.js
export function greet(name) {
    return `Hello, ${name}!`;
}
// main.js
import { greet } from './module.js';
console.log(greet("Alice"));
```


Tips:


Each module can have only one `export default` default export, and `{}` is not required when importing it.


When using `export * as test from “test.js”`, you can use `test.default` directly.


---


## **Chapter 5: Asynchronous Programming**


### **5.1 Callback Functions**

- A callback function is invoked when an asynchronous task is completed.

**Example**:


```javascript
setTimeout(() => console.log("Task complete"), 1000);
```

- Callback Hell

When multiple asynchronous tasks must be executed sequentially, nested callback functions make the code difficult to maintain. This phenomenon is known as “callback hell.”


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


To solve the problem of callback hell, you can use **Promise**.


### **5.2 Promise**

- Use `Promise` chains to handle asynchronous tasks.

    A **`Promise`** is an object representing the eventual completion or failure of an asynchronous operation. It has the following three states:

    1. **Pending**: The initial state; the operation has neither completed nor failed.
    2. **Fulfilled**: The operation succeeded and returned a result.
    3. **Rejected**: The operation failed and returned an error.

**Example**:


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

1. **`async`** is used to declare a function, causing it to return a **`Promise`**.
2. **`await`** is used to pause code execution and wait for a **`Promise`** to resolve before continuing.

**Example**:


```javascript
async function fetchData() {
    const response = await fetch("<https://api.myip.com>");
    const data = await response.json();
    console.log(data);
}
fetchData();
```
