<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    Hello, "works.vue"
  </v-container>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: { PageTitle },
  layout: 'index',
  data() {
    return {
      page: [
        {
          title: '業 務 内 容',
          url: '/works',
        },
      ],
    }
  },
}
</script>
