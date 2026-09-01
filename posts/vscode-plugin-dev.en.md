---
title: 'Getting Started with VS Code Extension Development'
published: 2025-03-13
updated: 2025-03-13
description: 'Create a VS Code extension with Yeoman, then learn package.json, activationEvents, extension.ts, debugging, vsce packaging, and publishing.'
image: 'https://r2.dreaife.tokyo/notion/covers/1b55465cca17808d8be3e99dd76eae9f/IMG_2747.jpg'
tags: ['vscode', 'plugin']
category: 'STUDY'
draft: false
lang: 'en'
---

# Development Environment

1. Node.js
2. VS Code
3. Yeoman & generator-code

	To conveniently generate the basic structure of an extension project, you can use Yeoman and the official extension generator provided by VS Code. Open a terminal and enter the following command to install them globally:

	```bash
	npm install -g yo generator-code
	```

# Initial Extension Framework

## Creating an Extension

```bash
yo code
```

The generator will ask the following questions:

	- **Select the extension type**: For example, “New Extension (TypeScript)” or “New Extension (JavaScript).”
	- **Extension name and description**: Enter the desired extension name and description as prompted.
	- **Git initialization**: Whether to initialize a Git repository.
	- **Package manager**: Choose npm or yarn.

Once generation is complete, you will have an initial scaffolded project structure.

## Understanding the Structure

Open the generated project, and you will see several important files and directories:

- **`package.json`**

	This file defines the extension’s basic information, dependencies, VS Code activation events, and command registrations.

	For example:

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

- **`src/extension.ts`**** (or ****`extension.js`****)**

	This is the extension’s entry file. The code here runs when the extension is activated.

	For example, here is a simple example:

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

## Running and Debugging

- After opening the project, you will see a `Launch Extension` configuration in VS Code’s Run and Debug panel.
- Press `F5`, and VS Code will launch a new Extension Development Host.
- In the new window, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and enter the registered command, such as “Hello World,” to test whether the extension works correctly.

## Publishing the Extension

Once development and testing are complete, you can publish the extension to the [VSCode Marketplace](https://marketplace.visualstudio.com/vscode) for others to use:

- Install the `vsce` tool to package and publish the extension:

	```bash
	npm install -g vsce
	```

- Run the packaging command in the project root directory:

	```bash
	vsce package
	```

- Follow the [official documentation](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) to complete the publishing process.

# Extension Development

## Extension Activation

VS Code extensions use the activationEvents array in package.json to define when an extension is activated. The main activation event types are listed below:

### **Common Activation Events**

1.

	- Activates the extension immediately when VS Code starts
	- Advantage: The extension is always available
	- Disadvantage: It affects VS Code startup performance and is not recommended for production environments
2. **onStartupFinished**
	- Activates the extension after VS Code finishes starting
	- Activates slightly later than \*, but has less impact on startup performance
3. **onCommand:commandId**
	- Activates the extension when the user executes a specific command
	- Example: onCommand:vs-ex-test.helloWorld
4. **onLanguage:languageId**
	- Activates the extension when a file in a specific language is opened
	- Example: onLanguage:javascript, onLanguage:python
5. **onView:viewId**
	- Activates the extension when a specific view becomes visible
	- Example: onView:nodeDependencies

### **Other Activation Events**

1. **onUri**
	- Activates the extension when a specific URI is opened
	- Example: onUri\:https\://my-extension.com
2. **onWebviewPanel:viewType**
	- Activates the extension when a specific type of webview panel is created
3. **onCustomEditor:viewType**
	- Activates the extension when a custom editor is opened
4. **onDebug**
	- Activates the extension when a debugging session starts
5. **onDebugInitialConfigurations**
	- Activates the extension when debug configurations are initialized
6. **onDebugResolve:type**
	- Activates the extension when a specific type of debug configuration is resolved
7. **onFileSystem:scheme**
	- Activates the extension when a specific file system scheme is accessed
	- Example: onFileSystem:ftp
8. **onTerminalProfile:terminalId**
	- Activates the extension when a specific terminal profile is created
9. **onAuthenticationRequest:authenticationProviderId**
	- Activates the extension when a specific authentication provider is requested
10. **onSearch**
	- Activates the extension when a search operation is performed
11. **onTaskType:taskType**
	- Activates the extension when a specific type of task is executed
12. **onNotebook:notebookType**
	- Activates the extension when a specific type of notebook is opened
13. **onTerminal**
	- Activates the extension when a terminal is created
