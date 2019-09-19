<template>
  <div class="container bgeeeeee">
    <!-- 头部 start -->
    <div class="tit bgfff">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font36 font_blod color1470cc">我的投诉</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <div class="complaintlist">
      <!-- 投诉列表 start -->
      <ul v-if="complaintList.length">
        <router-link
          class="complaint_li bgfff"
          :to="{name: 'complaint', params: {complaint: item}}"
          tag="li"
          v-for="(item, index) in complaintList"
          :key="index">
          <div class="complaint_name font32 font_blod">投诉原因：{{cause[item.type]}}</div>
          <div class="complaint_time">
            <div>信息编号：{{item.orderid}}</div>
            <div class="color1470cc">投诉时间：{{item.time}}</div>
          </div>
        </router-link>
      </ul>
      <!-- 投诉列表 end -->
      <!-- 无信息提示 start -->
      <div v-else class="nodata msglist">
        <img src="static/img/nodata.png">
      </div>
      <!-- 无信息提示 end -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'complaintList',
  data () {
    return {
      // 投诉原因 1:'已联系，无此货源', 2:'电话号码为空', 3:'其他'
      cause: this.$store.state.cause,
      // 投诉信息列表
      complaintList: [
        // {
        //   // 投诉原因
        //   type: 1,
        //   // 投诉详情
        //   leave: '<p>测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情</p>',
        //   // 投诉时间
        //   time: '2019-08-13 00:00:00',
        //   // 投诉订单编号
        //   orderid: '5-45678913',
        //   // 投诉信息类型 1:求购 2:供应
        //   data: 2
        // }
      ]
    }
  },
  computed: {
    // 获取用户信息
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    },
    // 获取投诉信息列表
    getComplaintList () {
      let _data = {userId: this.userInfo.userId}
      let data = this.$qs.stringify(_data)
      this.$axios.post('Index/index/complainlits', data).then(result => {
        this.complaintList = result.data.data
      }).catch(error => {
        throw error
      })
    }
  },
  created () {
    // 获取投诉信息列表
    this.getComplaintList()
  }
}
</script>

<style scoped>
@import 'static/css/complaintList.css';

</style>
