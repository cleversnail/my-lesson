import { createStore } from 'vuex'
import { getCart } from '../service/cart'
import { getLocal } from '@/common/js/utils'

export default createStore({
  state: {
    isLogin: false,
    cartCount: 0
  },
  mutations: {
    loginStatus(state) {
      const token = getLocal('token')
      if (token) {
        state.isLogin = true
      }
    },
    addCart(state, payload) {
      state.cartCount = payload.count
    }
  },
  actions: {
    // 获取购物车列表数据
    async updateCart(ctx) {
      const { data } = await getCart()
      // console.log(data);
      ctx.commit('addCart', {
        count: data.length || 0
      })
    }
  },
  modules: {
  }
})
