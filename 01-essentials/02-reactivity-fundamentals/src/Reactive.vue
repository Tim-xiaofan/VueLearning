<script setup lang="ts">
// 与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性
import { reactive } from 'vue';
const state = reactive({count: 0});

const raw = {}
const proxy = reactive(raw)

// 代理对象和原始对象不是全等的
console.log('proxy == raw', proxy == raw); //false
console.log('proxy === raw', proxy === raw) // false
</script>

<template>
    <h1>reactive</h1>
    <p>与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性</p>
    <button @click="state.count++">Count is: {{ state.count }}</button>
</template>

<style scoped></style>