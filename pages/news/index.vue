<template>
  <v-container>
    <PageTitle :title="contents[0].title" />
    Hello, "news/index.vue"
    <!-- <v-row>
      <v-col
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        cols="12"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :to="linkTo('information', post)"
            flat
            data-cursor-hover
            :class="{ 'on-hover': hover }"
          >
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title
                  class="title-font"
                  v-text="post.fields.title"
                >
                </v-list-item-title>
                <v-list-item-subtitle>
                  <p class="card-date">
                    {{ post.fields.postedDate }}
                  </p>
                  <span :is="draftChip(post)" />
                  <template v-if="post.metadata.tags.length > 0">
                    <v-spacer />
                  </template>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-hover>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: { PageTitle },
  layout: 'index',
  data() {
    return {
      contents: [
        {
          title: '最 新 情 報',
          url: '/news',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">

</style>