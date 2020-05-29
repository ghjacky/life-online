<template>
  <div id="single-category">
    <div class="title">{{ category.name }}</div>
    <div v-for="(movie,index) in category.movies.slice(0, 6)" :key="index" class="movie-item-container">
      <img :src="movie.cover" />
      <div class="play-icon-wrapper">
        <font-awesome-icon :icon="['fa', 'play']" class="play-icon"></font-awesome-icon>
      </div>
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
  export default {
    name: 'SingleCategory',
    props: {
      category: {
        type: Object,
        default: () => {
          return {
            id: 0,
            name: 'Documentary',
            movies: [
              {
                id: 0,
                title: 'We Need to Talk About Kevin',
                summary: '',
                category: 'Drama',
                tag: 'documentary, sport',
                publish: '2019-01-01',
                duration: '5400',
                rating: 'R',
                cover: require('@/assets/test.jpg'),
                poster: require('@/assets/test.jpg')
              }
            ]
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/movie/list/single-category.scss";
</style>
