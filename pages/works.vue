<template>
  <v-container>
    <PageTitle :title="page[0].title" />
<!-- PC用 -->
    <div class="content-box hidden-sm-and-down">
      <v-row justify="center" align="start" class="content-box-body">
        <h2 class="vertical-text">
          植栽
        </h2>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col cols="10">
          <v-row>
            <v-carousel
              v-model="model"
              :height="500"
              :show-arrows="false"
              :cycle="true"
              :interval="5000"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
            >
              <v-carousel-item
                v-for="(color, i) in colors"
                :key="color"
              >
                <v-sheet
                  :color="color"
                  height="100%"
                  tile
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="text-h2">
                      Slide {{ i + 1 }}
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-row>
          <v-row class="content-box-body">
            <p>
              私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
              「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
              さらに、次世代に引き継ぐ活動も積極的におこなってゆきます。<br /><br />
              また、おかげさまで、丸明造園は22年目を迎えることができました。
              これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
            </p>
          </v-row>
        </v-col>
      </v-row>
    </div>

<!-- PC用 -->
    <div class="content-box hidden-sm-and-down">
      <v-row justify="center" align="start" class="content-box-body">
        <h2 class="vertical-text">
          施工
        </h2>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col cols="10">
          <v-row>
            <v-carousel
              v-model="model"
              :height="500"
              :show-arrows="false"
              :cycle="true"
              :interval="5000"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
            >
              <v-carousel-item
                v-for="(color, i) in colors"
                :key="color"
              >
                <v-sheet
                  :color="color"
                  height="100%"
                  tile
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="text-h2">
                      Slide {{ i + 1 }}
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-row>
          <v-row class="content-box-body">
            <p>
              私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
              「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
              さらに、次世代に引き継ぐ活動も積極的におこなってゆきます。<br /><br />
              また、おかげさまで、丸明造園は22年目を迎えることができました。
              これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
            </p>
          </v-row>
        </v-col>
      </v-row>
    </div>

<!-- PC用 -->
    <div class="content-box hidden-sm-and-down">
      <v-row justify="center" align="start" class="content-box-body">
        <h2 class="vertical-text">
          造園
        </h2>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col cols="10">
          <v-row>
            <v-carousel
              v-model="model"
              :height="500"
              :show-arrows="false"
              :cycle="true"
              :interval="5000"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
            >
              <v-carousel-item
                v-for="(color, i) in colors"
                :key="color"
              >
                <v-sheet
                  :color="color"
                  height="100%"
                  tile
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="text-h2">
                      Slide {{ i + 1 }}
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-row>
          <v-row class="content-box-body">
            <p>
              私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
              「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
              さらに、次世代に引き継ぐ活動も積極的におこなってゆきます。<br /><br />
              また、おかげさまで、丸明造園は22年目を迎えることができました。
              これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
            </p>
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
        content: '私たち 丸明造園 は、「庭師を源流とする造園技能を引き継ぐ」少数精鋭集団です。'
      }
    ],
  },
  data() {
    return {
      page: [
        {
          title: '業務内容',
          url: '/works',
        },
      ],
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }
  },
}
</script>

<style scoped lang="scss">
// header {
//   background-color: rgba(0, 0, 0, 0.9) !important;
// }
</style>