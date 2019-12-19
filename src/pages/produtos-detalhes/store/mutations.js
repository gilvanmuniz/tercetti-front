import * as types from './mutation-types'
export default {
  [types.SET_PRODUTO] (state, payload) {
    state.produto = payload
  }
}
