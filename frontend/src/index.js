export default [
    {
        name: 'index',
        path: '/',
        component: resolve => require(['./views/Soft'], resolve),
        children: [
            {
                name: 'home',
                path: '/',
                meta: {title: '首页'},
                component: resolve => require(['./views/index'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'profile',
                path: '/profile',
                meta: {title: '机构概况'},
                component: resolve => require(['./views/profile'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'news',
                path: '/news',
                meta: {title: '新闻中心'},
                component: resolve => require(['./views/news'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'cooperation',
                path: '/cooperation',
                meta: {title: '科研合作'},
                component: resolve => require(['./views/cooperation'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'services',
                path: '/services',
                meta: {title: '社会服务'},
                component: resolve => require(['./views/services'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'train',
                path: '/train',
                meta: {title: '人才培养'},
                component: resolve => require(['./views/train'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'files',
                path: '/files',
                meta: {title: '文件资料'},
                component: resolve => require(['./views/files'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'recruit',
                path: '/recruit',
                meta: {title: '人才招聘'},
                component: resolve => require(['./views/recruit'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'view',
                path: '/view',
                meta: {title: '文章查看'},
                component: resolve => require(['./views/view'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            }
        ]
    },
    {
        name: 'admin',
        path: '/admin',
        component: resolve => require(['./views/Admin'], resolve),
        children: [
            {
                name: 'login',
                path: 'login',
                meta: {title: '登陆'},
                component: resolve => require(['./views/login'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'edit',
                path: 'edit',
                meta: {title: '文章编辑'},
                component: resolve => require(['./views/edit'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'editprofile',
                path: 'editprofile',
                meta: {title: '文章编辑'},
                component: resolve => require(['./views/editprofile'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                name: 'manage',
                path: 'manage',
                meta: {title: '文章管理'},
                component: resolve => require(['./views/manage'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            }
        ]
    }
    
    
]
