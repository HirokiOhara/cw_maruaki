<template>
  <v-container>
    <PageTitle :title="page[0].title" />
<!-- PC用 -->
    <div class="content-box hidden-sm-and-down">
      <v-row justify="center" align="start" class="content-box-body">
        <h2 class="vertical-text">
          代表からの挨拶
        </h2>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col class="content-box-body" cols="5">
          <p>
            私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
            「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
            さらに、次世代に引き継ぐ活動も積極的におこなってゆきます。<br /><br />
            また、おかげさまで、丸明造園は22年目を迎えることができました。
            これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
          </p>
        </v-col>
        <v-col cols="5">
          <img
            class="re_img"
            alt="Takahiro Ohara"
            src="@/static/portrait.jpg"
          />
          <br />
          <img
            class="re_img"
            alt="Signature"
            src="@/static/signature_ceo.svg"
          />
        </v-col>
      </v-row>
    </div>

    <div class="content-box hidden-sm-and-down">
      <v-row justify="center" align="start" class="content-box-body">
        <h2 class="vertical-text">募集要項</h2>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col cols="10">
          <v-row>
            <v-col cols="3" class="content-box-body">
              <h3>職種</h3>
            </v-col>
            <v-col cols="9" class="content-box-body">
              <p>造園工</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3" class="content-box-body">
              <h3>求める人材</h3>
            </v-col>
            <v-col cols="9" class="content-box-body">
              <ul>
                <li>造園に興味があること</li>
                <li>健康であること</li>
              </ul>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3" class="content-box-body">
              <h3>給与</h3>
            </v-col>
            <v-col cols="9" class="content-box-body">
              <p>
                月給 20万円 〜<br />
                （※個人の経験・能力を考慮した変動あり）
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3" class="content-box-body">
              <h3>福利厚生</h3>
            </v-col>
            <v-col cols="9" class="content-box-body">
              <ul>
                <li>社会保険</li>
                <li>社員旅行</li>
              </ul>
            </v-col>
          </v-row>
          <!-- <v-row>
            <v-col cols="3" class="content-box-body">
              <h3>働き方制度</h3>
            </v-col>
            <v-col cols="9" class="content-box-body">
              <ul>
                <li>休日</li>
                <li>社長との一対一相談</li>
                <li>自車出勤可</li>
              </ul>
            </v-col>
          </v-row> -->
        </v-col>
      </v-row>
    </div>


<!-- スマホ・タブレット用 -->
    <div class="content-box hidden-md-and-up">
      <v-row justify="center" align="start">
        <v-col class="content-box-body">
          <h2>
            代表からの挨拶
          </h2>
          <p>
            私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
            「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
            さらに、次世代に引き継ぐ活動も積極的に行っていきたいと考えています。<br /><br />
            また、おかげさまで、丸明造園は22年目を迎えることができました。
            これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
          </p>
          <v-row justify="end">
            <v-col cols="7">
              <!-- <v-img
                class="re_img"
                alt="Takahiro Ohara"
                src="@/static/portrait.jpg"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img> -->
              <br />
              <img
                class="re_img"
                alt="Signature"
                src="@/static/signature_ceo.svg"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="content-box hidden-md-and-up">
      <v-row justify="center" align="start">
        <v-col class="content-box-body">
          <h2>募集要項</h2>
          <v-row>
            <v-col class="content-box-body">
              <h3>職種</h3>
              <p>造園工</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="content-box-body">
              <h3>求める人材</h3>
              <ul>
                <li>造園に興味があること</li>
                <li>健康であること</li>
              </ul>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="content-box-body">
              <h3>給与</h3>
              <p>
                月給 20万円 〜<br />
                （※個人の経験・能力を考慮した変動あり）
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="content-box-body">
              <h3>福利厚生</h3>
              <ul>
                <li>社会保険</li>
                <li>社員旅行</li>
              </ul>
            </v-col>
          </v-row>
          <!-- <v-row>
            <v-col class="content-box-body">
              <h3>働き方制度</h3>
              <ul>
                <li>休日</li>
                <li>社長との一対一相談</li>
                <li>自車出勤可</li>
              </ul>
            </v-col>
          </v-row> -->
        </v-col>
      </v-row>
    </div>


    <div class="content-box">
      <v-row justify="center" align="center" class="content-box-body">
        <v-col cols="6">
          <v-btn
            block
            large
            outlined
            color="pink"
            data-cursor-hover
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4VSBwYnN0Oxk6gzd_UXOAw1SCho7947aXAB52I4snZl8wnw/viewform?usp=sf_link"
          >
            応募する
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
        content: '私たち 丸明造園 は、一緒に働いてくれる方を募集しています。通年で採用活動を行っていますので、サイトからご応募ください。'
      }
    ],
  },
  data() {
    return {
      page: [
        {
          title: '採用情報',
          url: '/recruit',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.re_img {
  width: inherit;
}
</style>