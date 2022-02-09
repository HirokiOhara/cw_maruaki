<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    <div class="content-box content-box-body">
      <p>
        このサイトは現時点（2022/02/09）で、正式版が完成しました。<br />
        今後も、手直ししながらより良いものにしていきたいと考えていますので、暖かく見守っていただければ幸いです。<br />
        本サイトについて、ご意見、ご質問、があれば、「問い合わせ」の「その他」からご連絡ください。<br />
        これからも、丸明造園をよろしくお願いいたします。
      </p>
    </div>
    <div class="content-box content-box-body">
      <h2>著作権・肖像権</h2>
      <p>
        本サイトに掲載してある「文章」や「写真」、「絵」、「書」、「ロゴ」は、すべて有限会社丸明造園に帰属します。<br />
        無断での利用はお控えください。
      </p>
    </div>
    <div class="content-box content-box-body">
      <h2>プライバシーポリシー</h2>
      <p>
        本サイトでは、アクセス状況を把握するためにGoogle Analyticsを利用しています。<br />
        Google Analyticsは、Cookieという仕組みを利用して情報の収集を行います。<br />
        収集している内容や方法については、下記のリンクからご確認ください。
      </p>
      <ul>
        <li>
          <a href="https://policies.google.com/technologies/partner-sites?hl=ja">収集した情報の Google による使用</a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/cookies?hl=ja">Google による Cokkie の利用方法</a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/cookies?hl=ja#types-of-cookies">Google が使用している Cokkie の種類</a>
        </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: { PageTitle },
  layout: 'index',
  head: {
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
</style>
