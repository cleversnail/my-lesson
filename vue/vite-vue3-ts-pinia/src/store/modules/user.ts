import { defineStore } from "pinia";
import { ReqParams } from '../type/user'

interface UserState {
  auths: string[]
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    auths: []
  }),
  actions: {
    async login(params: ReqParams) { 
      setTimeout(() => { // 模拟登录接口
        this.auths = ['蜗牛']
      }, 1000)
    }
  },
  persist: { // 将数据缓存在sessionStorage里面且让state保持同步
    enabled: true
  }
})