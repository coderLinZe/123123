// stores/counter.js
import { newStory } from '@/service/main/story/story'
import { defineStore } from 'pinia'

const useStoryStore = defineStore('story', {
  state: () => ({}),
  actions: {
    async newStoryAction(title: string, content: string) {
      newStory(title, content)
    }
  }
})

export default useStoryStore
