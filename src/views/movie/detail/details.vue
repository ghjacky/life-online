<template>
  <div id="details">
    <img :src="currentItem.cover">
    <div class="play-icon-wrapper">
      <font-awesome-icon :icon="['fa', 'play']" class="play-icon" @click="handlePlay"></font-awesome-icon>
    </div>
    <div class="share">
      <el-button type="primary" size="large">分享</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Details',
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
    methods: {
      // 点击播放按钮
      handlePlay() {
        console.log('点击播放按钮，弹出播放浮层播放电影')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/movie/detail/detail.scss";
</style>
