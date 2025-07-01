import { defineStore } from 'pinia'

interface User {
  id: number
  name: string
  email: string
}

interface MainState {
  count: number
  user: User | null
}

// 主store示例
export const useMainStore = defineStore('main', {
  state: (): MainState => ({
    count: 0,
    user: null,
  }),
  
  getters: {
    doubleCount: (state): number => state.count * 2,
    isLoggedIn: (state): boolean => !!state.user,
  },
  
  actions: {
    increment(): void {
      this.count++
    },
    
    setUser(user: User): void {
      this.user = user
    },
    
    async init(): Promise<void> {
      // 初始化逻辑
      console.log('Store initialized')
    }
  }
})

// 导出其他store
export * from './modules'
