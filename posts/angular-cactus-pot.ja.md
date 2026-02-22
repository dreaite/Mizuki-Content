---
title: '基于Angular的动画展示网站+登录注册（cognito）'
published: 2024-11-12
updated: 2024-11-12
description: '该项目是基于Angular的Web应用，用于展示和搜索Bangumi上的动画，使用Cognito进行用户认证。项目包含自动部署到GitHub Pages的功能，使用GitHub Actions进行自动化构建和部署。主要技术栈包括Angular 16、TypeScript、HTML和CSS，项目结构清晰，包含用户登录、注册、搜索和动画日历等功能。'
permalink: 'angular-cactus-pot.ja'
image: 'https://r2.dreaife.tokyo/notion/covers/13c5465cca178004ad54d1f3b101d56a/IMG_1506.jpg'
tags: ['ts', 'angular', 'github-action', 'doc']
category: 'FRONTEND'
draft: false
lang: 'ja'
---

# プロジェクト紹介

本プロジェクトは私の Angular 練習用のプロジェクトで、Angular をベースとした Web アプリケーションです。Bangumi に掲載されているアニメを表示・検索するためのもので、API は [Bangumi API](https://bangumi.github.io/api/) から提供されています。

本プロジェクトは [GitHub Actions](https://github.com/features/actions) を使用して、[GitHub Pages](https://dreaife.github.io/my-angular-project-test/) に自動デプロイします。

## プロジェクト名

my-angular-project-test

URL：[https://dreaife.github.io/my-angular-project-test/](https://dreaife.github.io/my-angular-project-test/)

## プロジェクトの目的

- Angular をベースにした静的サイトをデプロイする
- GitHub Actions の自動デプロイを練習する
- API 呼び出しで機能を実現する
- Cognito を使用してユーザー認証を行う
- インターセプターを使用してリクエストを処理する
- ガードを使用してページを保護する

## プロジェクト技術スタック

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

1. Node.js をインストール

    ```shell
    <https://nodejs.org/en/download/>
    ```

2. Angular CLI をインストール

    ```shell
    npm install -g @angular/cli
    ```

3. プロジェクトを取得

    ```shell
    git clone <https://github.com/dreaife/my-angular-project-test.git>
    cd my-angular-project-test
    npm install
    ```


# プロジェクト構成

## ディレクトリ構成

本プロジェクトは Angular CLI を使用して作成され、構造は以下のとおりです：


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


以下の通りに:

- `src/app` ディレクトリはプロジェクトの主要ディレクトリで、すべてのコンポーネント、サービス、インターセプター、ガード等を含みます。
- `src/environments` ディレクトリは環境設定ファイルで、開発環境と本番環境の設定を含みます。
- `src/components` ディレクトリはプロジェクトの主要コンポーネントで、すべてのページコンポーネントを含みます。
    - `login` コンポーネントはログインページで、Cognito の SDK を使用してログインします。
    - `home` コンポーネントはアニメーションカレンダーのページで、`bgm.service.getCalendar` を呼び出してデータを取得・表示します。
    - `search` コンポーネントは検索ページで、`bgm.service.search` を呼び出してデータを取得・表示します。
- `src/guards` ディレクトリはプロジェクトの主要なガードを含み、`auth.guard.ts` ガードを含み、ログインが必要なページを保護します。未ログインの場合はログインページへリダイレクトします。
- `src/interceptors` ディレクトリはプロジェクトの主要なインターセプターを含み、`auth.interceptor.ts` インターセプターを含み、リクエストに認証情報を追加します。
- `src/services` ディレクトリはプロジェクトの主要なサービスで、`auth.service.ts` サービスはログイン・ログアウトなどの処理を担当します。`bgm.service.ts` サービスは Bangumi API を呼び出すためのものです。
- `src/main.ts` はプロジェクトのメインエントリーファイルで、Angular アプリケーションを起動するためのものです。

# 关键功能实现

## 使用Cognito进行用户认证

### Cognito を使用したユーザー認証

`src/app/services/auth.service.ts` で、Cognito の SDK を使用してユーザー認証を行います。

Cognito を使用する前に、AWS Cognito でユーザプールを作成し、カスタム Cognito バリデーションドメインを設定し、アプリクライアントを作成してクライアントIDを取得する必要があります。

取得した ID を `src/app/environment/environment.ts` に配置して、Cognito の設定情報を行います。

### ログイン

`ログイン`

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


用户设置新密码时，调用completeNewPassword方法，通过cognitoUser.completeNewPasswordChallenge方法设置新密码。

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


### 注册

通过cognitoUser.signUp方法进行注册，成功后将用户名和密码存储到cognito中。将页面重定向到登录页面。

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


### 登出

通过cognitoUser.signOut方法进行登出，登出后删除sessionStorage中的userToken。

```typescript
logout() {
    // 登出
    this.userPool.getCurrentUser()?.signOut();
    sessionStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
```


## ログインページ

ログインページは `src/app/components/login/login.component.ts` で、Cognito の SDK を使用してログインを実行し、成功時には idToken または accessToken を sessionStorage に保存します。

ページは authMode で表示内容を制御します。authMode には以下の種類があります：

- login：ログインページ
- register：登録ページ
- forgotPassword：パスワードを忘れたページ
- confirmSignUp：確認ページ
- resetPassword：パスワードをリセットするページ

対応するボタンをクリックすると、authService の switchMode メソッドを呼び出して authMode を切り替え、表示内容を切り替えます。

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
            // 初回ログインでパスワード変更が必要、モーダルを表示
            this.showNewPasswordModal = true;
            this.cognitoUser = resp.cognitoUser;
          } else {
            // ログイン成功
            this.message = 'ログイン成功！';
          }
        }).catch(err => {
          this.message = `ログイン失敗：${err}`;
        });
    } else if (this.authMode === 'register') {
      this.authService.signUp(this.username, this.password, this.email).then(
        () => {
          this.message = '登録に成功しました！メールを確認して認証コードを入力してください。';
          this.authMode = 'confirmSignUp';
        },
        (err) => (this.message = `登録に失敗しました：${err}`)
      );
    } else if (this.authMode === 'forgotPassword') {
      this.authService.forgotPassword(this.username).then(
        () => {
          this.message = '認証コードを送信しました。メールを確認して認証コードと新しいパスワードを入力してください。';
          this.authMode = 'resetPassword';
        },
        (err) => (this.message = `認証コードの送信に失敗しました：${err}`)
      );
    } else if (this.authMode === 'confirmSignUp') {
      this.authService.confirmSignUp(this.username, this.code).then(
        () => (this.message = '認証成功！ ログインしてください。'),
        (err) => (this.message = `認証に失敗しました：${err}`)
      );
    } else if (this.authMode === 'resetPassword') {
      this.authService.confirmPassword(this.username, this.code, this.newPassword).then(
        () => {
          this.message = 'パスワードのリセットに成功しました！ 新しいパスワードでログインしてください。';
          this.authMode = 'login'; // ログインページに切り替え
        },
        (err) => (this.message = `パスワードの更新に失敗しました：${err}`)
      );
    }
  }
