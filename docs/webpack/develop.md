# 开发准备

### 项目依赖

* Node (at least the latest LTS) >= 8.9.0

### Dev server

```bash
# 运行开发服务器
npm run dev
```

#### mock API

默认情况下，dev和tests通过tests/mock-api中的Express 服务器 mock 接口。

```bash
# 使用mock API进行开发
API_BASE_URL=http://localhost:3000 npm run  dev

# 使用生产环境API进行测试
API_BASE_URL=https://example.io npm run dev:e2e
```

### 生成器

快速生成开发组件模板

```bash
# 在当前项目中生成一个新component
npm run new component

# 在当前项目中新生成一个页面
npm run new page

# 在当前项目中新生成一个module
npm run new module

# 在当前项目中新生成一个utill
npm run new util
```

需要自定义生成器，请修改 `_templates` 文件夹, 相关文档见[Hygen docs](http://www.hygen.io/).

### alias

详情见`alias.config.js`

自动配置`webpack`、`jest` 和 `VScode` 的 alias 