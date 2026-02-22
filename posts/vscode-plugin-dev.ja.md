---
title: 'vscode插件开发初涉'
published: 2025-03-13
updated: 2025-03-13
description: '开发VSCode插件需准备Node.js、VSCode及Yeoman与generator-code。使用Yeoman生成插件基础结构，理解项目结构中的package.json和入口文件src/extension.ts。通过调试面板运行和测试插件，完成后可使用vsce工具打包并发布到VSCode Marketplace。插件激活通过package.json中的activationEvents定义，支持多种激活事件类型。'
permalink: 'vscode-plugin-dev.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/1b55465cca17808d8be3e99dd76eae9f/IMG_2747.jpg'
tags: ['vscode', 'plugin']
category: 'plugin'
draft: false
lang: 'ja'
---

# 開発環境

1. Nodejs
2. vscode
3. Yeoman&generator-code

    为了方便生成插件项目的基础结构，可以使用 Yeoman 以及 VSCode 官方提供的插件生成器。打开终端，输入以下命令全局安装：


    ```bash
    npm install -g yo generator-code
    ```


# プラグインの初期フレームワーク


## プラグインの作成


```bash
yo code
```


ジェネレータは以下の質問をします：

    - **拡張機能のタイプを選択**：例えば“New Extension (TypeScript)”または“New Extension (JavaScript)”。
    - **拡張機能の名称と説明**：表示に従って、作成したい拡張機能の名称と説明を入力します。
    - **Git の初期化**：Git リポジトリを初期化するかどうか。
    - **パッケージマネージャー**：npm または yarn の使用を選択します。

生成が完了すると、初期設定済みのプロジェクト構造が得られます。


## 構造の理解


生成したプロジェクトを開くと、重要なファイルとディレクトリがいくつか表示されます：

- **`package.json`**

    このファイルには拡張機能の基本情報、依存関係、そして VSCode のアクティベーションイベントとコマンド登録が定義されています。


    例えば：


    ```json
    {
      "name": "my-sample-extension",
      "displayName": "My Sample Extension",
      "description": "A simple VSCode extension.",
      "version": "0.0.1",
      "engines": {
        "vscode": "^1.60.0"
      },
      "activationEvents": [
        "onCommand:extension.helloWorld"
      ],
      "main": "./out/extension.js",
      "contributes": {
        "commands": [
          {
            "command": "extension.helloWorld",
            "title": "Hello World"
          }
        ]
      },
      "scripts": {
        "vscode:prepublish": "npm run compile",
        "compile": "tsc -p ./"
      },
      "devDependencies": {
        "typescript": "^4.0.0",
        "vscode": "^1.1.37",
        "@types/node": "^12.0.0"
      }
    }
    ```

- **`src/extension.ts`**（または `extension.js`）

    これは拡張機能のエントリポイントです。拡張機能がアクティブ化されると、ここのコードが実行されます。


    例えば、簡単な例：


    ```typescript
    import * as vscode from 'vscode';
    
    export function activate(context: vscode.ExtensionContext) {
        console.log('Congratulations, your extension "my-sample-extension" is now active!');
    
        let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
            vscode.window.showInformationMessage('Hello World from your VSCode extension!');
        });
    
        context.subscriptions.push(disposable);
    }
    
    export function deactivate() {}
    ```


## 実行とデバッグ

- プロジェクトを開くと、VSCode のデバッグパネルに、`Launch Extension` の設定が表示されます。
- `F5` を押すと、VSCode は新しい拡張機能開発ホスト（Extension Development Host）を起動します。
- 新しいウィンドウで、コマンドパレット（`Ctrl+Shift+P` または `Cmd+Shift+P`）を使って、登録済みのコマンドを入力します。例えば “Hello World” と入力して拡張機能が正しく動作するかをテストします。


## プラグインの公開


開発が完了し、テストが済んだら、他の人に使ってもらうために [VSCode Marketplace](https://marketplace.visualstudio.com/vscode) に公開することを検討できます：

- 拡張機能のパッケージ化と公開を支援する `vsce` ツールをインストールします：

    ```bash
    npm install -g vsce
    ```

- プロジェクトのルートディレクトリでパッケージ化コマンドを実行します：

    ```bash
    vsce package
    ```

- [公式ドキュメント](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) の指示に従い、公開手順を完了します。


# 具体的な開発


## プラグインの起動


VSCode の拡張機能は package.json の activationEvents 配列を通じて、いつ有効化するかを定義します。以下は主なアクティベーションイベントのタイプです：


### **よく使われるアクティベーションイベント**

1. 
    - VSCode の起動時にすぐ拡張機能を有効化
    - 利点：拡張機能は常に利用可能
    - 欠点：VSCode の起動パフォーマンスに影響を与える可能性があるため、本番環境での使用は推奨されません
2. **onStartupFinished**
    - VSCode の起動が完了した後に拡張機能を有効化
    - より遅く有効化されますが、起動パフォーマンスへの影響は小さいです
3. **onCommand:commandId**
    - ユーザーが特定のコマンドを実行したときに拡張機能を有効化
    - 例えば：onCommand:vs-ex-test.helloWorld
4. **onLanguage:languageId**
    - 特定の言語のファイルを開いたときに拡張機能を有効化
    - 例えば：onLanguage:javascript, onLanguage:python
5. **onView:viewId**
    - 特定のビューが表示されているときに拡張機能を有効化
    - 例えば：onView:nodeDependencies

### **その他のアクティベーションイベント**

1. **onUri**
    - 特定の URI を開くと拡張機能を有効化
2. **onWebviewPanel:viewType**
    - 特定のタイプの Webview パネルを作成したときに拡張機能を有効化します
3. **onCustomEditor:viewType**
    - カスタムエディターを開くと拡張機能を有効化します
4. **onDebug**
    - デバッグセッションを開始したときに拡張機能を有効化します
5. **onDebugInitialConfigurations**
    - デバッグ構成を初期化するときに拡張機能を有効化します
6. **onDebugResolve:type**
    - 特定のタイプのデバッグ構成を解決するときに拡張機能を有効化します
7. **onFileSystem:scheme**
    - 特定のファイルシステムスキームにアクセスするときに拡張機能を有効化します
    - 例：onFileSystem:ftp
8. **onTerminalProfile:terminalId**
    - 特定のターミナル設定を作成するときに拡張機能を有効化します
9. **onAuthenticationRequest:authenticationProviderId**
    - 特定の認証プロバイダーを要求するときに拡張機能を有効化します
10. **onSearch**
    - 検索を実行するときに拡張機能を有効化します
11. **onTaskType:taskType**
    - 特定のタイプのタスクを実行するときに拡張機能を有効化します
12. **onNotebook:notebookType**
    - 特定のタイプのノートブックを開くときに拡張機能を有効化します
13. **onTerminal**
    - ターミナルを作成するときに拡張機能を有効化します
