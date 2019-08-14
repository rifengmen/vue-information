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
            <router-link :to="{name: 'complaintList'}" tag="li"  class="cont_li">
              <div class="imgbox">
                <img src="static/img/complaintactive.png">
              </div>
              <div class="imgname">我的投诉</div>
            </router-link>
          </ul>
        </li>
        <li class="user_li bgfff">
          <check-pay><span class="color1470cc font30">VIP</span>续费</check-pay>
        </li>
        <li class="user_li bgfff">
          <div>会员激活：</div>
          <div class="vipcode">
            <input type="number" v-model.number="vipcode">
          </div>
          <div :class="'vipcode_btn tc font_blod font28' + (send ? ' bgfff colorff9500' : ' bge7e7e7 color999')" @click="sendCode">激活</div>
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
import MyFooter from '@/components/common/footer/myfooter'
import CheckPay from '@/components/common/checkpay/checkpay'

export default {
  name: 'userInfo',
  data () {
    return {
      // vip激活码
      vipcode: '',
      // 是否发送信息
      send: false
    }
  },
  computed: {
    // 获取用户信息
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  components: {
    MyFooter,
    CheckPay
  },
  methods: {
    // 发送激活码
    sendCode () {
      if (this.send) {
        let _data = {
          vipcode: this.vipcode,
          userid: this.userInfo.userid
        }
        let data = this.$qs.stringify(_data)
        // this.$axios.post('', data).then(result => {
        //   if (result.data.code === 0) {
        //     this.$message.success(result.data.msg)
        //     // 更新用户信息
        //     this.$store.commit('setUserInfo', result.data.data)
        //   }
        // }).catch(error => {
        //   throw error
        // })
        console.log(data)
      }
    },
    // 验证是否可以提交信息
    isSend () {
      if (this.vipcode === '') {
        this.send = false
        return
      }
      this.send = true
    }
  },
  watch: {
    // 监听激活码填写情况
    vipcode () {
      this.isSend()
    }
  }
}
</script>

<style scoped>
@import "static/css/userInfo.css";

</style>
