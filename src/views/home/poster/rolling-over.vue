<template>
  <div id="rolling-over">
    <div v-for="(item,index) in rollingItems.slice(0, 2)" :key="`before-${index}`"
         class="rolling-item rolling-items-before" :id="`rolling-item-before-${index}`">
      <img :src="item.cover" />
    </div>
    <div class="rolling-center">
      <div class="tips">
        <div class="category">{{ currentItem.category }}</div>
        <div class="stuff">
          <span class="publish-on">({{ new Date(currentItem.publish).getFullYear() }})</span>
          <span class="duration">{{ parseInt(currentItem.duration / 60.0 / 60.0 + '') }} hr {{ parseInt((currentItem.duration / 60.0 / 60.0 + '').split('.')[1]) / 10 * 60 }} min</span>
        </div>
      </div>
      <div class="watch-now-container">
        <el-button type="danger" size="large">Watch Free Now</el-button>
      </div>
      <div class="tips"></div>
    </div>
    <div v-for="(item,index) in rollingItems.slice(2, 4)" :key="`after-${index}`"
         class="rolling-item roling-items-after" :id="`rolling-item-after-${index}`">
      <img :src="item.poster" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RollingOver',
    props: {
      currentItem: {
        type: Object,
        default: () => {
          return {
            id: 0,
            title: 'We Need to Talk About Kevin',
            summary: '',
            category: 'Drama',
            publish: '2019-01-01',
            duration: '5400',
            rating: 'R',
            cover: require('@/assets/test.jpg'),
            poster: require('@/assets/test.jpg')
          }
        }
      }
    },
    sync: {
      'currentItem': 'currentItem'
    },
    data() {
      return {
        rollingItems: []
      }
    },
    created() {
      this.rollingItems = Array(10).fill(0).map((item, index) => {
        return {
          id: index,
          title: 'We Need to Talk About Kevin',
          summary: '',
          category: 'Drama',
          publish: '2019-01-01',
          duration: '5400',
          rating: 'R',
          cover: require('@/assets/test.jpg'),
          poster: require('@/assets/test.jpg')
        }
      })
    },
    mounted() {
      this.rollingOver()
      this.setCurrentActiveRollingItem(1)
    },
    methods: {
      async rollingOver() {
        setInterval(() => {
          this.rollingItems.push(this.rollingItems.shift())
          this.setCurrentActiveRollingItem(1)
        }, 3000)
      },
      setCurrentActiveRollingItem(index) {
        this.$emit('update:currentItem', this.rollingItems[1])
        document.querySelectorAll('#rolling-over .rolling-item-active').forEach(el => {
          el.classList.remove('rolling-item-active')
        })
        document.querySelector(`#rolling-over #rolling-item-before-${index}`).classList.add('rolling-item-active')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/layout/lcontent/poster/rolling-over.scss";
</style>
