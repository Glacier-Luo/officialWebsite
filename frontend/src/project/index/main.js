// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './index';
import 'iview/dist/styles/iview.css';
import '../../plugins/element.js';

Vue.use(VueFroala);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = '软件工程中心 | ' + to.meta.title
    }
    next()
});
