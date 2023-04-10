<template>
  <div class="user">
    <userSearch @query-click="handleQueryClick"></userSearch>

    <UserContent
      @new-click="handleNewClick"
      ref="contentRef"
      @edit-click="handleEditClick"
    ></UserContent>

    <UserModal ref="newClickRef"></UserModal>
  </div>
</template>

<script setup lang="ts" name="user">
import { ref } from 'vue'
import UserContent from './c-cpn/user-content.vue'
import userSearch from './c-cpn/user-search.vue'
import UserModal from './c-cpn/user-modal.vue'

const contentRef = ref<InstanceType<typeof UserContent>>()
const handleQueryClick = (fromDate: any) => {
  contentRef.value?.fetchUserListDate(fromDate)
}

const newClickRef = ref<InstanceType<typeof UserModal>>()
const handleNewClick = () => {
  newClickRef.value?.setModelVisibl()
}
const handleEditClick = (itemData: any) => {
  newClickRef.value?.setModelVisibl(false, itemData)
}
</script>

<style scoped>
.user {
  border-radius: 5px;
  overflow: hidden;
}
</style>
