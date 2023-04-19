<template>
  <div class="login">
    <LoginPanel></LoginPanel>
    <a class="a" href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2021025046号</a>
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from './c-cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(@/assets/img/login-bg.svg);
  .a {
    position: absolute;
    top: 10px;
    justify-content: center;
    color: gray;
  }
}
</style>
