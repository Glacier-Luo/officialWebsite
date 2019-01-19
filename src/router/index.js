import App from '../App';

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                component: resolve => require(['../views/index'], resolve)
                // component: resolve => require(['../components/Menu'], resolve)
            },
            {
                path: '/test',
                component: resolve => require(['../components/HelloWorld'], resolve)
            }
        ]
    }
]
