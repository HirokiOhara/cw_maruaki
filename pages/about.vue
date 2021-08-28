<template>
  <v-container>
    <PageTitle :title="contents[0].title" />
    Hello, "about.vue"
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
          title: 'こ の サ イ ト に つ い て',
          url: '/about',
        },
      ],
    }
  },
}
</script>
