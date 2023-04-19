import type pageModal from '@/components/page-modal/page-modal.vue'

import { ref } from 'vue'

type CallbackFunType = (data?: any) => void

function usePageModal(editCallback?: CallbackFunType, newCallback?: CallbackFunType) {
  const modalRef = ref<InstanceType<typeof pageModal>>()
  const handleEditClick = (queryClick: any) => {
    // 修改数据
    // 显示modal弹窗
    modalRef.value?.setModelVisible(false, queryClick)
    // 编辑的回调
    if (editCallback) {
      editCallback(queryClick)
    }
  }
  const handleNewClick = () => {
    // 新建数据 input为空
    modalRef.value?.setModelVisible()
    if (newCallback) newCallback()
  }

  return { modalRef, handleEditClick, handleNewClick, newCallback }
}

export default usePageModal
