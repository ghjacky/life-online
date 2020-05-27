<template>
  <layout>
    <template slot="l-content">
      <poster></poster>
      <el-divider></el-divider>
      <list></list>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/layout/index'
  import Poster from '@/views/movie/poster/index'
  import List from '@/views/movie/list/index'

  export default {
    name: 'Index',
    components: {
      List,
      Poster,
      Layout
    }
  }
</script>

<style scoped>
  @import "~@/style/layout/lcontent/index.scss";
</style>