```


## アニメーションカレンダーページ

アニメーションカレンダーページは `src/app/components/home/home.component.ts` で、`bgm.service.getCalendar` を呼び出してデータを取得・表示します。

ページが初期化されると、`ngOnInit` メソッドを呼び出してデータを取得・表示します。

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

検索ページは `src/app/components/search/search.component.ts` で、`bgm.service.search` を呼び出してデータを取得・表示します。

ページは title で検索キーワードを受け取り、options で表示内容を制御します。options には次の種類があります：

- limit：1 ページあたりの表示件数
- type：タイプ
- meta_tags：メタタグ
- tag：タグ
- air_date：放送日
- rating：評価
- rank：ランク
- nsfw：アダルト内容を含むか
- page：ページ番号

API へリクエストを送る際、title と options を組み直して送信します。リクエストの再構築は以下のとおりです：

```typescript
// 検索方法
  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.isLoading = true;
      this.errorMessage = '';

      // 検索オプションを設定
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
          this.searchResults = response.data; // data 配列を抽出
          this.totalResults = response.total; // 総数を抽出
          this.isLoading = false;
        },
        (error) => {
          this.errorMessage = '検索に失敗しました。再試行してください。';
          this.isLoading = false;
        }
      );
    }
  }
```


## インターセプターによる認証情報の付与

`src/app/interceptors/auth.interceptor.ts` では、インターセプターを介してリクエストに認証情報を追加します。

インターセプターの実装：

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = environment.bgm.authToken;

  if (req.url.startsWith('<https://api.bgm.tv/v0>')) { # もしリクエストURLがhttps://api.bgm.tv/v0で始まる場合、認証情報を追加
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`, # 認証情報を追加
      }
    });
    return next(authReq);
  }
  return next(req);
};
```


インターセプターを使用する際には app.config.ts でインターセプターを設定する必要があります。

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

`src/app/guards/auth.guard.ts` で、ログインが必要なページを保護します。未ログインの場合はログインページへリダイレクトします。

ガードの実装：

```typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    // 未ログインの場合、/loginへリダイレクト
    router.navigate(['/login']);
    return false;
  }
};
```


ルーティング設定でガードを使用します。

```typescript
{ path: '', component: HomeComponent, canActivate: [authGuard] }, # 主页需要登录
```


# プロジェクト起動

1. プロジェクトを起動

    ```shell
    ng serve
    ```

2. アクセス先

    アクセス先：[http://localhost:4200/](http://localhost:4200/)


# プロジェクトデプロイ

- ローカルでプロジェクトをビルド

    ```shell
    ng build
    ```

- 自動デプロイ

    本プロジェクトは GitHub Actions を使用して GitHub Pages に自動デプロイします。コードを GitHub にプッシュするたび、GitHub Actions がプッシュイベントを検出し、自動的にプロジェクトをビルドして GitHub Pages にデプロイします。

    設定ファイル `.github/workflows/main.yml` を作成して、GitHub Actions による自動デプロイを設定します。

    内容は以下のとおりです：

```yaml
# GitHub Actions ワークフロー，用途: プロジェクトを GitHub Pages にデプロイ
name: Deploy to GitHub Pages

