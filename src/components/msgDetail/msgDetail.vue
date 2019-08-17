<template>
  <div class="container bgeeeeee">
    <!-- 头部 start -->
    <div class="tit bgfff">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font36 font_blod color1470cc">{{msgarr[msgDetail.data-1]}}详情</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <div class="msg_cont">
      <!-- 信息详情 start -->
      <div class="msgarea bgfff">
        <div class="msg_li">
          <div>
            <div class="font30 font_blod">分类：</div>
            <div class="font30 font_blod">{{msgDetail.classify}}</div>
          </div>
          <div>
            <div class="font30 font_blod">产地：</div>
            <div class="font30 font_blod">{{msgDetail.area}}</div>
          </div>
        </div>
        <div class="msg_li">
          <div>
            <div class="font30 font_blod">留言：</div>
            <div v-html="msgDetail.leave">{{msgDetail.leave}}</div>
          </div>
        </div>
      </div>
      <!-- 信息详情 end -->
      <!-- 信息编号 start -->
      <div class="msg_li msgcode bgfff">
        <div>
          <div class="font28 color666">订单号：</div>
          <div class="font28 color666">{{msgDetail.orderid}}</div>
        </div>
        <div>
          <div class="font28 color666">发布时间：</div>
          <div class="font28 color666">{{msgDetail.time}}</div>
        </div>
      </div>
      <!-- 信息编号 end -->
      <!-- 免责 投诉 start -->
      <div class="tip_complaint" v-if="userlistshow">
        <tip></tip>
        <router-link :to="{name: 'sendComplaint', params: {msgDetail: msgDetail}}" tag="div" class="complaint bgfff coloree410c font26">投诉</router-link>
      </div>
      <!-- 免责 投诉 end -->
    </div>
    <!-- 发布信息 信息列表 查看电话 start -->
    <div class="msgfooter bgfff" v-if="userlistshow">
      <div class="msgfooter_l">
        <router-link :to="{name: 'sendMsg', query:{msg_status: msgDetail.data}}" class="msg_btn tc colorff9500 font26 font_blod bgfff" tag="div">发布{{msgarr[msgDetail.data-1]}}</router-link>
        <router-link :to="{name: (msgDetail.data === '1' ? 'listPurchase' : 'listSupplier')}" class="msg_btn tc colorfff font26 font_blod bgff9500" tag="div">{{msgarr[msgDetail.data-1]}}列表</router-link>
      </div>
      <div class="msgfooter_r">
        <check-pay>查看电话</check-pay>
      </div>
    </div>
    <!-- 发布信息 信息列表 查看电话 end -->
  </div>
</template>

<script>
// 引入免责声明组件
import tip from '@/components/common/tip/tip'
import CheckPay from '@/components/common/checkpay/checkpay'

export default {
  name: 'msgDetail',
  data () {
    return {
      // 信息类别数组
      msgarr: this.$store.state.msgarr
    }
  },
  computed: {
    // 信息详情
    msgDetail () {
      return this.$store.state.msgDetail
    },
    // 查看自己发布的信息时隐藏信息详情部分按钮
    userlistshow () {
      return this.$store.state.userlistshow
    }
  },
  components: {
    tip,
    CheckPay
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    },
    // 设置查看信息详情
    setMsgDetail () {
      if (this.$route.params.msgDetail) {
        this.$store.commit('setMsgDetail', this.$route.params.msgDetail)
      }
    }
  },
  created () {
    this.setMsgDetail()
  }
}
</script>

<style scoped>
@import "static/css/msgDetail.css";

</style>
