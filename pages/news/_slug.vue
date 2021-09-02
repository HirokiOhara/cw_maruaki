<template>
  <v-container>
    <main class="content-box">
      <h1 class="content-box-title">{{ title }}</h1>
      <p class="content-box-date">{{ new Date(publishedAt).toLocaleDateString('ja-JP', options[0]) }}</p>
      <p class="content-box-category">{{ category && category.name }}</p>
      <div class="content-box-body" v-html="body"></div>
      <a href="#" onclick="window.history.back(); return false;" class="back-link">一覧に戻る</a>
    </main>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'index',
  async asyncData({ params, $config: { apiKEY } }) {
    const { data } = await axios.get(
      `https://maruaki.microcms.io/api/v1/news/${params.slug}`,
      {
        headers: { 'X-API-KEY': apiKEY }
      }
    )
    return data
  },
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
.content-box {
  &-title {
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 20px;
  }
  // "<style lang="scss" scoped>"にすると、レンダリング後のコードで[data-v-489ba8f2]見たいのがついてきて、下のネストが適用されない
  &-body {
    margin: 100px 0;
    font-family: "Noto Serif JP", serif;
  }
  &-date {
    font-family: "Noto Serif JP", serif;
    font-size: 16px;
    color: rgba(0,0,0, 0.6);
    font-weight: 400;
  }
  &-category {
    font-family: "Noto Serif JP", serif;
    margin-bottom: 40px;
  }
}
.back-link {
  font-family: "Noto Serif JP", serif;
  font-weight: 600;
  transition: 0.28s;
  color: rgba(1, 1, 1, 0.68);
  text-decoration: none;
  &:hover {
    color: rgba(1, 1, 1, 1);
  }
}
</style>
