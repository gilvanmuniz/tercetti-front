<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
         <router-link
         class="navbar-brand" :to="{ name: 'home'}">
             Tercetti</router-link>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <router-link class="nav-link" :to="{ name: 'produtos' }">Produtos <span class="sr-only">(Página atual)</span></router-link>
            </li>
            <li class="nav-item active">
                <router-link class="nav-link" :to="{ name: 'produtos' }">Clientes <span class="sr-only">(Página atual)</span></router-link>
            </li>
            <li class="nav-item active">
                <router-link class="nav-link" :to="{ name: 'produtos' }">Fornecedores <span class="sr-only">(Página atual)</span></router-link>
            </li>
        </ul>
     </div>
 </nav>
</template>

<script>
export default {
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>

<style>

</style>
