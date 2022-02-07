<template>
  <v-app>
    <TheHeader class="hidden-md-and-up" />
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
main.v-main {
  padding: 0px !important;
  @media screen and (max-width: 960px) {
    padding: 100px 0px 0px !important;
  }
}
.container {
  max-width: 1000px;
}
</style>