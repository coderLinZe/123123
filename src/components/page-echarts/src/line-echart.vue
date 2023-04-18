<template>
  <div class="line-chart">
    <baseEchart :option="option"></baseEchart>
  </div>
</template>

<script setup lang="ts">
import baseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'
interface IProps {
  labels: string[]
  values: string[]
}

const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.labels
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.values,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
