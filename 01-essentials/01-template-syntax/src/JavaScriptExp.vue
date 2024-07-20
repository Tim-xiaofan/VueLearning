<script setup lang="ts">
import { ref } from 'vue';
const number = ref(0);
const ok = ref(false);
const message = ref('Tom Jerry Spike');
const id = ref(1);

const date = ref(new Date().toLocaleDateString());
function toTitleDate(d:string):string {
  return d;
}
function formatDate(d:string):string {
  return d;
}
</script>

<template>
  <h1>使用 JavaScript 表达式</h1>
  <pre>
    {{ number + 1 }}
    {{ ok ? 'YES' : 'NO' }}
    {{ message.split(' ').reverse().join('') }}
  </pre>
  <div :id="`list-${id}`"></div>

  <h2>调用函数</h2>
  <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time>
</template>

<style scoped></style>