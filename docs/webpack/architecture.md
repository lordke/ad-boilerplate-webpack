# 结构

- [`_templates`](#_templates)
- [`public`](#public)
  - [`index.html`](#indexhtml)
- [`src`](#src)
  - [`assets`](#assets)
  - [`pages`](#pages)
  - [`components`](#components)
  - [`modules`](#modules)
  - [`design`](#design)
  - [`router`](#router)
  - [`state`](#state)
  - [`utils`](#utils)
  - [`app.config.js`](#appconfigjs)
- [`tests`](#tests)

### `templates`

生成器模板目录，细节点击[doc](/webpack/develop.md#生成器)

### `public`

静态文件地址，`build`的时候，会被自动拷贝到`dist`目录

### `src`

源文件目录

### `pages`

页面入口文件所在地，一般来说一个page包含两个文件

1. 入口`JS`文件
2. page `HTML`模板

不同的page，通过不同的子文件夹区分

### `assets`

细节见 [Vue Cli 3.0 文档](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#html)

### `components`

项目组件

### modules

项目 modules
