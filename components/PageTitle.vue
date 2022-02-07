<template>
  <h2>
    <div class="page-title hidden-sm-and-down">
      {{ title }}
    </div>
    <div class="page-title-responsive hidden-md-and-up">
      {{ title }}
    </div>
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
.page-title {
  font-family: 'Noto Serif JP', serif;
  font-weight: 400;
  font-size: 64px;
  color: rgb(64,64,64);
  letter-spacing: 16px;
  &-responsive {
    font-family: 'Noto Serif JP', serif;
    font-weight: 400;
    font-size: 32px;
    color: rgb(64,64,64);
    letter-spacing: 8px;
  }
}
</style>