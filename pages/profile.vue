<template>
  <v-container>
    <PageTitle :title="page[0].title" />
    <div class="content-box">
      <v-col cols="12">
        <v-row>
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
        <v-row>
          <v-col cols="3" class="content-box-title">
            <p>創立</p>
          </v-col>
          <v-col cols="9" class="content-box-body">
            <p>
              2000年 1月
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="content-box-title">
            <p>代表取締役社長</p>
          </v-col>
          <v-col cols="9" class="content-box-body">
            <p>
              大原 隆広
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="content-box-title">
            <p>事業内容</p>
          </v-col>
          <v-col cols="9" class="content-box-body">
            <p>
              造園工事（植栽工事、広場工事、等）
            </p>
          </v-col>
        </v-row>
        <v-row>
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
            <img
              class="map"
              alt="ashido"
              src="@/static/ishida.jpg"
            />
          </v-col>
        </v-row>
      </v-col>
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
      page: [
        {
          title: '会 社 概 要',
          url: '/profile',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.content-box {
  &-title {
    font-weight: 500;
    font-size: 18px;
  }
  &-body {
    font-weight: 200;
    font-size: 18px;
  }
}
</style>