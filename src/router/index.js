import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import userInfo from '@/components/userInfo/userInfo'
import registerShop from '@/components/registerShop/registerShop'
import shopInfo from '@/components/shopInfo/shopInfo'
import listSupplier from '@/components/list/listSupplier'
import listPurchase from '@/components/list/listPurchase'
import msgDetail from '@/components/msgDetail/msgDetail'
import sendMsg from '@/components/sendMsg/sendMsg'

// 省市县三级联动
import Distpicker from 'v-distpicker'

Vue.use(Router)
Vue.use(Distpicker)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index},
    {path: '/userInfo', name: 'userInfo', component: userInfo},
    {path: '/registerShop', name: 'registerShop', component: registerShop},
    {path: '/shopInfo', name: 'shopInfo', component: shopInfo},
    {path: '/listSupplier', name: 'listSupplier', component: listSupplier},
    {path: '/listPurchase', name: 'listPurchase', component: listPurchase},
    {path: '/msgDetail', name: 'msgDetail', component: msgDetail},
    {path: '/sendMsg', name: 'sendMsg', component: sendMsg}
  ]
})
