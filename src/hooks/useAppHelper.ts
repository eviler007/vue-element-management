import { toRefs } from 'vue'
import { useStore } from 'vuex'

export default () => {
  const store = useStore();
  const { isCollapse, theme, themeList } = toRefs(store.state.app)
  const toggleCollapse = () => { store.commit('app/toggleCollapse') }
  const changeTheme = (data: any) => { store.commit('app/changeTheme', data) }
  return {
    isCollapse,
    theme,
    themeList,
    toggleCollapse,
    changeTheme
  }
}