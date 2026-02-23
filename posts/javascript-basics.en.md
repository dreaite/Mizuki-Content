---
title: 'Learning JavaScript'
published: 2024-11-16
updated: 2024-11-16
description: 'JavaScript is a dynamic, weakly typed interpreted language with characteristics such as being lightweight, cross-platform, and event-driven. Core concepts include variables and data types, control flow, functions, and asynchronous programming. JavaScript can run in browsers and Node.js, and supports many data types and operations such as objects, arrays, destructuring assignment, and modularization. Asynchronous programming uses callbacks, Promise, and async/await to handle tasks.'
image: 'https://r2.dreaife.tokyo/notion/covers/1405465cca178007b423cb34358c1fa9/IMG_1614.jpg'
tags: ['javaScript']
category: 'FRONTEND'
draft: false
lang: 'en'
---

# About JavaScript

JavaScript is a dynamic, weakly-typed, interpreted language, originally designed for client-side interactions in the browser.

## **Features**

- **Lightweight**: Simple syntax, low entry barrier.
- **Cross-platform**: Runs in multiple environments such as browsers and Node.js.
- **Interpreted**: No compilation required; executed directly at runtime.
- **Event-driven**: Very suitable for handling asynchronous tasks, such as user interactions and network requests.

## **Core Concepts**

- **Variables and Data Types**
    - JavaScript is a dynamically-typed language and can store values of any type.
    - Variable declarations use **`var`** (old style), **`let`** (recommended), or **`const`** (recommended).

        ```javascript
        let name = "JavaScript";  // string
        const version = 2024;     // number
        var isCool = true;        // boolean
        ```

- **Primitive Types**
    - **Primitive types**: **`String`**, **`Number`**, **`Boolean`**, **`undefined`**, **`null`**, **`Symbol`**, **`BigInt`**
    - **Complex types**: **`Object`** (including arrays, functions, etc.)

        ```javascript
        let array = [1, 2, 3]; // array
        let obj = { key: "value" }; // object
        ```

- **Control Flow**
    - Conditional statements: **`if-else`**, **`switch`**
    - Loops: **`for`**、**`while`**、**`forEach`**

        ```javascript
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
        ```

- **Functions**
    - Regular functions or arrow functions can be defined.

        ```javascript
        function greet(name) {
            return `Hello, ${name}!`;
        }
        
        const greetArrow = (name) => `Hello, ${name}!`;
        ```

- **Event-driven and Asynchronous**
    - Use **`setTimeout`** and **`setInterval`** for timed execution.
    - Use **`Promise`** or **`async/await`** to handle asynchronous operations.

        ```javascript
        const fetchData = async () => {
            let response = await fetch("https://api.example.com/data");
            let data = await response.json();
            console.log(data);
        };
        ```


## **JS Runtime Environments**

1. **Browser**
    - JavaScript was originally designed for the browser to dynamically manipulate the DOM (web page content).
    - Example: show a prompt when a button is clicked.

        ```javascript
        javascript
        复制代码
        document.querySelector("button").addEventListener("click", () => {
            alert("Button clicked!");
        });
        ```

2. **Node.js**
    - Node.js is a server-side runtime for JavaScript.
    - Example: create a simple HTTP server.

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


## **Chapter 1: JavaScript Basics**


### **1.1 Variables and Constants**

- Variable declaration methods:
    - `var` (not recommended): function scope.
    - `let` (recommended): block scope, allows reassignment.
    - `const` (recommended): block scope, does not allow reassignment.

**Examples**:


```javascript
let age = 25;
const name = "Alice";
console.log(`${name} is ${age} years old.`);
```

- **Variable scope**
    - **Global scope**: declared outside of functions, accessible by the entire program.
    - **Function scope**: variables declared with **`var`** are only accessible inside the function.
    - **Block scope**: variables declared with **`let`** or **`const`** are only accessible within the code block **`{}`**.
- **Variable hoisting**
    - **`var`** is hoisted, but the value is **`undefined`** until assigned.
    - **`let`** and **`const`** are not hoisted.

### **1.2 Data Types**

- **Primitive types**: `String`, `Number`, `Boolean`, `undefined`, `null`, `Symbol`, `BigInt`
- **Complex types**: `Object` (including arrays, functions, etc.)

**Examples**:


```javascript
let age = 25; // integer
let price = 19.99; // float
let result = "abc" / 2; // NaN
let infinite = 1 / 0; // Infinity

let name = "John";
let greeting = `Hello, ${name}!`; // template string
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
console.log(typeof null); // "object" (this is a historical quirk)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// Type conversion
let str = String(123); // to string
let num = Number("123"); // to number
let bool = Boolean(1); // to boolean

console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3 (string to number then calculation)
console.log(true + 1); // 2 (boolean to number)
```


### **1.3 Conditional Statements**

- `if-else`, `switch`, and the ternary operator.

**Examples**:


```javascript
const age = 18;
const message = age >= 18 ? "Adult" : "Minor";
console.log(message);
```


**Logical Operators**


**`if`** conditions often use logical operators to combine multiple conditions.

- **Logical AND (&&)**: true when all conditions are true.
- **Logical OR (||)**: true if any condition is true.
- **Logical NOT (!)**: negates the condition.

**Truthy and Falsy Values**


In JavaScript, some values evaluate to true or false in boolean contexts.

