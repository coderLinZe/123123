<template>
  <div class="base-cheart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echart from 'echarts'
import { ref, onMounted,watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import ChinaJSON from '../data/china.json'

echart.registerMap('china',ChinaJSON as any)

interface IProps {
  option: EChartsOption
}

const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()


onMounted(() => {
  // 初始化实例
  const echartInstance = echart.init(echartRef.value!, 'light', {
    renderer: 'canvas'
  })


  // 第一次进行setOption
//   watchEffect自动收集依赖 监听option变化重新执行
  watchEffect(()=>{
    echartInstance.setOption(props.option)
  })

  window.addEventListener('resize',()=>{
    echartInstance.resize()
  })

})


</script>

<style lang="less" scoped>
.echart {
  height: 350px;
}
</style>
