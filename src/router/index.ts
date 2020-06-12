import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '@/views/About.vue'
import Mobile from '@/views/Mobile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    components: {
      default: About,
      mobile: Mobile
    }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('@/views/Experience.vue')
  },
  {
    path: '/knowledge',
    name: 'Knowledge',
    component: () => import('@/views/Knowledge.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
