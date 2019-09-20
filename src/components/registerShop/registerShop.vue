<template>
  <div class="container bgeeeeee">
    <!-- 头部 start -->
    <div class="tit bgfff">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font36 font_blod color1470cc">{{userInfo.shopid ? '管理店铺' : '注册店铺'}}</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <!-- 注册信息 start -->
    <div class="register_cont">
      <ul>
        <!-- 店铺名称 start -->
        <li class="register_li bgfff">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺名称：</div>
          <div class="register_val">
            <input type="text" v-model.trim="registerData.name" placeholder="请输入店铺名称">
          </div>
        </li>
        <!-- 店铺名称 end -->
        <!-- 店铺分类 start -->
        <li class="register_li bgfff">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺分类：</div>
          <div class="register_val">
            <div class="categoryimg">
              <img src="static/img/category.png">
            </div>
            <div class="category_box site_box" v-if="classify.length">
              <classify
                :selectArr="classify.slice(1)"
                :searchDataSelect="registerData_classify"
                :selectName="selectNameClassify"
                :titName="titNameClassify"
                @setSelectData="setSearchDataClassify"></classify>
            </div>
          </div>
        </li>
        <!-- 店铺分类 end -->
        <!-- 联系电话 start -->
        <li class="register_li bgfff">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺电话：</div>
          <div class="register_val">
            <input type="text" v-model.number.trim="registerData.phone" placeholder="请输入电话号码">
          </div>
        </li>
        <!-- 联系电话 -->
        <!-- 店铺门脸 start -->
        <li class="register_li bgfff">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺门脸：</div>
          <div class="register_val">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="registerData.image" :src="registerData.image" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon font40 font_blod color999 tc"></i>
            </el-upload>
          </div>
        </li>
        <!-- 店铺门脸 end -->
        <!-- 所在地区 start -->
        <li class="register_li bgfff">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">所在地区：</div>
          <div class="register_val">
            <div class="categoryimg">
              <img src="static/img/category.png">
            </div>
            <div class="site">
              <div @click="choose" class="choose color666">
                <div class="font26">{{registerData.area || '请选择地区'}}</div>
                <img src="static/img/turnup.png" :class="(turnimg ? 'turnimg' : '')">
              </div>
              <p class="pwrap bgfff" v-if="show">
                <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
              </p>
            </div>
          </div>
        </li>
        <!-- 所在地区 end -->
        <!-- 店铺标签 start -->
        <li class="register_li bgfff">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺标签：</div>
          <div class="register_val">
            <textarea cols="30" rows="4" v-model.trim="label" placeholder="请输入店铺标签，两个标签间需用汉语逗号（，）隔开"></textarea>
          </div>
        </li>
        <!-- 店铺标签 end -->
        <!-- 业务介绍 start -->
        <li class="register_li bgfff" style="position: relative;padding-bottom: .8rem;">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">业务介绍：</div>
          <div class="register_val business">
            <v-editor v-model="registerData.business" @textchange="updateContent"></v-editor>
          </div>
          <div class="color999" style="position: absolute;left: 0;bottom: 0;padding: .24rem">请填写您提供的产品和服务，详细的产品介绍和完善的服务有助于提升您的店铺品质。最多可输入1000字符</div>
        </li>
        <!-- 业务介绍 end -->
        <!-- 是否认证 start -->
        <li class="register_li bgfff">
          <div class="tip coloree410c"></div>
          <div class="li_name color333 font_blod">店铺认证：</div>
          <div class="register_val">
            <el-radio v-model="registerData.type" label="1">不认证</el-radio>
            <el-radio v-model="registerData.type" label="2">个人认证</el-radio>
            <el-radio v-model="registerData.type" label="3">企业认证</el-radio>
          </div>
        </li>
        <!-- 是否认证 end -->
        <!-- 购买煤球 start -->
        <li class="register_li bgfff">
          <div class="tip coloree410c"></div>
          <div class="li_name color333 font_blod">购买煤球：</div>
          <div class="register_val2">
            <div class="font28 color666">距头把交椅还差 <span class="font50 font_blod coloree410c">{{userInfo.difference}}</span> 个煤球 </div>
            <div class="pointsAnum">
              今日购买数量：
              <input
                type="text"
                class="font50 font_blod coloree410c"
                v-model.number="registerData.pointsAnum">
              <img src="static/img/pointsA.png" @click="showmsg">
            </div>
          </div>
        </li>
        <!-- 购买煤球 end -->
        <!-- 提示信息 start -->
        <li class="register_li bgfff">
          <div class="color999">
            带<span class="coloree410c">❈</span>为必填项，请认证填写
          </div>
        </li>
        <!-- 提示信息 end -->
      </ul>
    </div>
    <!-- 注册信息 end -->
    <!-- 提交按钮 start -->
    <div class="btn_footer bgeeeeee">
      <div :class="'register_btn nosend_btn tc font26 bgfff' + (send ? ' colorff9500 send_border' : ' color999')" @click="registerSend">发布<span v-if="(goPay > 0)">未支付￥{{goPay}}</span></div>
    </div>
    <!-- 提交按钮 end -->
  </div>
</template>

<script>
import classify from '@/components/common/classify/classify'
import VDistpicker from 'v-distpicker'
import VEditor from '@/components/common/wangeditor/wangeditor'

