---
title: 'angular初步使用'
published: 2024-11-04
updated: 2024-11-04
description: 'Angular初步使用指南包括项目创建、Angular CLI命令、组件与模块的结构、数据绑定、指令、服务与依赖注入、路由与导航、表单处理、HTTP客户端、RxJS、状态管理、性能优化、PWA和国际化等内容，提供了详细的命令示例和代码结构，帮助开发者快速上手Angular开发。'
permalink: 'angular-usage-tips'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca1780ff89b2c4ed749863f6/IMG_1381.jpg'
tags: ['angular']
category: 'FRONTEND'
draft: false
lang: 'ja'
---

## プロジェクトの作成

```shell
npm install -g @angular/cli
ng new my-angular-project
cd my-angular-project
ng serve
ng serve --port 8081

# access in localhost:4200
```


## Angular CLI


### ファイル生成

Angular CLI はさまざまなファイルを生成するためのショートカットコマンドを提供し、プロジェクト構造の一貫性を保ちます。よく使われる生成コマンドには次のものが含まれます：

- **コンポーネントを生成**：

    ```shell
    ng generate component component-name
    # 或者简写
    ng g c component-name
    ```


    これは、HTML、CSS、TypeScript、テストファイルを含むコンポーネントを作成します。

- **サービスを生成**：

    ```shell
    ng generate service service-name
    # 简写
    ng g s service-name
    ```


    生成されるサービスファイルにはデフォルトでインジェクターが含まれ、コンポーネントから簡単に使用できます。

- **モジュールを生成**：

    ```shell
    ng generate module module-name
    # 简写
    ng g m module-name
    ```


    生成されるモジュールは、機能モジュールごとにコードのロジックを分割し、コードの管理と遅延ロードを容易にします。


### **ビルドプロジェクト**


ビルドには `ng build` コマンドを使用します：


```shell
ng build
```


ビルド後のファイルは `dist` ディレクトリに格納されます。本番環境へ公開するには、以下のコマンドを使用します：


```shell
ng build --prod
```

- `-prod` オプションは、本番環境の最適化（コード圧縮、難読化、デバッグ情報の削除など）を有効にします。

### **テスト**


Angular CLI はユニットテストとE2Eテストをサポートします：

- **ユニットテスト**：`ng test` コマンドを使用してユニットテストを実行します。デフォルトは Karma と Jasmine を使用します。

    ```shell
    ng test
    ```


    これによりブラウザでテストUIが開き、テスト結果がリアルタイムで更新されます。

- **エンドツーエンド テスト**：`ng e2e` コマンドを使用してエンドツーエンドテストを実行します。デフォルトは Protractor。

    ```shell
    ng e2e
    ```


    エンドツーエンドテストはユーザーの動作を模倣し、アプリ全体の機能が正常に動作することを確認します。


### **生成サービス、パイプ、ディレクティブなど他の構造を生成**


コンポーネントとモジュール以外にも、CLI は他の Angular 構造の生成をサポートしています：

- **ディレクティブを生成**：

    ```shell
    ng generate directive directive-name
    # 简写
    ng g d directive-name
    ```

- **パイプを生成**：

    ```shell
    ng generate pipe pipe-name
    # 简写
    ng g p pipe-name
    ```


### **設定と最適化**

- **環境設定**

Angular は環境ごとの設定ファイルをサポートしており、デフォルトでは `environment.ts`（開発環境）と `environment.prod.ts`（本番環境）が含まれます。`angular.json` ファイルでさらに環境設定を定義し、ビルド時に異なる環境を選択できます：


```shell
ng build --configuration production
```

- **デバッグと監視**

`ng serve` を使用すると、Angular CLI がファイルの変更をリアルタイムで監視し、アプリケーションを自動的に再ビルドします。`--source-map` オプションを使用してデバッグ情報を生成し、ブラウザでコードをデバッグできます：


```shell
ng serve --source-map
```

- **プリロードと遅延ロード（Lazy Loading）モジュール**

大規模なアプリケーションでは、プリロードと遅延ロードモジュールを使用するとパフォーマンスが向上します。Angular CLI は自動的に遅延ロードをサポートし、必要に応じてモジュールを読み込むのを手伝い、初回ロード時間を短縮します。


### **その他の有用な CLI コマンド**

- **Angular プロジェクトや依存関係の更新**：

    ```shell
    ng update
    ```


    このコマンドは Angular および関連依存関係をチェックして更新します。

- **ビルドパッケージの分析**：`-stats-json` オプションを使ってアプリをビルドすると、分析ファイルが生成され、パッケージ内容の確認と最適化に役立ちます。

    ```shell
    ng build --prod --stats-json
    ```

- **サードパーティライブラリやツールの追加**：
`ng add` コマンドを使用してサードパーティライブラリやプラグインを迅速に追加できます。例として、Angular Material を追加：

    ```shell
    ng add @angular/material
    ```


### **angular.json 配置ファイル**


`angular.json` は Angular プロジェクトのグローバル設定ファイルで、プロジェクトの全ての設定情報を含みます。ここでビルド出力パス、環境設定、スタイルやスクリプトの読み込み順序などを調整できます。


## Angular プロジェクトの基礎構造


### プロジェクトのディレクトリ構造


`ng new` で新しい Angular プロジェクトを作成すると、プロジェクト構造は次のようになります：


```perl
my-angular-app/
├── e2e/                    # エンドツーエンド テストディレクトリ
├── node_modules/           # プロジェクト依存パッケージディレクトリ
├── src/                    # アプリケーションのソースコードディレクトリ
│   ├── app/                # コアアプリディレクトリ
│   │   ├── app.component.ts # ルートコンポーネントのロジックファイル
│   │   ├── app.component.html # ルートコンポーネントのテンプレートファイル
│   │   ├── app.component.css # ルートコンポーネントのスタイルファイル
│   │   └── app.module.ts   # ルートモジュールファイル
│   ├── assets/             # 静的リソースディレクトリ
│   ├── environments/       # 環境設定ディレクトリ
│   ├── index.html          # 主 HTML ファイル
│   ├── main.ts             # アプリの主エントリファイル
│   ├── polyfills.ts        # ブラウザ互換コード
│   ├── styles.css          # グローバルスタイルファイル
│   └── test.ts             # ユニットテスト用エントリファイル
├── angular.json            # Angular プロジェクト設定ファイル
├── package.json            # プロジェクト依存とスクリプト
├── tsconfig.json           # TypeScript の設定ファイル
└── README.md               # プロジェクトの説明ファイル
```


### 目录とファイルの詳細

