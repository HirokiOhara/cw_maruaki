<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container>
        <PageTitle />
        <div v-if="error.statusCode === 404" class="content-box content-box-body">
          URLが間違っています。
        </div>
        <div v-else>
          エラーが発生しました。<br /><br />
          只今、復旧中ですので、今しばらくお待ちください。<br /><br />
          急ぎの用事がある方は、「問い合わせ」からご連絡ください。
        </div>
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: { TheHeader, TheFooter },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
}
</style>
