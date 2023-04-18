<template>
  <div class="rose-chart">
    <baseEchart :option="option"></baseEchart>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import baseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import type { IEChartValueType } from '../types/type'

interface IProps {
  roseData: IEChartValueType[]
}

const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 160],
        center: ['50%', '50%'],
        bottom:'-35%',
        roseType: 'area',

        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
