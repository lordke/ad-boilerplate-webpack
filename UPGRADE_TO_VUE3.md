# Vue 3 升级指南

本模板已从 Vue 2 升级到 Vue 3。以下是主要变化和新特性：

## 🚀 主要变化

### 1. Vue 核心升级
- **Vue**: `2.5.17` → `3.3.8`
- **Vue Router**: `3.0.2` → `4.2.5`
- **状态管理**: Vuex → Pinia `2.1.7`

### 2. 组件库升级
- **PC端**: warm-ui → Element Plus `2.4.4`
- **移动端**: wbui-m → Vant `4.8.0`

### 3. 开发工具升级
- **Node.js**: 最低版本要求 `>=16.0.0`
- **Vue CLI**: `3.x` → `5.0.8`
- **TypeScript**: `3.0.0` → `5.2.0`
- **ESLint**: 支持 Vue 3 语法

## 🔧 API 变化

### 应用创建方式
```javascript
// Vue 2
import Vue from 'vue'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// Vue 3
import { createApp } from 'vue'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
```

### 路由配置
```javascript
// Vue 2
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({ routes })

// Vue 3
import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  history: createWebHistory(),
  routes
})
```

### 状态管理 (Vuex → Pinia)
```javascript
// Vue 2 (Vuex)
import Vuex from 'vuex'
export default new Vuex.Store({
  state: { count: 0 },
  mutations: {
    increment(state) { state.count++ }
  }
})

// Vue 3 (Pinia)
import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
  state: () => ({ count: 0 }),
  actions: {
    increment() { this.count++ }
  }
})
```

### 组件语法
```vue
<!-- Vue 2 (Class Component) -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class App extends Vue {}
</script>

<!-- Vue 3 (Composition API) -->
<script setup lang="ts">
// 使用 Composition API
</script>
```

## 📦 新特性

### 1. Composition API
- 更好的逻辑复用
- 更好的 TypeScript 支持
- 更灵活的组件组织

### 2. 多根节点
```vue
<template>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</template>
```

### 3. Teleport
```vue
<teleport to="body">
  <div class="modal">...</div>
</teleport>
```

### 4. Suspense
```vue
<suspense>
  <template #default>
    <async-component />
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template>
</suspense>
```

## ⚠️ 破坏性变化

### 1. 全局 API
- `Vue.config` → `app.config`
- `Vue.use()` → `app.use()`
- `Vue.component()` → `app.component()`

### 2. 组件实例
- `this.$children` 被移除
- `$listeners` 合并到 `$attrs`

### 3. 过滤器
- 过滤器被移除，使用计算属性或方法替代

### 4. 事件 API
- `$on`, `$off`, `$once` 被移除

## 🔄 迁移建议

### 1. 渐进式迁移
- 可以继续使用 Options API
- 逐步引入 Composition API
- 新组件建议使用 `<script setup>`

### 2. 状态管理迁移
- Pinia 提供更简单的 API
- 更好的 TypeScript 支持
- 更好的开发者体验

### 3. 组件库迁移
- Element Plus 是 Element UI 的 Vue 3 版本
- Vant 4 是 Vant 的 Vue 3 版本
- API 基本保持一致

## 📚 参考资源

- [Vue 3 官方文档](https://vuejs.org/)
- [Vue 3 迁移指南](https://v3-migration.vuejs.org/)
- [Pinia 官方文档](https://pinia.vuejs.org/)
- [Element Plus 文档](https://element-plus.org/)
- [Vant 4 文档](https://vant-contrib.gitee.io/vant/)

## 🆘 常见问题

### Q: 如何在 Vue 3 中使用 Vuex？
A: 建议迁移到 Pinia，它是 Vue 3 的官方状态管理库，API 更简单，TypeScript 支持更好。

### Q: Class Component 还能使用吗？
A: 可以，但建议使用 Composition API 或 `<script setup>` 语法。

### Q: 如何处理破坏性变化？
A: 参考官方迁移指南，使用 Vue 3 迁移构建版本进行渐进式迁移。