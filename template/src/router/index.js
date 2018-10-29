import Vue from 'vue'
import Router from 'vue-router'
import App from '@components/index/HelloWorld'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    },
  ],
})

export default router
