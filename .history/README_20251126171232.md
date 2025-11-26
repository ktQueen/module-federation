# Module Federation Vue 项目 - 三级嵌套架构（路由模式）

基于 Module Federation 的 Vue 3 + Element Plus 微前端项目，采用三级嵌套架构，**统一使用路由模式**。

## 架构设计

```
第一级：remote（远程模块 - 纯 Remote）
  ↓ 暴露组件（Button, Card, Table）
第二级：middle（中间层 - 既是 Remote 又是 Host）
  ↓ 通过路由加载 remote 组件
  ↓ 暴露 Home 组件
第三级：shell（容器应用 - 纯 Host）
  ↓ 通过路由加载 middle/Home
```

## 技术栈

- **Vue 3**: 渐进式 JavaScript 框架
- **Element Plus**: Vue 3 组件库
- **Vue Router**: 路由管理
- **Vite**: 下一代前端构建工具
- **Module Federation**: 微前端解决方案
- **@originjs/vite-plugin-federation**: Vite 的 Module Federation 插件

## 项目结构

```
module-federation/
├── remote/          # 第一级：纯远程应用（端口 5173）
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   └── Table.vue
│   │   ├── router/
│   │   │   └── index.js
│   │   ├── App.vue
│   │   └── main.js
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── middle/          # 第二级：既是 remote 又是 host（端口统一 5174，通过不同命令切换模式）
│   ├── src/
│   │   ├── Home.vue
│   │   ├── router/
│   │   │   └── index.js
│   │   ├── App.vue
│   │   └── main.js
│   ├── index.html
│   ├── vite.config.js          # Host 模式配置
│   ├── vite.config.remote.js   # Remote 模式配置（暴露给 shell）
│   └── package.json
├── shell/           # 第三级：容器应用（端口 5175）
│   ├── src/
│   │   ├── router/
│   │   │   └── index.js
│   │   ├── App.vue
│   │   └── main.js
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── start-dev.sh     # 启动脚本
└── README.md        # 项目说明
```

## 快速开始

### 1. 安装依赖

```bash
npm run install:all
```

### 2. 启动所有服务

```bash
npm run dev:all
# 或
./start-dev.sh
```

### 3. 访问地址

- **第三级 - 容器应用 (Shell)**: http://localhost:5175
- **第二级 - 中间层模块 (Middle)**: http://localhost:5174
- **第一级 - 远程模块 (Remote)**: http://localhost:5173

## 路由模式说明

### 第一级：remote

- **暴露组件**：`./Button`, `./Card`, `./Table`
- **路由配置**：独立运行时的路由（`/button`, `/card`, `/table`）

### 第二级：middle

- **作为 Host（开发用）**：通过路由加载 remote 组件（`cd middle && npm run dev:host`，端口 5174）
- **作为 Remote（联调用）**：暴露 `./Home` 组件给 shell（`cd middle && npm run preview:remote`，端口同样是 5174）
- **路由配置（Host 模式）**：
  - `/` → 默认重定向到 `/button`
  - `/button` → remote/Button（路由模式）
  - `/card` → remote/Card（路由模式）
  - `/table` → remote/Table（路由模式）

### 第三级：shell

- **作为 Host**：通过路由加载 middle/Home
- **路由配置**：
  - `/` → middle/Home
  - `/button` → remote/Button（直接路由，用于 middle/Home 内部的 router-view）
  - `/card` → remote/Card
  - `/table` → remote/Table

## 开发模式

### 独立开发

- **remote**: `cd remote && npm run dev`（独立开发，不依赖其他模块）
- **middle（Host 模式）**: `cd middle && npm run dev:host`（只拉第一级 remote，端口 5174）
- **shell**: `cd shell && npm run dev`（独立开发，使用 mock 或真实 middle）

### 联调模式

使用 `./start-dev.sh` 脚本，会自动：

1. 构建 remote 和 middle（使用 middle 的 remote 形态：`npm run build:remote`）
2. 启动 remote preview (5173)
3. 启动 middle preview:remote (5174)
4. 启动 shell dev (5175)

## 注意事项

1. **构建顺序**: remote → middle → shell（必须按顺序构建）
2. **预览模式**: remote 和 middle 需要使用 preview 模式（`npm run build && npm run preview`）
3. **共享依赖**: 所有应用必须使用相同版本的 Vue 和 Element Plus
4. **CORS**: 确保所有服务都配置了正确的 CORS 头
5. **路由模式**: 所有模块统一使用路由模式，确保样式和功能完整

## 最佳实践

1. **统一路由模式**：所有模块都使用路由方式加载远程组件
2. **样式处理**：确保 CSS 正确加载（使用 `base` 配置和 `fixCssPathPlugin`）
3. **共享依赖**：使用 `singleton: true` 确保依赖唯一
4. **错误处理**：添加完善的错误处理和加载状态
5. **路由上下文**：确保 router-view 使用正确的路由系统
