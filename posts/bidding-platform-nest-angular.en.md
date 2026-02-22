---
title: '基于 Nest.js 和 Angular 的竞价平台-以及Jest测试和CICD'
published: 2024-12-07
updated: 2024-12-08
description: '该项目是一个基于Nest.js和Angular的竞价平台，提供用户注册、项目管理和投标管理功能，使用PostgreSQL作为数据库，并通过Swagger生成API文档。后端实现了安全认证，使用AWS Cognito进行用户身份验证。前端构建了用户友好的界面，支持项目展示和投标管理。项目使用Jest进行测试，确保代码质量，并通过GitHub Actions实现持续集成和部署。'
permalink: 'bidding-platform-nest-angular.en'
image: 'https://r2.dreaife.tokyo/notion/covers/1555465cca1780f382f5f1421004b0a8/IMG_1767.jpg'
tags: ['nodejs', 'ts', 'aws']
category: 'BACKEND'
draft: false
lang: 'en'
---

# Auction Platform Based on Nest.js and Angular

## Project Overview

This project is a bidding platform based on Nest.js and Angular, designed to provide a complete bidding and management system.

Its main features include user registration and login, project creation and management, bid management, and user role management. The frontend is built with the Angular framework, the backend with the Nest.js framework, the database uses PostgreSQL, and API documentation is provided via Swagger.

The project is deployed on a DigitalOcean Droplet, with the frontend served via Nginx.

```plain text
Frontend (Angular)
  ↓（API requests）
Cognito (User authentication)
  ↓（after verification, forwards requests）
Backend (Nest.js)
  ↓（database queries）
Database (PostgreSQL)
  ↑（data return）
Backend (Nest.js)
  ↑（processed response）
Frontend (Angular)
```

## Project Structure

- **frontend**: Contains all frontend code, built with the Angular framework.
- **backend**: Contains all backend code, built with the Nest.js framework.
- **.github**: Contains GitHub Actions configuration files for continuous integration and deployment.

# Backend

## Backend Build

The backend is built using the Nest.js framework, providing a modular and extensible architecture. Main features include user authentication, project management, bid management, etc. The backend uses TypeORM for database operations, supporting multiple database types.

### Backend Tech Stack

- **Nest.js**: Used to build efficient, scalable Node.js server-side applications.
- **TypeORM**: An ORM framework for database interactions.
- **Swagger**: Used to generate API documentation, making it easier for developers to view and test APIs.

### Backend Build Steps

1. **Install dependencies**: In the `backend` directory, run `npm install` to install all necessary dependencies.
2. **Configure environment variables**: Create a `.env` file in the project root to configure database connection information and other environment variables.
3. **Run development server**: Start the development server with `npm run start:dev`, supporting hot reloading.
4. **Production build**: Use `npm run build` for production builds; the generated files are in the `dist` directory.

### Database

The project uses PostgreSQL as the database; all database operations are performed via TypeORM. The database initialization script is located at `backend/SQL/init-script.sql` and can be used to create and initialize the database.

The backend codebase is well organized, and the modular design makes extending functionality and maintenance easier.

## Backend Security Authentication

Backend security authentication is implemented via AWS Cognito, combined with Nest.js interceptors and services to ensure user authentication and authorization.

### Security Authentication Architecture

- **AWS Cognito**: Used for user registration, login, and authentication. Cognito provides secure user pools and identity pool management.
- **Nest.js Interceptors**: Used to intercept HTTP requests, validate the JWT Token in the request headers, ensuring the legitimacy of user identities.
- **Service Layer**: Responsible for handling interactions with Cognito and associating Cognito users with user information in the database.

### Implementation Steps

1. **Cognito User Pool Configuration**: Create a user pool in AWS Cognito and configure the app client to support JWT token generation and validation.
2. **JWT Interceptor**: Create an interceptor in Nest.js to parse the JWT token from the request headers, validate its validity, and attach user information to the request object.

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

3. **User Service**: Create a user service that retrieves user information from the database and associates it with Cognito users. Use the Cognito ID as the unique identifier to store user information in the database.

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

4. **Role and Permissions Management**: Define user roles in the database (e.g., admin, client, bidder) and perform authorization based on roles in the interceptor.

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

    Add the `@Roles('admin')` decorator on APIs that require authorization to specify the required role.

    ```typescript
    @Post()
    @Roles('admin')
    createProject(@Body() createProjectDto: CreateProjectDto) {
      return this.projectsService.createProject(createProjectDto);
    }
    ```

This approach allows the backend to effectively manage user identities and permissions, ensuring the security and reliability of the system.

## Project Management Implementation

In the project management module, it will show how to call a Service via a Controller, then have the Service interact with the database.

