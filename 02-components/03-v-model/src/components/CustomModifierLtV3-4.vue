<script setup lang="ts">
import { ref } from 'vue';
import CustomModifierChildLtV34 from './CustomModifierChildLtV3-4.vue';
const text = ref('');
</script>

<template>
    <h1>3.4 版本以下，自定义修饰符</h1>
    <p>首字母大写: {{ text }}</p>
    <CustomModifierChildLtV34
        :modelValue="text" 
        :modelModifiers="{capitalize: true}"
        @update:modelValue="(value:string): void => { text = value}"
    />
</template>

<style scoped></style>