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
            <select class="bgfff color666" title="请选择店铺分类" v-model="registerData.category">
              <option value="0" selected>请选择店铺分类</option>
              <option :value="index+1" v-for="(item, index) in category" :key="index+1">{{item}}</option>
            </select>
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
            <img :src="registerData.img">
            <input type="text" v-model="registerData.img" placeholder="请上传店铺门脸">
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
        img: '',
        name: '',
        category: '',
        area: '',
        tags: [],
        des: '',
        phone: ''
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
        console.log(registerDataKey)
      }
      console.log(this.registerData, 2)
      // this.$axios.post('', this.registerData).then(result => {
      //   if (result.data.code === 0) {
      //     alert(result.data.msg)
      //   } else if (result.data.code === 1) {
      //     alert(result.data.msg)
      //     this.$router.push({name: 'shopInfo', params: {userId: this.userInfo.userId}})
      //   }
      // }).catch(error => {
      //   throw error
      // })
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
