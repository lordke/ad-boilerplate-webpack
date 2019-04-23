# {{ name }}

> {{ description }}

## 构建步骤

```bash
# 安装依赖
npm install

# 运行开发服务器（热更新）in localhost:8080
npm run dev

# build 生产环境 build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build:ci

# 运行单元测试 run unit tests
npm run unit

# 运行lint
npm run lint

# 运行所有测试 run all tests
npm test

#新建页面（...组件，模块等）
npm new page(...component, module)
```

## Features

- **多页面**

```目录结构
|--pages
|  |__[page-name]
|  |    |--[入口JS文件]
|  |    |__[HTML文件]
```

- **完善的 lint**:

  - ESLint
  - StyleLint
  - HTMLLint
  - MarkDownLint

- **快速生成模板**

```bash
# 生成新页面
npm run new page
# 生成新组件
npm run new componennt
# 生成新module
npm run new module
```

- 移动端适配

使用 postcss-px-to-viewport 插件自动转换 px 到 vm 相关配置请修改.postcssrc.js 文件
