// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import qs from 'qs'
import 'normalize.css'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.API_ROOT //这里写上自己的基础url
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
Vue.prototype.qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
