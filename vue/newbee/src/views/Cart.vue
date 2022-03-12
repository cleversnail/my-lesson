<template>
  <div class="cart-box">
    <s-header :title="'购物车'" :noback="true"></s-header>
    <div class="cart-body">
      <van-checkbox-group v-model="result" ref="checkboxGroup" @change="groupChange">
        <van-swipe-cell v-for="item in list" :key="item.goodsId">
          <van-checkbox :name="item.cartItemId" />
          <van-card
            :price="item.sellingPrice"
            :title="item.goodsName"
            class="goods-card"
            :thumb="item.goodsCoverImg"
          >
            <template #footer>
              <van-stepper 
                v-model="item.goodsCount" 
                min="1" 
                max="5" 
                :name="item.cartItemId"
                @change="onChange"
              />
            </template>
          </van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="deleteGood(item.cartItemId)"/>
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

    <van-submit-bar 
      class="submit-all"
      :price="totalPrice * 100" 
      button-text="提交订单" 
      @submit="onSubmit" 
    >
       <van-checkbox class="checkAll" v-model="checkAll" @click="allCheck">全选</van-checkbox>
    </van-submit-bar>

    <nav-bar></nav-bar>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { reactive, toRefs } from '@vue/reactivity'
import NavBar from '@/components/NavBar'
import { computed, onMounted } from '@vue/runtime-core'
import { Toast } from 'vant'
import { getCart, modifyCart, deleteCartItem } from '../service/cart'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      result: [],
      list: [],
      checkAll: true
    })

    onMounted(() => {
      init()
    })

    const init = async() => {
      Toast.loading({ message: '加载中...', forbidClick: true})
      const { data } = await getCart({ pageNumber: 1 })
      console.log(data);
      state.list = data
      state.result = data.map(item => item.cartItemId)
      Toast.clear()
    }

    const onChange = async(value, detail) => {
      Toast.loading({ message: '修改中...', forbidClick: true })
      const params = {
        cartItemId: detail.name,
        goodsCount: value
      }
      await modifyCart(params)
      Toast.clear()
    }

    const deleteGood = async(id) => {
      await deleteCartItem(id)
      store.dispatch('updateCart')
      init()
    }

    const allCheck = () => {
      console.log(state.result);
      if (!state.checkAll) { // 要全部不选中
        state.result = []
      } else {
        state.result = state.list.map(item => item.cartItemId)
      }
    }

    const groupChange = (result) => {
      // console.log(result);
      state.checkAll = result.length === state.list.length ? true : false
    }

    const totalPrice = computed(() => {
      let sum = 0
      let _list = state.list.filter(item => state.result.includes(item.cartItemId))
      _list.forEach(item => {
        sum += item.goodsCount * item.sellingPrice
      })
      console.log(sum);
      return sum
    })

    const onSubmit = () => {
      if (state.result.length == 0) {
        Toast.fail('请选择商品进行结算')
        return
      }
      router.push({ path: '/create-order', query: { cartItemIds: JSON.stringify(state.result)}})
    }

    return {
      ...toRefs(state),
      onChange,
      deleteGood,
      allCheck,
      groupChange,
      totalPrice,
      onSubmit
    }
  },
  components: {
    sHeader,
    NavBar
  }
}
</script>

<style lang="less" scoped>
.cart-box {
  .cart-body {
    margin: 16px 0 100px 0;
    padding-left: 10px;
  }
}
</style>
<style>
.van-checkbox {
  width: 22px;
}
.van-swipe-cell__wrapper {
  display: flex;
}
.van-card.goods-card {
  width: 100%;
  background-color: #fff;
}
.delete-button {
  height: 100%;
}
.van-card__footer{
  position: absolute;
  right: 16px;
  bottom: 8px;
}
.van-card__price{
  color: red;
  font-size: 16px;
}
.submit-all{
  bottom: 50px;
}
.checkAll{
  width: 60px;
}
</style>