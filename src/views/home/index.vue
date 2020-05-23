<template>
  <layout>
    <template slot="l-content">
      <poster></poster>
      <list></list>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/layout/index'
  import Poster from '@/views/home/poster/index'
  import List from '@/views/home/list/index'

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
</style>
