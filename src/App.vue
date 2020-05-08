<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: 'App',
  created() {
      window.vm = this;
  }
}
</script>

<style>
  /*@import "./style/reset.css";*/
/* 引入全局重设样式、同时设置rem */
</style>
