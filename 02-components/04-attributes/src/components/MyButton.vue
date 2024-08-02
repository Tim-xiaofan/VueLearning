<script setup lang="ts">
import { useAttrs } from 'vue';
// 在 JavaScript 中访问透传 Attributes
const attrs = useAttrs();
console.log('In JavaScript: ', attrs);
</script>

<template>
    <button class="btn" title="my-button">MyButton</button>
</template>

<style scoped>
.large {
    background-color: antiquewhite;
    font-size: large;
    cursor: pointer;
}
</style>