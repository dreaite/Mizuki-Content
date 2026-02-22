---
title: 'angular初步使用'
published: 2024-11-04
updated: 2024-11-04
description: 'Angular初步使用指南包括项目创建、Angular CLI命令、组件与模块的结构、数据绑定、指令、服务与依赖注入、路由与导航、表单处理、HTTP客户端、RxJS、状态管理、性能优化、PWA和国际化等内容，提供了详细的命令示例和代码结构，帮助开发者快速上手Angular开发。'
permalink: 'angular-usage-tips.en'
image: 'https://r2.dreaife.tokyo/notion/covers/1345465cca1780ff89b2c4ed749863f6/IMG_1381.jpg'
tags: ['angular']
category: 'FRONTEND'
draft: false
lang: 'en'
---

## Creating a Project

```shell
npm install -g @angular/cli
ng new my-angular-project
cd my-angular-project
ng serve
ng serve --port 8081

# access in localhost:4200
```

## Angular CLI

### Generating files

The Angular CLI provides quick commands to generate various files, keeping the project structure consistent. Common generation commands include:

- **Generate a component**:

    ```shell
    ng generate component component-name
    # or shorthand
    ng g c component-name
    ```

    This will create a component containing HTML, CSS, TypeScript, and test files.

- **Generate a service**:

    ```shell
    ng generate service service-name
    # shorthand
    ng g s service-name
    ```

    The generated service file by default includes an injector and can be easily used by components.

- **Generate a module**:

    ```shell
    ng generate module module-name
    # shorthand
    ng g m module-name
    ```

    The generated module helps you divide code logic by feature modules, facilitating code management and lazy loading.

### **Build the Project**

Use the `ng build` command to build the project:

```shell
ng build
```

The built files are stored in the `dist` directory. To publish to production, you can use the following command:

```shell
ng build --prod
```

- The `--prod` option enables production optimizations, such as code minification, obfuscation, and removal of debugging information.

### **Testing**

The Angular CLI supports unit tests and end-to-end tests:

- **Unit tests**: Run unit tests with the `ng test` command, which uses Karma and Jasmine by default.

    ```shell
    ng test
    ```

    This will open the test runner in a browser and update results in real time.

- **End-to-end tests**: Run end-to-end tests with the `ng e2e` command, which uses Protractor by default.

    ```shell
    ng e2e
    ```

    End-to-end tests simulate user behavior to ensure the application's overall functionality.

### **Generating other structures like services, pipes, directives, etc.**

Besides components and modules, the CLI also supports generating other Angular structures:

- **Generate a directive**：

    ```shell
    ng generate directive directive-name
    # shorthand
    ng g d directive-name
    ```

- **Generate a pipe**：

    ```shell
    ng generate pipe pipe-name
    # shorthand
    ng g p pipe-name
    ```

### **Configuration and Optimization**

- **Environment configuration**

Angular supports configuration files for different environments, by default including `environment.ts` (development) and `environment.prod.ts` (production). You can define more environment configurations in the `angular.json` file and choose different environments at build time:

```shell
ng build --configuration production
```

- **Debugging and monitoring**

When using `ng serve`, the Angular CLI will watch for file changes and automatically rebuild the app. You can use the `--source-map` option to generate debugging information for browser debugging:

```shell
ng serve --source-map
```

- **Preloading and lazy-loading modules**

In large applications, preloading and lazy-loading modules can improve performance. The Angular CLI natively supports lazy loading, helping you load modules on demand and reduce initial load time.

### **Other Useful CLI Commands**

- **Update Angular project or dependencies**：

    ```shell
    ng update
    ```

    This command will check and update Angular and related dependencies.

- **Analyze build bundles**: Build the app with the `--stats-json` option to generate analysis files for inspecting and optimizing bundle contents.

    ```shell
    ng build --prod --stats-json
    ```

- **Add third-party libraries or tools**：
Using the `ng add` command, you can quickly add third-party libraries and plugins. For example, add Angular Material:

    ```shell
    ng add @angular/material
    ```

### **angular.json Configuration File**

`angular.json` is the global configuration file for the Angular project, containing all configuration information. Here you can adjust the build output path, environment configurations, the order in which styles and scripts are included, and more.

## Basic Structure of an Angular Project

### Project Directory Structure

When you create a new Angular project with `ng new`, the project structure will look like this:

