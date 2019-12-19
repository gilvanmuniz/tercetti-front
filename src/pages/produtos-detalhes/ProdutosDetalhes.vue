<template>
  <div class="container ">
      <h2 class="text-center">Especificações do Produto</h2>
      <div class="produtos text-center">
        <ul v-for="(item, chave ) in produto" :key="item.id">
        <li >{{ chave }}: {{ item }}</li>
      </ul>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  mounted () {
    this.ActionFindProduto(this.$route.params.id)
  },
  computed: {
    ...mapState('produtosDetalhes', ['produto'])
  },
  methods: {
    ...mapActions('produtosDetalhes', ['ActionFindProduto'])
  }
}
</script>

<style lang="scss" scoped>

ul{
  text-decoration: none;
  list-style: none;
}
.container{
  padding: 1%;
  display: flex;
  flex-direction: column
}

.produtos{
  border: solid 1px black;
  width: 40%;
  margin-left: 30%;
  padding: 1%;
  border-radius: 3%;
  font-size: 1.5em;
}

</style>
