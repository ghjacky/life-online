<template>
  <div id="single-category">
    <div class="title">{{ category.name }}</div>
    <div v-for="(movie,index) in category.movies.slice(0, 6)" :key="index" class="movie-item-container">
      <img :src="movie.cover" />
      <div class="title">{{ movie.title }}</div>
      <div class="stuff">
        <div class="square-01">
          <div class="publish">{{ movie.publish }}</div>
          <div class="tag">{{ movie.tag }}</div>
        </div>
        <div class="square-02">
          <el-button size="mini" class="rating">{{ movie.rating }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defaultMovieDataMixins } from '@/views/movie/mixins/common'

  export default {
    name: 'SingleCategory',
    mixins: [defaultMovieDataMixins],
    props: {
      category: {
        type: Object,
        default: () => {
          return {
            id: 0,
            name: 'Documentary',
            movies: [this.defaultMovie]
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/movie/list/single-category.scss";
</style>
