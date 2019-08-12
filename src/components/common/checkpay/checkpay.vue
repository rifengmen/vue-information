<template>
  <div>
    <!-- 查看按钮 start -->
    <div
      class="checkbtn colorff9500 tc font30 font_blod"
      @click="openmsg">
      查看电话
    </div>
    <!-- 查看按钮 end -->
    <!-- 付款信息 start -->
    <div class="paybox" v-if="show">
      <!-- 关闭弹框按钮 start -->
      <div class="closebtn bgfff colorff9500" @click="closemsg">关闭</div>
      <!-- 关闭弹框按钮 end -->
      <!-- 信息标题 start -->
      <div class="paytit bgfff color1470cc font36 tc"><span class="font36 font_blod">会员</span>套餐</div>
      <!-- 信息标题 end -->
      <!-- 信息内容 start -->
      <div class="paymsg bgfff font28">
        <el-radio v-model="msgprice" label="1">
          <span class="font28">新用户优惠五分钟体验</span>
          <span class="coloree410c font28">￥1</span>
        </el-radio>
        <el-radio v-model="msgprice" label="30">
          <span class="font28">周会员-助推广1次</span>
          <span class="coloree410c font28">￥30</span>
        </el-radio>
        <el-radio v-model="msgprice" label="100">
          <span class="font28">月会员-助推广5次</span>
          <span class="coloree410c font28">￥100</span>
        </el-radio>
        <el-radio v-model="msgprice" label="260">
          <span class="font28">季会员-助推广16次</span>
          <span class="coloree410c font28">￥260</span>
        </el-radio>
        <el-radio v-model="msgprice" label="1000">
          <span class="font28">年会员-助推广65次</span>
          <span class="coloree410c font28">￥1000</span>
        </el-radio>
      </div>
      <!-- 信息内容 end -->
      <!-- 付款按钮 start -->
      <div class="sendbtn tc colorff9500 bgfff" @click="sendpay">去支付</div>
      <!-- 付款按钮 end -->
    </div>
    <!-- 付款信息 end -->
  </div>
</template>

<script>
export default {
  name: 'checkpay',
  data () {
    return {
      // 显示支付信息
      show: false,
      // 支付价格
      msgprice: '',
      // 是否启动支付按钮
      isSend: false
    }
  },
  methods: {
    // 查看付费
    openmsg () {
      this.show = true
    },
    // 关闭付费信息
    closemsg () {
      this.msgprice = ''
      this.show = false
    },
    // 发送支付
    sendpay () {
      if (this.isSend) {
        console.log(this.msgprice)
      }
    }
  },
  watch: {
    msgprice (newval, oldval) {
      if (newval) {
        this.isSend = true
      }
    }
  }
}
</script>

<style scoped>
@import "static/css/checkpay.css";

</style>
