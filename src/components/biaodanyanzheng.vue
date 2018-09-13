<template>
    <div>
        <ul>
            <li>
               <span>手机号</span> <input type="text" v-model="items.phone">
            </li>
            <li>
                <span>姓名</span> <input type="text" v-model="items.name">
            </li>
            <li>
                <span>年龄</span> <input type="text" v-model="items.age">
            </li>
            <li>
                <span @click="submit">提交</span>
            </li>
        </ul>
        <div>
     二维码生成器       

        </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
          items:{},
      }
  },

  methods: {
    submit:function(){
        if(this.items.phone == undefined || this.items.name == undefined || this.items.age == undefined){
            alert("必填项不能为空")
        }else{
            console.log(this.items)
        }
    }
  }
}
</script>

<style>

</style>
