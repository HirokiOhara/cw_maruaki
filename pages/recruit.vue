<template>
  <v-container>
    <PageTitle :title="contents[0].title" />
    <div class="content-box">
      <v-row justify="center" align="start">
        <div class="content-box-title vertical-text">
          社長からのメッセージ
        </div>
        <v-divider class="mx-4" vertical></v-divider>
        <v-col class="content-box-body" cols="5">
          ゴーシュは町の活動写真館でセロを弾く係りでした。けれどもあんまり上手でないという評判でした。上手でないどころではなく実は仲間の楽手のなかではいちばん下手でしたから、いつでも楽長にいじめられるのでした。ひるすぎみんなは楽屋に円くならんで今度の町の音楽会へ出す第六交響曲こうきょうきょくの練習をしていました。トランペットは一生けん命歌っています。ヴァイオリンも二いろ風のように鳴っています。クラリネットもボーボーとそれに手伝っています。<br />
          ゴーシュも口をりんと結んで眼めを皿さらのようにして楽譜がくふを見つめながらもう一心に弾いています。<br />
          にわかにぱたっと楽長が両手を鳴らしました。みんなぴたりと曲をやめてしんとしました。楽長がどなりました。<br />
          「セロがおくれた。トォテテテテテイ、ここからやり直し。はいっ。」<br />
          みんなは今の所の少し前の所からやり直しました。ゴーシュは顔をまっ赤にして額に汗あせを出しながらやっといま云いわれたところを通りました。ほっと安心しながら、つづけて弾いていますと楽長がまた手をぱっと拍うちました。<br />
        </v-col>
        <v-col cols="5">
          <img
            class="logo"
            alt="ashido"
            src="@/static/portrait.jpg"
          />
          <br />
          <img
            class="logo"
            alt="tsuyu chan"
            src="@/static/signature.jpg"
          />
        </v-col>
      </v-row>
    </div>
    <div class="content-box">
      <v-row justify="center" align="start">
        <div class="content-box-title vertical-text">募集要項</div>
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
                <li>xxやyyを扱える</li>
                <li>zzやwwについて知識がある</li>
                <li>造園で頑張ってみたいという意志がある</li>
              </ul>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <p>給与</p>
            </v-col>
            <v-col cols="9">
              <p>
                月給 20万円〜<br />
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
                <li>自社出勤可</li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div class="content-box">
      <v-row justify="center" align="center" class="row-pitch button-font">
        <v-col cols="6">
          <v-btn
            block
            x-large
            outlined
            color="pink"
            data-cursor-hover
            href="https://docs.google.com/forms/d/e/1FAIpQLSchzM73zzALKRo6w6AEGzkPVeJ_-LxWPAHYkQl4yptBAHTifg/viewform?usp=sf_link"
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
  data() {
    return {
      contents: [
        {
          title: '採 用 情 報',
          url: '/recruit',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.vertical-text {
  writing-mode: vertical-rl;
}
.content-box {
  margin: 100px 0;
  &-title {
    font-family: 'Noto Serif JP', serif;
    font-weight: 200;
    font-size: 40px;
  }
  &-body {
    font-family: 'Noto Serif JP', serif;
    font-weight: 200;
    font-size: 18px;
  }
}
</style>