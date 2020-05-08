import Vue from 'vue'
import VueRouter from 'vue-router'
import routeTemp1 from "./routeTemp1";//业务路由划分
Vue.use(VueRouter)

const routes  = [
  ...routeTemp1,
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: r => require.ensure([], () => r(require('../components/login')), 'login')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta:{
      requireAuth:true, //如果需要登录权限
    },
    component: r => require.ensure([], () => r(require('../components/detail')), 'detail')
  },
  {
    path: '/list',
    name: 'list',
    component: r => require.ensure([], () => r(require('../components/list')), 'list')
  },
  //放在最后匹配404的
  {
    // 会匹配所有路径
    path: '*',
    name: 'page404',
    component: r => require.ensure([], () => r(require('../components/page404')), 'page404')
  },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


export default  router


