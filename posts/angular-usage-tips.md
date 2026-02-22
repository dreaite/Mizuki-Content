---
title: 'angular初步使用'
published: 2024-11-04
updated: 2024-11-04
description: 'Angular初步使用指南包括项目创建、Angular CLI命令、组件与模块的结构、数据绑定、指令、服务与依赖注入、路由与导航、表单处理、HTTP客户端、RxJS、状态管理、性能优化、PWA和国际化等内容，提供了详细的命令示例和代码结构，帮助开发者快速上手Angular开发。'
permalink: 'angular-usage-tips'
image: 'https://r2.dreaife.tokyo//notion/covers/1345465cca1780ff89b2c4ed749863f6/IMG_1381.jpg'
tags: ['angular']
category: 'FRONTEND'
draft: false
---

## 创建项目


```shell
npm install -g @angular/cli
ng new my-angular-project
cd my-angular-project
ng serve
ng serve --port 8081

# access in localhost:4200
```


## angular-cli


### 文件生成


Angular CLI 提供了快捷命令来生成各种文件，保持项目结构的一致性。常用的生成命令包括：

- **生成组件**：

    ```shell
    ng generate component component-name
    # 或者简写
    ng g c component-name
    ```


    这将创建一个包含 `HTML`、`CSS`、`TypeScript` 和 `测试`文件的组件。

- **生成服务**：

    ```shell
    ng generate service service-name
    # 简写
    ng g s service-name
    ```


    生成的服务文件默认包含注入器，并能方便地被组件使用。

- **生成模块**：

    ```shell
    ng generate module module-name
    # 简写
    ng g m module-name
    ```


    生成的模块可以帮助你将代码逻辑按功能模块划分，便于代码管理和懒加载。


### **构建项目**


使用 `ng build` 命令来构建项目：


```shell
ng build
```


构建后的文件会存放在 `dist` 目录下。为了发布到生产环境，你可以使用以下命令：


```shell
ng build --prod
```

- `-prod` 选项会启用生产环境的优化，如代码压缩、混淆、去除调试信息等。

### **测试**


Angular CLI 支持单元测试和端到端测试：

- **单元测试**：使用 `ng test` 命令运行单元测试，默认使用 Karma 和 Jasmine。

    ```shell
    ng test
    ```


    这会在浏览器中打开测试界面，并实时更新测试结果。

- **端到端测试**：使用 `ng e2e` 命令运行端到端测试，默认使用 Protractor。

    ```shell
    ng e2e
    ```


    端到端测试模拟用户行为，确保应用整体功能正常。


### **生成服务、管道、指令等其他结构**


除了组件和模块，CLI 还支持生成其他 Angular 结构：

- **生成指令**：

    ```shell
    ng generate directive directive-name
    # 简写
    ng g d directive-name
    ```

- **生成管道**：

    ```shell
    ng generate pipe pipe-name
    # 简写
    ng g p pipe-name
    ```


### **配置和优化**

- **环境配置**

Angular 支持不同环境的配置文件，默认包括 `environment.ts`（开发环境）和 `environment.prod.ts`（生产环境）。你可以在 `angular.json` 文件中定义更多的环境配置，并在构建时选择不同的环境：


```shell
ng build --configuration production
```

- **调试和监控**

使用 `ng serve` 时，Angular CLI 会实时监听文件更改，并自动重新构建应用程序。你可以使用 `--source-map` 选项生成调试信息，以便在浏览器中调试代码：


```shell
ng serve --source-map
```

- **预加载和懒加载模块**

在大型应用中，使用预加载和懒加载模块可以提高性能。Angular CLI 自动支持懒加载，帮助你按需加载模块，减少初次加载时间。


### **其他有用的 CLI 命令**

- **更新 Angular 项目或依赖**：

    ```shell
    ng update
    ```


    该命令会检查并更新 Angular 和相关依赖项。

- **分析构建包**：
使用 `-stats-json` 选项构建应用，可以生成分析文件，用于检查和优化打包内容。

    ```shell
    ng build --prod --stats-json
    ```

- **添加第三方库或工具**：
使用 `ng add` 命令，可以快速添加第三方库和插件。例如，添加 Angular Material：

    ```shell
    ng add @angular/material
    ```


### **angular.json 配置文件**


`angular.json` 是 Angular 项目的全局配置文件，包含项目的所有配置信息。你可以在这里调整构建路径、环境配置、样式和脚本的引入顺序等。


## Angular 项目的基础结构


### 项目目录结构


当你使用 `ng new` 创建一个新的 Angular 项目后，项目结构会像这样：


```perl
my-angular-app/
├── e2e/                    # 端到端测试目录
├── node_modules/           # 项目依赖包目录
├── src/                    # 应用源代码目录
│   ├── app/                # 核心应用目录
│   │   ├── app.component.ts # 根组件的逻辑文件
│   │   ├── app.component.html # 根组件的模板文件
│   │   ├── app.component.css # 根组件的样式文件
│   │   └── app.module.ts   # 根模块文件
│   ├── assets/             # 静态资源目录
│   ├── environments/       # 环境配置目录
│   ├── index.html          # 主 HTML 文件
│   ├── main.ts             # 应用的主入口文件
│   ├── polyfills.ts        # 浏览器兼容代码
│   ├── styles.css          # 全局样式文件
│   └── test.ts             # 单元测试入口文件
├── angular.json            # Angular 项目配置文件
├── package.json            # 项目依赖和脚本
├── tsconfig.json           # TypeScript 配置文件
└── README.md               # 项目说明文件
```


### 目录和文件详解

1. **`src/`** **目录**

    `src/` 是存放应用源代码的主要目录，Angular 应用的所有核心代码都在这里。

    - **`app/`** **目录**：这是应用程序的主要目录，包含了根模块和根组件。随着项目的开发，你会在这里创建更多的组件、服务、模块等。
        - **`app.component.ts`**：定义了根组件的逻辑，是整个应用的起点。
        - **`app.component.html`**：根组件的模板文件，用于定义根组件的 HTML 结构。
        - **`app.component.css`**：根组件的样式文件。
        - **`app.module.ts`**：根模块文件，应用启动时会加载的模块。每个 Angular 应用至少有一个根模块。
    - **`assets/`** **目录**：存放静态资源（如图片、字体等），构建时会直接复制到构建目录中，可以通过相对路径访问这些资源。
    - **`environments/`** **目录**：包含不同环境的配置文件，例如开发环境和生产环境。默认包含 `environment.ts`（开发环境配置）和 `environment.prod.ts`（生产环境配置）。你可以根据环境条件加载不同的配置。
    - **`index.html`**：应用的主 HTML 文件。它是页面的入口，Angular 会把所有组件渲染到这个页面内。
    - **`main.ts`**：应用的主入口文件，Angular 应用从这里开始执行。`main.ts` 会引导根模块 `AppModule`，并启动 Angular 应用。
    - **`polyfills.ts`**：用于加载不同浏览器的兼容性代码，确保应用在所有浏览器中一致运行。
    - **`styles.css`**：全局样式文件，可以在这里定义整个应用的通用样式。
    - **`test.ts`**：测试入口文件，用于配置和初始化单元测试。
