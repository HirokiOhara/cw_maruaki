<template>
  <v-app>
    <TheHeader />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: { TheHeader },
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
}
</style>