import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'
// 自定义主题
import './assets/styles/element-variables.scss'

// jjy 基础样式
import '@/styles/public.scss'
import '@/icons'

import BUS from './bus'

// https://www.npmjs.com/package/vue-js-modal
import VModal from 'vue-js-modal'
Vue.use(VModal)

BUS(Vue)

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
