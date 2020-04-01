import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home-page'
    },
    {
      path: '/home-page',
      name: 'home-page',
      component: () => import('../components/HomePage.vue')
    },
    {
      path: '/with-router',
      name: 'with-router',
      component: () => import('../components/WithRouter.vue')
    }
  ]
})
