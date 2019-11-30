<template>
  <div class="home">
    <h1 class="text-center">TERCETTI</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState()
  }
}
</script>
