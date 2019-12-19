import services from '@/http'
import * as types from './mutation-types'

export const ActionCadastroProduto = ({ commit }) => (
  services.produtosCadastro.cadastroProduto().then(res => {
    commit(types.SET_PRODUTO, res.data)
  })
)
