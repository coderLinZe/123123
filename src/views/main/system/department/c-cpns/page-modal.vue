<template>
  <el-dialog v-model="dialogVisible" :title="isNewRef ? '新建部门' : '修改部门'" width="30%" center>
    <el-form ref="ruleFormRef" :model="formData" label-width="80px" size="large">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入部门名称" />
      </el-form-item>
      <el-form-item label="上级部门" prop="parentId">
        <el-select v-model="formData.parentId" placeholder="选择上级部门" style="width: 100%">
          <template v-for="item in entireDepartment" :key="item.id">
            <el-option :label="item.name" :value="item.id" />
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="部门领导" prop="name">
        <el-input v-model="formData.leader" placeholder="请输入领导名称" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import useMianStore from '@/stores/main/main'
import useSystemStore from '@/stores/main/system/system'
import type { ElForm } from 'element-plus'
import { storeToRefs } from 'pinia'

import { ref, reactive } from 'vue'
const formData = reactive<any>({
  name: '',
  parentId: '',
  leader: ''
})
const editData = ref()
const isNewRef = ref(true)
// 部门数据
const dialogVisible = ref(false)
const ruleFormRef = ref<InstanceType<typeof ElForm>>()

const setModelVisibl = (isNew: boolean = true, itemData?: any) => {
  dialogVisible.value = true
  isNewRef.value = isNew
  // isNewRef = false修改
  // isNewRef = true新建
  // 编辑部门
  if (!isNew && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 创建部门
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}

const mianStore = useMianStore()
const systemStore = useSystemStore()
const { entireDepartment } = storeToRefs(mianStore)

// 确定按钮操作
const handleConfirmClick = () => {
  dialogVisible.value = false
  // 编辑部门
  if (!isNewRef.value && editData.value) {
    systemStore.editPageDataAction('department', editData.value.id, formData)
  } else {
    // 创建部门
    systemStore.newPageDataAction('department', formData)
  }
}

defineExpose({
  setModelVisibl
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
