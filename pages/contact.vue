<template>
  <v-container>
    <PageTitle :title="contents[0].title" />
    Hello, "contact.vue"
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
          title: '問 い 合 わ せ',
          url: '/contact',
        },
      ],
    }
  },
}
</script>