```perl
my-angular-app/
├── e2e/                    # End-to-end test directory
├── node_modules/           # Project dependencies directory
├── src/                    # Application source code directory
│   ├── app/                # Core application directory
│   │   ├── app.component.ts # Root component logic file
│   │   ├── app.component.html # Root component template
│   │   ├── app.component.css # Root component styles
│   │   └── app.module.ts   # Root module file
│   ├── assets/             # Static resources directory
│   ├── environments/       # Environment configuration directory
│   ├── index.html          # Main HTML file
│   ├── main.ts             # App entry point
│   ├── polyfills.ts        # Browser compatibility code
│   ├── styles.css          # Global styles file
│   └── test.ts             # Unit test entry
├── angular.json            # Angular project configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

### Directory and File Details

1. **`src/` Directory**

`src/` is the main directory that holds the application's source code; all core code for the Angular app resides here.

- **`app/` Directory**: This is the primary directory of the application, containing the root module and root component. As the project grows, you will create more components, services, modules, etc.  
  - **`app.component.ts`**: Defines the root component's logic and acts as the starting point of the application.  
  - **`app.component.html`**: The root component's template file for defining the HTML structure of the root component.  
  - **`app.component.css`**: The root component's style file.  
  - **`app.module.ts`**: The root module file loaded when the application starts. Each Angular app has at least one root module.  

- **`assets/` Directory**: Stores static resources (like images, fonts, etc.). They are copied to the build directory during the build and can be accessed via relative paths.

- **`environments/` Directory**: Contains environment-specific configurations, such as development and production. By default, it includes `environment.ts` (development) and `environment.prod.ts` (production). You can load different configurations based on environment conditions.

- **`index.html`**: The app's main HTML file. It is the entry point for the page, and Angular renders all components into this page.

- **`main.ts`**: The app's main entry file. Angular starts execution from here. `main.ts` bootstraps the root module `AppModule` and starts the Angular application.

- **`polyfills.ts`**: Used to load compatibility code for different browsers to ensure the app runs consistently across browsers.

- **`styles.css`**: Global styles file where you can define styles that apply to the entire application.

- **`test.ts`**: Test entry file used to configure and initialize unit tests.

2. **`e2e/` Directory**

The `e2e/` directory is used to store end-to-end test code. It defaults to the Protractor framework to run those tests, simulating user behavior and testing the app's overall functionality.

3. **Other root-level files**

- **`angular.json`**: The Angular project's configuration file, including configurations for building and the development server. You can adjust the output path, environment configurations, the order of including styles and scripts, and more.

- **`package.json`**: Node.js project's configuration file, including dependencies and scripts. All dependencies and CLI commands are defined and managed here.

- **`tsconfig.json`**: TypeScript configuration file, defining rules for compiling TypeScript code.

- **`README.md`**: Project documentation, where you can include the project description, installation steps, and usage.

4. **`node_modules/` Directory**

`node_modules/` holds the project dependencies installed by npm. All Angular, TypeScript, compiler, and related libraries live here.

## Components and Modules

In Angular, **components** and **modules** are the core building blocks of an application. Components are responsible for building parts of the UI, while modules help organize and manage these components.

### **Component**

A component is the fundamental building block of an Angular application. A component typically consists of three parts:

- **Template**: Defines the HTML structure of the component.
- **Styles**: Defines the CSS styles for the component.
- **Class**: Defines the component's behavior and data.

1. Creating a component

The Angular CLI provides commands to generate components:

```shell
ng generate component component-name
# or shorthand
ng g c component-name
```

This command will create a new component directory under the `app` directory, containing the following files:

- `component-name.component.ts` — the component's logic file, containing the component class and decorator.
- `component-name.component.html` — the component's template file.
- `component-name.component.css` — the component's style file.
- `component-name.component.spec.ts` — the component's test file.

2. Structure of a component

In the `component-name.component.ts` file, the component is defined using the `@Component` decorator, with the structure as follows:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-name',      // component selector, used to reference the component in templates
  templateUrl: './component-name.component.html',  // component template file
  styleUrls: ['./component-name.component.css']    // component style file
})
export class ComponentNameComponent {
  title = 'Hello, Angular'; // component properties and methods
}
```

- **`selector`**: The component's selector, used to reference the component in other templates. For example, `<app-component-name></app-component-name>`.
- **`templateUrl`** and **`styleUrls`**: Paths to the component's template and style files, respectively.

3. Data binding in a component

Angular provides several data binding methods:

- **Interpolation**: Used to display the value of a component property, e.g. `{{ title }}`.
- **Property binding**: Bind a property value to an HTML element attribute using `[]`, e.g. `<img [src]="imageUrl">`.
- **Event binding**: Bind events in the view to component methods using `()`, e.g. `<button (click)="onClick()">Click</button>`.
- **Two-way data binding**: Use `[(ngModel)]` to synchronize data between the form and the view (requires importing `FormsModule`).

### **Module**

Modules are used to organize and manage an application's components, directives, pipes, and services. Every Angular app has at least one root module, defined in `AppModule` in `app.module.ts`.

1. Module structure

