<script setup lang="ts">
import { inject } from 'vue';
import Provide from './components/Provide.vue';

const appName = inject('appName');
console.log('appName: ', appName);
</script>

<template>
    <Provide></Provide>
</template>

<style scoped></style>