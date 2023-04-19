<template>
  <div class="main-menu">
    <div class="main-top">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <div class="text" v-show="!isFold">CoderZe-CMS</div>
    </div>
    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      :default-active="defaultActive"
      text-color="#fff"
      :collapse="isFold"
    >
      <template v-for="item in userMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <!-- split() 方法用于把一个字符串分割成字符串数组 -->
              <component :is="item.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item :index="subitem.id + ''" @click="itemClick(subitem)">{{
              subitem.name
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/stores/login/login'
import { useRoute, useRouter } from 'vue-router'
import { mapPathToMenu } from '@/utils/map-menus'
import { computed } from 'vue'
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

const loginStore = useLoginStore()
const router = useRouter()
const userMenus = loginStore.userMenus

const itemClick = (item: any) => {
  const url = item.url
  router.push(url)
}

const route = useRoute()
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenus)
  return pathMenu.id + ''
})
</script>

<style lang="less" scoped>
.el-menu {
  background-color: #001529;
  border-right: none;
}

.main-top {
  display: flex;
  align-items: center;
  padding-left: 7px;
  background-color: #001529;
  height: 50px;
  .img {
    width: 30px;
    margin: 0 10px;
  }
  .text {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
  }
}
.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }
  .el-menu-item:hover {
    color: #fff;
    background-color: #143655;
  }
  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
