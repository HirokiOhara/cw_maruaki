<template>
  <v-app-bar
    app
    height="200"
    fixed
    flat
    color="rgba(255,255,255,0.9)"
  >
    <v-container class="fill-height">
      <nuxt-link to="/">
        <img
          class="header-logo"
          alt="輝きヒーロー《Can't stop twinkling. （キラキラが止められないよ☆）》"
          src="@/static/maruaki_logo.jpg"
        />
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn
        class="link"
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
        {
          title: '業務内容',
          slug: '/works',
        },
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
.container {
  width: 1000px;
}
.header-logo {
  width: 100px;
}
header {
  .v-btn.v-size--default {
    font-size: 1rem;
  }
}
.link {
  font-family: 'Noto Serif JP', serif;
  font-weight: 400;
}
</style>