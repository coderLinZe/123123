<template>
  <div class="main-header">
    <div class="left">
      <div class="Expand" @click="handleMenuClick">
        <el-icon size="28px">
          <component :is="isFold ? 'Expand' : 'Fold'" />
        </el-icon>
      </div>
      <div class="Crumb">
        <HeaderCrumb></HeaderCrumb>
      </div>
    </div>

    <div class="beian">
      <a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2021025046号</a>
    </div>
    <headerRight></headerRight>
  </div>
</template>

<script setup lang="ts">
import HeaderCrumb from './c-cpns/header-crumb.vue'
import headerRight from './c-cpns/header-right.vue'

import { ref } from 'vue'
const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleMenuClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  height: 100%;
  .left {
    display: flex;
    align-items: center;
    flex: 2;
    .Crumb {
      margin-left: 10px;
      display: flex;
    }
  }
  .beian {
    flex: 1;
    margin-right: 200px;
    a {
      color: gray;
    }
  }
}
</style>
