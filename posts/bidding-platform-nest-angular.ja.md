---
title: '基于 Nest.js 和 Angular 的竞价平台-以及Jest测试和CICD'
published: 2024-12-07
updated: 2024-12-08
description: '该项目是一个基于Nest.js和Angular的竞价平台，提供用户注册、项目管理和投标管理功能，使用PostgreSQL作为数据库，并通过Swagger生成API文档。后端实现了安全认证，使用AWS Cognito进行用户身份验证。前端构建了用户友好的界面，支持项目展示和投标管理。项目使用Jest进行测试，确保代码质量，并通过GitHub Actions实现持续集成和部署。'
permalink: 'bidding-platform-nest-angular'
image: 'https://r2.dreaife.tokyo/notion/covers/1555465cca1780f382f5f1421004b0a8/IMG_1767.jpg'
tags: ['nodejs', 'ts', 'aws']
category: 'BACKEND'
draft: false
lang: 'ja'
---

# Nest.js と Angular を基盤とした入札プラットフォーム

## プロジェクトの概要

本プロジェクトは、Nest.js と Angular を基盤とした入札プラットフォームで、入札と管理のための完全なシステムを提供することを目的としています。

プロジェクトの主な機能には、ユーザー登録とログイン、プロジェクトの作成と管理、入札管理、ユーザーロール管理が含まれます。フロントエンドは Angular フレームワークで構築され、バックエンドは Nest.js フレームワークで構築され、データベースは PostgreSQL を使用し、Swagger を通じて API ドキュメントを提供します。

このプロジェクトは DigitalOcean の Droplet 上にデプロイされ、フロントエンドは Nginx を使ってデプロイされています。

```plain text
前端 (Angular)
  ↓（API 请求）
Cognito (用户认证)
  ↓（验证通过后请求转发）
后端 (Nest.js)
  ↓（数据库查询）
数据库 (PostgreSQL)
  ↑（数据返回）
后端 (Nest.js)
  ↑（处理后的响应）
前端 (Angular)
```

## プロジェクト構造

- **frontend**: すべてのフロントエンドコードを含み、Angular フレームワークで構築されています。
- **backend**: すべてのバックエンドコードを含み、Nest.js フレームワークで構築されています。
- **.github**: CI/CD のための設定ファイルを含みます。

# バックエンド

## バックエンドの構築

バックエンドは Nest.js フレームワークで構築され、モジュール化され拡張性のあるアーキテクチャを提供します。主な機能は、ユーザー認証、プロジェクト管理、入札管理などです。バックエンドは TypeORM を通じてデータベース操作を行い、複数のデータベースタイプをサポートします。

### バックエンド技術スタック

- **Nest.js**: 高速で拡張性の高い Node.js サーバーサイドアプリケーションを構築するためのフレームワーク。
- **TypeORM**: データベースとやり取りする ORM フレームワーク。
- **Swagger**: API ドキュメントを生成するための Swagger。

### バックエンド構築手順

1. **依存関係のインストール**: `backend` ディレクトリで `npm install` を実行してすべての必要な依存関係をインストールします。
2. **環境変数の設定**: プロジェクトのルートに `.env` ファイルを作成し、データベース接続情報やその他の環境変数を設定します。
3. **開発サーバーの起動**: `npm run start:dev` を使って開発サーバーを起動します。ホットリロードをサポートします。
4. **本番ビルド**: `npm run build` を使って本番環境ビルドを行い、生成されたファイルは `dist` ディレクトリに配置されます。

### データベース

このプロジェクトは PostgreSQL をデータベースとして使用し、すべてのデータベース操作は TypeORM を介して行われます。データベースの初期化スクリプトは `backend/SQL/init-script.sql` にあり、データベースの作成と初期化に使用できます。

バックエンドのコード構造は明確で、モジュール化設計により機能の拡張と保守がより容易になります。

## バックエンドのセキュリティ認証

バックエンドのセキュリティ認証は AWS Cognito を用いて実現しており、Nest.js のインターセプターとサービスと組み合わせて、ユーザーの認証と認可を保証します。

