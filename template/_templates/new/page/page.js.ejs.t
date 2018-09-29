---
to: "src/pages/<%= name %>/<%= name %>.js"
---

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/modules/<%= name %>/App'
// import WUI from 'warm-ui/libs/warm' // 引入组件库
// import '../../../node_modules/warm-ui/libs/warm.css'
import 'normalize.css'
import '@components/_globals'
// import FastClick from 'fastclick'

// FastClick.attach(document.body)
// Vue.use(WUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  render: (h) => h('App')
})
