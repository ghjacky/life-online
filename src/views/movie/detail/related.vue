<template>
  <div id="related">
    <div class="related-title">Related Titles</div>
    <el-divider></el-divider>
    <div class="related-items"></div>
  </div>
</template>

<script>
  import { defaultMovieDataMixins } from '@/views/movie/mixins/common'

  export default {
    name: 'Related',
    mixins: [defaultMovieDataMixins]
  }
</script>

<style scoped lang="scss">
  @import "~@/style/movie/detail/related.scss";
</style>
