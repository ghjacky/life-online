<template>
  <div id="l-header">
    <div class="container header-container">
      <navigation></navigation>
      <logo></logo>
      <search></search>
      <Register></Register>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/layout/lheader/navigation'
  import Logo from '@/components/layout/lheader/logo'
  import Search from '@/components/layout/lheader/search'
  import Register from '@/components/layout/lheader/register'

  export default {
    name: 'LHeader',
    components: { Search, Logo, Navigation, Register }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/layout/lheader";
</style>
