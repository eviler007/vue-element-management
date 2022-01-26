import { UserType } from '@/types/store';

const state: UserType = {
  userid: '123123123',
  username: 'Eviler',
  avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  permissionList: []
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  mutations
}