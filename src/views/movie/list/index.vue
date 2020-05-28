<template>
  <div id="list">
    <div v-for="(category,index) in categories" :key="index">
      <single-category :category="category"></single-category>
      <el-divider v-if="index + 1 < categories.length"></el-divider>
    </div>
    <div class="load-more">
      <el-button size="large" type="danger" @click="loadMore(5)">Load More</el-button>
    </div>
  </div>
</template>

<script>
  import SingleCategory from '@/views/movie/list/single-category'

  export default {
    name: 'List',
    components: { SingleCategory },
    data() {
      return {
        categories: [
          {
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
        ],
        showItems: []
      }
    },
    created() {
      this.categories = Array(5).fill(0).map((item, index) => {
        return {
          id: index,
          name: 'Documentary',
          movies: Array(8).fill(0).map((item1, index1) => {
            return {
              id: index1,
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
          })
        }
      })
    },
    methods: {
      loadMore(more) {
        // 从后端分页查出对应索引的数据
        const dataFromBackend = Array(more).fill(0).map((item, index) => {
          return {
            id: index,
            name: 'Documentary',
            movies: Array(8).fill(0).map((item1, index1) => {
              return {
                id: index1,
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
            })
          }
        })
        this.categories = this.categories.concat(dataFromBackend)
        console.log(this.categories)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/movie/list/list.scss";
</style>
