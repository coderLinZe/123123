<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <mainMenu :isFold="isFold"></mainMenu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <mainHeader @fold-change="isFoldChange"></mainHeader>
        </el-header>
        <el-main><router-view></router-view> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'
const isFold = ref(false)
const isFoldChange = (e: boolean) => {
  isFold.value = e
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;
  .el-aside {
    background-color: #0c2135;
    // transition: width 3 ease;
    transition: width 0.3s linear;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    background-color: #fff;
  }
  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
