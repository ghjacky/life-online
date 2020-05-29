<template>
  <div id="navigation">
    <font-awesome-icon :icon="['fa','bars']" class="nav-pointer" @click="popNavSquare"></font-awesome-icon>
    <nav-square :is-show="showSquare"></nav-square>
  </div>
</template>

<script>
  import NavSquare from '@/components/layout/lheader/navigation/nav-square'

  export default {
    name: 'Navigation',
    components: { NavSquare },
    data() {
      return {
        showSquare: false
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.handleWindowScroll, true)
      })
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleWindowScroll, true)
    },
    methods: {
      handleWindowScroll() {
        const doc = document.documentElement
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
        if (top >= 200) {
          this.showSquare = false
        }
      },
      popNavSquare() {
        this.showSquare = !this.showSquare
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/layout/lheader/navigation";
</style>
