<template>
  <div class="login-panel">
    <div class="left">
      <img
        class="img"
        src="https://img2.baidu.com/it/u=1021889928,3434310694&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=800"
        alt=""
      />
    </div>
    <div class="right">
      <h1 class="title">CoderZe-CMS</h1>
      <div class="tabs">
        <el-tabs type="border-card" stretch v-model="activeName">
          <!-- 账号登录 -->
          <el-tab-pane name="account">
            <template #label>
              <div class="label">
                <el-icon><User /></el-icon>
                <span class="span">账号登录</span>
              </div>
            </template>
            <Account ref="accountRef"></Account>
          </el-tab-pane>

          <!-- 手机登录 -->
          <el-tab-pane name="phone">
            <template #label>
              <div class="label">
                <el-icon><Iphone /></el-icon>
                <span class="span">手机登录</span>
              </div>
            </template>
            <Phone></Phone>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class="controls">
        <el-checkbox v-model="rememberPwd" label="记住密码" size="large" />
        <el-link type="primary">忘记密码</el-link>
      </div>
      <div class="login">
        <el-button size="large" class="login-btn" type="primary" @click="LoginBtnClick"
          >立即登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import localCache from '@/utils/localCache'
import { ref, watch } from 'vue'
import Account from './account.vue'
import Phone from './phone.vue'
const activeName = ref('account')
const rememberPwd = ref<boolean>(localCache.getCache('rememberPwd') ?? true)

watch(rememberPwd, (newValue) => {
  localCache.setCache('rememberPwd', newValue)
})

// 没有默认值 写泛型类型
const accountRef = ref<InstanceType<typeof Account>>()

const LoginBtnClick = () => {
  // 默认值为空 加可选链 ?
  accountRef.value?.loginAction(rememberPwd.value)
}
</script>

<style lang="less" scoped>
.login-panel {
  display: flex;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
  border-radius: 3%;

  .left {
    .img {
      width: 500px;
      height: 400px;
      border-radius: 3%;
    }
  }
  .right {
    padding: 20px;
    width: 330px;
    .title {
      color: rgb(127, 145, 185);
      text-align: center;
      margin-bottom: 10px;
      margin-bottom: 20px;
    }
    .tabs {
      .label {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .inp {
        .name {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          .nameInp {
            width: 250px;
          }
        }
      }
      .span {
        margin-left: 5px;
      }
    }
    .controls {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
    }
    .login {
      .login-btn {
        width: 100%;
        border-radius: 30px;
        margin-top: 10px;
      }
    }
  }
}
</style>