export default {
  name: 'registerShop',
  data () {
    return {
      // 店铺注册信息
      registerData: {
        // 店铺门脸照片
        image: '',
        // 店铺名字
        name: '',
        // 店铺分类
        classify: 0,
        // 店铺位置
        area: '',
        // 店铺标签
        label: [],
        // 店铺介绍
        business: '',
        // 店铺电话
        phone: '',
        // 认证类型，1：未认证；2：个人认证；3：企业认证
        type: '1',
        // 购买煤球数量，1煤球=1块钱
        pointsAnum: '0'
      },
      // 店铺标签
      label: '',
      // 省市县三级联动显示隐藏
      show: false,
      // 是否发送信息
      send: false,
      // 箭头旋转
      turnimg: false,
      // 认证费用
      pay: {
        // 个人认证金额
        pers: '',
        // 企业认证金额
        company: ''
      },
      // 支付认证费用
      payTotal: '',
      // 店铺分类选择提示
      selectNameClassify: '分类选择',
      // 店铺分类信息标题
      titNameClassify: '店铺分类'
    }
  },
  computed: {
    // 用户信息
    userInfo () {
      return this.$store.state.userInfo
    },
    // 店铺分类
    classify () {
      return this.$store.state.classify
    },
    // 注册类别
    registerData_classify () {
      return this.registerData.classify
    },
    // 认证类型，方便监听
    type () {
      return this.registerData.type
    },
    // 去支付总金额
    goPay () {
      return (parseInt(this.registerData.pointsAnum || 0) + parseInt(this.payTotal || 0)).toFixed(2)
    }
  },
  methods: {
    // 判断是否注册店铺，如已注册则在页面加载前抓取注册信息进行展示
    isRegister () {
      if (this.userInfo.shopid && this.userInfo.shopid !== '0') {
        // this.$axios.get('', this.userInfo.shopid).then(result => {
        //   if (result.data.code === 0) {
        //     this.registerData = result.data.data
        //     this.label = this.registerData.label.join('，')
        //   }
        // })
        this.registerData = {
          // 店铺门脸照片
          image: 'static/img/userimg.png',
          // 店铺名字
          name: '测试',
          // 店铺分类
          classify: 5,
          // 店铺位置
          area: '山西省太原市小店区',
          // 店铺标签
          label: ['123', '456', '789'],
          // 店铺介绍
          business: '111111111111111111111111111111111111111',
          // 店铺电话
          phone: '18888888888',
          // 认证类型，1：未认证；2：个人认证；3：企业认证
          type: '1',
          // 购买煤球数量，1煤球=1块钱
          pointsAnum: '0'
        }
      }
    },
    // 后退
    backs () {
      this.$router.back()
    },
    // 验证是否可以提交信息
    isSend () {
      for (let registerDataKey in this.registerData) {
        if (this.registerData[registerDataKey] === '' || this.registerData.label.length === 0) {
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
    },
    // 图片上传成功后返回图片路径
    handleAvatarSuccess (res, file) {
      this.registerData.image = URL.createObjectURL(file.raw)
    },
    // 图片上传前验证
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
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
    // 获取认证金额
    getPay () {
      // this.$axios.get('').then(result => {
      //   if (result.data.code === 1) {
      //     this.pay = result.data.data
      //   }
      // }).catch(error => {
      //   throw error
      // })
      this.pay = {
        pers: '888',
        company: '1888'
      }
    },
    // 显示煤球提示消息
    showmsg () {
      this.$message({
        message:
        '<div class="color666" style="padding: .1rem">\n' +
        '  <div class="font28 font_blod color1470cc" style="margin: .1rem 0">关于煤球</div>\n' +
        '  <div style="padding: .06rem 0;line-height: 1.5">1.  煤球是一种平台内用于短时间（一天内）提自身排名及等级加速的方式。</div>\n' +
        '  <div style="padding: .06rem 0;line-height: 1.5">2.  煤球需要购买，是一种全平台用户自由竞价的产品。</div>\n' +
        '  <div style="padding: .06rem 0;line-height: 1.5">3.  享受煤球加速的用户，除了提升自然排名，还享有加速图标显示权限。</div>\n' +
        '  <div style="padding: .06rem 0;line-height: 1.5">4.  煤球设计的目的是为短时间有广告需求的用户提供的推广方式，为体现公平，煤球有效期只为一天，而且一天之内只能购买一次（数量由用户自定），因为系统排名时刻变化，用户可以自己判定及其选择该日竞价的煤球数量，系统会自动进行推荐并综合排序。</div>\n' +
        '  <div style="padding: .06rem 0;line-height: 1.5">5.  煤球使用的最终解释权归平台所有。</div>\n' +
        '</div>',
        showClose: true,
        dangerouslyUseHTMLString: true,
        duration: 0
      })
    },
    // 响应数据显示
    updateContent (html) {
      this.registerData.business = html
    },
    // 信息分类发生变化时触发
    setSearchDataClassify (classify) {
      this.registerData.classify = classify
    }
  },
  components: {
    classify,
    VDistpicker,
    VEditor
  },
  watch: {
    // 监听店铺标签变化
    label (newval, oldval) {
      this.registerData.label = newval.split('，')
    },
    // 监听注册信息填写情况
    registerData: {
      handler () {
        this.isSend()
      },
      deep: true
    },
    // 监听认证类型
    type (newval, oldval) {
      if (newval === '1') {
        this.payTotal = ''
      } else if (newval === '2') {
        this.$message('个人认证需支付一次性费用￥' + this.pay.pers)
        this.payTotal = parseInt(this.pay.pers).toFixed(2)
      } else if (newval === '3') {
        this.$message('企业认证需支付一次性费用￥' + this.pay.company)
        this.payTotal = parseInt(this.pay.company).toFixed(2)
      }
    }
  },
  created () {
    // 加载店铺信息
    this.isRegister()
    // 获取认证金额
    this.getPay()
  }
}
</script>

<style scoped>
@import "static/css/registerShop.css";
/* 地区选择样式修改 start */
@media screen and (max-width: 870px)  {
  .site .choose img {
    left: 3.3rem;
  }
}
/* 地区选择样式修改 end */
</style>
