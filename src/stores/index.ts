import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './login/login'

const p = createPinia()

function pinia(app: App) {
   // 1.use的pinia
  app.use(p)
  // 2.加载本地的数据
  const loginStore = useLoginStore()
  loginStore.loadLocalCacheAction()
}

export default pinia
