<template>
  <div class="char-card">
    <el-card class="box-card" :header="header">
      <slot></slot>
    </el-card>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  header?: string
}

withDefaults(defineProps<IProps>(), {
  header: '卡片标题'
})
</script>

<style lang="less" scoped></style>
