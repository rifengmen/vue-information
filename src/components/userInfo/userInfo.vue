<template>
  <div class="user_main bge7e7e7">
    <!-- 用户信息 start -->
    <div class="userinfo colorfff bg1470cc">
      <div class="userinfo_tit font34 tc">个人中心</div>
      <div class="userimg bgfff">
        <img src="static/img/userimg.png">
      </div>
      <div class="username font32 font_blod tc">测试用户名</div>
      <div class="usertime tc">会员到期时间：0000-00-00</div>
    </div>
    <!-- 用户信息 end -->
    <!-- 功能部分 start -->
    <div class="user_cont">
      <ul>
        <li class="user_li bgfff">
          <ul>
            <router-link :to="{name: 'userList', query:{status: '0'}}" tag="li" class="cont_li">
              <div class="imgbox">
                <img src="static/img/supplieractive.png">
              </div>
              <div class="imgname">我的供应</div>
            </router-link>
            <router-link :to="{name: 'userList', query:{status: '1'}}" tag="li"  class="cont_li">
              <div class="imgbox">
                <img src="static/img/purchaseactive.png">
              </div>
              <div class="imgname">我的求购</div>
            </router-link>
            <router-link :to="{name: 'userList', query:{status: '2'}}" tag="li"  class="cont_li">
              <div class="imgbox">
                <img src="static/img/categoryactive.png">
              </div>
              <div class="imgname">我的查看</div>
            </router-link>
            <router-link :to="{name: ''}" tag="li"  class="cont_li">
              <div class="imgbox">
                <img src="static/img/complaintactive.png">
              </div>
              <div class="imgname">我的投诉</div>
            </router-link>
          </ul>
        </li>
        <li class="user_li bgfff">
          <div><span class="color1470cc">VIP</span>续费</div>
        </li>
        <li class="user_li bgfff">
          <div>会员激活：</div>
        </li>
      </ul>
    </div>
    <!-- 功能部分 end -->
    <div class="container">
      <!-- 底部导航 start -->
      <my-footer></my-footer>
      <!-- 底部导航 end -->
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/common/header/myheader'
import MyFooter from '@/components/common/footer/myfooter'
export default {
  name: 'userInfo',
  data () {
    return {
      test: '这是个人中心页面'
    }
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style scoped>
@import "static/css/userInfo.css";

</style>