In the `app.module.ts` file, the module is defined with the `@NgModule` decorator, as follows:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent   // declare components in the module
  ],
  imports: [
    BrowserModule   // import other modules
  ],
  providers: [],     // declare service providers
  bootstrap: [AppComponent]  // root component to bootstrap
})
export class AppModule { }
```

- **`declarations`**: The components, directives, and pipes declared in the module. Only components declared in the module can be used.
- **`imports`**: Import other modules, e.g., `BrowserModule` is the core module for browser apps.
- **`providers`**: Declare the services to be provided for the application.
- **`bootstrap`**: The root component to load when the application starts; typically `AppComponent`.

2. Feature modules

In larger applications, you can create multiple feature modules to organize code, making it easier to separate concerns and enable lazy loading.

```shell
ng generate module feature-module
# or shorthand
ng g m feature-module
```

### **Components and Modules Relationships**

- **Modules organize components**: In Angular, modules manage and organize components; a module can contain multiple components.
- **Component reusability**: A component can be declared and used in multiple modules but must first import the module that contains the component.
- **Root module and feature modules**: The root module (e.g., `AppModule`) is responsible for bootstrapping the application, while feature modules organize specific features.

## Data Binding

### **Interpolation**

Data binding uses the **`{{ }}`** syntax to bind data, typically used to display component property values in HTML.

Example: Define a property **`title`** in the component class, then display it in the template using interpolation.

```typescript
// In the component's TypeScript file
export class MyComponent {
  title = 'Hello, Angular!';
}
```

```html
<!-- In the component's HTML template -->
<h1>{{ title }}</h1>
```

Here, **`{{ title }}`** will be replaced with **`Hello, Angular!`**. Interpolation is usually used to display text content.

### **Property Binding**

Property binding uses square brackets **`[]`** to bind a component property’s value to an HTML element attribute, such as **`src`**, **`href`**, **`disabled`**, etc.

Example: Suppose we have an image URL and bind it to the `src` attribute of an `img` element.

```typescript
// In the component's TypeScript file
export class MyComponent {
  imageUrl = 'https://example.com/image.jpg';
}
```

```html
<!-- In the component's HTML template -->
<img [src]="imageUrl" alt="Example Image">
```

Here, **`[src]="imageUrl"`** binds the value of **`imageUrl`** to the `src` attribute of the `img` element.

### **Event Binding**

Event binding uses parentheses **`()`** to bind events in the view (such as **`click`**, **`mouseover`**) to methods in the component, triggering specific logic.

Example: We can bind a **`click`** event to trigger the component’s **`onClick`** method on a button.

```typescript
// In the component's TypeScript file
export class MyComponent {
  onClick() {
    console.log('Button clicked!');
  }
}
```

```html
<!-- In the component's HTML template -->
<button (click)="onClick()">Click Me</button>
```

Here, **`(click)="onClick()"`** binds the `click` event, and clicking the button will execute the `onClick` method and log `"Button clicked!"`.

### **Two-way Data Binding**

Two-way data binding uses the **`[(ngModel)]`** syntax to synchronize data in both directions. It allows user input to automatically update the component property, and changes to the component property are automatically reflected in the view. Two-way binding is commonly used with form inputs and user input scenarios.

Example: Use two-way data binding in an input field, binding the **`name`** property to the value of the **`input`** element. Requires importing **`FormsModule`**.

```typescript
// In the component's TypeScript file
export class MyComponent {
  name = '';
}
```

```html
<!-- In the component's HTML template -->
<input [(ngModel)]="name" placeholder="Enter your name">
<p>Hello, {{ name }}!</p>
```

Here, **`[(ngModel)]="name"`** implements two-way data binding. User input in the field updates the **`name`** property, and the value of **`name`** is immediately displayed on the page.

> Note: Using two-way binding requires importing `FormsModule` in the application module, otherwise an error will occur.

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule,
  ...
  ]
})
export class AppModule { }
```

### **Benefits of Data Binding**

- Reduces manual DOM updates by binding data
- Real-time synchronization between data and view
- Improves maintainability by separating data from the presentation

## Directives

Directives are a very important feature in Angular, allowing us to manipulate DOM elements in templates, control styling, structure, and behavior. Directives make Angular templates more dynamic and flexible.

### Types of Directives

There are three main directive types in Angular:

1. **Component directives**: Components are essentially a specialized form of directives with templates and styles.
2. **Structural Directives**: Used to add or remove DOM elements or change the layout. Common ones include `ngIf` and `ngFor`.
3. **Attribute Directives**: Used to change the appearance or behavior of elements without changing their structure, such as `ngClass` and `ngStyle`.

### Structural Directives

Structural directives add, remove, or replace DOM elements. They require a leading `*` when used.

- `ngIf` shows or hides a DOM element based on a condition.

    ```html
    <div *ngIf="isVisible">This is visible only if isVisible is true.</div>
    ```

- `ngFor` iterates over an array to render a collection of DOM elements.

    ```html
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    ```

- `ngSwitch` can render different elements based on different conditions, typically for multiple-case logic.

    ```html
    <div [ngSwitch]="value">
      <p *ngSwitchCase="'one'">Value is one</p>
      <p *ngSwitchCase="'two'">Value is two</p>
      <p *ngSwitchDefault>Value is unknown</p>
    </div>
    ```

    `ngSwitchCase` matches a specific value, and `ngSwitchDefault` represents the default case.

### Attribute Directives

Attribute directives change the appearance or behavior of DOM elements without creating or removing elements.

- `ngClass` is used to dynamically set CSS classes on an element.

    ```html
    <div [ngClass]="{ 'active': isActive, 'highlight': isHighlighted }">Styled div</div>
    ```

    Here, the `active` and `highlight` classes are added dynamically based on `isActive` and `isHighlighted`.

- `ngStyle` is used to dynamically set inline styles on an element.

    ```html
    <div [ngStyle]="{ 'color': textColor, 'font-size': fontSize + 'px' }">Styled div</div>
    ```

    In this example, `textColor` and `fontSize` dynamically control the element's color and font size.

### Custom Directives

In addition to Angular's built-in directives, you can create custom directives to implement specific behavior. Typically, custom directives are attribute directives used to extend element behavior.

- Create a custom directive

Using the Angular CLI to create a directive, the command is:

```shell
ng generate directive highlight
# or shorthand
ng g d highlight
```

This command will generate a directive file `highlight.directive.ts` with initial content like:

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

In this example, the custom `HighlightDirective` directive will set the background color to yellow when the mouse hovers over the element and remove the color when it leaves.

- **`@Directive`** decorator: Defines a directive; `selector: '[appHighlight]'` indicates it is an attribute directive, used by applying the `appHighlight` attribute to an element.
- **`ElementRef`**: Used to access the DOM element the directive is applied to.
- **`Renderer2`**: Used to safely manipulate DOM styles, avoiding direct DOM access.
- **`@HostListener`**: Listens to the element’s events, `mouseenter` for mouse enter and `mouseleave` for mouse leave.

- Using the custom directive

In the template, use the `appHighlight` directive:

