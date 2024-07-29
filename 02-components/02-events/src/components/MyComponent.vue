<script setup lang="ts">
defineEmits(['someEvent']);
</script>

<template>
    <button @click="$emit('someEvent')">Click me</button>
</template>

<style scoped></style>