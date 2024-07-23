<script setup lang="ts">
</script>

<template>
  <h1>v-if</h1>
  <button @click="awesome = !awesome">Toggle</button>
  <h3 v-if="awesome">Vue is awesome</h3>

  <!-- v-else -->
  <h3 v-else> Oh no 😢</h3>

  <h1>v-else-if</h1>
  <button @click="index++">Toggle</button>
  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>

  <h1>&lt;template &gt; 上的 v-if</h1>
  <button @click="ok = !ok">Toggle</button>
  <template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
</template>

<style scoped></style>