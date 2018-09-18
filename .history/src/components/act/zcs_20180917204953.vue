<template>
  <div>
    <div id="qrcode">二维码位置</div>
  </div>
</template>

<script>
import QRCode from 'vue-qrcode'
export default {
mounted () {
    this.qrcode()
},
methods: {
    qrcode () {
      let qrcode = new QRCode('qrcode', {
        width: 100,
        height: 100, // 高度
        text: 'http://baidu.com' // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      })
      console.log(qrcode)
    }
  }
}
</script>

<style>

</style>
