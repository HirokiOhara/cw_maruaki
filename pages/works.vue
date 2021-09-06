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
  head: {
    title: `${this.page[0].title}`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '私たち 丸明造園 は、「庭師を源流とする造園技能を引き継ぐ」少数精鋭集団です。'
      }
    ],
  },
  data() {
    return {
      page: [
        {
          title: '業務内容',
          url: '/works',
        },
      ],
    }
  },
}
</script>
