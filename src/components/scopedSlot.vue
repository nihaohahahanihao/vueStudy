<template>
    <div class="hello">
        <slot :cname="items[1].cname"></slot>
        <slot :addr="items[1].addr"></slot>
        <slot age="18"></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            num: 100
        }
    },
    props:[
        'items'
    ],
    created(){
        console.log("items",this.$props.items)
    }
}
</script>

<style>

</style>
