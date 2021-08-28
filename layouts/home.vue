<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: { TheFooter },
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
}
</style>