<template>
  <div id="app">
    <LayOutNavBar v-if="showNavBar"/>
    <router-view/>
  </div>
</template>

<script>
import LayOutNavBar from './components/layout/LayOutNavBar'
export default {
  components: {
    LayOutNavBar
  },
  computed: {
    showNavBar () {
      return this.$route.name !== 'home' && this.$route.name !== 'login'
    }
  }
}
</script>

<style lang="scss">
</style>
