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
      <v-row>
        <v-col>
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
        </v-col>
      </v-row>
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
