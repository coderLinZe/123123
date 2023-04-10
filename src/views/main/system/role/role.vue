<template>
  <div class="role">
    <pageSearch :search-config="searchConfig"></pageSearch>
  </div>
</template>

<script setup lang="ts" name="role">
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search-config'
</script>

<style scoped>
.role {
}
</style>
