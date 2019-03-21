import axios from "axios";
// import app from "../login/main.js";
// import App from '../App'
import { HOST } from '../../config'
import { store } from '../store'
import { router } from '../main'
// import routes from '../index';
// // import VueRouter from "vue-router/types/router";
// import VueRouter from 'vue-router';
//
// const router = new VueRouter({
//     routes
// });


const service = axios.create({
  baseURL: HOST,  // api的base_url
  timeout: 5000  // 请求超时时间
});
// service.interceptors.request.use(
//     config => {
//         if (store.getters.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//             config.headers.Authorization = `JWT ${store.getters.token}`;
//             console.log(store.getters.token)
//         }
//         console.log(store.getters.token)
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });
service.interceptors.request.use(
  config => {
    if (store.getters.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `JWT ${store.getters.token}`;
        // console.log(store.getters.token)
    }
      // console.log(store.getters.token)
    return config;
  },
  err => {
    return Promise.reject(err);
});

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
            // routes.push('/admin')
            // console.log('error')
            router.replace({
                path: '/admin',
                // query: {redirect: router.currentRoute.fullPath}
            // console.log('error')
          // 返回 401 清除token信息并跳转到登录页面
        })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
});

export default service;
