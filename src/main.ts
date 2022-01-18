import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import './assets/style/reset.css'

const app = createApp(App)
app.use(router)
  .use(store)
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')
