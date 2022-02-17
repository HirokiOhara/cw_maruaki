<template>
  <v-carousel
    height="700"
    cycle
    interval="3000"
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item
      v-for="(img, i) in items"
      :key="i"
      :src="img.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '@/static/seko/05.jpg',
          },
          {
            src: '@/static/seko/06.jpg',
          },
          {
            src: '@/static/seko/07.jpg',
          },
          {
            src: '@/static/seko/08.jpg',
          },
        ]
      }
    }
  }
</script>