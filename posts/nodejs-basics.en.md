---
title: 'nodejs初学'
published: 2024-11-16
updated: 2024-11-16
description: 'Node.js 是基于 Chrome V8 引擎的 JavaScript 运行时，具有单线程、非阻塞 I/O、模块化和跨平台特性。常用模块包括文件系统、HTTP 服务、路径操作和操作系统信息。npm 是包管理工具，用于安装和管理库。异步编程模式包括回调、Promise 和 async/await，适合构建 Web 服务和实时应用程序。'
permalink: 'nodejs-basics'
image: 'https://r2.dreaife.tokyo/notion/covers/1405465cca1780368801d04ad9f98fcc/IMG_1607.jpg'
tags: ['nodejs']
category: 'BACKEND'
draft: false
lang: 'en'
---

# **Node.js Basics**


Node.js is a JavaScript runtime based on the Chrome V8 engine, used to run JavaScript code on the server. Here are the core concepts and common features of Node.js.


---


## **Node.js Introduction**


### **Features**

1. **Single-threaded, non-blocking I/O**: Through the event loop and asynchronous I/O, it improves high-concurrency capabilities.
2. **Modular by design**: Uses the CommonJS module specification, making code organization clearer.
3. **Cross-platform**: Supports multiple operating systems (Windows, Linux, macOS).

### **Use cases**

- Build Web services (such as REST APIs).
- Create real-time applications (such as chat, games).
- Scripting tools (such as automation tasks).
- Interacting with the file system.

---


## **Core Modules**


Node.js provides many built-in modules; here are the commonly used ones:

1. **`fs`** (File System module)
    - Handles files and directories.

    ```javascript
    const fs = require("fs");
    
    // Synchronous file read
    const data = fs.readFileSync("example.txt", "utf-8");
    console.log("File content:", data);
    
    // Asynchronous file read
    fs.readFile("example.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log("Async file content:", data);
    });
    ```

2. **`http`** (HTTP Service module)
    - Creates an HTTP server.

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

3. **`path`** (Path handling module)
    - Handles file paths.

    ```javascript
    const path = require("path");
    
    const filePath = path.join(__dirname, "example.txt");
    console.log("File path:", filePath);
    ```

4. **`os`** (Operating System information module)
    - Retrieves information about the operating system.

    ```javascript
    const os = require("os");
    
    console.log("Platform:", os.platform());
    console.log("Total Memory:", os.totalmem());
    ```


---


## **npm and Package Management**


### **Purpose of npm**

- npm (Node Package Manager) is Node.js's package management tool, used to install and manage third-party libraries.

### **Common Commands**

1. **Initialize a project**

    ```shell
    npm init -y
    ```

    - Generates a `package.json` file.
2. **Install a package**

    ```shell
    npm install express
    ```

    - Installs to the `node_modules` directory by default and records it in `package.json`.
3. **Install a global package**

    ```shell
    npm install -g nodemon
    ```

    - Globally installed packages can be used as commands directly.
4. **Remove a package**

    ```shell
    npm uninstall express
    ```


---


## **Using Third-Party Modules**


### **Express Example**


Express is a popular Node.js web framework, suitable for quickly building web services.

1. **Install Express**

    ```shell
    npm install express
    ```

2. **Create a simple server**

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


The core of Node.js is asynchronous programming; here are several common approaches:

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
Ok.
