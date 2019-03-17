import axios from "axios";
import qs from "qs";
import router from "../main.js";

const service = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${store.state.token}`;
        console.log('interceptors config=',config);
    }
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
          // 返回 401 清除token信息并跳转到登录页面
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
});

export default service;