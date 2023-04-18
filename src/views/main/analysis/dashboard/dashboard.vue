<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
          <countCard v-bind="item" />
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="7">
        <chartCard header="分类商品数量(饼图)">
          <pieEchart :pie-data="showGoodsCategoryCount"></pieEchart>
        </chartCard>
      </el-col>
      <el-col :span="10">
        <chartCard header="不同城市商品销量(地图)">
          <mapEchart  :map-data="showGoodsCategoryAddress"></mapEchart>
        </chartCard>
      </el-col>
      <el-col :span="7">
        <chartCard header="分类商品数量(玫瑰图)">
          <roseEchart :rose-data="showGoodsCategorySale"></roseEchart>
        </chartCard>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <chartCard header="分类商品的销量(折线图)">
          <lineEchart v-bind="showGoodsCategorySales"></lineEchart>
        </chartCard>
      </el-col>

      <el-col :span="12">
        <chartCard header="分类商品的收藏(柱状图)">
          <barEchart v-bind="showGoodsCategoryFavor"></barEchart>
        </chartCard>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import { computed } from 'vue'
import useAnalysisStore from '@/stores/main/analysis/analysis'
import countCard from './c-cpns/count-card/count-card.vue'
import chartCard from './c-cpns/chart-card/chart-card.vue'
import { pieEchart, lineEchart, roseEchart, barEchart, mapEchart } from '@/components/page-echarts'

import { storeToRefs } from 'pinia'

// 发起网络请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()
// store获取数据
const {
  amountList,
  goodsCategoryCount,
  goodsCategoryAddress,
  goodsCategorySale,
  goodsCategoryFavor
} = storeToRefs(analysisStore)

const showGoodsCategoryCount = computed(() => {
  // 映射数据
  return goodsCategoryCount.value.map((item: any) => ({
    name: item.name,
    value: item.goodsCount
  }))
})

const showGoodsCategoryAddress = computed(() => {
  // 映射数据
  return goodsCategoryAddress.value.map((item: any) => ({
    name: item.address,
    value: item.count
  }))
})

const showGoodsCategorySale = computed(() => {
  // 映射数据
  return goodsCategorySale.value.map((item: any) => ({
    name: item.name,
    value: item.goodsCount
  }))
})

const showGoodsCategorySales = computed(() => {
  const labels = goodsCategorySale.value.map((item) => item.name)
  const values = goodsCategorySale.value.map((item) => item.goodsCount)
  return { labels, values }
})

const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})
</script>

<style scoped>
.dashboard {
}

.el-row {
  margin-bottom: 20px;
}

.chart {
  height: 400px;
}
</style>
