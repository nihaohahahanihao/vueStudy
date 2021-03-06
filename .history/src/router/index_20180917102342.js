import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import router1 from '@/components/router1'
import swiper from '@/components/swiper'
import actApp from '@/components/activecomponents/app'
// import actSonOne from '@/components/activecomponents/sonOne'
// import actSonTwo from '@/components/activecomponents/sonTwo'
// import actSonThree from '@/components/activecomponents/sonThree'
import yidongduan from '@/components/act/yidongduan'
import sponsor from '@/components/act/sponsor'
import vuex from '@/components/Vuex/vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld},
      {
      	path:"/router1",
      	component:router1
      },
      {
      	path:"/vuex",
      	component:vuex
      },
      {
      	path:"/yidongduan",
      	component:yidongduan
      },
      {
      	path:"/sponsor",
      	component:sponsor
      },
      {
      	path:"/swiper",
      	component:swiper
      },
      {
        path:"/actApp",
        component:actApp,
        // children:[
        //  {path:"/actSonOne",
        //   component:actSonOne,
        // },
        // {path:"/actSonTwo",
        //   component:actSonTwo,
        // },
        // {path:"/actSonThree",
        //   component:actSonThree,
        // }
        // ]
      }
      ]
    
    
})
