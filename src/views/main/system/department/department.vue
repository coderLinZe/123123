<template>
  <div class="app">
    <pageSearch
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
      :search-config="searchConfig"
    ></pageSearch>

    <pageContent
      ref="contentRef"
      @edit-click="handleEditClick"
      @new-click="handleNewClick"
      :content-config="contentConfig"
    >
    </pageContent>

    <pageModal ref="modalRef" :modal-config="modalConfigRef"></pageModal>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from './config/search-config'
import contentConfig from './config/content-config'
import modalConfig from './config/modal-config'
import useMainStore from '@/stores/main/main'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

// 对modalConfig进行操作
// const modalConfigRef = computed(() => {
//   const mainStore = useMainStore()
//   const departments = mainStore.entireDepartment.map((item: any) => {
//     return { label: item.name, value: item.id }
//   })
//   modalConfig.formItems.forEach((item) => {
//     if (item.prop === 'parentId') {
//       item.options.push(...departments)
//     }
//   })
//   return modalConfig
// })

const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
  departmentItem!.options = mainStore.entireDepartment.map((item: any) => {
    return { label: item.name, value: item.id }
  })
  return modalConfig
})

//相同的逻辑的抽取: hooks

// 点击search, content的操作
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

// 点击content, modal的操作
const { modalRef, handleEditClick, handleNewClick } = usePageModal()
</script>

<style lang="less" scoped></style>
