<template>
  <div class="home container">
    <h1 class="text-center">TERCETTI</h1>
    <h2 class="text-center">Olá {{ username }}</h2>
    <div class="home-links text-center">
      <router-link  class="home-link" :to="{ name: 'produtos' }">
      <span>PRODUTOS</span>
      <i class="material-icons">storefront</i>
      </router-link>
      <router-link  class="home-link" :to="{ name: 'produtos' }">
      <span>CLIENTES</span>
      <i class="material-icons">storefront</i>
      </router-link>
      <router-link  class="home-link" :to="{ name: 'produtos' }">
      <span>FORNECEDORES</span>
      <i class="material-icons">storefront</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['username'])
  }
}
</script>

<style lang="scss">
  @mixin flex-center($columns: false){
    display: flex;
    justify-content: center;
    align-items: center;

    @if $columns{
      flex-direction: column;
    }
  }
  .home{
    @include flex-center(true);
    justify-content: space-around;
    padding: 2%;
    .home-links{
      @include flex-center();
      padding: 5%;
      flex: 0 0 25%;
      align-items: center;
      justify-content: center;
      .home-link {
        background-color: #cacaca;
        flex: 0 0 25%;
        margin: 15px 15px;
        padding: 18px 10px;
        transition: 0.8s;
        color: var(--white);
        &:hover {
          -webkit-transform: scale(1.1);
          -ms-transform: scale(1.1);
          -o-transform: scale(1.1);
           transform: scale(1.1);
          text-decoration: none;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        }
        i{
          margin-left: 44%;
        }
      }
    }
  }
</style>
