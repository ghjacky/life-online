<template>
  <div class="related-item">
    <div class="item-wrapper cover">
      <el-image :src="item.cover"></el-image>
    </div>
    <div class="item-wrapper stuff">
      <div class="s-one title">{{ item.title }}</div>
      <div class="s-two">
        <div class="publish-duration">({{ item.publish.split('-')[0] }})
          . {{ parseInt(item.duration / 60.0 / 60.0 + '') }}
          hr {{ parseInt((item.duration / 60.0 / 60.0 + '').split('.')[1]) / 10 * 60 }} min
        </div>
        <div class="tag">{{ item.tag }}</div>
      </div>
    </div>
    <div class="item-wrapper rating"><span>{{ item.rating }}</span></div>
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
            c: '',
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

<style scoped lang="scss">
  @import "~@/style/movie/detail/relatem.scss";
</style>
