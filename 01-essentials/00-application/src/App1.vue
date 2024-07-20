<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('Hello App1!');
</script>

<template>
  <h2>{{ msg }}</h2>
</template>

<style>
#app1 {
  background-color: #444;
  border: solid black 2px;
  border-radius: 5px;
  padding: 1em;
  margin-top: 16px;
}
</style>