<template>
  <van-tabbar v-model="active" route active-color="#1baeae">
    <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" :badge="!count? '' : count" :to="isLogin ? '/cart' : '/login'">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" :to="isLogin ? '/user' : '/login'">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
import { reactive, ref, toRefs } from '@vue/reactivity';
import { useStore } from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';
export default {
  // props: {
  //   isLogin: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  setup() { // 只会执行一次
    const store = useStore()
    const active = ref('/home')
    const state = reactive({
      // allowUrl: {
      //   cart: props.isLogin ? '/cart' : '/login',
      //   user: props.isLogin ? '/user' : '/login'
      // }
    })

    onMounted(() => {
      store.dispatch('updateCart')
      store.commit('loginStatus')
    })

    const count = computed(() => {
      return store.state.cartCount
    })
    const isLogin = computed(() => {
      return store.state.isLogin
    })

    return {
      active,
      ...toRefs(state),
      count,
      isLogin
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style>
</style>