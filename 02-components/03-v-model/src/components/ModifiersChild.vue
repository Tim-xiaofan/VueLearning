<script setup lang="ts">
// 必填
const model = defineModel({required: true});
</script>

<template>
    <input v-model="model" />
</template>

<style scoped></style>