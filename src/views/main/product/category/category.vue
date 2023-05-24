<template>
  <div class="category">
    <PageSearch
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    >
    </PageSearch>
    <div class="content">
      <pageContent
        :content-config="contentConfig"
        @edit-click="handleEditClick"
        @new-click="handleNewClick"
        ref="contentRef"
      ></pageContent>
    </div>

    <pageModal :modal-config="modalConfig" ref="modalRef"></pageModal>
  </div>
</template>

<script setup lang="ts" name="category">
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search-config'
import pageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal-config'
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content-config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

//相同的逻辑的抽取: hooks

// 点击search, content的操作
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

// 点击content, modal的操作
const { modalRef, handleEditClick, handleNewClick } = usePageModal()
</script>

<style lang="less" scoped>
.category {
  .content {
    margin-top: 20px;
  }
}
</style>
