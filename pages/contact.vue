<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    <div class="content-box content-box-body">
      <p>
        お問い合わせいただき、誠にありがとうございます。<br />
        以下の内容からお選びいただき、「こちら」のボタンからフォームを送信してください。お問い合わせ内容を確認した後に、当社より返信いたします。また、電話やメールで連絡していただいても問題ありません。
      </p><br />
      <p>
        電話番号：04-2962-4456（土日祝日を除き、8:30 - 17:30 受付）
      </p>
    </div>
    <div class="content-box" v-for="item in items" :key="item.title">
<!-- PC用 -->
      <v-row justify="center" align="start" class="hidden-sm-and-down content-box-body">
        <h2 class="vertical-text">
          {{ item.title }}
        </h2>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col cols="8" class="content-box-body">
          <p>
            {{ item.body }}
          </p>
        </v-col>
        <v-col cols="2" class="contact-btn">
          <v-btn
            block
            large
            outlined
            color="pink"
            class="content-box-body"
            :href="item.btn_href"
          >
            {{ item.btn_title }}
          </v-btn>
        </v-col>
      </v-row>
<!-- スマホ・タブレット用 -->
      <v-row justify="center" align="start" class="hidden-md-and-up">
        <v-col class="content-box-body">
          <h2>
            {{ item.title }}
          </h2>
          <p>
            {{ item.body }}
          </p>
          <v-row justify="center">
            <v-col justify="center" cols="5" class="contact-btn">
              <div class="contact-btn">
                <v-btn
                  block
                  large
                  outlined
                  color="pink"
                  class="content-box-body"
                  :href="item.btn_href"
                >
                  {{ item.btn_title }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
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
        content: '弊社 丸明造園 にご依頼・ご相談がある方は、リンク先のフォームからご連絡ください。'
      }
    ],
  },
  data() {
    return {
      items: [
        {
          title: '仕事の依頼・相談',
          body: '庭木の手入れ、不要樹の伐採撤去、除草薬剤の散布など、お客様のご要望に合わせて提供いたします。また、その景観に合わせた、エクステリアや外構工事なども実施いたします。詳しくは、「業務内容」を御覧ください。',
          btn_title: 'こちら',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSccMG5I6qhQT7gkI2woqB_7oqDdk1MdLKA4_FyFGcAGo5V0wg/viewform?usp=sf_link',
        },
        {
          title: '販売',
          body: '通年で、枝・葉の混合チップ材を取り扱っています。季節限定では、カブトムシの幼虫の販売を行っております。また、定期的に商品の入替を行います。',
          btn_title: 'こちら',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSduISg7rOMrPaGhiZ-M-tNnLjHY_poJENJjQBFC7cU2X-0wuw/viewform?usp=sf_link',
        },
        {
          title: '業務提携',
          body: '現在も複数の企業様と業務提携をしております。管理会社や建設会社の担当者様で、物件の植栽管理について弊社と仕事をしていただける方を募集しております。',
          btn_title: 'こちら',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLScDo8vWzuqml7AlFkRCSuPCJ3XCvmQ-mYIfKCPhkzYkRRzt0w/viewform?usp=sf_link',
        },
        {
          title: '技術指導',
          body: '20年以上植栽に関わってきたノウハウと、2級造園施工管理技士を持った職人が複数人在籍しております。植栽に関する疑問を解決することができますので、現場がある無しに関わらず対応します。過去には、公立中学校の生徒を職場体験で受け入れた実績があります。',
          btn_title: 'こちら',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSdr7J_DDuCQsjD-qjj9iiCr3lAeJ0_bfUjoLACnu9AMz6cWFg/viewform?usp=sf_link',
        },
        {
          title: 'その他',
          body: '上記に当てはまらない内容はこちらからご連絡ください。',
          btn_title: 'こちら',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSelIDQtimj6YL1Bm8TEHamERbHVZw3kh4n2ykmrl5K9oXJ4Lg/viewform?usp=sf_link',
        },
      ],
      page: [
        {
          title: '問い合わせ',
          url: '/contact',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
</style>