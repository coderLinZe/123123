// stores/counter.js
import { newStory, getStoryList } from '@/service/main/story/story'
import { defineStore } from 'pinia'

interface IStory {
  storyList: any[]
  pageTotalCount: number
}

const useStoryStore = defineStore('story', {
  state: (): IStory => ({
    storyList: [],
    pageTotalCount: 999
  }),
  actions: {
    // 提交故事
    async newStoryAction(title: string, content: string) {
      newStory(title, content)
    },
    // 获取故事列表
    async getStoryListAction(pageInfo:any) {
      const storyListResult = await getStoryList(pageInfo)
      this.storyList = storyListResult.data.list
      this.pageTotalCount = this.storyList[0].id
    }
  }
})

export default useStoryStore
