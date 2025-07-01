## 用法

这是一个Vue-cli模板 (https://github.com/vuejs/vue-cli). **建议使用 npm 16+ 以获得更好的依赖管理体验。**

``` bash
$ npm install -g @vue/cli
$ vue init lordke/webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

## 构建步骤 

``` bash
# 安装依赖
npm install

# 运行开发服务器（热更新）in localhost:8080
npm run dev

# build 生产环境 build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 运行单元测试 run unit tests
npm run unit

# 运行e2e测试 run e2e tests
npm run e2e

# 运行所有测试 run all tests
npm test
```

## 开发注意

### 添加新页面
>在pages文件夹中添加新页面HTML页面和JS入口文件
注意！JS入口文件必须和HTML文件同名


### 代码分离

* 页面资源JS
* Vue、Vue-router、Pinia等第三方依赖Vendor包
* webpack runtime

### 组件库
本项目支持以下组件库：
- PC端：Element Plus (http://element-plus.org/)
- 移动端：Vant 4 (https://vant-contrib.gitee.io/vant/)

### 移动端适配

#### 使用 postcss-px-to-viewport 插件自动转换px 到 vm
>相关配置请修改.postcssrc.js文件         


#### postcss-write-svg插件实现1px
``` bash
@svg square {
  @rect {
      fill: var(--color, black);
      width: 100%; height: 100%;
  }
}
#example { background: white svg(square param(--color #00b1ff)); }
```  


# vue3-webpack-boilerplate

> 一个基于Vue 3的完整Webpack配置，包含热重载、保存时代码检查、单元测试和CSS提取等功能。

> 此模板兼容Vue 3.x。

## 文档

- [模板文档](http://vuejs-templates.github.io/webpack): 针对此模板的常见问题和详细说明
- [Vue 3.x文档](http://vuejs.org/guide/): Vue的通用信息，不特定于此模板


使用此命令将使用 `master` 分支创建项目。如果你希望使用最新版本的webpack模板，请使用以下命令：

``` bash
$ vue init webpack#develop my-project
```

:warning: **develop分支不被认为是稳定的，可能包含错误或根本无法构建，使用时请自担风险。**

开发服务器默认运行在8080端口。如果该端口已被占用，将使用下一个可用端口。

## 包含的功能

- `npm run dev`: 一流的开发体验。
  - Webpack + `vue-loader` 用于单文件Vue组件。
  - 状态保持的热重载
  - 状态保持的编译错误覆盖
  - 使用ESLint保存时检查
  - 源码映射

- `npm run build`: 生产就绪的构建。
  - 使用[UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony)压缩JavaScript。
  - 使用[html-minifier](https://github.com/kangax/html-minifier)压缩HTML。
  - 所有组件的CSS提取到单个文件中，并使用[cssnano](https://github.com/ben-eb/cssnano)压缩。
  - 静态资源编译时带有版本哈希，用于高效的长期缓存，并自动生成生产环境的`index.html`，包含正确的资源URL。
  - 使用 `npm run build --report` 构建并查看包大小分析报告。

- `npm run unit`: 在[JSDOM](https://github.com/tmpvar/jsdom)中使用[Jest](https://facebook.github.io/jest/)运行单元测试。
  - 支持测试文件中的ES2015+。
  - 简单的模拟。

- `npm run e2e`: 使用[Nightwatch](http://nightwatchjs.org/)进行端到端测试。
  - 在多个浏览器中并行运行测试。
  - 开箱即用：
    - 自动处理Selenium和chromedriver依赖。
    - 自动启动Selenium服务器。

### Fork并创建你自己的模板

你可以fork这个仓库来创建你自己的样板，并与`vue-cli`一起使用：

``` bash
vue init username/repo my-project
```
