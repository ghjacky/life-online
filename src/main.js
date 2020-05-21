import Vue from 'vue'
import App from './App.vue'
import '@/style/index.scss'
import { router } from '@/router'
import '@/permission'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
