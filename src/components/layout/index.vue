<template>
  <div id="layout">
    <l-header></l-header>
    <l-content>
      <template slot="l-content">
        <slot name="l-content"></slot>
      </template>
    </l-content>
    <el-divider></el-divider>
    <l-footer></l-footer>
  </div>
</template>

<script>
  import LHeader from './lheader/index'
  import LContent from './lcontent/index'
  import LFooter from './lfooter/index'

  export default {
    name: 'Layout',
    components: { LFooter, LContent, LHeader },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.handleWindowScroll, true)
      })
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleWindowScroll, true)
    },
    methods: {
      handleWindowScroll(e) {
        const doc = document.documentElement
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
        if (top >= 200) {
          document.querySelector('body #l-header').classList.remove('fly-in')
          document.querySelector('body #l-header').classList.add('fly-out')
        } else {
          document.querySelector('body #l-header').classList.remove('fly-out')
          document.querySelector('body #l-header').classList.add('fly-in')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/style/layout";
</style>
