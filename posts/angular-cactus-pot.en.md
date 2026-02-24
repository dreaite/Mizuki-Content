---
title: 'Angular-based Anime Showcase Website + Login/Registration (Cognito)'
published: 2024-11-12
updated: 2024-11-12
description: 'This project is an Angular-based web application for displaying and searching anime on Bangumi, with Cognito for user authentication. It supports automatic deployment to GitHub Pages using GitHub Actions for automated build and deployment. The main tech stack includes Angular 16, TypeScript, HTML, and CSS, and the project includes features such as login, registration, search, and an anime calendar.'
image: 'https://r2.dreaife.tokyo/notion/covers/13c5465cca178004ad54d1f3b101d56a/IMG_1506.jpg'
tags: ['ts', 'angular', 'github-action', 'doc']
category: 'FRONTEND'
draft: false
lang: 'en'
---

# Project Introduction

This project is my Angular practice project, a web application based on Angular used to display and search for animations on Bangumi, with APIs sourced from the Bangumi API.

This project uses [GitHub Actions](https://github.com/features/actions) to automatically deploy to [GitHub Pages](https://dreaife.github.io/my-angular-project-test/).

## Project Name

my-angular-project-test

URL: [https://dreaife.github.io/my-angular-project-test/](https://dreaife.github.io/my-angular-project-test/)

## Project Goals

- Deploy a static website based on Angular
- Practice automatic deployment with GitHub Actions
- Implement features by calling APIs
- Use Cognito for user authentication
- Use an interceptor to handle requests
- Use guards to protect pages

## Tech Stack

- Angular 16
- TypeScript
- HTML
- CSS
- GitHub Actions
- Cognito

# Environment Setup

## Environment Requirements

- Node.js version 20 or higher
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

This project was created with Angular CLI and the structure is as follows:

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
│   │   ├── index.html
│   │   ├── main.ts
│   ├── ...
```

Among them:

- `src/app` directory is the main directory of the project, containing all components, services, interceptors, guards, etc.
- `src/environments` directory contains environment configuration files, including development and production configurations.
- `src/components` directory is the main set of components, containing all page components.
    - The `login` component is the login page, invoking Cognito’s SDK to log in;
    - The `home` component is the animation calendar page, fetching data via `bgm.service.getCalendar` and displaying it;
    - The `search` component is the search page, fetching data via `bgm.service.search` and displaying it.
- `src/guards` directory contains the main guards, including `auth.guard.ts`, used to protect pages that require login; if not logged in, redirects to the login page.
- `src/interceptors` directory contains the main interceptors, including `auth.interceptor.ts`, used to attach authentication information to requests.
- `src/services` directory contains the main services, including `auth.service.ts` for handling login, logout, etc.; `bgm.service.ts` for calling the Bangumi API.
- `src/main.ts` is the main entry file to start the Angular application.

# Key Feature Implementations

## User Authentication with Cognito

In `src/app/services/auth.service.ts`, Cognito’s SDK is used to authenticate users.

Before using Cognito, you need to create a user pool in AWS Cognito, customize Cognito domain, and create an app client to obtain the client ID.

Configure Cognito using the obtained ID in `src/app/environment/environment.ts`.

### Login

Login is performed via the `cognitoUser.authenticateUser` method. On success, the idToken or accessToken is stored in sessionStorage.

tips:

For unverified users, you need to reset the password. At this time, the `newPasswordRequired` method should be triggered, by setting `resolve({ newPasswordRequired: true, cognitoUser })` and switching the UI content on the login page to prompt the user to set a new password.

Code implementation:

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
          // Get Tokens
          const idToken = result.getIdToken().getJwtToken();
          const accessToken = result.getAccessToken().getJwtToken();
          const refreshToken = result.getRefreshToken().getToken();

          // console.log('idToken', idToken);
          // console.log('accessToken', accessToken);
          // console.log('refreshToken', refreshToken);

          // Store the idToken or accessToken in sessionStorage as userToken
          sessionStorage.setItem('userToken', accessToken);

          // Save tokens or use them where needed
          resolve({ idToken, accessToken, refreshToken });

          // Redirect to the home page after successful login
          this.router.navigate(['/']);
        },
        onFailure: (err) => {
          reject(err.message || JSON.stringify(err));
        },
        newPasswordRequired: (userAttributes, requiredAttributes) => {
          // Trigger new password requirement, prompt front-end to set a new password
          resolve({ newPasswordRequired: true, cognitoUser });
        }
      });
    });
  }
```


To set a new password, call the `completeNewPassword` method and use `cognitoUser.completeNewPasswordChallenge` to set the new password.

```typescript
// Set new password method
  completeNewPassword(cognitoUser: CognitoUser, newPassword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      cognitoUser.completeNewPasswordChallenge(newPassword, {}, {
        onSuccess: (session) => resolve(session),
        onFailure: (err) => reject(err.message || JSON.stringify(err))
      });
    });
  }
```


### Sign Up

Registration is performed via `cognitoUser.signUp`; on success, the username and password are stored in Cognito. The page is redirected to the login page.

```typescript
// Sign up method
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

Sign out via `cognitoUser.signOut`, then remove the userToken from sessionStorage and navigate to login.

```typescript
logout() {
    // Sign out
    this.userPool.getCurrentUser()?.signOut();
    sessionStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
```


## Login Page

The login page is `src/app/components/login/login.component.ts`, using Cognito’s SDK to log in, and on success storing the idToken or accessToken in sessionStorage.

The page content is controlled by `authMode`, which can be the following:

- login: login page
- register: registration page
- forgotPassword: forgot password page
- confirmSignUp: verification page
- resetPassword: reset password page

Clicking the corresponding button calls the `switchMode` method of `authService` to switch `authMode` and reveal the corresponding content.

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
            // First-time login requires password reset, show modal
            this.showNewPasswordModal = true;
            this.cognitoUser = resp.cognitoUser;
          } else {
            // Login successful
            this.message = 'Login successful!';
          }
        }).catch(err => {
          this.message = `Login failed: ${err}`;
        });
    } else if (this.authMode === 'register') {
      this.authService.signUp(this.username, this.password, this.email).then(
        () => {
          this.message = 'Registration successful! Please check your email and enter the verification code.';
          this.authMode = 'confirmSignUp';
        },
        (err) => (this.message = `Registration failed: ${err}`)
      );
    } else if (this.authMode === 'forgotPassword') {
      this.authService.forgotPassword(this.username).then(
        () => {
          this.message = 'Verification code has been sent. Please check your email and enter the code and new password.';
          this.authMode = 'resetPassword';
        },
        (err) => (this.message = `Failed to send verification code: ${err}`)
      );
    } else if (this.authMode === 'confirmSignUp') {
      this.authService.confirmSignUp(this.username, this.code).then(
        () => (this.message = 'Verification successful! Please log in.'),
        (err) => (this.message = `Verification failed: ${err}`)
      );
    } else if (this.authMode === 'resetPassword') {
      this.authService.confirmPassword(this.username, this.code, this.newPassword).then(
        () => {
          this.message = 'Password reset successful! Please log in with the new password.';
          this.authMode = 'login'; // Switch back to login page
        },
        (err) => (this.message = `Password update failed: ${err}`)
      );
    }
  }
```


## Animation Calendar Page

The animation calendar page is `src/app/components/home/home.component.ts`, which fetches data via `bgm.service.getCalendar` and displays it.

On page initialization, the `ngOnInit` method is invoked to fetch and display data.

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

   // Show modal and load data
   openModal(itemId: string): void {
    this.bgmService.getSubject(itemId).subscribe((data) => {
      this.selectedItem = data;
      this.showModal = true;
    });
  }
  // Close modal
  closeModal(): void {
    this.showModal = false;
    this.selectedItem = null;
  }

  // Helper: find the official website URL in the infobox
  getOfficialWebsite(): string | null {
    if (!this.selectedItem || !this.selectedItem.infobox) return null;
    const website = this.selectedItem.infobox.find((info: any) => info.key === '官方网站');
    return website ? website.value : null;
  }
```


## Search Page

The search page is `src/app/components/search/search.component.ts`, which fetches data via `bgm.service.search` and displays it.

The page uses the title to receive the search keyword and an options object to control the content shown. Options include:

- limit: items per page
- type: category
- meta_tags: meta tags
- tag: tags
- air_date: air date
- rating: rating
- rank: ranking
- nsfw: include adult content
- page: page number

When sending a request to the API, the title and options are restructured and sent. The request restructuring is as follows:

```typescript
// Search method
  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.isLoading = true;
      this.errorMessage = '';

      // Configure search options
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
          this.searchResults = response.data; // extract data array
          this.totalResults = response.total; // extract total
          this.isLoading = false;
        },
        (error) => {
          this.errorMessage = 'Search failed, please try again.';
          this.isLoading = false;
        }
      );
    }
  }
