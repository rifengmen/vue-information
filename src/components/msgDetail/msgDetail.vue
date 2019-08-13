<template>
  <div class="cont bge7e7e7">
    <!-- 头部 start -->
    <div class="tit bgfff">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font26 font_blod color1470cc">{{msgarr[msgDetail.data-1]}}详情</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <!-- 信息详情 start -->
    <div class="container msgarea bgfff">
      <div class="msg_li">
        <div>
          <div class="font40 font_blod tr">分类：</div>
          <div class="font40 font_blod">{{msgDetail.classify}}</div>
        </div>
        <div>
          <div class="font40 font_blod tr">产地：</div>
          <div class="font40 font_blod">{{msgDetail.area}}</div>
        </div>
      </div>
      <div class="msg_li">
        <div>
          <div class="font40 font_blod tr">留言：</div>
          <div v-html="msgDetail.leave">{{msgDetail.leave}}</div>
        </div>
      </div>
    </div>
    <!-- 信息详情 end -->
    <!-- 信息编号 start -->
    <div class="msg_li msgcode bgfff">
      <div>
        <div class="font28 color666 tr">订单号：</div>
        <div class="font28 color666">5-164554644(暂无)</div>
      </div>
      <div>
        <div class="font28 color666 tr">发布时间：</div>
        <div class="font28 color666">{{msgDetail.time}}</div>
      </div>
    </div>
    <!-- 信息编号 end -->
    <!-- 免责 投诉 start -->
    <div class="tip_complaint container">
      <tip></tip>
      <router-link :to="{name: 'sendComplaint'}" tag="div" class="complaint bgfff colorff9500">投诉</router-link>
    </div>
    <!-- 免责 投诉 end -->
  </div>
</template>

<script>
// 引入免责声明组件
import tip from '@/components/common/tip/tip'

export default {
  name: 'msgDetail',
  data () {
    return {
      // 信息详情
      msgDetail: this.$route.query.msgDetail,
      // 信息类别数组
      msgarr: this.$store.state.msgarr
    }
  },
  components: {
    tip
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    }
  },
  created () {
  }
}
</script>

<style scoped>
@import "static/css/msgDetail.css";

</style>
