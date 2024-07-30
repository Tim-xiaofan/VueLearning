<script setup lang="ts">
const title =  defineModel<string>('title', {required: true});
</script>

<template>
    <input v-model="title"/>
</template>

<style scoped></style>