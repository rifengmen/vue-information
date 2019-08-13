<template>
  <div class="container">
    <!-- 头部 start -->
    <div class="tit">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font26 font_blod color1470cc">发布{{msgarr[registerData.msg_status-1]}}</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <!-- 发布内容 start -->
    <div class="send_cont">
      <ul>
        <!-- 地区选择 start -->
        <li class="send_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name font28">产地：</div>
          <div class="send_val site_box">
            <div class="site">
              <div @click="choose" class="choose tc color666">
                <div class="font26">{{registerData.area || '请选择地区'}}</div>
                <img src="static/img/turnup.png" :class="(turnimg ? 'turnimg' : '')">
              </div>
              <p class="pwrap bgfff" v-if="show">
                <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
              </p>
            </div>
          </div>
        </li>
        <!-- 地区选择 end -->
        <!-- 分类选择 start -->
        <li class="send_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name font28">分类：</div>
          <div class="send_val">
            <el-cascader
              v-model="registerData.classifymsg"
              :options="classifymsg.slice(1)"
              @change="handleChange"></el-cascader>
          </div>
        </li>
        <!-- 分类选择 end -->
        <!-- 联系电话 start -->
        <li class="send_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name font28">联系电话：</div>
          <div class="send_val">
            <input type="number" v-model.number="registerData.phone" placeholder="请填写你的手机号码">
          </div>
        </li>
        <!-- 联系电话 end -->
        <!-- 数量 start -->
        <li class="send_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name font28">数量：</div>
          <div  class="send_val">
            <input type="number" v-model.number="registerData.num" placeholder="请填写数量">
          </div>
        </li>
        <!-- 数量 end -->
        <!-- 留言 start -->
        <li class="send_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name font28">留言：</div>
          <div class="send_val">
            <v-editor v-model="registerData.business" @textchange="updateContent"></v-editor>
          </div>
        </li>
        <!-- 留言 end -->
        <!-- 提示信息 start -->
        <li class="send_li">
          <div class="color999">
            带<span class="coloree410c">❈</span>为必填项，请认证填写
          </div>
        </li>
        <!-- 提示信息 end -->
      </ul>
    </div>
    <!-- 发布内容 end -->
    <!-- 提交按钮 start -->
    <div :class="'register_btn tc font_blod font36' + (send ? ' bgfff colorff9500' : ' bge7e7e7 color999')" @click="registerSend">发布</div>
    <!-- 提交按钮 end -->
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import VEditor from '@/components/common/wangeditor/wangeditor'

export default {
  name: 'sendMsg',
  data () {
    return {
      // 信息类别数组
      msgarr: this.$store.state.msgarr,
      // 发布信息
      registerData: {
        // 发布信息，通过接收到的参数判断发布信息类型，1：采购信息；2：供应信息
        msg_status: '',
        // 信息分类
        classifymsg: '',
        // 产地
        area: '',
        // 信息详情
        business: '请填写您想发布的内容。最多可输入1000字符',
        // 联系电话
        phone: '',
        // 数量
        num: ''
      },
      // 省市县三级联动显示隐藏
      show: false,
      // 箭头旋转
      turnimg: false,
      // 是否发送信息
      send: false
    }
  },
  computed: {
    // 信息分类
    classifymsg () {
      return this.$store.state.classifymsg
    }
  },
  components: {
    VDistpicker,
    VEditor
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    },
    // 获取需要发布的信息的类别
    getMsgStatus () {
      this.registerData.msg_status = this.$route.query.msg_status
    },
    // 显示隐藏省市县下拉框
    choose () {
      this.show = !this.show
      this.turnimg = !this.turnimg
    },
    // 省市县三级联动
    onSelected (data) {
      this.registerData.area = data.province.value + data.city.value + data.area.value
      this.show = false
      this.turnimg = false
    },
    // 信息分类发生变化时触发
    handleChange (value) {
      this.registerData.classifymsg = value[value.length - 1 || 0]
    },
    // 响应数据显示
    updateContent (html) {
      this.registerData.business = html
    },
    // 验证是否可以提交信息
    isSend () {
      for (let registerDataKey in this.registerData) {
        if (this.registerData[registerDataKey] === '') {
          this.send = false
          return
        }
        this.send = true
      }
    },
    // 提交信息
    registerSend () {
      if (this.send) {
        // this.$axios.post('', this.registerData).then(result => {
        //   if (result.data.code === 0) {
        //     let _this = this
        //     this.$message.success({
        //       message: result.data.msg,
        //       onClose () {
        //         _this.$router.push({name: 'index'})
        //       }
        //     })
        //   }
        // }).catch(error => {
        //   throw error
        // })
      }
      console.log(this.registerData)
    }
  },
  watch: {
    // 监听注册信息填写情况
    registerData: {
      handler () {
        this.isSend()
      },
      deep: true
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
