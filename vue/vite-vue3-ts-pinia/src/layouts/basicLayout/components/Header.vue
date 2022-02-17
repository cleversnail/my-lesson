<template>
  <a-layout-header class="header">
    <div class="logo-wrap">
      <router-link to="/">
        <img src="https://cn.vitejs.dev/logo.svg" class="logo" alt="">
        <h1 class="title">Vite-Vue3-TS</h1>
      </router-link>
    </div>
    <div>
      <!-- rightContent -->
      <RightContent />
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import RightContent from './RightContent.vue';

</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 16px;
  background: #fff;
  box-shadow: 0 1px 4px #00152914;
  z-index: 1;
}
.logo-wrap{
  height: 100%;
}
.logo-wrap a{
  display: flex;
  align-items: center;
  height: 100%;
}
.logo{
  width: 48px;
  height: 48px;
}
.title{
  margin: 0;
  margin-left: 12px;
  font-size: 18px;
  color: #000;
}
</style>