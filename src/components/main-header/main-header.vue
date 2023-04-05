<template>
  <div class="main-header">
    <div class="left">
      <div class="Expand" @click="handleMenuClick">
        <el-icon size="28px">
          <component :is="isFold ? 'Expand' : 'Fold'" />
        </el-icon>
      </div>
      <HeaderCrumb></HeaderCrumb>
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
    flex: 3;
  }
}
</style>
