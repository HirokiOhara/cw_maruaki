<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container>
        <PageTitle />
        <div v-if="error.statusCode === 404" class="content-box content-box-body">
          <p>
            URLが間違っています。
          </p>
        </div>
        <div v-else class="content-box content-box-body">
          <p>
            エラーが発生しました。<br /><br />
            只今、復旧中ですので、今しばらくお待ちください。<br /><br />
            急ぎの用事がある方は、「問い合わせ」からご連絡ください。
          </p>
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
