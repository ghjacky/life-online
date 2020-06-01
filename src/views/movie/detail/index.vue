<template>
  <layout>
    <template slot="l-content">
      <div class="container">
        <Details></Details>
        <description></description>
        <related></related>
      </div>
    </template>
  </layout>
</template>

<script>
  import Layout from '@/components/layout/index'
  import Description from '@/views/movie/detail/description'
  import Related from '@/views/movie/detail/related'
  import Details from '@/views/movie/detail/details'

  export default {
    name: 'Detail',
    components: { Details, Related, Description, Layout }
  }
</script>

<style scoped lang="scss">
</style>
