<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    <div class="content-box">
      <v-row v-for="content in contents" :key="content.id">
        <v-col>
          <v-hover v-slot="{ hover }">
            <v-card
              :class="{ 'on-hover': hover }"
              :to="`news/${content.id}`"
              flat
              nuxt
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title v-text="content.title" class="content-box-title" />
                  <v-list-item-subtitle class="content-box-body">
                    {{ new Date(content.publishedAt).toLocaleDateString('ja-JP', options[0]) }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-hover>
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
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'news',
      queries: { limit: 100, filters: 'createdAt[greater_than]2021' },
    });
    return data;
  },
  head: {
    title: `${this.page[0].title}`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '丸明造園から発信している、最新情報の一覧です。'
      }
    ],
  },
  data() {
    return {
      page: [
        {
          title: '最新情報',
          url: '/news',
        },
      ],
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
}
</script>

<style scoped lang="scss">
.v-card.on-hover {
  background-color: rgb(250, 250, 250);
}
.content-box {
  &-title {
    font-weight: 400;
    font-size: 32px;
  }
  &-body {
    font-weight: 300;
    font-size: 16px;
  }
}
</style>