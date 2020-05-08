// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router/'
import Vant from 'vant'
import './style/flexible'
import 'vant/lib/index.css'
import '@vant/touch-emulator' //适应电脑端
process.env.MOCK && require('./mock')


import * as $apis from './api/api'

Vue.config.productionTip = false

Vue.use(Vant);//全局使用
Vue.prototype.$apis = $apis; //统一管理api
//全局导航守卫钩子
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    let hasLogin = localStorage.getItem('hasLogin')
    if(hasLogin){
      next()
    }else{
      next({ path: '/login',query: { redirect: window.location.href } });
    }
    return
  }
  next();
});


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
