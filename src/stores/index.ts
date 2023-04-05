import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './login/login'

const p = createPinia()

function pinia(app: App) {
  app.use(p)
  const loginStore = useLoginStore()
  loginStore.loadLocalCacheAction()
}

export default pinia
