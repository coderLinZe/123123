<template>
  <div class="card">
    <el-card class="overview">
      <template #header>
        <div class="card-header">
          <span>项目规范</span>
        </div>
      </template>
      <!-- 项目规范 -->
      <div class="content">
        <!-- 文件夹命名规范 -->
        <div class="dependencies">
          <div class="dependencies-header">文件夹命名规范</div>
          <el-descriptions border :column="1">
            <el-descriptions-item label="文件夹" label-align="left" align="left">
              <el-tag size="small">统一小写, 多个单词使用-分割</el-tag>
            </el-descriptions-item>
            <el-descriptions-item
              label="文件(.ts .vue .json .d.ts)"
              label-align="left"
              align="left"
            >
              <el-tag size="small">统一小写, 多个单词使用-分割</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>
<!-- 编写组件规范 -->
        <div class="dependencies">
          <div class="dependencies-header2">组件编写规范</div>
          <el-descriptions border :column="1">
            <template v-for="item in table" :key="item">
              <el-descriptions-item :label="item.name" label-align="left" align="left">
                <el-tag size="small">{{ item.description }}</el-tag>
              </el-descriptions-item>
            </template>
          </el-descriptions>
        </div>




      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { table } from '../config/cpm-specification'
</script>

<style lang="less" scoped>
.overview {
  .card-header {
    span {
      font-weight: 700;
    }
  }
  .content {
    .dependencies {
      .dependencies-header {
        margin-bottom: 20px;
      }
      .dependencies-header2 {
        margin: 20px 0;
      }
    }
  }
}
</style>
