export default [
  {
    path: '/produtos-cadastro',
    name: 'produtos-cadastro',
    component: () => import(/* webpackChunkName: "produtos-cadastro" */ './ProdutosCadastro.vue')
  }
]
