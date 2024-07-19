<script setup lang="ts">
const pros = defineProps({
    msg: String,
});
</script>

<template>
    <h2> {{ msg || 'No pros passed yet' }} </h2>
</template>