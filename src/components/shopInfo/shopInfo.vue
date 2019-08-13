<template>
  <div class="container">
    <!-- 头部 start -->
    <div class="tit">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font26 font_blod color1470cc">店铺详情</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
    <!-- 店铺信息 start -->
    <div class="shopinfo">
      <ul>
        <!-- 店铺门头照片 start -->
        <li class="shopinfo_li">
          <div class="shopimg_box">
            <div class="shopimg">
              <img :src="shopInfo.image">
            </div>
            <div class="vip" v-if="vipClass[shopInfo.vipnum]">
              <img :src="vipClass[shopInfo.vipnum]">
            </div>
          </div>
          <div class="update tr color666">
            <span>{{shopInfo.time}}  更新</span>
          </div>
        </li>
        <!-- 店铺门头照片 end -->
        <!-- 店铺名称 start -->
        <li class="shopinfo_li">
          <div class="font_blod">店铺名称：</div>
          <div class="font30">{{shopInfo.name}}</div>
        </li>
        <!-- 店铺名称 end -->
        <!-- 店铺分类 start -->
        <li class="shopinfo_li">
          <div class="font_blod">店铺分类：</div>
          <div class="font30">{{classify[shopInfo.classify]}}</div>
        </li>
        <!-- 店铺分类 end -->
        <!-- 所在地区 start -->
        <li class="shopinfo_li">
          <div class="font_blod">所在地区：</div>
          <div class="font30">{{shopInfo.area}}</div>
        </li>
        <!-- 所在地区 end -->
        <!-- 联系电话 start -->
        <li class="shopinfo_li">
          <div class="font_blod">联系电话：</div>
          <div class="font30">{{shopInfo.phone}}</div>
        </li>
        <!-- 联系电话 end -->
        <!-- 店铺标签 start -->
        <li class="shopinfo_li">
          <div class="font_blod">店铺标签：</div>
          <div class="tags">
            <span class="tag color333 bgcecece" v-for="(item, index) in shopInfo.label" :key="index">{{item}}</span>
          </div>
        </li>
        <!-- 店铺标签 end -->
        <!-- 业务介绍 start -->
        <li class="shopinfo_li">
          <div class="font_blod">业务介绍：</div>
          <div class="des" v-html="shopInfo.business">{{shopInfo.business}}</div>
        </li>
        <!-- 业务介绍 end -->
        <!-- 免责声明 start -->
        <li class="shopinfo_li">
          <tip></tip>
        </li>
        <!-- 免责声明 end -->
      </ul>
    </div>
    <!-- 店铺信息 end -->
    <!-- 查看电话 start -->
    <div class="like">
      <div class="likeleft tc">
        <div class="likenum color666" @click="addLike">
          <div class="likeimg">
            <img :src="(give ? 'static/img/like.png' : 'static/img/nolike.png')">
          </div>
          <div>{{shopInfo.give}}</div>
        </div>
        <router-link :to="{name: 'index'}" tag="div" class="shopslist color666">
          <div class="shopsimg"><img src="static/img/index.png"></div>
          <div>店铺列表</div>
        </router-link>
      </div>
      <div class="checkpay">
        <check-pay></check-pay>
      </div>
    </div>
    <!-- 查看电话 end -->
  </div>
</template>

<script>
// 引入付费查看电话组件
import CheckPay from '@/components/common/checkpay/checkpay'
// 映入免责声明组件
import tip from '@/components/common/tip/tip'

export default {
  name: 'shopInfo',
  data () {
    return {
      // 店铺等级图标资源路径
      vipClass: this.$store.state.vip,
      // 店铺分类
      classify: this.$store.state.classify,
      // 是否喜欢当前店铺
      give: false
    }
  },
  computed: {
    // 接收传过来的店铺详情
    shopInfo () {
      return this.$route.query.shopInfo
    }
  },
  components: {
    CheckPay,
    tip
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    },
    // // 检查是否喜欢当前店铺
    isLike () {
      // this.$axios.get('', this.id).then(result => {
      //   if (result.data.code === 0) {
      //     this.give = false
      //   } else if (result.data.code === 1) {
      //     this.give = true
      //   }
      // }).catch(error => {
      //   throw error
      // })
      this.give = true
    },
    // 是否添加喜欢店铺
    addLike () {
      this.give = !this.give
      // this.$axios.get('', this.id).then(result => {
      //   this.shopInfo.give = result.data
      // }).catch()
    }
  },
  created () {
    // 是否喜欢店铺
    this.isLike()
  }
}
</script>

<style scoped>
@import "static/css/shopInfo.css";

</style>