2. **`e2e/`** **目录**

    `e2e/` 目录用于存放端到端测试代码。默认使用 Protractor 框架来运行这些测试，用于模拟用户行为并测试整个应用的功能。

3. **根目录中的其他文件**
    - **`angular.json`**：Angular 项目的配置文件，包含构建和开发服务器的相关配置。可以在这里调整构建输出路径、环境配置、样式和脚本的引入顺序等。
    - **`package.json`**：Node.js 项目的配置文件，包含依赖项和运行脚本。所有的依赖库和 CLI 命令都在这里定义和管理。
    - **`tsconfig.json`**：TypeScript 的配置文件，定义了编译 TypeScript 代码的规则。
    - **`README.md`**：项目的说明文件，可以写入项目的描述、安装步骤和使用说明。
4. **`node_modules/`** **目录**

    `node_modules/` 目录用于存放项目的依赖包，由 `npm` 安装。所有 Angular、TypeScript、编译器等库的代码都在这里。


## 组件和模块


在 Angular 中，**组件**和**模块**是应用的核心架构。组件负责构建页面的各个部分，而模块则帮助组织和管理这些组件。


### **组件（Component）**


组件是 Angular 应用的基本构建块。一个组件通常包括三个部分：

- **模板（Template）**：定义组件的 HTML 结构。
- **样式（Styles）**：定义组件的 CSS 样式。
- **逻辑（Class）**：定义组件的行为和数据。
1. 创建组件

    Angular CLI 提供了生成组件的命令：


    ```shell
    ng generate component component-name
    # 或者简写
    ng g c component-name
    ```


    这个命令会在 `app` 目录下创建一个新的组件目录，包含以下文件：

    - `component-name.component.ts`：组件的逻辑文件，包含组件类和装饰器。
    - `component-name.component.html`：组件的模板文件。
    - `component-name.component.css`：组件的样式文件。
    - `component-name.component.spec.ts`：组件的测试文件。
2. 组件的结构

    在 `component-name.component.ts` 文件中，组件使用 `@Component` 装饰器来定义，结构如下：


    ```typescript
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-component-name',      // 组件的选择器，用于在模板中引用组件
      templateUrl: './component-name.component.html',  // 组件的模板文件
      styleUrls: ['./component-name.component.css']    // 组件的样式文件
    })
    export class ComponentNameComponent {
      title = 'Hello, Angular'; // 组件的属性和方法
    }
    ```

    - **`selector`**：组件的选择器，用于在其他模板中引用该组件。比如，`<app-component-name></app-component-name>`。
    - **`templateUrl`** 和 **`styleUrls`**：分别定义组件的模板和样式文件路径。
3. 组件的数据绑定

    Angular 提供了多种数据绑定方式：

    - **插值表达式**：用于展示组件属性的值，例如 `{{ title }}`。
    - **属性绑定**：通过 `[]` 绑定属性，例如 `<img [src]="imageUrl">`。
    - **事件绑定**：通过 `()` 绑定事件，例如 `<button (click)="onClick()">Click</button>`。
    - **双向数据绑定**：通过 `[(ngModel)]` 实现数据和视图的双向绑定（需要导入 `FormsModule`）。

### **模块（Module）**


模块用于组织和管理应用的组件、指令、管道和服务。每个 Angular 应用至少有一个根模块，称为 `AppModule`，它在 `app.module.ts` 文件中定义。

1. 模块的结构

    在 `app.module.ts` 文件中，模块使用 `@NgModule` 装饰器定义，结构如下：


    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { ComponentNameComponent } from './component-name/component-name.component';
    
    @NgModule({
      declarations: [
        AppComponent,
        ComponentNameComponent   // 声明模块中的组件
      ],
      imports: [
        BrowserModule   // 导入其他模块
      ],
      providers: [],     // 声明服务的提供者
      bootstrap: [AppComponent]  // 定义根组件，Angular 启动时会加载
    })
    export class AppModule { }
    ```

    - **`declarations`**：模块中声明的组件、指令和管道，只有声明在模块中的组件才能被使用。
    - **`imports`**：导入其他模块，例如 `BrowserModule` 是用于浏览器应用的核心模块。
    - **`providers`**：声明应用中使用的服务提供者。
    - **`bootstrap`**：定义应用启动时加载的根组件，通常是 `AppComponent`。
2. 特性模块

    在较大的应用中，可以创建多个特性模块（Feature Modules）来组织代码，便于分离不同功能和实现懒加载。


    ```shell
    ng generate module feature-module
    # 或者简写
    ng g m feature-module
    ```


### **组件与模块的关系**

- **模块用于组织组件**：在 Angular 中，模块用于管理和组织组件，每个模块可以包含多个组件。
- **组件的复用性**：一个组件可以在多个模块中声明和使用，但必须先导入包含该组件的模块。
- **根模块和特性模块**：根模块（如 `AppModule`）负责启动应用，而特性模块用于组织应用中的具体功能。

## 数据绑定


### **插值绑定（Interpolation）**


插值绑定使用 **`{{ }}`** 语法来绑定数据，常用于在 HTML 中显示组件的属性值。


**示例**： 在组件类中定义一个属性 **`title`**，然后通过插值绑定将其显示在模板中。


```typescript
// 在组件的 TypeScript 文件中
export class MyComponent {
  title = 'Hello, Angular!';
}
```


```html
<!-- 在组件的 HTML 模板中 -->
<h1>{{ title }}</h1>
```


这里，**`{{ title }}`** 会被替换为 **`Hello, Angular!`**。插值绑定通常用于文本内容的展示。


### **属性绑定（Property Binding）**


属性绑定使用方括号 **`[]`** 语法，将组件属性的值绑定到 HTML 元素的属性上，例如 **`src`**, **`href`**, **`disabled`** 等。


**示例**： 假设我们有一个图片链接，可以使用属性绑定将其绑定到 **`img`** 元素的 **`src`** 属性上。


```typescript
// 在组件的 TypeScript 文件中
export class MyComponent {
  imageUrl = 'https://example.com/image.jpg';
}
```


```html
<!-- 在组件的 HTML 模板中 -->
<img [src]="imageUrl" alt="Example Image">
```


这里 **`[src]="imageUrl"`** 表示将 **`imageUrl`** 的值绑定到 **`img`** 的 **`src`** 属性上。


### **事件绑定（Event Binding）**


事件绑定使用圆括号 **`()`** 语法，将视图中的事件（如 **`click`**、**`mouseover`**）绑定到组件中的方法上，从而触发特定逻辑。


**示例**： 我们可以在按钮上绑定一个 **`click`** 事件，触发组件中的 **`onClick`** 方法。


```typescript
// 在组件的 TypeScript 文件中
export class MyComponent {
  onClick() {
    console.log('Button clicked!');
  }
}
```


```html
<!-- 在组件的 HTML 模板中 -->
<button (click)="onClick()">Click Me</button>
```


这里，**`(click)="onClick()"`** 绑定了 **`click`** 事件，点击按钮时会执行 **`onClick`** 方法，并输出 **`"Button clicked!"`**。


### **双向数据绑定（Two-way Binding）**


双向数据绑定使用 **`[(ngModel)]`** 语法，将数据和视图双向同步。它允许用户输入的数据自动更新组件属性，组件属性的变化也会自动反映到视图中。双向绑定通常用于表单输入和用户输入场景。


**示例**： 在输入框中使用双向数据绑定，将 **`name`** 属性与 **`input`** 输入框的值同步。需要导入 **`FormsModule`**。


```typescript
// 在组件的 TypeScript 文件中
export class MyComponent {
  name = '';
}
```


```html
<!-- 在组件的 HTML 模板中 -->
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Hello, {{ name }}!</p>
```


在这里，**`[(ngModel)]="name"`** 实现了双向数据绑定，用户在输入框中的输入会立即更新 **`name`**，并且 **`name`** 的值会立即显示在页面上。

> 注意：使用双向绑定需要在应用模块中导入 FormsModule，否则会报错。

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  ...
})
export class AppModule { }
```


