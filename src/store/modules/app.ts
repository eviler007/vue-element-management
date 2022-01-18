import { createStore, Store } from 'vuex'
import { AppType } from '@/types/app';
import { fullScreen, exitFullScreen } from '@/utils/full-screen'

const state: AppType = () => ({
  isFullScreen: false,
  isCollapse: false
})
const mutations = {
  toggleFullScreen(state: AppType) {
    state.isFullScreen = !state.isFullScreen
    if (state.isFullScreen) {
      fullScreen()
    } else {
      exitFullScreen()
    }
  },
  toggleCollapse(state: AppType) {
    state.isCollapse = !state.isCollapse
  }
}

export default {
  namespaced: true,
  state,
  mutations
}