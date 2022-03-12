<template>
  <div class="goods">
    <header class="goods-header">{{title}}</header>
    <van-skeleton title :row="3" :loading="loading">
      <div class="goods-box">
        <div class="goods-item" v-for="item in goodsList" :key="item.goodsId" @click="gotoDetail(item)">
          <img :src="item.goodsCoverImg" alt="">
          <div class="goods-desc">
            <div class="title">{{item.goodsName}}</div>
            <div class="price">¥ {{item.sellingPrice}}</div>
          </div>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  // 在vue2中props是可以拿来直接使用的，但是不能修改props里面的值
  // vue3中的props直接被设定成只读
  props: {
    goodsList: Array,
    title: String
  },
  setup(props) {
    const router = useRouter()
    const loading = computed(() => {
      return props.goodsList.length  > 0 ? false : true
    })

    // watch(
    //   () => props.goodsList, 
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    //   }
    // )

    const gotoDetail = (item) => {
      // console.log(item);
      router.push({ path: '/product', query: {id: item.goodsId} })
    }
 
    return {
      loading,
      gotoDetail
    }
  }
}
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.goods{
  &-header{
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: @primary;
  }
  &-box{
    display: flex;
    flex-wrap: wrap;
    .goods-item{
      width: 50%;
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #e9e9e9;
      img{
        width: 120px;
        margin: 0 auto;
        display: block;
      }
      &:nth-child(2n+1) {
        border-right: 1px solid #e9e9e9;
      }
      .goods-desc{
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
        .title{
          color: #222333;
        }
        .price{
          color: @primary;
        }
      }
    }
  }
}
</style>