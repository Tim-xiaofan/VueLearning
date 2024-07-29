<script setup lang="ts">
import ComponentC from './ComponentC.vue';
function onSubmit(event:MouseEvent, email:string, passward:string):void {
    alert(`event:${event.target.tagName}, email: ${email}, passward: ${passward}`);
}
</script>

<template>
    <h1>事件校验</h1>
    <ComponentC @submit="onSubmit"/>
</template>

<style scoped></style>