<template>
  <div class="role">
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
      ></pageContent>
    </div>

    <pageModal :modal-config="modalConfig" ref="modalRef" :other-info="otherInfo">
      <template #menulist>
        <el-tree
          :data="entireMenus"
          show-checkbox
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'name' }"
          @check="handleElTreeCheck"
          ref="treeRef"
        />
      </template>
    </pageModal>
  </div>
</template>

<script setup lang="ts" name="role">
import { storeToRefs } from 'pinia'
import { nextTick, ref } from 'vue'
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search-config'
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content-config'
import pageModal from '@/components/page-modal/page-modal.vue'
import modalConfig from './config/modal-config'
import type { ElTree } from 'element-plus'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useMainStore from '@/stores/main/main'
import { mapMenuListToIds } from '@/utils/map-menus'
const useStore = useMainStore()
const { entireMenus } = storeToRefs(useStore)
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

const treeRef = ref<InstanceType<typeof ElTree>>()

const newCallback = () => {
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}
const editCallback = (queryClick: any) => {
  nextTick(() => {
    const menuIds = mapMenuListToIds(queryClick.menuList)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
const { modalRef, handleEditClick, handleNewClick } = usePageModal(editCallback, newCallback)
const otherInfo = ref({})

const handleElTreeCheck = (data1: any, data2: any) => {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>

<style lang="less" scoped>
.role {
  .content {
    margin-top: 20px;
  }
}
</style>
