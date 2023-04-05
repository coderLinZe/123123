import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import ElementPlus from 'element-plus'
import registerIcons from './global/icons'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.use(router)

app.use(registerIcons)
app.mount('#app')
