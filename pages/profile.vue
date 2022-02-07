<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    <div class="content-box">
      <v-col cols="12">
        <v-row class="hidden-sm-and-down">
          <v-col cols="3" sm="3" class="content-box-title">
            <p>社名</p>
          </v-col>
          <v-col cols="9" class="content-box-body">
            <p>
              有限会社 丸明造園<br />
              Maruaki Zouen, Ltd.
            </p>
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col>
            <div class="content-box-title">社名</div>
            <p class="content-box-body">
              有限会社 丸明造園<br />
              Maruaki Zouen, Ltd.
            </p>
          </v-col>
        </v-row>

        <v-row class="hidden-sm-and-down">
          <v-col cols="3" class="content-box-title">
            <p>創立</p>
          </v-col>
          <v-col cols="9" class="content-box-body">
            <p>
              2000年 1月
            </p>
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col>
            <div class="content-box-title">創立</div>
            <p class="content-box-body">
              2000年 １月
            </p>
          </v-col>
        </v-row>

        <v-row class="hidden-sm-and-down">
          <v-col cols="3" class="content-box-title">
            <p>代表取締役社長</p>
          </v-col>
          <v-col cols="9" class="content-box-body">
            <p>
              大原 隆広
            </p>
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col>
            <div class="content-box-title">代表取締役社長</div>
            <p class="content-box-body">
              大原 隆広
            </p>
          </v-col>
        </v-row>

        <v-row class="hidden-sm-and-down">
          <v-col cols="3" class="content-box-title">
            <p>事業内容</p>
          </v-col>
          <v-col cols="9" class="content-box-body">
            <p>
              造園工事（植栽工事、広場工事、等）
            </p>
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col>
            <div class="content-box-title">事業内容</div>
            <p class="content-box-body">
              造園工事（植栽工事、広場工事、等）
            </p>
          </v-col>
        </v-row>

        <v-row class="hidden-sm-and-down">
          <v-col cols="3" class="content-box-title">
            <p>建設業 許可番号</p>
          </v-col>
          <v-col cols="9" class="content-box-body">
            <p>
              埼玉県知事  許可（般-2）  第55971号
            </p>
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col>
            <div class="content-box-title">建設業 許可番号</div>
            <p class="content-box-body">
              埼玉県知事  許可（般-2）  第55971号
            </p>
          </v-col>
        </v-row>

        <v-row class="hidden-sm-and-down">
          <v-col cols="3" class="content-box-title">
            <p>
              所在地
            </p>
          </v-col>
          <v-col cols="9" class="content-box-body">
            <p>
              埼玉県入間市下藤沢1127-8-102
            </p>
            <!-- ここに地図が入る -->
            <div id="map"></div>
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col>
            <div class="content-box-title">所在地</div>
            <p class="content-box-body">
              埼玉県入間市下藤沢1127-8-102
            </p>
            <div id="map2"></div>
          </v-col>
        </v-row>

      </v-col>
    </div>
  </v-container>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"
import PageTitle from '~/components/PageTitle.vue'

const maruaki = { lat: 35.82702784786439, lng: 139.40886641992367 };

export default {
  components: { PageTitle },
  layout: 'index',
  async asyncData({ $config }) {
    const gmaps_api = $config.GMapsApiKey;
    return { gmaps_api }
  },
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
          title: '会社概要',
          url: '/profile',
        },
      ],
    }
  },
  mounted() {
    const loader = new Loader({
      apiKey: this.gmaps_api,
      version: "weekly",
    });
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: maruaki,
        zoom: 15,
        mapId: '9345259bedd739a6',
      });
      // const marker = new google.maps.Marker({
      //   position: maruaki,
      //   map: map,
      //   title: "Hello World!",
      // });
      const map2 = new google.maps.Map(document.getElementById("map2"), {
        center: maruaki,
        zoom: 15,
        mapId: '9345259bedd739a6',
      });
      // const contentString =
      //   '<div id="content">' +
      //   '<div id="siteNotice">' +
      //   "</div>" +
      //   '<h1 id="firstHeading" class="firstHeading">有限会社 丸明造園</h1>' +
      //   '<div id="bodyContent">' +
      //   "<p>埼玉県入間市下藤沢1127-8-102</p>" +
      //   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      //   "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
      //   "(last visited June 22, 2009).</p>" +
      //   "</div>" +
      //   "</div>";
      // const infowindow = new google.maps.InfoWindow({
      //   content: contentString,
      // });
      // marker.addListener("click", () => {
      //   infowindow.open({
      //     anchor: marker,
      //     map,
      //     shouldFocus: false,
      //   });
      // });
    });
  },
  // methods: {
  //   initMap() {
  //     new google.maps.Map(document.getElementById("map"), {
  //       center: maruaki,
  //       zoom: 15,
  //       mapId: '9345259bedd739a6',
  //     });
  //     new google.maps.Marker({
  //       position: maruaki,
  //       map: map,
  //       title: "Hello World!",
  //     });
  //   }
  // },
}
</script>

<style scoped lang="scss">
#map {
  // height: 100%;
  height: 500px;
}
#map2 {
  // height: 100%;
  height: 500px;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.content-box {
  &-title {
    font-weight: 800;
    font-size: 18px;
    color: gray;
  }
  &-body {
    font-weight: 200;
    font-size: 18px;
  }
}
</style>