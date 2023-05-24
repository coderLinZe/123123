<template>
  <div class="goods">
    <pageSearch
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    ></pageSearch>
    <div class="content">
      <pageContent
        :content-config="contentConfig"
        @edit-click="handleEditClick"
        @new-click="handleNewClick"
        ref="contentRef"
      >
        <template #image="scope">
          <el-image
            style="width: 60px; height: 60px"
            :src="scope.row.imgUrl"
            :preview-src-list="[scope.row.imgUrl]"
            preview-teleported
          />
        </template>

        <template #oldP="scope">
          {{ '￥ ' + scope.row.oldPrice }}
        </template>
        <template #newP="scope">
          {{ '￥ ' + scope.row.newPrice }}
        </template>
      </pageContent>
    </div>

    <pageModal :modal-config="modalConfig" ref="modalRef"></pageModal>
  </div>
</template>

<script setup lang="ts" name="goods">
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search-config'
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content-config'
import pageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal-config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

//相同的逻辑的抽取: hooks

// 点击search, content的操作
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

// 点击content, modal的操作
const { modalRef, handleEditClick, handleNewClick } = usePageModal()
</script>

<style lang="less" scoped>
.goods {
  .content {
    margin-top: 20px;
  }
}
</style>
