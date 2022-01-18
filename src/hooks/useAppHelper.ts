import { toRefs } from 'vue'
import { useStore } from 'vuex'

export default () => {
  const store = useStore();
  const { isFullScreen, isCollapse } = toRefs(store.state.app)
  const toggleFullScreen = () => { store.commit('app/toggleFullScreen') }
  const toggleCollapse = () => { store.commit('app/toggleCollapse') }
  return {
    isFullScreen,
    isCollapse,
    toggleFullScreen,
    toggleCollapse
  }
}