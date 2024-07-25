<script setup lang="ts">
function greet(event: MouseEvent): void {
  alert(`Hello: ${event.target.tagName}`);
}
</script>

<template>
  <h1>方法事件处理器</h1>
  <button @click="greet">Greet</button>
</template>

<style scoped></style>