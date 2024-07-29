<script setup lang="ts">
defineEmits(['increaseBy']);
defineProps({
    id: Number,
    title: String
});
</script>

<template>
    <p>{{ title }}</p>
    <button @click="$emit('increaseBy',1)">Increase By 1</button>
</template>