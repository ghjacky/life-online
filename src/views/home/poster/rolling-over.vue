<template>
  <div id="rolling-over">
    <font-awesome-icon class="arrow arrow-left" :icon="['fa', 'angle-left']"></font-awesome-icon>
    <div v-for="(item,index) in frontItems" :key="index">
      <img :src="item.poster"/>
      <div class="tips">
        <div class="category"></div>
        <div class="stuff">
          <span class="publish-on"></span>
          <span class="duration"></span>
        </div>
      </div>
    </div>
    <font-awesome-icon class="arrow arrow-right" :icon="['fa', 'angle-right']"></font-awesome-icon>
  </div>
</template>

<script>
  export default {
    name: 'RollingOver',
    data() {
      return {
        frontItems: [
          {
            id: 0,
            title: 'We Need to Talk About Kevin',
            category: 'Drama',
            publish: '2019-01-01',
            duration: '3600',
            poster: require('@/assets/test.jpg')
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/layout/lcontent/poster/rolling-over.scss";
</style>
