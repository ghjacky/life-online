<template>
  <div id="poster">
    <el-image :src="currentPoster"></el-image>
    <div class="poster-title">{{ currentItem.title }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Poster',
    data() {
      return {
        currentItem: {
          id: 0,
          title: 'We Need to Talk About Kevin',
          summary: '',
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
  @import "~@/style/layout/lcontent/poster.scss";
</style>
