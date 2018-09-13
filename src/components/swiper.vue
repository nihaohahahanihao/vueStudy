<template>
	<div>
	<vueCropper
	ref="cropper2"
	:img="example2.img"
	:outputSize="example2.size"
	:outputType="example2.outputType"
	:info="example2.info"
	:canScale="example2.canScale"
	:autoCrop="example2.autoCrop"
	:autoCropWidth="example2.autoCropWidth"
	:autoCropHeight="example2.autoCropHeight"
	:fixed="example2.fixed"
	:fixedNumber="example2.fixedNumber"
></vueCropper>
</div>
</template>
<script>
	import VueCropper from 'vue-cropper'
export default {
  data: function () {
    return {
			example2: {
				img: 'http://ofyaji162.bkt.clouddn.com/bg1.jpg',
				info: true,
				size: 1,
				outputType: 'jpeg',
				canScale: false,
				autoCrop: true,
				// 只有自动截图开启 宽度高度才生效
				autoCropWidth: 300,
				autoCropHeight: 250,
				// 开启宽度和高度比例
				fixed: true,
				fixedNumber: [4, 3]
			}
		}
   }
 }
</script>