```html
<p appHighlight>Hover over this text to see the highlight effect.</p>
```

After adding the `appHighlight` attribute, the directive will take effect on the element. When the mouse hovers over it, the background becomes yellow; when it leaves, it returns to normal.

## Services and Dependency Injection

In Angular, **services** are used to encapsulate and share logic and data across an application, while the **dependency injection** (DI) system manages and provides these services. Using services helps separate business logic from components, improving reusability and maintainability. The DI system ensures services can be easily used by components or other services.

### Services

A service in Angular is typically a class that encapsulates logic and data that don’t belong to any particular component. For example, fetching data, handling business logic, and managing state. Services can be shared across multiple components.

1. Creating a service

The Angular CLI can quickly generate a service:

```shell
ng generate service my-service
# or shorthand
ng g s my-service
```

The generated service file `my-service.service.ts` is roughly as follows:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // registers the service in the root injector, globally available
})
export class MyService {
  constructor() { }

  getData() {
    return 'Hello from MyService!';
  }
}
```

- **`@Injectable`** decorator: Marks a class as injectable into components or other services.
- **`providedIn: 'root'`**: Indicates the service is provided in the root injector, making it accessible throughout the app. This avoids manual registration in `providers`.

1. Using a service in a component

Services are typically used via dependency injection. You can inject the service into a component’s constructor so you can call the service’s methods.

Suppose we have created a service named `MyService`. Here’s how to use it in a component:

```typescript
import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-my-component',
  template: `<p>{{ message }}</p>`
})
export class MyComponent implements OnInit {
  message: string;

  // Inject the service in the constructor
  constructor(private myService: MyService) {}

  ngOnInit(): void {
    this.message = this.myService.getData();
  }
}
```

- **Constructor injection**: Define a private `myService` variable in the component’s constructor to inject the service.
- **Calling service methods**: In the `ngOnInit` lifecycle hook, call `getData()` and assign its return value to `message`.

1. Service scope and provision

Angular provides several ways to provide services, and different provisioning methods affect the service’s scope and lifecycle:

- Root-level provisioning

Providing the service in the root injector with `providedIn: 'root'` makes the service a singleton for the entire application. This is typically used for globally shared data or logic.

```typescript
@Injectable({
  providedIn: 'root'
})
export class MyService { }
```

- Module-level provisioning

If you want the service to be available only within a specific module, register the service in that module’s `providers` array. This makes the service’s lifecycle align with the module, suitable for localized shared data or logic.

```typescript
import { NgModule } from '@angular/core';
import { MyService } from './my-service.service';

@NgModule({
  providers: [MyService]  // provide service at module level
})
export class MyModule { }
```

- Component-level provisioning

If you want the service instance to be available only for a single component or the component’s children, register the service in the component’s `providers` array. This gives each component instance its own service instance, suitable for logic used only within a single component.

```typescript
import { Component } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-my-component',
  template: `<p>My Component</p>`,
  providers: [MyService]  // provide service at the component level
})
export class MyComponent { }
```

### Dependency Injection

Dependency Injection (DI) is a design pattern where dependencies (such as services) are injected into components or other services, avoiding hard-coded dependencies. Angular’s DI system automatically manages the creation and provision of dependencies, simplifying the app structure.

1. How the DI system works

When Angular detects that a class requires a specific dependency (for example, `MyService`), it looks for an instance of that dependency in the injector. If the instance doesn’t exist, it creates one and returns it to the component or service.

1. Custom injectors

Angular supports custom injectors inside components to control how dependencies are provided. This is not commonly used in most apps, but it can be useful when you need to control the scope of a service or implement special dependencies.

### Real-world use cases for services

- **Data sharing**: Store shared data in a service so that multiple components can access and update it.
- **HTTP requests**: Use the `HttpClient` service to fetch data from backend APIs and encapsulate the logic in services for reuse and testing.
- **Global state management**: Manage app state in a service, such as user authentication information or theme settings.

### Example: Creating a simple data service

Suppose we want to create a simple data service `DataService` to manage a set of user data and provide CRUD operations.

- Create the service

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

- Use the service in a component

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

In this example, `DataService` provides the logic for managing user data, and the `UserListComponent` retrieves data from the service to display in the view, while also allowing new users to be added via the service.

## Routing and Navigation

Angular's router enables building single-page applications (SPAs) by controlling different views through URLs. The router allows the app to switch between views without refreshing the page, supports parameter passing, lazy loading, and route guards.

### What is Routing?

In a single-page application, there is only one actual page, but users can navigate to different parts of the app via different URLs. Angular's router lets you define mappings between URL paths and components. When clicking navigation links, the corresponding component is loaded without a full page refresh.

### Setting up Angular Routing

1. Import `RouterModule`

To set up routing in an Angular app, import `RouterModule` in the app's root module or relevant feature modules and define the route configuration.

For example, in standalone mode, you can configure routing in `main.ts`:

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

In this example, we defined two routes:

- `''` represents the root path (`/`), mapped to `HomeComponent`.
- `'about'` represents the `/about` path, mapped to `AboutComponent`.

1. Create components

If you don’t have the related components yet, you can generate them with the following commands:

```shell
ng generate component home --standalone
ng generate component about --standalone
```

1. Add route links in the template

Angular provides the `routerLink` directive to create route links. You can add navigation links in the template of `AppComponent`:

```html
<!-- app.component.html -->
<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet>
```

- **`routerLink`**: Used to specify the path of the navigation link. For example, `routerLink="/"` points to the root path.
- **`<router-outlet></router-outlet>`**: Router outlet, specifies where in the page the routed component should be displayed. The `<router-outlet>` is a placeholder for the router to render the matched component.

1. Route parameter passing

Angular routing supports passing parameters in the URL and receiving/processing them in components. For example, we can define a route to show user details:

- Define a parameterized route

In the route configuration, use `:id` as a placeholder to define the parameter:

```typescript
{ path: 'user/:id', component: UserComponent }
```

- Add links in the template

In the template, you can pass parameters with `routerLink`:

```html
<a [routerLink]="['/user', 1]">User 1</a>
<a [routerLink]="['/user', 2]">User 2</a>
```

- Retrieve parameters in the component

In `UserComponent`, you can use `ActivatedRoute` to access route parameters:

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

- **`ActivatedRoute`**: Angular’s router service for accessing route information.
- **`paramMap`**: A map of route parameters. `get('id')` retrieves the `id` parameter from the current route.

### Route Guards

Route guards protect routes, ensuring the user has permission to access them. Common route guards include:

- **`CanActivate`**: Checks before navigating to a route, deciding whether to allow access.
- **`CanDeactivate`**: Checks when leaving a route, deciding whether to allow leaving.

For example, create a simple `AuthGuard` to ensure a user can access a route only after logging in.

1. Generate the guard

Use the CLI to generate a guard:

```shell
ng generate guard auth
```

1. Implement the `AuthGuard` logic

In the generated `auth.guard.ts`, write the authentication logic:

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = false; // replace with real authentication logic

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
```

