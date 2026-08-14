---
title: 'Getting Started with Node.js'
published: 2024-11-16
updated: 2024-11-16
description: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, featuring a single-threaded architecture, non-blocking I/O, modularity, and cross-platform support. Common modules include file system operations, HTTP services, path manipulation, and operating system information. npm is a package manager used to install and manage libraries. Asynchronous programming patterns include callbacks, Promises, and async/await, making Node.js well suited for building web services and real-time applications.'
image: 'https://r2.dreaife.tokyo/notion/covers/1405465cca1780368801d04ad9f98fcc/IMG_1607.jpg'
tags: ['nodejs']
category: 'BACKEND'
draft: false
lang: 'en'
---

# **Node.js Basics**


Node.js is a JavaScript runtime built on Chrome's V8 engine for running JavaScript code on the server. Below are the basic concepts and commonly used features of Node.js.


---


## **Introduction to Node.js**


### **Features**

1. **Single-threaded, non-blocking I/O**: Uses an event loop and asynchronous I/O to improve its ability to handle high concurrency.
2. **Module-based**: Uses the CommonJS module specification for clearer code organization.
3. **Cross-platform**: Supports multiple operating systems (Windows, Linux, and macOS).

### **Use Cases**

- Building web services (such as REST APIs).
- Creating real-time applications (such as chat applications and games).
- Creating scripting tools (such as automation tasks).
- Working with the file system.

---


## **Core Modules**


Node.js provides many built-in modules. The following are commonly used modules:

1. **`fs`**** (File System Module)**
    - Handles files and directories.

    ```javascript
    const fs = require("fs");
    
    // 同步读取文件
    const data = fs.readFileSync("example.txt", "utf-8");
    console.log("File content:", data);
    
    // 异步读取文件
    fs.readFile("example.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log("Async file content:", data);
    });
    ```

2. **`http`**** (HTTP Server Module)**
    - Creates HTTP servers.

    ```javascript
    const http = require("http");
    
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello, World!");
    });
    
    server.listen(3000, () => {
        console.log("Server running at http://localhost:3000/");
    });
    ```

3. **`path`**** (Path Operations Module)**
    - Handles file paths.

    ```javascript
    const path = require("path");
    
    const filePath = path.join(__dirname, "example.txt");
    console.log("File path:", filePath);
    ```

4. **`os`**** (Operating System Information Module)**
    - Retrieves operating system information.

    ```javascript
    const os = require("os");
    
    console.log("Platform:", os.platform());
    console.log("Total Memory:", os.totalmem());
    ```


---


## **npm and Package Management**


### **Purpose of npm**

- npm (Node Package Manager) is the package management tool for Node.js, used to install and manage third-party libraries.

### **Common Commands**

1. **Initialize a Project**

    ```shell
    npm init -y
    ```

    - Generates a `package.json` file.
2. **Install a Package**

    ```shell
    npm install express
    ```

    - Installs it in the `node_modules` directory by default and records it in `package.json`.
3. **Install a Package Globally**

    ```shell
    npm install -g nodemon
    ```

    - Globally installed packages can be used directly as commands.
4. **Remove a Package**

    ```shell
    npm uninstall express
    ```


---


## **Using Third-Party Modules**


### **Express Example**


Express is a commonly used Node.js web framework suitable for quickly building web services.

1. **Install Express**

    ```shell
    npm install express
    ```

2. **Create a Simple Server**

    ```javascript
    const express = require("express");
    const app = express();
    
    app.get("/", (req, res) => {
        res.send("Hello, Express!");
    });
    
    app.listen(3000, () => {
        console.log("Express server running at http://localhost:3000/");
    });
    ```


---


## **Asynchronous Programming Patterns**


Asynchronous programming is at the core of Node.js. The following are several commonly used approaches:

1. **Callbacks**

    ```javascript
    const fs = require("fs");
    fs.readFile("example.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log("File content:", data);
    });
    ```

2. **Promises**

    ```javascript
    const fs = require("fs").promises;
    
    fs.readFile("example.txt", "utf-8")
        .then((data) => console.log("File content:", data))
        .catch((err) => console.error(err));
    ```

3. **async/await**

    ```javascript
    const fs = require("fs").promises;
    
    async function readFileContent() {
        try {
            const data = await fs.readFile("example.txt", "utf-8");
            console.log("File content:", data);
        } catch (err) {
            console.error(err);
        }
    }
    
    readFileContent();
    ```
