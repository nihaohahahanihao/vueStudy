<template>
  <div>
    <qrcode value="https://xkeshi.github.io/vue-qrcode/"></qrcode>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  components:{
    'qrcode': QRCode
  }
}
</script>

<style>

</style>
