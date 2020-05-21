<template>
  <div id="l-header">
    <navigation></navigation>
    <logo></logo>
    <search></search>
    <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from '@/components/layout/lheader/navigation/index'
  import Logo from '@/components/layout/lheader/logo/index'
  import Search from '@/components/layout/lheader/search/index'

  export default {
    name: 'LHeader',
    components: { Search, Logo, Navigation }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/layout/lheader";
</style>
