<template>
  <div id="l-header">
    <div class="container header-container">
      <div class="header-item">
        <navigation></navigation>
        <logo></logo>
      </div>
      <search class="header-item"></search>
      <Register class="header-item"></Register>
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
