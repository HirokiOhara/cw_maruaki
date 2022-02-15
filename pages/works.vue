<template>
  <v-container>
    <div class="page-title-width">
      <h1 class="page-title-dark hidden-sm-and-down">
          業務内容
      </h1>
      <h1 class="page-title-responsive-dark hidden-md-and-up">
          業務内容
      </h1>
    </div>
<!-- PC用 -->
    <div class="content-box content-box-body hidden-sm-and-down">
      <v-fade-transition>
        <h2>
          植栽
        </h2>
      </v-fade-transition>
      <v-divider class="my-4"></v-divider>
      <v-row justify="center" align="start" class="content-box-body">
        <v-col cols="8">
          <!-- <v-img
            height="500"
            src="/shokusai/01.jpg"
            :lazy-src="`https://picsum.photos/16/9`"
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
          <v-img
            height="700"
            src="/shokusai/02.jpg"
            :lazy-src="`https://picsum.photos/16/9`"
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
            <v-overlay absolute>
              Hide Overlay
            </v-overlay>
          </v-img>
          <!-- <v-img
            height="500"
            src="/shokusai/03.jpg"
            :lazy-src="`https://picsum.photos/16/9`"
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
        </v-col>
        <!-- <v-col cols="5">
          <p>
            残したい木を守ります。
            庭の模様替えや引っ越しなど、木を移植したいケースは多くあります。
            写真では、樹齢100年以上、高さ5mくらいの赤松のケースです。
            根切は、木が養分を得るのに必要十分な量だけを残します。
            麻のシートと紐を用いて、根の呼吸が維持できるようにします。
          </p>
        </v-col> -->
        <v-col cols="12" style="height: 300px;"><div></div></v-col>

        <v-col cols="6">
          <v-img height="500" src="/shokusai/04.jpg"></v-img>
        </v-col>
        <v-col cols="6">
          <v-img height="500" src="/shokusai/05.jpg"></v-img>
        </v-col>
        <v-row justify="center" align="start">
          <v-col cols="5">
            <p>
              生け垣は、街の景観にも影響を与える。
            </p>
          </v-col>
        </v-row>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>

        <v-col cols="6">
          <v-img contain height="500" src="/shokusai/12.jpg"></v-img>
          <v-row justify="center" align="start">
            <v-col cols="9">
              <p>
                高木と呼ばれる5m以上の木の
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-img contain height="500" src="/shokusai/06.jpg"></v-img>
          <v-row justify="center" align="start">
            <v-col cols="9">
              <p>
                薬剤の調合には、「対象の植栽」と「季節」、「天候」の3つの要因を考えなければいけない。
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>

        <v-col cols="6">
          <v-img height="500" src="/shokusai/13.jpg"></v-img>
        </v-col>
        <v-col cols="6">
          <v-img height="500" src="/shokusai/14.jpg"></v-img>
        </v-col>
        <v-col cols="5">
          <p>
            足元が映える緑であれば、空はより蒼く見える。
          </p>
        </v-col>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>
      </v-row>
      <v-row class="content-box-body">
        <p>
        </p>
      </v-row>
    </div>

    <div class="content-box content-box-body hidden-sm-and-down">
      <h2>
        施工
      </h2>
      <v-divider class="my-4"></v-divider>
      <v-row justify="center" align="start" class="content-box-body">
        <v-col cols="5">
          <p>
            私たちが施す防草工事では、通常よりも長く効果があります。
          </p>
        </v-col>
        <v-col cols="5">
          <v-img height="500" src="/seko/02.jpg"></v-img>
          <v-img height="500" src="/seko/03.jpg"></v-img>
          <v-img height="500" src="/seko/04.jpg"></v-img>
        </v-col>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>

        <v-col cols="12">
          <v-row>
            <v-carousel
              :height="700"
              cycle
              interval="3000"
              hide-delimiter-background
              show-arrows-on-hover
              delimiter-icon="mdi-minus"
            >
              <v-carousel-item
                v-for="(photo, i) in seko"
                :key="i"
                :src="photo.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-row>
        </v-col>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>

        <v-col cols="6">
          <v-img height="500" src="/seko/09.jpg"></v-img>
        </v-col>
        <v-col cols="6">
          <v-img height="500" src="/seko/14.jpg"></v-img>
        </v-col>
        <v-col cols="5">
          <p>
            今まで活躍してきた〇〇を、まるまるとして生まれ変わらせます。
          </p>
        </v-col>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>
      </v-row>
    </div>

    <div class="content-box content-box-body hidden-sm-and-down">
      <h2>
        造園
      </h2>
      <v-divider class="my-4"></v-divider>
      <v-row justify="center" align="start" class="content-box-body">
        <v-col cols="10">
          <v-img contain height="500" src="/zouen/01.jpg"></v-img>
          <v-row justify="center" align="start">
            <v-col cols="5">
              <p>
                ワラボッチをご存知でしょうか。
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>

        <v-col cols="3">
          <v-img height="500" src="/zouen/04.jpg"></v-img>
        </v-col>
        <v-col cols="4">
          <p>
            私たちの作品ではなく、あなたの作品になるように心がけています。
          </p>
        </v-col>
        <v-col cols="3">
          <v-img height="500" src="/zouen/06.jpg"></v-img>
        </v-col>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>

        <v-col cols="12">
          <v-img contain height="700" src="/zouen/07.jpg"></v-img>
        </v-col>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>

        <v-col cols="4">
          <v-img contain src="/zouen/08.jpg"></v-img>
        </v-col>
        <v-col cols="4">
          <v-img contain src="/zouen/09.jpg"></v-img>
        </v-col>
        <v-col cols="4">
          <v-img contain src="/zouen/10.jpg"></v-img>
        </v-col>
        <v-col cols="5">
          <p>
            私たち庭師には、寒さから木を守りつつ、魅せる技術があります。
          </p>
        </v-col>
        <v-col cols="12" style="height: 300px;"><div></div></v-col>
      </v-row>
    </div>

