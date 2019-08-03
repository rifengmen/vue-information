<template>
  <div class="container">
    <!-- 用户信息 start -->
    <my-header></my-header>
    <!-- 用户信息 end -->
    <!-- 筛选条件 start -->
    <div class="search_cont color666">
      <div class="category">
        <el-select v-model="searchData.classify">
          <el-option
            v-for="(item, index) in category_msg"
            :key="index"
            :label="item"
            :value="index">
          </el-option>
        </el-select>
        <div class="site">
          <div @click="choose" class="choose tc colorcecece">
            <div class="font26">{{searchData.site || '地区选择'}}</div>
            <img src="static/img/turnup.png" :class="(turnimg ? 'turnimg' : '')">
          </div>
          <p class="pwrap bgfff" v-if="show">
            <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
          </p>
        </div>
      </div>
    </div>
    <!-- 筛选条件 end -->
    <!-- 底部导航 start -->
    <my-footer></my-footer>
    <!-- 底部导航 end -->
  </div>
</template>

<script>
import MyHeader from '@/components/common/header/myheader'
import MyFooter from '@/components/common/footer/myfooter'
export default {
  name: 'listSupplier',
  data () {
    return {
      // 筛选条件
      searchData: {
        // 信息分类
        category_msg: 0,
        // 地区查询
        site: ''
      }

    }
  },
  computed: {
    // 信息分类
    category_msg () {
      return this.$store.state.category_msg
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
