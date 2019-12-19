export default [
  {
    path: '/produtos/:id',
    name: 'produtos-detalhes',
    component: () => import(/* webpackChunkName: "produtos-detalhes" */ './ProdutosDetalhes.vue')
  }
]