### **数据绑定的好处**

- **简化代码**：通过绑定可以减少手动更新 DOM 的代码。
- **实时同步**：数据和视图保持同步，使得应用更加动态。
- **提高可维护性**：将数据和视图分离，更容易维护和扩展应用。

## 指令（Directives）


指令（Directives）是 Angular 中非常重要的一个特性，允许我们在模板中操作 DOM 元素，控制样式、结构和行为。指令使得 Angular 的模板变得更加动态和灵活。


### 指令的类型


Angular 中有三种主要的指令类型：

1. **组件指令**：组件本质上也是一种指令，它拥有模板、样式和逻辑，是指令的扩展形式。
2. **结构型指令（Structural Directives）**：用于添加或移除 DOM 元素，控制页面结构。常见的有 `ngIf` 和 `ngFor`。
3. **属性型指令（Attribute Directives）**：用于更改元素的外观或行为，常见的有 `ngClass` 和 `ngStyle`。

### 结构型指令


结构型指令用于添加、移除或替换 DOM 元素。使用时需要在指令前加上 `*` 符号。

- `ngIf` 根据条件来显示或隐藏 DOM 元素。

    ```html
    <div *ngIf="isVisible">This is visible only if isVisible is true.</div>
    ```


    在上面的示例中，`*ngIf="isVisible"` 控制 `div` 元素是否显示，只有当 `isVisible` 为 `true` 时才会渲染该元素。

- `ngFor` 用于遍历数组并生成一组 DOM 元素。

    ```html
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    ```


    在上面的示例中，`*ngFor` 会遍历 `items` 数组，为每个元素生成一个 `<li>`。

- `ngSwitch` 可以根据不同的条件来渲染不同的元素，通常用于多条件判断。

    ```html
    <div [ngSwitch]="value">
      <p *ngSwitchCase="'one'">Value is one</p>
      <p *ngSwitchCase="'two'">Value is two</p>
      <p *ngSwitchDefault>Value is unknown</p>
    </div>
    ```


    `ngSwitchCase` 用于匹配特定的值，`ngSwitchDefault` 表示默认的情况。


### 属性型指令


属性型指令用于改变 DOM 元素的外观或行为，它不会创建或移除元素，而是修改现有元素的属性。

- `ngClass` 用于动态设置元素的 CSS 类。

    ```html
    <div [ngClass]="{ 'active': isActive, 'highlight': isHighlighted }">Styled div</div>
    ```


    在上面的示例中，根据 `isActive` 和 `isHighlighted` 的值动态添加 `active` 和 `highlight` 类。

- `ngStyle` 用于动态设置元素的内联样式。

    ```html
    <div [ngStyle]="{ 'color': textColor, 'font-size': fontSize + 'px' }">Styled div</div>
    ```


    在上面的示例中，`textColor` 和 `fontSize` 会动态控制 `div` 元素的颜色和字体大小。


### 自定义指令


除了 Angular 提供的内置指令，你还可以创建自定义指令来实现特定的行为。通常，自定义指令是属性型指令，用于扩展元素的功能。

- 创建一个自定义指令

    使用 Angular CLI 创建一个指令，命令如下：


    ```shell
    ng generate directive highlight
    # 或简写
    ng g d highlight
    ```


    这个命令会生成一个指令文件 `highlight.directive.ts`，初始内容如下：


    ```typescript
    import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
    
    @Directive({
      selector: '[appHighlight]'
    })
    export class HighlightDirective {
      constructor(private el: ElementRef, private renderer: Renderer2) {}
    
      @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
      }
    
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }
    
      private highlight(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
      }
    }
    ```


    在这个示例中，自定义的 `HighlightDirective` 指令会在鼠标移到元素上时设置背景颜色为黄色，移出时移除颜色。

    - **`@Directive`** **装饰器**：定义了一个指令，`selector: '[appHighlight]'` 表示它是一个属性型指令，使用时通过 `appHighlight` 属性添加到元素上。
    - **`ElementRef`**：用于访问指令应用的 DOM 元素。
    - **`Renderer2`**：用于安全地操作 DOM 样式，避免直接修改 DOM。
    - **`@HostListener`**：监听元素的事件，`mouseenter` 表示鼠标移入，`mouseleave` 表示鼠标移出。
- 使用自定义指令

    在模板中使用 `appHighlight` 指令：


    ```html
    <p appHighlight>Hover over this text to see the highlight effect.</p>
    ```


    添加 `appHighlight` 属性后，指令会在元素上生效。当鼠标悬停时，背景颜色会变成黄色，移开时恢复原样。


## 服务（Services）和依赖注入（Dependency Injection）


在 Angular 中，**服务**（Service）用于封装和共享应用中的逻辑和数据，而**依赖注入**（DI）系统负责管理和提供这些服务。通过使用服务，你可以将应用的业务逻辑从组件中分离出来，提升代码的复用性和可维护性。依赖注入系统则确保服务可以被组件或其他服务轻松使用。


### 服务


服务在 Angular 中通常是一个类，用于封装不属于任何组件的逻辑和数据。比如获取数据、处理业务逻辑、管理状态等，服务可以在多个组件之间共享。

1. 创建一个服务

使用 Angular CLI 可以快速生成服务：


```shell
ng generate service my-service
# 或者简写
ng g s my-service
```


生成的服务文件 `my-service.service.ts` 大致如下：


```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // 将服务注册在根注入器中，全局可用
})
export class MyService {
  constructor() { }

  getData() {
    return 'Hello from MyService!';
  }
}
```

- **`@Injectable`** **装饰器**：标记一个类可以作为依赖被注入到组件或其他服务中。
- **`providedIn: 'root'`**：表示该服务在根注入器中提供，整个应用都可以访问。这样可以避免在 `providers` 中手动注册服务。
1. 在组件中使用服务

服务通常通过依赖注入的方式使用。你可以将服务注入到组件的构造函数中，以便在组件中调用服务方法。


假设我们已经创建了一个名为 `MyService` 的服务，以下是在组件中使用该服务的示例：


```typescript
import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-my-component',
  template: `<p>{{ message }}</p>`
})
export class MyComponent implements OnInit {
  message: string;

  // 在构造函数中注入服务
  constructor(private myService: MyService) {}

  ngOnInit(): void {
    this.message = this.myService.getData();
  }
}
```

