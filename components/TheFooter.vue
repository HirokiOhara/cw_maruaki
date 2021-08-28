<template>
  <v-footer
    color="rgba(255, 255, 255, 0.9)"
    height="200"
    padless
  >
    <v-row justify="center" no-gutters class="link">
      <v-btn
        class="link"
        v-for="item in items"
        :key="item.title"
        :to="item.slug"
        :href="item.href"
        plain
        text
        color="black"
        nuxt
      >
        {{ item.title }}
      </v-btn>
      <v-col class="py-4 text-center black--text" cols="12">
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
          href: 'https://note.com/latelucet/',
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

<style scoped lang="scss">
.container {
  width: 1000px;
}
footer {
  .v-btn.v-size--default {
    font-size: 1rem;
  }
}
.link {
  font-family: 'Noto Serif JP', serif;
  font-weight: 400;
}
</style>