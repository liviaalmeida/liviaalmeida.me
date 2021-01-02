import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import AnimatedIcon from '@/ds/AnimatedIcon.vue'
import AnimatedLink from '@/ds/AnimatedLink.vue'
import AnimatedTitle from '@/ds/AnimatedTitle.vue'
import ProgressBar from '@/ds/ProgressBar.vue'
import Timeline from '@/ds/Timeline.vue'

import InViewport from 'vue-in-viewport-directive'

Vue.component('AnimatedIcon', AnimatedIcon)
Vue.component('AnimatedLink', AnimatedLink)
Vue.component('AnimatedTitle', AnimatedTitle)
Vue.component('ProgressBar', ProgressBar)
Vue.component('Timeline', Timeline)

Vue.directive('view', InViewport)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
