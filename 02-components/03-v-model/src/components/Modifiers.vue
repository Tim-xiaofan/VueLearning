<script setup lang="ts">
import { ref } from 'vue';
import ModifiersChild from './ModifiersChild.vue';
const text = ref('');
</script>

<template>
    <h1>修饰符</h1>
    <p>{{ text }}</p>
    <ModifiersChild v-model="text"/>
</template>

<style scoped></style>