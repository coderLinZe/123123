<template>
  <div>
    <el-card class="overview">
      <template #header>
        <div class="card-header">
          <span>关于</span>
        </div>
      </template>
      <span
        >CoderZe-CMS 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。</span
      >
    </el-card>
  </div>
  <overviewCard></overviewCard>
  <overviewStructure :code="projectDir"></overviewStructure>
  <overviewSpecification></overviewSpecification>
  <overviewGit></overviewGit>
</template>
<script setup lang="ts">
import overviewCard from './c-cpns/overview-card.vue'
import overviewStructure from './c-cpns/overview-structure.vue';
import overviewSpecification from './c-cpns/overview-specification.vue';
import overviewGit from './c-cpns/overview-git.vue';
import {projectDir} from './config/project-dir'
</script>

<style lang="less" scoped>
.overview {
  margin-bottom: 20px;
  .card-header {
    span {
      font-weight: 700;
    }
  }
}
</style>
