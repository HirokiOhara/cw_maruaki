<template>
  <div class="page-title-width">
    <h1 class="page-title hidden-sm-and-down">
        {{ title }}
    </h1>
    <h1 class="page-title-responsive hidden-md-and-up">
        {{ title }}
    </h1>
  </div>
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
