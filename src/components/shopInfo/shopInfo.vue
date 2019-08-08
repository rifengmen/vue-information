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
          <div class="des">{{shopInfo.business}}</div>
        </li>
        <!-- 业务介绍 end -->
        <!-- 免责声明 start -->
        <li class="shopinfo_li">
          <div @click="tip">免责声明</div>
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
    CheckPay
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
    },
    // 免责声明
    tip () {
      this.$message({
        message:
          '<div class="color666" style="padding: .1rem">\n' +
          '  <div class="font28 font_blod color1470cc" style="margin: .1rem 0">免责声明</div>\n' +
          '  <div style="padding: .06rem 0;line-height: 1.5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本平台所提供的信息，只供参考之用，不承担任何法律责任。</div>\n' +
          '  <div style="padding: .06rem 0;line-height: 1.5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本平台在此声明,不承担用户就使用或未使用本平台所提供的信息所引致的任何直接、间接、附带、从属、特殊、惩罚性的损害赔偿（包括但不限于收益、预期利润的损失或失去的业务、未实现预期的节省）。</div>\n' +
          '  <div style="padding: .06rem 0;line-height: 1.5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;凡以任何方式登陆本平台或直接、间接使用本平台资料者，视为自愿接受本平台声明的约束。</div>\n',
        showClose: true,
        dangerouslyUseHTMLString: true,
        duration: 0
      })
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
