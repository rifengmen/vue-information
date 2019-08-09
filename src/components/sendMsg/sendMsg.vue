<template>
  <div class="container">
    <!-- 头部 start -->
    <div class="tit">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font26 font_blod color1470cc">发布{{msgarr[msg_status-1]}}</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
  </div>
</template>

<script>
export default {
  name: 'sendMsg',
  data () {
    return {
      // 发布信息，通过接收到的参数判断发布信息类型，1：供应信息；2：采购信息
      msg_status: '',
      // 信息类别数组
      msgarr: this.$store.state.msgarr
    }
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    },
    // 获取需要发布的信息的类别
    getMsgStatus () {
      this.msg_status = this.$route.query.msg_status
    }
  },
  created () {
    // 获取需要发布的信息的类别
    this.getMsgStatus()
  }
}
</script>

<style scoped>
@import "static/css/sendmsg.css";

</style>
