<template>
  <div id="nav-square" v-if="isShow"></div>
</template>

<script>
  export default {
    name: 'NavSquare',
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

</style>
