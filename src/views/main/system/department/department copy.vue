<template>
  <div class="app">
    <pageSearch @query-click="handleQueryClick"></pageSearch>

    <pageContent
      ref="contentRef"
      @edit-click="handleEditClick"
      @new-click="handleNewClick"
    ></pageContent>

    <pageModal ref="modalRef"></pageModal>
  </div>
</template>

<script setup lang="ts">
import pageSearch from './c-cpns/page-search.vue'
import pageContent from './c-cpns/page-content.vue'
import pageModal from './c-cpns/page-modal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof pageContent>>()
const modalRef = ref<InstanceType<typeof pageModal>>()
const handleQueryClick = (queryClick: any) => {
  contentRef.value?.fetchPageListDate(queryClick)
}
const handleEditClick = (queryClick: any) => {
  modalRef.value?.setModelVisibl(false, queryClick)
}
const handleNewClick = () => {
  modalRef.value?.setModelVisibl()
}
</script>

<style lang="less" scoped></style>
