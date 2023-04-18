import type pageContent from '@/components/page-content/page-content.vue'
import { ref } from 'vue'

function usePageContent() {
  const contentRef = ref<InstanceType<typeof pageContent>>()
  const handleQueryClick = (queryClick: any) => {
    // 获取列表
    contentRef.value?.fetchPageListDate(queryClick)
  }
  const handleResetClick = () => {
    // 重置 重新发送请求
    contentRef.value?.fetchPageListDate()
  }

  return { contentRef,handleQueryClick, handleResetClick }
}

export default usePageContent
