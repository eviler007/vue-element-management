import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import importElIcons from './import-el-icon'

import './assets/style/index'

const app = createApp(App)
importElIcons(app)
app.use(router)
  .use(store)
  .use(ElementPlus, {
    locale: zhCn
  })
  .mount('#app')

// 设置默认主题
store.commit('app/changeTheme', store.state.app.theme)