- **Falsy values**: **`false`**, **`0`**, **`""`** (empty string), **`null`**, **`undefined`**, **`NaN`**.
- **Truthy values**: all other values.

### **1.4 Loops**

- `for`, `while`, `do-while`, `for...in`, `for...of`

**Examples**:


```javascript
for (initialization; condition; increment) {
    // loop body
}

while (condition) {
    // loop body
}

do {
    // loop body
} while (condition);

for (const element of iterable) {
    // loop body
}

for (const key in object) {
    // loop body
}
```


**Controlling loops: break and continue**

- **`break`**: exit the entire loop.
- **`continue`**: skip the current iteration and proceed to the next one.

---


## **Chapter 2: Functions and Scope**


### **2.1 Function Basics**

- Regular functions, function expressions, and arrow functions.
- Default parameters and rest parameters.

**Examples**:


```javascript
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet("Alice"));

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```


### **2.2 Scope and Closures**

- Global scope, function scope, block scope.
    - **Global scope**: variables declared outside of functions can be accessed by the entire program.
    - **Function scope**: variables declared inside a function are accessible only within that function.
    - **Block scope**: variables declared with **`let`** or **`const`** are only accessible inside the block **`{}`**.
- Closures: functions capture the scope variables at the time of their definition, typically used to create private variables or functions.

**Examples**:


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
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```


---


## **Chapter 3: Objects and Arrays**


### **3.1 Object Operations**

- Create objects, access properties, modify properties, delete properties.
    - Creation: {}, new Object(), class
    - Access: ${class}.prop, ${class}[prop]
    - Modify/Delete
- Iterate over objects: `for...in`, `Object.keys()`, `Object.entries()`.

**Examples**:


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


tips: If you use () in a class:

Using this, you may not be able to access the class's internal properties, because the this behavior of the arrow function **`() => {}`** differs from that of a normal function. An arrow function will not create its own **`this`**, but inherits it from the outer context in which it is defined.

- Arrow function's **`this`** inherits from the scope where the function is defined.
- The function is defined in the context of the class object, but the arrow function's **`this`** points to the global scope (in a browser, **`this`** is **`window`**; in Node.js it's **`global`**), and not the **`person`**.

Therefore, **`this.prop`** is undefined, because there is no **`prop`** property in the global scope.


### **3.2 Array Operations**

- Common methods: `push`, `pop`, `map`, `filter`, `reduce`.
    - **`push()`**: adds to the end of the array.
    - **`pop()`**: removes from the end of the array.
    - **`unshift()`**: adds to the beginning of the array.
    - **`shift()`**: removes from the beginning.
    - **`indexOf()`**: finds the index of the first matching element.
    - **`includes()`**: checks whether an element is contained.
    - **`forEach()`**: performs an operation on each element.
    - **`map()`**: returns a new array containing the result of processing each element.
    - **`filter()`**: filters elements that meet a condition.
    - **`reduce()`**: reduces the array to a single value through accumulation.
- Destructuring and spread/rest operators.

**Examples**:


```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6


const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // Output: 1 2 3
```


---


## **Chapter 4: Advanced Syntax and Modularization**


### **4.1 Destructuring and Spread/Rest Operators**

- Destructuring: quickly extract values from arrays or objects.
- Spread/rest operators: quickly copy or merge objects/arrays.

**Examples**:


```javascript
const [x, , ...z] = [1, 2, 3, 4, 5];
console.log(x, z); // Output: 1 [3,4,5]

const { name, age } = { name: "Alice", age: 25 };
console.log(name, age); // Alice 25
```


### **4.2 Template Strings**

- Use backticks (``) to dynamically generate strings.

**Examples**:


```javascript
const name = "Alice";
console.log(`Hello, ${name}!`);
```


### **4.3 Modules**

- Exporting modules: `export` and `export default`.
- Importing modules: `import`, `import * as`.

**Examples**:


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


export default exports a single default export per module; when importing, you don't need {}.


When using `export * as test from “test.js”`, you can directly use `test.default`


---


## **Chapter 5: Asynchronous Programming**


### **5.1 Callback Functions**

- The callback is invoked when the asynchronous task completes.

**Examples**:


```javascript
setTimeout(() => console.log("Task complete"), 1000);
```

- Callback Hell

When multiple asynchronous tasks need to be executed in sequence, nested callbacks can make code hard to maintain; this phenomenon is called "callback hell".


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


To solve callback hell, you can use a Promise.


### **5.2 Promise**

- Use Promises to chain asynchronous tasks.

    **`Promise`** is an object that represents the eventual completion or failure of an asynchronous operation. It has three states:

    1. **Pending**: initial state, not fulfilled or rejected.
    2. **Fulfilled**: operation succeeded, returns a result.
    3. **Rejected**: operation failed, returns an error.

**Examples**:


```javascript
const promise = new Promise((resolve, reject) => {
    // asynchronous operation
    if (success) {
        resolve(value); // call resolve on success
    } else {
        reject(error); // call reject on failure
    }
});

fetch("<https://api.myip.com>")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
```


### **5.3 async/await**

1. **`async`** is used to declare a function that returns a **`Promise`**.
2. **`await`** pauses code execution, waiting for the **`Promise`** to resolve before continuing.

**Examples**:


```javascript
async function fetchData() {
    const response = await fetch("<https://api.myip.com>");
    const data = await response.json();
    console.log(data);
}
fetchData();
```