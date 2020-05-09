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
    component:  resolve => require(['@/components/login'],resolve)   //路由异步加载（懒加载）
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta:{
      requireAuth:true, //如果需要登录权限
    },
    component: resolve => require(['@/components/detail'],resolve)
  },
  {
    path: '/list',
    name: 'list',
    component: resolve => require(['@/components/list'],resolve)
  },
  //放在最后匹配404的
  {
    // 会匹配所有路径
    path: '*',
    name: 'page404',
    component: resolve => require(['@/components/page404'],resolve)
  },
]

const router = new VueRouter({
  //默认hash模式
  routes // (缩写) 相当于 routes: routes
})

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
export default  router


