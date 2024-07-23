<script setup lang="ts">
import { ref } from 'vue';

const ok = ref(false);
</script>

<template>
    <h1>v-show</h1>
    <button @click="ok = !ok">Toggle</button>
    <h3 v-show="ok">Hello!</h3>
    <h3>After Hello!</h3>
</template>

<style scoped></style>