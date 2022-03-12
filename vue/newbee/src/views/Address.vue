<template>
  <div class="address-box">
    <s-header :title="'地址管理'"></s-header>
    <div class="address-item">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />

    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import sHeader from '../components/SimpleHeader.vue'
import { onMounted } from '@vue/runtime-core';
import { getAddressList } from '../service/address'
import { useRoute, useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      chosenAddressId: '1',
      list: [],
      from: route.query.from || "" 
    })

    onMounted(async() => {
      const { data } = await getAddressList()
      if (!data.length) {
        state.list = []
        return 
      }
      console.log(data);
      state.list = data.map(item => {
        return {
          id: item.addressId,
          name: item.userName,
          tel: item.userPhone,
          address: `${item.provinceName} ${item.cityName} ${item.regionName} ${item.detailAddress}`,
          isDefault: !!item.defaultFlag
        }
      })
      state.chosenAddressId = Number(route.query.id)
      console.log(state.chosenAddressId);
    })

    const onAdd = () => {
      router.push({ path: '/address-edit', query: {type: 'add', from: state.from}})
    }

    const onEdit = (item) => {
      console.log(item);
      router.push({ path: '/address-edit', query: {type: 'edit', addressId: item.id, from: state.from}})
    }

    const select = (item) => {
      console.log(item);
      router.push({ path: '/create-order', query: { addressId: item.id, from: state.from }})
    }

    return {
      ...toRefs(state),
      onAdd,
      onEdit,
      select
    }
  },
  components: {
    sHeader
  }
}
</script>

<style>

</style>