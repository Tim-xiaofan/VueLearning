<script setup lang="ts">
// 我们在 <template> 中使用的 $emit 方法不能在组件的 <script setup> 部分中使用，
// 但 defineEmits() 会返回一个相同作用的函数供我们使用
const emit = defineEmits(['inFocus', 'submit']);

function buttonClick(event) {
    emit('submit', event);
}
</script>

<template>
    <button @click="buttonClick">Button click</button>
</template>

<style scoped></style>