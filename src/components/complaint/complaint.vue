<template>
  <div class="container">
    <!-- 头部 start -->
    <div class="tit bgfff">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font26 font_blod color1470cc">投诉详情</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <!-- 投诉详情 start -->
    <div class="complaint">
      <ul>
        <!-- 投诉原因 start -->
        <li class="complaint_li">
          <div class="font28 tr">投诉原因：</div>
          <div class="font28">{{cause[complaint.type]}}</div>
        </li>
        <!-- 投诉原因 end -->
        <!-- 信息类型 start -->
        <li class="complaint_li">
          <div class="font28 tr">信息类型：</div>
          <div class="font28">{{msgarr[complaint.data-1]}}信息</div>
        </li>
        <!-- 信息类型 end -->
        <!-- 信息编号 start -->
        <li class="complaint_li">
          <div class="font28 tr">信息编号：</div>
          <div class="font28">{{complaint.orderid}}</div>
        </li>
        <!-- 信息编号 end -->
        <!-- 投诉详情 start -->
        <li class="complaint_li">
          <div class="font28 tr">投诉详情：</div>
          <div class="font28" v-html="complaint.leave">{{complaint.leave}}</div>
        </li>
        <!-- 投诉详情 end -->
        <!-- 投诉时间 start -->
        <li class="complaint_li">
          <div class="font28 tr">投诉时间：</div>
          <div class="font28">{{complaint.time}}</div>
        </li>
        <!-- 投诉时间 end -->
      </ul>
    </div>
    <!-- 投诉详情 end -->
  </div>
</template>

<script>
export default {
  name: 'complaint',
  data () {
    return {
      // 投诉原因 1:'已联系，无此货源', 2:'电话号码为空', 3:'其他'
      cause: this.$store.state.cause,
      // 投诉信息类别
      msgarr: this.$store.state.msgarr,
      // 投诉详情
      complaint: this.$route.params.complaint
    }
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
@import "static/css/complaint.css";
</style>
