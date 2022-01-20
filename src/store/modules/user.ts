import { UserType } from '@/types/store';

const state: UserType = {
  userid: '123123123',
  username: 'Eviler',
  permissionList: []
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  mutations
}