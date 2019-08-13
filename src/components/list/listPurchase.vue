<template>
  <list-msg :msg_status="msg_status"></list-msg>
</template>

<script>
import ListMsg from '@/components/common/listmsg/listmsg'

export default {
  name: 'listPurchase',
  data () {
    return {
      // 列表信息 1：采购信息
      msg_status: 1
    }
  },
  components: {
    ListMsg
  }
}
</script>

<style scoped>

</style>
