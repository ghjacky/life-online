<template>
  <div id="poster">
    <el-image :src="require('@/assets/test.jpg')"></el-image>
  </div>
</template>

<script>
  export default {
    name: 'Poster'
  }
</script>

<style scoped lang="scss">
  @import "~@/style/layout/lcontent/poster.scss";
</style>
