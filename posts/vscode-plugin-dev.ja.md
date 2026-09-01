---
title: 'VS Codeプラグイン開発入門'
published: 2025-03-13
updated: 2025-03-13
description: 'Yeomanとgenerator-codeでVS Code拡張を作成し、package.json、activationEvents、extension.tsを理解。デバッグからvsceでの配布まで扱います。'
image: 'https://r2.dreaife.tokyo/notion/covers/1b55465cca17808d8be3e99dd76eae9f/IMG_2747.jpg'
tags: ['vscode', 'plugin']
category: 'STUDY'
draft: false
lang: 'ja'
---

# 開発環境

1. Nodejs
2. vscode
3. Yeoman&generator-code

	拡張機能プロジェクトの基本構造を簡単に生成するため、Yeoman と VSCode 公式の拡張機能ジェネレーターを使用できます。ターミナルを開き、次のコマンドを入力してグローバルにインストールします。

	```bash
	npm install -g yo generator-code
	```

# 拡張機能の初期フレームワーク

## 拡張機能の作成

```bash
yo code
```

ジェネレーターから次の項目について質問されます。

	- **拡張機能の種類を選択**：たとえば「New Extension (TypeScript)」または「New Extension (JavaScript)」。
	- **拡張機能の名前と説明**：画面の案内に従って、使用する名前と説明を入力します。
	- **Git の初期化**：Git リポジトリを初期化するかどうか。
	- **パッケージマネージャー**：npm または yarn のどちらを使用するか選択します。

生成が完了すると、基本構造が用意されたプロジェクトを取得できます。

## 構造を理解する

生成されたプロジェクトを開くと、いくつかの重要なファイルとディレクトリがあります。

- **`package.json`**

	このファイルでは、拡張機能の基本情報、依存関係、VSCode のアクティベーションイベント、コマンド登録を定義します。

	例：

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

- **`src/extension.ts`****（または ****`extension.js`****）**

	これは拡張機能のエントリーファイルであり、拡張機能がアクティベートされたときに、ここに記述されたコードが実行されます。

	簡単な例：

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

- プロジェクトを開くと、VSCode のデバッグパネルに `Launch Extension` という構成が表示されます。
- `F5` を押すと、VSCode が新しい拡張機能開発ホスト（Extension Development Host）を起動します。
- 新しいウィンドウで、コマンドパレット（`Ctrl+Shift+P` または `Cmd+Shift+P`）から登録したコマンドを入力します。たとえば「Hello World」と入力し、拡張機能が正常に動作するかテストします。

## 拡張機能の公開

開発とテストが完了したら、ほかのユーザーも利用できるように、拡張機能を [VSCode Marketplace](https://marketplace.visualstudio.com/vscode) で公開できます。

- 拡張機能のパッケージ化と公開を支援する `vsce` ツールをインストールします。

	```bash
	npm install -g vsce
	```

- プロジェクトのルートディレクトリでパッケージ化コマンドを実行します。

	```bash
	vsce package
	```

- [公式ドキュメント](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) の案内に従って、公開手続きを完了します。

# 具体的な開発

## 拡張機能の起動

VSCode 拡張機能では、package.json の activationEvents 配列を使用して、拡張機能をいつアクティベートするか定義します。主なアクティベーションイベントの種類は次のとおりです。

### **よく使われるアクティベーションイベント**

1.

	- VSCode の起動時に拡張機能を直ちにアクティベートする
	- メリット：拡張機能を常に利用できる
	- デメリット：VSCode の起動パフォーマンスに影響するため、本番環境での使用は推奨されない
2. **onStartupFinished**
	- VSCode の起動完了後に拡張機能をアクティベートする
	- \* より少し遅れてアクティベートされるが、起動パフォーマンスへの影響は小さい
3. **onCommand:commandId**
	- ユーザーが特定のコマンドを実行したときに拡張機能をアクティベートする
	- 例：onCommand:vs-ex-test.helloWorld
4. **onLanguage:languageId**
	- 特定の言語のファイルを開いたときに拡張機能をアクティベートする
	- 例：onLanguage:javascript, onLanguage:python
5. **onView:viewId**
	- 特定のビューが表示されたときに拡張機能をアクティベートする
	- 例：onView:nodeDependencies

### **その他のアクティベーションイベント**

1. **onUri**
	- 特定の URI を開いたときに拡張機能をアクティベートする
	- 例：onUri\:https\://my-extension.com
2. **onWebviewPanel:viewType**
	- 特定の種類の webview パネルが作成されたときに拡張機能をアクティベートする
3. **onCustomEditor:viewType**
	- カスタムエディターを開いたときに拡張機能をアクティベートする
4. **onDebug**
	- デバッグセッションを開始したときに拡張機能をアクティベートする
5. **onDebugInitialConfigurations**
	- デバッグ構成を初期化するときに拡張機能をアクティベートする
6. **onDebugResolve:type**
	- 特定の種類のデバッグ構成を解決するときに拡張機能をアクティベートする
7. **onFileSystem:scheme**
	- 特定のファイルシステムスキームにアクセスしたときに拡張機能をアクティベートする
	- 例：onFileSystem:ftp
8. **onTerminalProfile:terminalId**
	- 特定のターミナルプロファイルを作成したときに拡張機能をアクティベートする
9. **onAuthenticationRequest:authenticationProviderId**
	- 特定の認証プロバイダーが要求されたときに拡張機能をアクティベートする
10. **onSearch**
	- 検索を実行したときに拡張機能をアクティベートする
11. **onTaskType:taskType**
	- 特定の種類のタスクを実行したときに拡張機能をアクティベートする
12. **onNotebook:notebookType**
	- 特定の種類のノートブックを開いたときに拡張機能をアクティベートする
13. **onTerminal**
	- ターミナルを作成したときに拡張機能をアクティベートする
