<template>
  <div class="user">
    <!-- <userSearch @query-click="handleQueryClick" @reset-click="handleResetClick"></userSearch> -->
<pageSearch :search-config="searchConfig" @query-click="handleQueryClick" @reset-click="handleResetClick"></pageSearch>
    <userContent
      @new-click="handleNewClick"
      ref="contentRef"
      @edit-click="handleEditClick"
    ></userContent>

    <UserModal ref="newClickRef"></UserModal>
  </div>
</template>

<script setup lang="ts" name="user">
import { ref } from 'vue'
import userContent from './c-cpn/user-content.vue'
import userSearch from './c-cpn/user-search.vue'
import UserModal from './c-cpn/user-modal.vue'
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search-config'
const contentRef = ref<InstanceType<typeof userContent>>()
const handleQueryClick = (fromDate: any) => {
  contentRef.value?.fetchUserListDate(fromDate)
}
const handleResetClick = () => {
  contentRef.value?.fetchUserListDate()
}


const newClickRef = ref<InstanceType<typeof UserModal>>()
const handleNewClick = () => {
  newClickRef.value?.setModelVisible()
}
const handleEditClick = (itemData: any) => {
  newClickRef.value?.setModelVisible(false, itemData)
}
</script>

<style scoped>
.user {
  border-radius: 5px;
  overflow: hidden;
}
</style>
