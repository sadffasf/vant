const routeTemp1=[
  {
    path: '/login',
    name: 'login',
    component:  resolve => require(['@/page/login'],resolve)   //路由异步加载（懒加载）
  },
  {
    path: '/ticketlist',
    name: 'ticketlist',
    meta:{
      requireAuth:true, //如果需要登录权限
    },
    component:  resolve => require(['@/page/ticketlist'],resolve)   //路由异步加载（懒加载）
  },
  {
    path: '/order/:id',
    name: 'order',
    component: resolve => require(['@/page/order'],resolve)
  },
]
export default routeTemp1
