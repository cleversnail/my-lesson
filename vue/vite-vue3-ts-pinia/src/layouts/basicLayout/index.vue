<template>
  <a-layout>
    <Header />

    <a-layout class="content">
      <a-layout-sider class="menu">
        <SideMenu />
      </a-layout-sider>

      <a-layout-content class="content-right">
        <!-- <a-card>
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          </a-breadcrumb>
        </a-card> -->

        <!-- <a-divider class="line" /> -->

        <!-- <template>
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </template> -->

        <router-view></router-view>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import SideMenu from './components/SideMenu.vue'
import { router } from '../../router/index';

</script>

<style>
.ant-layout.ant-layout-has-sider.content {
  height: calc(100vh - 80px);
}
.content .menu {
  background: #fff;
}
.content-right{
  padding: 20px;
}
</style>

