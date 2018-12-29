# 语言

## JavaScript

### babel

JavaScript由Babel编译，使用`@vue/babel-preset-app`作为基本配置。
可以在`.babelrc.js`中更新。

### Polyfills

通过 @babel/preset-env 和 browserslist 配置来决定项目需要的 polyfill。

根据 browserslist判断.

详情见 [vue-cli 3.0 doc](https://cli.vuejs.org/zh/guide/browser-compatibility.html#polyfill)

# TypeScript

默认使用`vue-class-component` 和 `vue-property-decorator`，

基于装饰器语法对 `Vue` 组件进行了一层封装，让 `Vue` 组件语法在结合了 `TypeScript` 语法之后更加扁平化

相关配置文件 `tsconfig.js`

**example:**

```javascript
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

@Component
export class MyComponent extends Vue {
  
  @Prop()
  propA: number = 1

  @Prop({ default: 'default value' })
  propB: string

  @Prop([String, Boolean])
  propC: string | boolean

  @Prop({ type: null })
  propD: any

  @Watch('child')
  onChildChanged(val: string, oldVal: string) { }
}
```