### Controller

In `ProjectsController`, define the routes and methods to handle HTTP requests.

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

### 数据库实体

`Project` 实体定义了项目在数据库中的结构，通过 `@Entity()` 装饰器定义实体，通过 `@Column()` 装饰器定义列。

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

Through this approach, the Controller handles HTTP requests, the Service handles business logic, and the database entity defines the data structure. The three work together to implement complete project management functionality.

# Frontend

The frontend is built with the Angular framework, providing a user-friendly interface and rich interactions. Main features include project display, bid management, user registration and login, etc.

## Frontend Tech Stack

- **Angular**: Used to build modern single-page applications.
- **RxJS**: Used to handle asynchronous data streams.
- **Angular CLI**: Provides powerful development tools and a command-line interface.

## Frontend Build Steps

1. **Install dependencies**: Run `npm install` in the `frontend` directory to install all necessary dependencies.
2. **Development server**: Start the development server with `ng serve`, typically running at `http://localhost:4200/`.
3. **Production build**: Use `ng build` for production builds; the generated files are in the `dist` directory.

## Project Details Component

The frontend application consists of multiple components, each responsible for a specific feature module. Here is an implementation of a sample component.

`ProjectDetailComponent` is used to display the details of a single project.

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
        this.error = 'Failed to load project details';
        this.loading = false;
        console.error('Error loading project details:', err);
      }
    });
  }

  loadBids(projectId: number) {
    this.bidsService.getBidsByProjectId(projectId).subscribe({
      next: (data) => {
        this.bids = data;
      },
      error: (err) => {
        console.error('Error loading bid list:', err);
      }
    });
  }
}
```


### Template File

`project-detail.component.html` defines the structure for displaying project details.

```html
<div class="project-detail">
  <div *ngIf="loading" class="loading">
    Loading...
  </div>

  <div *ngIf="error" class="error">
    {{ error }}
  </div>

  <div *ngIf="project && !loading" class="project-info">
    <h2>{{ project.title }}</h2>
    <div class="project-meta">
      <p>Budget: ¥{{ project.budget_min }} - ¥{{ project.budget_max }}</p>
      <p>Deadline: {{ project.deadline | date }}</p>
      <p>Status: {{ project.status }}</p>
    </div>

    <div class="project-description">
      <h3>Project Description</h3>
      <p>{{ project.description }}</p>
    </div>

    <app-bid-form
      *ngIf="userRole === 'bidder' && project.status === 'open'"
      [projectId]="project.project_id"
      (bidSubmitted)="loadBids(project.project_id)">
    </app-bid-form>

    <div class="bids-section" *ngIf="userRole === 'client' || userRole === 'admin'">
      <h3>Bid List</h3>
      <div *ngFor="let bid of bids" class="bid-card">
        <p>Bidder: {{ bid.bidder_id }}</p>
        <p>Bid Amount: ¥{{ bid.amount }}</p>
        <p>Bid Description: {{ bid.message }}</p>
        <p>Status: {{ bid.status }}</p>
      </div>
    </div>
  </div>
</div>
```


通过这种方式，前端应用能够提供丰富的用户交互和数据展示功能。

# Testing

The project uses Jest for unit and integration testing to ensure code correctness and stability. ESLint is also used for code quality checks to ensure consistent coding style.

## Jest Tests

Jest is a powerful JavaScript testing framework that supports assertions, mocks, and snapshot testing.

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

ESLint is a tool that identifies and reports patterns in JavaScript code, helping developers maintain consistency and quality.

### ESLint Configuration

Create a `.eslintrc.js` file in the project root:

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

Add a script in `package.json`:

```json
"scripts": {
  "lint": "eslint . --ext .ts"
}
```


Run `npm run lint` to check code quality.

By using Jest and ESLint, the project can ensure code correctness and consistency, improving development efficiency and code quality.

# CI/CD

The project uses GitHub Actions to implement continuous integration and continuous deployment (CI/CD), ensuring code is automatically built, tested, and deployed after each commit.

## GitHub Actions

GitHub Actions is a tool for automating software development workflows. By defining workflow files, you can automatically perform build, test, and deployment tasks in the repository.

### Workflow Configuration

The CI/CD workflow is defined in the project at `.github/workflows/deploy.yml`:

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
        # Deployment scripts or commands
```


## Deployment

- **DigitalOcean**: The project is deployed on a DigitalOcean Droplet, with the frontend served via Nginx.
- **Automation**: Each push to the main branch triggers automatic building, testing, and deployment via GitHub Actions.

This approach allows the project to respond quickly to code changes, ensuring every commit is thoroughly tested and validated, and automatically deployed to production.
