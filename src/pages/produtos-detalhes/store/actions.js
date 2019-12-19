import services from '@/http'
import * as types from './mutation-types'

export const ActionFindProduto = ({ commit }, payload) => (
  services.produtosDetalhes.findProduto({ id: payload }).then(res => {
    commit(types.SET_PRODUTO, res.data)
  })
)
