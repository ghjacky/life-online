<template>
  <div id="poster">
    <el-image :src="currentPoster"></el-image>
    <div class="poster-title">{{ currentItem.title }}</div>
    <rolling-over :current-item.sync="currentItem"></rolling-over>
  </div>
</template>

<script>
  import RollingOver from '@/views/movie/poster/rolling-over'

  export default {
    name: 'Poster',
    components: { RollingOver },
    data() {
      return {
        currentItem: {
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
      }
    },
    computed: {
      currentPoster: function () {
        return this.currentItem.poster
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/movie/poster/poster.scss";
</style>
