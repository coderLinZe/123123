<template>
  <div class="card">
    <el-card class="overview">
      <template #header>
        <div class="card-header">
          <span>技术栈</span>
        </div>
      </template>
      <!-- 技术栈 -->
      <div class="content">
        <div class="content-header">
          <template v-for="item in technologyStacks" :key="item">
            <div class="item">
              <span class="title">
                {{ item.title }}
                <span> : </span>
              </span>
              <el-link type="primary">{{ item.desp }}</el-link>
            </div>
          </template>
        </div>

        <!-- 生产环境依赖 -->
        <div class="dependencies">
          <div class="dependencies-header">生产环境依赖</div>
          <el-descriptions border :column="2">
            <template v-for="item in dependencies" :key="item">
              <el-descriptions-item :label="item.name" label-align="left" align="left">
                <el-tag size="small">{{ item.description }}</el-tag>
              </el-descriptions-item>
            </template>
          </el-descriptions>
        </div>

        <!-- 开发环境依赖 -->
        <div class="dependencies">
          <div class="dependencies-header">开发环境依赖</div>
          <el-descriptions border :column="2">
            <template v-for="item in devDependencies" :key="item">
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
import { ref } from 'vue'
import { technologyStacks } from '../config/technology-stacks'
import { dependencies } from '../config/dependencies'
import { devDependencies } from '../config/dev-dependencies'
</script>

<style lang="less" scoped>
.overview {
  .card-header {
    span {
      font-weight: 700;
    }
  }

  .content {
    .content-header {
      padding-left: 20px;
      .item {
        margin: 0 0 10px 0;
        display: flex;
        align-items: center;
        position: relative;

        .title {
          margin-right: 20px;
        }
      }
    }

    .dependencies {
      .dependencies-header {
        margin: 20px 0 20px 0;
      }
    }
  }
}

.item::before {
  position: absolute;
  top: 40%;
  left: -15px;
  width: 5px;
  height: 5px;
  background: black;
  border-radius: 100%;
  content: '';
}
</style>
