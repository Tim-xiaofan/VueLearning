<script setup lang="ts">
// 使用纯类型标注来声明触发的事件
const emit = defineEmits<{
    (e: 'submit', event: MouseEvent): void
}>();

function buttonClick(event: MouseEvent) {
    emit('submit', event);
}
</script>

<template>
    <button @click="buttonClick">Button click</button>
</template>

<style scoped></style>