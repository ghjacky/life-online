<template>
  <div id="poster">
    <el-image :src="currentPoster"></el-image>
    <div class="poster-title">{{ currentItem.title }}</div>
    <rolling-over :current-item.sync="currentItem"></rolling-over>
  </div>
</template>

<script>
  import RollingOver from '@/views/home/poster/rolling-over'

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
          publish: '2019-01-01',
          duration: '5400',
          rating: 'R',
          cover: require('@/assets/test.jpg'),
          poster: require('@/assets/test.jpg')
        },
        latestItems: [
          {
            id: 0,
            title: '',
            summary: '',
            poster: require('@/assets/test.jpg')
          }
        ]
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
  @import "~@/style/layout/lcontent/poster/poster.scss";
</style>
