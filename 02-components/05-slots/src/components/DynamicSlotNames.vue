<script setup lang="ts">
import { ref } from 'vue';
import Card from './Card.vue';

const headerSlotName =  ref('header');
const footerSlotName = ref('footer');
</script>

<template>
    <h1>动态插槽名</h1>
    <Card>
        <template v-slot:[headerSlotName]></template>
        <template v-slot:default></template>
        <template #[footerSlotName]></template>
    </Card>
</template>

<style scoped></style>