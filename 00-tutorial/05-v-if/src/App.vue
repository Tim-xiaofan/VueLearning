<script setup>
import { ref } from 'vue';

const awesome = ref(true);

function toggle() {
  awesome.value = !awesome.value;
}

</script>

<template>
  <button @click="toggle">Toggle</button>
  <!-- 条件渲染：在两个 h1 之前切换 -->
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>