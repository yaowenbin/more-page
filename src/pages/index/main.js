import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'

// jjy 基础样式
import '@/styles/public.scss'
import '@/icons'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
