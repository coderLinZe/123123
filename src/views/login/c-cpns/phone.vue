<template>
  <el-form label-width="65px" :rules="phoneRules" :model="account" status-icon>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="account.phone" type="text" placeholder="请输入手机号" />
    </el-form-item>

    <el-form-item label="验证码" prop="verifyCode">
      <el-input class="verifyInp" v-model="account.verifyCode" placeholder="请输入验证码" />
      <el-button class="login-btn" type="primary">获取验证码</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { phoneRules } from '../config/phoneConfig'
const account = reactive({
  phone: '',
  verifyCode: ''
})
</script>

<style lang="less" scoped>
::v-deep .el-form-item__content {
  justify-content: space-between;
}
.verifyInp {
  width: 130px;
}
.login-btn{
  width: 90px;
}
</style>
