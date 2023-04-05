<template>
  <el-form label-width="60px" :model="account" :rules="accountRules" status-icon ref="formRef">
    <el-form-item label="账号" prop="name">
      <el-input
        v-model="account.name"
        type="text"
        placeholder="请输入账号"
        @keyup.enter="loginAction"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="account.password"
        type="password"
        placeholder="请输入密码"
        show-password
        @keyup.enter="loginAction"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/stores/login/login'
import type { IAccount } from '@/types'
import localCache from '@/utils/localCache'
import { accountRules } from '../config/accountConfig'

const CHCHE_NAME = 'name'
const CHCHE_PASSWORD = 'password'
const account = reactive<IAccount>({
  name: localCache.getCache(CHCHE_NAME) ?? '',
  password: localCache.getCache(CHCHE_PASSWORD) ?? ''
})



// 执行登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
const loginAction = (rememberPwd: Boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.获取用户输入的账号和密码
      const name = account.name
      const password = account.password

      // 2.携带账号密码发送网络请求
      loginStore
        .loginAccountAction({
          name,
          password
        })
        .then(() => {
          // 3.判断是否记住密码
          if (rememberPwd) {
            localCache.setCache(CHCHE_NAME, name)
            localCache.setCache(CHCHE_PASSWORD, password)
          } else {
            localCache.removeCache(CHCHE_NAME)
            localCache.removeCache(CHCHE_PASSWORD)
          }

          ElMessage({
            message: '登录成功',
            duration: 1000,
            type: 'success'
          })
        })
        .catch(() => {
          ElMessage({
            message: '账号或密码错误',
            duration: 2000,
            type: 'error'
          })
        })
    }
  })
}
defineExpose({
  loginAction
})
</script>
