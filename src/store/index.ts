import { createStore, Store } from 'vuex'
import { StoreType } from '@/types/store'
import app from './modules/app';

const store: Store<StoreType> = createStore({
  modules: {
    app
  }
})

export default store;