<!-- スマホ・タブレット用 -->
    <div class="content-box hidden-md-and-up">
      <v-row justify="center" align="start">
        <v-col class="content-box-body">
          <h2>
            植栽
          </h2>
          <v-divider class="my-4"></v-divider>
          <v-row justify="center" align="start" class="content-box-body">
            <v-col>
              <v-img
                src="/shokusai/02.jpg"
                :lazy-src="`https://picsum.photos/16/9`"
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
              </v-img>
              <p>
                私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
                「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
                さらに、次世代に引き継ぐ活動も積極的におこなってゆきます。<br /><br />
                また、おかげさまで、丸明造園は22年目を迎えることができました。
                これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
              </p>
            </v-col>
          </v-row>
          <v-carousel
            delimiter-icon="mdi-minus"
            hide-delimiter-background
          >
            <v-carousel-item
              v-for="(photo, i) in shokusai"
              :key="i"
              :src="photo.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-row>
            <v-col>
              <v-img contain height="500" src="/shokusai/12.jpg"></v-img>
                <p>
                  「白井くん伐採」
                  私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
                  「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
                  さらに、次世代に引き継ぐ活動も積極的におこなってゆきます。<br /><br />
                  また、おかげさまで、丸明造園は22年目を迎えることができました。
                  これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
                </p>
                <v-img contain height="500" src="/shokusai/06.jpg"></v-img>
                <p>
                  「高木」
                  私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
                  「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
                  さらに、次世代に引き継ぐ活動も積極的におこなってゆきます。<br /><br />
                  また、おかげさまで、丸明造園は22年目を迎えることができました。
                  これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
                </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-carousel
                delimiter-icon="mdi-minus"
                hide-delimiter-background
              >
                <v-carousel-item
                  v-for="(photo, i) in ground"
                  :key="i"
                  :src="photo.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                ></v-carousel-item>
              </v-carousel>
              <p>
                「グラウンドきれい」
                私たちは、「庭」がお客様の生活の中に溶け込む空間創りを目指しています。
                「早く、きれいに、丁寧に」という経営理念のもと、先代から受け継いだ技術を余すことなく発揮します。
                さらに、次世代に引き継ぐ活動も積極的におこなってゆきます。<br /><br />
                また、おかげさまで、丸明造園は22年目を迎えることができました。
                これからも、「丸明造園にお願いしてよかった」と、お客様に言っていただけるよう、社員一同全力で取り組んで参ります。<br />
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="content-box hidden-md-and-up">
      <v-row justify="center" align="start">
        <v-col class="content-box-body">
          <h2>
            施工
          </h2>
          <v-divider class="my-4"></v-divider>
          <v-row justify="center" align="start" class="content-box-body">
            <v-col>
              <v-img  src="/seko/14.jpg"></v-img>
            </v-col>
          </v-row>
          <v-carousel
            hide-delimiter-background
            delimiter-icon="mdi-minus"
          >
            <v-carousel-item
              v-for="(photo, i) in entrance"
              :key="i"
              :src="photo.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-carousel
            hide-delimiter-background
            delimiter-icon="mdi-minus"
          >
            <v-carousel-item
              v-for="(photo, i) in seko"
              :key="i"
              :src="photo.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <v-row justify="center" align="start" class="content-box-body">
            <v-img src="/seko/14.jpg"></v-img>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="content-box hidden-md-and-up">
      <v-row justify="center" align="start">
        <v-col class="content-box-body">
          <h2>
            造園
          </h2>
          <v-divider class="my-4"></v-divider>
          <v-row justify="center" align="start" class="content-box-body">
            <v-col>
              <v-img src="/zouen/01.jpg"></v-img>
            </v-col>
          </v-row>
          <v-row justify="center" align="start" class="content-box-body">
            <v-col>
              <v-img src="/zouen/07.jpg"></v-img>
            </v-col>
          </v-row>
          <v-carousel
            hide-delimiter-background
            delimiter-icon="mdi-minus"
          >
            <v-carousel-item
              v-for="(photo, i) in trachycarpus"
              :key="i"
              :src="photo.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </div>


  </v-container>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: { PageTitle },
  layout: 'dark',
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '私たち丸明造園は、「庭師を源流とする造園技能を引き継ぐ」少数精鋭集団です。'
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
      shokusai: [
        {
          src: 'shokusai/04.jpg'
        },
        {
          src: 'shokusai/05.jpg'
        }
      ],
      ground: [
        {
          src: 'shokusai/13.jpg'
        },
        {
          src: 'shokusai/14.jpg'
        }
      ],
      entrance: [
        {
          src: 'seko/02.jpg'
        },
        {
          src: 'seko/03.jpg'
        },
        {
          src: 'seko/04.jpg'
        },
      ],
      seko: [
        {
          src: 'seko/05.jpg',
        },
        {
          src: 'seko/06.jpg',
        },
        {
          src: 'seko/07.jpg',
        },
        {
          src: 'seko/08.jpg',
        },
      ],
      trachycarpus: [
        {
          src: 'zouen/08.jpg',
        },
        {
          src: 'zouen/09.jpg',
        },
        {
          src: 'zouen/10.jpg',
        },
      ],
    }
  },
}
</script>



<style scoped lang="scss">
h2 {
  color: white !important;
  font-weight: 800 !important;
  font-size: 32px !important;
  letter-spacing: 8px;
}
p {
  color: white !important;
}
.theme--light.v-divider {
  border-color :rgba(255, 255, 255, 0.12);
}
</style>