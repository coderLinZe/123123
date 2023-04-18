<template>
  <div class="list">
    <pageContent :content-config="contentConfig"></pageContent>
  </div>
</template>

<script setup lang="ts" name="list">
import pageContent from '@/components/page-content/page-content.vue'
import contentConfig from './config/content-config'
</script>

<style scoped>
.list {
}
</style>
