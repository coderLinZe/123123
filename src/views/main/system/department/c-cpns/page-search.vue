<template>
  <div class="search">
    <el-form
      :model="searchForm"
      class="demo-form-inline"
      label-width="80"
      ref="formRef"
      size="large"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="searchForm.name" placeholder="请输入部门名称" />
          </el-form-item>
          <div class="grid-content ep-bg-purple" />
        </el-col>

        <el-col :span="8">
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="searchForm.leader" placeholder="请输入部门领导" />
          </el-form-item>
          <div class="grid-content ep-bg-purple" />
        </el-col>

        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
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
      <el-button icon="refresh" @click="resetBtnClick">重置</el-button>
      <el-button type="primary" icon="search" @click="searchBtnClick">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
const searchForm = reactive({
  name: '',
  leader: '',
  createAt: ''
})

const emit = defineEmits(['queryClick'])
const formRef = ref<InstanceType<typeof ElForm>>()

const searchBtnClick = () => {
  emit('queryClick', searchForm)  
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
