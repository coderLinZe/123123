import '@/utils/ployfill'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import ElementPlus from 'element-plus'
import registerIcons from './global/icons'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(pinia)
app.use(router)

app.use(registerIcons)
app.mount('#app')
