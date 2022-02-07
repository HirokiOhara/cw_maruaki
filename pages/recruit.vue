<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    <div class="content-box">
      <v-row justify="center" align="start" class="hidden-sm-and-down">
        <h3 class="content-box-title vertical-text">
          代表からの挨拶
        </h3>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col class="content-box-body" cols="5">
          私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
          「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
          さらに、次世代に引き継ぐ活動も積極的に行っていきたいと考えています。<br /><br />
          また、おかげさまで、丸明造園は22年目を迎えることができました。
          これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
        </v-col>
        <v-col cols="5">
          <!-- <img
            class="re_img"
            alt="ashido"
            src="@/static/portrait.jpg"
          /> -->
          <br />
          <img
            class="re_img"
            alt="tsuyu chan"
            src="@/static/signature_ceo.svg"
          />
        </v-col>
      </v-row>

      <v-row justify="center" align="start" class="hidden-md-and-up">
        <v-col>
          <h3 class="content-box-title-responsive">
            代表からの挨拶
          </h3>
          <!-- <div class="content-box-title-responsive">
            代表からの挨拶
          </div> -->
          <v-divider /><br />
          <p class="content-box-body-responsive">
            私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
            「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
            さらに、次世代に引き継ぐ活動も積極的に行っていきたいと考えています。<br /><br />
            また、おかげさまで、丸明造園は22年目を迎えることができました。
            これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
          </p>
          <v-row justify="end">
            <v-col cols="7">
              <!-- <img
                class="re_img"
                alt="ashido"
                src="@/static/portrait.jpg"
              /> -->
              <br />
              <img
                class="re_img"
                alt="tsuyu chan"
                src="@/static/signature_ceo.svg"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="content-box">
      <v-row justify="center" align="start" class="hidden-sm-and-down">
        <h3 class="content-box-title vertical-text">募集要項</h3>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col cols="10" class="content-box-body">
          <v-row>
            <v-col cols="3">
              <p>職種</p>
            </v-col>
            <v-col cols="9">
              <p>造園工</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <p>求める人材</p>
            </v-col>
            <v-col cols="9">
              <ul>
                <li>造園に興味がある人</li>
                <li>元気がある人</li>
              </ul>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <p>給与</p>
            </v-col>
            <v-col cols="9">
              <p>
                月給 20万円 〜<br />
                （※個人の経験・能力を考慮した変動あり）
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <p>福利厚生</p>
            </v-col>
            <v-col cols="9">
              <ul>
                <li>社会保険</li>
                <li>社員旅行</li>
              </ul>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <p>働き方制度</p>
            </v-col>
            <v-col cols="9">
              <ul>
                <li>休日</li>
                <li>社長との一対一相談</li>
                <li>自車出勤可</li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row justify="center" align="start" class="hidden-md-and-up">
        <v-col>
          <h3 class="content-box-title-responsive">募集要項</h3>
          <v-divider /><br />
          <div class="content-box-body-responsive">
            <v-row>
              <v-col>
                <div class="content-box-subtitle-responsive">職種</div>
                <p>造園工</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="content-box-subtitle-responsive">求める人材</div>
                <ul>
                  <li>造園に興味がある人</li>
                  <li>元気がある人</li>
                </ul>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="content-box-subtitle-responsive">給与</div>
                <p>
                  月給 20万円 〜<br />
                  （※個人の経験・能力を考慮した変動あり）
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="content-box-subtitle-responsive">福利厚生</div>
                <ul>
                  <li>社会保険</li>
                  <li>社員旅行</li>
                </ul>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="content-box-subtitle-responsive">働き方制度</div>
                <ul>
                  <li>休日</li>
                  <li>社長との一対一相談</li>
                  <li>自車出勤可</li>
                </ul>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="content-box">
      <v-row justify="center" align="center" class="content-box-body hidden-sm-and-down">
        <v-col cols="6">
          <v-btn
            block
            x-large
            outlined
            color="pink"
            data-cursor-hover
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4VSBwYnN0Oxk6gzd_UXOAw1SCho7947aXAB52I4snZl8wnw/viewform?usp=sf_link"
          >
            応募する
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="content-box-body hidden-md-and-up">
        <v-col cols="10">
          <v-btn
            block
            x-large
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
.content-box {
  &-title {
    font-weight: 200;
    font-size: 40px;
    &-responsive {
      font-weight: 300;
      font-size: 20px;
    }
  }
  &-subtitle {
    &-responsive {
      font-weight: 800;
      font-size: 18px;
      color: gray;
    }
  }
  &-body {
    font-weight: 200;
    font-size: 18px;
    &-responsive {
      font-weight: 200;
      font-size: 16px;
    }
  }
}
.re_img {
  width: inherit;
}
</style>