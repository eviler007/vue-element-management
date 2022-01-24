import { AppType } from '@/types/store'
import { defaultTheme, changeTheme, themeList } from '@/themes'

// 枚举存储在storage内的key
enum STORAGE_KEY {
  isCollapse = 'app_isCollapse',
  theme = 'app_thtme',
}

const state: AppType = {
  isCollapse: localStorage.getItem(STORAGE_KEY.isCollapse) === '1',
  theme: localStorage.getItem(STORAGE_KEY.theme) || defaultTheme,
  themeList: themeList
}

const mutations = {
  toggleCollapse(state: AppType) {
    state.isCollapse = !state.isCollapse
    localStorage.setItem(STORAGE_KEY.isCollapse, state.isCollapse ? '1' : '0')
  },
  changeTheme(state: AppType, theme: string) {
    state.theme = theme
    localStorage.setItem(STORAGE_KEY.theme, changeTheme(theme))
  }
}

export default {
  namespaced: true,
  state,
  mutations
}