<template>
  <div class="right">
    <!-- 1.操作小图标 -->
    <div class="icons">
      <span>
        <el-icon><Bell /></el-icon>
      </span>
      <span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <el-icon><Postcard /></el-icon>
      </span>
    </div>

    <el-dropdown>
      <span class="userInfo">
        <el-avatar
          :size="35"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          shape="circle"
        />
        <span class="name">{{ name }}</span>
        <span class="arrow"
          ><el-icon><arrow-down /></el-icon
        ></span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="exitClick">
            <el-icon><CircleClose /></el-icon>
            <span>退出系统</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon><InfoFilled /></el-icon>
            <span>个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><Unlock /></el-icon>
            <span>修改密码</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import useLoginStore from '@/stores/login/login'
import localCache from '@/utils/localCache'
import { ref } from 'vue'
const name = ref()

const userInfo = useLoginStore().userInfo
name.value = userInfo.name

const exitClick = () => {
  localCache.removeCache('token')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.right {
  display: flex;
  height: 100%;
  align-items: center;
  flex: 1;

  .icons {
    display: flex;
    padding: 0 15px;
    font-size: 20px;
    span {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 55px;
      height: 35px;
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
    .arrow {
      margin-left: 5px;
    }
  }
}
</style>