1. **`src/` ディレクトリ**

    `src/` はアプリケーションのソースコードを格納する主要ディレクトリで、Angular アプリのすべてのコアコードがここにあります。

    - **`app/` ディレクトリ**：これはアプリケーションの主要ディレクトリで、ルートモジュールとルートコンポーネントを含みます。プロジェクトの開発が進むにつれて、ここにさらにコンポーネント、サービス、モジュールなどを作成します。
        - **`app.component.ts`**：コンポーネントのロジックファイルで、コンポーネントクラスとデコレーターを含みます。
        - **`app.component.html`**：ルートコンポーネントのテンプレートファイル。
        - **`app.component.css`**：ルートコンポーネントのスタイルファイル。
        - **`app.module.ts`**：ルートモジュールファイル、アプリ起動時にロードされるモジュール。各 Angular アプリには少なくとも1つのルートモジュールがあります。
    - **`assets/` ディレクトリ**：静的リソース（画像、フォントなど）を格納します。ビルド時にビルドディレクトリに直接コピーされ、相対パスでアクセスできます。
    - **`environments/` ディレクトリ**：異なる環境の設定ファイルを含みます。例として開発環境と本番環境があります。デフォルトでは `environment.ts`（開発環境の設定）と `environment.prod.ts`（本番環境の設定）が含まれます。環境条件に応じて異なる設定を読み込むことができます。
    - **`index.html`**：アプリのメインHTMLファイル。ページの入口で、Angular はすべてのコンポーネントをこのページ内にレンダリングします。
    - **`main.ts`**：アプリのメインエントリーファイル。Angular アプリはここから実行を開始します。`main.ts` はルートモジュール `AppModule` をブーツストラップし、Angular アプリを起動します。
    - **`polyfills.ts`**：異なるブラウザの互換性コードを読み込み、すべてのブラウザでアプリが一貫して動作するようにします。
    - **`styles.css`**：グローバルスタイルファイルで、アプリ全体の共通スタイルをここで定義できます。
    - **`test.ts`**：テストのエントリーファイルで、ユニットテストの設定と初期化に使用されます。
2. **`e2e/` ディレクトリ**

    `e2e/` ディレクトリにはエンドツーエンドテストのコードを格納します。デフォルトでは Protractor フレームワークを使用してこれらのテストを実行し、ユーザーの動作を模倣してアプリ全体の機能をテストします。

3. 根ディレクトリの他のファイル
    - **`angular.json`**：Angular プロジェクトの設定ファイルで、ビルドと開発サーバーに関する設定を含みます。ここでビルド出力パス、環境設定、スタイルやスクリプトの読み込み順序などを調整できます。
    - **`package.json`**：Node.js プロジェクトの設定ファイルで、依存関係と実行スクリプトを含みます。すべての依存ライブラリと CLI コマンドはここで定義・管理されます。
    - **`tsconfig.json`**：TypeScript の設定ファイルで、TypeScript コードのコンパイル規則を定義します。
    - **`README.md`**：プロジェクトの説明ファイル。プロジェクトの概要、インストール手順、使用方法などを記載できます。
4. **`node_modules/` ディレクトリ**

    `node_modules/` ディレクトリには、`npm` によってインストールされたプロジェクトの依存パッケージが格納されます。Angular、TypeScript、コンパイラなどのライブラリのコードはすべてここにあります。


## コンポーネントとモジュール


Angular では、**コンポーネント**と**モジュール**がアプリケーションのコアとなる構造です。コンポーネントはページの各部分を構築し、モジュールはこれらのコンポーネントを整理・管理するのに役立ちます。


### **コンポーネント（Component）**


コンポーネントは Angular アプリの基本的な構成要素です。1つのコンポーネントは通常、3つの部分から成り立っています：

- **テンプレート（Template）**：コンポーネントの HTML 構造を定義します。
- **スタイル（Styles）**：コンポーネントの CSS スタイルを定義します。
- **ロジック（Class）**：コンポーネントの挙動とデータを定義します。
1. コンポーネントの作成

    Angular CLI はコンポーネントを生成するコマンドを提供します：


    ```shell
    ng generate component component-name
    # 或者简写
    ng g c component-name
    ```


    このコマンドは `app` ディレクトリの下に新しいコンポーネントディレクトリを作成し、以下のファイルを含みます。

    - `component-name.component.ts`：コンポーネントのロジックファイル、コンポーネントクラスとデコレーターを含みます。
    - `component-name.component.html`：コンポーネントのテンプレートファイル。
    - `component-name.component.css`：コンポーネントのスタイルファイル。
    - `component-name.component.spec.ts`：コンポーネントのテストファイル。
2. コンポーネントの構造

    `component-name.component.ts` ファイル内で、コンポーネントは `@Component` デコレーターを使用して定義され、構造は以下のとおりです：


    ```typescript
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-component-name',      // コンポーネントのセレクター。テンプレートでの参照に使用
      templateUrl: './component-name.component.html',  // コンポーネントのテンプレートファイル
      styleUrls: ['./component-name.component.css']    // コンポーネントのスタイルファイル
    })
    export class ComponentNameComponent {
      title = 'Hello, Angular'; // コンポーネントの属性とメソッド
    }
    ```

    - **`selector`**：他のテンプレートからこのコンポーネントを参照するためのセレクター。例えば、`<app-component-name></app-component-name>`。
    - **`templateUrl`** と **`styleUrls`**：それぞれコンポーネントのテンプレートとスタイルファイルのパスを定義します。
3. コンポーネントのデータバインディング

    Angular は複数のデータバインディングの方法を提供しています：

    - **挿入表現（インターポレーション）**：コンポーネントの属性値を表示するために使用します。例：`{{ title }}`。
    - **属性バインディング**：`[]` を使って属性に値をバインドします。例： `<img [src]="imageUrl">`。
    - **イベントバインディング**：`()` を使ってイベントをバインドします。例： `<button (click)="onClick()">Click</button>`。
    - **双方向データバインディング**：`[(ngModel)]` を使ってデータとビューを双方向に結び付けます（`FormsModule` のインポートが必要です）。

### **モジュール（Module）**


モジュールは、アプリケーションのコンポーネント、ディレクティブ、パイプ、サービスを整理・管理するために使用します。各 Angular アプリには少なくとも1つのルートモジュール、`AppModule` があり、`app.module.ts` ファイルで定義します。

