<template>
  <div class="related-item">
    <div class="cover">
      <el-image></el-image>
    </div>
    <div class="stuff">
      <div class="title"></div>
      <div class="publish-duration"></div>
      <div class="tag"></div>
    </div>
    <div class="rate"></div>
  </div>
</template>

<script>
  export default {
    name: 'Relatem',
    props: {
      item: {
        type: Object,
        default: () => {
          return {
            id: 0,
            title: '',
            summary: '',
            category: '',
            tag: '',
            publish: '',
            duration: '',
            rating: '',
            director: '',
            starring: '',
            cover: '',
            poster: ''
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
