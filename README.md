
## 用法

这是一个Vue-cli模板 (https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
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
* Vue、Vue-router、Vuex等第三方依赖Vendor包
* webpack runtime

### 组件库
本项目默认导入 warm-ui 组件库
详情请点击 http://uxd.biz.weibo.com/warm/

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


# vue-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

> This template is Vue 2.0 compatible. For Vue 1.x use this command: `vue init webpack#1.0 my-project`

## Documentation

- [For this template](http://vuejs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail
- [For Vue 2.0](http://vuejs.org/guide/): general information about how to work with Vue, not specific to this template


This will scaffold the project using the `master` branch. If you wish to use the latest version of the webpack template, do the following instead:

``` bash
$ vue init webpack#develop my-project
```

:warning: **The develop branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
