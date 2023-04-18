<template>
  <div class="menu">
    <pageContent
      :content-config="contentConfig"
      ref="contentRef"
      @edit-click="handleEditClick"
      @new-click="handleNewClick"
    ></pageContent>
    <PageModal :modal-config="modalConfig" ref="modalRef"> </PageModal>
  </div>
</template>

<script setup lang="ts" name="menu">
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content-config'
import PageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal-config'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
//相同的逻辑的抽取: hooks

// 点击search, content的操作
const { contentRef} = usePageContent()

// 点击content, modal的操作
const { modalRef, handleEditClick, handleNewClick } = usePageModal()
</script>

<style scoped>
.menu {
}
</style>
