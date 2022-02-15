<template>
  <v-footer
    height="200"
    padless
    color="rgba(85, 87, 108, 0.9)"
  >
    <v-row justify="center" no-gutters class="footer-link">
      <v-btn
        v-for="item in items"
        :key="item.title"
        :to="item.slug"
        :href="item.href"
        plain
        text
        color="white"
        nuxt
      >
        {{ item.title }}
      </v-btn>
      <v-col class="py-4 text-center footer-name-dark" cols="12">
        © {{ new Date().getFullYear() }} 有限会社 丸明造園
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'ブログ',
          href: 'https://note.com/maruaki_zouen',
        },
        {
          title: 'サイトについて',
          slug: '/about',
        },
      ],
    }
  }
}
</script>
