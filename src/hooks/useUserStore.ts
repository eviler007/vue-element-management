import { toRefs } from 'vue'
import { useStore } from 'vuex'
import { UserType } from '@/types/store';

export default () => {
  const store = useStore();
  const { userid, username, avatarUrl, permissionList } = toRefs<UserType>(store.state.user)
  
  return {
    userid,
    username,
    avatarUrl,
    permissionList
  }
}