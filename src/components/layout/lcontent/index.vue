<template>
  <div id="l-content">
    <slot name="l-content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'LContent'
  }
</script>

<style scoped lang="scss">
  #l-content {
    height: 1000px;
  }
</style>
