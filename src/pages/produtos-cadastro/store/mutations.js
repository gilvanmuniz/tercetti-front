import * as types from './mutation-types'
export default {
  [types.SAVE_PRODUTO] (state, payload) {
    state.produto = payload
  }
}
