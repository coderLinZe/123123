<template>
  <el-dialog v-model="dialogVisible" :title="isNewRef ? '新建用户' : '修改用户'" width="30%" center>
    <el-form ref="ruleFormRef" :model="formData" label-width="80px" size="large">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="formData.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="真实姓名" prop="realname">
        <el-input v-model="formData.realname" placeholder="请输入真实姓名" />
      </el-form-item>

      <el-form-item label="密码" prop="password" v-if="isNewRef">
        <el-input
          v-model="formData.password"
          type="password"
          show-password
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item label="电话号码" prop="cellphone">
        <el-input v-model="formData.cellphone" placeholder="请输入电话号码" />
      </el-form-item>

      <el-form-item label="选择角色" prop="role">
        <el-select v-model="formData.roleId" placeholder="请选择角色" style="width: 100%">
          <template v-for="item in entireRoles" :key="item.id">
            <el-option :label="item.name" :value="item.id" />
          </template>
        </el-select>
      </el-form-item>

      <el-form-item label="选择部门" prop="department">
        <el-select v-model="formData.departmentId" placeholder="请选择部门" style="width: 100%">
          <template v-for="item in entireDepartment" :key="item.id">
            <el-option :label="item.name" :value="item.id" />
          </template>
        </el-select>
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
import useMainStore from '@/stores/main/main'
import useSystemStore from '@/stores/main/system/system'

import type { ElForm } from 'element-plus'
import { storeToRefs } from 'pinia'

import { ref, reactive } from 'vue'
const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})
const editData = ref()
const isNewRef = ref(true)
// 获取用户/部门数据
const dialogVisible = ref(false)
const ruleFormRef = ref<InstanceType<typeof ElForm>>()
const setModelVisible = (isNew: boolean = true, itemData?: any) => {
  dialogVisible.value = true
  isNewRef.value = isNew
  // isNewRef = false编辑
  // isNewRef = true新建
  // 编辑用户
  if (!isNew && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 创建用户
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}

const mainStore = useMainStore()
const systemStore = useSystemStore()
const { entireRoles, entireDepartment } = storeToRefs(mainStore)

// 确定按钮操作
const handleConfirmClick = () => {
  dialogVisible.value = false
  // 编辑用户
  if (!isNewRef.value && editData.value) {
    systemStore.editUserByIdAction(editData.value.id, formData)
  } else {
    // 创建用户
    systemStore.newUserDataAction(formData)
  }
}

defineExpose({
  setModelVisible
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
