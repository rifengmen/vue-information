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
          <div class="font28">
            <el-select v-model="complaintData.type" placeholder="请选择投诉原因">
              <el-option
                v-for="(item, index) in cause"
                :key="index"
                :label="item"
                :value="index">
              </el-option>
            </el-select>
          </div>
        </li>
        <!-- 投诉原因 end -->
        <!-- 信息类型 start -->
        <li class="complaint_li">
          <div class="font28 tr">信息类型：</div>
          <div class="font28">{{msgarr[msgDetail.data-1]}}信息</div>
        </li>
        <!-- 信息类型 end -->
        <!-- 信息编号 start -->
        <li class="complaint_li">
          <div class="font28 tr">信息编号：</div>
          <div class="font28">{{msgDetail.orderid}}</div>
        </li>
        <!-- 信息编号 end -->
        <!-- 投诉详情 start -->
        <li class="complaint_li" style="position: relative;padding-bottom: .8rem;">
          <div class="font28 tr">投诉详情：</div>
          <div class="complaint_val">
            <v-editor v-model="complaintData.leave" @textchange="updateContent"></v-editor>
          </div>
          <div class="color999" style="position: absolute;left: 0;bottom: 0;padding: .24rem;">请对投诉内容进行详细描述。最多可输入1000字符</div>
        </li>
        <!-- 投诉详情 end -->
      </ul>
    </div>
    <!-- 投诉详情 end -->
    <!-- 提交按钮 start -->
    <div :class="'complaint_btn tc font_blod font36' + (send ? ' bgfff colorff9500' : ' bgeeeeee color999')" @click="complaintSend">发布</div>
    <!-- 提交按钮 end -->
  </div>
</template>

<script>
import VEditor from '@/components/common/wangeditor/wangeditor'
export default {
  name: 'sendComplaint',
  data () {
    return {
      // 投诉原因 1:'已联系，无此货源', 2:'电话号码为空', 3:'其他'
      cause: this.$store.state.cause,
      // 投诉信息类别
      msgarr: this.$store.state.msgarr,
      // 信息详情
      msgDetail: this.$route.params.msgDetail,
      // 投诉内容
      complaintData: {
        // 投诉原因
        type: '',
        // 投诉详情
        leave: '',
        // 投诉订单编号
        orderid: '',
        // 投诉信息类型 1:求购 2:供应
        data: '',
        // 投诉用户id
        userId: '',
        // 投诉信息id
        shopid: ''
      },
      // 是否发送信息
      send: false
    }
  },
  computed: {
    // 用户信息
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  components: {
    VEditor
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    },
    // 设置投诉信息
    setComplaintData () {
      this.complaintData.orderid = this.msgDetail.orderid
      this.complaintData.data = this.msgDetail.data
      this.complaintData.userId = this.userInfo.userId
      this.complaintData.shopid = this.msgDetail.id
    },
    // 响应数据显示
    updateContent (html) {
      this.complaintData.leave = html
    },
    // 验证是否可以提交信息
    isSend () {
      for (let complaintDataKey in this.complaintData) {
        if (this.complaintData[complaintDataKey] === '' || this.complaintData.type === 0) {
          this.send = false
          return
        }
        this.send = true
      }
    },
    // 提交信息
    complaintSend () {
      if (this.send) {
        let data = this.$qs.stringify(this.complaintData)
        this.$axios.post('Index/index/complainadd', data).then(result => {
          if (result.data.code === 0) {
            let _this = this
            this.$message.success({
              message: result.data.msg,
              onClose () {
                _this.$router.push({name: 'userInfo'})
              }
            })
          }
        }).catch(error => {
          throw error
        })
      }
    }
  },
  watch: {
    // 监听投诉信息填写情况
    complaintData: {
      handler () {
        this.isSend()
      },
      deep: true
    }
  },
  created () {
    // 设置投诉信息
    this.setComplaintData()
  }
}
</script>

<style scoped>
@import "static/css/sendComplaint.css";
</style>