- **构造函数注入**：通过在组件的构造函数中定义一个私有变量 `myService` 来注入服务。
- **调用服务方法**：在 `ngOnInit` 生命周期钩子中调用服务方法 `getData()` 并将返回值赋给 `message`。
1. 服务的作用域和提供方式

Angular 的服务提供方式有多种，不同的提供方式会影响服务的作用域和生命周期：

- 根级提供方式

使用 `providedIn: 'root'` 在根注入器中提供服务，服务实例在整个应用程序生命周期中是单例的。这种方式通常用于全局共享的数据或逻辑。


```typescript
@Injectable({
  providedIn: 'root'
})
export class MyService { }
```

- 模块级提供方式

如果你希望服务仅在特定模块中可用，可以在该模块的 `providers` 数组中注册服务。这会让服务的生命周期与模块一致，适合局部共享的数据或逻辑。


```typescript
import { NgModule } from '@angular/core';
import { MyService } from './my-service.service';

@NgModule({
  providers: [MyService]  // 在模块级提供服务
})
export class MyModule { }
```

- 组件级提供方式

如果你希望服务的实例仅在单个组件或该组件的子组件中可用，可以在组件的 `providers` 数组中注册服务。这会让每个组件实例有自己独立的服务实例，适合仅在单个组件内使用的逻辑。


```typescript
import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-my-component',
  template: `<p>My Component</p>`,
  providers: [MyService]  // 在组件级提供服务
})
export class MyComponent { }
```


### 依赖注入（Dependency Injection）


依赖注入是一种设计模式，通过将依赖项（例如服务）注入到组件或其他服务中，避免硬编码依赖。Angular 的 DI 系统自动管理依赖项的创建和提供，简化了应用的结构。

1. DI 系统的工作方式

当 Angular 检测到某个类需要特定的依赖（比如 `MyService`），它会在注入器中查找该依赖的实例。如果实例不存在，它会创建实例并返回给组件或服务。

1. 自定义注入器

Angular 支持在组件中自定义注入器，从而控制依赖的提供方式。这在大多数应用中不常用，但在需要控制服务作用域或实现特殊依赖时非常有用。


### 服务的实际应用场景

- **数据共享**：将共享的数据存储在服务中，以便多个组件可以访问和更新这些数据。
- **HTTP 请求**：通过 `HttpClient` 服务从后端 API 获取数据，并将逻辑封装在服务中，便于复用和测试。
- **全局状态管理**：在服务中管理应用状态，比如用户认证信息或主题设置。

### 示例：创建一个简单的数据服务


假设我们要创建一个简单的数据服务 `DataService`，用于管理一组用户数据，并提供增删改查功能。

- 创建服务

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users = ['Alice', 'Bob', 'Charlie'];

  getUsers() {
    return this.users;
  }

  addUser(user: string) {
    this.users.push(user);
  }
}
```

- 在组件中使用服务

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
    <input [(ngModel)]="newUser" placeholder="Enter name">
    <button (click)="addUser()">Add User</button>
  `
})
export class UserListComponent {
  users: string[];
  newUser = '';

  constructor(private dataService: DataService) {
    this.users = this.dataService.getUsers();
  }

  addUser() {
    if (this.newUser) {
      this.dataService.addUser(this.newUser);
      this.newUser = '';
    }
  }
}
```


在这个示例中，`DataService` 提供了用户数据的管理逻辑，`UserListComponent` 组件从服务中获取数据并展示在视图中，同时可以通过服务添加新用户。


## 路由（Routing）和导航


Angular 的路由系统让我们可以构建单页应用（SPA），通过 URL 控制页面的不同视图。路由允许应用根据用户导航在页面之间切换，并且支持参数传递、懒加载和路由守卫等高级功能。


### 什么是路由？


在单页应用中，虽然只有一个实际页面，但用户通过不同的 URL 可以导航到应用的不同部分。Angular 的路由系统让你可以定义 URL 路径与组件之间的映射关系，点击导航链接时会加载对应的组件，而不会刷新整个页面。


### 设置 Angular 路由

1. 导入 `RouterModule`

在 Angular 应用中设置路由，需要在应用的根模块或相关特性模块中导入 `RouterModule`，并定义路由配置。


例如，在 standalone 模式中，可以在 `main.ts` 中配置路由：


```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },          // 默认路由
      { path: 'about', component: AboutComponent }     // /about 路由
    ])
  ]
});
```


在这个例子中，我们定义了两个路由：

- `''` 表示根路径（`/`），对应 `HomeComponent`。
- `'about'` 表示 `/about` 路径，对应 `AboutComponent`。
1. 创建组件

如果还没有相关组件，可以使用以下命令生成组件：


```shell
ng generate component home --standalone
ng generate component about --standalone
```

1. 在模板中添加路由链接

Angular 提供了 `routerLink` 指令，用于创建路由链接。可以在 `AppComponent` 的模板中添加导航链接：


```html
<!-- app.component.html -->
<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet>
```

- **`routerLink`**：用于指定导航链接的路径。例如，`routerLink="/"` 指向根路径。
- **`<router-outlet></router-outlet>`**：路由出口，指定路由组件在页面中显示的位置。`<router-outlet>` 是路由系统的占位符，Angular 会根据当前 URL 加载对应的组件并显示在此处。
1. 路由参数传递

Angular 路由支持向 URL 传递参数，并在组件中接收和处理这些参数。例如，我们可以定义一个显示用户详情的路由：

- 定义带参数的路由

在路由配置中使用 `:id` 作为占位符定义参数：


```typescript
{ path: 'user/:id', component: UserComponent }
```

- 在模板中添加链接

在模板中可以使用 `routerLink` 传递参数：


```html
<a [routerLink]="['/user', 1]">User 1</a>
<a [routerLink]="['/user', 2]">User 2</a>
```

- 在组件中获取参数

    在 `UserComponent` 中，可以使用 `ActivatedRoute` 来获取路由参数：


    ```typescript
    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute } from '@angular/router';
    
    @Component({
      selector: 'app-user',
      standalone: true,
      template: `<p>User ID: {{ userId }}</p>`
    })
    export class UserComponent implements OnInit {
      userId: string;
    
      constructor(private route: ActivatedRoute) {}
    
      ngOnInit(): void {
        this.userId = this.route.snapshot.paramMap.get('id')!;
      }
    }
    ```

    - **`ActivatedRoute`**：Angular 路由服务，用于获取路由信息。
    - **`paramMap`**：包含了路由参数的键值对。`get('id')` 获取当前路由中的 `id` 参数。

### 路由守卫（Route Guards）


路由守卫用于保护路由，确保用户具备访问权限。常用的路由守卫包括：

- **`CanActivate`**：在导航到某个路由前检查，决定是否允许访问。
- **`CanDeactivate`**：在离开某个路由时检查，决定是否允许离开。

例如，创建一个简单的 `AuthGuard` 守卫，确保用户登录后才能访问某个路由。

1. 生成守卫

使用 CLI 生成守卫：


```shell
ng generate guard auth
```

1. 实现 `AuthGuard` 的逻辑

在生成的 `auth.guard.ts` 文件中编写认证逻辑：


```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = false; // 替换为实际认证逻辑

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
```

1. 将守卫应用到路由上

在路由配置中使用 `canActivate` 属性应用守卫：


```typescript
{ path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }
```


### 懒加载（Lazy Loading）


懒加载让特定模块在需要时才加载，优化了应用的初始加载速度。可以通过 `loadComponent` 轻松实现组件的懒加载：


```typescript
{ path: 'lazy', loadComponent: () => import('./lazy/lazy.component').then(m => m.LazyComponent) }
```


## **表单（Forms）处理**


Angular 提供了强大的表单处理功能，支持创建和验证表单。Angular 表单主要有两种方式：**模板驱动表单** 和 **响应式表单**。这两种方式各有优势，适用于不同场景。


### **模板驱动表单（Template-driven Forms）**


模板驱动表单主要通过 HTML 模板来定义表单结构和验证逻辑，适合简单的表单。它使用 Angular 的 **`FormsModule`** 来提供数据绑定和验证支持。

- **导入** **`FormsModule`**

首先，在模块中导入 **`FormsModule`**。如果你的项目是模块化的，打开 **`app.module.ts`** 或相应模块文件，添加 **`FormsModule`**。


```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule  // 导入 FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- **定义模板驱动表单**

