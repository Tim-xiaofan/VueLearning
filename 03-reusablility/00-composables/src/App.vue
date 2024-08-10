<script setup lang="ts">
import MouseTracker from './components/MouseTracker.vue';
import AsyncState from './components/AsyncState.vue';
import AcceptingReactiveState from './components/AcceptingReactiveState.vue';
</script>

<template>
    <p>在 Vue 应用的概念中，“组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用有状态逻辑的函数。</p>
    <MouseTracker />
    <AsyncState />
    <AcceptingReactiveState />
</template>

<style scoped></style>