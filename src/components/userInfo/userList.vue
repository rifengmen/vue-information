<template>
  <div class="container">
    <!-- 头部 start -->
    <div class="tit">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font26 font_blod color1470cc">{{userarr[searchData.msg_status - 1]}}</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <div class="userlist">
      <my-scrollmsg
        :msgList="msgList"
        :loadText="loadText"
        @pullingDown="_getMsgList"
        @pullingup="getMoreMsgList">
      </my-scrollmsg>
    </div>
  </div>
</template>

<script>
import MyScrollmsg from '@/components/common/myscrollmsg/myscrollmsg'

export default {
  name: 'userList',
  data () {
    return {
      // 我的列表名称
      userarr: ['我的求购', '我的供应'],
      // 下拉刷新
      isShowLoading: true,
      // 筛选条件
      searchData: {
        // 供应、求购状态
        msg_status: this.$route.params.msg_status || this.$store.state.msg_status,
        // 信息分类
        classifymsg: 0,
        // 地区查询
        area: '',
        // 页码
        page: '1'
      },
      // 总页数
      total: '0',
      // 信息列表
      msgList: [
        {
          // // 信息类别，1：求购，2：供应
          // msg_status: 1,
          // // 信息分类所属
          // classifymsg: ['测试信息分类1-2', '测试信息分类1-5'],
          // // 信息地区
          // area: '测试城市1',
          // // 信息详情
          // leave: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          // // 信息编号
          // orderid: '5-258741',
          // // 发布时间
          // time: '2019-08-06 06:44:25',
          // // 联系电话
          // phone: '18888888888'
        }
      ],
      // 加载提示语
      loadText: '加载更多...'
    }
  },
  components: {
    MyScrollmsg
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    },
    // 设置供应、求购状态
    setMsgStatus () {
      this.$store.commit('setMsgStatus', this.searchData.msg_status)
    },
    // 获取信息列表资料公共方法
    getMsgList () {
      this.searchData.page = '1'
      this.isShowLoading = true
      let senddata = {
        userid: this.$store.state.userInfo.userid,
        data: this.searchData.msg_status,
        search: this.searchData.classifymsg === 0 ? '' : this.searchData.classifymsg,
        site: this.searchData.area,
        page: this.searchData.page
      }
      let data = this.$qs.stringify(senddata)
      this.$axios.post('Index/index/askbuy', data).then(result => {
        this.$store.commit('setIsPullingDown', true)
        if (result.data.code === 0) {
          this.isShowLoading = false
          this.msgList = result.data.data.data
          this.total = result.data.data.last_page
        }
      }).catch(error => {
        throw error
      })
      this.$store.commit('setIsPullingDown', true)
    },
    // 下拉刷新
    _getMsgList () {
      if (this.searchData.area !== '') {
        this.searchData.area = ''
      } else {
        this.getMsgList()
      }
    },
    // 上拉加载更多
    getMoreMsgList () {
      this.searchData.page++
      let currentpage = this.searchData.page
      let total = this.total
      let senddata = {
        userid: this.$store.state.userInfo.userid,
        data: this.searchData.msg_status,
        search: this.searchData.classifymsg === 0 ? '' : this.searchData.classifymsg,
        site: this.searchData.area,
        page: this.searchData.page
      }
      let data = this.$qs.stringify(senddata)
      if (currentpage > total) {
        this.loadText = '暂无更多数据'
      } else {
        this.$axios.post('Index/index/askbuy', data).then(result => {
          this.$store.commit('setIsPullingUp', true)
          if (result.data.code === 0) {
            this.isShowLoading = false
            this.msgList.push(...result.data.data.data)
          }
        }).catch(error => {
          throw error
        })
      }
      this.$store.commit('setIsPullingUp', true)
    }
  },
  created () {
    this.setMsgStatus()
    this.getMsgList()
  }
}
</script>

<style scoped>
@import "static/css/userInfo.css";

</style>
