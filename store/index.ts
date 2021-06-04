import Vuex from 'vuex'
import state from './state'
import { getters } from './getters'

// TODO: Create store via modules instead of classic mode
const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    modules: {},
  })
}

export default createStore
