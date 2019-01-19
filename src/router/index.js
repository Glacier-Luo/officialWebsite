export default [
    {
        path: '/',
        component: resolve => require(['../views/index'], resolve)
        // component: resolve => require(['../components/Menu'], resolve)
    },
    {
        path: '/profile',
        component: resolve => require(['../views/profile'], resolve)
        // component: resolve => require(['../components/Menu'], resolve)
    },
    {
        path: '/news',
        component: resolve => require(['../views/news'], resolve)
        // component: resolve => require(['../components/Menu'], resolve)
    },
    {
        path: '/cooperation',
        component: resolve => require(['../views/cooperation'], resolve)
        // component: resolve => require(['../components/Menu'], resolve)
    },
    {
        path: '/services',
        component: resolve => require(['../views/services'], resolve)
        // component: resolve => require(['../components/Menu'], resolve)
    },
    {
        path: '/train',
        component: resolve => require(['../views/train'], resolve)
        // component: resolve => require(['../components/Menu'], resolve)
    },
    {
        path: '/files',
        component: resolve => require(['../views/files'], resolve)
        // component: resolve => require(['../components/Menu'], resolve)
    },
    {
        path: '/recruit',
        component: resolve => require(['../views/recruit'], resolve)
        // component: resolve => require(['../components/Menu'], resolve)
    },

    {
        path: '/test',
        component: resolve => require(['../components/HelloWorld'], resolve)
    }
]
