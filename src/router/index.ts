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
    name: 'Experiência',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "experience" */ '@/views/Experience.vue')
  },
  {
    path: '/knowledge',
    name: 'Conhecimento',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "knowledge" */ '@/views/Knowledge.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
