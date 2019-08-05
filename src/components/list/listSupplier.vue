<template>
  <list-msg :msg_status="msg_status"></list-msg>
</template>

<script>
import ListMsg from '@/components/common/listmsg/listmsg'

export default {
  name: 'listSupplier',
  data () {
    return {
      // 列表信息，1：供应信息
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