在模板中创建一个简单的表单，使用 **`ngModel`** 指令来实现双向数据绑定。通过 **`#name="ngModel"`** 创建一个模板变量，用于访问输入的验证状态。


```html
<!-- app.component.html -->
<form #myForm="ngForm">
  <label for="name">Name:</label>
  <input id="name" name="name" [(ngModel)]="user.name" required>
  <div *ngIf="!myForm.controls.name?.valid && myForm.controls.name?.touched">
    Name is required.
  </div>

  <label for="email">Email:</label>
  <input id="email" name="email" [(ngModel)]="user.email" required email>
  <div *ngIf="!myForm.controls.email?.valid && myForm.controls.email?.touched">
    Valid email is required.
  </div>

  <button [disabled]="!myForm.valid">Submit</button>
</form>
```

- **`[(ngModel)]`**：双向数据绑定，用于同步表单字段和组件中的数据。
- **`#myForm="ngForm"`**：创建一个模板引用变量 **`myForm`**，可以访问表单的状态。
- **`required`** **和** **`email`** **验证**：Angular 自动提供了 HTML5 的验证规则。
- **在组件中定义数据模型**

在 **`app.component.ts`** 中定义 **`user`** 数据模型，与表单绑定。


```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  user = {
    name: '',
    email: ''
  };
}
```


### **响应式表单（Reactive Forms）**


响应式表单在组件类中定义表单的结构和验证逻辑，更加灵活，适合复杂的动态表单。它使用 **`ReactiveFormsModule`** 模块来提供表单控制和验证支持。

- **导入** **`ReactiveFormsModule`**

在模块中导入 **`ReactiveFormsModule`**。


```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule  // 导入 ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- **定义响应式表单**

在组件中使用 **`FormBuilder`** 定义表单结构和验证规则。


```typescript
// app.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}
```

- **`FormBuilder`**：Angular 提供的服务，用于简化表单结构的创建。
- **`Validators`**：用于设置表单字段的验证规则。
- **在模板中绑定响应式表单**

在模板中使用 **`[formGroup]`** 绑定整个表单，使用 **`formControlName`** 绑定每个表单控件。


```html
<!-- app.component.html -->
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <label for="name">Name:</label>
  <input id="name" formControlName="name">
  <div *ngIf="userForm.controls.name.invalid && userForm.controls.name.touched">
    Name is required.
  </div>

  <label for="email">Email:</label>
  <input id="email" formControlName="email">
  <div *ngIf="userForm.controls.email.invalid && userForm.controls.email.touched">
    Valid email is required.
  </div>

  <button [disabled]="userForm.invalid">Submit</button>
</form>
```

- **`[formGroup]`**：将组件中的 **`userForm`** 绑定到模板中的表单。
- **`formControlName`**：将表单控件绑定到 **`userForm`** 中对应的控件。

### **表单验证**


Angular 提供了多种内置的验证器，如 **`Validators.required`**, **`Validators.email`**，还可以自定义验证器。

- **自定义验证器**

可以在组件中定义一个自定义验证器，并将其应用到表单控件中。


```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
```


然后在创建表单时应用自定义验证器：


```typescript
this.userForm = this.fb.group({
  name: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
  email: ['', [Validators.required, Validators.email]]
});
```


## HTTP 客户端和 API 通信


在现代 Web 应用中，与后端 API 通信是必不可少的部分。Angular 提供了 `HttpClient` 模块，简化了与后端 API 的交互。使用 `HttpClient` 可以轻松地发送 HTTP 请求、处理响应数据、管理错误以及添加拦截器来控制请求和响应的行为。


### 设置 `HttpClient`


在 Angular 应用中使用 `HttpClient`，需要在模块中导入 `HttpClientModule`。

- 导入 `HttpClientModule`

在根模块或特性模块中导入 `HttpClientModule`：


```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule  // 导入 HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- 使用 `HttpClient` 发送请求

`HttpClient` 提供了多种方法来发送 HTTP 请求，包括 `get`、`post`、`put`、`delete` 等，适用于不同类型的请求。

1. 发送 GET 请求

假设我们要从 API 获取用户列表，可以使用 `HttpClient.get` 方法发送 GET 请求：


```typescript
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('<https://jsonplaceholder.typicode.com/users>')
      .subscribe(data => {
        this.users = data;
      });
  }
}
```


在这个例子中：

- `this.http.get` 发送一个 GET 请求。
- `subscribe` 方法用于处理响应数据，接收的 `data` 是一个用户列表，赋值给组件的 `users` 属性。
- 发送 POST 请求

假设我们要向服务器发送数据，可以使用 `HttpClient.post` 方法发送 POST 请求。


```typescript
addUser(newUser: any) {
  this.http.post('<https://jsonplaceholder.typicode.com/users>', newUser)
    .subscribe(response => {
      console.log('User added:', response);
    });
}
```


这里的 `post` 方法发送一个 POST 请求，将 `newUser` 数据传递给 API。`subscribe` 中的 `response` 包含服务器返回的结果。


### 错误处理


在实际应用中，API 请求可能会遇到各种错误，如网络超时、服务器错误等。可以通过 `catchError` 操作符来捕获和处理错误。

- 错误处理示例

使用 `catchError` 操作符处理请求中的错误：


```typescript
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

this.http.get('<https://jsonplaceholder.typicode.com/users>')
  .pipe(
    catchError(this.handleError)
  )
  .subscribe(
    data => console.log('Data:', data),
    error => console.error('Error:', error)
  );

handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side error
    errorMessage = `Error Code: ${error.status}\\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
```


在这里：

- `catchError` 操作符捕获错误并调用 `handleError` 方法。
- `handleError` 方法根据错误类型生成错误信息并通过 `throwError` 返回。

### HTTP 拦截器（Interceptors）


HTTP 拦截器允许我们在请求或响应处理前插入逻辑，例如添加认证 token、记录日志等。

- 创建拦截器

使用 Angular CLI 创建拦截器：


```shell
ng generate interceptor auth
```


拦截器文件可能如下所示：


```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // 克隆请求并添加认证 token
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer YOUR_TOKEN_HERE`
      }
    });
    return next.handle(authReq);
  }
}
```

