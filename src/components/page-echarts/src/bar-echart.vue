<template>
  <div class="bar-chart">
    <baseEchart :option="option"></baseEchart>
  </div>
</template>

<script setup lang="ts">
import baseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import { computed } from 'vue'
interface IProps {
  labels: string[]
  values: string[]
}

const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    title: {
      text: '支持鼠标滚动缩放',
    },
    xAxis: {
      data: props.labels,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.values
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
