import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import userInfo from '@/components/userInfo/userInfo'
import registerShop from '@/components/registerShop/registerShop'
import shopInfo from '@/components/shopInfo/shopInfo'
import listSupplier from '@/components/list/listSupplier'
import listPurchase from '@/components/list/listPurchase'
import listDetail from '@/components/listDetail/listDetail'

// 省市县三级联动
import Distpicker from 'v-distpicker'

Vue.use(Router)
Vue.use(Distpicker)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index},
    {path: '/login', name: 'login', component: login},
    {path: '/register', name: 'register', component: register},
    {path: '/userInfo', name: 'userInfo', component: userInfo},
    {path: '/registerShop', name: 'registerShop', component: registerShop},
    {path: '/shopInfo', name: 'shopInfo', component: shopInfo},
    {path: '/listSupplier', name: 'listSupplier', component: listSupplier},
    {path: '/listPurchase', name: 'listPurchase', component: listPurchase},
    {path: '/listDetail', name: 'listDetail', component: listDetail}

  ]
})
