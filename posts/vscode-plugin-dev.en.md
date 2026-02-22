---
title: 'vscode插件开发初涉'
published: 2025-03-13
updated: 2025-03-13
description: '开发VSCode插件需准备Node.js、VSCode及Yeoman与generator-code。使用Yeoman生成插件基础结构，理解项目结构中的package.json和入口文件src/extension.ts。通过调试面板运行和测试插件，完成后可使用vsce工具打包并发布到VSCode Marketplace。插件激活通过package.json中的activationEvents定义，支持多种激活事件类型。'
permalink: 'vscode-plugin-dev.en'
image: 'https://r2.dreaife.tokyo/notion/covers/1b55465cca17808d8be3e99dd76eae9f/IMG_2747.jpg'
tags: ['vscode', 'plugin']
category: 'plugin'
draft: false
lang: 'en'
---

# Development Environment

1. Node.js
2. VS Code
3. Yeoman&generator-code

    To conveniently generate the basic structure of a plugin project, you can use Yeoman and the official VS Code extension generator. Open a terminal and run the following commands to install globally:


    ```bash
    npm install -g yo generator-code
    ```


# Initial Plugin Framework


## Create Plugin


```bash
yo code
```


The generator will ask the following questions：

    - **Choose Extension Type**：For example “New Extension (TypeScript)” or “New Extension (JavaScript)”.
    - **Extension name and description**：Fill in the extension name and description as prompted.
    - **Git initialization**：Whether to initialize a Git repository.
    - **Package manager**：Choose using npm or yarn.

After generation completes, you will have a basic project structure scaffolded.


## Understanding the Structure


Open the generated project, you will see some important files and directories:

- **`package.json`**

    This file defines the extension's basic information, dependencies, as well as VS Code activation events and command registrations.


    For example:


    ```json
    {
      "name": "my-sample-extension",
      "displayName": "My Sample Extension",
      "description": "A simple VS Code extension.",
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

- **`src/extension.ts`**（或 **`extension.js`**）

    This is the entry point of the extension; this code runs when the extension is activated.


    For example, a simple sample:

    ```typescript
    import * as vscode from 'vscode';
    
    export function activate(context: vscode.ExtensionContext) {
        console.log('Congratulations, your extension "my-sample-extension" is now active!');
    
        let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
            vscode.window.showInformationMessage('Hello World from your VS Code extension!');
        });
    
        context.subscriptions.push(disposable);
    }
    
    export function deactivate() {}
    ```


## Run and Debug

- After opening the project, in VS Code's Debug panel, you will see a configuration named `Launch Extension`.
- Press `F5`; VS Code will start a new Extension Development Host.
- In the new window, via the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`), run the registered command, for example typing “Hello World” to test whether the extension works properly.

## Publish Extension


When development and testing are complete, you may consider publishing the extension to the [VS Code Marketplace](https://marketplace.visualstudio.com/vscode) for others to use:

- Install the `vsce` tool to help package and publish extensions:

    ```bash
    npm install -g vsce
    ```

- In the project root, run the packaging command:

    ```bash
    vsce package
    ```

- Follow the guidance in the official documentation to complete the publishing process. (Official docs: https://code.visualstudio.com/api/working-with-extensions/publishing-extension)


# Specific Development


## Extension Activation


VS Code extensions are activated according to the activationEvents array in package.json. Here are the main activation event types：


### **Common Activation Events**

1. 
    - Activate the extension immediately when VS Code starts
    - Pros: the extension is always available
    - Cons: may affect VS Code startup performance; not recommended for production environments
2. **onStartupFinished**
    - Activate the extension after VS Code finishes starting up
    - Slightly later than the previous, but with less impact on startup performance
3. **onCommand:commandId**
    - Activate the extension when the user executes a specific command
    - For example: onCommand:vs-ex-test.helloWorld
4. **onLanguage:languageId**
    - Activate the extension when opening files of a specific language
    - For example: onLanguage:javascript, onLanguage:python
5. **onView:viewId**
    - Activate the extension when a specific view becomes visible
    - For example: onView:nodeDependencies

### **Other Activation Events**

1. **onUri**
    - Activate the extension when a specific URI is opened
    - For example: onUri:https://my-extension.com
2. **onWebviewPanel:viewType**
    - Activate the extension when creating a specific type of Webview panel
3. **onCustomEditor:viewType**
    - Activate the extension when opening a custom editor
4. **onDebug**
    - Activate the extension when starting a debugging session
5. **onDebugInitialConfigurations**
    - Activate the extension when initializing debug configurations
6. **onDebugResolve:type**
    - Activate the extension when resolving a specific type of debug configuration
7. **onFileSystem:scheme**
    - Activate the extension when accessing a specific filesystem scheme
    - For example: onFileSystem:ftp
8. **onTerminalProfile:terminalId**
    - Activate the extension when creating a terminal profile
9. **onAuthenticationRequest:authenticationProviderId**
    - Activate the extension when requesting authentication from a specific provider
10. **onSearch**
    - Activate the extension when performing a search
11. **onTaskType:taskType**
    - Activate the extension when executing a task of a specific type
12. **onNotebook:notebookType**
    - Activate the extension when opening a notebook of a specific type
13. **onTerminal**
    - Activate the extension when a terminal is created