1. Apply the guard to routes

In the route configuration, apply the guard using the `canActivate` property:

```typescript
{ path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }
```

### Lazy Loading

Lazy loading loads specific modules only when needed, improving the initial load time of the app. You can easily implement lazy loading for components with `loadComponent`:

```typescript
{ path: 'lazy', loadComponent: () => import('./lazy/lazy.component').then(m => m.LazyComponent) }
```

## **Forms** Handling

Angular provides powerful form handling capabilities, supporting form creation and validation. Angular forms mainly come in two flavors: **Template-driven Forms** and **Reactive Forms**. Each has its advantages and is suitable for different scenarios.

### **Template-driven Forms**

Template-driven forms define the form structure and validation logic primarily through the HTML template. They use Angular's **`FormsModule`** to provide data binding and validation support.

- **Import** `FormsModule`

First, in the module, import **`FormsModule`**. If your project is modular, open `app.module.ts` or the relevant module file, and add **`FormsModule`**.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule  // import FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- **Defining a template-driven form**

Create a simple form in the template, using the `ngModel` directive to achieve two-way data binding. Use `#name="ngModel"` to create a template reference variable to access the input’s validation state.

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

- **`[(ngModel)]`**: Two-way data binding used to synchronize form fields and component data.
- **`#myForm="ngForm"`**: Create a template reference variable `myForm` to access the form state.
- **`required` and `email` validations**: HTML5 validations provided by Angular.

- **Define the data model in the component**

In `app.component.ts`, define the `user` data model, bound to the form.

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

### **Reactive Forms**

Reactive forms define the form structure and validation logic in the component class, offering more flexibility and suitable for complex dynamic forms. They use the **`ReactiveFormsModule`** to provide form controls and validation support.

- **Import** `ReactiveFormsModule`

In the module, import **`ReactiveFormsModule`**.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule  // import ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- **Define a reactive form**

In the component, use **`FormBuilder`** to define the form structure and validation rules.

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

- **`FormBuilder`**: Angular-provided service to simplify form construction.
- **`Validators`**: Used to set validation rules for form fields.

- **Binding a reactive form in the template**

Bind the entire form to `[formGroup]` and each control with `formControlName`.

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

- **`[formGroup]`**: Binds the component’s `userForm` to the template form.
- **`formControlName`**: Binds each form control to the corresponding control in `userForm`.

### **Form Validation**

Angular provides a variety of built-in validators, such as **`Validators.required`**, **`Validators.email`**, and you can also create custom validators.

- **Custom validators**

You can define a custom validator in the component and apply it to a form control.

```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
```

Then apply the custom validator when creating the form:

```typescript
this.userForm = this.fb.group({
  name: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
  email: ['', [Validators.required, Validators.email]]
});
```

## HTTP Client and API Communication

In modern web apps, communicating with backend APIs is essential. Angular provides the `HttpClient` module to simplify interactions with backend APIs. With `HttpClient`, you can easily send HTTP requests, handle responses, manage errors, and add interceptors to control requests and responses.

### Setting up `HttpClient`

To use `HttpClient` in an Angular app, you need to import `HttpClientModule` in your module.

- Import `HttpClientModule`

In the root or feature module, import `HttpClientModule`:

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

- Use `HttpClient` to send requests

`HttpClient` provides several methods to send HTTP requests, including `get`, `post`, `put`, `delete`, and more, suitable for different types of requests.

1. Sending a GET request

Suppose we want to fetch a list of users from an API. We can use `HttpClient.get` to send a GET request:

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
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
      });
  }
}
```

In this example:

- `this.http.get` sends a GET request.
- `subscribe` handles the response data, assigning the received `data` to the component’s `users` property.

- Sending a POST request

If we want to send data to the server, use `HttpClient.post`:

```typescript
addUser(newUser: any) {
  this.http.post('https://jsonplaceholder.typicode.com/users', newUser)
    .subscribe(response => {
      console.log('User added:', response);
    });
}
```

Here, the `post` method sends a POST request, passing the `newUser` data to the API. The `response` in the `subscribe` contains the server's response.

### Error Handling

In real applications, API requests may encounter various errors, like network timeouts or server issues. You can catch and handle errors using the `catchError` operator.

- Error handling example

Using the `catchError` operator to handle errors in requests:

```typescript
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

