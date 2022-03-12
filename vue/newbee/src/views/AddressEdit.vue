<template>
  <div class="address-edit-box">
    <s-header :title="type === 'add' ? '新增地址' : '编辑地址'"></s-header>
    <van-address-edit
      :area-list="areaList"
      :show-delete="type == 'edit'"
      :address-info="addressInfo"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import sHeader from '../components/SimpleHeader.vue'
import { onMounted } from '@vue/runtime-core'
import { tdist } from '../common/js/utils'
import { addAddress, getAddressDetail, EditAddress, DeleteAddress } from '../service/address'
import { Toast } from 'vant'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      type: 'add',
      areaList: {},
      addressId: 0,
      from: '',
      addressInfo: {}
    })

    onMounted(async () => {
      let _province_list = {}
      let _city_list = {}
      let _county_list = {}
      tdist.getLev1().forEach(p => {
        _province_list[p.id] = p.text

        tdist.getLev2(p.id).forEach(c => {
          _city_list[c.id] = c.text

          tdist.getLev3(c.id).forEach(q => _county_list[q.id] = q.text)
        })
      });
      state.areaList.province_list = _province_list
      state.areaList.city_list = _city_list
      state.areaList.county_list = _county_list

      const { addressId, type, from } = route.query
      state.type = type
      state.addressId = addressId
      state.from = from
      if (type === 'edit') {
        const { data: addressDetail } = await getAddressDetail(addressId)
        console.log(addressDetail);
        let _areaCode = ''
        const province = tdist.getLev1()
        Object.entries(state.areaList.county_list).forEach(([id, text]) => {
          // 先找出当前对应的区
          if (text == addressDetail.regionName) {
            // 找到区对应的几个省份
            const provinceIndex = province.findIndex(item => item.id.substr(0, 2) == id.substr(0, 2))
            // 找到区对应的几个市区
            // eslint-disable-next-line no-unused-vars
            const cityItem = Object.entries(state.areaList.city_list).filter(([cityId, cityName]) => cityId.substr(0, 4) == id.substr(0, 4))[0]
            // 对比找到的省份和接口返回的省份是否相等，因为有一些区会重名
            if (province[provinceIndex].text == addressDetail.provinceName && cityItem[1] == addressDetail.cityName) {
              _areaCode = id
            }
          }
        })
        state.addressInfo = {
          id: addressDetail.addressId,
          name: addressDetail.userName,
          tel: addressDetail.userPhone,
          province: addressDetail.provinceName,
          city: addressDetail.cityName,
          county: addressDetail.regionName,
          addressDetail: addressDetail.detailAddress,
          areaCode: _areaCode,
          isDefault: !!addressDetail.defaultFlag
        }

      }
    })

    const onSave = async (content) => {
      // console.log(content);
      const params = {
        userName: content.name,
        userPhone: content.tel,
        provinceName: content.province,
        cityName: content.city,
        regionName: content.county,
        detailAddress: content.addressDetail,
        defaultFlag: content.isDefault ? 1 : 0
      }
      if (state.type === 'edit') {
        params['addressId'] = state.addressId
      }
      // console.log(params);
      // 保存地址到服务器
      await state.type === 'add' ? addAddress(params) : EditAddress(params)
      Toast('保存成功')
      setTimeout(() => {
        router.back()
      }, 1000)
    }

    const onDelete = async() => {
      await DeleteAddress(state.addressId)
      Toast('删除成功')
      setTimeout(() => {
        router.back()
      }, 1000)
    }

    return {
      ...toRefs(state),
      onSave,
      onDelete
    }
  },
  components: {
    sHeader
  }
}
</script>

<style>
</style>