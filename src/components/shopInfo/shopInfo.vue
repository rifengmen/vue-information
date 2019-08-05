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
        <li>
          <div>
            <img :src="shopInfo.img">
          </div>
          <div>
            <img v-if="vipClass[shopInfo.vip]" :src="vipClass[shopInfo.vip]">
          </div>
          <div>
            <span>{{shopInfo.updateTime}}更新</span>
          </div>
        </li>
        <li>
          <div class="font_blod">店铺名称：</div>
          <div>{{category[shopInfo.category]}}</div>
        </li>
      </ul>
    </div>
    <!-- 店铺信息 end -->
    <!-- 查看电话 start -->
    <div class="like">
      <div class="likeleft">
        <div class="likenum">
          <div>
            <img :src="(isLike ? 'static/img/like.png' : 'static/img/nolike.png')">
          </div>
          <div>{{like}}</div>
        </div>
        <div>
          <div><img src="static/img/index.png"></div>
          <div>店铺列表</div>
        </div>
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
      // 店铺详情
      shopInfo: {},
      // 店铺等级图标资源路径
      vipClass: this.$store.state.vip,
      // 店铺分类
      category: this.$store.state.category,
      // 是否喜欢当前店铺
      likes: false
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
    // 获取店铺详情
    getShopInfo () {
      // let shopid = this.$route.query.shopid
      // this.$axios.get('', shopid).then(result => {
      //   if (result.data.code === 0) {
      //     this.$message.error(result.data.msg)
      //   } else if (result.data.code === 1) {
      //     this.shopInfo = result.data.data
      //   }
      // }).catch(error => {
      //   throw error
      // })
      this.shopInfo = {
        // 店铺门脸图片
        img: 'static/img/userimg.png',
        // 店铺名称
        name: '测试企业1',
        // 所属分类
        category: '5',
        // vip等级
        vip: '',
        // 所处地区
        site: '测试城市1',
        // 店铺标签
        tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
        // 店铺介绍
        des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介',
        // 店铺信息更新时间
        updateTime: '2019-07-27 12:00:00',
        // 点赞数量
        like: '53'
      }
    },
    // 检查是否喜欢当前店铺
    isLike () {

    }
  },
  created () {
    this.getShopInfo()
    this.isLike()
  }
}
</script>

<style scoped>

</style>
