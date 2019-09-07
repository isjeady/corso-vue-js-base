 /* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
///axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  return config;
});

axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res);
  return res;
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
