<template>
  <div class="container bgeeeeee">
    <!-- 用户信息 start -->
    <div class="userinfo colorfff bg1470cc">
      <div class="userinfo_tit font34 tc">个人中心</div>
      <div class="userimg bgfff">
        <img :src="userInfo.userimg || 'static/img/userimg.png'">
      </div>
      <div class="username font32 font_blod tc ellipsis">{{userInfo.username}}</div>
      <div class="usertime tc">会员到期时间：{{userInfo.time}}</div>
    </div>
    <!-- 用户信息 end -->
    <!-- 功能部分 start -->
    <div class="user_cont">
      <ul>
        <li class="user_li bgfff">
          <ul>
            <!-- 我的供应 start -->
            <router-link :to="{name: 'userList', params:{msg_status: 2}}" tag="li" class="cont_li">
              <div class="imgbox">
                <img src="static/img/supplieractive.png">
              </div>
              <div class="imgname">我的供应</div>
            </router-link>
            <!-- 我的供应 end -->
            <!-- 我的求购 start -->
            <router-link :to="{name: 'userList', params:{msg_status: 1}}" tag="li"  class="cont_li">
              <div class="imgbox">
                <img src="static/img/purchaseactive.png">
              </div>
              <div class="imgname">我的求购</div>
            </router-link>
            <!-- 我的求购 end -->
            <!-- 我的查看 start -->
            <router-link :to="{name: ''}" tag="li"  class="cont_li">
              <div class="imgbox">
                <img src="static/img/categoryactive.png">
              </div>
              <div class="imgname">我的查看</div>
            </router-link>
            <!-- 我的查看 end -->
            <!-- 我的投诉 start -->
            <router-link :to="{name: 'complaintList'}" tag="li"  class="cont_li">
              <div class="imgbox">
                <img src="static/img/complaintactive.png">
              </div>
              <div class="imgname">我的投诉</div>
            </router-link>
            <!-- 我的投诉 end -->
          </ul>
        </li>
        <li class="user_li bgfff">
          <check-pay><span class="color1470cc font30">VIP</span>续费</check-pay>
        </li>
        <li class="user_li bgfff">
          <div>会员激活：</div>
          <div class="vipcode">
            <input type="text" v-model.number="vipcode">
          </div>
          <div :class="'vipcode_btn nosend_btn tc font26' + (send ? ' bgfff colorff9500 send_border' : ' bgeeeeee color999')" @click="sendCode">激活</div>
        </li>
      </ul>
    </div>
    <!-- 功能部分 end -->
    <!-- 底部导航 start -->
    <my-footer></my-footer>
    <!-- 底部导航 end -->
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
    },
    // 设置查看自己发布的信息时隐藏信息详情部分按钮
    setUserlistshow () {
      this.$store.commit('setUserlistshow', false)
    }
  },
  watch: {
    // 监听激活码填写情况
    vipcode () {
      this.isSend()
    }
  },
  created () {
    this.setUserlistshow()
  }
}
</script>

<style scoped>
@import "static/css/userInfo.css";

</style>
