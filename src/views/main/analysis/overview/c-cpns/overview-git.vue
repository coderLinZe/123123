<template>
  <div class="card">
    <el-card class="overview">
      <template #header>
        <div class="card-header">
          <span>Git提交规范</span>
        </div>
      </template>

      <!-- Git提交规范 -->
      <div class="dependencies">
        <el-descriptions border :column="1">
          <template v-for="item in datas" :key="item">
            <el-descriptions-item :label="item.name" label-align="left" align="left">
              <el-tag size="small">{{ item.description }}</el-tag>
            </el-descriptions-item>
          </template>
        </el-descriptions>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { datas } from '../config/cpm-specification'

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
