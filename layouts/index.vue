<template>
  <v-app>
    <TheHeader />
    <v-main>
      <nuxt />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: { TheHeader, TheFooter },
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
}
</style>