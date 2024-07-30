<script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';
const count = ref<number>(0);
</script>

<template>
    <h1>基本用法</h1>
    <Child v-model="count"/>
</template>

<style scoped></style>