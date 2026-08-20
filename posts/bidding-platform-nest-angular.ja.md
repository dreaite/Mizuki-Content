---
title: 'Nest.jsとAngularを基盤とした入札プラットフォーム—JestテストとCI/CDも含む'
published: 2024-12-07
updated: 2024-12-08
description: 'Nest.js、Angular、PostgreSQL、AWS Cognitoで入札プラットフォームを構築。ユーザー・案件・入札管理、Swagger API、Jest、GitHub Actions CI/CDを扱います。'
image: 'https://r2.dreaife.tokyo/notion/covers/1555465cca1780f382f5f1421004b0a8/IMG_1767.jpg'
tags: ['nodejs', 'ts', 'aws']
category: 'PROJECT'
draft: false
lang: 'ja'
---

# Nest.js と Angular をベースにした入札プラットフォーム

## プロジェクト概要

本プロジェクトは Nest.js と Angular をベースにした入札プラットフォームで、包括的な入札・管理システムの提供を目的としています。

主な機能には、ユーザー登録とログイン、プロジェクトの作成と管理、入札管理、ユーザーロール管理があります。フロントエンドは Angular フレームワーク、バックエンドは Nest.js フレームワークで構築され、データベースには PostgreSQL を使用しています。また、Swagger による API ドキュメントも提供しています。

プロジェクトは DigitalOcean の Droplet 上にデプロイされ、フロントエンドは Nginx を介して配信されます。

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

## プロジェクト構成

- **frontend**: Angular フレームワークで構築された、すべてのフロントエンドコードが含まれています。
- **backend**: Nest.js フレームワークで構築された、すべてのバックエンドコードが含まれています。
- **.github**: 継続的インテグレーションとデプロイに使用する GitHub Actions の設定ファイルが含まれています。

# バックエンド

## バックエンドの構築

バックエンドは Nest.js フレームワークで構築され、モジュール化された拡張性の高いアーキテクチャを提供します。主な機能には、ユーザー認証、プロジェクト管理、入札管理などがあります。バックエンドでは TypeORM を介してデータベースを操作し、複数のデータベース形式をサポートしています。

### バックエンドの技術スタック

- **Nest.js**: 効率的で拡張性の高い Node.js サーバーサイドアプリケーションの構築に使用します。
- **TypeORM**: データベース操作に使用する ORM フレームワークです。
- **Swagger**: API ドキュメントを生成し、開発者が API を確認・テストしやすくするために使用します。

### バックエンドの構築手順

1. **依存関係のインストール**: `backend` ディレクトリで `npm install` を実行し、必要な依存関係をすべてインストールします。
2. **環境変数の設定**: プロジェクトのルートディレクトリに `.env` ファイルを作成し、データベース接続情報やその他の環境変数を設定します。
3. **開発サーバーの実行**: `npm run start:dev` を使用して、ホットリロード対応の開発サーバーを起動します。
4. **本番ビルド**: `npm run build` を使用して本番環境向けにビルドします。生成されたファイルは `dist` ディレクトリに配置されます。

### データベース

本プロジェクトでは PostgreSQL をデータベースとして使用し、すべてのデータベース操作を TypeORM を介して行います。データベースの初期化スクリプトは `backend/SQL/init-script.sql` にあり、データベースの作成と初期化に使用できます。

バックエンドのコード構成は明確で、モジュール化された設計により、機能の拡張や保守が容易になっています。

## バックエンドのセキュリティ認証

バックエンドのセキュリティ認証は AWS Cognito で実装され、Nest.js のインターセプターおよびサービスと組み合わせることで、ユーザーの認証と認可を保証します。

### セキュリティ認証アーキテクチャ

- **AWS Cognito**: ユーザー登録、ログイン、本人認証に使用します。Cognito は安全なユーザープールと ID プールの管理機能を提供します。
- **Nest.js インターセプター**: HTTP リクエストをインターセプトし、リクエストヘッダー内の JWT Token を検証して、ユーザーの正当性を保証します。
- **Service 層**: Cognito との連携、および Cognito ユーザーとデータベース内のユーザー情報との関連付けを担当します。

### 実装手順

1. **Cognito ユーザープールの設定**: AWS Cognito でユーザープールを作成し、JWT Token の生成と検証をサポートするようにアプリクライアントを設定します。
2. **JWT インターセプター**: Nest.js でインターセプターを作成し、リクエストヘッダー内の JWT Token を解析して有効性を検証し、ユーザー情報をリクエストオブジェクトに追加します。

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

3. **ユーザーサービス**: データベースからユーザー情報を取得し、Cognito ユーザーと関連付けるユーザーサービスを作成します。Cognito ID を一意の識別子として使用し、ユーザー情報をデータベースに保存します。

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

4. **ロールと権限の管理**: データベースでユーザーロール（管理者、クライアント、入札者など）を定義し、インターセプターでロールに基づく権限検証を行います。

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

	権限検証が必要な API に `@Roles('admin')` デコレーターを追加し、必要なロールを指定します。

	```typescript
	@Post()
	@Roles('admin')
	createProject(@Body() createProjectDto: CreateProjectDto) {
	  return this.projectsService.createProject(createProjectDto);
	}

	```

この方法により、バックエンドでユーザーの ID と権限を効果的に管理し、システムの安全性と信頼性を確保できます。

## プロジェクト管理の実装

プロジェクト管理モジュールでは、Controller から Service を呼び出し、さらに Service を介してデータベースと連携する方法を示します。

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

`ProjectsService` はビジネスロジックを処理し、データベースとの連携を担当します。

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

`Project` エンティティはデータベース内のプロジェクト構造を定義します。`@Entity()` デコレーターでエンティティを定義し、`@Column()` デコレーターで列を定義します。

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

