import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import 'iview/dist/styles/iview.css'
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});

new Vue({
    router,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = '软件工程中心 | ' + to.meta.title
    }
    next()
});
