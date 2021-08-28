<template>
  <v-container>
    <PageTitle :title="contents[0].title" />
    Hello, "profile.vue"
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
          title: '会 社 概 要',
          url: '/profile',
        },
      ],
    }
  },
}
</script>
