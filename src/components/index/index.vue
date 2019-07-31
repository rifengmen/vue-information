<template>
  <div class="container">
    <!-- 用户信息 start -->
    <div class="userinfo">
      <div class="user fl">
        <router-link tag="div" class="userimg fl" to="/userInfo/userInfo">
          <img :src="(userInfo.pic || './static/images/userimg.png')">
        </router-link>
        <div class="username font34 font_blod color1470cc fl">
          <router-link tag="span" class="username" v-if="userInfo.username" to="/userInfo/userInfo">{{userInfo.username}}</router-link>
          <router-link tag="span" class="username" v-else to="/login/login">{{'请登录'}}</router-link>
        </div>
      </div>
      <router-link tag="div" class="shopbtn fr font26 colorff9500 bgfff tc" v-if="userInfo.username" to="(isSetShop ? '/shopInfo/shopInfo' : '/registerShop/registerShop')">{{isSetShop ? "进入店铺" : "开设店铺"}}</router-link>
    </div>
    <!-- 用户信息 end -->
    <!-- 搜索 start -->
    <div class="search_cont color666 font26">
      <div class="category">
        <select class="selected_options fl tc">
          <option value="0">店铺分类▽</option>
          <option :value="index" v-for="(item, index) in category" :key="index">{{item}}</option>
        </select>
        <select class="selected_options fl tc">
          <option value="0">所在地区▽</option>
        </select>
        <select class="selected_options fl tc">
          <option value="0">排序方式▽</option>
          <option :value="index" v-for="(item, index) in sort" :key="index">{{item}}</option>
        </select>
      </div>
      <div class="search">
        <div class="search_input fl">
          <input type="text" v-model="search_val" placeholder="请输入标签进行搜索" class="fl" />
          <img src="./static/images/search.png" class="fr">
        </div>
        <button class="search_btn font26 fr colorff9500 bgfff">搜索</button>
      </div>
    </div>
    <!-- 搜索 end -->
    <!--&lt;!&ndash; 店铺列表 start &ndash;&gt;-->
    <!--<ul class="shopslist">-->
      <!--&lt;!&ndash; 店铺简介 start &ndash;&gt;-->
      <!--<li v-for="(item, index) in shopsList" :key="index">-->
        <!--<a class="shopinfo" url="/pages/shopInfo/shopInfo">-->
          <!--<div class="shoptit">-->
            <!--<div class="shopimg fl">-->
              <!--<img class="img" src="{{item.img}}">-->
            <!--</div>-->
            <!--<div class="shopname fr color666">-->
              <!--<div class="vip_name">-->
                <!--<img class="vipclass fl" v-if="vipClass[item.vip]" :src="vipClass[item.vip]">-->
                <!--<div class="name font30 color333 ellipsis fl">{{item.name}}</div>-->
              <!--</div>-->
              <!--<div class="shopcategory font24 colorfff bg1470cc">{{categoryArray[item.category]}}</div>-->
              <!--<div class="area_box">-->
                <!--<img class="area" src="//images/area.png">-->
                <!--<span class="font26">{{item.area}}</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="shoptags">-->
            <!--&lt;!&ndash; 店铺标签 start &ndash;&gt;-->
            <!--<span v-for="(tag, tIndex) in item.tags" :key="tIndex" class="tags font24 color333 bgcecece">{{tag}}</span>-->
            <!--&lt;!&ndash; 店铺标签 end &ndash;&gt;-->
          <!--</div>-->
          <!--<div class="shopdes">-->
            <!--<view class="font28 color666 ellipsis">{{item.des}}</view>-->
          <!--</div>-->
        <!--</a>-->
      <!--</li>-->
      <!--&lt;!&ndash; 店铺简介 end &ndash;&gt;-->
    <!--</ul>-->
    <!--&lt;!&ndash; 店铺列表 end &ndash;&gt;-->
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        // 用户信息
        userInfo: this.$store.state.userInfo,
        // 是否已注册商铺
        isSetShop: false,
        // 店铺分类
        category: ['测试分类1', '测试分类2', '测试分类3', '测试分类4', '测试分类5', '测试分类6'],
        // 搜索内容
        search_val: '',
        // 排序方式
        sort: ['时间排序', '名称排序', '**排序']
      }
    },
    methods: {
      // 测试请求路径  /construction/login/vueTest

      // // 获取用户商铺注册信息
      // getIsSetShop() {
      //   this.$axios.get('').then(result => {
      //     if (result.data.code === 0) {
      //       this.isSetShop = false
      //     } else if (result.data.code === 1) {
      //       this.isSetShop = true
      //     }
      //   }).catch(error => {
      //     throw error
      //   })
      // },

      // // 获取店铺分类
      // getCategory() {
      //   this.$axios.get('').then(result => {
      //     if (result.data.code === 0) {
      //     } else if (result.data.code === 1) {
      //       this.category = result.data.data
      //     }
      //   }).catch(error => {
      //     throw error
      //   })
      // },


    },
    created() {
      this.getIsSetShop();
    }
  }
</script>

<style scoped>

  @import "./static/css/index.css";

</style>