- `HttpInterceptor` 接口的 `intercept` 方法在请求发送之前执行。
- `req.clone` 用于克隆请求对象并添加认证 token。
- 注册拦截器

在模块中将拦截器注册为 `HTTP_INTERCEPTORS` 的多重提供者：


```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AppModule {}
```


### 使用 RxJS 进行异步处理


`HttpClient` 的方法会返回一个 Observable，通过 `subscribe` 方法订阅数据。可以使用 RxJS 操作符（如 `map`、`switchMap`）来处理异步数据流。

- RxJS 操作符示例

假设你希望在发送请求后处理数据，可以使用 `map` 操作符：


```typescript
import { map } from 'rxjs/operators';

this.http.get<any[]>('<https://jsonplaceholder.typicode.com/users>')
  .pipe(
    map(users => users.filter(user => user.isActive)) // 过滤用户列表
  )
  .subscribe(data => { 
    this.users = data;
  });
```


## RxJS 和响应式编程


RxJS 是 Angular 的核心库之一，用于处理异步事件和数据流。RxJS 的强大之处在于它提供了丰富的操作符，可以高效地处理流式数据和复杂的异步操作。在 Angular 中，RxJS 广泛应用于 HTTP 请求、表单处理、路由、组件间通信等场景。


**RxJS（Reactive Extensions for JavaScript）** 是一个用于处理异步数据流的库，提供了可观察对象（Observable）、观察者（Observer）、操作符（Operators）等功能。响应式编程的核心思想是将数据视为流（Stream），应用一系列操作符来组合、过滤和转换数据，从而实现对数据变化的响应。


### Observable（可观察对象）

- **Observable** 是数据流的核心概念。它代表一个异步的数据源，可以是 HTTP 请求、事件、计时器等。
- 使用 `Observable.subscribe()` 来订阅数据流，当数据到达时观察者会被通知。

---


### 常用 RxJS 操作符


RxJS 提供了许多操作符来处理数据流。以下是一些常用操作符及其应用场景：

1. **`map`** - 数据转换

`map` 操作符用于将 Observable 数据流中的每个数据项转换为新的值。


**示例**：将获取到的用户数组中的每个用户对象映射为用户名。


```typescript
import { map } from 'rxjs/operators';

this.http.get<any[]>('<https://api.example.com/users>')
  .pipe(
    map(users => users.map(user => user.name))
  )
  .subscribe(names => console.log(names));
```

1. **`filter`** - 数据过滤

`filter` 用于过滤数据流中不符合条件的数据项。


**示例**：筛选出 `isActive` 为 `true` 的用户。


```typescript
import { filter } from 'rxjs/operators';

this.http.get<any[]>('<https://api.example.com/users>')
  .pipe(
    map(users => users.filter(user => user.isActive))
  )
  .subscribe(activeUsers => console.log(activeUsers));
```

1. **`switchMap`** - 取消旧的订阅，处理最新数据

`switchMap` 用于在每次接收到新数据时取消上一个未完成的 Observable，常用于处理嵌套请求或连续事件（如表单输入、路由参数变化）。


**示例**：根据用户输入的关键字自动搜索，并取消上一次未完成的请求。


```typescript
import { switchMap, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

searchControl = new FormControl();

this.searchControl.valueChanges
  .pipe(
    debounceTime(300),  // 防抖，避免过于频繁的请求
    switchMap(query => this.http.get(`https://api.example.com/search?q=${query}`))
  )
  .subscribe(results => console.log(results));
```

1. **`mergeMap`** - 并行处理

`mergeMap` 可以将每个数据项映射到一个新的 Observable，并行处理每个 Observable。


**示例**：并行请求多个用户的详细信息。


```typescript
import { mergeMap } from 'rxjs/operators';

const userIds = [1, 2, 3];
from(userIds)
  .pipe(
    mergeMap(id => this.http.get(`https://api.example.com/users/${id}`))
  )
  .subscribe(user => console.log(user));
```

1. **`catchError`** - 错误处理

`catchError` 用于捕获数据流中的错误，进行相应处理。


**示例**：请求失败时返回一个默认值。


```typescript
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

this.http.get('<https://api.example.com/data>')
  .pipe(
    catchError(error => {
      console.error('Error occurred:', error);
      return of([]);  // 返回一个空数组作为默认值
    })
  )
  .subscribe(data => console.log(data));
```


---


### RxJS 中的流控制


RxJS 提供了一些流控制操作符，例如 `debounceTime` 和 `distinctUntilChanged`，可以帮助处理用户输入、点击等事件流。

1. **`debounceTime`** - 防抖

`debounceTime` 用于控制数据的流速，在一定时间内没有新的数据到达时才发送数据，通常用于处理快速连续的输入。


**示例**：在用户停止输入 500 毫秒后执行搜索请求。


```typescript
searchControl.valueChanges
  .pipe(
    debounceTime(500)
  )
  .subscribe(value => console.log('Search:', value));
```

1. **`distinctUntilChanged`** - 去重

`distinctUntilChanged` 会忽略与上一次相同的数据项，避免重复处理。


**示例**：用户输入相同内容时，不重复发送请求。


```typescript
searchControl.valueChanges
  .pipe(
    debounceTime(500),
    distinctUntilChanged()
  )
  .subscribe(value => console.log('Unique search:', value));
```


### RxJS 在 Angular 中的应用场景

- **HTTP 请求**：通过 `HttpClient` 的返回值使用 RxJS 操作符，方便地处理请求数据和错误。
- **路由参数变化**：监听路由参数变化，进行依赖请求。
- **表单输入处理**：处理用户输入，进行防抖、去重等操作。
- **组件间通信**：通过 Subject 实现组件之间的事件或数据传递。

### 示例：基于 RxJS 构建实时搜索


以下是一个完整示例，展示了如何使用 `switchMap`、`debounceTime` 和 `distinctUntilChanged` 构建一个实时搜索功能：


```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `
    <input [formControl]="searchControl" placeholder="Search...">
    <ul>
      <li *ngFor="let result of results">{{ result.name }}</li>
    </ul>
  `
})
export class SearchComponent {
  searchControl = new FormControl();
  results: any[] = [];

