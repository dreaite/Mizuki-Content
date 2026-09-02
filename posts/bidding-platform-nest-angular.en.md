---
title: 'Auction Platform Built with Nest.js and Angular—with Jest Testing and CI/CD'
published: 2024-12-07
updated: 2024-12-08
description: 'Build a Nest.js and Angular bidding platform with PostgreSQL and AWS Cognito, plus Swagger APIs, Jest tests, and GitHub Actions CI/CD.'
image: 'https://r2.dreaife.tokyo/notion/covers/1555465cca1780f382f5f1421004b0a8/IMG_1767.jpg'
tags: ['nodejs', 'ts', 'aws', 'PROJECT']
category: '开荒'
draft: false
lang: 'en'
---

# Bidding Platform Based on Nest.js and Angular

## Overall Project Description

This project is a bidding platform based on Nest.js and Angular, designed to provide a complete bidding and management system.

Its main features include user registration and login, project creation and management, bid management, and user role management. The frontend is built with Angular, the backend with Nest.js, and PostgreSQL is used as the database. API documentation is provided through Swagger.

The project is deployed on a DigitalOcean Droplet, with the frontend served through Nginx.

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

## Project Structure

- **frontend**: Contains all frontend code and is built with Angular.
- **backend**: Contains all backend code and is built with Nest.js.
- **.github**: Contains GitHub Actions configuration files for continuous integration and deployment.

# Backend

## Backend Development

The backend is built with Nest.js, providing a modular and scalable architecture. Its main features include user authentication, project management, and bid management. The backend uses TypeORM for database operations and supports multiple database types.

### Backend Technology Stack

- **Nest.js**: Used to build efficient and scalable Node.js server-side applications.
- **TypeORM**: An ORM framework used for database interactions.
- **Swagger**: Used to generate API documentation, making it easier for developers to inspect and test APIs.

### Backend Build Steps

1. **Install dependencies**: Run `npm install` in the `backend` directory to install all required dependencies.
2. **Configure environment variables**: Create a `.env` file in the project root directory and configure the database connection details and other environment variables.
3. **Run the development server**: Use `npm run start:dev` to start the development server with hot reload support.
4. **Production build**: Use `npm run build` to create a production build. The generated files will be located in the `dist` directory.

### Database

The project uses PostgreSQL as its database, with all database operations performed through TypeORM. The database initialization script is located at `backend/SQL/init-script.sql` and can be used to create and initialize the database.

The backend has a clear code structure, and its modular design makes feature expansion and maintenance more convenient.

## Backend Security and Authentication

Backend security and authentication are implemented through AWS Cognito, combined with Nest.js interceptors and services to ensure user authentication and authorization.

### Security and Authentication Architecture

- **AWS Cognito**: Used for user registration, login, and authentication. Cognito provides secure user pool and identity pool management.
- **Nest.js interceptors**: Used to intercept HTTP requests and validate the JWT Token in request headers, ensuring that the user's identity is legitimate.
- **Service layer**: Handles interactions with Cognito and associates Cognito users with user information in the database.

### Implementation Steps

1. **Configure a Cognito user pool**: Create a user pool in AWS Cognito and configure an app client to support JWT Token generation and validation.
2. **JWT interceptor**: Create an interceptor in Nest.js that parses the JWT Token from the request headers, validates it, and attaches the user information to the request object.

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

3. **User service**: Create a user service responsible for retrieving user information from the database and associating it with Cognito users. Store user information in the database using the Cognito ID as the unique identifier.

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

4. **Role and permission management**: Define user roles in the database, such as administrator, client, and bidder, and validate permissions in the interceptor based on the user's role.

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

	Add the `@Roles('admin')` decorator to APIs that require permission validation to specify the required role.

	```typescript
	@Post()
	@Roles('admin')
	createProject(@Body() createProjectDto: CreateProjectDto) {
	  return this.projectsService.createProject(createProjectDto);
	}

	```

This approach allows the backend to manage user identities and permissions effectively, ensuring system security and reliability.

## Project Management Implementation

This section demonstrates how the project management module uses a Controller to call a Service, which then interacts with the database.

### Controller

In `ProjectsController`, routes and methods are defined to handle HTTP requests.

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

`ProjectsService` handles business logic and interacts with the database.

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

### Database Entity

The `Project` entity defines the structure of a project in the database. The entity is defined using the `@Entity()` decorator, while columns are defined using the `@Column()` decorator.

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

With this approach, the Controller handles HTTP requests, the Service handles business logic, and the database entity defines the data structure. These three components work together to provide complete project management functionality.

# Frontend

The frontend is built with Angular and provides a user-friendly interface and interactive experience. Its main features include project presentation, bid management, user registration, and login.

## Frontend Technology Stack

- **Angular**: Used to build modern single-page applications.
- **RxJS**: Used to handle asynchronous data streams.
- **Angular CLI**: Provides powerful development tools and a command-line interface.

## Frontend Build Steps

1. **Install dependencies**: Run `npm install` in the `frontend` directory to install all required dependencies.
2. **Development server**: Use `ng serve` to start the development server, which runs at `http://localhost:4200/` by default.
3. **Production build**: Use `ng build` to create a production build. The generated files will be located in the `dist` directory.

## Project Details Component

The frontend application consists of multiple components, each responsible for a specific functional module. The following is an example implementation of one such component.

`ProjectDetailComponent` displays detailed information about an individual project.

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

### Template File

`project-detail.component.html` defines the presentation structure for project details.

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

This approach enables the frontend application to provide rich user interactions and data presentation capabilities.

# Testing

The project uses Jest for unit and integration testing to ensure code correctness and stability. ESLint is also used for code quality checks to ensure a consistent coding style.

## Jest Testing

Jest is a powerful JavaScript testing framework that supports assertions, mocking, and snapshot testing.

### Jest Configuration

Configure Jest in the project's `package.json`:

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

### Example Test

The following is a simple service test example:

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

## ESLint Code Quality Checks

ESLint is a tool for identifying and reporting patterns in JavaScript code, helping developers maintain code consistency and quality.

### ESLint Configuration

Create an `.eslintrc.js` file in the project root directory:

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

### Running ESLint

Add the following script to `package.json`:

```json
"scripts": {
  "lint": "eslint . --ext .ts"
}

```

Run `npm run lint` to check code quality.

By using Jest and ESLint, the project can ensure code correctness and consistency while improving development efficiency and code quality.

# CI/CD

The project uses GitHub Actions to implement continuous integration and continuous deployment (CI/CD), ensuring that the code is automatically built, tested, and deployed after every commit.

## GitHub Actions

GitHub Actions is a tool for automating software development workflows. By defining workflow files, build, test, and deployment tasks can be executed automatically within the repository.

### Workflow Configuration

The CI/CD workflow is defined in the project's `.github/workflows/deploy.yml` file:

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

## Deployment

- **DigitalOcean**: The project is deployed on a DigitalOcean Droplet, with the frontend served through Nginx.
- **Automated workflow**: Whenever code is committed to the `main` branch, GitHub Actions automatically runs the build, test, and deployment processes.

This approach allows the project to respond quickly to code changes, ensuring that every commit undergoes rigorous testing and validation before being automatically deployed to the production environment.
