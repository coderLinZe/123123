<template>
  <div class="chat">
    <div class="header">
      <div class="header-btn">
        <el-button icon="search" type="primary" @click="submitClick">提交</el-button>
        <el-button icon="refresh" @click="resetBtnClick">重置</el-button>
      
      </div>
      <el-input
          v-model="title"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          placeholder="请输入标题"
        />
    </div>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 400px; overflow-y: hidden"
        v-model="content"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
  </div>
</template>

<script lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import useStoryStore from '@/stores/main/story/story'
import { ElMessage } from 'element-plus'
const useStory = useStoryStore()
export default {
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()
    const title = ref()
    const content = ref()
    const submitClick = () => {
      if (content.value && title.value) {
        useStory.newStoryAction(title.value, content.value)
        title.value = ''
        content.value = ''
      } else {
        ElMessage({
          message: '请输入标题或内容',
          type: 'warning'
        })
      }
    }
    const resetBtnClick = () => {
      title.value = ''
      content.value = ''
    }

    // 模拟 ajax 异步获取内容
    // onMounted(() => {
    //   setTimeout(() => {
    //     valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    //   }, 1500)
    // })

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    const handleCreated = (editor: any) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    return {
      editorRef,
      content,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      submitClick,
      resetBtnClick,
      title
    }
  }
}
</script>

<style lang="less" scoped>
.chat {
  background-color: #fff;
  padding: 20px;
  .header {
    margin-bottom: 20px;

    .header-btn {
      margin-bottom: 20px;
      display: flex;
    }
  }
}
</style>
