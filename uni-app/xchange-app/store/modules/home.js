import { CHANGE_HOME_DATA, STORE_ID_LIST } from './../mutations_type'
import API from '@/utils/api'

const state = {
  ids: [],
  data: {}
}

const mutations = {
  [CHANGE_HOME_DATA](state, payload) {
    state.data = payload.data
  },
  [STORE_ID_LIST](state, payload) {
    state.ids = payload.ids
  }
}

const actions = {
  async getHomeData({ commit, state }) {
    const { data } = await API.getHomeData(state.ids[0])
    commit(CHANGE_HOME_DATA, { data })
  }
}

export default {
  state,
  mutations,
  actions
}
