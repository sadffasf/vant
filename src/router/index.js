

const routes  = [
  {
    path: '/login',
    name: 'login',
    component: r => require.ensure([], () => r(require('../components/login')), 'login')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: r => require.ensure([], () => r(require('../components/detail')), 'detail')
  },

  //放在最后匹配404的
  {
    // 会匹配所有路径
    path: '*',
    name: 'notFound',
    component: r => require.ensure([], () => r(require('../components/404')), '404')
  },
]
export default  routes


