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
lang: 'ja'
---

# **Node.jsの基礎**


Node.js は Chrome V8 エンジンをベースにした JavaScript 実行時で、サーバーサイドで JavaScript コードを実行します。以下は Node.js の基本概念とよく使われる機能です。


---


## **Node.js 入門**


### **特徴**

1. **シングルスレッド、非同期 I/O**：イベントループと非同期 I/O を通じて、高い同時接続性を実現します。
2. **モジュール化に基づく**：CommonJS モジュール規格を使用して、コードの構成がより分かりやすくなります。
3. **クロスプラットフォーム**：Windows、Linux、macOS など、複数のオペレーティングシステムをサポートします。

### **適用シーン**

- Web サービスの構築（例: REST API）。
- リアルタイムアプリケーションの作成（例: チャット、ゲーム）。
- スクリプトツール（例: 自動化タスク）。
- ファイルシステムの操作。

---


## **基本モジュール**


Node.js は多数の組み込みモジュールを提供しています。以下はよく使われるモジュール：

1. **`fs`（ファイルシステムモジュール）**
    - ファイルとディレクトリを扱います。

    ```javascript
    const fs = require("fs");
    
    // 同期読み込み
    const data = fs.readFileSync("example.txt", "utf-8");
    console.log("File content:", data);
    
    // 非同期読み込み
    fs.readFile("example.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log("Async file content:", data);
    });
    ```

2. **`http`（HTTP サービスモジュール）**
    - HTTP サーバーを作成します。

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

3. **`path`（パス操作モジュール）**
    - ファイルパスを処理します。

    ```javascript
    const path = require("path");
    
    const filePath = path.join(__dirname, "example.txt");
    console.log("File path:", filePath);
    ```

4. **`os`（OS 情報モジュール）**
    - OS に関する情報を取得します。

    ```javascript
    const os = require("os");
    
    console.log("Platform:", os.platform());
    console.log("Total Memory:", os.totalmem());
    ```


---


## **npmとパッケージ管理**


### **npm の役割**

- npm（Node Package Manager）は Node.js のパッケージ管理ツールで、サードパーティライブラリのインストールと管理に用います。

### **よく使うコマンド**

1. **プロジェクトの初期化**

    ```shell
    npm init -y
    ```

    - `package.json` ファイルを生成します。
2. **パッケージのインストール**

    ```shell
    npm install express
    ```

    - デフォルトで `node_modules` ディレクトリにインストールされ、`package.json` に記録されます。
3. **グローバルパッケージのインストール**

    ```shell
    npm install -g nodemon
    ```

    - グローバルにインストールされたパッケージはコマンドとして直接使用できます。
4. **パッケージの削除**

    ```shell
    npm uninstall express
    ```


---


## **サードパーティモジュールの使用**


### **Express の例**


Express はよく使われる Node.js の Web フレームワークで、Web サービスを迅速に構築するのに適しています。

1. **Express のインストール**

    ```shell
    npm install express
    ```

2. **簡単なサーバーの作成**

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


## **非同期プログラミングパターン**


Node.js の核心は非同期プログラミングです。以下はいくつかのよく使われる方法です：

1. **コールバック**

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
