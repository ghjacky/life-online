import { router } from '@/router'
import Vue from 'vue'

router.afterEach(async (to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})
