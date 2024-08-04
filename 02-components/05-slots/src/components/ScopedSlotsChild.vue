<script setup lang="ts">
import { ref } from 'vue';

const greeting = ref('Hello');
</script>

<template>
    <div>
        <slot :text="greeting" :count="1"> </slot>
    </div>
</template>

<style scoped></style>