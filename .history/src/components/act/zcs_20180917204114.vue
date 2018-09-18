<template>
  <div>
    <p>二维码生成</p>
    <div>
      <vue-q-art :config="config"></vue-q-art>
    </div>
  </div>
</template>

<script>
import VueQArt from 'vue-qart'
export default {
  name:'zcs',
  components:{
    VueQArt
  },
  data () {
      return {
          config: {
              value: 'https://www.baidu.com',
          }
      }
  }
}
</script>

<style>

</style>
