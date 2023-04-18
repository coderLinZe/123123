<template>
  <div class="content">
    <div class="header" v-if="isCreate">
      <h3>{{ contentConfig?.header?.title ?? '数据列表' }}</h3>
      <el-button type="primary" @click="newClick" v-if="contentConfig?.header?.btnTitle">
        {{ contentConfig?.header?.btnTitle ?? '新建数据' }}
      </el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border style="width: 100%" v-bind="contentConfig.childrenTree">
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <template v-if="item.type === 'timer'">
            <el-table-column v-bind="item" align="center">
              <!-- 作用域插槽 -->
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>

          <template v-else-if="item.type === 'enable'">
            <el-table-column align="center" v-bind="item">
              <!-- 作用域插槽 -->
              <template #default="scope">
                <el-button
                  class="enable"
                  :type="scope.row.enable ? 'success' : 'danger'"
                  plain
                  size="small"
                >
                  {{ scope.row.enable ? '启用' : '禁用' }}
                </el-button>
              </template>
            </el-table-column>
          </template>

          <template v-else-if="item.type === 'handler'">
            <el-table-column align="center" v-bind="item" v-if="isUpdate || isDelete">
              <template #default="scope">
                <el-button
                  v-if="isUpdate"
                  type="primary"
                  size="small"
                  icon="Edit"
                  text
                  @click="handleEditClick(scope.row)"
                >
                  编辑
                </el-button>
                <el-button
                  v-if="isDelete"
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
          </template>

          <!-- 动态插入剩余的插槽 -->
          <template v-else-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope"></slot>
              </template>
            </el-table-column>
          </template>

          <template v-else>
            <el-table-column show-overflow-tooltip align="center" v-bind="item"> </el-table-column>
          </template>
        </template>
      </el-table>
    </div>

    <div class="paging" v-if="isPagination ?? true">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total,sizes, prev, pager, next, jumper"
        :total="pageTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import useSystemStore from '@/stores/main/system/system'
import { formatUTC } from '@/utils/format'
import { storeToRefs } from 'pinia'
import usePermissions from '@/hooks/usePermissions'

interface IProps {
  contentConfig: {
    pageName: string
    isPagination?: boolean
    header?: {
      title?: string
      btnTitle?: string
    }
    propsList: any[]
    childrenTree?: any
  }
}

const props = defineProps<IProps>()
const emit = defineEmits(['newClick', 'editClick'])

const isCreate = usePermissions(`${props.contentConfig.pageName}:create`)

const isDelete = usePermissions(`${props.contentConfig.pageName}:delete`)
const isUpdate = usePermissions(`${props.contentConfig.pageName}:update`)
const isQuery = usePermissions(`${props.contentConfig.pageName}:query`)
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
const isPagination = ref(props.contentConfig.isPagination)
//分页回到第一页
// after 网络请求成功后执行
systemStore.$onAction(({ name, after }) => {
  after(() => {
    if (
      name === 'deletePageByIdAction' ||
      name === 'editPageDataAction' ||
      name === 'newPageDataAction'
    ) {
      currentPage.value = 1
    }
  })
})

fetchPageListDate()

const { pageList, pageTotalCount } = storeToRefs(systemStore)

const handleSizeChange = () => {
  fetchPageListDate()
}
const handleCurrentChange = () => {
  fetchPageListDate()
}
function fetchPageListDate(fromDate: any = {}) {
  if (!isQuery) return
  // 获取offset/size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const info = { size, offset }
  const pageInfo = { ...info, ...fromDate }

  // 发起网络请求
  systemStore.postPageListDataAction(props.contentConfig.pageName, pageInfo)
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
      systemStore.deletePageByIdAction(props.contentConfig.pageName, id)
      ElMessage({
        type: 'success',
        message: '删除成功',
        duration: 800
      })
    })
    .catch(() => {})
}

const handleEditClick = (itemData: any) => {
  emit('editClick', itemData)
}

defineExpose({
  fetchPageListDate
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
  :deep(.el-table__body-wrapper .el-table-column--selection > .cell) {
    flex-direction: column;
  }
}

.content {
  background-color: #fff;
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
