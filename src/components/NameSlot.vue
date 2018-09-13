<template>
    <div class="testSlot">
        <div class="noneslot">
            <slot></slot>
        </div>
        <div class="test-one">
            <slot name="one">我是具名一</slot>
        </div>
        <div class="test-two">
            <slot name="two"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
