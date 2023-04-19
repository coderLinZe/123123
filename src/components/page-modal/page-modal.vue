<template>
  <el-dialog
    v-model="dialogVisible"
    :title="isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle"
    width="30%"
    center
  >
    <el-form :model="formData" label-width="80px" size="large">
      <template v-for="item in modalConfig.formItems" :key="item.prop">
        <el-form-item :label="item.label" :prop="item.prop" v-if="!item.isHidden">
          <template v-if="item.type === 'input'">
            <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
          </template>

          <template v-if="item.type === 'date-picker'">
            <el-date-picker
              v-model="formData[item.prop]"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </template>

          <template v-if="item.type === 'custom'">
            <slot :name="item.slotName"></slot>
          </template>

          <template v-if="item.type === 'select'">
            <el-select
              v-model="formData[item.prop]"
              :placeholder="item.placeholder"
              style="width: 100%"
            >
              <template v-for="option in item.options" :key="option.value">
                <el-option :label="option.label" :value="option.value" />
              </template>
            </el-select>
          </template>
        </el-form-item>
      </template>
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
import useSystemStore from '@/stores/main/system/system'
import { ref, reactive } from 'vue'
// import type { IModalProps } from './type'

interface IModalProps {
  modalConfig: {
    pageName: string
    header: {
      newTitle: string
      editTitle: string
    }
    formItems: any[]
  }
  otherInfo?: any
}

const props = defineProps<IModalProps>()
const dialogVisible = ref(false)

const initialData: any = {}
for (const item of props.modalConfig.formItems) {
  initialData[item.prop] = ''
}

const formData = reactive<any>(initialData)
const editData = ref()
const isNewRef = ref(true)
// 获取roles/departments数据
const systemStore = useSystemStore()

// 定义设置dialogVisible  弹窗方法
const setModelVisible = (isNew: boolean = true, itemData?: any) => {
  dialogVisible.value = true
  isNewRef.value = isNew
  // isNewRef = false修改
  // isNewRef = true新建
  // 编辑
  if (!isNew && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 创建
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}

// 确定按钮操作
const handleConfirmClick = () => {
  dialogVisible.value = false
  let infoData = formData
  if (props.otherInfo) {
    infoData = { ...infoData, ...props.otherInfo }
  }
  // 编辑
  if (!isNewRef.value && editData.value) {
    systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, infoData)
  } else {
    // 创建
    console.log(infoData)
    systemStore.newPageDataAction(props.modalConfig.pageName, infoData)
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
