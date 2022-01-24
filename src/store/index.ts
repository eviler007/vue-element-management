import { createStore, Store } from 'vuex'
import { StoreType } from '@/types/store'
import app from './modules/app';
import user from './modules/user';

const store: Store<StoreType> = createStore({
  modules: {
    app,
    user
  }
})

export default store;