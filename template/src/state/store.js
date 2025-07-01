import { defineStore } from 'pinia'

// 主store示例
export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    user: null,
  }),
  
  getters: {
    doubleCount: (state) => state.count * 2,
    isLoggedIn: (state) => !!state.user,
  },
  
  actions: {
    increment() {
      this.count++
    },
    
    setUser(user) {
      this.user = user
    },
    
    async init() {
      // 初始化逻辑
      console.log('Store initialized')
    }
  }
})

// 导出其他store
export * from './modules'
