import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@components/index/HelloWorld.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld,
    },
  ],
})

export default router
