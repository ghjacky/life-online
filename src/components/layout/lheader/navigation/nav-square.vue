<template>
  <div id="nav-square" v-if="isShow">
    <div v-for="(nav, index) in navs" :key="index" class="nav-item">
      <div class="nav-dimension">{{ nav.Dimension.label }}</div>
      <div class="nav-list">
        <ul>
          <li v-for="(l,i) in nav.list" :key="i">{{ l }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavSquare',
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        navs: [
          { Dimension: { label: '分类', prop: 'category' }, list: ['1', '2', '3'] },
          { Dimension: { label: '分类', prop: 'category' }, list: ['1', '2', '3'] }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/layout/lheader/navigation.scss";
</style>
