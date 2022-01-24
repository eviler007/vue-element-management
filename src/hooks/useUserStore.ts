import { toRefs } from 'vue'
import { useStore } from 'vuex'

export default () => {
  const store = useStore();
  const { userid, username, avatar, permissionList } = toRefs(store.state.user)
  
  return {
    userid,
    username,
    avatar,
    permissionList
  }
}