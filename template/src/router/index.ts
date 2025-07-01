import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@components/index/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'helloWorld',
      component: HelloWorld,
    },
  ],
})

export default router