1. モジュールの構造

    `app.module.ts` ファイルで、モジュールは `@NgModule` デコレーターを使って定義され、その構造は以下のとおりです：


    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { ComponentNameComponent } from './component-name/component-name.component';
    
    @NgModule({
      declarations: [
        AppComponent,
        ComponentNameComponent   // 声明モジュール内のコンポーネント
      ],
      imports: [
        BrowserModule   // 他のモジュールをインポート
      ],
      providers: [],     // アプリケーションで使用するサービスの提供者を宣言
      bootstrap: [AppComponent]  // アプリの起動時に読み込まれるルートコンポーネントを定義
    })
    export class AppModule { }
    ```

    - **`declarations`**：モジュール内で宣言されたコンポーネント、ディレクティブ、パイプ。モジュールに宣言されているコンポーネントのみが使用できます。
    - **`imports`**：他のモジュールをインポートします。例えば `BrowserModule` はブラウザアプリのコアモジュールです。
    - **`providers`**：アプリで使用されるサービスの提供者を宣言します。
    - **`bootstrap`**：アプリ起動時にロードされるルートコンポーネントを定義します。通常は `AppComponent`。
2. 特性モジュール

    大規模なアプリケーションでは、コードを整理するために複数の機能モジュール（Feature Modules）を作成し、機能ごとに分離や遅延ロードを実現します。


    ```shell
    ng generate module feature-module
    # 或者简写
    ng g m feature-module
    ```


### **コンポーネントとモジュールの関係**

- **モジュールはコンポーネントを整理するために使用します**：Angular では、モジュールはコンポーネントを管理・整理します。各モジュールは複数のコンポーネントを含むことができます。
- **コンポーネントの再利用性**：1つのコンポーネントは複数のモジュールで宣言・使用できますが、まずそのコンポーネントを宣言しているモジュールをインポートする必要があります。
- **ルートモジュールと機能モジュール**：ルートモジュール（例：`AppModule`）はアプリの起動を担当し、機能モジュールはアプリの具体的な機能を整理します。


## データバインディング


### **インターポレーション（Interpolation）**


インターポレーションは **`{{ }}`** 構文を使用してデータをバインドします。HTML 内でコンポーネントの属性値を表示するのに通常使用します。


**例**： コンポーネントクラスに属性 **`title`** を定義し、それをテンプレートで表示します。


```typescript
// コンポーネントの TypeScript ファイル内
export class MyComponent {
  title = 'Hello, Angular!';
}
```


```html
<!-- コンポーネントの HTML テンプレート内 -->
<h1>{{ title }}</h1>
```


ここで **`{{ title }}`** は **`Hello, Angular!`** に置換されます。インターポレーションは通常、テキスト内容の表示に使用されます。


### **属性バインディング（Property Binding）**


属性バインディングは方括弧 **`[]`** 構文を使い、コンポーネントの属性値を HTML 要素の属性にバインドします。例： **`src`**、**`href`**、**`disabled`** など。


**例**： 画像リンクを持っていると仮定し、それを `img` 要素の **`src`** 属性にバインドします。


```typescript
// コンポーネントの TypeScript ファイル内
export class MyComponent {
  imageUrl = 'https://example.com/image.jpg';
}
```


```html
<!-- コンポーネントの HTML テンプレート内 -->
<img [src]="imageUrl" alt="Example Image">
```


ここの **`[src]="imageUrl"`** は、`imageUrl` の値を `img` の `src` 属性にバインドしていることを意味します。


### **イベントバインディング（Event Binding）**


イベントバインディングは丸括弧 **`()`** 構文を使用し、ビューのイベント（例：`click`、`mouseover`）をコンポーネントのメソッドにバインドして、特定のロジックを発火させます。


**例**： ボタンに `click` イベントをバインドして、コンポーネントの `onClick` メソッドを呼び出します。


```typescript
// コンポーネントの TypeScript ファイル内
export class MyComponent {
  onClick() {
    console.log('Button clicked!');
  }
}
```


```html
<!-- コンポーネントの HTML テンプレート内 -->
<button (click)="onClick()">Click Me</button>
```


ここで **`(click)="onClick()"`** は `click` イベントをバインドし、ボタンをクリックすると `onClick` メソッドが実行され、`"Button clicked!"` が出力されます。


### **双方向データバインディング（Two-way Binding）**


双方向データバインディングは **`[(ngModel)]`** 構文を使用し、データとビューを双方向に同期します。ユーザーが入力したデータは自動的にコンポーネントの属性を更新し、属性の変更もビューに自動的に反映されます。双方向バインディングは通常、フォームの入力やユーザー入力のシーンで使用されます。


**例**： 入力フィールドで双方向データバインディングを使用し、`name` 属性を `input` フィールドの値と同期します。`FormsModule` のインポートが必要です。


```typescript
// コンポーネントの TypeScript ファイル内
export class MyComponent {
  name = '';
}
```


```html
<!-- コンポーネントの HTML テンプレート内 -->
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Hello, {{ name }}!</p>
```


ここでは **`[(ngModel)]="name"`** が双方向データバインディングを実現し、入力欄の入力は即座に `name` を更新し、`name` の値はページに即座に表示されます。

> 注意：双方向バインディングを使用するには、アプリのモジュールで `FormsModule` をインポートする必要があります。そうしないとエラーになります。

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  ...
})
export class AppModule { }
```


### **データバインディングの利点**


- **コードの簡素化**：バインディングを使うことで、DOM を手動で更新するコードを減らせます。
- **リアルタイムの同期**：データとビューを同期させ、アプリをより動的にします。
- **保守性の向上**：データとビューを分離することで、アプリの保守・拡張が容易になります。


## 指令（Directives）


ディレクティブは Angular の非常に重要な特性で、テンプレート内で DOM 要素を操作したり、スタイル・構造・振る舞いを制御したりします。ディレクティブは Angular のテンプレートをより動的で柔軟にします。


### ディレクティブのタイプ

Angular には主に3つのディレクティブタイプがあります：

1. **コンポーネントディレクティブ**：コンポーネント自体も一種のディレクティブで、テンプレート・スタイル・ロジックを持ち、ディレクティブの拡張形式です。
2. **構造ディレクティブ（Structural Directives）**：DOM 要素の追加・削除やページ構造の制御に使用します。よく使われるのは `ngIf` と `ngFor`。
3. **属性ディレクティブ（Attribute Directives）**：要素の外観や振る舞いを変更するために使用します。よく使われるのは `ngClass` と `ngStyle`。

### 構造ディレクティブ


構造ディレクティブは DOM 要素の追加、削除、置換を行います。使用時にはディレクティブの前に `*` を付けます。

- `ngIf` は条件に応じて DOM 要素を表示または非表示にします。

    ```html
    <div *ngIf="isVisible">This is visible only if isVisible is true.</div>
    ```


    上の例では、`*ngIf="isVisible"` が `div` の表示を制御します。`isVisible` が `true` の場合のみこの要素がレンダリングされます。

- `ngFor` は配列を反復処理して、一連の DOM 要素を生成します。

    ```html
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    ```


    上の例では、`*ngFor` が `items` 配列を走査し、各要素に対して `<li>` を生成します。

- `ngSwitch` は異なる条件に応じて異なる要素をレンダリングします。通常は複数条件の判定に使用されます。

    ```html
    <div [ngSwitch]="value">
      <p *ngSwitchCase="'one'">Value is one</p>
      <p *ngSwitchCase="'two'">Value is two</p>
      <p *ngSwitchDefault>Value is unknown</p>
    </div>
    ```


    `ngSwitchCase` は特定の値にマッチさせるために使用します。`ngSwitchDefault` はデフォルトのケースを表します。


### 属性ディレクティブ


属性ディレクティブは DOM 要素の外観または振る舞いを変更します。要素を作成または削除するのではなく、既存の要素の属性を変更します。

- `ngClass` は要素の CSS クラスを動的に設定します。

    ```html
    <div [ngClass]="{ 'active': isActive, 'highlight': isHighlighted }">Styled div</div>
    ```


    上の例では、`isActive` と `isHighlighted` の値に基づいて `active` と `highlight` クラスを動的に追加します。

- `ngStyle` は要素のインラインスタイルを動的に設定します。

    ```html
    <div [ngStyle]="{ 'color': textColor, 'font-size': fontSize + 'px' }">Styled div</div>
    ```


    上の例では、`textColor` と `fontSize` によって `div` 要素の色とフォントサイズを動的に制御します。


### 自定义ディレクティブ


Angular が提供する組み込みディレクティブに加え、特定の振る舞いを実装するカスタムディレクティブを作成することもできます。通常、カスタムディレクティブは属性型ディレクティブで、要素の機能を拡張します。

- カスタムディレクティブを作成する

Angular CLI を使用してディレクティブを作成するコマンドは次のとおりです：


```shell
ng generate directive highlight
# 或简写
ng g d highlight
```


このコマンドは `highlight.directive.ts` というディレクティブファイルを生成します。初期内容は次のとおりです：


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


この例では、カスタムの `HighlightDirective` ディレクティブは、マウスを要素上に置くと背景色を黄色に設定し、離れると色を元に戻します。

- **`@Directive`** デコレーター：ディレクティブを定義します。`selector: '[appHighlight]'` は属性型ディレクティブを意味し、使用時には `appHighlight` 属性を要素に追加します。
- **`ElementRef`**：ディレクティブが適用される DOM 要素へアクセスします。
- **`Renderer2`**：DOM スタイルを安全に操作するため、直接 DOM を変更しないようにします。
- **`@HostListener`**：要素のイベントをリスンします。`mouseenter` はマウスが入るとき、`mouseleave` はマウスが出るときです。

