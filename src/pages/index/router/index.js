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
  component: () => import('../components/HomePage.vue')
},
{
  path: '/with-router',
  name: 'with-router',
  component: () => import('../components/WithRouter.vue')
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