### 認証アーキテクチャ

- **AWS Cognito**: ユーザー登録、ログイン、認証に使用。Cognito は安全なユーザープールとIDプールの管理を提供します。
- **Nest.js インターセプター**: HTTP リクエストを捕捉し、リクエストヘッダの JWT Token を検証して、ユーザーの身元を確認します。
- **Service 層**: Cognito とのやり取りを処理し、Cognito ユーザーとデータベース上のユーザー情報を関連付けます。

### 実装手順

1. **Cognito ユーザープールの設定**: AWS Cognito でユーザープールを作成し、JWT Token の生成と検証をサポートするアプリクライアントを設定します。
2. **JWT インターセプター**: Nest.js でインターセプターを作成し、リクエストヘッダの JWT Token を解析・検証し、ユーザー情報をリクエストオブジェクトに付加します。

    ```typescript
    import { Injectable, NestInterceptor, ExecutionContext, CallHandler, UnauthorizedException } from '@nestjs/common';
    import { Observable } from 'rxjs';
    import { AuthService } from './auth.service';
    
    @Injectable()
    export class JwtInterceptor implements NestInterceptor {
      constructor(private readonly authService: AuthService) {}
    
      intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
    
        if (!token) {
          throw new UnauthorizedException('Token not found');
        }
    
        const user = this.authService.validateToken(token);
        if (!user) {
          throw new UnauthorizedException('Invalid token');
        }
    
        request.user = user;
        return next.handle();
      }
    }
    ```

3. **ユーザーサービス**: データベースからユーザー情報を取得し、それを Cognito のユーザーと関連付けるユーザーサービスを作成します。Cognito ID を一意識別子として、データベースにユーザー情報を格納します。

    ```typescript
    import { Injectable } from '@nestjs/common';
    import { UsersRepository } from './users.repository';
    
    @Injectable()
    export class UsersService {
      constructor(private readonly usersRepository: UsersRepository) {}
    
      async findOrCreateUser(cognitoId: string, email: string) {
        let user = await this.usersRepository.findOneByCognitoId(cognitoId);
        if (!user) {
          user = await this.usersRepository.create({ cognitoId, email });
        }
        return user;
      }
    }
    ```

4. **役割と権限管理**: データベースにユーザーの役割（例: 管理者、クライアント、入札者）を定義し、インターセプター内で役割に基づく権限検証を行います。

    ```typescript
    import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
    import { Reflector } from '@nestjs/core';
    
    @Injectable()
    export class RolesGuard implements CanActivate {
      constructor(private reflector: Reflector) {}
    
      canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
          return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return roles.includes(user.role);
      }
    }
    ```

    必要な権限を持つ API には `@Roles('admin')` デコレーターを追加して、必要な役割を指定します。

    ```typescript
    @Post()
    @Roles('admin')
    createProject(@Body() createProjectDto: CreateProjectDto) {
      return this.projectsService.createProject(createProjectDto);
    }
    ```

このようにして、バックエンドはユーザーの身元と権限を効果的に管理し、システムのセキュリティと信頼性を確保します。

## プロジェクト管理の実装

プロジェクト管理モジュールでは、Controller を介して Service を呼び出し、Service を介してデータベースとやり取りする方法を示します。

### Controller

`ProjectsController` では、HTTP リクエストを処理するルートとメソッドを定義します。

```typescript
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsDto } from '../entities/DTO/projects.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projectsService.findOne(id);
  }

  @Post()
  create(@Body() projectDto: ProjectsDto) {
    return this.projectsService.create(projectDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() projectDto: ProjectsDto) {
    return this.projectsService.update(id, projectDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.projectsService.delete(id);
  }
}
```

### Service

`ProjectsService` はビジネスロジックの処理とデータベースとの対話を担当します。