- 自定義ディレクティブの使用

テンプレートで `appHighlight` ディレクティブを使用します：


```html
<p appHighlight>Hover over this text to see the highlight effect.</p>
```


`appHighlight` 属性を追加すると、ディレクティブが要素に適用されます。マウスをホバーすると背景色が黄色になり、離れると元に戻ります。


## サービス（Services）と依存性注入（Dependency Injection）


Angular では、**サービス**（Service）はアプリケーション内のロジックとデータをカプセル化して共有するために使用し、**依存性注入**（DI）システムはこれらのサービスの管理と提供を担当します。サービスを使用することで、アプリのビジネスロジックをコンポーネントから分離し、コードの再利用性と保守性を向上させます。DI システムは、サービスをコンポーネントや他のサービスから容易に活用できるようにします。


### サービス


サービスは通常、Angular でクラスとして実装され、特定のコンポーネントに属さないロジックとデータをカプセル化します。データの取得、ビジネスロジックの処理、状態の管理などを含み、サービスは複数のコンポーネント間で共有できます。

1. サービスの作成

Angular CLI を使って高速にサービスを生成します：


```shell
ng generate service my-service
# 或者简写
ng g s my-service
```


生成されるサービスファイルはおおむね以下のとおりです：


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

- **`@Injectable`** デコレーター：別のコンポーネントやサービスに依存として注入できることをマークします。
- **`providedIn: 'root'`**：このサービスがルートインジェクターで提供され、アプリ全体で利用できます。これにより、`providers` に手動登録する必要がなくなります。

1. コンポーネントでのサービスの使用

サービスは通常、依存性注入を介して使用します。コンポーネントのコンストラクターにサービスを注入して、コンポーネント内でサービスのメソッドを呼び出します。

以下は、`MyService` というサービスを作成済みとして、コンポーネントでこのサービスを使用する例です：


```typescript
import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-my-component',
  template: `<p>{{ message }}</p>`
})
export class MyComponent implements OnInit {
  message: string;

  // コンストラクターでサービスを注入
  constructor(private myService: MyService) {}

  ngOnInit(): void {
    this.message = this.myService.getData();
  }
}
```

- コンストラクターインジェクション：コンポーネントのコンストラクターで `private myService: MyService` を定義してサービスを注入します。
- サービスメソッドの呼び出し：`ngOnInit` ライフサイクルフックで `getData()` を呼び出し、戻り値を `message` に代入します。

1. サービスのスコープと提供方法

Angular のサービス提供方法には複数あり、提供方法の違いはサービスのスコープとライフサイクルに影響します：

- ルートレベルの提供方法

`providedIn: 'root'` を用いてルートインジェクターでサービスを提供します。サービスのインスタンスはアプリ全体のライフサイクルでシングルトンになります。この方法は、グローバルに共有されるデータやロジックに通常使用されます。

```typescript
@Injectable({
  providedIn: 'root'
})
export class MyService { }
```

- モジュールレベルの提供方法

サービスを特定のモジュールだけで使用可能にしたい場合、そのモジュールの `providers` 配列にサービスを登録します。これにより、サービスのライフサイクルはモジュールと同じになり、ローカルに共有されるデータやロジックに適しています。

```typescript
import { NgModule } from '@angular/core';
import { MyService } from './my-service.service';

@NgModule({
  providers: [MyService]  // モジュールレベルで提供する
})
export class MyModule { }
```

- コンポーネントレベルの提供方法

サービスのインスタンスを単一のコンポーネントやその子コンポーネントのみで使用したい場合、コンポーネントの `providers` 配列にサービスを登録します。これにより、各コンポーネントのインスタンスが独自のサービスインスタンスを持ち、特定のコンポーネント内でのみ使用されるロジックに適しています。

```typescript
import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-my-component',
  template: `<p>My Component</p>`,
  providers: [MyService]  // コンポーネントレベルでサービスを提供
})
export class MyComponent { }
```


### 依存性注入（Dependency Injection）


依存性注入は、依存関係（例：サービス）をコンポーネントや他のサービスに注入することで、ハードコードされた依存を避ける設計パターンです。Angular の DI システムは依存関係の生成と提供を自動で管理し、アプリの構造を簡素化します。

1. DI システムの動作原理

Angular が特定のクラスが特定の依存を必要とすると検出すると、インジェクターでその依存のインスタンスを探します。インスタンスが存在しない場合、インスタンスを作成してコンポーネントやサービスに返します。

1. カスタムインジェクター

Angular はコンポーネント内でカスタムの注入器をサポートします。これにより、依存の提供方法を制御できます。これは大多数のアプリでは一般的ではありませんが、サービスのスコープを制御したり特殊な依存関係を実装する場合に便利です。


### サービスの実際の適用シーン

- **データ共有**：共有データをサービスに格納して、複数のコンポーネントがデータにアクセス・更新できるようにします。
- **HTTP リクエスト**：`HttpClient` サービスを通じてバックエンド API からデータを取得し、ロジックをサービスにカプセル化して再利用とテストを容易にします。
- **グローバルな状態管理**：サービスでアプリの状態を管理します（例：ユーザー認証情報やテーマ設定）。

### 例：シンプルなデータサービスの作成


以下は、ユーザーデータのセットを管理し、追加・削除・更新・検索機能を提供するシンプルなデータサービス `DataService` を作成する例です。

- サービスの作成

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

- コンポーネントでのサービスの使用

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


この例では、`DataService` はユーザデータの管理ロジックを提供し、`UserListComponent` はサービスからデータを取得してビューに表示し、同時にサービスを通じて新しいユーザーを追加できます。


## ルーティング（Routing）とナビゲーション


Angular のルーティングシステムは、URL を通じてページの異なるビューを構築することを可能にします。ルーティングは、ユーザーのナビゲーションに応じてページ間を切り替え、パラメータの伝送、遅延読み込み、ルートガードなどの高度な機能をサポートします。


### ルーティングとは？


シングルページアプリケーションでは、実際には1つのページしかありませんが、異なる URL を介してアプリの異なる部分にナビゲートできます。Angular のルーティングは URL パスとコンポーネントの対応付けを定義でき、ナビゲーションリンクをクリックすると対応するコンポーネントがロードされ、ページ全体をリフレッシュすることはありません。


### Angular のルーティング設定

1. `RouterModule` のインポート

Angular アプリでルーティングを設定するには、アプリのルートモジュールまたは関連機能モジュールで `RouterModule` をインポートし、ルーティング設定を定義します。

