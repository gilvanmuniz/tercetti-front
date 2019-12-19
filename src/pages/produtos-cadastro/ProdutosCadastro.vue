<template>
  <div class="container">
    <h2 class="text-center">Cadastro de Produto</h2>
    <form>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputEmail3" placeholder="Product name" />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Senha</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword3" placeholder="Price" />
        </div>
      </div>
      <!-- <div class="form-group row">
        <div class="col-sm-2">Primeiro Cadastro</div>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1" />
            <label class="form-check-label" for="gridCheck1">Checkbox exemplo</label>
          </div>
        </div>
      </div> -->
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-success">Cadastrar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  mounted () {
    this.ActionCadastroProduto()
  },
  computed: {
    ...mapState('produtosCadastro', ['produto'])
  },
  methods: {
    ...mapActions('produtosCadastro', ['ActionCadastroProduto'])
  }
}
</script>

<style lang="scss" scoped>
ul {
  text-decoration: none;
  list-style: none;
}
.container {
  padding: 1%;
  display: flex;
  flex-direction: column;
}

.produtos {
  border: solid 1px black;
  width: 40%;
  margin-left: 30%;
  padding: 1%;
  border-radius: 3%;
  font-size: 1.5em;
}
</style>
