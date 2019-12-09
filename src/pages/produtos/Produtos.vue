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
                  <td>{{ produto.price }}</td>
                  <td><input class="btn btn-dark" @click="updateSenhas(user.id, user.user, user.site, user.password)" type="button" :value="'Update'"></td>
                  <td><input class="btn btn-danger" @click="deleteSenhas(user.id, user.user, user.site, user.password)" type="button" :value="'Delete'"></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {

  mounted () {
    this.ActionFindProdutos()
  },
  computed: {
    ...mapState('produtos', ['produtos'])
  },
  methods: {
    ...mapActions('produtos', ['ActionFindProdutos'])
  }
}
</script>

<style>
 .container{
   padding: 3%;
 }
</style>
