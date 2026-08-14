---
title: 'Node.js入門'
published: 2024-11-16
updated: 2024-11-16
description: 'Node.js は Chrome V8 エンジンを基盤とする JavaScript ランタイムで、シングルスレッド、ノンブロッキング I/O、モジュール化、クロスプラットフォームといった特徴があります。一般的なモジュールには、ファイルシステム、HTTP サービス、パス操作、OS 情報などがあります。npm は、ライブラリのインストールと管理に使用するパッケージ管理ツールです。非同期プログラミングにはコールバック、Promise、async/await などのパターンがあり、Web サービスやリアルタイムアプリケーションの構築に適しています。'
image: 'https://r2.dreaife.tokyo/notion/covers/1405465cca1780368801d04ad9f98fcc/IMG_1607.jpg'
tags: ['nodejs']
category: 'BACKEND'
draft: false
lang: 'ja'
---

# **Node.js の基礎**


Node.js は、Chrome V8 エンジンをベースとした JavaScript ランタイムで、サーバー側で JavaScript コードを実行するために使用されます。以下では、Node.js の基本概念とよく使われる機能を紹介します。


---


## **Node.js の概要**


### **特徴**

1. **シングルスレッド、ノンブロッキング I/O**：イベントループと非同期 I/O により、高い同時実行性能を実現します。
2. **モジュールベース**：CommonJS モジュール仕様を使用し、コードをより明確に整理できます。
3. **クロスプラットフォーム**：複数のオペレーティングシステム（Windows、Linux、macOS）に対応しています。

### **使用例**

- Web サービス（REST API など）の構築。
- リアルタイムアプリケーション（チャット、ゲームなど）の作成。
- スクリプトツール（自動化タスクなど）。
- ファイルシステムの操作。

---


## **基本モジュール**


Node.js には多くの組み込みモジュールが用意されています。以下は、よく使われるモジュールです。

1. **`fs`****（ファイルシステムモジュール）**
    - ファイルやディレクトリを操作します。

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

2. **`http`****（HTTP サービスモジュール）**
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

3. **`path`****（パス操作モジュール）**
    - ファイルパスを処理します。

    ```javascript
    const path = require("path");
    
    const filePath = path.join(__dirname, "example.txt");
    console.log("File path:", filePath);
    ```

4. **`os`****（オペレーティングシステム情報モジュール）**
    - オペレーティングシステムに関する情報を取得します。

    ```javascript
    const os = require("os");
    
    console.log("Platform:", os.platform());
    console.log("Total Memory:", os.totalmem());
    ```


---


## **npm とパッケージ管理**


### **npm の役割**

- npm（Node Package Manager）は Node.js のパッケージ管理ツールで、サードパーティライブラリのインストールと管理に使用されます。

### **よく使われるコマンド**

1. **プロジェクトの初期化**

    ```shell
    npm init -y
    ```

    - `package.json` ファイルを生成します。
2. **パッケージのインストール**

    ```shell
    npm install express
    ```

    - デフォルトでは `node_modules` ディレクトリにインストールされ、`package.json` に記録されます。
3. **グローバルパッケージのインストール**

    ```shell
    npm install -g nodemon
    ```

    - グローバルにインストールしたパッケージは、コマンドとして直接使用できます。
4. **パッケージの削除**

    ```shell
    npm uninstall express
    ```


---


## **サードパーティモジュールの使用**


### **Express の例**


Express は、Web サービスを素早く構築するのに適した、よく使われる Node.js Web フレームワークです。

1. **Express のインストール**

    ```shell
    npm install express
    ```

2. **シンプルなサーバーの作成**

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


## **非同期プログラミングのパターン**


Node.js の中核となるのは非同期プログラミングです。以下は、よく使われる方法です。

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
