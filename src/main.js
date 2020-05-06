// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@vant/touch-emulator'; //适应电脑端
import VueRouter from 'vue-router'
import routes from '@/router/index.js'
Vue.use(VueRouter)
Vue.use(Vant);//全局使用
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
