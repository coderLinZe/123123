<template>
  <div class="search">
    <el-form
      :model="searchFrom"
      class="demo-form-inline"
      label-width="80"
      ref="formRef"
      size="large"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="searchFrom.name" placeholder="请输入用户名" />
          </el-form-item>
          <div class="grid-content ep-bg-purple" />
        </el-col>

        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="searchFrom.realname" placeholder="请输入真实姓名" />
          </el-form-item>
          <div class="grid-content ep-bg-purple" />
        </el-col>

        <el-col :span="8">
          <el-form-item label="电话号码" prop="cellphone">
            <el-input v-model="searchFrom.cellphone" placeholder="请输入电话号码" />
          </el-form-item>
          <div class="grid-content ep-bg-purple" />
        </el-col>

        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select v-model="searchFrom.enable" placeholder="请选择状态" style="width: 100%">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
          <div class="grid-content ep-bg-purple" />
        </el-col>

        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchFrom.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
            <div class="grid-content ep-bg-purple" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="btn">
      <el-button icon="Refresh" @click="resetBtnClick">重置</el-button>
      <el-button type="primary" icon="Search" @click="SearchBtnClick">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
const searchFrom = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt: ''
})
const emit = defineEmits(['queryClick'])
const formRef = ref<InstanceType<typeof ElForm>>()
const SearchBtnClick = () => {
  emit('queryClick', searchFrom)
}

// 重置操作
const resetBtnClick = () => {
  formRef.value?.resetFields()
}
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }
  .btn {
    text-align: right;
    padding: 20px 80px;
  }
}
</style>
