<script setup lang="ts">
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
function onSubmit(event: MouseEvent) {
    alert(`submit: ${event.target.tagName}`);
}
</script>

<template>
    <h1>声明触发的事件</h1>
    <ComponentA @submit="onSubmit" />
    <h3>类型检查</h3>
    <ComponentB @submit="onSubmit" />
</template>

<style scoped></style>