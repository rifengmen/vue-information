<template>
    <div class="container">
        <!-- 用户信息 start -->
        <my-header></my-header>
        <!-- 用户信息 end -->
      <div>{{test}}</div>
      <!-- 底部导航 start -->
      <my-footer></my-footer>
      <!-- 底部导航 end -->
    </div>
</template>

<script>
import MyHeader from '@/components/common/header/myheader'
import MyFooter from '@/components/common/footer/myfooter'
export default {
  name: 'userInfo',
  data () {
    return {
      test: '这是个人中心页面'
    }
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style scoped>

</style>
