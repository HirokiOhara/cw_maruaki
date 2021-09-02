<template>
  <v-container>
    <div class="home">
      <div class="home-left">
        <img
          class="home-logo"
          alt="輝きヒーロー《Can't stop twinkling. （キラキラが止められないよ☆）》"
          src="@/static/maruaki_logo.jpg"
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
