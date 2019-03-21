// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min');

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css');
require('font-awesome/css/font-awesome.css');
require('froala-editor/css/froala_style.min.css');

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './index';
import { store } from './store'
import 'iview/dist/styles/iview.css'
import api from './axios/api'
// import axios from 'axios'
// import store from './store'

Vue.use(VueFroala);
Vue.use(VueRouter);
Vue.use(store);
Vue.config.productionTip = false;

export const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  // created:function(){
  //   setInterval(this.timer, 1000 * 2)
  // },
  mounted(){
    setInterval(this.timer, 1000 * 60 * 2)
  },
  methods:{
    timer:function () {
      if(this.$store.getters.token){
        console.log(this.$store.getters.token);
        api.refresh_token({'token': this.$store.getters.token}).then(res => {
          this.$store.commit('change', res.data.token)
        })
      }
    }
  },
  render: h => h(App)
}).$mount('#app');



router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = '软件工程中心 | ' + to.meta.title
  }
  if (to.name === 'login'){
    if (store.getters.token){
      next({
        path: '/admin/manage',
        // query: { redirect: to.fullPath }
      })
    }
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.token) {
      next({
        path: '/admin',
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
});

//
// axios.interceptors.request.use(
//     config => {
//       if (this.$store.getters.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//         config.headers.Authorization = `JWT ${this.$store.getters.token}`;
//         console.log(this.$store.getters.token)
//       }
//       console.log(this.$store.getters.token)
//       return config;
//     },
//     err => {
//       return Promise.reject(err);
//     });