this.http.get('https://jsonplaceholder.typicode.com/users')
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
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
```

Here:

- The `catchError` operator catches errors and calls the `handleError` method.
- The `handleError` method generates an error message based on the error type and returns it via `throwError`.

### HTTP Interceptors

HTTP interceptors allow you to inject logic before a request or response is processed, such as adding an authentication token or logging.

- Creating an interceptor

Use the Angular CLI to create an interceptor:

```shell
ng generate interceptor auth
```

The interceptor file might look like:

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Clone the request and add an authentication token
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer YOUR_TOKEN_HERE`
      }
    });
    return next.handle(authReq);
  }
}
```

- The `intercept` method of the `HttpInterceptor` interface runs before the request is sent.
- `req.clone` clones the request object and adds the authentication token.

- Registering the interceptor

Register the interceptor as a multi-provider for `HTTP_INTERCEPTORS` in a module:

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

### Using RxJS for Asynchronous Handling

`HttpClient` methods return an Observable, which you subscribe to. You can use RxJS operators (such as `map`, `switchMap`) to process asynchronous data streams.

- RxJS operators example

If you want to process data after making a request, you can use the `map` operator:

```typescript
import { map } from 'rxjs/operators';

this.http.get<any[]>('https://api.example.com/users')
  .pipe(
    map(users => users.map(user => user.name))
  )
  .subscribe(names => console.log(names));
```

## RxJS and Reactive Programming

RxJS is one of Angular's core libraries for handling asynchronous events and data streams. Its power lies in providing a rich set of operators to efficiently manage streaming data and complex asynchronous operations. In Angular, RxJS is widely used for HTTP requests, forms, routing, and component communication.

**RxJS (Reactive Extensions for JavaScript)** is a library for handling asynchronous data streams, providing Observables, Observers, and Operators. The core idea of reactive programming is to treat data as a stream and apply a sequence of operators to compose, filter, and transform data, enabling responsive UI to data changes.

### Observable

- **Observable** is the core concept of a data stream. It represents an asynchronous data source, which can be an HTTP request, events, timers, etc.
- Use `Observable.subscribe()` to subscribe to the data stream; observers are notified when data arrives.

---

### Common RxJS Operators

RxJS provides many operators to handle data streams. Here are some common operators and their use cases:

1. **`map`** - Data transformation

`map` transforms each item in the Observable data stream to a new value.

Example: Map the retrieved user array to an array of usernames.

```typescript
import { map } from 'rxjs/operators';

this.http.get<any[]>('https://api.example.com/users')
  .pipe(
    map(users => users.map(user => user.name))
  )
  .subscribe(names => console.log(names));
```

2. **`filter`** - Data filtering

`filter` is used to filter items in the data stream that do not meet a condition.

Example: Filter users with `isActive` set to true.

```typescript
import { filter } from 'rxjs/operators';

this.http.get<any[]>('https://api.example.com/users')
  .pipe(
    map(users => users.filter(user => user.isActive))
  )
  .subscribe(activeUsers => console.log(activeUsers));
