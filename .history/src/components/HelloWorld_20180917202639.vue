<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link target="_blank" to="router1">
          awesome-vue
        </router-link>
      </li>
      <li>
      	 {{items.message}}
      </li>
      <li><router-link to="swiper" target="_blank">轮播图</router-link></li>
    </ul>
    <!-- <ul v-for="i in items">
    	<li>{{i.message}}</li>
    	<li>{{i.type}}</li>
    	<li>{{i.time}}</li>
    </ul> -->
    <!-- 这里是solt 单个插槽-->
    <solt slot="header">111</solt>
    <!-- 这里是具名插槽 -->
    <div>
      <name-slot>
        <div slot="one">
          <span>one</span>
          <span>第一个</span>
        </div>
        <div slot="two">
          <span>two</span>
          <span>第二个</span>
        </div>
      </name-slot>
    </div>
    <!-- 作用域插槽 -->
    <div>
      <p style="color:#e4394c">作用域插槽</p>
      <scoped-slot :items = "item">
      <template slot-scope="props">
        <span>{{props.cname}}</span>
        <span>{{props.addr}}</span>
        <span>{{props.age}}</span>
      </template>
      </scoped-slot>
    </div>
    <div>
      <router-link to="actApp">前去动态组件页面</router-link>
    </div>
    <div>
      <router-link to="baoming">去往活动报名页面</router-link>
    </div>
     <div>
      <router-link to="fabu">去往发布活动页面</router-link>
    </div>
    <div>
      <router-link to="sponsor">去往成为赞助商页面</router-link>
    </div>
        <div>
      <router-link to="yidongduan">前往移动端页面</router-link>
    </div>
        <div>
      <router-link to="vuex">前往Vuex页面</router-link>
    </div>
    <div>
      <router-link to="vuex">前往Vuex页面</router-link>
    </div>
  </div>
</template>

<script>
import solt from "@/components/solt"
import NameSlot from "@/components/NameSlot"
import scopedSlot from "@/components/scopedSlot"
	export default {
	name: 'HelloWorld',
  components:{
     solt,
     NameSlot,
     scopedSlot
  },
	data() {
		return {
			items:[],
      index:1,
      item:[
        { age:'文字1' , cname:'tom' , addr:'usa' },
        { age:'文字2' , cname:'wangwu' , addr:'uk' },
        { age:'文字3' , cname:'zhangsan' , addr:'un' }
      ]
		}
	},
	 created () {
    fetch('https://www.easy-mock.com/mock/5b33246df3843242266468af/example/mock').then((e) => {
      return e.json();
    }).then((e) => {
      console.log(e)

      this.items = e.items
    }
      )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}</style>