例えば、 standalone モードでは `main.ts` でルーティングを構成します：


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
      { path: '', component: HomeComponent },          // default route
      { path: 'about', component: AboutComponent }     // /about route
    ])
  ]
});
```


この例では、2つのルートを定義しています：

- `''` はルートパス（`/`）で、`HomeComponent` に対応します。
- `'about'` は `/about` パスで、`AboutComponent` に対応します。
1. コンポーネントの作成

関連するコンポーネントがまだない場合は、次のコマンドで生成します：


```shell
ng generate component home --standalone
ng generate component about --standalone
```

1. テンプレートにルーティングリンクを追加

Angular はルーティングリンクを作成するための `routerLink` ディレクティブを提供します。`AppComponent` のテンプレートにナビゲーションリンクを追加できます：


```html
<!-- app.component.html -->
<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet>
```

- **`routerLink`**：ナビゲーションリンクのパスを指定します。例：`routerLink="/"` はルートパスを指します。
- **`<router-outlet></router-outlet>`**：ルートアウトレット。ルーティングされたコンポーネントが表示される場所を指定します。`<router-outlet>` はルーティングシステムのプレースホルダーで、現在の URL に基づいて対応するコンポーネントをここに表示します。
1. ルーティングパラメータの伝達

Angular ルーティングは URL にパラメータを伝え、コンポーネント側で受け取り処理します。例として、ユーザー詳細を表示するルートを定義します：

- パラメータ付きルートの定義

ルート設定で `:id` をプレースホルダーとしてパラメータを定義します：


```typescript
{ path: 'user/:id', component: UserComponent }
```

- テンプレートにリンクを追加

テンプレートで `routerLink` を使ってパラメータを渡すことができます：


```html
<a [routerLink]="['/user', 1]">User 1</a>
<a [routerLink]="['/user', 2]">User 2</a>
```

- コンポーネントでパラメータを取得

`UserComponent` では `ActivatedRoute` を使用してルートパラメータを取得できます：


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

- **`ActivatedRoute`**：Angular のルーティングサービスで、ルート情報を取得します。
- **`paramMap`**：ルートパラメータのキー/値の集合です。`get('id')` で現在のルートの `id` パラメータを取得します。

### 路由守衛（Route Guards）


ルートガードはルートを保護し、ユーザーがアクセス権を持っていることを保証します。よく使われるルートガードには次のものがあります：

- **`CanActivate`**：特定のルートへナビゲートする前にチェックを行い、アクセスを許可するかを決定します。
- **`CanDeactivate`**：ルートを離れるときにチェックを行い、離れることを許可するかを決定します。

例えば、ユーザーがログインしている場合のみ特定のルートにアクセスできるようにするシンプルな `AuthGuard` を作成します。

1. ガードの生成

CLI を使ってガードを生成します：


```shell
ng generate guard auth
```

1. `AuthGuard` のロジックを実装

生成された `auth.guard.ts` ファイルに認証ロジックを実装します：


```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = false; // 実際の認証ロジックに置き換える

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
```

1. 守衛をルートに適用

ルーティング設定で `canActivate` プロパティを用いて守衛を適用します：


```typescript
{ path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }
```


### 懒加载（Lazy Loading）


レイジーロードは、特定のモジュールを必要なときだけ読み込むことで、アプリの初期ロード速度を最適化します。`loadComponent` を使ってコンポーネントのレイジーロードを簡単に実現できます：


```typescript
{ path: 'lazy', loadComponent: () => import('./lazy/lazy.component').then(m => m.LazyComponent) }
```


## **表单（Forms）处理**


Angular は強力なフォーム処理機能を提供し、フォームの作成と検証をサポートします。Angular のフォームには主に2つの方式があります：**テンプレート駆動フォーム**と**反応的フォーム**。この2つの方式にはそれぞれ長所があり、さまざまな場面に適しています。


### **テンプレート駆動フォーム（Template-driven Forms）**


テンプレート駆動フォームは主に HTML テンプレートを通じてフォームの構造と検証ロジックを定義します。簡単なフォームに適しています。データバインディングと検証サポートは Angular の `FormsModule` を使用して提供されます。

- **`FormsModule` のインポート**

まず、モジュールで `FormsModule` をインポートします。プロジェクトがモジュール化されている場合は、`app.module.ts` または対応するモジュールファイルを開いて `FormsModule` を追加します。


```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule  // Import FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- **テンプレート駆動フォームの定義**

テンプレート内でシンプルなフォームを作成し、`ngModel` ディレクティブを使って双方向データバインディングを実現します。`#name="ngModel"` のようにテンプレート変数を作成して、入力の検証状態にアクセスします。


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

- **`[(ngModel)]`**：双方向データバインディング。フォームフィールドとコンポーネントのデータを同期します。
- **`#myForm="ngForm"`**：テンプレート参照変数 `myForm` を作成し、フォームの状態にアクセスできます。
- **`required` および **`email`** 検証：Angular が HTML5 の検証ルールを自動的に提供します。
- **コンポーネントでデータモデルを定義**

`app.component.ts` に `user` データモデルを定義し、フォームとバインドします。


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


### **反応的フォーム（Reactive Forms）**


反応的フォームは、コンポーネントクラス内でフォーム構造と検証ロジックを定義します。より柔軟で、動的な複雑なフォームに適しています。`ReactiveFormsModule` を使ってフォームコントロールと検証を提供します。

- **`ReactiveFormsModule` のインポート**

モジュールで `ReactiveFormsModule` をインポートします。


```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule  // Import ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- **反応的フォームの定義**

`FormBuilder` を用いてフォーム構造と検証ルールを定義します。


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

- **`FormBuilder`**：Angular が提供するサービスで、フォーム構造の作成を簡略化します。
- **`Validators`**：フォームフィールドの検証ルールを設定します。
- **反応的フォームをテンプレートにバインド**

テンプレートでは `[formGroup]` で全体のフォームをバインドし、`formControlName` で各フォームコントロールをバインドします。


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

- **`[formGroup]`**：コンポーネントの `userForm` をテンプレートのフォームにバインドします。
- **`formControlName`**：フォームコントロールを `userForm` の対応するコントロールにバインドします。


### **フォーム検証**


Angular は多数の組み込みバリデータを提供します。例えば、`Validators.required`、`Validators.email` などがあり、カスタム検証器を作成することもできます。

- **カスタム検証器**

コンポーネント内でカスタム検証器を定義し、フォームコントロールに適用します。


```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
```


そのうえで、フォーム作成時にカスタム検証器を適用します：


```typescript
this.userForm = this.fb.group({
  name: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
  email: ['', [Validators.required, Validators.email]]
});
```


## HTTP クライアントと API 通信


モダンな Web アプリケーションでは、バックエンド API との通信は不可欠です。Angular は `HttpClient` モジュールを提供し、バックエンド API との対話を簡素化します。`HttpClient` を使用すると、HTTP リクエストの送信、レスポンスデータの処理、エラーの管理、リクエストとレスポンスの挙動を制御するためのインターセプターの追加が容易になります。


### `HttpClient` の設定


Angular アプリで `HttpClient` を使用するには、モジュールで `HttpClientModule` をインポートする必要があります。

- `HttpClientModule` のインポート

ルートモジュールまたは機能モジュールで `HttpClientModule` をインポートします：


```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule  // Import HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- `HttpClient` でリクエストを送る

`HttpClient` は `get`、`post`、`put`、`delete` など、さまざまな HTTP リクエストを送信するメソッドを提供します。

1. GET リクエストの送信

API からユーザー一覧を取得する例では、`HttpClient.get` を使って GET リクエストを送ります：


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


この例では：

- `this.http.get` が GET リクエストを送信します。
- `subscribe` はレスポンスデータを処理します。受け取る `data` はユーザーリストで、コンポーネントの `users` プロパティに代入されます。

- POST リクエストの送信

サーバーへデータを送信する場合は、`HttpClient.post` を使用して POST リクエストを送ります。


```typescript
addUser(newUser: any) {
  this.http.post('<https://jsonplaceholder.typicode.com/users>', newUser)
    .subscribe(response => {
      console.log('User added:', response);
    });
}
```

