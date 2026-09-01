---
title: 'Angularベースのアニメーション展示サイト＋ログイン・ユーザー登録（Cognito）'
published: 2024-11-12
updated: 2024-11-12
description: 'Angular 16とAWS CognitoでBangumiのアニメ展示サイトを構築。ログイン・登録、検索、カレンダー表示、GitHub ActionsによるPages配備を扱います。'
image: 'https://r2.dreaife.tokyo/notion/covers/13c5465cca178004ad54d1f3b101d56a/IMG_1506.jpg'
tags: ['ts', 'angular', 'github-action', 'doc', 'PROJECT']
category: 'EXPLORE'
draft: false
lang: 'ja'
---

# プロジェクト紹介

本プロジェクトは、Angular の練習用に作成した Angular ベースの Web アプリケーションです。[Bangumi API](https://bangumi.github.io/api/) を使用して、Bangumi 上のアニメを表示・検索します。

本プロジェクトは、[GitHub Actions](https://github.com/features/actions) を使用して [GitHub Pages](https://dreaife.github.io/my-angular-project-test/) に自動デプロイされます。

## プロジェクト名

my-angular-project-test

URL：[https://dreaife.github.io/my-angular-project-test/](https://dreaife.github.io/my-angular-project-test/)

## プロジェクトの目的

- Angular ベースの静的 Web サイトをデプロイする
- GitHub Actions による自動デプロイを練習する
- API を呼び出して機能を実装する
- Cognito を使用してユーザー認証を行う
- インターセプターを使用してリクエストを処理する
- ガードを使用してページを保護する

## プロジェクトの技術スタック

- Angular 16
- TypeScript
- HTML
- CSS
- GitHub Actions
- Cognito

# 環境準備

## 環境要件

- Node.js バージョン 20 以上
- Angular CLI

## インストール手順

1. Node.js をインストールする

	```shell
	<https://nodejs.org/en/download/>
	```

2. Angular CLI をインストールする

	```shell
	npm install -g @angular/cli
	```

3. プロジェクトをインストールする

	```shell
	git clone <https://github.com/dreaife/my-angular-project-test.git>
	cd my-angular-project-test
	npm install
	```

# プロジェクト構成

## ディレクトリ構成

本プロジェクトは Angular CLI を使用して作成されており、構成は次のとおりです：

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

各ディレクトリの役割は次のとおりです：

- `src/app`<br>プロジェクトのメインディレクトリで、すべてのコンポーネント、サービス、インターセプター、ガードなどが含まれます。
- `src/environments`<br>環境設定ファイル用のディレクトリで、開発環境と本番環境の設定が含まれます。
- `src/components`<br>プロジェクトの主要コンポーネント用のディレクトリで、すべてのページコンポーネントが含まれます。
	- `login` コンポーネントはログインページで、Cognito の SDK を呼び出してログインを行います。
	- `home` コンポーネントはアニメカレンダーページで、`bgm.service.getCalendar` を呼び出してデータを取得・表示します。
	- `search` コンポーネントは検索ページで、`bgm.service.search` を呼び出してデータを取得・表示します。
- `src/guards`<br>プロジェクトの主要なガード用ディレクトリです。ログインが必要なページを保護する `auth.guard.ts` ガードが含まれており、未ログインの場合はログインページへリダイレクトします。
- `src/interceptors`<br>プロジェクトの主要なインターセプター用ディレクトリです。リクエストに認証情報を追加する `auth.interceptor.ts` インターセプターが含まれます。
- `src/services`<br>プロジェクトの主要なサービス用ディレクトリです。ログインやログアウトなどを処理する `auth.service.ts` サービスと、Bangumi API を呼び出す `bgm.service.ts` サービスが含まれます。
- `src/main.ts`<br>Angular アプリケーションを起動する、プロジェクトのメインエントリーファイルです。

# 主要機能の実装

## Cognito を使用したユーザー認証

`src/app/services/auth.service.ts` では、Cognito の SDK を使用してユーザー認証を行います。

Cognito を使用する前に、AWS Cognito でユーザープールを作成し、カスタム Cognito 認証ドメインを設定して、アプリクライアントを作成し、クライアント ID を取得する必要があります。

取得した ID を使用して、`src/app/environment/environment.ts` に Cognito の設定情報を記述します。

### ログイン

cognitoUser.authenticateUser メソッドでログインし、成功したら idToken または accessToken を sessionStorage に保存します。

ヒント：

未検証のユーザーの場合、最初に新しいパスワードを設定する必要があります。この場合は newPasswordRequired メソッドをオーバーライドし、resolve(\{ newPasswordRequired: true, cognitoUser \}) を設定して、ログインページの表示内容を切り替え、ユーザーに新しいパスワードの設定を促します。

実装コード：

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

ユーザーが新しいパスワードを設定する際は、completeNewPassword メソッドを呼び出し、cognitoUser.completeNewPasswordChallenge メソッドで新しいパスワードを設定します。

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

### ユーザー登録

cognitoUser.signUp メソッドでユーザー登録を行います。成功すると、ユーザー名とパスワードが Cognito に保存され、ログインページへリダイレクトされます。

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

### ログアウト

cognitoUser.signOut メソッドでログアウトし、ログアウト後に sessionStorage 内の userToken を削除します。

```typescript
  logout() {
    // 登出
    this.userPool.getCurrentUser()?.signOut();
    sessionStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
```

## ログインページ

ログインページは `src/app/components/login/login.component.ts` です。Cognito の SDK を使用してログインし、成功したら idToken または accessToken を sessionStorage に保存します。

ページの表示内容は authMode で制御します。authMode には次の種類があります：

- login：ログインページ
- register：ユーザー登録ページ
- forgotPassword：パスワードを忘れた場合のページ
- confirmSignUp：認証ページ
- resetPassword：パスワードリセットページ

対応するボタンをクリックすると、authService の switchMode メソッドが呼び出されて authMode が切り替わり、ページの表示内容も切り替わります。

ページの実装：

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

## アニメカレンダーページ

アニメカレンダーページは `src/app/components/home/home.component.ts` です。`bgm.service.getCalendar` を呼び出してデータを取得・表示します。

ページの初期化時に `ngOnInit` メソッドを呼び出して、データを取得・表示します。

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

## 検索ページ

検索ページは `src/app/components/search/search.component.ts` です。`bgm.service.search` を呼び出してデータを取得・表示します。

ページは title で検索キーワードを受け取り、options で表示内容を制御します。options には次の種類があります：

- limit：1 ページあたりの表示件数
- type：タイプ
- meta_tags：メタタグ
- tag：タグ
- air_date：放送日
- rating：評価
- rank：ランキング
- nsfw：成人向けコンテンツを含めるかどうか
- page：ページ番号

API にリクエストを送信する際は、title と options を再構成してから送信します。リクエストの再構成は次のとおりです：

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

## インターセプターによる認証情報の追加

`src/app/interceptors/auth.interceptor.ts` では、インターセプターを介してリクエストに認証情報を追加します。

インターセプターの実装：

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

インターセプターを使用するには、app.config.ts でインターセプターを設定する必要があります。

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
```

## ガードによるページ保護

`src/app/guards/auth.guard.ts` では、ガードを使用してログインが必要なページを保護し、未ログインの場合はログインページへリダイレクトします。

ガードの実装：

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

ガードを使用するには、ルーティング設定でガードを指定する必要があります。

```typescript
{ path: '', component: HomeComponent, canActivate: [authGuard] }, # 主页需要登录
```

# プロジェクトの起動

1. プロジェクトを起動する

	```shell
	ng serve
	```

2. URL にアクセスする

	アクセス先：[http://localhost:4200/](http://localhost:4200/)

# プロジェクトのデプロイ

- プロジェクトをローカルでビルドする

	```shell
	ng build
	```

- 自動デプロイ

	本プロジェクトでは、GitHub Actions を使用して GitHub Pages へ自動デプロイします。コードを GitHub に push するたびに、GitHub Actions が push イベントを検出し、プロジェクトを自動的にビルドして GitHub Pages にデプロイします。

	GitHub Actions によるプロジェクトの自動デプロイを設定するため、設定ファイル `.github/workflows/main.yml` を作成します。

	内容は次のとおりです：

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
