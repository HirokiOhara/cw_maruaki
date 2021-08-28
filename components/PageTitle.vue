<template>
  <h2 class="page-title">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'エラーです',
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  width: 1000px;
}
.page-title {
  font-family: 'Noto Serif JP', serif;
  font-weight: 400;
  font-size: 64px;
  color: rgb(64,64,64);
}
</style>