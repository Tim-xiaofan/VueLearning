<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('Hello App!');
</script>

<template>
  <h2>{{ msg }}</h2>
</template>

<style>
#app {
  background-color: aqua;
  border: solid black 2px;
  border-radius: 5px;
  padding: 1em;
}
</style>