この方法では、Controller が HTTP リクエストを処理し、Service がビジネスロジックを担当し、データベースエンティティがデータ構造を定義します。この3つが連携することで、包括的なプロジェクト管理機能を実現します。

# フロントエンド

フロントエンドは Angular フレームワークで構築され、ユーザーフレンドリーなインターフェースと操作性を提供します。主な機能には、プロジェクトの表示、入札管理、ユーザー登録とログインなどがあります。

## フロントエンドの技術スタック

- **Angular**: モダンなシングルページアプリケーションの構築に使用します。
- **RxJS**: 非同期データストリームの処理に使用します。
- **Angular CLI**: 強力な開発ツールとコマンドラインインターフェースを提供します。

## フロントエンドの構築手順

1. **依存関係のインストール**: `frontend` ディレクトリで `npm install` を実行し、必要な依存関係をすべてインストールします。
2. **開発サーバー**: `ng serve` を使用して開発サーバーを起動します。デフォルトでは `http://localhost:4200/` で実行されます。
3. **本番ビルド**: `ng build` を使用して本番環境向けにビルドします。生成されたファイルは `dist` ディレクトリに配置されます。

## プロジェクト詳細コンポーネント

フロントエンドアプリケーションは複数のコンポーネントで構成され、それぞれが特定の機能モジュールを担当します。以下はコンポーネント実装の例です。

`ProjectDetailComponent` は、単一プロジェクトの詳細情報を表示するために使用します。

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
        this.error = '加载项目详情失败';
        this.loading = false;
        console.error('加载项目详情错误:', err);
      }
    });
  }

  loadBids(projectId: number) {
    this.bidsService.getBidsByProjectId(projectId).subscribe({
      next: (data) => {
        this.bids = data;
      },
      error: (err) => {
        console.error('加载投标列表错误:', err);
      }
    });
  }
}

```

### テンプレートファイル

`project-detail.component.html` は、プロジェクト詳細の表示構造を定義します。

```html
<div class="project-detail">
  <div *ngIf="loading" class="loading">
    加载中...
  </div>

  <div *ngIf="error" class="error">
    {{ error }}
  </div>

  <div *ngIf="project && !loading" class="project-info">
    <h2>{{ project.title }}</h2>
    <div class="project-meta">
      <p>预算: ¥{{ project.budget_min }} - ¥{{ project.budget_max }}</p>
      <p>截止日期: {{ project.deadline | date }}</p>
      <p>状态: {{ project.status }}</p>
    </div>

    <div class="project-description">
      <h3>项目描述</h3>
      <p>{{ project.description }}</p>
    </div>

    <app-bid-form
      *ngIf="userRole === 'bidder' && project.status === 'open'"
      [projectId]="project.project_id"
      (bidSubmitted)="loadBids(project.project_id)">
    </app-bid-form>

    <div class="bids-section" *ngIf="userRole === 'client' || userRole === 'admin'">
      <h3>投标列表</h3>
      <div *ngFor="let bid of bids" class="bid-card">
        <p>投标人: {{ bid.bidder_id }}</p>
        <p>投标金额: ¥{{ bid.amount }}</p>
        <p>投标说明: {{ bid.message }}</p>
        <p>状态: {{ bid.status }}</p>
      </div>
    </div>
  </div>
</div>

```

この方法により、フロントエンドアプリケーションで豊富なユーザー操作機能とデータ表示機能を提供できます。

# テスト

本プロジェクトでは Jest を使用して単体テストと統合テストを行い、コードの正確性と安定性を確保します。また、ESLint を使用してコード品質をチェックし、コーディングスタイルの一貫性を維持します。

## Jest テスト

Jest は、アサーション、モック、スナップショットテストをサポートする強力な JavaScript テストフレームワークです。

### Jest の設定

プロジェクトの `package.json` で Jest を設定します。

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

### テスト例

以下は簡単なサービステストの例です。

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

## ESLint によるコード品質チェック

ESLint は、JavaScript コード内のパターンを識別して報告するツールであり、開発者がコードの一貫性と品質を維持するのに役立ちます。

### ESLint の設定

プロジェクトのルートディレクトリに `.eslintrc.js` ファイルを作成します。

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

`package.json` にスクリプトを追加します。

```json
"scripts": {
  "lint": "eslint . --ext .ts"
}

```

`npm run lint` を実行してコード品質をチェックします。

Jest と ESLint を使用することで、プロジェクトはコードの正確性と一貫性を確保し、開発効率とコード品質を向上させることができます。

# CI/CD

本プロジェクトでは GitHub Actions を使用して継続的インテグレーションと継続的デプロイ（CI/CD）を実現し、コードがコミットされるたびに自動的にビルド、テスト、デプロイされるようにしています。

## GitHub Actions

GitHub Actions は、ソフトウェア開発ワークフローを自動化するためのツールです。ワークフローファイルを定義することで、コードリポジトリ内でビルド、テスト、デプロイの各タスクを自動実行できます。

### ワークフローの設定

プロジェクトの `.github/workflows/deploy.yml` ファイルで CI/CD ワークフローを定義します。

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

- **DigitalOcean**: プロジェクトは DigitalOcean の Droplet 上にデプロイされ、フロントエンドは Nginx を介して配信されます。
- **自動化フロー**: コードが `main` ブランチにコミットされるたびに、GitHub Actions がビルド、テスト、デプロイの各プロセスを自動的に実行します。

この方法により、プロジェクトはコードの変更に迅速に対応できます。また、コミットされたコードが毎回厳格なテストと検証を受けたうえで、自動的に本番環境へデプロイされることを保証できます。
