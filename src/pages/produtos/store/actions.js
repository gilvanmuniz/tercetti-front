import services from '@/http'
import * as types from './mutation-types'

export const ActionFindProdutos = ({ commit }) => (
  services.produtos.findProdutos().then(res => {
    commit(types.SET_PRODUTOS, res.data)
  })
)
export const ActionDeleteProduto = ({ commit }, payload) => (
  services.produtos.deleteProdutos({ id: payload }).then(res => {
    commit(types.SET_PRODUTOS, res.data)
  })
)
