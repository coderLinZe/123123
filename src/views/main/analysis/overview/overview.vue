<template>
  <div class="box">
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
  <overviewCard></overviewCard>
  <overviewStructure :code="projectDir"></overviewStructure>
  <overviewSpecification></overviewSpecification>
  <overviewGit></overviewGit>
</div>
</template>
<script setup lang="ts">
import overviewCard from './c-cpns/overview-card.vue'
import overviewStructure from './c-cpns/overview-structure.vue';
import overviewSpecification from './c-cpns/overview-specification.vue';
import overviewGit from './c-cpns/overview-git.vue';
import {projectDir} from './config/project-dir'
</script>

<style lang="less" scoped>


.box{
 // 阻止双击 被选取 或高亮 显示
//  user-select: none;
}

.overview {
  margin-bottom: 20px;
  .card-header {
    span {
      font-weight: 700;
    }
  }
}
</style>