# トリガー条件: master ブランチへプッシュされたとき
on:
  push:
    branches:
    - master  # または監視するブランチ名

jobs:
  build-and-deploy:
    # 最新の Ubuntu を実行環境として使用
    runs-on: ubuntu-latest
    steps:
    # 第1歩：コードをチェックアウト
    - name: Checkout code
      uses: actions/checkout@v3

    # 第2歩：Node.js 環境を設定
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
      node-version: '20'  # プロジェクトの要件に応じて Node.js のバージョンを変更

    # 第3歩：プロジェクトの依存をインストール
    - name: Install dependencies
      run: npm install

    # 第4歩：環境設定ファイル environment.ts を生成
    - name: Generate environment.ts
      run: |
      # src/app/environment ディレクトリを作成（存在しない場合）
      mkdir -p src/app/environment

      # environment.ts ファイルを生成し、Cognito と Bangumi API の設定情報を含める
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
      };" > src/app/environment/environment.ts # 環境設定ファイルを生成

      # 生成したファイルを列挙して確認
      ls src/app/environment

    # 第5歩：プロジェクトをビルド
    - name: Build project
      run: npm run build -- --configuration production --base-href "/my-angular-project-test/" # プロジェクトをビルド

    # 第6歩：GitHub Pages にデプロイ
    - name: Deploy to GitHub Pages
      uses: JamesIves/github-pages-deploy-action@v4
      with:
      # browser はビルド出力のフォルダ、内部ファイルには index.html が含まれる
      folder: dist/my-angular-project/browser  # 実際の出力パスに従ってください
      token: ${{ secrets.TOKEN }}

# 環境変数の設定、機密情報は GitHub Secrets に保存します

env:
    COGNITO_USER_POOL_ID: ${{ secrets.COGNITO_USER_POOL_ID }}
    COGNITO_CLIENT_ID: ${{ secrets.COGNITO_CLIENT_ID }}
    COGNITO_DOMAIN: ${{ secrets.COGNITO_DOMAIN }}
    BGM_AUTH_TOKEN: ${{ secrets.BGM_AUTH_TOKEN }}
    GITHUB_TOKEN: ${{ secrets.TOKEN }}
```
