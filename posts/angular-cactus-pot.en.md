---
title: 'Angular-Based Animation Showcase Website with Login and Registration (Cognito)'
published: 2024-11-12
updated: 2024-11-12
description: 'Build a Bangumi anime browser with Angular 16 and AWS Cognito, including sign-in, registration, search, calendar views, and GitHub Pages deployment.'
image: 'https://r2.dreaife.tokyo/notion/covers/13c5465cca178004ad54d1f3b101d56a/IMG_1506.jpg'
tags: ['ts', 'angular', 'github-action', 'doc', 'PROJECT']
category: 'EXPLORE'
draft: false
lang: 'en'
---

# Project Introduction

This is my Angular practice project. It is an Angular-based web application for displaying and searching for anime on Bangumi, using the [Bangumi API](https://bangumi.github.io/api/).

This project uses [GitHub Actions](https://github.com/features/actions) for automatic deployment to [GitHub Pages](https://dreaife.github.io/my-angular-project-test/).

## Project Name

my-angular-project-test

URL: [https://dreaife.github.io/my-angular-project-test/](https://dreaife.github.io/my-angular-project-test/)

## Project Goals

- Deploy an Angular-based static website
- Practice automatic deployment with GitHub Actions
- Implement features by calling APIs
- Use Cognito for user authentication
- Use an interceptor to process requests
- Use a guard to protect pages

## Technology Stack

- Angular 16
- TypeScript
- HTML
- CSS
- GitHub Actions
- Cognito

# Environment Setup

## Requirements

- Node.js version 20 or later
- Angular CLI

## Installation Steps

1. Install Node.js

	```shell
	<https://nodejs.org/en/download/>
	```

2. Install Angular CLI

	```shell
	npm install -g @angular/cli
	```

3. Install the project

	```shell
	git clone <https://github.com/dreaife/my-angular-project-test.git>
	cd my-angular-project-test
	npm install
	```

# Project Structure

## Directory Structure

This project was created using Angular CLI and has the following structure:

```plain text
my-angular-project-test/
├── src/
│   ├── app/
│   │   ├── environment/
│   │   │   ├── environment.ts
│   │   ├── components/
│   │   │   ├── login/
│   │   │   ├── home/
│   │   │   ├── search/
│   │   ├── guards/
│   │   │   ├── auth.guard.ts
│   │   ├── interceptors/
│   │   │   ├── auth.interceptor.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── bgm.service.ts
│   │   ├── app.component.ts
│   ├── index.html
│   ├── main.ts
├── ...
```

Where:

- `src/app`<br>This is the main project directory and contains all components, services, interceptors, guards, and other files.
- `src/environments`<br>This directory contains environment configuration files for the development and production environments.
- `src/components`<br>This directory contains the project's main components, including all page components.
	- The `login` component is the login page and uses the Cognito SDK to sign users in;
	- The `home` component is the anime calendar page. It retrieves and displays data by calling `bgm.service.getCalendar`;
	- The `search` component is the search page. It retrieves and displays data by calling `bgm.service.search`.
- `src/guards`<br>This directory contains the project's main guards, including the `auth.guard.ts` guard, which protects pages that require authentication and redirects unauthenticated users to the login page.
- `src/interceptors`<br>This directory contains the project's main interceptors, including the `auth.interceptor.ts` interceptor, which adds authentication information to requests.
- `src/services`<br>This directory contains the project's main services, including the `auth.service.ts` service for handling sign-in, sign-out, and other operations, and the `bgm.service.ts` service for calling the Bangumi API.
- `src/main.ts`<br>This is the project's main entry point and is used to start the Angular application.

# Key Feature Implementations

## User Authentication with Cognito

In `src/app/services/auth.service.ts`, the Cognito SDK is used for user authentication.

Before using Cognito, you must first create a user pool in AWS Cognito, configure a custom Cognito authentication domain, and create an app client to obtain the client ID.

Use the obtained ID to configure Cognito in `src/app/environment/environment.ts`.

### Sign In

Use the cognitoUser.authenticateUser method to sign in. After a successful sign-in, store the idToken or accessToken in sessionStorage.

Tips:

For users who have not yet been verified, a new password must first be set. In this case, override the newPasswordRequired method and set resolve(\{ newPasswordRequired: true, cognitoUser \}) so that the login page switches its displayed content and prompts the user to set a new password.

Implementation:

```typescript
signIn(username: string, password: string): Promise<any> {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password
    });

    const userData = {
      Username: username,
      Pool: this.userPool
    };
    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          // 获取 Tokens
          const idToken = result.getIdToken().getJwtToken();
          const accessToken = result.getAccessToken().getJwtToken();
          const refreshToken = result.getRefreshToken().getToken();

          // console.log('idToken', idToken);
          // console.log('accessToken', accessToken);
          // console.log('refreshToken', refreshToken);

          // 将 idToken 或 accessToken 存储到 sessionStorage 作为 userToken
          sessionStorage.setItem('userToken', accessToken);

          // 保存 Tokens 或在需要的地方使用
          resolve({ idToken, accessToken, refreshToken });

          // 登录成功后重定向到主页
          this.router.navigate(['/']);
        },
        onFailure: (err) => {
          reject(err.message || JSON.stringify(err));
        },
        newPasswordRequired: (userAttributes, requiredAttributes) => {
          // 触发新密码需求，提示前端进行新密码设置
          resolve({ newPasswordRequired: true, cognitoUser });
        }
      });
    });
  }
```

When a user sets a new password, call the completeNewPassword method, which uses the cognitoUser.completeNewPasswordChallenge method to set the new password.

```typescript
  // 设置新密码方法
  completeNewPassword(cognitoUser: CognitoUser, newPassword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      cognitoUser.completeNewPasswordChallenge(newPassword, {}, {
        onSuccess: (session) => resolve(session),
        onFailure: (err) => reject(err.message || JSON.stringify(err))
      });
    });
  }
```

### Registration

Use the cognitoUser.signUp method to register. After successful registration, the username and password are stored in Cognito, and the user is redirected to the login page.

```typescript
  // 注册方法
  signUp(username: string, password: string, email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const attributeList : CognitoUserAttribute[] = [];
      attributeList.push(new CognitoUserAttribute({ Name: 'email', Value: email }));

      this.userPool.signUp(username, password, attributeList, [], (err, result) => {
        if (err) {
          reject(err.message || JSON.stringify(err));
        } else {
          resolve(result?.user);
        }
      });
    });
  }
```

### Sign Out

Use the cognitoUser.signOut method to sign out. After signing out, remove userToken from sessionStorage.

```typescript
  logout() {
    // 登出
    this.userPool.getCurrentUser()?.signOut();
    sessionStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
```

## Login Page

The login page is located at `src/app/components/login/login.component.ts`. It uses the Cognito SDK to sign users in and stores the idToken or accessToken in sessionStorage after a successful sign-in.

The page uses authMode to control the displayed content. authMode supports the following values:

- login: Login page
- register: Registration page
- forgotPassword: Forgot password page
- confirmSignUp: Verification page
- resetPassword: Password reset page

When the corresponding button is clicked, the authService's switchMode method is called to change authMode, thereby switching the content displayed on the page.

Page implementation:

```typescript
switchMode(mode: 'login' | 'register' | 'forgotPassword' | 'confirmSignUp' | 'resetPassword') {
    this.authMode = mode;
    this.message = '';
}

  onSubmit() {
    if (this.authMode === 'login') {
      this.authService.signIn(this.username, this.password).then(
        (resp) => {
          if (resp.newPasswordRequired) {
            // 初次登录需要重置密码，显示浮窗
            this.showNewPasswordModal = true;
            this.cognitoUser = resp.cognitoUser;
          } else {
            // 登录成功
            this.message = '登录成功！';
          }
        }).catch(err => {
          this.message = `登录失败：${err}`;
        });
    } else if (this.authMode === 'register') {
      this.authService.signUp(this.username, this.password, this.email).then(
        () => {
          this.message = '注册成功！请检查邮箱并输入验证码。';
          this.authMode = 'confirmSignUp';
        },
        (err) => (this.message = `注册失败：${err}`)
      );
    } else if (this.authMode === 'forgotPassword') {
      this.authService.forgotPassword(this.username).then(
        () => {
          this.message = '验证码已发送，请检查邮箱并输入验证码和新密码。';
          this.authMode = 'resetPassword';
        },
        (err) => (this.message = `发送验证码失败：${err}`)
      );
    } else if (this.authMode === 'confirmSignUp') {
      this.authService.confirmSignUp(this.username, this.code).then(
        () => (this.message = '验证成功！请登录。'),
        (err) => (this.message = `验证失败：${err}`)
      );
    } else if (this.authMode === 'resetPassword') {
      this.authService.confirmPassword(this.username, this.code, this.newPassword).then(
        () => {
          this.message = '密码重置成功！请使用新密码登录。';
          this.authMode = 'login'; // 切换回登录页面
        },
        (err) => (this.message = `密码更新失败：${err}`)
      );
    }
  }
```

## Anime Calendar Page

The anime calendar page is located at `src/app/components/home/home.component.ts`. It retrieves and displays data by calling `bgm.service.getCalendar`.

When the page is initialized, the `ngOnInit` method is called to retrieve and display the data.

```typescript
  ngOnInit() : void {
    // this.bgmService.getCalendar().subscribe(data => console.log(data));
    // this.bgmService.getSubject('482850').subscribe(data => console.log(data));
    this.bgmService.getCalendar().subscribe((data:any[]) => {
      this.weeklyData = Array(7).fill(null).map((_, index) => ({
        day: this.daysOfWeek[index],
        items: data
          .find((d: any) => d.weekday.id === index + 1)
          ?.items.filter((item: any) => item.collection?.doing >= 100) || []
      }));
    });
  }

  navigateToItem(id: string) {
    this.router.navigate(['/items', id]);
  }

   // 显示浮窗并加载数据
   openModal(itemId: string): void {
    this.bgmService.getSubject(itemId).subscribe((data) => {
      this.selectedItem = data;
      this.showModal = true;
    });
  }
  // 关闭浮窗
  closeModal(): void {
    this.showModal = false;
    this.selectedItem = null;
  }

  // 辅助方法：查找 infobox 中的官方网站 URL
  getOfficialWebsite(): string | null {
    if (!this.selectedItem || !this.selectedItem.infobox) return null;
    const website = this.selectedItem.infobox.find((info: any) => info.key === '官方网站');
    return website ? website.value : null;
  }
```

## Search Page

The search page is located at `src/app/components/search/search.component.ts`. It retrieves and displays data by calling `bgm.service.search`.

The page receives search keywords through title and controls the displayed content through options. options includes the following values:

- limit: Number of items displayed per page
- type: Type
- meta_tags: Meta tags
- tag: Tag
- air_date: Air date
- rating: Rating
- rank: Ranking
- nsfw: Whether to include adult content
- page: Page number

When sending a request to the API, title and options are restructured before being sent. The request is restructured as follows:

```typescript
// 搜索方法
  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.isLoading = true;
      this.errorMessage = '';

      // 配置搜索选项
      const options = {
        limit: this.limit,
        type: this.type,
        meta_tags: this.meta_tags,
        tag: this.tag,
        air_date: this.air_date,
        rating: this.rating,
        rank: this.rank,
        nsfw: this.nsfw,
        page: this.page
      };

      this.bgmService.searchSubject(this.searchQuery, options).subscribe(
        (response: any) => {
          this.searchResults = response.data; // 提取 data 数组
          this.totalResults = response.total; // 提取总数
          this.isLoading = false;
        },
        (error) => {
          this.errorMessage = '搜索失败，请重试。';
          this.isLoading = false;
        }
      );
    }
  }
```

## Adding Authentication Information with an Interceptor

In `src/app/interceptors/auth.interceptor.ts`, an interceptor is used to add authentication information to requests.

Interceptor implementation:

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = environment.bgm.authToken;

  if (req.url.startsWith('<https://api.bgm.tv/v0>')) { # 如果请求地址以https://api.bgm.tv/v0开头，则添加认证信息
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`, # 添加认证信息
      }
    });
    return next(authReq);
  }
  return next(req);
};
```

When using the interceptor, it must be configured in app.config.ts.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
```

## Protecting Pages with a Guard

In `src/app/guards/auth.guard.ts`, a guard is used to protect pages that require authentication. Unauthenticated users are redirected to the login page.

Guard implementation:

```typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    // 没有登录，重定向到 /login
    router.navigate(['/login']);
    return false;
  }
};
```

When using the guard, it must be added to the route configuration.

```typescript
{ path: '', component: HomeComponent, canActivate: [authGuard] }, # 主页需要登录
```

# Starting the Project

1. Start the project

	```shell
	ng serve
	```

2. Open the URL

	URL: [http://localhost:4200/](http://localhost:4200/)

# Project Deployment

- Build the project locally

	```shell
	ng build
	```

- Automated deployment

	This project uses GitHub Actions for automatic deployment to GitHub Pages. Whenever code is pushed to GitHub, GitHub Actions detects the push event, automatically builds the project, and deploys it to GitHub Pages.

	Create the `.github/workflows/main.yml` configuration file to configure automatic project deployment with GitHub Actions.

	The contents are as follows:

	```yaml
	# GitHub Actions 工作流，用于将项目部署到 GitHub Pages
	name: Deploy to GitHub Pages

	# 触发条件：当推送到 master 分支时触发
	on:
	push:
	    branches:
	    - master  # 或者你要监控的分支名称

	jobs:
	build-and-deploy:
	    # 使用最新的 Ubuntu 作为运行环境
	    runs-on: ubuntu-latest
	    steps:
	    # 第一步：检出代码
	    - name: Checkout code
	        uses: actions/checkout@v3

	    # 第二步：设置 Node.js 环境
	    - name: Setup Node.js
	        uses: actions/setup-node@v3
	        with:
	        node-version: '20'  # 请根据项目需求修改 Node.js 版本

	    # 第三步：安装项目依赖
	    - name: Install dependencies
	        run: npm install

	    # 第四步：生成环境配置文件 environment.ts
	    - name: Generate environment.ts
	        run: |
	        # 创建 src/app/environment 目录（如果不存在）
	        mkdir -p src/app/environment

	        # 生成 environment.ts 文件，包含 Cognito 和 Bangumi API 的配置信息
	        echo "export const environment = {
	            production: true,
	            cognito: {
	                userPoolId: '$COGNITO_USER_POOL_ID',
	                clientId: '$COGNITO_CLIENT_ID',
	                domain: '$COGNITO_DOMAIN'
	            },
	            bgm: {
	            url: '<https://api.bgm.tv/v0>',
	            authToken: '$BGM_AUTH_TOKEN',
	            userAgent: 'dreaife/my-angular-project-test'
	            }
	        };" > src/app/environment/environment.ts # 生成环境配置文件

	        # 列出生成的文件以确认
	        ls src/app/environment

	    # 第五步：构建项目
	    - name: Build project
	        run: npm run build -- --configuration production --base-href "/my-angular-project-test/" # 构建项目

	    # 第六步：部署到 GitHub Pages
	    - name: Deploy to GitHub Pages
	        uses: JamesIves/github-pages-deploy-action@v4
	        with:
	        # browser 为构建输出的文件夹，内部文件包含 index.html
	        folder: dist/my-angular-project/browser  # 请根据实际输出路径填写
	        token: ${{ secrets.TOKEN }}

	# 环境变量配置，使用 GitHub Secrets 存储敏感信息
	env:
	    COGNITO_USER_POOL_ID: ${{ secrets.COGNITO_USER_POOL_ID }}
	    COGNITO_CLIENT_ID: ${{ secrets.COGNITO_CLIENT_ID }}
	    COGNITO_DOMAIN: ${{ secrets.COGNITO_DOMAIN }}
	    BGM_AUTH_TOKEN: ${{ secrets.BGM_AUTH_TOKEN }}
	    GITHUB_TOKEN: ${{ secrets.TOKEN }}
	```
