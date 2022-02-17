<template>
  <div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="chooseMenu"
    >
      <a-menu-item key="/app/home">
        <template #icon>
          <MailOutlined />
        </template>
        <span>首页</span>
      </a-menu-item>

      <a-menu-item key="/app/website">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <span>网站管理</span>
      </a-menu-item>

      <a-sub-menu key="sub4">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>其他菜单</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/runtime-core";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const router = useRouter()

    const state = reactive({
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['/app/home'],
      selectedKeys: ['/app/home'],
    });
    const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
      if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };
    const chooseMenu = (e: { key: string; item: {}}) => {
      console.log(e.key);
      router.push(e.key)
    }
    return {
      ...toRefs(state),
      onOpenChange,
      chooseMenu
    };
  },
})
</script>

<style>

</style>