```

3. **`switchMap`** - Cancel previous subscriptions, handle latest data

`switchMap` cancels the previous unfinished Observable when a new data item arrives, commonly used for nested requests or sequences of events (like form input or route parameter changes).

Example: Automatically search based on user input keywords and cancel the previous request.

```typescript
import { switchMap, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

searchControl = new FormControl();

this.searchControl.valueChanges
  .pipe(
    debounceTime(300),  // debounce to avoid overly frequent requests
    switchMap(query => this.http.get(`https://api.example.com/search?q=${query}`))
  )
  .subscribe(results => console.log(results));
```

4. **`mergeMap`** - Parallel processing

`mergeMap` maps each data item to a new Observable and processes them in parallel.

Example: Parallel requests for multiple users’ details.

```typescript
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

const userIds = [1, 2, 3];
from(userIds)
  .pipe(
    mergeMap(id => this.http.get(`https://api.example.com/users/${id}`))
  )
  .subscribe(user => console.log(user));
```

5. **`catchError`** - Error handling

`catchError` is used to catch errors in the data stream and handle accordingly.

Example: Return a default value when a request fails.

```typescript
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

this.http.get('https://api.example.com/data')
  .pipe(
    catchError(error => {
      console.error('Error occurred:', error);
      return of([]);  // return an empty array as a default value
    })
  )
  .subscribe(data => console.log(data));
```

---

### Flow control in RxJS

RxJS provides some flow-control operators, such as `debounceTime` and `distinctUntilChanged`, to help manage user input and other event streams.

1. **`debounceTime`** - Debouncing

`debounceTime` controls the rate of data emission, emitting data only after a pause for a specified time, typically used for handling rapid input sequences.

Example: Execute a search after the user stops typing for 500ms.

```typescript
searchControl.valueChanges
  .pipe(
    debounceTime(500)
  )
  .subscribe(value => console.log('Search:', value));
```

1. **`distinctUntilChanged`** - Deduplication

`distinctUntilChanged` ignores the same data item as the previous one to avoid duplicate processing.

Example: Do not send repeated requests when the user types the same content.

```typescript
searchControl.valueChanges
  .pipe(
    debounceTime(500),
    distinctUntilChanged()
  )
  .subscribe(value => console.log('Unique search:', value));
```

### RxJS in Angular Use Cases

- HTTP requests: Use RxJS operators with `HttpClient` to process responses and handle errors.
- Route parameter changes: Listen to route parameter changes and trigger dependent requests.
- Form input handling: Process user input with debouncing, deduplication, etc.
- Inter-component communication: Use Subjects to enable event or data sharing between components.

### Example: Real-time search with RxJS

The following is a complete example showing how to use `switchMap`, `debounceTime`, and `distinctUntilChanged` to build a real-time search:

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

In this example:

- `debounceTime(300)` debounces, waiting 300 milliseconds after the user stops typing before sending a request.
- `distinctUntilChanged()` prevents duplicate requests for the same search term.
- `switchMap` cancels the previous request whenever a new input arrives, avoiding excessive network requests.

## State Management

In complex Angular applications, state management is a key topic. Good state management helps share data across components and modules, synchronize state, simplify data flow, and improve maintainability. Angular provides multiple ways to manage state, with common approaches including sharing state via services and using libraries like `@ngrx/store` for centralized management.

---

**State management** is a way of managing and sharing state (data) across an app, helping us better control data flow and update UI. As applications become more complex, with multiple interactive pages, modules, and user actions, different components may need to access and update the same data (e.g., user information, shopping cart). State management helps keep data consistent and reduces the complexity of data synchronization.

### State management approaches in Angular

1. Using services for state sharing

Angular services are singletons within the app and can share state across components, suitable for small apps that do not require complex state logic.

Example: Create a simple `UserService` to manage user information.

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject<User | null>(null); // stores user information
  user$ = this.userSource.asObservable(); // public user information as Observable

  setUser(user: User) {
    this.userSource.next(user); // update user information
  }

  clearUser() {
    this.userSource.next(null); // clear user information
  }
}
```

In a component, you can access and update user state via `UserService`:

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

In another component, update user information:

```typescript
@Component({
  selector: 'app-login',
  template: `<button (click)="login()">Login</button>`
})
export class LoginComponent {
  constructor(private userService: UserService) {}

  login() {
    const user = { name: 'Alice', email: 'alice@example.com' };
    this.userService.setUser(user); // update user information
  }
}
```

1. Using `@ngrx/store` for centralized state management

For large applications, you can use the `@ngrx/store` library for centralized state management. `@ngrx/store` implements a Redux-like pattern, enabling all application state to be managed in one place and synchronized via a single data source.

- Core concepts of `@ngrx/store`
  - Store: Holds the global state of the application. All components can access and update data from the Store.
  - Actions: Events that trigger state changes, describing what updates to perform.
  - Reducers: Handle the logic for Actions, updating the state in the Store accordingly.
  - Selectors: Retrieve required data from the Store.

- Installing `@ngrx/store`

First, install `@ngrx/store` with the Angular CLI:

```shell
ng add @ngrx/store
```

- Creating a state management example

Suppose we want to manage a simple counter state with `increment` and `decrement` actions.

    1. **Define Action**

        In `counter.actions.ts`, define the counter actions:

```typescript
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
```

    2. **Define Reducer**

        In `counter.reducer.ts`, define the counter reducer:

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

    3. **Register Reducer**

        In the app's `app.module.ts`, register the Reducer with the Store:

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

    4. **Use Store in a component to manage state**

        Use the Store in a component to get and update the counter state:

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
  count$ = this.store.select('count'); // get count state

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

In this example:

- **Actions** define the increment, decrement, and reset operations.
- **Reducer** updates the state based on different Actions.
- **Store** provides the `count` state, and components can subscribe to it and dispatch actions.

---

### Best Practices for State Management

1. Centralize application state: Store or service shared state to avoid duplicating state across components.
2. Avoid directly mutating state: Use Actions and Reducers to update state, ensuring changes are traceable.
3. Separate UI and business logic: Components handle UI rendering, services or Store handle business logic and data state.
4. Use Selectors: Retrieve data from the Store using Selectors for simpler and consistent data access.

---


## Optimization and Performance Tuning

When building and deploying Angular apps, performance optimization is key to fast loading and responsive applications. Angular provides various optimization techniques, such as lazy loading, AOT (Ahead-of-Time) compilation, Tree Shaking, and change detection strategies. This section introduces these optimization techniques to help you boost app performance.

---

### Lazy Loading

**Lazy loading** is a technique for loading modules on demand. It allows the app to load specific modules only when needed, reducing the initial load time and speeding up the startup.

Implementing lazy loading

Suppose there is an `AdminModule` that we want to lazy-load. Configure lazy loading in the routes:

```typescript
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];
```

Here, Angular will load the `AdminModule` only when the user navigates to the `/admin` path.

---

### AOT Compilation

**AOT compilation** compiles Angular templates into JavaScript code at build time rather than in the browser, reducing the browser's work, shrinking bundle size, and speeding up runtime.

Using AOT compilation

When building the app with the Angular CLI, AOT compilation is enabled by default. You can build a production-ready version with `ng build --prod`, which enables AOT and other optimizations.

```shell
ng build --prod
```

Benefits of AOT compilation:

- Faster runtime performance: reduces the browser's compilation time
- Smaller bundle sizes: only compiled template code is included
- Early template error detection: catches template syntax errors during build for better safety

---

### Tree Shaking

**Tree Shaking** is a technique to remove unused code during the build process. Angular uses Webpack to build and automatically removes unused modules and code, reducing the application bundle size.

How to optimize Tree Shaking

1. Use ES6 modules: Ensure code uses ES6 module syntax (`import` and `export`).
2. Remove unnecessary dependencies: Make sure you only import and use necessary libraries or modules.
3. Optimize RxJS imports: RxJS can be imported in a tree-shakable way. For example, use `import { map } from 'rxjs/operators'` instead of importing the entire `rxjs` library.

---

### Change Detection Strategy

Angular's default change detection checks all components, which can incur performance overhead. You can optimize change detection by using the OnPush strategy, which triggers checks only when input data changes or component events occur.

Using OnPush

In a component, set `changeDetection: ChangeDetectionStrategy.OnPush` to enable the OnPush strategy.

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush  // enable OnPush strategy
})
export class MyComponent {}
```

Benefits of OnPush:

- Reduces unnecessary change detection: re-runs only when inputs change or events occur
- Improves performance: suitable for purely presentational components that do not rely on frequent updates from parent components

---

### Using Service Workers for caching

Angular supports configuring the app as a Progressive Web App (PWA) to leverage Service Worker caching for offline support and performance.

- Adding Service Worker support

Use the Angular CLI to add Service Worker support:

```shell
ng add @angular/pwa
```

This will automatically generate the Service Worker configuration file (ngsw-config.json) and register it with the app. In production, the Service Worker will cache static resources automatically, speeding up page loads.

---

### Optimizing Images and Static Resources

Images and static assets often contribute significantly to the payload. You can optimize resources with compression and lazy loading.

Image compression and lazy loading

- Use compressed formats (e.g., WebP) when possible
- Lazy-load images using the `loading="lazy"` attribute so they are only loaded when they enter the viewport

```html
<img src="image.webp" loading="lazy" alt="Example Image">
```

---

### Using Angular’s Built-in Optimization Tools

Angular CLI offers many built-in tools to help optimize bundle size and performance. You can further optimize builds as follows:

Default optimization of `ng build --prod`

When building with `ng build --prod`, Angular CLI automatically applies multiple optimizations, including:

- AOT compilation
- Tree Shaking
- Minification
- Bundle Splitting

---

### Best Practices for Improving Angular Performance

1. Lazy-load modules to reduce the main bundle size
2. Use pure presentational components with OnPush to reduce change detection cycles
3. Avoid heavy computations in templates; compute in the component class
4. Optimize third-party library usage; prefer on-demand imports (e.g., RxJS operators)
5. Use Web Workers for compute-intensive tasks to avoid blocking the main thread

---

## PWA and Internationalization

In this section, we introduce two important advanced topics: Progressive Web Apps (PWA) and Internationalization (i18n). PWA can give Angular apps offline support and a native-like experience, while internationalization enables multi-language support for global usage.

---

### Progressive Web Apps (PWA)

**Progressive Web Apps (PWA)** are apps built with modern web technologies that enable web apps to function like native apps with offline support. Angular provides built-in PWA support to help developers easily build web apps with offline support, push notifications, and more.

- Turning an Angular app into a PWA

The Angular CLI provides an easy command to convert an existing project into a PWA:

1. Add PWA support

In your project directory, run:

```shell
ng add @angular/pwa
```

After running the command, Angular will automatically generate the Service Worker configuration (`ngsw-config.json`) and the app’s icons (`manifest.webmanifest`). These files configure the app’s offline caching and icons for the PWA.

2. Configure `ngsw-config.json`

`ngsw-config.json` is the Service Worker configuration file, used to define which files should be cached. By default, Angular caches the app’s main resources (JavaScript files, CSS files, HTML files, etc.). You can customize the caching strategy as needed.

3. Build production version

When using a PWA, the app should run in production mode:

```shell
ng build --prod
```

4. Deployment

After deploying the app to a server, the browser will automatically detect and register the Service Worker, enabling offline functionality.

- Verifying PWA features
1. After opening the app, check the browser’s developer tools to verify that the Service Worker has been registered successfully.
2. You can try turning off the network and refreshing the page; the app should still load from the offline cache.

---

### Internationalization

**Internationalization** involves converting texts, date formats, number formats, and other content in the app to different languages and regional formats, enabling the app to adapt to different languages and cultural contexts. Angular provides built-in i18n support to help developers easily add multilingual content.

- Using Angular’s i18n features

Angular's i18n features help translate the app’s text into multiple languages. Here are the configuration steps:

1. Marking texts

In templates, mark text to be translated using the `i18n` attribute.

```html
<h1 i18n="@@welcome">Welcome to our app!</h1>
<p i18n="@@intro">This is an example of internationalized content.</p>
```

Here, `i18n="@@key"` adds a unique translation key `key` to the text content, making it easier to locate and translate later.

1. Extract translation files

Use the Angular CLI to extract translation files. Running the following command will generate a `messages.xlf` file in the `src/locale` directory:

```shell
ng extract-i18n
```

The generated `messages.xlf` is an XML file containing all marked translations from the app.

1. Translating content

Create translation files for each language in the `messages.xlf` file, translate the contents, and save the files. For example, you can create a `messages.fr.xlf` file for French translations.

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

1. Configuring multi-language compilation

In the `angular.json` file, add multi-language configuration, for example:

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

1. Building multi-language versions

When building the app, you can generate different versions for different languages:

```shell
ng build --prod --localize
```

This will automatically generate versions for each language (for example, the French version will be under `dist/your-app-name/fr`).

- Dynamic language switching (optional)

If you want to switch languages at runtime, you can use a third-party library (such as `ngx-translate`) to implement more flexible internationalization support.
