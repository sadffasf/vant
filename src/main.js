// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router/'


/*
* 移动端方案开始
* */
//移动端引入vant UI组件库
import Vant from 'vant'
import 'vant/lib/index.css'
import './style/flexible'//设置1rem font-size  淘宝方案。
import '@vant/touch-emulator' //适应移动端在电脑端的点击事件。
/*
* 移动端结束
* */


//判断条件是否引入mock数据
process.env.MOCK && require('./mock')
import constData from './config/const'
import * as $apis from './api/api'

import VueBus from 'vue-bus'   //eventBus事件总线插件;this.$bus访问bus的方法 $on、$emit、$off、$once;
Vue.use(VueBus);

Vue.config.productionTip = false

Vue.use(Vant);//全局使用
Vue.prototype.$apis = $apis; //统一管理api
Vue.prototype.$constData = constData ;//宏常量



new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
