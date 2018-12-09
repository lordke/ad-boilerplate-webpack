// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@modules/index/App.vue'

{{#warm}}
import WUI from 'warm-ui/libs/warm' // 引入组件库
import '../../../node_modules/warm-ui/libs/warm.css' // 引入样式库
{{/warm}}
{{#wbui}}
import * as wbui from 'wbui-m' // 整体引入
import 'wbui-m/lib/styles/theme-default/index.css' // 引入样式文件
{{/wbui}}
{{#router}}
import router from '@router/index'
{{/router}}
import 'normalize.css'
{{#vuex}}
import store from '@state/store'
{{/vuex}}
// 自动注册所有component到Vue上
import '@components/_globals'
{{#mobile}}
import FastClick from 'fastclick'

FastClick.attach(document.body)
{{/mobile}}
{{#warm}}
Vue.use(WUI)
{{/warm}}
{{#wbui}}
Vue.use(wbui)
{{/wbui}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App),
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>',
  {{/if_eq}}
})