```


## Interceptor: Add Authentication Information

In `src/app/interceptors/auth.interceptor.ts`, an interceptor is used to attach authentication information to requests.

Interceptor implementation:

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = environment.bgm.authToken;

  if (req.url.startsWith('<https://api.bgm.tv/v0>')) { # If the request URL starts with https://api.bgm.tv/v0, add auth info
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`, # Add auth information
      }
    });
    return next(authReq);
  }
  return next(req);
};
```

When using the interceptor, configure it in app.config.ts.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
};
```


## Guard: Protect Pages

In `src/app/guards/auth.guard.ts`, guards protect pages that require login; if not logged in, redirect to the login page.

Guard implementation:

```typescript
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    // Not logged in, redirect to /login
    router.navigate(['/login']);
    return false;
  }
};
```

When using the guard, apply it in the route configuration.

```typescript
{ path: '', component: HomeComponent, canActivate: [authGuard] }, # Home page requires login
```


# Project Startup

1. Start the project

    ```shell
    ng serve
    ```

2. Access URL

    Access URL: [http://localhost:4200/](http://localhost:4200/)


# Project Deployment

- Local build

    ```shell
    ng build
    ```

- Automated deployment

    This project uses GitHub Actions to automatically deploy to GitHub Pages. Every time code is pushed to GitHub, GitHub Actions will detect the push event, automatically build the project, and deploy to GitHub Pages.

    Create the configuration file `.github/workflows/main.yml` to configure GitHub Actions automatic deployment of the project.

    The content is as follows:

```yaml
# GitHub Actions workflow to deploy the project to GitHub Pages
name: Deploy to GitHub Pages

# Trigger: when pushing to the master branch
on:
  push:
    branches:
    - master  # Or the branch you want to monitor

jobs:
  build-and-deploy:
    # Use the latest Ubuntu as the runtime
    runs-on: ubuntu-latest
    steps:
    # Step 1: Check out the code
    - name: Checkout code
      uses: actions/checkout@v3

    # Step 2: Set up Node.js environment
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'  # Modify Node.js version as needed for the project

    # Step 3: Install project dependencies
    - name: Install dependencies
      run: npm install

    # Step 4: Generate environment.ts
    - name: Generate environment.ts
      run: |
        # Create the src/app/environment directory (if it doesn't exist)
        mkdir -p src/app/environment

        # Generate environment.ts with Cognito and Bangumi API configuration
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
        };" > src/app/environment/environment.ts # Generate environment configuration file

        # List the generated files to confirm
        ls src/app/environment

    # Step 5: Build the project
    - name: Build project
      run: npm run build -- --configuration production --base-href "/my-angular-project-test/" # Build the project

    # Step 6: Deploy to GitHub Pages
    - name: Deploy to GitHub Pages
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        # folder is the built output folder, containing index.html
        folder: dist/my-angular-project/browser  # Fill in with the actual output path
        token: ${{ secrets.TOKEN }}

    # Environment variable configuration, store sensitive information using GitHub Secrets
    env:
        COGNITO_USER_POOL_ID: ${{ secrets.COGNITO_USER_POOL_ID }}
        COGNITO_CLIENT_ID: ${{ secrets.COGNITO_CLIENT_ID }}
        COGNITO_DOMAIN: ${{ secrets.COGNITO_DOMAIN }}
        BGM_AUTH_TOKEN: ${{ secrets.BGM_AUTH_TOKEN }}
        GITHUB_TOKEN: ${{ secrets.TOKEN }}
```