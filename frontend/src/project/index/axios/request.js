import axios from "axios";
import qs from "qs";
import app from "../main.js";

const service = axios.create({
  baseURL: process.env.BASE_URL,  // api的base_url
  timeout: 5000  // 请求超时时间
});

axios.interceptors.request.use(
  config => {
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
        app.router.replace({
          path: 'login',
          query: {redirect: app.router.currentRoute.fullPath}
        })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
});

export default service;