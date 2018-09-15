<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <image-upload
      class="image_upload"
      url='https://tsesb.yunjuhe.com.cn/medicalServer/doctor/uploadServerImage'
      :touch-size = 1
      :multiple = true
      field-name = 'serverImgFile'
      :max-count = 10
      @chooseImages='bindtap_chooseImages'
    />

    <img :src="image.src" alt="" v-for="(image , i) in images" @click="bingtap_preview(i)" :key=i>

    <!-- 图片预览 -->
    <image-preview
      :images="preImages"
      v-model="index"
      :numIsShow="true"
      :deleteIsShow="true"
      @delete="bindtap_delete"
    />

    <div @click="bindtap_upload">
      上传
    </div>

  </div>
</template>

<script>

import {ImageUpload , ImagePreview} from 'vue-image-upload-preview'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      images:[],
      index:-1,
    }
  },
  computed:{
    // 预览图片路径
    preImages(){
      return this.images.map(v=>{return v.src});
    },
  },
  methods:{
    bindtap_chooseImages (res) {
      if (Array.isArray(res)) {
        this.images = this.images.concat(res)
      }else {
        console.log(res)
      }
    },
    bindtap_delete(){
      this.images = this.images.filter((v,i) => {
        return this.index != i
      })
    },
    bingtap_preview (i) {
      this.index = i
    },
    bindtap_upload () {
      console.log(11111)
    },
    bingtap_hiddenImg () {
      this.index = -1
    }
  },
  components: {
    'image-preview':ImagePreview,
    'image-upload':ImageUpload
  }
}
</script>

<style>
img{height: 60px;width: 60px}
.image_upload{  height: 60px; width: 60px;border: 1px solid #eee;}

</style>
