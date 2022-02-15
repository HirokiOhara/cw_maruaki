<template>
  <v-app>
    <DarkHeader />
    <v-main>
      <nuxt />
    </v-main>
    <DarkFooter />
  </v-app>
</template>

<script>
import DarkHeader from '~/components/DarkHeader.vue'
import DarkFooter from '~/components/DarkFooter.vue'

export default {
  theme: { dark: true },
  components: { DarkHeader, DarkFooter },
}
</script>

<style scoped lang="scss">
.container {
  max-width: 100%;
}
.theme--light.v-application {
  background-color: rgba($color: #55576c, $alpha: 1.0);
}
// h1 {
//   color: white !important;
// }
// .theme--light.v-divider {
//   border-color: white !important;
// }
// .v-application--wrap {
//   background-color: rgb(160, 235, 150) !important;
// }
</style>