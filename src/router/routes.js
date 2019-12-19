import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages/home'
import { routes as produtos } from '../pages/produtos'
import { routes as produtosDetalhes } from '../pages/produtos-detalhes'
import { routes as produtosCadastro } from '../pages/produtos-cadastro'

export default [
  ...auth,
  ...home,
  ...produtos,
  ...produtosDetalhes,
  ...produtosCadastro
]
