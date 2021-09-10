<template>
  <v-container>
    <div class="home">
      <div class="home-left">
        <img
          class="home-logo"
          alt="有限会社 丸明造園"
          src="@/static/logo_default.png"
        />
      </div>
      <div class="home-right">
        <v-row v-for="item in items" :key="item.title">
          <v-col>
            <nuxt-link class="home-link" :to="item.slug">
              {{ item.title }}
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '丸明造園のコーポレートサイトです。'
      }
    ],
  },
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
</style>
