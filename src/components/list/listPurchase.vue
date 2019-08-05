<template>
  <list-msg :msg_status="msg_status"></list-msg>
</template>

<script>
import ListMsg from '@/components/common/listmsg/listmsg'

export default {
  name: 'listPurchase',
  data () {
    return {
      // 列表信息 2：采购信息
      msg_status: 2
    }
  },
  components: {
    ListMsg
  }
}
</script>

<style scoped>

</style>