  constructor(private http: HttpClient) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(query => this.http.get<any[]>(`https://api.example.com/search?q=${query}`))
      )
      .subscribe(data => this.results = data);
  }
}
```


在这个示例中：

- `debounceTime(300)` 防抖，用户停止输入 300 毫秒后才会发送请求。
- `distinctUntilChanged()` 避免重复请求相同的搜索词。
- `switchMap` 每次有新输入时会取消之前的请求，避免频繁网络请求的性能消耗。

## 状态管理


在复杂的 Angular 应用中，状态管理是一个重要的主题。良好的状态管理能够帮助应用在不同组件和模块之间共享数据、同步状态、简化数据流、提高应用的可维护性。Angular 提供了多种方式进行状态管理，最常见的方式包括通过服务共享数据、使用 `@ngrx/store` 等库进行集中式管理。


---


**状态管理** 是一种在应用中管理和共享状态（数据）的方法，帮助我们更好地控制数据流、更新应用中的 UI。当应用变得复杂，包含多个交互式页面、模块、用户操作等，不同组件可能需要访问和更新相同的数据（例如用户信息、购物车数据等），状态管理可以帮助我们保持数据一致性并减少数据同步的复杂性。


### Angular 中的状态管理方式

1. 使用服务进行状态共享

Angular 的服务在应用中是单例的，可以通过服务在多个组件之间共享状态，适合不需要复杂状态逻辑的小型应用。


**示例**：创建一个简单的 `UserService`，用于管理用户信息。


```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject<User | null>(null); // 存储用户信息
  user$ = this.userSource.asObservable(); // 公开用户信息为 Observable

  setUser(user: User) {
    this.userSource.next(user); // 更新用户信息
  }

  clearUser() {
    this.userSource.next(null); // 清除用户信息
  }
}
```


在组件中，可以通过 `UserService` 访问和更新用户状态：


```typescript
@Component({
  selector: 'app-profile',
  template: `<div *ngIf="user$ | async as user">{{ user.name }}</div>`
})
export class ProfileComponent {
  user$ = this.userService.user$;

