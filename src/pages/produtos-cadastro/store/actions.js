import services from '@/http'
import * as types from './mutation-types'

export const ActionCadastroProduto = ({ commit }) => (
  services.produtosCadastro.cadastroProduto().then(res => {
    commit(types.SAVE_PRODUTO, res.data)
  })
)
