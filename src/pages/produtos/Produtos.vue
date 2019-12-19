<template>
  <div class="container">
      <h1 class="text-center">PRODUTOS</h1>
      <table class="table">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody v-for="produto in produtos" :key="produto.id">
              <tr>
                  <td>{{ produto.id }}</td>
                  <td>{{ produto.name }}</td>
                  <td>R$ {{parseFloat(produto.price).toFixed(2)}}</td>
                  <td><router-link class="btn btn-dark" :to="{ name: 'produtos-detalhes', params: { id: produto.id } }">Update</router-link></td>
                  <td><button class="btn btn-danger" @click="deleteProdutos(produto.id)">Delete</button></td>
              </tr>
          </tbody>
      </table>
      <router-link class="btn btn-secondary" :to="{ name: 'produtos-cadastro' }">Cadastrar Produto</router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      id: null,
      token: null
    }
  },

  mounted () {
    this.ActionFindProdutos()
  },
  computed: {
    ...mapState('produtos', ['produtos'])
  },
  methods: {
    ...mapActions('produtos', ['ActionFindProdutos']),

    cadastrarProduto () {

    },

    deleteProdutos (id) {
      this.id = id
      console.log(this.id)
      const json = JSON.stringify(this.produtos)
      var url = 'http://localhost:8081/produtos/' + this.id
      fetch(url, {
        method: 'delete',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: json
      })
      window.console.log(json)
    }

  }
}
</script>

<style>
 .container{
   padding: 3%;
 }
</style>