ここでの `post` メソッドは POST リクエストを送信し、`newUser` データを API に渡します。`subscribe` の `response` にはサーバーが返した結果が含まれます。


### エラーハンドリング


実際のアプリケーションでは、API リクエストでネットワークタイムアウトやサーバーエラーなどのさまざまなエラーが発生する可能性があります。`catchError` 演算子を使ってエラーを捕捉・処理できます。

- エラーハンドリングの例

リクエストのエラーを `catchError` 演算子で処理し、`handleError` メソッドを呼び出します：


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


ここで：

- `catchError` 演算子はエラーを捕捉して `handleError` メソッドを呼び出します。
- `handleError` メソッドはエラーのタイプに基づいてエラーメッセージを生成し、`throwError` で返します。


### HTTP インターセプター（Interceptors）


HTTP インターセプターは、リクエストやレスポンスを処理する前にロジックを挿入することを可能にします。例えば認証トークンを追加したり、ログを記録したりします。

- インターセプターの作成

Angular CLI を使ってインターセプターを作成します：


```shell
ng generate interceptor auth
```


インターセプターのファイルは次のようになることが多いです：


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

- `HttpInterceptor` インターフェースの `intercept` メソッドはリクエストを送信する前に実行されます。
- `req.clone` はリクエストオブジェクトをクローンして認証トークンを追加します。

- 守衛の登録

モジュールでインターセプターを `HTTP_INTERCEPTORS` のマルチプロバイダとして登録します：


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


### RxJS を用いた非同期処理


`HttpClient` のメソッドは Observable を返します。データを購読するには `subscribe` を使用します。非同期データフローを処理するには、RxJS の演算子（例：`map`、`switchMap`）を使用できます。

- RxJS 演算子の例

リクエスト送信後にデータを処理したい場合、`map` 演算子を使用します：


```typescript
import { map } from 'rxjs/operators';

this.http.get<any[]>('<https://api.example.com/users>')
  .pipe(
    map(users => users.map(user => user.name))
  )
  .subscribe(names => console.log(names));
```

### RxJS とリアクティブプログラミング


RxJS は Angular の核心ライブラリのひとつで、非同期イベントとデータフローを処理します。

RxJS の強力さは、豊富な演算子を提供し、データをストリームとして扱い、データの変換・フィルタリング・組み合わせを行って、データの変化に対して反応することです。Angular では、HTTP リクエスト、フォーム処理、ルーティング、コンポーネント間通信などの場面で広く使用されています。

**RxJS（Reactive Extensions for JavaScript）** は、非同期データフローを扱うライブラリで、Observable、Observer、Operators などの機能を提供します。リアクティブプログラミングの核心は、データをストリームとして扱い、一連の演算子を適用してデータを組み合わせ、フィルタリング、変換して、データの変化に反応することです。


### Observable（可観測オブジェクト）

- **Observable** はデータフローの核心概念です。非同期データソースを表し、HTTP リクエスト、イベント、タイマーなどになることがあります。
- データフローを購読するには `Observable.subscribe()` を使用します。データが到着すると、オブザーバーに通知されます。

---


### よく使う RxJS 演算子


RxJS にはデータフローを処理する多くの演算子が用意されています。以下はよく使われる演算子とその適用例です：

1. **`map`** - データ変換

`map` 演算子は、Observable データフローの各データ項目を新しい値に変換します。


**例**：取得したユーザー配列の各ユーザーオブジェクトをユーザー名にマッピングします。


```typescript
import { map } from 'rxjs/operators';

this.http.get<any[]>('<https://api.example.com/users>')
  .pipe(
    map(users => users.map(user => user.name))
  )
  .subscribe(names => console.log(names));
```

1. **`filter`** - データのフィルタリング

`filter` はデータフローの条件に合わないデータ項目をフィルタリングします。


**例**：`isActive` が `true` のユーザーをフィルタリングします。


```typescript
import { filter } from 'rxjs/operators';

this.http.get<any[]>('<https://api.example.com/users>')
  .pipe(
    map(users => users.filter(user => user.isActive))
  )
  .subscribe(activeUsers => console.log(activeUsers));
```

1. **`switchMap`** - 古い購読をキャンセルして最新データを処理

`switchMap` は新しいデータを受け取るたびに、前の未完了の Observable をキャンセルします。ネストしたリクエストや連続イベント（例：フォーム入力、ルートパラメータの変化）を処理する際に便利です。


**例**：ユーザーの入力キーワードに合わせて自動的に検索し、前回のリクエストをキャンセルします。


```typescript
import { switchMap, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

searchControl = new FormControl();

this.searchControl.valueChanges
  .pipe(
    debounceTime(300),  // 防抖。過度なリクエストを避ける
    switchMap(query => this.http.get(`https://api.example.com/search?q=${query}`))
  )
  .subscribe(results => console.log(results));
```


1. **`mergeMap`** - 並列処理

`mergeMap` は各データ項目を新しい Observable にマッピングし、各 Observable を並列に処理します。


**例**：複数のユーザーの詳細情報を並列で取得します。


```typescript
import { mergeMap } from 'rxjs/operators';

const userIds = [1, 2, 3];
from(userIds)
  .pipe(
    mergeMap(id => this.http.get(`https://api.example.com/users/${id}`))
  )
  .subscribe(user => console.log(user));
```

1. **`catchError`** - エラーハンドリング

`catchError` はデータフローのエラーを捕捉し、適切に処理します。


**例**：リクエストが失敗した場合、デフォルト値を返します。


```typescript
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

this.http.get('<https://api.example.com/data>')
  .pipe(
    catchError(error => {
      console.error('Error occurred:', error);
      return of([]);  // デフォルト値として空配列を返す
    })
  )
  .subscribe(data => console.log(data));
```


---


### RxJS のフロー制御


RxJS には `debounceTime` や `distinctUntilChanged` などのフロー制御演算子が用意されており、ユーザー入力やクリックなどのイベントフローを処理するのに役立ちます。

1. **`debounceTime`** - デバウンス

`debounceTime` はデータの流量を制御します。一定時間内に新しいデータが到着しない場合にのみデータを送信します。通常、連続した高速な入力を処理する際に使用します。


**例**：ユーザーが入力を停止してから 500 ミリ秒後に検索リクエストを実行します。


```typescript
searchControl.valueChanges
  .pipe(
    debounceTime(500)
  )
  .subscribe(value => console.log('Search:', value));
```

1. **`distinctUntilChanged`** - 重複排除

`distinctUntilChanged` は前回と同じデータ項目を無視し、重複処理を防ぎます。


**例**：ユーザーが同じ内容を入力した場合、リクエストを再送しません。


```typescript
searchControl.valueChanges
  .pipe(
    debounceTime(500),
    distinctUntilChanged()
  )
  .subscribe(value => console.log('Unique search:', value));
