<template>
  <v-app-bar
    app
    height="200"
    fixed
    flat
    color="rgba(255,255,255,0.9)"
  >
    <v-container class="fill-height header-box">
      <nuxt-link to="/">
        <img
          class="header-logo"
          alt="有限会社 丸明造園"
          src="@/static/logo_default.png"
        />
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn
        class="header-link"
        v-for="item in items" :key="item.title" :to="item.slug"
        plain
        text
        color="black"
        nuxt
      >
        {{ item.title }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: '最新情報',
          slug: '/news',
        },
        // {
        //   title: '業務内容',
        //   slug: '/works',
        // },
        {
          title: '問い合わせ',
          slug: '/contact',
        },
        {
          title: '会社概要',
          slug: '/profile',
        },
        {
          title: '採用情報',
          slug: '/recruit',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
// Vuetifyのせいで、ヘッダーが短くなるのを防ぐ
// @media (min-width: 960px) {
//   .container {
//     max-width: 1000px;
//   }
// }
.header-box {
  max-width: 1000px;
}
</style>