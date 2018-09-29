// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@modules/index/App'
// import WUI from 'warm-ui/libs/warm' // 引入组件库
import router from '@router/index' // 引入样式库
import 'normalize.css'
import store from '@state/store'
// 自动注册所有component到Vue上
import '@components/_globals'
import FastClick from 'fastclick'

FastClick.attach(document.body)
// Vue.use(WUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  {{#if_eq build "runtime"}}
  render: h => h(App),
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>',
  {{/if_eq}}
})
