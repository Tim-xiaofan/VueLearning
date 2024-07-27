<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';

// https://jsonplaceholder.typicode.com/todos/

const todoId = ref(1);
const data = ref('');
watch(
  todoId,
  async () => {
    data.value = 'Loading';
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
      data.value = await res.json();
    } catch (error) {
      data.value = `Failed fetch: ${error}`;
    }
  },
  { immediate: true }
);

const todoId1 = ref(1);
const data1 = ref('');
// (1) 回调会立即执行，不需要指定 immediate: true
// (2) 不再需要明确传递 todoId 作为源值
// (3) 对于有多个依赖项的侦听器来说，使用 watchEffect() 可以消除手动维护依赖列表的负担
// (4) watchEffect() 可能会比深度侦听器更有效
watchEffect(async ()=> {
  data1.value = 'Loading';
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId1.value}`);
    data1.value = await res.json()
  } catch (error) {
    data1.value = `Failed fetch: ${error}`;
  }
});
</script>

<template>
  <h1>watchEffect</h1>
  <h3>非 watchEffect</h3>
  <p>data: {{ data }}</p>
  <button @click="todoId++">todoId++</button>

  <h3>watchEffect</h3>
  <p>data1: {{ data1 }}</p>
  <button @click="todoId1++">todoId1++</button>
</template>

<style></style>