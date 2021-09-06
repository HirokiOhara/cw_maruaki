<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    <div class="content-box content-box-body">
      <p>
        このサイトは現時点（2021/08/31）で、製作中です。<br /><br />
        サイトについて、ご意見、ご質問、があれば、「問い合わせ」の「その他」からご連絡ください。<br /><br />
        これからも、丸明造園をよろしくお願いいたします。
      </p>
    </div>
    <div class="content-box content-box-body">
      <h3>プライバシーポリシー</h3><br />
      <p>
        本サイトでは、アクセス状況を把握するためにGoogle Analyticsを利用しています。<br /><br />
        Google Analyticsは、Cookieという仕組みを利用して情報の収集を行います。<br /><br />
        収集している内容や方法については、下記のリンクからご確認ください。
      </p><br />
      <a href="https://policies.google.com/technologies/partner-sites?hl=ja">
        収集した情報の GOOGLE による使用
      </a><br />
      <a href="https://policies.google.com/technologies/cookies?hl=ja">
        GOOGLE による COOKIE の利用方法
      </a><br />
      <a href="https://policies.google.com/technologies/cookies?hl=ja#types-of-cookies">
        GOOGLE が使用している COOKIE の種類
      </a>
    </div>
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
        content: '丸明造園のコーポレートサイトについて'
      }
    ],
  },
  data() {
    return {
      page: [
        {
          title: 'このサイトについて',
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
