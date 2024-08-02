<script setup lang="ts">
import MyButton from './MyButton.vue';
import MyButton1 from './MyButton1.vue';

function onClick(event: MouseEvent): void{
    alert(`${event.target.title}`);
}
</script>

<template>
    <h1>Atrributes 继承</h1>
    <p>如果一个子组件的根元素已经有了 class 或 style attribute，它会和从父组件上继承的值合并</p>
    <h3>对 class 和 style 的合并</h3>
    <MyButton class="large" />
    <MyButton />
    <h3>v-on 监听继承</h3>
    <!-- click 监听器会被添加到 <MyButton> 的根元素 -->
    <MyButton @click="onClick"/>
    <h3>深层组件继承</h3>
    <MyButton1 class="large" @click="onClick"/>
    
</template>

<style scoped>
button {
    display: block;
}
</style>