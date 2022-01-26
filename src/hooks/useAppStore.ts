import { toRefs } from 'vue'
import { useStore } from 'vuex'
import { AppType } from '@/types/store';

export default () => {
  const store = useStore();
  const { isCollapse, theme, themeList } = toRefs<AppType>(store.state.app)
  const toggleCollapse = () => { store.commit('app/toggleCollapse') }
  const changeTheme = (data: string) => { store.commit('app/changeTheme', data) }
  return {
    isCollapse,
    theme,
    themeList,
    toggleCollapse,
    changeTheme
  }
}