import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = [{
  path: '/',
  redirect: '/home-page'
},
{
  path: '/home-page',
  name: 'home-page',
  component: () => import('../view/index/index.vue')
}
]

const createRouter = () =>
  new Router({
    mode: 'hash',
    routes: constantRoutes
  })

const router = createRouter()

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {})

export default router
