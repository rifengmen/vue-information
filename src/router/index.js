import Vue from 'vue'
import Router from 'vue-router'

const author = () => import(/* webpackChunkName: 'wx' */ '@/components/author/author')
const index = () => import(/* webpackChunkName: 'shop' */ '@/components/index/index')
const userInfo = () => import(/* webpackChunkName: 'userinfo' */ '@/components/userInfo/userInfo')
const userList = () => import(/* webpackChunkName: 'userinfo' */ '@/components/userInfo/userList')
const registerShop = () => import(/* webpackChunkName: 'shop' */ '@/components/registerShop/registerShop')
const shopInfo = () => import(/* webpackChunkName: 'shop' */ '@/components/shopInfo/shopInfo')
const listSupplier = () => import(/* webpackChunkName: 'msg' */ '@/components/list/listSupplier')
const listPurchase = () => import(/* webpackChunkName: 'msg' */ '@/components/list/listPurchase')
const msgDetail = () => import(/* webpackChunkName: 'msg' */ '@/components/msgDetail/msgDetail')
const sendMsg = () => import(/* webpackChunkName: 'msg' */ '@/components/sendMsg/sendMsg')
const complaintList = () => import(/* webpackChunkName: 'userinfo' */ '@/components/complaintList/complaintList')
const sendComplaint = () => import(/* webpackChunkName: 'userinfo' */ '@/components/sendComplaint/sendComplaint')
const complaint = () => import(/* webpackChunkName: 'userinfo' */ '@/components/complaint/complaint')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/author', name: 'author', component: author},
    {path: '/', name: 'index', component: index},
    {path: '/userInfo', name: 'userInfo', component: userInfo},
    {path: '/userList', name: 'userList', component: userList},
    {path: '/registerShop', name: 'registerShop', component: registerShop},
    {path: '/shopInfo', name: 'shopInfo', component: shopInfo},
    {path: '/listSupplier', name: 'listSupplier', component: listSupplier},
    {path: '/listPurchase', name: 'listPurchase', component: listPurchase},
    {path: '/msgDetail', name: 'msgDetail', component: msgDetail},
    {path: '/sendMsg', name: 'sendMsg', component: sendMsg},
    {path: '/complaintList', name: 'complaintList', component: complaintList},
    {path: '/sendComplaint', name: 'sendComplaint', component: sendComplaint},
    {path: '/complaint', name: 'complaint', component: complaint}
  ]
})
