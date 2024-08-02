<script setup lang="ts">
import DAIChild from './DAIChild.vue';

function onClick(event: MouseEvent): void{
    alert(`${event.target.title}`);
}
</script>

<template>
    <h1>禁用 Attributes 继承</h1>
    <p>最常见的需要禁用 attribute 继承的场景就是 attribute 需要应用在根节点以外的其他元素上。通过设置 inheritAttrs 选项为 false，你可以完全控制透传进来的 attribute 被如何使用</p>
    <DAIChild class="large" @click="onClick"/>
</template>

<style scoped>
</style>