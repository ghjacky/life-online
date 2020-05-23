<template>
  <div id="search">
    <el-input placeholder="搜索电影、剧集等" v-model="searchData" size="medium">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data() {
      return {
        searchData: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/layout/lheader/search.scss";
</style>
