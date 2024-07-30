<script setup lang="ts">
import { ref } from 'vue';
import ModelArgumentsChild from './ModelArgumentsChild.vue';

const text = ref('');
</script>

<template>
    <h1>v-model 参数</h1>
    <p>{{ text }}</p>
    <ModelArgumentsChild v-model:title="text"/>
</template>

<style></style>