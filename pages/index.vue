<template>
  <v-container>
    <div class="home hidden-sm-and-down">
      <div class="home-left">
        <img
          class="home-logo"
          alt="有限会社 丸明造園"
          src="@/static/logo_moji.png"
        />
      </div>
      <div class="home-right">
        <v-row v-for="item in items" :key="item.title">
          <v-col>
            <nuxt-link class="home-link" :to="item.slug">
              {{ item.title }}
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="home-responsive hidden-md-and-up">
      <v-row v-for="item in items" :key="item.title">
        <v-col>
          <nuxt-link class="home-link" :to="item.slug">
            {{ item.title }}
          </nuxt-link>
        </v-col>
      </v-row>
      <div>
        <img
          class="home-matsu"
          src="@/static/matsu.png"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
  // head: {
  //   meta: [
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: '私たち 丸明造園 は、「庭師を源流とする造園技能を引き継ぐ」少数精鋭集団です。埼玉県の入間市・所沢市を中心に、庭木の手入れ（植木・ガーデニング）からマンションの植栽管理まで、幅広く対応しております。お気軽にご相談ください。'
  //     }
  //   ],
  // },
  data() {
    return {
      items: [
        {
          title: '最新情報',
          slug: '/news',
        },
        // {
        //   title: '業務内容',
        //   slug: '/works',
        // },
        {
          title: '問い合わせ',
          slug: '/contact',
        },
        {
          title: '会社概要',
          slug: '/profile',
        },
        {
          title: '採用情報',
          slug: '/recruit',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
