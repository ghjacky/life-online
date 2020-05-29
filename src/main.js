import Vue from 'vue'
import App from './App.vue'
import '@/style/index.scss'
import { router } from '@/router'
import '@/permission'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faAngleLeft, faAngleRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faAngleLeft, faAngleRight, faPlay)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
