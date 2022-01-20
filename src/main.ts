import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import importElIcons from './import-el-icon'

import './assets/style/reset.css'
import './assets/style/varibles.css'

const app = createApp(App)
importElIcons(app)
app.use(router)
  .use(store)
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')
