---
title: 'vscode插件开发初涉'
published: 2025-03-13
updated: 2025-03-13
description: '开发VSCode插件需准备Node.js、VSCode及Yeoman与generator-code。使用Yeoman生成插件基础结构，理解项目结构中的package.json和入口文件src/extension.ts。通过调试面板运行和测试插件，完成后可使用vsce工具打包并发布到VSCode Marketplace。插件激活通过package.json中的activationEvents定义，支持多种激活事件类型。'
permalink: 'vscode-plugin-dev'
image: 'https://prod-files-secure.s3.us-west-2.amazonaws.com/a4ab9f0c-abe9-4690-9976-e1fc8298c749/377d3cb2-55e7-4a25-95f3-a5d5a6389baf/IMG_2747.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGCMQXK%2F20260222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260222T135441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECdV98jU4Z6aCq23IekBUhUXPG6LiVxQV5G%2BOXLgAcPAiEAxsRjx5P9y0MJ61o9GcT%2BMH%2BzflVmze1DFnG1Jv9KGWgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgrbMxntTsXBrrA0CrcA%2FTOBoNqWqsnz5xS5JGfgkmcrWQMp%2Fr8ljWRzo8iqRbwO3uQAXvzOu1xJ73aeLYIsLFER9QSdfsTO5A6lHOqYHtxFukOH0BlwiLBHHcyXalFZReKsJJk86tp0rP2gzLjFfPaUPvWrL1Z116brt0OdZqGSVJHq%2B7tw44%2Bfueqp7NviPiTfh2BWUrKmBpSqrjvZvmLRSSircwPvkggmIaK%2Bj8IihafkA51XRYR6oGpLUepz%2FmsLguPUyQbMLR9MvVKI%2FmcUc0wcYuUna7jcyTFkDLDWzt6Xa0QzTX9jFesRCjwcPy6s3JfHuN6IJMAw3KZ%2BzG%2B5OJF0Kv2o4kPp5S843M64hCQ9KCIOGuTZHiH5KovlP1Ye91sA0rjq7OP5EtWvX3yynBDmYWqjhGO47upYOsioPPYmLTQso3sz0DxzVx972aZFLBstGOsL8i1%2BMHgueKh1MRgQDEWyHpIcayh7h6RNjVE9LZwTMVMvKls4j1WzvBrNQYhahD6%2BUtxBNylWVY%2BCSbgucUXatn2DMXS3vIRuRvhUhfeeXOtCeOjyysEQh28kvIuAOcS9ctq7gthmg0m4D1lgPNHuNrZZBsj5Nnz6EEdi18kpPD46%2ByjGIdZzKxM%2Bj9r4mosXVlFMOHj68wGOqUBk8%2BXEVj9%2FD69%2FjN%2FUc5h%2BDOsNLt2mBONzOSU2QFSQaCxBAnpt%2BzdEaL1QgP44AE3Kbw%2Br5ugpZo%2FYbRvLjRQcMKSSeoSWLaANvfiOjtTaUIwk4Ui7pzjDGcYKlzRyeE23Uh3PUNgdhi6eFjUyfF%2FHS7QuFS93JtvebAld%2Bn8C%2BMNWH71uW9oU4i1mBnQsmSlJ%2FUzjmEKkoxkaN%2F1tVJlR3VxW3jn&X-Amz-Signature=c88b3df0851bde2060ada8b6360a708323a1ba9cf8c53630a548e850c117571e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject'
tags: ['vscode', 'plugin']
category: 'plugin'
draft: false
---

# 开发环境

1. Nodejs
2. vscode
3. Yeoman&generator-code

    为了方便生成插件项目的基础结构，可以使用 Yeoman 以及 VSCode 官方提供的插件生成器。打开终端，输入以下命令全局安装：


    ```bash
    npm install -g yo generator-code
    ```


# 插件初始框架


## 创建插件


```bash
yo code
```


生成器会询问以下问题：

    - **选择扩展类型**：例如“New Extension (TypeScript)”或者“New Extension (JavaScript)”。
    - **扩展名称、描述**：根据提示填写想要的扩展名称和描述信息。
    - **Git 初始化**：是否初始化 Git 仓库。
    - **包管理器**：选择使用 npm 或 yarn。

生成完成后，会得到一个初步搭建好的项目结构。


## 理解结构


打开生成的项目，会看到一些重要的文件和目录：

- **`package.json`**

    这个文件定义了扩展的基本信息、依赖以及 VSCode 的激活事件和命令注册。


    例如：


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

- **`src/extension.ts`****（或** **`extension.js`****）**

    这是扩展的入口文件，当扩展被激活时会运行这里的代码。


    例如，一个简单的示例：


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


## 运行和调试

- 打开项目后，在 VSCode 的调试面板中，可以看到一个 `Launch Extension` 的配置。
- 按下 `F5`，VSCode 将启动一个新的扩展开发主机（Extension Development Host）。
- 在新的窗口中，通过命令面板（`Ctrl+Shift+P` 或 `Cmd+Shift+P`）输入注册的命令，比如输入 “Hello World” 来测试扩展是否正常工作。

## 发布插件


当开发完成并测试好之后，可以考虑将插件发布到 [VSCode Marketplace](https://marketplace.visualstudio.com/vscode) 供其他人使用：

- 安装 `vsce` 工具帮助打包和发布扩展：

    ```bash
    npm install -g vsce
    ```

- 在项目根目录下运行打包命令：

    ```bash
    vsce package
    ```

- 根据 [官方文档](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) 的指引，完成发布流程。

# 具体开发


## 插件启动


VSCode 扩展通过 package.json 中的 activationEvents 数组来定义何时激活扩展。以下是主要的激活事件类型：


### **常用激活事件**

1. 
    - 在 VSCode 启动时立即激活扩展
    - 优点：扩展始终可用
    - 缺点：会影响 VSCode 的启动性能，不推荐用于生产环境
2. **onStartupFinished**
    - 在 VSCode 完成启动后激活扩展
    - 比 * 稍晚激活，但对启动性能影响较小
3. **onCommand:commandId**
    - 当用户执行特定命令时激活扩展
    - 例如：onCommand:vs-ex-test.helloWorld
4. **onLanguage:languageId**
    - 当打开特定语言的文件时激活扩展
    - 例如：onLanguage:javascript, onLanguage:python
5. **onView:viewId**
    - 当特定视图可见时激活扩展
    - 例如：onView:nodeDependencies

### **其他激活事件**

1. **onUri**
    - 当打开特定 URI 时激活扩展
    - 例如：onUri:https://my-extension.com
2. **onWebviewPanel:viewType**
    - 当创建特定类型的 webview 面板时激活扩展
3. **onCustomEditor:viewType**
    - 当打开自定义编辑器时激活扩展
4. **onDebug**
    - 当启动调试会话时激活扩展
5. **onDebugInitialConfigurations**
    - 当初始化调试配置时激活扩展
6. **onDebugResolve:type**
    - 当解析特定类型的调试配置时激活扩展
7. **onFileSystem:scheme**
    - 当访问特定文件系统方案时激活扩展
    - 例如：onFileSystem:ftp
8. **onTerminalProfile:terminalId**
    - 当创建特定终端配置文件时激活扩展
9. **onAuthenticationRequest:authenticationProviderId**
    - 当请求特定身份验证提供程序时激活扩展
10. **onSearch**
    - 当执行搜索操作时激活扩展
11. **onTaskType:taskType**
    - 当执行特定类型的任务时激活扩展
12. **onNotebook:notebookType**
    - 当打开特定类型的笔记本时激活扩展
13. **onTerminal**
    - 当创建终端时激活扩展
