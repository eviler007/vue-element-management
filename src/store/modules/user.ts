import { UserType } from '@/types/user';

const state: UserType = {
  userid: '',
  username: '',
  permissionList: []
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  mutations
}