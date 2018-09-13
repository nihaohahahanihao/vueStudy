<template>
    <div>
        <button @click="change()">切换页面</button>
        <component :is="currentView">
        </component>
    </div>
</template>

<script>
import sonOne from '@/components/activeComponents/sonOne'
import sonTwo from '@/components/activeComponents/sonTwo'
import sonThree from '@/components/activeComponents/sonThree'


export default {
    data () {
        return{
            index: 0,
            arr:['sonOne','sonTwo','sonThree']
        }
    },
    components:{
     sonOne,
     sonTwo,
     sonThree,
    },
    computed:{
        currentView(){
            return this.arr[this.index]
        }
    },
    methods:{
        change(){
            this.index = (++this.index)%3
        }
    }
}
</script>

<style>

</style>
