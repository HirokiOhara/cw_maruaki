<template>
  <v-container>
    <PageTitle :title="contents[0].title" />
    Hello, "news/index.vue"
  </v-container>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: { PageTitle },
  layout: 'index',
  data() {
    return {
      contents: [
        {
          title: '最 新 情 報',
          url: '/news',
        },
      ],
    }
  },
}
</script>
