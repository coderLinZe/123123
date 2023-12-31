<template>
  <div class="search" v-if="isQuery">
    <el-form
      :model="searchForm"
      class="demo-form-inline"
      label-width="80"
      ref="formRef"
      size="large"
    >
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8" :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder" />
              </template>

              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>

              <template v-if="item.type === 'select'">
                <el-select
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value"></el-option>
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
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
import usePermissions from '@/hooks/usePermissions'

interface IProps {
  searchConfig: {
    pageName: string
    formItems: any[]
  }
}

const props = defineProps<IProps>()
const emit = defineEmits(['queryClick', 'resetClick'])

const isQuery = usePermissions(`${props.searchConfig.pageName}:query`)

// 定义form数据
const initialForm: any = {}
for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = ''
}
const searchForm = reactive(initialForm)
// 重置操作
const formRef = ref<InstanceType<typeof ElForm>>()

const resetBtnClick = () => {
  // from中的数据全部重置
  formRef.value?.resetFields()
  emit('resetClick')
}

const searchBtnClick = () => {
  // 搜索
  emit('queryClick', searchForm)
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
