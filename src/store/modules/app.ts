import { AppType } from '@/types/store'
import { defaultTheme, changeTheme, themeList } from '@/themes'

const state: AppType = {
  isCollapse: false,
  theme: defaultTheme,
  themeList: themeList
}
const mutations = {
  toggleCollapse(state: AppType) {
    state.isCollapse = !state.isCollapse
  },
  changeTheme(state: AppType, theme: string) {
    state.theme = theme
    changeTheme(theme)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}