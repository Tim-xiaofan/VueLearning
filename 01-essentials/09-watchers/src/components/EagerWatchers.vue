<script setup lang="ts">
import { ref, watch } from 'vue';
const source = ref(0);
watch(
  source,
  (newValue, oldValue) => {
    console.log(`immediate: newSource: ${newValue}, oldSource: ${oldValue}`);
  },
  //  立即执行，且当 `source` 改变时再次执行
  {immediate: true}
);
</script>

<template>
  <h1>即时回调的侦听器</h1>
  <button @click="source++">Source</button>
</template>

<style scoped></style>