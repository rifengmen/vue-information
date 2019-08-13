<template>
  <div class="container">
    <!-- 头部 start -->
    <div class="tit bgfff">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font26 font_blod color1470cc">我的投诉</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <div>
      <!-- 投诉列表 start -->
      <ul v-if="complaintList.length">
        <router-link :to="{}" tag="li" v-for="(item, index) in complaintList" :key="index">
          <div>{{item.cause}}</div>
          <div>{{item.leave}}</div>
          <div>{{item.time}}</div>
        </router-link>
      </ul>
      <!-- 投诉列表 end -->
      <!-- 无信息提示 start -->
      <div v-else class="nodata msglist">
        <img src="static/img/nodata.jpg">
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
      // 投诉信息列表
      complaintList: [
        {
          // 投诉原因
          cause: '测试投诉原因1',
          // 投诉详情
          leave: '<p>测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情</p>',
          // 投诉时间
          time: '2019-08-13 00:00:00'
        },
        {
          // 投诉原因
          cause: '测试投诉原因2',
          // 投诉详情
          leave: '<p>测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情</p>',
          // 投诉时间
          time: '2019-08-13 00:00:00'
        },
        {
          // 投诉原因
          cause: '测试投诉原因3',
          // 投诉详情
          leave: '<p>测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情测试投诉详情</p>',
          // 投诉时间
          time: '2019-08-13 00:00:00'
        }
      ]
    }
  },
  computed: {
    // 获取用户信息
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  components: {
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    },
    // 获取投诉信息列表
    getComplaintList () {
      // this.$axios.post('', this.userInfo.userid).then(result => {
      //   this.complaintList = result.data.data
      // }).catch(error => {
      //   throw error
      // })
    }
  },
  created () {
    // 获取投诉信息列表
    this.getComplaintList()
  }
}
</script>

<style scoped>

</style>