```typescript
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Project } from '../entities/projects.entity';
import { ProjectsDto } from '../entities/DTO/projects.dto';

@Injectable()
export class ProjectsService {
  constructor(private dataSource: DataSource) {}

  findAll() {
    return this.dataSource.getRepository(Project).find();
  }

  findOne(id: number) {
    return this.dataSource.getRepository(Project).findOneBy({ project_id: id });
  }

  create(project: ProjectsDto) {
    return this.dataSource.getRepository(Project).save(project);
  }

  update(id: number, project: ProjectsDto) {
    return this.dataSource.getRepository(Project).update(id, project);
  }

  delete(id: number) {
    return this.dataSource.getRepository(Project).delete(id);
  }
}
```

### データベースエンティティ

`Project` エンティティはデータベース内のプロジェクトの構造を定義します。`@Entity()` デコレーターでエンティティを、`@Column()` デコレーターで列を定義します。

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('decimal')
  budget_min: number;

  @Column('decimal')
  budget_max: number;

  @Column('date')
  deadline: Date;

  @Column({ default: 'open' })
  status: string;
}
```

このようにして、Controller は HTTP リクエストの処理を、Service はビジネスロジックを、データベースエンティティはデータ構造を定義し、三者が協力して完全なプロジェクト管理機能を実現します。

# フロントエンド

フロントエンドは Angular フレームワークを用いて構築され、使いやすいユーザーインターフェースとインタラクション体験を提供します。主な機能は、プロジェクトの表示、入札管理、ユーザー登録とログインなど。

## フロントエンド技術スタック

- **Angular**: 現代的なシングルページアプリケーションを構築するためのもの。
- **RxJS**: 非同期データフローの処理に使用します。
- **Angular CLI**: 強力な開発ツールとコマンドラインインターフェースを提供します。

## フロントエンドのビルド手順

1. **依存関係のインストール**: `frontend` ディレクトリで `npm install` を実行して、すべての必要な依存関係をインストールします。
2. **開発サーバー**: `ng serve` を使って開発サーバーを起動します。デフォルトは `http://localhost:4200/` です。
3. **本番ビルド**: `ng build` を使って本番環境をビルドします。生成されたファイルは `dist` ディレクトリに配置されます。

## プロジェクト詳細コンポーネント

フロントエンドアプリケーションは複数のコンポーネントで構成され、各コンポーネントが特定の機能モジュールを担当します。以下はサンプルコンポーネントの実装です。

`ProjectDetailComponent` は単一プロジェクトの詳細情報を表示するためのものです。

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { BidsService } from '../../services/bids.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: any = null;
  bids: any[] = [];
  loading = false;
  error = '';
  userRole: string = '';

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private bidsService: BidsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.loadProject(+projectId);
      this.loadBids(+projectId);
    }
  }

  loadProject(id: number) {
    this.loading = true;
    this.projectsService.getProjectById(id).subscribe({
      next: (data) => {
        this.project = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'ロードできませんでした';
        this.loading = false;
        console.error('ロードエラー:', err);
      }
    });
  }

  loadBids(projectId: number) {
    this.bidsService.getBidsByProjectId(projectId).subscribe({
      next: (data) => {
        this.bids = data;
      },
      error: (err) => {
        console.error('投標リストのロードエラー:', err);
      }
    });
  }
}
```


### テンプレートファイル

`project-detail.component.html` はプロジェクト詳細の表示構造を定義します。

```html
<div class="project-detail">
  <div *ngIf="loading" class="loading">
    ロード中...
  </div>

  <div *ngIf="error" class="error">
    {{ error }}
  </div>

  <div *ngIf="project && !loading" class="project-info">
    <h2>{{ project.title }}</h2>
    <div class="project-meta">
      <p>予算: ¥{{ project.budget_min }} - ¥{{ project.budget_max }}</p>
      <p>締め切り: {{ project.deadline | date }}</p>
      <p>ステータス: {{ project.status }}</p>
    </div>

    <div class="project-description">
      <h3>プロジェクトの説明</h3>
      <p>{{ project.description }}</p>
    </div>

    <app-bid-form
      *ngIf="userRole === 'bidder' && project.status === 'open'"
      [projectId]="project.project_id"
      (bidSubmitted)="loadBids(project.project_id)">
    </app-bid-form>

    <div class="bids-section" *ngIf="userRole === 'client' || userRole === 'admin'">
      <h3>入札リスト</h3>
      <div *ngFor="let bid of bids" class="bid-card">
        <p>入札者: {{ bid.bidder_id }}</p>
        <p>入札額: ¥{{ bid.amount }}</p>
        <p>入札説明: {{ bid.message }}</p>
        <p>状態: {{ bid.status }}</p>
      </div>
    </div>
  </div>
