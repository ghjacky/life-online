<template>
  <div id="description">
    <div class="title">{{ currentItem.title }}</div>
    <el-divider></el-divider>
    <div class="stuff">
      <div class="publish stuff-item">{{ currentItem.publish }}</div>
      <div class="duration stuff-item">({{ parseInt(currentItem.duration / 60.0 / 60.0 + '') }} hr {{
        parseInt((currentItem.duration / 60.0 / 60.0 + '').split('.')[1]) / 10 * 60 }} min)
      </div>
      <div class="rating stuff-item">
        <el-button size="mini" class="rating">{{ currentItem.rating }}</el-button>
      </div>
    </div>
    <div class="tag">{{ currentItem.tag }}</div>
    <div class="summary">{{ currentItem.summary }}</div>
    <el-divider></el-divider>
    <div class="desc-item director">
      <span class="desc-label">DIRECTOR</span>
      <span class="desc-text">{{ currentItem.director }}</span>
    </div>
    <el-divider></el-divider>
    <div class="desc-item director">
      <span class="desc-label">STARRING</span>
      <span class="desc-text">{{ currentItem.starring }}</span>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
  export default {
    name: 'Description',
    props: {
      currentItem: {
        type: Object,
        default: () => {
          return {
            id: 0,
            title: 'We Need to Talk About Kevin',
            summary: 'Eavan 这个英文名跟随了好长一段时间， 因为工作， 遇见同名者， 需要我重新改一个！呜呜呜呜.. 大家有英文名推荐吗, Eavan这个英文名跟随了好长一段时间，因为工作，遇见同名者，需要我重新改一个！呜呜呜呜.. 大家有英文名推荐吗',
            category: 'Drama',
            tag: 'documentary, sport',
            publish: '2019-01-01',
            duration: '5400',
            rating: 'R',
            director: 'Steven Allan Spielberg',
            starring: 'Jet Li, Jack Chen, Donnie Yen',
            cover: require('@/assets/test.jpg'),
            poster: require('@/assets/test.jpg')
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/movie/detail/description.scss";
</style>
