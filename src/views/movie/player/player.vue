<template>
  <div id="player">
    <video-player></video-player>
  </div>
</template>

<script>
  import 'video.js/dist/video-js.css'

  import { videoPlayer } from 'vue-video-player'

  export default {
    components: {
      videoPlayer
    }
  }
</script>

<style scoped>

</style>
