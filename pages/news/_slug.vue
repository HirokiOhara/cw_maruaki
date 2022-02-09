<template>
  <v-container>
<!-- PC用 -->
    <div class="content-box hidden-sm-and-down">
      <h1 class="news-title">{{ title }}</h1>
      <p class="news-date">{{ new Date(publishedAt).toLocaleDateString('ja-JP', options[0]) }}</p>
      <!-- <p class="content-box-category">{{ category && category.name }}</p> -->
    </div>
<!-- スマホ・タブレット用 -->
    <div class="content-box hidden-md-and-up">
      <h1 class="news-title-responsive">{{ title }}</h1>
      <p class="news-date-responsive">{{ new Date(publishedAt).toLocaleDateString('ja-JP', options[0]) }}</p>
    </div>

    <div class="content-box">
      <div class="content-box-body">
        <p v-html="body" />
      </div>
      <!-- <a href="#" onclick="window.history.back(); return false;" class="back-link">一覧に戻る</a> -->
      <br /><br />
      <v-row>
        <v-col justify="center" cols="3" class="contact-btn">
          <v-btn
            block
            large
            outlined
            color="gray"
            class="content-box-body"
            onclick="window.history.back(); return false;"
          >
            {{ "一覧に戻る" }}
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// import axios from 'axios'

export default {
  layout: 'index',
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: 'news',
      contentId: params.slug,
      queries: { fields: 'title,publishedAt,body' },
    })
    return data;
  },
  // async asyncData({ params, $config: { apiKEY } }) {
  //   const { data } = await axios.get(
  //     `https://maruaki.microcms.io/api/v1/news/${params.slug}`,
  //     {
  //       headers: { 'X-API-KEY': apiKEY }
  //     }
  //   )
  //   return data
  // },
  data() {
    return {
      options: [
        {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
        }
      ]
    }
  },
};
</script>

<style scoped lang="scss">
</style>
