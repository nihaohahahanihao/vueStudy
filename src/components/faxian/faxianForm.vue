<template>
  <div class="main-discover">
    <div class="templayPreview">
    </div>
    <div class="modify">
      <ul>
        <li>
          <p class="title"><span>*</span>模块名称:</p>
          <p class="content">
          <input type="text" v-model="formData.name" placeholder="请输入模板名称">
          </p>
        </li>
        <!-- <li>
          <span>*</span>模块排序: <input type="text" v-model="formData.modules.desc">
        </li> -->
        <li>
          ICON图标:
        </li>
        <li class="templayStyle">
          <p class="title"><span>*</span>模块版式:</p>
          <span v-for="(dis,index) in discoverLayout" :key="index" class="smailStyle" :class="{active:index+1==templateId}"
           @click="chose(dis.id)" :data-num = "index">{{dis.name}}</span>
        </li>
        <li>
          <p class="title"><span>*</span>模块数据源:</p>
          <p class="content">
          <input type="text" v-model="formData.source_id" placeholder="请输入模板名称">
          </p>
        </li>
        <li>
          <p class="title"><span></span>展示条件:</p>
          <p class="content">
          <input type="text" v-model="formData.limit" placeholder="请输入模板名称">
          </p>
          <p>111111111111</p>
        </li>
        <li>
          <p class="title"></p>
          <p class="content">
          <span class="button green" @click="submit">确认</span>
          <span class="button btn-boder">取消</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import discoverApi from '@/http/api/ajax/bossDiscover'
export default {
  data () {
    return {
      discoverLayout: [
        {
          key: 'slide',
          id: 1,
          name: '轮播图'
        },
        {
          key: 'small',
          id: 2,
          name: '文章小图'
        },
        {
          key: 'scroll',
          id: 3,
          name: '滚动模版'
        },
        {
          key: 'xueyuan',
          id: 4,
          name: '学院模版'
        },
        {
          key: 'activity',
          id: 5,
          name: '活动模版'
        },
        {
          key: 'ad',
          id: 6,
          name: '推广'
        },
        {
          key: 'ad',
          id: 7,
          name: '专栏'
        },
        {
          key: 'tag',
          id: 8,
          name: '标签'
        }
      ],
      templateId: '',
      formData: [],
      formObj: {},
      is_app: 1,
      is_m: 0,
      is_sp: 0
    }
  },
  methods: {
    chose (id) {
      this.templateId = id
    },
    submit () {
      this.formData.template = this.templateId
      this.formObj.modules = this.formData
      this.formObj.id = 1
      this.formObj.name = '布局样式一'
      this.formObj.is_app = this.is_app
      this.formObj.is_m = this.is_m
      this.formObj.is_sp = this.is_sp
      console.log(this.formObj)
      discoverApi.bossDiscover(
        this.formObj
      ).then(res => {
        console.log(res)
      })
      .catch(msg => {
        console.log(msg)
      })
    }
  }
}
</script>

<style>
.templayStyle{
  height: 90px!important;
}
.content{
  float: left;
  width:310px;
  height: 30px;
}
.content input{
  float: left;
  width:100%;
  height: 30px;
}
.title{
  width:80px;
  height: 40px;
  float: left;
  margin-right: 5px;
  line-height: 40px;
}
.title span{
  color: red;
}
.equipment{
  margin-top: 10px;
}
.modify{
  width: 500px!important;
  height: 500px;
  border: 1px solid;
  position: absolute;
  top:76px;
  left:64px;
  font-size: 14px;
}
.modify li{
  list-style: none;
  margin-top: 20px;
  height:50px;
}
.smailStyle{
  display: inline-block;
  width: 60px;
  height: 40px;
  border:1px solid;
  line-height: 40px;
  text-align: center;
  margin-right: 20px;
  margin-top:10px;
}
.main-discover{
  width:700px;
  height: 700px;
}
.button{
  width:50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  display: inline-block;
}
.button:hover{
  cursor: pointer;
}
.green{
  background: green;
}
.btn-boder{
  border:1px solid #eee;
}
input{
  border-radius:none!important;
}
.active{
  background: #e4393c;
}
</style>
