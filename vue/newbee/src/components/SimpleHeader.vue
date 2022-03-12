<template>
  <header class="simple-header">
    <van-icon name="arrow-left" @click="goBack" v-if="!noback"/>
    <i v-else>&nbsp;</i>
    <div class="simple-header-name">{{title}}</div>
    <van-icon name="ellipsis" />
  </header>
  <div class="block"></div>
</template>

<script>
import { useRouter } from "vue-router"

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    noback: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin.less';
.simple-header{
  .fj();
  .wh(100%, 44px);
  line-height: 44px;
  padding: 0 10px;
  align-items: center;
  .boxSizing();
  background: #fff;
  color: #252525;
  .border-1px(#ebedf0);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  .van-icon{
    font-size: 16px;
  }
  .simple-header-name{
    font-size: 14px;
  }
}
.block{
  height: 44px;
}
</style>