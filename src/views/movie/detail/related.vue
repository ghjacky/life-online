<template>
  <div id="related">
    <div class="related-title">Related Titles</div>
    <el-divider></el-divider>
    <div class="related-items">
      <relatem v-for="(item,index) in relatedItems" :key="index" :item="item"></relatem>
    </div>
  </div>
</template>

<script>
  import { defaultMovieDataMixins } from '@/views/movie/mixins/common'
  import Relatem from '@/views/movie/detail/relatem'

  export default {
    name: 'Related',
    components: { Relatem },
    mixins: [defaultMovieDataMixins],
    data() {
      return {
        relatedItems: [
          defaultMovieDataMixins
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/movie/detail/related.scss";
</style>