  constructor(private userService: UserService) {}
}
```


在另一个组件中更新用户信息：


```typescript
@Component({
  selector: 'app-login',
  template: `<button (click)="login()">Login</button>`
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  login() {
    const user = { name: 'Alice', email: 'alice@example.com' };
    this.userService.setUser(user); // 更新用户信息
  }
}
```

1. 使用 `@ngrx/store` 进行集中式状态管理

对于大型应用，可以使用 `@ngrx/store` 库进行集中式状态管理。`@ngrx/store` 实现了 Redux 模式，能够将所有应用状态集中管理，并通过单一数据源来同步和更新状态。

- `@ngrx/store` 的核心概念
    - **Store**：存储应用的全局状态。所有组件都可以从 `Store` 获取和更新数据。
    - **Actions**：触发状态改变的事件，用于描述要进行的状态更新。
    - **Reducers**：处理 `Actions` 的逻辑，根据不同的 `Actions` 更新 `Store` 中的状态。
    - **Selectors**：从 `Store` 中获取所需的状态数据。
- 安装 `@ngrx/store`

首先，使用 Angular CLI 安装 `@ngrx/store`：


```shell
ng add @ngrx/store
```

- 创建一个状态管理示例

假设我们要管理一个简单的计数器状态，包括 `increment` 和 `decrement` 两个操作。

    1. **定义 Action**

        在 `counter.actions.ts` 文件中定义计数器的 Action：


        ```typescript
        import { createAction } from '@ngrx/store';
        
        export const increment = createAction('[Counter] Increment');
        export const decrement = createAction('[Counter] Decrement');
        export const reset = createAction('[Counter] Reset');
        ```

    2. **定义 Reducer**

        在 `counter.reducer.ts` 文件中定义计数器的 Reducer：


        ```typescript
        import { createReducer, on } from '@ngrx/store';
        import { increment, decrement, reset } from './counter.actions';
        
        export const initialState = 0;
        
        const _counterReducer = createReducer(
          initialState,
          on(increment, state => state + 1),
          on(decrement, state => state - 1),
          on(reset, state => initialState)
        );
        
        export function counterReducer(state: any, action: any) {
          return _counterReducer(state, action);
        }
        ```

    3. **注册 Reducer**

        在应用的 `app.module.ts` 中，将 Reducer 注册到 Store：


        ```typescript
        import { StoreModule } from '@ngrx/store';
        import { counterReducer } from './counter.reducer';
        
        @NgModule({
          imports: [
            StoreModule.forRoot({ count: counterReducer })
          ],
          bootstrap: [AppComponent]
        })
        export class AppModule {}
        ```

    4. **使用 Store 在组件中管理状态**

        在组件中使用 Store 获取和更新计数器状态：


        ```typescript
        import { Component } from '@angular/core';
        import { Store } from '@ngrx/store';
        import { increment, decrement, reset } from './counter.actions';
        
        @Component({
          selector: 'app-counter',
          template: `
            <p>Count: {{ count$ | async }}</p>
            <button (click)="increment()">Increment</button>
            <button (click)="decrement()">Decrement</button>
            <button (click)="reset()">Reset</button>
          `
        })
        export class CounterComponent {
          count$ = this.store.select('count'); // 获取 count 状态
        
          constructor(private store: Store<{ count: number }>) {}
        
          increment() {
            this.store.dispatch(increment());
          }
        
          decrement() {
            this.store.dispatch(decrement());
          }
        
          reset() {
            this.store.dispatch(reset());
          }
        }
        ```


    在这个示例中：

    - **Actions** 定义了增减和重置计数器的操作。
    - **Reducer** 根据不同的 `Action` 更新状态。
    - **Store** 提供了 `count` 状态，组件可以从 Store 订阅状态数据并进行相应的操作。

---


### 状态管理的最佳实践

1. **集中管理应用状态**：将共享状态集中存储在服务或 Store 中，避免状态在不同组件中重复存储。
2. **避免直接修改状态**：通过 Action 和 Reducer 进行状态更新，确保状态变化是可追溯的。
3. **分离 UI 和业务逻辑**：组件负责 UI 呈现，服务或 Store 负责管理业务逻辑和数据状态。
4. **使用 Selectors**：使用 Selectors 获取 Store 中的数据，保持数据访问的简单性和一致性。

---


## 优化和性能调优


在构建和部署 Angular 应用时，性能优化是确保应用快速加载和响应的关键步骤。Angular 提供了多种优化技术，如懒加载、AOT（提前编译）、Tree Shaking、变化检测策略等。本节将介绍这些优化技巧，帮助你提高应用的性能。


---


### 懒加载（Lazy Loading）


**懒加载**是一种按需加载模块的技术。它允许应用在用户需要时才加载特定模块，避免应用启动时加载所有内容，从而减少首屏加载时间，提升应用的启动速度。


实现懒加载


假设有一个 `AdminModule` 模块，我们可以在路由中配置懒加载来实现按需加载。


**示例**：


```typescript
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];
```


在这里，当用户导航到 `/admin` 路径时，Angular 才会加载 `AdminModule` 模块。


---


### AOT 编译（Ahead-Of-Time Compilation）


**AOT 编译**将 Angular 的模板在构建时提前编译为 JavaScript 代码，而不是在浏览器中实时编译。这可以减少浏览器的工作量，减少应用包大小并提高运行速度。


使用 AOT 编译


使用 Angular CLI 构建应用时，AOT 编译是默认开启的，可以通过 `ng build --prod` 命令构建生产环境版本，启用 AOT 和其他优化。


```shell
ng build --prod
```


AOT 编译的好处：

- **提高运行速度**：减少浏览器的编译时间。
- **更小的包大小**：只打包已编译的模板代码。
- **检测模板错误**：在构建时发现模板语法错误，增加代码的安全性。

---


### Tree Shaking


**Tree Shaking** 是一种在构建过程中移除未使用代码的技术。Angular 使用 Webpack 构建，它会自动移除未使用的模块和代码，减小应用的包体积。


如何优化 Tree Shaking

1. **使用 ES6 模块**：确保代码使用 ES6 模块语法（`import` 和 `export`）。
2. **移除不必要的依赖**：确保只引入和使用必要的库或模块。
3. **优化 RxJS 导入**：RxJS 库可以按需引入。例如，使用 `import { map } from 'rxjs/operators'` 而不是导入整个 `rxjs` 库。

---


### 变化检测策略（Change Detection Strategy）


Angular 默认的变化检测机制会检测所有组件的变化，可能导致性能开销。可以使用 `OnPush` 策略优化变化检测，使组件只在输入数据发生变化或组件内部事件触发时才进行检测。


使用 `OnPush` 策略


在组件中设置 `changeDetection: ChangeDetectionStrategy.OnPush` 来启用 `OnPush` 策略。


```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush  // 启用 OnPush 策略
})
export class MyComponent {}
```


使用 `OnPush` 策略的好处：

- **减少不必要的变化检测**：只有在输入数据或事件触发时才会重新渲染。
- **提高性能**：适合纯展示型组件，不依赖父组件频繁更新的数据。

---


### 使用 Service Workers 进行缓存


Angular 支持将应用配置为 **渐进式 Web 应用（PWA）**，利用 Service Worker 缓存资源以提高离线支持和性能。


添加 Service Worker 支持


使用 Angular CLI 添加 Service Worker：


```shell
ng add @angular/pwa
```


这会自动生成 Service Worker 配置文件并注册到应用中。在生产环境中，Service Worker 会自动缓存静态资源，加快页面加载速度。


---


### 优化图片和静态资源


在 Web 应用中，图片和静态资源通常占据较大体积，可以通过压缩和延迟加载等方式优化资源。


图片压缩和延迟加载

- **使用压缩格式**：尽量使用体积较小的图片格式（如 WebP）。
- **懒加载图片**：可以通过 `loading="lazy"` 属性实现延迟加载，只有当图片进入视口时才加载。

```html
<img src="image.webp" loading="lazy" alt="Example Image">
```


---


### 使用 Angular 的内置优化工具


Angular CLI 提供了许多内置工具，帮助优化应用的包体积和性能。通过以下方式可以进一步优化构建：


`ng build --prod` 的默认优化


使用 `ng build --prod` 时，Angular CLI 会自动应用多种优化，包括：

- **AOT 编译**：提前编译模板。
- **Tree Shaking**：移除未使用代码。
- **Minification**：压缩代码。
- **Bundle Splitting**：分割代码，减少单个包的大小。

---


### 提升 Angular 性能的最佳实践

1. **按需加载模块**：利用懒加载按需加载特定模块，减少主包大小。
2. **使用纯展示型组件**：在没有状态依赖的组件上启用 `OnPush` 策略，减少变化检测次数。
3. **避免在模板中进行复杂计算**：在组件类中进行计算，将结果传递到模板中。
4. **优化第三方库的引入**：使用按需导入的方式引入第三方库（如 RxJS 操作符）。
5. **使用 Web Workers**：将计算密集型任务交给 Web Worker，避免阻塞主线程。

---


## PWA 和国际化


在本节中，我们将介绍两个重要的进阶主题：**渐进式 Web 应用（PWA）** 和 **国际化（i18n）**。PWA 可以让 Angular 应用具备离线支持和原生应用的体验，而国际化则使应用能够支持多语言，方便在全球范围内使用。


---


### 渐进式 Web 应用（PWA）


**渐进式 Web 应用（PWA）** 是一种利用现代 Web 技术构建的应用，使得 Web 应用能够像原生应用一样流畅运行，并具有离线功能。Angular 提供了内置的 PWA 支持，可以帮助开发者轻松构建具有离线支持、推送通知等功能的 Web 应用。

- 将 Angular 应用转换为 PWA

Angular CLI 提供了简便的命令来将现有项目转换为 PWA 应用。

1. 添加 PWA 支持

    在项目目录中运行以下命令：


    ```shell
    ng add @angular/pwa
    ```


    执行命令后，Angular 会自动生成 Service Worker 配置文件（`ngsw-config.json`）以及应用的图标（`manifest.webmanifest` 文件）。这些文件可以配置应用的离线缓存和图标等 PWA 设置。

2. 配置 `ngsw-config.json`

    `ngsw-config.json` 是 Service Worker 的配置文件，用于定义哪些文件会被缓存。默认情况下，Angular 会缓存应用的主要资源（如 JavaScript 文件、CSS 文件、HTML 文件等）。可以根据需要自定义缓存策略。

3. 构建生产版本

    使用 PWA 时，应用需要以生产模式运行：


    ```shell
    ng build --prod
    ```

4. 部署

    将应用部署到服务器后，浏览器会自动检测并注册 Service Worker，使应用具备离线功能。

- 验证 PWA 功能
1. 打开应用后，在浏览器的开发者工具中检查是否成功注册了 Service Worker。
2. 可以尝试关闭网络，然后刷新页面，应用仍然应该能够加载离线缓存的内容。

---


### 国际化


**国际化** 是将应用中的文本、日期格式、数字格式等内容转换为不同语言和地区格式的过程，使应用可以适应不同的语言和文化背景。Angular 提供了内置的国际化支持，帮助开发者轻松添加多语言。

- 使用 Angular 的 i18n 功能

Angular 的 i18n 功能可以帮助将应用文本进行多语言翻译。以下是配置步骤：

1. 标记文本

在模板中使用 `i18n` 属性标记需要翻译的文本。


```html
<h1 i18n="@@welcome">Welcome to our app!</h1>
<p i18n="@@intro">This is an example of internationalized content.</p>
```


在这里，`i18n="@@key"` 用于给文本内容添加一个唯一的翻译键 `key`，方便后续查找和翻译。

1. 提取翻译文件

使用 Angular CLI 提取翻译文件。运行以下命令会在 `src/locale` 目录下生成一个 `messages.xlf` 文件：


```shell
ng extract-i18n
```


生成的 `messages.xlf` 是一个 XML 文件，包含应用中所有标记的翻译内容。

1. 翻译内容

在 `messages.xlf` 文件中为每种语言创建翻译文件，翻译内容并保存文件。例如，可以创建 `messages.fr.xlf` 文件用于法语翻译。


```xml
<trans-unit id="welcome" datatype="html">
  <source>Welcome to our app!</source>
  <target>Bienvenue dans notre application!</target>
</trans-unit>

<trans-unit id="intro" datatype="html">
  <source>This is an example of internationalized content.</source>
  <target>Ceci est un exemple de contenu internationalisé.</target>
</trans-unit>
```

1. 配置多语言编译

在 `angular.json` 文件中添加多语言配置。例如：


```json
"projects": {
  "your-app-name": {
    "i18n": {
      "sourceLocale": "en",
      "locales": {
        "fr": "src/locale/messages.fr.xlf"
      }
    }
  }
}
```

1. 构建多语言版本

在构建应用时，可以为不同语言生成不同版本：


```shell
ng build --prod --localize
```


这样会自动为每个语言生成对应的版本（例如 `dist/your-app-name/fr` 目录下会生成法语版本的应用）。

- 动态切换语言（可选）

如果希望在运行时动态切换语言，可以使用第三方库（如 `ngx-translate`）实现更灵活的国际化支持。
