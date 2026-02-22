---
title: 'nodejs初学'
published: 2024-11-16
updated: 2024-11-16
description: 'Node.js 是基于 Chrome V8 引擎的 JavaScript 运行时，具有单线程、非阻塞 I/O、模块化和跨平台特性。常用模块包括文件系统、HTTP 服务、路径操作和操作系统信息。npm 是包管理工具，用于安装和管理库。异步编程模式包括回调、Promise 和 async/await，适合构建 Web 服务和实时应用程序。'
permalink: 'nodejs-basics'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/0ff63c61-4c2f-49d1-8188-cb927d912056/IMG_1607.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWN76A4U%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T082607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUW7D6q4RRvWenRJ30pDGAl0so0Uk%2B5wzxaSeCWwvR2AiEArDRJ%2FUz92k4befy%2FztuI8BZV3aqw%2FoCtDnMUhmKbdcEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD28YvzChQqrFIeSDyrcAx9fj0oHbdu7gAayUWpJq7ZgNpBQr2yQp0eG8m%2FTCohguvPQrtfgPkkhwS2aro3Ql5C8vjwX3nEI7c2wHSja8A6F9PPgjaifLVN4G4LA4Mt7wcAAGaIkZ0nDHf%2FpOOKel7mttkXwBneXhJ1aqYHFn7ZwZSmNLv7BnNNe57upDe8xGfvFz0B%2FJKmalguscc0FfFSKBpSP4hWt6tF6VNMJlYohgokVK%2Ft%2Btn8LnEcGyYB5NnBlPVSzhNusBBYqvskI3aDz1pnG0%2BmNNmgkimjxWntZN2aHLAn3bKcbtUXT74VSmY3xZeLzoViod4RxBe%2FbObg1syekROPQsixgTvA5hTOy5A13F8Frs4k6ZzPcQ8EJQih3QPUEWW%2FsDkzb22M%2BpGT9fxTiJ42vmxka8j3OZdXONwQWxaFnKDQhlrO3h7mczScXKn1m2336kwxxm2Fhmxku5A9%2F7jhmiP6yHL4eZVlZXw7ErpUxspaVw8CEd1lzIbLLspqttHMylVzyQDdcKC2VgUt1iBdQq%2FO88607WKvry1MLZNOint4IXqGriS%2FnmUirdMXWqUjCsH8MVKiKIsvK2l0DQ1ZRQUD5FKnWfPm4eWnPUuIKiW6ZuasTh5EmiSimGnHUnbmXYiLVMLnF6swGOqUBaHYUXSvyItfbGvPRA%2BIlkpmcu6OtOXL19iwhZZidWWgZyq849Pki%2FoEwsmkvKGD8f4LxgCksmPHX9VIeGXokq40HQTrFkeLmPP8noKGJJ%2Fz5yiFO1pkUMeTm6SmM2TYJWg45IoRBsQhZM4d1wNk8Pfi%2BPJwaWHCwO52cA9lNd1s9KCwMq0jNek12X9aB4PvYy6CGEVhB4oG8en18N0NLExHNO97G&X-Amz-Signature=1a9b5bbe198775b500e7874941fda2fc6793c3e4086ccb995a6b31b38675ca91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['nodejs']
category: 'BACKEND'
draft: false
---

# **Node.js 基础**


Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，用于在服务端运行 JavaScript 代码。以下是 Node.js 的基本概念和常用功能。


---


## **Node.js 简介**


### **特点**

1. **单线程、非阻塞 I/O**：通过事件循环和异步 I/O，提高高并发能力。
2. **基于模块化**：使用 CommonJS 模块规范，代码组织更清晰。
3. **跨平台**：支持多种操作系统（Windows、Linux、macOS）。

### **应用场景**

- 构建 Web 服务（如 REST API）。
- 创建实时应用程序（如聊天、游戏）。
- 脚本工具（如自动化任务）。
- 操作文件系统。

---


## **基本模块**


Node.js 提供了许多内置模块，以下是常用模块：

1. **`fs`****（文件系统模块）**
    - 处理文件和目录。

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

2. **`http`****（HTTP 服务模块）**
    - 创建 HTTP 服务器。

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

3. **`path`****（路径操作模块）**
    - 处理文件路径。

    ```javascript
    const path = require("path");
    
    const filePath = path.join(__dirname, "example.txt");
    console.log("File path:", filePath);
    ```

4. **`os`****（操作系统信息模块）**
    - 获取操作系统相关信息。

    ```javascript
    const os = require("os");
    
    console.log("Platform:", os.platform());
    console.log("Total Memory:", os.totalmem());
    ```


---


## **npm 和包管理**


### **npm 的作用**

- npm（Node Package Manager）是 Node.js 的包管理工具，用于安装和管理第三方库。

### **常用命令**

1. **初始化项目**

    ```shell
    npm init -y
    ```

    - 生成 `package.json` 文件。
2. **安装包**

    ```shell
    npm install express
    ```

    - 默认安装到 `node_modules` 目录，并记录到 `package.json`。
3. **安装全局包**

    ```shell
    npm install -g nodemon
    ```

    - 全局安装的包可直接作为命令使用。
4. **移除包**

    ```shell
    npm uninstall express
    ```


---


## **使用第三方模块**


### **Express 示例**


Express 是一个常用的 Node.js Web 框架，适合快速构建 Web 服务。

1. **安装 Express**

    ```shell
    npm install express
    ```

2. **创建简单服务器**

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


## **异步编程模式**


Node.js 的核心是异步编程，以下是几种常用方式：

1. **回调**

    ```javascript
    const fs = require("fs");
    fs.readFile("example.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log("File content:", data);
    });
    ```

2. **Promise**

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
