<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    <div class="content-box content-box-body">
      お問い合わせいただき、誠にありがとうございます。<br /><br />
      内容を確認した後に、当社より返信いたします。<br /><br />
      また、以前依頼していただいた方は、電話やメールで担当に連絡していただいても問題ありません。
    </div>
    <div class="content-box" v-for="item in items" :key="item.title">
      <v-row justify="center" align="start">
        <div class="content-box-title vertical-text">
          {{ item.title }}
        </div>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col class="content-box-body" cols="8">
          {{ item.body }}
        </v-col>
        <v-col cols="2" class="contact-btn">
          <v-btn
            block
            x-large
            outlined
            color="pink"
            class="content-box-body"
            :href="item.btn_href"
          >
            {{ item.btn_title }}
          </v-btn>
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
          body: '弊社は、個人のお客様やマンションやアパートメントの管理者様、企業の担当者様からのご依頼を承っています。「庭木の手入れ」はもちろん、「不要樹の伐採撤去」や「除草薬剤の散布」などを、お客様のご要望に合わせて提供いたします。また、造園工は草木の手入れをするだけではありません。その景観に合わせた、エクステリアや外構工事なども実施いたしますので、こちらの依頼も承っております。詳しくは、右下のリンクボタンからご確認ください。',
          btn_title: '依頼・相談',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSchzM73zzALKRo6w6AEGzkPVeJ_-LxWPAHYkQl4yptBAHTifg/viewform?usp=sf_link',
        },
        {
          title: '商品の購入',
          body: '通年で、枝・葉の混合チップ材を取り扱っています。季節限定では、カブトムシの幼虫の販売を行っております。定期的に商品の入替を行いますので、リンクからご確認ください。',
          btn_title: '購入',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSchzM73zzALKRo6w6AEGzkPVeJ_-LxWPAHYkQl4yptBAHTifg/viewform?usp=sf_link',
        },
        {
          title: '業務提携の相談',
          body: '現在も複数の企業様と業務提携をしております。管理会社や建設会社の担当者様で、物件の植栽管理について弊社と仕事をしていただける方を募集しております。',
          btn_title: 'こちらから',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSchzM73zzALKRo6w6AEGzkPVeJ_-LxWPAHYkQl4yptBAHTifg/viewform?usp=sf_link',
        },
        {
          title: '技術指導の相談',
          body: '20年以上植栽に関わってきたノウハウと、2級造園施工管理技士を持った職人が複数人在籍しております。植栽に関する疑問を解決することができますので、現場がある無しに関わらず対応します。過去には、公立中学校の生徒を職場体験で受け入れた実績があります。',
          btn_title: 'こちらから',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSchzM73zzALKRo6w6AEGzkPVeJ_-LxWPAHYkQl4yptBAHTifg/viewform?usp=sf_link',
        },
        {
          title: 'その他',
          body: '上記に当てはまらない内容はこちらからご連絡ください。',
          btn_title: 'こちらから',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSchzM73zzALKRo6w6AEGzkPVeJ_-LxWPAHYkQl4yptBAHTifg/viewform?usp=sf_link',
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
.content-box {
  &-title {
    font-weight: 300;
    font-size: 30px;
  }
  &-body {
    font-weight: 300;
    font-size: 20px;
  }
}
.contact-btn {
  margin-top: auto;
}
</style>