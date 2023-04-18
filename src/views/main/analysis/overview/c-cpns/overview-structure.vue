<template>
  <div class="structure">
    <el-card class="overview">
      <template #header>
        <div class="card-header">
          <span>项目结构</span>
        </div>
      </template>
      <pre class="bg">
        <code :class="'language'+language" v-html="highlightedCode" />
      </pre>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
export default defineComponent({
  props: {
    language: {
      type: String,
      default: 'html'
    },
    code: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const highlightedCode = ref<string>('')

    watchEffect(() => {
      highlightedCode.value = hljs.highlight(props.code, { language: props.language }).value
    })

    return {
      highlightedCode
    }
  }
})
</script>

<style lang="less" scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
  font-size: 17px;
}
.card-header {
  span {
    font-weight: 700;
  }
}
</style>