</div>
```


このようにして、フロントエンドアプリケーションは豊富なユーザーインタラクションとデータ表示機能を提供します。

# テスト

プロジェクトは Jest を用いて単体テストと結合テストを実施し、コードの正確性と安定性を確保します。同時に ESLint を用いてコード品質をチェックし、コードスタイルの一貫性を保ちます。

## Jest テスト

Jest は強力な JavaScript テストフレームワークで、アサーション、モック、スナップショットテストをサポートします。

### Jest 設定

プロジェクトの `package.json` に Jest の設定を行います。

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:cov": "jest --coverage"
},
"jest": {
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": "src",
  "testRegex": ".*\\\\.spec\\\\.ts$",
  "transform": {
    "^.+\\\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": [
    "**/*.(t|j)s"
  ],
  "coverageDirectory": "../coverage",
  "testEnvironment": "node"
}
```


### サンプルテスト

以下はシンプルなサービステストの例です：

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('应该返回单个项目', async () => {
      const result = await service.findOne(1);
      expect(result).toEqual(mockProject);
    });
  });
});
```


## ESLint コード品質チェック

ESLint は JavaScript コードのパターンを検出・報告するツールで、開発者がコードの一貫性と品質を保つのに役立ちます。

### ESLint 設定

プロジェクトのルートに `.eslintrc.js` ファイルを作成します：

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
```


### ESLint の実行

`package.json` にスクリプトを追加します：

```json
"scripts": {
  "lint": "eslint . --ext .ts"
}
```

`npm run lint` を実行してコード品質をチェックします。

Jest と ESLint を活用することで、プロジェクトはコードの正確性と一貫性を確保し、開発効率とコード品質を向上させます。

# CI/CD

このプロジェクトは GitHub Actions を用いて継続的インテグレーションと継続的デリバリー（CI/CD）を実現し、コミットごとに自動でビルド、テスト、デプロイを実行します。

## GitHub Actions

GitHub Actions は、ソフトウェア開発ワークフローを自動化するツールです。設定ファイルを定義することで、コードリポジトリ内でビルド、テスト、デプロイのタスクを自動的に実行できます。

### ワークフローの設定

プロジェクトの `.github/workflows/deploy.yml` ファイルで CI/CD ワークフローを定義しています：

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '20.18.0'

    - name: Install dependencies
      run: |
        cd backend
        npm install
        cd ../frontend
        npm install

    - name: Run tests
      run: |
        cd backend
        npm run test:cov
        cd ../frontend
        npm run test

    - name: Lint code
      run: |
        cd backend
        npm run lint
        cd ../frontend
        npm run lint

    - name: Build project
      run: |
        cd backend
        npm run build
        cd ../frontend
        npm run build

    - name: Create Release Package
      run: |
        mkdir -p build
        cd backend
        tar -czvf ../build/backend.tar.gz dist
        cd ../frontend
        tar -czvf ../build/frontend.tar.gz dist
        cd ..

    - name: Deploy to DigitalOcean
      uses: digitalocean/action-doctl@v2
      with:
        token: ${{ secrets.DIGITALOCEAN_ACCESS_TOKEN }}
      run: |
        # 部署脚本或命令
```


## デプロイ

- **DigitalOcean**: プロジェクトは DigitalOcean の Droplet 上にデプロイされ、フロントエンドは Nginx を介してデプロイされます。
- **自動化フロー**: `main` ブランチへのコードコミットごとに、GitHub Actions が自動でビルド、テスト、デプロイのフローを実行します。

このようにして、コードの変更に迅速に対応でき、各コミットのコードが厳密にテストと検証を経て、本番環境へ自動デプロイされることを保証します。
