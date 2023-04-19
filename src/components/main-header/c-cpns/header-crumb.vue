<template>
  <div class="crumb">
       <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadcrumb" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>

 
    </div>
    
</template>

<script setup lang="ts">
import useLoginStore from '@/stores/login/login'
import { mapPathToBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const userMenus = useLoginStore().userMenus
const breadcrumb = computed(() => {
  return mapPathToBreadcrumbs(route.path, userMenus)
})
</script>

<style lang="less" scoped>

.crumb{
  display: flex;
  align-items: center;
}
</style>
