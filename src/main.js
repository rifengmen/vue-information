// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false
// 这里写上自己的基础url
axios.defaults.baseURL = process.env.API_ROOT
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
Vue.prototype.$qs = qs
Vue.use(ElementUI)
Vue.prototype.IMGURL = 'http://39.98.94.137:81/'

router.beforeEach((to, from, next) => {
  //  第一次进入项目
  // let token = window.localStorage.getItem('user_token')
  // if (!token && to.path !== '/author') {
  //   // 保存用户进入的url
  //   window.localStorage.setItem('beforeLoginUrl', to.fullPath)
  //   next('/author')
  //   return false
  // } else if (token && !store.getters.userInfo) {
  //   next('/author')
  // }
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
