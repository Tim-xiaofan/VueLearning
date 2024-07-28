<script setup lang="ts">
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
</script>

<template>
    <h1>局部注册</h1>
    <p>局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用</p>
    <p><strong>局部注册的组件在后代组件中不可用</strong></p>
    <ComponentA />
    <ComponentB />
</template>

<style scoped></style>