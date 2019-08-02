<template>
  <div class="container">
    <!-- 头部 start -->
    <div class="tit">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font26 font_blod color1470cc">注册店铺</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <!-- 注册信息 start -->
    <div class="register_cont">
      <ul>
        <!-- 店铺名称 start -->
        <li class="register_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺名称：</div>
          <div class="register_val">
            <input type="text" v-model.trim="registerData.name" placeholder="请输入店铺名称">
          </div>
        </li>
        <!-- 店铺名称 end -->
        <!-- 店铺分类 start -->
        <li class="register_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺分类：</div>
          <div class="register_val">
            <div class="categoryimg">
              <img src="static/img/category.png">
            </div>
            <el-select v-model="registerData.category" placeholder="请选择店铺分类">
              <el-option
                v-for="(item, index) in category"
                :key="index"
                :label="item"
                :value="index">
              </el-option>
            </el-select>
          </div>
        </li>
        <!-- 店铺分类 end -->
        <!-- 联系电话 start -->
        <li class="register_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺电话：</div>
          <div class="register_val">
            <input type="number" v-model.number.trim="registerData.phone" placeholder="请输入电话号码">
          </div>
        </li>
        <!-- 联系电话 -->
        <!-- 店铺门脸 start -->
        <li class="register_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺门脸：</div>
          <div class="register_val">
            <el-upload
              class="avatar-uploader"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="registerData.img" :src="registerData.img" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon font40 font_blod color999 tc"></i>
            </el-upload>
          </div>
        </li>
        <!-- 店铺门脸 end -->
        <!-- 所在地区 start -->
        <li class="register_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">所在地区：</div>
          <div class="register_val">
            <div class="categoryimg">
              <img src="static/img/category.png">
            </div>
            <select class="bgfff color666" title="请选择所在地区" v-model="registerData.area">
              <option value="0" selected>请选择所在地区</option>
            </select>
          </div>
        </li>
        <!-- 所在地区 end -->
        <!-- 店铺标签 start -->
        <li class="register_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺标签：</div>
          <div class="register_val">
            <textarea cols="30" rows="4" v-model.trim="tags" placeholder="请输入店铺标签，两个标签间需用汉语逗号（，）隔开"></textarea>
          </div>
        </li>
        <!-- 店铺标签 end -->
        <!-- 业务介绍 start -->
        <li class="register_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">业务介绍：</div>
          <div class="register_val">
            <textarea cols="30" rows="8" v-model.trim="registerData.des" placeholder="请填写您提供的产品和服务，详细的产品介绍和完善的服务有助于提升您的店铺品质。最多可输入1000字符"></textarea>
          </div>
        </li>
        <!-- 业务介绍 end -->
        <!-- 是否认证 start -->
        <li class="register_li">
          <div class="tip coloree410c">❈</div>
          <div class="li_name color333 font_blod">店铺认证：</div>
          <div class="register_val">
            <el-radio v-model="registerData.authentication" label="1">不认证</el-radio>
            <el-radio v-model="registerData.authentication" label="2">认证</el-radio>
          </div>
        </li>
        <!-- 是否认证 end -->
      </ul>
      <div class="color999">
        带<span class="coloree410c">❈</span>为必填项，请认证填写
      </div>
    </div>
    <!-- 注册信息 end -->
    <!-- 提交按钮 start -->
    <div class="register_btn bge7e7e7 colorff9500 tc font_blod font26" @click="registerSend">注册</div>
    <!-- 提交按钮 end -->
  </div>
</template>

<script>
export default {
  name: 'registerShop',
  data () {
    return {
      // 用户信息
      userInfo: this.$store.state.userInfo,
      // 店铺注册信息
      registerData: {
        // img: '',
        name: '',
        category: '',
        // area: '',
        tags: [],
        des: '',
        phone: '',
        authentication: '1'
      },
      // 店铺标签
      tags: ''
    }
  },
  computed: {
    // 店铺分类
    category () {
      return this.$store.state.category
    }
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    },
    // 发送注册信息
    registerSend () {
      for (let registerDataKey in this.registerData) {
        console.log(this.registerData.tags === '')
        if (this.registerData[registerDataKey] === '' || this.registerData.tags.length === 0) {
          return
        }
        // this.$axios.post('', this.registerData).then(result => {
        //   if (result.data.code === 0) {
        //     this.$message.error(result.data.msg)
        //   } else if (result.data.code === 1) {
        //     let _this = this
        //     this.$message.success({
        //       message: result.data.msg,
        //       onClose () {
        //         _this.$router.push({name: 'shopInfo', params: {userId: this.userInfo.userId}})
        //       }
        //     })
        //   }
        // }).catch(error => {
        //   throw error
        // })
      }
    },
    // 图片上传成功后返回图片路径
    handleAvatarSuccess (res, file) {
      this.registerData.img = URL.createObjectURL(file.raw)
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
    }
  },
  watch: {
    // 监听店铺标签变化
    tags (newval, oldval) {
      this.registerData.tags = newval.split('，')
    }
  }
}
</script>

<style scoped>
@import "static/css/registerShop.css";
</style>
