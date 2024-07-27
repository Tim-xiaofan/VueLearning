<script setup lang="ts">
import { ref, watch } from 'vue';

const source = ref(0);
watch(
  source,
  (newSource, oldSource) => {
    alert(`once: newSource: ${newSource}, oldSource: ${oldSource}`);
  },
  { once: true }
);
</script>

<template>
  <h1>一次性侦听器</h1>
  <button @click="source++">source: {{ source }}</button>
</template>

<style scoped></style>