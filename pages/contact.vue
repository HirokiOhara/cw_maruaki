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
  data() {
    return {
      items: [
        {
          title: '仕事の依頼・相談',
          body: '風・降雪等による被害樹への迅速な対応。個人宅は専門担当者を定め、お客様の声を重視し、数年先を考慮してアドバイスを行いながら作業を行います。マンションでは、居住者の皆様が快適に生活が出来る様、年に１・２回程度の改善箇所のご提案、理事会に参加させて頂き、直接ご説明しております。',
          btn_title: '依頼・相談',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSchzM73zzALKRo6w6AEGzkPVeJ_-LxWPAHYkQl4yptBAHTifg/viewform?usp=sf_link',
        },
        {
          title: '商品の購入',
          body: '枝・葉のチップ材や、肥料から、季節限定ではカブトムシの幼虫の販売を行っております。',
          btn_title: '購入',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSchzM73zzALKRo6w6AEGzkPVeJ_-LxWPAHYkQl4yptBAHTifg/viewform?usp=sf_link',
        },
        {
          title: '業務提携の相談',
          body: '植栽の部分で仕事を配分したいなど。',
          btn_title: 'こちらから',
          btn_href: 'https://docs.google.com/forms/d/e/1FAIpQLSchzM73zzALKRo6w6AEGzkPVeJ_-LxWPAHYkQl4yptBAHTifg/viewform?usp=sf_link',
        },
        {
          title: '技術指導の相談',
          body: '20年以上植栽に関わってきたノウハウと2級OOを持った職人が複数人在籍しております。植栽に関する疑問を解決することができますので、現場があるなしに関わらず対応します。過去には、公立中学校の生徒を職場体験で受け入れた実績があります。',
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
          title: '問 い 合 わ せ',
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
    font-size: 18px;
  }
}
.contact-btn {
  margin-top: auto;
}
</style>