```


### RxJS を Angular で活用するシーン

- **HTTP リクエスト**：`HttpClient` の戻り値に RxJS 演算子を適用して、データ取得とエラー処理を容易にします。
- **ルートパラメータの変化**：ルートパラメータの変化を監視し、依存するリクエストを実行します。
- **フォーム入力の処理**：入力を処理し、デバウンス・重複排除などを行います。
- **コンポーネント間通信**：Subject を介してコンポーネント間のイベントやデータ伝達を実現します。

### 例：RxJS ベースのリアルタイム検索

以下は、`switchMap`、`debounceTime`、`distinctUntilChanged` を使用してリアルタイム検索機能を構築する完全な例です：


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


この例では：

- `debounceTime(300)` はデバウンスで、ユーザーが入力を停止してから 300 ミリ秒後にリクエストを送信します。
- `distinctUntilChanged()` は重複するリクエストを避けます。
- `switchMap` は新しい入力があるたびに以前のリクエストをキャンセルし、頻繁なネットワークリクエストのパフォーマンスコストを回避します。

## 状態管理


複雑な Angular アプリケーションでは、状態管理は重要なトピックです。良好な状態管理は、異なるコンポーネントやモジュール間でデータを共有し、状態を同期し、データフローを簡素化し、アプリの保守性を向上させます。Angular は状態管理のさまざまな方法を提供しており、最も一般的なのはサービスを介してデータを共有する方法と、`@ngrx/store` などのライブラリを用いた集中管理です。

---


**状態管理** は、アプリケーション内で状態（データ）を管理・共有する手法で、データフローの制御や UI の更新をより良くします。アプリが複雑になり、複数のインタラクティブなページ、モジュール、ユーザー操作を含む場合、異なるコンポーネントが同じデータ（例：ユーザー情報、ショッピングカートのデータなど）へのアクセス・更新を必要とすることがあり、状態管理はデータの一貫性を保ち、データ同期の複雑さを減らすのに役立ちます。


### Angular での状態管理の方法

1. サービスを用いた状態共有

Angular のサービスはアプリケーション全体でシングルトンとして動作します。サービスを通じて複数のコンポーネント間で状態を共有でき、複雑な状態ロジックを必要としない小規模なアプリに適しています。

- 例：シンプルな `UserService` を作成してユーザー情報を管理する

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject<User | null>(null); // ユーザー情報を格納
  user$ = this.userSource.asObservable(); // 公開しているユーザー情報を Observable として提供

  setUser(user: User) {
    this.userSource.next(user); // ユーザー情報を更新
  }

  clearUser() {
    this.userSource.next(null); // ユーザー情報をクリア
  }
}
```


コンポーネント側では、`UserService` を介してユーザーの状態へアクセス・更新します：


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


別のコンポーネントでユーザー情報を更新する例：

```typescript
@Component({
  selector: 'app-login',
  template: `<button (click)="login()">Login</button>`
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  login() {
    const user = { name: 'Alice', email: 'alice@example.com' };
    this.userService.setUser(user); // ユーザー情報を更新
  }
}
```

2. `@ngrx/store` を用いた集中管理

大規模なアプリケーションでは、`@ngrx/store` ライブラリを用いて集中管理を実現します。`@ngrx/store` は Redux スタイルを実装しており、アプリの全状態を1つのデータソースで集中管理・同期・更新します。

- `@ngrx/store` のコア概念
    - **Store**：アプリのグローバル状態を格納します。すべてのコンポーネントは Store からデータを取得・更新できます。
    - **Actions**：状態変更をトリガーするイベントで、どのような状態更新を行うかを記述します。
    - **Reducers**：`Actions` を処理するロジックで、異なる `Actions` に基づいて Store の状態を更新します。
    - **Selectors**：Store から必要な状態データを取得します。
- `@ngrx/store` のインストール

まず、Angular CLI を使って `@ngrx/store` をインストールします：


```shell
ng add @ngrx/store
```

- 状態管理のサンプル作成

カウンター状態を管理するサンプルを作成します。`increment` と `decrement` の操作を含みます。

1. Action の定義

`counter.actions.ts` でカウンターの Action を定義します：


```typescript
import { createAction } from '@ngrx/store';
        
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
```

2. Reducer の定義

`counter.reducer.ts` でカウンターの Reducer を定義します：


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

3. Reducer の登録

アプリの `app.module.ts` で Reducer を Store に登録します：


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

4. コンポーネントで Store を使って状態を管理

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
  count$ = this.store.select('count'); // count 状態を取得
        
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


この例では：

- **Actions** は増減とリセットの操作を定義します。
- **Reducer** は異なる `Action` に基づいて状態を更新します。
- **Store** は `count` 状態を提供します。コンポーネントは Store から状態データを購読し、対応する操作を実行できます。


---


### 状態管理のベストプラクティス

1. アプリケーションの状態を集中管理します。共有状態をサービスまたは Store に格納し、異なるコンポーネント間での状態の重複保存を避けます。
2. 直接状態を変更しないでください。Action と Reducer を介して状態を更新し、状態変化が追跡可能であることを保証します。
3. UI とビジネスロジックを分離します。コンポーネントは UI の表示を担当し、サービスまたは Store はビジネスロジックとデータ状態を管理します。
4. Selectors を使用します。Store からデータを取得する際のアクセスをシンプルかつ一貫性のあるものにします。

---


## 最適化とパフォーマンス調整


Angular アプリの構築とデプロイ時には、パフォーマンスの最適化が、アプリの高速な読み込みとレスポンスを保証する鍵です。Angular は遅延ロード、AOT（Ahead-Of-Time コンパイル）、Tree Shaking、変更検出戦略など、さまざまな最適化技術を提供します。本節ではこれらの最適化テクニックを紹介し、アプリのパフォーマンス向上を支援します。


---


### レイジーロード（Lazy Loading）


レイジーロードは、必要に応じてモジュールを読み込む技術です。ユーザーが必要とする時のみ特定のモジュールをロードすることで、アプリの初期ロード時間を短縮し、起動速度を向上させます。

実装例

`AdminModule` があると仮定して、ルーティングでレイジーロードを設定して必要に応じて読み込むようにします。

**例**：

```typescript
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];
```


ここでは、ユーザーが `/admin` にナビゲートした場合にのみ `AdminModule` が読み込まれます。


---


### AOT コンパイル（Ahead-Of-Time Compilation）


AOT コンパイルは、Angular のテンプレートをビルド時に事前に JavaScript にコンパイルします。これにより、ブラウザ側の作業量を削減し、パッケージサイズを小さくし、実行速度を向上させます。

AOT コンパイルの利用

Angular CLI でビルドする際、AOT はデフォルトで有効になっており、`ng build --prod` で本番環境バージョンをビルドすると、AOT やその他の最適化が有効になります。

```shell
ng build --prod
```

AOT コンパイルの利点：

- **実行速度の向上**：ブラウザ側のコンパイル時間を短縮します。
- **より小さなパッケージサイズ**：コンパイル済みのテンプレートコードのみをパッケージします。
- **テンプレートエラーの検出**：ビルド時にテンプレート構文エラーを検出し、コードの安全性を高めます。

---


### Tree Shaking


Tree Shaking は、ビルド時に未使用コードを削除する技術です。Angular は Webpack を利用してビルドを行い、未使用のモジュールやコードを自動的に削除して、アプリのパッケージサイズを小さくします。


Tree Shaking の最適化方法

1. **ES6 モジュールの使用**：コードが ES6 のモジュール構文（`import` と `export`）を使用していることを確認します。
2. **不要な依存関係の削除**：必要なライブラリ・モジュールのみをインポート・使用します。
3. **RxJS のインポートの最適化**：RxJS は必要な部分だけをインポートします。例えば、`import { map } from 'rxjs/operators'` のように、`rxjs` 全体をインポートするのではなく、必要な部分だけをインポートします。


---


### 変更検出戦略（Change Detection Strategy）


Angular のデフォルトの変更検出機構はすべてのコンポーネントを検出します。これがパフォーマンスのオーバーヘッドになることがあります。`OnPush` 戦略を使用して変更検出を最適化し、入力データが変わるか、コンポーネント内のイベントが発生したときにのみ検出を行うようにします。


