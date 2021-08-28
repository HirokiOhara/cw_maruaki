<template>
  <v-container>
    <div class="box">
      <div class="box-left">
        <img
          class="logo"
          alt="輝きヒーロー《Can't stop twinkling. （キラキラが止められないよ☆）》"
          src="@/static/maruaki_logo.jpg"
        />
      </div>
      <div class="box-right">
        <v-row v-for="item in items" :key="item.title">
          <v-col>
            <nuxt-link class="link" :to="item.slug">
              {{ item.title }}
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      items: [
        {
          title: '最新情報',
          slug: '/news',
        },
        {
          title: '業務内容',
          slug: '/works',
        },
        {
          title: '問い合わせ',
          slug: '/contact',
        },
        {
          title: '会社概要',
          slug: '/profile',
        },
        {
          title: '採用情報',
          slug: '/recruit',
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap');

.test {
  position: relative;
}
.logo {
  position: absolute;
  width: 500px;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
}
.box {
  position: relative;
  height: 100vh;
  min-height: 700px;
  &-left {
    width: 500px;
    height: 500px;
  }
  &-right {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    width: auto;
    height: auto;
    line-height: 1.5;
    padding: 20px;
    font-size: 30px;
  }
}
.footer-box {
  height: 500px;
  background-color: rgba(0,0,0,0.3);
  .v-text {
    font-size: 50px;
  }
}
.link {
  font-family: 'Noto Serif JP', serif;
  font-weight: 600;
  transition: .28s;
  color: rgba(1,1,1,0.68);
  text-decoration: none;
  &:hover {
    color: rgba(1,1,1,1);
  }
}
</style>