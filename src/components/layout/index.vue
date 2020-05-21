<template>
  <div id="layout">
    <l-header></l-header>
    <l-content>
      <template slot="l-content">
        <slot name="l-content"></slot>
      </template>
    </l-content>
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
        console.log('log')
        window.addEventListener('scroll', (e) => {
          console.log(e)
        })
      })
    }
  }
</script>

<style scoped lang="scss">
  #layout {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