`OnPush` 戦略を使用

コンポーネントに `changeDetection: ChangeDetectionStrategy.OnPush` を設定して `OnPush` 戦略を有効にします。


```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush  // OnPush 戦略を有効化
})
export class MyComponent {}
```


`OnPush` 戦略の利点：

- **不要な変更検出の削減**：入力データやイベントが発生したときのみ再レンダリングされます。
- **パフォーマンスの向上**：純粋な表示専用コンポーネントに適しています。


---


### Service Worker を使ったキャッシュ


Angular はアプリを **Progressive Web App（PWA）** に設定することをサポートしており、Service Worker を利用してリソースをキャッシュし、オフライン対応とパフォーマンスを向上させます。


#### Service Worker のサポートを追加


Angular CLI を使って Service Worker を追加します：


```shell
ng add @angular/pwa
```


これにより Service Worker の設定ファイルが自動生成され、アプリに登録されます。本番環境では、Service Worker が静的リソースを自動的にキャッシュし、ページの読み込みを高速化します。

- PWA 機能の検証

1. アプリを開いた状態で、ブラウザの開発者ツールを開き、Service Worker が正しく登録されているかを確認します。
2. ネットワークをオフにしてページをリフレッシュすると、オフラインキャッシュからコンテンツが読み込まれることを確認します。

---


### 画像と静的リソースの最適化


Web アプリでは、画像や静的リソースが大きな割合を占めることが多いため、圧縮や遅延読み込みなどで最適化します。

- 画像の圧縮と遅延読み込み

- **圧縮フォーマットの使用**：WebP など、ファイルサイズの小さい画像フォーマットをなるべく使用します。
- **画像の遅延読み込み**：`loading="lazy"` 属性を使って遅延読み込みを実装できます。画像がビューPortに入るタイミングで読み込まれます。

```html
<img src="image.webp" loading="lazy" alt="Example Image">
```


---


### Angular の内蔵最適化ツールの活用


Angular CLI は、アプリのパッケージサイズとパフォーマンスを向上させる多くの内蔵ツールを提供します。以下の方法でビルドをさらに最適化できます。


`ng build --prod` のデフォルト最適化


`ng build --prod` を実行すると、Angular CLI は複数の最適化を自動的に適用します。これには以下が含まれます：

- **AOT コンパイル**：テンプレートを事前にコンパイル
- **Tree Shaking**：未使用コードを削除
- **Minification**：コードを圧縮
- **Bundle Splitting**：コードを分割して、単一のパッケージサイズを削減

---


### Angular パフォーマンス向上のベストプラクティス

1. モジュールを必要に応じてロードする：レイジーロードを活用して、特定のモジュールを遅延ロードします。これにより、メインパッケージのサイズを削減します。
2. 純粋な表示型コンポーネントを使用する：`OnPush` 戦略を適用して、変更検出の発生回数を削減します。表示専用のコンポーネントに適しています。
3. テンプレートでの複雑な計算を避ける：コンポーネントクラスで計算を行い、結果をテンプレートに渡します。
4. 3rd パーティのライブラリ導入を最適化：RxJS 演算子など、必要な分だけをインポートします。
5. Web Worker の活用：計算集約タスクを Web Worker に任せ、メインスレッドのブロックを回避します。

---


## PWA と国際化


この節では、高度な2つのテーマ、PWA（Progressive Web App）と i18n（国際化）について紹介します。PWA は Angular アプリにオフライン対応とネイティブアプリの体験を提供し、国際化は多言語対応を可能にします。


---


### 渐进式 Web 应用（PWA）


**渐进式 Web 应用（PWA）** は、現代の Web 技術を利用して Web アプリをネイティブアプリのようにスムーズに実行させ、オフライン機能を提供するアプリケーションです。Angular は組み込みの PWA サポートを提供しており、オフライン対応、プッシュ通知などの機能を持つ Web アプリの構築を容易にします。

- Angular アプリを PWA に変換

Angular CLI は、既存のプロジェクトを PWA アプリへ変換する簡単なコマンドを提供します。

1. PWA サポートを追加

プロジェクトディレクトリで以下のコマンドを実行します：


```shell
ng add @angular/pwa
```


このコマンドを実行すると、Service Worker の設定ファイル（`ngsw-config.json`）とアプリのアイコン（`manifest.webmanifest` ファイル）が自動生成されます。これらのファイルはアプリのオフラインキャッシュやアイコンなどの PWA 設定を構成します。

2. `ngsw-config.json` の設定

`ngsw-config.json` は Service Worker の設定ファイルで、どのファイルをキャッシュするかを定義します。デフォルトでは、Angular はアプリの主要リソース（JavaScript、CSS、HTML など）をキャッシュします。必要に応じてキャッシュ戦略をカスタマイズできます。

3. 本番版のビルド

PWA を利用する場合、アプリは本番モードで動作する必要があります：


```shell
ng build --prod
```

4. デプロイ

アプリをサーバーにデプロイすると、ブラウザが Service Worker を自動検出・登録し、オフライン機能を有効化します。

- PWA 機能の検証
1. アプリを開いたときに、ブラウザの開発者ツールで Service Worker が正常に登録されているかを確認します。
2. ネットワークをオフにしてページをリフレッシュしてみて、オフラインキャッシュから内容がロードされることを確認します。

---


### 国際化


**国際化（i18n）** は、アプリ内のテキスト、日付フォーマット、数字フォーマットなどを異なる言語・地域の形式に変換するプロセスで、アプリが異なる言語と文化背景に対応できるようにします。Angular は組み込みの i18n サポートを提供しており、多言語対応を簡単に追加できます。

- Angular の i18n 機能を使う

Angular の i18n 機能は、アプリのテキストを複数言語に翻訳するのに役立ちます。以下は設定手順です。

1. テキストのマーク付け

テンプレート内で翻訳するテキストに `i18n` 属性を付与します。


```html
<h1 i18n="@@welcome">Welcome to our app!</h1>
<p i18n="@@intro">This is an example of internationalized content.</p>
```


ここで、`i18n="@@key"` はテキスト内容に一意の翻訳キーを付与し、後で検索・翻訳するのに便利です。

1. 翻訳ファイルの抽出

Angular CLI を使って翻訳ファイルを抽出します。以下のコマンドを実行すると、`src/locale` ディレクトリに `messages.xlf` ファイルが生成されます：


```shell
ng extract-i18n
```


生成された `messages.xlf` は XML ファイルで、アプリ内のすべてのマーク済みテキストの翻訳内容を含みます。

1. 翻訳内容

`messages.xlf` ファイルには、各言語の翻訳ファイルを作成します。翻訳内容を充填し、ファイルを保存します。例えば、フランス語の翻訳ファイルとして `messages.fr.xlf` を作成します。


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

1. 多言語コンパイルの設定

`angular.json` ファイルに多言語設定を追加します。例：


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

1. 多言語バージョンのビルド

アプリをビルドする際、言語ごとに別々のバージョンを生成します：


```shell
ng build --prod --localize
```


これにより、各言語に対応するバージョンが自動的に生成されます（例：`dist/your-app-name/fr` ディレクトリにフランス語版のアプリが生成されます）。

- 動的な言語切替（任意）

実行時に言語を動的に切り替えたい場合は、第三者ライブラリ（例：`ngx-translate`）を使用して、より柔軟な国際化サポートを実現できます。
