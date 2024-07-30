<script setup lang="ts">
import { ref } from 'vue';
import CustomModifierChild from './CustomModifierChild.vue';

const text = ref('');
</script>

<template>
    <h1>v-module 自定义修饰符</h1>
    <p>首字母大写: {{ text }}</p>
    <CustomModifierChild v-model.capitalize="text"/>
</template>

<style scoped></style>