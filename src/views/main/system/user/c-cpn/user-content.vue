<template>
  <div class="content">
    <div class="header">
      <h3>用户列表</h3>
      <el-button type="primary" @click="newClick">新建数据</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="80" />
        <el-table-column align="center" type="index" label="序号" width="80" />
        <el-table-column align="center" prop="name" label="用户名" width="130" />
        <el-table-column align="center" prop="realname" label="真实姓名" width="130" />
        <el-table-column align="center" prop="cellphone" label="手机号码" width="130" />
        <el-table-column align="center" prop="enable" label="状态" width="100">
          <!-- 作用域插槽 -->
          <template #default="scope">
            <el-button class="enable" type="success" plain size="small">
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="createAt" label="创建时间">
          <!-- 作用域插槽 -->
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="updateAt" label="更新时间">
          <!-- 作用域插槽 -->
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="operate" label="操作" width="150">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              icon="Edit"
              text
              @click="handleEditClick(scope.row)"
            >
            编辑
            </el-button>
            <el-button
              type="danger"
              size="small"
              icon="Delete"
              text
              @click="handleDeleteClick(scope.row.id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="paging">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total,sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import useSystemStore from '@/stores/main/system/system'
import { formatUTC } from '@/utils/format'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const emit = defineEmits(['newClick', 'editClick'])

const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
const { usersList, totalCount } = storeToRefs(systemStore)
const fetchUserListDate = (fromDate: any = {}) => {
  // 获取offset/size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const info = { size, offset }
  const pageInfo = { ...info, ...fromDate }
  // 发起网络请求
  systemStore.usersListDataAction(pageInfo)
}

fetchUserListDate()
const handleSizeChange = () => {
  fetchUserListDate()
}
const handleCurrentChange = () => {
  fetchUserListDate()
}
const newClick = () => {
  emit('newClick')
}

const handleDeleteClick = (id: number) => {
  // 删除弹窗操作
  ElMessageBox.confirm('是否删除该条数据', '删除操作', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      systemStore.deleteUserByIdAction(id)
      ElMessage({
        type: 'success',
        message: '删除成功',
        duration: 800
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消',
        duration: 800
      })

    })
}

const handleEditClick = (itemData: any) => {
  emit('editClick', itemData)
}

defineExpose({
  fetchUserListDate
})
</script>

<style lang="less" scoped>
.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }
  :deep(.el-button--small) {
    padding: 0;
  }
  .enable {
    padding: 5px 12px;
  }
}

.content {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
}

.paging {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
