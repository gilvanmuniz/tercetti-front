import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionDoLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then(res => {
    dispatch('ActionSetUser', res.data.username)
    dispatch('ActionSetToken', res.data.token)
  })
}

export const ActionDoTeste = ({ dispatch }, payload) => {
  return services.auth.loadSession(payload).then(res => {
    dispatch('ActionSetUser', res.data.username)
    dispatch('ActionSetToken', res.data.token)
  })
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token)
  }
  const token = storage.getLocalToken()
  console.log(token)
  if (!token) {
    return Promise.reject(new Error('Invalid token'))
  }

  dispatch('ActionSetToken', token)
  return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch }) => {
  const dados = services.auth.loadSession()
  console.log(dados)
  return new Promise(async (resolve, reject) => {
    try {
      const { data: { username } } = await services.auth.loadSession()
      // console.log(username)
      dispatch('ActionSetUser', username)
      resolve()
    } catch (err) {
      dispatch('ActionSignOut')
      reject(err)
    }
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USERNAME, payload)
}
export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  storage.setHeaderToken('')
  storage.deleteLocalToken()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}
