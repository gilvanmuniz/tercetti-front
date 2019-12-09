import services from '@/http'
import * as types from './mutation-types'

export const ActionFindProdutos = ({ commit }) => (
  services.produtos.findProdutos().then(res => {
    commit(types.SET_PRODUTOS, res.data)
  })
)
