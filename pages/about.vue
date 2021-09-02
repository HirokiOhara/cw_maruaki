<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    <div class="content-box content-box-body">
      このサイトは現時点（2021/08/31）、製作中です。<br /><br />
      サイトについて、ご意見、ご質問、があれば、「問い合わせ」の「その他」からご連絡ください。<br /><br />
      これからも、丸明造園をよろしくお願いいたします。
    </div>
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
          title: 'こ の サ イ ト に つ い て',
          url: '/about',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.content-box {
  &-title {
    font-weight: 300;
    font-size: 30px;
  }
  &-body {
    font-weight: 300;
    font-size: 18px;
  }
}
</style>
