<template>
  <div class="user">
    <PageSearch
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    ></PageSearch>
    <div class="content">
      <pageContent
        :content-config="contentConfig"
        ref="contentRef"
        @edit-click="handleEditClick"
        @new-click="handleNewClick"
      ></pageContent>
    </div>

    <pageModal :modal-config="modalConfigRef" ref="modalRef"> </pageModal>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search-config'
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content-config'
import pageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal-config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useMainStore from '@/stores/main/main'

//1.处理密码相关逻辑
const newCallback = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.prop === 'password')
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.prop === 'password')
  passwordItem!.isHidden = true
}

// 对modalConfig进行操作
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()

  const departmentItem = modalConfig.formItems.find((item) => item.prop === 'departmentId')
  departmentItem!.options = mainStore.entireDepartment.map((item: any) => {
    return { label: item.name, value: item.id }
  })

  const roleItem = modalConfig.formItems.find((item) => item.prop === 'roleId')
  roleItem!.options = mainStore.entireRoles.map((item: any) => {
    return { label: item.name, value: item.id }
  })

  // const departments = mainStore.entireDepartment.map((item: any) => {
  //   return { label: item.name, value: item.id }
  // })
  // const roles = mainStore.entireRoles.map((item: any) => {
  //   return { label: item.name, value: item.id }
  // })

  // modalConfig.formItems.forEach((item) => {
  //   if (item.prop === 'departmentId') {
  //     item.options.push(...departments)
  //   } else if (item.prop === 'roleId') {
  //     item.options.push(...roles)
  //   }
  // })

  return modalConfig
})

const { contentRef, handleQueryClick, handleResetClick } = usePageContent()
const { modalRef, handleEditClick, handleNewClick } = usePageModal(editCallback, newCallback)
</script>

<style scoped>
.user {
  border-radius: 5px;
  overflow: hidden;
}

.content {
  margin-top: 20px;
}
</style>
