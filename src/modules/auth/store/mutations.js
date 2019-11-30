import * as types from './mutation-types'
export default {
  [types.SET_USERNAME] (state, payload) {
    state.username = payload
  },
  [types.SET_TOKEN] (state, payload) {
    state.token = payload
  }
}
