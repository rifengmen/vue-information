<template>
  <div class="container bgeeeeee">
    <!-- 头部 start -->
    <div class="tit bgfff">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font36 font_blod color1470cc">发布{{msgarr[registerData.msg_status-1]}}</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <!-- 发布内容 start -->
    <div class="send_cont">
      <ul>
        <!-- 地区选择 start -->
        <li class="send_li bgfff">
          <div class="tip coloree410c">❈</div>
          <div class="li_name font28">产地：</div>
          <div class="send_val site_box">
            <div class="site">
              <div @click="choose" class="choose color666">
                <div class="font26">{{registerData.area || '地区选择'}}</div>
                <img src="static/img/turnup.png" :class="(turnimg ? 'turnimg' : '_turnimg')">
              </div>
              <p class="pwrap bgfff" v-if="show">
                <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
              </p>
            </div>
          </div>
        </li>
        <!-- 地区选择 end -->
        <!-- 分类选择 start -->
        <li class="send_li bgfff">
          <div class="tip coloree410c">❈</div>
          <div class="li_name font28">分类：</div>
          <div class="send_val">
            <div class="category_box site_box" v-if="classifymsg.length">
              <classify
                :selectArr="classifymsg.slice(1)"
                :searchDataSelect="registerData_classifymsg"
                :selectName="selectNameClassifymsg"
                :titName="titNameClassifymsg"
                @setSelectData="setSearchDataClassifymsg"></classify>
            </div>
          </div>
        </li>
        <!-- 分类选择 end -->
        <!-- 联系电话 start -->
        <li class="send_li bgfff">
          <div class="tip coloree410c">❈</div>
          <div class="li_name font28">联系电话：</div>
          <div class="send_val">
            <input type="text" v-model.number="registerData.phone" placeholder="请填写你的手机号码">
          </div>
        </li>
        <!-- 联系电话 end -->
        <!-- 留言 start -->
        <li class="send_li bgfff" style="position: relative;padding-bottom: .8rem;">
          <div class="tip coloree410c">❈</div>
          <div class="li_name font28">留言：</div>
          <div class="send_val">
            <v-editor v-model="registerData.business" @textchange="updateContent"></v-editor>
          </div>
          <div class="color999" style="position: absolute;left: 0;bottom: 0;padding: .24rem">请填写您想发布的内容。最多可输入1000字符</div>
        </li>
        <!-- 留言 end -->
        <!-- 提示信息 start -->
        <li class="send_li bgfff">
          <div class="color999">
            带<span class="coloree410c">❈</span>为必填项，请认证填写
          </div>
        </li>
        <!-- 提示信息 end -->
      </ul>
    </div>
    <!-- 发布内容 end -->
    <!-- 提交按钮 start -->
    <div class="btn_footer bgeeeeee">
      <div :class="'register_btn nosend_btn tc font26 bgfff' + (send ? ' colorff9500 send_border' : ' color999')" @click="registerSend">发布</div>
    </div>
    <!-- 提交按钮 end -->
  </div>
</template>

<script>
import classify from '@/components/common/classify/classify'
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
        classifymsg: 0,
        // 产地
        area: '',
        // 信息详情
        business: '',
        // 联系电话
        phone: ''
      },
      // 省市县三级联动显示隐藏
      show: false,
      // 箭头旋转
      turnimg: false,
      // 是否发送信息
      send: false,
      // 信息分类选择提示
      selectNameClassifymsg: '分类选择',
      // 信息分类信息标题
      titNameClassifymsg: '信息分类'
    }
  },
  computed: {
    // 发布类别
    registerData_classifymsg () {
      return this.registerData.classifymsg
    },
    // 信息分类
    classifymsg () {
      return this.$store.state.classifymsg
    },
    // 用户信息
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  components: {
    classify,
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
    // 设置信息分类
    setClassifymsg () {
      this.$axios.post('Index/index/classify').then(result => {
        let data = result.data.data
        let arr = []
        arr[0] = {'value': 0, 'label': '全部分类'}
        if (data) {
          for (let i = 0; i < data.length; i++) {
            let _arr = {}
            _arr['value'] = data[i].id
            _arr['label'] = data[i].name
            if (data[i].children) {
              _arr['children'] = []
              let v = data[i].children
              for (let j = 0; j < v.length; j++) {
                let _v = {}
                _v['value'] = v[j].id
                _v['label'] = v[j].name
                _arr['children'].push(_v)
              }
            }
            arr.push(_arr)
          }
        }
        this.$store.commit('setClassifymsg', arr)
      }).catch(error => {
        throw error
      })
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
    setSearchDataClassifymsg (classifymsg) {
      this.registerData.classifymsg = classifymsg
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
        let _data = {
          data: this.registerData.msg_status,
          area: this.registerData.area,
          classify: this.registerData.classifymsg,
          leave: this.registerData.business,
          userId: this.userInfo.userId,
          phone: this.registerData.phone
        }
        let data = this.$qs.stringify(_data)
        this.$axios.post('Index/index/askbuyadd', data).then(result => {
          if (result.data.code === 0) {
            let _this = this
            this.$message.success({
              message: result.data.msg,
              onClose () {
                _this.$router.push({name: 'index'})
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
    // 设置信息分类
    this.setClassifymsg()
  }
}
</script>

<style scoped>
@import "static/css/sendmsg.css";
/* 地区选择样式修改 start */
@media screen and (max-width: 870px)  {
  .site .choose img {
    left: 3.45rem;
  }
}
/* 地区选择样式修改 end */
</style>
