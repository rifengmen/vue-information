import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import register from '@/components/register/register'
import index from '@/components/index/index'
import userInfo from '@/components/userInfo/userInfo'
import registerShop from '@/components/registerShop/registerShop'
import shopInfo from '@/components/shopInfo/shopInfo'
import list from '@/components/list/list'
import listDetail from '@/components/listDetail/listDetail'

// 省市县三级联动
import Distpicker from 'v-distpicker'

Vue.use(Router)
Vue.use(Distpicker)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index},
    {path: '/login/login', name: 'login', component: login},
    {path: '/register/register', name: 'register', component: register},
    {path: '/userInfo/userInfo', name: 'userInfo', component: userInfo},
    {path: '/registerShop/registerShop', name: 'registerShop', component: registerShop},
    {path: '/shopInfo/shopInfo', name: 'shopInfo', component: shopInfo},
    {path: '/list/list', name: 'list', component: list},
    {path: '/listDetail/listDetail', name: 'listDetail', component: listDetail},

  ]
})
