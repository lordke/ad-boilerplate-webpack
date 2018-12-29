<!-- ---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
--- -->

# 介绍

`wbad`是一个可以快速、高度定制化生成前端项目的脚手架，

### 安装

```bash
$ npm install -g wbad
```

> 注意：安装wbad前，请设置npm源为微博广告私库 http://npm.biz.weibo.com/repository/WB-FE/

### 快速开始

wbad安装完成之后，将暴露两个可用的命令ad和wbad，二者完全相同。
用法如下
```bash
$ ad new <模板名称> <项目名称>
```
以ad命令和webpack项目为例

```bash
$ ad new webpack <your-project-name>
```

注意： ```webpack模板```为项目默认模板,因此可以简单的使用
```bash
$ ad new <your-project-name>
```

>  wbad 默认通过ssh协议从gitlab拉取项目模板，如果不能正确拉取模板，请检查你的ssh key。

wbad项目的搭建，基于已经预先定义好的`template`模板

> 当前可用模板如下
> * [webpack](webpack/): 基于`webpack`的前端模板(支持`SPA`、`MPA`、`SASS`、`typeScript`、`Lint`、`单元测试`、`E2E测试`等)（默认）
> * [terra](): 基于`egg`的`node`服务模板