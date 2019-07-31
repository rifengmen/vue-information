<template>
  <!--<div>-->
    <!--<div class="city" @click="toAddress">{{city}}</div>-->
    <!--<v-distpicker type="mobile" @selected='selected' v-show="addInp"></v-distpicker>-->
  <!--</div>-->
  <div class="container">
    <!-- 用户信息 start -->
    <div class="userinfo">
      <router-link class="user fl" to="/userInfo/userInfo">
        <div class="userimg fl">
          <img :src="(userInfo.pic || './static/images/userimg.png')">
        </div>
        <div class="username fl">
          <span class="font34 font_blod color1470cc">{{userInfo.username || '请登录'}}</span>
        </div>
      </router-link>
      <router-link class="shopbtn fr font26 colorff9500 bgfff tc" v-if="userInfo.username" to="(isSetShop ? '/shopInfo/shopInfo' : '/registerShop/registerShop')">{{isSetShop ? "进入店铺" : "开设店铺"}}</router-link>
    </div>
    <!-- 用户信息 end -->
    <!--&lt;!&ndash; 搜索 start &ndash;&gt;-->
    <!--<div class="search_cont color666 font26">-->
      <!--<div class="category">-->
        <!--<select bindchange="categoryChange" value="{{categoryIndex}}" range="{{categoryArray}}" class="selected_options fl tc">店铺分类▽</select>-->
        <!--<select mode="region" bindchange="regionChange" value="{{region}}" custom-item="{{customItem}}" class="selected_options fl tc">所在地区▽</select>-->
        <!--<select bindchange="sortChange" value="{{sortIndex}}" range="{{sortArray}}" class="selected_options fl tc">排序方式▽</select>-->
      <!--</div>-->
      <!--<div class="search">-->
        <!--<div class="search_input fl">-->
          <!--<input type="text" bindinput="getSearchVal" placeholder="请输入标签进行搜索" class="fl" />-->
          <!--<img src="//images/search.png" class="fr">-->
        <!--</div>-->
        <!--<button class="search_btn font26 fr colorff9500" disabled="{{search_val==='' ? true : false}}">搜索</button>-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash; 搜索 end &ndash;&gt;-->
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
  import VDistpicker from 'v-distpicker';
  export default {
    name: 'index',
    components: {
      VDistpicker
    },
    data() {
      return {
        city: '请选择',
        addInp: false,
        // 用户信息
        userInfo: this.$store.state.userInfo,
        // 是否已注册商铺
        isSetShop: false,
      }
    },
    methods: {
      // 获取用户商铺注册信息
      getIsSetShop() {
        this.$axios.get('/construction/login/vueTest').then(result => {
          console.log(result)
          // if (result.data.code === 0) {
          //   this.isSetShop = false
          // } else if (result.data.code === 1) {
          //   this.isSetShop = true
          // }
        }).catch(error => {
          throw error
        })
      },
      // 省市县三级联动
      selected(data){
        this.addInp = false;
        this.city = data.province.value + ' ' + data.city.value + ' ' + data.area.value;
      },
      // 选择地区
      toAddress() {
        this.addInp = true;
      }
    },
    created() {
      this.getIsSetShop();
    }
  }
</script>

<style scoped>

  @import "./static/css/index.css";

</style>
