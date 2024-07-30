<script setup lang="ts">
import { ref } from 'vue';
import UnderTheHoodChild from './UnderTheHoodChild.vue';
const text = ref<string>('');
</script>

<template>
    <h1>底层机制</h1>
    <p>{{ text }}</p>
    <!-- 一个名为 modelValue 的 prop，本地 ref 的值与其同步；
    一个名为 update:modelValue 的事件，当本地 ref 的值发生变更时触发。 -->
    <UnderTheHoodChild 
        :moduleValue="text" 
        @update:moduleValue="(value) => { text = value; }"/>
</template>

<style scoped></style>