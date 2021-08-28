<template>
  <v-container>
    <PageTitle :title="contents[0].title" />
    Hello, "recruit.vue"
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
          title: '採 用 情 報',
          url: '/recruit',
        },
      ],
    }
  },
}
</script>
