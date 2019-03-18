export default [
  {
      name: 'login',
      path: '/',
      meta: {title: '登陆'},
      component: resolve => require(['./views/login'], resolve)
      // component: resolve => require(['../components/Menu'], resolve)
  },
  {
      name: 'edit',
      path: '/edit',
      meta: {title: '文章编辑'},
      component: resolve => require(['./views/edit'], resolve)
      // component: resolve => require(['../components/Menu'], resolve)
  },
  {
      name: 'admin',
      path: '/admin',
      meta: {title: '文章管理'},
      component: resolve => require(['./views/admin'], resolve)
      // component: resolve => require(['../components/Menu'], resolve)
  }
]
