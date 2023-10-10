<template>
  <div class="content">
    <div class="header">
      <h3>故事列表</h3>
    </div>
    <div class="table">
      <el-table :data="storyList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="80" />
        <el-table-column align="center" type="index" label="序号" width="80" />
        <el-table-column align="center" prop="title" label="故事标题" />
        <el-table-column align="center" prop="content" label="故事内容">
          <!-- 作用域插槽 -->
          <template #default="scope">
            <p v-html="scope.row.content" />
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
      </el-table>
    </div>

    <div class="paging">
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
import { formatUTC } from '@/utils/format'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import useStoryStore from '@/stores/main/story/story'

const useStory = useStoryStore()
const currentPage = ref(1)
const pageSize = ref(10)
const { storyList, pageTotalCount } = storeToRefs(useStory)

const fetchPageListDate = () => {
  // 获取offset/size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  // 发起网络请求
  useStory.getStoryListAction(pageInfo)
}

fetchPageListDate()
const handleSizeChange = () => {
  fetchPageListDate()
}
const handleCurrentChange = () => {
  fetchPageListDate()
}
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
